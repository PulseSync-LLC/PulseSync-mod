(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1468],
    {
        1220: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { $: () => a }),
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
                })(a || (a = {})));
        },
        3685: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => i });
            var a = r(53548);
            let i = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        6473: (e) => {
            e.exports = {
                root: 'ArtistPage_root__QPg3p',
                averageColorBackground: 'ArtistPage_averageColorBackground__wXTSY',
                header: 'ArtistPage_header__tQnNe',
                content: 'ArtistPage_content__iZHVN',
                footer: 'ArtistPage_footer__8m6P9',
                carouselBlockHeader: 'ArtistPage_carouselBlockHeader__CtGDa',
                concertsBlock: 'ArtistPage_concertsBlock__1BfM8',
                carouselBlock: 'ArtistPage_carouselBlock__7tYRK',
            };
        },
        6668: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => l });
            var a = r(53548),
                i = r(29993);
            let l = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        7628: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => v });
            var a = r(88800),
                i = r(88969),
                l = r(58390),
                o = r(17392),
                n = r(29993),
                s = r(96817),
                d = r(29504),
                c = r(99890),
                u = r(4086),
                m = r(41928);
            let v = (e) => {
                let { size: t = 'm', variant: r = 'default', color: v = 'primary', withRipple: _ = !0, buttonText: f, isBlock: g, key: x, className: p } = e,
                    h = (0, l.useRouter)(),
                    A = (0, m.N)().get(u.QG),
                    b = (0, n.c)(() => {
                        A.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(A.authorizationUrl));
                    });
                return (0, a.jsx)(
                    s.$,
                    {
                        onClick: b,
                        className: p,
                        isBlock: g,
                        color: v,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        13012: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(19049);
            function i(e, t) {
                var r;
                return (0, a.Y)(e, null != (r = null == t ? void 0 : t.maxLength) ? r : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
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
        19697: (e) => {
            e.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
        19998: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => C });
            var a = r(88800),
                i = r(65724),
                l = r(84961),
                o = r(53548),
                n = r(88969),
                s = r(17392),
                d = r(29993),
                c = r(96817),
                u = r(29504),
                m = r(4086),
                v = r(41928),
                _ = r(46422),
                f = r(4370),
                g = r(78940),
                x = r(85587),
                p = r(15253),
                h = r(91292),
                A = r(28806),
                b = r.n(A);
            let j = {
                    [x.n.ALBUM]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, a.jsx)(n.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, l.PA)((e) => {
                    var t;
                    let { modalState: r, data: l, onClose: A, className: C } = e,
                        N = null != l ? l : null == r ? void 0 : r.modalData,
                        T = (0, _.W)(),
                        S = (0, g.Z)(f.Z.main.href),
                        k = (0, v.N)().get(m.U2),
                        I = (0, d.c)(() => {
                            if (A) return A();
                            (T.canBack && T.back(), S());
                        }),
                        y = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        P = (0, d.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = k.get(p.c.ExEx),
                                a = new Date(),
                                i = a.setMinutes(a.getMinutes() + 15),
                                l =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? k.set(p.c.ExEx, [...t, l], { expires: new Date(i) }) : k.set(p.c.ExEx, [l], { expires: new Date(i) }),
                                null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        E = (0, d.c)(() => {
                            ((null == r ? void 0 : r.shouldHistoryBack) ? (null == A || A(), T.canBack && T.back(), S()) : null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler());
                        });
                    (0, o.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let L = (0, o.useMemo)(() => {
                            if (N) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(b().title, b().text),
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: N.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: b().text,
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: N.description,
                                        }),
                                        y &&
                                            (0, a.jsx)(h.N, {
                                                href: null == (e = N.details) ? void 0 : e.url,
                                                className: b().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = N.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [N, y]),
                        R = (0, o.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: b().buttons,
                                          children: [
                                              (0, a.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(n.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': s.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && j[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: b().buttons,
                                          children: (0, a.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(n.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [P, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, I, E],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(b().root, C),
                        'data-test-id': s.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: b().container, children: [L, R] }),
                    });
                });
        },
        21438: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => i });
            let a = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        24303: (e) => {
            e.exports = {
                root: 'PageHeaderArtist_root__QhL_a',
                playControl: 'PageHeaderArtist_playControl__N_3l_',
                playControl_withLogin: 'PageHeaderArtist_playControl_withLogin__H4TCQ',
                trailerControl: 'PageHeaderArtist_trailerControl__BWQXJ',
                likeControl: 'PageHeaderArtist_likeControl__oEdXe',
                menuControl: 'PageHeaderArtist_menuControl__8qi0J',
                pinControl: 'PageHeaderArtist_pinControl__dQToz',
                donateControl: 'PageHeaderArtist_donateControl__EX63H',
                controls: 'PageHeaderArtist_controls__U_6g7',
                main: 'PageHeaderArtist_main__VNnip',
                brandedControl: 'PageHeaderArtist_brandedControl__b6qhV',
                meta: 'PageHeaderArtist_meta__ZAlx_',
                label: 'PageHeaderArtist_label__rXyrB',
                donationButtonTooltip: 'PageHeaderArtist_donationButtonTooltip__G7XtX',
                tooltipText: 'PageHeaderArtist_tooltipText__aYfaU',
                closeTooltip: 'PageHeaderArtist_closeTooltip__z2w_O',
            };
        },
        27054: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var a = r(53548),
                i = r(78793),
                l = r(92716),
                o = r(99984),
                n = r(90780),
                s = r(29993),
                d = r(65523),
                c = r(37436),
                u = r(14518);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    r = (0, n.st)(),
                    m = (0, d.U)(),
                    { hash: v } = (0, n.gf)(),
                    { pageId: _ } = (0, u.$)(),
                    f = (0, s.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !r ||
                            !_ ||
                            !v ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[_];
                        if (!t) return;
                        let a = {
                                hash: v,
                                pageId: l.AppScreen.Link,
                                entityType: l.EntityTypes.Deeplink,
                                entityId: l.EntityTypes.Deeplink,
                                from: l.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            n = (0, i.F)({ params: a, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        n && (0, o.ID)(r.evgenInstance, n);
                    });
                return (
                    (0, a.useEffect)(() => {
                        t && f();
                    }, [t, f]),
                    (0, s.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || f({ deepLink: e });
                    })
                );
            };
        },
        27342: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => i });
            var a = r(53548);
            let i = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        27651: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => m });
            var a = r(78793),
                i = r(54577),
                l = r(90780),
                o = r(29993),
                n = r(37436),
                s = r(34500),
                d = r(46166),
                c = r(14518),
                u = r(65523);
            let m = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, u.U)(),
                    r = (0, l.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: v, blockType: _, blockPosX: f, blockPosY: g } = (0, s.N)(),
                    { objectType: x, objectId: p, objectPosX: h, objectPosY: A, objectsCount: b, mainObjectId: j, mainObjectType: C } = (0, d.J)();
                return (0, o.c)((l, o) => {
                    if (!r || !m) return;
                    let s = n.W[m];
                    if (!s) return;
                    let d = {
                        to: l,
                        objectType: x,
                        objectId: p,
                        objectPosX: h,
                        objectPosY: A,
                        hash: e,
                        pageId: s,
                        mainObjectType: C,
                        mainObjectId: j,
                        entityType: _,
                        entityId: v,
                        entityPosX: f,
                        entityPosY: g,
                        objectsCount: b,
                        from: s,
                    };
                    o && (d.deepLink = o);
                    let c = (0, a.F)({ params: d, logger: t, context: 'useSendEventOnDonationNavigated' });
                    c && (0, i.QS)(r.evgenInstance, c);
                });
            };
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
        29201: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var a = r(35396);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        31532: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            let a = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        35396: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { C: () => l }),
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
                })(a || (a = {})));
            let i = new Set(Object.values(a)),
                l = (e) => 'string' == typeof e && i.has(e);
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
        39274: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => te }));
            var a = r(88800),
                i = r(58390),
                l = r(84961),
                o = r(53548),
                n = r(2058),
                s = r(17392),
                d = r(46312),
                c = r(29993),
                u = r(58105),
                m = r(66719),
                v = r(88894),
                _ = r(65724),
                f = r(88969),
                g = r(92716),
                x = r(18593),
                p = r(96817),
                h = r(52300),
                A = r(29504),
                b = r(43161),
                j = r(41578),
                C = r(64207),
                N = r(77455),
                T = r(5407),
                S = r(64284),
                k = r(12816),
                I = r(76675),
                y = r(25557),
                P = r(82204),
                E = r(77948),
                L = r(84384),
                R = r(9618),
                O = r(4795),
                w = r(31532),
                D = r(78940),
                H = r(39079),
                B = r(72288),
                M = r(49738),
                U = r(56862),
                z = r(16704),
                W = r(56446),
                F = r(19038),
                K = r(64546),
                G = r(73853),
                $ = r(99409),
                Y = r(61013),
                X = r(27651),
                V = r(99415),
                Q = r(71227),
                Z = r(28830),
                q = r(39318);
            let J = (0, l.PA)((e) => {
                let { url: t, iconSize: r, controlSize: i, className: l, 'aria-label': o, ref: n } = e,
                    s = (0, D.Z)(t),
                    d = (0, X.c)(),
                    u = (0, V.C)(),
                    { ref: m, intersectionPropertyId: v } = (0, Z.n)({ callback: u, withViewUuid: !0 }),
                    _ = (0, c.c)((e) => {
                        (d(g.AppScreen.Link, t), s(e));
                    });
                return (0, a.jsx)('div', {
                    ref: n,
                    'data-intersection-property-id': q.N,
                    className: l,
                    children: (0, a.jsx)(Q.v, { 'data-intersection-property-id': v, iconSize: r, size: i, onClick: _, ref: m, 'aria-label': o }),
                });
            });
            var ee = r(61097),
                et = r(60902),
                er = r(50408),
                ea = r(17610),
                ei = r(44230),
                el = r(77356),
                eo = r(49034),
                en = r(26645),
                es = r(24303),
                ed = r.n(es);
            let ec = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                eu = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, B.g)(),
                        { contentRef: i } = (0, ei.g)(),
                        { setIsOnboardingOpened: l } = (0, en.w)(),
                        [n, s] = (0, er.d)(),
                        d = (0, eo.z)({ id: el.h.ARTIST_DONATION_BUTTON, ref: n }),
                        [u, m] = (0, o.useState)(d),
                        v = (0, c.c)(() => {
                            (m(!1), l(!1));
                        }),
                        _ = (0, c.c)((e) => {
                            e || (v(), l(!1));
                        });
                    return (0, a.jsxs)(ea.m_, {
                        placement: r ? 'top' : 'right',
                        arrowProps: ec,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: u,
                        onOpenChange: _,
                        enableAriaDescribedby: !0,
                        referenceRef: s,
                        children: [
                            t,
                            (0, a.jsxs)(ea.ZI, {
                                className: ed().donationButtonTooltip,
                                rootNode: i,
                                children: [
                                    (0, a.jsx)(p.$, {
                                        icon: (0, a.jsx)(h.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        variant: 'text',
                                        className: ed().closeTooltip,
                                        withRipple: !1,
                                    }),
                                    (0, a.jsx)(A.HL, {
                                        variant: 'span',
                                        className: ed().tooltipText,
                                        children: (0, a.jsx)(f.A, { id: 'onboarding.artist-donation-button-1', values: { br: (0, a.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                em = (0, l.PA)((e) => {
                    var t, r, i, l, d, u;
                    let { className: m, artistMeta: v, entitiesData: X, forwardRef: V, onCoverClick: Q } = e,
                        { shouldShowBuySubscriptionModal: Z, showBuySubscriptionModal: q } = (0, R.q)(),
                        { from: er, utmLink: ea } = (0, L.f)({
                            pageId: k._Q.ARTIST,
                            blockId: S.U.ARTIST,
                            contextType: x.K.Artist,
                            contextId: null == v ? void 0 : v.artist.id,
                        }),
                        ei = (0, C.K)(null == v ? void 0 : v.artist),
                        el = (0, N.A)(null == v ? void 0 : v.artist),
                        eo = (0, y.F)(),
                        { formatMessage: en } = (0, n.A)(),
                        [es, ec] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: em },
                            trailer: ev,
                            user: e_,
                            slam: { isOfflineModeEnabled: ef },
                            paywall: { modal: eg },
                        } = (0, B.g)(),
                        ex = (0, I.b)(),
                        ep = (0, T.P)(),
                        eh = (0, j.Q)(),
                        eA = !!(null == v || null == (t = v.artist.trailer) ? void 0 : t.isAvailable) && !em,
                        eb = !em,
                        ej = !!(null == v ? void 0 : v.donationUrl),
                        eC = em && !e_.isAuthorized,
                        eN = em && !e_.hasPlus && e_.isAuthorized,
                        eT = eC || eN,
                        eS = (0, O.N)(),
                        ek = (0, w.c)(null == v ? void 0 : v.artist),
                        eI = (() => {
                            let [e, t] = (0, o.useState)(window.innerWidth < 1120),
                                r = (0, o.useMemo)(
                                    () =>
                                        (0, Y.A)(
                                            () => {
                                                t(window.innerWidth < 1120);
                                            },
                                            100,
                                            { trailing: !1 },
                                        ),
                                    [t],
                                );
                            return (
                                (0, o.useEffect)(
                                    () => (
                                        window.addEventListener('resize', r),
                                        r(),
                                        () => {
                                            window.removeEventListener('resize', r);
                                        }
                                    ),
                                    [r],
                                ),
                                e
                            );
                        })(),
                        { controlSize: ey, iconSize: eP } = (0, $.q)(em),
                        eE = (0, o.useMemo)(
                            () => ((null == v ? void 0 : v.artist.isComposer) ? en({ id: 'entity-names.composer' }) : en({ id: 'entity-names.singer' })),
                            [en, null == v ? void 0 : v.artist.isComposer],
                        ),
                        eL = !!(null == v ? void 0 : v.brandedButton) && !ef,
                        eR = (0, D.Z)(null != (u = null == v || null == (r = v.brandedButton) ? void 0 : r.url) ? u : ''),
                        eO = !eI || (eI && !eL),
                        { isPlaying: ew, togglePlay: eD } = (0, H.D)({
                            playContextParams: {
                                contextData: { type: ef ? x.K.Various : x.K.Artist, meta: { id: Number(null == v ? void 0 : v.artist.id) }, from: er, utmLink: ea },
                                loadContextMeta: !ef,
                                entitiesData: X,
                            },
                        }),
                        eH = (0, c.c)(() => {
                            if (!ep()) {
                                if (Z) return void q();
                                if (eS) return void eg.open();
                                (eD(), ex(!ew));
                            }
                        }),
                        eB = (0, o.useMemo)(() => {
                            var e, t;
                            return em
                                ? (0, a.jsx)(z.D, {
                                      className: (0, _.$)(ed().playControl, { [ed().playControl_withLogin]: eT }),
                                      color: eT ? 'secondary' : 'primary',
                                      buttonVariant: 'default',
                                      iconSize: eT ? eP : 'xxl',
                                      size: eT ? ey : void 0,
                                      radius: eT ? 'xxxl' : 'round',
                                      isPlaying: ew,
                                      variant: eT ? 'default' : 'filled',
                                      onClick: eH,
                                      disabled: !(null == v || null == (t = v.artist) ? void 0 : t.isAvailableForPlaying) || !v.artist.isAvailable,
                                  })
                                : (0, a.jsx)(z.D, {
                                      className: ed().playControl,
                                      withRipple: !0,
                                      buttonVariant: 'default',
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      iconSize: 'xxs',
                                      isPlaying: ew,
                                      disabled: !(null == v || null == (e = v.artist) ? void 0 : e.isAvailableForPlaying) || !v.artist.isAvailable,
                                      onClick: eH,
                                      variant: 'default',
                                      children: eO && (0, a.jsx)(f.A, { id: 'player-actions.listen' }),
                                  });
                        }, [eO, null == v ? void 0 : v.artist.isAvailable, null == v ? void 0 : v.artist.isAvailableForPlaying, eH, em, ew, eT, eP, ey]),
                        eM = (0, c.c)(() => {
                            if (Z) return void q();
                            !ep() &&
                                (null == v ? void 0 : v.artist.id) &&
                                (ev.setUtmLink(ea), ev.openArtistTrailer(v.artist.id), eo(g.DomainObjectType.Artist, v.artist.id));
                        }),
                        eU = (0, o.useMemo)(
                            () =>
                                eA
                                    ? (0, a.jsx)(K.WithOffline, {
                                          fallback: (0, a.jsx)(F.L, {
                                              children: (0, a.jsx)(W.k, {
                                                  size: 's',
                                                  radius: 'xxxl',
                                                  iconSize: 'xxs',
                                                  className: ed().trailerControl,
                                                  onClick: eM,
                                                  children: eO && (0, a.jsx)(f.A, { id: 'entity-names.trailer' }),
                                              }),
                                          }),
                                      })
                                    : null,
                            [eO, eM, eA],
                        ),
                        ez = (0, o.useMemo)(() => {
                            var e;
                            return em && eL
                                ? null
                                : (null == v ? void 0 : v.donationUrl) && (null == (e = v.artist) ? void 0 : e.id)
                                  ? (0, a.jsx)(P.F, {
                                        blockType: g.EntityTypes.Donations,
                                        blockId: S.U.DONATY,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        children: (0, a.jsx)(E.B, {
                                            objectType: g.DomainObjectType.Donation,
                                            objectId: v.artist.id,
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: 1,
                                            mainObjectId: v.artist.id,
                                            mainObjectType: g.DomainObjectType.Artist,
                                            children: (0, a.jsx)(eu, {
                                                children: (0, a.jsx)(J, { className: ed().donateControl, iconSize: eP, controlSize: ey, url: eh(v.donationUrl) }),
                                            }),
                                        }),
                                    })
                                  : (0, a.jsx)(U.O, {
                                        onClick: el,
                                        isPinned: null == v ? void 0 : v.artist.isPinned,
                                        className: ed().pinControl,
                                        isDisabled: !(null == v ? void 0 : v.artist.isAvailable),
                                    });
                        }, [
                            em,
                            eL,
                            null == v ? void 0 : v.donationUrl,
                            null == v ? void 0 : v.artist.id,
                            null == v ? void 0 : v.artist.isPinned,
                            null == v ? void 0 : v.artist.isAvailable,
                            el,
                            eP,
                            ey,
                            eh,
                        ]),
                        eW = (0, o.useMemo)(() => {
                            var e;
                            let t = {
                                    gridTemplateAreas: ''.concat(
                                        ((e) => {
                                            let { isMobile: t, brandedButton: r, trailerButton: a, pinOrDonateControl: i } = e,
                                                l = i ? 'pinOrDonate' : '';
                                            return t
                                                ? r
                                                    ? "'menu play like' 'branded branded branded'"
                                                    : "'menu like ".concat(l, " play '")
                                                : "'play "
                                                      .concat(r ? 'branded' : '', ' ')
                                                      .concat(a ? 'trailer' : '', ' like ')
                                                      .concat(l, " menu'");
                                        })({ isMobile: em, brandedButton: eL, pinOrDonateControl: ej || eb, trailerButton: eA }),
                                    ),
                                },
                                r = { '--baranded-button-color-background': (0, G.W)(null == v ? void 0 : v.artist.averageColor) };
                            return (0, a.jsxs)('div', {
                                style: t,
                                className: ed().controls,
                                children: [
                                    eB,
                                    eL &&
                                        (0, a.jsx)(K.WithOffline, {
                                            fallback: (0, a.jsx)(p.$, {
                                                className: ed().brandedControl,
                                                style: r,
                                                withRipple: !1,
                                                withHover: !1,
                                                radius: 'xxxl',
                                                size: 's',
                                                color: 'primary',
                                                onClick: eR,
                                                variant: 'default',
                                                role: 'link',
                                                children: (0, a.jsx)(A.HL, {
                                                    variant: 'span',
                                                    lineClamp: 1,
                                                    children: null == v || null == (e = v.brandedButton) ? void 0 : e.title,
                                                }),
                                            }),
                                        }),
                                    eU,
                                    (0, a.jsx)(K.WithOffline, {
                                        fallback: (0, a.jsx)(M.c, {
                                            className: ed().likeControl,
                                            isLiked: null == v ? void 0 : v.artist.isLiked,
                                            onClick: ei,
                                            withRipple: !em,
                                            iconSize: eP,
                                            size: ey,
                                            variant: 'default',
                                            iconClassName: ed().likeIcon,
                                            disabled: !(null == v ? void 0 : v.artist.isAvailable) || !e_.isAuthorized,
                                        }),
                                    }),
                                    (0, a.jsx)(K.WithOffline, { fallback: ez }),
                                    (0, a.jsx)(b.g, {
                                        artist: null == v ? void 0 : v.artist,
                                        open: es,
                                        onOpenChange: ec,
                                        className: ed().menuControl,
                                        size: ey,
                                        icon: (0, a.jsx)(h.I, { size: eP, variant: 'more' }),
                                        'data-test-id': s.e8.pageHeader.ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                                ],
                            });
                        }, [
                            null == v ? void 0 : v.artist,
                            null == v || null == (i = v.brandedButton) ? void 0 : i.title,
                            ey,
                            ei,
                            eP,
                            es,
                            em,
                            eR,
                            eB,
                            ez,
                            eU,
                            e_.isAuthorized,
                            eL,
                            eb,
                            ej,
                            eA,
                        ]),
                        eF = (0, o.useMemo)(
                            () =>
                                (0, a.jsx)('div', {
                                    className: ed().meta,
                                    children:
                                        (null == v ? void 0 : v.lastMonthListeners) &&
                                        (0, a.jsxs)('div', {
                                            className: ed().label,
                                            'data-test-id': s.e8.pageHeader.ARTIST_LISTENERS_COUNT,
                                            children: [
                                                (0, a.jsx)(h.I, { variant: 'users', size: 'xxxs' }),
                                                (0, a.jsx)(A.HL, {
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    children: (0, a.jsx)(f.A, { id: 'entity-names.listeners-per-month', values: { counter: v.lastMonthListeners } }),
                                                }),
                                            ],
                                        }),
                                }),
                            [null == v ? void 0 : v.lastMonthListeners],
                        );
                    return (0, a.jsx)('div', {
                        className: ed().root,
                        children: (0, a.jsx)(ee.k, {
                            ref: V,
                            className: m,
                            entityName: eE,
                            title: (null == v || null == (l = v.artist) ? void 0 : l.name) || '',
                            meta: eF,
                            cover: (0, a.jsx)(et.I, {
                                coverVariant: 'round',
                                coverUri: null == v || null == (d = v.artist) ? void 0 : d.coverUri,
                                isAvailable: null == v ? void 0 : v.artist.isAvailable,
                                onClick: Q,
                                'aria-label': Q ? en({ id: 'slider.view-artist-covers' }) : void 0,
                            }),
                            controls: eW,
                            disclaimerLabel: ek,
                            headingVariant: 'h1',
                            showMobileLoginButton: eC,
                            showMobileSubscriptionButton: eN,
                        }),
                    });
                }),
                ev = (0, o.forwardRef)((e, t) => (0, a.jsx)(em, { forwardRef: t, ...e }));
            var e_ = r(32596),
                ef = r(3685),
                eg = r(69630),
                ex = r(91959),
                ep = r(27054),
                eh = r(4476),
                eA = r(59844),
                eb = r(50327),
                ej = r(37670),
                eC = r(29595),
                eN = r(74965),
                eT = r(34303),
                eS = r(67174),
                ek = r(66943),
                eI = r(19998),
                ey = r(86790),
                eP = r(60266),
                eE = r(93317),
                eL = r(81685),
                eR = r(30144),
                eO = r(324),
                ew = r(46511),
                eD = r(13012),
                eH = r(57297),
                eB = r(2218),
                eM = r(77863),
                eU = r(45383);
            async function ez(e, t) {
                var r, a, i, l, o;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, ew.W)(t.locale),
                    s = (0, eD.N)(e.artist.name),
                    d = n({ id: 'metadata.artist-title' }, { artistTitle: e.artist.name }),
                    c = n({ id: 'metadata.artist-description' }, { artistTitle: e.artist.name });
                return {
                    title: d,
                    description: c,
                    openGraph: (0, eH.i)({
                        ogTitle: s,
                        ogDescription: c,
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: null != (i = null == (r = e.artist.cover) ? void 0 : r.uri) ? i : '',
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, eB.H)({ cardType: eM.W.APP, title: s, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, eO.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (o = t.fullUrl) ? o : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': e.artist.name },
                    alternates: (0, eU.S)('/artist/:artistId', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var eW = r(27342),
                eF = r(63512),
                eK = r(44367),
                eG = r(10829),
                e$ = r(71978),
                eY = r(43506),
                eX = r(6668),
                eV = r(98644),
                eQ = r(93015),
                eZ = r(79418),
                eq = r(19697),
                eJ = r.n(eq);
            let e0 = (0, l.PA)((e) => {
                let { artistId: t } = e,
                    r = (0, e$.j)(),
                    { contentScrollRef: l, setContentScrollRef: d } = (0, ei.g)(),
                    { formatMessage: m } = (0, n.A)(),
                    {
                        artist: { offlineArtist: f },
                    } = (0, B.g)(),
                    { trackIds: g, downloadedTracks: p } = f,
                    { from: h } = (0, L.f)({ pageId: k._Q.ARTIST, blockId: S.U.TRACK_LIST }),
                    A = (0, eY.v)(),
                    b = (0, eX.w)(),
                    { forceUpdateRefCallback: j, offsetY: C } = (0, u.G)(l),
                    { topColorStyle: N, headerStyle: T } = (0, ef.Q)(null, C),
                    I = (0, c.c)(() => {
                        r.tracksController && g.ids && p.getData(r.tracksController, g.ids);
                    });
                ((0, eK.L)(I),
                    (0, o.useEffect)(() => {
                        f.meta && p.isResolved && p.items && f.setTracksCount(p.items.length);
                    }, [f, f.meta, p.isResolved, p.items]),
                    (0, o.useEffect)(() => {
                        p.isNeededToLoad && g.isResolved && I();
                    }, [p.isNeededToLoad, g.isResolved, I]),
                    (0, o.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f, t],
                    ),
                    (0, ej.J)(f.isResolved));
                let y = (0, o.useMemo)(
                        () =>
                            f.isLoading || !f.meta
                                ? (0, a.jsx)(v.c, { className: eJ().header, coverRadius: 'round' })
                                : (0, a.jsx)(ev, { className: eJ().header, artistMeta: f.meta, entitiesData: p.entitiesData, ref: j }),
                        [f.isLoading, f.meta, p.entitiesData, j],
                    ),
                    P = (0, o.useMemo)(() => ({ Header: () => y, Footer: () => (0, a.jsx)(eP.A, { children: (0, a.jsx)(ey.w, { className: eJ().footer }) }) }), [y]),
                    E = p.items ? p.items.length : 10;
                if (f.isNeededToLoad && A) {
                    let e = [f.getArtist(t, A), g.getIds(t, A)];
                    (0, o.use)(Promise.allSettled(e));
                }
                return (f.isNotFound && (0, i.notFound)(), f.isRejected || g.isRejected || p.isRejected)
                    ? (0, a.jsx)(e_.SomethingWentWrong, {})
                    : (0, a.jsx)(eA.n, {
                          pageId: k._Q.ARTIST,
                          pageEntityId: t,
                          children: (0, a.jsxs)(eg.h, {
                              scrollElement: l,
                              children: [
                                  (0, a.jsx)(eE.Y, { style: T }),
                                  (0, a.jsx)('div', { className: eJ().averageColorBackground, style: N }),
                                  (0, a.jsx)(eZ.$, {
                                      context: { listAriaLabel: m({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, _.$)(eJ().root, eJ().important),
                                      listClassName: eJ().content,
                                      customComponents: P,
                                      totalCount: E,
                                      itemContentCallback: (e) => {
                                          var r;
                                          let i = null == (r = p.items) ? void 0 : r[e];
                                          return i
                                              ? (0, a.jsx)(
                                                    eG.K,
                                                    {
                                                        track: i,
                                                        playContextParams: b(i.id, {
                                                            contextData: { type: x.K.Various, meta: { id: t }, from: h },
                                                            entitiesData: p.entitiesData,
                                                            queueParams: { index: e, entityId: i.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    i.id,
                                                )
                                              : (0, a.jsx)(eQ.D, { isActive: !0, className: eJ().trackShimmer, variant: eV.X.PLAYLIST });
                                      },
                                      debounceDurationInMs: 300,
                                      initialItemCount: E,
                                      handleRef: d,
                                      shouldTriggerRangeChangedOn: [E],
                                      testId: s.Xk.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                                  }),
                              ],
                          }),
                      });
            });
            var e1 = r(6473),
                e8 = r.n(e1),
                e3 = r(25772),
                e9 = r(52606),
                e4 = r.n(e9);
            let e5 = (0, l.PA)((e) => {
                    let { artist: t } = e;
                    return (0, a.jsx)(e3.E, {
                        landing: t.landing,
                        errorComponent: (0, a.jsx)(e_.SomethingWentWrong, { className: e4().error, withBackwardControl: !1 }),
                        containerClassName: e4().root,
                    });
                }),
                e2 = (0, l.PA)((e) => {
                    var t, r, l, _, f, g;
                    let { artistId: x, preloadedArtist: p } = e,
                        { notify: h } = (0, eN.l)(),
                        {
                            artist: A,
                            disclaimerModalState: b,
                            slam: j,
                            modals: { imageSliderModal: C },
                        } = (0, B.g)(),
                        { formatMessage: N } = (0, n.A)(),
                        T = (0, o.useRef)(0),
                        { contentScrollRef: S, setContentScrollRef: k } = (0, ei.g)(),
                        { forceUpdateRefCallback: I, offsetY: y } = (0, u.G)(S),
                        P = (0, o.useRef)(null),
                        E = (0, eb.y)(null == A || null == (r = A.meta) || null == (t = r.artist) ? void 0 : t.averageColor),
                        { topColorStyle: L, headerStyle: R } = (0, ef.Q)(E, y),
                        O = null == (l = A.meta) ? void 0 : l.hasCovers,
                        w = (0, i.useSearchParams)();
                    ((0, eF.G)(x),
                        (0, ep.A)(),
                        (0, o.useEffect)(() => {
                            let e = w.get(eT.K.BLOCK);
                            e &&
                                A.infoLoadingState.isResolved &&
                                A.landing.isLoaded &&
                                ((e) => {
                                    let { blockId: t, scrollRef: r, headerRef: a } = e,
                                        i = document.getElementById(t);
                                    if (i && r) {
                                        var l;
                                        let e = i.getBoundingClientRect().top,
                                            t = (null == (l = a.current) ? void 0 : l.offsetHeight) ? e - a.current.offsetHeight : e;
                                        r.scrollTo({ top: t - 10, behavior: 'smooth' });
                                    }
                                })({ blockId: e, scrollRef: S, headerRef: P });
                        }, [A.infoLoadingState.isResolved, A.landing.isLoaded, S, w]));
                    let D = (0, ex.S)({ artist: null == (_ = A.meta) ? void 0 : _.artist, shouldHistoryBack: !0 });
                    ((0, o.useEffect)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.artist.isUnsafeLegal) && D();
                    }, [null == (f = A.meta) ? void 0 : f.artist.isUnsafeLegal, D]),
                        (0, eW._)(A, x));
                    let H = (0, c.c)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.hasCovers) && A.meta.covers && C.openImages({ images: A.meta.covers });
                    });
                    if (j.isOfflineModeEnabled) return (0, a.jsx)(e0, { artistId: x });
                    if (A.deprecationTargetArtistId) {
                        let { href: e } = (0, eS.u)('/artist/:artistId', { params: { artistId: A.deprecationTargetArtistId } });
                        (0, i.redirect)(e);
                    }
                    ((0, o.useMemo)(
                        () => () => {
                            (A.infoLoadingState.isRejected || (!A.meta && !A.infoLoadingState.isLoading && !A.infoLoadingState.isNeededToLoad)) &&
                                T &&
                                !(T.current > 0) &&
                                (h((0, a.jsx)(ek.h, { error: N({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: eC.u.ERROR }), T.current++);
                        },
                        [A.infoLoadingState.isRejected, A.infoLoadingState.isLoading, A.infoLoadingState.isNeededToLoad, A.meta, h, N],
                    )(),
                        (0, ej.J)(A.infoLoadingState.isResolved),
                        A.isInfoNotFound && (0, i.notFound)(),
                        ((e) => {
                            var t;
                            let { fullscreenVideoPlayer: r } = (0, B.g)(),
                                a = null == e || null == (t = e.meta) ? void 0 : t.artist,
                                i = null == e ? void 0 : e.infoLoadingState.isLoading,
                                l = null == e ? void 0 : e.infoLoadingState.isRejected,
                                n = (0, o.useCallback)((e) => (l ? {} : a && !i ? ez({ artist: (0, eL.E)(a) }, e) : void 0), [a, i, l]);
                            (0, eR.C)(r.modal.isOpened ? null : n);
                        })(A));
                    let M = (0, o.useMemo)(
                            () =>
                                A.infoLoadingState.isLoading || !A.meta
                                    ? (0, a.jsx)(v.c, { className: e8().header, coverRadius: 'round' })
                                    : (0, a.jsx)(ev, { className: e8().header, artistMeta: A.meta, ref: I, onCoverClick: O ? H : void 0 }),
                            [A.infoLoadingState.isLoading, A.meta, O, I, H],
                        ),
                        U = [];
                    return (A.infoLoadingState.isNeededToLoad && U.push(A.getInfo({ artistId: x, preloadedArtist: p })),
                    A.landing.isNeededToLoad && U.push(A.landing.getArtistSkeleton({ artistId: x, skeletonId: d.p.ARTIST }, { preloadBlocksCount: 2 })),
                    U.length && (0, o.use)(Promise.allSettled(U)),
                    A.isInfoSomethingWentWrong)
                        ? (0, a.jsx)(e_.SomethingWentWrong, {})
                        : (null == (g = A.meta) ? void 0 : g.artist.isLegalRejected)
                          ? (0, a.jsx)(eI.M, { modalState: b })
                          : (0, a.jsx)(eh.j, {
                                children: (0, a.jsxs)(eg.h, {
                                    scrollElement: S,
                                    children: [
                                        (0, a.jsx)(eE.Y, { style: R, innerHeaderRef: P }),
                                        (0, a.jsx)('div', { className: e8().averageColorBackground, style: L }),
                                        (0, a.jsxs)(m.N, {
                                            className: e8().root,
                                            containerClassName: e8().content,
                                            ref: k,
                                            'data-test-id': s.Xk.artist.ARTIST_PAGE,
                                            children: [
                                                (0, a.jsxs)('div', { children: [M, (0, a.jsx)(e5, { artist: A })] }),
                                                (0, a.jsx)(eP.A, { children: (0, a.jsx)(ey.w, { className: e8().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                e7 = (0, l.PA)((e) => (0, a.jsx)(eA.n, { pageId: k._Q.ARTIST, pageEntityId: e.artistId, children: (0, a.jsx)(e2, { ...e }) }));
            var e6 = r(21438);
            let te = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, e6.L)(e)) || (0, i.notFound)(), (0, a.jsx)(e7, { artistId: e }));
            };
        },
        43506: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i, v: () => l });
            var a = r(53548);
            let i = (0, a.createContext)(null);
            function l() {
                return (0, a.useContext)(i);
            }
        },
        44367: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => s });
            var a = r(53548),
                i = r(96820),
                l = r(29993),
                o = r(71978);
            let n = [i.DT.IDLE, i.DT.DOWNLOADED],
                s = (e) => {
                    var t;
                    let r = (0, o.j)(),
                        s = (0, l.c)((t) => {
                            let { state: r } = t;
                            n.includes(r.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = r.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (a = r.store) || a.tracks.events.on(i.je.ENTITY_CHANGED, s),
                            () => {
                                var t, a;
                                (null == (t = r.store) || t.tracks.events.off(i.je.STATE_CHANGED, e),
                                    null == (a = r.store) || a.tracks.events.off(i.je.ENTITY_CHANGED, s));
                            }
                        );
                    }, [e, s, null == (t = r.store) ? void 0 : t.tracks.events]);
                };
        },
        45326: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 39274));
        },
        50327: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            var a = r(35412),
                i = r(8655),
                l = r(69704);
            let o = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r, g: l, b: o } = (0, a.E2)(e),
                        n = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(l, ', ').concat(o, ', ').concat(n, ')');
                }
            };
        },
        52606: (e) => {
            e.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        58105: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                i = r(14022),
                l = r(53548),
                o = {
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let a = r(352),
                            i = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: l } = e,
                                o = (0, i.useRef)(null),
                                [n, s] = (0, i.useState)(!!r),
                                d = (0, i.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            (s(!r),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    s(!!r);
                                                }, t)));
                                        }, l),
                                    [t, r, l],
                                ),
                                c = (0, i.useCallback)(() => {
                                    (s(!!r), o.current && window.clearTimeout(o.current));
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: n, handleDebouncedToggle: d, reset: c }
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
                            i = r(1848),
                            l = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: o } = e,
                                { state: n, handleDebouncedToggle: s } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, a.useCallback)(() => {
                                    (r && s(), null == t || t());
                                }, [r, s, t]);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (0, i.getElementFromRefOrElement)(o);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, r), () => t.removeEventListener('scroll', d, r));
                                }, [o, d]),
                                n
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
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(l, 2));
                    },
                },
                n = {};
            function s(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var r = (n[e] = { exports: {} });
                return (o[e](r, r.exports, s), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = s(810),
                    t = s(3830),
                    r = s(3940);
                d.useElementOffsetY = (a) => {
                    let [i, l] = (0, r.useForceUpdateRef)(),
                        [o, n] = (0, e.useState)(),
                        s = (0, e.useCallback)(() => {
                            let e = null == i ? void 0 : i.getBoundingClientRect();
                            e && n(e.y);
                        }, [i]);
                    return ((0, e.useLayoutEffect)(s), (0, t.useScroll)({ onScroll: s, elementRef: a }), { forceUpdateRefCallback: l, offsetY: o });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        60902: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => m });
            var a = r(88800),
                i = r(65724),
                l = r(17392),
                o = r(96817),
                n = r(52300),
                s = r(7555),
                d = r(81877),
                c = r(36232),
                u = r.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: c, className: m, withPlusBadge: v, onClick: _, 'aria-label': f, customCover: g, buttonClassName: x } = e;
                return (0, a.jsxs)(s.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, i.$)(u().root, m, { [u().root_hoverable]: !!_ }),
                    children: [
                        (0, a.jsx)(o.$, {
                            className: (0, i.$)(u().coverButton, x),
                            onClick: _,
                            'aria-label': f,
                            tabIndex: _ ? 0 : -1,
                            disabled: !_,
                            'data-test-id': l.S7.ENTITY_COVER_BUTTON,
                            children: g || (0, a.jsx)(d.B, { fit: 'cover', src: r, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        v && (0, a.jsx)(n.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        63512: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o });
            var a = r(53548),
                i = r(94144),
                l = r(67174);
            let o = (e) => {
                var t;
                let { setDeeplink: r } = null != (t = (0, i.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, l.u)('/artist/:artistId', { params: { artistId: e } });
                        null == r || r(t);
                    }
                    return () => {
                        null == r || r(null);
                    };
                }, [e, r]);
            };
        },
        67990: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        71227: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => m });
            var a = r(88800),
                i = r(84961),
                l = r(53548),
                o = r(2058),
                n = r(35412),
                s = r(17392),
                d = r(96817),
                c = r(52300);
            let u = (0, i.PA)((e) => {
                    let { onClick: t, className: r, size: i = 's', iconSize: l = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: v } = (0, o.A)();
                    return (0, a.jsx)(d.$, {
                        ref: u,
                        size: i,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: r,
                        'aria-label': v({ id: 'donation.button-text' }),
                        icon: (0, a.jsx)(c.I, { size: l, variant: 'ruble' }),
                        ...(0, n.OZ)(m),
                        'data-test-id': s.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        73853: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var a = r(35412);
            let i = (e) => {
                if (!e) return null;
                let { h: t, s: r, l: i } = (0, a.g8)(e),
                    l = Math.min(70, Math.max(10, i + 10));
                return 'hsl('.concat(t, 'deg, ').concat(r, '%, ').concat(l, '%)');
            };
        },
        79418: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var a = r(88800),
                i = r(65724),
                l = r(61013),
                o = r(53548);
            let n = (e) => {
                    let { style: t, forwardRef: r, context: i, ...l } = e,
                        o = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        n = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': o, style: { ...t }, ref: r, ...l });
                },
                s = (0, o.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
            var d = r(16434),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: o, withForceScroll: n, ...s } = e;
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: o, [c().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: r,
                        ...s,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var v = r(55482),
                _ = r(75151);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, f] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, v.A)((e) => {
                                    if ((null == i || i(e), s.length > 0 && f(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < a; e++) r(e);
                                    }
                                }, l),
                            [l, i, t, r, s],
                        );
                    (0, o.useEffect)(() => {
                        s.length > 0 && m && g(m);
                    }, s);
                    let x = (0, o.useMemo)(() => {
                        if (d)
                            return (0, v.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, a.jsx)(_.sN, { ref: c, rangeChanged: g, totalCount: n, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: n,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: v,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: p,
                            totalRequests: h,
                            debounceDurationInMs: A,
                            initialItemCount: b,
                            minInitialItemCount: j = 20,
                            handleRef: C,
                            alwaysShowScrollbar: N = !1,
                            testId: T,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...I
                        } = e,
                        [y, P] = (0, o.useState)(!1),
                        E = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        L = (0, o.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : s,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : s,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, h, S]),
                        R = b ? Math.min(b, j) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, i.$)(c().root, { [c().root_scrolling]: y || N, [c().root_notScrolling]: !y && !N }, t),
                        'data-test-id': T,
                        children: [
                            S && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(f, {
                                overscan: g,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: v,
                                scrollerRef: C,
                                totalCount: p,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: k,
                                ...I,
                            }),
                            S && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        81685: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var a = r(29201);
            let i = (e) => {
                var t, r;
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
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (r = e.isAvailable) || r, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        88894: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(88800),
                i = r(65724),
                l = r(84961),
                o = r(53548),
                n = r(19994),
                s = r(72288),
                d = r(16472),
                c = r.n(d);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, s.g)(),
                    u = (0, o.useMemo)(
                        () =>
                            d
                                ? (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(n.W, { className: c().desktopPlayButton, isActive: l }),
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(n.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, d],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, i.$)(c().root, t),
                    children: [
                        (0, a.jsx)(n.W, { className: c().cover, radius: r, isActive: l }),
                        (0, a.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, a.jsx)(n.W, { className: c().entityName, radius: 's', isActive: l }),
                                        (0, a.jsx)(n.W, { className: c().title, radius: 'xl', isActive: l }),
                                        (0, a.jsx)(n.W, { className: c().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        99415: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => m });
            var a = r(78793),
                i = r(54577),
                l = r(90780),
                o = r(29993),
                n = r(37436),
                s = r(34500),
                d = r(46166),
                c = r(14518),
                u = r(65523);
            let m = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, u.U)(),
                    r = (0, l.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: v, blockType: _, blockPosX: f, blockPosY: g } = (0, s.N)(),
                    { objectType: x, objectId: p, objectPosX: h, objectPosY: A, objectsCount: b, mainObjectId: j, mainObjectType: C } = (0, d.J)();
                return (0, o.c)((l, o) => {
                    if (!r || !m) return;
                    let s = n.W[m];
                    if (!s) return;
                    let d = (0, a.F)({
                        params: {
                            objectType: x,
                            objectId: p,
                            objectPosX: h,
                            objectPosY: A,
                            hash: e,
                            pageId: s,
                            mainObjectType: C,
                            mainObjectId: j,
                            entityType: _,
                            entityId: v,
                            entityPosX: f,
                            entityPosY: g,
                            objectsCount: b,
                            viewUuid: o,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    d && (l ? (0, i.Pf)(r.evgenInstance, d) : (0, i.nv)(r.evgenInstance, d));
                });
            };
        },
        99890: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => l, UC: () => o, dM: () => n, uV: () => s });
            var a = r(89916),
                i = r(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof a.m5) || !(0, i.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, i.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                s = (e) => {
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
                3005, 8752, 5108, 7435, 1191, 127, 1931, 3637, 4596, 1025, 8654, 7617, 8380, 7759, 5083, 8797, 4316, 100, 4863, 7456, 1445, 1138, 893, 6252, 3076, 6706,
                4771, 1311, 5201, 3075, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 6326, 8283, 5151, 1714, 1223, 8335, 2086, 4732, 1195, 1598, 6281, 1928, 7627, 9124,
                7967, 900, 9934, 6387, 4561, 9337, 4613, 3724, 818, 7053, 9425, 4322, 1372, 3547, 8835, 7555, 9667, 6820, 2690, 763, 2670, 7358,
            ],
            () => e((e.s = 45326)),
        ),
            (_N_E = e.O()));
    },
]);
