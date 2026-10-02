(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [382],
    {
        1054: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        1418: (e) => {
            e.exports = {
                root: 'TrackAboutModalDesktop_root__NHeeO',
                root_withFullscreen: 'TrackAboutModalDesktop_root_withFullscreen__jOu4X',
                root_withCustomControls: 'TrackAboutModalDesktop_root_withCustomControls__b2JDR',
                header: 'TrackAboutModalDesktop_header__7Zl2n',
                modalContent: 'TrackAboutModalDesktop_modalContent__yf4i5',
                explicitMark: 'TrackAboutModalDesktop_explicitMark__tgVyh',
                important: 'TrackAboutModalDesktop_important__tCPvh',
                version: 'TrackAboutModalDesktop_version__m0z2v',
                explicit: 'TrackAboutModalDesktop_explicit__FGMHf',
                content: 'TrackAboutModalDesktop_content__eEGZu',
                artistLink: 'TrackAboutModalDesktop_artistLink__ao_zU',
                artists: 'TrackAboutModalDesktop_artists__2SlTA',
                overlay: 'TrackAboutModalDesktop_overlay__7cEGE',
                textShimmer: 'TrackAboutModalDesktop_textShimmer__r5_AA',
                text: 'TrackAboutModalDesktop_text__zcpo0',
            };
        },
        1703: (e) => {
            e.exports = {
                root: 'MainSectionDesktop_root__MjgTL',
                headingContainer: 'MainSectionDesktop_headingContainer__IaoRT',
                contentContainer: 'MainSectionDesktop_contentContainer__L4OlR',
            };
        },
        3669: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => h });
            var i = a(74631),
                l = a(67379),
                n = a(17850),
                s = a(59450),
                r = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                _ = a(25195),
                m = a(37314),
                p = a(25488),
                v = a(97952),
                x = a(10764),
                y = a(72594);
            let h = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: a } = (0, s.gf)(),
                    { pageId: h, displayReasonId: C } = (0, v.$)(),
                    { tabId: g, tabPos: A, isTabSelectedByDefault: f } = (0, y.R)(),
                    { offsetBlockPosY: b } = (0, _.u)(),
                    { blockType: j, blockId: N, blockPosX: T, blockPosY: S, mainObjectId: I, mainObjectType: k, displayReasonId: L } = (0, u.N)(),
                    { filterKey: E, filterValue: M, filterPos: P } = (0, m.G)(),
                    { objectType: O, objectsCount: w, objectId: R, objectPosX: D, objectPosY: B } = (0, p.J)(),
                    { skeleton: F } = (0, x.b)(),
                    U = null != L ? L : C,
                    z = (0, r.L)(() => (void 0 !== b && void 0 !== S ? b + S : S));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !h || !d.xK.includes(h) || !d.fD.includes(h)) return;
                        let r = c.F[h];
                        if (!r) return;
                        let o = {
                            hash: a,
                            pageId: r,
                            entityType: j,
                            entityId: N,
                            entityPosX: T,
                            entityPosY: z,
                            objectsCount: w,
                            viewUuid: s,
                            objectType: O,
                            objectId: R,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== E && ((o.filterKey = E), (o.filterValue = M), (o.filterPos = P)),
                            d.qG.includes(h) && ((o.tabId = g), (o.tabPos = A), (o.isTabSelectedByDefault = f)),
                            F && (o.skeletonId = F),
                            'string' == typeof I && 'string' == typeof k && ((o.mainObjectType = k), (o.mainObjectId = I)),
                            U && (o.displayReasonId = U));
                        let u = (0, l.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, n.Pf)(t.evgenInstance, u) : (0, n.nv)(t.evgenInstance, u));
                    },
                    [t, U, N, T, z, j, E, P, M, a, f, e, I, k, R, D, B, O, w, h, F, g, A],
                );
            };
        },
        3718: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        4274: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        4376: (e) => {
            e.exports = { writers: 'Lyrics_writers__xvrNp' };
        },
        4706: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        5365: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                l = a(74631),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    4014: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(2876)),
                            o = (e) => {
                                let { className: t, itemClassName: a, children: i, forwardRef: o, role: c, ...d } = e;
                                return (0, l.jsx)('ol', {
                                    ref: o,
                                    className: (0, n.clsx)(r.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, n.clsx)(r.default.item, a), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function r(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0));
                var e = r(4014);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = o.l;
            o.X;
        },
        5568: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => l });
            var i = a(22939);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        7500: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        8650: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => d });
            var i = a(25839),
                l = a(88204),
                n = a(4254),
                s = a(27954),
                r = a(97522),
                o = a(88293),
                c = a.n(o);
            let d = (0, l.PA)((e) => {
                let { children: t, href: a, className: l } = e,
                    {
                        currentTrackInfo: { modal: o },
                    } = (0, s.g)();
                return a
                    ? (0, i.jsx)(r.N, {
                          className: c().link,
                          href: a,
                          onClick: o.close,
                          children: (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t });
            });
        },
        9525: (e) => {
            e.exports = {
                content: 'MusicSectionMobile_content__lAARM',
                card: 'MusicSectionMobile_card__f5Xnr',
                logo_ru: 'MusicSectionMobile_logo_ru__itG4j',
                logo_en: 'MusicSectionMobile_logo_en__Tv2yd',
            };
        },
        9911: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                l = a(6274),
                n = a(74631),
                s = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                r = {};
            function o(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, l] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        r = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (l(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        r();
                    }, [a, r]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', r),
                                window.addEventListener('resize', r),
                                () => {
                                    (null == e || e.removeEventListener('scroll', r), window.removeEventListener('resize', r));
                                }
                            );
                        }, [a, r]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        10054: (e) => {
            e.exports = {
                button: 'PlusModalButton_button__Ayw3M',
                shimmer: 'PlusModalButton_shimmer__JDPqE',
                button_mobile: 'PlusModalButton_button_mobile__V2Et4',
                shimmer_mobile: 'PlusModalButton_shimmer_mobile__ndcfv',
                text: 'PlusModalButton_text__GRAK7',
            };
        },
        10378: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => s, ew: () => n });
            let i = 220,
                l = 88,
                n = 'px',
                s = '{lang}';
        },
        10499: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(12797));
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
        11560: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(25839),
                l = a(89288);
            let n = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.Gr)(a) } });
            };
        },
        11890: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        12846: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        12872: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        13232: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(74631).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        13319: () => {},
        14927: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        15434: (e) => {
            e.exports = {
                root: 'ClipAboutModalDesktop_root__F8UU5',
                root_withFullscreen: 'ClipAboutModalDesktop_root_withFullscreen__nTO1X',
                root_withWindows: 'ClipAboutModalDesktop_root_withWindows__kl4sc',
                header: 'ClipAboutModalDesktop_header__at6X6',
                modalContent: 'ClipAboutModalDesktop_modalContent__Rp_ON',
                explicitMark: 'ClipAboutModalDesktop_explicitMark__SLwRj',
                important: 'ClipAboutModalDesktop_important__LkqWo',
                content: 'ClipAboutModalDesktop_content__0dUY1',
                titleShimmer: 'ClipAboutModalDesktop_titleShimmer__zTtu_',
            };
        },
        16704: (e) => {
            e.exports = { root: 'PaywallBY_root__XMtUB' };
        },
        17944: (e) => {
            e.exports = {
                root: 'MultivibeModalTextBlock_root__6narg',
                title: 'MultivibeModalTextBlock_title___y6xs',
                title_withSubtitle: 'MultivibeModalTextBlock_title_withSubtitle__LrAqj',
                subtitle: 'MultivibeModalTextBlock_subtitle__IAqG4',
                description: 'MultivibeModalTextBlock_description__ffMAv',
            };
        },
        18300: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        18412: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => C });
            var i = a(25839),
                l = a(82298),
                n = a(74631),
                s = a(36619),
                r = a(61493),
                o = a(66738),
                c = a(23818),
                d = a(86869),
                u = a(23976),
                _ = a(4254),
                m = a(61777),
                p = a(29481),
                v = a(97522),
                x = a(73208),
                y = a.n(x);
            let h = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: x,
                            subTitle: h,
                            title: C,
                            description: g,
                            viewAllActionLink: A,
                            controls: f,
                            titleSize: b = 'm',
                            coverBackgroundColor: j,
                            coverRadius: N = 's',
                            titleClassName: T,
                            titleLineClamp: S,
                            fallbackIconVariant: I,
                            available: k = !0,
                            onViewAllAction: L,
                            titleChildren: E,
                            children: M,
                            headingRef: P,
                            coverContainerClassName: O,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: R = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: F,
                            withDescription: U,
                            forwardRef: z,
                            shimmerCoverClassName: W,
                            shouldSendAnalyticsOnLoaded: K,
                            ...H
                        } = e,
                        V = (0, m.f)(),
                        Y = (0, n.useRef)(null),
                        q = a || F,
                        Q = g || U,
                        $ = (0, n.useCallback)(() => {
                            Y.current && 'focus' in Y.current && Y.current.focus();
                        }, []),
                        G = (0, p.N)(),
                        Z = (0, n.useCallback)(() => {
                            L ? L() : G({ to: s.AppScreen.Link });
                        }, [G, L]);
                    (0, n.useEffect)(() => {
                        K && V();
                    }, [K, V]);
                    let X = (0, n.useMemo)(
                            () =>
                                C && A && k
                                    ? (0, i.jsxs)(v.N, {
                                          className: y().title,
                                          containerClassName: y().linkContainer,
                                          textClassName: y().linkText,
                                          icon: (0, i.jsx)(o.I, { className: y().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: A,
                                          onClick: Z,
                                          'data-test-id': r.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(y().heading, T),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: y().title,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(y().heading, T, { [y().heading_notAvailable]: !k }),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  'data-test-id': r.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      }),
                            [k, Z, P, w, x, C, T, S, b, A, E],
                        ),
                        J = (0, n.useMemo)(() => (U && D ? (0, i.jsx)(u.W, { isActive: B, className: y().shimmerDescription }) : g), [U, D, g, B]),
                        ee = (0, n.useMemo)(
                            () =>
                                F && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, l.$)(y().shimmerCover, W), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: j },
                                          className: y().cover,
                                          ref: Y,
                                          onClick: $,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': r.S7.BLOCK_HEADER_COVER,
                                      }),
                            [j, a, I, $, B, D, W, F],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(y().root, t),
                        ref: z,
                        ...H,
                        'data-test-id': r.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y().start,
                                children: [
                                    q && (0, i.jsx)(d.t, { radius: N, className: (0, l.$)(y().coverContainer, O), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: y().textContainer,
                                        children: [
                                            h,
                                            X,
                                            Q &&
                                                (0, i.jsx)(_.HL, {
                                                    id: ''.concat(x, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: R ? 2 : void 0,
                                                    className: (0, l.$)(y().description, { [y().description_widthLimit]: R }),
                                                    'data-test-id': r.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            f || M,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        19666: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
        },
        20093: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        21213: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(36095);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    n = null != a ? a : i.by,
                    s = (0, i.de)((0, i.aq)(e), l, n),
                    r = Math.round(255 * s[0]),
                    o = Math.round(255 * s[1]),
                    c = Math.round(255 * s[2]);
                return 'rgb('.concat(r, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        22523: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        23318: (e) => {
            e.exports = { root: 'PaywallFAQ_root__lDVk4', title: 'PaywallFAQ_title__G44Rp', content: 'PaywallFAQ_content__QJL9h' };
        },
        23435: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionDesktop_content_ru__gILD5',
                content_by: 'KinopoiskSectionDesktop_content_by__31QvZ',
                card1: 'KinopoiskSectionDesktop_card1__nlqOH',
                card2: 'KinopoiskSectionDesktop_card2__ZMW4Z',
                card3: 'KinopoiskSectionDesktop_card3__n9_1i',
                card4: 'KinopoiskSectionDesktop_card4__TpOZ7',
                logo_ru: 'KinopoiskSectionDesktop_logo_ru__f6OLB',
                logo_en: 'KinopoiskSectionDesktop_logo_en__2oXnD',
            };
        },
        23480: (e) => {
            e.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        23672: (e) => {
            e.exports = { imageWrapper: 'MultivibePromoModal_imageWrapper___P4Nx', button: 'MultivibePromoModal_button__8vUYb' };
        },
        24120: (e) => {
            e.exports = {
                root: 'VideoPlayerContainer_root__GHDoi',
                container: 'VideoPlayerContainer_container__pZe41',
                container_adaptiveAspectRatio: 'VideoPlayerContainer_container_adaptiveAspectRatio__mBFoR',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        24252: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var i = a(98797),
                l = a(74268),
                n = a(74631),
                s = a(17226),
                r = a(58025);
            class o extends i.uN {}
            (0, r._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === s.v.ENTER;
                    },
                },
            ]);
            let c = () => {
                let [e, t] = (0, n.useState)(null),
                    a = (0, n.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, n.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [s.v.ENTER], cancel: [s.v.ESCAPE], end: [s.v.ENTER] } }),
                    ),
                };
            };
        },
        24656: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        24696: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        26115: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(40207),
                l = a(12929);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: l.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        26208: (e, t, a) => {
            'use strict';
            function i(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => i });
        },
        26268: (e) => {
            e.exports = {
                content_ru: 'PlusSectionMobile_content_ru__OvJV0',
                content_by: 'PlusSectionMobile_content_by__d5iGm',
                card: 'PlusSectionMobile_card__QbwGe',
                logo_ru: 'PlusSectionMobile_logo_ru___FFew',
                logo_en: 'PlusSectionMobile_logo_en__u_HSO',
            };
        },
        26460: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
        27625: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(74631).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        28257: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        28664: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        30194: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        30232: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        30791: (e) => {
            e.exports = {
                content: 'MusicSectionDesktop_content__uCWAp',
                card: 'MusicSectionDesktop_card__YurZs',
                logo_ru: 'MusicSectionDesktop_logo_ru__Tiwfx',
                logo_en: 'MusicSectionDesktop_logo_en__dbYCi',
            };
        },
        31072: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        31274: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        31532: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ProductLayoutClientOnlyModalsContent: () => dE }));
            var i,
                l,
                n,
                s,
                r,
                o,
                c,
                d,
                u,
                _,
                m,
                p,
                v,
                x,
                y = a(25839),
                h = a(88204),
                C = a(36619),
                g = a(74631),
                A = a.t(g, 2),
                f = a(71035),
                b = a(35622),
                j = a(89192),
                N = a(27954),
                T = a(44806),
                S = a(88720),
                I = a(75501),
                k = a(75568),
                L = a(61732),
                E = a(12234),
                M = a(89221),
                P = a(33920),
                O = a(41242),
                w = a(27935),
                R = a(41016),
                D = a(80461),
                B = a(95445),
                F = a(38097),
                U = a(91907),
                z = a(34546),
                W = a(22403);
            async function K(e, t, a) {
                var i, l, n, s, r, o, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, M.W)(a.locale),
                    u = (0, O.N)(null != (i = e.title) ? i : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (l = a.disclaimerTitle)
                                  ? l
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: i } = e,
                                            l = (0, z.j)(null != (t = a.artists) ? t : []);
                                        return i({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: l });
                                    })({ trackMeta: e, messageFormatter: d }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                  s = (0, z.j)(null != (a = i.artists) ? a : []),
                                  r = Math.round((i.durationMs || 0) / F.k7);
                              return n(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: s || null,
                                      trackTitle: i.title,
                                      albumTitle: (null == l ? void 0 : l.title) || null,
                                      duration: (0, U.E)(r),
                                      year: (null == l ? void 0 : l.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                          openGraph: (0, w.i)({
                              ogTitle: u,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                      s = (0, W.Y)((0, z.j)(null != (a = i.artists) ? a : []), 96, !1);
                                  return n(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: s || null,
                                          year: (null == l ? void 0 : l.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                              fullUrl: null != (n = a.fullUrl) ? n : '',
                              locale: a.locale,
                              ogImage: null != (s = e.ogImage) ? s : '',
                              siteName: d({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, R.H)({ cardType: D.W.APP, title: u, url: a.url, appName: d({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, E.X)({
                              additional: { ...a, url: null != (r = a.url) ? r : '', fullUrl: null != (o = a.fullUrl) ? o : '', host: a.host },
                              appName: d({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, P.x)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, B.S)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var H = a(56761),
                V = a.n(H),
                Y = a(39004),
                q = a(61493),
                Q = a(4071),
                $ = a(66738),
                G = a(43708),
                Z = a(26115),
                X = a(89288),
                J = a(36484),
                ee = a(62562),
                et = a(78159),
                ea = a(83065),
                ei = a(11560);
            let el = (0, h.PA)((e) => {
                var t, a;
                let { user: i, track: l } = e,
                    n = (0, ee.N)().get(J.V4),
                    s = (0, ea._)(n.webHost);
                if (i.isAuthorized) return null;
                let r = { host: 'https://'.concat(s) },
                    { href: o } = l.albumId
                        ? (0, X.no)('/album/:albumId/track/:trackId', { params: { albumId: l.albumId, trackId: l.id }, options: r })
                        : (0, X.no)('/track/:trackId', { params: { trackId: l.id }, options: r }),
                    c = l.mainArtist ? (0, X.no)('/artist/:artistId', { params: { artistId: l.mainArtist.id }, options: r }).href : void 0,
                    d = l.mainAlbum ? (0, X.no)('/album/:albumId', { params: { albumId: l.mainAlbum.id }, options: r }).href : void 0;
                return (0, y.jsx)(ei.S, {
                    value: {
                        '@type': 'MusicRecording',
                        name: l.title,
                        url: o,
                        thumbnailUrl: l.coverUri ? (0, X.lU)(l.coverUri, 'orig') : void 0,
                        duration: (0, et.F)(null != (t = l.durationMs) ? t : 0),
                        genre: null != (a = l.genre) ? a : void 0,
                        datePublished: l.pubDate,
                        description: l.shortDescription,
                        byArtist: l.mainArtist ? { '@type': 'MusicGroup', name: l.mainArtist.name, url: c } : void 0,
                        inAlbum: l.mainAlbum
                            ? {
                                  '@type': 'MusicAlbum',
                                  name: l.mainAlbum.title,
                                  url: d,
                                  thumbnailUrl: l.mainAlbum.coverUri ? (0, X.lU)(l.mainAlbum.coverUri, 'orig') : void 0,
                              }
                            : void 0,
                        potentialAction: {
                            '@type': 'ListenAction',
                            expectsAcceptanceOf: { '@type': 'Offer', category: 'free', target: { '@type': 'EntryPoint', actionPlatform: o } },
                        },
                    },
                });
            });
            var en = a(91149),
                es = a(92942),
                er = a(57549),
                eo = a(4254),
                ec = a(56829),
                ed = a(56778),
                eu = a(18412),
                e_ = a(31072),
                em = a.n(e_),
                ep = a(23976),
                ev = a(12846),
                ex = a.n(ev);
            let ey = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: ex().root,
                        children: [
                            (0, y.jsx)(ep.W, { className: ex().title, isActive: t }),
                            (0, y.jsxs)('div', {
                                className: ex().coverBlock,
                                children: [
                                    (0, y.jsx)(ep.W, { className: ex().cover, isActive: t }),
                                    (0, y.jsxs)('div', {
                                        className: ex().linkBlock,
                                        children: [
                                            (0, y.jsx)(ep.W, { className: ex().link, isActive: t }),
                                            (0, y.jsx)(ep.W, { className: ex().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                eh = (0, h.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: i } = (0, Y.A)(),
                        {
                            settings: { isMobile: l },
                            track: n,
                            fullscreenPlayer: s,
                        } = (0, N.g)(),
                        r = (0, f.c)(() => {
                            (s.modal.isOpened && s.modal.close(), l && a());
                        }),
                        o = null == (t = n.meta) ? void 0 : t.mainAlbum;
                    if (n.isShimmerVisible) return (0, y.jsx)(ey, { isShimmerActive: n.isLoading });
                    if (!o) return null;
                    let c = ((e, t, a) =>
                        a(
                            e === ec._.AUDIOBOOK || e === ec._.FAIRY_TALE
                                ? { id: 'entity-names.number-of-chapters' }
                                : e === ec._.PODCAST
                                  ? { id: 'entity-names.number-of-episodes' }
                                  : { id: 'entity-names.number-of-tracks' },
                            { counter: t },
                        ))(o.type, o.trackCount, i);
                    return (0, y.jsxs)('div', {
                        className: em().root,
                        'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM,
                        children: [
                            (0, y.jsx)(eo.DZ, {
                                variant: 'h2',
                                size: 'm',
                                lineClamp: 1,
                                className: em().title,
                                'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM_TITLE,
                                children: i({ id: 'track-modal.album-heading' }, { type: (0, ed.y)(o.type) }),
                            }),
                            (0, y.jsx)(eu.T, {
                                title: null == o ? void 0 : o.title,
                                coverUrl: null == o ? void 0 : o.coverUri,
                                description: c,
                                viewAllActionLink: null == o ? void 0 : o.url,
                                onViewAllAction: r,
                                titleLineClamp: 1,
                                available: o.isAvailable,
                                titleSize: 'xs',
                                withCover: !0,
                                withDescription: !!c,
                            }),
                        ],
                    });
                });
            var eC = a(14693),
                eg = a(95759),
                eA = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    1733: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'BnN6sQIg6NahNBun6fkP',
                            fade: 'MM8MKXCw0gMkVvq7C1YS',
                            fade_active: 'MsLY_qiKofQrwKAr98EC',
                            button: 'Dp6n_Y0cfUyPQT1Z6uIm',
                            text: 'bfmUuyonXAK7HKYtDzUK',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    792: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let i = a(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, i.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, a = Array(e), i = 0; i < e; i++) a[i] = arguments[i];
                                    return t.current.callback(...a);
                                },
                                callback: e,
                            });
                            return (
                                (0, i.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    588: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useResize = void 0));
                        let i = a(810),
                            l = a(1848);
                        t.useResize = (e, t) => {
                            (0, i.useEffect)(() => {
                                let a = (0, l.getElementFromRefOrElement)(t);
                                if (null === a) return;
                                let i = null != a ? a : document.documentElement,
                                    n = new ResizeObserver(e);
                                return (n.observe(i), () => n.disconnect());
                            }, [t, e]);
                        };
                    },
                    2111: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTruncate = void 0));
                        let i = a(810),
                            l = a(588),
                            n = a(792);
                        t.useTruncate = function (e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
                                [a, s] = (0, i.useState)(0),
                                [r, o] = (0, i.useState)(!1);
                            (0, i.useEffect)(() => {
                                var i;
                                let l = null == (i = e.current) ? void 0 : i.offsetHeight;
                                a || !l || ('vertical' === t && s(l));
                            }, [a, t, e]);
                            let c = (0, n.useCallbackRef)(() => {
                                let i = e.current;
                                i && ('horizontal' === t && o(i.scrollWidth > i.clientWidth), 'vertical' === t && o(i.offsetHeight > 0 && a < i.scrollHeight));
                            });
                            return ((0, l.useResize)(c, e), { isTruncated: r });
                        };
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    l = document.createElement('span'),
                                    n = Math.max(i.clientWidth, i.clientHeight),
                                    s = n / 2,
                                    r = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(r.width / 2) : e.clientX - r.left,
                                    c = 0 === e.clientY ? Math.round(r.height / 2) : e.clientY - r.top;
                                ((l.style.width = ''.concat(n, 'px')),
                                    (l.style.height = ''.concat(n, 'px')),
                                    (l.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                                    (l.style.top = ''.concat(c - s, 'px')),
                                    l.classList.add(t));
                                let d = i.getElementsByClassName(t)[0];
                                (d && d.remove(), i.insertBefore(l, i.firstChild));
                            }));
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
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            l = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let n = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, l.findColorBucketByName)(e);
                            return a ? n(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, l.findColorBucketByHue)(t.h) : (0, l.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? n(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var l = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return l.getElementFromRefOrElement;
                            },
                        });
                        var n = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return n.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let l = a(4377),
                            n = a(810),
                            s = a(5881),
                            r = a(6882),
                            o = i(a(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: i = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: v,
                                        onClick: x,
                                        radius: y = 'm',
                                        size: h,
                                        type: C = 'button',
                                        variant: g = 'default',
                                        withRipple: A = !0,
                                        withHover: f = !0,
                                        withBorder: b = !1,
                                        disabled: j,
                                        focusableWhenDisabled: N,
                                        'aria-disabled': T,
                                        iconClassName: S,
                                        contentContainerClassName: I,
                                        ...k
                                    } = e,
                                    L = (0, n.useId)(),
                                    E = !n.Children.toArray(c).filter(Boolean).length,
                                    M = 'left' === i,
                                    P = null,
                                    O = (0, n.isValidElement)(p);
                                if (m) {
                                    var w, R;
                                    P = (0, n.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(i)]]: i && !E,
                                                [o.default.icon_withButtonSize]: !(null == (w = m.props) ? void 0 : w.size),
                                            },
                                            null == (R = m.props) ? void 0 : R.className,
                                            S,
                                        ),
                                        key: L,
                                    });
                                }
                                let D = (0, n.useMemo)(() => (O ? (0, l.jsx)('div', { className: o.default.spinnerContainer, children: p }) : null), [O, p]),
                                    B = (0, n.useCallback)(
                                        (e) => {
                                            if (j) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            O || (A && (0, r.createRipple)(e, o.default.ripple), null == x || x(e));
                                        },
                                        [j, O, x, A],
                                    );
                                return (0, l.jsx)('button', {
                                    ref: t,
                                    className: (0, s.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(g)],
                                        o.default['root_radius_'.concat(y)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(g)]]: f && !j && !O,
                                            [o.default['root_size_'.concat(h)]]: h,
                                            [o.default.root_withoutBorder]: !b,
                                            [o.default.root_withActiveSpinner]: O,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: _,
                                            [o.default.iconOnly]: E,
                                            [o.default.root_icon_left]: m && !E && M,
                                            [o.default.root_icon_right]: m && !E && !M,
                                        },
                                        d,
                                    ),
                                    type: C,
                                    role: v,
                                    onClick: B,
                                    ...k,
                                    disabled: j && !N,
                                    'aria-disabled': (j && N) || T,
                                    'data-disabled': j || void 0,
                                    'aria-live': O ? 'polite' : 'off',
                                    'aria-busy': O,
                                    children:
                                        m || O
                                            ? (0, l.jsxs)('span', {
                                                  className: (0, s.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, I),
                                                  children: [m && M && P, !E && c, m && !M && P, D],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, n.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7642: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CollapsableText = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(2111),
                            o = a(7291),
                            c = i(a(1733));
                        t.CollapsableText = (e) => {
                            var t;
                            let {
                                    className: a,
                                    children: i,
                                    lineClamp: d,
                                    moreText: u,
                                    lessText: _,
                                    buttonClassName: m,
                                    buttonProps: p,
                                    withFade: v,
                                    initialOpen: x = !1,
                                    open: y,
                                    onOpenChange: h,
                                    ...C
                                } = e,
                                [g, A] = (0, s.useState)(x),
                                f = (0, s.useRef)(null),
                                { isTruncated: b } = (0, r.useTruncate)(f),
                                j = null != y ? y : g,
                                N = null != h ? h : A,
                                T = (0, s.cloneElement)(i, {
                                    ref: f,
                                    lineClamp: (!j && d) || void 0,
                                    className: (0, n.clsx)(null == (t = i.props) ? void 0 : t.className, c.default.text),
                                }),
                                S = (0, s.useMemo)(
                                    () => (v && b ? (0, l.jsx)('div', { className: (0, n.clsx)(c.default.fade, { [c.default.fade_active]: !j }), children: T }) : T),
                                    [b, j, T, v],
                                ),
                                I = (0, s.useCallback)(() => {
                                    N(!j);
                                }, [j, N]),
                                k = j ? _ : u;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(c.default.root, a),
                                ...C,
                                children: [
                                    S,
                                    b &&
                                        k &&
                                        (0, l.jsx)(o.Button, {
                                            ...p,
                                            variant: 'text',
                                            withRipple: !1,
                                            onClick: I,
                                            className: (0, n.clsx)(c.default.button, m),
                                            color: 'primary',
                                            children: k,
                                        }),
                                ],
                            });
                        };
                    },
                    2660: (e) => {
                        e.exports = eg;
                    },
                    810: (e) => {
                        e.exports = A;
                    },
                },
                ef = {};
            function eb(e) {
                var t = ef[e];
                if (void 0 !== t) return t.exports;
                var a = (ef[e] = { exports: {} });
                return (eA[e].call(a.exports, a, a.exports, eb), a.exports);
            }
            ((eb.d = (e, t) => {
                for (var a in t) eb.o(t, a) && !eb.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eb.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eb.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var ej = {};
            (() => {
                (Object.defineProperty(ej, 'X', { value: !0 }), (ej.f = void 0));
                var e = eb(7642);
                Object.defineProperty(ej, 'f', {
                    enumerable: !0,
                    get: function () {
                        return e.CollapsableText;
                    },
                });
            })();
            var eN = ej.f;
            ej.X;
            var eT = a(44288),
                eS = a(4376),
                eI = a.n(eS);
            let ek = (e) => {
                let { lyrics: t, authors: a, source: i, isShimmerVisible: l, isShimmerActive: n } = e,
                    { formatMessage: s } = (0, Y.A)();
                return l
                    ? (0, y.jsx)(eT.q, { count: 25, isActive: n })
                    : (0, y.jsxs)(y.Fragment, {
                          children: [
                              t,
                              (0, y.jsxs)('div', {
                                  className: eI().writers,
                                  children: [
                                      a.length > 0 &&
                                          (0, y.jsx)(eo.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_AUTHORS,
                                              children: s({ id: 'entity-names.authors' }, { authors: a }),
                                          }),
                                      i &&
                                          (0, y.jsx)(eo.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_SOURCE,
                                              children: s({ id: 'entity-names.source' }, { source: i }),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
            var eL = a(77718),
                eE = a.n(eL),
                eM = a(82298),
                eP = a(73809),
                eO = a.n(eP);
            let ew = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: eO().root,
                        children: [
                            (0, y.jsx)(ep.W, { className: eO().title, isActive: t }),
                            (0, y.jsx)(eT.q, { className: (0, eM.$)(eO().lyrics, eO().important), count: 4, isActive: t }),
                            (0, y.jsx)(ep.W, { className: eO().button, isActive: t }),
                        ],
                    });
                },
                eR = (0, h.PA)((e) => {
                    var t, a, i, l;
                    let { track: n } = e,
                        { formatMessage: s } = (0, Y.A)(),
                        { notify: r } = (0, es.l)(),
                        { track: o, trackLyrics: c } = (0, N.g)(),
                        { state: d, setState: u } = (0, eC.e)(!1),
                        _ = c.currentTrackId !== (null == (t = o.meta) ? void 0 : t.id),
                        m = o.isResolved && (null == (a = o.meta) ? void 0 : a.isLyricsAvailable);
                    ((0, g.useEffect)(() => {
                        var e;
                        (null == (e = o.meta) ? void 0 : e.id) && m && _ && c.getLyrics(o.meta.id);
                    }, [_, m, c, null == (i = o.meta) ? void 0 : i.id]),
                        c.shouldShowErrorNotification &&
                            (r((0, y.jsx)(er.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR }), c.resetShouldShowError()));
                    let p = (0, f.c)((e) => {
                        (u(e), e && n && c.sendViews({ trackId: n.id, albumId: n.albumId }));
                    });
                    return c.isShimmerVisible || !c.lyrics || o.isShimmerVisible
                        ? (0, y.jsx)(ew, { isShimmerActive: c.isLoading || o.isLoading })
                        : (0, y.jsxs)('div', {
                              className: eE().root,
                              'data-test-id': q.Xk.track.TRACK_PAGE_LYRICS,
                              children: [
                                  (0, y.jsx)(eo.DZ, {
                                      variant: 'h2',
                                      size: 'm',
                                      lineClamp: 1,
                                      className: eE().title,
                                      'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                                      children: s({ id: 'entity-names.text' }),
                                  }),
                                  (0, y.jsx)(eN, {
                                      moreText: s({ id: 'track-modal.read-more' }),
                                      buttonClassName: eE().button,
                                      buttonProps: { 'data-test-id': q.e8.content.TRACK_LYRICS_TITLE_READ_MORE_BUTTON },
                                      open: d,
                                      onOpenChange: p,
                                      lineClamp: 4,
                                      withFade: !0,
                                      children: (0, y.jsx)(
                                          eo.HL,
                                          {
                                              variant: 'div',
                                              className: eE().lyrics,
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                                              children: (0, y.jsx)(ek, {
                                                  lyrics: c.lyrics,
                                                  authors: c.writersNames,
                                                  source: null == (l = c.major) ? void 0 : l.prettyName,
                                                  isShimmerVisible: c.isShimmerVisible,
                                                  isShimmerActive: c.isLoading,
                                              }),
                                          },
                                          null == n ? void 0 : n.getKey('lyrics'),
                                      ),
                                  }),
                              ],
                          });
                });
            var eD = a(22939),
                eB = a(32110),
                eF = a(82967),
                eU = a(30290),
                ez = a(3718),
                eW = a(28777),
                eK = a(97805),
                eH = a(12872),
                eV = a.n(eH);
            let eY = (0, h.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: i, isShimmerActive: l, autoflowSeeds: n, shouldResetCarouselScroll: s } = e,
                    { formatMessage: r } = (0, Y.A)(),
                    { from: o } = (0, eU.f)({ contextId: a, contextType: eD.K.Various }),
                    c = (0, f.c)((e, a) => ({
                        contextData: { type: eD.K.Various, meta: { id: e.entityId }, from: o, overrideAutoflowSeeds: n },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(eB.$),
                    }));
                return (0, y.jsx)(eW.$, {
                    className: eV().root,
                    shimmer: (0, y.jsx)(eK.D, { variant: ez.X.PLAYLIST, isActive: l }),
                    maxColumnsCount: eW.D.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: r({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: i,
                    isShimmerActive: l,
                    carouselItemClassName: (0, eM.$)(eV().item, eV().important),
                    blockHeaderClassName: eV().title,
                    carouselClassName: eV().tracksContainer,
                    shouldResetCarouselScroll: s,
                    'data-test-id': q.Xk.track.TRACK_PAGE_SIMILAR_TRACKS,
                    children: t.map((e, t) => (0, y.jsx)(eF.K, { track: e, playContextParams: c(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var eq = a(92543),
                eQ = a(4331),
                e$ = a(62926),
                eG = a(8487),
                eZ = a(49999),
                eX = a(3407),
                eJ = a(17545),
                e0 = a(79367),
                e1 = a(47009),
                e2 = a(29872),
                e4 = a(61561),
                e8 = a(50209),
                e6 = a(64720),
                e3 = a(49438),
                e5 = a(87148),
                e9 = a.n(e5);
            let e7 = (e) => {
                let { className: t, text: a, analyticsNavigatedCallback: i } = e,
                    {
                        settings: { isMobile: l },
                        paywall: n,
                    } = (0, N.g)(),
                    s = (0, f.c)((e) => {
                        (n.openModal(), e.stopPropagation(), null == i || i());
                    });
                return l
                    ? (0, y.jsx)(Q.$, {
                          onClick: s,
                          className: (0, eM.$)(e9().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: (0, y.jsx)(eo.HL, { className: e9().title, weight: 'bold', variant: 'div', size: 'l', children: a }),
                      })
                    : (0, y.jsx)(Q.$, {
                          onClick: s,
                          className: (0, eM.$)(e9().root, t),
                          color: 'plus',
                          size: 'm',
                          radius: 'xxxl',
                          'data-test-id': q.S7.PLUS_PAYWALL_BUTTON,
                          children: (0, y.jsx)(eo.HL, { className: e9().title, weight: 'bold', variant: 'div', size: 'm', children: a }),
                      });
            };
            var te = a(67379),
                tt = a(17850),
                ta = a(59450),
                ti = a(79670),
                tl = a(20258),
                tn = a(84e3),
                ts = a(66922),
                tr = a.n(ts);
            let to = (0, h.PA)((e) => {
                var t, a, i;
                let { track: l } = e,
                    { shouldShowBuySubscriptionModal: n, showBuySubscriptionModal: s } = (0, e2.q)(),
                    { from: r, utmLink: o } = (0, eU.f)({ contextId: l.id, contextType: eD.K.Various }),
                    {
                        user: c,
                        settings: { isMobile: d },
                        track: { shouldSendEventOnPlusButtonShowed: u, setShouldSendEventOnPlusButtonShowed: _, isOpened: m },
                        albumCPA: { isPlusCPAPlayerBarEnabled: p },
                        paywall: { modal: v },
                    } = (0, N.g)(),
                    x = (0, e1.b)(),
                    h = ((e) => {
                        let t = (0, ta.st)(),
                            a = (0, tn.U)(),
                            { hash: i } = (0, ta.gf)();
                        return (0, f.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: ti.W[tl._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    from: ti.W[tl._Q.TRACK_SCREEN],
                                    to: ti.W[tl._Q.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, te.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            n && (0, tt.QS)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    A = ((e) => {
                        let t = (0, ta.st)(),
                            a = (0, tn.U)(),
                            { hash: i } = (0, ta.gf)();
                        return (0, f.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: ti.W[tl._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, te.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            n && (0, tt.Pf)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    b = (0, e0.P)(),
                    j = !c.hasPlus && l.isTrackMusic && ((l.isAvailable && !l.hasModalAccess) || (null == (t = l.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    T = (0, e4.N)(),
                    S = p(null == (a = l.mainAlbum) ? void 0 : a.id, null == (i = l.mainAlbum) ? void 0 : i.isNonMusic),
                    I = l.isAvailable && T && !S,
                    { iconSize: k, controlSize: L } = (0, eZ.q)(d),
                    [E, M] = (0, g.useState)(!1),
                    { isPlaying: P, togglePlay: O } = (0, e8.D)({
                        playContextParams: { contextData: { type: eD.K.Various, meta: { id: l.entityId }, from: r, utmLink: o }, loadContextMeta: !0 },
                        entityId: l.entityId,
                    }),
                    w = (0, Z.w)({ track: l, callback: O }),
                    R = (0, f.c)(() => {
                        if (!b()) {
                            if (n && !S) return void s();
                            if (I) return void v.open();
                            (w(), x(!P));
                        }
                    }),
                    D = (0, eJ.K)(l),
                    B = (0, f.c)((e) => {
                        e.stopPropagation();
                    });
                (0, g.useEffect)(() => {
                    u && j && m && (A(), _(!1));
                }, [A, j, u, _, m]);
                let F = (0, g.useMemo)(() => {
                        if (j) return (0, y.jsx)(e7, { text: (0, y.jsx)(eG.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: h });
                    }, [j, h]),
                    U = j ? 'secondary' : 'primary';
                return (0, y.jsxs)('div', {
                    className: tr().root,
                    children: [
                        F,
                        (0, y.jsxs)('div', {
                            className: tr().controlsContainer,
                            children: [
                                (0, y.jsx)(e3.D, {
                                    className: (0, eM.$)({ [tr().disabledButtonByDisclaimer]: !l.isAvailable && l.hasModalAccess }),
                                    withRipple: l.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: L,
                                    color: U,
                                    iconSize: k,
                                    isPlaying: P,
                                    onClick: R,
                                    disabled: !l.isAvailable && !l.hasModalAccess,
                                    children: !d && (0, y.jsx)(eG.A, { id: 'player-actions.listen' }),
                                }),
                                (0, y.jsx)(e6.c, {
                                    isLiked: l.isLiked,
                                    onClick: D,
                                    variant: 'default',
                                    size: L,
                                    iconSize: k,
                                    withRipple: !d,
                                    disabled: !l.isAvailable || !c.isAuthorized,
                                }),
                                l.isAvailable &&
                                    (0, y.jsx)(eX._, {
                                        track: l,
                                        open: E,
                                        onOpenChange: M,
                                        size: L,
                                        icon: (0, y.jsx)($.I, { variant: 'more', size: k }),
                                        className: (0, eM.$)(tr().menuButton, { [tr().menuButton_active]: E }),
                                        wrapperClassName: tr().menuWrapper,
                                        onClick: B,
                                        withTrailer: !1,
                                        'data-test-id': q.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tc = a(74060),
                td = a.n(tc),
                tu = a(18300),
                t_ = a.n(tu);
            let tm = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: t_().root,
                        children: [
                            (0, y.jsx)(ep.W, { className: t_().entityName, isActive: t }),
                            (0, y.jsx)(ep.W, { className: t_().title, isActive: t }),
                            (0, y.jsx)(eT.q, {
                                className: (0, eM.$)(t_().artists, t_().important),
                                shimmerClassName: t_().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, y.jsxs)('div', {
                                className: t_().controls,
                                children: [
                                    (0, y.jsx)(ep.W, { className: t_().playButton, isActive: t }),
                                    (0, y.jsx)(ep.W, { className: t_().button, isActive: t }),
                                    (0, y.jsx)(ep.W, { className: t_().button, isActive: t }),
                                    (0, y.jsx)(ep.W, { className: t_().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                tp = (0, h.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: i, isTrackPage: l } = e,
                        { formatMessage: n } = (0, Y.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        r = null == t ? void 0 : t.explicitDisclaimer,
                        o = (0, g.useMemo)(() => {
                            if (r)
                                return (0, y.jsx)(e$.N, {
                                    className: (0, eM.$)(td().explicitMark, td().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: r,
                                });
                        }, [r, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, y.jsx)(tm, { isShimmerActive: i })
                        : t
                          ? (0, y.jsx)(eq.k, {
                                entityName: n({ id: 'entity-names.track-type' }, { type: (0, ed.y)(t.type) }),
                                entityNameIcon: o,
                                controls: (0, y.jsx)(to, { track: t }),
                                meta: (0, y.jsx)(eQ.i, {
                                    className: (0, eM.$)(td().text, td().important),
                                    linkClassName: td().link,
                                    captionClassName: td().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: s ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: l ? 'h1' : 'div',
                                titleClassName: (0, eM.$)(td().title, td().important),
                                metaClassName: (0, eM.$)(td().meta, td().important),
                                contentClassName: (0, eM.$)(td().content, td().important),
                                withHeadingClamp: !1,
                                entityNameClassName: td().entityName,
                            })
                          : null;
                }),
                tv = (0, h.PA)(() => {
                    var e, t, a, i, l, n, s, r;
                    let { formatMessage: o } = (0, Y.A)(),
                        { notify: c } = (0, es.l)(),
                        {
                            user: d,
                            track: u,
                            albumCPA: { isPlusCPAPlayerBarEnabled: _ },
                        } = (0, N.g)(),
                        m = _(
                            null == (t = u.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (i = u.meta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        { shouldShowSimilarTracks: p } = ((e, t, a) => {
                            let i = null != e ? e : [],
                                l = i.length > 0 && (0, G.f)(t) && !a;
                            return { tracks: l ? i.slice(0, 8) : [], shouldShowSimilarTracks: l };
                        })(u.similarTracks, null == (l = u.meta) ? void 0 : l.type, m),
                        v = (0, f.c)(() => {
                            (u.setAnimationState(!0), u.close(), u.reset());
                        }),
                        x = (0, Z.w)({ track: u.meta, disclaimerRejectHandler: v });
                    return (
                        (0, g.useEffect)(() => {
                            var e;
                            u.isOpened && (null == (e = u.meta) ? void 0 : e.isLegalRejected) && u.close();
                        }, [u, u.isOpened, null == (n = u.meta) ? void 0 : n.isLegalRejected]),
                        (0, g.useEffect)(() => {
                            x();
                        }, [x]),
                        u.isRejected && c((0, y.jsx)(er.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR }),
                        (0, y.jsxs)('div', {
                            'data-test-id': q.Xk.track.TRACK_PAGE,
                            children: [
                                (0, y.jsxs)('header', {
                                    className: V().header,
                                    children: [
                                        (0, y.jsx)(Q.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                            className: V().closeButton,
                                            onClick: v,
                                            'aria-label': o({ id: 'interface-actions.close' }),
                                            'data-test-id': q.Xk.track.TRACK_PAGE_CLOSE_BUTTON,
                                        }),
                                        (0, y.jsx)(tp, { track: u.meta, isShimmerVisible: u.isShimmerVisible, isShimmerActive: u.isLoading, isTrackPage: u.isTrackPage }),
                                    ],
                                }),
                                (0, y.jsxs)('div', {
                                    className: V().content,
                                    'data-test-id': q.Xk.track.TRACK_PAGE_CONTENT,
                                    children: [
                                        (0, y.jsx)(eh, { onModalClose: v }),
                                        (null == (s = u.meta) ? void 0 : s.isLyricsAvailable) && (0, y.jsx)(eR, { track: u.meta }, u.meta.id),
                                        p &&
                                            u.similarTracks &&
                                            (0, y.jsx)(eY, {
                                                tracks: u.similarTracks,
                                                contextId: null == (r = u.meta) ? void 0 : r.entityId,
                                                isShimmerVisible: u.isShimmerVisible,
                                                isShimmerActive: u.isLoading,
                                                autoflowSeeds: u.seeds,
                                                shouldResetCarouselScroll: u.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                u.meta && (0, y.jsx)(el, { user: d, track: u.meta }),
                            ],
                        })
                    );
                }),
                tx = (0, h.PA)(() => {
                    let { contentRef: e } = (0, j.g)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: i },
                            experiments: l,
                        } = (0, N.g)(),
                        n = l.checkExperiment(T.z.WebNextTrackModalCloseOnNavigate, 'on');
                    (a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, g.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t) => {
                            (0, g.useEffect)(() => {
                                if (!e || !t || t.isLegalRejected) return;
                                let a = (0, S.f)(e);
                                K(
                                    ((e) =>
                                        e
                                            ? { id: e.id, artists: e.artists.map(k.N), durationMs: e.durationMs, title: e.title, type: e.type }
                                            : { id: 0, artists: [], durationMs: 0, title: '', type: I.S.TRACK })(t),
                                    a,
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, L.j)(e);
                                });
                            }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.title]);
                        })(t.meta, a.meta));
                    let s = (0, f.c)((e) => {
                        var t;
                        null == (t = a.onOpenChange) || t.call(a, e);
                    });
                    return (0, y.jsx)(b.a, {
                        size: 'fitContent',
                        placement: i ? 'default' : 'right',
                        open: a.isOpened,
                        onOpenChange: s,
                        className: V().root,
                        contentClassName: V().modalContent,
                        portalNode: i ? null : e,
                        showHeader: !1,
                        withOverlay: n || i,
                        closeOnOutsidePress: n,
                        withAnimation: n || a.withAnimation,
                        isMobile: i,
                        lockScroll: i,
                        children: (0, y.jsx)(tv, {}),
                    });
                });
            var ty = a(88375),
                th = a(8650),
                tC = a(15434),
                tg = a.n(tC);
            let tA = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { notify: t } = (0, es.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            currentClipInfo: i,
                            settings: { isMobile: l, isWindowsApplication: n },
                            fullscreenVideoPlayer: s,
                        } = (0, N.g)(),
                        { modal: r, clip: o } = i;
                    (!o && i.isClipIdle && i.getClip(), !i.credits && i.isCreditsIdle && i.getCreditsInfo());
                    let c = null == o ? void 0 : o.title,
                        d = null == o ? void 0 : o.explicitDisclaimer,
                        u = (0, g.useMemo)(
                            () =>
                                i.isClipLoading || i.isClipRejected
                                    ? (0, y.jsx)(eT.q, { className: tg().titleShimmer, count: 1 })
                                    : o
                                      ? (0, y.jsxs)('span', {
                                            children: [
                                                c,
                                                d &&
                                                    (0, y.jsx)(e$.N, {
                                                        getDescriptionTexts: o.getDescriptionTexts,
                                                        className: (0, eM.$)(tg().explicitMark, tg().important),
                                                        size: 'xxs',
                                                        variant: d,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [o, c, d, i.isClipLoading, i.isClipRejected],
                        );
                    (0, g.useEffect)(
                        () => () => {
                            (r.close(), i.reset());
                        },
                        [i, r],
                    );
                    let _ = (0, g.useCallback)(() => {
                            (r.close(), i.reset());
                        }, [i, r]),
                        m = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || i.reset(), null == (t = r.onOpenChange) || t.call(r, e));
                            },
                            [i, r],
                        );
                    i.isRejected && (_(), t((0, y.jsx)(er.h, { error: e({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR }));
                    let p = (0, g.useMemo)(() => {
                        var e;
                        return i.isCreditsLoading || i.isCreditsRejected
                            ? (0, y.jsx)(eT.q, {})
                            : (null == (e = i.credits) ? void 0 : e.length)
                              ? i.credits.map((e) => {
                                    let t = (0, y.jsx)(th.D, { children: e.value });
                                    return (0, y.jsx)(ty.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [i.credits, i.isCreditsLoading, i.isCreditsRejected]);
                    return (0, y.jsx)(b.a, {
                        'data-test-id': q.Kq.clip.CLIP_ABOUT_MODAL,
                        placement: l ? 'default' : 'right',
                        open: r.isOpened,
                        onClose: _,
                        contentClassName: tg().modalContent,
                        title: u,
                        headerClassName: tg().header,
                        className: (0, eM.$)(tg().root, { [tg().root_withFullscreen]: s.modal.isOpened, [tg().root_withWindows]: n }),
                        onOpenChange: m,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l || s.modal.isOpened ? null : a,
                        children: (0, y.jsx)('div', { className: tg().content, children: p }),
                    });
                }),
                tf = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(tA, {});
                });
            var tb = a(36648),
                tj = a(49656);
            let tN = (0, h.PA)(() => {
                let { formatMessage: e } = (0, Y.A)(),
                    { currentTrackInfo: t } = (0, N.g)(),
                    { fullTrack: a } = t,
                    i = (0, tj.L)(() => {
                        var t, i, l;
                        if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                        let n = (0, y.jsx)(th.D, {
                            href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                            children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                        });
                        return (0, y.jsx)(ty.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: n });
                    }),
                    l = (0, tj.L)(() => {
                        if (!(null == a ? void 0 : a.shortDescription)) return;
                        let e = (0, y.jsx)(th.D, { children: null == a ? void 0 : a.shortDescription });
                        return (0, y.jsx)(ty.O, { infoDescription: e });
                    });
                return (0, y.jsxs)(y.Fragment, { children: [l, i] });
            });
            var tT = a(1418),
                tS = a.n(tT);
            let tI = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { currentTrackInfo: t } = (0, N.g)(),
                        a = t.fullTrack,
                        i = (0, g.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, y.jsx)('span', { className: tS().text, dangerouslySetInnerHTML: { __html: (0, X.ky)(t.fullDescription) } })
                                    : null == a
                                      ? void 0
                                      : a.shortDescription,
                            [null == a ? void 0 : a.shortDescription, t.fullDescription],
                        ),
                        l = (0, tj.L)(() => {
                            if (!i) return;
                            let e = (0, y.jsx)(th.D, { children: i });
                            return (0, y.jsx)(ty.O, { infoDescription: e });
                        }),
                        n = (0, tj.L)(() => {
                            var t, i, l;
                            if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                            let n = (0, y.jsx)(th.D, {
                                href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                                children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                            });
                            return (0, y.jsx)(ty.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: n });
                        });
                    return (0, y.jsxs)(y.Fragment, { children: [l, n] });
                }),
                tk = (0, h.PA)(() => {
                    var e, t, a, i, l;
                    let { formatMessage: n } = (0, Y.A)(),
                        { notify: s } = (0, es.l)(),
                        { contentRef: r } = (0, j.g)(),
                        {
                            currentTrackInfo: o,
                            settings: { isMobile: c, isWindowsApplication: d, isLinuxApplication: u },
                            fullscreenPlayer: _,
                            experiments: m,
                        } = (0, N.g)(),
                        { modal: p } = o,
                        v = o.isUGC,
                        x = m.checkExperiment(T.z.WebEditorsFeatures, 'on');
                    (v && o.isTrackIdle && o.getTrackMeta(),
                        o.fullTrack || !o.isTrackIdle || v || o.getFullTrack(),
                        !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
                        ((null == (e = o.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (a = o.fullTrack) || null == (t = a.mainAlbum) ? void 0 : t.isPodcast)) &&
                            o.getFullDescription(),
                        (0, g.useEffect)(
                            () => () => {
                                (p.close(), o.reset());
                            },
                            [o, p],
                        ));
                    let h = (0, g.useCallback)(() => {
                            (p.close(), o.reset());
                        }, [o, p]),
                        C = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || o.reset(), null == (t = p.onOpenChange) || t.call(p, e));
                            },
                            [o, p],
                        );
                    o.isRejected && (h(), s((0, y.jsx)(er.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR }));
                    let A = o.fullTrack,
                        f = null == A ? void 0 : A.explicitDisclaimer,
                        S = (0, g.useMemo)(() => {
                            var e;
                            if (A)
                                return (0, y.jsxs)('span', {
                                    children: [
                                        A.title,
                                        A.version && (0, y.jsx)('span', { className: tS().version, children: A.version }),
                                        f &&
                                            (0, y.jsx)(e$.N, {
                                                className: (0, eM.$)(tS().explicitMark, tS().important, { [tS().explicit]: !A.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = o.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: f,
                                            }),
                                    ],
                                });
                        }, [A, f, null == (i = o.fullTrack) ? void 0 : i.getDescriptionTexts]),
                        k = (0, g.useMemo)(() => {
                            var e;
                            return (null == A ? void 0 : A.type) === I.S.AUDIOBOOK
                                ? (0, y.jsx)(tN, {})
                                : (null == A ? void 0 : A.isTrackPodcast) || (null == A || null == (e = A.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, y.jsx)(tI, {})
                                  : void 0;
                        }, [A]),
                        L = (0, g.useMemo)(() => {
                            var e;
                            return (null == (e = o.credits) ? void 0 : e.length)
                                ? o.credits.map((e) => {
                                      let { title: t, value: a } = e,
                                          i = (0, y.jsx)(th.D, { children: a });
                                      return (0, y.jsx)(ty.O, { title: t, infoDescription: i }, t);
                                  })
                                : null;
                        }, [o.credits]),
                        E = (0, g.useMemo)(() => {
                            var e;
                            if ((null == (e = o.fullTrack) ? void 0 : e.major) && x) {
                                let e = o.fullTrack.major.name;
                                if (e) {
                                    let t = (0, y.jsx)(th.D, { children: e });
                                    return (0, y.jsx)(ty.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (l = o.fullTrack) ? void 0 : l.major, x]);
                    return (0, y.jsx)(b.a, {
                        placement: c ? 'default' : 'right',
                        open: p.isOpened,
                        onClose: h,
                        contentClassName: tS().modalContent,
                        title: S,
                        headerClassName: tS().header,
                        className: (0, eM.$)(tS().root, { [tS().root_withFullscreen]: _.modal.isOpened, [tS().root_withCustomControls]: d || u }),
                        overlayClassName: tS().overlay,
                        onOpenChange: C,
                        labelClose: n({ id: 'interface-actions.close' }),
                        portalNode: c || _.modal.isOpened ? null : r,
                        'data-test-id': q.Xk.track.TRACK_ABOUT_MODAL,
                        closeButtonDataTestId: q.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
                        children: (0, y.jsxs)('div', {
                            className: tS().content,
                            children: [
                                (o.isTrackLoading || o.isTrackRejected) && (0, y.jsx)(tb.n, { textClassName: tS().textShimmer }),
                                k,
                                (o.isCreditsLoading || o.isCreditsRejected) && (0, y.jsx)(tb.n, { textClassName: tS().textShimmer }),
                                L,
                                E,
                            ],
                        }),
                    });
                }),
                tL = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(tk, {});
                });
            var tE = a(96433),
                tM = a(49337),
                tP = a(96618),
                tO = a(65568),
                tw = a.n(tO);
            let tR = (0, h.PA)(() => {
                let e = (0, g.useRef)(null),
                    t = (0, g.useRef)(null),
                    { formatMessage: a } = (0, Y.A)(),
                    { language: i } = (0, tE.h)(),
                    { contentRef: l } = (0, j.g)(),
                    { theme: n } = (0, tP.W)(),
                    s = (0, ee.N)().get(J.V4),
                    r = (0, ea._)(s.feedbackForm.host),
                    {
                        trackComplaint: o,
                        settings: { isMobile: c },
                        fullscreenPlayer: d,
                        slam: u,
                    } = (0, N.g)(),
                    { modal: _, trackId: m } = o,
                    p = (0, g.useCallback)(() => {
                        null !== t.current && (window.clearTimeout(t.current), (t.current = null));
                    }, []),
                    v = (0, g.useCallback)(() => {
                        (p(),
                            (t.current = window.setTimeout(() => {
                                (_.isOpened || o.reset(), (t.current = null));
                            }, 300)));
                    }, [p, _, o]),
                    x = (0, g.useCallback)(() => {
                        (_.close(), v());
                    }, [_, v]),
                    h = (0, g.useCallback)(
                        (e) => {
                            (e ? p() : v(), _.onOpenChange(e));
                        },
                        [p, _, v],
                    );
                ((0, g.useEffect)(() => {
                    u.isOfflineModeEnabled && _.isOpened && x();
                }, [x, _.isOpened, u.isOfflineModeEnabled]),
                    (0, g.useEffect)(
                        () => () => {
                            (p(), _.close(), o.reset());
                        },
                        [p, _, o],
                    ),
                    (0, g.useEffect)(() => {
                        if (!_.isOpened) return;
                        let t = new URL(r).origin,
                            a = (a) => {
                                var i, l;
                                ((e) => {
                                    let { data: t, origin: a, source: i, expectedOrigin: l, expectedSource: n } = e;
                                    if (a !== l || null === n || i !== n || 'string' != typeof t) return !1;
                                    let s = (0, X.UL)(t);
                                    return 'object' == typeof s && null !== s && 'COMPLAINT_RESULT' === s.postMessageType && 'close' === s.action;
                                })({
                                    data: a.data,
                                    origin: a.origin,
                                    source: a.source,
                                    expectedOrigin: t,
                                    expectedSource: null != (l = null == (i = e.current) ? void 0 : i.contentWindow) ? l : null,
                                }) && x();
                            };
                        return (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        );
                    }, [r, x, _.isOpened]));
                let C = (0, g.useMemo)(
                    () =>
                        m
                            ? ((e) => {
                                  let { contentId: t, host: a, lang: i, theme: l } = e,
                                      n = new URL('/complaint', a);
                                  return (n.searchParams.set('contentId', t), n.searchParams.set('theme', l), n.searchParams.set('lang', i), n.toString());
                              })({ contentId: m, host: r, lang: i, theme: n === tM.S.Light ? 'white' : 'black' })
                            : null,
                    [r, i, n, m],
                );
                return (0, y.jsx)(b.a, {
                    className: (0, eM.$)(tw().root, { [tw().root_mobile]: c }),
                    contentClassName: tw().content,
                    open: _.isOpened,
                    size: c ? 'fullscreen' : 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    isMobile: c,
                    onClose: x,
                    onOpenChange: h,
                    portalNode: c || d.modal.isOpened ? null : l,
                    restoreFocus: !1,
                    transitionDuration: 300,
                    children: C && (0, y.jsx)('iframe', { ref: e, className: tw().iframe, src: C, title: a({ id: 'interface-actions.report-problem' }) }),
                });
            });
            var tD = a(70038),
                tB = a.n(tD);
            let tF = (0, h.PA)(() => {
                var e;
                let { formatMessage: t } = (0, Y.A)(),
                    { notify: a } = (0, es.l)(),
                    { contentRef: i } = (0, j.g)(),
                    {
                        trackLyrics: l,
                        settings: { isMobile: n },
                        fullscreenPlayer: s,
                    } = (0, N.g)(),
                    { modal: r, track: o } = l,
                    c = null == o ? void 0 : o.explicitDisclaimer;
                ((0, g.useEffect)(() => {
                    o && o.isLyricsAvailable && l.modal.isOpened && l.getLyrics(o.id);
                }, [o, l, l.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        r.isOpened && o && l.isResolved && l.sendViews({ trackId: o.id, albumId: o.albumId });
                    }, [o, l, l.isResolved, r.isOpened]));
                let d = (0, g.useCallback)(
                    (e) => {
                        var t;
                        null == (t = r.onOpenChange) || t.call(r, e);
                    },
                    [r],
                );
                l.isRejected && l.modal.isOpened && a((0, y.jsx)(er.h, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR });
                let u = (0, g.useMemo)(() => {
                    if (o)
                        return (0, y.jsxs)('span', {
                            'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                            children: [
                                o.title,
                                o.version && (0, y.jsx)('span', { className: tB().version, children: o.version }),
                                c &&
                                    (0, y.jsx)(e$.N, {
                                        className: (0, eM.$)(tB().explicitMark, tB().important),
                                        getDescriptionTexts: o.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: c,
                                    }),
                            ],
                        });
                }, [o, null == o ? void 0 : o.title, null == o ? void 0 : o.version, c]);
                return (0, y.jsx)(b.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.isOpened,
                    onOpenChange: d,
                    onClose: r.close,
                    className: tB().root,
                    contentClassName: tB().modalContent,
                    portalNode: n || s.modal.isOpened ? null : i,
                    title: u,
                    headerClassName: tB().header,
                    overlayClassName: tB().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    'data-test-id': q.e8.content.TRACK_LYRICS_MODAL,
                    closeButtonDataTestId: q.e8.content.TRACK_LYRICS_CLOSE_BUTTON,
                    lockScroll: n,
                    children: (0, y.jsx)('div', {
                        className: tB().content,
                        'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                        children: (0, y.jsx)(ek, {
                            lyrics: l.lyrics,
                            authors: l.writersNames,
                            source: null == (e = l.major) ? void 0 : e.prettyName,
                            isShimmerVisible: l.isShimmerVisible,
                            isShimmerActive: l.isLoading,
                        }),
                    }),
                });
            });
            var tU = a(68934),
                tz = a(23818),
                tW = a(69084),
                tK = a(38656),
                tH = a(68406),
                tV = a(5180),
                tY = a(97828),
                tq = a(23480),
                tQ = a.n(tq),
                t$ = a(22101),
                tG = a(93314),
                tZ = a.n(tG);
            let tX = () => {
                    let e = (0, t$.j)();
                    return (0, y.jsx)('div', {
                        className: tZ().root,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_LOGO,
                        children: (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(e), className: (0, eM.$)(tZ().icon, tZ()['icon_'.concat(e.toLocaleLowerCase())]) }),
                    });
                },
                tJ = (0, h.PA)((e) => {
                    let { hasError: t, children: a, ...i } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, N.g)(),
                        { formatMessage: n } = (0, Y.A)();
                    return (0, y.jsxs)(b.a, {
                        size: 'fitContent',
                        placement: l ? 'default' : 'center',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: (0, eM.$)(tQ().root, { [tQ().root_mobile]: l, [tQ().root_error]: t }),
                        headerClassName: tQ().header,
                        contentClassName: tQ().content,
                        ...i,
                        closeButtonDataTestId: q.e8.crackdownModal.CRACKDOWN_MODAL_CLOSE_BUTTON,
                        children: [!l && (0, y.jsx)(tX, {}), (0, y.jsx)('div', { className: tQ().contentWrapper, children: a })],
                    });
                });
            var t0 = a(4550),
                t1 = a(10054),
                t2 = a.n(t1);
            let t4 = (e) => {
                    let { children: t, forwardRef: a, text: i, isMobile: l, showSpinner: n, size: s = 'm', className: r, ...o } = e;
                    return (0, y.jsx)(Q.$, {
                        className: (0, eM.$)(t2().button, { [t2().button_mobile]: l }, r),
                        isBlock: !0,
                        radius: 'xxxl',
                        size: s,
                        ref: a,
                        spinner: n ? (0, y.jsx)(t0.y, {}) : null,
                        ...o,
                        children: null != t ? t : (0, y.jsx)(eo.HL, { className: t2().text, variant: 'div', size: 'm', children: i }),
                    });
                },
                t8 = (0, g.forwardRef)((e, t) => (0, y.jsx)(t4, { forwardRef: t, ...e })),
                t6 = (e) => {
                    let { isMobile: t, isActive: a, className: i } = e;
                    return (0, y.jsx)(ep.W, { className: (0, eM.$)(t2().shimmer, { [t2().shimmer_mobile]: t }, i), isActive: a, radius: 'xxxl' });
                };
            var t3 = a(84059),
                t5 = a(22523),
                t9 = a.n(t5);
            let t7 = (0, h.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, N.g)(),
                        t = (0, t3.useRouter)(),
                        a = (0, ee.N)().get(J.QG),
                        i = (0, f.c)(() => {
                            (e.close(), a.authorizationUrl && t.push(a.authorizationUrl));
                        });
                    return (0, y.jsx)(Q.$, {
                        className: (0, eM.$)(t9().button, t9().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: i,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON,
                        children: (0, y.jsx)(eo.HL, {
                            className: t9().buttonMainText,
                            variant: 'span',
                            children: (0, y.jsx)(eG.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                ae = 'crackdown-buy-subscription-button',
                at = (0, h.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: a,
                            modals: { crackdownModal: i },
                        } = (0, N.g)(),
                        [l, n] = (0, tU.d)(),
                        [s, r] = (0, g.useState)(i.isOpened),
                        {
                            mainText: o,
                            mainTextA11y: c,
                            additionText: d,
                            isShimmerVisible: u,
                            isShimmerActive: _,
                            openPaymentWidgetModal: m,
                            saveOfferAndAuthorize: p,
                        } = (0, tY.D)({ storeName: 'music', isEnabled: s, offerElement: { element: l, intersectionPropertyId: ae } }),
                        v = (0, f.c)(() => {
                            if ((i.close(), !a.isAuthorized)) return void p();
                            m();
                        }),
                        x = (0, tj.L)(() =>
                            u
                                ? (0, y.jsx)(t6, { className: (0, eM.$)(t9().button, t9().important), isActive: _ })
                                : (0, y.jsxs)(t8, {
                                      className: (0, eM.$)(t9().button, t9().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: n,
                                      'data-intersection-property-id': ae,
                                      onClick: v,
                                      'aria-label': c,
                                      'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON,
                                      children: [
                                          (0, y.jsx)(eo.HL, { variant: 'div', className: t9().buttonMainText, children: o }),
                                          d && (0, y.jsx)(eo.HL, { variant: 'div', size: 'm', weight: 'normal', children: d }),
                                      ],
                                  }),
                        );
                    return (
                        (0, g.useEffect)(() => {
                            setTimeout(() => {
                                r(!0);
                            }, 2500);
                        }, []),
                        (0, y.jsxs)(tJ, {
                            open: i.isOpened,
                            onClose: i.close,
                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL,
                            children: [
                                (0, y.jsx)('div', {
                                    className: tQ().growContainer,
                                    'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE,
                                    children: (0, y.jsx)(tz._V, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, y.jsxs)('div', {
                                    className: tQ().text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, y.jsx)(eo.DZ, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: tQ().title,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT,
                                            children: (0, y.jsx)(eG.A, { id: 'crackdown.title', values: { br: (0, y.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, y.jsx)(eo.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            className: tQ().description,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT,
                                            children: (0, y.jsx)(eG.A, { id: 'crackdown.description', values: { br: (0, y.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)(tW.q, {
                                    children: [
                                        (0, y.jsx)(eo.DZ, { variant: 'h1', children: (0, y.jsx)(eG.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, y.jsx)(eo.HL, {
                                            variant: 'div',
                                            children: (0, y.jsx)(eG.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)('div', { className: tQ().buttons, children: [x, t && (0, y.jsx)(t7, {})] }),
                            ],
                        })
                    );
                });
            at.displayName = 'CrackdownModalComponent';
            let aa = (e) => (0, y.jsx)(tK.r, { page: tH.l.CRACKDOWN_SCREEN, places: [tV.R.TOP_BUTTON], children: (0, y.jsx)(at, { ...e }) });
            var ai = a(94837),
                al = a(85686),
                an = a(12714),
                as = a(53050),
                ar = a.n(as);
            let ao = (0, h.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, N.g)(),
                    { formatMessage: i } = (0, Y.A)(),
                    l = (0, ai.q)({ browserInfo: a.browserInfo, login: t.account.data.login }),
                    n = (0, al.Z)(l());
                return (0, y.jsxs)('div', {
                    className: (0, eM.$)(ar().root, (0, an.J)(tM.S.Dark)),
                    children: [
                        (0, y.jsx)(Q.$, {
                            className: ar().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, y.jsxs)('div', {
                            className: ar().text,
                            children: [
                                (0, y.jsx)(eo.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eG.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(eo.HL, {
                                    className: ar().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eG.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, y.jsxs)('div', {
                            className: ar().buttons,
                            children: [
                                (0, y.jsx)(Q.$, {
                                    role: 'link',
                                    className: ar().button,
                                    color: 'primary',
                                    size: 'm',
                                    radius: 'xxxl',
                                    onClick: n,
                                    children: (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, y.jsx)(eG.A, { id: 'download-mobile-app.listen-in-app' }),
                                    }),
                                }),
                                (0, y.jsx)(Q.$, {
                                    className: (0, eM.$)(ar().button, ar().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, y.jsx)(eG.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ac = a(30232),
                ad = a.n(ac);
            let au = (0, h.PA)(() => {
                let { downloadMobileApp: e } = (0, N.g)();
                return (0, y.jsx)(b.a, {
                    className: ad().root,
                    contentClassName: ad().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, y.jsx)(ao, {}),
                });
            });
            var a_ = a(30194);
            let am = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, N.g)();
                return (0, g.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var ap = a(31886),
                av = a(35687),
                ax = a.n(av);
            let ay = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = am();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eG.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eG.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, y.jsx)(t8, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                                }),
                            }),
                        ],
                    });
                }),
                ah = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = am(),
                        l = (0, g.useCallback)(() => {
                            (i(), a.open());
                        }, [i, a]);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eG.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eG.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: tQ().buttons,
                                children: [
                                    (0, y.jsx)(t8, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                                    }),
                                    (0, y.jsx)(t8, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, y.jsx)(eG.A, { id: 'family.later' }),
                                        onClick: i,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                aC = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, N.g)();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eG.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eG.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, y.jsx)(t8, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                                }),
                            }),
                        ],
                    });
                }),
                ag = { [ap.C.INVITATION_IS_INVALID]: (0, y.jsx)(ay, {}), [ap.C.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, y.jsx)(ah, {}), [ap.C.UNKNOWN]: (0, y.jsx)(aC, {}) },
                aA = (0, h.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = t || e === ap.C.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)('div', {
                                className: (0, eM.$)(tQ().growContainer, tQ().growContainer_withoutPaddings),
                                children: (0, y.jsx)(tz._V, {
                                    className: (0, eM.$)(ax().image, { [ax().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            ag[null != e ? e : ap.C.UNKNOWN],
                        ],
                    });
                });
            var af = a(97522),
                ab = a(58733),
                aj = a(88191),
                aN = a.n(aj);
            let aT = (e) => {
                    let { avatarSrc: t, name: a, isMobile: i } = e;
                    return (0, y.jsxs)('div', {
                        className: (0, eM.$)(aN().root, { [aN().root_mobile]: i }),
                        children: [
                            (0, y.jsx)(ab.n, {
                                className: (0, eM.$)(aN().icon, aN().important),
                                avatarSrc: t,
                                hasPlus: !0,
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
                            }),
                            (0, y.jsx)(eo.HL, {
                                className: aN().name,
                                variant: 'div',
                                size: 'm',
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
                                children: a,
                            }),
                        ],
                    });
                },
                aS = (e) => {
                    let { isActive: t, isMobile: a } = e;
                    return (0, y.jsxs)('div', {
                        className: (0, eM.$)(aN().root, { [aN().root_mobile]: a }),
                        children: [
                            (0, y.jsx)(ep.W, { className: aN().iconShimmer, isActive: t, radius: 'round' }),
                            (0, y.jsx)(ep.W, { className: aN().nameShimmer, isActive: t, radius: 'xs' }),
                        ],
                    });
                };
            var aI = a(60795),
                ak = a.n(aI);
            let aL = (0, h.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: n,
                            info: { data: s },
                            acceptInvite: r,
                        },
                    } = (0, N.g)(),
                    { name: o = '', avatarUrl: c = '' } = s || {},
                    d = (0, ee.N)(),
                    u = (0, t3.useRouter)(),
                    _ = d.get(J.QG),
                    m = am(),
                    p = (0, g.useCallback)(() => {
                        if (!e.isAuthorized) {
                            _.authorizationUrl && u.push(_.authorizationUrl);
                            return;
                        }
                        r();
                    }, [_.authorizationUrl, u, e.isAuthorized, r]),
                    v = (0, g.useMemo)(
                        () => (i ? (0, y.jsx)(aS, { isActive: l, isMobile: a }) : (0, y.jsx)(aT, { avatarSrc: c, name: o, isMobile: a })),
                        [i, l, a, c, o],
                    ),
                    x = (0, g.useMemo)(
                        () =>
                            i
                                ? (0, y.jsx)(t6, { isActive: l, isMobile: a })
                                : (0, y.jsx)(t8, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, y.jsx)(eG.A, { id: 'family.accept' }),
                                      onClick: p,
                                      showSpinner: n,
                                      'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                                  }),
                        [i, l, n, a, p],
                    );
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)('div', { className: (0, eM.$)(tQ().growContainer, ak().growContainer, ak().important), children: v }),
                        (0, y.jsxs)('div', {
                            className: tQ().text,
                            children: [
                                (0, y.jsx)(eo.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: tQ().title,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                                    children: (0, y.jsx)(eG.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, y.jsx)(eo.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    className: tQ().description,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
                                    children: (0, y.jsx)(eG.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, y.jsx)(af.N, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tQ().linkArrow }),
                                    iconPosition: 'right',
                                    className: tQ().link,
                                    containerClassName: tQ().linkContainer,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                                    children: (0, y.jsx)(eo.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eG.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, y.jsxs)('div', {
                            className: tQ().buttons,
                            children: [
                                x,
                                (0, y.jsx)(t8, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, y.jsx)(eG.A, { id: 'family.reject' }),
                                    onClick: m,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var aE = a(47651),
                aM = a.n(aE);
            let aP = (0, h.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = am();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)('div', {
                                className: tQ().growContainer,
                                children: (0, y.jsx)(tz._V, {
                                    className: (0, eM.$)(aM().image, { [aM().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, y.jsxs)('div', {
                                className: tQ().text,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tQ().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                                        children: (0, y.jsx)(eG.A, { id: 'family.success-title' }),
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tQ().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION,
                                        children: (0, y.jsx)(eG.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, y.jsx)(af.N, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tQ().linkArrow }),
                                        iconPosition: 'right',
                                        className: tQ().link,
                                        containerClassName: tQ().linkContainer,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                                        children: (0, y.jsx)(eo.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eG.A, { id: 'family.about' }) }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tQ().buttons,
                                children: (0, y.jsx)(t8, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, y.jsx)(eG.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                                }),
                            }),
                        ],
                    });
                }),
                aO = { [a_._.INFO]: (0, y.jsx)(aL, {}), [a_._.SUCCESS]: (0, y.jsx)(aP, {}) },
                aw = (0, h.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, N.g)(),
                        i = am(),
                        l = (0, g.useCallback)(
                            (t) => {
                                (t || i(), e.onOpenChange(t));
                            },
                            [i, e],
                        ),
                        n = (0, g.useMemo)(() => (a ? (0, y.jsx)(aA, {}) : aO[t]), [a, t]);
                    return (0, y.jsx)(tJ, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL,
                        children: n,
                    });
                });
            var aR = a(93588),
                aD = a(30296),
                aB = a(99430),
                aF = a(18858),
                aU = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.KZ = 'kz'), (e.UZ = 'uz'), (e.KG = 'kg'), (e.AZ = 'az'), (e.AM = 'am'), (e.GE = 'ge'), (e.TR = 'tr'), e);
                })({}),
                az = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.OTHER = 'other'), e);
                })({});
            let aW = { [aU.RU]: az.RU, [aU.BY]: az.BY };
            var aK = a(33639),
                aH = a.n(aK),
                aV = a(16704),
                aY = a.n(aV),
                aq = a(23318),
                aQ = a.n(aq);
            let a$ = (e) => {
                let { className: t, children: a, ...i } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eM.$)(aQ().root, t),
                    ...i,
                    children: [
                        (0, y.jsx)(eo.DZ, {
                            className: aQ().title,
                            variant: 'h2',
                            size: 'xxl',
                            children: (0, y.jsx)(eG.A, { id: 'faq.title', values: { nbsp: '\xa0' } }),
                        }),
                        (0, y.jsx)('div', { className: aQ().content, children: a }),
                    ],
                });
            };
            var aG = a(67369),
                aZ = a.n(aG);
            let aX = (e) => {
                let { children: t } = e;
                return (0, y.jsx)(eo.HL, { className: aZ().root, variant: 'span', size: 'l', weight: 'normal', children: t });
            };
            var aJ = a(45705),
                a0 = a(41695),
                a1 = a.n(a0);
            let a2 = (e) => {
                let { className: t, isCollapsed: a } = e;
                return (0, y.jsx)('div', { className: (0, eM.$)(a1().root, { [a1().root_collapsed]: a }, t) });
            };
            var a4 = a(88919),
                a8 = a.n(a4);
            let a6 = {
                    exit: a8().answerContainer_exit,
                    exitActive: a8().answerContainer_exit_active,
                    enter: a8().answerContainer_enter,
                    enterActive: a8().answerContainer_enter_active,
                },
                a3 = (e) => {
                    let { question: t, answer: a, questionDataTestId: i, answerDataTestId: l } = e,
                        { state: n, toggle: s } = (0, eC.e)(!0),
                        r = (0, g.useRef)(null);
                    return (0, y.jsxs)('div', {
                        className: a8().root,
                        children: [
                            (0, y.jsxs)(Q.$, {
                                className: a8().questionContainer,
                                withRipple: !1,
                                withHover: !1,
                                variant: 'text',
                                onClick: s,
                                'aria-expanded': !n,
                                'data-test-id': i,
                                children: [t, (0, y.jsx)(a2, { className: a8().questionCollapse, isCollapsed: n })],
                            }),
                            (0, y.jsx)(aJ.A, {
                                nodeRef: r,
                                in: !n,
                                timeout: 300,
                                classNames: a6,
                                unmountOnExit: !0,
                                children: (0, y.jsx)('div', {
                                    className: a8().answerContainer,
                                    ref: r,
                                    'data-test-id': l,
                                    children: (0, y.jsx)('div', { className: a8().answer, children: a }),
                                }),
                            }),
                        ],
                    });
                };
            var a5 = a(88553),
                a9 = a.n(a5);
            let a7 = (e) => {
                    let { children: t } = e;
                    return (0, y.jsx)(eo.HL, { className: a9().root, variant: 'span', size: 'm', children: t });
                },
                ie = (e) => {
                    let { className: t, faqProps: a, variant: i } = e,
                        { location: l } = (0, N.g)(),
                        n = {
                            cancelUntilEndQuestion: (0, y.jsx)(eG.A, { id: 'paywall.faq-question-cancel-until-end-other-countries', values: { nbsp: ' ' } }),
                            cancelUntilEndStep1Link: (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link-other-countries' }),
                            cancelUntilEndStep2: (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end-step-2-other-countries', values: { nbsp: ' ' } }),
                            afraidForgetCancel: (0, y.jsx)(eG.A, { id: 'paywall.faq-question-afraid-forget-cancel-other-countries', values: { nbsp: ' ' } }),
                            whereElseSubscribe: (0, y.jsx)(eG.A, { id: 'paywall.faq-question-where-else-subscribe-other-countries', values: { nbsp: ' ' } }),
                        };
                    i === az.RU &&
                        ((n.cancelUntilEndQuestion = (0, y.jsx)(eG.A, { id: 'paywall.faq-question-cancel-until-end', values: { nbsp: ' ' } })),
                        (n.cancelUntilEndStep1Link = (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link' })),
                        (n.cancelUntilEndStep2 = (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end-step-2', values: { nbsp: ' ' } })),
                        (n.afraidForgetCancel = (0, y.jsx)(eG.A, { id: 'paywall.faq-question-afraid-forget-cancel', values: { nbsp: ' ' } })),
                        (n.whereElseSubscribe = (0, y.jsx)(eG.A, { id: 'paywall.faq-question-where-else-subscribe', values: { nbsp: ' ' } })));
                    let s = {
                        nbsp: '\xa0',
                        steps: (0, y.jsxs)('ul', {
                            className: aZ().list,
                            children: [
                                (0, y.jsx)('li', {
                                    className: aZ().listITem,
                                    children: (0, y.jsx)(eG.A, {
                                        id: 'paywall.faq-answer-cancel-until-end-step-1',
                                        values: {
                                            link: (0, y.jsx)(af.N, {
                                                className: aZ().link,
                                                href: 'http://plus.yandex.'.concat(l.tld, '/my'),
                                                target: '_blank',
                                                children: n.cancelUntilEndStep1Link,
                                            }),
                                        },
                                    }),
                                }),
                                (0, y.jsx)('li', { className: aZ().listITem, children: n.cancelUntilEndStep2 }),
                            ],
                        }),
                    };
                    return (0, y.jsxs)(a$, {
                        className: t,
                        ...a,
                        'data-test-id': q.e8.paywall.PAYWALL_FAQ_SECTION,
                        children: [
                            (0, y.jsx)(a3, {
                                question: (0, y.jsx)(a7, { children: (0, y.jsx)(eG.A, { id: 'paywall.faq-question-without-card-binding' }) }),
                                answer: (0, y.jsx)(aX, { children: (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-without-card-binding', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                            }),
                            (0, y.jsx)(a3, {
                                question: (0, y.jsx)(a7, { children: n.afraidForgetCancel }),
                                answer: (0, y.jsx)(aX, { children: (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-afraid-forget-cancel', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                            }),
                            (0, y.jsx)(a3, {
                                question: (0, y.jsx)(a7, { children: n.cancelUntilEndQuestion }),
                                answer: (0, y.jsx)(aX, {
                                    children:
                                        i === az.RU
                                            ? (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end', values: s })
                                            : (0, y.jsx)(eG.A, { id: 'paywall.faq-answer-cancel-until-end-other-countries', values: s }),
                                }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                            }),
                            !1,
                        ],
                    });
                };
            var it = a(89514),
                ia = a(84044),
                ii = a.n(ia);
            let il = (0, h.PA)((e) => {
                    let { links: t, ageRestriction: a } = e,
                        { location: i } = (0, N.g)(),
                        { language: l } = (0, tE.h)(),
                        { formatDate: n } = (0, Y.A)();
                    return (0, y.jsxs)('footer', {
                        className: ii().root,
                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER,
                        children: [
                            (0, y.jsx)('ul', {
                                className: (0, eM.$)(ii().list, ii().list_primary),
                                children: t.map((e, t) => {
                                    let { href: a, text: i, testId: l } = e;
                                    return (0, y.jsx)(
                                        'li',
                                        {
                                            className: ii().item,
                                            'data-test-id': l,
                                            children: (0, y.jsx)(af.N, {
                                                className: (0, eM.$)(ii().link, ii().important),
                                                href: a,
                                                children: (0, y.jsx)(eo.HL, { type: 'controls', variant: 'span', size: 'l', weight: 'medium', children: i }),
                                            }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, y.jsxs)('ul', {
                                className: (0, eM.$)(ii().list, ii().list_secondary),
                                children: [
                                    (0, y.jsx)('li', {
                                        className: ii().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_YANDEX_LINK,
                                        children: (0, y.jsx)(af.N, {
                                            className: (0, eM.$)(ii().link, ii().important),
                                            target: '_blank',
                                            href: 'https://ya.'.concat(i.tld),
                                            children: (0, y.jsxs)(eo.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: ['\xa9', ' 2018–', n(new Date(), (0, it.m)()), '\xa0', (0, y.jsx)(eG.A, { id: 'footer.yandex-music' })],
                                            }),
                                        }),
                                    }),
                                    (0, y.jsxs)('li', {
                                        className: ii().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_ALL_PROJECTS_LINK,
                                        children: [
                                            (0, y.jsx)(af.N, {
                                                className: (0, eM.$)(ii().link, ii().important),
                                                target: '_blank',
                                                href: 'https://yandex.'.concat(i.tld, '/all?lang=').concat(l),
                                                children: (0, y.jsx)(eo.HL, {
                                                    type: 'controls',
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, y.jsx)(eG.A, { id: 'footer.yandex-project' }),
                                                }),
                                            }),
                                            (0, y.jsx)(eo.HL, {
                                                className: (0, eM.$)(ii().item, ii().ageRestriction),
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: a,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                is = (0, h.PA)((e) => {
                    let { variant: t } = e,
                        { location: a } = (0, N.g)(),
                        i =
                            t === az.RU
                                ? (0, y.jsx)(eG.A, { id: 'paywall-footer.subscription-terms-link' })
                                : (0, y.jsx)(eG.A, { id: 'paywall-footer.subscription-terms-link-other-countries' });
                    return (0, y.jsx)(il, {
                        ageRestriction: '0+',
                        links: [
                            { href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_conditions/'), text: i, testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_SUB },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_privilege_list'),
                                text: (0, y.jsx)(eG.A, { id: 'paywall-footer.privileges-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_loyalty/'),
                                text: (0, y.jsx)(eG.A, { id: 'paywall-footer.cashback-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_generalrules/'),
                                text: (0, y.jsx)(eG.A, { id: 'paywall-footer.promotion-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/support/plus'),
                                text: (0, y.jsx)(eG.A, { id: 'paywall-footer.support-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_SUPPORT,
                            },
                        ],
                    });
                });
            var ir = a(71672),
                io = a.n(ir);
            let ic = (e) => {
                let { variant: t = 'horizontal', className: a, text: i, imageAlign: l = 'center', imageSrc: n, image2xSrc: s, ...r } = e;
                return (0, y.jsxs)('div', {
                    className: (0, eM.$)(io().root, io()['root_'.concat(t)], a),
                    ...(0, X.OZ)(r),
                    children: [
                        (0, y.jsx)('div', {
                            className: io().textContainer,
                            children: (0, y.jsx)(eo.DZ, { variant: 'h3', size: 'xl', className: io().text, children: i }),
                        }),
                        (0, y.jsx)('div', {
                            className: (0, eM.$)(io().imageContainer, io()['imageContainer_align_'.concat(l)]),
                            children: (0, y.jsx)(tz._V, {
                                className: io().image,
                                src: n,
                                srcSet: s ? ''.concat(s, ' 2x') : void 0,
                                fit: 'horizontal' === t ? 'cover' : 'none',
                                'aria-hidden': !0,
                            }),
                        }),
                    ],
                });
            };
            var id = a(1703),
                iu = a.n(id);
            let i_ = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n, ...s } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eM.$)(iu().root, a),
                    id: t,
                    ...(0, X.OZ)(s),
                    children: [
                        (0, y.jsx)('div', { className: iu().headingContainer, children: l }),
                        (0, y.jsx)('div', { className: (0, eM.$)(iu().contentContainer, i), children: n }),
                    ],
                });
            };
            var im = a(23435),
                ip = a.n(im);
            let iv = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig',
                },
                ix = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig',
                },
                iy = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, t$.j)();
                    return (0, y.jsx)(i_, {
                        className: t,
                        contentClassName: ip()['content_'.concat(a)],
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: ip()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tW.q, { children: (0, y.jsx)(eo.DZ, { variant: 'h2', children: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-title' }) }) }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(ic, {
                                    className: ip().card1,
                                    variant: 'vertical',
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: iv[a],
                                    image2xSrc: ix[a],
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_FILM,
                                }),
                                (0, y.jsx)(ic, {
                                    className: ip().card2,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                                }),
                                a === az.RU &&
                                    (0, y.jsx)(ic, {
                                        className: ip().card3,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig',
                                        'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_SPORT,
                                    }),
                                (0, y.jsx)(ic, {
                                    className: ip().card4,
                                    variant: 'vertical',
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageAlign: 'right',
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MANY_CHANNELS,
                                }),
                            ],
                        }),
                        'data-test-id': q.e8.paywall.PAYWALL_KINOPOISK_SECTION,
                    });
                };
            var ih = a(9079),
                iC = a(63944),
                ig = a.n(iC);
            let iA = 'content-anchor',
                ib = (e) => {
                    let { className: t, shouldShowLabel: a = !0, anchorId: i = iA, children: l } = e;
                    return (0, y.jsxs)(ih.N, {
                        className: (0, eM.$)(ig().root, t),
                        href: '#'.concat(i),
                        role: 'button',
                        children: [
                            (0, y.jsx)('div', { className: ig().content, children: l }),
                            a && (0, y.jsx)(eo.HL, { variant: 'span', children: (0, y.jsx)(eG.A, { id: 'paywall.more-info', values: { nbsp: '\xa0' } }) }),
                            (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                        ],
                    });
                };
            var ij = a(30791),
                iN = a.n(ij);
            let iT = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, t$.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === az.RU
                                ? (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, y.jsx)(i_, {
                    id: iA,
                    className: t,
                    contentClassName: iN().content,
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: iN()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tW.q, {
                                children: (0, y.jsx)(eo.DZ, { variant: 'h2', children: (0, y.jsx)(eG.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(ic, {
                                className: iN().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_INTERESTING,
                            }),
                            (0, y.jsx)(ic, {
                                className: iN().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                            }),
                            (0, y.jsx)(ic, {
                                className: iN().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-without-internet', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                            }),
                            (0, y.jsx)(ic, {
                                className: iN().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                            }),
                            (0, y.jsx)(ic, {
                                className: iN().card,
                                variant: 'vertical',
                                text: l,
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_MUSIC_SECTION,
                });
            };
            var iS = a(90804),
                iI = a.n(iS);
            let ik = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, t$.j)();
                return (0, y.jsx)(i_, {
                    className: t,
                    contentClassName: iI()['content_'.concat(a)],
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: iI()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tW.q, {
                                children: (0, y.jsx)(eo.DZ, { variant: 'h2', children: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(ic, {
                                className: iI().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            (0, y.jsx)(ic, {
                                className: iI().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            a === az.RU &&
                                (0, y.jsxs)(y.Fragment, {
                                    children: [
                                        (0, y.jsx)(ic, {
                                            className: iI().card,
                                            variant: 'vertical',
                                            text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-spend-points', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageAlign: 'right',
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcc48f03fb5a1cf861dd/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcd66fc33b70f1711a33/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SPEND_POINTS,
                                        }),
                                        (0, y.jsx)(ic, {
                                            className: iI().card,
                                            text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-benefit-options', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eebd405566813399938420/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68eebd498f03fb5a1cf861df/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_BENEFIT_OPTIONS,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_PLUS_SECTION,
                });
            };
            var iL = a(71910),
                iE = a(91886),
                iM = a(48122),
                iP = a.n(iM);
            let iO = {
                    exit: iP().stickyContainer_exit,
                    exitActive: iP().stickyContainer_exit_active,
                    enter: iP().stickyContainer_enter,
                    enterActive: iP().stickyContainer_enter_active,
                },
                iw = 'buy-subscription-block-button-container',
                iR = 'buy-subscription-block-first-button',
                iD = 'buy-subscription-block-second-button',
                iB = (0, h.PA)((e) => {
                    var t;
                    let { className: a, shouldShowFixed: i, place: l, hasColumnLayout: n } = e,
                        s = (0, g.useRef)(null),
                        r = (0, g.useRef)(null),
                        o = (0, g.useRef)(null),
                        { user: c, experiments: d } = (0, N.g)(),
                        u = d.checkExperiment(T.z.WebNextPaywallSecondButton, 'on'),
                        _ = (0, tY.D)({ storeName: 'music', place: l || tV.R.BLOCK_1, offerElement: { element: r.current, intersectionPropertyId: iR } }),
                        m = (0, tY.D)({ storeName: 'music', place: tV.R.BLOCK_2, offerElement: { element: o.current, intersectionPropertyId: iD }, isEnabled: u }),
                        p = (0, g.useRef)(null),
                        [v, x] = (0, g.useState)(),
                        [h, C] = (0, g.useState)(!1),
                        { isIntersecting: A } = null != (t = (0, iE.BL)([s], { preflightCheck: !1 }, !i)[iw]) ? t : {},
                        f = (0, g.useCallback)(() => {
                            if (!c.isAuthorized) return void _.saveOfferAndAuthorize();
                            _.openPaymentWidgetModal();
                        }, [c.isAuthorized, _]),
                        b = (0, g.useCallback)(() => {
                            if (!c.isAuthorized) return void m.saveOfferAndAuthorize();
                            m.openPaymentWidgetModal();
                        }, [c.isAuthorized, m]);
                    ((0, g.useEffect)(() => {
                        if (!A) {
                            var e;
                            x(null == (e = s.current) ? void 0 : e.closest('[data-buy-subscription-block-portal]'));
                        }
                    }, [A]),
                        (0, g.useEffect)(() => {
                            i &&
                                setTimeout(() => {
                                    C(!0);
                                }, 300);
                        }, [i, C]));
                    let j = u && !m.oneClickAvailable && void 0 !== m.mainText,
                        S = i && v,
                        I = !!(S && !A && h);
                    return (0, y.jsxs)('div', {
                        className: (0, eM.$)(iP().root, a, { [iP().root_withSecondButton]: j }),
                        children: [
                            (0, y.jsxs)('div', {
                                ref: s,
                                className: (0, eM.$)(iP().buttonContainer, { [iP().buttonContainer_columnLayout]: n }),
                                'data-intersection-property-id': iw,
                                children: [
                                    (0, y.jsxs)(Q.$, {
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'l',
                                        color: 'plus',
                                        className: iP().button,
                                        ref: r,
                                        onClick: f,
                                        'aria-label': _.mainTextA11y,
                                        'data-intersection-property-id': iR,
                                        'data-test-id': q.e8.paywall.PAYWALL_OFFER_BUTTON,
                                        children: [
                                            (0, y.jsx)(eo.HL, { className: iP().text_main, variant: 'div', size: 'l', children: _.mainText }),
                                            _.additionText && (0, y.jsx)(eo.HL, { className: iP().text_addition, variant: 'div', size: 'm', children: _.additionText }),
                                        ],
                                    }),
                                    j &&
                                        (0, y.jsxs)(Q.$, {
                                            isBlock: !0,
                                            radius: 'xxxl',
                                            size: 'l',
                                            color: 'secondary',
                                            className: iP().button,
                                            ref: o,
                                            onClick: b,
                                            'aria-label': m.mainTextA11y,
                                            'data-intersection-property-id': iD,
                                            'data-test-id': q.e8.paywall.PAYWALL_SECOND_OFFER_BUTTON,
                                            children: [
                                                (0, y.jsx)(eo.HL, { className: iP().text_main, variant: 'div', size: 'l', children: m.mainText }),
                                                m.additionText &&
                                                    (0, y.jsx)(eo.HL, { className: iP().text_addition, variant: 'div', size: 'm', children: m.additionText }),
                                            ],
                                        }),
                                ],
                            }),
                            _.disclaimerText &&
                                (0, y.jsx)(eo.HL, {
                                    className: iP().text_secondary,
                                    variant: 'div',
                                    size: 's',
                                    weight: 'normal',
                                    'aria-label': _.disclaimerTextA11y,
                                    'data-test-id': q.e8.paywall.PAYWALL_OFFER_DISCLAIMER_TEXT,
                                    children: _.disclaimerText,
                                }),
                            S &&
                                (0, iL.createPortal)(
                                    (0, y.jsx)(aJ.A, {
                                        in: I,
                                        nodeRef: p,
                                        timeout: 300,
                                        classNames: iO,
                                        unmountOnExit: !0,
                                        'data-test-id': q.e8.paywall.PAYWALL_BUY_SUBSCRIPTION_BLOCK_FLOATING,
                                        children: (0, y.jsx)('div', {
                                            className: iP().stickyContainer,
                                            'aria-hidden': !0,
                                            ref: p,
                                            children: (0, y.jsx)(iB, { place: tV.R.BOTTOM_BUTTON }),
                                        }),
                                    }),
                                    v,
                                ),
                        ],
                    });
                });
            iB.displayName = 'BuySubscriptionBlock';
            var iF = a(92403),
                iU = a.n(iF);
            let iz = (e) => {
                let { className: t } = e;
                return (0, y.jsx)('section', {
                    className: (0, eM.$)(iU().root, t),
                    children: (0, y.jsx)('div', {
                        className: iU().wrapper,
                        children: (0, y.jsxs)('div', {
                            className: iU().content,
                            children: [
                                (0, y.jsx)(eo.DZ, {
                                    variant: 'h1',
                                    size: 'xxl',
                                    className: iU().title,
                                    children: (0, y.jsx)(eG.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(eo.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'normal',
                                    className: iU().label,
                                    children: (0, y.jsx)(eG.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(iB, { className: iU().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                            ],
                        }),
                    }),
                });
            };
            var iW = a(87968),
                iK = a.n(iW);
            let iH = () =>
                (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(iz, { className: iK().topSection }),
                        (0, y.jsx)(iT, { className: aH().section, variant: az.BY }),
                        (0, y.jsx)(iy, { className: aH().section, variant: az.BY }),
                        (0, y.jsx)(ik, { className: aH().section, variant: az.BY }),
                        (0, y.jsx)(ie, { className: aH().section_faq }),
                        (0, y.jsx)(is, {}),
                    ],
                });
            var iV = a(70632),
                iY = a.n(iV);
            let iq = (e) => {
                let { className: t, text: a, imageSrc: i, image2xSrc: l } = e;
                return (0, y.jsxs)('div', {
                    className: (0, eM.$)(iY().root, t),
                    children: [
                        (0, y.jsx)(tz._V, { className: iY().image, src: i, srcSet: l ? ''.concat(l, ' 2x') : void 0, fit: 'cover', 'aria-hidden': !0 }),
                        (0, y.jsx)(eo.HL, { className: iY().text, variant: 'span', size: 'l', weight: 'medium', children: a }),
                    ],
                });
            };
            var iQ = a(70453),
                i$ = a.n(iQ);
            let iG = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eM.$)(i$().root, a),
                    id: t,
                    children: [
                        (0, y.jsx)('div', { className: i$().headingContainer, children: l }),
                        (0, y.jsx)('div', { className: (0, eM.$)(i$().contentContainer, i), children: n }),
                    ],
                });
            };
            var iZ = a(93537),
                iX = a.n(iZ);
            let iJ = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig',
                },
                i0 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig',
                },
                i1 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig',
                },
                i2 = {
                    [az.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig',
                    [az.BY]: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig',
                },
                i4 = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, t$.j)();
                    return (0, y.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_KINOPOISK_SECTION,
                        children: (0, y.jsx)(iG, {
                            className: t,
                            contentClassName: iX()['content_'.concat(a)],
                            heading: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: iX()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, y.jsx)(tW.q, {
                                        children: (0, y.jsx)(eo.DZ, { variant: 'h2', children: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-title' }) }),
                                    }),
                                ],
                            }),
                            content: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(iq, {
                                        className: iX().card1,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: iJ[a],
                                        image2xSrc: i0[a],
                                    }),
                                    (0, y.jsx)(iq, {
                                        className: iX().card2,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig',
                                    }),
                                    a === az.RU &&
                                        (0, y.jsx)(iq, {
                                            className: iX().card3,
                                            text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig',
                                        }),
                                    (0, y.jsx)(iq, {
                                        className: (0, eM.$)(iX().card4, iX()['card4_'.concat(a)]),
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: i1[a],
                                        image2xSrc: i2[a],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var i8 = a(9525),
                i6 = a.n(i8);
            let i3 = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, t$.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === az.RU
                                ? (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, y.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_MUSIC_SECTION,
                    children: (0, y.jsx)(iG, {
                        id: iA,
                        className: t,
                        contentClassName: i6().content,
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: i6()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tW.q, {
                                    children: (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(iq, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig',
                                }),
                                (0, y.jsx)(iq, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig',
                                }),
                                (0, y.jsx)(iq, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig',
                                }),
                                (0, y.jsx)(iq, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.music-part-benefit-without-internet-mobile', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig',
                                }),
                                (0, y.jsx)(iq, {
                                    className: i6().card,
                                    text: l,
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var i5 = a(26268),
                i9 = a.n(i5);
            let i7 = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, t$.j)();
                return (0, y.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_PLUS_SECTION,
                    children: (0, y.jsx)(iG, {
                        className: t,
                        contentClassName: i9()['content_'.concat(a)],
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: i9()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tW.q, {
                                    children: (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(iq, {
                                    className: i9().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig',
                                }),
                                (0, y.jsx)(iq, {
                                    className: i9().card,
                                    text: (0, y.jsx)(eG.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var le = a(99521),
                lt = a.n(le);
            let la = (e) => {
                let { className: t, moreInfoLinkProps: a } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eM.$)(lt().root, t),
                    children: [
                        (0, y.jsx)('div', { className: lt().image }),
                        (0, y.jsxs)('div', {
                            className: lt().content,
                            children: [
                                (0, y.jsx)(eo.DZ, {
                                    className: lt().title,
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eG.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(eo.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    children: (0, y.jsx)(eG.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(iB, { className: lt().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                (0, y.jsx)(ib, { ...a, className: (0, eM.$)(lt().moreInfoLink, null == a ? void 0 : a.className) }),
                            ],
                        }),
                    ],
                });
            };
            var li = a(57160),
                ll = a.n(li);
            let ln = () =>
                    (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(la, { className: ll().topSection }),
                            (0, y.jsx)(i3, { className: aH().section, variant: az.BY }),
                            (0, y.jsx)(i4, { className: aH().section, variant: az.BY }),
                            (0, y.jsx)(i7, { className: aH().section, variant: az.BY }),
                            (0, y.jsx)(ie, { className: aH().section_faq }),
                            (0, y.jsx)(is, {}),
                        ],
                    }),
                ls = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, y.jsx)('div', { className: aY().root, children: e ? (0, y.jsx)(ln, {}) : (0, y.jsx)(iH, {}) });
                });
            var lr = a(88353),
                lo = a.n(lr);
            let lc = () =>
                (0, y.jsxs)('div', {
                    className: lo().root,
                    children: [(0, y.jsx)(iz, { className: lo().topSection }), (0, y.jsx)(ie, { className: aH().section_faq }), (0, y.jsx)(is, {})],
                });
            var ld = a(43095),
                lu = a.n(ld);
            let l_ = () =>
                    (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(la, { className: lu().topSection, moreInfoLinkProps: { shouldShowLabel: !1 } }),
                            (0, y.jsx)(ie, { faqProps: { id: iA } }),
                            (0, y.jsx)(is, {}),
                        ],
                    }),
                lm = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? (0, y.jsx)(l_, {}) : (0, y.jsx)(lc, {});
                });
            var lp = a(69248),
                lv = a.n(lp),
                lx = a(6969);
            let ly = () => {
                let { experiments: e } = (0, N.g)(),
                    t = (0, t3.useSearchParams)().get(lx.K.UTM_MEDIUM),
                    a = e.checkExperiment(T.z.WebNextPaidPerformancePaywallTopSection, 'music_benefits') && 'paid_performance' === t;
                return e.checkExperiment(T.z.WebNextPaywallTopSection, 'music_benefits') || a;
            };
            var lh = a(37886),
                lC = a.n(lh);
            let lg = (e) => {
                let { className: t, variant: a = az.RU } = e,
                    i = (0, t$.j)();
                return (0, y.jsx)(i_, {
                    className: t,
                    contentClassName: lC()['content_'.concat(a)],
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lC()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tW.q, {
                                children: (0, y.jsx)(eo.DZ, { variant: 'h2', children: (0, y.jsx)(eG.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(ic, {
                                className: lC().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-app-desktop', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cb364560d354cb53936/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c02ce6cccb5e758b864480/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_READ_IN_APP,
                            }),
                            (0, y.jsx)(ic, {
                                className: lC().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-follow-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_NEWS,
                            }),
                            (0, y.jsx)(ic, {
                                className: lC().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-download-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS,
                            }),
                            (0, y.jsx)(ic, {
                                className: lC().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-speed-desktop', values: { br: '\n' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c02cbc9daf1b03347faca5/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cdccccb5e758b86447e/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_PASE,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_BOOKS_SECTION,
                });
            };
            var lA = a(82410),
                lf = a.n(lA);
            let lb = (e) => {
                let { className: t, variant: a = az.RU } = e;
                return (0, y.jsx)(i_, {
                    className: t,
                    contentClassName: lf()['content_'.concat(a)],
                    heading: (0, y.jsx)(eo.DZ, {
                        variant: 'h2',
                        className: lf().title,
                        children: (0, y.jsx)(eG.A, { id: 'paywall.other-services-part-title', values: { nbsp: '\xa0' } }),
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(ic, {
                                className: lf().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.other-services-part-benefit-maps', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec5170c5fe5082085b079/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec52e94053d016bcd7bf3/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAPS,
                            }),
                            (0, y.jsx)(ic, {
                                className: lf().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.other-services-part-benefit-your-plus', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5408fcfeb05fbb439ec/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec547b510f9053778b2d0/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_YOUR_PLUS,
                            }),
                            (0, y.jsx)(ic, {
                                className: lf().card,
                                text: (0, y.jsx)(eG.A, { id: 'paywall.pay-part-benefit-split-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5516fc33b70f1711a3a/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec558b510f9053778b2d2/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DIVIDE_PAYMENT,
                            }),
                            (0, y.jsx)(ic, {
                                className: lf().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, y.jsx)(eG.A, { id: 'paywall.other-services-part-save', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec565d57d6359e4120722/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec56e6fc33b70f1711a3c/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_TAKE_SAVES,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_OTHER_SERVICES_SECTION,
                });
            };
            var lj = a(53712);
            function lN() {
                return (lN = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lT = function (e) {
                return g.createElement(
                    'svg',
                    lN({ width: 64, height: 64, viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    g.createElement(
                        'mask',
                        { id: 'mask0_1016_316950', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: -1, y: 0, width: 65, height: 64 },
                        i || (i = g.createElement('circle', { cx: 31.6934, cy: 32, r: 32, fill: '#D9D9D9' })),
                    ),
                    l ||
                        (l = g.createElement(
                            'g',
                            { mask: 'url(#mask0_1016_316950)' },
                            g.createElement('path', { d: 'M17.9864 0V29.0933L0 16V0H17.9864Z', fill: 'url(#paint0_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M58.2771 0L36.0641 16.04L17.9844 29.0933V0H58.2771Z', fill: 'url(#paint1_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 0V31.88L36.0664 39.36V16.04L58.2794 0H63.9993Z', fill: 'url(#paint2_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 31.8789V60.5189L36.0664 53.0389V39.3589L63.9993 31.8789Z', fill: 'url(#paint3_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 60.5191V63.9991H36.0664V53.0391L63.9993 60.5191Z', fill: 'url(#paint4_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M36.0661 16.04V64H0V16L17.9864 29.0933L36.0661 16.04Z', fill: '#FFDAEA' }),
                            g.createElement('path', {
                                d: 'M27.0129 47.8395C24.8663 51.4394 21.5197 53.0261 18.013 53.0261C10.9998 53.0261 5.75991 48.0928 5.75991 40.6796C5.75991 40.6796 5.77324 39.6396 5.79991 39.3063L36.0661 39.3463V16.04L17.9864 29.0931L0 16V63.9992H36.0661V53.0394C32.5728 53.0261 29.3995 51.4394 27.0129 47.8528V47.8395ZM18.013 49.0128C21.5463 49.0128 23.7063 47.1862 23.9996 43.0662H11.1598C11.7198 46.7728 14.5864 49.0128 18.0264 49.0128H18.013ZM30.0262 43.0662H43.026C42.466 46.7728 39.4394 49.0128 35.9994 49.0128C32.5595 49.0128 30.3062 47.1862 30.0128 43.0662H30.0262Z',
                                fill: '#4D0000',
                            }),
                        )),
                    n ||
                        (n = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_1016_316950', x1: 8.99319, y1: 29.0933, x2: 8.99319, y2: -2.64766, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_1016_316950', x1: 38.1307, y1: 29.0933, x2: 38.1307, y2: 0, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint2_linear_1016_316950', x1: 36.0664, y1: 19.68, x2: 63.9993, y2: 19.68, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint3_linear_1016_316950', x1: 36.0664, y1: 46.1989, x2: 67.0254, y2: 46.1989, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint4_linear_1016_316950', x1: 36.0664, y1: 58.5191, x2: 63.9993, y2: 58.5191, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                        )),
                );
            };
            function lS() {
                return (lS = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lI = function (e) {
                return g.createElement(
                    'svg',
                    lS({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    g.createElement(
                        'g',
                        { clipPath: 'url(#clip0_4165_10094)' },
                        s || (s = g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        r ||
                            (r = g.createElement('path', {
                                d: 'M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z',
                                fill: '#FCCA00',
                            })),
                        o ||
                            (o = g.createElement('path', {
                                d: 'M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z',
                                fill: '#FC3F1D',
                            })),
                        g.createElement(
                            'mask',
                            { id: 'mask0_4165_10094', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 64, height: 65 },
                            c || (c = g.createElement('ellipse', { cx: 32, cy: 32.5, rx: 32, ry: 32, fill: 'white' })),
                        ),
                        d || (d = g.createElement('g', { mask: 'url(#mask0_4165_10094)' })),
                        u ||
                            (u = g.createElement(
                                'g',
                                { clipPath: 'url(#clip1_4165_10094)' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, transform: 'translate(0 0.5)', fill: 'black' }),
                                g.createElement('path', {
                                    d: 'M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z',
                                    fill: 'url(#paint0_radial_4165_10094)',
                                }),
                            )),
                    ),
                    _ ||
                        (_ = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_4165_10094',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)',
                                },
                                g.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                g.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4165_10094' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                            g.createElement(
                                'clipPath',
                                { id: 'clip1_4165_10094' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, fill: 'white', transform: 'translate(0 0.5)' }),
                            ),
                        )),
                );
            };
            function lk() {
                return (lk = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lL = function (e) {
                return g.createElement(
                    'svg',
                    lk({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    m ||
                        (m = g.createElement('path', {
                            d: 'M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z',
                            fill: 'black',
                        })),
                    p ||
                        (p = g.createElement('path', {
                            d: 'M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z',
                            fill: '#FED42B',
                        })),
                );
            };
            function lE() {
                return (lE = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lM = function (e) {
                return g.createElement(
                    'svg',
                    lE({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    v ||
                        (v = g.createElement(
                            'g',
                            { clipPath: 'url(#clip0_4032_54517)' },
                            g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' }),
                            g.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z',
                                fill: 'url(#paint0_linear_4032_54517)',
                            }),
                        )),
                    x ||
                        (x = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_4032_54517', x1: -253254e-12, y1: 28.2333, x2: 64, y2: 28.2333, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FF5C4D' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                g.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4032_54517' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        )),
                );
            };
            var lP = a(93580),
                lO = a.n(lP);
            let lw = () =>
                    (0, y.jsxs)('ul', {
                        className: lO().services,
                        children: [
                            (0, y.jsxs)('li', {
                                className: lO().service,
                                children: [
                                    (0, y.jsx)(lL, { className: lO().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lO().serviceLabel,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.plus-benefit-music', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lO().service,
                                children: [
                                    (0, y.jsx)(lI, { className: lO().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lO().serviceLabel,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.plus-benefit-kinopoisk', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lO().service,
                                children: [
                                    (0, y.jsx)(lT, { className: lO().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lO().serviceLabel,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.plus-benefit-books', values: { br: '\n' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lO().service,
                                children: [
                                    (0, y.jsx)(lM, { className: lO().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lO().serviceLabel,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.plus-benefit-cashback', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                lR = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, t$.j)(),
                        n = (0, t3.usePathname)(),
                        s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, y.jsxs)('section', {
                        className: (0, eM.$)(lO().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, y.jsxs)('div', {
                                className: lO().main,
                                children: [
                                    (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(l), className: (0, eM.$)(lO().logo, lO()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lO().title,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.open-plus-benefits', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, y.jsx)(lw, {}),
                                    (0, y.jsx)(iB, { className: lO().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, y.jsx)(ih.N, {
                                            className: lO().goHomeLink,
                                            href: '/',
                                            children: (0, y.jsx)(eo.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, y.jsx)(eG.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, y.jsx)(ib, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, y.jsx)(tz._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lO().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                };
            var lD = a(77896),
                lB = a.n(lD);
            let lF = (e) => {
                let { className: t } = e,
                    {
                        settings: { browserInfo: a },
                        paywall: i,
                    } = (0, N.g)(),
                    l = (0, t$.j)(),
                    n = (0, t3.usePathname)(),
                    s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                return (0, y.jsxs)('section', {
                    className: (0, eM.$)(lB().root, t),
                    'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                    children: [
                        (0, y.jsxs)('div', {
                            className: lB().main,
                            children: [
                                (0, y.jsx)('div', {
                                    className: lB().logoWrap,
                                    children: (0, y.jsx)($.I, {
                                        variant: 'musicLogoCenter'.concat(l),
                                        className: (0, eM.$)(lB().logo, lB()['logo_'.concat(l.toLowerCase())]),
                                    }),
                                }),
                                (0, y.jsx)('video', {
                                    preload: 'metadata',
                                    loop: !0,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    width: 1e3,
                                    height: 1e3,
                                    src: ''.concat('', '/media/paywall_family_offer/family_offer.mp4'),
                                    poster: ''.concat('', '/media/paywall_family_offer/family_offer.png'),
                                    className: lB().video,
                                }),
                                (0, y.jsxs)('div', {
                                    className: lB().textBlock,
                                    children: [
                                        (0, y.jsx)(eo.DZ, {
                                            variant: 'h1',
                                            size: 'xxxl',
                                            weight: 'bold',
                                            className: lB().title,
                                            children: (0, y.jsx)(eG.A, { id: 'paywall.family-offer-title', values: { br: '\n', nbsp: '\xa0' } }),
                                        }),
                                        (0, y.jsx)(eo.HL, {
                                            variant: 'p',
                                            size: 'm',
                                            weight: 'bold',
                                            className: lB().subtitle,
                                            children: (0, y.jsx)(eG.A, { id: 'paywall.family-offer-text', values: { br: '\n' } }),
                                        }),
                                        (0, y.jsx)(iB, { className: lB().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                        s &&
                                            (0, y.jsx)(ih.N, {
                                                className: lB().goHomeLink,
                                                href: '/',
                                                children: (0, y.jsx)(eo.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: (0, y.jsx)(eG.A, { id: 'navigation.go-home' }),
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, y.jsx)(ib, {
                            'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            children: (0, y.jsx)(tz._V, {
                                src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                fit: 'contain',
                                className: lB().moreInfoChildren,
                                'aria-hidden': !0,
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            }),
                        }),
                    ],
                });
            };
            var lU = a(55652),
                lz = a.n(lU);
            let lW = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: a, browserInfo: i },
                        } = (0, N.g)();
                    return a || i.isTablet
                        ? (0, y.jsx)(eo.HL, { variant: 'span', size: 'm', className: lz().benefitLabelMobile, children: t })
                        : (0, y.jsx)(eo.DZ, { variant: 'h2', size: 'm', className: lz().benefitLabelDesktop, children: t });
                },
                lK = () => {
                    let {
                            settings: { isMobile: e, browserInfo: t },
                        } = (0, N.g)(),
                        { formatMessage: a } = (0, Y.A)(),
                        i = a(e || t.isTablet ? { id: 'paywall.music-benefit-all-in-one-mobile' } : { id: 'paywall.music-benefit-all-in-one-desktop' }, {
                            br: '\n',
                            nbsp: '\xa0',
                        });
                    return (0, y.jsxs)('ul', {
                        className: lz().benefits,
                        children: [
                            (0, y.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, y.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad41840fb42546cc35e13/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad43c40fb42546cc35e15/orig',
                                    }),
                                    (0, y.jsx)(lW, { children: (0, y.jsx)(eG.A, { id: 'paywall.music-benefit-audio', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: (0, eM.$)(lz().benefit, lz().benefit_recommendation),
                                children: [
                                    (0, y.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad52e40fb42546cc35e1a/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad53793461475f95b4f50/orig',
                                    }),
                                    (0, y.jsx)(lW, { children: (0, y.jsx)(eG.A, { id: 'paywall.music-benefit-recommendation', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, y.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56040fb42546cc35e1c/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56640fb42546cc35e1e/orig',
                                    }),
                                    (0, y.jsx)(lW, { children: (0, y.jsx)(eG.A, { id: 'paywall.music-benefit-without-network', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lz().benefit,
                                children: [
                                    (0, y.jsx)(tz._V, {
                                        className: lz().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad56e621a600def9091d8/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad57632413276cc433bf8/orig',
                                    }),
                                    (0, y.jsx)(lW, { children: i }),
                                ],
                            }),
                        ],
                    });
                },
                lH = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, t$.j)(),
                        n = (0, t3.usePathname)(),
                        s = !a.isTouch && (n === lj.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, y.jsxs)('section', {
                        className: (0, eM.$)(lz().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, y.jsxs)('div', {
                                className: lz().main,
                                children: [
                                    (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(l), className: (0, eM.$)(lz().logo, lz()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lz().title,
                                        children: (0, y.jsx)(eG.A, { id: 'paywall.music-benefits-title', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, y.jsx)(lK, {}),
                                    (0, y.jsx)(iB, { className: lz().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, y.jsx)(ih.N, {
                                            className: lz().goHomeLink,
                                            href: '/',
                                            children: (0, y.jsx)(eo.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, y.jsx)(eG.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, y.jsx)(ib, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, y.jsx)(tz._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lz().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                },
                lV = { family_offer: (0, y.jsx)(lF, {}), default: (0, y.jsx)(lR, {}) },
                lY = () => {
                    var e;
                    let t = ly(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(T.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            t ? (0, y.jsx)(lH, {}) : lV[i] || lV.default,
                            (0, y.jsx)(iT, { className: aH().section }),
                            (0, y.jsx)(iy, { className: aH().section }),
                            (0, y.jsx)(lg, { className: aH().section }),
                            (0, y.jsx)(ik, { className: aH().section }),
                            (0, y.jsx)(lb, { className: aH().section }),
                            (0, y.jsx)(ie, { className: aH().section_faq, variant: az.RU }),
                            (0, y.jsx)(is, { variant: az.RU }),
                        ],
                    });
                };
            var lq = a(86806),
                lQ = a.n(lq);
            let l$ = (e) => {
                    let { className: t, variant: a = az.RU } = e,
                        i = (0, t$.j)();
                    return (0, y.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_BOOKS_SECTION,
                        children: (0, y.jsx)(iG, {
                            className: t,
                            contentClassName: lQ()['content_'.concat(a)],
                            heading: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lQ()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, y.jsx)(tW.q, {
                                        children: (0, y.jsx)(eo.DZ, {
                                            variant: 'h2',
                                            children: (0, y.jsx)(eG.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                            content: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(iq, {
                                        className: lQ().card,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-switch-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68c0128ad8f3372f64a885b4/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c012b2fbed8f7a98fb1441/orig',
                                    }),
                                    (0, y.jsx)(iq, {
                                        className: lQ().card,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-read-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig',
                                    }),
                                    (0, y.jsx)(iq, {
                                        className: lQ().card,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-download-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig',
                                    }),
                                    (0, y.jsx)(iq, {
                                        className: lQ().card,
                                        text: (0, y.jsx)(eG.A, { id: 'paywall.books-part-benefit-speed-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.68c01296fbed8f7a98fb143c/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c012bbd8f3372f64a885b9/orig',
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                lG = { family_offer: (0, y.jsx)(lF, {}), default: (0, y.jsx)(lR, {}) },
                lZ = () => {
                    var e;
                    let t = ly(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(T.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            t ? (0, y.jsx)(lH, {}) : lG[i] || lG.default,
                            (0, y.jsx)(i3, { className: aH().section }),
                            (0, y.jsx)(i4, { className: aH().section }),
                            (0, y.jsx)(l$, { className: aH().section }),
                            (0, y.jsx)(i7, { className: aH().section }),
                            (0, y.jsx)(ie, { className: aH().section_faq, variant: az.RU }),
                            (0, y.jsx)(is, { variant: az.RU }),
                        ],
                    });
                },
                lX = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, y.jsx)('div', { className: lv().root, children: e ? (0, y.jsx)(lZ, {}) : (0, y.jsx)(lY, {}) });
                }),
                lJ = { [az.RU]: (0, y.jsx)(lX, {}), [az.BY]: (0, y.jsx)(ls, {}), [az.OTHER]: (0, y.jsx)(lm, {}) },
                l0 = (0, h.PA)((e) => {
                    let { useOverlayScroll: t = !0 } = e,
                        { user: a, experiments: i } = (0, N.g)(),
                        l = (0, aF.j)(),
                        n = (0, tj.L)(() =>
                            (0, y.jsx)('div', {
                                'data-buy-subscription-block-portal': !0,
                                className: aH().root,
                                'data-test-id': q.e8.paywall.PAYWALL,
                                children: lJ[((e) => (e && aW[e]) || az.OTHER)(a.account.data.geoRegionIso)],
                            }),
                        ),
                        s = (0, g.useMemo)(() => {
                            if (l.isContextDefined) return n;
                            let e = i.checkExperiment(T.z.WebNextPaywallSecondButton, 'on')
                                ? [tV.R.BLOCK_1, tV.R.BLOCK_2, tV.R.BOTTOM_BUTTON]
                                : [tV.R.BLOCK_1, tV.R.BOTTOM_BUTTON];
                            return (0, y.jsx)(tK.r, { page: tH.l.MUSIC_PAYWALL_SCREEN, places: e, children: n });
                        }, [l.isContextDefined, n, i]);
                    return t ? (0, y.jsx)(aB.C, { className: (0, eM.$)(aH().overlayScroll, { [aH().overlayScroll_desktop]: aR.NN }), children: s }) : s;
                });
            var l1 = a(64003),
                l2 = a.n(l1);
            let l4 = (0, h.PA)(() => {
                let { paywall: e } = (0, N.g)(),
                    { formatMessage: t } = (0, Y.A)(),
                    a = (0, aD.e)(),
                    i = e.freemiumCollectionBarrier;
                return (
                    (0, g.useEffect)(() => {
                        e.modal.isOpened && aR.NN && (null == a || a.pause());
                    }, [e.modal.isOpened, a]),
                    (0, y.jsxs)(b.a, {
                        open: e.modal.isOpened,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        onClose: i ? void 0 : e.closeModal,
                        onOpenChange: e.onOpenChange,
                        closeOnOutsidePress: !1,
                        escapeKey: !i,
                        className: l2().root,
                        contentClassName: l2().content,
                        overlayColor: 'full',
                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL,
                        children: [
                            !i &&
                                (0, y.jsx)('header', {
                                    className: l2().header,
                                    children: (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        className: l2().closeButton,
                                        onClick: e.closeModal,
                                        'aria-label': t({ id: 'interface-actions.close' }),
                                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL_CLOSE_BUTTON,
                                    }),
                                }),
                            (0, y.jsx)(l0, {}),
                        ],
                    })
                );
            });
            var l8 = a(51859),
                l6 = a(4296),
                l3 = a(12799),
                l5 = a(94860),
                l9 = a(51790),
                l7 = a(16978),
                ne = a(50290),
                nt = a.n(ne);
            let na = () =>
                (0, y.jsx)(l9.$, {
                    message: (0, y.jsx)(eo.HL, {
                        className: nt().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(eG.A, { id: 'onboarding.authorize-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                    }),
                    withDefaultCloseButton: !1,
                    closeButton: (0, y.jsx)(l7.H, {
                        className: nt().loginButton,
                        variant: 'text',
                        size: 'xxs',
                        withRipple: !1,
                        buttonText: (0, y.jsx)(eG.A, { id: 'authorization.enter-button' }),
                    }),
                });
            var ni = a(66900),
                nl = a.n(ni);
            let nn = (0, h.PA)((e) => {
                    let { closeToast: t } = e,
                        {
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = (0, g.useCallback)(() => {
                            (a.open(), null == t || t());
                        }, [a, t]);
                    return (0, y.jsx)(l9.$, {
                        message: (0, y.jsx)(eo.HL, {
                            className: nl().text,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, y.jsx)(eG.A, { id: 'onboarding.try-plus-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                        }),
                        cover: (0, y.jsx)($.I, { className: nl().icon, variant: 'plusColor' }),
                        coverRadius: 'round',
                        coverClassName: (0, eM.$)(nl().cover, nl().important),
                        withDefaultCloseButton: !1,
                        closeButton: (0, y.jsx)(Q.$, {
                            className: nl().tryButton,
                            variant: 'text',
                            color: 'primary',
                            size: 'xxs',
                            onClick: i,
                            withRipple: !1,
                            children: (0, y.jsx)(eG.A, { id: 'payment.try-button' }),
                        }),
                    });
                }),
                ns = () => {
                    let { freePlayerAccess: e } = (0, N.g)(),
                        { notify: t } = (0, es.l)();
                    (0, g.useEffect)(() => {
                        switch (e.shownRestrictionModal) {
                            case l5.h.FullscreenSubscription:
                                t((0, y.jsx)(nn, {}), { containerId: en.u.FULLSCREEN_INFO });
                                break;
                            case l5.h.FullscreenUnauthorized:
                                t((0, y.jsx)(na, {}), { containerId: en.u.FULLSCREEN_INFO });
                                break;
                            default:
                                return;
                        }
                        e.hideRestrictionModal();
                    }, [e, e.shownRestrictionModal, t]);
                };
            var nr = a(63919),
                no = a.n(nr),
                nc = a(51150),
                nd = a(48596),
                nu = a(27559),
                n_ = a(3912),
                nm = a(41544),
                np = a(36699);
            let nv = (0, g.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                nx = () => (0, g.useContext)(nv);
            var ny = a(42994),
                nh = a.n(ny),
                nC = a(74268);
            let ng = (0, h.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, N.g)();
                return i ? (0, y.jsx)(nC.gB, { items: a, strategy: nC._G, children: t }) : t;
            });
            var nA = a(24816),
                nf = a(17627);
            let nb = (e) => {
                let t = (0, aD.e)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, N.g)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    l = null == i ? void 0 : i[e];
                if (!l) return null;
                let {
                        context: { data: n },
                    } = l,
                    s = a.get(String(l.entity.data.meta.id));
                return s ? { track: s, playContextParams: { contextData: n, queueParams: { index: e } } } : null;
            };
            var nj = a(78574),
                nN = a.n(nj);
            let nT = (0, h.PA)(
                    (0, g.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: l, ...n } = e,
                            { isDragging: s, listeners: r, setNodeRef: o, transform: c, transition: d, attributes: u } = (0, nC.gl)({ id: String(i) }),
                            _ = (0, g.useCallback)(
                                (e) => {
                                    (o(e), 'function' == typeof t && t(e));
                                },
                                [t, o],
                            ),
                            m = { transition: d, '--translate-y': c ? ''.concat(Math.round(c.y), 'px') : void 0 };
                        return (0, y.jsx)('div', {
                            ref: _,
                            'data-index': i,
                            style: m,
                            ...n,
                            className: (0, eM.$)(nN().root, l),
                            children: (0, y.jsx)('div', { ref: t, className: (0, eM.$)(nN().inner, { [nN().dragging]: s }), ...r, ...u, role: 'listitem', children: a }),
                        });
                    }),
                ),
                nS = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: n, hideControls: s } = e,
                        r = (0, aD.e)(),
                        o = a && !s,
                        c = (0, g.useMemo)(() => {
                            let e = null == r ? void 0 : r.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == r ? void 0 : r.state.queueState.order.value]),
                        d = nb(t),
                        u = null == d ? void 0 : d.track,
                        _ = null == d ? void 0 : d.playContextParams,
                        m = (0, nf.i)(null != u ? u : null, nA.N.HIDE, c),
                        p = (0, f.c)(() => {
                            (m(), (null == i ? void 0 : i.current) && i.current.focus());
                        }),
                        v = (0, tj.L)(() =>
                            u && _
                                ? (0, y.jsx)(eF.K, {
                                      track: u,
                                      playContextParams: _,
                                      className: l,
                                      withDNDBlock: o,
                                      handleRemove: n ? p : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: s,
                                  })
                                : null,
                        );
                    return v ? (o ? (0, y.jsx)(nT, { 'data-index': t, children: v }) : v) : null;
                };
            var nI = a(73998),
                nk = a.n(nI),
                nL = a(11823),
                nE = a(86209),
                nM = a(47538),
                nP = a(84652),
                nO = a(50314),
                nw = a(19966),
                nR = a(25895),
                nD = a(57954),
                nB = a(5568),
                nF = a(86152),
                nU = a(92158);
            let nz = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var nW = (function (e) {
                return ((e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e);
            })({});
            let nK = () => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, N.g)(),
                        l = (0, aD.e)(),
                        n = null == l ? void 0 : l.state.currentContext.value,
                        s = null == n ? void 0 : n.data.meta,
                        r = null == l ? void 0 : l.state.queueState.currentEntity.value,
                        o = null == a ? void 0 : a.mainArtist,
                        c = (null == n ? void 0 : n.data.type) === eD.K.Artist ? n.data.meta.artist : void 0,
                        d = (null == c ? void 0 : c.name) ? c : o,
                        u = null == a ? void 0 : a.mainAlbum,
                        _ = null == a ? void 0 : a.isPodcast,
                        m = (function () {
                            let e = (0, aD.e)(),
                                t = null == e ? void 0 : e.state.queueState.currentEntity.value;
                            return (0, g.useMemo)(
                                () =>
                                    (function (e) {
                                        if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                        let t = e.data.sourceContextType;
                                        if ((0, nB.F)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eD.K.Album, sourceContextType: t };
                                        }
                                        if ((0, nU.K)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: eD.K.Playlist, sourceContextType: t };
                                        }
                                        if ((0, nF.T)(e)) {
                                            var a;
                                            let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                            if (i) return { title: i, type: eD.K.Artist, sourceContextType: t };
                                        }
                                        return { title: void 0, type: void 0, sourceContextType: t };
                                    })(null == t ? void 0 : t.sourceContext),
                                [null == t ? void 0 : t.sourceContext],
                            );
                        })(),
                        p = (0, tj.L)(() => {
                            if (m.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case eD.K.Album: {
                                                if (!(0, nB.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nR.u)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case eD.K.Artist: {
                                                if (!(0, nF.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nR.u)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case eD.K.Playlist: {
                                                if (!(0, nU.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, nR.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext });
                            switch (null == n ? void 0 : n.data.type) {
                                case eD.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let l = (0, nM.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            n = (0, nM.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (l || n)
                                            switch (e) {
                                                case nW.Artist: {
                                                    let { href: e } = (0, nR.u)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == l ? void 0 : l.data.meta.id) ? a : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nW.Playlist: {
                                                    let e = null == l ? void 0 : l.data.meta,
                                                        t = nz(e) ? e.playlistUuid : n;
                                                    if (!t) return;
                                                    let { href: a } = (0, nR.u)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case nW.Album: {
                                                    if (!(null == l ? void 0 : l.data.meta.id) && !n) return;
                                                    let { href: e } = (0, nR.u)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == l ? void 0 : l.data.meta.id) ? i : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nW.Track: {
                                                    if (!n) return;
                                                    if (String(n).includes(':')) {
                                                        let [e, t] = String(n).split(':'),
                                                            { href: a } = (0, nR.u)('/album/:albumId/track/:trackId', { params: { albumId: e || '', trackId: t || '' } });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, nR.u)('/track/:trackId', { params: { trackId: n } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, n);
                                case eD.K.Artist: {
                                    if (!(null == d ? void 0 : d.id)) return;
                                    let { href: e } = (0, nR.u)('/artist/:artistId', { params: { artistId: String(d.id) } });
                                    return e;
                                }
                                case eD.K.Playlist: {
                                    if (!nz(s)) return;
                                    let { href: e } = (0, nR.u)('/playlists/:playlistUuid', { params: { playlistUuid: null == s ? void 0 : s.playlistUuid } });
                                    return e;
                                }
                                case eD.K.Album: {
                                    if (!(null == u ? void 0 : u.id)) return;
                                    let { href: e } = (0, nR.u)('/album/:albumId', { params: { albumId: u.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        v = (0, tj.L)(() => {
                            if (m.title) return m.title;
                            switch (null == n ? void 0 : n.data.type) {
                                case eD.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, y.jsx)(eG.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case eD.K.Artist:
                                    return null == d ? void 0 : d.name;
                                case eD.K.Playlist:
                                    if (!nz(s)) return;
                                    return null == s ? void 0 : s.title;
                                case eD.K.Album:
                                    return null == u ? void 0 : u.title;
                                case eD.K.Various:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, y.jsx)(eG.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        x = (0, tj.L)(() => {
                            if (m.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        l = (function (e) {
                                            switch (e) {
                                                case nD.h.SEARCH:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-search' });
                                                case nD.h.DOWNLOADED_TRACKS:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case nD.h.MUSIC_HISTORY:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-history' });
                                                case nD.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case nD.h.ARTIST_MY_COLLECTION:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case nD.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (l) return l;
                                    if (i === nD.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case eD.K.Album:
                                                if ((0, nB.F)(a) && a.data.meta.type === ec._.PODCAST)
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-album' });
                                            case eD.K.Artist:
                                                return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case eD.K.Playlist:
                                                return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext, sourceContextType: m.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == n ? void 0 : n.data.type) {
                                case eD.K.Vibe:
                                    var a, l;
                                    if (!t.checkExperiment(T.z.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, nM.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case nW.Artist:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case nW.Playlist:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case nW.Album:
                                                    if ((null == a ? void 0 : a.data.type) === ec._.PODCAST)
                                                        return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case nW.Track:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (l = i.meta) ? void 0 : l.stationType, n);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case eD.K.Artist:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case eD.K.Playlist:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-playlist' });
                                case eD.K.Album:
                                    if (_) return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        h = (0, tj.L)(() => ((0, nP.p)(n) ? (0, y.jsx)(eG.A, { id: 'entity-names.my-vibe' }) : v));
                    return {
                        url: p,
                        title: v,
                        subTitle: x,
                        vibeBlockTitle: h,
                        vibeBlockSubTitle: (0, tj.L)(() => {
                            switch (null == n ? void 0 : n.data.type) {
                                case eD.K.Artist:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.my-wave-by-artist' });
                                case eD.K.Playlist:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.my-wave-by-playlist' });
                                case eD.K.Album:
                                    return (0, y.jsx)(eG.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, tj.L)(() => {
                            var e, t, a;
                            switch (null == n ? void 0 : n.data.type) {
                                case eD.K.Album:
                                    return (0, nw.K)({ animationUri: '', cover: { uri: n.data.meta.coverUri }, entity: { type: nO.h.ALBUM } });
                                case eD.K.Artist:
                                    return (0, nw.K)({
                                        animationUri: '',
                                        cover: { uri: null == (t = n.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: nO.h.ARTIST },
                                    });
                                case eD.K.Playlist:
                                    return (0, nw.K)({
                                        animationUri: '',
                                        cover: { uri: null == (a = n.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: nO.h.PLAYLIST },
                                    });
                                case eD.K.Various:
                                    return (0, nw.K)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: nO.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                nH = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var nV = a(44061),
                nY = a.n(nV);
            let nq = (0, h.PA)(() => {
                    let { experiments: e } = (0, N.g)(),
                        t = (0, aD.e)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: l } = nK(),
                        n = (0, g.useCallback)(
                            (e) => {
                                ((0, nL.P)(e, nY().ripple), null == t || t.moveForward());
                            },
                            [t],
                        ),
                        s = (0, tj.L)(() =>
                            e.checkExperiment(T.z.WebNextWaveAgentExperiment, 'on') && l
                                ? (0, y.jsx)(nE.n, { agent: l, shouldShowControl: !1 })
                                : (0, y.jsx)(tz._V, {
                                      src: nH.src,
                                      className: nY().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE,
                                  }),
                        );
                    return (0, y.jsxs)('div', {
                        className: nY().root,
                        onClick: n,
                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK,
                        children: [
                            s,
                            (0, y.jsxs)('div', {
                                children: [
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: nY().title,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE,
                                        children: a,
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: nY().vibeTitle,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE,
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nQ = (0, h.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: l },
                            },
                            sonataState: { isContextRepeatMode: n, isVibeContext: s },
                        } = (0, N.g)(),
                        r = (0, aD.e)(),
                        o = null == r ? void 0 : r.state.queueState.order.value,
                        c = null != (e = null == r ? void 0 : r.state.queueState.livePlayableIndex.value) ? e : 0,
                        d = null == r ? void 0 : r.state.queueState.entityList.value,
                        { isMovingForward: u, isMovingBackward: _, difference: m, isSingleTrackSwitch: p } = nx(),
                        v = l - m,
                        x = (0, g.useId)(),
                        h = (0, g.useRef)(null);
                    return n && 0 === t.length
                        ? (0, y.jsx)('div', { className: nk().root, 'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK })
                        : (0, y.jsxs)('div', {
                              className: nk().root,
                              'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK,
                              children: [
                                  (0, y.jsx)(eo.HL, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, eM.$)(nk().title, { [nk().title_withDnD]: i }),
                                      'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE,
                                      children: (0, y.jsx)(eG.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, y.jsx)(ng, {
                                      children: (0, y.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: h,
                                          className: (0, eM.$)(nk().animatedContent, {
                                              [nk().animatedContent_moveToTop]: u,
                                              [nk().animatedContent_moveFromTop]: _ && !p,
                                              [nk().animatedContent_moveFromTopSingleTrack]: _ && p,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: l, livePlayableIndex: n, isVibeContext: s, entityList: r } = e,
                                                          o = null != (a = null == l ? void 0 : l.indexOf(i)) ? a : -1,
                                                          c = !!(null == r || null == (t = r[i]) ? void 0 : t.sourceContext);
                                                      return s && o > n && !c;
                                                  })({ index: e, order: o, livePlayableIndex: c, isVibeContext: s, entityList: d });
                                                  return (null == o ? void 0 : o[v]) === e
                                                      ? (0, y.jsx)(
                                                            'div',
                                                            {
                                                                className: nk().prevTrack,
                                                                children: (0, y.jsx)(
                                                                    nS,
                                                                    { index: e, isDragAndDropEnabled: i, isRemoveAvailable: !0, hideControls: t },
                                                                    e,
                                                                ),
                                                            },
                                                            x,
                                                        )
                                                      : (0, y.jsx)(nS, { index: e, isDragAndDropEnabled: i, blockRef: h, isRemoveAvailable: !0, hideControls: t }, e);
                                              }),
                                              a && (0, y.jsx)(nq, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                });
            var n$ = a(37372),
                nG = a.n(n$);
            let nZ = (0, h.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: l, currentIndex: n },
                            },
                        } = (0, N.g)(),
                        s = (0, aD.e)(),
                        r = null == s ? void 0 : s.state.queueState.order.value;
                    (0, g.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: o, isMovingBackward: c, difference: d, isSingleTrackSwitch: u } = nx(),
                        _ = n - d,
                        m = (0, g.useId)();
                    return (0, y.jsx)('div', {
                        className: nG().root,
                        ref: t,
                        children: (0, y.jsx)(ng, {
                            children: (0, y.jsx)('div', {
                                className: (0, eM.$)(nG().animatedContent, {
                                    [nG().animatedContent_moveToBottom]: c,
                                    [nG().animatedContent_moveFromBottom]: o && !u,
                                    [nG().animatedContent_moveFromBottomSingleTrack]: o && u,
                                }),
                                'data-test-id': q.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK,
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == r ? void 0 : r[_]) === e
                                                  ? (0, y.jsx)(
                                                        'div',
                                                        {
                                                            className: nG().prevTrack,
                                                            children: (0, y.jsx)(nS, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                                        },
                                                        m,
                                                    )
                                                  : (0, y.jsx)(nS, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                nX = (0, g.forwardRef)((e, t) => (0, y.jsx)(nZ, { forwardRef: t, ...e }));
            var nJ = a(98797),
                n0 = a(10499),
                n1 = a(24252),
                n2 = a(38590),
                n4 = a.n(n2);
            let n8 = (e) => {
                    let { index: t } = e,
                        a = nb(t),
                        i = null == a ? void 0 : a.track,
                        l = null == a ? void 0 : a.playContextParams;
                    return i && l
                        ? (0, y.jsx)('div', {
                              className: n4().root,
                              children: (0, y.jsx)(eF.K, {
                                  track: i,
                                  playContextParams: l,
                                  draggingClassName: n4().dots,
                                  className: n4().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                n6 = (0, h.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, N.g)(),
                        { activeId: i, handleDragStart: l, handleDragCancel: n, sensors: s } = (0, n1.Y)(),
                        r = (0, g.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        o = (0, g.useMemo)(() => {
                            if (i)
                                return (0, iL.createPortal)(
                                    (0, y.jsx)(nJ.Hd, { dropAnimation: { duration: 0 }, children: (0, y.jsx)(n8, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, y.jsxs)(nJ.Mp, {
                              sensors: s,
                              collisionDetection: nJ.fp,
                              onDragStart: l,
                              onDragEnd: r,
                              onDragCancel: n,
                              modifiers: [n0.FN],
                              children: [t, o],
                          })
                        : t;
                });
            var n3 = a(65027),
                n5 = a(55656),
                n9 = a.n(n5);
            let n7 = (0, h.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: l },
                    } = (0, N.g)(),
                    { formatMessage: n } = (0, Y.A)(),
                    { url: s, title: r, subTitle: o } = nK(),
                    c = (0, n3.C)({ onClick: e.close }),
                    d = (0, g.useMemo)(() => {
                        let e = (0, y.jsx)(eo.DZ, {
                            variant: 'h2',
                            size: 'm',
                            weight: 'bold',
                            lineClamp: 1,
                            className: (0, eM.$)(n9().heading, { [n9().heading_withOffset]: !o }),
                            'data-test-id': s ? void 0 : q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                            children: r,
                        });
                        return s
                            ? (0, y.jsx)(af.N, {
                                  className: n9().title,
                                  containerClassName: n9().linkContainer,
                                  textClassName: n9().linkText,
                                  icon: (0, y.jsx)($.I, { className: n9().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: s,
                                  onClick: c,
                                  'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                  children: e,
                              })
                            : e;
                    }, [c, o, r, s]),
                    u = (0, tj.L)(() =>
                        a ? n({ id: 'play-queue.repeat-context' }) : i ? n({ id: 'play-queue.repeat-one' }) : l ? n({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, y.jsxs)('div', {
                    className: (0, eM.$)(n9().root, { [n9().root_withDnD]: t }),
                    children: [
                        (0, y.jsx)(eo.HL, {
                            variant: 'div',
                            size: 'm',
                            className: n9().subTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                            children: o,
                        }),
                        d,
                        (0, y.jsx)(eo.HL, {
                            variant: 'div',
                            size: 'm',
                            className: n9().modeTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE,
                            children: u,
                        }),
                    ],
                });
            });
            var se = a(37230),
                st = a.n(se);
            let sa = (0, h.PA)(() => {
                    var e, t;
                    let { from: a } = (0, eU.f)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: l },
                            },
                            sonataState: { entityMeta: n },
                        } = (0, N.g)(),
                        { isMovingForward: s, isMovingBackward: r } = nx(),
                        o = (0, aD.e)(),
                        c = null == o || null == (t = o.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!c || !n) return null;
                    let d = { contextData: { ...c, from: a }, queueParams: { index: i, entityId: n.id } };
                    return (0, y.jsxs)('div', {
                        className: st().root,
                        'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, y.jsx)(n7, {}),
                            (0, y.jsx)(eF.K, {
                                track: n,
                                playContextParams: d,
                                className: (0, eM.$)(st().track, st().important, {
                                    [st().track_withDnD]: l,
                                    [st().track_moveFromTop]: r,
                                    [st().track_moveFromBottom]: s,
                                }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                si = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, N.g)(),
                                i = (0, aD.e)(),
                                [l, n] = (0, g.useState)(),
                                s = (0, g.useRef)(void 0),
                                r = (0, g.useRef)(void 0),
                                o = (0, g.useRef)(void 0),
                                { state: c, handleDebouncedToggle: d } = (0, nc.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: u, handleDebouncedToggle: _ } = (0, nc.F)({ delay: 600, throttleTimeout: 600 }),
                                m = (0, f.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        l = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i ? void 0 : i.state.queueState.order.value,
                                        s = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof l && n && s && t(a, l, n, s);
                                }),
                                p = (0, f.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        c = s.current;
                                    if ('number' == typeof t && 'number' == typeof c) {
                                        let e = a.reduce((e, t) => (t < c ? e + 1 : e - 1), 0),
                                            i = t - c;
                                        o.current = i;
                                        let s = l !== r.current,
                                            u = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || s ? (d(), n(s ? 1 : u)) : i < 0 && (_(), n(u));
                                    }
                                    ((s.current = t), (r.current = l));
                                });
                            ((0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              (m(), p());
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [p, m, null == i ? void 0 : i.state.queueState.index]),
                                (0, g.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(m),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(m),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(m);
                                    return () => {
                                        (null == e || e(), null == t || t(), null == a || a());
                                    };
                                }, [
                                    m,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]));
                            let v = (0, g.useMemo)(() => {
                                    let e = 56 * (l || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [l]),
                                x = 1 === Math.abs(null != l ? l : 0);
                            return {
                                style: v,
                                contextValue: { isMovingForward: c, isMovingBackward: u, difference: null != (e = o.current) ? e : 0, isSingleTrackSwitch: x },
                            };
                        })(),
                        a = (0, g.useRef)(null),
                        i = (0, g.useRef)(null),
                        { state: l, handleDebouncedToggle: n, reset: s } = (0, nc.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        r = (0, g.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            l || (r('smooth'), s());
                        }, [l, s, r]),
                        (0, g.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                () => {
                                    null == e || e.removeEventListener('scroll', n);
                                }
                            );
                        }, [n]),
                        (0, y.jsx)(n6, {
                            children: (0, y.jsx)(nv.Provider, {
                                value: t,
                                children: (0, y.jsx)('div', {
                                    className: nh().root,
                                    style: e,
                                    'data-test-id': q.e8.player.PLAY_QUEUE,
                                    children: (0, y.jsx)('div', {
                                        className: nh().content,
                                        ref: a,
                                        children: (0, y.jsxs)('div', {
                                            className: nh().scrollContent,
                                            children: [(0, y.jsx)(nX, { ref: i, scrollToNowPlayingBlock: r }), (0, y.jsx)(sa, {}), (0, y.jsx)(nQ, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                sl = (0, g.createContext)({});
            var sn = a(11890),
                ss = a.n(sn),
                sr = a(39760),
                so = a.n(sr);
            let sc = (0, h.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, N.g)(),
                    l = (0, g.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, g.cloneElement)(a, {
                                      className: (0, eM.$)(so().element, so().element_withIcon, { [so().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, y.jsx)(
                                      'div',
                                      { className: (0, eM.$)(so().element, so().element_withDefaultElement, { [so().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, y.jsx)('div', { className: (0, eM.$)(so().root, t), children: Array.from({ length: 4 }, (e, t) => l(t)) });
            });
            var sd = a(84795),
                su = a(14444),
                s_ = a(88245),
                sm = (function (e) {
                    return ((e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e);
                })({}),
                sp = a(16886),
                sv = a(56088),
                sx = a.n(sv);
            let sy = (0, h.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, Y.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: l },
                    } = (0, N.g)();
                return (0, y.jsxs)('footer', {
                    className: sx().root,
                    children: [
                        l.hasWriters &&
                            (0, y.jsx)(eo.HL, {
                                className: sx().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = l.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = l.major) ? void 0 : t.prettyName) &&
                            (0, y.jsx)(eo.HL, {
                                className: sx().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = l.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var sh = a(37138),
                sC = a.n(sh);
            let sg = (e) => {
                let { className: t, text: a } = e;
                return (0, y.jsx)('span', { className: (0, eM.$)(sC().root, t), children: a });
            };
            var sA = a(19666),
                sf = a.n(sA);
            let sb = (0, h.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: l, shouldShowScrolledLyrics: n, setProgressPosition: s } = e,
                    r = (0, aD.e)(),
                    o = (0, su.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: c },
                    } = (0, N.g)(),
                    d = (0, g.useCallback)(
                        (e) => (t) => {
                            n &&
                                (t.stopPropagation(),
                                s(e + 0.01),
                                null == r ||
                                    r.setProgress(e + 0.01).catch(() => {
                                        s(l);
                                    }));
                        },
                        [l, s, n, r],
                    ),
                    u = c.getActiveLineIndex(l);
                return (
                    ((e) => {
                        let t = (0, g.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: l },
                            } = (0, N.g)();
                        (0, g.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++, t.current >= 2 && a.sendViews({ contextId: i, contextType: l }));
                        }, [e, i, l, a]);
                    })(u),
                    (0, g.useEffect)(() => {
                        if (!n) {
                            if (((i === sm.INTRO || i === sm.PREPARE) && o.slideTo(0), i === sm.OUTRO)) {
                                var e;
                                o.slideTo(Number(null == (e = c.lines) ? void 0 : e.length));
                            }
                            null !== u && o.slideTo(u + 1);
                        }
                    }, [u, n, i, o, null == (t = c.lines) ? void 0 : t.length]),
                    null == (a = c.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, y.jsx)(
                                  su.qr,
                                  {
                                      onClickCapture: d(e.fromSec),
                                      className: (0, eM.$)(sf().line, {
                                          [sf().line_last]: t === Number(null == (a = c.lines) ? void 0 : a.length) - 1 && !n,
                                          [sf().line_active]: t === u && !n,
                                      }),
                                      'data-test-id': q.e8.player.SYNC_LYRICS_LINE,
                                      children: (0, y.jsx)(sg, { text: e.text }),
                                  },
                                  e.key,
                              );
                          })
                );
            });
            sb.displayName = 'SwiperSlide';
            let sj = { forceToAxis: !0 },
                sN = (0, h.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, aD.e)(),
                                [a, i] = (0, g.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                l = (0, g.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, g.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: l }
                            );
                        })(),
                        { state: l } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, N.g)();
                            return {
                                state: (0, g.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? sm.PREPARE : e && e > t ? sm.INTRO : i && t > i ? sm.OUTRO : sm.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: n, footerClassName: s, counterClassName: r } = (0, g.useContext)(sl),
                        { state: o, handleDebouncedToggle: c, reset: d } = (0, nc.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: u, handleDebouncedToggle: _, reset: m } = (0, nc.F)({ delay: 3e3, throttleTimeout: 300 }),
                        p = (0, g.useCallback)(() => {
                            u || c();
                        }, [c, u]),
                        v = (0, g.useCallback)(() => {
                            (o && d(), _());
                        }, [_, d, o]),
                        x = (0, g.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case s_.Y.KEY_L:
                                    case s_.Y.KEY_J:
                                    case s_.Y.ARROW_LEFT:
                                    case s_.Y.ARROW_RIGHT:
                                        c();
                                }
                            },
                            [c],
                        ),
                        h = (0, g.useMemo)(() => (l === sm.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, l, e.startSec]),
                        C = (0, g.useMemo)(
                            () => (l === sm.PREPARE ? (0, y.jsx)(sg, { className: sf().counterLine, text: h }) : l === sm.INTRO ? (0, y.jsx)(sc, {}) : null),
                            [h, l],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, aD.e)();
                            (0, g.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === sp.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: m }),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('keydown', x),
                                () => {
                                    window.removeEventListener('keydown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('mousemove', p),
                                () => {
                                    window.removeEventListener('mousemove', p);
                                }
                            ),
                            [p],
                        ),
                        (0, y.jsxs)(su.RC, {
                            className: (0, eM.$)(
                                sf().root,
                                { [sf()['root_'.concat(l)]]: !u, [sf().root_withVisibleUpperLyrics]: o, [sf().root_withVisibleScrolledLyrics]: u },
                                n,
                            ),
                            modules: [sd.FJ, sd.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: sj,
                            freeMode: !0,
                            onScroll: v,
                            onTouchMove: t ? v : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, y.jsx)(su.qr, { className: (0, eM.$)(sf().counter, r), children: C }),
                                (0, y.jsx)(sb, { setProgressPosition: i, shouldShowScrolledLyrics: u, state: l, progressPosition: a }),
                                (0, y.jsx)(su.qr, { className: s, children: (0, y.jsx)(sy, {}) }),
                            ],
                        })
                    );
                }),
                sT = (0, h.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: l, contentClassName: n, loaderClassName: s } = e,
                        r = (0, g.useRef)(null),
                        {
                            sonataState: { entityMeta: o },
                            fullscreenPlayer: { syncLyrics: c, hideSyncLyrics: d },
                        } = (0, N.g)();
                    (0, g.useEffect)(() => {
                        c.currentTrackId !== (null == o ? void 0 : o.id) && (null == o ? void 0 : o.isSyncLyricsAvailable) && c.getData(null == o ? void 0 : o.id);
                    }, [null == o ? void 0 : o.isSyncLyricsAvailable, null == o ? void 0 : o.id, c]);
                    let u = (0, g.useMemo)(
                            () => (c.isResolved ? (0, y.jsx)(sN, {}) : ((c.isRejected || c.hasInvalidLyrics) && d(), (0, y.jsx)(sc, { className: s }))),
                            [c.isResolved, c.isRejected, c.hasInvalidLyrics, c.setInvisible, s],
                        ),
                        _ = (0, g.useMemo)(() => ({ counterClassName: a, scrollerClassName: l, footerClassName: i }), [a, i, l]);
                    return (0, y.jsx)(sl.Provider, {
                        value: _,
                        children: (0, y.jsx)('div', {
                            ref: r,
                            className: (0, eM.$)(ss().root, t),
                            children: (0, y.jsx)('div', { className: (0, eM.$)(ss().content, n), 'data-test-id': q.e8.player.SYNC_LYRICS_CONTENT, children: u }),
                        }),
                    });
                });
            var sS = a(84925),
                sI = a(33180),
                sk = a(6304),
                sL = a(12913),
                sE = a(95048),
                sM = a.n(sE);
            let sP = (0, h.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: _, hidePlayQueue: m, showPlayQueue: p },
                        } = (0, N.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: h, handleAnimationEnd: C, handleClick: A } = (0, sL.C)({ shouldStartFromUnscale: _, onClick: v });
                    return (0, y.jsx)(Q.$, {
                        className: (0, eM.$)(sM().root, { [sM().animation_scaled]: x, [sM().animation_unscaled]: h }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': u({ id: 'play-queue.title' }),
                        'aria-pressed': _,
                        onClick: A,
                        icon: (0, y.jsx)($.I, { size: i, className: (0, eM.$)(sM().icon, l, { [sM().icon_active]: _ }), variant: 'playQueue' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON,
                        children: o,
                    });
                }),
                sO = (0, g.forwardRef)((e, t) => (0, y.jsx)(sP, { forwardRef: t, ...e }));
            var sw = a(81466),
                sR = a.n(sw);
            let sD = (0, h.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: _, hideSyncLyrics: m, showSyncLyrics: p },
                        } = (0, N.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: h, handleAnimationEnd: C, handleClick: A } = (0, sL.C)({ shouldStartFromUnscale: _, onClick: v }),
                        f = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, y.jsx)(Q.$, {
                        className: (0, eM.$)(sR().root, { [sR().animation_scaled]: x, [sR().animation_unscaled]: h }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': f,
                        'aria-pressed': _,
                        onClick: A,
                        icon: (0, y.jsx)($.I, { size: i, className: (0, eM.$)(sR().icon, l, { [sR().icon_active]: _ }), variant: 'syncLyrics' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': q.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                        children: o,
                    });
                }),
                sB = (0, g.forwardRef)((e, t) => (0, y.jsx)(sD, { forwardRef: t, ...e }));
            var sF = a(53214),
                sU = a.n(sF);
            let sz = (0, h.PA)(() => {
                var e;
                let [t, a] = (0, g.useState)(!1),
                    { sonataState: i, user: l } = (0, N.g)(),
                    { entityMeta: n } = i,
                    { handleDebouncedToggle: s } = (0, nc.F)({ delay: 1500, throttleTimeout: 300 }),
                    r = i.canSpeed && ((null == n ? void 0 : n.isNonMusic) || (null == n || null == (e = n.mainAlbum) ? void 0 : e.isNonMusic)),
                    o = (0, eJ.K)(n),
                    c = (0, g.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    d = (0, tj.L)(() => {
                        if ((null == n || !n.isRemoved) && (null == n ? void 0 : n.isAvailable))
                            return (0, y.jsx)(eX._, {
                                track: n,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, y.jsx)($.I, { variant: 'more', size: 'm' }),
                                className: (0, eM.$)(sU().menuButton, { [sU().menuButton_active]: t }),
                                wrapperClassName: sU().menuWrapper,
                                onClick: c,
                                size: 'l',
                                'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                            });
                    }),
                    u = (0, g.useMemo)(() => {
                        if (null == n ? void 0 : n.isSyncLyricsAvailable)
                            return (0, y.jsx)(sB, {
                                className: sU().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            });
                    }, [null == n ? void 0 : n.isSyncLyricsAvailable, l.isAuthorized]);
                return (
                    (0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', s),
                            () => {
                                window.removeEventListener('mousemove', s);
                            }
                        ),
                        [s],
                    ),
                    (0, y.jsxs)('div', {
                        className: (0, eM.$)(sU().root, { [sU().root_visible]: t }),
                        children: [
                            (0, y.jsx)(sO, {
                                className: sU().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            }),
                            (0, y.jsx)(sS.$, { className: sU().sonataControls, isMobile: !1, entityMeta: n, isFullscreen: !0 }),
                            d,
                            u,
                            (0, y.jsxs)('div', {
                                className: sU().bottomRightButtonsWrapper,
                                children: [
                                    r && (0, y.jsx)(sI.i, { className: sU().speedButton, size: 'l', iconSize: 'm', isIconCentered: !0 }),
                                    (0, y.jsx)(sk.WithOffline, {
                                        fallback: (0, y.jsx)(e6.c, {
                                            className: sU().likeButton,
                                            isLiked: null == n ? void 0 : n.isLiked,
                                            onClick: o,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !l.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var sW = a(86869),
                sK = a(6323),
                sH = a(31274),
                sV = a.n(sH);
            let sY = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, y.jsxs)(sW.t, {
                    radius: 'm',
                    className: (0, eM.$)(sV().root, t),
                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT,
                    children: [(0, y.jsx)(sK.B, { className: sV().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var sq = a(58586),
                sQ = a.n(sq);
            let s$ = {
                    enter: sQ().additionalContent_enter,
                    enterActive: sQ().additionalContent_enter_active,
                    exit: sQ().additionalContent_exit,
                    exitActive: sQ().additionalContent_exit_active,
                    appear: sQ().additionalContent_enter,
                    appearActive: sQ().additionalContent_enter_active,
                },
                sG = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        l = (0, g.useRef)(null);
                    return (0, y.jsx)(aJ.A, {
                        in: t,
                        nodeRef: l,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: s$,
                        children: (0, y.jsx)('div', {
                            ref: l,
                            className: (0, eM.$)(sQ().additionalContent, { [sQ().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                sZ = (0, h.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, nc.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                        } = (0, N.g)(),
                        { state: n, toggleTrue: s } = (0, eC.e)(!1),
                        r = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        o = null == i ? void 0 : i.isTrackAudiobook,
                        c = {
                            [np.u.PLAY_QUEUE]: { component: (0, y.jsx)(si, {}), isActive: l.isPlayQueueMode },
                            [np.u.SYNC_LYRICS]: {
                                component: (0, y.jsx)(sT, {
                                    className: sQ().syncLyrics,
                                    loaderClassName: sQ().syncLyricsLoader,
                                    contentClassName: sQ().syncLyricsContent,
                                    scrollerClassName: sQ().syncLyricsScroller,
                                    counterClassName: sQ().syncLyricsCounter,
                                    footerClassName: sQ().syncLyricsFooter,
                                }),
                                isActive: l.isSyncLyricsMode,
                            },
                        },
                        d = (0, g.useMemo)(
                            () =>
                                i
                                    ? o
                                        ? (0, y.jsx)(nu.Z, {
                                              hasLineClamp: !1,
                                              className: (0, eM.$)(sQ().meta, { [sQ().meta_isSplitMode]: l.isSplitMode }),
                                              titleContainerClassName: sQ().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, eM.$)(sQ().nonMusicAuthors, sQ().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : r
                                          ? (0, y.jsx)(n_.w, {
                                                className: (0, eM.$)(sQ().meta, { [sQ().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sQ().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: sQ().nonMusicAuthors,
                                            })
                                          : (0, y.jsx)(nm.j, {
                                                hasLineClamp: !1,
                                                className: (0, eM.$)(sQ().meta, { [sQ().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sQ().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: sQ().artists,
                                                textClassName: sQ().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, r, o, l.isSplitMode],
                        );
                    return (
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            l.isSplitMode && s();
                        }, [l.isSplitMode, l.mode, s]),
                        (0, g.useEffect)(
                            () => () => {
                                (l.reset(), l.playQueue.reset());
                            },
                            [l],
                        ),
                        (0, y.jsxs)('div', {
                            className: sQ().root,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: (0, eM.$)(sQ().fullscreenContent, {
                                        [sQ().fullscreenContent_withDisabledInsetTransition]: t,
                                        [sQ().fullscreenContent_enter]: l.isSplitMode,
                                        [sQ().fullscreenContent_leave]: !l.isSplitMode && n,
                                    }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT,
                                    children: [
                                        (0, y.jsx)(sY, {
                                            className: (0, eM.$)(sQ().poster, sQ().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, y.jsx)(sz, {}),
                                        }),
                                        (0, y.jsxs)('div', {
                                            className: sQ().info,
                                            children: [
                                                d,
                                                (0, y.jsx)(nd.v, {
                                                    className: sQ().sliderContainer,
                                                    sliderClassName: sQ().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: l.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(c).map((e) => {
                                    let [a, { component: i, isActive: l }] = e;
                                    return (0, y.jsx)(sG, { isModeActive: l, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                sX = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            modals: { ugcTrackEditModal: a },
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                            fullscreenVideoPlayer: n,
                            advert: s,
                        } = (0, N.g)(),
                        r = (0, l3.K)(i);
                    (ns(),
                        (0, g.useEffect)(() => {
                            s.isAdvertShown && l.modal.close();
                        }, [s.isAdvertShown, l.modal]));
                    let o = !t.isOpened && !n.modal.isOpened && !a.modal.isOpened;
                    return (0, y.jsxs)(b.a, {
                        className: (0, eM.$)(no().root, no().important),
                        open: l.modal.isOpened,
                        onOpenChange: o ? l.modal.onOpenChange : void 0,
                        onClose: l.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: r,
                        contentClassName: no().modalContent,
                        closeOnOutsidePress: !1,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_MODAL,
                        children: [
                            (0, y.jsx)('header', {
                                className: no().header,
                                children: (0, y.jsx)(Q.$, {
                                    className: no().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: l.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON,
                                }),
                            }),
                            (0, y.jsx)(sZ, {}),
                            (0, y.jsx)(l6.Notification, {
                                className: no().notification,
                                enableMultiContainer: !0,
                                containerId: en.u.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, y.jsx)(l6.Notification, {
                                className: no().notification,
                                enableMultiContainer: !0,
                                containerId: en.u.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var sJ = a(67117),
                s0 = a.n(sJ),
                s1 = a(76327),
                s2 = a(60025),
                s4 = a(14930),
                s8 = a(45503),
                s6 = a(28118);
            let s3 = (0, h.PA)((e) => {
                var t, a, i, l;
                let { className: n, onSyncLyricsButtonClick: s } = e,
                    {
                        sonataState: r,
                        settings: { isLandscape: o },
                        fullscreenPlayer: { isSyncLyricsMode: c },
                        user: { hasPlus: d },
                    } = (0, N.g)(),
                    { formatMessage: u } = (0, Y.A)(),
                    [_, m] = (0, g.useState)(!1),
                    p = (0, s1.A)(),
                    v = (0, s2.e)(),
                    x = null === r.entityMeta,
                    h = (null == (t = r.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = r.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                    C = r.canSpeed && h,
                    A = (0, f.c)(() => {
                        v(r);
                    }),
                    b = (0, f.c)(() => {
                        p(r);
                    }),
                    j = (0, g.useMemo)(() => {
                        var e;
                        if (h) return;
                        let t = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                        return (0, y.jsx)(Q.$, {
                            className: (0, eM.$)(s0().syncLyricsButton, { [s0().syncLyricsButton_active]: c }),
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            disabled: !(null == (e = r.entityMeta) ? void 0 : e.isSyncLyricsAvailable) || o,
                            withRipple: !1,
                            withHover: !1,
                            'aria-label': t,
                            icon: (0, y.jsx)($.I, { variant: 'syncLyrics', size: 'xs' }),
                            onClick: s,
                        });
                    }, [u, h, c, s, o, null == (l = r.entityMeta) ? void 0 : l.isSyncLyricsAvailable]);
                return (0, y.jsx)('div', {
                    className: (0, eM.$)(s0().footer, n),
                    children: (0, y.jsxs)('div', {
                        className: s0().footerContainer,
                        children: [
                            (x || r.canChangeRepeatMode) && (0, y.jsx)(s4.s, { onClick: b, isDisabled: x, repeatMode: r.repeatMode, variant: 'text' }),
                            C && (0, y.jsx)(sI.i, { size: 'xxxs', iconSize: 'l' }),
                            (0, y.jsx)(s6.p$, { open: _, onOpenChange: m, icon: (0, y.jsx)($.I, { variant: 'settings', size: 'xs' }), size: 'xxxs', disabled: !d }),
                            j,
                            (x || r.canShuffle) && (0, y.jsx)(s8.u, { onClick: A, isDisabled: x, shuffle: r.shuffle, variant: 'text' }),
                        ],
                    }),
                });
            });
            var s5 = a(1054),
                s9 = a.n(s5);
            let s7 = {
                    enter: s9().coverWrapper_enter,
                    enterActive: s9().coverWrapper_enter_active,
                    exit: s9().coverWrapper_exit,
                    exitActive: s9().coverWrapper_exit_active,
                },
                re = (0, h.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, g.useRef)(null),
                        [l, n] = (0, g.useState)(!1),
                        { state: s, handleDebouncedToggle: r, reset: o } = (0, nc.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: c, isSyncLyricsMode: d, showSyncLyrics: u, hideSyncLyrics: _, isPlayQueueMode: m, syncLyrics: p },
                            sonataState: { entityMeta: v },
                            settings: { isLandscape: x },
                        } = (0, N.g)(),
                        h = (null == v ? void 0 : v.isTrackPodcast) || (null == v || null == (t = v.mainAlbum) ? void 0 : t.isPodcast),
                        C = null == v ? void 0 : v.isTrackAudiobook,
                        A = (s || !c || x) && !m,
                        f = (0, g.useCallback)(() => {
                            d && !x && (s ? o() : r());
                        }, [d, s, o, r, x]),
                        b = (0, g.useCallback)(() => {
                            d && !x && s && r();
                        }, [r, d, s, x]),
                        j = (0, g.useCallback)(() => {
                            if (null == v ? void 0 : v.isSyncLyricsAvailable) return d ? _() : u();
                        }, [null == v ? void 0 : v.isSyncLyricsAvailable, _, d, u]),
                        T = (0, g.useMemo)(() => {
                            if (v)
                                return C
                                    ? (0, y.jsx)(nu.Z, {
                                          textClassName: s9().metaText,
                                          track: v,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : h
                                      ? (0, y.jsx)(n_.w, {
                                            textClassName: s9().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, y.jsx)(nm.j, {
                                            textClassName: s9().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [v, C, h]);
                    return (
                        (0, g.useEffect)(() => {
                            d && x && p.setInvisible();
                        }, [x, d, p]),
                        (0, g.useLayoutEffect)(() => {
                            d && !x && r();
                        }, [r, d, x]),
                        (0, y.jsxs)('div', {
                            onTouchEnd: b,
                            className: (0, eM.$)(s9().root, a),
                            children: [
                                (0, y.jsx)('div', {
                                    className: s9().content,
                                    children: (0, y.jsxs)('div', {
                                        className: s9().wrapper,
                                        children: [
                                            (0, y.jsxs)('div', {
                                                className: (0, eM.$)(s9().infoBlock, { [s9().infoBlock_withExpandedSyncLyrics]: !s && d && !x }),
                                                children: [
                                                    (0, y.jsxs)('div', {
                                                        onClick: f,
                                                        className: (0, eM.$)(s9().contentContainer, { [s9().contentContainer_withSplitMode]: c }),
                                                        children: [
                                                            d &&
                                                                !x &&
                                                                (0, y.jsx)(sT, {
                                                                    className: s9().syncLyrics,
                                                                    scrollerClassName: s9().syncLyricsScroller,
                                                                    contentClassName: s9().syncLyricsContent,
                                                                    loaderClassName: s9().syncLyricsLoader,
                                                                    footerClassName: s9().syncLyricsFooter,
                                                                    counterClassName: s9().syncLyricsCounter,
                                                                }),
                                                            m && (0, y.jsx)(si, {}),
                                                            (0, y.jsx)(aJ.A, {
                                                                in: !c || (x && d),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: s7,
                                                                children: (0, y.jsx)(sW.t, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: s9().coverWrapper,
                                                                    children: (0, y.jsx)(sK.B, {
                                                                        className: s9().cover,
                                                                        src: null == v ? void 0 : v.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !m &&
                                                        (0, y.jsxs)('div', {
                                                            className: s9().trackInfo,
                                                            children: [
                                                                !s &&
                                                                    d &&
                                                                    !x &&
                                                                    (0, y.jsx)(sW.t, {
                                                                        className: s9().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, y.jsx)(sK.B, {
                                                                            className: s9().trackInfoCover,
                                                                            src: null == v ? void 0 : v.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, y.jsxs)('div', {
                                                                    className: s9().metaContainer,
                                                                    children: [
                                                                        T,
                                                                        !(null == v ? void 0 : v.isRemoved) &&
                                                                            (null == v ? void 0 : v.isAvailable) &&
                                                                            (0, y.jsx)(eX._, {
                                                                                className: (0, eM.$)(s9().contextMenu, { [s9().contextMenu_visible]: l }),
                                                                                track: v,
                                                                                open: l,
                                                                                onOpenChange: n,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, y.jsx)($.I, { variant: 'more', size: 'xxs' }),
                                                                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            A && (0, y.jsx)(nd.v, { className: s9().timeline, disabled: !v, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            A && (0, y.jsx)(sS.$, { className: s9().buttonsBlock, isMobile: !0, entityMeta: v, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                A && (0, y.jsx)(s3, { onSyncLyricsButtonClick: j }),
                            ],
                        })
                    );
                });
            var rt = a(60924),
                ra = a(24656),
                ri = a.n(ra);
            let rl = (0, h.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: l, subTitle: n } = nK(),
                        { fullscreenPlayer: s } = (0, N.g)(),
                        r = (0, f.c)((e) => {
                            (e.stopPropagation(), s.modal.isOpened && s.modal.close());
                        }),
                        o = (0, g.useMemo)(() => {
                            let e = (0, y.jsx)(eo.HL, {
                                variant: 'span',
                                size: 'm',
                                className: ri().title,
                                lineClamp: 1,
                                'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                children: l,
                            });
                            return i ? (0, y.jsx)(af.N, { href: i, target: '_self', onClick: r, className: ri().link, children: e }) : e;
                        }, [r, l, i]);
                    return (0, y.jsxs)('div', {
                        className: (0, eM.$)(ri().root, a),
                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, y.jsxs)('div', {
                                className: ri().textBlock,
                                children: [
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: ri().subTitle,
                                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                                        children: n,
                                    }),
                                    o,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                rn = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: l },
                            user: n,
                        } = (0, N.g)(),
                        s = (0, g.useCallback)(() => (i ? l() : a()), [l, i, a]);
                    return (0, y.jsxs)('header', {
                        className: s0().header,
                        children: [
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON,
                            }),
                            (0, y.jsx)(rl, {
                                className: s0().headerCenter,
                                children: (0, y.jsx)(rt.k, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, y.jsx)(Q.$, {
                                        className: s0().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, y.jsx)($.I, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, y.jsx)(Q.$, {
                                className: (0, eM.$)(s0().playQueueButton, { [s0().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: s,
                                icon: (0, y.jsx)($.I, { variant: 'playQueue', size: 'xs' }),
                                disabled: !n.isAuthorized,
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON,
                            }),
                        ],
                    });
                }),
                rs = (0, h.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, N.g)(),
                        l = (0, l3.K)(e);
                    return (
                        ns(),
                        (0, g.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, y.jsxs)(b.a, {
                            className: (0, eM.$)(s0().root, s0().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: l,
                            contentClassName: s0().modalContent,
                            lockScroll: i,
                            'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL,
                            children: [
                                (0, y.jsx)(rn, {}),
                                (0, y.jsx)(re, {}),
                                (0, y.jsx)(l6.Notification, {
                                    className: s0().notification,
                                    enableMultiContainer: !0,
                                    containerId: en.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, y.jsx)(l6.Notification, {
                                    className: s0().notification,
                                    enableMultiContainer: !0,
                                    containerId: en.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                rr = (0, h.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, N.g)(),
                        a = t === l8.u.Mobile;
                    return (!a && e) || a ? (0, y.jsx)(rs, {}) : (0, y.jsx)(sX, {});
                });
            var ro = a(30883),
                rc = a(94041),
                rd = a(65343),
                ru = a(89209),
                r_ = a(20790),
                rm = a(84146),
                rp = a(83031),
                rv = a(74454),
                rx = a.n(rv);
            let ry = (0, h.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: i,
                        paywall: { modal: l },
                    } = (0, N.g)(),
                    n = a.isAdvertDisabled(rm.f.VIDEO),
                    { notify: s, dismiss: r } = (0, es.l)(),
                    { formatMessage: o } = (0, Y.A)(),
                    c = (0, r_.z)(),
                    d = (0, rc.r)(),
                    [u, _] = (0, g.useState)(!1),
                    m = (0, g.useRef)(null),
                    p = (0, g.useCallback)(
                        (e) => {
                            (e.stopPropagation(), e.preventDefault(), l.open(), _(!0), null == d || d.pauseVideoAdvert(), r());
                        },
                        [d, r, l],
                    );
                (0, g.useEffect)(() => {
                    u && !l.isOpened && (_(!1), null == d || d.resumeVideoAdvert());
                }, [d, u, l.isOpened]);
                let v = (0, g.useCallback)(() => {
                    s(
                        (0, y.jsx)(l9.$, {
                            className: rx().notify,
                            message: (0, y.jsx)(eo.HL, {
                                className: rx().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, y.jsx)(eG.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, y.jsx)($.I, { className: rx().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, eM.$)(rx().cover, rx().important),
                            closeButton: (0, y.jsx)(Q.$, {
                                className: rx().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: p,
                                withRipple: !1,
                                ref: m,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, y.jsx)(eG.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: en.u.AD_INFO },
                    );
                }, [p, s]);
                if (
                    ((0, g.useEffect)(() => {
                        if (!i.hasPlus && !n)
                            return (
                                null == c ||
                                    c.addShortcutsListener(ru.M.MAIN, rd.l.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && v();
                                    }),
                                () => {
                                    null == c || c.removeShortcutsListener(ru.M.MAIN, rd.l.CLOSE);
                                }
                            );
                    }, [v, c, a.isAdvertShown, a.isVideoAdvert, i.hasPlus, n]),
                    i.hasPlus || n)
                )
                    return;
                let x = a.isAdvertShown && a.isVideoAdvert;
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(b.a, {
                            className: (0, eM.$)(rx().root, { [rx().root_hidden]: !x }, t),
                            contentClassName: rx().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: x,
                            open: !0,
                            lockScroll: x,
                            overlayColor: 'full',
                            disableGuards: !x,
                            disableFocusTrap: !x,
                            'data-test-id': q.e8.ad.VIDEO_AD,
                            children: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(Q.$, {
                                        className: rx().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        'aria-label': o({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, y.jsx)(ro.b, {
                                        data: a.data,
                                        mediaContent: (0, y.jsx)('div', {
                                            className: rx().videoBlock,
                                            id: rp.s.SLOT,
                                            children: (0, y.jsx)('video', { id: rp.s.VIDEO, className: rx().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, y.jsx)(l6.Notification, { enableMultiContainer: !0, containerId: en.u.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            ry.displayName = 'VideoAd';
            var rh = a(77179),
                rC = a(76945),
                rg = a(97952);
            let rA = () => {
                let e = (0, ta.st)(),
                    t = (0, tn.U)(),
                    { hash: a } = (0, ta.gf)(),
                    { pageId: i } = (0, rg.$)();
                return (0, g.useCallback)(
                    (l) => {
                        if (!e || !i) return;
                        let n = { hash: a, pageId: ti.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                            s = (0, te.F)({ params: n, logger: t, context: 'useSendEventOnTrailerClosed' });
                        s && (0, rC.XB)(e.evgenInstance, s);
                    },
                    [e, a, t, i],
                );
            };
            var rf = a(91472),
                rb = a(59342),
                rj = a(40110),
                rN = a(57138),
                rT = a(95314);
            let rS = () => {
                let e = (0, ta.st)(),
                    t = (0, tn.U)(),
                    { hash: a } = (0, ta.gf)(),
                    { pageId: i } = (0, rg.$)();
                return (0, g.useCallback)(
                    (l, n) => {
                        if (!e || !i) return;
                        let s = { hash: a, pageId: ti.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l };
                        n && ((s.actionType = C.ActionType.Pause), (s.userInteractionType = C.UserInteractionType.Tap));
                        let r = (0, te.F)({ params: s, logger: t, context: 'useSendEventOnTrailerStarted' });
                        r &&
                            (n && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(r)
                                ? (0, rC.bv)(e.evgenInstance, r)
                                : (0, rC.e7)(e.evgenInstance, r));
                    },
                    [e, a, t, i],
                );
            };
            var rI = a(47306);
            let rk = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        l = ((e) => {
                            switch (e) {
                                case rI.H.ALBUM:
                                    return tl._Q.ALBUM;
                                case rI.H.ARTIST:
                                    return tl._Q.ARTIST;
                                case rI.H.PLAYLIST:
                                    return tl._Q.PLAYLIST;
                                case rI.H.TRACK:
                                    return tl._Q.TRACK;
                            }
                        })(t),
                        n = ((e) => {
                            switch (e) {
                                case rI.H.ALBUM:
                                    return eD.K.Album;
                                case rI.H.ARTIST:
                                    return eD.K.Artist;
                                case rI.H.PLAYLIST:
                                    return eD.K.Playlist;
                                case rI.H.TRACK:
                                default:
                                    return eD.K.Various;
                            }
                        })(t),
                        s = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, eU.f)({ pageId: l, blockId: a, contextId: s, contextType: n, pageEntityId: s });
                },
                rL = (e) => {
                    let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                    switch (t) {
                        case rI.H.ALBUM:
                            return { type: eD.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: n };
                        case rI.H.ARTIST:
                            return { type: eD.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                        case rI.H.PLAYLIST:
                            return { type: eD.K.Playlist, trailer: !0, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                        case rI.H.TRACK:
                            return { type: eD.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                    }
                };
            var rE = a(41762),
                rM = a.n(rE);
            let rP = (0, h.PA)(() => {
                    let { trailer: e } = (0, N.g)(),
                        { variant: t, id: a } = e,
                        i = (0, g.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case rI.H.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case rI.H.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case rI.H.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case rI.H.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, y.jsxs)('div', {
                        className: rM().root,
                        children: [
                            (0, y.jsxs)('div', {
                                className: rM().textContainer,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h2',
                                        className: rM().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, y.jsx)(eG.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, y.jsx)(eo.HL, {
                                        className: rM().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, y.jsx)(eG.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)(Q.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, y.jsx)(eo.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eG.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                rO = () =>
                    (0, y.jsx)('div', {
                        className: rM().root,
                        children: (0, y.jsxs)('div', {
                            className: rM().textContainer,
                            children: [
                                (0, y.jsx)(eo.DZ, {
                                    variant: 'h2',
                                    className: rM().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eG.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, y.jsx)(eo.HL, {
                                    className: rM().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, y.jsx)(eG.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    }),
                rw = () => {
                    let e = (0, ta.st)(),
                        t = (0, tn.U)(),
                        { hash: a } = (0, ta.gf)(),
                        { pageId: i } = (0, rg.$)();
                    return (0, g.useCallback)(
                        (l, n) => {
                            if (!e || !i) return;
                            let s = {
                                    hash: a,
                                    pageId: ti.W[i],
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: l,
                                    from: C.AppScreen.TrailerScreen,
                                    to: ti.W[n],
                                },
                                r = (0, te.F)({ params: s, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            r && (0, rC.Mu)(e.evgenInstance, r);
                        },
                        [e, a, t, i],
                    );
                },
                rR = {
                    [rI.H.ALBUM]: C.DomainObjectType.Album,
                    [rI.H.ARTIST]: C.DomainObjectType.Artist,
                    [rI.H.PLAYLIST]: C.DomainObjectType.Playlist,
                    [rI.H.TRACK]: C.DomainObjectType.Track,
                },
                rD = { [rI.H.ALBUM]: tl._Q.ALBUM, [rI.H.ARTIST]: tl._Q.ARTIST, [rI.H.PLAYLIST]: tl._Q.PLAYLIST };
            var rB = a(75470),
                rF = a.n(rB);
            let rU = (0, h.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: l, isShimmerActive: n, className: s } = e,
                    {
                        trailer: { state: r, meta: o, modal: c, objectId: d, resetUtmLink: u, tracks: _ },
                        albumCPA: { isPlusCPAPlayerBarEnabled: m },
                        paywall: { modal: p },
                    } = (0, N.g)(),
                    v = (0, e4.N)(),
                    x = (0, aD.e)(),
                    { from: h } = rk({ variant: i, blockId: rj.U.TRAILER }),
                    C = rw(),
                    A = rA(),
                    f = (() => {
                        let e = (0, ta.st)(),
                            t = (0, tn.U)(),
                            { hash: a } = (0, ta.gf)(),
                            { pageId: i } = (0, rg.$)();
                        return (0, g.useCallback)(
                            (l, n) => {
                                if (!e || !i) return;
                                let s = { hash: a, pageId: ti.W[i], mainObjectType: l, mainObjectId: n },
                                    r = (0, te.F)({ params: s, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                r && (0, rC.e7)(e.evgenInstance, r);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    b = (0, al.Z)(null != (a = null == o ? void 0 : o.url) ? a : ''),
                    j = (0, g.useCallback)(() => {
                        b();
                        let e = rD[i];
                        e && C(d, e);
                    }, [b, d, C, i]),
                    T = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: l,
                        } = (0, N.g)();
                        switch (e) {
                            case rI.H.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case rI.H.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case rI.H.PLAYLIST:
                                return l.uuid === (null == t ? void 0 : t.uuid);
                            case rI.H.TRACK:
                                return !1;
                        }
                    })(i),
                    S = !T && i !== rI.H.TRACK,
                    I = m(
                        (function (e, t, a) {
                            if (e === rI.H.ALBUM && (null == t ? void 0 : t.id)) return Number(t.id);
                            if (e === rI.H.TRACK) {
                                var i;
                                return null == a || null == (i = a[0]) ? void 0 : i.albumId;
                            }
                        })(i, o, _),
                    ),
                    k = (0, g.useCallback)(() => {
                        var e, t, a, l;
                        if (v && !I) return void p.open();
                        let n =
                            null == x || null == (a = x.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        (null == x || x.stop(rh.V.TRAILER), u(), c.close(), A(d), S && j());
                        let s = r.status !== sp.MT.PLAYING || i === rI.H.ALBUM ? { index: 0 } : { entityId: null == (l = r.entityMeta) ? void 0 : l.id },
                            _ = ((e) => {
                                let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                                switch (t) {
                                    case rI.H.ALBUM:
                                        return { type: eD.K.Album, meta: { id: Number(a) }, from: i, utmLink: n };
                                    case rI.H.ARTIST:
                                        return { type: eD.K.Artist, meta: { id: String(a) }, from: i, utmLink: n };
                                    case rI.H.PLAYLIST:
                                        return { type: eD.K.Playlist, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                                    case rI.H.TRACK:
                                        return { type: eD.K.Various, meta: { id: String(a) }, from: i, utmLink: n };
                                }
                            })({ variant: i, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: h, utmLink: n });
                        null == x ||
                            x.playContext({ contextData: _, queueParams: s }).then(() => {
                                (null == o ? void 0 : o.id) && f(rR[i], o.id);
                            });
                    }, [
                        x,
                        u,
                        c,
                        A,
                        d,
                        S,
                        r.status,
                        null == (t = r.entityMeta) ? void 0 : t.id,
                        i,
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.uuid,
                        h,
                        j,
                        f,
                        v,
                        I,
                        p,
                    ]),
                    L = (0, g.useMemo)(
                        () =>
                            (0, y.jsxs)('div', {
                                className: (0, eM.$)(rF().root, s),
                                children: [
                                    (0, y.jsx)(Q.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, y.jsx)($.I, { variant: 'play', size: 'xxxs' }),
                                        className: rF().button,
                                        onClick: k,
                                        'data-test-id': q.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                                        children: (0, y.jsx)(eG.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    S &&
                                        (0, y.jsx)(Q.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: j,
                                            className: rF().button,
                                            'data-test-id': q.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                                            children: (0, y.jsx)(eG.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [s, k, j, S],
                    );
                return l
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, y.jsxs)('div', {
                              className: (0, eM.$)(rF().root, a),
                              children: [
                                  (0, y.jsx)(ep.W, { isActive: t, radius: 'xxxl', className: rF().playButtonShimmer }),
                                  i && (0, y.jsx)(ep.W, { isActive: t, radius: 'xxxl', className: rF().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: n, isCurrentEntityPage: T, className: s })
                    : L;
            });
            var rz = a(52527),
                rW = a(81022),
                rK = a(14240),
                rH = a(70849),
                rV = a(95924),
                rY = a(55491),
                rq = a(98242),
                rQ = a.n(rq);
            let r$ = (0, h.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: l, className: n } = e,
                    {
                        trailer: { meta: s, objectId: r, utmLink: o, personalColor: c, shareable: d, title: u, state: _ },
                        playlist: { shouldShowTrailerOnboarding: m, isRewind2024Playlist: p },
                    } = (0, N.g)(),
                    { from: v } = rk({ variant: a, blockId: rj.U.TRAILER, meta: s }),
                    x = rw(),
                    h = rS(),
                    C = (0, e1.b)(),
                    A = a === rI.H.ARTIST ? 'round' : 's',
                    { notify: b } = (0, es.l)(),
                    j = (0, e0.P)(),
                    T = (0, y.jsx)(eG.A, { id: 'onboarding.rewind-trailer', values: { br: (0, y.jsx)('br', {}) } }),
                    { togglePlay: S, isPlaying: I } = (0, e8.D)({
                        playContextParams: {
                            contextData: rL({ variant: a, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: o }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: rh.V.TRAILER,
                    }),
                    k = (0, f.c)(() => {
                        j() || (h(r, I), S(), C(!I));
                    }),
                    L = (0, g.useCallback)(() => {
                        let e = rD[a];
                        e && x(r, e);
                    }, [r, x, a]),
                    E = (0, rW.R)(c || 0),
                    M = (0, rz.m)(c || 0),
                    P = (0, g.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = E), (t = M)) : (e = { '--trailer-color': null == s ? void 0 : s.averageColor }),
                            (0, y.jsxs)('div', {
                                className: rQ().coverContainer,
                                'data-test-id': q.e8.trailer.TRAILER_COVER,
                                children: [
                                    (0, y.jsx)(sW.t, {
                                        radius: A,
                                        className: rQ().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, y.jsx)(tz._V, {
                                            'aria-hidden': !0,
                                            src: null == s ? void 0 : s.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, y.jsx)('div', {
                                        className: rQ().iconContainer,
                                        style: e,
                                        children: (0, y.jsx)($.I, { variant: 'trailer', size: 'xs', className: rQ().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [A, null == s ? void 0 : s.coverUri, M, null == s ? void 0 : s.averageColor, c, E]),
                    O = (0, g.useMemo)(() => {
                        let e = null == s ? void 0 : s.url;
                        return e
                            ? (0, y.jsx)(af.N, {
                                  href: e,
                                  className: rQ().link,
                                  onClick: L,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: (0, y.jsx)(eo.HL, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: rQ().text,
                                      children: null == s ? void 0 : s.title,
                                  }),
                              })
                            : (0, y.jsx)(eo.HL, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: rQ().text,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: null == s ? void 0 : s.title,
                              });
                    }, [L, s]),
                    w = (0, g.useMemo)(
                        () =>
                            (0, y.jsxs)('div', {
                                className: rQ().textContainer,
                                children: [
                                    (0, y.jsx)(eo.DZ, {
                                        variant: 'h1',
                                        className: (0, eM.$)(rQ().text, rQ().title),
                                        lineClamp: 1,
                                        'data-test-id': q.e8.trailer.TRAILER_MODAL_TITLE,
                                        children: u,
                                    }),
                                    O,
                                ],
                            }),
                        [O, u],
                    ),
                    { pattern: R, params: D } = null != (t = null == s ? void 0 : s.getSharingProps(a)) ? t : { pattern: lj.Z.main.href, params: {} },
                    { shareLink: B } = (0, rK.b)(R, { params: D, query: { [lx.K.OPEN_TRAILER]: 'true' } }),
                    F = (0, g.useCallback)(async () => {
                        (await window.navigator.clipboard.writeText(B),
                            b(
                                (0, y.jsx)(rH.D, {
                                    entityTitle: null == s ? void 0 : s.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case rI.H.ALBUM:
                                                return rY.Y.ALBUM;
                                            case rI.H.ARTIST:
                                                return rY.Y.ARTIST;
                                            case rI.H.PLAYLIST:
                                                return rY.Y.PLAYLIST;
                                            case rI.H.TRACK:
                                                return rY.Y.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: en.u.INFO },
                            ));
                    }, [B, b, null == s ? void 0 : s.title, a]);
                return (0, y.jsxs)('div', {
                    className: (0, eM.$)(rQ().root, n),
                    'data-test-id': q.e8.trailer.TRAILER_HEADER,
                    children: [
                        i ? (0, y.jsx)('div', { className: rQ().coverContainer, children: (0, y.jsx)(ep.W, { isActive: l, radius: A, className: rQ().cover }) }) : P,
                        i
                            ? ((e) =>
                                  (0, y.jsxs)('div', {
                                      className: rQ().textContainer,
                                      children: [
                                          (0, y.jsx)('div', {
                                              className: rQ().shimmerContainer,
                                              children: (0, y.jsx)(ep.W, { isActive: e, radius: 'xl', className: rQ().titleShimmer }),
                                          }),
                                          (0, y.jsx)('div', {
                                              className: rQ().shimmerContainer,
                                              children: (0, y.jsx)(ep.W, { isActive: e, radius: 'xl', className: rQ().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(l)
                            : w,
                        !i &&
                            d &&
                            (0, y.jsx)(Q.$, {
                                className: rQ().share,
                                icon: (0, y.jsx)($.I, { variant: 'share', size: 'xxs' }),
                                onClick: F,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, y.jsx)(rV.L, {
                                customMessage: p ? T : void 0,
                                shouldForceOpenTooltip: !!m,
                                children: (0, y.jsx)(e3.D, {
                                    className: rQ().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: I,
                                    iconClassName: rQ().playButtonIcon,
                                    onClick: k,
                                }),
                            }),
                    ],
                });
            });
            var rG = a(74756),
                rZ = a(61801),
                rX = a(39099),
                rJ = a(57963),
                r0 = a.n(rJ);
            let r1 = (0, h.PA)((e) => {
                let { track: t, albumArtists: a, position: i, playContextParams: l, withLightning: n, onPlayClick: s, onLikeClick: r, onDislikeClick: o } = e,
                    {
                        trailer: c,
                        settings: { isMobile: d },
                        album: u,
                    } = (0, N.g)(),
                    _ = (0, e8.D)({ playContextParams: l, entityId: t.entityId, sonataState: c.state, playbackId: rh.V.TRAILER }),
                    m = (0, g.useCallback)((e) => (0, y.jsx)(rZ.G, { track: t, position: i, className: r0().playButtonCell, ...e }), [t, i]);
                return (0, y.jsx)(rX.C, {
                    track: t,
                    withLightning: n,
                    meta: (0, y.jsx)(nm.j, { withArtistLink: !d, albumArtists: a, track: t, withSavingQueryParams: u.id === t.albumId }),
                    playButtonCellRender: m,
                    onPlayClick: s,
                    controls: (0, y.jsx)(rG.Q, { withLightning: n, track: t, className: r0().controlsBarCell, onLikeClick: r, onDislikeClick: o }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ..._,
                    'data-test-id': q.Kq.track.TRACK_ALBUM,
                });
            });
            var r2 = a(6349),
                r4 = a(7929),
                r8 = a.n(r4);
            let r6 = (0, h.PA)((e) => {
                let { track: t, playContextParams: a, onPlayClick: i, onLikeClick: l, onDislikeClick: n } = e,
                    {
                        trailer: s,
                        settings: { isMobile: r },
                    } = (0, N.g)(),
                    o = (0, e8.D)({ playContextParams: a, entityId: t.entityId, sonataState: s.state, playbackId: rh.V.TRAILER }),
                    c = (0, g.useCallback)(
                        (e) =>
                            (0, y.jsx)(r2.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: r8().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [t],
                    );
                return (0, y.jsx)(rX.C, {
                    track: t,
                    meta: (0, y.jsx)(nm.j, { withArtistLink: !r, track: t }),
                    playButtonCellRender: c,
                    onPlayClick: i,
                    controls: (0, y.jsx)(rG.Q, { track: t, className: r8().controlsBarCell, onLikeClick: l, onDislikeClick: n }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ...o,
                    'data-test-id': q.Kq.track.TRACK_PLAYLIST,
                });
            });
            var r3 = a(26742),
                r5 = a(25488),
                r9 = a(88616),
                r7 = a.n(r9);
            let oe = (0, h.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: l } = e,
                    {
                        trailer: { meta: n, objectId: s, shouldSendEventOnTracksShowed: r, setShouldSendEventOnTracksShowed: o },
                    } = (0, N.g)(),
                    c = t === rI.H.ALBUM ? r1 : r6,
                    { isActive: d, progress: u } = ((e, t) => {
                        var a;
                        let i = (0, aD.e)(),
                            {
                                trailer: { state: l },
                            } = (0, N.g)(),
                            [n, s] = (0, g.useState)(0),
                            r = (null == (a = l.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(rh.V.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(rh.V.TRAILER).playerState,
                                                  l = a.progress.value;
                                              ((e = t ? t / 1e3 : l.duration), r || s(0), a.status.value === sp.MT.PLAYING && r && s((l.position / e) * 100));
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, r, i]),
                            { isActive: r, progress: n }
                        );
                    })(a.id, a.durationMs),
                    _ = ((e, t) => {
                        let a = (0, tn.U)(),
                            i = (0, ta.st)(),
                            { hash: l } = (0, ta.gf)(),
                            { pageId: n } = (0, rg.$)(),
                            { blockType: s, blockId: r, blockPosX: o, blockPosY: c } = (0, r3.N)(),
                            { objectType: d, objectsCount: u, objectId: _, objectPosX: m, objectPosY: p } = (0, r5.J)();
                        return (0, g.useCallback)(() => {
                            if (!i || !n) return;
                            let v = ti.W[n];
                            if (!v) return;
                            let x = {
                                    hash: l,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: s,
                                    entityId: r,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    viewUuid: t,
                                    objectType: d,
                                    objectId: _,
                                    objectPosX: m,
                                    objectPosY: p,
                                },
                                y = (0, te.F)({ params: x, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            y && (0, tt.Pf)(i.evgenInstance, y);
                        }, [i, r, o, c, s, l, a, e, _, m, p, d, u, n, t]);
                    })(s, l),
                    m = ((e) => {
                        let t = (0, tn.U)(),
                            a = (0, ta.st)(),
                            { hash: i } = (0, ta.gf)(),
                            { pageId: l } = (0, rg.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r3.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = ti.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                };
                                p || ((x.actionType = C.ActionType.Pause), (x.userInteractionType = C.UserInteractionType.Tap));
                                let y = (0, te.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                y &&
                                    (!p && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(y)
                                        ? (0, tt.h_)(a.evgenInstance, y)
                                        : (0, tt.er)(a.evgenInstance, y));
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s),
                    p = ((e) => {
                        let t = (0, tn.U)(),
                            a = (0, ta.st)(),
                            { hash: i } = (0, ta.gf)(),
                            { pageId: l } = (0, rg.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r3.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = ti.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Like) : (x.actionType = C.ActionType.Unlike);
                                let y = (0, te.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                y && (0, tt.h_)(a.evgenInstance, y);
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s),
                    v = ((e) => {
                        let t = (0, tn.U)(),
                            a = (0, ta.st)(),
                            { hash: i } = (0, ta.gf)(),
                            { pageId: l } = (0, rg.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r3.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = ti.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Dislike) : (x.actionType = C.ActionType.Undislike);
                                let y = (0, te.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                y && (0, tt.h_)(a.evgenInstance, y);
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s);
                (0, g.useEffect)(() => {
                    r && (_(), o(!1));
                }, [_, o, r]);
                let x = (0, g.useMemo)(() => ({ '--track-progress': ''.concat(u || 0, '%') }), [u]);
                return (0, y.jsx)('div', {
                    className: (0, eM.$)(r7().root, { [r7().root_active]: d }),
                    style: x,
                    children: (0, y.jsx)(c, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == n ? void 0 : n.albumArtists,
                        onPlayClick: m,
                        onLikeClick: p,
                        onDislikeClick: v,
                    }),
                });
            });
            var ot = a(4274),
                oa = a.n(ot);
            let oi = (0, h.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, N.g)(),
                    {
                        isLoading: l,
                        isRejected: n,
                        tracks: s,
                        meta: r,
                        state: o,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: d,
                        isNotFound: u,
                        modal: _,
                        utmLink: m,
                    } = a,
                    p = (0, aD.e)(),
                    { from: v } = rk({ variant: t, blockId: rj.U.TRAILER, meta: r }),
                    x = (() => {
                        let e = (0, ta.st)(),
                            t = (0, tn.U)(),
                            { hash: a } = (0, ta.gf)(),
                            { pageId: i } = (0, rg.$)();
                        return (0, g.useCallback)(
                            (l) => {
                                if (!e || !i) return;
                                let n = { hash: a, pageId: ti.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                                    s = (0, te.F)({ params: n, logger: t, context: 'useSendEventOnTrailerOpened' });
                                s && (0, rC.w5)(e.evgenInstance, s);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    h = rS(),
                    [A, f] = (0, g.useState)(!1),
                    b = (0, g.useRef)((0, rb.A)()),
                    j = l || n,
                    { isPlaying: T } = (0, e8.D)({
                        playContextParams: {
                            contextData: rL({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: rh.V.TRAILER,
                    });
                ((0, g.useEffect)(() => {
                    _.isOpened &&
                        (null == r ? void 0 : r.id) &&
                        c &&
                        (x(a.objectId),
                        null == p ||
                            p
                                .playContext(
                                    {
                                        contextData: rL({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    rh.V.TRAILER,
                                )
                                .then(() => {
                                    f(!0);
                                }),
                        d(!1));
                }, [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, _.isOpened, x, h, d, c, p, o.status, a.objectId, t, m, T]),
                    (0, g.useEffect)(() => {
                        A && (T ? (h(a.objectId), f(!1)) : i(!0));
                    }, [A, T, h, a.objectId, i]));
                let S = (0, g.useCallback)(
                        (e) => ({
                            contextData: rL({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, t, m],
                    ),
                    I = (0, g.useMemo)(
                        () =>
                            j
                                ? ((e, t) => {
                                      let a = t === rI.H.ALBUM ? ez.X.ALBUM : ez.X.PLAYLIST;
                                      return Array.from({ length: t === rI.H.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, y.jsx)(
                                              'div',
                                              {
                                                  className: oa().trackContainer,
                                                  children: (0, y.jsx)(eK.D, {
                                                      isActive: e,
                                                      className: (0, eM.$)(oa().trackShimmer, { [oa().albumShimmer]: a === ez.X.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(l, t)
                                : null == s
                                  ? void 0
                                  : s.map((e, a) =>
                                        (0, y.jsx)(
                                            rN.F,
                                            {
                                                blockType: C.DomainObjectType.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, y.jsx)(rT.B, {
                                                    objectType: C.DomainObjectType.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: s.length,
                                                    children: (0, y.jsx)(oe, { variant: t, track: e, playContextParams: S(a), viewUuid: b.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [S, l, j, s, t],
                    );
                return n
                    ? u
                        ? (0, y.jsx)(rO, {})
                        : (0, y.jsx)(rP, {})
                    : (0, y.jsxs)('div', {
                          className: oa().root,
                          children: [
                              (0, y.jsx)(r$, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: oa().header }),
                              I,
                              (0, y.jsx)(rU, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: oa().footer }),
                          ],
                      });
            });
            var ol = a(96856),
                on = a.n(ol);
            let os = (0, h.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, N.g)(),
                    l = (0, aD.e)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: s } = (0, Y.A)(),
                    r = rA();
                ((() => {
                    let { trailer: e } = (0, N.g)(),
                        t = (0, aD.e)(),
                        a = (0, r_.z)(),
                        i = (0, eJ.K)(e.state.entityMeta),
                        l = (0, rf.m)(e.state.entityMeta);
                    ((0, g.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(ru.M.MAIN),
                              null == a || a.enable(ru.M.MAIN, rd.l.TOGGLE_MUTE),
                              null == a || a.enable(ru.M.MAIN, rd.l.INCREASE_VOLUME),
                              null == a || a.enable(ru.M.MAIN, rd.l.DECREASE_VOLUME),
                              null == a || a.enable(ru.M.MAIN, rd.l.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(ru.M.TRAILER))
                            : (null == a || a.disable(ru.M.TRAILER), null == a || a.enable(ru.M.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, g.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(ru.M.TRAILER, rd.l.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(rh.V.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(ru.M.TRAILER, rd.l.LIKE, i),
                                null == a || a.addShortcutsListener(ru.M.TRAILER, rd.l.DISLIKE, l),
                                null == a ||
                                    a.addShortcutsListener(ru.M.TRAILER, rd.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(rh.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(rh.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(ru.M.TRAILER, rd.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(rh.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(rh.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(ru.M.TRAILER, rd.l.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(rh.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, rh.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(ru.M.TRAILER, rd.l.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(rh.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, rh.V.TRAILER)));
                                    }),
                                () => {
                                    (null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.LIKE),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.DISLIKE),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(ru.M.TRAILER, rd.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, i, a, t],
                        ));
                })(),
                    (0, g.useEffect)(() => {
                        let e =
                                null == l
                                    ? void 0
                                    : l.getState(rh.V.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              l = null == e ? void 0 : e.context.data.meta.id;
                                          (t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              l && t.state.setContextId(l));
                                      }),
                            a =
                                null == l
                                    ? void 0
                                    : l.getState(rh.V.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            (null == e || e(), null == a || a());
                        };
                    }, [l, t.state]));
                let o = (0, g.useCallback)(() => {
                        null == l ||
                            l.stop(rh.V.TRAILER).finally(() => {
                                (t.sonataStatusBeforeTrailerStart !== sp.MT.PLAYING || t.isManuallyPaused || null == l || l.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    r(t.objectId));
                            });
                    }, [r, l, t]),
                    c = (0, g.useCallback)(
                        (e) => {
                            (t.modal.onOpenChange(e), e || o());
                        },
                        [o, t.modal],
                    );
                return (
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === sp.MT.PLAYING && o();
                    }, [o, a.status, t, t.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, g.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && o();
                    }, [i.modal.isOpened, o, t.modal.isOpened]),
                    (0, y.jsxs)(b.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: c,
                        onClose: o,
                        className: on().root,
                        contentClassName: on().modalContent,
                        portalNode: e ? null : n,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        'data-test-id': q.e8.trailer.TRAILER_MODAL,
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, y.jsx)('div', {
                                    className: on().header,
                                    children: (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: o,
                                        'aria-label': s({ id: 'trailer.close' }),
                                        'data-test-id': q.e8.trailer.TRAILER_CLOSE_BUTTON,
                                    }),
                                }),
                            t.variant && (0, y.jsx)(oi, { variant: t.variant }),
                        ],
                    })
                );
            });
            var or = a(84111),
                oo = a(64595),
                oc = a(26208);
            async function od(e) {
                var t;
                let a = await (0, M.W)(e.locale),
                    i = a({ id: 'metadata.main-description' }),
                    l = a({ id: 'metadata.main-title' });
                return {
                    title: l,
                    description: i,
                    openGraph: (0, w.i)({
                        ogTitle: l,
                        ogDescription: i,
                        ogType: 'website',
                        fullUrl: null != (t = e.fullUrl) ? t : '',
                        locale: e.locale,
                        siteName: a({ id: 'metadata.yandex-music' }),
                        customImage: (0, oc.v)({ tld: e.tld }),
                    }),
                    facebook: (0, oo.k)(),
                    twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: l, description: i }),
                    alternates: (0, B.S)(lj.Z.main.href, e.tld),
                };
            }
            var ou = a(28087),
                o_ = a(63896),
                om = a(61399),
                op = a(43464);
            async function ov(e) {
                var t, a, i, l, n, s, r;
                let o,
                    c,
                    { clipMeta: d, additional: u } = e,
                    _ = await (0, M.W)(u.locale);
                return (
                    d
                        ? ((o = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: d.title, clipArtists: null == (a = d.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: d.title, clipArtists: null == (l = d.artists) || null == (i = l.map((e) => e.name)) ? void 0 : i.join(', ') },
                          )))
                        : ((o = _({ id: 'metadata.clips-title-default' })), (c = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: o,
                        description: c,
                        openGraph: (0, w.i)({
                            ogTitle: o,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (n = u.fullUrl) ? n : '',
                            locale: u.locale,
                            customImage: (0, oc.v)({ tld: u.tld }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: o, description: c }),
                        facebook: (0, oo.k)(),
                        appLinks: (0, E.X)({
                            additional: { ...u, url: null != (s = u.url) ? s : '', fullUrl: null != (r = u.fullUrl) ? r : '', host: u.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var ox = a(76457),
                oy = a(10508),
                oh = a(7429),
                oC = a(42853),
                og = a(69041),
                oA = a(7010),
                of = a(5311),
                ob = a(27663),
                oj = a(39498),
                oN = a(18639),
                oT = a(33074);
            let oS = (0, h.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a } = (0, N.g)(),
                    i = (0, aD.e)(),
                    { from: l } = (0, eU.f)({ pageId: tl._Q.VIDEO_PLAYER, contextId: a.state.contextId, contextType: eD.K.Various }),
                    n = (0, f.c)(() => {
                        null == i || i.moveForward(rh.V.CLIP);
                    }),
                    s = (0, f.c)(() => {
                        null == i || i.moveBackward(rh.V.CLIP);
                    }),
                    { isPlaying: r, togglePlay: o } = (0, e8.D)({
                        playContextParams: { contextData: { type: eD.K.Various, meta: { id: oN.H.VARIOUS_CLIP_CONTEXT }, from: l }, loadContextMeta: !0 },
                        sonataState: a.state,
                        playbackId: rh.V.CLIP,
                    });
                return (0, y.jsx)(oT.Z, {
                    className: t,
                    isPlaying: r,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: o,
                    onClickNext: n,
                    onClickPrev: s,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: oj.pM.NONE,
                });
            });
            var oI = a(3392),
                ok = a(65865),
                oL = a(91171),
                oE = a(19410),
                oM = a(67764),
                oP = a.n(oM);
            let oO = (0, h.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: i = !0,
                        withSecondaryColor: l,
                        captionSize: n = 'm',
                        explicitSize: s = 'xxxs',
                        withAllArtistsTitle: r,
                        withCustomTooltip: o = !0,
                        hasLineClamp: c = !0,
                        withArtistLink: d,
                    } = e,
                    u = (0, oL.$)({ withCustomTooltip: o }),
                    _ = (0, g.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, y.jsx)(oI.m_, {
                                enabled: u,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: oE.V,
                                children: (0, y.jsx)(eo.HL, {
                                    className: (0, eM.$)(oP().text, oP().title),
                                    type: 'entity',
                                    size: n,
                                    weight: 'medium',
                                    variant: 'span',
                                    'data-test-id': e,
                                    children: a.title,
                                }),
                            });
                        },
                        [u, n, a.title],
                    ),
                    m = (0, g.useMemo)(() => _(q.Kq.clip.CLIP_META_TITLE), [_]),
                    p = (0, ok.s)(a.artists);
                return (0, y.jsx)('div', {
                    className: (0, eM.$)(oP().root, { [oP().root_withSecondaryColor]: l }, t),
                    children: (0, y.jsxs)('div', {
                        className: oP().metaContainer,
                        children: [
                            (0, y.jsxs)('div', {
                                className: oP().titleContainer,
                                children: [
                                    (0, y.jsx)(eo.HL, { type: 'entity', size: n, weight: 'medium', variant: 'div', lineClamp: 1, children: m }),
                                    a.explicitDisclaimer &&
                                        i &&
                                        (0, y.jsx)(e$.N, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: s,
                                            variant: a.explicitDisclaimer,
                                            className: oP().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            p.length > 0 &&
                                (0, y.jsx)(eQ.i, {
                                    linkClassName: oP().link,
                                    captionClassName: oP().artistCaption,
                                    artists: p,
                                    withLink: d,
                                    lineClamp: +!!c,
                                    captionSize: n,
                                    withAllArtistsTitle: r,
                                    withCustomTooltip: u,
                                }),
                        ],
                    }),
                });
            });
            var ow = a(24696),
                oR = a.n(ow);
            let oD = (0, h.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: i, isContextMenuOpened: l } = e,
                        { user: n, sonataState: s, fullscreenVideoPlayer: r, freeAccess: o } = (0, N.g)(),
                        c = (0, ob.d)(),
                        d = (0, f.c)(async (e) => {
                            await c(s, e);
                        }),
                        u = (0, g.useMemo)(
                            () =>
                                t
                                    ? (0, y.jsx)('div', { className: oR().description, children: (0, y.jsx)(oO, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, y.jsxs)('section', {
                        className: oR().root,
                        children: [
                            (0, y.jsxs)('div', {
                                className: oR().info,
                                children: [
                                    (0, y.jsx)('div', { className: oR().infoCard, children: u }),
                                    (0, y.jsxs)('div', {
                                        className: oR().infoButtons,
                                        children: [
                                            r.clipActive &&
                                                (0, y.jsx)(of.z, {
                                                    placement: 'top-start',
                                                    icon: (0, y.jsx)($.I, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: r.clipActive,
                                                    onOpenChange: i,
                                                    open: l,
                                                    'data-test-id': q.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                                }),
                                            t &&
                                                (0, y.jsx)(e6.c, {
                                                    className: oR().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !n.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: oR().sonata,
                                children: [
                                    (0, y.jsx)(oS, {}),
                                    (0, y.jsx)(nd.v, {
                                        sliderClassName: (0, eM.$)(oR().slider, oR().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: r.state.canMoveForward,
                                        customDuration: (null == n ? void 0 : n.isAuthorized) && !o.isFreeDesktopUser ? void 0 : 29,
                                        sonataPlaybackId: rh.V.CLIP,
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: oR().meta,
                                children: (0, y.jsx)(oA.r, {
                                    sonataVolume: s.volume,
                                    onVolumeClick: d,
                                    horizontalSliderClassName: (0, eM.$)(oR().slider, oR().important),
                                }),
                            }),
                        ],
                    });
                }),
                oB = (0, h.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: i, isContextMenuOpened: l, onContextMenuOpenChange: n } = e,
                        { fullscreenVideoPlayer: s } = (0, N.g)(),
                        r = (0, ox.K)(s.state.entityMeta),
                        {
                            settings: { isMobile: o },
                        } = (0, N.g)();
                    return o
                        ? null
                        : (0, y.jsx)(oD, {
                              className: t,
                              onLikeClick: r,
                              entityMeta: s.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: i,
                              isContextMenuOpened: l,
                              onContextMenuOpenChange: n,
                          });
                });
            var oF = a(20093),
                oU = a.n(oF);
            let oz = (0, h.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, N.g)(),
                        { state: t, toggleTrue: a, toggleFalse: i } = (0, eC.e)(!1),
                        { state: l, toggleTrue: n, toggleFalse: s } = (0, eC.e)(!1),
                        { state: r, toggleTrue: o, toggleFalse: c } = (0, eC.e)(!1),
                        d = (0, g.useRef)(null),
                        [u, _] = (0, g.useState)(!1),
                        [m, p] = (0, g.useState)(!1),
                        v = m || u,
                        x = (0, g.useMemo)(
                            () =>
                                (0, oy.A)(() => {
                                    (i(), s());
                                }, 1500),
                            [s, i],
                        ),
                        h = (0, g.useMemo)(
                            () =>
                                (0, oy.A)(() => {
                                    s();
                                }, 1500),
                            [s],
                        ),
                        C = (0, f.c)(() => {
                            (h.cancel(), n(), o());
                        }),
                        A = (0, f.c)(() => {
                            (h(), c());
                        }),
                        b = (0, f.c)(() => {
                            u || m || x();
                        }),
                        j = (0, f.c)((e) => {
                            (e.stopPropagation(), x.cancel(), h.cancel(), a(), n(), x());
                        }),
                        T = (0, f.c)((e) => {
                            (e.stopPropagation(), x.cancel(), h.cancel(), a(), x());
                        }),
                        S = (0, f.c)(() => {
                            (t ? x.cancel() : a(), x());
                        });
                    ((0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', S),
                            () => {
                                window.removeEventListener('mousemove', S);
                            }
                        ),
                        [S],
                    ),
                        (0, g.useEffect)(() => {
                            t || s();
                        }, [s, t]));
                    let I = e.state.status !== sp.MT.PLAYING,
                        k = (0, g.useMemo)(
                            () =>
                                (0, y.jsx)(oh.t, {
                                    className: oU().carousel,
                                    containerClassName: oU().carouselBlock,
                                    clipCardTitleClassName: (0, eM.$)(oU().clipCardTitle, oU().important),
                                    clipCardArtistLinkClassName: (0, eM.$)(oU().clipCardArtist, oU().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: d,
                                }),
                            [e.clips, e.isLoading, d],
                        );
                    return (
                        (0, g.useEffect)(() => {
                            (l || r) && (a(), n());
                        }, [r, l, n, a]),
                        (0, y.jsxs)('div', {
                            className: (0, eM.$)(oU().root, { [oU().root_visible]: t || I || r || v, [oU().root_withHoveredCarousel]: l }),
                            onMouseEnter: a,
                            onMouseLeave: b,
                            onFocus: T,
                            children: [
                                (0, y.jsx)(oB, { isSettingsMenuOpened: u, onSettingsMenuOpenChange: _, isContextMenuOpened: m, onContextMenuOpenChange: p }),
                                (0, y.jsx)(rN.F, {
                                    blockId: oC.h.CLIPS_CAROUSEL,
                                    blockType: oC.h.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, y.jsx)('div', {
                                        className: oU().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: A,
                                        onFocus: j,
                                        children: (0, y.jsx)(og.F, {
                                            className: oU().carouselWrapper,
                                            carouselElement: k,
                                            ref: d,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: oU().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                oW = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(oz, {});
                });
            var oK = a(87605),
                oH = a(35955),
                oV = a(28003),
                oY = a(83918),
                oq = a(24120),
                oQ = a.n(oq);
            let o$ = (0, h.PA)((e) => {
                let { closeModal: t, withAdaptiveAspectRatio: a } = e,
                    i = (0, g.useRef)(null),
                    l = (0, aD.e)(),
                    {
                        sonataState: { isVHCoreRegistered: n },
                        fullscreenVideoPlayer: s,
                        advert: r,
                    } = (0, N.g)(),
                    { from: o } = (0, eU.f)({ pageId: tl._Q.VIDEO_PLAYER, contextId: s.state.contextId, contextType: eD.K.Various }),
                    c = (0, oY.X)(),
                    { state: d, toggleFalse: u } = (0, eC.e)(!0),
                    { togglePlay: _ } = (0, e8.D)({
                        playContextParams: { contextData: { type: eD.K.Various, meta: { id: oN.H.VARIOUS_CLIP_CONTEXT }, from: o }, loadContextMeta: !0 },
                        sonataState: s.state,
                        playbackId: rh.V.CLIP,
                    }),
                    m = (0, oK.X)({ clip: s.clips[s.clipActiveIndex], callback: _, disclaimerRejectHandler: t });
                return (
                    (0, g.useEffect)(() => {
                        let e, t, a;
                        if (i.current && l && n) {
                            let n, d;
                            (s.setSonataStatusBeforeClipStart(),
                                l.setVideoCoreContainer({ container: i.current, playbackId: rh.V.CLIP }),
                                l
                                    .setContext(
                                        {
                                            contextData: { type: eD.K.Various, meta: { id: oN.H.VARIOUS_CLIP_CONTEXT }, from: o },
                                            entitiesData: s.entitiesData,
                                            queueParams: { index: s.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        rh.V.CLIP,
                                    )
                                    .then(() => {
                                        r.isAdvertShown || m();
                                    }));
                            let u = l.getState(rh.V.CLIP);
                            ((e = u.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    l = null == e ? void 0 : e.entity.data.meta.id;
                                if (l) {
                                    let e = (0, oH.z)(s.ids, s.ids.indexOf(Number(l)));
                                    (s.setClipIndex(e), c((0, oV.J)(s.ids, e)));
                                }
                                (s.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && s.state.setContextType(a),
                                    i && s.state.setContextId(i));
                            })),
                                (t = u.playerState.status.onChange((e) => {
                                    e && s.state.setStatus(e);
                                })),
                                (a = u.currentContext.onChange((e) => {
                                    (null == n || n(),
                                        null == d || d(),
                                        (n =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      s.state.setCanMoveBackward(!!e);
                                                  })),
                                        (d =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      s.state.setCanMoveForward(!!e);
                                                  })));
                                })));
                        }
                        return () => {
                            (null == l || l.destroyVideoCore(rh.V.CLIP),
                                s.isPlayingSonataStatusBeforeClipStart && (null == l || l.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == a || a());
                        };
                    }, [l, n, s, o, c, _, m, r.isAdvertShown]),
                    (0, g.useEffect)(() => {
                        s.state.status === sp.MT.PLAYING && u();
                    }, [s.state.status, u]),
                    (0, y.jsxs)('div', {
                        className: oQ().root,
                        children: [
                            (0, y.jsx)('div', { onClick: _, ref: i, className: (0, eM.$)(oQ().container, { [oQ().container_adaptiveAspectRatio]: a }) }),
                            (0, y.jsx)('div', {
                                className: (0, eM.$)(oQ().loadingIndicator, { [oQ().loadingIndicator_showed]: d }),
                                children: (0, y.jsx)(t0.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var oG = a(4706),
                oZ = a.n(oG);
            let oX = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: i },
                        } = (0, N.g)(),
                        { defaultLayoutRef: l } = (0, j.g)(),
                        n = (0, g.useCallback)(() => {
                            window.history.back();
                        }, []),
                        s = (0, o_.p)(),
                        { notify: r } = (0, es.l)(),
                        o = (0, aD.e)(),
                        c = (0, t$.j)(),
                        d = (() => {
                            let e = (0, ta.st)(),
                                { hash: t } = (0, ta.gf)(),
                                a = (0, tn.U)();
                            return (0, f.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, te.F)({ params: l, logger: a, context: 'useSendEventOnClipOpened' });
                                n && (0, rC.w5)(e.evgenInstance, n);
                            });
                        })(),
                        u = (() => {
                            let e = (0, ta.st)(),
                                { hash: t } = (0, ta.gf)(),
                                a = (0, tn.U)();
                            return (0, f.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, te.F)({ params: l, logger: a, context: 'useSendEventOnClipClosed' });
                                n && (0, rC.XB)(e.evgenInstance, n);
                            });
                        })(),
                        [_] = a.ids,
                        m = (0, f.c)(() => {
                            let e = (0, ou.q)(lx.K.IDS),
                                t = (0, ou.q)(lx.K.ACTIVE_INDEX),
                                { clipIds: i, activeClipIndex: l } = (0, or.V)(e, t);
                            i.length
                                ? (a.setIds(i), a.setClipIndex(l), a.setAnimationState(!1), null == o || o.setEntityByIndex(a.clipActiveIndex, rh.V.CLIP), a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        p = (0, f.c)(() => {
                            if (a.modal.isOpened && !i.isOpened) {
                                if ((a.setAnimationState(!0), _ && u(String(_)), a.isOpenedFromMain)) {
                                    (s(lj.Z.main.href),
                                        od({ fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                            (0, L.j)(e);
                                        }),
                                        a.modal.close(),
                                        a.reset());
                                    return;
                                }
                                n();
                            }
                        });
                    (((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, N.g)(),
                            i = (0, aD.e)(),
                            l = (0, r_.z)(),
                            n = (0, ox.K)(t.state.entityMeta);
                        (0, g.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(ru.M.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(ru.M.MAIN),
                                  null == l || l.enable(ru.M.MAIN, rd.l.TOGGLE_MUTE),
                                  null == l || l.enable(ru.M.MAIN, rd.l.INCREASE_VOLUME),
                                  null == l || l.enable(ru.M.MAIN, rd.l.DECREASE_VOLUME),
                                  null == l || l.enable(ru.M.VIDEO_PLAYER))
                                : (null == l || l.disable(ru.M.VIDEO_PLAYER), null == l || l.enable(ru.M.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let s = null == i ? void 0 : i.getState(rh.V.CLIP);
                        (0, g.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.TOGGLE_PLAY, () => {
                                        null == i || i.togglePause(rh.V.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.LIKE, n),
                                null == l ||
                                    l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == i ? void 0 : i.moveForward(rh.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == i ? void 0 : i.moveBackward(rh.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.SLIDE_FORWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideForward(1, rh.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.SLIDE_BACKWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideBackward(1, rh.V.CLIP)));
                                    }),
                                () => {
                                    (null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.CLOSE),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.LIKE),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(ru.M.VIDEO_PLAYER, rd.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, t.ids, e, n, i, s, a.isAdvertShown],
                        );
                    })(p),
                        0 === a.ids.length && p(),
                        (0, g.useEffect)(
                            () => () => {
                                (a.reset(), t.setIsShowBanner(!0));
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]));
                    let v = (0, f.c)(() => {
                        (a.setAnimationState(!0), _ && u(String(_)), s(lj.Z.main.href), a.modal.close(), a.reset());
                    });
                    return (
                        (0, g.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                p();
                                let t = a.modal.isOpened ? en.u.FULLSCREEN_ERROR : en.u.ERROR;
                                r((0, y.jsx)(er.h, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, p, e, r]),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened && _ && d(String(_));
                        }, [a.modal.isOpened, d, _]),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('popstate', m),
                                () => {
                                    window.removeEventListener('popstate', m);
                                }
                            ),
                            [m],
                        ),
                        ((e) => {
                            (0, g.useEffect)(() => {
                                (null == e ? void 0 : e.clips) &&
                                    0 !== e.clips.length &&
                                    !e.isLoading &&
                                    ov({
                                        clipMeta: ((e) => {
                                            var t;
                                            if (!e)
                                                return { clipId: 0, title: '', artists: [], thumbnail: '', previewUrl: '', duration: 0, disclaimers: [], trackIds: [] };
                                            let a = [];
                                            return (
                                                (null == (t = e.disclaimers) ? void 0 : t.every((e) => (0, op.C)(e))) && (a = (0, om.H)(e.disclaimers)),
                                                {
                                                    clipId: e.clipId,
                                                    title: e.title,
                                                    thumbnail: e.thumbnail,
                                                    previewUrl: e.previewUrl,
                                                    duration: e.duration,
                                                    disclaimers: a,
                                                    version: e.version,
                                                    artists: e.artists.map((e) => {
                                                        let t = (0, k.N)(e),
                                                            a = Number(t.id);
                                                        return { ...t, id: isNaN(a) ? 0 : a };
                                                    }),
                                                    trackIds: [],
                                                }
                                            );
                                        })(e.clips[0]),
                                        additional: { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                    }).then((e) => {
                                        (0, L.j)(e);
                                    });
                            }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
                        })(a),
                        (0, g.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && _ && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, _]),
                        (0, y.jsxs)(b.a, {
                            className: (0, eM.$)(oZ().root, oZ().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: p,
                            portalNode: l,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: oZ().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL,
                            children: [
                                (0, y.jsxs)('header', {
                                    className: oZ().header,
                                    children: [
                                        (0, y.jsx)(Q.$, {
                                            className: oZ().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: p,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                                        }),
                                        (0, y.jsx)(af.N, {
                                            className: oZ().logoLink,
                                            href: '/',
                                            onClick: v,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON,
                                            children: (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(c), className: oZ()['logo_'.concat(c.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(o$, { closeModal: p, withAdaptiveAspectRatio: !0 }),
                                (0, y.jsx)(oW, {}),
                                (0, y.jsx)(l6.Notification, {
                                    className: oZ().notification,
                                    enableMultiContainer: !0,
                                    containerId: en.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, y.jsx)(l6.Notification, {
                                    className: oZ().notification,
                                    enableMultiContainer: !0,
                                    containerId: en.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                oJ = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(oX, {});
                });
            var o0 = a(97748),
                o1 = a.n(o0),
                o2 = a(75173),
                o4 = a(42664),
                o8 = a.n(o4);
            let o6 = (e) => {
                let { className: t, artistId: a, artistName: i } = e;
                return (0, y.jsxs)(af.N, {
                    href: 'https://band.link/scanner?search='.concat(a, '&type=artist_id&service=yandex_music'),
                    className: (0, eM.$)(o8().root, t),
                    'data-test-id': q.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER,
                    children: [
                        (0, y.jsx)($.I, { className: o8().icon, variant: 'bandlink' }),
                        (0, y.jsxs)('div', {
                            className: o8().description,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: o8().descriptionTitle,
                                    children: [
                                        (0, y.jsx)(eo.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: o8().descriptionTitleText,
                                            children: (0, y.jsx)(eG.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, y.jsx)($.I, { variant: 'link', size: 'xxs', className: o8().descriptionTitleButton }),
                                    ],
                                }),
                                (0, y.jsx)(eo.HL, { variant: 'div', size: 'l', weight: 'medium', className: o8().descriptionArtist, children: null != i ? i : '' }),
                            ],
                        }),
                    ],
                });
            };
            var o3 = a(29481),
                o5 = a(52512),
                o9 = a(7500),
                o7 = a.n(o9);
            let ce = (e) => {
                    var t;
                    let { link: a, artistName: i, shouldSendAnalyticsOnNavigate: l } = e,
                        { formatMessage: n } = (0, Y.A)(),
                        s = (0, o3.N)(),
                        { ref: r, intersectionPropertyId: o } = (0, o5.n)(),
                        c = (0, f.c)(() => {
                            var e;
                            l && s({ to: C.AppScreen.Link, deepLink: null != (e = a.url) ? e : void 0 });
                        });
                    return (0, y.jsx)('div', {
                        ref: r,
                        'data-intersection-property-id': o,
                        children: (0, y.jsx)(af.N, {
                            href: a.url,
                            className: o7().link,
                            target: '_blank',
                            'aria-label': n({ id: 'artist.artist-links-label' }, { artistName: i, linkName: a.title }),
                            onClick: c,
                            children: (0, y.jsx)(tz._V, {
                                fit: 'contain',
                                className: o7().icon,
                                size: 100,
                                src: null != (t = a.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                ct = (e) => {
                    let { links: t, artistName: a, shouldSendAnalyticsOnNavigate: i, albumId: l } = e;
                    return (0, y.jsx)('div', {
                        className: o7().root,
                        'data-test-id': q.e8.content.ARTIST_ABOUT_SOCIAL_LINKS,
                        children: t.map((e, n) =>
                            (0, y.jsx)(
                                rT.B,
                                {
                                    objectType: C.DomainObjectType.Link,
                                    objectId: String(e.url),
                                    objectPosX: n + 1,
                                    objectPosY: 1,
                                    objectsCount: t.length,
                                    mainObjectType: C.DomainObjectType.Link,
                                    mainObjectId: l,
                                    children: (0, y.jsx)(ce, { link: e, artistName: a, shouldSendAnalyticsOnNavigate: i }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
            var ca = a(26460),
                ci = a.n(ca);
            let cl = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: a } = e,
                    i = (0, g.useMemo)(() => {
                        let e = (0, y.jsx)('br', {});
                        if (0 === a) return (0, y.jsx)(eG.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, y.jsx)(eo.HL, {
                            variant: 'span',
                            className: (0, eM.$)({ [ci().statsNumber_positive]: a > 0, [ci().statsNumber_negative]: a < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(a).toLocaleString('ru'),
                        });
                        return a > 0
                            ? (0, y.jsx)(eG.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, y.jsx)(eG.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [a]);
                return (0, y.jsxs)('div', {
                    'data-test-id': q.e8.content.ARTIST_ABOUT_STATS,
                    children: [
                        (0, y.jsx)(eo.HL, {
                            variant: 'div',
                            className: ci().title,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_TITLE,
                            children: (0, y.jsx)(eG.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, y.jsx)(eo.DZ, {
                            size: 'xxl',
                            variant: 'div',
                            className: ci().count,
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_COUNT,
                            children: t.toLocaleString('ru'),
                        }),
                        (0, y.jsx)(eo.HL, {
                            variant: 'div',
                            className: ci().stats,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_DYNAMIC,
                            children: i,
                        }),
                    ],
                });
            };
            var cn = a(42382),
                cs = a.n(cn);
            let cr = (0, h.PA)((e) => {
                let { covers: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: l },
                    } = (0, N.g)(),
                    n = t.slice(0, 1),
                    s = t.length - 2 + 1,
                    r = (0, f.c)((e) => () => {
                        (l.close(), i.openImages({ images: t, initialSlideIndex: e }));
                    });
                return (0, y.jsxs)('div', {
                    className: cs().root,
                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER,
                    children: [
                        n.map((e, t) =>
                            (0, y.jsx)(
                                Q.$,
                                {
                                    className: cs().button,
                                    onClick: r(t),
                                    'aria-label': a({ id: 'slider.view-artist-covers' }),
                                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                    children: (0, y.jsx)(tz._V, { fit: 'contain', className: cs().image, src: e, size: 400, withAvatarReplace: !0 }),
                                },
                                t,
                            ),
                        ),
                        t[1] &&
                            (0, y.jsxs)(Q.$, {
                                className: cs().button,
                                onClick: r(1),
                                'aria-label': a({ id: 'slider.view-artist-covers' }),
                                'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                children: [
                                    (0, y.jsx)(tz._V, { fit: 'contain', className: cs().image, src: t[1], size: 400, withAvatarReplace: !0 }),
                                    (0, y.jsx)('div', {
                                        className: cs().moreCovers,
                                        children: (0, y.jsx)(eo.HL, {
                                            variant: 'span',
                                            className: cs().moreCoversText,
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, y.jsx)(eG.A, { id: 'slider.images-left-count', values: { imagesLeft: s } }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var co = a(40178),
                cc = a.n(co);
            let cd = (0, h.PA)(() => {
                var e, t, a, i, l, n, s, r;
                let { formatMessage: o } = (0, Y.A)(),
                    {
                        modals: { artistAboutModal: c },
                    } = (0, N.g)(),
                    { state: d, setState: u } = (0, eC.e)(!1),
                    _ = ((e) => {
                        let { formatMessage: t } = (0, Y.A)();
                        return t(e === o2.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
                    })(c.artistType);
                return (0, y.jsxs)('div', {
                    className: cc().root,
                    children: [
                        c.isResolved &&
                            (0, y.jsxs)('header', {
                                className: cc().header,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER,
                                children: [
                                    (0, y.jsx)(eo.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: cc().subtitle,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_SUBTITLE,
                                        children: _,
                                    }),
                                    (0, y.jsx)(eo.DZ, {
                                        size: 'xxl',
                                        variant: 'div',
                                        className: cc().title,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_TITLE,
                                        children: null == (e = c.artist) ? void 0 : e.name,
                                    }),
                                ],
                            }),
                        c.description &&
                            (0, y.jsx)(eN, {
                                moreText: o({ id: 'track-modal.read-more' }),
                                className: cc().descriptionWrapper,
                                buttonClassName: cc().readMoreButton,
                                buttonProps: { 'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_READ_MORE_BUTTON },
                                open: d,
                                onOpenChange: u,
                                lineClamp: 7,
                                withFade: !0,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION,
                                children: (0, y.jsx)(
                                    eo.HL,
                                    {
                                        variant: 'div',
                                        className: cc().description,
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_TEXT,
                                        children: c.description,
                                    },
                                    null == (t = c.artist) ? void 0 : t.getKey('description'),
                                ),
                            }),
                        c.isArtistStatsAvailable &&
                            (0, y.jsx)(cl, { lastMonthListeners: null != (s = c.lastMonthListeners) ? s : 0, lastMonthListenersDelta: c.lastMonthListenersDelta }),
                        c.isResolved &&
                            (0, y.jsx)(o6, {
                                className: cc().bandlinkScanner,
                                artistId: null == (a = c.artist) ? void 0 : a.id,
                                artistName: null == (i = c.artist) ? void 0 : i.name,
                            }),
                        c.links &&
                            (null == (l = c.links) ? void 0 : l.length) > 0 &&
                            (0, y.jsx)(ct, { links: c.links, artistName: null != (r = null == (n = c.artist) ? void 0 : n.name) ? r : '' }),
                        c.covers && c.covers.length > 0 && (0, y.jsx)(cr, { covers: c.covers }),
                    ],
                });
            });
            var cu = a(46010),
                c_ = a.n(cu);
            let cm = () =>
                    (0, y.jsxs)('div', {
                        className: c_().root,
                        children: [(0, y.jsx)(ep.W, { className: c_().entityName }), (0, y.jsx)(ep.W, { className: c_().title }), (0, y.jsx)(eT.q, { count: 4 })],
                    }),
                cp = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { notify: t } = (0, es.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: l },
                        } = (0, N.g)();
                    (0, g.useEffect)(() => {
                        i.isRejected &&
                            (t((0, y.jsx)(er.h, { error: e({ id: 'artist-errors.error-during-loading-artist-info' }) }), { containerId: en.u.ERROR }), i.close());
                    }, [i, i.isRejected, e, t]);
                    let n = (0, tj.L)(() => (i.isLoading ? (0, y.jsx)(cm, {}) : (0, y.jsx)(cd, {})));
                    return (0, y.jsxs)(b.a, {
                        placement: l ? 'default' : 'right',
                        size: l ? 'fullscreen' : 'fitContent',
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: o1().modalContent,
                        headerClassName: o1().header,
                        className: o1().root,
                        overlayClassName: o1().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l ? null : a,
                        showHeader: !1,
                        'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL,
                        children: [
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: o1().closeButton,
                                onClick: i.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL_CLOSE_BUTTON,
                            }),
                            n,
                        ],
                    });
                });
            var cv = a(35262),
                cx = a(91842),
                cy = a(47062),
                ch = a(49673),
                cC = a.n(ch);
            let cg = (0, h.PA)((e) => {
                var t, a, i, l, n, s, r;
                let { modal: o } = e,
                    { formatMessage: c } = (0, Y.A)(),
                    { communication: d } = (0, N.g)(),
                    u = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    _ = null == (a = o.modalItem) ? void 0 : a.content.advDisclaimer,
                    [m, p] = (0, g.useState)(!1),
                    v = (0, g.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, y.jsx)(
                                      cx.t,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: cC().button,
                                          textClassName: cC().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    x = (0, g.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: l, textColor: n, disclaimerColor: s } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            l && (e.title.color = l),
                            n && (e.text.color = n),
                            s && (e.disclaimer['--disclaimer-color'] = s),
                            e
                        );
                    }, [o]),
                    h = (0, g.useCallback)(() => {
                        (o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            d.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close());
                    }, [o, d]),
                    C = (0, g.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, y.jsx)(tz._V, {
                                className: cC().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    A = (0, g.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, cy.r)(o.modalItem.content.disclaimer, af.N, { className: cC().disclaimerLink, style: x.disclaimer, target: '_blank' })
                        );
                    }, [o, x]);
                return (0, y.jsxs)(b.a, {
                    style: x.bg,
                    className: (0, eM.$)(cC().root, u ? cC().root_modal : cC().root_fullscreen),
                    headerClassName: cC().modalHeader,
                    contentClassName: cC().modalContent,
                    header:
                        C &&
                        (0, y.jsx)('div', {
                            className: (0, eM.$)(cC().imageWrapper, cC().imageWrapper_header),
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO,
                            children: C,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: h,
                    closeOnOutsidePress: !1,
                    size: u ? 'fitContent' : 'fullscreen',
                    overlayColor: u ? 'full' : 'transparent',
                    placement: 'center',
                    labelClose: c({ id: 'interface-actions.close' }),
                    customCloseButton: (0, y.jsx)(
                        Q.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, y.jsx)($.I, { className: cC().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: h,
                            'aria-label': c({ id: 'interface-actions.close' }),
                            className: cC().closeButton,
                            withHover: !1,
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON,
                        },
                        ''.concat(null == (i = o.modalItem) ? void 0 : i.anchorId, '-').concat(null == (l = o.modalItem) ? void 0 : l.content.closeActionId),
                    ),
                    'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL,
                    children: [
                        (0, y.jsxs)('div', {
                            className: cC().container,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: cC().wrapper,
                                    children: [
                                        C &&
                                            (0, y.jsx)('div', {
                                                className: (0, eM.$)(cC().imageWrapper, cC().imageWrapper_content),
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO,
                                                children: C,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, y.jsx)(eo.DZ, {
                                                className: cC().title,
                                                style: x.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT,
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (s = o.modalItem) ? void 0 : s.content.text) &&
                                            (0, y.jsx)(eo.DZ, {
                                                className: cC().text,
                                                style: x.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT,
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, y.jsx)(tK.r, {
                                            page: tH.l.MUSIC_DEEPLINK_SCREEN,
                                            places: [tV.R.TOP_BUTTON],
                                            children: (0, y.jsx)('div', { className: cC().buttons, children: v }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)('div', {
                                    className: cC().disclaimerWrapper,
                                    style: x.disclaimer,
                                    children: [
                                        (0, y.jsx)(eo.HL, {
                                            className: cC().disclaimer,
                                            type: 'text',
                                            variant: 'div',
                                            size: 'xs',
                                            weight: 'normal',
                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER,
                                            children: A,
                                        }),
                                        _ &&
                                            (0, y.jsxs)(cv.AM, {
                                                placement: u ? 'top' : 'top-start',
                                                open: m,
                                                onOpenChange: p,
                                                offsetOptions: 8,
                                                transform: !1,
                                                children: [
                                                    (0, y.jsxs)(Q.$, {
                                                        variant: 'text',
                                                        color: 'secondary',
                                                        withHover: !1,
                                                        withRipple: !1,
                                                        className: (0, eM.$)(
                                                            cC().advDisclaimerTrigger,
                                                            u ? cC().advDisclaimerTrigger_modal : cC().advDisclaimerTrigger_fullscreen,
                                                        ),
                                                        'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                        children: [
                                                            (0, y.jsx)(eG.A, { id: 'ads.ad' }),
                                                            (0, y.jsx)($.I, { variant: 'moreOutlined', size: u ? 'xxxs' : 'xxs' }),
                                                        ],
                                                    }),
                                                    (0, y.jsx)(cv.hl, {
                                                        className: cC().advDisclaimerPopover,
                                                        children: (0, y.jsx)(eo.HL, {
                                                            className: cC().advDisclaimerText,
                                                            variant: 'p',
                                                            type: 'text',
                                                            size: 'xs',
                                                            weight: 'medium',
                                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TEXT,
                                                            children: _,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        !u && (null == (r = o.modalItem) ? void 0 : r.content.withShadow) && (0, y.jsx)('div', { className: cC().gradientOverlay }),
                    ],
                });
            });
            a(13319);
            var cA = a(98234),
                cf = a.n(cA);
            let cb = (0, h.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: l },
                        modals: { imageSliderModal: n },
                    } = (0, N.g)(),
                    { formatMessage: s } = (0, Y.A)(),
                    { contentRef: r } = (0, j.g)(),
                    o = (0, r_.z)(),
                    c = (0, g.useRef)(null),
                    [d, u] = (0, g.useState)(!0),
                    [_, m] = (0, g.useState)(!1),
                    [p, v] = (0, g.useState)(0),
                    x = (null != (i = null == (e = n.images) ? void 0 : e.length) ? i : 0) > 1,
                    h = (0, f.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slideNext();
                    }),
                    C = (0, f.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slidePrev();
                    }),
                    A = (0, f.c)((e) => {
                        (u(e.isBeginning), m(e.isEnd), v(e.activeIndex));
                    });
                return (
                    (0, g.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = c.current) ? void 0 : e.swiper) &&
                                (u(0 === c.current.swiper.activeIndex),
                                m(c.current.swiper.activeIndex === (null != (a = null == (t = n.images) ? void 0 : t.length) ? a : 0) - 1),
                                v(c.current.swiper.activeIndex));
                        });
                    }, [null == (t = n.images) ? void 0 : t.length, l]),
                    (0, g.useEffect)(() => {
                        n.modal.isOpened
                            ? (null == o || o.disable(ru.M.MAIN, rd.l.CLOSE),
                              null == o || o.disable(ru.M.MAIN, rd.l.SLIDE_BACKWARD),
                              null == o || o.disable(ru.M.MAIN, rd.l.SLIDE_FORWARD),
                              null == o || o.enable(ru.M.IMAGE_SLIDER, rd.l.CLOSE))
                            : (null == o || o.disable(ru.M.IMAGE_SLIDER, rd.l.CLOSE),
                              null == o || o.enable(ru.M.MAIN, rd.l.CLOSE),
                              null == o || o.enable(ru.M.MAIN, rd.l.SLIDE_BACKWARD),
                              null == o || o.enable(ru.M.MAIN, rd.l.SLIDE_FORWARD));
                    }, [o, n.modal.isOpened]),
                    (0, g.useEffect)(
                        () => (
                            null == o ||
                                o.addShortcutsListener(ru.M.IMAGE_SLIDER, rd.l.CLOSE, () => {
                                    n.modal.isOpened && n.close();
                                }),
                            () => {
                                (null == o || o.removeShortcutsListener(ru.M.IMAGE_SLIDER, rd.l.CLOSE),
                                    null == o || o.disable(ru.M.IMAGE_SLIDER, rd.l.CLOSE),
                                    null == o || o.enable(ru.M.MAIN, rd.l.CLOSE),
                                    null == o || o.enable(ru.M.MAIN, rd.l.SLIDE_BACKWARD),
                                    null == o || o.enable(ru.M.MAIN, rd.l.SLIDE_FORWARD),
                                    n.close());
                            }
                        ),
                        [o, n],
                    ),
                    (0, y.jsxs)(b.a, {
                        className: (0, eM.$)(cf().root, { [cf().root_mobile]: l }),
                        contentClassName: cf().modalContent,
                        open: n.modal.isOpened,
                        size: l ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        onClose: n.close,
                        escapeKey: !1,
                        onOpenChange: n.modal.onOpenChange,
                        portalNode: l ? null : r,
                        withAnimation: !n.modal.isOpened,
                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL,
                        children: [
                            (0, y.jsx)('div', {
                                className: cf().leftArrowWrapper,
                                children:
                                    x &&
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: C,
                                        disabled: d,
                                        'aria-label': s({ id: 'slider.prev-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, y.jsx)('div', {
                                className: cf().rightArrowWrapper,
                                children:
                                    x &&
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: h,
                                        disabled: _,
                                        'aria-label': s({ id: 'slider.next-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: cf().closeButton,
                                onClick: n.close,
                                'aria-label': s({ id: 'slider.close-image-modal' }),
                                'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON,
                            }),
                            (0, y.jsx)('div', {
                                className: cf().content,
                                children: (0, y.jsx)(su.RC, {
                                    initialSlide: n.initialSlideIndex,
                                    className: cf().slider,
                                    wrapperClass: cf().wrapper,
                                    ref: c,
                                    onActiveIndexChange: A,
                                    a11y: { enabled: !0, containerMessage: s({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [sd.dK, sd.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = n.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let l = ((e, t) => e >= t - 5 && e <= t + 5)(t, p) ? e : void 0;
                                                  return (0, y.jsxs)(
                                                      su.qr,
                                                      {
                                                          className: cf().slide,
                                                          'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE,
                                                          children: [
                                                              (0, y.jsx)(tz._V, {
                                                                  fit: 'contain',
                                                                  className: (0, eM.$)(cf().image, { [cf().image_loading]: !n.isImageLoaded(l) }),
                                                                  src: l,
                                                                  size: n.sizeImage,
                                                                  tabIndex: t === p ? 0 : -1,
                                                                  'aria-roledescription': s({ id: 'slider.slide' }),
                                                                  'aria-label': s(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = n.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: n.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: n.withAspectRatio,
                                                              }),
                                                              t === p &&
                                                                  (0, y.jsx)('div', {
                                                                      className: (0, eM.$)(cf().loadingIndicator, {
                                                                          [cf().loadingIndicator_showed]: !n.isImageLoaded(l),
                                                                      }),
                                                                      children: (0, y.jsx)(t0.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
            var cj = a(83243),
                cN = a(70154),
                cT = a(34600),
                cS = a.n(cT);
            let cI = (0, h.PA)((e) => {
                let { modalModel: t, children: a } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: l,
                    } = (0, N.g)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: s } = (0, Y.A)();
                return (0, y.jsx)(b.a, {
                    className: cS().root,
                    contentClassName: cS().content,
                    header: l.isNDAEnabled && (0, y.jsx)(cN.b, {}),
                    headerClassName: cS().header,
                    size: 'fitContent',
                    placement: i ? 'default' : 'right',
                    portalNode: i ? void 0 : n,
                    isMobile: i,
                    enableSwipe: i,
                    withOverlay: !0,
                    overlayColor: 'transparent',
                    labelClose: s({ id: 'interface-actions.close' }),
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    showHeader: !0,
                    closeButtonProps: i && { hidden: !0 },
                    closeButtonDataTestId: q.Kq.multivibe.MULTIVIBE_MODAL_CLOSE_BUTTON,
                    'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL,
                    children: a,
                });
            });
            var ck = a(42966),
                cL = a(21790),
                cE = a(59877),
                cM = a(58222),
                cP = a(17944),
                cO = a.n(cP);
            let cw = (e) => {
                    let { title: t, description: a, withSubtitle: i } = e;
                    return (0, y.jsxs)('div', {
                        className: cO().root,
                        children: [
                            (0, y.jsx)(eo.DZ, {
                                variant: 'h1',
                                size: 'l',
                                weight: 'bold',
                                className: (0, eM.$)(cO().title, { [cO().title_withSubtitle]: i }),
                                dangerouslySetInnerHTML: { __html: (0, X.ky)(t) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_TITLE,
                            }),
                            i &&
                                (0, y.jsx)(eo.HL, {
                                    variant: 'div',
                                    type: 'entity',
                                    size: 'l',
                                    weight: 'medium',
                                    className: cO().subtitle,
                                    children: (0, y.jsx)(eG.A, { id: 'multivibe.modal-subtitle' }),
                                }),
                            (0, y.jsx)(eo.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: cO().description,
                                dangerouslySetInnerHTML: { __html: (0, X.ky)(a) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_DESCRIPTION,
                            }),
                        ],
                    });
                },
                cR = (0, h.PA)((e) => {
                    let { roomId: t, onClose: a } = e,
                        { formatMessage: i } = (0, Y.A)(),
                        { initCopyVibeRoomInviteLink: l } = (0, cL.r)({ onSuccess: a }),
                        n = (0, ck.m)(),
                        s = (0, f.c)(() => {
                            n({
                                actionType: C.ActionType.Copied,
                                userInteractionType: C.UserInteractionType.Tap,
                                objectType: C.DomainObjectType.Link,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectCount: 0,
                                objectId: '',
                            });
                            let { copy: e } = l();
                            e(t);
                        });
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(cM.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c30bdb737c087aeab4/%%' }),
                            (0, y.jsx)(cw, { title: i({ id: 'multivibe.only-member-modal-title' }), description: i({ id: 'multivibe.only-member-modal-description' }) }),
                            (0, y.jsx)(Q.$, {
                                color: 'primary',
                                size: 'default',
                                onClick: s,
                                radius: 'xxxl',
                                isBlock: !0,
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_COPY_LINK_BUTTON,
                                children: i({ id: 'interface-actions.copy-link' }),
                            }),
                            (0, y.jsx)(cE.j, {}),
                        ],
                    });
                }),
                cD = (0, h.PA)((e) => {
                    let { roomId: t } = e,
                        { multivibe: a } = (0, N.g)(),
                        { resetDisabledRoomId: i, disabledRoomInfoModal: l } = a,
                        n = (0, cj.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    return (
                        (0, g.useEffect)(() => () => i(), [i]),
                        (0, g.useEffect)(() => {
                            if (l.isOpened)
                                return (
                                    n(!0),
                                    () => {
                                        n(!1);
                                    }
                                );
                        }, [n, l.isOpened]),
                        (0, y.jsx)(cI, { modalModel: l, children: (0, y.jsx)(cR, { roomId: t, onClose: l.close }) })
                    );
                });
            var cB = a(10322),
                cF = a(50176);
            let cU = (0, h.PA)((e) => {
                let { onLinkCreateSuccess: t } = e,
                    { formatMessage: a } = (0, Y.A)();
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cM.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c40bdb737c087aeab5/%%' }),
                        (0, y.jsx)(cw, {
                            title: a({ id: 'multivibe.invite-modal-invalid-title' }),
                            description: a({ id: 'multivibe.invite-modal-invalid-description' }),
                        }),
                        (0, y.jsx)(cF.M, { isBlock: !0, title: a({ id: 'multivibe.invite-modal-invalid-button-text' }), onSuccess: t }),
                        (0, y.jsx)(cE.j, {}),
                    ],
                });
            });
            var cz = a(87201);
            let cW = (0, h.PA)((e) => {
                let { seeds: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    { pageId: i } = (0, rg.$)(),
                    l = (0, e1.b)(),
                    { togglePlay: n, isPlaying: s } = (0, cz.B)({ seeds: t, pageIdForFrom: i, blockIdForFrom: C.EntityTypes.Multiwave }),
                    r = (0, f.c)(() => {
                        (l(!s), n());
                    });
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cM.t, {}),
                        (0, y.jsx)(cw, { title: a({ id: 'multivibe.enabled-room-modal-title' }), description: a({ id: 'multivibe.enabled-room-modal-description' }) }),
                        (0, y.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: r,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_PLAY_ROOM_BUTTON,
                            children: a({ id: 'multivibe.enabled-room-modal-button-text' }),
                        }),
                        (0, y.jsx)(cE.j, {}),
                    ],
                });
            });
            var cK = a(70969),
                cH = a(31488),
                cV = a(79240),
                cY = a.n(cV);
            let cq = (0, h.PA)((e) => {
                let { room: t, member: a } = e,
                    { formatMessage: i } = (0, Y.A)(),
                    { enterVibeRoom: l, isPending: n } = ((e) => {
                        var t, a;
                        let { room: i } = e,
                            { multivibe: l } = (0, N.g)(),
                            { notify: n } = (0, es.l)(),
                            { formatMessage: s } = (0, Y.A)(),
                            { pageId: r } = (0, rg.$)(),
                            o = (0, e1.b)(),
                            { resetContext: c, isPlaying: d } = (0, cz.B)({
                                seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [],
                                pageIdForFrom: r,
                                blockIdForFrom: C.EntityTypes.Multiwave,
                            }),
                            [u, _] = (0, g.useState)(!1),
                            m = (0, g.useRef)(!1);
                        return {
                            enterVibeRoom: (0, f.c)(async () => {
                                if (m.current) return;
                                (_(!0), (m.current = !0));
                                let e = await l.enterRoom({ roomId: i.id }),
                                    t = l.duplicateRoomId;
                                if ((t && e === cH.F.ERROR && l.errorName === cK.z.ROOM_DUPLICATION && (e = await l.enterRoom({ roomId: t })), e === cH.F.ERROR))
                                    n((0, y.jsx)(er.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: en.u.ERROR });
                                else {
                                    var a, r, u;
                                    let e = l.invitationRoom,
                                        t = null != (u = null == e || null == (a = e.wave) ? void 0 : a.seeds) ? u : [];
                                    (await c(t), o(!d, null == e || null == (r = e.wave) ? void 0 : r.seedsId));
                                }
                                (_(!1), (m.current = !1));
                            }),
                            isPending: u,
                        };
                    })({ room: t }),
                    s = (0, f.c)(() => l()),
                    { name: r, cover: o } = a;
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)('div', {
                            className: cY().imageContainer,
                            children: (0, y.jsx)(cM.t, {
                                src: o.uri,
                                className: (0, eM.$)(cY().multivibeCover, cY().guestAvatar),
                                imageClassName: cY().multivibeAvatar,
                                withSrcSet: !1,
                                withAspectRatio: !1,
                                withTopSpace: !1,
                            }),
                        }),
                        (0, y.jsx)(cw, {
                            title: i({ id: 'multivibe.invite-modal-valid-title' }, { name: r }),
                            description: i({ id: 'multivibe.invite-modal-valid-description' }),
                        }),
                        (0, y.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: s,
                            disabled: n,
                            spinner: n ? (0, y.jsx)(t0.y, { size: 'xs' }) : void 0,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_JOIN_ROOM_BUTTON,
                            children: i({ id: 'multivibe.invite-modal-valid-button-text' }),
                        }),
                        (0, y.jsx)(cE.j, {}),
                    ],
                });
            });
            var cQ = a(77750);
            let c$ = (0, h.PA)((e) => {
                let { onButtonClick: t } = e,
                    { formatMessage: a } = (0, Y.A)();
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cM.t, {}),
                        (0, y.jsx)(cw, { title: a({ id: 'multivibe.invite-modal-draft-title' }), description: a({ id: 'multivibe.invite-modal-draft-description' }) }),
                        (0, y.jsx)(cQ.m, { onButtonClick: t }),
                        (0, y.jsx)(cE.j, {}),
                    ],
                });
            });
            var cG = a(37052);
            let cZ = (0, h.PA)((e) => {
                    var t, a;
                    let { children: i } = e,
                        { multivibe: l, vibe: n } = (0, N.g)(),
                        { invitationRoom: s, inviteModal: r, isGetRoomByIdLoading: o } = l,
                        c = (0, cj.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    (0, g.useEffect)(() => {
                        if (r.isOpened)
                            return (
                                c(!0),
                                () => {
                                    c(!1);
                                }
                            );
                    }, [c, r.isOpened]);
                    let d = ((e) => {
                        var t, a;
                        let { sonataState: i, vibe: l } = (0, N.g)();
                        return i.isVibeContext && (0, cG._)(null != (a = null == (t = l.meta) ? void 0 : t.seeds) ? a : [], e) && i.isPlaying;
                    })(null != (a = null == s || null == (t = s.wave) ? void 0 : t.seeds) ? a : []);
                    return ((0, g.useEffect)(() => {
                        d && r.close();
                    }, [d, r]),
                    o || n.isApplying || d)
                        ? (0, y.jsx)('div', { className: cY().spinnerWrapper, children: (0, y.jsx)(t0.y, { size: 'xl' }) })
                        : i;
                }),
                cX = (0, h.PA)(() => {
                    var e, t;
                    let { multivibe: a, user: i } = (0, N.g)(),
                        { inviteModal: l, invitationRoom: n } = a,
                        s = l.close,
                        r = null != (t = null == n || null == (e = n.wave) ? void 0 : e.seedsId) ? t : '',
                        { blockType: o, content: c } = (0, tj.L)(() => {
                            var e, t;
                            if (!n) return { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, y.jsx)(cU, { onLinkCreateSuccess: s }) };
                            let { isDraft: a, isDisabled: l, isEnabled: r, owner: o, members: c } = n,
                                d = o.uid && o.uid === i.puid,
                                u = c[0],
                                _ = o.isActive ? o : u,
                                m = (null == _ ? void 0 : _.uid) && _.uid === i.puid,
                                p = null != (t = null == (e = n.wave) ? void 0 : e.seeds) ? t : [];
                            return r
                                ? { blockType: C.EntityTypes.MultivibeAlreadyExists, content: (0, y.jsx)(cW, { seeds: p }) }
                                : a && d
                                  ? { blockType: C.EntityTypes.MultivibePendingInvitation, content: (0, y.jsx)(c$, { onButtonClick: s }) }
                                  : a && !d && o
                                    ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, y.jsx)(cq, { room: n, member: o }) }
                                    : l && m
                                      ? { blockType: C.EntityTypes.MultivibeAlone, content: (0, y.jsx)(cR, { roomId: n.id, onClose: s }) }
                                      : l && !m && _
                                        ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, y.jsx)(cq, { room: n, member: _ }) }
                                        : { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, y.jsx)(cU, { onLinkCreateSuccess: s }) };
                        });
                    return (0, y.jsx)(cB.n, {
                        pageId: tl._Q.MULTIVIBE_UNIFIED_SCREEN,
                        pageStyle: C.PageStyles.Sheet,
                        pagePlacement: C.PagePlacements.Bottom,
                        pageEntityId: '',
                        children: (0, y.jsx)(cI, {
                            modalModel: l,
                            children: (0, y.jsx)(rN.F, {
                                blockId: '',
                                blockType: o,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, y.jsx)(rT.B, {
                                    objectId: r,
                                    objectsCount: 0,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectType: C.DomainObjectType.Wave,
                                    children: (0, y.jsx)(cZ, { children: c }),
                                }),
                            }),
                        }),
                    });
                });
            var cJ = a(23672),
                c0 = a.n(cJ);
            let c1 = (0, h.PA)(() => {
                let { multivibe: e } = (0, N.g)(),
                    { formatMessage: t } = (0, Y.A)(),
                    { promoModal: a } = e,
                    i = (0, cj.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                return (
                    (0, g.useEffect)(() => {
                        if (a.isOpened)
                            return (
                                i(!0),
                                () => {
                                    i(!1);
                                }
                            );
                    }, [a.isOpened, i]),
                    (0, y.jsxs)(cI, {
                        modalModel: a,
                        children: [
                            (0, y.jsx)(cM.t, {
                                src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a4e4cb644dcec5277bcec98/%%',
                                className: c0().imageWrapper,
                                size: 400,
                                withTopSpace: !1,
                            }),
                            (0, y.jsx)(cw, {
                                title: t({ id: 'multivibe.promo-modal-title' }),
                                description: t({ id: 'multivibe.promo-modal-description' }),
                                withSubtitle: !0,
                            }),
                            (0, y.jsx)(cF.M, { isBlock: !0, title: t({ id: 'interface-actions.copy-link' }), onSuccess: a.close }),
                            (0, y.jsx)(cE.j, {}),
                        ],
                    })
                );
            });
            var c2 = a(5531),
                c4 = a(10378),
                c8 = a(82928);
            let c6 = (e, t) => (c8.s.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var c3 = a(55317),
                c5 = a.n(c3);
            let c9 = (e) => {
                let { closeToast: t } = e;
                return (0, y.jsx)(l9.$, {
                    closeToast: t,
                    cover: (0, y.jsx)($.I, { className: c5().icon, size: 'xs', variant: 'chain' }),
                    message: (0, y.jsx)(eo.HL, {
                        className: c5().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(eG.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var c7 = a(77777),
                de = a.n(c7);
            let dt = (0, h.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    { language: i } = (0, tE.h)(),
                    { notify: l } = (0, es.l)();
                (0, g.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let n = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    s = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c8.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c4.JQ) && t.setWidth(String(c4.JQ));
                    }),
                    r = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    o = (0, f.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c8.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c4.IR) && t.setHeight(String(c4.IR));
                    }),
                    c = { width: c6(t.width, c4.JQ), height: c6(t.height, c4.IR) },
                    d = t.iframeUri.replace(c4.bL, i),
                    u = t.iframeCode.replace(c4.bL, i),
                    _ = (0, f.c)(async () => {
                        (await window.navigator.clipboard.writeText(u), l((0, y.jsx)(c9, {}), { containerId: en.u.INFO }));
                    });
                return (0, y.jsxs)('div', {
                    className: de().root,
                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR,
                    children: [
                        (0, y.jsxs)('form', {
                            className: de().controls,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: de().settings,
                                    children: [
                                        (0, y.jsx)(c2.p, {
                                            containerClassName: de().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: c4.JQ,
                                            required: !0,
                                            onChange: n,
                                            onBlur: s,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT,
                                        }),
                                        (0, y.jsx)($.I, { size: 'xs', variant: 'close' }),
                                        (0, y.jsx)(c2.p, {
                                            containerClassName: de().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: c4.IR,
                                            required: !0,
                                            onChange: r,
                                            onBlur: o,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT,
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(c2.p, {
                                    inputClassName: de().iframeCodeInput,
                                    containerClassName: de().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: u,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT,
                                }),
                                (0, y.jsx)(Q.$, {
                                    color: 'primary',
                                    className: de().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: _,
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON,
                                    children: (0, y.jsx)(eo.HL, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, y.jsx)(eG.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, y.jsx)('div', {
                            className: de().iframeContainer,
                            style: c,
                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW,
                            children: (0, y.jsx)('iframe', { className: de().iframe, src: d, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var da = a(74570),
                di = a.n(da);
            let dl = (0, h.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, N.g)(),
                    { formatMessage: a } = (0, Y.A)();
                return e.entity
                    ? (0, y.jsx)(b.a, {
                          className: di().root,
                          contentClassName: di().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_MODAL,
                          closeButtonDataTestId: q.Kq.shareIframe.SHARE_IFRAME_MODAL_CLOSE_BUTTON,
                          children: (0, y.jsx)(dt, { entity: e.entity }),
                      })
                    : null;
            });
            var dn = a(95486),
                ds = a.n(dn);
            let dr = (e) => {
                    let t = e.value.trim().length;
                    return ('number' == typeof e.minLength && !!(t < e.minLength)) || ('number' == typeof e.maxLength && !!(t > e.maxLength));
                },
                dc = (0, h.PA)((e) => {
                    let { open: t, title: a, content: i, onClose: l, onChange: n } = e,
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        { formatMessage: r } = (0, Y.A)(),
                        [o, c] = (0, g.useState)(i),
                        [d, u] = (0, g.useState)(!1),
                        _ = (0, g.useCallback)(
                            (e) => (t) => {
                                let a = t.target.value,
                                    i = o.find((t) => t.key === e);
                                (i && (i.value = a), c([...o]), u(!1));
                            },
                            [o],
                        ),
                        m = (0, g.useCallback)(
                            (e) => {
                                e || l();
                            },
                            [l],
                        ),
                        p = (0, g.useCallback)(() => {
                            if (o.some(dr)) return void u(!0);
                            n(o);
                        }, [n, o]),
                        v = (0, g.useMemo)(
                            () =>
                                o.map((e) => {
                                    let t = _(e.key),
                                        a = d && dr(e);
                                    return (0, y.jsxs)(
                                        'div',
                                        {
                                            className: ds().field,
                                            children: [
                                                (0, y.jsx)(eo.HL, { variant: 'div', size: 'm', className: ds().label, children: e.title }),
                                                (0, y.jsx)(c2.p, {
                                                    value: e.value,
                                                    containerClassName: (0, eM.$)(ds().input, { [ds().input_error]: a }),
                                                    placeholder: e.title,
                                                    onChange: t,
                                                    minLength: e.minLength,
                                                    maxLength: e.maxLength,
                                                    'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_FIELD_INPUT,
                                                }),
                                            ],
                                        },
                                        e.key,
                                    );
                                }),
                            [_, d, o],
                        );
                    return (0, y.jsxs)(b.a, {
                        size: 'fitContent',
                        placement: s ? 'default' : 'center',
                        open: t,
                        onOpenChange: m,
                        className: ds().root,
                        contentClassName: ds().modalContent,
                        showHeader: !1,
                        closeOnOutsidePress: !1,
                        isMobile: s,
                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL,
                        overlayColor: 'full',
                        children: [
                            (0, y.jsxs)('div', {
                                className: ds().header,
                                children: [
                                    (0, y.jsx)(eo.DZ, { variant: 'h4', size: 'm', weight: 'bold', className: ds().title, children: a }),
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: l,
                                        'aria-label': r({ id: 'ugc.close-edit-popup' }),
                                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: ds().content,
                                children: [
                                    v,
                                    (0, y.jsxs)('div', {
                                        className: ds().buttons,
                                        children: [
                                            (0, y.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'secondary',
                                                size: s ? 'l' : 'm',
                                                className: ds().button,
                                                onClick: l,
                                                'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_CANCEL_BUTTON,
                                                children: (0, y.jsx)(eG.A, { id: 'interface-actions.cancel' }),
                                            }),
                                            (0, y.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'primary',
                                                size: s ? 'l' : 'm',
                                                className: ds().button,
                                                onClick: p,
                                                children: (0, y.jsx)(eG.A, { id: 'interface-actions.save' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var dd = (function (e) {
                return ((e.TITLE = 'title'), (e.ARTIST = 'artist'), e);
            })({});
            let du = (0, h.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: e },
                        fullscreenPlayer: t,
                    } = (0, N.g)(),
                    { notify: a } = (0, es.l)(),
                    { formatMessage: i } = (0, Y.A)(),
                    l = (0, g.useMemo)(
                        () => [
                            { key: dd.TITLE, title: i({ id: 'track-modal.track-name' }), value: e.trackTitle, minLength: 1, maxLength: 200 },
                            { key: dd.ARTIST, title: i({ id: 'entity-names.singer' }), value: e.trackArtist, minLength: 0, maxLength: 200 },
                        ],
                        [i, e.trackArtist, e.trackTitle],
                    ),
                    n = (0, f.c)(async (l) => {
                        let { title: n, artist: s } = ((e) => {
                            var t, a;
                            let i = null == (t = e.find((e) => e.key === dd.TITLE)) ? void 0 : t.value,
                                l = null == (a = e.find((e) => e.key === dd.ARTIST)) ? void 0 : a.value;
                            return { title: (i = i ? i.trim() : ''), artist: (l = l ? l.trim() : '') };
                        })(l);
                        (e.track &&
                            (await e.track.changeTrackInfo(n, s)) === cH.F.ERROR &&
                            a((0, y.jsx)(er.h, { error: i({ id: 'ugc.editing-failed' }) }), { containerId: t.modal.isOpened ? en.u.FULLSCREEN_ERROR : en.u.ERROR }),
                            e.close());
                    });
                return e.modal.isOpened
                    ? (0, y.jsx)(dc, { open: e.modal.isOpened, title: i({ id: 'entity-names.track' }), content: l, onClose: e.close, onChange: n })
                    : null;
            });
            var d_ = a(18483);
            let dm = null,
                dp = [],
                dv = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === dm)
                        return void dp.push((e) => {
                            e.add(...t);
                        });
                    dm.add(...t);
                },
                dx = 'google-adwords',
                dy = '10983745785',
                dh = [aU.KZ, aU.UZ, aU.KG, aU.AZ, aU.AM, aU.GE, aU.TR];
            var dC = a(37045),
                dg = a(28764),
                dA = a(26909);
            let df = null,
                db = (0, h.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: l,
                            tariffOfferName: n,
                            offersBatchId: s,
                            offersPositionIds: r,
                            onLoad: o,
                            onSuccess: c,
                            onError: d,
                            onClose: u,
                        } = e,
                        _ = (0, g.useRef)(null),
                        { theme: m } = (0, tP.W)(),
                        { pwTools: p } = (0, dA.q)(),
                        v = (() => {
                            let { albumCPA: e } = (0, N.g)(),
                                { getClidFromQuery: t, checkIsValidClid: a } = (0, dg.I)();
                            return (0, g.useCallback)(async () => {
                                let i = t();
                                if (!i || !e.albumId) return;
                                let { parsedClid: l, queryClid: n } = i;
                                if ((l && (await e.getCpa({ albumId: l.albumId })), a(e.cpa, e.albumId))) return n;
                            }, [e, t, a]);
                        })(),
                        x = (0, f.c)((e) => {
                            'purchase_data' === e.type && (null == c || c());
                        }),
                        h = (0, f.c)(() => {
                            null == d || d();
                        }),
                        C = (0, f.c)(() => {
                            null == u || u();
                        }),
                        A = (0, f.c)((e) => {
                            'loaded' === e.data.status && (null == o || o());
                        }),
                        b = (0, g.useCallback)(async () => {
                            if (!p || !_.current) return;
                            let { lang: e, mode: t, platform: o, widgetServiceName: c, authMethod: d } = p.options;
                            if (!df)
                                try {
                                    df = await p.loadManager();
                                } catch (e) {
                                    C();
                                    return;
                                }
                            df.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: o,
                                    widgetServiceName: c,
                                    authMethod: d,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: m,
                                    onSuccess: x,
                                    onError: h,
                                    onReport: A,
                                    onClose: C,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: l,
                                    tariffOfferName: n,
                                    offersBatchId: s,
                                    offersPositionIds: r,
                                    targetNode: _.current,
                                    isTarifficator: !0,
                                },
                                y = await v();
                            (null !== y && (u.clid = y), df.send({ type: 'open', options: u }));
                        }, [m, p, a, i, n, l, s, r, x, h, A, C, v]);
                    return (
                        (0, g.useEffect)(
                            () => (
                                b(),
                                () => {
                                    null == df || df.send({ type: 'close' });
                                }
                            ),
                            [b],
                        ),
                        (0, y.jsx)('div', { className: t, ref: _ })
                    );
                });
            var dj = a(67882),
                dN = a.n(dj);
            let dT = (0, h.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, N.g)(),
                    a = (0, ee.N)().get(J.vg),
                    { state: i, toggleTrue: l } = (0, eC.e)(!1),
                    n = (() => {
                        let { user: e } = (0, N.g)(),
                            { add: t } = (() => {
                                let [e, t] = (0, g.useState)(null !== dm);
                                return {
                                    init: (0, g.useCallback)(() => {
                                        var a, i;
                                        void 0 === (null == (a = window) ? void 0 : a.Ya.yanalytics) ||
                                            e ||
                                            ((dm = window.Ya.yanalytics),
                                            t(!0),
                                            (i = dm),
                                            dp.forEach((e) => {
                                                e(i);
                                            }),
                                            (dp = []));
                                    }, [e]),
                                    add: dv,
                                };
                            })(),
                            [a, i] = (0, g.useState)(!1);
                        return (
                            (0, g.useEffect)(() => {
                                void 0 !== e.account.data.geoRegionIso &&
                                    dh.includes(e.account.data.geoRegionIso) &&
                                    (t({ alias: dx, action: 'init', params: { provider: 'google-adwords', id: 'AW-'.concat(dy) } }), i(!0));
                            }, [e.account.data.geoRegionIso, t]),
                            {
                                track: (0, g.useCallback)(
                                    (e) => {
                                        a && t({ alias: dx, action: 'track', params: { id: dy, ...e } });
                                    },
                                    [a, t],
                                ),
                            }
                        );
                    })();
                (0, g.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let s = (0, g.useCallback)(() => {
                        (e.setStatus(dC.c.SUCCESS), n.track({ label: 'WCvtCKnr84oYEPnRuvUo' }), a.reachGoal('PAYMENT_COMPLETED'));
                    }, [e, n, a]),
                    r = (0, g.useCallback)(() => {
                        (e.modal.close(), e.isSuccess && window.location.reload(), e.reset());
                    }, [e]),
                    o = (0, g.useCallback)(() => {
                        e.setStatus(dC.c.ERROR);
                    }, [e]);
                return (0, y.jsx)(b.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, eM.$)(dN().root, { [dN().root_loaded]: i, [dN().root_level_up]: t.isAdvertShown }),
                    'data-test-id': q.OA.paymentWidget.PAYMENT_WIDGET,
                    contentClassName: dN().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, y.jsx)(db, {
                        className: dN().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: l,
                        onSuccess: s,
                        onError: o,
                        onClose: r,
                    }),
                });
            });
            var dS = a(56412),
                dI = a(60564),
                dk = a.n(dI);
            let dL = (0, h.PA)(() => {
                    let {
                        disclaimerModalState: e,
                        modals: { disclaimerModal: t },
                    } = (0, N.g)();
                    return (0, y.jsx)(b.a, {
                        size: 'fitContent',
                        placement: 'center',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        showHeader: !1,
                        className: dk().root,
                        contentClassName: dk().content,
                        overlayClassName: dk().overlay,
                        overlayColor: 'full',
                        'data-test-id': q.OA.disclaimer.DISCLAIMER_MODAL,
                        closeOnOutsidePress: e.shouldCloseModalOnOutsidePress,
                        escapeKey: e.shouldCloseModalOnEscape,
                        children: (0, y.jsx)(dS.M, { modalState: e, onClose: t.close }),
                    });
                }),
                dE = (0, h.PA)(() => {
                    var e;
                    let { communication: t, experiments: a, user: i, multivibe: l } = (0, N.g)(),
                        n = (0, d_.d)(),
                        s = a.checkExperiment(T.z.WebNextArtistInfo, 'on'),
                        { isEnabled: r, disabledRoomId: o } = l,
                        c = r && i.hasPlus;
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (null == (e = t.list) ? void 0 : e.modal) && (0, y.jsx)(cg, { modal: t.list.modal }),
                            (0, y.jsx)(cB.n, { pageId: tl._Q.PLAYER, children: (0, y.jsx)(rr, {}) }),
                            n && (0, y.jsx)(cB.n, { pageId: tl._Q.VIDEO_PLAYER, children: (0, y.jsx)(oJ, {}) }),
                            (0, y.jsx)(dL, {}),
                            (0, y.jsx)(cB.n, { pageId: tl._Q.TRAILER, children: (0, y.jsx)(os, {}) }),
                            n && (0, y.jsx)(tf, {}),
                            (0, y.jsx)(tL, {}),
                            (0, y.jsx)(tR, {}),
                            s && (0, y.jsx)(cp, {}),
                            !i.hasPlus && (0, y.jsxs)(y.Fragment, { children: [(0, y.jsx)(l4, {}), (0, y.jsx)(aa, {}), (0, y.jsx)(ry, {})] }),
                            !i.hasPlus && (0, y.jsx)(aw, {}),
                            (0, y.jsx)(dl, {}),
                            (0, y.jsx)(tF, {}),
                            (0, y.jsx)(tx, {}),
                            (0, y.jsx)(dT, {}),
                            (0, y.jsx)(du, {}),
                            (0, y.jsx)(au, {}),
                            (0, y.jsx)(cb, {}),
                            c &&
                                (0, y.jsxs)(y.Fragment, {
                                    children: [
                                        (0, y.jsx)(cB.n, {
                                            pageId: tl._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                                            pageStyle: C.PageStyles.Sheet,
                                            pagePlacement: C.PagePlacements.Bottom,
                                            pageEntityId: '',
                                            children: (0, y.jsx)(rN.F, { blockId: '', blockType: '', blockPosX: 1, blockPosY: 1, children: (0, y.jsx)(c1, {}) }),
                                        }),
                                        (0, y.jsx)(cX, {}),
                                        o &&
                                            (0, y.jsx)(cB.n, {
                                                pageId: tl._Q.MULTIVIBE_UNIFIED_SCREEN,
                                                pageStyle: C.PageStyles.Sheet,
                                                pagePlacement: C.PagePlacements.Bottom,
                                                pageEntityId: '',
                                                children: (0, y.jsx)(rN.F, {
                                                    blockId: '',
                                                    blockType: '',
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    children: (0, y.jsx)(cD, { roomId: o }),
                                                }),
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        31886: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'), (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'), (e.UNKNOWN = 'UNKNOWN'), e
                );
            })({});
        },
        32110: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(16886);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        33639: (e) => {
            e.exports = {
                root: 'Paywall_root__XE_NC',
                section: 'Paywall_section__Y30nd',
                section_faq: 'Paywall_section_faq__43qaB',
                overlayScroll_desktop: 'Paywall_overlayScroll_desktop__P46WF',
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
        34600: (e) => {
            e.exports = { root: 'MultivibeBaseModal_root__UBSBT', header: 'MultivibeBaseModal_header__h0xoz', content: 'MultivibeBaseModal_content__MlO_s' };
        },
        34826: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        35687: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
        },
        35955: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        36699: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        37045: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        37138: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        37230: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
        },
        37372: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        37886: (e) => {
            e.exports = {
                content_ru: 'BooksSectionDesktop_content_ru__Yauyu',
                content_by: 'BooksSectionDesktop_content_by___eqCQ',
                card: 'BooksSectionDesktop_card__blMRo',
                logo_ru: 'BooksSectionDesktop_logo_ru__SRY4d',
                logo_en: 'BooksSectionDesktop_logo_en__Szpr_',
            };
        },
        37922: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        38590: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        39099: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => f });
            var i = a(25839),
                l = a(82298),
                n = a(88204),
                s = a(74631),
                r = a(71035),
                o = a(11823),
                c = a(79367),
                d = a(47009),
                u = a(52512),
                _ = a(29872),
                m = a(61561),
                p = a(85743),
                v = a(16886),
                x = a(27954),
                y = a(18284),
                h = a(39004),
                C = a(26115),
                g = a(51027),
                A = a.n(g);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: g,
                        beforeBlock: f,
                        controls: b,
                        playButtonCellRender: j,
                        withLightning: N,
                        isPlaying: T,
                        isCurrent: S,
                        togglePlay: I,
                        restartPlay: k,
                        onPlayClick: L,
                        playButtonIconSize: E,
                        skipFreemiumCloseListeningPaywall: M = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: w } = (0, _.q)(),
                    {
                        track: R,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: z },
                    } = (0, x.g)(),
                    { ref: W, intersectionPropertyId: K } = (0, u.n)(),
                    H = (0, d.b)(),
                    V = (0, c.P)(),
                    Y = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, h.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: n }),
                    q = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            a = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    Q = U(F.id, null == (t = F.meta) ? void 0 : t.isNonMusic),
                    $ = n.isAvailable && O && !Q,
                    G = (0, m.N)(),
                    Z = n.isAvailable && G && !Q && !M,
                    X = (0, C.w)({ track: n, callback: I }),
                    J = (0, r.c)(() => {
                        R.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, C.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    el = (0, r.c)(() => {
                        if (!V()) {
                            if ($) return void w();
                            if (Z) return void z.open();
                            (ea || T || (ei(!0), null == et || et()), X(), H(!T), null == L || L(!T));
                        }
                    }),
                    en = (0, r.c)(() => {
                        if (T) return void k();
                        el();
                    }),
                    es = (0, r.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (O && n.isAvailableOnlyForPlus && w(), G && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if ($) return void w();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !D.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, o.P)(e, A().ripple), B)
                              ? void el()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !D.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    er = null == j ? void 0 : j({ onPlayButtonClick: el, isPlaying: T, isCurrent: S, isLoading: q, playButtonIconSize: E });
                return (0, i.jsxs)(y.C, {
                    ref: W,
                    'aria-label': Y,
                    'data-intersection-property-id': K,
                    onClick: es,
                    className: (0, l.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: S && B }, a),
                    ...P,
                    children: [f, er, g, b],
                });
            });
        },
        39760: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        40178: (e) => {
            e.exports = {
                root: 'ArtistAboutModalContent_root__XGW1F',
                header: 'ArtistAboutModalContent_header__ws7Ap',
                title: 'ArtistAboutModalContent_title__hMO2k',
                subtitle: 'ArtistAboutModalContent_subtitle__OpssN',
                descriptionWrapper: 'ArtistAboutModalContent_descriptionWrapper__jNL4G',
                description: 'ArtistAboutModalContent_description__KlWvL',
                readMoreButton: 'ArtistAboutModalContent_readMoreButton__1ageU',
                bandlinkScanner: 'ArtistAboutModalContent_bandlinkScanner__Fwv2x',
            };
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
        41695: (e) => {
            e.exports = { root: 'PaywallFAQCollapse_root___gwrQ', root_collapsed: 'PaywallFAQCollapse_root_collapsed__gx8IK' };
        },
        41762: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        42382: (e) => {
            e.exports = {
                root: 'ArtistAboutModalImageSlider_root__L18Xb',
                button: 'ArtistAboutModalImageSlider_button__GPXyc',
                image: 'ArtistAboutModalImageSlider_image__3CTLr',
                moreCovers: 'ArtistAboutModalImageSlider_moreCovers__7oDPM',
                moreCoversText: 'ArtistAboutModalImageSlider_moreCoversText__W_P8L',
            };
        },
        42664: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        42994: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        43095: (e) => {
            e.exports = { topSection: 'PaywallOtherMobile_topSection__Pscnw' };
        },
        43464: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => l });
            let i = new Set(Object.values(a(85705).M)),
                l = (e) => 'string' == typeof e && i.has(e);
        },
        43708: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(75501);
            let l = (e) => e === i.S.TRACK || e === i.S.MUSIC;
        },
        44061: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        46010: (e) => {
            e.exports = {
                root: 'ArtistAboutModalShimmer_root__RWCDi',
                entityName: 'ArtistAboutModalShimmer_entityName__eBJym',
                title: 'ArtistAboutModalShimmer_title__0uj5d',
            };
        },
        47062: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            var i = a(25839),
                l = a(89288);
            let n = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                s = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                r = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let r = (0, l.ky)(e).toString(),
                        o = [...r.matchAll(n)];
                    return r.split(s).reduce((e, l, n) => {
                        e.push(l);
                        let { 1: s, 2: r } = o[n] || [];
                        return (s && r && e.push((0, i.jsx)(t, { href: r, ...a, children: s })), e);
                    }, []);
                };
        },
        47127: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        47306: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        47399: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        47651: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        48122: (e) => {
            e.exports = {
                root: 'BuySubscriptionBlock_root__vcGLK',
                text_main: 'BuySubscriptionBlock_text_main__fU5RA',
                text_addition: 'BuySubscriptionBlock_text_addition__bbHYT',
                text_secondary: 'BuySubscriptionBlock_text_secondary__ZT9ke',
                buttonContainer: 'BuySubscriptionBlock_buttonContainer__Tu2hm',
                buttonContainer_columnLayout: 'BuySubscriptionBlock_buttonContainer_columnLayout__MH7PE',
                root_withSecondButton: 'BuySubscriptionBlock_root_withSecondButton___v2dL',
                button: 'BuySubscriptionBlock_button__EqUAg',
                stickyContainer: 'BuySubscriptionBlock_stickyContainer__yA50y',
                stickyContainer_enter: 'BuySubscriptionBlock_stickyContainer_enter__50hEo',
                stickyContainer_enter_active: 'BuySubscriptionBlock_stickyContainer_enter_active__4vFVC',
                'animation-show': 'BuySubscriptionBlock_animation-show__xlvuU',
                stickyContainer_exit: 'BuySubscriptionBlock_stickyContainer_exit__9Axef',
                stickyContainer_exit_active: 'BuySubscriptionBlock_stickyContainer_exit_active__HjXVn',
                'animation-hide': 'BuySubscriptionBlock_animation-hide__gnUki',
            };
        },
        49673: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
                advDisclaimerTrigger: 'CommunicationModal_advDisclaimerTrigger__otvUP',
                advDisclaimerTrigger_modal: 'CommunicationModal_advDisclaimerTrigger_modal__osiyy',
                advDisclaimerTrigger_fullscreen: 'CommunicationModal_advDisclaimerTrigger_fullscreen__F4N7r',
                advDisclaimerPopover: 'CommunicationModal_advDisclaimerPopover__gu0oV',
                advDisclaimerText: 'CommunicationModal_advDisclaimerText__hiNjI',
            };
        },
        50290: (e) => {
            e.exports = { text: 'FreePlayerLoginNotification_text__u7Wr5', loginButton: 'FreePlayerLoginNotification_loginButton__ogYTA' };
        },
        51027: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        51246: (e, t, a) => {
            'use strict';
            a.d(t, { MN: () => d, hg: () => c });
            var i,
                l = a(74631),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7742: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(8532),
                            r = i(a(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: a,
                                    likeControl: i,
                                    menuControl: o,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: p,
                                } = e,
                                v = d || a,
                                x = o || i;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(
                                    r.default.root,
                                    r.default.controls,
                                    { [r.default.controls_visible]: u },
                                    r.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: r.default.top, children: c }),
                                    (0, l.jsxs)('div', {
                                        className: (0, n.clsx)(r.default.bottom, m),
                                        children: [
                                            v && (0, l.jsxs)('div', { className: r.default.bottom_left, children: [d, a] }),
                                            x && (0, l.jsxs)('div', { className: r.default.bottom_right, children: [o, i] }),
                                        ],
                                    }),
                                    !!p && (0, l.jsx)(s.Label, { className: r.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = a(4377),
                            n = a(810),
                            s = a(5881),
                            r = a(8903),
                            o = a(6530),
                            c = i(a(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: a,
                                    className: i,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: p,
                                    children: v,
                                    srTitle: x,
                                    wrapperClassName: y,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, s.clsx)(c.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(o.SROnly, { children: null != x ? x : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: a }),
                                        (0, l.jsxs)('div', {
                                            className: (0, s.clsx)(c.default.wrapper, y),
                                            children: [
                                                p,
                                                (0, l.jsxs)('div', {
                                                    className: (0, s.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(r.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        v,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(8903),
                            r = i(a(4353));
                        t.Label = (e) => {
                            let { children: t, className: a, size: i = 's', ...o } = e;
                            return (0, l.jsx)(s.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, n.clsx)(r.default.root, a),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = a(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                c = (0, n.clsx)(r.default.root, { [r.default.focusable]: a }, t);
                            return (0, s.isValidElement)(i)
                                ? (0, s.cloneElement)(i, { ...o, className: (0, n.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...o, children: i });
                        };
                    },
                    6530: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = a(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(5987),
                            o = i(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: i = 'text', size: s = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(r.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_'.concat(i, '_').concat(s)], o.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, s.forwardRef)((e, a) => (0, l.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    1641: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(5987),
                            o = i(a(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: i = 'bold', size: s = 's', className: c, children: d, ...u } = e;
                            return (0, l.jsx)(r.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_size_'.concat(s)], o.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, s.forwardRef)((e, a) => (0, l.jsx)(t.HeadingComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(61));
                        function o(e) {
                            let { forwardRef: t, style: a, className: i, children: s, variant: o, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof s ? s : void 0;
                            return (0, l.jsx)(o, {
                                style: { ...a, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    r.default.root,
                                    { [r.default.root_clamp]: c && c > 0, [r.default.root_clamp_oneline]: c && 1 === c, [r.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: s,
                            });
                        }
                        ((t.TypographyComponent = o), (t.Typography = (0, s.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = a(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = a(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function r(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0));
                var e = r(7093);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = r(7742);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = o.kk,
                d = o.m7;
            o.X$;
        },
        52512: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(74631),
                l = a(3669),
                n = a(13232);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, i.useRef)(null),
                    r = (0, l.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    d = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, a ? l : void 0) : r(i, l), t && c.unobserveElement(o));
                        },
                        [e, c, o, r, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, r],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        52527: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => s });
            var i = a(49337),
                l = a(96618),
                n = a(21213);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, n.e)(e, 0.8, a) };
            };
        },
        53050: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
        },
        53214: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        55317: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
        },
        55652: (e) => {
            e.exports = {
                root: 'TopSectionRUWithBenefits_root__wF1_n',
                main: 'TopSectionRUWithBenefits_main__0igzf',
                logo: 'TopSectionRUWithBenefits_logo__PbF2i',
                moreInfoChildren: 'TopSectionRUWithBenefits_moreInfoChildren__9OEAu',
                title: 'TopSectionRUWithBenefits_title__pXmdX',
                benefits: 'TopSectionRUWithBenefits_benefits__GweJJ',
                benefit: 'TopSectionRUWithBenefits_benefit__12ENa',
                benefit_recommendation: 'TopSectionRUWithBenefits_benefit_recommendation__PMApk',
                benefitLogo: 'TopSectionRUWithBenefits_benefitLogo__ntii8',
                benefitLabelDesktop: 'TopSectionRUWithBenefits_benefitLabelDesktop__eITJ5',
                benefitLabelMobile: 'TopSectionRUWithBenefits_benefitLabelMobile__ndVcr',
                buySubscriptionBlock: 'TopSectionRUWithBenefits_buySubscriptionBlock___AM6p',
                goHomeLink: 'TopSectionRUWithBenefits_goHomeLink__EJjJD',
            };
        },
        55656: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        56088: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        56412: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => b });
            var i = a(25839),
                l = a(82298),
                n = a(88204),
                s = a(74631),
                r = a(8487),
                o = a(61493),
                c = a(71035),
                d = a(4071),
                u = a(4254),
                _ = a(36484),
                m = a(62562),
                p = a(21784),
                v = a(53712),
                x = a(85686),
                y = a(12929),
                h = a(95067),
                C = a(97522),
                g = a(71472),
                A = a.n(g);
            let f = {
                    [y.n.ALBUM]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [y.n.PODCAST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [y.n.ARTIST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [y.n.TRACK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [y.n.AUDIOBOOK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [y.n.CLIP]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                b = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: g, className: b } = e,
                        j = null != n ? n : null == a ? void 0 : a.modalData,
                        N = (0, p.W)(),
                        T = (0, x.Z)(v.Z.main.href),
                        S = (0, m.N)().get(_.U2),
                        I = (0, c.c)(() => {
                            if (g) return g();
                            (N.canBack && N.back(), T());
                        }),
                        k = (null == j || null == (t = j.details) ? void 0 : t.url) && j.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(h.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? S.set(h.c.ExEx, [...t, n], { expires: new Date(l) }) : S.set(h.c.ExEx, [n], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), N.canBack && N.back(), T()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let M = (0, s.useMemo)(() => {
                            if (j) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: j.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: j.description,
                                        }),
                                        k &&
                                            (0, i.jsx)(C.N, {
                                                href: null == (e = j.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = j.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [j, k]),
                        P = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === y.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(r.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && f[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(r.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, I, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(A().root, b),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: A().container, children: [M, P] }),
                    });
                });
        },
        56761: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
            };
        },
        56778: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = (e) => (e ? e.replace('-', '_') : null);
        },
        57160: (e) => {
            e.exports = { topSection: 'PaywallBYMobile_topSection__sQ_sw' };
        },
        57963: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        58586: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        60564: (e) => {
            e.exports = { root: 'DisclaimerModal_root__l96Bq', overlay: 'DisclaimerModal_overlay__5w3NO', content: 'DisclaimerModal_content__rPx5x' };
        },
        60795: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
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
        61561: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(27954),
                l = a(44806);
            let n = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = s.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61777: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => h });
            var i = a(74631),
                l = a(67379),
                n = a(17850),
                s = a(59450),
                r = a(49656),
                o = a(84e3),
                c = a(58069),
                d = a(20258),
                u = a(26742),
                _ = a(25195),
                m = a(37314),
                p = a(97952),
                v = a(10764),
                x = a(72594);
            let y = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                h = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, s.st)(),
                        a = (0, o.U)(),
                        { hash: h } = (0, s.gf)(),
                        { pageId: C } = (0, p.$)(),
                        { tabId: g, tabPos: A, isTabSelectedByDefault: f } = (0, x.R)(),
                        { offsetBlockPosY: b } = (0, _.u)(),
                        { blockId: j, blockType: N, blockPosX: T, blockPosY: S, mainObjectType: I, mainObjectId: k, objectsCount: L } = (0, u.N)(),
                        { filterKey: E, filterValue: M, filterPos: P } = (0, m.G)(),
                        { skeleton: O } = (0, v.b)(),
                        w = (0, r.L)(() => (void 0 !== b && void 0 !== S ? b + S : S));
                    return (0, i.useCallback)(() => {
                        if (!t || !C || !d.xK.includes(C) || !y.includes(C) || e.current) return;
                        let i = { hash: h, pageId: c.F[C], entityType: N, entityId: j, entityPosX: T, entityPosY: w, objectsCount: L };
                        (void 0 !== E && ((i.filterKey = E), (i.filterValue = M), (i.filterPos = P)),
                            d.qG.includes(C) && ((i.tabId = g), (i.tabPos = A), (i.isTabSelectedByDefault = f)),
                            O && (i.skeletonId = O),
                            k && I && ((i.mainObjectType = I), (i.mainObjectId = k)));
                        let s = (0, l.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, C, h, N, j, T, w, E, M, P, L, O, k, I, a, g, A, f]);
                };
        },
        61801: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var i = a(25839),
                l = a(82298),
                n = a(88204),
                s = a(61493),
                r = a(4550),
                o = a(4254),
                c = a(27954),
                d = a(49438),
                u = a(74987),
                _ = a(14927),
                m = a.n(_);
            let p = (0, n.PA)((e) => {
                let { className: t, track: a, position: n, onPlayButtonClick: _, isPlaying: p, isCurrent: v, withDislikeStyles: x = !0, isLoading: y } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(t, m().root, {
                        [m().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: a.isDisliked && x,
                        [m().root_current]: v,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !y && (0, i.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    y && h && (0, i.jsx)(r.y, { size: 'xs', className: m().spinner }),
                                    !h &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': s.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        62661: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(25839),
                l = a(82298),
                n = a(66738),
                s = a(28257),
                r = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, l.$)(r().root, { [r().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        63919: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        63944: (e) => {
            e.exports = { root: 'MoreInfoLink_root___TgXc', content: 'MoreInfoLink_content__Rjqj_' };
        },
        64003: (e) => {
            e.exports = {
                root: 'PaywallModal_root__HIYOy',
                header: 'PaywallModal_header__3oCYF',
                closeButton: 'PaywallModal_closeButton__rkLNM',
                content: 'PaywallModal_content__mVxnz',
            };
        },
        64595: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        64813: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        65568: (e) => {
            e.exports = {
                root: 'TrackComplaintModal_root__vMG5q',
                root_mobile: 'TrackComplaintModal_root_mobile__B470z',
                content: 'TrackComplaintModal_content__kFsQz',
                iframe: 'TrackComplaintModal_iframe__qp1Jv',
            };
        },
        66900: (e) => {
            e.exports = {
                cover: 'FreePlayerPlusNotification_cover__UiPL1',
                important: 'FreePlayerPlusNotification_important__ybkIx',
                icon: 'FreePlayerPlusNotification_icon__8kTww',
                text: 'FreePlayerPlusNotification_text__BMu7d',
                tryButton: 'FreePlayerPlusNotification_tryButton__DNc4D',
            };
        },
        66922: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        67117: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        67369: (e) => {
            e.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        67764: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
        67882: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        69248: (e) => {
            e.exports = { root: 'PaywallRU_root__X8j2f' };
        },
        70038: (e) => {
            e.exports = {
                root: 'TrackLyricsModal_root__KsVRf',
                header: 'TrackLyricsModal_header__nWar3',
                modalContent: 'TrackLyricsModal_modalContent__uYdL2',
                content: 'TrackLyricsModal_content__Cstzi',
                explicitMark: 'TrackLyricsModal_explicitMark__eL04d',
                important: 'TrackLyricsModal_important__0Ie9h',
                version: 'TrackLyricsModal_version__l9sxZ',
                overlay: 'TrackLyricsModal_overlay__0Ehwu',
            };
        },
        70453: (e) => {
            e.exports = {
                root: 'MainSectionMobile_root__l2R5l',
                headingContainer: 'MainSectionMobile_headingContainer__6mJvx',
                contentContainer: 'MainSectionMobile_contentContainer__vmaD5',
            };
        },
        70632: (e) => {
            e.exports = { root: 'MainCardMobile_root__AXTwk', image: 'MainCardMobile_image__DZHrE', text: 'MainCardMobile_text__rli4d' };
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
        71672: (e) => {
            e.exports = {
                root: 'MainCardDesktop_root__qa00U',
                root_horizontal: 'MainCardDesktop_root_horizontal__Fy_E0',
                textContainer: 'MainCardDesktop_textContainer__mzWGu',
                imageContainer: 'MainCardDesktop_imageContainer__81MQy',
                image: 'MainCardDesktop_image__nUJz3',
                root_vertical: 'MainCardDesktop_root_vertical__KGeJ2',
                imageContainer_align_center: 'MainCardDesktop_imageContainer_align_center__kEU_O',
                imageContainer_align_right: 'MainCardDesktop_imageContainer_align_right__T12Qo',
                text: 'MainCardDesktop_text__omw7l',
            };
        },
        71996: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(25839),
                l = a(74631),
                n = a(39004),
                s = a(61493),
                r = a(4071),
                o = a(66738),
                c = a(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: v,
                            forwardRef: x,
                            style: y,
                            children: h,
                        } = e,
                        { formatMessage: C } = (0, n.A)(),
                        g = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(r.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: y,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: h,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        73208: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        73809: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        73998: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
            };
        },
        74060: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        74454: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        74570: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        74756: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => w });
            var i = a(25839),
                l = a(82298),
                n = a(88204),
                s = a(74631),
                r = a(39004),
                o = a(8487),
                c = a(36619),
                d = a(61493),
                u = a(71035),
                _ = a(66738),
                m = a(3392),
                p = a(4254),
                v = a(17545),
                x = a(4071);
            let y = (e) => {
                let { className: t, variant: a = 'text', onClick: l, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: m } = (0, r.A)(),
                    p = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    v = (0, s.useCallback)(
                        (e) => {
                            (null == l || l(), e.stopPropagation());
                        },
                        [l],
                    );
                return (0, i.jsx)(x.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, i.jsx)(_.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var h = a(79367),
                C = a(34159),
                g = a(68215),
                A = a(85743),
                f = a(27954),
                b = a(64720),
                j = a(71996),
                N = a(6304),
                T = a(38097),
                S = a(91907),
                I = a(3407),
                k = a(34826),
                L = a.n(k),
                E = a(82684),
                M = a(85957),
                P = a.n(M);
            let O = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, r.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(E.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                w = (0, n.PA)((e) => {
                    var t, a;
                    let {
                            className: n,
                            track: x,
                            withLightning: k,
                            ignoreDislikedStyles: E,
                            onLikeClick: M,
                            utmLink: P,
                            withSecondaryColor: w,
                            handleRemove: R,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: U,
                        } = e,
                        { user: z, trailer: W } = (0, f.g)(),
                        { formatMessage: K } = (0, r.A)(),
                        { sendLikeSearchFeedback: H } = (0, A.z)(),
                        [V, Y] = (0, s.useState)(!1),
                        [q, Q] = (0, s.useState)(!1),
                        $ = (0, h.P)(),
                        G = (0, v.K)(x),
                        Z = ((e) =>
                            'number' != typeof e
                                ? null
                                : ((e) => {
                                      let t = Math.round((e || 0) / T.k7);
                                      return (0, S.E)(t);
                                  })(e))(x.durationMs),
                        X = (0, g.P)(Math.round((null != (a = x.durationMs) ? a : 0) / 1e3)),
                        J = (0, C.F)(),
                        ee = z.hasPlus,
                        et = !x.isRemoved && x.isAvailable && !U,
                        ea = (0, u.c)(async () => {
                            (V || x.isLiked || (Y(!0), null == H || H()), await G(), null == M || M(x.isLiked));
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        el = (0, u.c)((e) => {
                            if ((e.stopPropagation(), $())) return void e.preventDefault();
                            (W.openTrackTrailer(x.id), J(c.DomainObjectType.Track, x.id));
                        }),
                        en = (0, s.useMemo)(() => {
                            if (et)
                                return (0, i.jsx)('div', {
                                    onClick: ei,
                                    children: (0, i.jsx)(I._, {
                                        track: x,
                                        open: q,
                                        onOpenChange: Q,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, l.$)(L().contextMenu, { [L().contextMenu_visible]: q }),
                                        handleRemove: R,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, R, q, et, D, x, P]);
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(L().root, L().controls, n, {
                            [L().controls_dislikedControls]: x.isDisliked,
                            [L().controls_dislikedColors]: x.isDisliked && !E,
                            [L().controls_disabled]: !x.isAvailable,
                            [L().root_withSecondaryColor]: w,
                        }),
                        children: [
                            k &&
                                (0, i.jsx)(_.I, {
                                    'aria-label': K({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: L().lightning,
                                    variant: 'lightning',
                                }),
                            x.isUGC &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(_.I, {
                                            'aria-label': K({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            ee && (0, i.jsx)('div', { className: (0, l.$)(L().item, L().downloadIcon), children: (0, i.jsx)(O, { track: x }) }),
                            R && !U && (0, i.jsx)(y, { size: 'xs', iconSize: 'xxs', className: (0, l.$)(L().item, L().removeButton), onClick: R, ariaLabel: F }),
                            et &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, l.$)(L().item, L().likeIcon),
                                        isLiked: x.isLiked,
                                        onClick: ea,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = x.trailer) ? void 0 : t.isAvailable) &&
                                x.isAvailable &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(j.k, {
                                        className: (0, l.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: el,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    null !== Z &&
                                        (0, i.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, l.$)(L().duration, { [L().duration_hidden]: q && et }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: Z }),
                                        }),
                                    en,
                                ],
                            }),
                        ],
                    });
                });
        },
        75173: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        75470: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        75568: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(47127),
                l = a(61399);
            let n = (e) => {
                var t, a, n, s, r;
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
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (r = e.trailer) ? void 0 : r.isAvailable) },
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
        77718: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        77777: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        77896: (e) => {
            e.exports = {
                root: 'TopSectionRUFamilyOffer_root__ttMJK',
                main: 'TopSectionRUFamilyOffer_main___eUj8',
                logo: 'TopSectionRUFamilyOffer_logo__p5tOO',
                logoWrap: 'TopSectionRUFamilyOffer_logoWrap__6UZ9F',
                moreInfoChildren: 'TopSectionRUFamilyOffer_moreInfoChildren__R1KUC',
                title: 'TopSectionRUFamilyOffer_title__ZQb6e',
                subtitle: 'TopSectionRUFamilyOffer_subtitle__kADi2',
                video: 'TopSectionRUFamilyOffer_video__qI7Fa',
                buySubscriptionBlock: 'TopSectionRUFamilyOffer_buySubscriptionBlock___9pDB',
                textBlock: 'TopSectionRUFamilyOffer_textBlock__O_tTl',
                goHomeLink: 'TopSectionRUFamilyOffer_goHomeLink__dMPtg',
            };
        },
        78159: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    n = 'PT';
                return (a > 0 && (n += ''.concat(a, 'H')), i > 0 && (n += ''.concat(i, 'M')), (l > 0 || 'PT' === n) && (n += ''.concat(l, 'S')), n);
            };
        },
        78574: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        79240: (e) => {
            e.exports = {
                imageContainer: 'MultivibeInviteModal_imageContainer__PYWbp',
                multivibeCover: 'MultivibeInviteModal_multivibeCover__CCkS0',
                multivibeAvatar: 'MultivibeInviteModal_multivibeAvatar__kBvGN',
                multivibeControl: 'MultivibeInviteModal_multivibeControl__hoO93',
                guestAvatar: 'MultivibeInviteModal_guestAvatar__pIobb',
                spinnerWrapper: 'MultivibeInviteModal_spinnerWrapper__KyeNf',
            };
        },
        80986: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(25839),
                l = a(82298),
                n = a(74631),
                s = a(61493),
                r = a(9911),
                o = a(4071),
                c = a(66738),
                d = a(37922),
                u = a.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: p = 'xxxs',
                        buttonVariant: v = 'outline',
                    } = e,
                    { swipeBackward: x, swipeForward: y, shouldBackwardButtonBeDisabled: h, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, r.Y)(t),
                    A = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    ),
                    f = (0, n.useCallback)(
                        (e) => {
                            (y(), e.stopPropagation());
                        },
                        [y],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, a, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: A,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: h,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: f,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        81022: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => s });
            var i = a(49337),
                l = a(96618),
                n = a(21213);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, n.e)(e, 0.8, a) };
            };
        },
        81466: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        82410: (e) => {
            e.exports = {
                title: 'OtherServicesSectionDesktop_title__TmiIR',
                content_ru: 'OtherServicesSectionDesktop_content_ru__tShm1',
                content_by: 'OtherServicesSectionDesktop_content_by__GAt4T',
                card: 'OtherServicesSectionDesktop_card__HqmGz',
                logo_ru: 'OtherServicesSectionDesktop_logo_ru__tox8Q',
                logo_en: 'OtherServicesSectionDesktop_logo_en__xuJro',
            };
        },
        82928: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        83031: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            var i = (function (e) {
                return ((e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e);
            })({});
        },
        84044: (e) => {
            e.exports = {
                root: 'PaywallFooter_root__L_WxQ',
                link: 'PaywallFooter_link__rbIbe',
                important: 'PaywallFooter_important__bAbYb',
                list: 'PaywallFooter_list__WeuCr',
                list_primary: 'PaywallFooter_list_primary__A6hNR',
                list_secondary: 'PaywallFooter_list_secondary__QH2qi',
                item: 'PaywallFooter_item__4rY_9',
                ageRestriction: 'PaywallFooter_ageRestriction__bOKoH',
            };
        },
        84111: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l });
            var i = a(35955);
            let l = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let a = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    l = (0, i.z)(a, t);
                return { clipIds: a, activeClipIndex: l };
            };
        },
        84652: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(22939);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
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
        85957: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        86152: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => l });
            var i = a(22939);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        86806: (e) => {
            e.exports = {
                content_ru: 'BooksSectionMobile_content_ru__xiiQh',
                content_by: 'BooksSectionMobile_content_by__t_UNK',
                card: 'BooksSectionMobile_card__t6bb7',
                logo_ru: 'BooksSectionMobile_logo_ru__cnYJJ',
                logo_en: 'BooksSectionMobile_logo_en__wcgiD',
            };
        },
        87148: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        87968: (e) => {
            e.exports = { topSection: 'PaywallBYDesktop_topSection__AS3Pv' };
        },
        88191: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        88245: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        88293: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        88353: (e) => {
            e.exports = { root: 'PaywallOtherDesktop_root__c19Ht', topSection: 'PaywallOtherDesktop_topSection__d1CVV' };
        },
        88375: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => c });
            var i = a(25839),
                l = a(82298),
                n = a(89288),
                s = a(4254),
                r = a(88293),
                o = a.n(r);
            let c = (e) => {
                let { title: t, className: a, titleClassName: r, infoDescription: c, ...d } = e;
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(o().root, a),
                    ...(0, n.OZ)(d),
                    children: [t && (0, i.jsx)(s.DZ, { variant: 'h4', className: (0, l.$)(o().infoTitle, r), children: t }), c],
                });
            };
        },
        88553: (e) => {
            e.exports = { root: 'PaywallFAQQuestion_root__pS9KT' };
        },
        88616: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
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
        88919: (e) => {
            e.exports = {
                root: 'PaywallFAQItem_root__008Hj',
                questionCollapse: 'PaywallFAQItem_questionCollapse__dN7g9',
                questionContainer: 'PaywallFAQItem_questionContainer__gOalt',
                answer: 'PaywallFAQItem_answer__mgvr2',
                answerContainer: 'PaywallFAQItem_answerContainer__z_P3g',
                answerContainer_enter: 'PaywallFAQItem_answerContainer_enter__zAisZ',
                answerContainer_enter_active: 'PaywallFAQItem_answerContainer_enter_active__N5iad',
                'animation-show': 'PaywallFAQItem_animation-show__YWHaS',
                answerContainer_exit: 'PaywallFAQItem_answerContainer_exit__y_3_j',
                answerContainer_exit_active: 'PaywallFAQItem_answerContainer_exit_active__IUs7C',
                'animation-hide': 'PaywallFAQItem_animation-hide__Eqrf5',
            };
        },
        89514: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        90804: (e) => {
            e.exports = {
                content_ru: 'PlusSectionDesktop_content_ru__85q1P',
                content_by: 'PlusSectionDesktop_content_by__UBg10',
                card: 'PlusSectionDesktop_card__h8LmR',
                logo_ru: 'PlusSectionDesktop_logo_ru__G2AkZ',
                logo_en: 'PlusSectionDesktop_logo_en__gn4qE',
            };
        },
        92158: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(22939);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        92403: (e) => {
            e.exports = {
                root: 'TopSectionDesktop_root__lDNkV',
                wrapper: 'TopSectionDesktop_wrapper__sEPZr',
                content: 'TopSectionDesktop_content__356Uk',
                title: 'TopSectionDesktop_title__JFo6R',
                label: 'TopSectionDesktop_label__JmilG',
                buySubscriptionBlock: 'TopSectionDesktop_buySubscriptionBlock__dhv3Z',
            };
        },
        93314: (e) => {
            e.exports = {
                root: 'PlusModalLogoBlock_root__cKh28',
                icon: 'PlusModalLogoBlock_icon__fMixB',
                icon_ru: 'PlusModalLogoBlock_icon_ru__JAn4U',
                icon_en: 'PlusModalLogoBlock_icon_en__OmrOY',
            };
        },
        93537: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionMobile_content_ru__CCtkX',
                content_by: 'KinopoiskSectionMobile_content_by__XjQaB',
                card1: 'KinopoiskSectionMobile_card1__JCIyK',
                card2: 'KinopoiskSectionMobile_card2__jTtnr',
                card3: 'KinopoiskSectionMobile_card3__wTJCh',
                card4: 'KinopoiskSectionMobile_card4__wi_RO',
                card4_by: 'KinopoiskSectionMobile_card4_by__8ehWE',
                logo_ru: 'KinopoiskSectionMobile_logo_ru__8alc5',
                logo_en: 'KinopoiskSectionMobile_logo_en__A673z',
            };
        },
        93580: (e) => {
            e.exports = {
                root: 'TopSectionRU_root__DP9u2',
                main: 'TopSectionRU_main__PbltM',
                logo: 'TopSectionRU_logo__LgT8M',
                moreInfoChildren: 'TopSectionRU_moreInfoChildren__d82Ha',
                title: 'TopSectionRU_title__csPE2',
                services: 'TopSectionRU_services__cmjFp',
                service: 'TopSectionRU_service__Q0dCS',
                serviceLogo: 'TopSectionRU_serviceLogo___Xpo_',
                serviceLabel: 'TopSectionRU_serviceLabel__Q3O8n',
                buySubscriptionBlock: 'TopSectionRU_buySubscriptionBlock__VBGT5',
                goHomeLink: 'TopSectionRU_goHomeLink__zWv2w',
            };
        },
        95048: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        95486: (e) => {
            e.exports = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
        },
        95924: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => g });
            var i = a(25839),
                l = a(88204),
                n = a(74631),
                s = a(39004),
                r = a(8487),
                o = a(68934),
                c = a(4071),
                d = a(66738),
                u = a(3392),
                _ = a(4254),
                m = a(89192),
                p = a(91062),
                v = a(8900),
                x = a(75167),
                y = a(28664),
                h = a.n(y);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, l.PA)((e) => {
                    let { children: t, customMessage: a, shouldForceOpenTooltip: l } = e,
                        { formatMessage: y } = (0, s.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: A } = (0, x.w)(),
                        [f, b] = (0, o.d)(),
                        j = (0, v.z)({ id: p.h.TRAILER_BUTTON, ref: f }) || !!l,
                        [N, T] = (0, n.useState)(j),
                        S = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), T(!1), A(!1));
                            },
                            [A],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                e || S();
                            },
                            [S],
                        );
                    return (0, i.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: N,
                        onOpenChange: I,
                        enableAriaDescribedby: !0,
                        referenceRef: b,
                        children: [
                            t,
                            (0, i.jsxs)(u.ZI, {
                                className: h().root,
                                rootNode: g,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        icon: (0, i.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: S,
                                        variant: 'text',
                                        className: h().close,
                                        withRipple: !1,
                                        'aria-label': y({ id: 'interface-actions.close' }),
                                    }),
                                    (0, i.jsx)(_.HL, {
                                        variant: 'span',
                                        className: h().text,
                                        children: a || (0, i.jsx)(r.A, { id: 'onboarding.trailer', values: { br: (0, i.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        96856: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        97748: (e) => {
            e.exports = {
                root: 'ArtistAboutModal_root__bmUo9',
                modalContent: 'ArtistAboutModal_modalContent__RGkJk',
                header: 'ArtistAboutModal_header__yLnAj',
                overlay: 'ArtistAboutModal_overlay__6hToT',
                closeButton: 'ArtistAboutModal_closeButton__Gnz25',
            };
        },
        97805: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => v });
            var i = a(25839),
                l = a(3718),
                n = a(82298),
                s = a(74631),
                r = a(39004),
                o = a(23976),
                c = a(47399),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: l } = (0, r.A)(),
                    c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var _ = a(64813),
                m = a.n(_);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: l } = (0, r.A)(),
                        c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(m().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: m().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                v = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case l.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case l.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        98234: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        98242: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        99521: (e) => {
            e.exports = {
                root: 'TopSectionMobile_root__bl_XJ',
                image: 'TopSectionMobile_image__t_hCH',
                content: 'TopSectionMobile_content__sqstr',
                title: 'TopSectionMobile_title__O_Zx0',
                buySubscriptionBlock: 'TopSectionMobile_buySubscriptionBlock__NSVnY',
                moreInfoLink: 'TopSectionMobile_moreInfoLink__zjcOO',
            };
        },
    },
]);
