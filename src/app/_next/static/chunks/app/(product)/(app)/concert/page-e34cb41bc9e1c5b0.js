(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7167, 7307],
    {
        3410: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => c });
            var i = n(32290),
                r = n(96103),
                s = n(71926),
                o = n(57594),
                a = n(61258),
                l = n(7925),
                d = n.n(l);
            let c = (0, r.PA)((e) => {
                let { children: t, href: n, className: r } = e,
                    {
                        currentTrackInfo: { modal: l },
                    } = (0, o.g)();
                return n
                    ? (0, i.jsx)(a.N, {
                          className: d().link,
                          href: n,
                          onClick: l.close,
                          children: (0, i.jsx)(s.HL, { className: r, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, i.jsx)(s.HL, { className: r, variant: 'div', size: 'l', children: t });
            });
        },
        7925: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        8576: (e, t, n) => {
            'use strict';
            n.d(t, { I: () => h });
            var i = n(32290),
                r = n(63618),
                s = n(21732),
                o = n(63423),
                a = n(82586),
                l = n(86269),
                d = n(11323),
                c = n(78166),
                u = n.n(c);
            let h = (e) => {
                let { coverVariant: t, coverUri: n, isAvailable: c, className: h, withPlusBadge: m, onClick: _, 'aria-label': g, customCover: f, buttonClassName: v } = e;
                return (0, i.jsxs)(l.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, r.$)(u().root, h, { [u().root_hoverable]: !!_ }),
                    children: [
                        (0, i.jsx)(o.$, {
                            className: (0, r.$)(u().coverButton, v),
                            onClick: _,
                            'aria-label': g,
                            tabIndex: _ ? 0 : -1,
                            disabled: !_,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: f || (0, i.jsx)(d.B, { fit: 'cover', src: n, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        m && (0, i.jsx)(a.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8868: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => c });
            var i = n(55178),
                r = n(16172),
                s = n(52068),
                o = n(91027),
                a = n(62376),
                l = n(79374),
                d = n(37240);
            let c = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, s.st)(),
                    c = (0, a.U)(),
                    { hash: u } = (0, s.gf)(),
                    { pageId: h } = (0, d.$)(),
                    m = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !h ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = l.W[h];
                        if (!t) return;
                        let i = {
                                hash: u,
                                pageId: r.QT.Link,
                                entityType: r.LA.Deeplink,
                                entityId: r.LA.Deeplink,
                                from: r.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, r.Fx)({ params: i, logger: c, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, r.ID)(n.evgenInstance, s);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && m();
                    }, [t, m]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || m({ deepLink: e });
                    })
                );
            };
        },
        17852: (e) => {
            e.exports = {
                root: 'ConcertPage_root__pqTvU',
                averageColorBackground: 'ConcertPage_averageColorBackground__wj67a',
                header: 'ConcertPage_header__FxHk1',
                container: 'ConcertPage_container__ca9h4',
                footer: 'ConcertPage_footer____Dnb',
                skeleton: 'ConcertPage_skeleton__8aWkf',
                error: 'ConcertPage_error__gcEp_',
            };
        },
        23278: (e) => {
            e.exports = {
                root: 'PageHeaderBase_root__xMIBu',
                root_withCover: 'PageHeaderBase_root_withCover__JIKxy',
                root_withCoverAndLogo: 'PageHeaderBase_root_withCoverAndLogo__nsTU2',
                logo: 'PageHeaderBase_logo__pD3fg',
                coverCell: 'PageHeaderBase_coverCell__nBx4c',
                content: 'PageHeaderBase_content___DNyv',
                info: 'PageHeaderBase_info__GRcah',
                entityContainer: 'PageHeaderBase_entityContainer__BDwxT',
                title_withDisclaimerLabel: 'PageHeaderBase_title_withDisclaimerLabel__Apuhc',
                entityName: 'PageHeaderBase_entityName__9Sj_Q',
                disclaimerLabel: 'PageHeaderBase_disclaimerLabel___2wo6',
                meta: 'PageHeaderBase_meta__bMvfR',
                meta_withDisclaimerLabel: 'PageHeaderBase_meta_withDisclaimerLabel__nxckS',
                controls: 'PageHeaderBase_controls__HzGgE',
                buttonContainer: 'PageHeaderBase_buttonContainer__Ad8ha',
                button: 'PageHeaderBase_button__lCrTR',
                bonusText: 'PageHeaderBase_bonusText__I43It',
                giftIcon: 'PageHeaderBase_giftIcon__uDQIG',
                oneClickDisclaimerText: 'PageHeaderBase_oneClickDisclaimerText__TGbFd',
            };
        },
        37318: (e) => {
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
        40783: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => r });
            var i = n(55178);
            let r = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let n = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : n, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        41898: (e, t, n) => {
            'use strict';
            n.d(t, { R: () => y });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(55178),
                a = n(60900),
                l = n(21732),
                d = n(91027),
                c = n(6752),
                u = n(63423),
                h = n(82586),
                m = n(71926),
                _ = n(85377);
            let g = (e) => {
                let { children: t, title: n, className: r } = e,
                    { setTitleElement: s, setTitle: a } = (0, o.useContext)(_.B),
                    l = (0, o.useRef)(null);
                return (
                    (0, o.useEffect)(() => {
                        (null == l ? void 0 : l.current) && s(l), n && a(n);
                    }, [l, n, s, a]),
                    (0, o.useEffect)(
                        () => () => {
                            a('');
                        },
                        [a],
                    ),
                    (0, i.jsx)('div', { ref: l, className: r, children: t })
                );
            };
            var f = n(84062),
                v = n(57594),
                p = n(61258),
                x = n(85832),
                b = n(96746),
                C = n.n(b);
            let y = (0, s.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': n,
                        canChange: s = !1,
                        onChange: _,
                        maxTitleLength: b,
                        version: y = '',
                        onVersionClick: T,
                        className: w,
                        headingVariant: j = 'h2',
                        withHeadingClamp: E = !0,
                        link: N,
                        onTitleLinkClick: P,
                    } = e,
                    {
                        settings: { isMobile: k },
                    } = (0, v.g)(),
                    { formatMessage: I } = (0, a.A)(),
                    [O, S] = (0, o.useState)(!1),
                    H = (0, o.useRef)(null),
                    M = t.length + y.length > 25,
                    R = (0, f.Z)(null != N ? N : ''),
                    L = (0, d.c)((e) => {
                        null == P || P(), R(e);
                    }),
                    B = (0, o.useMemo)(
                        () =>
                            k
                                ? { font: C().font_mobile, iconLink: C().arrowWrapper_mobile }
                                : M
                                  ? { font: C().font_long, iconLink: C().arrowWrapper_long }
                                  : { font: C().font_short, iconLink: C().arrowWrapper_short },
                        [k, M],
                    ),
                    A = !k && s && O,
                    z = (0, o.useCallback)(() => {
                        var e;
                        S(!0), null == (e = H.current) || e.focus();
                    }, []),
                    D = (0, o.useCallback)(
                        (e) => {
                            S(!1), null == _ || _(e);
                        },
                        [_],
                    ),
                    W = (0, c.L)(() =>
                        (0, i.jsx)('span', {
                            className: (0, r.$)(C().arrowWrapper, B.iconLink),
                            children: (0, i.jsx)(h.I, { className: C().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    F = (0, c.L)(() =>
                        (0, i.jsxs)(m.DZ, {
                            variant: j,
                            id: n,
                            lineClamp: k && E ? 2 : void 0,
                            className: (0, r.$)(C().heading, { [C().heading_withVersion]: y }),
                            'data-test-id': l.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, i.jsx)(m.HL, { className: (0, r.$)(C().font, B.font, C().title), variant: 'span', children: t }),
                                y &&
                                    (0, i.jsx)(m.HL, {
                                        onClick: T,
                                        className: (0, r.$)(C().font, B.font, C().version, { [C().version_withOtherVersions]: T }),
                                        variant: 'span',
                                        'data-test-id': l.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(y),
                                    }),
                                N && !k && W,
                            ],
                        }),
                    ),
                    U = (0, c.L)(() =>
                        N
                            ? (0, i.jsxs)(p.N, {
                                  className: C().titleWithLink,
                                  containerClassName: C().linkContainer,
                                  textClassName: C().linkText,
                                  href: N,
                                  onClick: L,
                                  children: [F, k && W],
                              })
                            : F,
                    );
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        !A &&
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(C().root, w),
                                children: [
                                    (0, i.jsx)(g, { title: t, className: C().stickyTitle, children: U }),
                                    s &&
                                        (0, i.jsx)('div', {
                                            className: (0, r.$)(C().editButton, { [C().editButton_centered]: !M && !k }),
                                            children: (0, i.jsx)(u.$, {
                                                onClick: z,
                                                'aria-label': I({ id: 'playlist-actions.change-title' }),
                                                icon: (0, i.jsx)(h.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': l.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        A &&
                            (0, i.jsx)('div', {
                                className: C().textFieldContainer,
                                children: (0, i.jsx)(x.A, {
                                    text: t,
                                    className: (0, r.$)(C().font, B.font, C().textField, C().title, { [C().textField_long]: M && !k }),
                                    onChangeFinish: D,
                                    maxTextLength: b,
                                    minTextLength: 1,
                                    placeholder: I({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        50168: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => u });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(55178),
                a = n(79856),
                l = n(57594),
                d = n(37318),
                c = n.n(d);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: n = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, l.g)(),
                    u = (0, o.useMemo)(
                        () =>
                            d
                                ? (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, i.jsx)(a.W, { className: c().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(a.W, { className: c().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, d],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(c().root, t),
                    children: [
                        (0, i.jsx)(a.W, { className: c().cover, radius: n, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, i.jsx)(a.W, { className: c().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(a.W, { className: c().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(a.W, { className: c().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        52719: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => d });
            var i = n(32290),
                r = n(63618),
                s = n(80451),
                o = n(71926),
                a = n(7925),
                l = n.n(a);
            let d = (e) => {
                let { title: t, className: n, titleClassName: a, infoDescription: d, ...c } = e;
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(l().root, n),
                    ...(0, s.getDataAttrFromProps)(c),
                    children: [t && (0, i.jsx)(o.DZ, { variant: 'h4', className: (0, r.$)(l().infoTitle, a), children: t }), d],
                });
            };
        },
        56447: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 65039));
        },
        61105: (e) => {
            e.exports = {
                root: 'PageHeaderConcert_root__zghAY',
                coverCell: 'PageHeaderConcert_coverCell__0ppUT',
                cover: 'PageHeaderConcert_cover__mJ4ml',
                controls: 'PageHeaderConcert_controls__7Ggou',
                button: 'PageHeaderConcert_button__zLikp',
                button_redesigned: 'PageHeaderConcert_button_redesigned__L2DSA',
                buttonCashback: 'PageHeaderConcert_buttonCashback__v8U65',
                buttonPrice: 'PageHeaderConcert_buttonPrice__z3YGF',
                meta: 'PageHeaderConcert_meta__5G1EX',
                cashbackBadge: 'PageHeaderConcert_cashbackBadge__HL7QW',
                info: 'PageHeaderConcert_info__wct3b',
                title: 'PageHeaderConcert_title__MoRyD',
                coverButton: 'PageHeaderConcert_coverButton__r79DU',
                important: 'PageHeaderConcert_important__rx2pp',
                bottomContent: 'PageHeaderConcert_bottomContent__d5YKQ',
                overview: 'PageHeaderConcert_overview__vbGCy',
                overviewButton: 'PageHeaderConcert_overviewButton__sXecu',
                overviewMessage: 'PageHeaderConcert_overviewMessage__q95AL',
                overviewMessageModal: 'PageHeaderConcert_overviewMessageModal__OlUO6',
                overviewModal: 'PageHeaderConcert_overviewModal__6Ubd0',
            };
        },
        65039: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => eb });
            var i = n(32290),
                r = n(21916),
                s = n(96103),
                o = n(55178),
                a = n(27576),
                l = n(16172),
                d = n(21732),
                c = n(73474),
                u = n(91027),
                h = n(66075),
                m = n(6752),
                _ = n(46049),
                g = n(40959),
                f = n(50168),
                v = n(63618),
                p = n(60900),
                x = n(39407),
                b = n(44989),
                C = n(63423),
                y = n(71926),
                T = n(29001),
                w = n(19522),
                j = n(12578),
                E = n(98066),
                N = n(81697),
                P = n(52719),
                k = n(3410),
                I = n(23352),
                O = n(51675),
                S = n(36477),
                H = n(89384),
                M = n(82586),
                R = n(45477),
                L = n(75582),
                B = n(59833);
            let A = (0, s.PA)((e) => {
                let { className: t, size: n = 's', iconSize: r = 'xxs', withRipple: s, isDisabled: o, entityMeta: a, shareLink: l, onClick: c } = e,
                    { formatMessage: h } = (0, p.A)(),
                    { notify: m } = (0, L.l)(),
                    _ = (0, u.c)(async () => {
                        null == c || c(),
                            await window.navigator.clipboard.writeText(l),
                            m((0, i.jsx)(B.D, { entityVariant: a.variant, entityTitle: a.title }), { containerId: R.u.INFO });
                    });
                return (0, i.jsx)(C.$, {
                    className: t,
                    variant: 'default',
                    color: 'secondary',
                    onClick: _,
                    'aria-label': h({ id: 'interface-actions.share' }),
                    size: n,
                    withRipple: s,
                    radius: 'round',
                    disabled: o,
                    icon: (0, i.jsx)(M.I, { variant: 'share', size: r }),
                    'data-test-id': d.S7.SHARE_BUTTON,
                });
            });
            var z = n(52068),
                D = n(84782),
                W = n(30915),
                F = n(2792),
                U = n(37240),
                $ = n(47498),
                V = n(62376),
                Y = n(73395),
                K = n(8576),
                Q = n(61105),
                G = n.n(Q);
            let X = (0, s.PA)((e) => {
                    var t;
                    let { className: n, forwardRef: r, onCoverClick: s, concert: a, leadArtistId: c, cover: h, description: _ } = e,
                        { formatMessage: g, formatDate: f } = (0, p.A)(),
                        { state: M, toggleTrue: R, toggleFalse: L } = (0, b.e)(!1),
                        B = (() => {
                            let e = (0, V.U)(),
                                t = (0, z.st)(),
                                { hash: n } = (0, z.gf)(),
                                { pageId: i } = (0, U.$)(),
                                { tabId: r, tabPos: s, isTabSelectedByDefault: o } = (0, $.R)(),
                                { blockType: a, blockId: d, blockPosX: c, blockPosY: h } = (0, D.N)(),
                                { objectType: m, objectsCount: _, objectId: g, objectPosX: f, objectPosY: v, mainObjectType: p, mainObjectId: x } = (0, F.J)();
                            return (0, u.c)((u, b) => {
                                if (!t || !i) return;
                                let C = (0, l.Fx)({
                                    params: {
                                        hash: n,
                                        pageId: i,
                                        entityType: a,
                                        entityId: d,
                                        entityPosX: c,
                                        entityPosY: h,
                                        objectsCount: _,
                                        viewUuid: b,
                                        objectType: m,
                                        objectId: g,
                                        objectPosX: f,
                                        objectPosY: v,
                                        mainObjectType: p,
                                        mainObjectId: x,
                                        tabId: r,
                                        tabPos: s,
                                        isTabSelectedByDefault: o,
                                    },
                                    logger: e,
                                    context: 'useSendEventOnHeaderConcertBlockShowedOrHidden',
                                });
                                C && (u ? (0, l.lW)(t.evgenInstance, C) : (0, l.LZ)(t.evgenInstance, C));
                            });
                        })(),
                        Q = (() => {
                            let e = (0, z.st)(),
                                t = (0, V.U)(),
                                { hash: n } = (0, z.gf)(),
                                { pageId: i } = (0, U.$)(),
                                { tabId: r, tabPos: s, isTabSelectedByDefault: o } = (0, $.R)(),
                                { offsetBlockPosY: a } = (0, W.u)(),
                                { blockId: d, blockType: c, blockPosX: h, blockPosY: _, mainObjectId: g, mainObjectType: f } = (0, D.N)(),
                                { objectId: v, objectPosX: p, objectPosY: x, objectType: b, objectsCount: C } = (0, F.J)(),
                                y = (0, m.L)(() => (void 0 !== a && void 0 !== _ ? a + _ : _));
                            return (0, u.c)((a) => {
                                let { to: u, objectId: m, objectType: _, deepLink: T } = a;
                                if (!e || !i) return;
                                let w = {
                                    hash: n,
                                    pageId: i,
                                    entityType: c,
                                    entityId: d,
                                    entityPosX: h,
                                    entityPosY: y,
                                    objectId: null != m ? m : v,
                                    objectType: null != _ ? _ : b,
                                    objectPosX: p,
                                    objectPosY: x,
                                    objectsCount: C,
                                    from: i,
                                    to: u,
                                    mainObjectType: f,
                                    mainObjectId: g,
                                    tabId: r,
                                    tabPos: s,
                                    isTabSelectedByDefault: o,
                                };
                                T && (w.deepLink = T);
                                let j = (0, l.Fx)({ params: w, logger: t, context: 'useSendEventOnHeaderConcertBlockNavigated' });
                                j && (0, l.iF)(e.evgenInstance, j);
                            });
                        })(),
                        { ref: X, intersectionPropertyId: Z } = (0, I.n)({ callback: B, withViewUuid: !0 }),
                        J = (() => {
                            let e = (0, z.st)(),
                                t = (0, V.U)(),
                                { hash: n } = (0, z.gf)(),
                                { pageId: i } = (0, U.$)(),
                                { tabId: r, tabPos: s, isTabSelectedByDefault: o } = (0, $.R)(),
                                { blockId: a, blockType: d, blockPosX: c, blockPosY: h, objectsCount: m, mainObjectType: _, mainObjectId: g } = (0, D.N)();
                            return (0, u.c)(() => {
                                if (!e || !i) return;
                                let u = {
                                        hash: n,
                                        pageId: i,
                                        tabId: r,
                                        tabPos: s,
                                        entityType: d,
                                        mainObjectType: _,
                                        mainObjectId: g,
                                        entityId: a,
                                        entityPosX: c,
                                        entityPosY: h,
                                        isTabSelectedByDefault: o,
                                        objectsCount: m,
                                        pagePlacement: l.c4.Fullscreen,
                                        pageStyle: l.QL.Fullscreen,
                                    },
                                    f = (0, l.Fx)({ params: u, logger: t, context: 'useSendEventOnHeaderConcertLandingBlockLoaded' });
                                f && (0, l.uJ)(e.evgenInstance, f);
                            });
                        })(),
                        q = (0, o.useRef)(!1),
                        ee = (0, w.Y)()(a);
                    (0, o.useEffect)(() => {
                        q.current || (J(), (q.current = !0));
                    }, [J]);
                    let et = (0, u.c)((e) => {
                            R(), null == e || e.stopPropagation();
                        }),
                        en = (0, u.c)((e) => {
                            Q({ to: l.QT.ConcertPurchaseScreen }), et(e), e.preventDefault();
                        }),
                        ei = (0, u.c)(() => {
                            Q({ to: l.QT.ShareScreen });
                        }),
                        er = (0, u.c)(() => {
                            Q({ to: l.QT.ArtistScreen });
                        }),
                        { shareLink: es, pathname: eo } = (0, H.b)('/concert/:concertId', { params: { concertId: a.id } }),
                        ea = { variant: O.Y.CONCERT, id: a.id, title: null != (t = a.title) ? t : '', path: eo },
                        el = (0, m.L)(() =>
                            a.isIdentityExperimentEnabled
                                ? (0, i.jsxs)('div', {
                                      children: [
                                          (0, i.jsx)(y.HL, { className: G().buttonPrice, variant: 'div', size: 'l', weight: 'medium', children: ee }),
                                          a.cashbackValuePercent &&
                                              (0, i.jsx)(y.HL, {
                                                  className: G().buttonCashback,
                                                  variant: 'div',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)(x.A, { id: 'entity-names.cashback-percent', values: { value: a.cashbackValuePercent } }),
                                              }),
                                      ],
                                  })
                                : ee,
                        ),
                        ed = (0, m.L)(() => {
                            let e = a.isIdentityExperimentEnabled ? 'l' : 's',
                                t = a.isIdentityExperimentEnabled ? 'm' : 'xxs';
                            return (0, i.jsxs)('div', {
                                className: G().controls,
                                children: [
                                    (0, i.jsx)(C.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: (0, v.$)(G().button, { [G().button_redesigned]: a.isIdentityExperimentEnabled }),
                                        size: 's',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: en,
                                        'data-test-id': d.e8.pageHeader.CONCERT_BUY_TICKET_BUTTON,
                                        children: el,
                                    }),
                                    (0, i.jsx)(A, { onClick: ei, shareLink: es, entityMeta: ea, size: e, iconSize: t }),
                                ],
                            });
                        }),
                        ec = (0, o.useMemo)(() => {
                            var e;
                            return [
                                a.city,
                                a.place,
                                f(new Date(null != (e = a.datetime) ? e : ''), { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }),
                                a.contentRating,
                            ]
                                .filter(Boolean)
                                .join(' • ');
                        }, [a.city, a.place, a.datetime, a.contentRating, f]),
                        eu = (0, m.L)(() => {
                            if (!_) return;
                            let e = {
                                    title:
                                        a.isIdentityExperimentEnabled && a.eventKind
                                            ? g({ id: 'concerts.about-event-kind' }, { kind: a.eventKind })
                                            : g({ id: 'track-modal.concert-title' }),
                                    message: _.text,
                                    isExpandable: !0,
                                    visibleLinesCount: 3,
                                },
                                t = (0, m.L)(() => {
                                    if (!_.genre) return;
                                    let e = (0, i.jsx)(k.D, { children: _.genre });
                                    return (0, i.jsx)(P.O, {
                                        title: g({ id: 'track-modal.genre' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_GENRE_INFO_BLOCK,
                                    });
                                }),
                                n = (0, m.L)(() => {
                                    if (!a.contentRating) return;
                                    let e = (0, i.jsx)(k.D, { children: a.contentRating });
                                    return (0, i.jsx)(P.O, {
                                        title: g({ id: 'track-modal.content-rating' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_CONTENT_RATING_INFO_BLOCK,
                                    });
                                }),
                                r = (0, m.L)(() => {
                                    if (!_.source) return;
                                    let e = (0, i.jsx)(k.D, { children: _.source });
                                    return (0, i.jsx)(P.O, {
                                        title: g({ id: 'track-modal.source' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_SOURCE_INFO_BLOCK,
                                    });
                                }),
                                s = (0, i.jsxs)('div', { className: G().bottomContent, children: [t, n, r] });
                            return (0, i.jsx)('div', {
                                className: G().overview,
                                'data-test-id': d.e8.landing.OVERVIEW,
                                children: (0, i.jsx)(T.F, {
                                    modalClassName: (0, v.$)(G().overviewModal, G().important),
                                    textButton: g({ id: 'interface-actions.more-details' }),
                                    buttonClassName: (0, v.$)(G().overviewButton, G().important),
                                    messageModalClassName: G().overviewMessageModal,
                                    messageClassName: G().overviewMessage,
                                    creditsModal: s,
                                    meta: e,
                                    withShowButton: !0,
                                }),
                            });
                        }),
                        eh = (0, o.useMemo)(
                            () =>
                                (0, i.jsxs)('div', {
                                    className: G().meta,
                                    children: [
                                        ec &&
                                            (0, i.jsx)(y.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                'data-test-id': d.e8.pageHeader.CONCERT_META_INFO,
                                                children: ec,
                                            }),
                                        !a.isIdentityExperimentEnabled && a.cashbackTitle && (0, i.jsx)(E.m, { className: G().cashbackBadge, title: a.cashbackTitle }),
                                        eu,
                                    ],
                                }),
                            [a.cashbackTitle, a.isIdentityExperimentEnabled, ec, eu],
                        ),
                        em = (0, m.L)(() => {
                            if (!c) return;
                            let { href: e } = (0, S.u)('/artist/:artistId', { params: { artistId: c } });
                            return e;
                        }),
                        e_ = a.isIdentityExperimentEnabled && a.eventKind ? g({ id: 'concerts.event-kind' }, { kind: a.eventKind }) : '';
                    return (0, i.jsxs)('div', {
                        ref: X,
                        'data-intersection-property-id': Z,
                        className: G().root,
                        children: [
                            (0, i.jsx)(Y.k, {
                                onTitleLinkClick: er,
                                linkTitle: em,
                                ref: r,
                                className: (0, v.$)(n, G().root),
                                infoClassName: G().info,
                                titleClassName: G().title,
                                entityName: e_,
                                title: a.title || '',
                                meta: eh,
                                coverCellClassName: G().coverCell,
                                cover: (0, i.jsx)(K.I, {
                                    buttonClassName: (0, v.$)(G().coverButton, G().important),
                                    className: G().cover,
                                    onClick: s,
                                    'aria-label': s ? g({ id: 'slider.view-concert-covers' }) : void 0,
                                    customCover: (0, i.jsx)(N.W, {
                                        datetime: a.datetime,
                                        coverColor: null == h ? void 0 : h.color,
                                        uri: null == h ? void 0 : h.uri,
                                        withMask: !0,
                                    }),
                                }),
                                controls: ed,
                                headingVariant: 'h1',
                            }),
                            (0, i.jsx)(j.h, { dataSessionId: a.dataSessionId, isOpened: M, onOpen: R, onClose: L }),
                        ],
                    });
                }),
                Z = (0, o.forwardRef)((e, t) => (0, i.jsx)(X, { forwardRef: t, ...e }));
            var J = n(64170),
                q = n(40783),
                ee = n(7999),
                et = n(48922),
                en = n(8868),
                ei = n(95226),
                er = n(71610),
                es = n(26042),
                eo = n(22714),
                ea = n(13882),
                el = n(94805),
                ed = n(83920),
                ec = n(3796),
                eu = n(57594),
                eh = n(79406),
                em = n(58054),
                e_ = n(32468),
                eg = n(74694),
                ef = n(17852),
                ev = n.n(ef);
            let ep = (0, s.PA)((e) => {
                    var t, n, s;
                    let { concertId: v } = e,
                        {
                            experiments: p,
                            concert: x,
                            modals: { imageSliderModal: b },
                        } = (0, eu.g)(),
                        C = ((e) => {
                            let t = (0, z.st)(),
                                n = (0, V.U)(),
                                { pageId: i } = (0, U.$)(),
                                { hash: r } = (0, z.gf)();
                            return (0, u.c)((s, o) => {
                                if (!t || !i) return;
                                let a = {
                                        hash: r,
                                        pageId: i,
                                        pageStyle: l.QL.Fullscreen,
                                        pagePlacement: l.c4.Fullscreen,
                                        viewUuid: o,
                                        mainObjectType: l.ky.Concert,
                                        mainObjectId: e,
                                    },
                                    d = (0, l.Fx)({ params: a, logger: n, context: 'useSendEventOnConcertOpenedOrClosed' });
                                d && (s ? (0, l.Fn)(t.evgenInstance, d) : (0, l.PO)(t.evgenInstance, d));
                            });
                        })(v),
                        y = (0, o.useRef)(String((0, a.A)())),
                        { setContentScrollRef: T, contentScrollRef: w } = (0, ed.g)(),
                        { forceUpdateRefCallback: j, offsetY: E } = (0, h.G)(w),
                        N = (0, el.y)(null == (n = x.covers) || null == (t = n[0]) ? void 0 : t.color),
                        { topColorStyle: P, headerStyle: k } = (0, q.Q)(N, E),
                        I = (0, u.c)(() => {
                            x.coversUri.length > 0 && b.openImages({ images: x.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        O = p.checkExperiment(eh.z.WebNextConcertPage, 'on');
                    (0, en.A)(),
                        (0, o.useEffect)(
                            () => () => {
                                x.reset();
                            },
                            [x, v],
                        ),
                        (0, o.useEffect)(() => {
                            let e = y.current;
                            return (
                                C(!0, e),
                                () => {
                                    C(!1, e);
                                }
                            );
                        }, [C]),
                        (0, ec.J)(x.isResolved);
                    let S = [];
                    if (
                        (x.isNeededToLoad && S.push(x.getInfo({ concertId: v })),
                        x.landing.isNeededToLoad && S.push(x.landing.getConcertSkeleton({ concertId: v, skeletonId: c.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        S.length && (0, o.use)(Promise.allSettled(S)),
                        (!O || x.isNotFound) && (0, r.notFound)(),
                        x.isRejected)
                    )
                        return (0, i.jsx)(J.SomethingWentWrong, {});
                    let H = (0, m.L)(() => {
                        var e, t, n;
                        return x.isLoading || !x.meta || x.isRejected
                            ? (0, i.jsx)(f.c, { className: ev().header, isActive: !0 })
                            : (0, i.jsx)(es.B, {
                                  objectType: l.ky.Concert,
                                  objectId: null == (e = x.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: l.ky.Concert,
                                  mainObjectId: null == (t = x.meta) ? void 0 : t.id,
                                  children: (0, i.jsx)(Z, {
                                      description: x.description,
                                      onCoverClick: I,
                                      leadArtistId: x.leadArtistId,
                                      ref: j,
                                      className: ev().header,
                                      concert: x.meta,
                                      cover: null == (n = x.covers) ? void 0 : n[0],
                                  }),
                              });
                    });
                    return (0, i.jsx)(er.j, {
                        children: (0, i.jsxs)(ee.h, {
                            scrollElement: w,
                            children: [
                                (0, i.jsx)(eg.Y, { style: k, variant: eg.V.INNER, showControls: !1 }),
                                (0, i.jsx)('div', { className: ev().averageColorBackground, style: P }),
                                (0, i.jsxs)(_.N, {
                                    ref: T,
                                    className: ev().root,
                                    containerClassName: ev().container,
                                    'data-test-id': d.Xk.concert.CONCERT_PAGE,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            children: [
                                                (0, i.jsx)(ea.h, {
                                                    tabId: '',
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, i.jsx)(ei.F, {
                                                        blockId: l.LA.ConcertHeader,
                                                        blockType: l.LA.ConcertHeader,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: l.ky.Concert,
                                                        mainObjectId: null == (s = x.meta) ? void 0 : s.id,
                                                        children: H,
                                                    }),
                                                }),
                                                (0, i.jsx)(g.E, {
                                                    containerClassName: ev().skeleton,
                                                    landing: x.landing,
                                                    errorComponent: (0, i.jsx)(J.SomethingWentWrong, { className: ev().error, withBackwardControl: !1 }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(e_.A, { children: (0, i.jsx)(em.w, { className: ev().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ex = (0, s.PA)((e) => (0, i.jsx)(eo.n, { pageId: et._Q.CONCERT, pageEntityId: e.concertId, children: (0, i.jsx)(ep, { ...e }) })),
                eb = () => {
                    let e = (0, r.useSearchParams)().get('concertId');
                    return e || (0, r.notFound)(), (0, i.jsx)(ex, { concertId: e });
                };
        },
        66075: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => c });
            var i,
                r = n(72812),
                s = n(55178),
                o = {
                    6699: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let i = n(352),
                            r = n(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: n, throttleTimeout: s } = e,
                                o = (0, r.useRef)(null),
                                [a, l] = (0, r.useState)(!!n),
                                d = (0, r.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            l(!n),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    l(!!n);
                                                }, t));
                                        }, s),
                                    [t, n, s],
                                ),
                                c = (0, r.useCallback)(() => {
                                    l(!!n), o.current && window.clearTimeout(o.current);
                                }, [n]);
                            return (
                                (0, r.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: a, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    2767: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
                        let i = n(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, i.useState)(null);
                            return [
                                e,
                                (0, i.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    2067: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let i = n(810),
                            r = n(361),
                            s = n(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: n, elementRef: o } = e,
                                { state: a, handleDebouncedToggle: l } = (0, s.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, i.useCallback)(() => {
                                    n && l(), null == t || t();
                                }, [n, l, t]);
                            return (
                                (0, i.useEffect)(() => {
                                    let e = (0, r.getElementFromRefOrElement)(o);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        n = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', d, n), () => t.removeEventListener('scroll', d, n);
                                }, [o, d]),
                                a
                            );
                        };
                    },
                    361: (e, t) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            });
                    },
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = n.t(s, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var n = (a[e] = { exports: {} });
                return o[e](n, n.exports, l), n.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0);
                let e = l(810),
                    t = l(2067),
                    n = l(2767);
                d.useElementOffsetY = (i) => {
                    let [r, s] = (0, n.useForceUpdateRef)(),
                        [o, a] = (0, e.useState)(),
                        l = (0, e.useCallback)(() => {
                            let e = null == r ? void 0 : r.getBoundingClientRect();
                            e && a(e.y);
                        }, [r]);
                    return (0, e.useLayoutEffect)(l), (0, t.useScroll)({ onScroll: l, elementRef: i }), { forceUpdateRefCallback: s, offsetY: o };
                };
            })(),
                d.__esModule;
            var c = d.useElementOffsetY;
        },
        73395: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => k });
            var i = n(32290),
                r = n(63618),
                s = n(96103),
                o = n(55178),
                a = n.t(o, 2),
                l = n(39407),
                d = n(21732),
                c = n(54862),
                u = n(82586),
                h = {
                    5881: (e, t, n) => {
                        function i() {
                            for (var e, t, n = 0, i = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (i = e(t[n])) && (r && (r += ' '), (r += i));
                                            else for (n in t) t[n] && (r && (r += ' '), (r += n));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        n.r(t), n.d(t, { clsx: () => i, default: () => r });
                        let r = i;
                    },
                    6132: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    6951: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
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
                    2223: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
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
                    5882: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => i });
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: n, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    2: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0);
                        let r = n(4377),
                            s = n(5881),
                            o = n(2582),
                            a = i(n(6132));
                        t.Label = (e) => {
                            let { children: t, className: n, size: i = 's', ...l } = e;
                            return (0, r.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, s.clsx)(a.default.root, n),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    7743: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0);
                        let r = n(4377),
                            s = n(5881),
                            o = n(810),
                            a = n(4721),
                            l = i(n(6951));
                        (t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: n, type: i = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...h } = e;
                            return (0, r.jsx)(a.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_'.concat(i, '_').concat(o)], l.default['root_weight_'.concat(u)], d),
                                ...h,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, n) => (0, r.jsx)(t.CaptionComponent, { forwardRef: n, ...e })));
                    },
                    404: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0);
                        let r = n(4377),
                            s = n(5881),
                            o = n(810),
                            a = n(4721),
                            l = i(n(2223));
                        (t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: n, weight: i = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, r.jsx)(a.Typography, {
                                variant: n,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_size_'.concat(o)], l.default['root_weight_'.concat(i)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, n) => (0, r.jsx)(t.HeadingComponent, { forwardRef: n, ...e })));
                    },
                    4721: function (e, t, n) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0);
                        let r = n(4377),
                            s = n(5881),
                            o = n(810),
                            a = i(n(5882));
                        function l(e) {
                            let { forwardRef: t, style: n, className: i, children: o, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, r.jsx)(l, {
                                style: { ...n, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, s.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: d && d > 0, [a.default.root_clamp_oneline]: d && 1 === d, [a.default.root_clamp_multiline]: d && d > 1 },
                                    i,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        (t.TypographyComponent = l), (t.Typography = (0, o.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e })));
                    },
                    2582: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0);
                        var i = n(7743);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var r = n(404);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = a;
                    },
                },
                m = {};
            function _(e) {
                var t = m[e];
                if (void 0 !== t) return t.exports;
                var n = (m[e] = { exports: {} });
                return h[e].call(n.exports, n, n.exports, _), n.exports;
            }
            (_.d = (e, t) => {
                for (var n in t) _.o(t, n) && !_.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (_.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (_.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var g = {};
            (() => {
                Object.defineProperty(g, '__esModule', { value: !0 }), (g.Label = void 0);
                var e = _(2);
                Object.defineProperty(g, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var f = g.Label;
            g.__esModule;
            var v = n(71926),
                p = n(71768),
                x = n(27246),
                b = n(24116),
                C = n(98740),
                y = n(15509),
                T = n(94218),
                w = n(23278),
                j = n.n(w),
                E = n(41898),
                pulseSyncHeaderButton = n(63423),
                pulseSyncHeaderIcon = n(82586),
                pulseSyncHeaderTooltip = n(60244);
            let N = 'entity-header-block-controls',
                P = (0, s.PA)((e) => {
                    let {
                            'aria-labelledby': t,
                            entityName: n,
                            title: s,
                            meta: a,
                            controls: h,
                            className: m,
                            forwardRef: _,
                            canChangeTitle: g = !1,
                            maxTitleLength: p,
                            onTitleChange: x,
                            cover: b,
                            version: w,
                            onVersionClick: P,
                            disclaimerLabel: k,
                            entityNameIcon: I,
                            headingVariant: O,
                            titleClassName: S,
                            metaClassName: H,
                            contentClassName: M,
                            withHeadingClamp: R,
                            entityNameClassName: L,
                            logo: B,
                            coverCellClassName: A,
                            infoClassName: z,
                            linkTitle: D,
                            onTitleLinkClick: W,
                            showMobileLoginButton: F,
                            showMobileSubscriptionButton: U,
                        } = e,
                        [$, V] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: Y,
                            mainText: K,
                            mainTextA11y: Q,
                            isShimmerActive: G,
                            isShimmerVisible: X,
                            oneClickAvailable: Z,
                            oneClickDisclaimerText: J,
                            oneClickDisclaimerTextA11y: q,
                        } = (0, C.D)({ storeName: 'music', isEnabled: !!U, offerElement: { element: $, intersectionPropertyId: N } }),
                        ee = (0, o.useMemo)(
                            () =>
                                k
                                    ? (0, i.jsx)('div', {
                                          className: j().entityContainer,
                                          children: (0, i.jsx)(f, {
                                              size: 'm',
                                              className: j().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: k,
                                          }),
                                      })
                                    : (0, i.jsxs)(v.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, r.$)(j().entityName, L),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [n, I],
                                      }),
                            [k, n, L, I],
                        ),
                        pulseSyncHeaderControlItems = Array.isArray(h) ? h : [h],
                        pulseSyncInjectHeaderActions = (items) =>
                            window.pulsesyncApi?.injectNativeSlotItems?.('headerActions', items, {
                                eventDetail: null,
                                renderItem: ({ key, payload, activate }) => {
                                    const label = String(payload?.label ?? '').trim(),
                                        description = String(payload?.description ?? '').trim(),
                                        icon = String(payload?.icon ?? '').trim();
                                    if (!label || !icon) return null;
                                    return (0, i.jsx)(
                                        pulseSyncHeaderTooltip.k,
                                        {
                                            title: label,
                                            ...(description ? { description } : {}),
                                            children: (0, i.jsx)(pulseSyncHeaderButton.$, {
                                                radius: 'round',
                                                size: 'xs',
                                                variant: 'text',
                                                withRipple: !1,
                                                'aria-label': label,
                                                icon: (0, i.jsx)(pulseSyncHeaderIcon.I, { variant: icon, size: 'xxs' }),
                                                onClick: activate,
                                                'data-pulsesync-addon-header-action': '',
                                            }),
                                        },
                                        key,
                                    );
                                },
                            }) ?? items;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(
                            j().root,
                            { [j().root_withCover]: (0, o.isValidElement)(b), [j().root_withCoverAndLogo]: (0, o.isValidElement)(B) && (0, o.isValidElement)(b) },
                            m,
                        ),
                        ref: _,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            b && (0, i.jsx)('div', { className: (0, r.$)(j().coverCell, A), children: b }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(j().content, M),
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: (0, r.$)(j().info, z),
                                        children: [
                                            ee,
                                            (0, i.jsx)(E.R, {
                                                onTitleLinkClick: W,
                                                link: D,
                                                className: (0, r.$)(j().title, S, { [j().title_withDisclaimerLabel]: !!k }),
                                                title: s,
                                                'aria-labelledby': t,
                                                canChange: g,
                                                maxTitleLength: p,
                                                onChange: x,
                                                version: w,
                                                onVersionClick: P,
                                                headingVariant: O,
                                                withHeadingClamp: R,
                                            }),
                                            !!a && (0, i.jsx)('div', { className: (0, r.$)(j().meta, { [j().meta_withDisclaimerLabel]: !!k }, H), children: a }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', {
                                        className: j().controls,
                                        'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS,
                                        children: pulseSyncInjectHeaderActions(pulseSyncHeaderControlItems),
                                    }),
                                    F &&
                                        (0, i.jsxs)('div', {
                                            className: j().buttonContainer,
                                            children: [
                                                (0, i.jsx)(T.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, i.jsx)(l.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: j().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, i.jsxs)(v.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: j().bonusText,
                                                    children: [
                                                        (0, i.jsx)(u.I, { variant: 'gift', size: 'xxs', className: j().giftIcon }),
                                                        (0, i.jsx)(l.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    U &&
                                        (0, i.jsxs)('div', {
                                            className: j().buttonContainer,
                                            children: [
                                                (0, i.jsx)(y.b, {
                                                    mainText: K,
                                                    ariaLabel: Q,
                                                    mainTextFontSize: 'm',
                                                    ref: V,
                                                    onClick: Y,
                                                    isShimmerActive: G,
                                                    isShimmerVisible: X,
                                                    color: 'primary',
                                                    className: j().button,
                                                    'data-intersection-property-id': N,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                Z &&
                                                    (0, i.jsx)(v.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': q,
                                                        className: j().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: J,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, o.isValidElement)(B) && (0, i.jsx)('div', { className: j().logo, children: B }),
                        ],
                    });
                }),
                k = (0, o.forwardRef)((e, t) =>
                    (0, i.jsx)(p.r, { page: x.l.ENTITY_HEADER, places: [b.R.BOTTOM_BUTTON], children: (0, i.jsx)(P, { forwardRef: t, ...e }) }),
                );
        },
        77307: (e, t, n) => {
            'use strict';
            n.d(t, { Te: () => T, XW: () => w });
            var i = n(55178),
                r = n(51767);
            function s(e, t, n) {
                let i,
                    r = n.initialDeps ?? [];
                function s() {
                    var s, o, a, l;
                    let d, c;
                    n.key && (null == (s = n.debug) ? void 0 : s.call(n)) && (d = Date.now());
                    let u = e();
                    if (!(u.length !== r.length || u.some((e, t) => r[t] !== e))) return i;
                    if (
                        ((r = u),
                        n.key && (null == (o = n.debug) ? void 0 : o.call(n)) && (c = Date.now()),
                        (i = t(...u)),
                        n.key && (null == (a = n.debug) ? void 0 : a.call(n)))
                    ) {
                        let e = Math.round((Date.now() - d) * 100) / 100,
                            t = Math.round((Date.now() - c) * 100) / 100,
                            i = t / 16,
                            r = (e, t) => {
                                for (e = String(e); e.length < t; ) e = ' ' + e;
                                return e;
                            };
                        console.info(
                            `%c⏱ ${r(t, 5)} /${r(e, 5)} ms`,
                            `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * i, 120))}deg 100% 31%);`,
                            null == n ? void 0 : n.key,
                        );
                    }
                    return null == (l = null == n ? void 0 : n.onChange) || l.call(n, i), i;
                }
                return (
                    (s.updateDeps = (e) => {
                        r = e;
                    }),
                    s
                );
            }
            function o(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t ? `: ${t}` : ''}`);
            }
            let a = (e, t, n) => {
                    let i;
                    return function (...r) {
                        e.clearTimeout(i), (i = e.setTimeout(() => t.apply(this, r), n));
                    };
                },
                l = (e) => e,
                d = (e) => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        n = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= n; e++) i.push(e);
                    return i;
                },
                c = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = (e) => {
                        let { width: n, height: i } = e;
                        t({ width: Math.round(n), height: Math.round(i) });
                    };
                    if ((r(n.getBoundingClientRect()), !i.ResizeObserver)) return () => {};
                    let s = new i.ResizeObserver((t) => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void r({ width: t.inlineSize, height: t.blockSize });
                            }
                            r(n.getBoundingClientRect());
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
                    });
                    return (
                        s.observe(n, { box: 'border-box' }),
                        () => {
                            s.unobserve(n);
                        }
                    );
                },
                u = { passive: !0 },
                h = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = () => {
                        t({ width: n.innerWidth, height: n.innerHeight });
                    };
                    return (
                        i(),
                        n.addEventListener('resize', i, u),
                        () => {
                            n.removeEventListener('resize', i);
                        }
                    );
                },
                m = 'undefined' == typeof window || 'onscrollend' in window,
                _ = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = 0,
                        s =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : a(
                                      i,
                                      () => {
                                          t(r, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            let { horizontal: o, isRtl: a } = e.options;
                            (r = o ? n.scrollLeft * ((a && -1) || 1) : n.scrollTop), s(), t(r, i);
                        },
                        l = o(!0),
                        d = o(!1);
                    d(), n.addEventListener('scroll', l, u);
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && n.addEventListener('scrollend', d, u),
                        () => {
                            n.removeEventListener('scroll', l), c && n.removeEventListener('scrollend', d);
                        }
                    );
                },
                g = (e, t) => {
                    let n = e.scrollElement;
                    if (!n) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let r = 0,
                        s =
                            e.options.useScrollendEvent && m
                                ? () => void 0
                                : a(
                                      i,
                                      () => {
                                          t(r, !1);
                                      },
                                      e.options.isScrollingResetDelay,
                                  ),
                        o = (i) => () => {
                            (r = n[e.options.horizontal ? 'scrollX' : 'scrollY']), s(), t(r, i);
                        },
                        l = o(!0),
                        d = o(!1);
                    d(), n.addEventListener('scroll', l, u);
                    let c = e.options.useScrollendEvent && m;
                    return (
                        c && n.addEventListener('scrollend', d, u),
                        () => {
                            n.removeEventListener('scroll', l), c && n.removeEventListener('scrollend', d);
                        }
                    );
                },
                f = (e, t, n) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[n.options.horizontal ? 'inlineSize' : 'blockSize']);
                    }
                    return Math.round(e.getBoundingClientRect()[n.options.horizontal ? 'width' : 'height']);
                },
                v = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var r, s;
                    null == (s = null == (r = i.scrollElement) ? void 0 : r.scrollTo) || s.call(r, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                },
                p = (e, { adjustments: t = 0, behavior: n }, i) => {
                    var r, s;
                    null == (s = null == (r = i.scrollElement) ? void 0 : r.scrollTo) || s.call(r, { [i.options.horizontal ? 'left' : 'top']: e + t, behavior: n });
                };
            class x {
                constructor(e) {
                    (this.unsubs = []),
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
                                    var n;
                                    null == (n = t()) || n.disconnect(), (e = null);
                                },
                                observe: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.observe(e, { box: 'border-box' });
                                },
                                unobserve: (e) => {
                                    var n;
                                    return null == (n = t()) ? void 0 : n.unobserve(e);
                                },
                            };
                        })()),
                        (this.range = null),
                        (this.setOptions = (e) => {
                            Object.entries(e).forEach(([t, n]) => {
                                void 0 === n && delete e[t];
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
                                    getItemKey: l,
                                    rangeExtractor: d,
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
                                });
                        }),
                        (this.notify = (e) => {
                            var t, n;
                            null == (n = (t = this.options).onChange) || n.call(t, this, e);
                        }),
                        (this.maybeNotify = s(
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
                            this.unsubs.filter(Boolean).forEach((e) => e()),
                                (this.unsubs = []),
                                this.observer.disconnect(),
                                (this.scrollElement = null),
                                (this.targetWindow = null);
                        }),
                        (this._didMount = () => () => {
                            this.cleanup();
                        }),
                        (this._willUpdate = () => {
                            var e;
                            let t = this.options.enabled ? this.options.getScrollElement() : null;
                            if (this.scrollElement !== t) {
                                if ((this.cleanup(), !t)) return void this.maybeNotify();
                                (this.scrollElement = t),
                                    this.scrollElement && 'ownerDocument' in this.scrollElement
                                        ? (this.targetWindow = this.scrollElement.ownerDocument.defaultView)
                                        : (this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ?? null),
                                    this.elementsCache.forEach((e) => {
                                        this.observer.observe(e);
                                    }),
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 }),
                                    this.unsubs.push(
                                        this.options.observeElementRect(this, (e) => {
                                            (this.scrollRect = e), this.maybeNotify();
                                        }),
                                    ),
                                    this.unsubs.push(
                                        this.options.observeElementOffset(this, (e, t) => {
                                            (this.scrollAdjustments = 0),
                                                (this.scrollDirection = t ? (this.getScrollOffset() < e ? 'forward' : 'backward') : null),
                                                (this.scrollOffset = e),
                                                (this.isScrolling = t),
                                                this.maybeNotify();
                                        }),
                                    );
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
                            let n = new Map(),
                                i = new Map();
                            for (let r = t - 1; r >= 0; r--) {
                                let t = e[r];
                                if (n.has(t.lane)) continue;
                                let s = i.get(t.lane);
                                if ((null == s || t.end > s.end ? i.set(t.lane, t) : t.end < s.end && n.set(t.lane, !0), n.size === this.options.lanes)) break;
                            }
                            return i.size === this.options.lanes
                                ? Array.from(i.values()).sort((e, t) => (e.end === t.end ? e.index - t.index : e.end - t.end))[0]
                                : void 0;
                        }),
                        (this.getMeasurementOptions = s(
                            () => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled],
                            (e, t, n, i, r) => ((this.pendingMeasuredCacheIndexes = []), { count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: r }),
                            { key: !1 },
                        )),
                        (this.getMeasurements = s(
                            () => [this.getMeasurementOptions(), this.itemSizeCache],
                            ({ count: e, paddingStart: t, scrollMargin: n, getItemKey: i, enabled: r }, s) => {
                                if (!r) return (this.measurementsCache = []), this.itemSizeCache.clear(), [];
                                0 === this.measurementsCache.length &&
                                    ((this.measurementsCache = this.options.initialMeasurementsCache),
                                    this.measurementsCache.forEach((e) => {
                                        this.itemSizeCache.set(e.key, e.size);
                                    }));
                                let o = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                                this.pendingMeasuredCacheIndexes = [];
                                let a = this.measurementsCache.slice(0, o);
                                for (let r = o; r < e; r++) {
                                    let e = i(r),
                                        o = 1 === this.options.lanes ? a[r - 1] : this.getFurthestMeasurement(a, r),
                                        l = o ? o.end + this.options.gap : t + n,
                                        d = s.get(e),
                                        c = 'number' == typeof d ? d : this.options.estimateSize(r),
                                        u = l + c,
                                        h = o ? o.lane : r % this.options.lanes;
                                    a[r] = { index: r, start: l, size: c, end: u, key: e, lane: h };
                                }
                                return (this.measurementsCache = a), a;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.calculateRange = s(
                            () => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes],
                            (e, t, n, i) =>
                                (this.range =
                                    e.length > 0 && t > 0
                                        ? (function ({ measurements: e, outerSize: t, scrollOffset: n, lanes: i }) {
                                              let r = e.length - 1,
                                                  s = b(0, r, (t) => e[t].start, n),
                                                  o = s;
                                              if (1 === i) for (; o < r && e[o].end < n + t; ) o++;
                                              else if (i > 1) {
                                                  let a = Array(i).fill(0);
                                                  for (; o < r && a.some((e) => e < n + t); ) {
                                                      let t = e[o];
                                                      (a[t.lane] = t.end), o++;
                                                  }
                                                  let l = Array(i).fill(n + t);
                                                  for (; s > 0 && l.some((e) => e >= n); ) {
                                                      let t = e[s];
                                                      (l[t.lane] = t.start), s--;
                                                  }
                                                  (s = Math.max(0, s - (s % i))), (o = Math.min(r, o + (i - 1 - (o % i))));
                                              }
                                              return { startIndex: s, endIndex: o };
                                          })({ measurements: e, outerSize: t, scrollOffset: n, lanes: i })
                                        : null),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualIndexes = s(
                            () => {
                                let e = null,
                                    t = null,
                                    n = this.calculateRange();
                                return (
                                    n && ((e = n.startIndex), (t = n.endIndex)),
                                    this.maybeNotify.updateDeps([this.isScrolling, e, t]),
                                    [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                                );
                            },
                            (e, t, n, i, r) => (null === i || null === r ? [] : e({ startIndex: i, endIndex: r, overscan: t, count: n })),
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.indexFromElement = (e) => {
                            let t = this.options.indexAttribute,
                                n = e.getAttribute(t);
                            return n ? parseInt(n, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1);
                        }),
                        (this._measureElement = (e, t) => {
                            let n = this.indexFromElement(e),
                                i = this.measurementsCache[n];
                            if (!i) return;
                            let r = i.key,
                                s = this.elementsCache.get(r);
                            s !== e && (s && this.observer.unobserve(s), this.observer.observe(e), this.elementsCache.set(r, e)),
                                e.isConnected && this.resizeItem(n, this.options.measureElement(e, t, this));
                        }),
                        (this.resizeItem = (e, t) => {
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = t - (this.itemSizeCache.get(n.key) ?? n.size);
                            0 !== i &&
                                ((void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange
                                    ? this.shouldAdjustScrollPositionOnItemSizeChange(n, i, this)
                                    : n.start < this.getScrollOffset() + this.scrollAdjustments) &&
                                    this._scrollToOffset(this.getScrollOffset(), { adjustments: (this.scrollAdjustments += i), behavior: void 0 }),
                                this.pendingMeasuredCacheIndexes.push(n.index),
                                (this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, t))),
                                this.notify(!1));
                        }),
                        (this.measureElement = (e) => {
                            if (!e)
                                return void this.elementsCache.forEach((e, t) => {
                                    e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t));
                                });
                            this._measureElement(e, void 0);
                        }),
                        (this.getVirtualItems = s(
                            () => [this.getVirtualIndexes(), this.getMeasurements()],
                            (e, t) => {
                                let n = [];
                                for (let i = 0, r = e.length; i < r; i++) {
                                    let r = t[e[i]];
                                    n.push(r);
                                }
                                return n;
                            },
                            { key: !1, debug: () => this.options.debug },
                        )),
                        (this.getVirtualItemForOffset = (e) => {
                            let t = this.getMeasurements();
                            if (0 !== t.length) return o(t[b(0, t.length - 1, (e) => o(t[e]).start, e)]);
                        }),
                        (this.getOffsetForAlignment = (e, t, n = 0) => {
                            let i = this.getSize(),
                                r = this.getScrollOffset();
                            'auto' === t && (t = e >= r + i ? 'end' : 'start'), 'center' === t ? (e += (n - i) / 2) : 'end' === t && (e -= i);
                            let s = this.options.horizontal ? 'scrollWidth' : 'scrollHeight';
                            return Math.max(
                                Math.min(
                                    (this.scrollElement
                                        ? 'document' in this.scrollElement
                                            ? this.scrollElement.document.documentElement[s]
                                            : this.scrollElement[s]
                                        : 0) - i,
                                    e,
                                ),
                                0,
                            );
                        }),
                        (this.getOffsetForIndex = (e, t = 'auto') => {
                            e = Math.max(0, Math.min(e, this.options.count - 1));
                            let n = this.measurementsCache[e];
                            if (!n) return;
                            let i = this.getSize(),
                                r = this.getScrollOffset();
                            if ('auto' === t)
                                if (n.end >= r + i - this.options.scrollPaddingEnd) t = 'end';
                                else {
                                    if (!(n.start <= r + this.options.scrollPaddingStart)) return [r, t];
                                    t = 'start';
                                }
                            let s = 'end' === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                            return [this.getOffsetForAlignment(s, t, n.size), t];
                        }),
                        (this.isDynamicMode = () => this.elementsCache.size > 0),
                        (this.cancelScrollToIndex = () => {
                            null !== this.scrollToIndexTimeoutId &&
                                this.targetWindow &&
                                (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), (this.scrollToIndexTimeoutId = null));
                        }),
                        (this.scrollToOffset = (e, { align: t = 'start', behavior: n } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getOffsetForAlignment(e, t), { adjustments: void 0, behavior: n });
                        }),
                        (this.scrollToIndex = (e, { align: t = 'auto', behavior: n } = {}) => {
                            (e = Math.max(0, Math.min(e, this.options.count - 1))),
                                this.cancelScrollToIndex(),
                                'smooth' === n && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.');
                            let i = this.getOffsetForIndex(e, t);
                            if (!i) return;
                            let [r, s] = i;
                            this._scrollToOffset(r, { adjustments: void 0, behavior: n }),
                                'smooth' !== n &&
                                    this.isDynamicMode() &&
                                    this.targetWindow &&
                                    (this.scrollToIndexTimeoutId = this.targetWindow.setTimeout(() => {
                                        if (((this.scrollToIndexTimeoutId = null), this.elementsCache.has(this.options.getItemKey(e)))) {
                                            let [t] = o(this.getOffsetForIndex(e, s));
                                            1 > Math.abs(t - this.getScrollOffset()) || this.scrollToIndex(e, { align: s, behavior: n });
                                        } else this.scrollToIndex(e, { align: s, behavior: n });
                                    }));
                        }),
                        (this.scrollBy = (e, { behavior: t } = {}) => {
                            this.cancelScrollToIndex(),
                                'smooth' === t && this.isDynamicMode() && console.warn('The `smooth` scroll behavior is not fully supported with dynamic size.'),
                                this._scrollToOffset(this.getScrollOffset() + e, { adjustments: void 0, behavior: t });
                        }),
                        (this.getTotalSize = () => {
                            var e;
                            let t,
                                n = this.getMeasurements();
                            if (0 === n.length) t = this.options.paddingStart;
                            else if (1 === this.options.lanes) t = (null == (e = n[n.length - 1]) ? void 0 : e.end) ?? 0;
                            else {
                                let e = Array(this.options.lanes).fill(null),
                                    i = n.length - 1;
                                for (; i > 0 && e.some((e) => null === e); ) {
                                    let t = n[i];
                                    null === e[t.lane] && (e[t.lane] = t.end), i--;
                                }
                                t = Math.max(...e.filter((e) => null !== e));
                            }
                            return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
                        }),
                        (this._scrollToOffset = (e, { adjustments: t, behavior: n }) => {
                            this.options.scrollToFn(e, { behavior: n, adjustments: t }, this);
                        }),
                        (this.measure = () => {
                            (this.itemSizeCache = new Map()), this.notify(!1);
                        }),
                        this.setOptions(e);
                }
            }
            let b = (e, t, n, i) => {
                    for (; e <= t; ) {
                        let r = ((e + t) / 2) | 0,
                            s = n(r);
                        if (s < i) e = r + 1;
                        else {
                            if (!(s > i)) return r;
                            t = r - 1;
                        }
                    }
                    return e > 0 ? e - 1 : 0;
                },
                C = 'undefined' != typeof document ? i.useLayoutEffect : i.useEffect;
            function y(e) {
                let t = i.useReducer(() => ({}), {})[1],
                    n = {
                        ...e,
                        onChange: (n, i) => {
                            var s;
                            i ? (0, r.flushSync)(t) : t(), null == (s = e.onChange) || s.call(e, n, i);
                        },
                    },
                    [s] = i.useState(() => new x(n));
                return s.setOptions(n), C(() => s._didMount(), []), C(() => s._willUpdate()), s;
            }
            function T(e) {
                return y({ observeElementRect: c, observeElementOffset: _, scrollToFn: p, ...e });
            }
            function w(e) {
                return y({
                    getScrollElement: () => ('undefined' != typeof document ? window : null),
                    observeElementRect: h,
                    observeElementOffset: g,
                    scrollToFn: v,
                    initialOffset: () => ('undefined' != typeof document ? window.scrollY : 0),
                    ...e,
                });
            }
        },
        78166: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        94218: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => h });
            var i = n(32290),
                r = n(21916),
                s = n(39407),
                o = n(21732),
                a = n(91027),
                l = n(63423),
                d = n(71926),
                c = n(70204),
                u = n(34186);
            let h = (e) => {
                let { size: t = 'm', variant: n = 'default', withRipple: h = !0, buttonText: m, isBlock: _, key: g, className: f } = e,
                    v = (0, r.useRouter)(),
                    p = (0, u.N)().get(c.QG),
                    x = (0, a.c)(() => {
                        p.authorizationUrl && v.push(p.authorizationUrl);
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: x,
                        className: f,
                        isBlock: _,
                        color: 'primary',
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: m || (0, i.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        94805: (e, t, n) => {
            'use strict';
            n.d(t, { y: () => o });
            var i = n(80451),
                r = n(14257),
                s = n(50);
            let o = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: n, g: s, b: o } = (0, i.hexToRgb)(e),
                        a = t === r.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(n, ', ').concat(s, ', ').concat(o, ', ').concat(a, ')');
                }
            };
        },
        96746: (e) => {
            e.exports = {
                root: 'PageHeaderTitle_root__ESu2q',
                editButton: 'PageHeaderTitle_editButton__KF4eh',
                editButton_centered: 'PageHeaderTitle_editButton_centered__W9EwU',
                textField: 'PageHeaderTitle_textField__LXJ3X',
                textField_long: 'PageHeaderTitle_textField_long__ReeJz',
                title: 'PageHeaderTitle_title__caKyB',
                version: 'PageHeaderTitle_version__g5BeO',
                version_withOtherVersions: 'PageHeaderTitle_version_withOtherVersions__Amfwk',
                heading: 'PageHeaderTitle_heading__UADXi',
                heading_withVersion: 'PageHeaderTitle_heading_withVersion__jw12r',
                textFieldContainer: 'PageHeaderTitle_textFieldContainer__FSD_B',
                font_long: 'PageHeaderTitle_font_long__q9Leq',
                font_short: 'PageHeaderTitle_font_short__76VRG',
                font_mobile: 'PageHeaderTitle_font_mobile__M1__v',
                stickyTitle: 'PageHeaderTitle_stickyTitle__CL1m4',
                titleWithLinkIcon: 'PageHeaderTitle_titleWithLinkIcon__mBP_B',
                titleWithLink: 'PageHeaderTitle_titleWithLink__pJZN5',
                linkContainer: 'PageHeaderTitle_linkContainer__KUyIF',
                linkText: 'PageHeaderTitle_linkText__rSUmw',
                arrowWrapper: 'PageHeaderTitle_arrowWrapper__cadS3',
                arrowWrapper_long: 'PageHeaderTitle_arrowWrapper_long__xhAjB',
                arrowWrapper_short: 'PageHeaderTitle_arrowWrapper_short__45ema',
                arrowWrapper_mobile: 'PageHeaderTitle_arrowWrapper_mobile__iYnjq',
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 3379, 3647, 8497, 5718, 6347, 7258, 7680, 3183, 7972, 8868, 7231, 9763, 5108, 5583, 5976, 5367, 4413, 1914, 6723, 4761, 992, 3931, 9117, 6639, 6706,
                1311, 5201, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 9755, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 8816, 2563,
                6341, 3759, 4797, 4638, 277, 8160, 1385, 9710, 4220, 9562, 7358,
            ],
            () => e((e.s = 56447)),
        ),
            (_N_E = e.O());
    },
]);
