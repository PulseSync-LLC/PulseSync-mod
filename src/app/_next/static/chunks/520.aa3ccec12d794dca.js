(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [520],
    {
        9598: (e) => {
            e.exports = {
                root: 'WheelDesktop_root__09mK2',
                wrapper: 'WheelDesktop_wrapper__IXHUc',
                slide: 'WheelDesktop_slide__P_dLv',
                root_transitioning: 'WheelDesktop_root_transitioning__cMvYD',
            };
        },
        16912: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { y: () => i }),
                (function (e) {
                    ((e.DEFAULT = 'DEFAULT'), (e.CONTROL = 'CONTROL'), (e.CONTROL_ACCENT = 'CONTROL_ACCENT'), (e.MULTIVIBE = 'MULTIVIBE'), (e.PROMO = 'PROMO'));
                })(i || (i = {})));
        },
        20820: (e) => {
            e.exports = { root: 'WheelMobileItemShimmer_root__mu_1t', petal: 'WheelMobileItemShimmer_petal__Oo99q' };
        },
        21217: (e) => {
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
                    if (i && t) for (var n = 0, o = i.length; n < o; n++) i[n].fn !== t && i[n].fn._ !== t && l.push(i[n]);
                    return (l.length ? (a[e] = l) : delete a[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        33304: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { Wheel: () => e0 }));
            var i = a(25839),
                l = a(75637),
                n = a(88204),
                o = a(74631),
                r = a(36619),
                s = a(49656),
                c = a(57138),
                d = a(30296),
                m = a(27954),
                u = a(65940),
                h = a(39004),
                p = a(71035),
                _ = a(22939),
                b = a(56829),
                v = a(57263);
            let j = (e) => {
                    let t = e.data.meta;
                    if ('albums' in t) {
                        var a, i, l;
                        return null != (l = null == (i = t.albums) || null == (a = i[0]) ? void 0 : a.type) ? l : b._.ALBUM;
                    }
                    return b._.ALBUM;
                },
                x = () => {
                    let { formatMessage: e } = (0, h.A)(),
                        { wheel: t, sonataState: a } = (0, m.g)();
                    return (0, p.c)((i, l) => {
                        var n;
                        let o = ((e) => {
                            var t, a, i, l, n, o, r, s;
                            if (!e || 'object' != typeof e) return { type: v.b.OTHER };
                            let c = e.sourceContext,
                                d = null != c ? c : e.context,
                                m = e.entity,
                                u = null == (t = d.data) ? void 0 : t.type,
                                h = null == (i = d.data) || null == (a = i.meta) ? void 0 : a.id,
                                p = null == (n = m.data) || null == (l = n.meta) ? void 0 : l.id;
                            if (!u || void 0 === h) return { type: v.b.OTHER };
                            switch (u) {
                                case _.K.Album:
                                    return { type: v.b.ALBUM, data: { id: Number(h), trackData: { id: p, albumType: j(m) } } };
                                case _.K.Artist:
                                    return { type: v.b.ARTIST, data: { id: h.toString(), trackData: { id: p, albumType: j(m) } } };
                                case _.K.Playlist:
                                    return {
                                        type: v.b.PLAYLIST,
                                        data: {
                                            playlistUuid: String(null != (s = null == (r = d.data) || null == (o = r.meta) ? void 0 : o.playlistUuid) ? s : h),
                                            trackData: { id: p, albumType: j(m) },
                                        },
                                    };
                                case _.K.Vibe:
                                    return { type: v.b.WAVE, data: { seeds: String(h).split(',') } };
                                case _.K.Generative:
                                    return { type: v.b.GENERATIVE };
                                default:
                                    return { type: v.b.OTHER, data: { id: p, albumType: j(m) } };
                            }
                        })(i);
                        ((null == (n = a.entityMeta) ? void 0 : n.isTrackMusic) || !t.lastRequestId) && t.getData({ context: o, forceFetch: l }, e);
                    });
                };
            var C = a(36484),
                y = a(62562),
                I = a(58025),
                E = a(87655),
                T = a(39145),
                N = a(71683);
            let f = 'feedbacks';
            class k extends T.F {
                async addFeedback(e) {
                    let t = (0, N.q)(e);
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
                    (super({
                        dbName: 'music_wheel_feedbacks',
                        dbVersion: 1,
                        onUpgrade: (e) => {
                            e.createObjectStore(f, { keyPath: 'feedbackKey' }).createIndex('uid', 'uid', { unique: !1 });
                        },
                    }),
                        (0, I._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var g = a(82298),
                M = a(84795),
                L = a(14444),
                W = a(61493),
                A = a(61777);
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
                D = { slideLabelMessage: '', slideRole: 'listitem' },
                P = { forceToAxis: !0, sensitivity: 0.3 },
                O = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = Math.abs(e - t);
                    return i ? Math.min(l, a - l) : l;
                };
            var R = a(9598),
                V = a.n(R),
                U = a(92671),
                B = a(16912),
                H = a(95314),
                F = a(4254),
                $ = a(99835),
                K = a(73614),
                Y = a(70758),
                q = a(79367),
                z = a(3669),
                X = a(47009),
                G = a(52512),
                Q = a(97952),
                J = a(30290),
                Z = a(50209),
                ee = a(40433),
                et = a(79856),
                ea = a.n(et),
                ei = a(62926),
                el = a(18284),
                en = a(6349),
                eo = a(41893),
                er = a.n(eo);
            let es = (0, n.PA)((e) => {
                let { item: t, shouldPlayOnClick: a = !0 } = e,
                    { pageId: l } = (0, Q.$)(),
                    { openIntroModalFromPlay: n } = (0, ee.e)(),
                    r = (0, K.r)(t.data.type),
                    c = ''.concat(r, ' ').concat(t.data.title),
                    { from: d } = (0, J.f)({ pageId: l }),
                    m = (0, q.P)(),
                    u = (0, X.b)(),
                    h = (0, z.D)(),
                    b = (0, p.c)((e, a) => {
                        (h(e, null != a ? a : ''), e && t.handleFeedbackView());
                    }),
                    { ref: v, intersectionPropertyId: j } = (0, G.n)({ callback: b, withViewUuid: !0 }),
                    {
                        isPlaying: x,
                        isCurrent: C,
                        togglePlay: y,
                    } = (0, Z.D)({ playContextParams: { contextData: { type: _.K.Album, meta: { id: t.data.id }, from: d }, loadContextMeta: !0 } }),
                    I = (0, $.c)({ album: t.data, callback: y }),
                    E = (0, p.c)(() => {
                        !(!a || m()) && (n() || (I(), u(!x), t.handleFeedbackClick()));
                    }),
                    T = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)('div', {
                                className: er().coverContainer,
                                children: (0, i.jsx)(en.q, {
                                    isAvailable: t.data.isAvailable,
                                    isDisliked: !1,
                                    coverUri: t.data.coverUri,
                                    title: t.data.title,
                                    className: (0, g.$)(ea().playButtonCell, er().cover, er().important),
                                    alt: c,
                                    radius: 'xs',
                                    playButtonIconSize: 'l',
                                    fallbackIconSize: 'm',
                                    ...e,
                                }),
                            }),
                        [t.data.isAvailable, t.data.coverUri, t.data.title, c],
                    ),
                    N = null == T ? void 0 : T({ onPlayButtonClick: E, isPlaying: x, isCurrent: C }),
                    f = (0, s.L)(() =>
                        t.description
                            ? (0, i.jsx)(F.HL, {
                                  className: er().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: t.description,
                              })
                            : null,
                    ),
                    k = (0, s.L)(() => {
                        var e;
                        return (null == (e = t.data.artists) ? void 0 : e.length) ? ''.concat((0, Y.X)(t.data.artists), ' — ').concat(t.data.title) : t.data.title;
                    });
                return (0, i.jsxs)(el.C, {
                    ref: v,
                    'data-intersection-property-id': j,
                    className: (0, g.$)(ea().root, er().root, er().important),
                    'aria-label': c,
                    onClick: E,
                    'data-test-id': W.e8.wheel.WHEEL_ALBUM_ITEM,
                    children: [
                        N,
                        (0, i.jsxs)('div', {
                            className: er().entityMeta,
                            children: [
                                f,
                                (0, i.jsxs)('div', {
                                    className: er().titleContainer,
                                    children: [
                                        (0, i.jsx)(F.HL, {
                                            className: er().title,
                                            variant: 'span',
                                            lineClamp: t.description ? 3 : 4,
                                            'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: k,
                                        }),
                                        t.data.explicitDisclaimer &&
                                            (0, i.jsx)(ei.N, {
                                                className: er().explicitMark,
                                                containerClassName: er().explicitMarkContainer,
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
            var ec = a(66738),
                ed = a(29481),
                em = a(53712),
                eu = a(85686),
                eh = a(17226),
                ep = a(6323);
            let e_ = (0, n.PA)((e) => {
                var t, a;
                let { item: l, shouldNavigateOnClick: n = !0 } = e,
                    o = (0, ed.N)(),
                    c = (0, z.D)(),
                    { multivibe: d } = (0, m.g)(),
                    u = (0, p.c)((e, t) => {
                        (c(e, null != t ? t : ''), e && l.handleFeedbackView());
                    }),
                    h = l.data.url === em.Z.multivibe.href,
                    { ref: _, intersectionPropertyId: b } = (0, G.n)({ callback: u, withViewUuid: !0 }),
                    v = (0, eu.Z)(null != (t = l.data.url) ? t : ''),
                    j = (0, s.L)(() =>
                        l.description
                            ? (0, i.jsx)(F.HL, {
                                  className: er().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: l.description,
                              })
                            : null,
                    ),
                    x = (0, p.c)((e) => {
                        var t;
                        n && (h ? d.promoModal.open() : v(e), o({ to: r.AppScreen.Link, deepLink: null != (t = l.data.url) ? t : void 0 }), l.handleFeedbackClick());
                    }),
                    C = (0, p.c)((e) => {
                        (e.code === eh.v.SPACE || e.code === eh.v.ENTER) && (e.preventDefault(), x());
                    });
                return (0, i.jsxs)(el.C, {
                    ref: _,
                    'data-intersection-property-id': b,
                    className: (0, g.$)(ea().root, er().root, er().important),
                    'aria-label': ''.concat(l.data.title, ' ').concat(null != (a = l.description) ? a : ''),
                    role: 'link',
                    tabIndex: 0,
                    onClick: x,
                    onKeyDown: C,
                    'data-test-id': W.e8.wheel.WHEEL_PROMO_ITEM,
                    children: [
                        (0, i.jsx)('div', {
                            className: er().coverContainer,
                            children: (0, i.jsx)(ep.B, {
                                className: (0, g.$)(er().cover, er().important),
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
                            className: er().entityMeta,
                            children: [
                                j,
                                (0, i.jsxs)('div', {
                                    className: er().titleContainer,
                                    children: [
                                        (0, i.jsx)(F.HL, {
                                            className: er().title,
                                            variant: 'span',
                                            lineClamp: l.description ? 3 : 4,
                                            'data-test-id': W.e8.wheel.WHEEL_ITEM_TITLE,
                                            children: l.data.title,
                                        }),
                                        (0, i.jsx)(ec.I, { className: er().icon, variant: 'link_rounded', size: 'xxs' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            var eb = a(40110),
                ev = a(87201),
                ej = a(51514),
                ex = a(5668);
            let eC = (0, n.PA)((e) => {
                    let { item: t, shouldPlayOnClick: a = !0 } = e,
                        { pageId: l } = (0, Q.$)(),
                        { openIntroModalFromPlay: n } = (0, ee.e)(),
                        r = (0, q.P)(),
                        { freeAccess: s } = (0, m.g)(),
                        [c, u] = (0, o.useState)(!1),
                        h = (0, X.b)(),
                        _ = (0, z.D)(),
                        b = (0, d.e)(),
                        v = x(),
                        j = (0, p.c)((e, a) => {
                            (_(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: C, intersectionPropertyId: y } = (0, G.n)({ callback: j, withViewUuid: !0 }),
                        { resetContext: I } = (0, ev.B)({ seeds: t.data.seeds, pageIdForFrom: l, blockIdForFrom: ''.concat(eb.U.RADIO, '-').concat(eb.U.WHEEL) }),
                        E = (0, p.c)(() => {
                            var e;
                            if (!(!a || r())) {
                                if (s.isFreeWebUser) return void u(!0);
                                n() ||
                                    (I(t.data.seeds),
                                    t.data.seeds.includes(ej.yx) &&
                                        String(null == b || null == (e = b.state.queueState.currentEntity.value) ? void 0 : e.context.data.meta.id).includes(ej.yx) &&
                                        v(null == b ? void 0 : b.state.queueState.currentEntity.value, !0),
                                    h(!0),
                                    t.handleFeedbackClick());
                            }
                        }),
                        T = (0, o.useCallback)(
                            () =>
                                t.data.agent
                                    ? (0, i.jsx)('div', {
                                          className: (0, g.$)(er().coverContainer, er().coverContainer_iconCover),
                                          children: (0, i.jsx)(ep.B, {
                                              className: (0, g.$)(er().cover, er().important),
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
                        N = (0, p.c)((e) => {
                            (e.code === eh.v.SPACE || e.code === eh.v.ENTER) && (e.preventDefault(), E());
                        });
                    return (0, i.jsxs)(el.C, {
                        ref: C,
                        'data-intersection-property-id': y,
                        className: (0, g.$)(ea().root, er().root, er().important),
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
                                isEnabled: s.isFreeWebUser,
                                placement: 'bottom',
                                textVariant: 'vibe',
                                vibeTextVariant: t.data.stationType,
                                renderChildren: T,
                            }),
                            (0, i.jsx)('div', {
                                className: er().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: er().titleContainer,
                                    children: (0, i.jsx)(F.HL, {
                                        className: (0, g.$)(er().title, er().title_accentColor),
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
                ey = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a = !0 } = e,
                        { vibeSettings: l, freeAccess: n } = (0, m.g)(),
                        [s, c] = (0, o.useState)(!1),
                        d = (0, ed.N)(),
                        u = (0, z.D)(),
                        h = (0, p.c)((e, a) => {
                            (u(e, null != a ? a : ''), e && t.handleFeedbackView());
                        }),
                        { ref: _, intersectionPropertyId: b } = (0, G.n)({ callback: h, withViewUuid: !0 }),
                        v = (0, p.c)(() => {
                            if (a) {
                                if ((t.handleFeedbackClick(), n.isFreeWebUser)) return void c(!0);
                                (l.modal.open(), d({ to: r.AppScreen.MyWaweSettingsScreen }));
                            }
                        }),
                        j = (0, p.c)((e) => {
                            (e.code === eh.v.SPACE || e.code === eh.v.ENTER) && (e.preventDefault(), v());
                        }),
                        x = (0, o.useCallback)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: (0, g.$)(er().coverContainer, er().coverContainer_iconCover),
                                    children: (0, i.jsx)(ep.B, {
                                        className: (0, g.$)(er().cover, er().important),
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
                        ref: _,
                        'data-intersection-property-id': b,
                        className: (0, g.$)(ea().root, er().root, er().important),
                        'aria-label': t.data.title,
                        role: 'button',
                        tabIndex: 0,
                        onClick: v,
                        onKeyDown: j,
                        'data-test-id': W.e8.wheel.WHEEL_SETTING_ITEM,
                        children: [
                            (0, i.jsx)(ex.S, { isOpened: s, onOpenChange: c, isEnabled: n.isFreeWebUser, placement: 'bottom', textVariant: 'vibe', renderChildren: x }),
                            (0, i.jsx)('div', {
                                className: er().entityMeta,
                                children: (0, i.jsx)('div', {
                                    className: er().titleContainer,
                                    children: (0, i.jsx)(F.HL, {
                                        className: er().title,
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
            var eI = a(86209);
            let eE = (0, n.PA)((e) => {
                var t;
                let { item: a, shouldPlayOnClick: l = !0 } = e,
                    { pageId: n } = (0, Q.$)(),
                    { openIntroModalFromPlay: r } = (0, ee.e)(),
                    c = (0, q.P)(),
                    { freeAccess: d } = (0, m.g)(),
                    [u, h] = (0, o.useState)(!1),
                    _ = (0, X.b)(),
                    b = (0, z.D)(),
                    v = (0, p.c)((e, t) => {
                        (b(e, null != t ? t : ''), e && a.handleFeedbackView());
                    }),
                    { ref: j, intersectionPropertyId: x } = (0, G.n)({ callback: v, withViewUuid: !0 }),
                    {
                        isPlaying: C,
                        togglePlay: y,
                        isCurrent: I,
                    } = (0, ev.B)({ seeds: a.data.seeds, pageIdForFrom: n, blockIdForFrom: ''.concat(eb.U.RADIO, '-').concat(eb.U.WHEEL) }),
                    E = (0, p.c)(() => {
                        if (!(!l || c())) {
                            if (d.isVibeStartRestricted) return void h(!0);
                            r() || (y(), _(!C), a.handleFeedbackClick());
                        }
                    }),
                    T = a.style === B.y.MULTIVIBE,
                    N = (0, o.useCallback)(
                        () =>
                            a.data.agent
                                ? (0, i.jsx)('div', {
                                      className: (0, g.$)(er().coverContainer, { [er().multivibeContainer]: T }),
                                      children: (0, i.jsx)(eI.n, {
                                          alt: ''.concat(a.data.description, ' ').concat(a.data.title),
                                          agent: a.data.agent,
                                          isPlaying: C,
                                          isCurrent: I,
                                          onPlayButtonClick: E,
                                          className: (0, g.$)(ea().playButtonCell, er().cover, er().important),
                                          playButtonIconSize: T ? 'm' : 'l',
                                          fallbackIconSize: T ? 'xs' : 'm',
                                          coverClassName: (0, g.$)({ [er().multivibeCover]: T }),
                                          entityCoverClassName: (0, g.$)({ [er().multivibeAvatar]: T }),
                                          controlClassName: (0, g.$)({ [er().multivibeControl]: T }),
                                      }),
                                  })
                                : null,
                        [a.data.agent, a.data.description, a.data.title, C, I, E, T],
                    ),
                    f = (0, s.L)(() =>
                        a.description
                            ? (0, i.jsx)(F.HL, {
                                  className: er().description,
                                  variant: 'span',
                                  lineClamp: 1,
                                  'data-test-id': W.e8.wheel.WHEEL_ITEM_DESCRIPTION,
                                  children: a.description,
                              })
                            : null,
                    );
                return (0, i.jsxs)(el.C, {
                    ref: j,
                    'data-intersection-property-id': x,
                    className: (0, g.$)(ea().root, er().root, er().important),
                    'aria-label': ''.concat(null != (t = a.data.description) ? t : '', ' ').concat(a.data.title),
                    onClick: E,
                    'data-test-id': W.e8.wheel.WHEEL_VIBE_ITEM,
                    children: [
                        (0, i.jsx)(ex.S, {
                            isOpened: u,
                            onOpenChange: h,
                            isEnabled: d.isVibeStartRestricted,
                            placement: 'bottom',
                            textVariant: 'vibe',
                            vibeTextVariant: a.data.stationType,
                            renderChildren: N,
                        }),
                        (0, i.jsxs)('div', {
                            className: er().entityMeta,
                            children: [
                                f,
                                (0, i.jsx)('div', {
                                    className: er().titleContainer,
                                    children: (0, i.jsx)(F.HL, {
                                        className: er().title,
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
            var eT = a(23976),
                eN = a(99104),
                ef = a.n(eN);
            let ek = (e) => {
                let { isShimmerActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: ef().root,
                    children: [
                        (0, i.jsx)('div', { className: ef().coverContainer, children: (0, i.jsx)(eT.W, { isActive: t, className: ef().cover, radius: 'xs' }) }),
                        (0, i.jsxs)('div', {
                            className: ef().meta,
                            children: [
                                (0, i.jsx)(eT.W, { isActive: t, className: ef().title, radius: 's' }),
                                (0, i.jsx)(eT.W, { isActive: t, className: ef().subtitle, radius: 's' }),
                            ],
                        }),
                    ],
                });
            };
            var eg = a(45090),
                eM = a.n(eg);
            let eL = (0, n.PA)((e) => {
                    let { item: t, shouldActionOnClick: a, originalIndex: l, objectsCount: n, isShimmerVisible: o } = e,
                        c = (0, s.L)(() => {
                            switch (t.type) {
                                case U.D.WAVE:
                                    if (t.style === B.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(H.B, {
                                            objectId: t.id,
                                            objectType: r.DomainObjectType.Wave,
                                            objectPosX: 1,
                                            objectPosY: l + 1,
                                            objectsCount: n,
                                            children: (0, i.jsx)(eC, { item: t, shouldPlayOnClick: a }),
                                        });
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Wave,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(eE, { item: t, shouldPlayOnClick: a }),
                                    });
                                case U.D.ALBUM:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Album,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(es, { item: t, shouldPlayOnClick: a }),
                                    });
                                case U.D.PROMO_LINK:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(e_, { item: t, shouldNavigateOnClick: a }),
                                    });
                                case U.D.SETTING:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Link,
                                        objectPosX: 1,
                                        objectPosY: l + 1,
                                        objectsCount: n,
                                        children: (0, i.jsx)(ey, { item: t, shouldActionOnClick: a }),
                                    });
                            }
                        });
                    return (0, i.jsxs)('div', {
                        className: eM().root,
                        children: [
                            (0, i.jsx)('div', { className: (0, g.$)(eM().element, { [eM().element_hidden]: o }), children: c }),
                            (0, i.jsx)('div', {
                                className: (0, g.$)(eM().shimmer, { [eM().shimmer_visible]: o }),
                                children: o && (0, i.jsx)(ek, { isShimmerActive: !0 }),
                            }),
                        ],
                    });
                }),
                eW = Math.floor(4.5),
                eA = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, g.$)(V().root, t),
                        children: (0, i.jsx)('div', {
                            className: V().wrapper,
                            children: Array.from({ length: 9 }, (e, t) =>
                                (0, i.jsx)('div', { className: V().slide, style: S(t - eW), children: (0, i.jsx)(ek, { isShimmerActive: !0 }) }, t),
                            ),
                        }),
                    });
                },
                ew = (e) => {
                    e.slides.forEach((e) => {
                        let t = e.progress;
                        Number.isFinite(t) &&
                            ((e, t) => {
                                let { transform: a, opacity: i } = S(t);
                                ((e.style.transform = String(a)), (e.style.opacity = String(i)));
                            })(e, t);
                    });
                },
                eS = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: r, isEmpty: s },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, h.A)(),
                        d = (0, o.useRef)(null),
                        u = (0, A.f)(),
                        [_, b] = (0, o.useState)(9),
                        v = ((e) => (0 === e.length ? e : Array.from({ length: Math.ceil(22 / e.length) }, () => e).flat()))(a);
                    ((0, o.useEffect)(() => {
                        u();
                    }, [u]),
                        (0, o.useEffect)(() => {
                            let e = d.current;
                            e && 0 !== a.length && e.realIndex !== n && (e.slideToLoop(n, 0), ew(e));
                        }, [n, a.length]));
                    let j = (0, p.c)((e) => {
                            r(e.realIndex);
                        }),
                        x = (0, p.c)((e) => {
                            b(Math.max(4, Math.min(9, Math.floor(e.wrapperEl.clientHeight / 106))));
                        }),
                        C = (0, p.c)((e) => {
                            ((d.current = e), ew(e));
                        }),
                        y = (0, p.c)((e) => {
                            ew(e);
                        }),
                        I = (0, p.c)((e) => {
                            (e.el.classList.remove(V().root_transitioning), r(e.realIndex), ew(e));
                        }),
                        E = (0, p.c)((e) => {
                            e.el.classList.add(V().root_transitioning);
                        }),
                        T = (0, p.c)((e, t) => (a) => {
                            e >= 3 && d.current && (a.stopPropagation(), d.current.slideToLoop(t));
                        });
                    return l && s
                        ? (0, i.jsx)(eA, { className: t })
                        : (0, i.jsx)(L.RC, {
                              direction: 'vertical',
                              centeredSlides: !0,
                              loop: !0,
                              loopAdditionalSlides: _,
                              slidesPerView: _,
                              initialSlide: n,
                              allowTouchMove: !1,
                              watchSlidesProgress: !0,
                              modules: [M.Jq, M.FJ, M.U1],
                              a11y: D,
                              freeMode: !0,
                              mousewheel: P,
                              className: (0, g.$)(V().root, t),
                              wrapperClass: V().wrapper,
                              onSwiper: C,
                              onResize: x,
                              onRealIndexChange: j,
                              onSlideChangeTransitionStart: E,
                              onTransitionEnd: I,
                              onProgress: y,
                              tag: 'section',
                              role: 'region',
                              'aria-label': c({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_DESKTOP,
                              children: v.map((e, t) => {
                                  let o = O(t, n, v.length),
                                      r = T(o, t);
                                  return (0, i.jsx)(
                                      L.qr,
                                      {
                                          className: V().slide,
                                          onClickCapture: r,
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
                eD = function (e, t, a) {
                    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        l = e - t;
                    return i && Math.abs(l) > a / 2 ? (l < 0 ? 'below' : 'above') : l < 0 ? 'above' : 'below';
                };
            var eP = a(71150),
                eO = a.n(eP),
                eR = a(28010),
                eV = a(89288);
            let eU = [
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
            var eB = a(53116),
                eH = a.n(eB);
            let eF = (e) => {
                let { color: t } = e;
                return (0, i.jsx)('div', {
                    className: eH().root,
                    style: ((e) => {
                        let { h: t, s: a } = (0, eV.g8)(e),
                            { r: i, g: l, b: n } = (0, eV.E2)(e),
                            o = eU
                                .map((e) => {
                                    let { position: t, opacity: a } = e,
                                        o = Math.round(i * a),
                                        r = Math.round(l * a),
                                        s = Math.round(n * a);
                                    return 'rgba('.concat(o, ', ').concat(r, ', ').concat(s, ', ').concat(a, ') ').concat(t, '%');
                                })
                                .join(', ');
                        return {
                            '--petal-fill-gradient': 'linear-gradient(213deg, '.concat(o, ')'),
                            '--petal-stroke-color': 'hsl('.concat(t, ', ').concat(a, '%, 80%)'),
                        };
                    })(t),
                });
            };
            var e$ = a(48724),
                eK = a.n(e$);
            let eY = [B.y.PROMO, B.y.MULTIVIBE],
                eq = [B.y.CONTROL, B.y.CONTROL_ACCENT],
                ez = (0, n.PA)((e) => {
                    let { item: t, originalIndex: a, objectsCount: l } = e,
                        n = (0, s.L)(() => {
                            switch (t.type) {
                                case U.D.WAVE:
                                    if (t.style === B.y.CONTROL_ACCENT)
                                        return (0, i.jsx)(H.B, {
                                            objectId: t.id,
                                            objectType: r.DomainObjectType.Wave,
                                            objectPosX: a + 1,
                                            objectPosY: 1,
                                            objectsCount: l,
                                            children: (0, i.jsx)(eC, { item: t }),
                                        });
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Wave,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(eE, { item: t }),
                                    });
                                case U.D.ALBUM:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Album,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(es, { item: t }),
                                    });
                                case U.D.PROMO_LINK:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(e_, { item: t }),
                                    });
                                case U.D.SETTING:
                                    return (0, i.jsx)(H.B, {
                                        objectId: t.id,
                                        objectType: r.DomainObjectType.Link,
                                        objectPosX: a + 1,
                                        objectPosY: 1,
                                        objectsCount: l,
                                        children: (0, i.jsx)(ey, { item: t }),
                                    });
                            }
                        }),
                        o = (0, s.L)(() => {
                            switch (t.type) {
                                case U.D.WAVE:
                                    var e;
                                    return null == (e = t.data.agent) ? void 0 : e.cover.color;
                                case U.D.ALBUM:
                                    return t.data.averageColor;
                                case U.D.PROMO_LINK:
                                    return t.data.color;
                                default:
                                    return;
                            }
                        }),
                        c = (0, s.L)(() => {
                            let e = t.style && eY.some((e) => e === t.style);
                            return o && e ? o : (0, eR.OH)(o).primary;
                        }),
                        d = !t.style || !eq.some((e) => e === t.style);
                    return (0, i.jsxs)('div', {
                        className: eK().root,
                        children: [d && (0, i.jsx)(eF, { color: c }), (0, i.jsx)('div', { className: eK().content, children: n })],
                    });
                });
            var eX = a(20820),
                eG = a.n(eX);
            let eQ = () => (0, i.jsx)('div', { className: eG().root, children: (0, i.jsx)('div', { className: eG().petal }) }),
                eJ = (e) => {
                    let { className: t } = e;
                    return (0, i.jsx)('div', {
                        className: (0, g.$)(eO().root, t),
                        children: (0, i.jsx)('div', {
                            className: eO().wrapper,
                            children: Array.from({ length: 6 }).map((e, t) =>
                                (0, i.jsx)(
                                    'div',
                                    {
                                        className: (0, g.$)(
                                            eO().slide,
                                            ((e) => {
                                                let t = Math.abs(e - 2),
                                                    a = e < 2 ? 'above' : 'below';
                                                return t < 1
                                                    ? eO().slide_active
                                                    : t < 2
                                                      ? (0, g.$)(eO().slide_near, eO()['slide_near_'.concat(a)])
                                                      : t < 3
                                                        ? (0, g.$)(eO().slide_medium, eO()['slide_medium_'.concat(a)])
                                                        : (0, g.$)(eO().slide_far, eO()['slide_far_'.concat(a)]);
                                            })(t),
                                        ),
                                        children: (0, i.jsx)(eQ, {}),
                                    },
                                    t,
                                ),
                            ),
                        }),
                    });
                },
                eZ = (0, n.PA)((e) => {
                    let { className: t, items: a, isShimmerVisible: l } = e,
                        {
                            wheel: { activeIndex: n, setActiveIndex: r },
                        } = (0, m.g)(),
                        { formatMessage: s } = (0, h.A)(),
                        c = (0, A.f)(),
                        [d, u] = (0, o.useState)(null),
                        _ = 3 * a.length;
                    (0, o.useEffect)(() => {
                        c();
                    }, [c]);
                    let b = (0, p.c)((e) => {
                            r(e.realIndex);
                        }),
                        v = (0, p.c)((e) => {
                            u(e.clickedIndex);
                        }),
                        j = (0, p.c)(() => {
                            u(null);
                        });
                    return l
                        ? (0, i.jsx)(eJ, { className: t })
                        : (0, i.jsx)(L.RC, {
                              direction: 'horizontal',
                              centeredSlides: !0,
                              slideToClickedSlide: !0,
                              loopAdditionalSlides: 4,
                              slidesPerView: 4,
                              spaceBetween: 0,
                              initialSlide: a.length + 1,
                              modules: [M.Jq, M.U1],
                              a11y: D,
                              freeMode: { enabled: !0, sticky: !0 },
                              className: (0, g.$)(eO().root, t),
                              wrapperClass: eO().wrapper,
                              virtualTranslate: !0,
                              onRealIndexChange: b,
                              onTransitionEnd: b,
                              onTap: v,
                              tag: 'section',
                              role: 'region',
                              'aria-label': s({ id: 'a11y-regions.wheel' }),
                              'data-test-id': W.e8.wheel.WHEEL_MOBILE,
                              children: Array.from({ length: _ }, (e, t) => {
                                  let l = t % a.length,
                                      o = a[l],
                                      r = Math.floor(t / a.length);
                                  if (void 0 === o) return null;
                                  let s = O(t, n, _, !1),
                                      c = eD(t, n, _, !1);
                                  return (0, i.jsx)(
                                      L.qr,
                                      {
                                          className: (0, g.$)(
                                              eO().slide,
                                              ((e, t) =>
                                                  e < 1
                                                      ? eO().slide_active
                                                      : e < 2
                                                        ? (0, g.$)(eO().slide_near, eO()['slide_near_'.concat(t)])
                                                        : e < 3
                                                          ? (0, g.$)(eO().slide_medium, eO()['slide_medium_'.concat(t)])
                                                          : (0, g.$)(eO().slide_far, eO()['slide_far_'.concat(t)]))(s, c),
                                              { [eO().slide_tap]: t === d },
                                          ),
                                          onAnimationEnd: j,
                                          children: (0, i.jsx)(ez, { item: o, originalIndex: l, objectsCount: a.length }),
                                      },
                                      ''.concat(o.data.getKey(l), '-').concat(r),
                                  );
                              }),
                          });
                }),
                e0 = (0, n.PA)((e) => {
                    let { className: t } = e,
                        {
                            wheel: a,
                            settings: { isMobile: n },
                        } = (0, m.g)(),
                        h = (0, d.e)(),
                        p = x(),
                        _ = (() => {
                            let e = (0, y.N)().get(C.WA),
                                t = null == e ? void 0 : e.getPassportUid();
                            return (0, o.useMemo)(() => {
                                if (t) {
                                    let e = new k(String(t));
                                    return (e.openDatabase(), e);
                                }
                            }, [t]);
                        })(),
                        b = (0, u.M)();
                    ((0, o.useEffect)(() => {
                        a.setFeedbacksStore(_);
                    }, [a, _]),
                        (0, o.useEffect)(() => {
                            let e = null == h ? void 0 : h.state.queueState.currentEntity.onChange(p);
                            return () => {
                                null == e || e();
                            };
                        }, [h, p, a]),
                        (0, o.useEffect)(() => {
                            if (!a.isNeededToLoad || null === b) return;
                            let e = b.connector.state.connectionState.onChange((e) => {
                                e === l.iv.DISCONNECTED && p();
                            });
                            return () => {
                                null == e || e();
                            };
                        }, [p, a.isNeededToLoad, b]));
                    let v = (0, s.L)(() =>
                        n
                            ? (0, i.jsx)(eZ, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible })
                            : (0, i.jsx)(eS, { className: t, items: a.items, isShimmerVisible: a.isShimmerVisible }),
                    );
                    return (0, i.jsx)(c.F, {
                        blockId: r.EntityTypes.Wheel,
                        blockType: r.EntityTypes.Wheel,
                        blockPosX: 1,
                        blockPosY: 3,
                        objectsCount: a.items.length,
                        children: v,
                    });
                });
        },
        41893: (e) => {
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
        45090: (e) => {
            e.exports = {
                root: 'WheelDesktopItem_root__VA3O3',
                element: 'WheelDesktopItem_element__hAPKK',
                'fade-in': 'WheelDesktopItem_fade-in__jQQIK',
                element_hidden: 'WheelDesktopItem_element_hidden__eQBf7',
                shimmer: 'WheelDesktopItem_shimmer__tqTY3',
                shimmer_visible: 'WheelDesktopItem_shimmer_visible__9ID3Q',
            };
        },
        48724: (e) => {
            e.exports = { root: 'WheelMobileItem_root__5jyac', content: 'WheelMobileItem_content__I6Wm9' };
        },
        53116: (e) => {
            e.exports = { root: 'Petal_root__EqgmK' };
        },
        57263: (e, t, a) => {
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
                        (e.OTHER = 'OTHER'));
                })(i || (i = {})));
        },
        65940: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r });
            var i = a(36484),
                l = a(62562),
                n = a(27954),
                o = a(44806);
            let r = () => {
                let e = (0, l.N)(),
                    { experiments: t } = (0, n.g)();
                return t.checkExperiment(o.z.WebNextYnisonNewConnector, 'on') ? e.get(i.s_) : e.get(i.by);
            };
        },
        71150: (e) => {
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
        71683: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            let i = (e) => ''.concat(e.wheelId, '-').concat(e.eventType, '-').concat(e.item.id);
        },
        92671: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.ALBUM = 'ALBUM'), (e.WAVE = 'WAVE'), (e.PROMO_LINK = 'PROMO_LINK'), (e.SETTING = 'SETTING'));
                })(i || (i = {})));
        },
        99104: (e) => {
            e.exports = {
                root: 'WheelDesktopItemShimmer_root__Uorp1',
                coverContainer: 'WheelDesktopItemShimmer_coverContainer__LEjCd',
                cover: 'WheelDesktopItemShimmer_cover__KHZHJ',
                meta: 'WheelDesktopItemShimmer_meta__p_hOu',
                title: 'WheelDesktopItemShimmer_title__SkDaw',
                subtitle: 'WheelDesktopItemShimmer_subtitle__vH1q_',
            };
        },
    },
]);
