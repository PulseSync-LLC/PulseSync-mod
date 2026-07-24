(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [825],
    {
        10613: (e) => {
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
        14971: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        20880: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
        24991: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { D: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING');
                })(i || (i = {}));
        },
        36751: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { b: () => i }),
                (function (e) {
                    (e.ALBUM = 'ALBUM'),
                        (e.ARTIST = 'ARTIST'),
                        (e.PLAYLIST = 'PLAYLIST'),
                        (e.WAVE = 'WAVE'),
                        (e.CLIP = 'CLIP'),
                        (e.GENERATIVE = 'GENERATIVE'),
                        (e.OTHER = 'OTHER');
                })(i || (i = {}));
        },
        37476: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        44240: (e, t, a) => {
            'use strict';
            var i;
            a.d(t, { y: () => i }),
                (function (e) {
                    (e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE');
                })(i || (i = {}));
        },
        61566: (e) => {
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
        67500: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        69010: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        70382: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
            };
        },
        88249: (e) => {
            function t() {}
            (t.prototype = {
                on: function (e, t, a) {
                    var i = this.e || (this.e = {});
                    return (i[e] || (i[e] = [])).push({ fn: t, ctx: a }), this;
                },
                once: function (e, t, a) {
                    var i = this;
                    function l() {
                        i.off(e, l), t.apply(a, arguments);
                    }
                    return (l._ = t), this.on(e, l, a);
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
                    if (i && t) for (var n = 0, o = i.length; n < o; n++) i[n].fn !== t && i[n].fn._ !== t && l.push(i[n]);
                    return l.length ? (a[e] = l) : delete a[e], this;
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t);
        },
        88481: (e, t, a) => {
            'use strict';
            a.r(t), a.d(t, { Wheel: () => eQ });
            var i = a(32290),
                l = a(46966),
                n = a(96103),
                o = a(55178),
                s = a(16172),
                r = a(6752),
                c = a(95226),
                d = a(70204),
                m = a(34186),
                h = a(44128),
                u = a(57594),
                _ = a(60900),
                p = a(91027),
                b = a(71483),
                v = a(64605),
                x = a(36751);
            let j = (e) => {
                    let t = e.data.meta;
                    if ('albums' in t) {
                        var a, i, l;
                        return null != (l = null == (i = t.albums) || null == (a = i[0]) ? void 0 : a.type) ? l : v._.ALBUM;
                    }
                    return v._.ALBUM;
                },
                C = () => {
                    let { formatMessage: e } = (0, _.A)(),
                        { wheel: t, sonataState: a } = (0, u.g)();
                    return (0, p.c)((i, l) => {
                        var n;
                        let o = ((e) => {
                            var t, a, i, l, n, o, s, r;
                            if (!e || 'object' != typeof e) return { type: x.b.OTHER };
                            let c = e.sourceContext,
                                d = null != c ? c : e.context,
                                m = e.entity,
                                h = null == (t = d.data) ? void 0 : t.type,
                                u = null == (i = d.data) || null == (a = i.meta) ? void 0 : a.id,
                                _ = null == (n = m.data) || null == (l = n.meta) ? void 0 : l.id;
                            if (!h || void 0 === u) return { type: x.b.OTHER };
                            switch (h) {
                                case b.K.Album:
                                    return { type: x.b.ALBUM, data: { id: Number(u), trackData: { id: _, albumType: j(m) } } };
                                case b.K.Artist:
                                    return { type: x.b.ARTIST, data: { id: u.toString(), trackData: { id: _, albumType: j(m) } } };
                                case b.K.Playlist:
                                    return {
                                        type: x.b.PLAYLIST,
                                        data: {
                                            playlistUuid: String(null != (r = null == (s = d.data) || null == (o = s.meta) ? void 0 : o.playlistUuid) ? r : u),
                                            trackData: { id: _, albumType: j(m) },
                                        },
                                    };
                                case b.K.Vibe:
                                    return { type: x.b.WAVE, data: { seeds: String(u).split(',') } };
                                case b.K.Generative:
                                    return { type: x.b.GENERATIVE };
                                default:
                                    return { type: x.b.OTHER, data: { id: _, albumType: j(m) } };
                            }
                        })(i);
                        ((null == (n = a.entityMeta) ? void 0 : n.isTrackMusic) || !t.lastRequestId) && t.getData({ context: o, forceFetch: l }, e);
                    });
                };
            var y = a(79406),
                I = a(91945),
                E = a(16839),
                T = a(2881),
                k = a(14971);
            let f = 'feedbacks';
            class N extends T.F {
                async addFeedback(e) {
                    let t = (0, k.q)(e);
                    return this.executeTransaction((a) => {
                        let i = a.transaction([f], 'readwrite').objectStore(f);
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
                                .getAllFromIndex(f, 'uid', this.uid)
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
                        let a = t.transaction([f], 'readwrite').objectStore(f);
                        return Promise.all(e.map((e) => a.delete(e))).then(() => void 0);
                    }).catch(E.A);
                }
                constructor(e) {
                    super({
                        dbName: 'music_wheel_feedbacks',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(f, { keyPath: 'feedbackKey' }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, I._)(this, 'uid', void 0),
                        (this.uid = e);
                }
            }
            var g = a(63618),
                L = a(6005),
                M = a(15875),
                W = a(21732),
                A = a(95481);
            let w = Math.PI / 2,
                S = (e) => {
                    let { translateXPx: t, opacity: a } = ((e) => {
                        let t = Math.abs(e) / 4,
                            a = Math.min(t / 2, 1),
                            i = 120 * (1 + Math.cos(((e) => (e <= 1 ? Math.PI - e * w : e <= 2 ? w - (e - 1) * w : 0))(t)));
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
                P = { slideLabelMessage: '', slideRole: 'listitem' },
                D = { forceToAxis: !0, sensitivity: 0.3 },
                O = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return i ? Math.min(l, a - l) : l;
                };
            var R = a(70382),
                V = a.n(R),
                B = a(24991),
                $ = a(44240),
                U = a(26042),
                H = a(71926),
                F = a(34883),
                K = a(7462),
                Y = a(8958),
                X = a(71735),
                q = a(12989),
                z = a(2969),
                G = a(23352),
                Q = a(37240),
                J = a(72396),
                Z = a(90169),
                ee = a(17593),
                et = a(5154),
                ea = a(13798),
                ei = a(1444),
                el = a(40229),
                en = a(10613),
                eo = a.n(en);
            let es = (0, n.PA)((e) => {
                let { item: t, shouldPlayOnClick: a = !0 } = e,
                    { pageId: l } = (0, Q.$)(),
                    { openIntroModalFromPlay: n } = (0, ee.e)(),
                    s = (0, K.r)(t.data.type),
                    c = ''.concat(s, ' ').concat(t.data.title),
                    { from: d } = (0, J.f)({ pageId: l }),
                    m = (0, X.P)(),
                    h = (0, z.b)(),
                    u = (0, q.D)(),
                    _ = (0, p.c)((e, a) => {
                        u(e, null != a ? a : ''), e && t.handleFeedbackView();
                    }),
                    { ref: v, intersectionPropertyId: x } = (0, G.n)({ callback: _, withViewUuid: !0 }),
                    {
                        isPlaying: j,
                        isCurrent: C,
                        togglePlay: y,
                    } = (0, Z.D)({ playContextParams: { contextData: { type: b.K.Album, meta: { id: t.data.id }, from: d }, loadContextMeta: !0 } }),
                    I = (0, F.c)({ album: t.data, callback: y }),
                    E = (0, p.c)(() => {
                        !(!a || m()) && (n() || (I(), h(!j), t.handleFeedbackClick()));
                    }),
                    T = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)('div', {
                                className: eo().coverContainer,
                                children: (0, i.jsx)(el.q, {
                                    isAvailable: t.data.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.data.coverUri,
                                    title: t.data.title,
                                    className: (0, g.$)(et.$f.playButtonCell, eo().cover, eo().important),
                                    alt: c,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    ...e,
                                }),
                            }),
                        [t.data.isAvailable, t.data.coverUri, t.data.title, c],
                    ),
                    k = null == T ? void 0 : T({ onPlayButtonClick: E, isPlaying: j, isCurrent: C }),
                    f = (0, r.L)(() =>
                        t.description
                            ? (0, i.jsx)(H.HL, {
                                  className: eo().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: t.description,
                              })
                            : null,
                    ),
                    N = (0, r.L)(() => {
                        var e;
                        return (null == (e = t.data.artists) ? void 0 : e.length) ? ''.concat((0, Y.X)(t.data.artists), ' — ').concat(t.data.title) : t.data.title;
                    });
                return (0, i.jsxs)(ei.C, {
                    ref: v,
                    'data-intersection-property-id': x,
                    className: (0, g.$)(et.$f.root, eo().root, eo().important),
                    'aria-label': c,
                    onClick: E,
                    'data-test-id': W.e8.wheel.WHEEL_ALBUM_ITEM,
                    children: [
                        k,
                        (0, i.jsxs)('div', {
                            className: eo().entityMeta,
                            children: [
                                f,
                                (0, i.jsxs)('div', {
                                    className: eo().titleContainer,
                                    children: [
                                        (0, i.jsx)(H.HL, {
                                            className: eo().title,
                                            variant: 'span',
                                            lineClamp: t.description ? 3 : 4,
                                            'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: N,
                                        }),
                                        t.data.explicitDisclaimer &&
                                            (0, i.jsx)(ea.N, {
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
            });
            var er = a(82586),
                ec = a(47745),
                ed = a(84062),
                em = a(86562),
                eh = a(11323);
            let eu = (0, n.PA)((e) => {
                var t, a;
                let { item: l, shouldNavigateOnClick: n = !0 } = e,
                    o = (0, ec.N)(),
                    c = (0, q.D)(),
                    d = (0, p.c)((e, t) => {
                        c(e, null != t ? t : ''), e && l.handleFeedbackView();
                    }),
                    { ref: m, intersectionPropertyId: h } = (0, G.n)({ callback: d, withViewUuid: !0 }),
                    u = (0, ed.Z)(null != (t = l.data.url) ? t : ''),
                    _ = (0, r.L)(() =>
                        l.description
                            ? (0, i.jsx)(H.HL, {
                                  className: eo().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: l.description,
                              })
                            : null,
                    ),
                    b = (0, p.c)((e) => {
                        var t;
                        n && (u(e), o({ to: s.QT.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                    }),
                    v = (0, p.c)((e) => {
                        (e.code === em.v.SPACE || e.code === em.v.ENTER) && (e.preventDefault(), b());
                    });
                return (0, i.jsxs)(ei.C, {
                    ref: m,
                    'data-intersection-property-id': h,
                    className: (0, g.$)(et.$f.root, eo().root, eo().important),
                    'aria-label': ''.concat(l.data.title, ' ').concat(null != (a = l.description) ? a : ''),
                    role: 'link',
                    tabIndex: 0,
                    onClick: b,
                    onKeyDown: v,
                    'data-test-id': W.e8.wheel.WHEEL_PROMO_ITEM,
                    children: [
                        (0, i.jsx)('div', {
                            className: eo().coverContainer,
                            children: (0, i.jsx)(eh.B, {
                                className: (0, g.$)(eo().cover, eo().important),
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
                                _,
                                (0, i.jsxs)('div', {
                                    className: eo().titleContainer,
                                    children: [
                                        (0, i.jsx)(H.HL, {
                                            className: eo().title,
                                            variant: 'span',
                                            lineClamp: l.description ? 3 : 4,
                                            'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: l.data.title,
                                        }),
                                        (0, i.jsx)(er.I, { className: eo().icon, variant: 'link_rounded', size: 'xxs' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var e_ = a(37862),
                ep = a(7697),
                eb = a(43564),
                ev = a(8322),
                ex = a(32156);
            let ej = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { pageId: l } = (0, Q.$)(),
                        { openIntroModalFromPlay: n } = (0, ee.e)(),
                        s = (0, X.P)(),
                        { isFreemium: r } = (0, ep.X)(),
                        [c, d] = (0, o.useState)(!1),
                        m = (0, z.b)(),
                        u = (0, q.D)(),
                        _ = (0, h.e)(),
                        b = C(),
                        v = (0, p.c)((e, a) => {
                            u(e, null != a ? a : ''), e && t.handleFeedbackView();
                        }),
                        { ref: x, intersectionPropertyId: j } = (0, G.n)({ callback: v, withViewUuid: !0 }),
                        { resetContext: y } = (0, eb.B)({ seeds: t.data.seeds, pageIdForFrom: l, blockIdForFrom: ''.concat(e_.U.RADIO, '-').concat(e_.U.WHEEL) }),
                        I = (0, p.c)(() => {
                            var e;
                            if (!(!a || s())) {
                                if (r) return void d(!0);
                                n() ||
                                    (y(t.data.seeds),
                                    t.data.seeds.includes(ev.yx) &&
                                        String(null == _ || null == (e = _.state.queueState.currentEntity.value) ? void 0 : e.context.data.meta.id).includes(ev.yx) &&
                                        b(null == _ ? void 0 : _.state.queueState.currentEntity.value, !0),
                                    m(!0),
                                    t.handleFeedbackClick());
                            }
                        }),
                        E = (0, o.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, i.jsx)('div', {
                                          className: (0, g.$)(eo().coverContainer, eo().coverContainer_iconCover),
                                          children: (0, i.jsx)(eh.B, {
                                              className: (0, g.$)(eo().cover, eo().important),
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
                        T = (0, p.c)((e) => {
                            (e.code === em.v.SPACE || e.code === em.v.ENTER) && (e.preventDefault(), I());
                        });
                    return (0, i.jsxs)(ei.C, {
                        ref: x,
                        'data-intersection-property-id': j,
                        className: (0, g.$)(et.$f.root, eo().root, eo().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: I,
                        onKeyDown: T,
                        'data-test-id': W.e8.wheel.WHEEL_RESHUFFLE_ITEM,
                        children: [
                            (0, i.jsx)(ex.S, {
                                isOpened: c,
                                onOpenChange: d,
                                isEnabled: r,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: E,
                            }),
                            (0, i.jsx)('div', {
                                className: eo().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)(H.HL, {
                                        className: (0, g.$)(eo().title, eo().title_accentColor),
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
                eC = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a = !0 } = e,
                        { vibeSettings: l } = (0, u.g)(),
                        { isFreemium: n } = (0, ep.X)(),
                        [r, c] = (0, o.useState)(!1),
                        d = (0, ec.N)(),
                        m = (0, q.D)(),
                        h = (0, p.c)((e, a) => {
                            m(e, null != a ? a : ''), e && t.handleFeedbackView();
                        }),
                        { ref: _, intersectionPropertyId: b } = (0, G.n)({ callback: h, withViewUuid: !0 }),
                        v = (0, p.c)(() => {
                            if (a) {
                                if ((t.handleFeedbackClick(), n)) return void c(!0);
                                l.modal.open(), d({ to: s.QT.MyWaweSettingsScreen });
                            }
                        }),
                        x = (0, p.c)((e) => {
                            (e.code === em.v.SPACE || e.code === em.v.ENTER) && (e.preventDefault(), v());
                        }),
                        j = (0, o.useCallback)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, g.$)(eo().coverContainer, eo().coverContainer_iconCover),
                                    children: (0, i.jsx)(eh.B, {
                                        className: (0, g.$)(eo().cover, eo().important),
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
                    return (0, i.jsxs)(ei.C, {
                        ref: _,
                        'data-intersection-property-id': b,
                        className: (0, g.$)(et.$f.root, eo().root, eo().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: v,
                        onKeyDown: x,
                        'data-test-id': W.e8.wheel.WHEEL_SETTING_ITEM,
                        children: [
                            (0, i.jsx)(ex.S, { isOpened: r, onOpenChange: c, isEnabled: n, placement: 'bottom', textVariant: 'vibe', renderChildren: j }),
                            (0, i.jsx)('div', {
                                className: eo().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)(H.HL, {
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
            var ey = a(19529);
            let eI = (0, n.PA)((e) => {
                var t;
                let { item: a, shouldPlayOnClick: l = !0 } = e,
                    { pageId: n } = (0, Q.$)(),
                    { openIntroModalFromPlay: s } = (0, ee.e)(),
                    c = (0, X.P)(),
                    { withPlusPopoverWeb: d } = (0, ep.X)(),
                    [m, h] = (0, o.useState)(!1),
                    u = (0, z.b)(),
                    _ = (0, q.D)(),
                    b = (0, p.c)((e, t) => {
                        _(e, null != t ? t : ''), e && a.handleFeedbackView();
                    }),
                    { ref: v, intersectionPropertyId: x } = (0, G.n)({ callback: b, withViewUuid: !0 }),
                    {
                        isPlaying: j,
                        togglePlay: C,
                        isCurrent: y,
                    } = (0, eb.B)({ seeds: a.data.seeds, pageIdForFrom: n, blockIdForFrom: ''.concat(e_.U.RADIO, '-').concat(e_.U.WHEEL) }),
                    I = (0, p.c)(() => {
                        if (!(!l || c())) {
                            if (d) return void h(!0);
                            s() || (C(), u(!j), a.handleFeedbackClick());
                        }
                    }),
                    E = a.style === $.y.MULTIVIBE,
                    T = (0, o.useCallback)(
                        () =>
                            a.data.agent
                                ? (0, i.jsx)('div', {
                                      className: (0, g.$)(eo().coverContainer, { [eo().multivibeContainer]: E }),
                                      children: (0, i.jsx)(ey.n, {
                                          alt: ''.concat(a.data.description, ' ').concat(a.data.title),
                                          agent: a.data.agent,
                                          isPlaying: j,
                                          isCurrent: y,
                                          onPlayButtonClick: I,
                                          className: (0, g.$)(et.$f.playButtonCell, eo().cover, eo().important),
                                          playButtonIconSize: E ? 'm' : 'l',
                                          fallbackIconSize: E ? 'xs' : 'm',
                                          coverClassName: (0, g.$)({ [eo().multivibeCover]: E }),
                                          entityCoverClassName: (0, g.$)({ [eo().multivibeAvatar]: E }),
                                          controlClassName: (0, g.$)({ [eo().multivibeControl]: E }),
                                      }),
                                  })
                                : null,
                        [a.data.agent, a.data.description, a.data.title, j, y, I, E],
                    ),
                    k = (0, r.L)(() =>
                        a.description
                            ? (0, i.jsx)(H.HL, {
                                  className: eo().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: a.description,
                              })
                            : null,
                    );
                return (0, i.jsxs)(ei.C, {
                    ref: v,
                    'data-intersection-property-id': x,
                    className: (0, g.$)(et.$f.root, eo().root, eo().important),
                    'aria-label': ''.concat(null != (t = a.data.description) ? t : '', ' ').concat(a.data.title),
                    onClick: I,
                    'data-test-id': W.e8.wheel.WHEEL_VIBE_ITEM,
                    children: [
                        (0, i.jsx)(ex.S, {
                            isOpened: m,
                            onOpenChange: h,
                            isEnabled: d,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.data.stationType,
                            renderChildren: T,
                        }),
                        (0, i.jsxs)('div', {
                            className: eo().entityMeta,
                            children: [
                                k,
                                (0, i.jsx)('div', {
                                    className: eo().titleContainer,
                                    children: (0, i.jsx)(H.HL, {
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
            var eE = a(79856),
                eT = a(20880),
                ek = a.n(eT);
            let ef = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: ek().root,
                    children: [
                        (0, i.jsx)('div', { className: ek().coverContainer, children: (0, i.jsx)(eE.W, { isActive: t, className: ek().cover, radius: 'xs' }) }),
                        (0, i.jsxs)('div', {
                            className: ek().meta,
                            children: [
                                (0, i.jsx)(eE.W, { isActive: t, className: ek().title, radius: 's' }),
                                (0, i.jsx)(eE.W, { isActive: t, className: ek().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var eN = a(69010),
                eg = a.n(eN);
            let eL = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a, originalIndex: l, objectsCount: n, isShimmerVisible: o } = e,
                        c = (0, r.L)(() => {
                            switch (t.type) {
                                case B.D.WAVE:
                                    if (t.style === $.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(U.B, {
                                            objectId: t.id,
                                            objectType: s.ky.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            objectsCount: n,
                                            children: (0, i.jsx)(ej, { item: t, shouldPlayOnClick: a }),
                                        });
                                    return (0, i.jsx)(U.B, {
                                        objectId: t.id,
                                        objectType: s.ky.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eI, { item: t, shouldPlayOnClick: a }),
                                    });
                                case B.D.ALBUM:
                                    return (0, i.jsx)(U.B, {
                                        objectId: t.id,
                                        objectType: s.ky.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(es, { item: t, shouldPlayOnClick: a }),
                                    });
                                case B.D.PROMO_LINK:
                                    return (0, i.jsx)(U.B, {
                                        objectId: t.id,
                                        objectType: s.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eu, { item: t, shouldNavigateOnClick: a }),
                                    });
                                case B.D.SETTING:
                                    return (0, i.jsx)(U.B, {
                                        objectId: t.id,
                                        objectType: s.ky.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eC, { item: t, shouldActionOnClick: a }),
                                    });
                            }
                        });
                    return (0, i.jsxs)('div', {
                        className: eg().root,
                        children: [
                            (0, i.jsx)('div', { className: (0, g.$)(eg().element, { [eg().element_hidden]: o }), children: c }),
                            (0, i.jsx)('div', {
                                className: (0, g.$)(eg().shimmer, { [eg().shimmer_visible]: o }),
                                children: o && (0, i.jsx)(ef, { isShimmerActive: !0 }),
                            }),
                        ],
                    });
                }),
                eM = Math.floor(4.5),
                eW = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, g.$)(V().root, t),
                        children: (0, i.jsx)('div', {
                            className: V().wrapper,
                            children: Array.from({ length: 9 }, (e, t) =>
                                (0, i.jsx)('div', { className: V().slide, style: S(t - eM), children: (0, i.jsx)(ef, { isShimmerActive: !0 }) }, t),
                            ),
                        }),
                    });
                },
                eA = (e) => {
                    e.slides.forEach((e) => {
                        let t = e.progress;
                        Number.isFinite(t) &&
                            ((e, t) => {
                                let { transform: a, opacity: i } = S(t);
                                (e.style.transform = String(a)), (e.style.opacity = String(i));
                            })(e, t);
                    });
                },
                ew = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: s, isEmpty: r },
                        } = (0, u.g)(),
                        { formatMessage: c } = (0, _.A)(),
                        d = (0, o.useRef)(null),
                        m = (0, A.f)(),
                        [h, b] = (0, o.useState)(9),
                        v = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(22 / e.length) }, () => e).flat()))(a);
                    (0, o.useEffect)(() => {
                        m();
                    }, [m]),
                        (0, o.useEffect)(() => {
                            let e = d.current;
                            e && 0 !== a.length && e.realIndex !== n && (e.slideToLoop(n, 0), eA(e));
                        }, [n, a.length]);
                    let x = (0, p.c)((e) => {
                            s(e.realIndex);
                        }),
                        j = (0, p.c)((e) => {
                            b(Math.max(4, Math.min(9, Math.floor(e.wrapperEl.clientHeight / 106))));
                        }),
                        C = (0, p.c)((e) => {
                            (d.current = e), eA(e);
                        }),
                        y = (0, p.c)((e) => {
                            eA(e);
                        }),
                        I = (0, p.c)((e) => {
                            e.el.classList.remove(V().root_transitioning), s(e.realIndex), eA(e);
                        }),
                        E = (0, p.c)((e) => {
                            e.el.classList.add(V().root_transitioning);
                        }),
                        T = (0, p.c)((e, t) => (a) => {
                            e >= 3 && d.current && (a.stopPropagation(), d.current.slideToLoop(t));
                        });
                    return l && r
                        ? (0, i.jsx)(eW, { className: t })
                        : (0, i.jsx)(M.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: h,
                              slidesPerView: h,
                              initialSlide: n,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [L.Jq, L.FJ, L.U1],
                              a11y: P,
                              freeMode: !0,
                              mousewheel: D,
                              className: (0, g.$)(V().root, t),
                              wrapperClass: V().wrapper,
                              onSwiper: C,
                              onResize: j,
                              onRealIndexChange: x,
                              onSlideChangeTransitionStart: E,
                              onTransitionEnd: I,
                              onProgress: y,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_DESKTOP,
                              children: v.map((e, t) => {
                                  let o = O(t, n, v.length),
                                      s = T(o, t);
                                  return (0, i.jsx)(
                                      M.qr,
                                      {
                                          className: V().slide,
                                          onClickCapture: s,
                                          children: (0, i.jsx)(eL, {
                                              item: e,
                                              shouldActionOnClick: o < 3,
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
                eS = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return i && Math.abs(l) > a / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var eP = a(61566),
                eD = a.n(eP),
                eO = a(53730),
                eR = a(80451);
            let eV = [
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
            var eB = a(67500),
                e$ = a.n(eB);
            let eU = (e) => {
                let { color: t } = e;
                return (0, i.jsx)('div', {
                    className: e$().root,
                    style: ((e) => {
                        let { h: t, s: a } = (0, eR.hexToHsl)(e),
                            { r: i, g: l, b: n } = (0, eR.hexToRgb)(e),
                            o = eV
                                .map((e) => {
                                    let { position: t, opacity: a } = e,
                                        o = Math.round(i * a),
                                        s = Math.round(l * a),
                                        r = Math.round(n * a);
                                    return 'rgba('.concat(o, ', ').concat(s, ', ').concat(r, ', ').concat(a, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(o, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(a, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var eH = a(92836),
                eF = a.n(eH);
            let eK = (0, n.PA)((e) => {
                let { item: t, originalIndex: a, objectsCount: l } = e,
                    n = (0, r.L)(() => {
                        switch (t.type) {
                            case B.D.WAVE:
                                if (t.style === $.y.CONTROL_ACCENT)
                                    return (0, i.jsx)(U.B, {
                                        objectId: t.id,
                                        objectType: s.ky.Wave,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(ej, { item: t }),
                                    });
                                return (0, i.jsx)(U.B, {
                                    objectId: t.id,
                                    objectType: s.ky.Wave,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(eI, { item: t }),
                                });
                            case B.D.ALBUM:
                                return (0, i.jsx)(U.B, {
                                    objectId: t.id,
                                    objectType: s.ky.Album,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(es, { item: t }),
                                });
                            case B.D.PROMO_LINK:
                                return (0, i.jsx)(U.B, {
                                    objectId: t.id,
                                    objectType: s.ky.Link,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(eu, { item: t }),
                                });
                            case B.D.SETTING:
                                return (0, i.jsx)(U.B, {
                                    objectId: t.id,
                                    objectType: s.ky.Link,
                                    objectPosX: a + 1,
                                    objectPosY: 1,
                                    objectsCount: l,
                                    children: (0, i.jsx)(eC, { item: t }),
                                });
                        }
                    }),
                    o = (0, r.L)(() => {
                        switch (t.type) {
                            case B.D.WAVE:
                                var e;
                                return null == (e = t.data.agent) ? void 0 : e.cover.color;
                            case B.D.ALBUM:
                                return t.data.averageColor;
                            case B.D.PROMO_LINK:
                                return t.data.color;
                            default:
                                return;
                        }
                    }),
                    c = t.style !== $.y.CONTROL;
                return (0, i.jsxs)('div', {
                    className: eF().root,
                    children: [c && (0, i.jsx)(eU, { color: (0, eO.OH)(o).primary }), (0, i.jsx)('div', { className: eF().content, children: n })],
                });
            });
            var eY = a(37476),
                eX = a.n(eY);
            let eq = () => (0, i.jsx)('div', { className: eX().root, children: (0, i.jsx)('div', { className: eX().petal }) }),
                ez = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, g.$)(eD().root, t),
                        children: (0, i.jsx)('div', {
                            className: eD().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: (0, g.$)(
                                            eD().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    a = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? eD().slide_active
                                                    : t < 2
                                                      ? (0, g.$)(eD().slide_near, eD()['slide_near_'.concat(a)])
                                                      : t < 3
                                                        ? (0, g.$)(eD().slide_medium, eD()['slide_medium_'.concat(a)])
                                                        : (0, g.$)(eD().slide_far, eD()['slide_far_'.concat(a)]);
                                            })(t),
                                        ),
                                        children: (0, i.jsx)(eq, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                eG = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: s },
                        } = (0, u.g)(),
                        { formatMessage: r } = (0, _.A)(),
                        c = (0, A.f)(),
                        [d, m] = (0, o.useState)(null),
                        h = 3 * a.length;
                    (0, o.useEffect)(() => {
                        c();
                    }, [c]);
                    let b = (0, p.c)((e) => {
                            s(e.realIndex);
                        }),
                        v = (0, p.c)((e) => {
                            m(e.clickedIndex);
                        }),
                        x = (0, p.c)(() => {
                            m(null);
                        });
                    return l
                        ? (0, i.jsx)(ez, { className: t })
                        : (0, i.jsx)(M.RC, {
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: a.length + 1,
                              modules: [L.Jq, L.U1],
                              a11y: P,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, g.$)(eD().root, t),
                              wrapperClass: eD().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: b,
                              onTransitionEnd: b,
                              onTap: v,
                              tag: 'section',
                              role: 'region',
                              'aria-label': r({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_MOBILE,
                              children: Array.from({ length: h }, (e, t) => {
                                  let l = t % a.length,
                                      o = a[l],
                                      s = Math.floor(t / a.length);
                                  if (void 0 === o) return null;
                                  let r = O(t, n, h, !1),
                                      c = eS(t, n, h, !1);
                                  return (0, i.jsx)(
                                      M.qr,
                                      {
                                          className: (0, g.$)(
                                              eD().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? eD().slide_active
                                                      : e < 2
                                                        ? (0, g.$)(eD().slide_near, eD()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, g.$)(eD().slide_medium, eD()['slide_medium_'.concat(t)])
                                                          : (0, g.$)(eD().slide_far, eD()['slide_far_'.concat(t)]))(r, c),
                                              { [eD().slide_tap]: t === d },
                                          ),
                                          onAnimationEnd: x,
                                          children: (0, i.jsx)(eK, { item: o, originalIndex: l, objectsCount: a.length }),
                                      },
                                      ''.concat(o.data.getKey(l), '-').concat(s),
                                  );
                              }),
                          });
                }),
                eQ = (0, n.PA)((e) => {
                    let { className: t } = e,
                        {
                            wheel: a,
                            settings: { isMobile: n },
                        } = (0, u.g)(),
                        _ = (0, h.e)(),
                        p = C(),
                        b = (0, m.N)(),
                        v = (() => {
                            let e = (0, m.N)(),
                                { experiments: t } = (0, u.g)(),
                                a = t.checkExperiment(y.z.WebNextRealTimeWheelFeedbacks, 'on'),
                                i = e.get(d.WA),
                                l = null == i ? void 0 : i.getPassportUid();
                            return (0, o.useMemo)(() => {
                                if (a && l) {
                                    let e = new N(String(l));
                                    return e.openDatabase(), e;
                                }
                            }, [a, l]);
                        })();
                    (0, o.useEffect)(() => {
                        a.setFeedbacksStore(v);
                    }, [a, v]),
                        (0, o.useEffect)(() => {
                            let e = null == _ ? void 0 : _.state.queueState.currentEntity.onChange(p);
                            return () => {
                                null == e || e();
                            };
                        }, [_, p, a]),
                        (0, o.useEffect)(() => {
                            if (!a.isNeededToLoad) return;
                            let e = b.get(d.by).connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && p();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [b, p, a.isNeededToLoad]);
                    let x = (0, r.L)(() =>
                        n
                            ? (0, i.jsx)(eG, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible })
                            : (0, i.jsx)(ew, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible }),
                    );
                    return (0, i.jsx)(c.F, { blockId: s.LA.Wheel, blockType: s.LA.Wheel, blockPosX: 1, blockPosY: 3, objectsCount: a.items.length, children: x });
                });
        },
        92836: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', content: 'WheelMobileItem_content__I6Wm9' };
        },
    },
]);
