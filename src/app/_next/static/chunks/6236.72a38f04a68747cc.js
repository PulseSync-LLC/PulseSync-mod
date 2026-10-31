(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6236],
    {
        714: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        3409: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { b: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.EMPTY = 'EMPTY'),
                        (e.OTHER = 'OTHER'));
                })(i || (i = {})));
        },
        4284: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
            };
        },
        4803: (e) => {
            e.exports = {
                root: 'WheelItem_root__rTS4x',
                important: 'WheelItem_important__l3Yv0',
                coverContainer: 'WheelItem_coverContainer__K_MG_',
                coverContainer_iconCover: 'WheelItem_coverContainer_iconCover___b3qE',
                multivibeContainer: 'WheelItem_multivibeContainer__6xdF2',
                multivibeCover: 'WheelItem_multivibeCover__DruJ2',
                multivibeAvatar: 'WheelItem_multivibeAvatar__CxLIm',
                multivibeControl: 'WheelItem_multivibeControl__lGcom',
                cover: 'WheelItem_cover__8Ljm6',
                innerCover: 'WheelItem_innerCover__9UVAJ',
                title: 'WheelItem_title___kPQk',
                title_accentColor: 'WheelItem_title_accentColor__QcDTs',
                description: 'WheelItem_description__XcQtW',
                titleContainer: 'WheelItem_titleContainer__PKr4f',
                explicitMark: 'WheelItem_explicitMark___BhCp',
                explicitMarkContainer: 'WheelItem_explicitMarkContainer__U630c',
                entityMeta: 'WheelItem_entityMeta__Zv3Op',
                icon: 'WheelItem_icon__ubVWk',
            };
        },
        12040: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                root_disabled: 'WheelDesktopItem_root_disabled__fWAAR',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        14841: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        21750: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
        22786: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        28610: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        49226: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { Wheel: () => e1 }));
            var i = a(88800),
                l = a(71625),
                n = a(84961),
                s = a(53548),
                o = a(92716),
                r = a(79070),
                c = a(82204),
                d = a(9630),
                m = a(72288),
                u = a(72042),
                p = a(2058),
                _ = a(29993),
                h = a(18593),
                b = a(61691),
                v = a(3409);
            let j = (e) => {
                    let t = e.data.meta;
                    if ('albums' in t) {
                        var a, i, l;
                        return null != (l = null == (i = t.albums) || null == (a = i[0]) ? void 0 : a.type) ? l : b._.ALBUM;
                    }
                    return b._.ALBUM;
                },
                C = () => {
                    let { formatMessage: e } = (0, p.A)(),
                        { wheel: t, sonataState: a } = (0, m.g)();
                    return (0, _.c)((i, l) => {
                        var n;
                        let s = ((e) => {
                            var t, a, i, l, n, s, o, r;
                            if (!e || 'object' != typeof e) return { type: v.b.EMPTY };
                            let c = e.sourceContext,
                                d = null != c ? c : e.context,
                                m = e.entity,
                                u = null == (t = d.data) ? void 0 : t.type,
                                p = null == (i = d.data) || null == (a = i.meta) ? void 0 : a.id,
                                _ = null == (n = m.data) || null == (l = n.meta) ? void 0 : l.id;
                            if (!u || void 0 === p) return { type: v.b.OTHER };
                            switch (u) {
                                case h.K.Album:
                                    return { type: v.b.ALBUM, data: { id: Number(p), trackData: { id: _, albumType: j(m) } } };
                                case h.K.Artist:
                                    return { type: v.b.ARTIST, data: { id: p.toString(), trackData: { id: _, albumType: j(m) } } };
                                case h.K.Playlist:
                                    return {
                                        type: v.b.PLAYLIST,
                                        data: {
                                            playlistUuid: String(null != (r = null == (o = d.data) || null == (s = o.meta) ? void 0 : s.playlistUuid) ? r : p),
                                            trackData: { id: _, albumType: j(m) },
                                        },
                                    };
                                case h.K.Vibe:
                                    return { type: v.b.WAVE, data: { seeds: String(p).split(',') } };
                                case h.K.Generative:
                                    return { type: v.b.GENERATIVE };
                                default:
                                    return { type: v.b.OTHER, data: { id: _, albumType: j(m) } };
                            }
                        })(i);
                        ((null == (n = a.entityMeta) ? void 0 : n.isTrackMusic) || l || !t.lastRequestId) && t.getData({ context: s, forceFetch: l }, e);
                    });
                };
            var x = a(4086),
                y = a(41928),
                I = a(9519),
                E = a(93609),
                T = a(74567),
                N = a(14841);
            let k = 'feedbacks';
            class M extends T.F {
                async addFeedback(e) {
                    let t = (0, N.q)(e);
                    return this.executeTransaction((a) => {
                        let i = a.transaction([k], 'readwrite').objectStore(k);
                        return i.get(t).then((a) => {
                            if (!a) return i.add({ ...e, uid: this.uid, feedbackKey: t });
                        });
                    })
                        .then(() => void 0)
                        .catch(E.A);
                }
                async getFeedbacks() {
                    return this.executeTransaction(
                        (e) =>
                            e
                                .getAllFromIndex(k, 'uid', this.uid)
                                .then((e) =>
                                    e
                                        .sort((e, t) => e.timestamp - t.timestamp)
                                        .reduce(
                                            (e, t) => (
                                                e.push({
                                                    feedbackKey: t.feedbackKey,
                                                    feedback: { wheelId: t.wheelId, timestamp: t.timestamp, eventType: t.eventType, item: t.item, position: t.position },
                                                }),
                                                e
                                            ),
                                            [],
                                        ),
                                )
                                .then((e) => e),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentFeedbacks(e) {
                    return this.executeTransaction((t) => {
                        let a = t.transaction([k], 'readwrite').objectStore(k);
                        return Promise.all(e.map((e) => a.delete(e))).then(() => void 0);
                    }).catch(E.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_wheel_feedbacks',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(k, { keyPath: 'feedbackKey' }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, I._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var f = a(65724),
                g = a(61758),
                L = a(44361),
                W = a(17392),
                D = a(28163);
            let S = Math.PI / 2,
                w = (e) => {
                    let { translateXPx: t, opacity: a } = ((e) => {
                        let t = Math.abs(e) / 4,
                            a = Math.min(t / 2, 1),
                            i = 120 * (1 + Math.cos(((e) => (e <= 1 ? Math.PI - e * S : e <= 2 ? S - (e - 1) * S : 0))(t)));
                        return {
                            translateXPx: i,
                            opacity:
                                1 -
                                0.86 *
                                    ((e) => {
                                        let t = Math.min(Math.max(e, 0), 1);
                                        return t * t * (3 - 2 * t);
                                    })((a - 0.42) / 0.5800000000000001),
                        };
                    })(e);
                    return { transform: 'translate3d('.concat(t, 'px, 0, 0)'), opacity: a };
                },
                A = { slideLabelMessage: '', slideRole: 'listitem' },
                P = { forceToAxis: !0, sensitivity: 0.3 },
                O = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return i ? Math.min(l, a - l) : l;
                };
            var U = a(4284),
                V = a.n(U),
                R = a(75177),
                B = a(22786),
                H = a(77948),
                $ = a(29504),
                F = a(60757),
                K = a(29008),
                Y = a(54152),
                q = a(5407),
                z = a(38003),
                X = a(76675),
                G = a(28830),
                Q = a(14518),
                J = a(84384),
                Z = a(39079),
                ee = a(33355),
                et = a(62270),
                ea = a.n(et),
                ei = a(90224),
                el = a(8990),
                en = a(39267),
                es = a(4803),
                eo = a.n(es);
            let er = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { pageId: l } = (0, Q.$)(),
                        { openIntroModalFromPlay: n } = (0, ee.e)(),
                        o = (0, K.r)(t.data.type),
                        c = ''.concat(o, ' ').concat(t.data.title),
                        { from: d } = (0, J.f)({ pageId: l }),
                        m = (0, q.P)(),
                        u = (0, X.b)(),
                        p = (0, z.D)(),
                        b = (0, _.c)((e, a) => {
                            (p(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: v, intersectionPropertyId: j } = (0, G.n)({ callback: b, withViewUuid: !0 }),
                        {
                            isPlaying: C,
                            isCurrent: x,
                            togglePlay: y,
                        } = (0, Z.D)({ playContextParams: { contextData: { type: h.K.Album, meta: { id: t.data.id }, from: d }, loadContextMeta: !0 } }),
                        I = (0, F.c)({ album: t.data, callback: y }),
                        E = (0, _.c)(() => {
                            !(!a || m()) && (n() || (I(), u(!C), t.handleFeedbackClick()));
                        }),
                        T = (0, s.useCallback)(
                            (e) =>
                                (0, i.jsx)('div', {
                                    className: eo().coverContainer,
                                    children: (0, i.jsx)(en.q, {
                                        isAvailable: t.data.isAvailable,
                                        isDisliked: !1,
                                        coverUri: t.data.coverUri,
                                        title: t.data.title,
                                        className: (0, f.$)(ea().playButtonCell, eo().cover, eo().important),
                                        coverClassName: eo().innerCover,
                                        alt: c,
                                        radius: 'xs',
                                        playButtonIconSize: 'l',
                                        fallbackIconSize: 'm',
                                        ...e,
                                    }),
                                }),
                            [t.data.isAvailable, t.data.coverUri, t.data.title, c],
                        ),
                        N = null == T ? void 0 : T({ onPlayButtonClick: E, isPlaying: C, isCurrent: x }),
                        k = (0, r.L)(() =>
                            t.description
                                ? (0, i.jsx)($.HL, {
                                      className: eo().description,
                                      variant: 'span',
                                      lineClamp: 1,
                                      'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                      children: t.description,
                                  })
                                : null,
                        ),
                        M = (0, r.L)(() => {
                            var e;
                            return (null == (e = t.data.artists) ? void 0 : e.length) ? ''.concat((0, Y.X)(t.data.artists), ' — ').concat(t.data.title) : t.data.title;
                        });
                    return (0, i.jsxs)(el.C, {
                        ref: v,
                        'data-intersection-property-id': j,
                        className: (0, f.$)(ea().root, eo().root, eo().important),
                        'aria-label': c,
                        onClick: E,
                        'data-test-id': W.e8.wheel.WHEEL_ALBUM_ITEM,
                        children: [
                            N,
                            (0, i.jsxs)('div', {
                                className: eo().entityMeta,
                                children: [
                                    k,
                                    (0, i.jsxs)('div', {
                                        className: eo().titleContainer,
                                        children: [
                                            (0, i.jsx)($.HL, {
                                                className: eo().title,
                                                variant: 'span',
                                                lineClamp: t.description ? 3 : 4,
                                                'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                                children: M,
                                            }),
                                            t.data.explicitDisclaimer &&
                                                (0, i.jsx)(ei.N, {
                                                    className: eo().explicitMark,
                                                    containerClassName: eo().explicitMarkContainer,
                                                    getDescriptionTexts: t.data.getDescriptionTexts,
                                                    variant: t.data.explicitDisclaimer,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ec = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { album: l, resumeFrom: n } = t.data,
                        { trackId: s, startPositionSec: o } = n,
                        c = (0, d.e)(),
                        { pageId: m } = (0, Q.$)(),
                        { openIntroModalFromPlay: u } = (0, ee.e)(),
                        { from: p } = (0, J.f)({ pageId: m }),
                        b = (0, K.r)(l.type),
                        v = (0, q.P)(),
                        j = (0, X.b)(),
                        x = (0, z.D)(),
                        y = C(),
                        I = ''.concat(b, ' ').concat(l.title),
                        E = (0, _.c)((e, a) => {
                            (x(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: T, intersectionPropertyId: N } = (0, G.n)({ callback: E, withViewUuid: !0 }),
                        {
                            isPlaying: k,
                            isCurrent: M,
                            togglePlay: g,
                        } = (0, Z.D)({
                            playContextParams: { contextData: { type: h.K.Album, meta: { id: l.id }, from: p }, loadContextMeta: !0, queueParams: { entityId: s } },
                            entityId: ''.concat(s, ':').concat(l.id),
                        }),
                        L = (0, _.c)(async () => {
                            if ((await g(), M || !c)) return;
                            await c.setProgress(o);
                            let e = c.state.queueState.currentEntity.value;
                            e && y(e, !0);
                        }),
                        D = (0, F.c)({ album: l, callback: L }),
                        S = (0, _.c)(() => {
                            !(!a || v()) && (u() || (D(), j(!k), t.handleFeedbackClick()));
                        }),
                        w = (0, r.L)(() =>
                            t.description
                                ? (0, i.jsx)($.HL, {
                                      className: eo().description,
                                      variant: 'span',
                                      lineClamp: 1,
                                      'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                      children: t.description,
                                  })
                                : null,
                        );
                    return (0, i.jsxs)(el.C, {
                        ref: T,
                        'data-intersection-property-id': N,
                        className: (0, f.$)(ea().root, eo().root, eo().important),
                        'aria-label': I,
                        onClick: S,
                        'data-test-id': W.e8.wheel.WHEEL_NON_MUSIC_ITEM,
                        children: [
                            (0, i.jsx)('div', {
                                className: eo().coverContainer,
                                children: (0, i.jsx)(en.q, {
                                    isAvailable: l.isAvailable,
                                    isDisliked: !1,
                                    coverUri: l.coverUri,
                                    title: l.title,
                                    className: (0, f.$)(ea().playButtonCell, eo().cover, eo().important),
                                    coverClassName: eo().innerCover,
                                    alt: I,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    onPlayButtonClick: S,
                                    isPlaying: k,
                                    isCurrent: M,
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: eo().entityMeta,
                                children: [
                                    w,
                                    (0, i.jsxs)('div', {
                                        className: eo().titleContainer,
                                        children: [
                                            (0, i.jsx)($.HL, {
                                                className: eo().title,
                                                variant: 'span',
                                                lineClamp: t.description ? 3 : 4,
                                                'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                                children: l.title,
                                            }),
                                            l.explicitDisclaimer &&
                                                (0, i.jsx)(ei.N, {
                                                    className: eo().explicitMark,
                                                    containerClassName: eo().explicitMarkContainer,
                                                    getDescriptionTexts: l.getDescriptionTexts,
                                                    variant: l.explicitDisclaimer,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var ed = a(52300),
                em = a(96527),
                eu = a(4370),
                ep = a(78940),
                e_ = a(49176),
                eh = a(81877);
            let eb = (0, n.PA)((e) => {
                var t, a;
                let { item: l, shouldNavigateOnClick: n = !0 } = e,
                    s = (0, em.N)(),
                    c = (0, z.D)(),
                    { multivibe: d } = (0, m.g)(),
                    u = (0, _.c)((e, t) => {
                        (c(e, null != t ? t : ''), e && l.handleFeedbackView());
                    }),
                    p = l.data.url === eu.Z.multivibe.href,
                    { ref: h, intersectionPropertyId: b } = (0, G.n)({ callback: u, withViewUuid: !0 }),
                    v = (0, ep.Z)(null != (t = l.data.url) ? t : ''),
                    j = (0, r.L)(() =>
                        l.description
                            ? (0, i.jsx)($.HL, {
                                  className: eo().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: l.description,
                              })
                            : null,
                    ),
                    C = (0, _.c)((e) => {
                        var t;
                        n && (p ? d.promoModal.open() : v(e), s({ to: o.AppScreen.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                    }),
                    x = (0, _.c)((e) => {
                        (e.code === e_.v.SPACE || e.code === e_.v.ENTER) && (e.preventDefault(), C());
                    });
                return (0, i.jsxs)(el.C, {
                    ref: h,
                    'data-intersection-property-id': b,
                    className: (0, f.$)(ea().root, eo().root, eo().important),
                    'aria-label': ''.concat(l.data.title, ' ').concat(null != (a = l.description) ? a : ''),
                    role: 'link',
                    tabIndex: 0,
                    onClick: C,
                    onKeyDown: x,
                    'data-test-id': W.e8.wheel.WHEEL_PROMO_ITEM,
                    children: [
                        (0, i.jsx)('div', {
                            className: eo().coverContainer,
                            children: (0, i.jsx)(eh.B, {
                                className: (0, f.$)(eo().cover, eo().important),
                                src: l.data.cover.uri,
                                size: 100,
                                alt: l.data.title,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                fallbackIconSize: 'm',
                                withLoadingIndicator: !1,
                            }),
                        }),
                        (0, i.jsxs)('div', {
                            className: eo().entityMeta,
                            children: [
                                j,
                                (0, i.jsxs)('div', {
                                    className: eo().titleContainer,
                                    children: [
                                        (0, i.jsx)($.HL, {
                                            className: eo().title,
                                            variant: 'span',
                                            lineClamp: l.description ? 3 : 4,
                                            'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: l.data.title,
                                        }),
                                        (0, i.jsx)(ed.I, { className: eo().icon, variant: 'link_rounded', size: 'xxs' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ev = a(64284),
                ej = a(47964),
                eC = a(90420),
                ex = a(52726);
            let ey = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { pageId: l } = (0, Q.$)(),
                        { openIntroModalFromPlay: n } = (0, ee.e)(),
                        o = (0, q.P)(),
                        { freeAccess: r } = (0, m.g)(),
                        [c, u] = (0, s.useState)(!1),
                        p = (0, X.b)(),
                        h = (0, z.D)(),
                        b = (0, d.e)(),
                        v = C(),
                        j = (0, _.c)((e, a) => {
                            (h(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: x, intersectionPropertyId: y } = (0, G.n)({ callback: j, withViewUuid: !0 }),
                        { resetContext: I } = (0, ej.B)({ seeds: t.data.seeds, pageIdForFrom: l, blockIdForFrom: ''.concat(ev.U.RADIO, '-').concat(ev.U.WHEEL) }),
                        E = (0, _.c)(() => {
                            var e;
                            if (!(!a || o())) {
                                if (r.isFreeWebUser) return void u(!0);
                                n() ||
                                    (I(t.data.seeds),
                                    t.data.seeds.includes(eC.yx) &&
                                        String(null == b || null == (e = b.state.queueState.currentEntity.value) ? void 0 : e.context.data.meta.id).includes(eC.yx) &&
                                        v(null == b ? void 0 : b.state.queueState.currentEntity.value, !0),
                                    p(!0),
                                    t.handleFeedbackClick());
                            }
                        }),
                        T = (0, s.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, i.jsx)('div', {
                                          className: (0, f.$)(eo().coverContainer, eo().coverContainer_iconCover),
                                          children: (0, i.jsx)(eh.B, {
                                              className: (0, f.$)(eo().cover, eo().important),
                                              src: t.data.agent.cover.uri,
                                              size: 100,
                                              alt: t.data.title,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              fallbackIconSize: 'm',
                                              withLoadingIndicator: !1,
                                          }),
                                      })
                                    : null,
                            [t.data.agent, t.data.title],
                        ),
                        N = (0, _.c)((e) => {
                            (e.code === e_.v.SPACE || e.code === e_.v.ENTER) && (e.preventDefault(), E());
                        });
                    return (0, i.jsxs)(el.C, {
                        ref: x,
                        'data-intersection-property-id': y,
                        className: (0, f.$)(ea().root, eo().root, eo().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: E,
                        onKeyDown: N,
                        'data-test-id': W.e8.wheel.WHEEL_RESHUFFLE_ITEM,
                        children: [
                            (0, i.jsx)(ex.S, {
                                isOpened: c,
                                onOpenChange: u,
                                isEnabled: r.isFreeWebUser,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: T,
                            }),
                            (0, i.jsx)('div', {
                                className: eo().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)($.HL, {
                                        className: (0, f.$)(eo().title, eo().title_accentColor),
                                        variant: 'span',
                                        lineClamp: 4,
                                        'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                }),
                eI = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a = !0 } = e,
                        { vibeSettings: l, freeAccess: n } = (0, m.g)(),
                        [r, c] = (0, s.useState)(!1),
                        d = (0, em.N)(),
                        u = (0, z.D)(),
                        p = (0, _.c)((e, a) => {
                            (u(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: h, intersectionPropertyId: b } = (0, G.n)({ callback: p, withViewUuid: !0 }),
                        v = (0, _.c)(() => {
                            if (a) {
                                if ((t.handleFeedbackClick(), n.isFreeWebUser)) return void c(!0);
                                (l.modal.open(), d({ to: o.AppScreen.MyWaweSettingsScreen }));
                            }
                        }),
                        j = (0, _.c)((e) => {
                            (e.code === e_.v.SPACE || e.code === e_.v.ENTER) && (e.preventDefault(), v());
                        }),
                        C = (0, s.useCallback)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, f.$)(eo().coverContainer, eo().coverContainer_iconCover),
                                    children: (0, i.jsx)(eh.B, {
                                        className: (0, f.$)(eo().cover, eo().important),
                                        src: t.data.cover.uri,
                                        size: 100,
                                        alt: t.data.title,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        fallbackIconSize: 'm',
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                            [t.data.cover.uri, t.data.title],
                        );
                    return (0, i.jsxs)(el.C, {
                        ref: h,
                        'data-intersection-property-id': b,
                        className: (0, f.$)(ea().root, eo().root, eo().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: v,
                        onKeyDown: j,
                        'data-test-id': W.e8.wheel.WHEEL_SETTING_ITEM,
                        children: [
                            (0, i.jsx)(ex.S, { isOpened: r, onOpenChange: c, isEnabled: n.isFreeWebUser, placement: 'bottom', textVariant: 'vibe', renderChildren: C }),
                            (0, i.jsx)('div', {
                                className: eo().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)($.HL, {
                                        className: eo().title,
                                        variant: 'span',
                                        lineClamp: 4,
                                        'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                        children: t.data.title,
                                    }),
                                }),
                            }),
                        ],
                    });
                });
            var eE = a(55211);
            let eT = (0, n.PA)((e) => {
                var t;
                let { item: a, shouldPlayOnClick: l = !0 } = e,
                    { pageId: n } = (0, Q.$)(),
                    { openIntroModalFromPlay: o } = (0, ee.e)(),
                    c = (0, q.P)(),
                    { freeAccess: d } = (0, m.g)(),
                    [u, p] = (0, s.useState)(!1),
                    h = (0, X.b)(),
                    b = (0, z.D)(),
                    v = (0, _.c)((e, t) => {
                        (b(e, null != t ? t : ''), e && a.handleFeedbackView());
                    }),
                    { ref: j, intersectionPropertyId: C } = (0, G.n)({ callback: v, withViewUuid: !0 }),
                    {
                        isPlaying: x,
                        togglePlay: y,
                        isCurrent: I,
                    } = (0, ej.B)({ seeds: a.data.seeds, pageIdForFrom: n, blockIdForFrom: ''.concat(ev.U.RADIO, '-').concat(ev.U.WHEEL) }),
                    E = (0, _.c)(() => {
                        if (!(!l || c())) {
                            if (d.isVibeStartRestricted) return void p(!0);
                            o() || (y(), h(!x), a.handleFeedbackClick());
                        }
                    }),
                    T = a.style === B.y.MULTIVIBE,
                    N = (0, s.useCallback)(
                        () =>
                            a.data.agent
                                ? (0, i.jsx)('div', {
                                      className: (0, f.$)(eo().coverContainer, { [eo().multivibeContainer]: T }),
                                      children: (0, i.jsx)(eE.n, {
                                          alt: ''.concat(a.data.description, ' ').concat(a.data.title),
                                          agent: a.data.agent,
                                          isPlaying: x,
                                          isCurrent: I,
                                          onPlayButtonClick: E,
                                          className: (0, f.$)(ea().playButtonCell, eo().cover, eo().important),
                                          playButtonIconSize: T ? 'm' : 'l',
                                          fallbackIconSize: T ? 'xs' : 'm',
                                          coverClassName: (0, f.$)({ [eo().multivibeCover]: T }),
                                          entityCoverClassName: (0, f.$)({ [eo().multivibeAvatar]: T }),
                                          controlClassName: (0, f.$)({ [eo().multivibeControl]: T }),
                                      }),
                                  })
                                : null,
                        [a.data.agent, a.data.description, a.data.title, x, I, E, T],
                    ),
                    k = (0, r.L)(() =>
                        a.description
                            ? (0, i.jsx)($.HL, {
                                  className: eo().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: a.description,
                              })
                            : null,
                    );
                return (0, i.jsxs)(el.C, {
                    ref: j,
                    'data-intersection-property-id': C,
                    className: (0, f.$)(ea().root, eo().root, eo().important),
                    'aria-label': ''.concat(null != (t = a.data.description) ? t : '', ' ').concat(a.data.title),
                    onClick: E,
                    'data-test-id': W.e8.wheel.WHEEL_VIBE_ITEM,
                    children: [
                        (0, i.jsx)(ex.S, {
                            isOpened: u,
                            onOpenChange: p,
                            isEnabled: d.isVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.data.stationType,
                            renderChildren: N,
                        }),
                        (0, i.jsxs)('div', {
                            className: eo().entityMeta,
                            children: [
                                k,
                                (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)($.HL, {
                                        className: eo().title,
                                        variant: 'span',
                                        lineClamp: a.description ? 3 : 4,
                                        'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                        children: a.data.title,
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var eN = a(19994),
                ek = a(21750),
                eM = a.n(ek);
            let ef = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: eM().root,
                    children: [
                        (0, i.jsx)('div', { className: eM().coverContainer, children: (0, i.jsx)(eN.W, { isActive: t, className: eM().cover, radius: 'xs' }) }),
                        (0, i.jsxs)('div', {
                            className: eM().meta,
                            children: [
                                (0, i.jsx)(eN.W, { isActive: t, className: eM().title, radius: 's' }),
                                (0, i.jsx)(eN.W, { isActive: t, className: eM().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var eg = a(12040),
                eL = a.n(eg);
            let eW = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a, originalIndex: l, objectsCount: n, isShimmerVisible: s } = e,
                        c = (0, r.L)(() => {
                            switch (t.type) {
                                case R.D.WAVE:
                                    if (t.style === B.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(H.B, {
                                            objectId: t.id,
                                            objectType: o.DomainObjectType.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            objectsCount: n,
                                            children: (0, i.jsx)(ey, { item: t, shouldPlayOnClick: a }),
                                        });
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eT, { item: t, shouldPlayOnClick: a }),
                                    });
                                case R.D.ALBUM:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(er, { item: t, shouldPlayOnClick: a }),
                                    });
                                case R.D.NON_MUSIC:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: t.data.album.mainObjectType,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(ec, { item: t, shouldPlayOnClick: a }),
                                    });
                                case R.D.PROMO_LINK:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eb, { item: t, shouldNavigateOnClick: a }),
                                    });
                                case R.D.SETTING:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eI, { item: t, shouldActionOnClick: a }),
                                    });
                            }
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, f.$)(eL().root, { [eL().root_disabled]: t.isDisabled }),
                        children: [
                            (0, i.jsx)('div', { className: (0, f.$)(eL().element, { [eL().element_hidden]: s }), children: c }),
                            (0, i.jsx)('div', {
                                className: (0, f.$)(eL().shimmer, { [eL().shimmer_visible]: s }),
                                children: s && (0, i.jsx)(ef, { isShimmerActive: !0 }),
                            }),
                        ],
                    });
                }),
                eD = Math.floor(4.5),
                eS = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, f.$)(V().root, t),
                        children: (0, i.jsx)('div', {
                            className: V().wrapper,
                            children: Array.from({ length: 9 }, (e, t) =>
                                (0, i.jsx)('div', { className: V().slide, style: w(t - eD), children: (0, i.jsx)(ef, { isShimmerActive: !0 }) }, t),
                            ),
                        }),
                    });
                },
                ew = (e) => {
                    e.slides.forEach((e) => {
                        let t = e.progress;
                        Number.isFinite(t) &&
                            ((e, t) => {
                                let { transform: a, opacity: i } = w(t);
                                ((e.style.transform = String(a)), (e.style.opacity = String(i)));
                            })(e, t);
                    });
                },
                eA = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: o, isEmpty: r },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, p.A)(),
                        d = (0, s.useRef)(null),
                        u = (0, D.f)(),
                        [h, b] = (0, s.useState)(9),
                        v = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(22 / e.length) }, () => e).flat()))(a);
                    ((0, s.useEffect)(() => {
                        u();
                    }, [u]),
                        (0, s.useEffect)(() => {
                            let e = d.current;
                            e && 0 !== a.length && e.realIndex !== n && (e.slideToLoop(n, 0), ew(e));
                        }, [n, a.length]));
                    let j = (0, _.c)((e) => {
                            o(e.realIndex);
                        }),
                        C = (0, _.c)((e) => {
                            b(Math.max(4, Math.min(9, Math.floor(e.wrapperEl.clientHeight / 106))));
                        }),
                        x = (0, _.c)((e) => {
                            ((d.current = e), ew(e));
                        }),
                        y = (0, _.c)((e) => {
                            ew(e);
                        }),
                        I = (0, _.c)((e) => {
                            (e.el.classList.remove(V().root_transitioning), o(e.realIndex), ew(e));
                        }),
                        E = (0, _.c)((e) => {
                            e.el.classList.add(V().root_transitioning);
                        }),
                        T = (0, _.c)((e, t) => (a) => {
                            e >= 3 && d.current && (a.stopPropagation(), d.current.slideToLoop(t));
                        });
                    return l && r
                        ? (0, i.jsx)(eS, { className: t })
                        : (0, i.jsx)(L.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: h,
                              slidesPerView: h,
                              initialSlide: n,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [g.Jq, g.FJ, g.U1],
                              a11y: A,
                              freeMode: !0,
                              mousewheel: P,
                              className: (0, f.$)(V().root, t),
                              wrapperClass: V().wrapper,
                              onSwiper: x,
                              onResize: C,
                              onRealIndexChange: j,
                              onSlideChangeTransitionStart: E,
                              onTransitionEnd: I,
                              onProgress: y,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_DESKTOP,
                              children: v.map((e, t) => {
                                  let s = O(t, n, v.length),
                                      o = T(s, t);
                                  return (0, i.jsx)(
                                      L.qr,
                                      {
                                          className: V().slide,
                                          'data-test-id': W.e8.wheel.WHEEL_DESKTOP_SLIDE,
                                          inert: e.isDisabled,
                                          onClickCapture: o,
                                          children: (0, i.jsx)(eW, {
                                              item: e,
                                              shouldActionOnClick: s < 3,
                                              originalIndex: t % a.length,
                                              objectsCount: a.length,
                                              isShimmerVisible: l,
                                          }),
                                      },
                                      e.data.getKey(t),
                                  );
                              }),
                          });
                }),
                eP = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return i && Math.abs(l) > a / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var eO = a(91796),
                eU = a.n(eO),
                eV = a(57496),
                eR = a(35412);
            let eB = [
                { position: 7, opacity: 1 },
                { position: 12, opacity: 0.92 },
                { position: 16, opacity: 0.85 },
                { position: 20, opacity: 0.78 },
                { position: 23, opacity: 0.72 },
                { position: 26, opacity: 0.65 },
                { position: 29, opacity: 0.59 },
                { position: 31, opacity: 0.53 },
                { position: 33, opacity: 0.47 },
                { position: 35, opacity: 0.41 },
                { position: 37, opacity: 0.35 },
                { position: 39, opacity: 0.28 },
                { position: 42, opacity: 0.22 },
                { position: 45, opacity: 0.15 },
                { position: 48, opacity: 0.08 },
                { position: 52, opacity: 0 },
            ];
            var eH = a(28610),
                e$ = a.n(eH);
            let eF = (e) => {
                let { color: t } = e;
                return (0, i.jsx)('div', {
                    className: e$().root,
                    style: ((e) => {
                        let { h: t, s: a } = (0, eR.g8)(e),
                            { r: i, g: l, b: n } = (0, eR.E2)(e),
                            s = eB
                                .map((e) => {
                                    let { position: t, opacity: a } = e,
                                        s = Math.round(i * a),
                                        o = Math.round(l * a),
                                        r = Math.round(n * a);
                                    return 'rgba('.concat(s, ', ').concat(o, ', ').concat(r, ', ').concat(a, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(s, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(a, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var eK = a(73602),
                eY = a.n(eK);
            let eq = [B.y.PROMO, B.y.MULTIVIBE],
                ez = [B.y.CONTROL, B.y.CONTROL_ACCENT],
                eX = (0, n.PA)((e) => {
                    let { item: t, originalIndex: a, objectsCount: l } = e,
                        n = (0, r.L)(() => {
                            switch (t.type) {
                                case R.D.WAVE:
                                    if (t.style === B.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(H.B, {
                                            objectId: t.id,
                                            objectType: o.DomainObjectType.Wave,
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            objectsCount: l,
                                            children: (0, i.jsx)(ey, { item: t }),
                                        });
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Wave,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(eT, { item: t }),
                                    });
                                case R.D.ALBUM:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Album,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(er, { item: t }),
                                    });
                                case R.D.NON_MUSIC:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: t.data.album.mainObjectType,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(ec, { item: t }),
                                    });
                                case R.D.PROMO_LINK:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(eb, { item: t }),
                                    });
                                case R.D.SETTING:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: o.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(eI, { item: t }),
                                    });
                            }
                        }),
                        s = (0, r.L)(() => {
                            switch (t.type) {
                                case R.D.WAVE:
                                    var e;
                                    return null == (e = t.data.agent) ? void 0 : e.cover.color;
                                case R.D.ALBUM:
                                    return t.data.averageColor;
                                case R.D.NON_MUSIC:
                                    return t.data.album.averageColor;
                                case R.D.PROMO_LINK:
                                    return t.data.color;
                                default:
                                    return;
                            }
                        }),
                        c = (0, r.L)(() => {
                            let e = t.style && eq.some((e) => e === t.style);
                            return s && e ? s : (0, eV.OH)(s).primary;
                        }),
                        d = !t.style || !ez.some((e) => e === t.style);
                    return (0, i.jsxs)('div', {
                        className: (0, f.$)(eY().root, { [eY().root_disabled]: t.isDisabled }),
                        children: [d && (0, i.jsx)(eF, { color: c }), (0, i.jsx)('div', { className: eY().content, children: n })],
                    });
                });
            var eG = a(714),
                eQ = a.n(eG);
            let eJ = () => (0, i.jsx)('div', { className: eQ().root, children: (0, i.jsx)('div', { className: eQ().petal }) }),
                eZ = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, f.$)(eU().root, t),
                        children: (0, i.jsx)('div', {
                            className: eU().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: (0, f.$)(
                                            eU().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    a = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? eU().slide_active
                                                    : t < 2
                                                      ? (0, f.$)(eU().slide_near, eU()['slide_near_'.concat(a)])
                                                      : t < 3
                                                        ? (0, f.$)(eU().slide_medium, eU()['slide_medium_'.concat(a)])
                                                        : (0, f.$)(eU().slide_far, eU()['slide_far_'.concat(a)]);
                                            })(t),
                                        ),
                                        children: (0, i.jsx)(eJ, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                e0 = (0, n.PA)((e) => {
                    let { className: t, inert: a, items: l, isShimmerVisible: n } = e,
                        {
                            wheel: { activeIndex: o, setActiveIndex: r },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, p.A)(),
                        d = (0, D.f)(),
                        [u, h] = (0, s.useState)(null),
                        b = 3 * l.length;
                    (0, s.useEffect)(() => {
                        d();
                    }, [d]);
                    let v = (0, _.c)((e) => {
                            r(e.realIndex);
                        }),
                        j = (0, _.c)((e) => {
                            h(e.clickedIndex);
                        }),
                        C = (0, _.c)(() => {
                            h(null);
                        });
                    return n
                        ? (0, i.jsx)(eZ, { className: t })
                        : (0, i.jsx)(L.RC, {
                              inert: a,
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: l.length + 1,
                              modules: [g.Jq, g.U1],
                              a11y: A,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, f.$)(eU().root, t),
                              wrapperClass: eU().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: v,
                              onTransitionEnd: v,
                              onTap: j,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_MOBILE,
                              children: Array.from({ length: b }, (e, t) => {
                                  let a = t % l.length,
                                      n = l[a],
                                      s = Math.floor(t / l.length);
                                  if (void 0 === n) return null;
                                  let r = O(t, o, b, !1),
                                      c = eP(t, o, b, !1);
                                  return (0, i.jsx)(
                                      L.qr,
                                      {
                                          inert: n.isDisabled,
                                          className: (0, f.$)(
                                              eU().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? eU().slide_active
                                                      : e < 2
                                                        ? (0, f.$)(eU().slide_near, eU()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, f.$)(eU().slide_medium, eU()['slide_medium_'.concat(t)])
                                                          : (0, f.$)(eU().slide_far, eU()['slide_far_'.concat(t)]))(r, c),
                                              { [eU().slide_tap]: t === u },
                                          ),
                                          onAnimationEnd: C,
                                          children: (0, i.jsx)(eX, { item: n, originalIndex: a, objectsCount: l.length }),
                                      },
                                      ''.concat(n.data.getKey(a), '-').concat(s),
                                  );
                              }),
                          });
                }),
                e1 = (0, n.PA)((e) => {
                    let { className: t, inert: a } = e,
                        {
                            wheel: n,
                            settings: { isMobile: p },
                        } = (0, m.g)(),
                        _ = (0, d.e)(),
                        h = C(),
                        b = (() => {
                            let e = (0, y.N)().get(x.WA),
                                t = null == e ? void 0 : e.getPassportUid();
                            return (0, s.useMemo)(() => {
                                if (t) {
                                    let e = new M(String(t));
                                    return (e.openDatabase(), e);
                                }
                            }, [t]);
                        })(),
                        v = (0, u.M)();
                    ((0, s.useEffect)(() => {
                        n.setFeedbacksStore(b);
                    }, [n, b]),
                        (0, s.useEffect)(() => {
                            let e = null == _ ? void 0 : _.state.queueState.currentEntity.onChange(h);
                            return () => {
                                null == e || e();
                            };
                        }, [_, h, n]),
                        (0, s.useEffect)(() => {
                            if (!n.isNeededToLoad || null === v) return;
                            let e = v.connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && h();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [h, n.isNeededToLoad, v]));
                    let j = (0, r.L)(() =>
                        p
                            ? (0, i.jsx)(e0, { className: t, inert: a, items: n.items, isShimmerVisible: n.isShimmerVisible })
                            : (0, i.jsx)(eA, { className: t, items: n.items, isShimmerVisible: n.isShimmerVisible }),
                    );
                    return (0, i.jsx)(c.F, {
                        blockId: o.EntityTypes.Wheel,
                        blockType: o.EntityTypes.Wheel,
                        blockPosX: 1,
                        blockPosY: 3,
                        objectsCount: n.items.length,
                        children: j,
                    });
                });
        },
        72042: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => o });
            var i = a(4086),
                l = a(41928),
                n = a(72288),
                s = a(97956);
            let o = () => {
                let e = (0, l.N)(),
                    { experiments: t } = (0, n.g)();
                return t.checkExperiment(s.z.WebNextYnisonNewConnector, 'on') ? e.get(i.s_) : e.get(i.by);
            };
        },
        73602: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', root_disabled: 'WheelMobileItem_root_disabled__CVDgz', content: 'WheelMobileItem_content__I6Wm9' };
        },
        75177: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'), (e.NON_MUSIC = 'NON_MUSIC'));
                })(i || (i = {})));
        },
        83579: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, a) {
                    var i = this.e || (this.e = {});
                    return ((i[e] || (i[e] = [])).push({ fn: t, ctx: a }), this);
                },
                once: function (e, t, a) {
                    var i = this;
                    function l() {
                        (i.off(e, l), t.apply(a, arguments));
                    }
                    return ((l._ = t), this.on(e, l, a));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), a = ((this.e || (this.e = {}))[e] || []).slice(), i = 0, l = a.length; i < l; i++)
                        a[i].fn.apply(a[i].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var a = this.e || (this.e = {}),
                        i = a[e],
                        l = [];
                    if (i && t) for (var n = 0, s = i.length; n < s; n++) i[n].fn !== t && i[n].fn._ !== t && l.push(i[n]);
                    return (l.length ? (a[e] = l) : delete a[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        91796: (e) => {
            e.exports = {
                root: 'WheelMobile_root__VUNd_',
                wrapper: 'WheelMobile_wrapper__0eVMy',
                slide: 'WheelMobile_slide__weOOY',
                slide_active: 'WheelMobile_slide_active__h6xns',
                slide_near_above: 'WheelMobile_slide_near_above__YBxTV',
                slide_near_below: 'WheelMobile_slide_near_below__PjcpN',
                slide_medium_above: 'WheelMobile_slide_medium_above__2DKCg',
                slide_medium_below: 'WheelMobile_slide_medium_below__ZSCwN',
                slide_far: 'WheelMobile_slide_far__a_kSv',
                slide_far_above: 'WheelMobile_slide_far_above__DQ0zl',
                slide_far_below: 'WheelMobile_slide_far_below__V8_OD',
                slide_tap: 'WheelMobile_slide_tap__lD3Xp',
                'tap-scale': 'WheelMobile_tap-scale__B0SdO',
            };
        },
    },
]);
