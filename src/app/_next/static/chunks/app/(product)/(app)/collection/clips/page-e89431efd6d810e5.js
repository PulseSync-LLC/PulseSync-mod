(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9923],
    {
        291: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        2125: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => o });
            var i = r(37862),
                o = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        3377: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => f });
            var i = r(32290),
                o = r(96103),
                l = r(21916),
                n = r(63618),
                a = r(39407),
                s = r(71926),
                c = r(94218),
                d = r(55556),
                u = r.n(d);
            let _ = (0, o.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(s.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(s.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(20472),
                m = r(57594);
            let f = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: o } = (0, m.g)();
                return o.isAuthorized ? t : (r && (0, l.redirect)(p.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => l });
            var i = r(21916),
                o = r(55178);
            let l = (e) => {
                let t = (0, i.usePathname)(),
                    [r, l] = (0, o.useState)(!1);
                (0, o.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, o.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), l(!0));
                    }, [e, r, t]);
            };
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        12113: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(32290),
                o = r(63618),
                l = r(62060),
                n = r(96103),
                a = r(55178),
                s = r(60900),
                c = r(80451),
                d = r(21732),
                u = r(71483),
                _ = r(91027),
                p = r(14934),
                m = r(50162),
                f = r(86269),
                v = r(71926),
                x = r(41677),
                h = r(56797),
                C = r(26089),
                g = r(94315),
                y = r(99872),
                S = r(37862),
                b = r(48922),
                A = r(23352),
                I = r(72396),
                E = r(52843),
                R = r(22191),
                j = r(63415),
                L = r(56755),
                O = r(90169),
                T = r(57594),
                N = r(13798),
                k = r(61258),
                P = r(90326),
                w = r(73325),
                M = r(96299),
                D = r.n(M);
            let U = (0, n.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: n,
                        clip: M,
                        withVideo: U = !0,
                        artistIdWithoutLink: B,
                        viewUuid: H,
                        shouldOpenModalOnCardClick: W = !0,
                    } = e,
                    { fullscreenVideoPlayer: Y } = (0, T.g)(),
                    { formatMessage: z } = (0, s.A)(),
                    F = (0, y.C)(),
                    { from: V } = (0, I.f)({ pageId: b._Q.VIDEO_PLAYER, contextId: Y.state.contextId, contextType: u.K.Various, blockId: S.U.CLIPS }),
                    K = (0, R.P)(null != (t = M.duration) ? t : 0),
                    X = (0, C.M)(H),
                    Q = (0, h._)(H),
                    { ref: G, intersectionPropertyId: J } = (0, A.n)({ callback: X }),
                    Z = (0, a.useRef)(null),
                    $ = U && M.previewUrl,
                    q = (0, _.c)(() => {
                        Z.current && ((Z.current.currentTime = 0), Z.current.play());
                    }),
                    ee = (0, a.useMemo)(() => (0, l.A)(q, 500), [q]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = Z.current) || e.pause();
                    }),
                    er = (0, a.useMemo)(() => Y.ids.indexOf(M.clipId), [Y, M.clipId]),
                    { isPlaying: ei, togglePlay: eo } = (0, O.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: j.H.VARIOUS_CLIP_CONTEXT }, from: V },
                            queueParams: { index: er },
                            entitiesData: Y.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(M.clipId),
                        sonataState: Y.state,
                        playbackId: L.V.CLIP,
                    }),
                    el = W ? M.url : (0, g.J)(Y.ids, er),
                    en = (0, _.c)(() => {
                        W ? (F([M.clipId]), Q()) : ei || eo();
                    }),
                    ea = (0, w.X)({ clip: M, callback: en }),
                    es = z({ id: 'entity-names.clip-name' }, { clipName: M.title }),
                    ec = (0, a.useMemo)(
                        () =>
                            M.isAvailable
                                ? (0, i.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, o.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: ea,
                                      children: [
                                          $ &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: Z,
                                                  poster: M.thumbnail && (0, c.createAvatarVideoUrl)(M.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: M.previewUrl, type: 'video/mp4' }),
                                              }),
                                          M.thumbnail &&
                                              (0, i.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: M.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.createAvatarVideoUrl,
                                              }),
                                          void 0 !== M.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': K,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, E.E)(M.duration, M.duration) }),
                                              }),
                                          (0, i.jsx)(P.D, { variant: 'filled', className: D().playButton, onClick: ea, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [K, M.isAvailable, M.thumbnail, M.previewUrl, M.duration, ee, et, ea, $],
                    ),
                    ed = (0, a.useMemo)(
                        () =>
                            M.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, o.$)(D().artistLink, n), artists: M.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      M.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, M, n],
                    );
                return (0, i.jsx)(p.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        M.explicitDisclaimer &&
                        (0, i.jsx)(N.N, { getDescriptionTexts: M.getDescriptionTexts, variant: M.explicitDisclaimer, size: 'xxs' }, M.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(k.N, { href: el, onClick: ea, children: es }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, o.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: [
                                (0, i.jsx)(k.N, {
                                    className: D().titleLink,
                                    href: el,
                                    'aria-label': es,
                                    onClick: ea,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: M.title,
                                }),
                                M.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(M.version) }),
                            ],
                        },
                        M.getKey('Title'),
                    ),
                    'data-intersection-property-id': J,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => x });
            var i = r(55178),
                o = r(16172),
                l = r(52068),
                n = r(6752),
                a = r(62376),
                s = r(1677),
                c = r(48922),
                d = r(84782),
                u = r(30915),
                _ = r(18746),
                p = r(2792),
                m = r(37240),
                f = r(51012),
                v = r(47498);
            let x = () => {
                let e = (0, a.U)(),
                    t = (0, l.st)(),
                    { hash: r } = (0, l.gf)(),
                    { pageId: x, displayReasonId: h } = (0, m.$)(),
                    { tabId: C, tabPos: g, isTabSelectedByDefault: y } = (0, v.R)(),
                    { offsetBlockPosY: S } = (0, u.u)(),
                    { blockType: b, blockId: A, blockPosX: I, blockPosY: E, mainObjectId: R, mainObjectType: j, displayReasonId: L } = (0, d.N)(),
                    { filterKey: O, filterValue: T, filterPos: N } = (0, _.G)(),
                    { objectType: k, objectsCount: P, objectId: w, objectPosX: M, objectPosY: D } = (0, p.J)(),
                    { skeleton: U } = (0, f.b)(),
                    B = null != L ? L : h,
                    H = (0, n.L)(() => (void 0 !== S && void 0 !== E ? S + E : E));
                return (0, i.useCallback)(
                    (i, l) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let n = s.F[x];
                        if (!n) return;
                        let a = {
                            hash: r,
                            pageId: n,
                            entityType: b,
                            entityId: A,
                            entityPosX: I,
                            entityPosY: H,
                            objectsCount: P,
                            viewUuid: l,
                            objectType: k,
                            objectId: w,
                            objectPosX: M,
                            objectPosY: D,
                        };
                        void 0 !== O && ((a.filterKey = O), (a.filterValue = T), (a.filterPos = N)),
                            c.qG.includes(x) && ((a.tabId = C), (a.tabPos = g), (a.isTabSelectedByDefault = y)),
                            U && (a.skeletonId = U),
                            'string' == typeof R && 'string' == typeof j && ((a.mainObjectType = j), (a.mainObjectId = R)),
                            B && (a.displayReasonId = B);
                        let d = (0, o.Fx)({ params: a, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (i ? (0, o.Pf)(t.evgenInstance, d) : (0, o.nv)(t.evgenInstance, d));
                    },
                    [t, B, A, I, H, b, O, N, T, r, y, e, R, j, w, M, D, k, P, x, U, C, g],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(60900),
                s = r(26252),
                c = r(21732),
                d = r(6752),
                u = r(82586),
                _ = r(57594),
                p = r(60244),
                m = r(90006),
                f = r.n(m);
            let v = (0, l.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: l, containerClassName: m, variant: v, size: x = 'xxxs', ...h } = e,
                    { formatMessage: C } = (0, a.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    [y, S] = (0, n.useState)(null),
                    b = (0, d.L)(() => {
                        switch (v) {
                            case s.JU.E:
                                return 'explicit';
                            case s.JU.AGE_12:
                            case s.JU.AGE_16:
                            case s.JU.AGE_18:
                                return 'adult';
                            case s.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    A = (0, n.useMemo)(() => C({ id: 'extra-explicit.explicit-mark' }), [C]);
                (0, n.useEffect)(() => {
                    r && r().then(S);
                }, [r, l]);
                let I = (null == y ? void 0 : y.join('\n')) || '',
                    E = !!(null == y ? void 0 : y.length) && !g,
                    R = I.length > 0 ? I : A;
                return (0, i.jsx)(p.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, i.jsx)('span', {
                        className: m,
                        children: (0, i.jsx)(u.I, {
                            className: (0, o.$)(f().explicitMark, t),
                            'aria-label': R,
                            variant: b,
                            size: x,
                            ...h,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14858: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var i = r(60900),
                o = r(57594),
                l = r(79406);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, i.A)(),
                    { user: r, experiments: n } = (0, o.g)(),
                    a = 'ru' === r.account.data.userSessionRegionIso && n.checkExperiment(l.z.WebNextFooterDisclaimer, 'on'),
                    s = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return a ? t({ id: 'footer.disclaimer-content' }) : s;
            };
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var i,
                o = r(55178),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => o });
                        let o = i;
                    },
                    4831: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
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
                    8346: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
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
                    6132: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    4517: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    6951: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
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
                    2223: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
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
                    5882: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5817: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(9e3),
                            a = i(r(4831));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: s,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: p,
                                    labelText: m,
                                } = e,
                                f = d || r,
                                v = s || i;
                            return (0, o.jsxs)('div', {
                                className: (0, l.clsx)(
                                    a.default.root,
                                    a.default.controls,
                                    { [a.default.controls_visible]: u },
                                    a.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: a.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, l.clsx)(a.default.bottom, p),
                                        children: [
                                            f && (0, o.jsxs)('div', { className: a.default.bottom_left, children: [d, r] }),
                                            v && (0, o.jsxs)('div', { className: a.default.bottom_right, children: [s, i] }),
                                        ],
                                    }),
                                    !!m && (0, o.jsx)(n.Label, { className: a.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    440: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0);
                        let o = r(4377),
                            l = r(810),
                            n = r(5881),
                            a = r(2582),
                            s = r(3758),
                            c = i(r(8346)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: l = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: p,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, n.clsx)(c.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, o.jsx)(s.SROnly, { tabIndex: -1, children: null != v ? v : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, n.clsx)(c.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, o.jsxs)('div', {
                                                    className: (0, n.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(l)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(a.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    p,
                                                                ],
                                                            }),
                                                        _,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, l.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(2582),
                            a = i(r(6132));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...s } = e;
                            return (0, o.jsx)(n.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, l.clsx)(a.default.root, r),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    9e3: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        var i = r(2);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    2865: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = i(r(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...s } = e,
                                c = (0, l.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, n.isValidElement)(i)
                                ? (0, n.cloneElement)(i, { ...s, className: (0, l.clsx)(c, i.props.className) })
                                : (0, o.jsx)('span', { className: c, ...s, children: i });
                        };
                    },
                    3758: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        var i = r(2865);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    7743: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = r(4721),
                            s = i(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(n)], s.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    404: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = r(4721),
                            s = i(r(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: n = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_size_'.concat(n)], s.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = i(r(5882));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: s, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, o.jsx)(s, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: c && c > 0, [a.default.root_clamp_oneline]: c && 1 === c, [a.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var i = r(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var o = r(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function a(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return l[e].call(r.exports, r, r.exports, a), r.exports;
            }
            (a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0);
                var e = a(440);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = a(5817);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = s.kk,
                d = s.m7;
            s.X$;
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19383: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(55178),
                o = r(27576),
                l = r(91027),
                n = r(70204),
                a = r(34186),
                s = r(57594),
                c = r(85017),
                d = r(19379);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: u,
                        callback: _,
                        onAfterHandled: p,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: C },
                    } = (0, s.g)(),
                    g = (0, i.useRef)(String((0, o.A)())),
                    y = (0, i.useRef)(!1),
                    S = (0, i.useRef)(!1),
                    b = (0, i.useRef)(0),
                    A = (0, i.useRef)(!0),
                    I = (0, a.N)().get(n.U2),
                    E = (0, l.c)((e) => {
                        x && (null == e || e.preventDefault()), _ && _(e), p && p();
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === g.current && !y.current && (E(), (y.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, E]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            A.current = !1;
                        },
                        [],
                    ),
                    (0, l.c)(async (e) => {
                        if (!S.current) {
                            S.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var i, o, l;
                                    let n = t.getDisclaimerEntityRef(r),
                                        a = null != (i = null == u ? void 0 : u(t, n)) ? i : ''.concat(n.entityType, '_').concat(n.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = I.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(a)) return void E(e);
                                    }
                                    if (s) {
                                        null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(c.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(g.current),
                                            h.setEntityKey(a),
                                            h.setCurrentEntityRef(n.entityType, n.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (o = null == v ? void 0 : v.closeOnOutside) || o),
                                            h.setShouldCloseModalOnEscape(null == (l = null == v ? void 0 : v.closeOnEscape) || l),
                                            (b.current += 1);
                                        let r = b.current,
                                            i = await t.getModalDisclaimerData();
                                        if (b.current !== r || !1 === A.current) return;
                                        h.setModalData(null != i ? i : null), (y.current = !1), C.open();
                                        return;
                                    }
                                    x && (null == e || e.preventDefault()), E(e);
                                    return;
                                }
                                x && (null == e || e.preventDefault()), E(e);
                            } finally {
                                S.current = !1;
                            }
                        }
                    })
                );
            };
        },
        19429: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => m });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(80451),
                s = r(19620),
                c = r(49522),
                d = r(26279),
                u = r.n(d),
                _ = r(29869);
            let p = (0, l.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: r,
                            carouselItemClassName: l,
                            forwardRef: d,
                            isShimmerVisible: p,
                            isShimmerActive: m,
                            title: f,
                            description: v,
                            containerClassName: x,
                            headerClassName: h,
                            viewAllActionLink: C,
                            artistIdWithoutLink: g,
                            withVideo: y = !0,
                            clips: S,
                            headingVariant: b,
                            className: A,
                            shouldOpenModalOnCardClick: I = !0,
                            itemCounter: E,
                            ...R
                        } = e,
                        j = (0, n.useId)(),
                        L = (0, n.useRef)(null);
                    return (0, i.jsxs)('section', {
                        className: (0, o.$)(u().root, A),
                        ref: d,
                        ...(0, a.getDataAttrFromProps)(R),
                        children: [
                            (0, i.jsx)(s.T, {
                                className: h,
                                labeledForId: j,
                                title: f,
                                description: v,
                                viewAllActionLink: C,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: L }),
                                headingVariant: b,
                                withDescription: !!v,
                            }),
                            (0, i.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: r,
                                carouselItemClassName: l,
                                isShimmerVisible: p,
                                isShimmerActive: m,
                                containerClassName: x,
                                artistIdWithoutLink: g,
                                withVideo: y,
                                clips: S,
                                shouldOpenModalOnCardClick: I,
                                itemCounter: E,
                                ref: L,
                                'aria-labelledby': j,
                            }),
                        ],
                    });
                }),
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        19620: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => C });
            var i = r(32290),
                o = r(63618),
                l = r(55178),
                n = r(16172),
                a = r(21732),
                s = r(82586),
                c = r(50162),
                d = r(86269),
                u = r(79856),
                _ = r(71926),
                p = r(95481),
                m = r(47745),
                f = r(61258),
                v = r(69e3),
                x = r.n(v);
            let h = (e) => {
                    let {
                            className: t,
                            coverUrl: r,
                            labeledForId: v,
                            subTitle: h,
                            title: C,
                            description: g,
                            viewAllActionLink: y,
                            controls: S,
                            titleSize: b = 'm',
                            coverBackgroundColor: A,
                            coverRadius: I = 's',
                            titleClassName: E,
                            titleLineClamp: R,
                            fallbackIconVariant: j,
                            available: L = !0,
                            onViewAllAction: O,
                            titleChildren: T,
                            children: N,
                            headingRef: k,
                            coverContainerClassName: P,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: M = !0,
                            isShimmerVisible: D,
                            isShimmerActive: U,
                            withCover: B,
                            withDescription: H,
                            forwardRef: W,
                            shimmerCoverClassName: Y,
                            shouldSendAnalyticsOnLoaded: z,
                            ...F
                        } = e,
                        V = (0, p.f)(),
                        K = (0, l.useRef)(null),
                        X = r || B,
                        Q = g || H,
                        G = (0, l.useCallback)(() => {
                            K.current && 'focus' in K.current && K.current.focus();
                        }, []),
                        J = (0, m.N)(),
                        Z = (0, l.useCallback)(() => {
                            O ? O() : J({ to: n.QT.Link });
                        }, [J, O]);
                    (0, l.useEffect)(() => {
                        z && V();
                    }, [z, V]);
                    let $ = (0, l.useMemo)(
                            () =>
                                C && y && L
                                    ? (0, i.jsxs)(f.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(s.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: Z,
                                          'data-test-id': a.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: v,
                                                  className: (0, o.$)(x().heading, E),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: R,
                                                  ref: k,
                                                  children: C,
                                              }),
                                              T,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: v,
                                                  className: (0, o.$)(x().heading, E, { [x().heading_notAvailable]: !L }),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: R,
                                                  ref: k,
                                                  'data-test-id': a.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              T,
                                          ],
                                      }),
                            [L, Z, k, w, v, C, E, R, b, y, T],
                        ),
                        q = (0, l.useMemo)(() => (H && D ? (0, i.jsx)(u.W, { isActive: U, className: x().shimmerDescription }) : g), [H, D, g, U]),
                        ee = (0, l.useMemo)(
                            () =>
                                B && D
                                    ? (0, i.jsx)(u.W, { isActive: U, className: (0, o.$)(x().shimmerCover, Y), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: j,
                                          style: { backgroundColor: A },
                                          className: x().cover,
                                          ref: K,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': a.S7.BLOCK_HEADER_COVER,
                                      }),
                            [A, r, j, G, U, D, Y, B],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(x().root, t),
                        ref: W,
                        ...F,
                        'data-test-id': a.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    X && (0, i.jsx)(d.t, { radius: I, className: (0, o.$)(x().coverContainer, P), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            h,
                                            $,
                                            Q &&
                                                (0, i.jsx)(_.HL, {
                                                    id: ''.concat(v, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: M ? 2 : void 0,
                                                    className: (0, o.$)(x().description, { [x().description_widthLimit]: M }),
                                                    'data-test-id': a.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: q,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || N,
                        ],
                    });
                },
                C = (0, l.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        20472: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => o });
            var i = r(36477);
            let o = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        20541: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        22191: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l });
            var i = r(60900),
                o = r(29913);
            let l = (e) => {
                let { seconds: t, hours: r, minutes: l } = (0, o.e)(e),
                    { formatMessage: n } = (0, i.A)();
                return n({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: l, seconds: t });
            };
        },
        22714: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(32290),
                o = r(55178),
                l = r(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: a, pagePlacement: s, children: c } = e,
                    d = (0, o.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: n, pageStyle: a, pagePlacement: s }), [t, r, n, a, s]);
                return (0, i.jsx)(l.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(55178),
                o = r(12989),
                l = r(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    a = (0, o.D)(),
                    s = (0, i.useId)(),
                    c = (0, i.useContext)(l.B),
                    d = (0, i.useCallback)(
                        (i, o) => {
                            e ? e(i, r ? o : void 0) : a(i, o), t && c.unobserveElement(s);
                        },
                        [e, c, s, a, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: s, callback: d }),
                            () => {
                                c.unobserveElement(s);
                            }
                        ),
                        [e, c, d, s, a],
                    ),
                    { ref: n, intersectionPropertyId: s }
                );
            };
        },
        26042: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            var i = r(32290),
                o = r(55178),
                l = r(10936);
            let n = (e) => {
                let { objectId: t, objectPosX: r, objectPosY: n, objectPos: a, objectType: s, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    p = (0, o.useMemo)(
                        () => ({ objectId: t, objectPosX: r, objectPosY: n, objectPos: a, objectType: s, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, r, n, a, s, c, d, u],
                    );
                return (0, i.jsx)(l.l.Provider, { value: p, children: _ });
            };
        },
        26089: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => p });
            var i = r(16172),
                o = r(52068),
                l = r(91027),
                n = r(48922),
                a = r(84782),
                s = r(2792),
                c = r(37240),
                d = r(51012),
                u = r(47498),
                _ = r(62376);
            let p = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: p } = (0, c.$)(),
                    { tabId: m, tabPos: f, isTabSelectedByDefault: v } = (0, u.R)(),
                    { blockType: x, blockId: h, blockPosX: C, blockPosY: g, mainObjectType: y, mainObjectId: S } = (0, a.N)(),
                    { objectsCount: b, objectType: A, objectId: I, objectPosX: E, objectPosY: R } = (0, s.J)(),
                    j = (0, _.U)(),
                    { skeleton: L } = (0, d.b)();
                return (0, l.c)((o) => {
                    if (!t || !p || !n.xK.includes(p)) return;
                    let l = {
                        hash: r,
                        pageId: p,
                        entityType: x,
                        entityId: h,
                        entityPosX: C,
                        entityPosY: g,
                        objectsCount: b,
                        viewUuid: e,
                        objectType: A,
                        objectId: I,
                        objectPosX: E,
                        objectPosY: R,
                    };
                    n.qG.includes(p) && ((l.tabId = m), (l.tabPos = f), (l.isTabSelectedByDefault = v)),
                        L && (l.skeletonId = L),
                        y && (l.mainObjectType = y),
                        S && (l.mainObjectId = S);
                    let a = (0, i.Fx)({ params: l, logger: j, context: 'useSendEventOnClipShowedOrHidden' });
                    if (a) {
                        if (o) return void (0, i.Pf)(t.evgenInstance, a);
                        (0, i.nv)(t.evgenInstance, a);
                    }
                });
            };
        },
        26279: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        28816: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => o });
            var i = r(55178);
            let o = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        28999: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => n });
            var i = r(55178),
                o = r(77223),
                l = r(75265);
            let n = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: n, position: a } = (0, i.useContext)(l.N) || {};
                if (void 0 === t || void 0 === r || void 0 === n || void 0 === a) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: o.n.LIKE, id: t, type: r, blockPosition: n, position: a });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: o.n.NAVIGATE, id: t, type: r, blockPosition: n, position: a }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: o.n.PLAY, id: t, type: r, blockPosition: n, position: a }),
                };
            };
        },
        29869: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => v });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(27576),
                s = r(16172),
                c = r(75245),
                d = r(26042),
                u = r(12113),
                _ = r(50819),
                p = r(291),
                m = r.n(p);
            let f = (0, l.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: l,
                            carouselItemClassName: p,
                            isShimmerVisible: f,
                            isShimmerActive: v,
                            containerClassName: x,
                            artistIdWithoutLink: h,
                            withVideo: C = !0,
                            clips: g,
                            shouldOpenModalOnCardClick: y = !0,
                            itemCounter: S,
                        } = e,
                        b = (0, n.useId)(),
                        A = (0, n.useRef)(String((0, a.A)())),
                        I = (0, n.useMemo)(() => {
                            if (f) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: v }, t));
                            return null == g
                                ? void 0
                                : g.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: s.ky.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == g ? void 0 : g.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: l,
                                                  clip: e,
                                                  withVideo: C,
                                                  artistIdWithoutLink: h,
                                                  viewUuid: A.current,
                                                  shouldOpenModalOnCardClick: y,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, l, f, v, h, C, g, y]);
                    return (0, i.jsx)(c.F, {
                        className: (0, o.$)(m().itemCounter, { [m()['itemCounter_'.concat(S)]]: S }, x),
                        ref: t,
                        itemClassName: (0, o.$)(m().item, m().important, p),
                        'aria-labelledby': b,
                        children: I,
                    });
                }),
                v = (0, n.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        29913: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        30310: (e) => {
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
        30604: (e, t, r) => {
            'use strict';
            r.d(t, { CollectionClipsPage: () => J });
            var i = r(32290),
                o = r(96103),
                l = r(21916),
                n = r(55178),
                a = r(60900),
                s = r(39407),
                c = r(21732),
                d = r(84942),
                u = r(71926),
                _ = r(64170),
                p = r(7999),
                m = r(84427),
                f = r(48922),
                v = r(71610),
                x = r(22714),
                h = r(83808),
                C = r(83920),
                g = r(3796),
                y = r(20472),
                S = r(57594),
                b = r(58054),
                A = r(32468),
                I = r(74694),
                E = r(71760),
                R = r.n(E),
                j = r(63618),
                L = r(8055),
                O = r(91027),
                T = r(54862),
                N = r(12113),
                k = r(50819),
                P = r(79248);
            let w = () => (window.innerWidth > 1920 ? 4 : window.innerWidth > 1200 ? 3 : 2);
            var M = r(19429),
                D = r(2125),
                U = r(95226),
                B = r(72151),
                H = r.n(B);
            let W = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { formatMessage: o } = (0, a.A)(),
                    { clipsWillLike: l } = (0, S.g)().collection.clips;
                return (
                    l.isNeededToLoad && (0, n.use)(l.getData()),
                    (0, i.jsx)(U.F, {
                        blockId: D.h.CLIPS_CAROUSEL,
                        blockType: D.h.CLIPS_CAROUSEL,
                        blockPosX: 1,
                        blockPosY: 7,
                        objectsCount: null == (t = l.clips) ? void 0 : t.length,
                        children: (0, i.jsx)(M.K, {
                            className: (0, j.$)(H().root, r),
                            containerClassName: H().carouselBlock,
                            carouselItemClassName: (0, j.$)(H().carouselItem, H().important),
                            headerClassName: (0, j.$)(H().carouselBlockHeader, H().carouselBlock),
                            isShimmerVisible: l.isLoading,
                            isShimmerActive: !0,
                            title: o({ id: 'entity-names.clips-will-like' }),
                            clips: l.clips || [],
                            headingVariant: 'h2',
                            'data-test-id': c.Kq.clip.CLIPS_CAROUSEL,
                        }),
                    })
                );
            });
            var Y = r(82586),
                z = r(96689),
                F = r.n(z);
            let V = (0, o.PA)(() => {
                let {
                        collection: {
                            clips: { clipsWillLike: e },
                        },
                    } = (0, S.g)(),
                    t = !e.isEmpty && !e.isRejected;
                return (0, i.jsxs)('div', {
                    className: F().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: F().content,
                            children: [
                                (0, i.jsx)(Y.I, { className: F().icon, size: 'xl', variant: 'clip' }),
                                (0, i.jsx)(u.DZ, {
                                    className: F().title,
                                    variant: 'h3',
                                    size: 'xs',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-title' }),
                                }),
                                (0, i.jsx)(u.HL, {
                                    className: F().text,
                                    variant: 'span',
                                    type: 'controls',
                                    size: 'l',
                                    weight: 'normal',
                                    'data-test-id': c.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.empty-collection-clips-text' }),
                                }),
                            ],
                        }),
                        t && (0, i.jsx)(W, {}),
                    ],
                });
            });
            var K = r(37717),
                X = r.n(K);
            let Q = (0, o.PA)((e) => {
                    let { virtualItem: t, resizeObserver: r, columns: o } = e,
                        [l, s] = (0, T.d)(),
                        { formatMessage: c } = (0, a.A)(),
                        {
                            collection: { clips: d },
                        } = (0, S.g)();
                    (0, n.useEffect)(
                        () => (
                            l && r && r.observe(l),
                            () => {
                                l && r && r.unobserve(l);
                            }
                        ),
                        [l, r],
                    );
                    let u = d.items.slice(t.index * o, t.index * o + o),
                        _ = d.pager && d.pager.total <= o ? 0 : 1,
                        p = !d.clipsWillLike.isEmpty && !d.clipsWillLike.isRejected;
                    return (0, i.jsxs)(
                        'div',
                        {
                            ref: s,
                            'data-index': t.index,
                            className: X().virtualItem,
                            style: { transform: 'translateY('.concat(t.start, 'px)') },
                            children: [
                                (0, i.jsx)('div', {
                                    style: { gridTemplateColumns: 'repeat('.concat(o, ', minmax(0, 1fr))') },
                                    className: (0, j.$)(X().virtualItemRow, {
                                        [X().virtualItemRow_withTopBorder]: t.index === _ + 1 && p,
                                        [X().virtualItemRow_withBottomBorder]: t.index === _ && p,
                                    }),
                                    children:
                                        null == u
                                            ? void 0
                                            : u.map((e, t) => {
                                                  if (!e) {
                                                      let e = c({ id: 'loading-messages.entity-is-loading' }, { entityName: c({ id: 'entity-names.clip' }) });
                                                      return (0, i.jsx)(k.k, { 'aria-label': e }, t);
                                                  }
                                                  return (0, i.jsx)(N.F, { clip: e }, e.clipId);
                                              }),
                                }),
                                t.index === _ && p && (0, i.jsx)(W, { className: X().clipsWillLike }),
                            ],
                        },
                        t.key,
                    );
                }),
                G = (0, o.PA)((e) => {
                    var t;
                    let { contentScrollRef: r } = e,
                        {
                            collection: { clips: o },
                            user: l,
                        } = (0, S.g)(),
                        [a, s] = (0, n.useState)(w),
                        [d, u] = (0, T.d)(),
                        p = o.pager && o.pager.total <= a ? 0 : 1,
                        { virtualizer: m, resizeObserver: f } = (0, P.r)({
                            gap: 24,
                            count: o.pager ? Math.ceil((null == (t = o.pager) ? void 0 : t.total) / a) : 5,
                            getEstimateSize: (e) => (e === p ? 800 : 400),
                            containerRef: d,
                        }),
                        v = (0, O.c)((e) => {
                            l.account.data.uid && o.getData({ userId: l.account.data.uid, page: e, pageSize: 20 });
                        }),
                        x = m.getTotalSize(),
                        h = m.getVirtualItems(),
                        C = (0, O.c)((e) => {
                            let t = Math.floor((e.startIndex * a) / 20),
                                r = Math.ceil((e.endIndex * a) / 20);
                            for (let e = t; e <= r; e++) v(e);
                        });
                    (0, n.useEffect)(() => {
                        o.isNeededToLoad && (null == r || r.scrollTo({ top: 0, behavior: 'instant' }), o.setInitialShimmer(), v());
                    }, [o, o.isNeededToLoad, v, r]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && C(m.range);
                        }, [C, m.range, m.isScrolling]);
                    let g = (0, L.A)(() => {
                        s(w);
                    }, 100);
                    return ((0, n.useEffect)(
                        () => (
                            g(),
                            window.addEventListener('resize', g),
                            () => {
                                window.removeEventListener('resize', g);
                            }
                        ),
                        [g],
                    ),
                    o.isEmpty)
                        ? (0, i.jsx)(V, {})
                        : o.isRejected
                          ? (0, i.jsx)(_.SomethingWentWrong, {})
                          : (0, i.jsx)('div', {
                                className: X().virtualScroll,
                                style: { height: ''.concat(x, 'px') },
                                ref: u,
                                'data-test-id': c.Kq.clip.COLLECTION_LIKED_CLIPS_BLOCK,
                                children: h.map((e) => (0, i.jsx)(Q, { virtualItem: e, resizeObserver: f, columns: a }, e.index)),
                            });
                }),
                J = (0, o.PA)(() => {
                    let {
                            collection: { clips: e },
                        } = (0, S.g)(),
                        { formatMessage: t } = (0, a.A)(),
                        r = (0, h.W)(),
                        o = (0, m.d)(),
                        { contentScrollRef: E, setContentScrollRef: j } = (0, C.g)();
                    return (!o && e.isLoaded && (0, l.redirect)(y.Z.collection.href),
                    (0, g.J)(e.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    e.isRejected)
                        ? (0, i.jsx)(_.SomethingWentWrong, {})
                        : (0, i.jsx)(x.n, {
                              pageId: f._Q.OWN_CLIPS,
                              children: (0, i.jsx)(v.j, {
                                  children: (0, i.jsxs)(p.h, {
                                      scrollElement: E,
                                      outerTitle: t({ id: 'entity-names.clips' }),
                                      children: [
                                          (0, i.jsx)(I.Y, {
                                              variant: I.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: r.canBack,
                                              children: (0, i.jsx)(u.DZ, {
                                                  id: 'collection-artists-header',
                                                  variant: 'h1',
                                                  weight: 'bold',
                                                  size: 'xl',
                                                  lineClamp: 1,
                                                  children: (0, i.jsx)(s.A, { id: 'entity-names.clips' }),
                                              }),
                                          }),
                                          (0, i.jsxs)(d.C, {
                                              scrollableContainerRef: j,
                                              className: R().root,
                                              containerClassName: R().content,
                                              scrollContentClassName: R().scrollContent,
                                              'data-test-id': c.Xk.collection.COLLECTION_CLIPS_PAGE,
                                              children: [
                                                  (0, i.jsx)(G, { contentScrollRef: E }),
                                                  (0, i.jsx)(A.A, { children: (0, i.jsx)(b.w, { className: R().footer }) }),
                                              ],
                                          }),
                                      ],
                                  }),
                              }),
                          });
                });
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => l });
            var i = r(55178);
            let o = (0, i.createContext)(null),
                l = () => (0, i.useContext)(o);
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var i = r(32290),
                o = r(77088),
                l = r.n(o);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        32496: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(32290),
                o = r(63618),
                l = r(79856),
                n = r(2352),
                a = r.n(n);
            let s = (e) => {
                let { className: t, textClassName: r, isActive: n } = e;
                return (0, i.jsx)('div', { className: (0, o.$)(a().root, t), children: (0, i.jsx)(l.W, { className: (0, o.$)(a().text, r), isActive: n, radius: 's' }) });
            };
        },
        33830: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 3377)), Promise.resolve().then(r.bind(r, 30604));
        },
        37717: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClips_root__uB8s_',
                virtualScroll: 'CollectionClipsPageClips_virtualScroll__o3uWm',
                virtualItem: 'CollectionClipsPageClips_virtualItem__UDzx8',
                virtualItemRow: 'CollectionClipsPageClips_virtualItemRow__RPIOY',
                virtualItemRow_withTopBorder: 'CollectionClipsPageClips_virtualItemRow_withTopBorder__Q6k2l',
                virtualItemRow_withBottomBorder: 'CollectionClipsPageClips_virtualItemRow_withBottomBorder__D5Dep',
                clipsWillLike: 'CollectionClipsPageClips_clipsWillLike__IhK8Q',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => H });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(70280),
                s = r(57594),
                c = r(53514),
                d = r(40484),
                u = r.n(d),
                _ = r(60900),
                p = r(16172),
                m = r(21732),
                f = r(91027),
                v = r(71926),
                x = r(47745),
                h = r(84062),
                C = r(28999),
                g = r(61258),
                y = r(19383);
            let S = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: o,
                            captionClassName: l,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: S } = (0, _.A)(),
                        {
                            track: b,
                            settings: { isMobile: A },
                        } = (0, s.g)(),
                        I = (0, h.Z)(t.url),
                        { sendNavigateSearchFeedback: E } = (0, C.z)(),
                        R = (0, x.N)(),
                        j = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: i, fullscreenPlayer: o, fullscreenVideoPlayer: l } = (0, s.g)(),
                                { modal: n } = i;
                            return (0, y.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), o.modal.isOpened && o.modal.close();
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, f.c)((e) => {
                                A && b.isOpened && b.close(), I(e);
                            }),
                        }),
                        L = (0, f.c)((e) => {
                            R({ to: p.QT.ArtistScreen }), null == E || E(), j(e);
                        });
                    return r && !t.various
                        ? (0, i.jsx)(g.N, {
                              'aria-label': S({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: o,
                              href: t.url,
                              onClick: L,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(a.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(a.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: l,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                b = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: o,
                            captionClassName: l,
                            captionSize: a,
                            allArtistsTitle: s,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  S,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: o,
                                                      captionClassName: l,
                                                      captionSize: a,
                                                      allArtistsTitle: s,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, r, o, l, a, s, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(S, {
                                artist: t,
                                withLink: r,
                                linkClassName: o,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: s,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var A = r(39407),
                I = r(63887);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: l } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, o.$)(u().spoiler, r),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': m.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var R = r(8055),
                j = r(6752),
                L = r(78035),
                O = r(78176),
                T = r(83598),
                N = r.n(T);
            let k = (0, l.PA)((e) => {
                    let { label: t, artists: r, forwardRef: o } = e;
                    return (0, i.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: o, children: t }),
                            (0, i.jsx)(a.ZI, { className: N().tooltipContent, children: r.map((e) => (0, i.jsx)(O.V, { artist: e, className: N().artistItem }, e.id)) }),
                        ],
                    });
                }),
                P = (0, n.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
            var w = r(19740),
                M = r(52598),
                D = r.n(M);
            let U = (0, l.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, i.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, o.$)(D().root, D().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, l.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: o } = e,
                        [l, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, s.g)(),
                        d = (0, f.c)(() => {
                            let e = o.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, j.L)(() =>
                            (0, R.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(U, { artists: t, label: r }) : (0, i.jsx)(P, { artists: t, label: r })) : r;
                }),
                H = (0, l.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: l = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: p = !0,
                            spoilerClassName: m,
                            linkClassName: f,
                            captionClassName: v,
                            captionSize: x,
                            variant: h = 'breakAll',
                            withAllArtistsTitle: C = !0,
                            withComposer: g = !0,
                            spoilerComponent: y,
                            withCustomTooltip: S = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: I,
                        } = e,
                        R = (0, n.useRef)(null),
                        [j, L] = (0, n.useState)(!1),
                        O = C
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(l)
                            : '',
                        {
                            settings: { isMobile: T },
                        } = (0, s.g)(),
                        N = 1 === r.length,
                        k = (0, n.useCallback)((e) => {
                            L(!0), e.preventDefault();
                        }, []),
                        P = (0, n.useMemo)(() => {
                            let e = r;
                            return (
                                _ && !j && (e = r.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!g && t.isComposer) return e.length ? e : [];
                                    let r = (0, i.jsx)(
                                        b,
                                        {
                                            artist: t,
                                            linkClassName: f,
                                            captionClassName: v,
                                            withLink: p && t.id !== A && (((!T || N) && I) || !I),
                                            captionSize: x,
                                            allArtistsTitle: O,
                                            withCustomTooltip: S,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, r]) : [r];
                                }, [])
                            );
                        }, [r, _, j, g, T, N, I, f, v, p, A, x, O, S, l]),
                        w = (0, n.useMemo)(() => {
                            if (!j && _ && _ < r.length) {
                                let e = r.length - _;
                                return (0, n.isValidElement)(y) ? y : (0, i.jsx)(E, { spoilerClassName: m, spoilerArtistsCount: e, handleOnSpoilerClick: k });
                            }
                        }, [r.length, k, j, m, y, _]),
                        M = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, i.jsx)(a.m_, {
                            referenceRef: R,
                            enabled: !!(C && O) && S && !I && !T,
                            offsetOptions: 4,
                            placement: 'top',
                            text: O,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: M,
                                className: (0, o.$)(u().root, u()['root_variant_'.concat(h)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: C && O && !S && !I ? O : void 0,
                                children: [P, w],
                            }),
                        });
                    return I ? (0, i.jsx)(B, { labelRef: R, artists: r, label: D }) : D;
                });
        },
        45807: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var i,
                o = r(72812),
                l = r(55178),
                n = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(l, 2));
                    },
                },
                a = {};
            function s(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return n[e](r, r.exports, s), r.exports;
            }
            var c = {};
            (() => {
                Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0);
                let e = s(810),
                    t = s(352);
                c.l = (r) => {
                    let [i, o] = (0, e.useState)(!0),
                        [l, n] = (0, e.useState)(!0),
                        a = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    (0, e.useEffect)(() => {
                        a();
                    }, [r, a]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', a),
                                window.addEventListener('resize', a),
                                () => {
                                    null == e || e.removeEventListener('scroll', a), window.removeEventListener('resize', a);
                                }
                            );
                        }, [r, a]);
                    let s = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: s,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: l,
                        shouldHideControls: i && l,
                    };
                };
            })(),
                c.X;
            var d = c.l;
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        49522: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var i = r(32290),
                o = r(63618),
                l = r(55178),
                n = r(21732),
                a = r(45807),
                s = r(63423),
                c = r(82586),
                d = r(60178),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: p,
                        buttonSize: m = 'xxxs',
                        buttonVariant: f = 'outline',
                    } = e,
                    { swipeBackward: v, swipeForward: x, shouldBackwardButtonBeDisabled: h, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, a.Y)(t),
                    y = (0, l.useCallback)(
                        (e) => {
                            v(), e.stopPropagation();
                        },
                        [v],
                    ),
                    S = (0, l.useCallback)(
                        (e) => {
                            x(), e.stopPropagation();
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: y,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: h,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(s.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: p }),
                            onClick: S,
                            size: m,
                            radius: 'round',
                            variant: f,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        50819: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => s });
            var i = r(32290),
                o = r(79856),
                l = r(32496),
                n = r(20541),
                a = r.n(n);
            let s = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: a().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(o.W, { isActive: t, className: a().cover, radius: 'l' }),
                        (0, i.jsx)(l.n, { isActive: t, className: a().title }),
                        (0, i.jsx)(l.n, { isActive: t, className: a().text }),
                    ],
                });
            };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        52843: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => o });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                o = (e, t) => {
                    let r = i(e, 3600),
                        o = i(e - 3600 * r, 60),
                        l = e - 3600 * r - 60 * o,
                        n = i(t || e, 3600) > 0,
                        a = [o, l];
                    return n && a.unshift(r), a.map((e) => String(e).padStart(2, '0')).join(':');
                };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        56755: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return (e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e;
            })({});
        },
        56797: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => m });
            var i = r(16172),
                o = r(52068),
                l = r(91027),
                n = r(79374),
                a = r(48922),
                s = r(84782),
                c = r(2792),
                d = r(37240),
                u = r(51012),
                _ = r(47498),
                p = r(62376);
            let m = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: m } = (0, d.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, _.R)(),
                    { skeleton: h } = (0, u.b)(),
                    { blockType: C, blockId: g, blockPosX: y, blockPosY: S, mainObjectType: b, mainObjectId: A } = (0, s.N)(),
                    { objectsCount: I, objectType: E, objectId: R, objectPosX: j, objectPosY: L } = (0, c.J)(),
                    O = (0, p.U)();
                return (0, l.c)(() => {
                    if (!t || !m || !a.xK.includes(m)) return;
                    let o = {
                        hash: r,
                        pageId: m,
                        entityType: C,
                        entityId: g,
                        entityPosX: y,
                        entityPosY: S,
                        objectId: R,
                        objectType: E,
                        objectPosX: j,
                        objectPosY: L,
                        objectsCount: I,
                        from: n.W[m],
                        to: i.QT.VideoScreen,
                    };
                    a.qG.includes(m) && ((o.tabId = f), (o.tabPos = v), (o.isTabSelectedByDefault = x)),
                        h && (o.skeletonId = h),
                        b && (o.mainObjectType = b),
                        A && (o.mainObjectId = A);
                    let l = (0, i.Fx)({ params: o, logger: O, context: 'useSendEventOnClipNavigated' });
                    l && e && (0, i.QS)(t.evgenInstance, l);
                });
            };
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, g: () => n });
            var i = r(29222),
                o = r(55178);
            let l = (0, o.createContext)(null);
            function n() {
                let e = (0, o.useContext)(l);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        58054: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => y });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(60900),
                a = r(39407),
                s = r(21732),
                c = r(71926),
                d = r(14858),
                u = r(8626),
                _ = r(31010),
                p = r(61945),
                m = r(57594),
                f = (function (e) {
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
            let v = (e, t, r) => {
                switch (e) {
                    case f.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case f.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                    case f.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                    case f.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                    case f.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case f.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                    case f.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                }
            };
            var x = r(61258),
                h = r(77088),
                C = r.n(h);
            let g = (0, l.PA)((e) => {
                    let { className: t } = e,
                        { location: r } = (0, m.g)(),
                        { formatDate: l } = (0, n.A)(),
                        { language: d } = (0, p.h)();
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(C().copyrights, t),
                        'data-test-id': s.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    l(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, i.jsx)(x.N, {
                                        target: '_blank',
                                        href: v(f.YANDEX, r.tld, d),
                                        className: (0, o.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': s.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, i.jsx)(a.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(x.N, {
                                target: '_blank',
                                href: v(f.YANDEX_PROJECTS, r.tld, d),
                                className: C().copyrightLink,
                                'data-test-id': s.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, i.jsx)(a.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                y = (0, l.PA)((e) => {
                    var t;
                    let { className: r } = e,
                        { user: l, location: n } = (0, m.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: h } = (0, p.h)(),
                        y = (0, d.w)(!0),
                        S = ((e) => {
                            let { platform: t, tld: r, language: o, userRegion: l } = e,
                                n = { title: (0, i.jsx)(a.A, { id: 'footer.links-copyright-holders' }), url: v(f.COPYRIGHT_HOLDER, r, o) },
                                s = { title: (0, i.jsx)(a.A, { id: 'footer.links-privacy-policy' }), url: v(f.PRIVACY_POLICY, r, o) },
                                c = { title: (0, i.jsx)(a.A, { id: 'footer.links-terms' }), url: v(f.AGREEMENT, r, o) },
                                d = { title: (0, i.jsx)(a.A, { id: 'footer.links-recommendation-rules' }), url: v(f.RECOMMENDATION_RULES, r, o) },
                                u = { title: (0, i.jsx)(a.A, { id: 'footer.links-help' }), url: v(f.HELP, r, o) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [n, c, d];
                                    return 'ru' === l && e.push(s), e.push(u), e;
                                }
                                case 'desktop':
                                    return [n, c, d, u];
                            }
                        })({ platform: 'desktop', tld: n.tld, language: h, userRegion: l.account.data.userSessionRegionIso });
                    return (0, i.jsxs)('footer', {
                        className: (0, o.$)(C().root, C().important, { [C().root_withOffsetForDeeplink]: u }, r),
                        'data-test-id': s.S7.FOOTER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: C().links,
                                children: [
                                    (0, i.jsx)('ol', {
                                        className: C().list,
                                        'data-test-id': s.S7.FOOTER_LINKS_LIST,
                                        children: S.map((e) => {
                                            let { title: t, url: r } = e;
                                            return (0, i.jsx)(
                                                'li',
                                                {
                                                    className: C().item,
                                                    children: (0, i.jsx)(x.N, {
                                                        target: '_blank',
                                                        href: r,
                                                        className: C().link,
                                                        'data-test-id': s.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                r,
                                            );
                                        }),
                                    }),
                                    (0, i.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: C().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: y },
                                        'data-test-id': s.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(g, {}),
                        ],
                    });
                });
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(32290),
                o = r(21732),
                l = r(70280),
                n = r(71926),
                a = r(48736),
                s = r.n(a);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: a, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(l.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(l.ZI, {
                                className: s().root,
                                'data-test-id': o.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: s().text,
                                    children: [
                                        a && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: a }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: s().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63415: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return (e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e;
            })({});
        },
        64170: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => y });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(60900),
                s = r(39407),
                c = r(63423),
                d = r(82586),
                u = r(71926),
                _ = r(16172),
                p = r(52068),
                m = r(62376),
                f = r(37240),
                v = r(83920),
                x = r(20472),
                h = r(12894),
                C = r(30310),
                g = r.n(C);
            let y = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: l } = (0, a.A)(),
                    C = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: r } = (0, p.gf)(),
                        { pageId: i } = (0, f.$)(),
                        o = (0, m.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let l = (0, _.Fx)({
                            params: {
                                entityType: _.LA.Error,
                                entityId: _.LA.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: _.QL.Fullscreen,
                                pagePlacement: _.c4.Fullscreen,
                                mainObjectType: _.ky.NonApplicable,
                                mainObjectId: _.ky.NonApplicable,
                            },
                            logger: o,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, _.z5)(t.evgenInstance, l);
                    }, [t, e, r, i, o]);
                })(C);
                let { sendRefreshEvent: y } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: r } = (0, f.$)(),
                            i = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let o = (0, _.Fx)({
                                    params: {
                                        actionType: _.X2.Refresh,
                                        userInteractionType: _.gi.Tap,
                                        entityType: _.LA.Error,
                                        entityId: _.LA.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: _.QL.Fullscreen,
                                        pagePlacement: _.c4.Fullscreen,
                                        mainObjectType: _.ky.NonApplicable,
                                        mainObjectId: _.ky.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                o && (0, _.bv)(e.evgenInstance, o);
                            }, [e, t, r, i]),
                        };
                    })(),
                    S = (0, n.useCallback)(() => {
                        y(), (window.location.href = x.Z.main.href);
                    }, [y]),
                    { contentRef: b } = (0, v.g)();
                return (0, i.jsxs)('div', {
                    className: (0, o.$)(g().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(h.L, { withBackwardFallback: '/', className: (0, o.$)(g().navigation, { [g().navigation_desktop]: !b }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, o.$)(g().content, { [g().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: g().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, o.$)(g().title, g().important), variant: 'h3', size: 'xs', children: C }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, o.$)(g().text, g().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: S,
                                    className: g().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(s.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        69e3: (e) => {
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
        70280: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => _, m_: () => u });
            var i,
                o = r(78035),
                l = r(80451),
                n = r(55178),
                a = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => o });
                        let o = i;
                    },
                    9682: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    6951: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
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
                    5882: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    58: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0);
                        let i = r(4377),
                            o = r(810),
                            l = r(1964),
                            n = r(2660),
                            a = r(3770),
                            s = r(5481);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: c, referenceRef: d, ...u } = e,
                                [_, p] = Array.isArray(c) ? c : [c],
                                m = (0, s.useTooltip)(u),
                                f = (0, o.useId)(),
                                v = (0, o.useId)(),
                                x = (0, o.useId)(),
                                h = (0, l.useMergeRefs)([m.refs.setReference, d]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, o.cloneElement)(_, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, o.cloneElement)(null != p ? p : (0, i.jsx)(a.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3770: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = r(1964),
                            s = r(7743),
                            c = i(r(9682));
                        (t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: d, forwardRef: u, text: _, ...p } = e;
                            return (0, o.jsx)(a.FloatingPortal, {
                                root: d,
                                children: (0, o.jsxs)('div', {
                                    className: (0, l.clsx)(c.default.root, t),
                                    ref: u,
                                    ...p,
                                    children: [
                                        (0, n.isValidElement)(i) && i,
                                        (0, o.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: c.default.text,
                                            children: null != r ? r : _,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e })));
                    },
                    5481: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0);
                        let i = r(4377),
                            o = r(810),
                            l = r(1964),
                            n = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: a,
                                    onOpenChange: s,
                                    isHoverEnabled: c = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: u,
                                    flipOptions: _ = {},
                                    shiftOptions: p = {},
                                    hoverSettings: m = n,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, o.useState)(t),
                                C = (0, o.useRef)(null),
                                g = null != a ? a : x,
                                y = null != s ? s : h,
                                S = (0, l.useFloating)({
                                    placement: r,
                                    open: g,
                                    onOpenChange: y,
                                    whileElementsMounted: l.autoUpdate,
                                    middleware: [
                                        (0, l.offset)(u),
                                        (0, l.flip)({ crossAxis: r.includes('-'), ..._ }),
                                        (0, l.shift)(p),
                                        (0, l.arrow)({ element: C }),
                                        (0, l.hide)(),
                                    ],
                                }),
                                b = S.context,
                                A = (0, l.useHover)(b, { move: !1, enabled: c && f, ...m }),
                                I = (0, l.useFocus)(b, { enabled: d && f }),
                                E = (0, l.useDismiss)(b),
                                R = (0, l.useRole)(b, { role: 'tooltip' }),
                                j = (0, l.useInteractions)([A, I, E, R]),
                                L = (0, o.useMemo)(() => {
                                    if (v) return (0, i.jsx)(l.FloatingArrow, { ref: C, context: S.context, ...v });
                                }, [v, S.context]);
                            return (0, o.useMemo)(() => {
                                var e;
                                return { open: g, setOpen: y, arrow: L, referenceHidden: null == (e = S.middlewareData.hide) ? void 0 : e.referenceHidden, ...j, ...S };
                            }, [g, y, L, j, S]);
                        };
                    },
                    7743: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = r(4721),
                            s = i(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: n = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(n)], s.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = i(r(5882));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: n, variant: s, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof n ? n : void 0;
                            return (0, o.jsx)(s, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: c && c > 0, [a.default.root_clamp_oneline]: c && 1 === c, [a.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e })));
                    },
                    1964: (e) => {
                        e.exports = o;
                    },
                    2660: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(n, 2));
                    },
                },
                s = {};
            function c(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return a[e].call(r.exports, r, r.exports, c), r.exports;
            }
            (c.d = (e, t) => {
                for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (c.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var d = {};
            (() => {
                Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0);
                var e = c(58);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = c(3770);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = d.u,
                _ = d._v;
            d.X$;
        },
        71610: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => s });
            var i = r(32290),
                o = r(55178),
                l = r(27576),
                n = r(42406),
                a = r(80536);
            let s = (e) => {
                let { children: t } = e,
                    r = (0, o.useRef)({}),
                    s = (0, o.useRef)(
                        (0, n.Gv)(
                            (e) => {
                                let t = (0, n.L5)(e.target),
                                    i = r.current[t];
                                if (i) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, l.A)());
                                            i.callback(!0, e), (i.showed = !0), (i.viewUuid = e);
                                        }, 1e3);
                                        i.timerId = e;
                                    }
                                    !e.isIntersecting && i.showed && (i.callback(!1, i.viewUuid), (i.showed = !1), (i.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(i.timerId);
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, o.useCallback)((e) => {
                        var t;
                        !r.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = s.current) || t.observe(e.elementRef.current), (r.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, o.useCallback)((e) => {
                        let t = r.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete r.current[e]);
                    }, []);
                (0, o.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = s.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, o.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, i.jsx)(a.B.Provider, { value: u, children: t });
            };
        },
        71760: (e) => {
            e.exports = {
                root: 'CollectionClipsPage_root__Z1yh9',
                content: 'CollectionClipsPage_content__68gZ1',
                scrollContent: 'CollectionClipsPage_scrollContent__6F_37',
                header: 'CollectionClipsPage_header__L_hq2',
                footer: 'CollectionClipsPage_footer__0IfmB',
            };
        },
        72151: (e) => {
            e.exports = {
                root: 'CollectionClipsPageClipsWillLike_root__uS0_8',
                carouselItem: 'CollectionClipsPageClipsWillLike_carouselItem__0C0_W',
                important: 'CollectionClipsPageClipsWillLike_important__U_2ET',
                carouselBlockHeader: 'CollectionClipsPageClipsWillLike_carouselBlockHeader__wDnJp',
                carouselBlock: 'CollectionClipsPageClipsWillLike_carouselBlock__La_8Q',
            };
        },
        73325: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(19383);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        75245: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => c });
            var i,
                o = r(55178),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => o });
                        let o = i;
                    },
                    9058: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5056: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = i(r(9058)),
                            s = (e) => {
                                let { className: t, itemClassName: r, children: i, forwardRef: s, role: c, ...d } = e;
                                return (0, o.jsx)('ol', {
                                    ref: s,
                                    className: (0, l.clsx)(a.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: n.Children.map(i, (e) => (0, o.jsx)('li', { className: (0, l.clsx)(a.default.item, r), children: e })),
                                });
                            };
                        t.Carousel = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function a(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return l[e].call(r.exports, r, r.exports, a), r.exports;
            }
            (a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X', { value: !0 }), (s.l = void 0);
                var e = a(5056);
                Object.defineProperty(s, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = s.l;
            s.X;
        },
        75265: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(55178).createContext)(null);
        },
        77088: (e) => {
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
        77223: (e, t, r) => {
            'use strict';
            var i, o;
            r.d(t, { n: () => o, o: () => i }),
                (function (e) {
                    (e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page');
                })(i || (i = {})),
                (function (e) {
                    (e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like');
                })(o || (o = {}));
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => C });
            var i = r(32290),
                o = r(63618),
                l = r(96103),
                n = r(55178),
                a = r(16172),
                s = r(21732),
                c = r(91027),
                d = r(50162),
                u = r(19740),
                _ = r(86269),
                p = r(71926),
                m = r(47745),
                f = r(84062),
                v = r(57594),
                x = r(16510),
                h = r.n(x);
            let C = (0, l.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    g = (0, m.N)(),
                    y = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(C, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    S = (0, c.c)((e) => {
                        l.modal.isOpened && l.modal.close(), g({ to: a.QT.ArtistScreen }), x(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, o.$)(h().root, r),
                            onClick: S,
                            'data-test-id': s.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
        },
        79248: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var i = r(77307),
                o = r(55178),
                l = r(91027),
                n = r(83920),
                a = r(57594);
            let s = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: _ },
                        } = (0, a.g)(),
                        { contentScrollRef: p } = (0, n.g)(),
                        m = (0, o.useRef)(new Map()),
                        f = (0, o.useRef)(void 0),
                        v = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = m.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: u,
                            initialRect: s,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && r ? i + r.scrollTop : 0;
                            })(_, d, p),
                        },
                        x = (0, i.XW)(v),
                        h = (0, i.Te)({ ...v, getScrollElement: () => p, initialOffset: null == p ? void 0 : p.scrollTop }),
                        C = _ ? x : h,
                        g = (0, l.c)(() => {
                            C.measure();
                        });
                    return (
                        (0, o.useEffect)(() => {
                            f.current ||
                                (f.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let i = e.contentRect.height;
                                            i && i !== m.current.get(r) && (m.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g();
                                }));
                        }, [g]),
                        { virtualizer: C, resizeObserver: f.current }
                    );
                };
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        84427: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => o });
            var i = r(57594);
            let o = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        85017: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => o });
            var i = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                o = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        86269: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => c });
            var i,
                o = r(55178),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (o && (o += ' '), (o += i));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => o });
                        let o = i;
                    },
                    7152: (e, t, r) => {
                        r.r(t), r.d(t, { default: () => i });
                        let i = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var o = null;
                            if ((void 0 !== i && (o = '' + i), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    4788: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0);
                        let o = r(4377),
                            l = r(5881),
                            n = r(810),
                            a = i(r(7152)),
                            s = (e) => {
                                let { forwardRef: t, radius: r, variant: i = 'default', children: n, className: s, withShadow: c, style: d, ...u } = e;
                                return (0, o.jsx)('div', {
                                    className: (0, l.clsx)(
                                        a.default.root,
                                        a.default['root_radius_'.concat(r)],
                                        a.default['root_variant_'.concat(i)],
                                        { [a.default.root_withShadow]: c },
                                        s,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: n,
                                });
                            };
                        t.Paper = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                n = {};
            function a(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return l[e].call(r.exports, r, r.exports, a), r.exports;
            }
            (a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'U', { value: !0 }), (s.X = void 0);
                var e = a(4788);
                Object.defineProperty(s, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = s.X;
            s.U;
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90169: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => a });
            var i = r(91027),
                o = r(72676),
                l = r(57594),
                n = r(44128);
            let a = (e) => {
                let { playContextParams: t, entityId: r, playbackId: a, sonataState: s } = e,
                    c = (0, n.e)(),
                    { sonataState: d } = (0, l.g)(),
                    u = s || d,
                    _ = !1,
                    p = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = u.contextId === String(v) && f === u.contextType;
                if (r) {
                    var h;
                    _ = r === (null == (h = u.entityMeta) ? void 0 : h.idWithContext);
                } else _ = x;
                return (
                    (p = _ && u.status === o.MT.PLAYING),
                    {
                        isPlaying: p,
                        isCurrent: _,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== r && r === i) {
                                null == c || c.togglePause(a);
                                return;
                            }
                            null == c || c.playContext(t, a);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == c || c.setProgress(0, a);
                        }),
                    }
                );
            };
        },
        90326: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => p });
            var i = r(32290),
                o = r(96103),
                l = r(55178),
                n = r(60900),
                a = r(21732),
                s = r(91027),
                c = r(63423),
                d = r(82586),
                u = r(2969);
            let _ = (0, o.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: o,
                            variant: l = 'default',
                            isPlaying: _ = !1,
                            onClick: p,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: C = 'round',
                            withHover: g,
                            withRipple: y = !1,
                            ariaDescribedBy: S,
                            forwardRef: b,
                            tabIndex: A,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: E,
                        } = e,
                        R = (0, u.b)(),
                        { formatMessage: j } = (0, n.A)(),
                        L = ''.concat(_ ? 'pause' : 'play').concat('filled' === l ? '_filled' : ''),
                        O = _ ? a.S7.PAUSE_BUTTON : a.S7.PLAY_BUTTON,
                        T = j(_ ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        N = (0, s.c)((e) => {
                            e.stopPropagation(), e.preventDefault(), null == p || p(e), E && R(!_);
                        });
                    return (0, i.jsx)(c.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: C,
                        size: o,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': T,
                        onClick: N,
                        icon: (0, i.jsx)(d.I, { variant: L, size: t, className: m }),
                        disabled: f,
                        withHover: g,
                        'aria-describedby': S,
                        ref: b,
                        tabIndex: A,
                        'aria-hidden': I,
                        'data-test-id': O,
                        children: h,
                    });
                }),
                p = (0, l.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        94218: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => _ });
            var i = r(32290),
                o = r(21916),
                l = r(39407),
                n = r(21732),
                a = r(91027),
                s = r(63423),
                c = r(71926),
                d = r(70204),
                u = r(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: r = 'default', withRipple: _ = !0, buttonText: p, isBlock: m, key: f, className: v } = e,
                    x = (0, o.useRouter)(),
                    h = (0, u.N)().get(d.QG),
                    C = (0, a.c)(() => {
                        h.authorizationUrl && x.push(h.authorizationUrl);
                    });
                return (0, i.jsx)(
                    s.$,
                    {
                        onClick: C,
                        className: v,
                        isBlock: m,
                        color: 'primary',
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        94315: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(20472),
                o = r(97201),
                l = r(36477);
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, l.u)(i.Z.video.href, { query: { [o.K.IDS]: e.join(','), [o.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        95226: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var i = r(32290),
                o = r(55178),
                l = r(73818);
            let n = (e) => {
                let {
                        blockId: t,
                        blockType: r,
                        blockIdForFrom: n,
                        blockPosX: a,
                        blockPosY: s,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: p,
                    } = e,
                    m = (0, o.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: r,
                            blockIdForFrom: n,
                            blockPosX: a,
                            blockPosY: s,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: p,
                        }),
                        [t, r, n, a, s, c, d, u, p],
                    );
                return (0, i.jsx)(l.p.Provider, { value: m, children: _ });
            };
        },
        95481: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => x });
            var i = r(55178),
                o = r(16172),
                l = r(52068),
                n = r(6752),
                a = r(62376),
                s = r(1677),
                c = r(48922),
                d = r(84782),
                u = r(30915),
                _ = r(18746),
                p = r(37240),
                m = r(51012),
                f = r(47498);
            let v = [
                    c._Q.HOME,
                    c._Q.LANDING,
                    c._Q.NON_MUSIC,
                    c._Q.OWN_COLLECTION,
                    c._Q.SEARCH,
                    c._Q.ARTIST,
                    c._Q.CONCERTS,
                    c._Q.CONCERT,
                    c._Q.ALBUM,
                    c._Q.PLAYLIST,
                    c._Q.SLIDES_SCREEN,
                    c._Q.PROMOLANDING_ALBUM,
                    c._Q.WAVE_LANDING_SCREEN,
                ],
                x = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, l.st)(),
                        r = (0, a.U)(),
                        { hash: x } = (0, l.gf)(),
                        { pageId: h } = (0, p.$)(),
                        { tabId: C, tabPos: g, isTabSelectedByDefault: y } = (0, f.R)(),
                        { offsetBlockPosY: S } = (0, u.u)(),
                        { blockId: b, blockType: A, blockPosX: I, blockPosY: E, mainObjectType: R, mainObjectId: j, objectsCount: L } = (0, d.N)(),
                        { filterKey: O, filterValue: T, filterPos: N } = (0, _.G)(),
                        { skeleton: k } = (0, m.b)(),
                        P = (0, n.L)(() => (void 0 !== S && void 0 !== E ? S + E : E));
                    return (0, i.useCallback)(() => {
                        if (!t || !h || !c.xK.includes(h) || !v.includes(h) || e.current) return;
                        let i = { hash: x, pageId: s.F[h], entityType: A, entityId: b, entityPosX: I, entityPosY: P, objectsCount: L };
                        void 0 !== O && ((i.filterKey = O), (i.filterValue = T), (i.filterPos = N)),
                            c.qG.includes(h) && ((i.tabId = C), (i.tabPos = g), (i.isTabSelectedByDefault = y)),
                            k && (i.skeletonId = k),
                            j && R && ((i.mainObjectType = R), (i.mainObjectId = j));
                        let l = (0, o.Fx)({ params: i, logger: r, context: 'useSendEventOnBlockLoaded' });
                        l && ((0, o.uY)(t.evgenInstance, l), (e.current = !0));
                    }, [t, h, x, A, b, I, P, O, T, N, L, k, j, R, r, C, g, y]);
                };
        },
        96299: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ClipCard_root__kzWjg',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        96689: (e) => {
            e.exports = {
                root: 'CollectionClipsPageEmpty_root__P29ns',
                content: 'CollectionClipsPageEmpty_content__gIM_C',
                icon: 'CollectionClipsPageEmpty_icon__jDAZP',
                title: 'CollectionClipsPageEmpty_title__DKJ_3',
                text: 'CollectionClipsPageEmpty_text__F_Too',
            };
        },
        97201: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => i });
            var i = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
        99872: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            var i = r(91027),
                o = r(57594),
                l = r(28816),
                n = r(94315);
            let a = () => {
                let { fullscreenVideoPlayer: e } = (0, o.g)(),
                    t = (0, l.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(r), e.setClipIndex(i), t((0, n.J)(r, i)), e.modal.open();
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                5718, 7034, 6639, 7475, 6347, 7972, 5108, 7258, 2690, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 6252, 7307, 6477, 7275, 2586, 8347, 7702,
                6874, 782, 4668, 9740, 1175, 4942, 4220, 9562, 7358,
            ],
            () => e((e.s = 33830)),
        ),
            (_N_E = e.O());
    },
]);
