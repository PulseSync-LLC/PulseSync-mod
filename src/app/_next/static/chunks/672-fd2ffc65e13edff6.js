(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [672],
    {
        1037: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => m });
            var i = a(67379),
                l = a(17850),
                s = a(59450),
                n = a(71035),
                o = a(79670),
                r = a(26742),
                d = a(25488),
                c = a(97952),
                u = a(84e3);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: v, blockPosX: p, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let d = {
                        to: s,
                        objectType: x,
                        objectId: _,
                        objectPosX: j,
                        objectPosY: g,
                        hash: e,
                        pageId: r,
                        mainObjectType: f,
                        mainObjectId: A,
                        entityType: v,
                        entityId: b,
                        entityPosX: p,
                        entityPosY: h,
                        objectsCount: y,
                        from: r,
                    };
                    n && (d.deepLink = n);
                    let c = (0, i.F)({ params: d, logger: t, context: 'useSendEventOnDonationNavigated' });
                    c && (0, l.QS)(a.evgenInstance, c);
                });
            };
        },
        1361: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        2710: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => l });
            var i = a(52393);
            let l = (e) => e === i.K.EXPLICIT;
        },
        4805: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                n = a(61493),
                o = a(50209),
                r = a(27954),
                d = a(74756),
                c = a(41544),
                u = a(61801),
                m = a(39099),
                b = a(57963),
                v = a.n(b);
            let p = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: p } = e,
                    h = (0, o.D)({ playContextParams: b, entityId: t.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, r.g)(),
                    _ = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: v().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(c.j, { withArtistLink: !x, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: _,
                    controls: (0, i.jsx)(d.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        7784: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => m });
            var i = a(25839),
                l = a(82298),
                s = a(61493),
                n = a(4071),
                o = a(66738),
                r = a(86869),
                d = a(6323),
                c = a(93222),
                u = a.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: c, className: m, withPlusBadge: b, onClick: v, 'aria-label': p, customCover: h, buttonClassName: x } = e;
                return (0, i.jsxs)(r.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, l.$)(u().root, m, { [u().root_hoverable]: !!v }),
                    children: [
                        (0, i.jsx)(n.$, {
                            className: (0, l.$)(u().coverButton, x),
                            onClick: v,
                            'aria-label': p,
                            tabIndex: v ? 0 : -1,
                            disabled: !v,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: h || (0, i.jsx)(d.B, { fit: 'cover', src: a, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        b && (0, i.jsx)(o.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8266: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        10684: (e) => {
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
        10944: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                n = a(74631),
                o = a(23976),
                r = a(27954),
                d = a(56918),
                c = a.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, r.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(c().root, t),
                    children: [
                        (0, i.jsx)(o.W, { className: c().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(o.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(o.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        11560: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(25839),
                l = a(89288);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        21171: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        22293: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(74631),
                l = a(67379),
                s = a(36619),
                n = a(76945),
                o = a(59450),
                r = a(71035),
                d = a(84e3),
                c = a(79670),
                u = a(97952);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, o.st)(),
                    m = (0, d.U)(),
                    { hash: b } = (0, o.gf)(),
                    { pageId: v } = (0, u.$)(),
                    p = (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !v ||
                            !b ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[v];
                        if (!t) return;
                        let i = {
                                hash: b,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            o = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        o && (0, n.ID)(a.evgenInstance, o);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && p();
                    }, [t, p]),
                    (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || p({ deepLink: e });
                    })
                );
            };
        },
        23347: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        23430: (e) => {
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
        24323: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        27954: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => s, g: () => n });
            var i = a(74631),
                l = a(36432);
            let s = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        28087: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(38832);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        28764: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(74631),
                l = a(71035),
                s = a(27954);
            a(44806);
            var n = a(6969),
                o = a(25895),
                r = (a(28087), a(38832)),
                d = (a(8266), a(83918));
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
                        e.delete(n.K.CLID);
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
                    v = (0, l.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    p = (0, l.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [n.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: p,
                    checkIsCurrentAlbumPage: v,
                };
            };
        },
        30012: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        30787: (e, t, a) => {
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
        31892: (e) => {
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
        33005: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => m });
            var i = a(25839),
                l = a(88204),
                s = a(74631),
                n = a(39004),
                o = a(89288),
                r = a(61493),
                d = a(4071),
                c = a(66738);
            let u = (0, l.PA)((e) => {
                    let { onClick: t, className: a, size: l = 's', iconSize: s = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: b } = (0, n.A)();
                    return (0, i.jsx)(d.$, {
                        ref: u,
                        size: l,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: a,
                        'aria-label': b({ id: 'donation.button-text' }),
                        icon: (0, i.jsx)(c.I, { size: s, variant: 'ruble' }),
                        ...(0, o.OZ)(m),
                        'data-test-id': r.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        33458: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => s });
            var i = a(56829),
                l = a(86584);
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
        33920: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        34546: (e, t, a) => {
            'use strict';
            function i(e) {
                return e.map((e) => e.name).join(', ');
            }
            a.d(t, { j: () => i });
        },
        36648: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(25839),
                l = a(82298),
                s = a(23976),
                n = a(89728),
                o = a.n(n);
            let r = (e) => {
                let { className: t, textClassName: a, isActive: n } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(o().root, t), children: (0, i.jsx)(s.W, { className: (0, l.$)(o().text, a), isActive: n, radius: 's' }) });
            };
        },
        40496: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        41242: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(22403);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        42057: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(25839),
                l = a(82298),
                s = a(74631),
                n = a(89288),
                o = a(5365),
                r = a(18412),
                d = a(80986),
                c = a(98547),
                u = a.n(c);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: c,
                            containerClassName: m,
                            headingVariant: b,
                            title: v,
                            viewAllActionLink: p,
                            description: h,
                            children: x,
                            ..._
                        } = e,
                        j = (0, s.useId)(),
                        g = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, n.OZ)(_),
                        children: [
                            (0, i.jsx)(r.T, {
                                className: c,
                                labeledForId: j,
                                title: v,
                                description: h,
                                viewAllActionLink: p,
                                controls: (0, i.jsx)(d.X, { className: u().controls, carouselRef: g }),
                                headingVariant: b,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(o.F, { ref: g, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': j, children: x }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        42722: (e) => {
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
        43464: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => l });
            let i = new Set(Object.values(a(85705).M)),
                l = (e) => 'string' == typeof e && i.has(e);
        },
        47127: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        48127: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => i });
            let i = { ABOUT: 'about', TRACKS: 'track-list' };
        },
        49200: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => c });
            var i = a(84059),
                l = a(74631),
                s = a(49337),
                n = a(96618),
                o = a(30787),
                r = a(6969);
            let d = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                c = () => {
                    let e = (0, i.useSearchParams)(),
                        { theme: t } = (0, n.W)();
                    return (0, l.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', d[t]);
                            let l = e.get(r.K.UTM_CAMPAIGN);
                            return (l && i.set('meta', 'campaignid_'.concat(l)), (0, o.C)(a, i));
                        },
                        [t, e],
                    );
                };
        },
        52312: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => d });
            var i = a(84361),
                l = a(74631),
                s = a(71035),
                n = a(89192),
                o = a(27954);
            let r = { width: 400, height: 400 },
                d = (e) => {
                    let { count: t, getEstimateSize: a, gap: d, containerRef: c, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: b } = (0, n.g)(),
                        v = (0, l.useRef)(new Map()),
                        p = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: d,
                            estimateSize: (e) => {
                                let t = v.current.get(String(e));
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
                        j = m ? x : _,
                        g = (0, s.c)(() => {
                            j.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== v.current.get(a) && (v.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: j, resizeObserver: p.current }
                    );
                };
        },
        52393: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { K: () => i }),
                (function (e) {
                    ((e.EXPLICIT = 'explicit'), (e.CLEAN = 'clean'));
                })(i || (i = {})));
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(25839),
                l = a(82298),
                s = a(88204),
                n = a(74631),
                o = a(8487),
                r = a(61493),
                d = a(71035),
                c = a(4071),
                u = a(4254),
                m = a(36484),
                b = a(62562),
                v = a(21784),
                p = a(53712),
                h = a(85686),
                x = a(12929),
                _ = a(95067),
                j = a(97522),
                g = a(71472),
                y = a.n(g);
            let A = {
                    [x.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, s.PA)((e) => {
                    var t;
                    let { modalState: a, data: s, onClose: g, className: f } = e,
                        C = null != s ? s : null == a ? void 0 : a.modalData,
                        k = (0, v.W)(),
                        T = (0, h.Z)(p.Z.main.href),
                        N = (0, b.N)().get(m.U2),
                        P = (0, d.c)(() => {
                            if (g) return g();
                            (k.canBack && k.back(), T());
                        }),
                        I = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, d.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(_.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                s =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? N.set(_.c.ExEx, [...t, s], { expires: new Date(l) }) : N.set(_.c.ExEx, [s], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        L = (0, d.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), k.canBack && k.back(), T()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let S = (0, n.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(y().title, y().text),
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(j.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: y().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = C.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [C, I]),
                        E = (0, n.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, i.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && A[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, i.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: P,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, P, L],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(y().root, f),
                        'data-test-id': r.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: y().container, children: [S, E] }),
                    });
                });
        },
        56918: (e) => {
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
        57024: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => s, UC: () => n, dM: () => o, uV: () => r });
            var i = a(93690),
                l = a(58848);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
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
                r = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        57963: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        58091: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        58301: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(25839),
                l = a(82298),
                s = a(23976),
                n = a(90923),
                o = a.n(n);
            let r = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(o().shimmer, o().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                d = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(r, { isActive: e }, a));
        },
        58509: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(89288),
                l = a(49337),
                s = a(96618);
            let n = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: n } = (0, i.E2)(e),
                        o = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(n, ', ').concat(o, ')');
                }
            };
        },
        58848: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59132: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => aX });
            var pulseSyncHeaderReact = a(74631),
                pulseSyncHeaderJsx = a(25839),
                pulseSyncHeaderText = a(4254),
                pulseSyncHeaderIcon = a(66738),
                pulseSyncHeaderClassNames = a(82298);

            var i = a(25839),
                l = a(88204),
                s = a(84059),
                n = a(74631),
                o = a(36619),
                r = a(61493),
                d = a(49656),
                c = a(99430),
                u = a(8487),
                m = a(71035),
                b = a(4071),
                v = a(66738),
                p = a(4254),
                h = a(53712),
                x = a(85686),
                _ = a(27954),
                j = a(42722),
                g = a.n(j);
            let y = (0, l.PA)(() => {
                let { slam: e } = (0, _.g)(),
                    t = (0, x.Z)(h.Z.mymusicDownloadsTracks.href),
                    a = (0, x.Z)(h.Z.settings.href),
                    l = (0, m.c)(() => {
                        window.location.href = h.Z.main.href;
                    }),
                    s = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(u.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(u.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    o = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(b.$, {
                                      onClick: a,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(b.$, {
                                      onClick: l,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(p.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [l, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: g().root,
                    children: (0, i.jsxs)('div', {
                        className: g().container,
                        children: [
                            (0, i.jsx)(v.I, { className: g().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(p.DZ, { className: g().title, variant: 'div', size: 'xs', children: s }),
                            (0, i.jsx)(p.HL, {
                                className: g().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(u.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: g().buttons,
                                children: [
                                    o,
                                    (0, i.jsx)(b.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: g().button,
                                        children: (0, i.jsx)(u.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var A = a(6969),
                f = a(59911),
                C = a(1407),
                k = a(99835),
                T = a(20258),
                N = a(22293),
                P = a(83243),
                I = a(95858),
                O = a(10322),
                L = a(58509),
                S = a(56480);
            let E = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, n.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(S.H.Provider, { value: l, children: a });
            };
            var M = a(28764),
                w = a(85705);
            let B = (e) => {
                var t;
                return (null == e ? void 0 : e.available) === !1 && !!(null == (t = e.disclaimers) ? void 0 : t.includes(w.M.MODAL));
            };
            var D = a(89192),
                R = a(30716),
                U = a(56412),
                H = a(10603),
                z = a(25895),
                X = a(88720),
                F = a(61732),
                V = a(12234),
                K = a(89221),
                Y = a(33920),
                W = a(41242),
                $ = a(27935),
                G = a(41016),
                q = a(80461),
                Z = a(95445),
                Q = a(56829),
                J = a(34546);
            function ee(e) {
                let { type: t, genre: a } = e;
                return [Q._.AUDIOBOOK, Q._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function et(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ea = a(22403);
            function ei(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case Q._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case Q._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case Q._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case Q._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function el(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, K.W)(t.locale),
                    o = (0, W.N)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, J.j)(t.artists);
                                  return ee({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === Q._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: n }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, J.j)(t.artists);
                        return ee({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === Q._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: n }),
                    openGraph: (0, $.i)({
                        ogTitle: o,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                n = (0, ea.Y)((0, J.j)(l.artists), 96, !1);
                            if (ee({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = et(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [n, ei({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === Q._.PODCAST
                                ? [
                                      (0, ea.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      ei({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [n, ei({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: n }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, G.H)({ cardType: q.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, V.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, Y.x)(e.artists, t.host) },
                    alternates: (0, Z.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var es = a(39004),
                en = a(91149),
                eo = a(92942),
                er = a(57549),
                ed = a(43354),
                ec = a(89288),
                eu = a(78159),
                em = a(11560);
            let eb = (0, l.PA)((e) => {
                var t, a, l, s, n, o, r, d, c, u, m, b, v, p;
                let { user: h, album: x } = e;
                return h.isAuthorized
                    ? null
                    : (0, i.jsx)(em.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = x.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = x.description) ? m : void 0,
                              url: null != (b = null == (a = x.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = x.meta) ? void 0 : l.coverUri) ? (0, ec.lU)(null == (s = x.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (v = null == (n = x.meta) ? void 0 : n.genre) ? v : void 0,
                              datePublished: null != (p = null == (r = x.meta) || null == (o = r.year) ? void 0 : o.toString()) ? p : void 0,
                              tracks:
                                  null == (d = x.tracks)
                                      ? void 0
                                      : d
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, eu.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
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
            var ev = a(31892),
                ep = a.n(ev),
                eh = a(82298),
                ex = a(22939),
                e_ = a(16886),
                ej = a(49807),
                eg = a(10944),
                ey = a(73614),
                eA = a(79367),
                ef = a(40110),
                eC = a(61777),
                ek = a(95314),
                eT = a(30290),
                eN = a(29872),
                eP = a(61561),
                eI = a(22101),
                eO = a(50209),
                eL = a(49438),
                eS = a(87148),
                eE = a.n(eS);
            let eM = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: s,
                    } = (0, _.g)(),
                    { formatMessage: o } = (0, es.A)(),
                    d = (0, n.useCallback)(
                        (e) => {
                            (s.openModal(), e.stopPropagation());
                        },
                        [s],
                    ),
                    c = (0, n.useMemo)(() => {
                        switch (a) {
                            case Q._.SINGLE:
                                return o({ id: 'payment.single-offer-button-title' });
                            case Q._.PODCAST:
                                return o({ id: 'payment.podcast-offer-button-title' });
                            case Q._.AUDIOBOOK:
                                return o({ id: 'payment.books-offer-button-title' });
                            case Q._.FAIRY_TALE:
                                return o({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return o({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, o]);
                return l
                    ? (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, eh.$)(eE().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(p.HL, { className: eE().title, weight: 'bold', variant: 'div', size: 'l', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eE().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(b.$, {
                          onClick: d,
                          className: (0, eh.$)(eE().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': r.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(p.HL, { className: eE().title, weight: 'bold', variant: 'div', size: 'm', children: c }),
                              (0, i.jsx)(p.HL, {
                                  className: eE().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var ew = a(49999),
                eB = a(75160),
                eD = a(16573),
                eR = a(71705),
                eU = a(36577),
                eH = a(34159),
                ez = a(21468),
                eX = a(64720),
                eF = a(41580),
                eV = a(71996),
                eK = a(95924),
                eY = a(67716),
                eW = a.n(eY);
            let e$ = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: s = !0, donationButton: c, contextMenuChildren: b } = e,
                    {
                        user: h,
                        settings: { isMobile: x },
                        trailer: j,
                        albumCPA: { isPlusCPAEnabled: g, isPlusCPAPlayerBarEnabled: y },
                    } = (0, _.g)(),
                    { shouldShowBuySubscriptionModal: A, showBuySubscriptionModal: f } = (0, eN.q)(),
                    [C, k] = (0, n.useState)(!1),
                    T = (0, eR.K)(a),
                    N = (0, eU.A)(a),
                    { formatNumber: P } = (0, es.A)(),
                    I = (0, eH.F)(),
                    { utmLink: O } = (0, eT.f)({ contextId: a.id, contextType: ex.K.Album }),
                    L = (0, eA.P)(),
                    { controlSize: S, iconSize: E } = (0, ew.q)(x),
                    { pageAlbumId: M } = (0, ez.T)(),
                    w = g({ pageAlbumId: M, albumId: a.id, isNonMusic: a.isNonMusic }),
                    B = y(a.id, a.isNonMusic),
                    D = !w && !h.isAuthorized,
                    R = (0, m.c)(() => {
                        if (A && !B) return void f();
                        L() || (j.setUtmLink(O), j.openAlbumTrailer(a.id), I(o.DomainObjectType.Album, String(a.id)));
                    }),
                    U = (0, n.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !x
                            ? (0, i.jsx)(eK.L, {
                                  children: (0, i.jsx)(eV.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eW().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: R,
                                      children: (0, i.jsx)(u.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, R, x]),
                    H = (0, d.L)(() => {
                        if (!x) return (0, n.isValidElement)(c) ? c : (0, i.jsx)(eF.O, { size: S, iconSize: E, onClick: N, isPinned: a.isPinned });
                    }),
                    z = (0, d.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !x)
                            return (0, i.jsx)(p.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && P(a.actualLikesCount),
                            });
                    }),
                    X = (0, d.L)(() => {
                        if (s)
                            return (0, i.jsx)(ek.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(eX.c, {
                                    className: eW().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: T,
                                    variant: 'default',
                                    size: S,
                                    iconSize: E,
                                    withRipple: !x,
                                    disabled: D,
                                    'aria-label': l,
                                    children: z,
                                }),
                            });
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        U,
                        X,
                        (0, n.isValidElement)(H) && (0, i.jsx)('div', { className: eW().pinOrDonationControl, children: H }),
                        (0, i.jsx)(eD.x, {
                            album: a,
                            open: C,
                            onOpenChange: k,
                            wrapperClassName: eW().menuControl,
                            size: S,
                            icon: (0, i.jsx)(v.I, { size: E, variant: 'more' }),
                            variant: eB.z.PAGE,
                            'data-test-id': r.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: b,
                        }),
                    ],
                });
            });
            var eG = a(86869),
                eq = a(4331),
                eZ = a(6323);
            let eQ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return (a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i));
            };
            var eJ = a(10684),
                e0 = a.n(eJ);
            let e1 = (0, l.PA)((e) => {
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerInfoItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                var t, a, l, s;
                let { album: o, withArtistLink: d = !0 } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, _.g)(),
                    u = (0, n.useMemo)(() => eQ(o.artists), [o.artists]),
                    m = (null == u ? void 0 : u.length) === 1 && !(null == (t = u[0]) ? void 0 : t.decomposed) && !(null == (a = u[0]) ? void 0 : a.various);
                const pulseSyncInjectHeaderAlbumItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerInfoItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, position }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim(),
                                variant = 'block' === payload?.display ? 'div' : 'span';
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant,
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    className: (0, pulseSyncHeaderClassNames.$)(e0().year, {
                                        [e0().year_dot]: position > 0,
                                    }),
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'meta',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                return (0, i.jsx)(ek.B, {
                    objectType: o.mainObjectType,
                    objectId: String(o.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: null == (l = o.artists) ? void 0 : l.length,
                    children: (0, i.jsxs)('div', {
                        className: e0().meta,
                        children: pulseSyncInjectHeaderAlbumItems(
                            [
                                (0, pulseSyncHeaderJsx.jsxs)(pulseSyncHeaderJsx.Fragment, {
                                    children: [
                                        m &&
                                            (0, i.jsx)(eG.t, {
                                                radius: 'round',
                                                className: e0().artistCover,
                                                children: (0, i.jsx)(eZ.B, { src: null == (s = u[0]) ? void 0 : s.coverUri, size: 30, withAvatarReplace: !0 }),
                                            }),
                                        (0, i.jsx)(eq.i, {
                                            artists: u,
                                            lineClamp: c ? 1 : void 0,
                                            className: e0().artists,
                                            spoilerClassName: e0().artistsSpoiler,
                                            visibleArtistsCount: c ? void 0 : 2,
                                            linkClassName: e0().artistLink,
                                            captionClassName: e0().artistLabel,
                                            variant: c ? 'breakAll' : 'breakWord',
                                            withLink: d,
                                        }),
                                    ],
                                }),
                                o.year &&
                                    (0, i.jsx)(p.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: (0, eh.$)(e0().year, { [e0().year_dot]: u.length > 0 }),
                                        'data-test-id': r.e8.pageHeader.ALBUM_RELEASE_DATE,
                                        children: o.year,
                                    }),
                            ].filter(Boolean),
                        ),
                    }),
                });
            });
            var e8 = a(92543),
                e2 = a(7784),
                e9 = a(58091),
                e4 = a.n(e9),
                e3 = a(1361),
                e7 = a.n(e3);
            let e6 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': r, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: h } = (0, eN.q)(),
                        x = (0, eC.f)(),
                        { from: j, utmLink: g } = (0, eT.f)({ pageId: T._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: t.id }),
                        y = (0, eA.P)(),
                        {
                            user: A,
                            settings: { isMobile: f },
                            sonataState: C,
                            track: { isTrackPage: k },
                            modals: { imageSliderModal: N },
                            albumCPA: { isPlusCPAPlayerBarEnabled: P },
                            paywall: { modal: I },
                        } = (0, _.g)(),
                        { iconSize: O, controlSize: L } = (0, ew.q)(f),
                        S = f && !A.isAuthorized && t.isAvailable,
                        E = f && !A.hasPlus && A.isAuthorized && t.isAvailable,
                        M = S || E,
                        w = (0, eP.N)(),
                        B = !A.hasPlus && t.isAvailableOnlyForPlus,
                        D = !!t.coverUri,
                        R = P(t.id, t.isNonMusic),
                        U = (0, ey.r)(t.type),
                        H = (0, eI.j)();
                    (0, n.useEffect)(() => {
                        x();
                    }, [x]);
                    let z = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(H), className: e7().booksLogo });
                        }, [t.shouldShowBooksBadge, H]),
                        { isPlaying: X, togglePlay: F } = (0, eO.D)({
                            playContextParams: {
                                contextData: { type: ex.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, m.c)(() => {
                            t.coverUri && N.openImages({ images: [t.coverUri] });
                        }),
                        K = (0, m.c)(() => {
                            if (!y()) {
                                if (p && !R) return void h();
                                if (w && !R) return void I.open();
                                F();
                            }
                        }),
                        Y = (0, n.useMemo)(
                            () =>
                                B
                                    ? (0, i.jsx)(eM, { className: e7().plusPaywallButton, albumType: t.type })
                                    : f
                                      ? (0, i.jsx)(eL.D, {
                                            className: (0, eh.$)(e4().playControl, { [e4().playControl_withLogin]: M }),
                                            buttonVariant: 'default',
                                            iconSize: M ? O : 'xxl',
                                            size: M ? L : void 0,
                                            isPlaying: X,
                                            onClick: K,
                                            variant: M ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eL.D, {
                                            className: e4().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: K,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [B, f, X, K, t.isAvailable, t.type, M, O, L],
                        ),
                        W = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e4().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e4().controls,
                                        children: [
                                            (0, i.jsx)(ek.B, {
                                                objectType: o.DomainObjectType.Album,
                                                objectId: String(t.id),
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                mainObjectType: o.DomainObjectType.Album,
                                                mainObjectId: String(t.id),
                                                children: Y,
                                            }),
                                            (0, i.jsx)(e$, { donationButton: a, album: t, withLikeButton: !B, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, Y, B, l],
                        );
                    return (0, i.jsx)(e8.k, {
                        ref: d,
                        headingVariant: k ? 'div' : 'h1',
                        className: s,
                        controls: W,
                        meta: (0, i.jsx)(e1, { album: t }),
                        entityName: U,
                        entityNameIcon: z,
                        title: t.title,
                        cover: (0, i.jsx)(e2.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: D ? V : void 0,
                            'aria-label': D ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: c,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: E,
                    });
                }),
                e5 = (0, n.forwardRef)((e, t) => (0, i.jsx)(e6, { forwardRef: t, ...e }));
            var te = a(77635),
                tt = a(49200),
                ta = a(4805),
                ti = a(86358),
                tl = a(57138),
                ts = a(39058),
                tn = a(79422),
                to = a(44806),
                tr = a(99401),
                td = a(26076),
                tc = a(75501),
                tu = a(36159);
            let tm = (e) => {
                let { album: t } = e;
                return (0, n.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === tc.S.TRACK && (null == e ? void 0 : e.loadingState) === tu.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tb = a(3718),
                tv = a(36648),
                tp = a(97805),
                th = (function (e) {
                    return ((e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e);
                })({}),
                tx = a(23347),
                t_ = a.n(tx);
            let tj = (e) => {
                let { shimmerVariant: t, trackVariant: a = tb.X.ALBUM } = e;
                switch (t) {
                    case th.TRACK:
                        return (0, i.jsx)(tp.D, { isActive: !0, className: (0, eh.$)({ [t_().root]: a === tb.X.ALBUM }), variant: a });
                    case th.TEXT:
                        return (0, i.jsx)(tv.n, { className: t_().root });
                }
            };
            var tg = a(21171),
                ty = a.n(tg);
            let tA = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: ty().root, children: (0, i.jsx)(p.DZ, { variant: 'h2', className: ep().text, children: t }) });
                },
                tf = (e) => !!e && 'object' == typeof e && (('type' in e && e.type === ti.r.TEXT) || ('id' in e && 'positionInContext' in e)),
                tC = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, es.A)();
                    return (e) => {
                        var n;
                        let o = null == l || null == (n = l.items) ? void 0 : n[e],
                            r = ((e, t) => {
                                let { hasAlbum: a, isAlbumRejected: i, isNonMusic: l } = t;
                                return e && a && !i
                                    ? e.type === ti.r.TEXT
                                        ? e.data || e.loadingState === tu.G.REJECT
                                            ? { kind: l ? 'season' : 'disk', number: e.data }
                                            : null
                                        : e.data
                                          ? { kind: 'track', track: e.data }
                                          : null
                                    : null;
                            })(tf(o) ? o : void 0, { hasAlbum: !!l.meta, isAlbumRejected: l.isRejected, isNonMusic: !!a });
                        if (o && (null == r ? void 0 : r.kind) === 'track') return t(o, e);
                        if ((null == r ? void 0 : r.kind) === 'season') return (0, i.jsx)(tA, { text: s({ id: 'entity-names.season-number' }, { number: r.number }) });
                        if ((null == r ? void 0 : r.kind) === 'disk') return (0, i.jsx)(tA, { text: s({ id: 'entity-names.disk-number' }, { number: r.number }) });
                        if (!o || !l.meta || l.isRejected || !tf(o)) return (0, i.jsx)(tj, { shimmerVariant: th.TRACK, trackVariant: tb.X.ALBUM });
                        if (!o.data && !o.isRejected)
                            switch (o.type) {
                                case ti.r.TEXT:
                                    return (0, i.jsx)(tj, { shimmerVariant: th.TEXT });
                                case tc.S.TRACK:
                                    return (0, i.jsx)(tj, { shimmerVariant: th.TRACK, trackVariant: tb.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(tj, { shimmerVariant: th.TRACK, trackVariant: tb.X.PLAYLIST });
                            }
                    };
                };
            var tk = a(1037),
                tT = a(95641),
                tN = a(33005),
                tP = a(52512);
            let tI = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tk.c)(),
                    l = (0, tT.C)(),
                    { ref: s, intersectionPropertyId: n } = (0, tP.n)({ callback: l, withViewUuid: !0 }),
                    r = (0, x.Z)(t),
                    d = (0, m.c)((e) => {
                        (a(o.AppScreen.Link, t), r(e));
                    });
                return (0, i.jsx)(tN.v, { onClick: d, ref: s, 'data-intersection-property-id': n });
            });
            var tO = a(42057),
                tL = a(58301),
                tS = a(91809),
                tE = a(1797);
            let tM = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tk.c)(),
                        l = (0, tT.C)(),
                        s = (0, tt.Q)()(t.url),
                        { ref: n, intersectionPropertyId: r } = (0, tP.n)({ callback: l, withViewUuid: !0 }),
                        d = (0, x.Z)(s),
                        c = (0, x.Z)(t.artist.url),
                        u = (0, m.c)((e) => {
                            (a(o.AppScreen.ArtistScreen), c(e));
                        }),
                        b = (0, m.c)(() => {
                            (a(o.AppScreen.Link, s), d());
                        }),
                        v = (0, tE.S)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(tS.X, {
                        ref: n,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: v,
                        onNavigateToDonation: b,
                    });
                }),
                tw = (0, l.PA)((e) => {
                    var t, a, l;
                    let { className: s, headerClassName: r, containerClassName: d, headingVariant: c } = e,
                        { formatMessage: u } = (0, es.A)(),
                        { album: m } = (0, _.g)(),
                        b = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, tL.k)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, l, s;
                                      return (0, i.jsx)(
                                          ek.B,
                                          {
                                              objectType: o.DomainObjectType.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (l = m.donations) || null == (a = l.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (s = m.meta) ? void 0 : s.id),
                                              mainObjectType: o.DomainObjectType.Album,
                                              children: (0, i.jsx)(tM, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (l = m.meta) ? void 0 : l.id]);
                    return (0, i.jsx)(tO.x, {
                        className: s,
                        headerClassName: r,
                        containerClassName: d,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: c,
                        children: b,
                    });
                });
            var tB = a(10820),
                tD = a(59342),
                tR = a(67379),
                tU = a(76945),
                tH = a(59450),
                tz = a(79670),
                tX = a(25488),
                tF = a(97952),
                tV = a(84e3),
                tK = a(24323),
                tY = a.n(tK),
                tW = a(23818),
                t$ = a(17850),
                tG = a(26742),
                tq = a(84252),
                tZ = a.n(tq);
            let tQ = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tt.Q)()(t.url),
                        l = (0, x.Z)(a),
                        s = (() => {
                            let { hash: e } = (0, tH.gf)(),
                                t = (0, tV.U)(),
                                a = (0, tH.st)(),
                                { pageId: i } = (0, tF.$)(),
                                { blockId: l, blockType: s, blockPosX: n, blockPosY: r } = (0, tG.N)(),
                                { objectType: d, objectId: c, objectPosX: u, objectPosY: b, objectsCount: v, mainObjectId: p, mainObjectType: h } = (0, tX.J)();
                            return (0, m.c)(() => {
                                if (!a || !i) return;
                                let m = tz.W[i];
                                if (!m) return;
                                let x = {
                                        userInteractionType: o.UserInteractionType.Tap,
                                        hash: e,
                                        pageId: m,
                                        pageStyle: o.PageStyles.ContextMenu,
                                        pagePlacement: o.PagePlacements.Hover,
                                        mainObjectType: h,
                                        mainObjectId: p,
                                        objectType: d,
                                        objectId: c,
                                        objectPosX: u,
                                        objectPosY: b,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: n,
                                        entityPosY: r,
                                        objectsCount: v,
                                        actionType: o.UserInteractionType.Tap,
                                    },
                                    _ = (0, tR.F)({ params: x, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                _ && (0, t$.l6)(a.evgenInstance, _);
                            });
                        })(),
                        n = (0, tT.C)(),
                        { ref: r, intersectionPropertyId: d } = (0, tP.n)({ callback: n, withViewUuid: !0 }),
                        c = (0, m.c)(() => {
                            (s(), l());
                        });
                    return (0, i.jsxs)(
                        tB.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': d,
                            className: tZ().root,
                            isBlock: !0,
                            onClick: c,
                            children: [
                                (0, i.jsx)(eG.t, {
                                    radius: 'round',
                                    className: tZ().cover,
                                    children: (0, i.jsx)(tW._V, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: tZ().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                tJ = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, _.g)(),
                        { formatMessage: s } = (0, es.A)(),
                        r = (() => {
                            let e = (0, tH.st)(),
                                t = (0, tV.U)(),
                                { hash: a } = (0, tH.gf)(),
                                { pageId: i } = (0, tF.$)(),
                                { mainObjectId: l, mainObjectType: s } = (0, tX.J)();
                            return (0, m.c)((n) => {
                                if (!e || !i || !tz.W[i]) return;
                                let r = {
                                    pageStyle: o.PageStyles.ContextMenu,
                                    pagePlacement: o.PagePlacements.Hover,
                                    mainObjectType: s,
                                    mainObjectId: l,
                                    hash: a,
                                    pageId: i,
                                };
                                n && (r.viewUuid = String((0, tD.A)()));
                                let d = (0, tR.F)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                d && (n ? (0, tU.Fn)(null == e ? void 0 : e.evgenInstance, d) : (0, tU.Ig)(null == e ? void 0 : e.evgenInstance, d));
                            });
                        })(),
                        [d, c] = (0, n.useState)(!1),
                        u = (0, n.useRef)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            d && (u.current = !0);
                        }, [d]),
                        (0, n.useEffect)(() => {
                            u.current && r(d);
                        }, [d, r]),
                        (0, i.jsx)(tB.W1, {
                            ariaLabel: s({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(v.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: c,
                            open: d,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tY().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var s;
                                          return (0, i.jsx)(
                                              ek.B,
                                              {
                                                  objectType: o.DomainObjectType.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (s = a.items) ? void 0 : s.length),
                                                  mainObjectId: String(null == l ? void 0 : l.id),
                                                  mainObjectType: o.DomainObjectType.Album,
                                                  children: (0, i.jsx)(tQ, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var t0 = a(68934),
                t1 = a(52312);
            let t8 = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: s } = e,
                        [o, r] = (0, t0.d)();
                    (0, n.useEffect)(
                        () => (
                            o && l && l.observe(o),
                            () => {
                                o && l && l.unobserve(o);
                            }
                        ),
                        [o, l],
                    );
                    let d = { transform: 'translate3d(0, '.concat(t.start - s, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: ep().virtualItem, ref: r, style: d, children: a(t.index) }, t.key);
                }),
                t2 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: s = 'region', ariaLabel: o } = e,
                        d = (0, eC.f)(),
                        [c, u] = (0, t0.d)(),
                        { virtualizer: m, resizeObserver: b } = (0, t1.r)({ count: t, getEstimateSize: () => 56, containerRef: c });
                    ((0, n.useEffect)(() => {
                        d();
                    }, [d]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && a(m.range);
                        }, [a, m.isScrolling, m.range]));
                    let v = m.getTotalSize(),
                        p = m.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: ep().virtualScroll,
                        style: { height: ''.concat(v, 'px') },
                        ref: u,
                        role: s,
                        'aria-label': o,
                        'data-test-id': r.S7.TRACK_LIST,
                        children: p.map((e) => (0, i.jsx)(t8, { item: e, itemContentCallback: l, resizeObserver: b, scrollMargin: m.options.scrollMargin }, e.key)),
                    });
                });
            var t9 = a(33458),
                t4 = a(29481),
                t3 = a(97522);
            let t7 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t4.N)(),
                        { ref: s, intersectionPropertyId: n } = (0, tP.n)(),
                        d = (0, m.c)(() => {
                            l({ to: o.AppScreen.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        'data-intersection-property-id': n,
                        className: ep().labelLinkContainer,
                        children: (0, i.jsx)(t3.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, eh.$)(ep().labelLink, ep().important),
                            onClick: d,
                            'data-test-id': r.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(p.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t6 = (0, l.PA)((e) => {
                    var t;
                    let { album: a, size: l, weight: s, className: r } = e,
                        { formatMessage: d } = (0, es.A)(),
                        c = (0, eC.f)();
                    (0, n.useEffect)(() => {
                        c();
                    }, [c]);
                    let { items: u, count: m, isPublisher: b } = (0, t9.p)({ labels: a.labels, type: null == (t = a.meta) ? void 0 : t.type }),
                        v = d(b ? { id: 'page.album-publisher-title' } : { id: 'page.album-label-title' }, { count: m });
                    return (0, i.jsxs)('div', {
                        className: (0, eh.$)(ep().label, r),
                        children: [
                            (0, i.jsx)(p.HL, { variant: 'span', size: l, weight: s, children: v }),
                            '\xa0',
                            (0, i.jsx)(p.HL, {
                                variant: 'span',
                                size: l,
                                weight: s,
                                lineClamp: 1,
                                children:
                                    null == u
                                        ? void 0
                                        : u.map((e, t) => {
                                              var l;
                                              let { id: s, name: n, link: r } = e;
                                              return (0, i.jsx)(
                                                  ek.B,
                                                  {
                                                      objectType: o.DomainObjectType.Link,
                                                      objectId: r.href,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: m,
                                                      mainObjectType: o.DomainObjectType.Link,
                                                      mainObjectId: String(null == (l = a.meta) ? void 0 : l.id),
                                                      children: (0, i.jsx)(t7, { url: r.href, name: n }),
                                                  },
                                                  s,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t5 = a(450),
                ae = a(93596),
                at = a(24816),
                aa = a(30296),
                ai = a(70825),
                al = a(35015);
            let as = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: s } = e,
                    {
                        user: o,
                        album: d,
                        sonataState: { entityMeta: c },
                    } = (0, _.g)(),
                    b = (0, aa.e)(),
                    p = (0, t5.S)(null == b ? void 0 : b.state.currentContext.value),
                    h = ((e) =>
                        (0, m.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = d.meta) ? void 0 : t.id),
                    x = (0, n.useMemo)(() => (0, ai.t)({ contextType: ex.K.Album, contextId: String(a) }), [a]),
                    j = (0, ae.m)(d.tracks, at.N.NEXT, x, { entityVariant: al.c.ALBUM, entityTitle: l, coverUri: s }, h),
                    g = (0, ae.m)(d.tracks, at.N.LAST, x, { entityVariant: al.c.ALBUM, entityTitle: l, coverUri: s }, h);
                return c && !p
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tB.Dr, {
                                  onClick: j,
                                  icon: (0, i.jsx)(v.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tB.Dr, {
                                  onClick: g,
                                  icon: (0, i.jsx)(v.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var an = a(98056),
                ao = a.n(an);
            let ar = (0, l.PA)(() => {
                var e, t, a, l, s, c, u, m;
                let b = (0, n.useRef)(null),
                    v = (0, n.useRef)(0),
                    p = (0, tn.w)(),
                    { notify: h } = (0, eo.l)(),
                    x = (0, tt.Q)(),
                    {
                        album: j,
                        albumCPA: g,
                        experiments: y,
                        sonataState: A,
                        settings: { isMobile: f },
                        track: { isTrackPage: C },
                    } = (0, _.g)(),
                    { from: k, utmLink: N } = (0, eT.f)({ pageId: T._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: j.id }),
                    { formatMessage: P } = (0, es.A)(),
                    [I, O] = (0, n.useState)(!1),
                    L = tm({ album: j }),
                    S = C ? 'div' : 'h2',
                    E = j.items.length || 10,
                    { isCPAEnabled: w } = (0, M.I)(),
                    B = !w || (w && !g.cpa),
                    D = y.checkExperiment(to.z.WebNextAlbumDonationButton, 'on') && j.hasDonations,
                    R = D && f,
                    { showBuySubscriptionModal: U } = (0, eN.q)(),
                    H = g.isPlusCPAPlayerBarEnabled(j.id, null == (e = j.meta) ? void 0 : e.isNonMusic) && f;
                ((0, n.useEffect)(
                    () => () => {
                        v.current = 0;
                    },
                    [j],
                ),
                    (0, n.useEffect)(() => {
                        H && A.status === e_.MT.ENDED && U();
                    }, [A.status, U, H]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        if ((null == (e = j.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!v || v.current > 0) return;
                            (h((0, i.jsx)(er.h, { error: P({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: en.u.ERROR }), v.current++);
                        }
                    }, [null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = j.otherArtistAlbums) ? void 0 : a.isRejected, P, h]),
                    (0, n.useEffect)(() => {
                        j.isResolved && j.hasOtherAlbumVersions && O(!0);
                    }, [j.hasOtherAlbumVersions, j.isResolved]));
                let z = (0, n.useCallback)(() => {
                        let e = b.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    X = (0, d.L)(() => {
                        var e, t, a, l, s;
                        if (!D || !(null == (e = j.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = j.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ef.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ek.B, {
                                    mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(tJ, {}),
                                }),
                            });
                        let [n] = j.donations.items;
                        if (n)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ef.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(ek.B, {
                                    objectType: o.DomainObjectType.Donation,
                                    objectId: n.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(tI, { url: x(n.url) }),
                                }),
                            });
                    }),
                    F = (0, n.useMemo)(
                        () =>
                            j.isLoading || !j.meta || j.isRejected
                                ? (0, i.jsx)(eg.c, { className: ep().header, isActive: !0 })
                                : (0, i.jsx)(e5, {
                                      album: j.meta,
                                      donationButton: X,
                                      className: ep().header,
                                      onVersionClick: I ? z : void 0,
                                      contextMenuChildren: (0, i.jsx)(as, { albumId: j.meta.id, albumTitle: j.meta.title, albumCoverUri: j.meta.coverUri }),
                                  }),
                        [j.isLoading, j.meta, j.isRejected, X, I, z],
                    ),
                    V = tC({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== ti.r.TEXT)
                                return (0, i.jsx)(ek.B, {
                                    objectType: o.DomainObjectType.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: E,
                                    children: (0, i.jsx)(ta.F, {
                                        withLightning: e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == j || null == (a = j.meta) ? void 0 : a.artists,
                                        playContextParams: p(t, {
                                            contextData: { type: ex.K.Album, meta: j.contextMeta, from: k, utmLink: N },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: A.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: j,
                    }),
                    K = (0, d.L)(() => {
                        var e, t, a, l, s, n, d, c, u, m, v, p;
                        let h = [],
                            x = 4;
                        return (
                            R &&
                                (null == (e = j.donations) ? void 0 : e.items) &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.Donations,
                                            blockId: ef.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            children: (0, i.jsx)(tw, {
                                                headingVariant: S,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                            }),
                                        },
                                        o.EntityTypes.Donations,
                                    ),
                                ),
                                x++),
                            j.hasSimilarEntities &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.SimilarEntities,
                                            blockId: o.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (a = j.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(ej.Q, {
                                                ...j.similarEntities,
                                                meta: { title: P({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: S,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: j.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        o.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                x++),
                            j.hasOtherAlbumVersions &&
                                (null == (t = j.otherAlbumVersions) ? void 0 : t.length) &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbumVersions,
                                            blockId: o.EntityTypes.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (s = j.otherAlbumVersions) ? void 0 : s.length,
                                            mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: P({ id: 'entity-names.other-album-versions' }),
                                                albums: j.otherAlbumVersions,
                                                headingRef: b,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbumVersions,
                                    ),
                                ),
                                x++),
                            j.hasLatestGenreAlbums &&
                                B &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.GenreAlbums,
                                            blockId: o.EntityTypes.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (d = j.latestGenreAlbums) ? void 0 : d.items.length,
                                            mainObjectId: String(null == (c = j.meta) ? void 0 : c.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: P({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = j.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.GenreAlbums,
                                    ),
                                ),
                                x++),
                            j.hasOtherArtistAlbums &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbums,
                                            blockId: o.EntityTypes.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (m = j.otherArtistAlbums) ? void 0 : m.items.length,
                                            mainObjectId: String(null == (v = j.meta) ? void 0 : v.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: P({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (p = j.otherArtistAlbums) ? void 0 : p.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbums,
                                    ),
                                ),
                                x++),
                            h
                        );
                    });
                return (
                    j.id && j.isResolved && j.similarEntities.isNeededToLoad && j.isSimilarEntitiesEnabled && (0, n.use)(j.getSimilarEntities({ albumId: j.id })),
                    (0, i.jsxs)(ts.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Header,
                                blockId: o.EntityTypes.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                mainObjectType: o.DomainObjectType.Album,
                                objectsCount: 1,
                                children: F,
                            }),
                            (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Tracks,
                                blockId: o.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: E,
                                mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                mainObjectType: o.DomainObjectType.Album,
                                children: (0, i.jsx)(t2, {
                                    count: E,
                                    itemContentCallback: V,
                                    getDataByRange: L,
                                    ariaLabel: P({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (c = j.meta) ? void 0 : c.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: ep().footerContainer,
                                children: [
                                    j.hasLabel &&
                                        (0, i.jsx)(tl.F, {
                                            blockType: o.EntityTypes.Labels,
                                            blockId: o.EntityTypes.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = j.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (m = j.meta) ? void 0 : m.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(t6, { album: j, size: 's', weight: 'normal', className: ao().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: ao().carouselBlocks, children: [K, ' '] }),
                                    (0, i.jsx)(td.A, { children: (0, i.jsx)(tr.w, { className: ep().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ad = a(5867),
                ac = a(66881),
                au = a(2710),
                am = a(48127);
            let ab = (e) => {
                var t;
                let a = null != (t = ac.nd.find((t) => t === e)) ? t : am.O.ABOUT;
                return { tab: a, index: ac.nd.indexOf(a) };
            };
            var av = a(51549),
                ap = a(18412),
                ah = a(40496),
                ax = a.n(ah);
            let a_ = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2' } = e,
                    l = (0, eC.f)(),
                    { formatMessage: s } = (0, es.A)(),
                    { album: r, sonataState: d } = (0, _.g)();
                (0, n.useEffect)(() => {
                    l();
                }, [l]);
                let { from: c, utmLink: u } = (0, eT.f)({ pageId: T._Q.PODCAST, blockId: ef.U.PODCAST, contextId: r.id, contextType: ex.K.Album }),
                    m = (0, n.useMemo)(
                        () =>
                            r.lastEpisodes.map((e, t) => {
                                let a = ((e, t) => (t && e.data ? e.data : null))(e, r.isResolved);
                                return a
                                    ? (0, i.jsx)(
                                          ek.B,
                                          {
                                              objectType: o.DomainObjectType.PodcastEpisode,
                                              objectId: String(a.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: r.lastEpisodes.length,
                                              children: (0, i.jsx)(av.K, {
                                                  track: a,
                                                  playContextParams: {
                                                      contextData: { type: ex.K.Album, meta: r.contextMeta, from: c, utmLink: u },
                                                      queueParams: { index: e.positionInContext, entityId: a.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: d.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          a.id,
                                      )
                                    : (0, i.jsx)(tp.D, { isActive: !0, className: ax().shimmerItem, variant: tb.X.ALBUM }, t);
                            }),
                        [r.lastEpisodes, r.isResolved, r.contextMeta, c, u, d.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, eh.$)(t, ax().root),
                    children: [
                        (0, i.jsx)(ap.T, { headingVariant: a, className: ax().blockHeader, title: s({ id: 'entity-names.podcast-last-episodes' }) }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': s({ id: 'podcast.last-episodes-list' }), tabIndex: 0, children: m }),
                    ],
                });
            });
            var aj = a(76939),
                ag = a(66284),
                ay = a(30012),
                aA = a.n(ay);
            let af = {
                    'authors-books': r.e8.album.AUTHORS_BOOKS,
                    'category-albums': r.e8.album.CATEGORY_ALBUMS,
                    'labels-albums': r.e8.album.LABELS_ALBUMS,
                    'similar-albums': r.e8.album.SIMILAR_ALBUMS,
                },
                aC = (0, l.PA)((e) => {
                    var t, a;
                    let { isShimmerVisible: l, isShimmerActive: s, className: r, headingVariant: d = 'h2' } = e,
                        { album: c } = (0, _.g)(),
                        u = (0, eC.f)();
                    return (
                        (0, n.useEffect)(() => {
                            u();
                        }, [u]),
                        (0, i.jsx)('div', {
                            className: (0, eh.$)(r, aA().root),
                            children:
                                null == (a = c.relatedContent) || null == (t = a.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          let a = af[e.type] || '';
                                          return (0, i.jsx)(
                                              ag.O,
                                              {
                                                  headingVariant: d,
                                                  title: e.title,
                                                  isShimmerVisible: l,
                                                  isShimmerActive: s,
                                                  className: (0, eh.$)(aA().root, r),
                                                  containerClassName: aA().carousel,
                                                  headerClassName: aA().header,
                                                  'data-test-id': a,
                                                  children: e.albums.map((t, a) =>
                                                      (0, i.jsx)(
                                                          ek.B,
                                                          {
                                                              objectType: o.DomainObjectType.Podcast,
                                                              objectId: String(t.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.albums.length,
                                                              children: (0, i.jsx)(aj.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
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
            var ak = a(60379),
                aT = a(47009),
                aN = a(72378),
                aP = a(77174),
                aI = a(89179),
                aO = a.n(aI);
            let aL = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': o, forwardRef: d, onVersionClick: c } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: h } = (0, eN.q)(),
                        x = (0, eC.f)(),
                        { from: j, utmLink: g } = (0, eT.f)({ pageId: T._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: t.id }),
                        {
                            user: y,
                            settings: { isMobile: A },
                            sonataState: f,
                            modals: { imageSliderModal: C },
                            paywall: { modal: k },
                        } = (0, _.g)(),
                        N = (0, aT.b)(),
                        P = (0, eA.P)(),
                        { iconSize: I, controlSize: O } = (0, ew.q)(A),
                        L = A && !y.isAuthorized && t.isAvailable,
                        S = A && !y.hasPlus && y.isAuthorized && t.isAvailable,
                        E = L || S,
                        M = (0, eP.N)(),
                        w = (0, aP.$)(t.isLiked, t.type),
                        B = (0, ey.r)(t.type),
                        D = (0, eI.j)(),
                        R = t.isAvailable || t.isAudiobook,
                        U = !!t.coverUri;
                    (0, n.useEffect)(() => {
                        x();
                    }, [x]);
                    let H = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(v.I, { variant: 'yandexBooks'.concat(D), className: aO().booksLogo });
                        }, [t.shouldShowBooksBadge, D]),
                        z = !y.hasPlus && t.isAvailableOnlyForPlus,
                        X = (0, aN.c)(t.isPodcast ? t : null),
                        { isPlaying: F, togglePlay: V } = (0, eO.D)({
                            playContextParams: {
                                contextData: { type: ex.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        K = (0, m.c)(() => {
                            t.coverUri && C.openImages({ images: [t.coverUri] });
                        }),
                        Y = (0, m.c)(() => {
                            if (!P()) {
                                if (p) return void h();
                                if (M) return void k.open();
                                (V(), N(!F));
                            }
                        }),
                        W = (0, n.useMemo)(
                            () =>
                                z
                                    ? (0, i.jsx)(eM, { className: aO().plusPaywallButton, albumType: t.type })
                                    : A
                                      ? (0, i.jsx)(eL.D, {
                                            className: (0, eh.$)(e4().playControl, { [e4().playControl_withLogin]: E }),
                                            buttonVariant: 'default',
                                            iconSize: E ? I : 'xxl',
                                            size: E ? O : void 0,
                                            isPlaying: F,
                                            onClick: Y,
                                            variant: E ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eL.D, {
                                            className: e4().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: F,
                                            onClick: Y,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [z, A, F, Y, t.isAvailable, t.type, E, I, O],
                        ),
                        $ = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, eh.$)(aO().controlsBlock, { [aO().controlsBlock_withPaywallButton]: z }),
                                    children: (0, i.jsxs)('div', {
                                        className: e4().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: (0, eh.$)(e4().controls, { [aO().controls_withPaywallButton]: z }),
                                                'data-test-id': r.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(ek.B, {
                                                        objectType: t.mainObjectType,
                                                        objectId: String(t.id),
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: t.mainObjectType,
                                                        mainObjectId: String(t.id),
                                                        children: W,
                                                    }),
                                                    (0, i.jsx)(e$, { album: t, likeButtonAriaLabel: w, withLikeButton: !z, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e4().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [W, t, w, z, a, l],
                        ),
                        G = (0, n.useMemo)(() => (0, i.jsx)('div', { className: aO().meta, children: (0, i.jsx)(e1, { album: t }) }), [t]);
                    return (0, i.jsx)(e8.k, {
                        ref: d,
                        headingVariant: 'h1',
                        className: s,
                        controls: $,
                        meta: G,
                        entityName: B,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e2.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: R,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: U ? K : void 0,
                            'aria-label': U ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': o,
                        version: t.version,
                        onVersionClick: c,
                        disclaimerLabel: X,
                        showMobileLoginButton: L,
                        showMobileSubscriptionButton: S,
                    });
                }),
                aS = (0, n.forwardRef)((e, t) => (0, i.jsx)(aL, { forwardRef: t, ...e }));
            var aE = a(17742),
                aM = a(8266),
                aw = a(83918),
                aB = a(79396),
                aD = a(9931),
                aR = a(23430),
                aU = a.n(aR);
            let aH = (0, l.PA)(() => {
                    var e, t, a, l, r, c, m, v, h, j, g, y, f, C, k, N, P;
                    let I = (0, n.useRef)(0),
                        O = (0, n.useRef)(null),
                        L = (0, tn.w)(),
                        { album: S, experiments: E, sonataState: M, slides: w } = (0, _.g)(),
                        B = (null == (e = S.meta) ? void 0 : e.isAudiobook) ? T._Q.AUDIOBOOK : T._Q.PODCAST,
                        D = (null == (t = S.meta) ? void 0 : t.isAudiobook) ? ef.U.AUDIOBOOK : ef.U.PODCAST,
                        { from: R, utmLink: U } = (0, eT.f)({ pageId: B, blockId: D, contextType: ex.K.Album, contextId: S.id }),
                        { href: H } = (0, z.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (P = S.id) ? P : '' } }),
                        X = (0, x.Z)(H),
                        F = (0, n.useId)(),
                        { formatMessage: V } = (0, es.A)(),
                        K = (0, s.useSearchParams)(),
                        Y = (0, aw.X)(),
                        W = E.checkExperiment(to.z.WebNextRewind2024, 'on') && (null == (a = S.meta) ? void 0 : a.isPodcast),
                        $ = (0, n.useMemo)(() => {
                            let { index: e } = ab(K.get(A.K.ACTIVE_TAB));
                            return e;
                        }, [K]),
                        G = (0, ad.zb)($),
                        [q, Z] = (0, n.useState)(ac.nd[G.value]),
                        J = tm({ album: S });
                    (0, n.useEffect)(
                        () => () => {
                            ((I.current = 0), w.resetPodcast());
                        },
                        [S, w],
                    );
                    let ee = (0, n.useMemo)(() => {
                            var e, t;
                            let a = W && w.podcastSlidesLoadingState === tu.G.RESOLVE && !!(null == (e = w.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, ak.W)(null == (t = S.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(b.$, {
                                      className: aU().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: X,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(p.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(u.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = S.meta) ? void 0 : l.averageColor, W, X, null == (r = w.podcastItems) ? void 0 : r.length, w.podcastSlidesLoadingState]),
                        ea = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = S.meta) ? void 0 : e.isFairyTale)
                                ? { about: V({ id: 'non-music.fairytale-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                : (null == (t = S.meta) ? void 0 : t.isAudiobook)
                                  ? { about: V({ id: 'non-music.audiobook-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                  : { about: V({ id: 'podcast.tab-about' }), 'track-list': V({ id: 'podcast.tab-tracks' }, { value: S.tracks.length }) };
                        }, [null == (c = S.meta) ? void 0 : c.isAudiobook, null == (m = S.meta) ? void 0 : m.isFairyTale, S.tracks.length, V]),
                        ei = (0, n.useMemo)(
                            () => (e) => {
                                var t;
                                if (!G.onTabChange || e === G.value) return;
                                G.onTabChange(e);
                                let a = null != (t = ac.nd[e]) ? t : am.O.ABOUT;
                                Z(a);
                                let i = (0, aM.b)(A.K.ACTIVE_TAB, a);
                                i && Y(i);
                            },
                            [G, Y],
                        ),
                        el = (e, t) =>
                            (0, i.jsxs)('div', {
                                className: aU().infoBlock,
                                children: [
                                    (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', className: aU().infoTitle, children: e }),
                                    (0, i.jsx)(p.HL, { variant: 'span', type: 'entity', size: 'm', children: t }),
                                ],
                            }),
                        en = ((e) => {
                            let { formatMessage: t } = (0, es.A)();
                            return ((e, t) => {
                                let { minutes: a, hours: i } = et(e),
                                    l = '';
                                return (
                                    i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                    a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                    l
                                );
                            })(e, t);
                        })((null == (v = S.meta) ? void 0 : v.durationSec) || 0),
                        eo = (0, n.useMemo)(() => {
                            let e = ((e) => {
                                    var t, a, i;
                                    let { album: l, description: s, labels: n, contentWarning: o } = e,
                                        r = (0, t9.p)({ labels: n, type: null == l ? void 0 : l.type }),
                                        d = (0, au.A)(o),
                                        c = !!(null == l ? void 0 : l.durationSec);
                                    return {
                                        description: s ? (0, ec.ky)(s) : null,
                                        hasInfo: !!((null == l || null == (t = l.artists) ? void 0 : t.length) || c || (null == n ? void 0 : n.length) || d),
                                        readers: null == l || null == (a = l.artists) ? void 0 : a.map((e) => e.name).join(', '),
                                        readersCount: null == l || null == (i = l.artists) ? void 0 : i.length,
                                        withDuration: c,
                                        labels: r,
                                        isExplicit: d,
                                    };
                                })({ album: S.meta, description: S.description, labels: S.labels, contentWarning: S.contentWarning }),
                                { index: t } = ab(am.O.ABOUT),
                                a = Number(e.labels.count) > 1 ? V({ id: 'podcast.publishers-title' }) : V({ id: 'podcast.publisher-title' }),
                                l = V({ id: 'podcast.age-limit' }),
                                s = Number(e.readersCount) > 1 ? V({ id: 'non-music.audiobook-artists' }) : V({ id: 'non-music.audiobook-artist' }),
                                n = e.readers && el(''.concat(s, ':'), e.readers),
                                o = e.withDuration && el(''.concat(V({ id: 'time.duration' }), ':'), en),
                                r = e.labels.names && el(''.concat(a, ':'), e.labels.names),
                                d = el(''.concat(l, ':'), '18+'),
                                c = e.labels.hasLabels ? (0, i.jsx)(t6, { album: S, size: 'm', weight: 'medium', className: aU().label }) : r;
                            return (0, i.jsx)(ad.Kp, {
                                name: t,
                                value: G.value,
                                elementId: F,
                                children: (0, i.jsxs)('div', {
                                    className: aU().contentAbout,
                                    children: [
                                        null !== e.description &&
                                            (0, i.jsx)(p.HL, {
                                                variant: 'div',
                                                type: 'entity',
                                                size: 'm',
                                                className: ep().text,
                                                children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: e.description } }),
                                            }),
                                        e.hasInfo && (0, i.jsxs)('div', { className: ep().text, children: [n, o, c, e.isExplicit && d] }),
                                    ],
                                }),
                            });
                        }, [S, V, en, G.value, F]),
                        er = (0, d.L)(() =>
                            S.isLoading || !S.meta || S.isRejected
                                ? (0, i.jsx)(eg.c, { className: ep().header, isActive: !0 })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(aS, {
                                              album: S.meta,
                                              actionButton: ee,
                                              className: ep().header,
                                              contextMenuChildren: (0, i.jsx)(as, { albumId: S.meta.id, albumTitle: S.meta.title, albumCoverUri: S.meta.coverUri }),
                                          }),
                                          (0, i.jsx)(aD.wI, {
                                              className: aU().tabCarousel,
                                              ...G,
                                              onTabChange: ei,
                                              ref: O,
                                              children: ac.nd.map((e, t) => (0, i.jsx)(aB.o, { className: aU().tab, title: ea[e], value: t }, e)),
                                          }),
                                          eo,
                                      ],
                                  }),
                        );
                    (0, n.useEffect)(() => {
                        S.isResolved && (S.loadLastEpisodes(), S.getRelatedContent());
                    }, [S, S.isResolved, S.loadLastEpisodes, S.getRelatedContent]);
                    let ed = ((e) => {
                            let { type: t, activeTab: a, lastEpisodesCount: i } = e,
                                l = a === am.O.ABOUT,
                                s = a === am.O.TRACKS,
                                n = t === Q._.AUDIOBOOK ? 'audiobook' : 'podcast';
                            return { isAbout: l, withTrackList: s, withLastEpisodes: l && t === Q._.PODCAST && i > 0, listType: s ? n : null };
                        })({ type: null == (h = S.meta) ? void 0 : h.type, activeTab: q, lastEpisodesCount: S.lastEpisodes.length }),
                        eu = ed.withLastEpisodes,
                        em = ed.isAbout && S.relatedContent && S.relatedContent.items && S.relatedContent.items.length > 0,
                        eb = tC({
                            element: (e, t) => {
                                if (e.data && e.type !== ti.r.TEXT)
                                    return (0, i.jsx)(ek.B, {
                                        objectType: o.DomainObjectType.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: S.items.length,
                                        children: (0, i.jsx)(av.K, {
                                            track: e.data,
                                            viewType: aE.D.ALBUM,
                                            position: e.position,
                                            playContextParams: L(t, {
                                                contextData: { type: ex.K.Album, meta: S.contextMeta, from: R, utmLink: U },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: M.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: S,
                        }),
                        ev = ed.isAbout ? 0 : S.items.length || 10,
                        eh = (0, d.L)(() => {
                            if (ed.withTrackList) {
                                var e, t;
                                return 'audiobook' === ed.listType
                                    ? V({ id: 'non-music.audiobook-list' }, { albumName: (null == (t = S.meta) ? void 0 : t.title) || '' })
                                    : V({ id: 'podcast.episodes-list' }, { albumName: (null == (e = S.meta) ? void 0 : e.title) || '' });
                            }
                        }),
                        e_ = (0, d.L)(() => {
                            var e;
                            return ed.withTrackList
                                ? (0, i.jsx)(tl.F, {
                                      blockType: o.EntityTypes.Episodes,
                                      blockId: o.EntityTypes.Episodes,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      objectsCount: ev,
                                      mainObjectId: String(null == (e = S.meta) ? void 0 : e.id),
                                      mainObjectType: o.DomainObjectType.Album,
                                      children: (0, i.jsx)(t2, { count: ev, getDataByRange: J, itemContentCallback: eb, role: 'tabpanel', ariaLabel: eh }),
                                  })
                                : null;
                        }),
                        ej = W && w.podcastSlidesLoadingState === tu.G.IDLE;
                    return (
                        'number' == typeof S.id && ej && (0, n.use)(w.getPodcastSlides({ podcastId: S.id })),
                        (0, i.jsxs)(ts.h, {
                            tabId: null != q ? q : am.O.ABOUT,
                            tabPos: G.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(tl.F, {
                                    blockType: o.EntityTypes.Header,
                                    blockId: o.EntityTypes.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (j = S.meta) ? void 0 : j.id),
                                    mainObjectType: o.DomainObjectType.Podcast,
                                    objectsCount: 1,
                                    children: er,
                                }),
                                e_,
                                (0, i.jsxs)('div', {
                                    className: ep().footerContainer,
                                    children: [
                                        eu &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.EntityTypes.LatestEpisodes,
                                                blockId: o.EntityTypes.LatestEpisodes,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                objectsCount: S.lastEpisodes.length,
                                                mainObjectId: String(null == (g = S.meta) ? void 0 : g.id),
                                                mainObjectType: null == (y = S.meta) ? void 0 : y.mainObjectType,
                                                children: (0, i.jsx)(a_, { className: aU().lastEpisodes }),
                                            }),
                                        em &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.EntityTypes.Podcasts,
                                                blockId: o.EntityTypes.Podcasts,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: null == (C = S.relatedContent) || null == (f = C.items) ? void 0 : f.length,
                                                mainObjectId: String(null == (k = S.meta) ? void 0 : k.id),
                                                mainObjectType: null == (N = S.meta) ? void 0 : N.mainObjectType,
                                                children: (0, i.jsx)(aC, { isShimmerVisible: S.isRelatedContentLoading, isShimmerActive: !0 }),
                                            }),
                                        (0, i.jsx)(td.A, { children: (0, i.jsx)(tr.w, { className: ep().footer }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                az = (0, l.PA)((e) => {
                    var t, a, l, u, m, b, v, p, h, x, j, g;
                    let { albumId: T, trackId: O, preloadedAlbum: S, preloadedCpa: w, preloadedTrack: V } = e,
                        { contentScrollRef: K, setContentScrollRef: Y } = (0, D.g)(),
                        W = (0, s.useSearchParams)(),
                        $ = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[A.K.UTM_SOURCE] || !!t[A.K.CLID] || !!t[A.K.REF_ID];
                        })({ searchParams: Object.fromEntries(W.entries()) }),
                        { user: G, album: q, disclaimerModalState: Z, track: Q, sonataState: J, albumCPA: ee } = (0, _.g)(),
                        { checkIsValidClid: et, setClidToQuery: ea, deleteClidFromQuery: ei } = (0, M.I)(),
                        ec = (0, L.y)(null == (t = q.meta) ? void 0 : t.averageColor),
                        { headerStyle: eu } = (0, f.Q)(ec),
                        em = (0, P.l)({ mainObjectType: null != (x = null == (a = q.meta) ? void 0 : a.mainObjectType) ? x : o.DomainObjectType.Album }),
                        { deprecationUrl: ev, shouldRedirect: eh } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                n = Number(t),
                                o = new URLSearchParams(s);
                            (o.delete('albumId'), o.delete('trackId'));
                            let r = Object.fromEntries(o);
                            if ('number' == typeof a && a !== n) {
                                if (i) {
                                    let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: r });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: T,
                            deprecationTargetAlbumId: q.deprecationTargetAlbumId,
                            trackId: O,
                            realId: (null == (l = Q.meta) ? void 0 : l.id) === O ? (null == (u = Q.meta) ? void 0 : u.realId) : void 0,
                            searchParams: W,
                        }),
                        ex = (0, k.c)({ album: q.meta, shouldHistoryBack: !0 }),
                        e_ = !!(null == (m = q.meta) ? void 0 : m.isNonMusic),
                        ej = !!(O && B(V));
                    ((0, N.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: s } = null != (t = (0, ed.P)()) ? t : {};
                            (0, n.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == s || s(t);
                                } else {
                                    let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a } });
                                    null == s || s(e);
                                }
                                return () => {
                                    null == s || s(null);
                                };
                            }, [a, l, s, i]);
                        })({ albumId: T, trackId: O, isNonMusic: e_ }),
                        (0, n.useEffect)(() => {
                            var e;
                            (null == (e = q.meta) ? void 0 : e.isUnsafeLegal) && ex();
                        }, [null == (b = q.meta) ? void 0 : b.isUnsafeLegal, ex]),
                        (0, n.useLayoutEffect)(
                            () => (
                                O && T && !B(V) && Q.open({ trackId: O, albumId: Number(T) }),
                                () => {
                                    Q.reset();
                                }
                            ),
                            [T, V, O, Q],
                        ),
                        (0, n.useEffect)(() => {
                            var e;
                            ej && (null == (e = Q.meta) ? void 0 : e.resolveAllDisclaimers) && Q.meta.resolveAllDisclaimers();
                        }, [ej, Q.meta]),
                        (0, n.useEffect)(() => {
                            et(ee.cpa, Number(T)) || ei();
                        }, [et, T, ee.cpa, ei]),
                        (0, n.useEffect)(
                            () => (
                                q.id && q.id !== Number(T) && (q.reset(J), ei()),
                                () => {
                                    (q.reset(J), ei());
                                }
                            ),
                            [q, T, J, ei, ee],
                        ),
                        (0, R.J)(q.isResolved),
                        ((e, t, a, i, l) => {
                            var s, o, r, d;
                            (0, n.useEffect)(() => {
                                var s, n, o, r;
                                let d = t && a,
                                    c = null == i || null == (s = i.resolvedModalData) ? void 0 : s.title,
                                    u = null == e || null == (o = e.meta) || null == (n = o.resolvedModalData) ? void 0 : n.title;
                                if (a && (l || (null == i ? void 0 : i.isLegalRejected))) {
                                    if (!c) return;
                                    (0, F.j)({ title: c });
                                    return;
                                }
                                if (null == e || null == (r = e.meta) ? void 0 : r.isLegalRejected) {
                                    if (!u) return;
                                    (0, F.j)({ title: u });
                                    return;
                                }
                                if (!(null == e ? void 0 : e.meta) || e.isLoading || d) return;
                                let m = (0, X.f)(e.meta);
                                t ||
                                    el(m, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, F.j)(e);
                                    });
                            }, [
                                null == e ? void 0 : e.meta,
                                null == e ? void 0 : e.isLoading,
                                null == e || null == (s = e.meta) ? void 0 : s.isLegalRejected,
                                null == e || null == (r = e.meta) || null == (o = r.resolvedModalData) ? void 0 : o.title,
                                l,
                                a,
                                null == i ? void 0 : i.isLegalRejected,
                                null == i || null == (d = i.resolvedModalData) ? void 0 : d.title,
                                t,
                            ]);
                        })(q, Q.isOpened, O, Q.meta, ej),
                        (0, n.useEffect)(
                            () => (
                                em(!0),
                                () => {
                                    em(!1);
                                }
                            ),
                            [T, em],
                        ));
                    let eg = (0, d.L)(() => (e_ ? (0, i.jsx)(aH, {}) : (0, i.jsx)(ar, {}))),
                        ey = [];
                    (T &&
                        q.isNeededToLoad &&
                        (ey.push(q.getData({ albumId: Number(T), resumeStream: !1, preloadedAlbum: S, sonataState: J }), q.getDonations({ albumId: Number(T) })),
                        ($ || w) && ey.push(ee.getCpa({ albumId: Number(T), preloadedCpa: w }))),
                        ey.length && (0, n.use)(Promise.allSettled(ey)),
                        (0, n.useEffect)(() => {
                            ee.cpa && q.id && ea(ee.cpa, q.id);
                        }, [ee.cpa, q.id, ea]),
                        q.isNotFound && (0, s.notFound)(),
                        eh && (0, s.redirect)(ev),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, n.useRef)(0),
                                { notify: l } = (0, eo.l)(),
                                { formatMessage: s } = (0, es.A)();
                            (0, n.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let n = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? s({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : s({ id: 'album-errors.error-during-loading-album' });
                                        (l((0, i.jsx)(er.h, { error: n }), { containerId: en.u.ERROR }), a.current++);
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, s, l],
                            )();
                        })({ album: q }));
                    let eA = ej
                        ? null != (j = null == (v = Q.meta) ? void 0 : v.resolvedModalData)
                            ? j
                            : null
                        : null != (g = null == (p = q.meta) ? void 0 : p.resolvedModalData)
                          ? g
                          : null;
                    if (q.isCacheNotFound) return (0, i.jsx)(y, {});
                    if ((null == (h = q.meta) ? void 0 : h.isLegalRejected) || ej) return (0, i.jsx)(U.M, { modalState: Z, data: eA });
                    let ef = e_ ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE;
                    return (0, i.jsx)(E, {
                        pageAlbumId: Number(T),
                        children: (0, i.jsx)(I.j, {
                            children: (0, i.jsxs)(C.h, {
                                scrollElement: K,
                                children: [
                                    (0, i.jsx)(H.Y, {}),
                                    (0, i.jsxs)(c.C, {
                                        scrollableContainerRef: Y,
                                        className: ep().root,
                                        containerClassName: ep().content,
                                        scrollContentClassName: ep().scrollContent,
                                        'data-test-id': ef,
                                        children: [(0, i.jsx)('div', { className: ep().averageColorBackground, style: eu }), eg, (0, i.jsx)(eb, { user: G, album: q })],
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                aX = (0, l.PA)((e) => (0, i.jsx)(O.n, { pageId: T._Q.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(az, { ...e }) }));
        },
        59911: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(74631);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        60379: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(89288);
            let l = (e) => {
                if (!e) return null;
                let { h: t, s: a, l } = (0, i.g8)(e),
                    s = Math.min(70, Math.max(10, l + 10));
                return 'hsl('.concat(t, 'deg, ').concat(a, '%, ').concat(s, '%)');
            };
        },
        61288: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            let i = /^(0|[1-9]\d*)$/;
            function l(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61399: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(43464);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        66881: (e, t, a) => {
            'use strict';
            a.d(t, { Rk: () => o, VN: () => s, nd: () => n, vY: () => l });
            var i = a(48127);
            let l = 10,
                s = 1,
                n = [i.O.ABOUT, i.O.TRACKS],
                o = 5;
        },
        67716: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
            };
        },
        71472: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        72378: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        75568: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(47127),
                l = a(61399);
            let s = (e) => {
                var t, a, s, n, o;
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
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
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
        77635: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(25839),
                l = a(74631),
                s = a(36619),
                n = a(61777),
                o = a(95314),
                r = a(66284),
                d = a(76939);
            let c = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            title: u,
                            description: m,
                            albums: b,
                            className: v,
                            containerClassName: p,
                            headerClassName: h,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            shouldSendAnalyticsOnLoaded: g,
                            ...y
                        } = e,
                        A = (0, n.f)();
                    return (
                        (0, l.useEffect)(() => {
                            g && A();
                        }, [A, g]),
                        (0, i.jsx)(r.O, {
                            isShimmerVisible: a,
                            isShimmerActive: c,
                            className: v,
                            headerClassName: h,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            ...y,
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: b.length,
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
        78159: (e, t, a) => {
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
        79422: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(74631),
                l = a(71035);
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
        83918: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(74631);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        84e3: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(36484),
                l = a(62562);
            let s = () => (0, l.N)().get(i.Zf);
        },
        84252: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        85705: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { M: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(i || (i = {})));
        },
        86358: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        86584: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var i = a(25895);
            let l = (e) => (0, i.u)('/label/:labelId', { params: { labelId: e } });
        },
        87148: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        88720: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(75568);
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
                let a = (null == (t = e.artists) ? void 0 : t.map((e) => (0, i.N)(e))) || [];
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
        89179: (e) => {
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
        89728: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        90923: (e) => {
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
        91809: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(25839),
                l = a(82298),
                s = a(74631),
                n = a(39004),
                o = a(8487),
                r = a(89288),
                d = a(4071),
                c = a(66738),
                u = a(86869),
                m = a(4254),
                b = a(6323),
                v = a(97522),
                p = a(90923),
                h = a.n(p);
            let x = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: p, forwardRef: x, ..._ } = e,
                        { formatMessage: j } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        ref: x,
                        className: (0, l.$)(h().root, h().donation),
                        ...(0, r.OZ)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, i.jsx)(v.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
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
                                        onClick: p,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(c.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(o.A, { id: 'donation.support-button' }),
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
        93222: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        93596: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(25839),
                l = a(71035),
                s = a(16886),
                n = a(24816),
                o = a(25982),
                r = a(91149),
                d = a(92942),
                c = a(30296),
                u = a(27954);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let v = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: p } = (0, d.l)(),
                    { fullscreenPlayer: h } = (0, u.g)(),
                    x = (0, c.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = v(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == x || x.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == x || x.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let d = h.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    p((0, i.jsx)(o.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: d });
                });
            }
        },
        95641: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => m });
            var i = a(67379),
                l = a(17850),
                s = a(59450),
                n = a(71035),
                o = a(79670),
                r = a(26742),
                d = a(25488),
                c = a(97952),
                u = a(84e3);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: b, blockType: v, blockPosX: p, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: y, mainObjectId: A, mainObjectType: f } = (0, d.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let d = (0, i.F)({
                        params: {
                            objectType: x,
                            objectId: _,
                            objectPosX: j,
                            objectPosY: g,
                            hash: e,
                            pageId: r,
                            mainObjectType: f,
                            mainObjectId: A,
                            entityType: v,
                            entityId: b,
                            entityPosX: p,
                            entityPosY: h,
                            objectsCount: y,
                            viewUuid: n,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    d && (s ? (0, l.Pf)(a.evgenInstance, d) : (0, l.nv)(a.evgenInstance, d));
                });
            };
        },
        98056: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        98547: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
    },
]);
