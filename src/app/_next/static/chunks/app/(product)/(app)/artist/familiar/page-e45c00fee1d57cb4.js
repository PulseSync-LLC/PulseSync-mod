(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7722, 9202],
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
        7833: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => c });
            var i = a(88800),
                r = a(53548),
                n = a(63582),
                s = a(99875),
                l = a(66109),
                o = a(245);
            let c = (0, n.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: a, objectPosY: n, objectType: c }) => {
                    let d = (0, o.N)(),
                        u = (0, r.useContext)(s.p)?.loadedSession,
                        m = [c, t, a, n].join(':'),
                        [p, h] = (0, r.useState)(() => ({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() }));
                    (p.client !== d || p.identity !== m || p.blockSession !== u) &&
                        h({ client: d, identity: m, blockSession: u, viewSession: d.createBlockViewSession() });
                    let g = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: a, objectPosY: n, objectType: c }, viewSession: p.viewSession }),
                        [t, a, n, c, p.viewSession],
                    );
                    return (0, i.jsx)(l.l, { value: g, children: e });
                },
            );
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
            a.d(t, { K: () => f });
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
                p = a(73805),
                h = a(15232),
                g = a(56712),
                _ = a(26243),
                v = a.n(_);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: n,
                        className: _,
                        withDNDBlock: f,
                        isDragging: b,
                        draggingClassName: x,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: k,
                        handleRemove: C,
                        withDislike: A,
                        withTrailer: T = !0,
                        beforeTitle: E,
                        removeButtonAriaLabel: S,
                        hideControls: I,
                    } = e,
                    N = (0, c.D)({ playContextParams: n, entityId: a.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, d.g)(),
                    j = (0, o.X)(a.trackSource, { isMobile: L }),
                    O = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(g.C, {
                    className: (0, r.$)(_, { [v().trackWithDots]: f, [v().important]: f }),
                    track: a,
                    beforeBlock: f ? (0, i.jsx)(m.O, { className: (0, r.$)(v().dots, x), isDragging: b }) : void 0,
                    meta: (0, i.jsx)(h.j, { withArtistLink: j, beforeTitle: E, track: a, ignoreDislikedStyles: y, withSecondaryColor: k }),
                    playButtonCellRender: O,
                    controls: (0, i.jsx)(p.Q, {
                        track: a,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: C,
                        withDislike: A,
                        withTrailer: T,
                        removeButtonAriaLabel: S,
                        hideControls: I,
                    }),
                    ...N,
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
        14567: (e, t) => {
            (e.exports = function (e, t, i, r) {
                return JSON.stringify(e, a(t, r), i);
            }).getSerialize = a;
            function a(e, t) {
                var a = [],
                    i = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return a[0] === t ? '[Circular ~]' : '[Circular ~.' + i.slice(0, a.indexOf(t)).join('.') + ']';
                        }),
                    function (r, n) {
                        if (a.length > 0) {
                            var s = a.indexOf(this);
                            (~s ? a.splice(s + 1) : a.push(this), ~s ? i.splice(s, 1 / 0, r) : i.push(r), ~a.indexOf(n) && (n = t.call(this, r, n)));
                        } else a.push(n);
                        return null == e ? n : e.call(this, r, n);
                    }
                );
            }
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
            a.d(t, { j: () => T });
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
                p = a(13946),
                h = a(55693),
                g = a(72288),
                _ = a(24548),
                v = a(85587),
                f = a(90224),
                b = a(91292),
                x = a(7608),
                y = a(6667),
                k = a(85463),
                C = a(65462),
                A = a.n(C);
            let T = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: n,
                        albumArtists: C,
                        withExplicitMark: T,
                        withSecondaryColor: E,
                        captionSize: S = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: L,
                        artistsClassName: j,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: P,
                        beforeTitle: D,
                        withArtistLink: M,
                        variant: B,
                        withTrackLink: F,
                        afterTitle: U,
                        withContextMenuArtists: H,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, h.z)(),
                    {
                        settings: { isMobile: Y },
                        slam: G,
                    } = (0, g.g)(),
                    V = (0, y.$)({ withCustomTooltip: w }),
                    K = (0, o.useSearchParams)(),
                    $ = (0, x.B)(n, {
                        isMobile: Y,
                        isOfflineModeEnabled: G.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: F,
                        withArtistLink: M,
                        variant: B,
                        withExplicitMark: T,
                        query: P ? Object.fromEntries(K) : void 0,
                    }),
                    {
                        displayTitle: X,
                        ariaLabel: q,
                        tooltipText: Z,
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
                    })(n, $, { canEnableCustomTooltip: V, isMobile: Y }, z),
                    et = (0, k.O)({ track: n, onNavigate: W, withSavingQueryParams: P, entityType: v.n.TRACK }),
                    ea = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: Z,
                                hoverSettings: _.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(A().text, A().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: X,
                                }),
                            }),
                        [S, X, Z, ee],
                    ),
                    ei = (0, d.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: Z,
                                  hoverSettings: _.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(A().text, A().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: J,
                                      children: X,
                                  }),
                              })
                            : $.link
                              ? (0, i.jsx)(b.N, {
                                    onClick: et,
                                    className: A().albumLink,
                                    href: $.link.href,
                                    'aria-label': q,
                                    title: J,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': c.Kq.track.TRACK_TITLE }),
                    ),
                    er = (0, s.useMemo)(() => +!!R, [R]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_disliked]: n.isDisliked && !O, [A().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: A().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(A().titleContainer, { [A().titleContainer_withVersion]: n.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(A().text, L),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            ei,
                                            $.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(A().text, A().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Q,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, i.jsx)(f.N, {
                                            containerClassName: A().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: I,
                                            variant: $.explicitMark,
                                            className: A().explicitMark,
                                            trackId: n.id,
                                        }),
                                    U,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, i.jsx)(p.i, {
                                    className: (0, r.$)(A().text, { [A().artists]: R }, j, L),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(A().text, A().link),
                                    captionClassName: (0, r.$)(A().text, A().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: er,
                                    captionSize: S,
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
            a.d(t, { M: () => C });
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
                p = a(41928),
                h = a(46422),
                g = a(4370),
                _ = a(78940),
                v = a(85587),
                f = a(15253),
                b = a(91292),
                x = a(28806),
                y = a.n(x);
            let k = {
                    [v.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: x, className: C } = e,
                        A = null != n ? n : null == a ? void 0 : a.modalData,
                        T = (0, h.W)(),
                        E = (0, _.Z)(g.Z.main.href),
                        S = (0, p.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (x) return x();
                            (T.canBack && T.back(), E());
                        }),
                        N = (null == A || null == (t = A.details) ? void 0 : t.url) && A.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(f.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? S.set(f.c.ExEx, [...t, n], { expires: new Date(r) }) : S.set(f.c.ExEx, [n], { expires: new Date(r) }),
                                null == x || x(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        j = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == x || x(), T.canBack && T.back(), E()) : null == x || x(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (A) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(y().title, y().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: A.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: y().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: A.description,
                                        }),
                                        N &&
                                            (0, i.jsx)(b.N, {
                                                href: null == (e = A.details) ? void 0 : e.url,
                                                className: y().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = A.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [A, N]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === v.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: y().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: j,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: y().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && k[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: y().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: y().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, I, j],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(y().root, C),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: y().container, children: [O, w] }),
                    });
                });
        },
        20775: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var i = a(62837);
            let r = (e, t) => !e && !!(t && (0, i.Ve)(t, i.Yw.MODAL));
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
        23877: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => r, c: () => i }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(i || (i = {})));
            let r = { [i.ERROR]: 'error', [i.WARNING]: 'warn', [i.INFO]: 'info', [i.DEBUG]: 'debug', [i.TRACE]: 'trace' };
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
        27794: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => b });
            var i,
                r,
                n = a(88092),
                s = a(68436);
            function l(e, t) {
                var a = t && t.cache ? t.cache : m,
                    i = t && t.serializer ? t.serializer : d;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var a,
                                  i,
                                  r = 1 === e.length ? o : c;
                              return ((a = t.cache.create()), (i = t.serializer), r.bind(this, e, a, i));
                          }
                )(e, { cache: a, serializer: i });
            }
            function o(e, t, a, i) {
                var r = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : a(i),
                    n = t.get(r);
                return (void 0 === n && ((n = e.call(this, i)), t.set(r, n)), n);
            }
            function c(e, t, a) {
                var i = Array.prototype.slice.call(arguments, 3),
                    r = a(i),
                    n = t.get(r);
                return (void 0 === n && ((n = e.apply(this, i)), t.set(r, n)), n);
            }
            var d = function () {
                return JSON.stringify(arguments);
            };
            function u() {
                this.cache = Object.create(null);
            }
            ((u.prototype.get = function (e) {
                return this.cache[e];
            }),
                (u.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new u();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var a, i;
                        return ((a = t.cache.create()), (i = t.serializer), c.bind(this, e, a, i));
                    },
                    monadic: function (e, t) {
                        var a, i;
                        return ((a = t.cache.create()), (i = t.serializer), o.bind(this, e, a, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var h = (function (e) {
                    function t(t, a, i) {
                        var r = e.call(this, t) || this;
                        return ((r.code = a), (r.originalMessage = i), r);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                g = (function (e) {
                    function t(t, a, r, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(a, '". Options are "').concat(Object.keys(r).join('", "'), '"'),
                                i.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h),
                _ = (function (e) {
                    function t(t, a, r) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(a), i.INVALID_VALUE, r) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h),
                v = (function (e) {
                    function t(t, a) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(a, '"'), i.MISSING_VALUE, a) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(h);
            function f(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, a) {
                                e[t] = a;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(r || (r = {}));
            var b = (function () {
                function e(t, a, o, c) {
                    var d,
                        u,
                        m = this;
                    if (
                        (void 0 === a && (a = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var a = t.reduce(function (e, t) {
                                return (e.length && t.type === r.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return a.length <= 1 ? a[0] || '' : a;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, a, n, l, o, c, d) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: r.literal, value: t[0].value }];
                                for (var u = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, s.isLiteralElement)(p)) {
                                        u.push({ type: r.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(p)) {
                                        'number' == typeof c && u.push({ type: r.literal, value: n.getNumberFormat(a).format(c) });
                                        continue;
                                    }
                                    var f = p.value;
                                    if (!(o && f in o)) throw new v(f, d);
                                    var b = o[f];
                                    if ((0, s.isArgumentElement)(p)) {
                                        ((b && 'string' != typeof b && 'number' != typeof b) || (b = 'string' == typeof b || 'number' == typeof b ? String(b) : ''),
                                            u.push({ type: 'string' == typeof b ? r.literal : r.object, value: b }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.date[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        u.push({ type: r.literal, value: n.getDateTimeFormat(a, x).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.time[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : l.time.medium;
                                        u.push({ type: r.literal, value: n.getDateTimeFormat(a, x).format(b) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(p)) {
                                        var x = 'string' == typeof p.style ? l.number[p.style] : (0, s.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (x && x.scale && (b *= x.scale || 1), u.push({ type: r.literal, value: n.getNumberFormat(a, x).format(b) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(p)) {
                                        var y = p.children,
                                            k = p.value,
                                            C = o[k];
                                        if ('function' != typeof C) throw new _(k, 'function', d);
                                        var A = C(
                                            e(y, a, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(A) || (A = [A]),
                                            u.push.apply(
                                                u,
                                                A.map(function (e) {
                                                    return { type: 'string' == typeof e ? r.literal : r.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(p)) {
                                        var T = p.options[b] || p.options.other;
                                        if (!T) throw new g(p.value, b, Object.keys(p.options), d);
                                        u.push.apply(u, e(T.value, a, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(p)) {
                                        var T = p.options['='.concat(b)];
                                        if (!T) {
                                            if (!Intl.PluralRules)
                                                throw new h(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    d,
                                                );
                                            var E = n.getPluralRules(a, { type: p.pluralType }).select(b - (p.offset || 0));
                                            T = p.options[E] || p.options.other;
                                        }
                                        if (!T) throw new g(p.value, b, Object.keys(p.options), d);
                                        u.push.apply(u, e(T.value, a, n, l, o, b - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return u.length < 2
                                    ? u
                                    : u.reduce(function (e, t) {
                                          var a = e[e.length - 1];
                                          return (a && a.type === r.literal && t.type === r.literal ? (a.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = a),
                        (this.resolvedLocale = e.resolveLocale(a)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var b = c || {},
                            x = (b.formatters, (0, n.__rest)(b, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, x), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((d = e.formats),
                        o
                            ? Object.keys(d).reduce(
                                  function (e, t) {
                                      var a, i;
                                      return (
                                          (e[t] =
                                              ((a = d[t]),
                                              (i = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, a || {}), i || {}),
                                                        Object.keys(a).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, a[t]), i[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : a)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, d),
                              )
                            : d)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (u = this.formatterCache) && (u = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], a = 0; a < arguments.length; a++) t[a] = arguments[a];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: f(u.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
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
                p = (e) => {
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
                                    s() && p({ ...t, title: a });
                                } catch (e) {
                                    if (!s()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        s() && p(e);
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
            a.d(t, { SomethingWentWrong: () => w });
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
                m = a(87999),
                p = a(47149),
                h = a(84423),
                g = a(89846),
                _ = a(64543),
                v = a(63582);
            let f = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, h.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, g.g)(),
                        { screen: i } = (0, _.j)();
                    return {
                        sendRefreshEvent: (0, s.useCallback)(() => {
                            if (!t || !a || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: m.ActionType.Refresh,
                                userInteractionType: m.UserInteractionType.Tap,
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: i.pageId,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, a, null == i ? void 0 : i.pageId]),
                    };
                }),
                b = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, h.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, g.g)(),
                        { screen: r } = (0, _.j)();
                    (0, s.useEffect)(() => {
                        if (!a || !i || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: m.EntityTypes.Error,
                            entityId: m.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: r.pageId,
                            pageStyle: m.PageStyles.Fullscreen,
                            pagePlacement: m.PagePlacements.Fullscreen,
                            mainObjectType: m.DomainObjectType.NonApplicable,
                            mainObjectId: m.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(a, t);
                    }, [a, e, i, null == r ? void 0 : r.pageId]);
                });
            var x = a(44230),
                y = a(4370),
                k = a(72288),
                C = a(97956),
                A = a(56248),
                T = a(90688),
                E = a(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = a(96856),
                N = a.n(I);
            let L = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { slam: s } = (0, k.g)(),
                    { contentRef: l } = (0, x.g)(),
                    d = (0, E.Z)(y.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(N().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(A.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(N().navigation, { [N().navigation_desktop]: !l }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(N().content, { [N().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(T._V, { className: N().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: N().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: N().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: N().text,
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
                                        className: N().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: N().buttonText,
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
            var j = a(9184),
                O = a.n(j);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: n } = e,
                    { formatMessage: m } = (0, l.A)(),
                    p = (0, s.useContext)(k.P),
                    h = null == p ? void 0 : p.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    g = m(h ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(g);
                let { sendRefreshEvent: _ } = f(),
                    v = (0, s.useCallback)(() => {
                        (_(), (window.location.href = y.Z.main.href));
                    }, [_]),
                    { contentRef: T } = (0, x.g)();
                return h
                    ? (0, i.jsx)(L, { className: t, withBackwardControl: a, onBack: n })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(A.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: g }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: v,
                                          className: O().button,
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
        37523: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => d });
            var i = a(88800),
                r = a(53548),
                n = a(63582),
                s = a(53534),
                l = a(99875),
                o = a(245);
            let c = (e, t, a) => {
                    let i = e.createBlockViewSession(),
                        r = !1;
                    return { claimLoadedSession: () => (r ? null : ((r = !0), i)), client: e, identity: t, loadedSession: i, screenSession: a };
                },
                d = (0, n.B)(
                    { kind: 'provider', requiredProps: ['blockId', 'blockType', 'blockPosX', 'blockPosY', 'objectsCount'], scope: 'block' },
                    ({ blockId: e, blockIdForFrom: t, blockPosX: a, blockPosY: n, blockType: d, children: u, objectsCount: m }) => {
                        let p = (0, o.N)(),
                            h = (0, r.useContext)(s.k)?.session,
                            g = [e, d, a, n].join(':'),
                            [_, v] = (0, r.useState)(() => c(p, g, h));
                        (_.client !== p || _.identity !== g || _.screenSession !== h) && v(c(p, g, h));
                        let f = (0, r.useMemo)(
                            () => ({
                                claimLoadedSession: _.claimLoadedSession,
                                loadedSession: _.loadedSession,
                                scope: { blockId: e, blockIdForFrom: t, blockPosX: a, blockPosY: n, blockType: d, objectsCount: m },
                            }),
                            [e, t, a, n, d, m, _.claimLoadedSession, _.loadedSession],
                        );
                        return (0, i.jsx)(l.p, { value: f, children: u });
                    },
                );
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        44084: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n });
            var i = a(23877),
                r = a(74021);
            class n extends r.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= i.c.INFO && this.logToConsole(i.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= i.c.DEBUG && this.logToConsole(i.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= i.c.TRACE && this.logToConsole(i.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= i.c.WARNING && this.logToConsole(i.c.WARNING, e, t), this.sendToErrorBooster(i.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= i.c.ERROR && this.logToConsole(i.c.ERROR, e, t), this.sendToErrorBooster(i.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(i.c.INFO, e, t);
                }
                logToConsole(e, t, a) {
                    if (this.disableLogToConsole) return;
                    let r = i.Q[e];
                    console[r](...this.formatMessage(e, t, a));
                }
                sendToErrorBooster(e, t, a) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: a ? this.obfuscateData({ ...this.additionalData, ...a }) : {} } });
                }
            }
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
        45700: (e, t) => {
            'use strict';
            var a, i;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(a || (t.TYPE = a = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(i || (t.SKELETON_TYPE = i = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === a.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === a.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === a.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === a.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === a.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === a.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === a.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === a.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === a.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: a.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: a.number, value: e, style: t };
                }));
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
        49784: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => o });
            var i = a(53548),
                r = a(63582),
                n = a(89846),
                s = a(245),
                l = a(22681);
            let o = (0, r.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block'] }, ({ enabled: e = !0 } = {}) => {
                let t = (0, i.useRef)(!1),
                    a = (0, s.N)(),
                    { hash: r } = (0, n.g)(),
                    o = (0, l.w)(),
                    c = (0, i.useMemo)(() => (o ? a.createBlockReporter(o.snapshot) : null), [a, o]);
                (0, i.useEffect)(() => {
                    e && o && c && !t.current && c.loaded({ objectsCount: o.snapshot.block.objectsCount, viewUuid: o.block.loadedSession.start() }) && (t.current = !0);
                }, [e, r, c, o]);
            });
        },
        51724: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => {
                var t, a, i, r, n, s;
                let l = null == (t = e.available) || t,
                    o = null != (a = e.disclaimers) ? a : [];
                return (
                    e.contentRestrictions &&
                        ((l = null == (n = null == (i = e.contentRestrictions) ? void 0 : i.available) || n),
                        (o = null != (s = null == (r = e.contentRestrictions) ? void 0 : r.disclaimers) ? s : [])),
                    { available: l, disclaimers: o }
                );
            };
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
            a.d(t, { C: () => C });
            var i = a(88800),
                r = a(65724),
                n = a(84961),
                s = a(53548),
                l = a(62414),
                o = a(33979),
                c = a(29993),
                d = a(52073),
                u = a(5407),
                m = a(9618),
                p = a(4795),
                h = a(55693),
                g = a(7123),
                _ = a(72288),
                v = a(8990),
                f = a(2058),
                b = a(47580),
                x = a(95993),
                y = a(27157),
                k = a.n(y);
            let C = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: y,
                        beforeBlock: C,
                        controls: A,
                        playButtonCellRender: T,
                        withLightning: E,
                        isPlaying: S,
                        isCurrent: I,
                        togglePlay: N,
                        restartPlay: L,
                        onPlayClick: j,
                        playButtonIconSize: O,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: P, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: B,
                        settings: { isMobile: F },
                        album: U,
                        albumCPA: { isPlusCPAPlayerBarEnabled: H },
                        paywall: { modal: z },
                    } = (0, _.g)(),
                    W = (0, l.D)(),
                    Y = (0, o.g)(),
                    G = (0, u.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, f.A)();
                        return ((e, t, a) => {
                            var i;
                            let { withLightning: r } = t,
                                n = (0, b.j)(null != (i = e.artists) ? i : []);
                            return e.isAvailable
                                ? [n, e.title, e.version, r && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                                : ''
                                      .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                      .concat(n, ' ')
                                      .concat(e.title);
                        })(t, { withLightning: a }, i);
                    })({ withLightning: E, track: n }),
                    K = ((e) => {
                        let { sonataState: t } = (0, _.g)(),
                            a = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    $ = H(U.id, null == (t = U.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && P && !$,
                    q = (0, p.N)(),
                    Z = n.isAvailable && q && !$ && !w,
                    J = (0, x.w)({ track: n, callback: N }),
                    Q = (0, c.c)(() => {
                        M.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, x.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, h.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    er = (0, c.c)(() => {
                        if (!G()) {
                            if (X) return void D();
                            if (Z) return void z.open();
                            (ea || S || (ei(!0), null == et || et()), J(), S || Y(), null == j || j(!S));
                        }
                    }),
                    en = (0, c.c)(() => {
                        if (S) return void L();
                        er();
                    }),
                    es = (0, c.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (P && n.isAvailableOnlyForPlus && D(), q && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (X) return void D();
                        let t = !F && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !B.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, d.P)(e, k().ripple), F)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !B.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    el = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: S, isCurrent: I, isLoading: K, playButtonIconSize: O });
                return (0, i.jsxs)(v.C, {
                    ref: W,
                    'aria-label': V,
                    onClick: es,
                    className: (0, r.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_current]: I && F }, a),
                    ...R,
                    children: [C, el, y, A],
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
            (a.r(t), a.d(t, { default: () => eM }));
            var i = a(88800),
                r = a(58390),
                n = a(84961),
                s = a(53548),
                l = a(87999),
                o = a(76903),
                c = a(37523),
                d = a(17392),
                u = a(98225),
                m = a(32596),
                p = a(69630),
                h = a(91959),
                g = a(64284),
                _ = a(98427),
                v = a(44230),
                f = a(37670),
                b = a(72288),
                x = a(78180),
                y = a(34303),
                k = a(19998),
                C = a(81685),
                A = a(30144),
                T = a(324),
                E = a(53073),
                S = a(83418),
                I = a(46511),
                N = a(57297),
                L = a(2218),
                j = a(77863),
                O = a(45383),
                w = a(98774);
            async function R(e, t) {
                var a, i, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, I.W)(t.locale),
                    s = n({ id: 'metadata.artist-familiar-you-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-familiar-you-description' }, { artistName: e.artist.name });
                return {
                    robots: (0, w.G)(e.artist),
                    title: s,
                    description: l,
                    openGraph: (0, N.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, S.v)({ host: t.host }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, L.H)({ cardType: j.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, E.k)(),
                    appLinks: (0, T.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, O.S)('/artist/:artistId/familiar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var P = (function (e) {
                    return ((e[(e.COLLECTION = 0)] = 'COLLECTION'), (e[(e.VIBE = 1)] = 'VIBE'), e);
                })({}),
                D = a(27342),
                M = a(63512),
                B = a(99625),
                F = a.n(B),
                U = a(65724),
                H = a(2058),
                z = a(20584),
                W = a(18593),
                Y = a(59758),
                G = a(66719),
                V = a(19994),
                K = a(10079),
                $ = a(10829),
                X = a(84384),
                q = a(33586),
                Z = a(98644),
                J = a(18486),
                Q = a(47934),
                ee = a(86790),
                et = a(60266),
                ea = a(35412),
                ei = a(93015),
                er = a(18452),
                en = a.n(er);
            let es = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 5;
                    return Array.from({ length: a }, (a, r) => (0, i.jsx)(ei.D, { variant: t, className: en().shimmer, isActive: e }, r));
                },
                el = (e) => {
                    let { isShimmerVisible: t, isShimmerActive: a, variant: r, shimmersCount: n, className: s, children: l, ...o } = e;
                    return (0, i.jsx)('div', { className: (0, U.$)(en().root, s), ...(0, ea.OZ)(o), children: t ? es(a, r, n) : l });
                };
            var eo = a(93039);
            let ec = (e) => {
                let { artistId: t, entityContextType: a } = e;
                return (0, s.useMemo)(() => (t ? (0, eo.t)({ contextType: W.K.Artist, contextId: t, entityContextType: a }) : null), [t, a]);
            };
            var ed = a(88969),
                eu = a(29504),
                em = a(46422),
                ep = a(63807),
                eh = a(56248),
                eg = a(87366),
                e_ = a(76099),
                ev = a(29993),
                ef = a(12533),
                eb = a(14912);
            let ex = (e) => {
                let t = (0, eb.X)(),
                    a = (0, r.useSearchParams)();
                return (0, ev.c)((i) => {
                    var r;
                    let n = new URLSearchParams(a);
                    switch ((null == (r = e.onTabChange) || r.call(e, i), i)) {
                        case P.COLLECTION:
                            (n.set(y.K.TAB, x.J.COLLECTION), t((0, ef.C)(window.location.pathname, n)));
                            break;
                        case P.VIBE:
                            (n.set(y.K.TAB, x.J.VIBE), t((0, ef.C)(window.location.pathname, n)));
                    }
                });
            };
            var ey = a(1917),
                ek = a.n(ey);
            let eC = () =>
                    (0, i.jsxs)('div', {
                        className: ek().tabsShimmer,
                        children: [(0, i.jsx)(V.W, { className: ek().tabShimmer }), (0, i.jsx)(V.W, { className: ek().tabShimmer })],
                    }),
                eA = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, b.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        l = (0, em.W)(),
                        { isScrolling: o } = (0, s.useContext)(ep.B),
                        c = ex(t);
                    return (0, i.jsxs)('header', {
                        className: ek().root,
                        'aria-hidden': o,
                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: ek().container,
                                children: [
                                    l.canBack && (0, i.jsx)(eh.L, { withForwardControl: !1, withBackwardControl: l.canBack, shouldFocusOnMount: !o }),
                                    (0, i.jsx)(eu.DZ, {
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        className: ek().title,
                                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STATIC_HEADER_TITLE,
                                        children: (0, i.jsx)(ed.A, { id: 'page.familiar-you' }),
                                    }),
                                ],
                            }),
                            (0, i.jsxs)(e_.wI, {
                                isShimmerVisible: r.familiarSubpage.isLoading,
                                shimmer: (0, i.jsx)(eC, {}),
                                className: ek().tabs,
                                elementId: a,
                                ...t,
                                onTabChange: c,
                                children: [
                                    (0, i.jsx)(eg.o, {
                                        className: ek().tab,
                                        value: P.COLLECTION,
                                        title: n({ id: 'page.familiar-collection' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                    (0, i.jsx)(eg.o, {
                                        className: ek().tab,
                                        value: P.VIBE,
                                        title: n({ id: 'page.familiar-vibe' }),
                                        'aria-hidden': o,
                                        tabIndex: o ? -1 : 0,
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var eT = a(10679),
                eE = a.n(eT);
            let eS = (0, n.PA)((e) => {
                    var t;
                    let { forwardRef: a, tabsState: r, tabElementId: n, artistId: l } = e,
                        { artist: o } = (0, b.g)(),
                        { formatMessage: c } = (0, H.A)(),
                        { from: m } = (0, X.f)(),
                        p = ec({ artistId: l, entityContextType: z.h.ARTIST_MY_COLLECTION }),
                        h = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: W.K.Various,
                                    meta: { id: String(l) },
                                    from: m,
                                    overrideAutoflowSeeds: ['artist:'.concat(l)],
                                    overrideContextType: Y.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: o.familiarSubpage.collectionEntitiesData,
                            }),
                            [o.familiarSubpage.collectionEntitiesData, l, m],
                        ),
                        g = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(el, {
                                isShimmerVisible: o.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: Z.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, U.$)(eE().block, eE().tracksBlock),
                                children:
                                    null == (e = o.familiarSubpage.collectionTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)($.K, { track: e, playContextParams: h(e, t) }, e.id)),
                            });
                        }, [o.familiarSubpage.collectionTracks, o.familiarSubpage.isLoading, h]),
                        _ = (0, s.useMemo)(() => {
                            if (o.familiarSubpage.shouldShowTitleBlocks)
                                return o.familiarSubpage.isLoading
                                    ? (0, i.jsx)('div', {
                                          className: (0, U.$)(eE().block, eE().blockHeader),
                                          children: (0, i.jsx)(V.W, { isActive: o.familiarSubpage.isLoading, className: eE().shimmerTitle, radius: 'l' }),
                                      })
                                    : (0, i.jsx)(J.T, { className: (0, U.$)(eE().block, eE().blockHeader), title: c({ id: 'entity-names.tracks' }) });
                        }, [o.familiarSubpage.isLoading, o.familiarSubpage.shouldShowTitleBlocks, c]),
                        v = (0, s.useMemo)(() => {
                            if (o.familiarSubpage.shouldShowTitleBlocks) return c({ id: 'entity-names.albums' });
                        }, [o.familiarSubpage.shouldShowTitleBlocks, c]);
                    return (0, i.jsx)(q._, {
                        sourceContextData: p,
                        children: (0, i.jsxs)(G.N, {
                            className: eE().root,
                            containerClassName: (0, U.$)(eE().scrollContainer, eE().important),
                            ref: a,
                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_COLLECTION,
                            children: [
                                (0, i.jsx)(eA, { tabsState: r, tabElementId: n }),
                                (0, i.jsxs)(u.Kp, {
                                    value: r.value,
                                    name: P.COLLECTION,
                                    elementId: n,
                                    className: eE().content,
                                    children: [
                                        (0, i.jsxs)('section', { 'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SECTION_TRACK, children: [_, g] }),
                                        (0, i.jsx)(Q.O, {
                                            isShimmerVisible: o.familiarSubpage.isLoading,
                                            isShimmerActive: !0,
                                            headerClassName: eE().blockHeader,
                                            containerClassName: eE().block,
                                            title: v,
                                            showHeaderShimmer: o.familiarSubpage.shouldShowTitleBlocks,
                                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SECTION_ALBUM,
                                            children:
                                                null == (t = o.familiarSubpage.collectionAlbums)
                                                    ? void 0
                                                    : t.map((e) => (0, i.jsx)(K.a, { album: e, contentLinesCount: 3 }, e.id)),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: eE().footer }) }),
                            ],
                        }),
                    });
                }),
                eI = (0, n.PA)((e) => {
                    let { forwardRef: t, tabsState: a, tabElementId: r, artistId: n } = e,
                        { artist: l } = (0, b.g)(),
                        { from: o } = (0, X.f)(),
                        c = ec({ artistId: n, entityContextType: z.h.ARTIST_FAMILIAR_FROM_WAVE }),
                        m = (0, s.useCallback)(
                            (e, t) => ({
                                contextData: {
                                    type: W.K.Various,
                                    meta: { id: String(n) },
                                    from: o,
                                    overrideAutoflowSeeds: ['artist:'.concat(n)],
                                    overrideContextType: Y.b.Artist,
                                },
                                queueParams: { index: t },
                                loadContextMeta: !1,
                                entitiesData: l.familiarSubpage.vibeEntitiesData,
                            }),
                            [l.familiarSubpage.vibeEntitiesData, n, o],
                        ),
                        p = (0, s.useMemo)(() => {
                            var e;
                            return (0, i.jsx)(el, {
                                isShimmerVisible: l.familiarSubpage.isLoading,
                                isShimmerActive: !0,
                                variant: Z.X.PLAYLIST,
                                shimmersCount: 10,
                                className: (0, U.$)(eE().block, eE().tracksBlock),
                                children:
                                    null == (e = l.familiarSubpage.vibeTracks)
                                        ? void 0
                                        : e.map((e, t) => (0, i.jsx)($.K, { track: e, playContextParams: m(e, t) }, e.id)),
                            });
                        }, [l.familiarSubpage.isLoading, l.familiarSubpage.vibeTracks, m]);
                    return (0, i.jsx)(q._, {
                        sourceContextData: c,
                        children: (0, i.jsxs)(G.N, {
                            className: eE().root,
                            containerClassName: (0, U.$)(eE().scrollContainer, eE().important),
                            ref: t,
                            'data-test-id': d.Xk.familiarYou.FAMILIAR_YOU_SCROLLABLE_CONTENT_VIBE,
                            children: [
                                (0, i.jsx)(eA, { tabsState: a, tabElementId: r }),
                                (0, i.jsx)(u.Kp, { value: a.value, name: P.VIBE, elementId: r, className: eE().content, children: p }),
                                (0, i.jsx)(et.A, { children: (0, i.jsx)(ee.w, { className: eE().footer }) }),
                            ],
                        }),
                    });
                });
            var eN = a(52300),
                eL = a(52559),
                ej = a.n(eL);
            let eO = (e) => {
                let { tabsState: t, tabElementId: a } = e,
                    r = (0, s.useMemo)(() => {
                        switch (t.value) {
                            case P.COLLECTION:
                                return (0, i.jsx)(ed.A, { id: 'error-messages.empty-artist-familiar-collection-title' });
                            case P.VIBE:
                                return (0, i.jsx)(ed.A, { id: 'error-messages.empty-artist-familiar-vibe-title' });
                        }
                    }, [t.value]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(eA, { tabsState: t, tabElementId: a }),
                        (0, i.jsxs)('div', {
                            className: ej().root,
                            children: [
                                (0, i.jsx)(eN.I, { className: ej().icon, variant: 'attention', size: 'xxxl' }),
                                (0, i.jsx)(eu.DZ, { className: ej().title, variant: 'h3', size: 'xs', children: r }),
                            ],
                        }),
                    ],
                });
            };
            var ew = a(93317);
            let eR = (0, n.PA)((e) => {
                    let { tabsState: t, tabElementId: a } = e,
                        { artist: r } = (0, b.g)(),
                        { formatMessage: n } = (0, H.A)(),
                        { isScrolling: l } = (0, s.useContext)(ep.B),
                        o = (0, em.W)(),
                        c = ex(t);
                    return (0, i.jsx)(ew.Y, {
                        variant: ew.V.COMPOSITE,
                        staticClassName: (0, U.$)(ek().staticHeader, ek().important),
                        'aria-hidden': !l,
                        stickyClassName: (0, U.$)(ek().stickyHeader, ek().important),
                        stickyChild: (0, i.jsxs)('div', {
                            className: ek().container,
                            'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE_STICKY_HEADER,
                            children: [
                                o.canBack && (0, i.jsx)(eh.L, { withForwardControl: !1, withBackwardControl: o.canBack, shouldFocusOnMount: !1, buttonSize: 'xs' }),
                                (0, i.jsxs)(e_.wI, {
                                    isShimmerVisible: r.familiarSubpage.isLoading,
                                    shimmer: (0, i.jsx)(eC, {}),
                                    className: ek().tabs,
                                    elementId: a,
                                    onTabChange: c,
                                    ...t,
                                    children: [
                                        (0, i.jsx)(eg.o, {
                                            className: ek().tab,
                                            value: P.COLLECTION,
                                            title: n({ id: 'page.familiar-collection' }),
                                            'aria-hidden': !l,
                                            tabIndex: l ? 0 : -1,
                                        }),
                                        (0, i.jsx)(eg.o, {
                                            className: ek().tab,
                                            value: P.VIBE,
                                            title: n({ id: 'page.familiar-vibe' }),
                                            'aria-hidden': !l,
                                            tabIndex: l ? 0 : -1,
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                eP = (0, n.PA)((e) => {
                    var t, a, n;
                    let { artistId: T, preloadedArtist: E, preloadedFamiliar: S } = e,
                        I = (0, r.useSearchParams)(),
                        { artist: N, disclaimerModalState: L } = (0, b.g)(),
                        { contentScrollRef: j, setContentScrollRef: O } = (0, v.g)(),
                        w = (0, s.useId)(),
                        B = (0, s.useMemo)(() => {
                            switch (I.get(y.K.TAB)) {
                                case x.J.COLLECTION:
                                    break;
                                case x.J.VIBE:
                                    return P.VIBE;
                            }
                            return P.COLLECTION;
                        }, [I]),
                        U = (0, u.zb)(B),
                        H = (0, h.S)({ artist: null == (t = N.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                    ((0, M.G)(T),
                        (0, s.useEffect)(() => {
                            var e;
                            (null == (e = N.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                        }, [null == (a = N.meta) ? void 0 : a.artist.isUnsafeLegal, H]),
                        (0, D._)(N, T),
                        (0, s.useEffect)(
                            () => () => {
                                N.familiarSubpage.reset();
                            },
                            [N],
                        ),
                        (0, f.J)(N.familiarSubpage.isResolved),
                        N.familiarSubpage.isNotFound && (0, r.notFound)());
                    let z = (0, s.useMemo)(() => {
                            switch (U.value) {
                                case P.COLLECTION:
                                    if (N.familiarSubpage.isResolved && !N.familiarSubpage.hasCollectionEntities)
                                        return (0, i.jsx)(eO, { tabsState: U, tabElementId: w });
                                    return (0, i.jsx)(eS, { tabsState: U, forwardRef: O, tabElementId: w, artistId: T });
                                case P.VIBE:
                                    if (N.familiarSubpage.isResolved && !N.familiarSubpage.hasVibeTracks) return (0, i.jsx)(eO, { tabsState: U, tabElementId: w });
                                    return (0, i.jsx)(eI, { tabsState: U, forwardRef: O, tabElementId: w, artistId: T });
                            }
                        }, [N.familiarSubpage.hasCollectionEntities, N.familiarSubpage.hasVibeTracks, N.familiarSubpage.isResolved, T, O, w, U]),
                        W = [];
                    return (N.familiarSubpage.isNeededToLoad && W.push(N.familiarSubpage.getData({ preloadedFamiliar: S, artistId: T })),
                    N.infoLoadingState.isNeededToLoad && W.push(N.getInfo({ artistId: T, preloadedArtist: E })),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: a } = (0, b.g)(),
                            i = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            r = null == e ? void 0 : e.infoLoadingState.isLoading,
                            n = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, s.useCallback)((e) => (n ? {} : i && !r ? R({ artist: (0, C.E)(i) }, e) : void 0), [i, r, n]);
                        (0, A.C)(a.modal.isOpened ? null : l);
                    })(N),
                    W.length && (0, s.use)(Promise.allSettled(W)),
                    N.familiarSubpage.isRejected && !N.familiarSubpage.isNotFound)
                        ? (0, i.jsx)(m.SomethingWentWrong, {})
                        : (null == (n = N.meta) ? void 0 : n.artist.isLegalRejected)
                          ? (0, i.jsx)(k.M, { modalState: L })
                          : (0, i.jsx)(o.a, {
                                pageId: l.AppScreen.TrackListScreen,
                                pageIdForFrom: _.b.FAMILIAR_YOU,
                                mainObjectId: T,
                                mainObjectType: l.DomainObjectType.Artist,
                                children: (0, i.jsx)(p.h, {
                                    scrollElement: j,
                                    headerThreshold: 148,
                                    children: (0, i.jsxs)('div', {
                                        className: F().root,
                                        'data-test-id': d.Xk.artist.ARTIST_FAMILIAR_PAGE,
                                        children: [
                                            (0, i.jsx)(eR, { tabElementId: w, tabsState: U }),
                                            (0, i.jsx)(c.F, {
                                                blockId: '',
                                                blockType: '',
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                blockIdForFrom: g.U.DEFAULT,
                                                children: z,
                                            }),
                                        ],
                                    }),
                                }),
                            });
                });
            var eD = a(21438);
            let eM = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, eD.L)(e)) || (0, r.notFound)(), (0, i.jsx)(eP, { artistId: e }));
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
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => l });
            var i = a(4086),
                r = a(41928),
                n = a(44084);
            let s = new WeakMap(),
                l = () =>
                    ((e) => {
                        if (e instanceof n.r) return e;
                        let t = s.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (s.set(e, a), a);
                    })((0, r.N)().get(i.Zf));
        },
        68436: (e, t, a) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = a(88092);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(a(45700), t),
                (t._Parser = void 0));
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
                o = a(87999),
                c = a(17392),
                d = a(29993),
                u = a(52300),
                m = a(17610),
                p = a(29504),
                h = a(42174),
                g = a(96817);
            let _ = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: n, iconSize: o, size: d = 's', ariaLabel: m } = e,
                    { formatMessage: p } = (0, l.A)(),
                    h = null != m ? m : p({ id: 'play-queue.delete-from-queue' }),
                    _ = (0, s.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(g.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: d,
                    radius: 'round',
                    'aria-label': h,
                    onClick: _,
                    icon: (0, i.jsx)(u.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var v = a(5407),
                f = a(57934),
                b = a(55693),
                x = a(72288),
                y = a(49738),
                k = a(56446),
                C = a(64546),
                A = a(29831),
                T = a(30123),
                E = a(54965),
                S = a(1829),
                I = a(82092),
                N = a.n(I),
                L = a(79262),
                j = a(41867),
                O = a.n(j);
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
                          ? (0, i.jsx)(L.A, { value: t.downloadingProgress, size: 16, className: O().downloadingProgress, progressBarClassName: O().progress })
                          : null;
                }),
                R = (0, n.PA)((e) => {
                    var t;
                    let {
                            className: a,
                            track: n,
                            withLightning: g,
                            ignoreDislikedStyles: I,
                            onLikeClick: L,
                            utmLink: j,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: P = !0,
                            likeIconSize: D = 'xxs',
                            removeButtonAriaLabel: M,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: U } = (0, x.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: z } = (0, b.z)(),
                        [W, Y] = (0, s.useState)(!1),
                        [G, V] = (0, s.useState)(!1),
                        K = (0, v.P)(),
                        $ = (0, h.K)(n),
                        {
                            duration: X,
                            lightning: q,
                            ugc: Z,
                        } = ((e, t, a) => {
                            var i;
                            let { withLightning: r, isUGC: n } = t,
                                s = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, E.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== s ? { text: s, ariaLabel: (0, A.j)(Math.round((null != (i = e.durationMs) ? i : 0) / 1e3), a) } : null,
                                lightning: r ? { label: a({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: n ? { label: a({ id: 'ugc.track-description' }) } : null,
                            };
                        })(n, { withLightning: g, isUGC: n.isUGC }, H),
                        J = (0, f.F)(),
                        Q = F.hasPlus,
                        ee = !n.isRemoved && n.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (W || n.isLiked || (Y(!0), null == z || z()), await $(), null == L || L(n.isLiked));
                        }),
                        ea = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), K())) return void e.preventDefault();
                            (U.openTrackTrailer(n.id), J(o.DomainObjectType.Track, n.id));
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(S._, {
                                        track: n,
                                        open: G,
                                        onOpenChange: V,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: j,
                                        className: (0, r.$)(N().contextMenu, { [N().contextMenu_visible]: G }),
                                        handleRemove: R,
                                        withTrailer: P,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, R, G, ee, P, n, j]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(N().root, N().controls, a, {
                            [N().controls_dislikedControls]: n.isDisliked,
                            [N().controls_dislikedColors]: n.isDisliked && !I,
                            [N().controls_disabled]: !n.isAvailable,
                            [N().root_withSecondaryColor]: O,
                        }),
                        children: [
                            q && (0, i.jsx)(u.I, { 'aria-label': q.label, size: 'xxs', className: N().lightning, variant: 'lightning' }),
                            Z &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: N().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, r.$)(N().item, N().downloadIcon), children: (0, i.jsx)(w, { track: n }) }),
                            R && !B && (0, i.jsx)(_, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(N().item, N().removeButton), onClick: R, ariaLabel: M }),
                            ee &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(y.c, {
                                        size: 'xs',
                                        iconSize: D,
                                        className: (0, r.$)(N().item, N().likeIcon),
                                        isLiked: n.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = n.trailer) ? void 0 : t.isAvailable) &&
                                n.isAvailable &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(k.k, {
                                        className: (0, r.$)(N().item, N().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(N().item, N().contextMenuWrapper),
                                children: [
                                    null !== X &&
                                        (0, i.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(N().duration, { [N().duration_hidden]: G && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': X.ariaLabel,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: X.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        74021: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => o });
            var i = a(14567),
                r = a(243),
                n = a(62151),
                s = a(33396);
            let l = () => 'SECRET';
            class o {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: a }) {
                    ((this.maxLogLevel = t), (this.secureFields = a), (this.additionalData = e));
                }
                formatMessage(e, t, a = {}, r) {
                    let n,
                        l = String(t instanceof Error && t.stack ? t.stack : t),
                        o = (0, s.A)({ ...this.additionalData, ...a });
                    return (Object.keys(o).length && (n = this.obfuscateData(o)), r) ? `${l} ${i(n)}` : [l, n];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, r.A)(e, t) && (0, n.A)(e, t, l());
                    return e;
                }
            }
        },
        74871: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 59687));
        },
        76903: (e, t, a) => {
            'use strict';
            a.d(t, { a: () => u });
            var i = a(88800),
                r = a(53548),
                n = a(53534),
                s = a(63582),
                l = a(245);
            let o = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let a =
                        o.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                a = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                i = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                a();
                                            } finally {
                                                ((t = !1), e.length > 0 && i());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (a(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), i());
                                },
                            };
                        })();
                    (o.set(t, a), (this.queue = a));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = a(87999);
            let u = (0, s.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let a = (0, l.N)(),
                        s = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [o, u] = (0, r.useState)(() => {
                            let e = new c(a.createScreenSession().screenViewUuid, a);
                            return { client: a, input: t, isReady: s, scope: s ? a.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        o.client !== a ||
                        o.input.pageId !== t.pageId ||
                        o.input.skeletonId !== t.skeletonId ||
                        o.input.mainObjectType !== t.mainObjectType ||
                        o.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(a.createScreenSession().screenViewUuid, a),
                            l = { client: a, input: t, isReady: s, scope: s ? a.createScreenScope(t, r) : null, session: r };
                        return (u(l), (0, i.jsx)(n.k, { value: l, children: e }));
                    }
                    if (
                        o.isReady !== s ||
                        o.input.displayReasonId !== t.displayReasonId ||
                        o.input.pageIdForFrom !== t.pageIdForFrom ||
                        o.input.pagePlacement !== t.pagePlacement ||
                        o.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...o, input: t, isReady: s, scope: s ? a.createScreenScope(t, o.session) : null };
                        return (u(r), (0, i.jsx)(n.k, { value: r, children: e }));
                    }
                    return (0, i.jsx)(n.k, { value: o, children: e });
                },
            );
        },
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
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
            a.d(t, { w: () => T });
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
                p = a(99839);
            let h = (e) => e(new Date(), (0, p.m)());
            var g = a(51611),
                _ = a(72288),
                v = a(11006),
                f = a.n(v),
                b = a(17392),
                x = a(29504),
                y = a(91292);
            let k = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(f().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: f().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: r, className: f().link, 'data-test-id': b.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(f().root, f().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, i.jsx)(C, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(k, { data: a.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, _.g)(),
                    { formatDate: r, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, g.h)(),
                    o = u({ formatMessage: n, language: l, tld: a.tld, year: h(r) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let T = (0, n.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: n, location: p, user: v } = (0, _.g)(),
                    { formatDate: b, formatMessage: x } = (0, s.A)(),
                    { isEnabled: y } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, g.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, i, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, i, r) },
                                    p = [s, o, u];
                                return (a && 'ru' === n && p.push(l), p.push(m), p);
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
                        formatMessage: x,
                        isWebApplication: l.$3,
                        tld: p.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(b),
                    });
                return (0, i.jsx)(A, { className: (0, r.$)({ [f().root_withOffsetForDeeplink]: y }, a), data: C });
            });
        },
        88349: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e) => {
                let t = e?.split(':')[0];
                return (t?.includes('.') && t?.split('.').pop()) || '';
            };
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
            a.d(t, { D: () => g });
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
                p = a.n(m);
            let h = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(p().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: p().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
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
        98774: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => n });
            var i = a(51724),
                r = a(20775);
            let n = (e) => {
                let { available: t, disclaimers: a } = (0, i.f)(e);
                return (0, r.x)(t, a) ? { index: !1, follow: !0 } : void 0;
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
                4700, 7908, 8655, 5864, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 505, 2691, 4981, 4427, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283,
                1800, 7746, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 818, 4322, 7934, 763, 2670, 7358,
            ],
            () => e((e.s = 74871)),
        ),
            (_N_E = e.O()));
    },
]);
