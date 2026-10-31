(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7722],
    {
        324: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(28166);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        1917: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageHeader_root__0Wxyx',
                container: 'ArtistFamiliarPageHeader_container__HFQzt',
                title: 'ArtistFamiliarPageHeader_title__YpVQg',
                tabs: 'ArtistFamiliarPageHeader_tabs__CrnJC',
                tab: 'ArtistFamiliarPageHeader_tab__RK4OK',
                tabsShimmer: 'ArtistFamiliarPageHeader_tabsShimmer__cbLvV',
                tabShimmer: 'ArtistFamiliarPageHeader_tabShimmer__iLiqI',
                staticHeader: 'ArtistFamiliarPageHeader_staticHeader__LrzR8',
                important: 'ArtistFamiliarPageHeader_important__buc81',
                stickyHeader: 'ArtistFamiliarPageHeader_stickyHeader__u7JdF',
            };
        },
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var i = a(28166),
                r = a(77863);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        2350: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
            };
        },
        9184: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        10679: (e) => {
            e.exports = {
                root: 'ArtistFamiliarPageContent_root__0Mc9t',
                scrollContainer: 'ArtistFamiliarPageContent_scrollContainer__TD6Kj',
                important: 'ArtistFamiliarPageContent_important__o2KTP',
                content: 'ArtistFamiliarPageContent_content__QquDA',
                block: 'ArtistFamiliarPageContent_block__Cr2H_',
                blockHeader: 'ArtistFamiliarPageContent_blockHeader__Z_uvq',
                tracksBlock: 'ArtistFamiliarPageContent_tracksBlock__SCCLT',
                footer: 'ArtistFamiliarPageContent_footer__nveR8',
                item: 'ArtistFamiliarPageContent_item__fyC2q',
                shimmerTitle: 'ArtistFamiliarPageContent_shimmerTitle__WU3vH',
            };
        },
        10829: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(17392),
                o = a(34126),
                c = a(39079),
                d = a(72288),
                u = a(39267),
                m = a(13619),
                _ = a(73805),
                h = a(15232),
                p = a(56712),
                g = a(26243),
                x = a.n(g);
            let v = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: C,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: y,
                        withTrailer: N = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: j,
                        hideControls: L,
                    } = e,
                    S = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: E },
                    } = (0, d.g)(),
                    I = (0, o.X)(a.trackSource, { isMobile: E }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: x().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(p.C, {
                    className: (0, r.$)(g, { [x().trackWithDots]: v, [x().important]: v }),
                    track: a,
                    beforeBlock: v ? (0, i.jsx)(m.O, { className: (0, r.$)(x().dots, C), isDragging: f }) : void 0,
                    meta: (0, i.jsx)(h.j, { withArtistLink: I, beforeTitle: T, track: a, ignoreDislikedStyles: b, withSecondaryColor: k }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(_.Q, {
                        track: a,
                        className: x().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: y,
                        withTrailer: N,
                        removeButtonAriaLabel: j,
                        hideControls: L,
                    }),
                    ...S,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        11006: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        12518: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 59687));
        },
        12526: (e, t, a) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r));
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    r = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let n = r.toString();
                return ''.concat(a).concat(n ? '?'.concat(n) : '');
            };
        },
        13619: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(88800),
                r = a(65724),
                n = a(52300),
                s = a(30907),
                l = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        13797: (e) => {
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
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(53548);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => N });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(58390),
                c = a(17392),
                d = a(79070),
                u = a(17610),
                m = a(29504),
                _ = a(13946),
                h = a(55693),
                p = a(72288),
                g = a(24548),
                x = a(85587),
                v = a(90224),
                f = a(91292),
                C = a(7608),
                b = a(6667),
                k = a(85463),
                A = a(65462),
                y = a.n(A);
            let N = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: A,
                        withExplicitMark: N,
                        withSecondaryColor: T,
                        captionSize: j = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: E,
                        artistsClassName: I,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: M,
                        withArtistLink: D,
                        variant: B,
                        withTrackLink: F,
                        afterTitle: U,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: z } = (0, h.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: $,
                    } = (0, p.g)(),
                    K = (0, b.$)({ withCustomTooltip: w }),
                    G = (0, o.useSearchParams)(),
                    X = (0, C.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        albumArtists: A,
                        withTrackLink: F,
                        withArtistLink: D,
                        variant: B,
                        withExplicitMark: N,
                        query: P ? Object.fromEntries(G) : void 0,
                    }),
                    {
                        displayTitle: V,
                        ariaLabel: Z,
                        tooltipText: q,
                        titleAttribute: J,
                        versionTitleAttribute: Q,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var r, n;
                        let { canEnableCustomTooltip: s, isMobile: l } = a,
                            o = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            c = t.shouldShowRemovedTitle ? o : ''.concat(o, ' ').concat(null != (r = t.version) ? r : ''),
                            d = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: o,
                            ariaLabel: ''.concat(d, ' ').concat(null != (n = e.version) ? n : ''),
                            tooltipText: c,
                            isTooltipEnabled: s && !l,
                            titleAttribute: !s && (t.shouldShowRemovedTitle || t.link) ? c : void 0,
                            versionTitleAttribute: s ? void 0 : t.version,
                        };
                    })(n, X, { canEnableCustomTooltip: K, isMobile: Y }, W),
                    et = (0, k.O)({ track: n, onNavigate: z, withSavingQueryParams: P, entityType: x.n.TRACK }),
                    ea = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: q,
                                hoverSettings: g.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(y().text, y().title),
                                    type: 'entity',
                                    size: j,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: V,
                                }),
                            }),
                        [j, V, q, ee],
                    ),
                    ei = (0, d.L)(() =>
                        X.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: q,
                                  hoverSettings: g.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(y().text, y().title),
                                      type: 'entity',
                                      size: j,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: V,
                                  }),
                              })
                            : X.link
                              ? (0, i.jsx)(f.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: X.link.href,
                                    'aria-label': Z,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, s.useMemo)(() => +!!R, [R]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(y().root, { [y().root_disabled]: !n.isAvailable, [y().root_disliked]: n.isDisliked && !O, [y().root_withSecondaryColor]: T }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(y().titleContainer, { [y().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(y().text, E),
                                        type: 'entity',
                                        size: j,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            ei,
                                            X.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: j,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', X.version],
                                                }),
                                        ],
                                    }),
                                    X.explicitMark &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: L,
                                            variant: X.explicitMark,
                                            className: y().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            X.artists.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(y().text, { [y().artists]: R }, I, E),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, r.$)(y().text, y().link),
                                    captionClassName: (0, r.$)(y().text, y().artistCaption),
                                    artists: X.artists,
                                    withLink: X.withArtistLink,
                                    lineClamp: er,
                                    captionSize: j,
                                    withContextMenu: H,
                                }),
                        ],
                    }),
                });
            });
        },
        18452: (e) => {
            e.exports = { shimmer: 'TracksList_shimmer__jD4N4' };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => A });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                m = a(4086),
                _ = a(41928),
                h = a(46422),
                p = a(4370),
                g = a(78940),
                x = a(85587),
                v = a(15253),
                f = a(91292),
                C = a(28806),
                b = a.n(C);
            let k = {
                    [x.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                A = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: C, className: A } = e,
                        y = null != n ? n : null == a ? void 0 : a.modalData,
                        N = (0, h.W)(),
                        T = (0, g.Z)(p.Z.main.href),
                        j = (0, _.N)().get(m.U2),
                        L = (0, c.c)(() => {
                            if (C) return C();
                            (N.canBack && N.back(), T());
                        }),
                        S = (null == y || null == (t = y.details) ? void 0 : t.url) && y.details.text,
                        E = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = j.get(v.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? j.set(v.c.ExEx, [...t, n], { expires: new Date(r) }) : j.set(v.c.ExEx, [n], { expires: new Date(r) }),
                                null == C || C(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == C || C(), N.canBack && N.back(), T()) : null == C || C(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (y) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(b().title, b().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: y.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: y.description,
                                        }),
                                        S &&
                                            (0, i.jsx)(f.N, {
                                                href: null == (e = y.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = y.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [y, S]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && k[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: L,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [E, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, L, I],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(b().root, A),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: b().container, children: [O, w] }),
                    });
                });
        },
        21424: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        26243: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        26835: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        27157: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        27342: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var i = a(53548);
            let r = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28806: (e) => {
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
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var i = a(35396);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => h });
            var i = a(53548),
                r = a(58390),
                n = a(51611),
                s = a(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = a(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var d = a(88349),
                u = a(91241);
            let m = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                _ = (e) => {
                    let { title: t, description: a, openGraph: i } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = m('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (i) {
                        let e = 'string' == typeof i.title ? i.title : '',
                            t = 'string' == typeof i.description ? i.description : '',
                            a = Array.isArray(i.images) ? i.images[0] : null;
                        r = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let n = m('property', 'og:title'),
                            s = m('property', 'og:description'),
                            l = m('property', 'og:image');
                        (n.setAttribute('content', e),
                            s.setAttribute('content', t),
                            l.setAttribute('content', r),
                            window.document.head.appendChild(n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l));
                    }
                },
                h = (e) => {
                    let { language: t } = (0, n.h)(),
                        a = (0, s.U)(),
                        l = (0, r.usePathname)(),
                        o = (0, r.useSearchParams)().toString();
                    (0, i.useEffect)(() => {
                        if (!e) return;
                        let i = !0,
                            r = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            n = window.location.pathname + window.location.search,
                            s = () => i && n === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(r);
                                    if (!s() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(r)).title;
                                    s() && _({ ...t, title: a });
                                } catch (e) {
                                    if (!s()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        s() && _(e);
                                    } catch (e) {
                                        s() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                i = !1;
                            }
                        );
                    }, [e, t, a, l, o]);
                };
        },
        30907: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => I });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(88969);
            a(30282);
            var c = a(96817),
                d = a(52300),
                u = a(29504),
                m = a(78793),
                _ = a(92716),
                h = a(99984),
                p = a(90780),
                g = a(65523),
                x = a(14518),
                v = a(44230),
                f = a(4370),
                C = a(72288),
                b = a(97956),
                k = a(56248),
                A = a(90688),
                y = a(78940);
            let N = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = a(96856),
                j = a.n(T);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { slam: s } = (0, C.g)(),
                    { contentRef: l } = (0, v.g)(),
                    d = (0, y.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(j().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(k.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(j().navigation, { [j().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(j().content, { [j().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(A._V, { className: j().image, src: N.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                s.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: j().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = a(9184),
                E = a.n(S);
            let I = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { formatMessage: A } = (0, l.A)(),
                    y = (0, s.useContext)(C.P),
                    N = null == y ? void 0 : y.experiments.checkExperiment(b.z.WebNextUnstableMusicScreen, 'on'),
                    T = A(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: i } = (0, x.$)(),
                        r = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, h.z5)(t.evgenInstance, n);
                    }, [t, e, a, i, r]);
                })(T);
                let { sendRefreshEvent: j } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, x.$)(),
                            i = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        (j(), (window.location.href = f.Z.main.href));
                    }, [j]),
                    { contentRef: I } = (0, v.g)();
                return N
                    ? (0, i.jsx)(L, { className: t, withBackwardControl: a, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(E().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(E().navigation, { [E().navigation_desktop]: !I }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(E().content, { [E().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(E().title, E().important), variant: 'h3', size: 'xs', children: T }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(E().text, E().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: S,
                                          className: E().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33586: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i = a(88800),
                r = a(53548),
                n = a(12241);
            let s = (e) => {
                let { sourceContextData: t, children: a } = e,
                    s = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(n.l.Provider, { value: s, children: a });
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { C: () => n }),
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
            let r = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && r.has(e);
        },
        35962: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            var i = a(88800),
                r = a(37770);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, a) => (0, i.jsx)(r.V, { ...e }, a));
            };
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        45383: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(67174);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var a = arguments.length, n = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46511: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var i = a(27794),
                r = a(53548),
                n = a(72542),
                s = a(83602),
                l = a(21424),
                o = a(95330);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(n.pE[n.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        46646: (e, t, a) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r));
        },
        47580: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (e) => e.map((e) => e.name).join(', ');
        },
        47934: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => f });
            var i = a(88800),
                r = a(65724),
                n = a(53548),
                s = a(35412),
                l = a(92716),
                o = a(79070),
                c = a(53323),
                d = a(19994),
                u = a(34500),
                m = a(77948),
                _ = a(18486),
                h = a(31764),
                p = a(35962),
                g = a(2350),
                x = a.n(g);
            let v = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: a,
                            isShimmerVisible: g,
                            isShimmerActive: v,
                            isShimmerWithSubcover: f,
                            isShimmerCentered: C,
                            isShimmerRounded: b,
                            title: k,
                            description: A,
                            coverUrl: y,
                            viewAllActionLink: N,
                            titleChildren: T,
                            headerChildren: j,
                            children: L,
                            className: S,
                            containerClassName: E,
                            headerClassName: I,
                            itemClassName: O,
                            showHeaderShimmer: w = !1,
                            showShimmerInfo: R = !0,
                            showControls: P = !0,
                            headingRef: M,
                            headingVariant: D,
                            customShimmer: B,
                            ...F
                        } = e,
                        U = (0, n.useId)(),
                        H = (0, n.useRef)(null),
                        { objectsCount: W } = (0, u.N)(),
                        z = (0, n.useMemo)(
                            () =>
                                w && g
                                    ? (0, i.jsx)('div', { className: I, children: (0, i.jsx)(d.W, { isActive: v, className: x().shimmerTitle, radius: 'l' }) })
                                    : k || A || T || j
                                      ? (0, i.jsx)(m.B, {
                                            objectType: l.DomainObjectType.Shortcut,
                                            objectId: String(N),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != W ? W : 0,
                                            children: (0, i.jsx)(_.T, {
                                                className: I,
                                                labeledForId: U,
                                                title: k,
                                                description: A,
                                                coverUrl: y,
                                                viewAllActionLink: N,
                                                controls: P && (0, i.jsx)(h.X, { className: x().controls, carouselRef: H }),
                                                headingRef: M,
                                                headingVariant: D,
                                                withDescription: !!A,
                                                titleChildren: T,
                                                children: j,
                                            }),
                                        })
                                      : void 0,
                            [y, A, I, M, D, U, v, g, W, P, w, k, T, j, N],
                        ),
                        Y = (0, o.L)(() => B || (0, p.k)({ className: a, isActive: v, withInfo: R, withSubcover: f, centered: C, round: b }));
                    return (0, i.jsxs)('section', {
                        ref: t,
                        className: (0, r.$)(x().root, S),
                        ...(0, s.OZ)(F),
                        children: [
                            z,
                            (0, i.jsx)(c.F, {
                                className: E,
                                ref: H,
                                itemClassName: (0, r.$)(x().item, x().important, O),
                                'aria-labelledby': ''.concat(U, ' ').concat(U, '-description'),
                                children: g ? Y : L,
                            }),
                        ],
                    });
                },
                f = (0, n.forwardRef)((e, t) => (0, i.jsx)(v, { forwardRef: t, ...e }));
        },
        52559: (e) => {
            e.exports = { root: 'ArtistFamiliarPageEmpty_root__s5xX9', icon: 'ArtistFamiliarPageEmpty_icon__b7kR5', title: 'ArtistFamiliarPageEmpty_title__wvBGS' };
        },
        53073: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        56712: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => A });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(29993),
                o = a(52073),
                c = a(5407),
                d = a(76675),
                u = a(28830),
                m = a(9618),
                _ = a(4795),
                h = a(55693),
                p = a(7123),
                g = a(72288),
                x = a(8990),
                v = a(2058),
                f = a(47580),
                C = a(95993),
                b = a(27157),
                k = a.n(b);
            let A = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: b,
                        beforeBlock: A,
                        controls: y,
                        playButtonCellRender: N,
                        withLightning: T,
                        isPlaying: j,
                        isCurrent: L,
                        togglePlay: S,
                        restartPlay: E,
                        onPlayClick: I,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: M } = (0, m.q)(),
                    {
                        track: D,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: W },
                    } = (0, g.g)(),
                    { ref: z, intersectionPropertyId: Y } = (0, u.n)(),
                    $ = (0, d.b)(),
                    K = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, v.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: r } = t,
                                n = (0, f.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: T, track: n }),
                    X = ((e) => {
                        let { sonataState: t } = (0, g.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    V = H(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    Z = n.isAvailable && P && !V,
                    q = (0, _.N)(),
                    J = n.isAvailable && q && !V && !w,
                    Q = (0, C.w)({ track: n, callback: S }),
                    ee = (0, l.c)(() => {
                        D.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    et = (0, C.w)({ track: n, callback: ee }),
                    { sendPlaySearchFeedback: ea } = (0, h.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    en = (0, l.c)(() => {
                        if (!K()) {
                            if (Z) return void M();
                            if (J) return void W.open();
                            (ei || j || (er(!0), null == ea || ea()), Q(), $(!j), null == I || I(!j));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (j) return void E();
                        en();
                    }),
                    el = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (P && n.isAvailableOnlyForPlus && M(), q && n.isAvailableOnlyForPlus && W.open());
                            return;
                        }
                        if (Z) return void M();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return J && !t
                            ? void W.open()
                            : ((0, o.P)(e, k().ripple), F)
                              ? void en()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (et(), J && W.open()));
                    }),
                    eo = null == N ? void 0 : N({ onPlayButtonClick: en, isPlaying: j, isCurrent: L, isLoading: X, playButtonIconSize: O });
                return (0, i.jsxs)(x.C, {
                    ref: z,
                    'aria-label': G,
                    'data-intersection-property-id': Y,
                    onClick: el,
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_current]: L && F }, a),
                    ...R,
                    children: [A, eo, b, y],
                });
            });
        },
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var i = a(35412),
                r = a(83602);
            function n(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, i.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        59687: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => eP }));
            var i = a(88800),
                r = a(58390),
                n = a(84961),
                s = a(53548),
                l = a(17392),
                o = a(98225),
                c = a(32596),
                d = a(69630),
                u = a(91959),
                m = a(64284),
                _ = a(12816),
                h = a(82204),
                p = a(59844),
                g = a(44230),
                x = a(37670),
                v = a(72288),
                f = a(78180),
                C = a(34303),
                b = a(19998),
                k = a(81685),
                A = a(30144),
                y = a(324),
                N = a(53073),
                T = a(83418),
                j = a(46511),
                L = a(57297),
                S = a(2218),
                E = a(77863),
                I = a(45383);
            async function O(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, j.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, L.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, T.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, S.H)({ cardType: E.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, N.k)(),
                    appLinks: (0, y.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, I.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var w = (function (e) {
                    return ((e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e);
                })({}),
                R = a(27342),
                P = a(63512),
                M = a(99625),
                D = a.n(M),
                B = a(65724),
                F = a(2058),
                U = a(20584),
                H = a(18593),
                W = a(59758),
                z = a(66719),
                Y = a(19994),
                $ = a(10079),
                K = a(10829),
                G = a(84384),
                X = a(33586),
                V = a(98644),
                Z = a(18486),
                q = a(47934),
                J = a(86790),
                Q = a(60266),
                ee = a(35412),
                et = a(93015),
                ea = a(18452),
                ei = a.n(ea);
            let er = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: a }, (a, r) => (0, i.jsx)(et.D, { variant: t, className: ei().shimmer, isActive: e }, r));
                },
                en = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: a, variant: r, shimmersCount: n, className: s, children: l, ...o } = e;
                    return (0, i.jsx)('div', { className: (0, B.$)(ei().root, s), ...(0, ee.OZ)(o), children: t ? er(a, r, n) : l });
                };
            var es = a(93039);
            let el = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, s.useMemo)(() => (t ? (0, es.t)({ contextType: H.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var eo = a(88969),
                ec = a(29504),
                ed = a(46422),
                eu = a(63807),
                em = a(56248),
                e_ = a(87366),
                eh = a(76099),
                ep = a(29993),
                eg = a(12533),
                ex = a(14912);
            let ev = (e) => {
                let t = (0, ex.X)(),
                    a = (0, r.useSearchParams)();
                return (0, ep.c)((i) => {
                    var r;
                    let n = new URLSearchParams(a);
                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                        case w.COLLECTION:
                            (n.set(C.K.TAB, f.J.COLLECTION), t((0, eg.C)(window.location.pathname, n)));
                            break;
                        case w.VIBE:
                            (n.set(C.K.TAB, f.J.VIBE), t((0, eg.C)(window.location.pathname, n)));
                    }
                });
            };
            var ef = a(1917),
                eC = a.n(ef);
            let eb = () =>
                    (0, i.jsxs)('div', {
                        className: eC().tabsShimmer,
                        children: [(0, i.jsx)(Y.W, { className: eC().tabShimmer }), (0, i.jsx)(Y.W, { className: eC().tabShimmer })],
                    }),
                ek = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        o = (0, ed.W)(),
                        { isScrolling: c } = (0, s.useContext)(eu.B),
                        d = ev(t);
                    return (0, i.jsxs)('header', {
                        className: eC().root,
                        'aria-hidden': c,
                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: eC().container,
                                children: [
                                    o.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !c }),
                                    (0, i.jsx)(ec.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: eC().title,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(eo.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(eh.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(eb, {}),
                                className: eC().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: d,
                                children: [
                                    (0, i.jsx)(e_.o, {
                                        className: eC().tab,
                                        value: w.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                    (0, i.jsx)(e_.o, {
                                        className: eC().tab,
                                        value: w.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': c,
                                        tabIndex: c ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eA = a(10679),
                ey = a.n(eA);
            let eN = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: r, tabElementId: n, artistId: c } = e,
                        { artist: d } = (0, v.g)(),
                        { formatMessage: u } = (0, F.A)(),
                        { from: m } = (0, G.f)(),
                        _ = el({ artistId: c, entityContextType: U.h.ARTIST_MY_COLLECTION }),
                        h = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: H.K.Various,
                                    meta: { id: String(c) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(c)],
                                    overrideContextType: W.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: d.familiarSubpage.collectionEntitiesData,
                            }),
                            [d.familiarSubpage.collectionEntitiesData, c, m],
                        ),
                        p = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: d.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: V.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ey().block, ey().tracksBlock),
                                children:
                                    null == (e = d.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(K.K, { track: e, playContextParams: h(e, t) }, e.id)),
                            });
                        }, [d.familiarSubpage.collectionTracks, d.familiarSubpage.isLoading, h]),
                        g = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks)
                                return d.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, B.$)(ey().block, ey().blockHeader),
                                          children: (0, i.jsx)(Y.W, { isActive: d.familiarSubpage.isLoading, className: ey().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(Z.T, { className: (0, B.$)(ey().block, ey().blockHeader), title: u({ id: 'entity-names.tracks' }) });
                        }, [d.familiarSubpage.isLoading, d.familiarSubpage.shouldShowTitleBlocks, u]),
                        x = (0, s.useMemo)(() => {
                            if (d.familiarSubpage.shouldShowTitleBlocks) return u({ id: 'entity-names.albums' });
                        }, [d.familiarSubpage.shouldShowTitleBlocks, u]);
                    return (0, i.jsx)(X._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)(z.N, {
                            className: ey().root,
                            containerClassName: (0, B.$)(ey().scrollContainer, ey().important),
                            ref: a,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, i.jsx)(ek, { tabsState: r, tabElementId: n }),
                                (0, i.jsxs)(o.Kp, {
                                    value: r.value,
                                    name: w.COLLECTION,
                                    elementId: n,
                                    className: ey().content,
                                    children: [
                                        (0, i.jsxs)('section', { 'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [g, p] }),
                                        (0, i.jsx)(q.O, {
                                            isShimmerVisible: d.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: ey().blockHeader,
                                            containerClassName: ey().block,
                                            title: x,
                                            showHeaderShimmer: d.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = d.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)($.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(Q.A, { children: (0, i.jsx)(J.w, { className: ey().footer }) }),
                            ],
                        }),
                    });
                }),
                eT = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: r, artistId: n } = e,
                        { artist: c } = (0, v.g)(),
                        { from: d } = (0, G.f)(),
                        u = el({ artistId: n, entityContextType: U.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: H.K.Various,
                                    meta: { id: String(n) },
                                    from: d,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: W.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: c.familiarSubpage.vibeEntitiesData,
                            }),
                            [c.familiarSubpage.vibeEntitiesData, n, d],
                        ),
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(en, {
                                isShimmerVisible: c.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: V.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, B.$)(ey().block, ey().tracksBlock),
                                children:
                                    null == (e = c.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)(K.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [c.familiarSubpage.isLoading, c.familiarSubpage.vibeTracks, m]);
                    return (0, i.jsx)(X._, {
                        sourceContextData: u,
                        children: (0, i.jsxs)(z.N, {
                            className: ey().root,
                            containerClassName: (0, B.$)(ey().scrollContainer, ey().important),
                            ref: t,
                            'data-test-id': l.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, i.jsx)(ek, { tabsState: a, tabElementId: r }),
                                (0, i.jsx)(o.Kp, { value: a.value, name: w.VIBE, elementId: r, className: ey().content, children: _ }),
                                (0, i.jsx)(Q.A, { children: (0, i.jsx)(J.w, { className: ey().footer }) }),
                            ],
                        }),
                    });
                });
            var ej = a(52300),
                eL = a(52559),
                eS = a.n(eL);
            let eE = (e) => {
                let { tabsState: t, tabElementId: a } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case w.COLLECTION:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case w.VIBE:
                                return (0, i.jsx)(eo.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(ek, { tabsState: t, tabElementId: a }),
                        (0, i.jsxs)('div', {
                            className: eS().root,
                            children: [
                                (0, i.jsx)(ej.I, { className: eS().icon, variant: 'attention', size: 'xxxl' }),
                                (0, i.jsx)(ec.DZ, { className: eS().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var eI = a(93317);
            let eO = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, v.g)(),
                        { formatMessage: n } = (0, F.A)(),
                        { isScrolling: o } = (0, s.useContext)(eu.B),
                        c = (0, ed.W)(),
                        d = ev(t);
                    return (0, i.jsx)(eI.Y, {
                        variant: eI.V.COMPOSITE,
                        staticClassName: (0, B.$)(eC().staticHeader, eC().important),
                        'aria-hidden': !o,
                        stickyClassName: (0, B.$)(eC().stickyHeader, eC().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: eC().container,
                            'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE_STICKY_HEADER,
                            children: [
                                c.canBack && (0, i.jsx)(em.L, { withForwardControl: !1, withBackwardControl: c.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(eh.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(eb, {}),
                                    className: eC().tabs,
                                    elementId: a,
                                    onTabChange: d,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(e_.o, {
                                            className: eC().tab,
                                            value: w.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                        (0, i.jsx)(e_.o, {
                                            className: eC().tab,
                                            value: w.VIBE,
                                            title: n({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !o,
                                            tabIndex: o ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ew = (0, n.PA)((e) => {
                    var t, a, n;
                    let { artistId: y, preloadedArtist: N, preloadedFamiliar: T } = e,
                        j = (0, r.useSearchParams)(),
                        { artist: L, disclaimerModalState: S } = (0, v.g)(),
                        { contentScrollRef: E, setContentScrollRef: I } = (0, g.g)(),
                        M = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (j.get(C.K.TAB)) {
                                case f.J.COLLECTION:
                                    break;
                                case f.J.VIBE:
                                    return w.VIBE;
                            }
                            return w.COLLECTION;
                        }, [j]),
                        F = (0, o.zb)(B),
                        U = (0, u.S)({ artist: null == (t = L.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    ((0, P.G)(y),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = L.meta) ? void 0 : e.artist.isUnsafeLegal) && U();
                        }, [null == (a = L.meta) ? void 0 : a.artist.isUnsafeLegal, U]),
                        (0, R._)(L, y),
                        (0, s.useEffect)(
                            () => () => {
                                L.familiarSubpage.reset();
                            },
                            [L],
                        ),
                        (0, x.J)(L.familiarSubpage.isResolved),
                        L.familiarSubpage.isNotFound && (0, r.notFound)());
                    let H = (0, s.useMemo)(() => {
                            switch (F.value) {
                                case w.COLLECTION:
                                    if (L.familiarSubpage.isResolved && !L.familiarSubpage.hasCollectionEntities)
                                        return (0, i.jsx)(eE, { tabsState: F, tabElementId: M });
                                    return (0, i.jsx)(eN, { tabsState: F, forwardRef: I, tabElementId: M, artistId: y });
                                case w.VIBE:
                                    if (L.familiarSubpage.isResolved && !L.familiarSubpage.hasVibeTracks) return (0, i.jsx)(eE, { tabsState: F, tabElementId: M });
                                    return (0, i.jsx)(eT, { tabsState: F, forwardRef: I, tabElementId: M, artistId: y });
                            }
                        }, [L.familiarSubpage.hasCollectionEntities, L.familiarSubpage.hasVibeTracks, L.familiarSubpage.isResolved, y, I, M, F]),
                        W = [];
                    return (L.familiarSubpage.isNeededToLoad && W.push(L.familiarSubpage.getData({ preloadedFamiliar: T, artistId: y })),
                    L.infoLoadingState.isNeededToLoad && W.push(L.getInfo({ artistId: y, preloadedArtist: N })),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: a } = (0, v.g)(),
                            i = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            r = null == e ? void 0 : e.infoLoadingState.isLoading,
                            n = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, s.useCallback)((e) => (n ? {} : i && !r ? O({ artist: (0, k.E)(i) }, e) : void 0), [i, r, n]);
                        (0, A.C)(a.modal.isOpened ? null : l);
                    })(L),
                    W.length && (0, s.use)(Promise.allSettled(W)),
                    L.familiarSubpage.isRejected && !L.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(c.SomethingWentWrong, {})
                        : (null == (n = L.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, i.jsx)(b.M, { modalState: S })
                          : (0, i.jsx)(p.n, {
                                pageId: _._Q.FAMILIAR_YOU,
                                pageEntityId: y,
                                children: (0, i.jsx)(d.h, {
                                    scrollElement: E,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: D().root,
                                        'data-test-id': l.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [(0, i.jsx)(eO, { tabElementId: M, tabsState: F }), (0, i.jsx)(h.F, { blockIdForFrom: m.U.DEFAULT, children: H })],
                                    }),
                                }),
                            });
                });
            var eR = a(21438);
            let eP = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, eR.L)(e)) || (0, r.notFound)(), (0, i.jsx)(ew, { artistId: e }));
            };
        },
        59758: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(i || (i = {})));
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var i = a(88800);
            a(30282);
            var r = a(11006),
                n = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        63512: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var i = a(53548),
                r = a(94144),
                n = a(67174);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        72542: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => n, cy: () => r, pE: () => i });
            let i = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                n = 'ru-RU';
        },
        73805: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => R });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(92716),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                m = a(17610),
                _ = a(29504),
                h = a(42174),
                p = a(96817);
            let g = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    h = null != m ? m : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(p.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': h,
                    onClick: g,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var x = a(5407),
                v = a(25557),
                f = a(55693),
                C = a(72288),
                b = a(49738),
                k = a(56446),
                A = a(64546),
                y = a(29831),
                N = a(30123),
                T = a(54965),
                j = a(1829),
                L = a(82092),
                S = a.n(L),
                E = a(79262),
                I = a(41867),
                O = a.n(I);
            let w = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(E.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: p,
                            ignoreDislikedStyles: L,
                            onLikeClick: E,
                            utmLink: I,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: P = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, C.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: W } = (0, f.z)(),
                        [z, Y] = (0, s.useState)(!1),
                        [$, K] = (0, s.useState)(!1),
                        G = (0, x.P)(),
                        X = (0, h.K)(n),
                        {
                            duration: V,
                            lightning: Z,
                            ugc: q,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / N.k7);
                                              return (0, T.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, y.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: p, isUGC: n.isUGC }, H),
                        J = (0, v.F)(),
                        Q = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (z || n.isLiked || (Y(!0), null == W || W()), await X(), null == E || E(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), J(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(j._, {
                                        track: n,
                                        open: $,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: I,
                                        className: (0, r.$)(S().contextMenu, { [S().contextMenu_visible]: $ }),
                                        handleRemove: R,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, R, $, ee, P, n, I]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(S().root, S().controls, a, {
                            [S().controls_dislikedControls]: n.isDisliked,
                            [S().controls_dislikedColors]: n.isDisliked && !L,
                            [S().controls_disabled]: !n.isAvailable,
                            [S().root_withSecondaryColor]: O,
                        }),
                        children: [
                            Z && (0, i.jsx)(u.I, { 'aria-label': Z.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            q &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': q.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: q.label }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, r.$)(S().item, S().downloadIcon), children: (0, i.jsx)(w, { track: n }) }),
                            R && !B && (0, i.jsx)(g, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(S().item, S().removeButton), onClick: R, ariaLabel: D }),
                            ee &&
                                (0, i.jsx)(A.WithOffline, {
                                    fallback: (0, i.jsx)(b.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, r.$)(S().item, S().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(A.WithOffline, {
                                    fallback: (0, i.jsx)(k.k, {
                                        className: (0, r.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== V &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(S().duration, { [S().duration_hidden]: $ && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': V.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: V.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        77948: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var i = a(88800),
                r = a(53548),
                n = a(90134);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, l, o, c, d, u],
                    );
                return (0, i.jsx)(n.l.Provider, { value: _, children: m });
            };
        },
        78180: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var i = (function (e) {
                return ((e.COLLECTION = 'collection'), (e.VIBE = 'vibe'), e);
            })({});
        },
        81685: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var i = a(29201);
            let r = (e) => {
                var t, a;
                return e
                    ? {
                          id: Number(e.id),
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
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        82092: (e) => {
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
        82204: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => s });
            var i = a(88800),
                r = a(53548),
                n = a(43620);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: a,
                        blockIdForFrom: s,
                        blockPosX: l,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    h = (0, r.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: a,
                            blockIdForFrom: s,
                            blockPosX: l,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, a, s, l, o, c, d, u, _],
                    );
                return (0, i.jsx)(n.p.Provider, { value: h, children: m });
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function i(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => i });
        },
        83602: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var i = a(9519),
                r = a(72542),
                n = a(21424),
                s = a(4653);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = a(95330);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, i;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => N });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(2058),
                l = a(30282),
                o = a(94144),
                c = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, i, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, i, a) },
                    };
                };
            var m = a(62293),
                _ = a(99839);
            let h = (e) => e(new Date(), (0, _.m)());
            var p = a(51611),
                g = a(72288),
                x = a(11006),
                v = a.n(x),
                f = a(17392),
                C = a(29504),
                b = a(91292);
            let k = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(b.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(b.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, i.jsx)(b.N, { target: '_blank', href: r, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, i.jsx)(A, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(k, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: n, language: l, tld: a.tld, year: h(r) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let N = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: _, user: x } = (0, g.g)(),
                    { formatDate: f, formatMessage: C } = (0, s.A)(),
                    { isEnabled: b } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, p.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    _ = [s, o, u];
                                return (a && 'ru' === n && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: h(f),
                    });
                return (0, i.jsx)(y, { className: (0, r.$)({ [v().root_withOffsetForDeeplink]: b }, a), data: A });
            });
        },
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            let i = 'ru';
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var i = a(58217);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        93015: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => p });
            var i = a(88800),
                r = a(98644),
                n = a(65724),
                s = a(53548),
                l = a(2058),
                o = a(19994),
                c = a(13797),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
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
            var m = a(26835),
                _ = a.n(m);
            let h = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(h, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => n });
            var i = a(53548);
            let r = (0, i.createContext)(null),
                n = () => (0, i.useContext)(r);
        },
        95330: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var i = a(39499),
                r = a(72542);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        95993: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(58217),
                r = a(85587);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        99625: (e) => {
            e.exports = { root: 'ArtistFamiliarPage_root__9Zjo0' };
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                8752, 7435, 7617, 5864, 5108, 8380, 127, 1931, 1191, 4596, 3637, 7759, 5083, 4427, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 1151,
                4732, 1195, 1598, 6281, 1928, 7627, 9124, 7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 9425, 4322, 763, 2670, 7358,
            ],
            () => e((e.s = 12518)),
        ),
            (_N_E = e.O()));
    },
]);
