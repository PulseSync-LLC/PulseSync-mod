(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7167],
    {
        886: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => eb }));
            var r = a(88800),
                o = a(58390),
                n = a(84961),
                i = a(53548),
                s = a(87999),
                l = a(54721),
                d = a(7833),
                c = a(89009),
                _ = a(37523),
                u = a(76903),
                m = a(17392),
                v = a(46312),
                g = a(29993),
                p = a(58105),
                f = a(79070),
                x = a(66719),
                h = a(25772),
                b = a(88894),
                C = a(65724),
                j = a(2058),
                y = a(88969),
                P = a(62414),
                N = a(78275),
                T = a(96817),
                k = a(29504),
                H = a(32506),
                w = a(76484),
                E = a(44167),
                I = a(13060),
                B = a(72876),
                O = a(38053),
                L = a(26756),
                S = a(98953),
                R = a(67174),
                A = a(18130),
                D = a(52300),
                M = a(29595),
                W = a(74965),
                z = a(49343);
            let F = (0, n.PA)((e) => {
                let { className: t, size: a = 's', iconSize: o = 'xxs', withRipple: n, isDisabled: i, entityMeta: s, shareLink: l, onClick: d } = e,
                    { formatMessage: c } = (0, j.A)(),
                    { notify: _ } = (0, W.l)(),
                    u = (0, g.c)(async () => {
                        (null == d || d(),
                            await window.navigator.clipboard.writeText(l),
                            _((0, r.jsx)(z.D, { entityVariant: s.variant, entityTitle: s.title }), { containerId: M.u.INFO }));
                    });
                return (0, r.jsx)(T.$, {
                    className: t,
                    variant: 'default',
                    color: 'secondary',
                    onClick: u,
                    'aria-label': c({ id: 'interface-actions.share' }),
                    size: a,
                    withRipple: n,
                    radius: 'round',
                    disabled: i,
                    icon: (0, r.jsx)(D.I, { variant: 'share', size: o }),
                    'data-test-id': m.S7.SHARE_BUTTON,
                });
            });
            var U = a(38982),
                Y = a(84423),
                V = a(89846),
                $ = a(64543),
                K = a(63582),
                G = a(41617);
            let q = (0, K.n)({ event: 'LandingBlock.Navigated', kind: 'hook', requiredScopes: ['screen', 'block', 'object', 'tab'] }, () => {
                    let e = (0, Y.s)(),
                        { hash: t } = (0, V.g)(),
                        { screen: a, block: r, object: o, tab: n } = (0, $.j)(),
                        { offsetBlockPosY: s } = (0, i.useContext)(G.E);
                    return (0, g.c)((i) => {
                        let { to: l, objectId: d, objectType: c, deepLink: _ } = i,
                            u = null == a ? void 0 : a.pageIdForFrom,
                            m = null != d ? d : null == o ? void 0 : o.objectId,
                            v = null != c ? c : null == o ? void 0 : o.objectType;
                        if (!e || !a || !r || !o || !u || void 0 === t || void 0 === m || void 0 === v) return;
                        let g = void 0 !== s && void 0 !== r.blockPosY ? s + r.blockPosY : r.blockPosY,
                            p = {
                                hash: t,
                                pageId: u,
                                entityType: r.blockType,
                                entityId: r.blockId,
                                entityPosX: r.blockPosX,
                                entityPosY: g,
                                objectId: m,
                                objectType: v,
                                objectPosX: o.objectPosX,
                                objectPosY: o.objectPosY,
                                objectsCount: r.objectsCount,
                                from: u,
                                to: l,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: a.mainObjectId,
                                tabId: null == n ? void 0 : n.tabId,
                                tabPos: null == n ? void 0 : n.tabPos,
                                isTabSelectedByDefault: null == n ? void 0 : n.isTabSelectedByDefault,
                            };
                        (_ && (p.deepLink = _), Object.values(p).some((e) => void 0 === e) || (0, U.iF)(e.evgenInstance, p));
                    });
                }),
                X = (0, K.n)({ event: 'LandingBlock.Loaded', kind: 'hook', requiredScopes: ['screen', 'block', 'tab'] }, () => {
                    let e = (0, Y.s)(),
                        { hash: t } = (0, V.g)(),
                        { screen: a, block: r, tab: o } = (0, $.j)();
                    return (0, g.c)(() => {
                        let n = null == a ? void 0 : a.pageId;
                        if (!e || !a || !r || !n || void 0 === t) return;
                        let i = {
                            hash: t,
                            pageId: n,
                            tabId: null == o ? void 0 : o.tabId,
                            tabPos: null == o ? void 0 : o.tabPos,
                            entityType: r.blockType,
                            mainObjectType: a.mainObjectType,
                            mainObjectId: a.mainObjectId,
                            entityId: r.blockId,
                            entityPosX: r.blockPosX,
                            entityPosY: r.blockPosY,
                            isTabSelectedByDefault: null == o ? void 0 : o.isTabSelectedByDefault,
                            objectsCount: r.objectsCount,
                            pagePlacement: s.PagePlacements.Fullscreen,
                            pageStyle: s.PageStyles.Fullscreen,
                        };
                        Object.values(i).some((e) => void 0 === e) || (0, U.es)(e.evgenInstance, i);
                    });
                });
            var Z = a(61097),
                Q = a(60902),
                J = a(65315),
                ee = a.n(J);
            let et = (0, n.PA)((e) => {
                    var t;
                    let { className: a, forwardRef: o, onCoverClick: n, concert: l, leadArtistId: d, cover: c, description: _ } = e,
                        { formatMessage: u, formatDate: v } = (0, j.A)(),
                        { state: p, toggleTrue: x, toggleFalse: h } = (0, N.e)(!1),
                        b = q(),
                        D = (0, P.D)(),
                        M = X(),
                        W = (0, i.useRef)(!1),
                        z = (0, w.Y)()(l);
                    (0, i.useEffect)(() => {
                        W.current || (M(), (W.current = !0));
                    }, [M]);
                    let U = (0, g.c)((e) => {
                            (x(), null == e || e.stopPropagation());
                        }),
                        Y = (0, g.c)((e) => {
                            (b({ to: s.AppScreen.ConcertPurchaseScreen }), U(e), e.preventDefault());
                        }),
                        V = (0, g.c)(() => {
                            b({ to: s.AppScreen.ShareScreen });
                        }),
                        $ = (0, g.c)(() => {
                            b({ to: s.AppScreen.ArtistScreen });
                        }),
                        { shareLink: K, pathname: G } = (0, A.b)('/concert/:concertId', { params: { concertId: l.id } }),
                        J = { variant: S.Y.CONCERT, id: l.id, title: null != (t = l.title) ? t : '', path: G },
                        et = (0, f.L)(() =>
                            l.isIdentityExperimentEnabled
                                ? (0, r.jsxs)('div', {
                                      children: [
                                          (0, r.jsx)(k.HL, { className: ee().buttonPrice, variant: 'div', size: 'l', weight: 'medium', children: z }),
                                          l.cashbackValuePercent &&
                                              (0, r.jsx)(k.HL, {
                                                  className: ee().buttonCashback,
                                                  variant: 'div',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, r.jsx)(y.A, { id: 'entity-names.cashback-percent', values: { value: l.cashbackValuePercent } }),
                                              }),
                                      ],
                                  })
                                : z,
                        ),
                        ea = (0, f.L)(() => {
                            let e = l.isIdentityExperimentEnabled ? 'l' : 's',
                                t = l.isIdentityExperimentEnabled ? 'm' : 'xxs';
                            return (0, r.jsxs)('div', {
                                className: ee().controls,
                                children: [
                                    (0, r.jsx)(T.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: (0, C.$)(ee().button, { [ee().button_redesigned]: l.isIdentityExperimentEnabled }),
                                        size: 's',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: Y,
                                        'data-test-id': m.e8.pageHeader.CONCERT_BUY_TICKET_BUTTON,
                                        children: et,
                                    }),
                                    (0, r.jsx)(F, { onClick: V, shareLink: K, entityMeta: J, size: e, iconSize: t }),
                                ],
                            });
                        }),
                        er = (0, i.useMemo)(() => {
                            var e;
                            return [
                                l.city,
                                l.place,
                                v(new Date(null != (e = l.datetime) ? e : ''), { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }),
                                l.contentRating,
                            ]
                                .filter(Boolean)
                                .join(' • ');
                        }, [l.city, l.place, l.datetime, l.contentRating, v]),
                        eo = (0, f.L)(() => {
                            if (!_) return;
                            let e = {
                                    title:
                                        l.isIdentityExperimentEnabled && l.eventKind
                                            ? u({ id: 'concerts.about-event-kind' }, { kind: l.eventKind })
                                            : u({ id: 'track-modal.concert-title' }),
                                    message: _.text,
                                    isExpandable: !0,
                                    visibleLinesCount: 3,
                                },
                                t = (0, f.L)(() => {
                                    if (!_.genre) return;
                                    let e = (0, r.jsx)(L.D, { children: _.genre });
                                    return (0, r.jsx)(O.O, {
                                        title: u({ id: 'track-modal.genre' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_GENRE_INFO_BLOCK,
                                    });
                                }),
                                a = (0, f.L)(() => {
                                    if (!l.contentRating) return;
                                    let e = (0, r.jsx)(L.D, { children: l.contentRating });
                                    return (0, r.jsx)(O.O, {
                                        title: u({ id: 'track-modal.content-rating' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_CONTENT_RATING_INFO_BLOCK,
                                    });
                                }),
                                o = (0, f.L)(() => {
                                    if (!_.source) return;
                                    let e = (0, r.jsx)(L.D, { children: _.source });
                                    return (0, r.jsx)(O.O, {
                                        title: u({ id: 'track-modal.source' }),
                                        infoDescription: e,
                                        'data-test-id': m.e8.pageHeader.CONCERT_SOURCE_INFO_BLOCK,
                                    });
                                }),
                                n = (0, r.jsxs)('div', { className: ee().bottomContent, children: [t, a, o] });
                            return (0, r.jsx)('div', {
                                className: ee().overview,
                                'data-test-id': m.e8.landing.OVERVIEW,
                                children: (0, r.jsx)(H.F, {
                                    modalClassName: (0, C.$)(ee().overviewModal, ee().important),
                                    textButton: u({ id: 'interface-actions.more-details' }),
                                    buttonClassName: (0, C.$)(ee().overviewButton, ee().important),
                                    messageModalClassName: ee().overviewMessageModal,
                                    messageClassName: ee().overviewMessage,
                                    creditsModal: n,
                                    meta: e,
                                    withShowButton: !0,
                                }),
                            });
                        }),
                        en = (0, i.useMemo)(
                            () =>
                                (0, r.jsxs)('div', {
                                    className: ee().meta,
                                    children: [
                                        er &&
                                            (0, r.jsx)(k.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                'data-test-id': m.e8.pageHeader.CONCERT_META_INFO,
                                                children: er,
                                            }),
                                        !l.isIdentityExperimentEnabled && l.cashbackTitle && (0, r.jsx)(I.m, { className: ee().cashbackBadge, title: l.cashbackTitle }),
                                        eo,
                                    ],
                                }),
                            [l.cashbackTitle, l.isIdentityExperimentEnabled, er, eo],
                        ),
                        ei = (0, f.L)(() => {
                            if (!d) return;
                            let { href: e } = (0, R.u)('/artist/:artistId', { params: { artistId: d } });
                            return e;
                        }),
                        es = l.isIdentityExperimentEnabled && l.eventKind ? u({ id: 'concerts.event-kind' }, { kind: l.eventKind }) : '';
                    return (0, r.jsxs)('div', {
                        ref: D,
                        className: (0, C.$)(ee().root, ee().important),
                        children: [
                            (0, r.jsx)(Z.k, {
                                onTitleLinkClick: $,
                                linkTitle: ei,
                                ref: o,
                                className: (0, C.$)(a, ee().root, ee().important),
                                infoClassName: ee().info,
                                titleClassName: ee().title,
                                entityName: es,
                                title: l.title || '',
                                meta: en,
                                coverCellClassName: (0, C.$)(ee().coverCell, ee().important),
                                cover: (0, r.jsx)(Q.I, {
                                    buttonClassName: (0, C.$)(ee().coverButton, ee().important),
                                    className: ee().cover,
                                    onClick: n,
                                    'aria-label': n ? u({ id: 'slider.view-concert-covers' }) : void 0,
                                    customCover: (0, r.jsx)(B.W, {
                                        datetime: l.datetime,
                                        coverColor: null == c ? void 0 : c.color,
                                        uri: null == c ? void 0 : c.uri,
                                        withMask: !0,
                                    }),
                                }),
                                controls: ea,
                                headingVariant: 'h1',
                            }),
                            (0, r.jsx)(E.h, { dataSessionId: l.dataSessionId, isOpened: p, onOpen: x, onClose: h }),
                        ],
                    });
                }),
                ea = (0, i.forwardRef)((e, t) => (0, r.jsx)(et, { forwardRef: t, ...e }));
            var er = a(32596),
                eo = a(3685),
                en = a(69630),
                ei = a(98427),
                es = a(27054),
                el = a(50327),
                ed = a(44230),
                ec = a(37670),
                e_ = a(72288),
                eu = a(97956),
                em = a(86790),
                ev = a(60266),
                eg = a(93317),
                ep = a(6474),
                ef = a.n(ep);
            let ex = (0, n.PA)((e) => {
                    var t, a;
                    let { concertId: n } = e,
                        {
                            experiments: u,
                            concert: C,
                            modals: { imageSliderModal: j },
                        } = (0, e_.g)();
                    (0, l.u)();
                    let { setContentScrollRef: y, contentScrollRef: P } = (0, ed.g)(),
                        { forceUpdateRefCallback: N, offsetY: T } = (0, p.G)(P),
                        k = (0, el.y)(null == (a = C.covers) || null == (t = a[0]) ? void 0 : t.color),
                        { topColorStyle: H, headerStyle: w } = (0, eo.Q)(k, T),
                        E = (0, g.c)(() => {
                            C.coversUri.length > 0 && j.openImages({ images: C.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        I = u.checkExperiment(eu.z.WebNextConcertPage, 'on');
                    ((0, es.A)(),
                        (0, i.useEffect)(
                            () => () => {
                                C.reset();
                            },
                            [C, n],
                        ),
                        (0, ec.J)(C.isResolved));
                    let B = [];
                    if (
                        (C.isNeededToLoad && B.push(C.getInfo({ concertId: n })),
                        C.landing.isNeededToLoad && B.push(C.landing.getConcertSkeleton({ concertId: n, skeletonId: v.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        B.length && (0, i.use)(Promise.allSettled(B)),
                        (!I || C.isNotFound) && (0, o.notFound)(),
                        C.isRejected)
                    )
                        return (0, r.jsx)(er.SomethingWentWrong, {});
                    let O = (0, f.L)(() => {
                        var e, t;
                        return C.isLoading || !C.meta || C.isRejected
                            ? (0, r.jsx)(b.c, { className: ef().header, isActive: !0 })
                            : (0, r.jsx)(d.B, {
                                  objectType: s.DomainObjectType.Concert,
                                  objectId: null == (e = C.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  children: (0, r.jsx)(ea, {
                                      description: C.description,
                                      onCoverClick: E,
                                      leadArtistId: C.leadArtistId,
                                      ref: N,
                                      className: ef().header,
                                      concert: C.meta,
                                      cover: null == (t = C.covers) ? void 0 : t[0],
                                  }),
                              });
                    });
                    return (0, r.jsxs)(en.h, {
                        scrollElement: P,
                        children: [
                            (0, r.jsx)(eg.Y, { style: w, variant: eg.V.INNER, showControls: !1 }),
                            (0, r.jsx)('div', { className: ef().averageColorBackground, style: H }),
                            (0, r.jsxs)(x.N, {
                                ref: y,
                                className: ef().root,
                                containerClassName: ef().container,
                                'data-test-id': m.Xk.concert.CONCERT_PAGE,
                                children: [
                                    (0, r.jsxs)('div', {
                                        children: [
                                            (0, r.jsx)(c.h, {
                                                tabId: '',
                                                tabPos: 0,
                                                isTabSelectedByDefault: !1,
                                                children: (0, r.jsx)(_.F, {
                                                    blockId: s.EntityTypes.ConcertHeader,
                                                    blockType: s.EntityTypes.ConcertHeader,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    objectsCount: 1,
                                                    children: O,
                                                }),
                                            }),
                                            (0, r.jsx)(h.E, {
                                                containerClassName: ef().skeleton,
                                                landing: C.landing,
                                                errorComponent: (0, r.jsx)(er.SomethingWentWrong, { className: ef().error, withBackwardControl: !1 }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(ev.A, { children: (0, r.jsx)(em.w, { className: ef().footer }) }),
                                ],
                            }),
                        ],
                    });
                }),
                eh = (0, n.PA)((e) =>
                    (0, r.jsx)(u.a, {
                        pageId: s.AppScreen.ConcertScreen,
                        pageIdForFrom: ei.b.CONCERT,
                        mainObjectId: e.concertId,
                        mainObjectType: s.DomainObjectType.Concert,
                        children: (0, r.jsx)(ex, { ...e }),
                    }),
                ),
                eb = () => {
                    let e = (0, o.useSearchParams)().get('concertId');
                    return (e || (0, o.notFound)(), (0, r.jsx)(eh, { concertId: e }));
                };
        },
        3685: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => o });
            var r = a(53548);
            let o = (e, t) => ({
                topColorStyle: (0, r.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, r.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        6474: (e) => {
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
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => m });
            var r = a(88800),
                o = a(88969),
                n = a(58390),
                i = a(17392),
                s = a(29993),
                l = a(96817),
                d = a(29504),
                c = a(99890),
                _ = a(4086),
                u = a(41928);
            let m = (e) => {
                let { size: t = 'm', variant: a = 'default', color: m = 'primary', withRipple: v = !0, buttonText: g, isBlock: p, key: f, className: x } = e,
                    h = (0, n.useRouter)(),
                    b = (0, u.N)().get(_.QG),
                    C = (0, s.c)(() => {
                        b.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(b.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: p,
                        color: m,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: v,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: g || (0, r.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        12479: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        16472: (e) => {
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
        26756: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => c });
            var r = a(88800),
                o = a(84961),
                n = a(29504),
                i = a(72288),
                s = a(91292),
                l = a(12479),
                d = a.n(l);
            let c = (0, o.PA)((e) => {
                let { children: t, href: a, className: o } = e,
                    {
                        currentTrackInfo: { modal: l },
                    } = (0, i.g)();
                return a
                    ? (0, r.jsx)(s.N, {
                          className: d().link,
                          href: a,
                          onClick: l.close,
                          children: (0, r.jsx)(n.HL, { className: o, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, r.jsx)(n.HL, { className: o, variant: 'div', size: 'l', children: t });
            });
        },
        27054: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var r = a(53548),
                o = a(87999),
                n = a(47149),
                i = a(84423),
                s = a(89846),
                l = a(64543),
                d = a(63582),
                c = a(29993);
            let _ = (0, d.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: ['screen'] }, function () {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: a = !0 } = t,
                    d = null == (e = (0, i.s)()) ? void 0 : e.evgenInstance,
                    { hash: _ } = (0, s.g)(),
                    { screen: u } = (0, l.j)(),
                    m = null == u ? void 0 : u.pageId,
                    v = (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !d ||
                            !m ||
                            !_ ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = {
                            hash: _,
                            pageId: o.AppScreen.Link,
                            entityType: o.EntityTypes.Deeplink,
                            entityId: o.EntityTypes.Deeplink,
                            from: o.AppScreen.Link,
                            to: m,
                            deepLink: null != e ? e : window.location.href,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, n.ID)(d, t);
                    });
                return (
                    (0, r.useEffect)(() => {
                        a && v();
                    }, [a, v]),
                    (0, c.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        a || v({ deepLink: e });
                    })
                );
            });
        },
        33169: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => j });
            // for PulseSync WebHost: BEGIN imports for native addon header title items
            var pulseSyncHeaderReact = a(53548),
                pulseSyncHeaderJsx = a(88800),
                pulseSyncHeaderText = a(29504),
                pulseSyncHeaderIcon = a(52300);

            // for PulseSync WebHost: END imports for native addon header title items
            var r = a(88800),
                o = a(65724),
                n = a(84961),
                i = a(53548),
                s = a(2058),
                l = a(17392),
                d = a(29993),
                c = a(79070),
                _ = a(96817),
                u = a(52300),
                m = a(29504),
                v = a(63807);
            let g = (e) => {
                let { children: t, title: a, className: o } = e,
                    { setTitleElement: n, setTitle: s } = (0, i.useContext)(v.B),
                    l = (0, i.useRef)(null);
                return (
                    (0, i.useEffect)(() => {
                        ((null == l ? void 0 : l.current) && n(l), a && s(a));
                    }, [l, a, n, s]),
                    (0, i.useEffect)(
                        () => () => {
                            s('');
                        },
                        [s],
                    ),
                    (0, r.jsx)('div', { ref: l, className: o, children: t })
                );
            };
            var p = a(78940),
                f = a(72288),
                x = a(91292),
                h = a(59378),
                b = a(48100),
                C = a.n(b);
            let j = (0, n.PA)((e) => {
                // for PulseSync WebHost: BEGIN refresh header titles when native addon slots change
                let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                (0, pulseSyncHeaderReact.useEffect)(() => {
                    const onNativeSlotChange = (e) => {
                        if (e.detail === 'headerTitleItems') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                    };
                    document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                }, []);

                // for PulseSync WebHost: END refresh header titles when native addon slots change
                let {
                        title: t = '',
                        'aria-labelledby': a,
                        canChange: n = !1,
                        onChange: v,
                        maxTitleLength: b,
                        version: j = '',
                        onVersionClick: y,
                        className: P,
                        headingVariant: N = 'h2',
                        withHeadingClamp: T = !0,
                        link: k,
                        onTitleLinkClick: H,
                    } = e,
                    {
                        settings: { isMobile: w },
                    } = (0, f.g)(),
                    { formatMessage: E } = (0, s.A)(),
                    [I, B] = (0, i.useState)(!1),
                    O = (0, i.useRef)(null),
                    L = t.length + j.length > 25,
                    S = (0, p.Z)(null != k ? k : ''),
                    R = (0, d.c)((e) => {
                        (null == H || H(), S(e));
                    }),
                    A = (0, i.useMemo)(
                        () =>
                            w
                                ? { font: C().font_mobile, iconLink: C().arrowWrapper_mobile }
                                : L
                                  ? { font: C().font_long, iconLink: C().arrowWrapper_long }
                                  : { font: C().font_short, iconLink: C().arrowWrapper_short },
                        [w, L],
                    ),
                    D = !w && n && I,
                    M = (0, i.useCallback)(() => {
                        var e;
                        (B(!0), null == (e = O.current) || e.focus());
                    }, []),
                    W = (0, i.useCallback)(
                        (e) => {
                            (B(!1), null == v || v(e));
                        },
                        [v],
                    ),
                    z = (0, c.L)(() =>
                        (0, r.jsx)('span', {
                            className: (0, o.$)(C().arrowWrapper, A.iconLink),
                            children: (0, r.jsx)(u.I, { className: C().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    F = (0, c.L)(() =>
                        (0, r.jsxs)(m.DZ, {
                            variant: N,
                            id: a,
                            lineClamp: w && T ? 2 : void 0,
                            className: (0, o.$)(C().heading, { [C().heading_withVersion]: j }),
                            'data-test-id': l.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, r.jsx)(m.HL, { className: (0, o.$)(C().font, A.font, C().title), variant: 'span', children: t }),
                                j &&
                                    (0, r.jsx)(m.HL, {
                                        onClick: y,
                                        className: (0, o.$)(C().font, A.font, C().version, { [C().version_withOtherVersions]: y }),
                                        variant: 'span',
                                        'data-test-id': l.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(j),
                                    }),
                                k && !w && z,
                            ],
                        }),
                    ),
                    U = (0, c.L)(() =>
                        k
                            ? (0, r.jsxs)(x.N, {
                                  className: C().titleWithLink,
                                  containerClassName: C().linkContainer,
                                  textClassName: C().linkText,
                                  href: k,
                                  onClick: R,
                                  children: [F, w && z],
                              })
                            : F,
                    );
                // for PulseSync WebHost: BEGIN render native addon items beside header titles
                const pulseSyncInjectHeaderTitleItems = (items) =>
                    window.pulsesyncApi?.injectNativeSlotItems?.('headerTitleItems', items, {
                        eventDetail: null,
                        renderItem: ({ key, payload, positionIndex }) => {
                            const text = String(payload?.text ?? '').trim(),
                                icon = String(payload?.icon ?? '').trim(),
                                label = String(payload?.label ?? text).trim();
                            if (!text && !icon) return null;
                            return (0, pulseSyncHeaderJsx.jsxs)(
                                pulseSyncHeaderText.HL,
                                {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    ...(label
                                        ? {
                                              'aria-label': label,
                                          }
                                        : {}),
                                    'data-pulsesync-addon-header-item': 'title',
                                    children: [
                                        icon &&
                                            (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                        text,
                                    ],
                                },
                                key,
                            );
                        },
                    }) ?? items;
                // for PulseSync WebHost: END render native addon items beside header titles
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        !D &&
                            (0, r.jsxs)('div', {
                                className: (0, o.$)(C().root, P),
                                // for PulseSync WebHost: BEGIN inject native addon items into the header title
                                children: pulseSyncInjectHeaderTitleItems([
                                    (0, r.jsx)(g, { title: t, className: C().stickyTitle, children: U }),
                                    n &&
                                        (0, r.jsx)('div', {
                                            className: (0, o.$)(C().editButton, { [C().editButton_centered]: !L && !w }),
                                            children: (0, r.jsx)(_.$, {
                                                onClick: M,
                                                'aria-label': E({ id: 'playlist-actions.change-title' }),
                                                icon: (0, r.jsx)(u.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': l.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ]),
                                // for PulseSync WebHost: END inject native addon items into the header title
                            }),
                        D &&
                            (0, r.jsx)('div', {
                                className: C().textFieldContainer,
                                children: (0, r.jsx)(h.A, {
                                    text: t,
                                    className: (0, o.$)(C().font, A.font, C().textField, C().title, { [C().textField_long]: L && !w }),
                                    onChangeFinish: W,
                                    maxTextLength: b,
                                    minTextLength: 1,
                                    placeholder: E({ id: 'playlist-actions.enter-title' }),
                                    shouldFinishOnKeyPress: !0,
                                    withOutline: !0,
                                }),
                            }),
                    ],
                });
            });
        },
        36232: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        38053: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => d });
            var r = a(88800),
                o = a(65724),
                n = a(35412),
                i = a(29504),
                s = a(12479),
                l = a.n(s);
            let d = (e) => {
                let { title: t, className: a, titleClassName: s, infoDescription: d, ...c } = e;
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(l().root, a),
                    ...(0, n.OZ)(c),
                    children: [t && (0, r.jsx)(i.DZ, { variant: 'h4', className: (0, o.$)(l().infoTitle, s), children: t }), d],
                });
            };
        },
        41617: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            let r = (0, a(53548).createContext)({ offsetBlockPosY: void 0 });
        },
        48100: (e) => {
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
        50327: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            var r = a(35412),
                o = a(8655),
                n = a(69704);
            let i = (e) => {
                let { theme: t } = (0, n.W)();
                if (e) {
                    let { r: a, g: n, b: i } = (0, r.E2)(e),
                        s = t === o.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(n, ', ').concat(i, ', ').concat(s, ')');
                }
            };
        },
        58105: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => c });
            var r,
                o = a(14022),
                n = a(53548),
                i = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let r = a(352),
                            o = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: n } = e,
                                i = (0, o.useRef)(null),
                                [s, l] = (0, o.useState)(!!a),
                                d = (0, o.useMemo)(
                                    () =>
                                        (0, r.throttle)(() => {
                                            (l(!a),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t)));
                                        }, n),
                                    [t, a, n],
                                ),
                                c = (0, o.useCallback)(() => {
                                    (l(!!a), i.current && window.clearTimeout(i.current));
                                }, [a]);
                            return (
                                (0, o.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let r = a(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, r.useState)(null);
                            return [
                                e,
                                (0, r.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let r = a(810),
                            o = a(1848),
                            n = a(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: a, elementRef: i } = e,
                                { state: s, handleDebouncedToggle: l } = (0, n.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, r.useCallback)(() => {
                                    (a && l(), null == t || t());
                                }, [a, l, t]);
                            return (
                                (0, r.useEffect)(() => {
                                    let e = (0, o.getElementFromRefOrElement)(i);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        a = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, a), () => t.removeEventListener('scroll', d, a));
                                }, [i, d]),
                                s
                            );
                        };
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
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = l(810),
                    t = l(3830),
                    a = l(3940);
                d.useElementOffsetY = (r) => {
                    let [o, n] = (0, a.useForceUpdateRef)(),
                        [i, s] = (0, e.useState)(),
                        l = (0, e.useCallback)(() => {
                            let e = null == o ? void 0 : o.getBoundingClientRect();
                            e && s(e.y);
                        }, [o]);
                    return ((0, e.useLayoutEffect)(l), (0, t.useScroll)({ onScroll: l, elementRef: r }), { forceUpdateRefCallback: n, offsetY: i });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        60902: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => u });
            var r = a(88800),
                o = a(65724),
                n = a(17392),
                i = a(96817),
                s = a(52300),
                l = a(7555),
                d = a(81877),
                c = a(36232),
                _ = a.n(c);
            let u = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: c, className: u, withPlusBadge: m, onClick: v, 'aria-label': g, customCover: p, buttonClassName: f } = e;
                return (0, r.jsxs)(l.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, o.$)(_().root, u, { [_().root_hoverable]: !!v }),
                    children: [
                        (0, r.jsx)(i.$, {
                            className: (0, o.$)(_().coverButton, f),
                            onClick: v,
                            'aria-label': g,
                            tabIndex: v ? 0 : -1,
                            disabled: !v,
                            'data-test-id': n.S7.ENTITY_COVER_BUTTON,
                            children: p || (0, r.jsx)(d.B, { fit: 'cover', src: a, size: 300, className: _().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        m && (0, r.jsx)(s.I, { variant: 'plusBadge', className: _().plusBadge }),
                    ],
                });
            };
        },
        61097: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => w });
            // for PulseSync WebHost: BEGIN imports for native addon header action buttons and tooltips
            var pulseSyncHeaderReact = a(53548),
                pulseSyncHeaderJsx = a(88800),
                pulseSyncHeaderText = a(29504),
                pulseSyncHeaderIcon = a(52300),
                pulseSyncHeaderButton = a(96817),
                pulseSyncHeaderTooltip = a(94398);

            // for PulseSync WebHost: END imports for native addon header action buttons and tooltips
            var r = a(88800),
                o = a(65724),
                n = a(84961),
                i = a(53548),
                s = a.t(i, 2),
                l = a(88969),
                d = a(17392),
                c = a(50408),
                _ = a(52300),
                u = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (o && (o += ' '), (o += r));
                                            else for (a in t) t[a] && (o && (o += ' '), (o += a));
                                        return o;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => o }));
                        let o = r;
                    },
                    4353: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
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
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
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
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var o = null;
                            if ((void 0 !== r && (o = '' + r), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: a, type: e, key: o, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    2018: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = a(4377),
                            n = a(5881),
                            i = a(8903),
                            s = r(a(4353));
                        t.Label = (e) => {
                            let { children: t, className: a, size: r = 's', ...l } = e;
                            return (0, o.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: r,
                                lineClamp: 1,
                                className: (0, n.clsx)(s.default.root, a),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    3412: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = a(4377),
                            n = a(5881),
                            i = a(810),
                            s = a(5987),
                            l = r(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: r = 'text', size: i = 's', className: d, children: c, weight: _ = 'medium', ...u } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_'.concat(r, '_').concat(i)], l.default['root_weight_'.concat(_)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, a) => (0, o.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    1641: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = a(4377),
                            n = a(5881),
                            i = a(810),
                            s = a(5987),
                            l = r(a(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: r = 'bold', size: i = 's', className: d, children: c, ..._ } = e;
                            return (0, o.jsx)(s.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(r)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, a) => (0, o.jsx)(t.HeadingComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = a(4377),
                            n = a(5881),
                            i = a(810),
                            s = r(a(61));
                        function l(e) {
                            let { forwardRef: t, style: a, className: r, children: i, variant: l, lineClamp: d, ...c } = e,
                                _ = d && 'string' == typeof i ? i : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...a, WebkitLineClamp: d },
                                ref: t,
                                title: _,
                                className: (0, n.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    r,
                                ),
                                ...c,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var r = a(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return r.Caption;
                            },
                        });
                        var o = a(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s;
                    },
                },
                m = {};
            function v(e) {
                var t = m[e];
                if (void 0 !== t) return t.exports;
                var a = (m[e] = { exports: {} });
                return (u[e].call(a.exports, a, a.exports, v), a.exports);
            }
            ((v.d = (e, t) => {
                for (var a in t) v.o(t, a) && !v.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (v.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var g = {};
            (() => {
                (Object.defineProperty(g, '__esModule', { value: !0 }), (g.Label = void 0));
                var e = v(2018);
                Object.defineProperty(g, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var p = g.Label;
            g.__esModule;
            var f = a(29504),
                x = a(44450),
                h = a(26e3),
                b = a(40210),
                C = a(86462),
                j = a(91051),
                y = a(7628),
                P = a(85904),
                N = a.n(P),
                T = a(33169);
            let k = 'entity-header-block-controls',
                H = (0, n.PA)((e) => {
                    // for PulseSync WebHost: BEGIN refresh header action buttons when native addon slots change
                    let [, pulseSyncSetHeaderSlotRevision] = (0, pulseSyncHeaderReact.useState)(0);
                    (0, pulseSyncHeaderReact.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            if (e.detail === 'headerActions') pulseSyncSetHeaderSlotRevision((e) => e + 1);
                        };
                        document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                        return () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange);
                    }, []);

                    // for PulseSync WebHost: END refresh header action buttons when native addon slots change
                    let {
                            'aria-labelledby': t,
                            entityName: a,
                            title: n,
                            meta: s,
                            controls: u,
                            className: m,
                            forwardRef: v,
                            canChangeTitle: g = !1,
                            maxTitleLength: x,
                            onTitleChange: h,
                            cover: b,
                            version: P,
                            onVersionClick: H,
                            disclaimerLabel: w,
                            entityNameIcon: E,
                            headingVariant: I,
                            titleClassName: B,
                            metaClassName: O,
                            contentClassName: L,
                            withHeadingClamp: S,
                            entityNameClassName: R,
                            logo: A,
                            coverCellClassName: D,
                            infoClassName: M,
                            linkTitle: W,
                            onTitleLinkClick: z,
                            showMobileLoginButton: F,
                            showMobileSubscriptionButton: U,
                        } = e,
                        [Y, V] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: $,
                            mainText: K,
                            mainTextA11y: G,
                            isShimmerActive: q,
                            isShimmerVisible: X,
                            oneClickAvailable: Z,
                            oneClickDisclaimerText: Q,
                            oneClickDisclaimerTextA11y: J,
                        } = (0, C.D)({ storeName: 'music', isEnabled: !!U, offerElement: { element: Y, intersectionPropertyId: k } }),
                        ee = (0, i.useMemo)(
                            () =>
                                w
                                    ? (0, r.jsx)('div', {
                                          className: N().entityContainer,
                                          children: (0, r.jsx)(p, {
                                              size: 'm',
                                              className: N().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: w,
                                          }),
                                      })
                                    : (0, r.jsxs)(f.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, o.$)(N().entityName, R),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [a, E],
                                      }),
                            [w, a, R, E],
                        );
                    // for PulseSync WebHost: BEGIN render native addon header action buttons
                    const pulseSyncInjectHeaderActionsItems = (items) =>
                        window.pulsesyncApi?.injectNativeSlotItems?.('headerActions', items, {
                            eventDetail: null,
                            renderItem: ({ key, payload, activate }) => {
                                const label = String(payload?.label ?? '').trim(),
                                    description = String(payload?.description ?? '').trim(),
                                    icon = String(payload?.icon ?? '').trim();
                                if (!label || !icon) return null;
                                return (0, pulseSyncHeaderJsx.jsx)(
                                    pulseSyncHeaderTooltip.k,
                                    {
                                        title: label,
                                        ...(description
                                            ? {
                                                  description,
                                              }
                                            : {}),
                                        children: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderButton.$, {
                                            radius: 'round',
                                            size: 'xs',
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': label,
                                            icon: (0, pulseSyncHeaderJsx.jsx)(pulseSyncHeaderIcon.I, {
                                                variant: icon,
                                                size: 'xxs',
                                            }),
                                            onClick: activate,
                                            'data-pulsesync-addon-header-action': '',
                                        }),
                                    },
                                    key,
                                );
                            },
                        }) ?? items;
                    // for PulseSync WebHost: END render native addon header action buttons
                    return (0, r.jsxs)('div', {
                        className: (0, o.$)(
                            N().root,
                            { [N().root_withCover]: (0, i.isValidElement)(b), [N().root_withCoverAndLogo]: (0, i.isValidElement)(A) && (0, i.isValidElement)(b) },
                            m,
                        ),
                        ref: v,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            b && (0, r.jsx)('div', { className: (0, o.$)(N().coverCell, D), children: b }),
                            (0, r.jsxs)('div', {
                                className: (0, o.$)(N().content, L),
                                children: [
                                    (0, r.jsxs)('div', {
                                        className: (0, o.$)(N().info, M),
                                        children: [
                                            ee,
                                            (0, r.jsx)(T.R, {
                                                onTitleLinkClick: z,
                                                link: W,
                                                className: (0, o.$)(N().title, B, { [N().title_withDisclaimerLabel]: !!w }),
                                                title: n,
                                                'aria-labelledby': t,
                                                canChange: g,
                                                maxTitleLength: x,
                                                onChange: h,
                                                version: P,
                                                onVersionClick: H,
                                                headingVariant: I,
                                                withHeadingClamp: S,
                                            }),
                                            !!s && (0, r.jsx)('div', { className: (0, o.$)(N().meta, { [N().meta_withDisclaimerLabel]: !!w }, O), children: s }),
                                        ],
                                    }),
                                    // for PulseSync WebHost: BEGIN inject native addon items into the header action group
                                    (0, r.jsx)('div', {
                                        className: N().controls,
                                        'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS,
                                        children: pulseSyncInjectHeaderActionsItems(Array.isArray(u) ? u : [u]),
                                    }),
                                    // for PulseSync WebHost: END inject native addon items into the header action group
                                    F &&
                                        (0, r.jsxs)('div', {
                                            className: N().buttonContainer,
                                            children: [
                                                (0, r.jsx)(y.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, r.jsx)(l.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: N().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, r.jsxs)(f.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: N().bonusText,
                                                    children: [
                                                        (0, r.jsx)(_.I, { variant: 'gift', size: 'xxs', className: N().giftIcon }),
                                                        (0, r.jsx)(l.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    U &&
                                        (0, r.jsxs)('div', {
                                            className: N().buttonContainer,
                                            children: [
                                                (0, r.jsx)(j.b, {
                                                    mainText: K,
                                                    ariaLabel: G,
                                                    mainTextFontSize: 'm',
                                                    ref: V,
                                                    onClick: $,
                                                    isShimmerActive: q,
                                                    isShimmerVisible: X,
                                                    color: 'primary',
                                                    className: N().button,
                                                    'data-intersection-property-id': k,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                Z &&
                                                    (0, r.jsx)(f.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': J,
                                                        className: N().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: Q,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, i.isValidElement)(A) && (0, r.jsx)('div', { className: N().logo, children: A }),
                        ],
                    });
                }),
                w = (0, i.forwardRef)((e, t) =>
                    (0, r.jsx)(x.r, { page: h.l.ENTITY_HEADER, places: [b.R.BOTTOM_BUTTON], children: (0, r.jsx)(H, { forwardRef: t, ...e }) }),
                );
        },
        65315: (e) => {
            e.exports = {
                root: 'PageHeaderConcert_root__zghAY',
                important: 'PageHeaderConcert_important__rx2pp',
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
                bottomContent: 'PageHeaderConcert_bottomContent__d5YKQ',
                overview: 'PageHeaderConcert_overview__vbGCy',
                overviewButton: 'PageHeaderConcert_overviewButton__sXecu',
                overviewMessage: 'PageHeaderConcert_overviewMessage__q95AL',
                overviewMessageModal: 'PageHeaderConcert_overviewMessageModal__OlUO6',
                overviewModal: 'PageHeaderConcert_overviewModal__6Ubd0',
            };
        },
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        85904: (e) => {
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
        88894: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => _ });
            var r = a(88800),
                o = a(65724),
                n = a(84961),
                i = a(53548),
                s = a(19994),
                l = a(72288),
                d = a(16472),
                c = a.n(d);
            let _ = (0, n.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: n } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, l.g)(),
                    _ = (0, i.useMemo)(
                        () =>
                            d
                                ? (0, r.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                      ],
                                  })
                                : (0, r.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, r.jsx)(s.W, { className: c().desktopPlayButton, isActive: n }),
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                          (0, r.jsx)(s.W, { className: c().button, radius: 'round', isActive: n }),
                                      ],
                                  }),
                        [n, d],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, o.$)(c().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: c().cover, radius: a, isActive: n }),
                        (0, r.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, r.jsx)(s.W, { className: c().entityName, radius: 's', isActive: n }),
                                        (0, r.jsx)(s.W, { className: c().title, radius: 'xl', isActive: n }),
                                        (0, r.jsx)(s.W, { className: c().meta, radius: 's', isActive: n }),
                                    ],
                                }),
                                _,
                            ],
                        }),
                    ],
                });
            });
        },
        95310: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 886));
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => n, UC: () => i, dM: () => s, uV: () => l });
            var r = a(89916),
                o = a(67990);
            let n = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof r.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4700, 7908, 1147, 4555, 2691, 5038, 7065, 3248, 1191, 7072, 505, 7750, 527, 4863, 9232, 3377, 9610, 2218, 1825, 893, 6252, 727, 3005, 8655, 7683, 6706,
                4771, 1311, 5201, 3075, 8832, 6904, 4495, 2058, 3578, 8628, 4827, 8283, 1800, 7746, 1223, 1848, 9907, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934,
                2470, 7670, 4441, 9337, 2088, 79, 818, 7053, 4322, 7934, 1372, 812, 6820, 9473, 1401, 2816, 4394, 5772, 763, 2670, 7358,
            ],
            () => e((e.s = 95310)),
        ),
            (_N_E = e.O()));
    },
]);
