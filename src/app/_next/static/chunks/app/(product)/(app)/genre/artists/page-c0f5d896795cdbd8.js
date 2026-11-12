(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6949, 9029],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var s = i(88800),
                n = i(65724),
                r = i(53548),
                l = i(2058),
                o = i(88969),
                a = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                h = i(4044),
                m = i.n(h);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    h = (0, r.useRef)(null),
                    { formatMessage: g } = (0, l.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = h.current) || e.focus();
                }, []);
                let p = (0, r.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(a.$, {
                                    ref: h,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, s.jsx)(u.$, { className: (0, n.$)(m().root, m().important), message: p, closeToast: i });
            };
        },
        10270: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => c });
            var s = i(56949),
                n = i(53548),
                r = i(29993),
                l = i(44230),
                o = i(72288);
            let a = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: i, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: h },
                        } = (0, o.g)(),
                        { contentScrollRef: m } = (0, l.g)(),
                        g = (0, n.useRef)(new Map()),
                        p = (0, n.useRef)(void 0),
                        f = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = g.current.get(String(e));
                                return null != t ? t : i(e);
                            },
                            overscan: u,
                            initialRect: a,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, i) => {
                                if (!t) return 0;
                                let s = t.getBoundingClientRect().top;
                                return e && 1 ? s + window.scrollY : !e && i ? s + i.scrollTop : 0;
                            })(h, d, m),
                        },
                        v = (0, s.XW)(f),
                        x = (0, s.Te)({ ...f, getScrollElement: () => m, initialOffset: null == m ? void 0 : m.scrollTop }),
                        E = h ? v : x,
                        C = (0, r.c)(() => {
                            E.measure();
                        });
                    return (
                        (0, n.useEffect)(() => {
                            p.current ||
                                (p.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let i = e.target.getAttribute('data-index');
                                        if (e.target && i) {
                                            let s = e.contentRect.height;
                                            s && s !== g.current.get(i) && (g.current.set(i, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && C());
                                }));
                        }, [C]),
                        { virtualizer: E, resizeObserver: p.current }
                    );
                };
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
        14567: (e, t) => {
            (e.exports = function (e, t, s, n) {
                return JSON.stringify(e, i(t, n), s);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    s = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + s.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, r) {
                        if (i.length > 0) {
                            var l = i.indexOf(this);
                            (~l ? i.splice(l + 1) : i.push(this), ~l ? s.splice(l, 1 / 0, n) : s.push(n), ~i.indexOf(r) && (r = t.call(this, n, r)));
                        } else i.push(r);
                        return null == e ? r : e.call(this, n, r);
                    }
                );
            }
        },
        15324: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        21256: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(2058),
                a = i(87999),
                c = i(62414),
                d = i(80643),
                u = i(33979),
                h = i(17392),
                m = i(18593),
                g = i(29993),
                p = i(79070),
                f = i(29832),
                v = i(52300),
                x = i(7555),
                E = i(29504),
                C = i(91959),
                _ = i(64207),
                b = i(77455),
                T = i(5407),
                O = i(57934),
                I = i(84384),
                R = i(4795),
                y = i(78940),
                A = i(55693),
                S = i(39079),
                N = i(72288),
                k = i(81877),
                j = i(49738),
                w = i(91292),
                M = i(56862),
                L = i(16704),
                z = i(56446),
                P = i(36207),
                D = i(43161),
                F = i(93434),
                B = i.n(F);
            let U = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: F, topTitleElement: U, bottomTitleElement: W } = e,
                    G = (0, c.D)(),
                    {
                        trailer: Y,
                        user: H,
                        paywall: { modal: X },
                    } = (0, N.g)(),
                    { from: V, utmLink: K } = (0, I.f)({ contextId: t.id, contextType: m.K.Artist }),
                    { formatMessage: q } = (0, o.A)(),
                    [$, J] = (0, l.useState)(!1),
                    [Z, Q] = (0, l.useState)(!1),
                    [ee, et] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: es, sendPlaySearchFeedback: en } = (0, A.z)(),
                    er = (0, d.S)(),
                    el = (0, u.g)(),
                    eo = (0, _.K)(t),
                    ea = (0, b.A)(t),
                    { id: ec, name: ed, coverUri: eu, isLiked: eh } = t,
                    em = (0, y.Z)(t.url),
                    [eg, ep] = (0, l.useState)(!1),
                    ef = (0, O.F)(),
                    ev = (0, T.P)(),
                    ex = (0, g.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), ef(a.DomainObjectType.Artist, t.id));
                    }),
                    eE = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = eh ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, eh, q]),
                    { isPlaying: eC, togglePlay: e_ } = (0, S.D)({
                        playContextParams: { contextData: { type: m.K.Artist, meta: { id: Number(ec) }, from: V, utmLink: K }, loadContextMeta: !0 },
                    }),
                    eb = (0, C.S)({ artist: t, callback: em }),
                    eT = (0, C.S)({ artist: t, callback: e_ }),
                    eO = (0, g.c)((e) => {
                        (null == es || es(), er({ to: a.AppScreen.ArtistScreen }), eb(e));
                    }),
                    eI = (0, R.N)(),
                    eR = (0, g.c)(() => {
                        if (!ev()) {
                            if (eI) return void X.open();
                            ($ || eC || (J(!0), null == en || en()), eT(), eC || el());
                        }
                    }),
                    ey = (0, g.c)(() => {
                        (Z || eh || (Q(!0), null == ei || ei()), eo());
                    }),
                    eA = (0, g.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eS = (0, g.c)((e) => {
                        (et(e), ep(e));
                    }),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eS,
                                    open: ee,
                                    onClick: eA,
                                    className: (0, n.$)(B().menuButton, B().control),
                                    size: 's',
                                    icon: (0, s.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': h.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eA, eS, ee],
                    ),
                    ek = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                P.n,
                                {
                                    children: (0, s.jsx)(z.k, {
                                        className: (0, n.$)(B().trailerButton, B().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
                    ej = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(
                                M.O,
                                { onClick: ea, isPinned: t.isPinned, className: (0, n.$)(B().pinButton, B().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ea],
                    ),
                    ew = (0, p.L)(() => {
                        if (t.isAvailable)
                            return (0, s.jsx)(
                                f.hg,
                                {
                                    isVisible: ee || eg,
                                    className: B().controls,
                                    radius: 'round',
                                    playControl: (0, s.jsx)(
                                        L.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(B().playButton, B().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eR,
                                            isPlaying: eC,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, s.jsx)(
                                        j.c,
                                        {
                                            className: (0, n.$)(B().likeButton, B().control),
                                            isLiked: eh,
                                            onClick: ey,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !H.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: ej,
                                    trailerControl: ek,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eM = (0, l.useMemo)(
                        () =>
                            (0, s.jsx)(x.t, {
                                className: B().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': h.Kq.artist.ARTIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: B().coverBlock,
                                    onClick: eO,
                                    children: [
                                        (0, s.jsx)(k.B, {
                                            className: B().image,
                                            src: eu,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eE,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        ew,
                                    ],
                                }),
                            }),
                        [eO, eu, eE, t.isAvailable, ew],
                    );
                return (0, s.jsx)(f.MN, {
                    ref: G,
                    className: (0, n.$)(B().root, i),
                    textPosition: 'center',
                    'aria-label': eE,
                    title: (0, s.jsxs)(s.Fragment, {
                        children: [
                            U,
                            (0, s.jsx)(E.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, s.jsx)(w.N, {
                                    className: B().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eE,
                                    onClick: eO,
                                    'data-test-id': h.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            W,
                        ],
                    }),
                    srTitle: (0, s.jsx)(w.N, { className: B().srTitleLink, href: t.url, onClick: eO, children: eE }),
                    contentLinesCount: F,
                    view: eM,
                    'data-test-id': h.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        21576: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => u });
            var s = i(88800),
                n = i(84961),
                r = i(53548),
                l = i(50408),
                o = i(47969),
                a = i(53360),
                c = i(15324),
                d = i.n(c);
            let u = (0, n.PA)((e) => {
                let {
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: u = 2,
                        minColumnWidth: h,
                        maxColumnWidth: m,
                        maxColumnCount: g,
                        renderItemByIndex: p,
                        onChangeRange: f,
                    } = e,
                    [v, x] = (0, l.d)(),
                    {
                        virtualizer: E,
                        rowResizeObserver: C,
                        columnCount: _,
                        indices: b,
                    } = (0, o.L)({
                        count: t,
                        rowGap: i,
                        columnGap: n,
                        getEstimateRowSize: c,
                        minColumnCount: u,
                        minColumnWidth: h,
                        maxColumnWidth: m,
                        maxColumnCount: g,
                        containerRef: v,
                    });
                (0, r.useEffect)(() => {
                    !E.isScrolling && E.range && (null == f || f(E.range, _));
                }, [f, E.isScrolling, E.range, _]);
                let T = { '--virtual-grid-height': ''.concat(E.getTotalSize(), 'px'), '--virtual-grid-column-count': _ };
                return (0, s.jsx)('div', {
                    ref: x,
                    style: T,
                    className: d().root,
                    children: E.getVirtualItems().map((e) =>
                        (0, s.jsx)(
                            a.U,
                            {
                                className: d().row,
                                columnClassName: d().column,
                                virtualItem: e,
                                resizeObserver: C,
                                indices: b,
                                renderItemByIndex: p,
                                scrollMargin: E.options.scrollMargin,
                            },
                            e.key,
                        ),
                    ),
                });
            });
        },
        23877: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Q: () => n, c: () => s }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(s || (s = {})));
            let n = { [s.ERROR]: 'error', [s.WARNING]: 'warn', [s.INFO]: 'info', [s.DEBUG]: 'debug', [s.TRACE]: 'trace' };
        },
        25354: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => o, I7: () => a, K$: () => l, cM: () => d, fZ: () => n, tA: () => r, vX: () => s, xi: () => c });
            let s = 16,
                n = 16,
                r = 315,
                l = 170,
                o = 270,
                a = 7,
                c = 30,
                d = 30;
        },
        29201: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var s = i(35396);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, s.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        35396: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { C: () => r }),
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
                })(s || (s = {})));
            let n = new Set(Object.values(s)),
                r = (e) => 'string' == typeof e && n.has(e);
        },
        35470: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 55470));
        },
        43161: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var s = i(88800),
                n = i(84961),
                r = i(2058),
                l = i(87999),
                o = i(17392),
                a = i(18593),
                c = i(29993),
                d = i(52300),
                u = i(19934),
                h = i(96706),
                m = i(53548),
                g = i(79390),
                p = i(29595),
                f = i(74965),
                v = i(72288),
                x = i(66943),
                E = i(7555),
                C = i(73170),
                _ = i(29504),
                b = i(59304),
                T = i(81877),
                O = i(85074),
                I = i.n(O);
            let R = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: l } = e,
                    { formatMessage: o } = (0, r.A)(),
                    a = o(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, s.jsx)(b.$, {
                    closeToast: l,
                    message: (0, s.jsxs)('div', {
                        className: I().message,
                        children: [
                            (0, s.jsx)(C.q, { children: (0, s.jsx)('p', { role: 'alert', 'aria-label': a }) }),
                            (0, s.jsx)(E.t, {
                                className: I().cover,
                                radius: 'round',
                                children: (0, s.jsx)(T.B, { className: I().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, s.jsx)(_.HL, { className: I().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: a }),
                        ],
                    }),
                });
            };
            var y = i(64207),
                A = i(77455),
                S = i(48749),
                N = i(22505),
                k = i(5407),
                j = i(64284),
                w = i(98427),
                M = i(57934),
                L = i(84384),
                z = i(9618),
                P = i(95210),
                D = i(47964),
                F = i(46936),
                B = i(97956),
                U = i(98953),
                W = i(32721),
                G = i(18130),
                Y = i(56117),
                H = i(93091),
                X = i(27817),
                V = i(74064),
                K = i(15425),
                q = i(81066),
                $ = i(64546);
            let J = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: E, onOpenChange: C, open: _, ...b } = e,
                    { shouldShowBuySubscriptionModal: T, showBuySubscriptionModal: O } = (0, z.q)(),
                    {
                        settings: { isMobile: I },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, A.A)(E),
                    ei = (0, y.K)(E),
                    es = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, f.l)(),
                            [n, l] = (0, m.useState)(!1),
                            { formatMessage: o } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, s.jsx)(x.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (n) return;
                            let r = { ...(0, h.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let a = await e.toggleDislike();
                            (l(!1),
                                a === g.f.OK
                                    ? i((0, s.jsx)(R, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, s.jsx)(x.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(E),
                    en = (0, M.F)(),
                    er = ''.concat(j.U.ARTIST, '-').concat(null == E ? void 0 : E.id),
                    { formatMessage: el } = (0, r.A)(),
                    { utmLink: eo } = (0, L.f)({ blockId: j.U.ARTIST, contextType: a.K.Artist, contextId: null == E ? void 0 : E.id }),
                    { shareLink: ea, pathname: ec } = (0, G.b)('/artist/:artistId', { params: { artistId: null != (i = null == E ? void 0 : E.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: F.D.ARTIST, urlParams: { id: null == E ? void 0 : E.id } }),
                    { isPlaying: eu, togglePlay: eh } = (0, D.B)({
                        seeds: null != (n = null == E ? void 0 : E.seeds) ? n : [],
                        pageIdForFrom: w.b.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == E ? void 0 : E.id,
                    }),
                    em = (0, k.P)(),
                    eg = el((null == E ? void 0 : E.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (T && Q.isAuthorized) return void O();
                        eu || eh();
                    }),
                    ef = (0, c.c)(() => {
                        if (!em()) {
                            if (T) return void O();
                            (null == E ? void 0 : E.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(E.id), en(l.DomainObjectType.Artist, E.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        J.open(null == E ? void 0 : E.id);
                    });
                (0, P.N)(_);
                let ex = { variant: U.Y.ARTIST, id: null == E ? void 0 : E.id, title: null == E ? void 0 : E.name, path: ec },
                    eE = ee.checkExperiment(B.z.WebEditorsFeatures, 'on'),
                    eC = null == E || null == (t = E.trailer) ? void 0 : t.isAvailable,
                    e_ = ee.checkExperiment(B.z.WebNextArtistInfo, 'on'),
                    eb = !ee.checkExperiment(B.z.WebNextProductWithoutRecommendation, 'on');
                return (0, s.jsxs)(u.W1, {
                    isMobile: I,
                    offsetOptions: 10,
                    open: _,
                    onOpenChange: C,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        eE && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(N.d, { entityVariant: F.D.ARTIST, adminUrl: ed }) }),
                        !I && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(X.L, { onClick: et, isPinned: null == E ? void 0 : E.isPinned }) }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(H.T, {
                                onClick: ei,
                                isLiked: null == E ? void 0 : E.isLiked,
                                disabled: !Q.isAuthorized || !(null == E ? void 0 : E.isAvailable),
                            }),
                        }),
                        eC && (0, s.jsx)($.WithOffline, { fallback: (0, s.jsx)(K.N, { onClick: ef }) }),
                        eb &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(q.C, { onClick: ep, disabled: !(null == E ? void 0 : E.isAvailable), variant: W.I.ARTIST, onOpenMenuChange: C }),
                            }),
                        (0, s.jsx)(V.H, { disabled: !E, shareLink: ea, entityMeta: ex }),
                        e_ &&
                            (0, s.jsx)($.WithOffline, {
                                fallback: (0, s.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, s.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eg,
                                }),
                            }),
                        (0, s.jsx)($.WithOffline, {
                            fallback: (0, s.jsx)(Y.D, { onClick: es, isDisliked: null == E ? void 0 : E.isDisliked, disabled: !(null == E ? void 0 : E.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            var s = i(23877),
                n = i(74021);
            class r extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= s.c.INFO && this.logToConsole(s.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= s.c.DEBUG && this.logToConsole(s.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= s.c.TRACE && this.logToConsole(s.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= s.c.WARNING && this.logToConsole(s.c.WARNING, e, t), this.sendToErrorBooster(s.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= s.c.ERROR && this.logToConsole(s.c.ERROR, e, t), this.sendToErrorBooster(s.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(s.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = s.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        47969: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => c });
            var s = i(35802),
                n = i(79070),
                r = i(61013),
                l = i(53548);
            let o = (e) => {
                let { minColumnWidth: t, maxColumnWidth: i, containerWidth: s, totalCount: n, columnGap: r, minColumnCount: l, maxColumnCount: o } = e,
                    a = Math.max(1, Math.floor((s + r) / (t + r))),
                    c = Math.max(l, Math.floor((s + r) / ((i + t) * 0.5 + r)));
                for (let e = l; e <= a; e++) {
                    let n = (s - (e - 1) * r) / e;
                    if (n >= t && n <= i) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(n / (c = o ? Math.min(c, o) : c)), columnCount: c };
            };
            var a = i(10270);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: i,
                        rowGap: c,
                        columnGap: d,
                        minColumnWidth: u,
                        maxColumnWidth: h,
                        minColumnCount: m,
                        maxColumnCount: g,
                        containerRef: p,
                    } = e,
                    { rowCount: f, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: i, maxColumnWidth: s, minColumnWidth: n, totalCount: a, columnGap: c, maxColumnCount: d } = e,
                            [u, h] = (0, l.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, l.useRef)(null),
                            g = (0, l.useMemo)(
                                () =>
                                    (0, r.A)(
                                        (e) => {
                                            h(
                                                o({
                                                    minColumnWidth: n,
                                                    maxColumnWidth: s,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: a,
                                                    columnGap: c,
                                                    minColumnCount: i,
                                                    maxColumnCount: d,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, d, s, i, n, a],
                            );
                        return (
                            (0, l.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(g);
                                    })),
                                    t &&
                                        (h(
                                            o({
                                                minColumnWidth: n,
                                                maxColumnWidth: s,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: a,
                                                columnGap: c,
                                                minColumnCount: i,
                                                maxColumnCount: d,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, g, d, s, i, n, a],
                            ),
                            u
                        );
                    })({ totalCount: t, columnGap: null != d ? d : 0, minColumnCount: m, maxColumnWidth: h, minColumnWidth: u, maxColumnCount: g, containerRef: p }),
                    { virtualizer: x, resizeObserver: E } = (0, a.r)({ count: f, getEstimateSize: i, gap: c, containerRef: p }),
                    C = (0, s.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    _ = (0, n.L)(() => {
                        var e, t;
                        if (!x.range) return null;
                        let i = null == (e = C[x.range.startIndex]) ? void 0 : e.at(0),
                            s = null == (t = C[x.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== i && void 0 !== s ? { startIndex: i, endIndex: s } : null;
                    });
                return { virtualizer: x, rowResizeObserver: E, indices: C, columnCount: v, visibleRange: _ };
            };
        },
        51516: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        53360: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                l = i(53548),
                o = i(51516),
                a = i.n(o);
            let c = (0, r.PA)((e) => {
                let { indices: t, virtualItem: i, renderItemByIndex: r, columnClassName: o, className: c, resizeObserver: d, scrollMargin: u } = e,
                    h = (0, l.useRef)(null),
                    m = t[i.index],
                    g = { '--virtual-grid-row-vertical-offset': ''.concat(i.start - u, 'px') };
                return (
                    (0, l.useEffect)(() => {
                        let e = h.current;
                        if (e)
                            return (
                                null == d || d.observe(e),
                                () => {
                                    null == d || d.unobserve(e);
                                }
                            );
                    }, [d]),
                    (0, s.jsx)('div', {
                        'data-index': i.index,
                        ref: h,
                        style: g,
                        className: (0, n.$)(a().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, s.jsx)('div', { className: o, children: r(e) }, ''.concat(i.key, '_').concat(e))),
                    })
                );
            });
        },
        54099: (e) => {
            e.exports = {
                root: 'GenreArtistsPage_root__PgtIz',
                container: 'GenreArtistsPage_container__NruTu',
                shimmerTitle: 'GenreArtistsPage_shimmerTitle__K2uY9',
                footer: 'GenreArtistsPage_footer__fYaCO',
            };
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var s = i(88800),
                n = i(4370),
                r = i(15077),
                l = i(42729);
            let o = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(l.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                n = i(53548),
                r = i(29993),
                l = i(9492),
                o = i(29595),
                a = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, n.useRef)(void 0),
                    h = (0, r.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, n.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(l.L, { reloadBlocks: h }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, h, i, e.rejectedPagesCount]);
            };
        },
        55470: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => V }));
            var s = i(88800),
                n = i(53548),
                r = i(58390),
                l = i(84961),
                o = i(2058),
                a = i(87999),
                c = i(76903),
                d = i(17392),
                u = i(29993),
                h = i(66719),
                m = i(29504),
                g = i(32596),
                p = i(21256),
                f = i(69630),
                v = i(21576),
                x = i(98427),
                E = i(46422),
                C = i(44230),
                _ = i(37670),
                b = i(34961),
                T = i(53892),
                O = i(54320),
                I = i(86790),
                R = i(60266),
                y = i(93317),
                A = i(37770),
                S = i(25354),
                N = i(30144),
                k = i(72288),
                j = i(324),
                w = i(46511),
                M = i(13012),
                L = i(57297),
                z = i(2218),
                P = i(77863),
                D = i(45383),
                F = i(40883);
            async function B(e, t) {
                let { locale: i, fullUrl: s, url: n, tld: r, host: l } = t,
                    o = await (0, w.W)(i),
                    a = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: a }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, F.f)({ genreTitle: a, artists: d, messageFormatter: o }),
                    h = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(l)).href;
                return {
                    title: c,
                    description: u,
                    openGraph: (0, L.i)({
                        ogTitle: (0, M.N)(a),
                        ogDescription: u,
                        fullUrl: null != s ? s : '',
                        locale: i,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: h,
                    }),
                    twitter: (0, z.H)({ cardType: P.W.APP, title: c, url: null != n ? n : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, j.X)({
                        additional: { tld: r, url: null != n ? n : '', fullUrl: null != s ? s : '', host: l },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, D.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var U = i(59918),
                W = i(54099),
                G = i.n(W);
            let Y = (0, l.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { artistsSubpage: l } = (0, b.s)(T.n.GENRE),
                    { formatMessage: j } = (0, o.A)(),
                    { contentScrollRef: w, setContentScrollRef: M } = (0, C.g)(),
                    L = (0, E.W)(),
                    z = (0, u.c)(() => S.tA),
                    P = (0, u.c)(() => (l.isShimmerVisible ? S.xi : l.totalCount)),
                    D = (0, n.useCallback)(
                        (e) => {
                            t && l.getData({ metatagId: t, page: e, pageSize: S.cM });
                        },
                        [l, t],
                    ),
                    F = ((e) => {
                        let { pageSize: t, callback: i } = e;
                        return (0, u.c)((e, s) => {
                            if (!i) return;
                            let n = Math.floor((e.startIndex * s) / t),
                                r = Math.ceil((e.endIndex * s) / t);
                            for (let e = n; e <= r; e++) i(e);
                        });
                    })({ pageSize: S.cM, callback: D });
                (0, O.X)(l.pagesLoader, D);
                let W = (0, u.c)((e) => {
                    let t = l.items[e],
                        i = j({ id: 'loading-messages.entity-is-loading' }, { entityName: j({ id: 'entity-names.artist' }) });
                    return t ? (0, s.jsx)(p.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, s.jsx)(A.V, { 'aria-label': i, round: !0, centered: !0 });
                });
                return ((0, n.useEffect)(
                    () => () => {
                        l.reset();
                    },
                    [l],
                ),
                l.isNotFound && (0, r.notFound)(),
                (0, _.J)(l.isResolved),
                ((e) => {
                    let { fullscreenVideoPlayer: t } = (0, k.g)(),
                        i = null == e ? void 0 : e.fullTitle,
                        s = null == e ? void 0 : e.isResolved,
                        r = null == e ? void 0 : e.pagesLoader.isInitialRequestRejected,
                        l = (0, n.useCallback)(
                            (t) =>
                                r
                                    ? {}
                                    : e && s && i
                                      ? B(
                                            ((e) => {
                                                var t, i, s;
                                                return {
                                                    id: '',
                                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                                    artists: e.items.map((e) => ({ artist: (0, U.N)(e), popularTracks: [] })),
                                                    pager: {
                                                        page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                        perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                        total: (null == (s = e.pagesLoader.pager) ? void 0 : s.total) || 0,
                                                    },
                                                };
                                            })(e),
                                            t,
                                        )
                                      : void 0,
                            [e, i, s, r],
                        );
                    (0, N.C)(t.modal.isOpened ? null : l);
                })(l),
                t && l.isNeededToLoad && (0, n.use)(l.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: S.cM })),
                l.isSomethingWrong)
                    ? (0, s.jsx)(g.SomethingWentWrong, {})
                    : (0, s.jsx)(c.a, {
                          pageId: a.AppScreen.GenreArtists,
                          pageIdForFrom: x.b.GENRE_ARTISTS,
                          children: (0, s.jsx)(f.h, {
                              scrollElement: w,
                              outerTitle: l.fullTitle,
                              children: (0, s.jsxs)('div', {
                                  className: G().root,
                                  'data-test-id': d.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, s.jsx)(y.Y, {
                                          variant: y.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: L.canBack,
                                          children: (0, s.jsx)(m.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: l.fullTitle }),
                                      }),
                                      (0, s.jsxs)(h.N, {
                                          ref: M,
                                          className: G().root,
                                          containerClassName: G().container,
                                          children: [
                                              (0, s.jsx)(v.Q, {
                                                  maxColumnCount: S.I7,
                                                  count: P(),
                                                  rowGap: S.fZ,
                                                  columnGap: S.vX,
                                                  getEstimateRowSize: z,
                                                  minColumnWidth: S.K$,
                                                  maxColumnWidth: S.El,
                                                  onChangeRange: F,
                                                  renderItemByIndex: W,
                                              }),
                                              (0, s.jsx)(R.A, { children: (0, s.jsx)(I.w, { className: G().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var H = i(19994);
            let X = () => {
                    let e = (0, E.W)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, C.g)(),
                        { formatMessage: n } = (0, o.A)(),
                        r = n({ id: 'loading-messages.entity-is-loading' }, { entityName: n({ id: 'entity-names.artist' }) }),
                        l = (0, u.c)(() => (0, s.jsx)(A.V, { 'aria-label': r, round: !0, centered: !0 })),
                        a = (0, u.c)(() => S.tA),
                        c = (0, u.c)(() => void 0);
                    return (0, s.jsx)(f.h, {
                        scrollElement: t,
                        children: (0, s.jsxs)('div', {
                            className: G().root,
                            children: [
                                (0, s.jsx)(y.Y, {
                                    variant: y.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, s.jsx)(H.W, { className: G().shimmerTitle, radius: 'l' }),
                                }),
                                (0, s.jsx)(h.N, {
                                    ref: i,
                                    className: G().root,
                                    containerClassName: G().container,
                                    children: (0, s.jsx)(v.Q, {
                                        maxColumnCount: S.I7,
                                        count: S.xi,
                                        rowGap: S.fZ,
                                        columnGap: S.vX,
                                        getEstimateRowSize: a,
                                        minColumnWidth: S.K$,
                                        maxColumnWidth: S.El,
                                        onChangeRange: c,
                                        renderItemByIndex: l,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = () => {
                    let e = (0, r.useSearchParams)().get('metatagId');
                    return (e || (0, r.notFound)(), (0, s.jsx)(n.Suspense, { fallback: (0, s.jsx)(X, {}), children: (0, s.jsx)(Y, { metatagId: e }) }));
                };
        },
        56117: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var s = i(88800),
                n = i(84961),
                r = i(88969),
                l = i(17392),
                o = i(52300),
                a = i(19934),
                c = i(72288);
            let d = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, s.jsx)(a.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, s.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, s.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56949: (e, t, i) => {
            'use strict';
            i.d(t, { Te: () => T, XW: () => O });
            var s = i(53548),
                n = i(53405);
            function r(e, t, i) {
                let s,
                    n = i.initialDeps ?? [];
                function r() {
                    var r, l, o, a;
                    let c, d;
                    i.key && (null == (r = i.debug) ? void 0 : r.call(i)) && (c = Date.now());
                    let u = e();
                    if (!(u.length !== n.length || u.some((e, t) => n[t] !== e))) return s;
                    if (
                        ((n = u),
                        i.key && (null == (l = i.debug) ? void 0 : l.call(i)) && (d = Date.now()),
                        (s = t(...u)),
                        i.key && (null == (o = i.debug) ? void 0 : o.call(i)))
                    ) {
                        let e = Math.round((Date.now() - c) * 100) / 100,
                            t = Math.round((Date.now() - d) * 100) / 100,
                            s = t / 16,
                            n = (e, t) => {
                                for (e = String(e); e.length < t;) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${n(t, 5)} /${n(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * s, 120))}deg 100% 31%);`,
                            null == i ? void 0 : i.key,
                        );
                    }
                    return (null == (a = null == i ? void 0 : i.onChange) || a.call(i, s), s);
                }
                return (
                    (r.updateDeps = (e) => {
                        n = e;
                    }),
                    r
                );
            }
            function l(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let o = (e, t, i) => {
                    let s;
                    return function (...n) {
                        (e.clearTimeout(s), (s = e.setTimeout(() => t.apply(this, n), i)));
                    };
                },
                a = (e) => e,
                c = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        i = Math.min(e.endIndex + e.overscan, e.count - 1),
                        s = [];
                    for (let e = t; e <= i; e++) s.push(e);
                    return s;
                },
                d = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = (e) => {
                        let { width: i, height: s } = e;
                        t({ width: Math.round(i), height: Math.round(s) });
                    };
                    if ((n(i.getBoundingClientRect()), !s.ResizeObserver)) return () => {};
                    let r = new s.ResizeObserver((t) => {
                        let s = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void n({ width: t.inlineSize, height: t.blockSize });
                            }
                            n(i.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(s) : s();
                    });
                    return (
                        r.observe(i, { box: 'border-box' }),
                        () => {
                            r.unobserve(i);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = () => {
                        t({ width: i.innerWidth, height: i.innerHeight });
                    };
                    return (
                        s(),
                        i.addEventListener('resize', s, u),
                        () => {
                            i.removeEventListener('resize', s);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                g = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (s) => () => {
                            let { horizontal: l, isRtl: o } = e.options;
                            ((n = l ? i.scrollLeft * ((o && -1) || 1) : i.scrollTop), r(), t(n, s));
                        },
                        a = l(!0),
                        c = l(!1);
                    (c(), i.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && i.addEventListener('scrollend', c, u),
                        () => {
                            (i.removeEventListener('scroll', a), d && i.removeEventListener('scrollend', c));
                        }
                    );
                },
                p = (e, t) => {
                    let i = e.scrollElement;
                    if (!i) return;
                    let s = e.targetWindow;
                    if (!s) return;
                    let n = 0,
                        r =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : o(
                                      s,
                                      () => {
                                          t(n, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        l = (s) => () => {
                            ((n = i[e.options.horizontal ? 'scrollX' : 'scrollY']), r(), t(n, s));
                        },
                        a = l(!0),
                        c = l(!1);
                    (c(), i.addEventListener('scroll', a, u));
                    let d = e.options.useScrollendEvent && m;
                    return (
                        d && i.addEventListener('scrollend', c, u),
                        () => {
                            (i.removeEventListener('scroll', a), d && i.removeEventListener('scrollend', c));
                        }
                    );
                },
                f = (e, t, i) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[i.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[i.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var n, r;
                    null == (r = null == (n = s.scrollElement) ? void 0 : n.scrollTo) || r.call(n, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                },
                x = (e, { adjustments: t = 0, behavior: i }, s) => {
                    var n, r;
                    null == (r = null == (n = s.scrollElement) ? void 0 : n.scrollTo) || r.call(n, { [s.options.horizontal ? 'left' : 'top']: e + t, behavior: i });
                };
            class E {
                constructor(e) {
                    ((this.unsubs = []),
                        (this.scrollElement = null),
                        (this.targetWindow = null),
                        (this.isScrolling = !1),
                        (this.scrollToIndexTimeoutId = null),
                        (this.measurementsCache = []),
                        (this.itemSizeCache = new Map()),
                        (this.pendingMeasuredCacheIndexes = []),
                        (this.scrollRect = null),
                        (this.scrollOffset = null),
                        (this.scrollDirection = null),
                        (this.scrollAdjustments = 0),
                        (this.elementsCache = new Map()),
                        (this.observer = (() => {
                            let e = null,
                                t = () =>
                                    e ||
                                    (this.targetWindow && this.targetWindow.ResizeObserver
                                        ? (e = new this.targetWindow.ResizeObserver((e) => {
                                              e.forEach((e) => {
                                                  let t = () => {
                                                      this._measureElement(e.target, e);
                                                  };
                                                  this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t();
                                              });
                                          }))
                                        : null);
                            return {
                                disconnect: () => {
                                    var i;
                                    (null == (i = t()) || i.disconnect(), (e = null));
                                },
                                observe: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var i;
                                    return null == (i = t()) ? void 0 : i.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            (Object.entries(e).forEach(([t, i]) => {
                                void 0 === i && delete e[t];
                            }),
                                (this.options = {
                                    debug: !1,
                                    initialOffset: 0,
                                    overscan: 1,
                                    paddingStart: 0,
                                    paddingEnd: 0,
                                    scrollPaddingStart: 0,
                                    scrollPaddingEnd: 0,
                                    horizontal: !1,
                                    getItemKey: a,
                                    rangeExtractor: c,
                                    onChange: () => {},
                                    measureElement: f,
                                    initialRect: { width: 0, height: 0 },
                                    scrollMargin: 0,
                                    gap: 0,
                                    indexAttribute: 'data-index',
                                    initialMeasurementsCache: [],
                                    lanes: 1,
                                    isScrollingResetDelay: 150,
                                    enabled: !0,
                                    isRtl: !1,
                                    useScrollendEvent: !1,
                                    useAnimationFrameWithResizeObserver: !1,
                                    ...e,
                                }));
                        }),
                        (this.notify = (e) => {
                            var t, i;
                            null == (i = (t = this.options).onChange) || i.call(t, this, e);
                        }),
                        (this.maybeNotify = r(
                            () => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]),
                            (e) => {
                                this.notify(e);
                            },
                            {
                                key: !1,
                                debug: () => this.options.debug,
                                initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null],
                            },
                        )),
                        (this.cleanup = () => {
                            (this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null));
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                ((this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            ((this.scrollRect = e), this.maybeNotify());
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            ((this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify());
                                        }),
                                    ));
                            }
                        }),
                        (this.getSize = () =>
                            this.options.enabled
                                ? ((this.scrollRect = this.scrollRect ?? this.options.initialRect), this.scrollRect[this.options.horizontal ? 'width' : 'height'])
                                : ((this.scrollRect = null), 0)),
                        (this.getScrollOffset = () =>
                            this.options.enabled
                                ? ((this.scrollOffset =
                                      this.scrollOffset ?? ('function' == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset)),
                                  this.scrollOffset)
                                : ((this.scrollOffset = null), 0)),
                        (this.getFurthestMeasurement = (e, t) => {
                            let i = new Map(),
                                s = new Map();
                            for (let n = t - 1; n >= 0; n--) {
                                let t = e[n];
                                if (i.has(t.lane)) continue;
                                let r = s.get(t.lane);
                                if ((null == r || t.end > r.end ? s.set(t.lane, t) : t.end < r.end && i.set(t.lane, !0), i.size === this.options.lanes)) break;
                            }
                            return s.size === this.options.lanes
                                ? Array.from(s.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = r(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, i, s, n) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: n }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = r(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: i, getItemKey: s, enabled: n }, r) => {
                                if (!n) return ((this.measurementsCache = []), this.itemSizeCache.clear(), []);
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let l = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let o = this.measurementsCache.slice(0, l);
                                for (let n = l; n < e; n++) {
                                    let e = s(n),
                                        l = 1 === this.options.lanes ? o[n - 1] : this.getFurthestMeasurement(o, n),
                                        a = l ? l.end + this.options.gap : t + i,
                                        c = r.get(e),
                                        d = 'number' == typeof c ? c : this.options.estimateSize(n),
                                        u = a + d,
                                        h = l ? l.lane : n % this.options.lanes;
                                    o[n] = { index: n, start: a, size: d, end: u, key: e, lane: h };
                                }
                                return ((this.measurementsCache = o), o);
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = r(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, i, s) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: i, lanes: s }) {
                                              let n = e.length - 1,
                                                  r = C(0, n, (t) => e[t].start, i),
                                                  l = r;
                                              if (1 === s) for (; l < n && e[l].end < i + t;) l++;
                                              else if (s > 1) {
                                                  let o = Array(s).fill(0);
                                                  for (; l < n && o.some((e) => e < i + t);) {
                                                      let t = e[l];
                                                      ((o[t.lane] = t.end), l++);
                                                  }
                                                  let a = Array(s).fill(i + t);
                                                  for (; r > 0 && a.some((e) => e >= i);) {
                                                      let t = e[r];
                                                      ((a[t.lane] = t.start), r--);
                                                  }
                                                  ((r = Math.max(0, r - (r % s))), (l = Math.min(n, l + (s - 1 - (l % s)))));
                                              }
                                              return { startIndex: r, endIndex: l };
                                          })({ measurements: e, outerSize: t, scrollOffset: i, lanes: s })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = r(
                            () => {
                                let e = null,
                                    t = null,
                                    i = this.calculateRange();
                                return (
                                    i && ((e = i.startIndex), (t = i.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, i, s, n) => (null === s || null === n ? [] : e({ startIndex: s, endIndex: n, overscan: t, count: i })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                i = e.getAttribute(t);
                            return i ? parseInt(i, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let i = this.indexFromElement(e),
                                s = this.measurementsCache[i];
                            if (!s) return;
                            let n = s.key,
                                r = this.elementsCache.get(n);
                            (r !== e && (r && this.observer.unobserve(r), this.observer.observe(e), this.elementsCache.set(n, e)),
                                e.isConnected && this.resizeItem(i, this.options.measureElement(e, t, this)));
                        }),
                        (this.resizeItem = (e, t) => {
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = t - (this.itemSizeCache.get(i.key) ?? i.size);
                            0 !== s &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(i, s, this)
                                    : i.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += s), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(i.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = r(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let i = [];
                                for (let s = 0, n = e.length; s < n; s++) {
                                    let n = t[e[s]];
                                    i.push(n);
                                }
                                return i;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return l(t[C(0, t.length - 1, (e) => l(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, i = 0) => {
                            let s = this.getSize(),
                                n = this.getScrollOffset();
                            ('auto' === t && (t = e >= n + s ? 'end' : 'start'), 'center' === t ? (e += (i - s) / 2) : 'end' === t && (e -= s));
                            let r = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[r]
                                            : this.scrollElement[r]
                                        : 0) - s,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let i = this.measurementsCache[e];
                            if (!i) return;
                            let s = this.getSize(),
                                n = this.getScrollOffset();
                            if ('auto' === t)
                                if (i.end >= n + s - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(i.start <= n + this.options.scrollPaddingStart)) return [n, t];
                                    t = 'start';
                                }
                            let r = 'end' === t ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(r, t, i.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: i } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: i }));
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: i } = {}) => {
                            ((e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === i && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'));
                            let s = this.getOffsetForIndex(e, t);
                            if (!s) return;
                            let [n, r] = s;
                            (this._scrollToOffset(n, { adjustments: void 0, behavior: i }),
                                'smooth' !== i &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = l(this.getOffsetForIndex(e, r));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: r, behavior: i });
                                        } else this.scrollToIndex(e, { align: r, behavior: i });
                                    })));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            (this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t }));
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                i = this.getMeasurements();
                            if (0 === i.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = i[i.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    s = i.length - 1;
                                for (; s > 0 && e.some((e) => null === e);) {
                                    let t = i[s];
                                    (null === e[t.lane] && (e[t.lane] = t.end), s--);
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: i }) => {
                            this.options.scrollToFn(e, { behavior: i, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            ((this.itemSizeCache = new Map()), this.notify(!1));
                        }),
                        this.setOptions(e));
                }
            }
            let C = (e, t, i, s) => {
                    for (; e <= t;) {
                        let n = ((e + t) / 2) | 0,
                            r = i(n);
                        if (r < s) e = n + 1;
                        else {
                            if (!(r > s)) return n;
                            t = n - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                _ = 'undefined' != typeof document ? s.useLayoutEffect : s.useEffect;
            function b(e) {
                let t = s.useReducer(() => ({}), {})[1],
                    i = {
                        ...e,
                        onChange: (i, s) => {
                            var r;
                            (s ? (0, n.flushSync)(t) : t(), null == (r = e.onChange) || r.call(e, i, s));
                        },
                    },
                    [r] = s.useState(() => new E(i));
                return (r.setOptions(i), _(() => r._didMount(), []), _(() => r._willUpdate()), r);
            }
            function T(e) {
                return b({ observeElementRect: d, observeElementOffset: g, scrollToFn: x, ...e });
            }
            function O(e) {
                return b({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: p,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        59918: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var s = i(27169),
                n = i(29201);
            let r = (e) => {
                var t, i, r, l, o;
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
                                            disclaimers: (0, n.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: s.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, n.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (r = e.counts) ? void 0 : r.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
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
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(88800);
            i(30282);
            var n = i(11006),
                r = i.n(n);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var s = i(97956);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var s = i(88800),
                n = i(96706),
                r = i(53548),
                l = i(2058),
                o = i(79390),
                a = i(29595),
                c = i(74965),
                d = i(72288),
                u = i(66943),
                h = i(54243);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, g] = (0, r.useState)(!1),
                    { formatMessage: p } = (0, l.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    g(!0);
                    let l = await e.toggleLike();
                    (g(!1),
                        l === o.f.OK
                            ? i((0, s.jsx)(h.T, { artist: r }), { containerId: a.u.INFO })
                            : i((0, s.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                }, [e, t.isAuthorized, m, p, i]);
            };
        },
        64247: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => l });
            var s = i(88800),
                n = i(15077),
                r = i(33719);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, s.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var s = i(53548),
                n = i(63582),
                r = i(245),
                l = i(22681),
                o = i(56374);
            let a = (0, n.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, l.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var s = i(14567),
                n = i(243),
                r = i(62151),
                l = i(33396);
            let o = () => 'SECRET';
            class a {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, n) {
                    let r,
                        o = String(t instanceof Error && t.stack ? t.stack : t),
                        a = (0, l.A)({ ...this.additionalData, ...i });
                    return (Object.keys(a).length && (r = this.obfuscateData(a)), n) ? `${o} ${s(r)}` : [o, r];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, r.A)(e, t, o());
                    return e;
                }
            }
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                n = i(53548),
                r = i(53534),
                l = i(63582),
                o = i(245);
            let a = new WeakMap();
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
                    let i =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (a.set(t, i), (this.queue = i));
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
            var d = i(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, u] = (0, n.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== i ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let n = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, n) : null, session: n };
                        return (u(o), (0, s.jsx)(r.k, { value: o, children: e }));
                    }
                    if (
                        a.isReady !== l ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let n = { ...a, input: t, isReady: l, scope: l ? i.createScreenScope(t, a.session) : null };
                        return (u(n), (0, s.jsx)(r.k, { value: n, children: e }));
                    }
                    return (0, s.jsx)(r.k, { value: a, children: e });
                },
            );
        },
        77451: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => r, TF: () => o, hZ: () => l });
            var s = function () {
                return (s =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, s = arguments.length; i < s; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function r(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], s = 0; s < i.length; s++) {
                        var n = i[s].split('='),
                            r = n.slice(1).join('=');
                        '"' === r[0] && (r = r.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = r.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var r;
                document.cookie =
                    ((r = s({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(r));
            }
            function o(e, t) {
                l(e, '', s(s({}, t), { expires: -1 }));
            }
        },
        77455: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var s = i(88800),
                n = i(96706),
                r = i(53548),
                l = i(2058),
                o = i(29595),
                a = i(74965),
                c = i(72288),
                d = i(66943),
                u = i(64247);
            let h = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, a.l)(),
                    { formatMessage: h } = (0, l.A)(),
                    [m, g] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, s.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    g(!0);
                    let l = await e.togglePin();
                    (g(!1),
                        l
                            ? i((0, s.jsx)(u.l, { artist: r }), { containerId: o.u.INFO })
                            : i((0, s.jsx)(d.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, h, i]);
            };
        },
        85074: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => I });
            var s = i(88800),
                n = i(65724),
                r = i(84961),
                l = i(2058),
                o = i(30282),
                a = i(94144),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var h = i(62293),
                m = i(99839);
            let g = (e) => e(new Date(), (0, m.m)());
            var p = i(51611),
                f = i(72288),
                v = i(11006),
                x = i.n(v),
                E = i(17392),
                C = i(29504),
                _ = i(91292);
            let b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, n.$)(x().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(_.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(_.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: x().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, s.jsx)(_.N, { target: '_blank', href: n, className: x().link, 'data-test-id': E.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, n.$)(x().root, x().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, s.jsx)(T, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, f.g)(),
                    { formatDate: n, formatMessage: r } = (0, l.A)(),
                    { language: o } = (0, p.h)(),
                    a = u({ formatMessage: r, language: o, tld: i.tld, year: g(n) });
                return (0, s.jsx)(b, { className: t, data: a });
            });
            let I = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: m, user: v } = (0, f.g)(),
                    { formatDate: E, formatMessage: C } = (0, l.A)(),
                    { isEnabled: _ } = null != (t = (0, a.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: l, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: n, userRegion: r } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, n) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, n) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, n) },
                                    h = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, n) },
                                    m = [l, a, u];
                                return (i && 'ru' === r && m.push(o), m.push(h), m);
                            })({ formatMessage: i, isWebApplication: s, language: n, tld: r, userRegion: l }),
                            disclaimer: (0, h.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: b,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: g(E),
                    });
                return (0, s.jsx)(O, { className: (0, n.$)({ [x().root_withOffsetForDeeplink]: _ }, i), data: T });
            });
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var s = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, s.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        93434: (e) => {
            e.exports = {
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                root: 'ArtistCard_root__x67BK',
                srTitleLink: 'ArtistCard_srTitleLink__jzfOW',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var s = i(53548);
            let n = (0, s.createContext)(null),
                r = () => (0, s.useContext)(n);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 3248, 5038, 1147, 1191, 7072, 8655, 2691, 426, 6706, 4771, 1311, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 9202, 4732, 9087,
                3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 9269, 763, 2670, 7358,
            ],
            () => e((e.s = 35470)),
        ),
            (_N_E = e.O()));
    },
]);
