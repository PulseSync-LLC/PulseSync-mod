(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7167],
    {
        7136: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => ey }));
            var a = r(25839),
                n = r(84059),
                o = r(88204),
                i = r(74631),
                s = r(59342),
                l = r(44031),
                d = r(61493),
                c = r(97762),
                _ = r(71035),
                u = r(72115),
                m = r(49656),
                g = r(13833),
                v = r(32113),
                p = r(10944),
                f = r(82298),
                x = r(39004),
                h = r(8487),
                b = r(14693),
                C = r(4071),
                j = r(4254),
                y = r(44129),
                N = r(7050),
                P = r(64407),
                T = r(83418),
                k = r(11148),
                H = r(88375),
                w = r(8650),
                E = r(52512),
                I = r(55491),
                O = r(25895),
                B = r(14240),
                L = r(66738),
                R = r(91149),
                S = r(92942),
                A = r(70849);
            let M = (0, o.PA)((e) => {
                let { className: t, size: r = 's', iconSize: n = 'xxs', withRipple: o, isDisabled: i, entityMeta: s, shareLink: l, onClick: c } = e,
                    { formatMessage: u } = (0, x.A)(),
                    { notify: m } = (0, S.l)(),
                    g = (0, _.c)(async () => {
                        (null == c || c(),
                            await window.navigator.clipboard.writeText(l),
                            m((0, a.jsx)(A.D, { entityVariant: s.variant, entityTitle: s.title }), { containerId: R.u.INFO }));
                    });
                return (0, a.jsx)(C.$, {
                    className: t,
                    variant: 'default',
                    color: 'secondary',
                    onClick: g,
                    'aria-label': u({ id: 'interface-actions.share' }),
                    size: r,
                    withRipple: o,
                    radius: 'round',
                    disabled: i,
                    icon: (0, a.jsx)(L.I, { variant: 'share', size: n }),
                    'data-test-id': d.S7.SHARE_BUTTON,
                });
            });
            var D = r(67379),
                W = r(20934),
                U = r(59450),
                z = r(26742),
                F = r(25195),
                $ = r(25488),
                V = r(97952),
                Y = r(72594),
                K = r(84e3),
                G = r(92543),
                Z = r(7784),
                Q = r(45985),
                q = r.n(Q);
            let J = (0, o.PA)((e) => {
                    var t;
                    let { className: r, forwardRef: n, onCoverClick: o, concert: s, leadArtistId: c, cover: u, description: g } = e,
                        { formatMessage: v, formatDate: p } = (0, x.A)(),
                        { state: L, toggleTrue: R, toggleFalse: S } = (0, b.e)(!1),
                        A = (() => {
                            let e = (0, K.U)(),
                                t = (0, U.st)(),
                                { hash: r } = (0, U.gf)(),
                                { pageId: a } = (0, V.$)(),
                                { tabId: n, tabPos: o, isTabSelectedByDefault: i } = (0, Y.R)(),
                                { blockType: s, blockId: l, blockPosX: d, blockPosY: c } = (0, z.N)(),
                                { objectType: u, objectsCount: m, objectId: g, objectPosX: v, objectPosY: p, mainObjectType: f, mainObjectId: x } = (0, $.J)();
                            return (0, _.c)((_, h) => {
                                if (!t || !a) return;
                                let b = (0, D.F)({
                                    params: {
                                        hash: r,
                                        pageId: a,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: d,
                                        entityPosY: c,
                                        objectsCount: m,
                                        viewUuid: h,
                                        objectType: u,
                                        objectId: g,
                                        objectPosX: v,
                                        objectPosY: p,
                                        mainObjectType: f,
                                        mainObjectId: x,
                                        tabId: n,
                                        tabPos: o,
                                        isTabSelectedByDefault: i,
                                    },
                                    logger: e,
                                    context: 'useSendEventOnHeaderConcertBlockShowedOrHidden',
                                });
                                b && (_ ? (0, W.lW)(t.evgenInstance, b) : (0, W.LZ)(t.evgenInstance, b));
                            });
                        })(),
                        Q = (() => {
                            let e = (0, U.st)(),
                                t = (0, K.U)(),
                                { hash: r } = (0, U.gf)(),
                                { pageId: a } = (0, V.$)(),
                                { tabId: n, tabPos: o, isTabSelectedByDefault: i } = (0, Y.R)(),
                                { offsetBlockPosY: s } = (0, F.u)(),
                                { blockId: l, blockType: d, blockPosX: c, blockPosY: u, mainObjectId: g, mainObjectType: v } = (0, z.N)(),
                                { objectId: p, objectPosX: f, objectPosY: x, objectType: h, objectsCount: b } = (0, $.J)(),
                                C = (0, m.L)(() => (void 0 !== s && void 0 !== u ? s + u : u));
                            return (0, _.c)((s) => {
                                let { to: _, objectId: u, objectType: m, deepLink: j } = s;
                                if (!e || !a) return;
                                let y = {
                                    hash: r,
                                    pageId: a,
                                    entityType: d,
                                    entityId: l,
                                    entityPosX: c,
                                    entityPosY: C,
                                    objectId: null != u ? u : p,
                                    objectType: null != m ? m : h,
                                    objectPosX: f,
                                    objectPosY: x,
                                    objectsCount: b,
                                    from: a,
                                    to: _,
                                    mainObjectType: v,
                                    mainObjectId: g,
                                    tabId: n,
                                    tabPos: o,
                                    isTabSelectedByDefault: i,
                                };
                                j && (y.deepLink = j);
                                let N = (0, D.F)({ params: y, logger: t, context: 'useSendEventOnHeaderConcertBlockNavigated' });
                                N && (0, W.iF)(e.evgenInstance, N);
                            });
                        })(),
                        { ref: J, intersectionPropertyId: X } = (0, E.n)({ callback: A, withViewUuid: !0 }),
                        ee = (() => {
                            let e = (0, U.st)(),
                                t = (0, K.U)(),
                                { hash: r } = (0, U.gf)(),
                                { pageId: a } = (0, V.$)(),
                                { tabId: n, tabPos: o, isTabSelectedByDefault: i } = (0, Y.R)(),
                                { blockId: s, blockType: d, blockPosX: c, blockPosY: u, objectsCount: m, mainObjectType: g, mainObjectId: v } = (0, z.N)();
                            return (0, _.c)(() => {
                                if (!e || !a) return;
                                let _ = {
                                        hash: r,
                                        pageId: a,
                                        tabId: n,
                                        tabPos: o,
                                        entityType: d,
                                        mainObjectType: g,
                                        mainObjectId: v,
                                        entityId: s,
                                        entityPosX: c,
                                        entityPosY: u,
                                        isTabSelectedByDefault: i,
                                        objectsCount: m,
                                        pagePlacement: l.PagePlacements.Fullscreen,
                                        pageStyle: l.PageStyles.Fullscreen,
                                    },
                                    p = (0, D.F)({ params: _, logger: t, context: 'useSendEventOnHeaderConcertLandingBlockLoaded' });
                                p && (0, W.es)(e.evgenInstance, p);
                            });
                        })(),
                        et = (0, i.useRef)(!1),
                        er = (0, N.Y)()(s);
                    (0, i.useEffect)(() => {
                        et.current || (ee(), (et.current = !0));
                    }, [ee]);
                    let ea = (0, _.c)((e) => {
                            (R(), null == e || e.stopPropagation());
                        }),
                        en = (0, _.c)((e) => {
                            (Q({ to: l.AppScreen.ConcertPurchaseScreen }), ea(e), e.preventDefault());
                        }),
                        eo = (0, _.c)(() => {
                            Q({ to: l.AppScreen.ShareScreen });
                        }),
                        ei = (0, _.c)(() => {
                            Q({ to: l.AppScreen.ArtistScreen });
                        }),
                        { shareLink: es, pathname: el } = (0, B.b)('/concert/:concertId', { params: { concertId: s.id } }),
                        ed = { variant: I.Y.CONCERT, id: s.id, title: null != (t = s.title) ? t : '', path: el },
                        ec = (0, m.L)(() =>
                            s.isIdentityExperimentEnabled
                                ? (0, a.jsxs)('div', {
                                      children: [
                                          (0, a.jsx)(j.HL, { className: q().buttonPrice, variant: 'div', size: 'l', weight: 'medium', children: er }),
                                          s.cashbackValuePercent &&
                                              (0, a.jsx)(j.HL, {
                                                  className: q().buttonCashback,
                                                  variant: 'div',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, a.jsx)(h.A, { id: 'entity-names.cashback-percent', values: { value: s.cashbackValuePercent } }),
                                              }),
                                      ],
                                  })
                                : er,
                        ),
                        e_ = (0, m.L)(() => {
                            let e = s.isIdentityExperimentEnabled ? 'l' : 's',
                                t = s.isIdentityExperimentEnabled ? 'm' : 'xxs';
                            return (0, a.jsxs)('div', {
                                className: q().controls,
                                children: [
                                    (0, a.jsx)(C.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: (0, f.$)(q().button, { [q().button_redesigned]: s.isIdentityExperimentEnabled }),
                                        size: 's',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: en,
                                        'data-test-id': d.e8.pageHeader.CONCERT_BUY_TICKET_BUTTON,
                                        children: ec,
                                    }),
                                    (0, a.jsx)(M, { onClick: eo, shareLink: es, entityMeta: ed, size: e, iconSize: t }),
                                ],
                            });
                        }),
                        eu = (0, i.useMemo)(() => {
                            var e;
                            return [
                                s.city,
                                s.place,
                                p(new Date(null != (e = s.datetime) ? e : ''), { day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' }),
                                s.contentRating,
                            ]
                                .filter(Boolean)
                                .join(' • ');
                        }, [s.city, s.place, s.datetime, s.contentRating, p]),
                        em = (0, m.L)(() => {
                            if (!g) return;
                            let e = {
                                    title:
                                        s.isIdentityExperimentEnabled && s.eventKind
                                            ? v({ id: 'concerts.about-event-kind' }, { kind: s.eventKind })
                                            : v({ id: 'track-modal.concert-title' }),
                                    message: g.text,
                                    isExpandable: !0,
                                    visibleLinesCount: 3,
                                },
                                t = (0, m.L)(() => {
                                    if (!g.genre) return;
                                    let e = (0, a.jsx)(w.D, { children: g.genre });
                                    return (0, a.jsx)(H.O, {
                                        title: v({ id: 'track-modal.genre' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_GENRE_INFO_BLOCK,
                                    });
                                }),
                                r = (0, m.L)(() => {
                                    if (!s.contentRating) return;
                                    let e = (0, a.jsx)(w.D, { children: s.contentRating });
                                    return (0, a.jsx)(H.O, {
                                        title: v({ id: 'track-modal.content-rating' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_CONTENT_RATING_INFO_BLOCK,
                                    });
                                }),
                                n = (0, m.L)(() => {
                                    if (!g.source) return;
                                    let e = (0, a.jsx)(w.D, { children: g.source });
                                    return (0, a.jsx)(H.O, {
                                        title: v({ id: 'track-modal.source' }),
                                        infoDescription: e,
                                        'data-test-id': d.e8.pageHeader.CONCERT_SOURCE_INFO_BLOCK,
                                    });
                                }),
                                o = (0, a.jsxs)('div', { className: q().bottomContent, children: [t, r, n] });
                            return (0, a.jsx)('div', {
                                className: q().overview,
                                'data-test-id': d.e8.landing.OVERVIEW,
                                children: (0, a.jsx)(y.F, {
                                    modalClassName: (0, f.$)(q().overviewModal, q().important),
                                    textButton: v({ id: 'interface-actions.more-details' }),
                                    buttonClassName: (0, f.$)(q().overviewButton, q().important),
                                    messageModalClassName: q().overviewMessageModal,
                                    messageClassName: q().overviewMessage,
                                    creditsModal: o,
                                    meta: e,
                                    withShowButton: !0,
                                }),
                            });
                        }),
                        eg = (0, i.useMemo)(
                            () =>
                                (0, a.jsxs)('div', {
                                    className: q().meta,
                                    children: [
                                        eu &&
                                            (0, a.jsx)(j.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                'data-test-id': d.e8.pageHeader.CONCERT_META_INFO,
                                                children: eu,
                                            }),
                                        !s.isIdentityExperimentEnabled && s.cashbackTitle && (0, a.jsx)(T.m, { className: q().cashbackBadge, title: s.cashbackTitle }),
                                        em,
                                    ],
                                }),
                            [s.cashbackTitle, s.isIdentityExperimentEnabled, eu, em],
                        ),
                        ev = (0, m.L)(() => {
                            if (!c) return;
                            let { href: e } = (0, O.u)('/artist/:artistId', { params: { artistId: c } });
                            return e;
                        }),
                        ep = s.isIdentityExperimentEnabled && s.eventKind ? v({ id: 'concerts.event-kind' }, { kind: s.eventKind }) : '';
                    return (0, a.jsxs)('div', {
                        ref: J,
                        'data-intersection-property-id': X,
                        className: q().root,
                        children: [
                            (0, a.jsx)(G.k, {
                                onTitleLinkClick: ei,
                                linkTitle: ev,
                                ref: n,
                                className: (0, f.$)(r, q().root),
                                infoClassName: q().info,
                                titleClassName: q().title,
                                entityName: ep,
                                title: s.title || '',
                                meta: eg,
                                coverCellClassName: q().coverCell,
                                cover: (0, a.jsx)(Z.I, {
                                    buttonClassName: (0, f.$)(q().coverButton, q().important),
                                    className: q().cover,
                                    onClick: o,
                                    'aria-label': o ? v({ id: 'slider.view-concert-covers' }) : void 0,
                                    customCover: (0, a.jsx)(k.W, {
                                        datetime: s.datetime,
                                        coverColor: null == u ? void 0 : u.color,
                                        uri: null == u ? void 0 : u.uri,
                                        withMask: !0,
                                    }),
                                }),
                                controls: e_,
                                headingVariant: 'h1',
                            }),
                            (0, a.jsx)(P.h, { dataSessionId: s.dataSessionId, isOpened: L, onOpen: R, onClose: S }),
                        ],
                    });
                }),
                X = (0, i.forwardRef)((e, t) => (0, a.jsx)(J, { forwardRef: t, ...e }));
            var ee = r(64715),
                et = r(59911),
                er = r(1407),
                ea = r(20258),
                en = r(22293),
                eo = r(57138),
                ei = r(95858),
                es = r(95314),
                el = r(10322),
                ed = r(39058),
                ec = r(58509),
                e_ = r(89192),
                eu = r(30716),
                em = r(27954),
                eg = r(44806),
                ev = r(99401),
                ep = r(26076),
                ef = r(10603),
                ex = r(87277),
                eh = r(59532),
                eb = r.n(eh);
            let eC = (0, o.PA)((e) => {
                    var t, r, o;
                    let { concertId: f } = e,
                        {
                            experiments: x,
                            concert: h,
                            modals: { imageSliderModal: b },
                        } = (0, em.g)(),
                        C = ((e) => {
                            let t = (0, U.st)(),
                                r = (0, K.U)(),
                                { pageId: a } = (0, V.$)(),
                                { hash: n } = (0, U.gf)();
                            return (0, _.c)((o, i) => {
                                if (!t || !a) return;
                                let s = {
                                        hash: n,
                                        pageId: a,
                                        pageStyle: l.PageStyles.Fullscreen,
                                        pagePlacement: l.PagePlacements.Fullscreen,
                                        viewUuid: i,
                                        mainObjectType: l.DomainObjectType.Concert,
                                        mainObjectId: e,
                                    },
                                    d = (0, D.F)({ params: s, logger: r, context: 'useSendEventOnConcertOpenedOrClosed' });
                                d && (o ? (0, ex.Fn)(t.evgenInstance, d) : (0, ex.PO)(t.evgenInstance, d));
                            });
                        })(f),
                        j = (0, i.useRef)(String((0, s.A)())),
                        { setContentScrollRef: y, contentScrollRef: N } = (0, e_.g)(),
                        { forceUpdateRefCallback: P, offsetY: T } = (0, u.G)(N),
                        k = (0, ec.y)(null == (r = h.covers) || null == (t = r[0]) ? void 0 : t.color),
                        { topColorStyle: H, headerStyle: w } = (0, et.Q)(k, T),
                        E = (0, _.c)(() => {
                            h.coversUri.length > 0 && b.openImages({ images: h.coversUri, sizeImage: 800, withAspectRatio: !1 });
                        }),
                        I = x.checkExperiment(eg.z.WebNextConcertPage, 'on');
                    ((0, en.A)(),
                        (0, i.useEffect)(
                            () => () => {
                                h.reset();
                            },
                            [h, f],
                        ),
                        (0, i.useEffect)(() => {
                            let e = j.current;
                            return (
                                C(!0, e),
                                () => {
                                    C(!1, e);
                                }
                            );
                        }, [C]),
                        (0, eu.J)(h.isResolved));
                    let O = [];
                    if (
                        (h.isNeededToLoad && O.push(h.getInfo({ concertId: f })),
                        h.landing.isNeededToLoad && O.push(h.landing.getConcertSkeleton({ concertId: f, skeletonId: c.p.CONCERT_PAGE }, { preloadBlocksCount: 2 })),
                        O.length && (0, i.use)(Promise.allSettled(O)),
                        (!I || h.isNotFound) && (0, n.notFound)(),
                        h.isRejected)
                    )
                        return (0, a.jsx)(ee.SomethingWentWrong, {});
                    let B = (0, m.L)(() => {
                        var e, t, r;
                        return h.isLoading || !h.meta || h.isRejected
                            ? (0, a.jsx)(p.c, { className: eb().header, isActive: !0 })
                            : (0, a.jsx)(es.B, {
                                  objectType: l.DomainObjectType.Concert,
                                  objectId: null == (e = h.meta) ? void 0 : e.id,
                                  objectPosX: 1,
                                  objectPosY: 1,
                                  objectsCount: 1,
                                  mainObjectType: l.DomainObjectType.Concert,
                                  mainObjectId: null == (t = h.meta) ? void 0 : t.id,
                                  children: (0, a.jsx)(X, {
                                      description: h.description,
                                      onCoverClick: E,
                                      leadArtistId: h.leadArtistId,
                                      ref: P,
                                      className: eb().header,
                                      concert: h.meta,
                                      cover: null == (r = h.covers) ? void 0 : r[0],
                                  }),
                              });
                    });
                    return (0, a.jsx)(ei.j, {
                        children: (0, a.jsxs)(er.h, {
                            scrollElement: N,
                            children: [
                                (0, a.jsx)(ef.Y, { style: w, variant: ef.V.INNER, showControls: !1 }),
                                (0, a.jsx)('div', { className: eb().averageColorBackground, style: H }),
                                (0, a.jsxs)(g.N, {
                                    ref: y,
                                    className: eb().root,
                                    containerClassName: eb().container,
                                    'data-test-id': d.Xk.concert.CONCERT_PAGE,
                                    children: [
                                        (0, a.jsxs)('div', {
                                            children: [
                                                (0, a.jsx)(ed.h, {
                                                    tabId: '',
                                                    tabPos: 0,
                                                    isTabSelectedByDefault: !1,
                                                    children: (0, a.jsx)(eo.F, {
                                                        blockId: l.EntityTypes.ConcertHeader,
                                                        blockType: l.EntityTypes.ConcertHeader,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: l.DomainObjectType.Concert,
                                                        mainObjectId: null == (o = h.meta) ? void 0 : o.id,
                                                        children: B,
                                                    }),
                                                }),
                                                (0, a.jsx)(v.E, {
                                                    containerClassName: eb().skeleton,
                                                    landing: h.landing,
                                                    errorComponent: (0, a.jsx)(ee.SomethingWentWrong, { className: eb().error, withBackwardControl: !1 }),
                                                }),
                                            ],
                                        }),
                                        (0, a.jsx)(ep.A, { children: (0, a.jsx)(ev.w, { className: eb().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    });
                }),
                ej = (0, o.PA)((e) => (0, a.jsx)(el.n, { pageId: ea._Q.CONCERT, pageEntityId: e.concertId, children: (0, a.jsx)(eC, { ...e }) })),
                ey = () => {
                    let e = (0, n.useSearchParams)().get('concertId');
                    return (e || (0, n.notFound)(), (0, a.jsx)(ej, { concertId: e }));
                };
        },
        7784: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => u });
            var a = r(25839),
                n = r(82298),
                o = r(61493),
                i = r(4071),
                s = r(66738),
                l = r(86869),
                d = r(6323),
                c = r(93222),
                _ = r.n(c);
            let u = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: c, className: u, withPlusBadge: m, onClick: g, 'aria-label': v, customCover: p, buttonClassName: f } = e;
                return (0, a.jsxs)(l.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, n.$)(_().root, u, { [_().root_hoverable]: !!g }),
                    children: [
                        (0, a.jsx)(i.$, {
                            className: (0, n.$)(_().coverButton, f),
                            onClick: g,
                            'aria-label': v,
                            tabIndex: g ? 0 : -1,
                            disabled: !g,
                            'data-test-id': o.S7.ENTITY_COVER_BUTTON,
                            children: p || (0, a.jsx)(d.B, { fit: 'cover', src: r, size: 300, className: _().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        m && (0, a.jsx)(s.I, { variant: 'plusBadge', className: _().plusBadge }),
                    ],
                });
            };
        },
        8650: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => c });
            var a = r(25839),
                n = r(88204),
                o = r(4254),
                i = r(27954),
                s = r(97522),
                l = r(88293),
                d = r.n(l);
            let c = (0, n.PA)((e) => {
                let { children: t, href: r, className: n } = e,
                    {
                        currentTrackInfo: { modal: l },
                    } = (0, i.g)();
                return r
                    ? (0, a.jsx)(s.N, {
                          className: d().link,
                          href: r,
                          onClick: l.close,
                          children: (0, a.jsx)(o.HL, { className: n, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, a.jsx)(o.HL, { className: n, variant: 'div', size: 'l', children: t });
            });
        },
        10944: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => _ });
            var a = r(25839),
                n = r(82298),
                o = r(88204),
                i = r(74631),
                s = r(23976),
                l = r(27954),
                d = r(56918),
                c = r.n(d);
            let _ = (0, o.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: o } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, l.g)(),
                    _ = (0, i.useMemo)(
                        () =>
                            d
                                ? (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                      ],
                                  })
                                : (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().desktopPlayButton, isActive: o }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: o }),
                                      ],
                                  }),
                        [o, d],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(c().root, t),
                    children: [
                        (0, a.jsx)(s.W, { className: c().cover, radius: r, isActive: o }),
                        (0, a.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, a.jsx)(s.W, { className: c().entityName, radius: 's', isActive: o }),
                                        (0, a.jsx)(s.W, { className: c().title, radius: 'xl', isActive: o }),
                                        (0, a.jsx)(s.W, { className: c().meta, radius: 's', isActive: o }),
                                    ],
                                }),
                                _,
                            ],
                        }),
                    ],
                });
            });
        },
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var a = r(25839),
                n = r(84059),
                o = r(8487),
                i = r(61493),
                s = r(71035),
                l = r(4071),
                d = r(4254),
                c = r(57024),
                _ = r(36484),
                u = r(62562);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', color: m = 'primary', withRipple: g = !0, buttonText: v, isBlock: p, key: f, className: x } = e,
                    h = (0, n.useRouter)(),
                    b = (0, u.N)().get(_.QG),
                    C = (0, s.c)(() => {
                        b.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(b.authorizationUrl));
                    });
                return (0, a.jsx)(
                    l.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: p,
                        color: m,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: g,
                        'data-test-id': i.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        22293: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var a = r(74631),
                n = r(67379),
                o = r(44031),
                i = r(87277),
                s = r(59450),
                l = r(71035),
                d = r(84e3),
                c = r(79670),
                _ = r(97952);
            let u = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    r = (0, s.st)(),
                    u = (0, d.U)(),
                    { hash: m } = (0, s.gf)(),
                    { pageId: g } = (0, _.$)(),
                    v = (0, l.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !r ||
                            !g ||
                            !m ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[g];
                        if (!t) return;
                        let a = {
                                hash: m,
                                pageId: o.AppScreen.Link,
                                entityType: o.EntityTypes.Deeplink,
                                entityId: o.EntityTypes.Deeplink,
                                from: o.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, n.F)({ params: a, logger: u, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, i.ID)(r.evgenInstance, s);
                    });
                return (
                    (0, a.useEffect)(() => {
                        t && v();
                    }, [t, v]),
                    (0, l.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || v({ deepLink: e });
                    })
                );
            };
        },
        45985: (e) => {
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
        50362: (e) => {
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
        51526: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 7136));
        },
        56918: (e) => {
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
        57024: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => o, UC: () => i, dM: () => s, uV: () => l });
            var a = r(93690),
                n = r(58848);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                i = (e) => (e.uid ? 'authorized' : 'no-uid'),
                s = (e) => {
                    if (!(e instanceof a.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
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
        58509: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => i });
            var a = r(89288),
                n = r(49337),
                o = r(96618);
            let i = (e) => {
                let { theme: t } = (0, o.W)();
                if (e) {
                    let { r, g: o, b: i } = (0, a.E2)(e),
                        s = t === n.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(o, ', ').concat(i, ', ').concat(s, ')');
                }
            };
        },
        58848: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        59532: (e) => {
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
        59884: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => j });
            var a = r(25839),
                n = r(82298),
                o = r(88204),
                i = r(74631),
                s = r(39004),
                l = r(61493),
                d = r(71035),
                c = r(49656),
                _ = r(4071),
                u = r(66738),
                m = r(4254),
                g = r(27625);
            let v = (e) => {
                let { children: t, title: r, className: n } = e,
                    { setTitleElement: o, setTitle: s } = (0, i.useContext)(g.B),
                    l = (0, i.useRef)(null);
                return (
                    (0, i.useEffect)(() => {
                        ((null == l ? void 0 : l.current) && o(l), r && s(r));
                    }, [l, r, o, s]),
                    (0, i.useEffect)(
                        () => () => {
                            s('');
                        },
                        [s],
                    ),
                    (0, a.jsx)('div', { ref: l, className: n, children: t })
                );
            };
            var p = r(85686),
                f = r(27954),
                x = r(97522),
                h = r(72720),
                b = r(50362),
                C = r.n(b);
            let j = (0, o.PA)((e) => {
                let {
                        title: t = '',
                        'aria-labelledby': r,
                        canChange: o = !1,
                        onChange: g,
                        maxTitleLength: b,
                        version: j = '',
                        onVersionClick: y,
                        className: N,
                        headingVariant: P = 'h2',
                        withHeadingClamp: T = !0,
                        link: k,
                        onTitleLinkClick: H,
                    } = e,
                    {
                        settings: { isMobile: w },
                    } = (0, f.g)(),
                    { formatMessage: E } = (0, s.A)(),
                    [I, O] = (0, i.useState)(!1),
                    B = (0, i.useRef)(null),
                    L = t.length + j.length > 25,
                    R = (0, p.Z)(null != k ? k : ''),
                    S = (0, d.c)((e) => {
                        (null == H || H(), R(e));
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
                    M = !w && o && I,
                    D = (0, i.useCallback)(() => {
                        var e;
                        (O(!0), null == (e = B.current) || e.focus());
                    }, []),
                    W = (0, i.useCallback)(
                        (e) => {
                            (O(!1), null == g || g(e));
                        },
                        [g],
                    ),
                    U = (0, c.L)(() =>
                        (0, a.jsx)('span', {
                            className: (0, n.$)(C().arrowWrapper, A.iconLink),
                            children: (0, a.jsx)(u.I, { className: C().titleWithLinkIcon, size: 'xs', variant: 'arrowRight' }),
                        }),
                    ),
                    z = (0, c.L)(() =>
                        (0, a.jsxs)(m.DZ, {
                            variant: P,
                            id: r,
                            lineClamp: w && T ? 2 : void 0,
                            className: (0, n.$)(C().heading, { [C().heading_withVersion]: j }),
                            'data-test-id': l.e8.pageHeader.ENTITY_TITLE,
                            children: [
                                (0, a.jsx)(m.HL, { className: (0, n.$)(C().font, A.font, C().title), variant: 'span', children: t }),
                                j &&
                                    (0, a.jsx)(m.HL, {
                                        onClick: y,
                                        className: (0, n.$)(C().font, A.font, C().version, { [C().version_withOtherVersions]: y }),
                                        variant: 'span',
                                        'data-test-id': l.e8.pageHeader.ENTITY_VERSION,
                                        children: ' '.concat(j),
                                    }),
                                k && !w && U,
                            ],
                        }),
                    ),
                    F = (0, c.L)(() =>
                        k
                            ? (0, a.jsxs)(x.N, {
                                  className: C().titleWithLink,
                                  containerClassName: C().linkContainer,
                                  textClassName: C().linkText,
                                  href: k,
                                  onClick: S,
                                  children: [z, w && U],
                              })
                            : z,
                    );
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        !M &&
                            (0, a.jsxs)('div', {
                                className: (0, n.$)(C().root, N),
                                children: [
                                    (0, a.jsx)(v, { title: t, className: C().stickyTitle, children: F }),
                                    o &&
                                        (0, a.jsx)('div', {
                                            className: (0, n.$)(C().editButton, { [C().editButton_centered]: !L && !w }),
                                            children: (0, a.jsx)(_.$, {
                                                onClick: D,
                                                'aria-label': E({ id: 'playlist-actions.change-title' }),
                                                icon: (0, a.jsx)(u.I, { size: 'xxs', variant: 'pencil' }),
                                                size: 's',
                                                radius: 'round',
                                                'data-test-id': l.e8.pageHeader.EDIT_TITLE_BUTTON,
                                            }),
                                        }),
                                ],
                            }),
                        M &&
                            (0, a.jsx)('div', {
                                className: C().textFieldContainer,
                                children: (0, a.jsx)(h.A, {
                                    text: t,
                                    className: (0, n.$)(C().font, A.font, C().textField, C().title, { [C().textField_long]: L && !w }),
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
        59911: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => n });
            var a = r(74631);
            let n = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        63966: (e) => {
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
        72115: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                n = r(6274),
                o = r(74631),
                i = {
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let a = r(352),
                            n = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: o } = e,
                                i = (0, n.useRef)(null),
                                [s, l] = (0, n.useState)(!!r),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            (l(!r),
                                                i.current && window.clearTimeout(i.current),
                                                (i.current = window.setTimeout(() => {
                                                    l(!!r);
                                                }, t)));
                                        }, o),
                                    [t, r, o],
                                ),
                                c = (0, n.useCallback)(() => {
                                    (l(!!r), i.current && window.clearTimeout(i.current));
                                }, [r]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        i.current && window.clearTimeout(i.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let a = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, a.useState)(null);
                            return [
                                e,
                                (0, a.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let a = r(810),
                            n = r(1848),
                            o = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: i } = e,
                                { state: s, handleDebouncedToggle: l } = (0, o.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, a.useCallback)(() => {
                                    (r && l(), null == t || t());
                                }, [r, l, t]);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (0, n.getElementFromRefOrElement)(i);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, r), () => t.removeEventListener('scroll', d, r));
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
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(o, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (i[e](r, r.exports, l), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = l(810),
                    t = l(3830),
                    r = l(3940);
                d.useElementOffsetY = (a) => {
                    let [n, o] = (0, r.useForceUpdateRef)(),
                        [i, s] = (0, e.useState)(),
                        l = (0, e.useCallback)(() => {
                            let e = null == n ? void 0 : n.getBoundingClientRect();
                            e && s(e.y);
                        }, [n]);
                    return ((0, e.useLayoutEffect)(l), (0, t.useScroll)({ onScroll: l, elementRef: a }), { forceUpdateRefCallback: o, offsetY: i });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        88293: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        88375: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => d });
            var a = r(25839),
                n = r(82298),
                o = r(89288),
                i = r(4254),
                s = r(88293),
                l = r.n(s);
            let d = (e) => {
                let { title: t, className: r, titleClassName: s, infoDescription: d, ...c } = e;
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(l().root, r),
                    ...(0, o.OZ)(c),
                    children: [t && (0, a.jsx)(i.DZ, { variant: 'h4', className: (0, n.$)(l().infoTitle, s), children: t }), d],
                });
            };
        },
        92543: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => w });
            var a = r(25839),
                n = r(82298),
                o = r(88204),
                i = r(74631),
                s = r.t(i, 2),
                l = r(8487),
                d = r(61493),
                c = r(68934),
                _ = r(66738),
                u = {
                    5881: (e, t, r) => {
                        function a() {
                            for (var e, t, r = 0, a = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            a,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (a = e(t[r])) && (n && (n += ' '), (n += a));
                                            else for (r in t) t[r] && (n && (n += ' '), (n += r));
                                        return n;
                                    })(e)) &&
                                    (a && (a += ' '), (a += t));
                            return a;
                        }
                        (r.r(t), r.d(t, { clsx: () => a, default: () => n }));
                        let n = a;
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
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
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => a }));
                        let a = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function a(e, t, a) {
                            var n = null;
                            if ((void 0 !== a && (n = '' + a), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var o in ((a = {}), t)) 'key' !== o && (a[o] = t[o]);
                            else a = t;
                            return { $$typeof: r, type: e, key: n, ref: void 0 !== (t = a.ref) ? t : null, props: a };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = a), (t.jsxs = a));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    2018: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let n = r(4377),
                            o = r(5881),
                            i = r(8903),
                            s = a(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: a = 's', ...l } = e;
                            return (0, n.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: a,
                                lineClamp: 1,
                                className: (0, o.clsx)(s.default.root, r),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    3412: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let n = r(4377),
                            o = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = a(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: a = 'text', size: i = 's', className: d, children: c, weight: _ = 'medium', ...u } = e;
                            return (0, n.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(l.default.root, l.default['root_'.concat(a, '_').concat(i)], l.default['root_weight_'.concat(_)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let n = r(4377),
                            o = r(5881),
                            i = r(810),
                            s = r(5987),
                            l = a(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: a = 'bold', size: i = 's', className: d, children: c, ..._ } = e;
                            return (0, n.jsx)(s.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, o.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(a)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, n.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var a =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let n = r(4377),
                            o = r(5881),
                            i = r(810),
                            s = a(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: a, children: i, variant: l, lineClamp: d, ...c } = e,
                                _ = d && 'string' == typeof i ? i : void 0;
                            return (0, n.jsx)(l, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: _,
                                className: (0, o.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    a,
                                ),
                                ...c,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var a = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return a.Caption;
                            },
                        });
                        var n = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return n.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = s;
                    },
                },
                m = {};
            function g(e) {
                var t = m[e];
                if (void 0 !== t) return t.exports;
                var r = (m[e] = { exports: {} });
                return (u[e].call(r.exports, r, r.exports, g), r.exports);
            }
            ((g.d = (e, t) => {
                for (var r in t) g.o(t, r) && !g.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (g.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (g.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var v = {};
            (() => {
                (Object.defineProperty(v, '__esModule', { value: !0 }), (v.Label = void 0));
                var e = g(2018);
                Object.defineProperty(v, 'Label', {
                    enumerable: !0,
                    get: function () {
                        return e.Label;
                    },
                });
            })();
            var p = v.Label;
            v.__esModule;
            var f = r(4254),
                x = r(38656),
                h = r(68406),
                b = r(5180),
                C = r(97828),
                j = r(14797),
                y = r(16978),
                N = r(63966),
                P = r.n(N),
                T = r(59884);
            let k = 'entity-header-block-controls',
                H = (0, o.PA)((e) => {
                    let {
                            'aria-labelledby': t,
                            entityName: r,
                            title: o,
                            meta: s,
                            controls: u,
                            className: m,
                            forwardRef: g,
                            canChangeTitle: v = !1,
                            maxTitleLength: x,
                            onTitleChange: h,
                            cover: b,
                            version: N,
                            onVersionClick: H,
                            disclaimerLabel: w,
                            entityNameIcon: E,
                            headingVariant: I,
                            titleClassName: O,
                            metaClassName: B,
                            contentClassName: L,
                            withHeadingClamp: R,
                            entityNameClassName: S,
                            logo: A,
                            coverCellClassName: M,
                            infoClassName: D,
                            linkTitle: W,
                            onTitleLinkClick: U,
                            showMobileLoginButton: z,
                            showMobileSubscriptionButton: F,
                        } = e,
                        [$, V] = (0, c.d)(),
                        {
                            openPaymentWidgetModal: Y,
                            mainText: K,
                            mainTextA11y: G,
                            isShimmerActive: Z,
                            isShimmerVisible: Q,
                            oneClickAvailable: q,
                            oneClickDisclaimerText: J,
                            oneClickDisclaimerTextA11y: X,
                        } = (0, C.D)({ storeName: 'music', isEnabled: !!F, offerElement: { element: $, intersectionPropertyId: k } }),
                        ee = (0, i.useMemo)(
                            () =>
                                w
                                    ? (0, a.jsx)('div', {
                                          className: P().entityContainer,
                                          children: (0, a.jsx)(p, {
                                              size: 'm',
                                              className: P().disclaimerLabel,
                                              'data-test-id': d.e8.pageHeader.DISCLAIMER_LABEL,
                                              children: w,
                                          }),
                                      })
                                    : (0, a.jsxs)(f.HL, {
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'medium',
                                          className: (0, n.$)(P().entityName, S),
                                          'data-test-id': d.e8.pageHeader.ENTITY_NAME,
                                          children: [r, E],
                                      }),
                            [w, r, S, E],
                        );
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(
                            P().root,
                            { [P().root_withCover]: (0, i.isValidElement)(b), [P().root_withCoverAndLogo]: (0, i.isValidElement)(A) && (0, i.isValidElement)(b) },
                            m,
                        ),
                        ref: g,
                        'data-test-id': d.e8.pageHeader.ENTITY_HEADER,
                        children: [
                            b && (0, a.jsx)('div', { className: (0, n.$)(P().coverCell, M), children: b }),
                            (0, a.jsxs)('div', {
                                className: (0, n.$)(P().content, L),
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: (0, n.$)(P().info, D),
                                        children: [
                                            ee,
                                            (0, a.jsx)(T.R, {
                                                onTitleLinkClick: U,
                                                link: W,
                                                className: (0, n.$)(P().title, O, { [P().title_withDisclaimerLabel]: !!w }),
                                                title: o,
                                                'aria-labelledby': t,
                                                canChange: v,
                                                maxTitleLength: x,
                                                onChange: h,
                                                version: N,
                                                onVersionClick: H,
                                                headingVariant: I,
                                                withHeadingClamp: R,
                                            }),
                                            !!s && (0, a.jsx)('div', { className: (0, n.$)(P().meta, { [P().meta_withDisclaimerLabel]: !!w }, B), children: s }),
                                        ],
                                    }),
                                    (0, a.jsx)('div', { className: P().controls, 'data-test-id': d.e8.pageHeader.BASE_PAGE_HEADER_CONTROLS, children: u }),
                                    z &&
                                        (0, a.jsxs)('div', {
                                            className: P().buttonContainer,
                                            children: [
                                                (0, a.jsx)(y.H, {
                                                    size: 'l',
                                                    variant: 'default',
                                                    buttonText: (0, a.jsx)(l.A, { id: 'authorization.enter-and-listen-button' }),
                                                    className: P().loginButton,
                                                    'data-test-id': d.e8.pageHeader.UNAUTHORIZED_BUTTON,
                                                }),
                                                (0, a.jsxs)(f.HL, {
                                                    variant: 'div',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: P().bonusText,
                                                    children: [
                                                        (0, a.jsx)(_.I, { variant: 'gift', size: 'xxs', className: P().giftIcon }),
                                                        (0, a.jsx)(l.A, { id: 'payment.learn-personal-bonus' }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    F &&
                                        (0, a.jsxs)('div', {
                                            className: P().buttonContainer,
                                            children: [
                                                (0, a.jsx)(j.b, {
                                                    mainText: K,
                                                    ariaLabel: G,
                                                    mainTextFontSize: 'm',
                                                    ref: V,
                                                    onClick: Y,
                                                    isShimmerActive: Z,
                                                    isShimmerVisible: Q,
                                                    color: 'primary',
                                                    className: P().button,
                                                    'data-intersection-property-id': k,
                                                    'data-test-id': d.e8.pageHeader.FREEMIUM_BUTTON,
                                                }),
                                                q &&
                                                    (0, a.jsx)(f.HL, {
                                                        variant: 'div',
                                                        size: 's',
                                                        weight: 'normal',
                                                        'aria-label': X,
                                                        className: P().oneClickDisclaimerText,
                                                        'data-test-id': d.e8.pageHeader.DISCLAIMER_TEXT,
                                                        children: J,
                                                    }),
                                            ],
                                        }),
                                ],
                            }),
                            (0, i.isValidElement)(A) && (0, a.jsx)('div', { className: P().logo, children: A }),
                        ],
                    });
                }),
                w = (0, i.forwardRef)((e, t) =>
                    (0, a.jsx)(x.r, { page: h.l.ENTITY_HEADER, places: [b.R.BOTTOM_BUTTON], children: (0, a.jsx)(H, { forwardRef: t, ...e }) }),
                );
        },
        93222: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8451, 1583, 8561, 7055, 6287, 3112, 2e3, 5128, 740, 7339, 3472, 2121, 1632, 5743, 3084, 3021, 5058, 6170, 9468, 364, 3397, 1886, 2767, 2175, 6706,
                4771, 1311, 5201, 8398, 260, 6702, 9004, 7511, 7839, 3595, 9286, 1251, 1817, 6215, 6906, 2038, 4163, 3246, 7848, 3482, 6680, 2247, 7856, 8836, 820, 4434,
                8649, 862, 6361, 5898, 1808, 8222, 5232, 4932, 5622, 3268, 2445, 5853, 4018, 4475, 5056, 7358,
            ],
            () => e((e.s = 51526)),
        ),
            (_N_E = e.O()));
    },
]);
