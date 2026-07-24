(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => l });
            var i = r(21916),
                a = r(55178);
            let l = (e) => {
                let t = (0, i.usePathname)(),
                    [r, l] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), l(!0));
                    }, [e, r, t]);
            };
        },
        12113: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var i = r(32290),
                a = r(63618),
                l = r(62060),
                o = r(96103),
                n = r(55178),
                s = r(60900),
                d = r(80451),
                c = r(21732),
                u = r(71483),
                p = r(91027),
                _ = r(14934),
                f = r(50162),
                m = r(86269),
                v = r(71926),
                x = r(41677),
                h = r(56797),
                g = r(26089),
                b = r(94315),
                y = r(99872),
                C = r(37862),
                j = r(48922),
                S = r(23352),
                A = r(72396),
                I = r(52843),
                T = r(22191),
                N = r(63415),
                P = r(56755),
                R = r(90169),
                E = r(57594),
                w = r(13798),
                k = r(61258),
                M = r(90326),
                O = r(73325),
                L = r(96299),
                D = r.n(L);
            let U = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: o,
                        clip: L,
                        withVideo: U = !0,
                        artistIdWithoutLink: W,
                        viewUuid: V,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: H } = (0, E.g)(),
                    { formatMessage: B } = (0, s.A)(),
                    F = (0, y.C)(),
                    { from: J } = (0, A.f)({ pageId: j._Q.VIDEO_PLAYER, contextId: H.state.contextId, contextType: u.K.Various, blockId: C.U.CLIPS }),
                    Y = (0, T.P)(null != (t = L.duration) ? t : 0),
                    K = (0, g.M)(V),
                    Z = (0, h._)(V),
                    { ref: G, intersectionPropertyId: Q } = (0, S.n)({ callback: K }),
                    X = (0, n.useRef)(null),
                    q = U && L.previewUrl,
                    $ = (0, p.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    ee = (0, n.useMemo)(() => (0, l.A)($, 500), [$]),
                    et = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    er = (0, n.useMemo)(() => H.ids.indexOf(L.clipId), [H, L.clipId]),
                    { isPlaying: ei, togglePlay: ea } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: N.H.VARIOUS_CLIP_CONTEXT }, from: J },
                            queueParams: { index: er },
                            entitiesData: H.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(L.clipId),
                        sonataState: H.state,
                        playbackId: P.V.CLIP,
                    }),
                    el = z ? L.url : (0, b.J)(H.ids, er),
                    eo = (0, p.c)(() => {
                        z ? (F([L.clipId]), Z()) : ei || ea();
                    }),
                    en = (0, O.X)({ clip: L, callback: eo }),
                    es = B({ id: 'entity-names.clip-name' }, { clipName: L.title }),
                    ed = (0, n.useMemo)(
                        () =>
                            L.isAvailable
                                ? (0, i.jsxs)(m.t, {
                                      radius: 'm',
                                      className: (0, a.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: en,
                                      children: [
                                          q &&
                                              (0, i.jsx)('video', {
                                                  className: D().media,
                                                  ref: X,
                                                  poster: L.thumbnail && (0, d.createAvatarVideoUrl)(L.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: L.previewUrl, type: 'video/mp4' }),
                                              }),
                                          L.thumbnail &&
                                              (0, i.jsx)(f._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: L.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.createAvatarVideoUrl,
                                              }),
                                          void 0 !== L.duration &&
                                              (0, i.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': Y,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, I.E)(L.duration, L.duration) }),
                                              }),
                                          (0, i.jsx)(M.D, { variant: 'filled', className: D().playButton, onClick: en, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(m.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, i.jsx)(f.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': c.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [Y, L.isAvailable, L.thumbnail, L.previewUrl, L.duration, ee, et, en, q],
                    ),
                    ec = (0, n.useMemo)(
                        () =>
                            L.hasArtists
                                ? (0, i.jsx)(
                                      x.i,
                                      { linkClassName: (0, a.$)(D().artistLink, o), artists: L.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: W },
                                      L.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [W, L, o],
                    );
                return (0, i.jsx)(_.MN, {
                    ref: G,
                    className: D().root,
                    explicitMarkComponent:
                        L.explicitDisclaimer &&
                        (0, i.jsx)(w.N, { getDescriptionTexts: L.getDescriptionTexts, variant: L.explicitDisclaimer, size: 'xxs' }, L.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, i.jsx)(k.N, { href: el, onClick: en, children: es }),
                    title: (0, i.jsxs)(
                        v.HL,
                        {
                            className: (0, a.$)(D().title, r),
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
                                    onClick: en,
                                    'data-test-id': c.Kq.clip.CLIP_META_TITLE,
                                    children: L.title,
                                }),
                                L.version && (0, i.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(L.version) }),
                            ],
                        },
                        L.getKey('Title'),
                    ),
                    'data-intersection-property-id': Q,
                    view: ed,
                    description: ec,
                    'data-test-id': c.Kq.clip.CLIP_CARD,
                });
            });
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => x });
            var i = r(55178),
                a = r(16172),
                l = r(52068),
                o = r(6752),
                n = r(62376),
                s = r(1677),
                d = r(48922),
                c = r(84782),
                u = r(30915),
                p = r(18746),
                _ = r(2792),
                f = r(37240),
                m = r(51012),
                v = r(47498);
            let x = () => {
                let e = (0, n.U)(),
                    t = (0, l.st)(),
                    { hash: r } = (0, l.gf)(),
                    { pageId: x, displayReasonId: h } = (0, f.$)(),
                    { tabId: g, tabPos: b, isTabSelectedByDefault: y } = (0, v.R)(),
                    { offsetBlockPosY: C } = (0, u.u)(),
                    { blockType: j, blockId: S, blockPosX: A, blockPosY: I, mainObjectId: T, mainObjectType: N, displayReasonId: P } = (0, c.N)(),
                    { filterKey: R, filterValue: E, filterPos: w } = (0, p.G)(),
                    { objectType: k, objectsCount: M, objectId: O, objectPosX: L, objectPosY: D } = (0, _.J)(),
                    { skeleton: U } = (0, m.b)(),
                    W = null != P ? P : h,
                    V = (0, o.L)(() => (void 0 !== C && void 0 !== I ? C + I : I));
                return (0, i.useCallback)(
                    (i, l) => {
                        if (!t || !x || !d.xK.includes(x) || !d.fD.includes(x)) return;
                        let o = s.F[x];
                        if (!o) return;
                        let n = {
                            hash: r,
                            pageId: o,
                            entityType: j,
                            entityId: S,
                            entityPosX: A,
                            entityPosY: V,
                            objectsCount: M,
                            viewUuid: l,
                            objectType: k,
                            objectId: O,
                            objectPosX: L,
                            objectPosY: D,
                        };
                        void 0 !== R && ((n.filterKey = R), (n.filterValue = E), (n.filterPos = w)),
                            d.qG.includes(x) && ((n.tabId = g), (n.tabPos = b), (n.isTabSelectedByDefault = y)),
                            U && (n.skeletonId = U),
                            'string' == typeof T && 'string' == typeof N && ((n.mainObjectType = N), (n.mainObjectId = T)),
                            W && (n.displayReasonId = W);
                        let c = (0, a.Fx)({ params: n, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        c && (i ? (0, a.Pf)(t.evgenInstance, c) : (0, a.nv)(t.evgenInstance, c));
                    },
                    [t, W, S, A, V, j, R, w, E, r, y, e, T, N, O, L, D, k, M, x, U, g, b],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(32290),
                a = r(63618),
                l = r(96103),
                o = r(55178),
                n = r(60900),
                s = r(26252),
                d = r(21732),
                c = r(6752),
                u = r(82586),
                p = r(57594),
                _ = r(60244),
                f = r(90006),
                m = r.n(f);
            let v = (0, l.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: l, containerClassName: f, variant: v, size: x = 'xxxs', ...h } = e,
                    { formatMessage: g } = (0, n.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, p.g)(),
                    [y, C] = (0, o.useState)(null),
                    j = (0, c.L)(() => {
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
                    S = (0, o.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, o.useEffect)(() => {
                    r && r().then(C);
                }, [r, l]);
                let A = (null == y ? void 0 : y.join('\n')) || '',
                    I = !!(null == y ? void 0 : y.length) && !b,
                    T = A.length > 0 ? A : S;
                return (0, i.jsx)(_.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: I,
                    children: (0, i.jsx)('span', {
                        className: f,
                        children: (0, i.jsx)(u.I, {
                            className: (0, a.$)(m().explicitMark, t),
                            'aria-label': T,
                            variant: j,
                            size: x,
                            ...h,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => c, hg: () => d });
            var i,
                a = r(55178),
                l = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => a });
                        let a = i;
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
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
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
                        let a = r(4377),
                            l = r(5881),
                            o = r(9e3),
                            n = i(r(4831));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: i,
                                    menuControl: s,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: f,
                                } = e,
                                m = c || r,
                                v = s || i;
                            return (0, a.jsxs)('div', {
                                className: (0, l.clsx)(
                                    n.default.root,
                                    n.default.controls,
                                    { [n.default.controls_visible]: u },
                                    n.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, a.jsx)('div', { className: n.default.top, children: d }),
                                    (0, a.jsxs)('div', {
                                        className: (0, l.clsx)(n.default.bottom, _),
                                        children: [
                                            m && (0, a.jsxs)('div', { className: n.default.bottom_left, children: [c, r] }),
                                            v && (0, a.jsxs)('div', { className: n.default.bottom_right, children: [s, i] }),
                                        ],
                                    }),
                                    !!f && (0, a.jsx)(o.Label, { className: n.default.label, children: f }),
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
                        let a = r(4377),
                            l = r(810),
                            o = r(5881),
                            n = r(2582),
                            s = r(3758),
                            d = i(r(8346)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: i,
                                    textPosition: l = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: f,
                                    children: m,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, a.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, a.jsx)(s.SROnly, { tabIndex: -1, children: null != v ? v : u }),
                                        (0, a.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, a.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                f,
                                                (0, a.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(l)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, a.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, a.jsx)(n.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        p,
                                                        m,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, l.forwardRef)((e, t) => (0, a.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let a = r(4377),
                            l = r(5881),
                            o = r(2582),
                            n = i(r(6132));
                        t.Label = (e) => {
                            let { children: t, className: r, size: i = 's', ...s } = e;
                            return (0, a.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, l.clsx)(n.default.root, r),
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
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = i(r(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: i, ...s } = e,
                                d = (0, l.clsx)(n.default.root, { [n.default.focusable]: r }, t);
                            return (0, o.isValidElement)(i)
                                ? (0, o.cloneElement)(i, { ...s, className: (0, l.clsx)(d, i.props.className) })
                                : (0, a.jsx)('span', { className: d, ...s, children: i });
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
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = r(4721),
                            s = i(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, a.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, a.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    404: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = r(4721),
                            s = i(r(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: i = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, a.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(i)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, r) => (0, a.jsx)(t.HeadingComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = i(r(5882));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, a.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e })));
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
                        var a = r(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return a.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(a, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return l[e].call(r.exports, r, r.exports, n), r.exports;
            }
            (n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var s = {};
            (() => {
                Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0);
                var e = n(440);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = n(5817);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = s.kk,
                c = s.m7;
            s.X$;
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19383: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => u });
            var i = r(55178),
                a = r(27576),
                l = r(91027),
                o = r(70204),
                n = r(34186),
                s = r(57594),
                d = r(85017),
                c = r(19379);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: u,
                        callback: p,
                        onAfterHandled: _,
                        onBeforeHandle: f,
                        onReject: m,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: g },
                    } = (0, s.g)(),
                    b = (0, i.useRef)(String((0, a.A)())),
                    y = (0, i.useRef)(!1),
                    C = (0, i.useRef)(!1),
                    j = (0, i.useRef)(0),
                    S = (0, i.useRef)(!0),
                    A = (0, n.N)().get(o.U2),
                    I = (0, l.c)((e) => {
                        x && (null == e || e.preventDefault()), p && p(e), _ && _();
                    });
                return (
                    (0, i.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === b.current && !y.current && (I(), (y.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, I]),
                    (0, i.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, i.useEffect)(
                        () => () => {
                            S.current = !1;
                        },
                        [],
                    ),
                    (0, l.c)(async (e) => {
                        if (!C.current) {
                            C.current = !0;
                            try {
                                if ((null == f || f(e), t)) {
                                    var i, a, l;
                                    let o = t.getDisclaimerEntityRef(r),
                                        n = null != (i = null == u ? void 0 : u(t, o)) ? i : ''.concat(o.entityType, '_').concat(o.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = A.get(c.c.ExEx);
                                        if (null == t ? void 0 : t.includes(n)) return void I(e);
                                    }
                                    if (s) {
                                        null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(d.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != m ? m : null),
                                            h.setId(b.current),
                                            h.setEntityKey(n),
                                            h.setCurrentEntityRef(o.entityType, o.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (a = null == v ? void 0 : v.closeOnOutside) || a),
                                            h.setShouldCloseModalOnEscape(null == (l = null == v ? void 0 : v.closeOnEscape) || l),
                                            (j.current += 1);
                                        let r = j.current,
                                            i = await t.getModalDisclaimerData();
                                        if (j.current !== r || !1 === S.current) return;
                                        h.setModalData(null != i ? i : null), (y.current = !1), g.open();
                                        return;
                                    }
                                    x && (null == e || e.preventDefault()), I(e);
                                    return;
                                }
                                x && (null == e || e.preventDefault()), I(e);
                            } finally {
                                C.current = !1;
                            }
                        }
                    })
                );
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
                a = r(29913);
            let l = (e) => {
                let { seconds: t, hours: r, minutes: l } = (0, a.e)(e),
                    { formatMessage: o } = (0, i.A)();
                return o({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: l, seconds: t });
            };
        },
        22714: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(32290),
                a = r(55178),
                l = r(1176);
            let o = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s, children: d } = e,
                    c = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s }), [t, r, o, n, s]);
                return (0, i.jsx)(l.r.Provider, { value: c, children: d });
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var i = r(55178),
                a = r(12989),
                l = r(80536);
            let o = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = (0, i.useRef)(null),
                    n = (0, a.D)(),
                    s = (0, i.useId)(),
                    d = (0, i.useContext)(l.B),
                    c = (0, i.useCallback)(
                        (i, a) => {
                            e ? e(i, r ? a : void 0) : n(i, a), t && d.unobserveElement(s);
                        },
                        [e, d, s, n, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            d.observeElement({ elementRef: o, elementId: s, callback: c }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, c, s, n],
                    ),
                    { ref: o, intersectionPropertyId: s }
                );
            };
        },
        24522: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => Z });
            var i = r(32290),
                a = r(21916),
                l = r(63618),
                o = r(96103),
                n = r(55178),
                s = r(60900),
                d = r(21732),
                c = r(91027),
                u = r(71926),
                p = r(64170),
                _ = r(54639),
                f = r(12113),
                m = r(50819),
                v = r(7999),
                x = r(91853),
                h = r(84427),
                g = r(48922),
                b = r(22714),
                y = r(83808),
                C = r(83920),
                j = r(3796),
                S = r(57594),
                A = r(11262),
                I = r(28724),
                T = r(58054),
                N = r(32468),
                P = r(74694),
                R = r(45257),
                E = r(57815),
                w = r(22556),
                k = r(44242),
                M = r(14459),
                O = r(83992),
                L = r(42125),
                D = r(24535),
                U = r(47216),
                W = r(94821),
                V = r(26365);
            async function z(e, t) {
                var r, i, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let l = await (0, L.W)(t.locale),
                    o = l({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    n = l({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    title: o,
                    description: n,
                    openGraph: (0, D.i)({
                        ogTitle: o,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, O.v)({ tld: t.tld }),
                        siteName: l({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: o, description: n }),
                    facebook: (0, M.k)(),
                    appLinks: (0, k.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: l({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var H = r(22644),
                B = r(51714),
                F = r(42731),
                J = r.n(F);
            let Y = (0, o.PA)((e) => {
                var t, r;
                let { artistId: o, preloadedArtist: k, preloadedClips: M } = e,
                    {
                        artist: O,
                        disclaimerModalState: L,
                        settings: { isMobile: D },
                    } = (0, S.g)(),
                    { formatMessage: U } = (0, s.A)(),
                    { contentScrollRef: W, setContentScrollRef: V } = (0, C.g)(),
                    F = (0, y.W)(),
                    Y = (0, h.d)();
                (0, x.S)({ artist: null == (t = O.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let K = (0, c.c)((e) => {
                    O.clipsSubpage.getData({ artistId: o, page: e, pageSize: _.EV });
                });
                (0, A.X)(O.clipsSubpage.pagesLoader, K),
                    (0, B.G)(o),
                    (0, H._)(O, o),
                    (0, n.useEffect)(
                        () => () => {
                            O.clipsSubpage.reset();
                        },
                        [O, O.clipsSubpage],
                    ),
                    (0, j.J)(O.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                z({ artist: (0, E.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, w.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(O);
                let Z = O.clipsSubpage.isShimmerVisible ? 20 : O.clipsSubpage.items.length,
                    G = (0, n.useMemo)(() => ({ Footer: () => (0, i.jsx)(N.A, { children: (0, i.jsx)(T.w, { className: J().footer }) }) }), []),
                    Q = (0, n.useMemo)(() => U({ id: 'page.artist-clips-header' }, { artistName: O.commonSubPage.artistName }), [O.commonSubPage.artistName, U]),
                    X = [];
                return (O.clipsSubpage.isNeededToLoad && X.push(O.clipsSubpage.getData({ artistId: o, page: 0, pageSize: _.EV, preloadedClips: M })),
                O.infoLoadingState.isNeededToLoad && X.push(O.getInfo({ artistId: o, preloadedArtist: k })),
                X.length && (0, n.use)(Promise.allSettled(X)),
                (O.clipsSubpage.isNotFound || !Y) && (0, a.notFound)(),
                null == (r = O.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, i.jsx)(I.M, { modalState: L })
                    : O.clipsSubpage.isRejected
                      ? (0, i.jsx)(p.SomethingWentWrong, {})
                      : (0, i.jsx)(b.n, {
                            pageId: g._Q.ARTIST_CLIPS,
                            pageEntityId: o,
                            children: (0, i.jsx)(v.h, {
                                scrollElement: W,
                                outerTitle: Q,
                                children: (0, i.jsxs)('div', {
                                    className: J().root,
                                    'data-test-id': d.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, i.jsx)(P.Y, {
                                            variant: P.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: F.canBack,
                                            children: (0, i.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Q }),
                                        }),
                                        (0, i.jsx)(R.$, {
                                            className: (0, l.$)(J().scrollContainer, J().important),
                                            listClassName: J().content,
                                            itemClassName: J().item,
                                            customComponents: G,
                                            itemContentCallback: (e) => {
                                                let t = O.clipsSubpage.items[e];
                                                return t ? (0, i.jsx)(f.F, { clip: t }, t.clipId) : (0, i.jsx)(m.k, { isActive: !0 });
                                            },
                                            totalCount: Z,
                                            onGetDataByPage: K,
                                            pageSize: _.EV,
                                            totalRequests: O.clipsSubpage.requestsCount,
                                            handleRef: V,
                                            context: { listAriaLabel: U({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: D,
                                            useWindowScroll: D,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var K = r(17024);
            let Z = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return (e && (0, K.L)(e)) || (0, a.notFound)(), (0, i.jsx)(Y, { artistId: e });
            };
        },
        26089: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => _ });
            var i = r(16172),
                a = r(52068),
                l = r(91027),
                o = r(48922),
                n = r(84782),
                s = r(2792),
                d = r(37240),
                c = r(51012),
                u = r(47498),
                p = r(62376);
            let _ = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: _ } = (0, d.$)(),
                    { tabId: f, tabPos: m, isTabSelectedByDefault: v } = (0, u.R)(),
                    { blockType: x, blockId: h, blockPosX: g, blockPosY: b, mainObjectType: y, mainObjectId: C } = (0, n.N)(),
                    { objectsCount: j, objectType: S, objectId: A, objectPosX: I, objectPosY: T } = (0, s.J)(),
                    N = (0, p.U)(),
                    { skeleton: P } = (0, c.b)();
                return (0, l.c)((a) => {
                    if (!t || !_ || !o.xK.includes(_)) return;
                    let l = {
                        hash: r,
                        pageId: _,
                        entityType: x,
                        entityId: h,
                        entityPosX: g,
                        entityPosY: b,
                        objectsCount: j,
                        viewUuid: e,
                        objectType: S,
                        objectId: A,
                        objectPosX: I,
                        objectPosY: T,
                    };
                    o.qG.includes(_) && ((l.tabId = f), (l.tabPos = m), (l.isTabSelectedByDefault = v)),
                        P && (l.skeletonId = P),
                        y && (l.mainObjectType = y),
                        C && (l.mainObjectId = C);
                    let n = (0, i.Fx)({ params: l, logger: N, context: 'useSendEventOnClipShowedOrHidden' });
                    if (n) {
                        if (a) return void (0, i.Pf)(t.evgenInstance, n);
                        (0, i.nv)(t.evgenInstance, n);
                    }
                });
            };
        },
        28816: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => a });
            var i = r(55178);
            let a = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        28999: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => o });
            var i = r(55178),
                a = r(77223),
                l = r(75265);
            let o = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: o, position: n } = (0, i.useContext)(l.N) || {};
                if (void 0 === t || void 0 === r || void 0 === o || void 0 === n) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: a.n.LIKE, id: t, type: r, blockPosition: o, position: n });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.NAVIGATE, id: t, type: r, blockPosition: o, position: n }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: a.n.PLAY, id: t, type: r, blockPosition: o, position: n }),
                };
            };
        },
        29913: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            let i = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        32496: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(32290),
                a = r(63618),
                l = r(79856),
                o = r(2352),
                n = r.n(o);
            let s = (e) => {
                let { className: t, textClassName: r, isActive: o } = e;
                return (0, i.jsx)('div', { className: (0, a.$)(n().root, t), children: (0, i.jsx)(l.W, { className: (0, a.$)(n().text, r), isActive: o, radius: 's' }) });
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
            r.d(t, { i: () => V });
            var i = r(32290),
                a = r(63618),
                l = r(96103),
                o = r(55178),
                n = r(70280),
                s = r(57594),
                d = r(53514),
                c = r(40484),
                u = r.n(c),
                p = r(60900),
                _ = r(16172),
                f = r(21732),
                m = r(91027),
                v = r(71926),
                x = r(47745),
                h = r(84062),
                g = r(28999),
                b = r(61258),
                y = r(19383);
            let C = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: l,
                            captionSize: o = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: c,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: C } = (0, p.A)(),
                        {
                            track: j,
                            settings: { isMobile: S },
                        } = (0, s.g)(),
                        A = (0, h.Z)(t.url),
                        { sendNavigateSearchFeedback: I } = (0, g.z)(),
                        T = (0, x.N)(),
                        N = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: i, fullscreenPlayer: a, fullscreenVideoPlayer: l } = (0, s.g)(),
                                { modal: o } = i;
                            return (0, y.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), o.isOpened && (i.reset(), o.close()), a.modal.isOpened && a.modal.close();
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, m.c)((e) => {
                                S && j.isOpened && j.close(), A(e);
                            }),
                        }),
                        P = (0, m.c)((e) => {
                            T({ to: _.QT.ArtistScreen }), null == I || I(), N(e);
                        });
                    return r && !t.various
                        ? (0, i.jsx)(b.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: P,
                              title: c ? void 0 : d || t.name,
                              'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(n.m_, {
                                  enabled: !d && c,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: o, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(n.m_, {
                              enabled: !d && c,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: o,
                                  weight: 'medium',
                                  className: l,
                                  title: c ? void 0 : d || t.name,
                                  'data-test-id': f.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                j = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: l,
                            captionSize: n,
                            allArtistsTitle: s,
                            withCustomTooltip: d,
                            hoverSettings: c,
                            shouldUseSeparator: u = !0,
                        } = e,
                        p = (0, o.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: a,
                                                      captionClassName: l,
                                                      captionSize: n,
                                                      allArtistsTitle: s,
                                                      withCustomTooltip: d,
                                                      hoverSettings: c,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, r, a, l, n, s, d, c]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(C, {
                                artist: t,
                                withLink: r,
                                linkClassName: a,
                                captionClassName: l,
                                captionSize: n,
                                allArtistsTitle: s,
                                withCustomTooltip: d,
                                hoverSettings: c,
                            }),
                            p,
                        ],
                    });
                };
            var S = r(39407),
                A = r(63887);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: l } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(A.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, r),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': f.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var T = r(8055),
                N = r(6752),
                P = r(78035),
                R = r(78176),
                E = r(83598),
                w = r.n(E);
            let k = (0, l.PA)((e) => {
                    let { label: t, artists: r, forwardRef: a } = e;
                    return (0, i.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: a, children: t }),
                            (0, i.jsx)(n.ZI, { className: w().tooltipContent, children: r.map((e) => (0, i.jsx)(R.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, o.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
            var O = r(19740),
                L = r(52598),
                D = r.n(L);
            let U = (0, l.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: l } = (0, p.A)();
                    return (0, i.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, l.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: a } = e,
                        [l, n] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, s.g)(),
                        c = (0, m.c)(() => {
                            let e = a.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, N.L)(() =>
                            (0, T.A)(() => {
                                c();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                c(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, c],
                        ),
                        (0, o.useEffect)(() => {
                            c();
                        }, [t, c]),
                        0 !== t.length)
                    )
                        return (l || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(U, { artists: t, label: r }) : (0, i.jsx)(M, { artists: t, label: r })) : r;
                }),
                V = (0, l.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: l = ', ',
                            lineClamp: c,
                            visibleArtistsCount: p,
                            withLink: _ = !0,
                            spoilerClassName: f,
                            linkClassName: m,
                            captionClassName: v,
                            captionSize: x,
                            variant: h = 'breakAll',
                            withAllArtistsTitle: g = !0,
                            withComposer: b = !0,
                            spoilerComponent: y,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: S,
                            withContextMenu: A,
                        } = e,
                        T = (0, o.useRef)(null),
                        [N, P] = (0, o.useState)(!1),
                        R = g
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
                            settings: { isMobile: E },
                        } = (0, s.g)(),
                        w = 1 === r.length,
                        k = (0, o.useCallback)((e) => {
                            P(!0), e.preventDefault();
                        }, []),
                        M = (0, o.useMemo)(() => {
                            let e = r;
                            return (
                                p && !N && (e = r.slice(0, p)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let r = (0, i.jsx)(
                                        j,
                                        {
                                            artist: t,
                                            linkClassName: m,
                                            captionClassName: v,
                                            withLink: _ && t.id !== S && (((!E || w) && A) || !A),
                                            captionSize: x,
                                            allArtistsTitle: R,
                                            withCustomTooltip: C,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, r]) : [r];
                                }, [])
                            );
                        }, [r, p, N, b, E, w, A, m, v, _, S, x, R, C, l]),
                        O = (0, o.useMemo)(() => {
                            if (!N && p && p < r.length) {
                                let e = r.length - p;
                                return (0, o.isValidElement)(y) ? y : (0, i.jsx)(I, { spoilerClassName: f, spoilerArtistsCount: e, handleOnSpoilerClick: k });
                            }
                        }, [r.length, k, N, f, y, p]),
                        L = (0, o.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        D = (0, i.jsx)(n.m_, {
                            referenceRef: T,
                            enabled: !!(g && R) && C && !A && !E,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: L,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(h)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: g && R && !C && !A ? R : void 0,
                                children: [M, O],
                            }),
                        });
                    return A ? (0, i.jsx)(W, { labelRef: T, artists: r, label: D }) : D;
                });
        },
        42731: (e) => {
            e.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        50819: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => s });
            var i = r(32290),
                a = r(79856),
                l = r(32496),
                o = r(20541),
                n = r.n(o);
            let s = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: n().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(a.W, { isActive: t, className: n().cover, radius: 'l' }),
                        (0, i.jsx)(l.n, { isActive: t, className: n().title }),
                        (0, i.jsx)(l.n, { isActive: t, className: n().text }),
                    ],
                });
            };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        52843: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => a });
            let i = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                a = (e, t) => {
                    let r = i(e, 3600),
                        a = i(e - 3600 * r, 60),
                        l = e - 3600 * r - 60 * a,
                        o = i(t || e, 3600) > 0,
                        n = [a, l];
                    return o && n.unshift(r), n.map((e) => String(e).padStart(2, '0')).join(':');
                };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
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
            r.d(t, { _: () => f });
            var i = r(16172),
                a = r(52068),
                l = r(91027),
                o = r(79374),
                n = r(48922),
                s = r(84782),
                d = r(2792),
                c = r(37240),
                u = r(51012),
                p = r(47498),
                _ = r(62376);
            let f = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: f } = (0, c.$)(),
                    { tabId: m, tabPos: v, isTabSelectedByDefault: x } = (0, p.R)(),
                    { skeleton: h } = (0, u.b)(),
                    { blockType: g, blockId: b, blockPosX: y, blockPosY: C, mainObjectType: j, mainObjectId: S } = (0, s.N)(),
                    { objectsCount: A, objectType: I, objectId: T, objectPosX: N, objectPosY: P } = (0, d.J)(),
                    R = (0, _.U)();
                return (0, l.c)(() => {
                    if (!t || !f || !n.xK.includes(f)) return;
                    let a = {
                        hash: r,
                        pageId: f,
                        entityType: g,
                        entityId: b,
                        entityPosX: y,
                        entityPosY: C,
                        objectId: T,
                        objectType: I,
                        objectPosX: N,
                        objectPosY: P,
                        objectsCount: A,
                        from: o.W[f],
                        to: i.QT.VideoScreen,
                    };
                    n.qG.includes(f) && ((a.tabId = m), (a.tabPos = v), (a.isTabSelectedByDefault = x)),
                        h && (a.skeletonId = h),
                        j && (a.mainObjectType = j),
                        S && (a.mainObjectId = S);
                    let l = (0, i.Fx)({ params: a, logger: R, context: 'useSendEventOnClipNavigated' });
                    l && e && (0, i.QS)(t.evgenInstance, l);
                });
            };
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => c });
            var i = r(32290),
                a = r(21732),
                l = r(70280),
                o = r(71926),
                n = r(48736),
                s = r.n(n);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: r, title: n, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(l.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(l.ZI, {
                                className: s().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: s().text,
                                    children: [
                                        n && (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: s().description, children: t }),
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
        63611: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 24522));
        },
        70280: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => p, m_: () => u });
            var i,
                a = r(78035),
                l = r(80451),
                o = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function i() {
                            for (var e, t, r = 0, i = ''; r < arguments.length; )
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (i = e(t[r])) && (a && (a += ' '), (a += i));
                                            else for (r in t) t[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        r.r(t), r.d(t, { clsx: () => i, default: () => a });
                        let a = i;
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
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var l in ((i = {}), t)) 'key' !== l && (i[l] = t[l]);
                            else i = t;
                            return { $$typeof: r, type: e, key: a, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    58: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0);
                        let i = r(4377),
                            a = r(810),
                            l = r(1964),
                            o = r(2660),
                            n = r(3770),
                            s = r(5481);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: d, referenceRef: c, ...u } = e,
                                [p, _] = Array.isArray(d) ? d : [d],
                                f = (0, s.useTooltip)(u),
                                m = (0, a.useId)(),
                                v = (0, a.useId)(),
                                x = (0, a.useId)(),
                                h = (0, l.useMergeRefs)([f.refs.setReference, c]);
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, a.cloneElement)(p, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': m } : {}),
                                        ...f.getReferenceProps(),
                                        ...(0, o.getDataAttrFromProps)(u),
                                        key: v,
                                    }),
                                    f.context.open
                                        ? (0, a.cloneElement)(null != _ ? _ : (0, i.jsx)(n.TooltipContent, {}), {
                                              ref: f.refs.setFloating,
                                              style: { ...f.floatingStyles, visibility: f.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: f.arrow,
                                              ...(t ? { id: m } : {}),
                                              ...f.getFloatingProps(),
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
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = r(1964),
                            s = r(7743),
                            d = i(r(9682));
                        (t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: i, rootNode: c, forwardRef: u, text: p, ..._ } = e;
                            return (0, a.jsx)(n.FloatingPortal, {
                                root: c,
                                children: (0, a.jsxs)('div', {
                                    className: (0, l.clsx)(d.default.root, t),
                                    ref: u,
                                    ..._,
                                    children: [
                                        (0, o.isValidElement)(i) && i,
                                        (0, a.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: d.default.text,
                                            children: null != r ? r : p,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, o.forwardRef)((e, r) => (0, a.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e })));
                    },
                    5481: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0);
                        let i = r(4377),
                            a = r(810),
                            l = r(1964),
                            o = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: n,
                                    onOpenChange: s,
                                    isHoverEnabled: d = !0,
                                    isFocusEnabled: c = !0,
                                    offsetOptions: u,
                                    flipOptions: p = {},
                                    shiftOptions: _ = {},
                                    hoverSettings: f = o,
                                    enabled: m = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, a.useState)(t),
                                g = (0, a.useRef)(null),
                                b = null != n ? n : x,
                                y = null != s ? s : h,
                                C = (0, l.useFloating)({
                                    placement: r,
                                    open: b,
                                    onOpenChange: y,
                                    whileElementsMounted: l.autoUpdate,
                                    middleware: [
                                        (0, l.offset)(u),
                                        (0, l.flip)({ crossAxis: r.includes('-'), ...p }),
                                        (0, l.shift)(_),
                                        (0, l.arrow)({ element: g }),
                                        (0, l.hide)(),
                                    ],
                                }),
                                j = C.context,
                                S = (0, l.useHover)(j, { move: !1, enabled: d && m, ...f }),
                                A = (0, l.useFocus)(j, { enabled: c && m }),
                                I = (0, l.useDismiss)(j),
                                T = (0, l.useRole)(j, { role: 'tooltip' }),
                                N = (0, l.useInteractions)([S, A, I, T]),
                                P = (0, a.useMemo)(() => {
                                    if (v) return (0, i.jsx)(l.FloatingArrow, { ref: g, context: C.context, ...v });
                                }, [v, C.context]);
                            return (0, a.useMemo)(() => {
                                var e;
                                return { open: b, setOpen: y, arrow: P, referenceHidden: null == (e = C.middlewareData.hide) ? void 0 : e.referenceHidden, ...N, ...C };
                            }, [b, y, P, N, C]);
                        };
                    },
                    7743: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = r(4721),
                            s = i(r(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: i = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...p } = e;
                            return (0, a.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, l.clsx)(s.default.root, s.default['root_'.concat(i, '_').concat(o)], s.default['root_weight_'.concat(u)], d),
                                ...p,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, a.jsx)(t.CaptionComponent, { forwardRef: r, ...e })));
                    },
                    4721: function (e, t, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let a = r(4377),
                            l = r(5881),
                            o = r(810),
                            n = i(r(5882));
                        function s(e) {
                            let { forwardRef: t, style: r, className: i, children: o, variant: s, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, a.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, l.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        (t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e })));
                    },
                    1964: (e) => {
                        e.exports = a;
                    },
                    2660: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function d(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return n[e].call(r.exports, r, r.exports, d), r.exports;
            }
            (d.d = (e, t) => {
                for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (d.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var c = {};
            (() => {
                Object.defineProperty(c, 'X$', { value: !0 }), (c._v = c.u = void 0);
                var e = d(58);
                Object.defineProperty(c, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = d(3770);
                Object.defineProperty(c, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var u = c.u,
                p = c._v;
            c.X$;
        },
        73325: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var i = r(19383);
            let a = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: a } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: a, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        75265: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (0, r(55178).createContext)(null);
        },
        77223: (e, t, r) => {
            'use strict';
            var i, a;
            r.d(t, { n: () => a, o: () => i }),
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
                })(a || (a = {}));
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => g });
            var i = r(32290),
                a = r(63618),
                l = r(96103),
                o = r(55178),
                n = r(16172),
                s = r(21732),
                d = r(91027),
                c = r(50162),
                u = r(19740),
                p = r(86269),
                _ = r(71926),
                f = r(47745),
                m = r(84062),
                v = r(57594),
                x = r(16510),
                h = r.n(x);
            let g = (0, l.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    x = (0, m.Z)(t.url),
                    b = (0, f.N)(),
                    y = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(g, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    C = (0, d.c)((e) => {
                        l.modal.isOpened && l.modal.close(), b({ to: n.QT.ArtistScreen }), x(e);
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, a.$)(h().root, r),
                            onClick: C,
                            'data-test-id': s.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(p.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        y,
                    ],
                });
            });
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
            r.d(t, { d: () => a });
            var i = r(57594);
            let a = () => {
                let {
                    settings: { isMobile: e },
                } = (0, i.g)();
                return !e;
            };
        },
        85017: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i, n: () => a });
            var i = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                a = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90169: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            var i = r(91027),
                a = r(72676),
                l = r(57594),
                o = r(44128);
            let n = (e) => {
                let { playContextParams: t, entityId: r, playbackId: n, sonataState: s } = e,
                    d = (0, o.e)(),
                    { sonataState: c } = (0, l.g)(),
                    u = s || c,
                    p = !1,
                    _ = !1,
                    { contextData: f } = t,
                    {
                        type: m,
                        meta: { id: v },
                    } = f,
                    x = u.contextId === String(v) && m === u.contextType;
                if (r) {
                    var h;
                    p = r === (null == (h = u.entityMeta) ? void 0 : h.idWithContext);
                } else p = x;
                return (
                    (_ = p && u.status === a.MT.PLAYING),
                    {
                        isPlaying: _,
                        isCurrent: p,
                        togglePlay: (0, i.c)(() => {
                            var e;
                            let i = null == (e = u.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== r && r === i) {
                                null == d || d.togglePause(n);
                                return;
                            }
                            null == d || d.playContext(t, n);
                        }),
                        restartPlay: (0, i.c)(() => {
                            null == d || d.setProgress(0, n);
                        }),
                    }
                );
            };
        },
        90326: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => _ });
            var i = r(32290),
                a = r(96103),
                l = r(55178),
                o = r(60900),
                n = r(21732),
                s = r(91027),
                d = r(63423),
                c = r(82586),
                u = r(2969);
            let p = (0, a.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: a,
                            variant: l = 'default',
                            isPlaying: p = !1,
                            onClick: _,
                            iconClassName: f,
                            disabled: m,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: g = 'round',
                            withHover: b,
                            withRipple: y = !1,
                            ariaDescribedBy: C,
                            forwardRef: j,
                            tabIndex: S,
                            ariaHidden: A,
                            shouldSendAnalyticsOnPlayClick: I,
                        } = e,
                        T = (0, u.b)(),
                        { formatMessage: N } = (0, o.A)(),
                        P = ''.concat(p ? 'pause' : 'play').concat('filled' === l ? '_filled' : ''),
                        R = p ? n.S7.PAUSE_BUTTON : n.S7.PLAY_BUTTON,
                        E = N(p ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        w = (0, s.c)((e) => {
                            e.stopPropagation(), e.preventDefault(), null == _ || _(e), I && T(!p);
                        });
                    return (0, i.jsx)(d.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: g,
                        size: a,
                        flexIcon: !0,
                        withRipple: y,
                        'aria-label': E,
                        onClick: w,
                        icon: (0, i.jsx)(c.I, { variant: P, size: t, className: f }),
                        disabled: m,
                        withHover: b,
                        'aria-describedby': C,
                        ref: j,
                        tabIndex: S,
                        'aria-hidden': A,
                        'data-test-id': R,
                        children: h,
                    });
                }),
                _ = (0, l.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        94315: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var i = r(20472),
                a = r(97201),
                l = r(36477);
            let o = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, l.u)(i.Z.video.href, { query: { [a.K.IDS]: e.join(','), [a.K.ACTIVE_INDEX]: String(t) } });
                return r;
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
            r.d(t, { C: () => n });
            var i = r(91027),
                a = r(57594),
                l = r(28816),
                o = r(94315);
            let n = () => {
                let { fullscreenVideoPlayer: e } = (0, a.g)(),
                    t = (0, l.p)();
                return (0, i.c)(function (r) {
                    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    e.setIds(r), e.setClipIndex(i), t((0, o.J)(r, i)), e.modal.open();
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 6347, 7972, 5108, 6639, 4555, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 3266, 6477, 7275, 2586, 8347, 7702, 6874,
                861, 782, 4668, 9740, 1175, 2125, 4220, 9562, 7358,
            ],
            () => e((e.s = 63611)),
        ),
            (_N_E = e.O());
    },
]);
