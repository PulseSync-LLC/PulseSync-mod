(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1468],
    {
        3785: (e, t, r) => {
            'use strict';
            var a;
            r.d(t, { M: () => a }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(a || (a = {}));
        },
        5749: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(16172),
                i = r(52068),
                l = r(91027),
                o = r(79374),
                s = r(84782),
                n = r(2792),
                d = r(37240),
                c = r(62376);
            let u = () => {
                let { hash: e } = (0, i.gf)(),
                    t = (0, c.U)(),
                    r = (0, i.st)(),
                    { pageId: u } = (0, d.$)(),
                    { blockId: m, blockType: v, blockPosX: _, blockPosY: f } = (0, s.N)(),
                    { objectType: g, objectId: x, objectPosX: p, objectPosY: h, objectsCount: A, mainObjectId: T, mainObjectType: N } = (0, n.J)();
                return (0, l.c)((i, l) => {
                    if (!r || !u) return;
                    let s = o.W[u];
                    if (!s) return;
                    let n = {
                        to: i,
                        objectType: g,
                        objectId: x,
                        objectPosX: p,
                        objectPosY: h,
                        hash: e,
                        pageId: s,
                        mainObjectType: N,
                        mainObjectId: T,
                        entityType: v,
                        entityId: m,
                        entityPosX: _,
                        entityPosY: f,
                        objectsCount: A,
                        from: s,
                    };
                    l && (n.deepLink = l);
                    let d = (0, a.Fx)({ params: n, logger: t, context: 'useSendEventOnDonationNavigated' });
                    d && (0, a.QS)(r.evgenInstance, d);
                });
            };
        },
        8576: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => m });
            var a = r(32290),
                i = r(63618),
                l = r(21732),
                o = r(63423),
                s = r(82586),
                n = r(86269),
                d = r(11323),
                c = r(78166),
                u = r.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: c, className: m, withPlusBadge: v, onClick: _, 'aria-label': f, customCover: g, buttonClassName: x } = e;
                return (0, a.jsxs)(n.t, {
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
                        v && (0, a.jsx)(s.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8868: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => c });
            var a = r(55178),
                i = r(16172),
                l = r(52068),
                o = r(91027),
                s = r(62376),
                n = r(79374),
                d = r(37240);
            let c = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    r = (0, l.st)(),
                    c = (0, s.U)(),
                    { hash: u } = (0, l.gf)(),
                    { pageId: m } = (0, d.$)(),
                    v = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !r ||
                            !m ||
                            !u ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = n.W[m];
                        if (!t) return;
                        let a = {
                                hash: u,
                                pageId: i.QT.Link,
                                entityType: i.LA.Deeplink,
                                entityId: i.LA.Deeplink,
                                from: i.QT.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            l = (0, i.Fx)({ params: a, logger: c, context: 'useSendDeeplinkNavigationEvent' });
                        l && (0, i.ID)(r.evgenInstance, l);
                    });
                return (
                    (0, a.useEffect)(() => {
                        t && v();
                    }, [t, v]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || v({ deepLink: e });
                    })
                );
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l });
            var a = r(91945),
                i = r(50891);
            class l extends i.m {
                constructor(e, t) {
                    super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, a._)(this, 'name', 'HttpErrorException'),
                        (0, a._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        17024: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => i });
            let a = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        18870: (e, t, r) => {
            'use strict';
            var a;
            r.d(t, { $: () => a }),
                (function (e) {
                    (e.RU = 'ru'),
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
                        (e.AR = 'ar');
                })(a || (a = {}));
        },
        20279: (e) => {
            e.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
        22644: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => i });
            var a = r(55178);
            let i = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22748: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i, v: () => l });
            var a = r(55178);
            let i = (0, a.createContext)(null);
            function l() {
                return (0, a.useContext)(i);
            }
        },
        22873: (e) => {
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
        28724: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => E });
            var a = r(32290),
                i = r(63618),
                l = r(96103),
                o = r(55178),
                s = r(39407),
                n = r(21732),
                d = r(91027),
                c = r(63423),
                u = r(71926),
                m = r(70204),
                v = r(34186),
                _ = r(83808),
                f = r(20472),
                g = r(84062),
                x = r(85017),
                p = r(19379),
                h = r(61258),
                A = r(76768),
                T = r.n(A);
            let N = {
                    [x.n.ALBUM]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                E = (0, l.PA)((e) => {
                    var t;
                    let { modalState: r, data: l, onClose: A, className: E } = e,
                        C = null != l ? l : null == r ? void 0 : r.modalData,
                        b = (0, _.W)(),
                        j = (0, g.Z)(f.Z.main.href),
                        I = (0, v.N)().get(m.U2),
                        S = (0, d.c)(() => {
                            if (A) return A();
                            b.canBack && b.back(), j();
                        }),
                        k = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, d.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = I.get(p.c.ExEx),
                                a = new Date(),
                                i = a.setMinutes(a.getMinutes() + 15),
                                l =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            t ? I.set(p.c.ExEx, [...t, l], { expires: new Date(i) }) : I.set(p.c.ExEx, [l], { expires: new Date(i) }),
                                null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler();
                        }),
                        P = (0, d.c)(() => {
                            (null == r ? void 0 : r.shouldHistoryBack) ? (null == A || A(), b.canBack && b.back(), j()) : null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler();
                        });
                    (0, o.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let R = (0, o.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(T().title, T().text),
                                            'data-test-id': n.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: T().text,
                                            'data-test-id': n.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        k &&
                                            (0, a.jsx)(h.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: T().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = C.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [C, k]),
                        L = (0, o.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: T().buttons,
                                          children: [
                                              (0, a.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: T().button,
                                                  'data-test-id': n.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: T().button,
                                                  'data-test-id': n.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && N[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: T().buttons,
                                          children: (0, a.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: S,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: T().button,
                                              'data-test-id': n.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, S, P],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(T().root, E),
                        'data-test-id': n.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: T().container, children: [R, L] }),
                    });
                });
        },
        31286: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => l });
            var a = r(55178),
                i = r(91027);
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
        33898: (e, t, r) => {
            'use strict';
            var a;
            r.d(t, { Z: () => a }),
                (function (e) {
                    (e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED');
                })(a || (a = {}));
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
        38653: (e) => {
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
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40783: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => i });
            var a = r(55178);
            let i = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        44338: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(31995);
            function i(e, t) {
                var r;
                return (0, a.Y)(e, null != (r = null == t ? void 0 : t.maxLength) ? r : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var a = r(32290),
                i = r(63618),
                l = r(8055),
                o = r(55178);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: i, ...l } = e,
                        o = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': o, style: { ...t }, ref: r, ...l });
                },
                n = (0, o.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
            var d = r(39684),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: o, [c().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var v = r(62060),
                _ = r(31417);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            ...c
                        } = e,
                        [u, m] = (0, o.useState)(null),
                        f = (0, o.useMemo)(
                            () =>
                                (0, v.A)((e) => {
                                    if ((null == i || i(e), n.length > 0 && m(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < a; e++) r(e);
                                    }
                                }, l),
                            [l, i, t, r, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && u && f(u);
                    }, n);
                    let g = (0, o.useMemo)(() => {
                        if (d)
                            return (0, v.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, a.jsx)(_.sN, { rangeChanged: f, totalCount: s, endReached: g, ...c });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: v,
                            listClassName: _,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: p,
                            totalRequests: h,
                            debounceDurationInMs: A,
                            initialItemCount: T,
                            minInitialItemCount: N = 20,
                            handleRef: E,
                            alwaysShowScrollbar: C = !1,
                            testId: b,
                            isMobileLayout: j = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...S
                        } = e,
                        [k, O] = (0, o.useState)(!1),
                        P = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        R = (0, o.useMemo)(() => {
                            var e, t;
                            return j
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, h, j]),
                        L = T ? Math.min(T, N) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, i.$)(c().root, { [c().root_scrolling]: k || C, [c().root_notScrolling]: !k && !C }, t),
                        'data-test-id': b,
                        children: [
                            j && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(f, {
                                overscan: g,
                                components: R,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: P,
                                itemContent: v,
                                scrollerRef: E,
                                totalCount: p,
                                pageSize: x,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...S,
                            }),
                            j && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        48977: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => u });
            var a = r(16172),
                i = r(52068),
                l = r(91027),
                o = r(79374),
                s = r(84782),
                n = r(2792),
                d = r(37240),
                c = r(62376);
            let u = () => {
                let { hash: e } = (0, i.gf)(),
                    t = (0, c.U)(),
                    r = (0, i.st)(),
                    { pageId: u } = (0, d.$)(),
                    { blockId: m, blockType: v, blockPosX: _, blockPosY: f } = (0, s.N)(),
                    { objectType: g, objectId: x, objectPosX: p, objectPosY: h, objectsCount: A, mainObjectId: T, mainObjectType: N } = (0, n.J)();
                return (0, l.c)((i, l) => {
                    if (!r || !u) return;
                    let s = o.W[u];
                    if (!s) return;
                    let n = (0, a.Fx)({
                        params: {
                            objectType: g,
                            objectId: x,
                            objectPosX: p,
                            objectPosY: h,
                            hash: e,
                            pageId: s,
                            mainObjectType: N,
                            mainObjectId: T,
                            entityType: v,
                            entityId: m,
                            entityPosX: _,
                            entityPosY: f,
                            objectsCount: A,
                            viewUuid: l,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    n && (i ? (0, a.Pf)(r.evgenInstance, n) : (0, a.nv)(r.evgenInstance, n));
                });
            };
        },
        50168: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(32290),
                i = r(63618),
                l = r(96103),
                o = r(55178),
                s = r(79856),
                n = r(57594),
                d = r(37318),
                c = r.n(d);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, n.g)(),
                    u = (0, o.useMemo)(
                        () =>
                            d
                                ? (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().desktopPlayButton, isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, d],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, i.$)(c().root, t),
                    children: [
                        (0, a.jsx)(s.W, { className: c().cover, radius: r, isActive: l }),
                        (0, a.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, a.jsx)(s.W, { className: c().entityName, radius: 's', isActive: l }),
                                        (0, a.jsx)(s.W, { className: c().title, radius: 'xl', isActive: l }),
                                        (0, a.jsx)(s.W, { className: c().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            var a = r(91945),
                i = r(29222);
            class l extends i.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    super(e, { code: t, ...r }), (0, a._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype);
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var a;
            r.d(t, { X: () => a }),
                (function (e) {
                    (e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT');
                })(a || (a = {}));
        },
        51714: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o });
            var a = r(55178),
                i = r(31010),
                l = r(36477);
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
        57815: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var a = r(87151);
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
        60101: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => m });
            var a = r(32290),
                i = r(96103),
                l = r(55178),
                o = r(60900),
                s = r(80451),
                n = r(21732),
                d = r(63423),
                c = r(82586);
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
                        ...(0, s.getDataAttrFromProps)(m),
                        'data-test-id': n.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        65024: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => i });
            let a = new Set(Object.values(r(3785).M)),
                i = (e) => 'string' == typeof e && a.has(e);
        },
        66075: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                i = r(72812),
                l = r(55178),
                o = {
                    6699: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0);
                        let a = r(352),
                            i = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: l } = e,
                                o = (0, i.useRef)(null),
                                [s, n] = (0, i.useState)(!!r),
                                d = (0, i.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            n(!r),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    n(!!r);
                                                }, t));
                                        }, l),
                                    [t, r, l],
                                ),
                                c = (0, i.useCallback)(() => {
                                    n(!!r), o.current && window.clearTimeout(o.current);
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    2767: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0);
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
                    2067: (e, t, r) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0);
                        let a = r(810),
                            i = r(361),
                            l = r(6699);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: o } = e,
                                { state: s, handleDebouncedToggle: n } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, a.useCallback)(() => {
                                    r && n(), null == t || t();
                                }, [r, n, t]);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (0, i.getElementFromRefOrElement)(o);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return t.addEventListener('scroll', d, r), () => t.removeEventListener('scroll', d, r);
                                }, [o, d]),
                                s
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
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(l, 2));
                    },
                },
                s = {};
            function n(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return o[e](r, r.exports, n), r.exports;
            }
            var d = {};
            (() => {
                Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0);
                let e = n(810),
                    t = n(2067),
                    r = n(2767);
                d.useElementOffsetY = (a) => {
                    let [i, l] = (0, r.useForceUpdateRef)(),
                        [o, s] = (0, e.useState)(),
                        n = (0, e.useCallback)(() => {
                            let e = null == i ? void 0 : i.getBoundingClientRect();
                            e && s(e.y);
                        }, [i]);
                    return (0, e.useLayoutEffect)(n), (0, t.useScroll)({ onScroll: n, elementRef: a }), { forceUpdateRefCallback: l, offsetY: o };
                };
            })(),
                d.__esModule;
            var c = d.useElementOffsetY;
        },
        73155: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var a = r(80451);
            let i = (e) => {
                if (!e) return null;
                let { h: t, s: r, l: i } = (0, a.hexToHsl)(e),
                    l = Math.min(70, Math.max(10, i + 10));
                return 'hsl('.concat(t, 'deg, ').concat(r, '%, ').concat(l, '%)');
            };
        },
        76768: (e) => {
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
        79288: (e, t, r) => {
            'use strict';
            r.r(t), r.d(t, { default: () => te });
            var a = r(32290),
                i = r(21916),
                l = r(96103),
                o = r(55178),
                s = r(60900),
                n = r(21732),
                d = r(73474),
                c = r(91027),
                u = r(66075),
                m = r(46049),
                v = r(50168),
                _ = r(63618),
                f = r(39407),
                g = r(16172),
                x = r(71483),
                p = r(63423),
                h = r(82586),
                A = r(71926),
                T = r(80528),
                N = r(90840),
                E = r(5942),
                C = r(70390),
                b = r(71735),
                j = r(37862),
                I = r(48922),
                S = r(2969),
                k = r(54391),
                O = r(95226),
                P = r(26042),
                R = r(72396),
                L = r(46200),
                y = r(5537),
                D = r(96434),
                H = r(84062),
                w = r(90169),
                B = r(57594),
                M = r(92744),
                U = r(10180),
                z = r(90326),
                F = r(29268),
                W = r(11260),
                X = r(4008),
                G = r(73155),
                K = r(87863),
                Q = r(8055),
                Y = r(5749),
                $ = r(48977),
                V = r(60101),
                Z = r(23352),
                q = r(59576);
            let J = (0, l.PA)((e) => {
                let { url: t, iconSize: r, controlSize: i, className: l, 'aria-label': o, ref: s } = e,
                    n = (0, H.Z)(t),
                    d = (0, Y.c)(),
                    u = (0, $.C)(),
                    { ref: m, intersectionPropertyId: v } = (0, Z.n)({ callback: u, withViewUuid: !0 }),
                    _ = (0, c.c)((e) => {
                        d(g.QT.Link, t), n(e);
                    });
                return (0, a.jsx)('div', {
                    ref: s,
                    'data-intersection-property-id': q.N,
                    className: l,
                    children: (0, a.jsx)(V.v, { 'data-intersection-property-id': v, iconSize: r, size: i, onClick: _, ref: m, 'aria-label': o }),
                });
            });
            var ee = r(73395),
                et = r(8576),
                er = r(54862),
                ea = r(70280),
                ei = r(83920),
                el = r(59518),
                eo = r(34284),
                es = r(46151),
                en = r(38653),
                ed = r.n(en);
            let ec = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                eu = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, B.g)(),
                        { contentRef: i } = (0, ei.g)(),
                        { setIsOnboardingOpened: l } = (0, es.w)(),
                        [s, n] = (0, er.d)(),
                        d = (0, eo.z)({ id: el.h.ARTIST_DONATION_BUTTON, ref: s }),
                        [u, m] = (0, o.useState)(d),
                        v = (0, c.c)(() => {
                            m(!1), l(!1);
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
                        referenceRef: n,
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
                    let { className: m, artistMeta: v, entitiesData: Y, forwardRef: $, onCoverClick: V } = e,
                        { shouldShowBuySubscriptionModal: Z, showBuySubscriptionModal: q } = (0, L.q)(),
                        { from: er, utmLink: ea } = (0, R.f)({
                            pageId: I._Q.ARTIST,
                            blockId: j.U.ARTIST,
                            contextType: x.K.Artist,
                            contextId: null == v ? void 0 : v.artist.id,
                        }),
                        ei = (0, E.K)(null == v ? void 0 : v.artist),
                        el = (0, C.A)(null == v ? void 0 : v.artist),
                        eo = (0, k.F)(),
                        { formatMessage: es } = (0, s.A)(),
                        [en, ec] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: em },
                            trailer: ev,
                            user: e_,
                            slam: { isOfflineModeEnabled: ef },
                            paywall: { modal: eg },
                        } = (0, B.g)(),
                        ex = (0, S.b)(),
                        ep = (0, b.P)(),
                        eh = (0, N.Q)(),
                        eA = !!(null == v || null == (t = v.artist.trailer) ? void 0 : t.isAvailable) && !em,
                        eT = !em,
                        eN = !!(null == v ? void 0 : v.donationUrl),
                        eE = em && !e_.isAuthorized,
                        eC = em && !e_.hasPlus && e_.isAuthorized,
                        eb = eE || eC,
                        ej = (0, y.N)(),
                        eI = (0, D.c)(null == v ? void 0 : v.artist),
                        eS = (() => {
                            let [e, t] = (0, o.useState)(window.innerWidth < 1120),
                                r = (0, o.useMemo)(
                                    () =>
                                        (0, Q.A)(
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
                        { controlSize: ek, iconSize: eO } = (0, K.q)(em),
                        eP = (0, o.useMemo)(
                            () => ((null == v ? void 0 : v.artist.isComposer) ? es({ id: 'entity-names.composer' }) : es({ id: 'entity-names.singer' })),
                            [es, null == v ? void 0 : v.artist.isComposer],
                        ),
                        eR = !!(null == v ? void 0 : v.brandedButton) && !ef,
                        eL = (0, H.Z)(null != (u = null == v || null == (r = v.brandedButton) ? void 0 : r.url) ? u : ''),
                        ey = !eS || (eS && !eR),
                        { isPlaying: eD, togglePlay: eH } = (0, w.D)({
                            playContextParams: {
                                contextData: { type: ef ? x.K.Various : x.K.Artist, meta: { id: Number(null == v ? void 0 : v.artist.id) }, from: er, utmLink: ea },
                                loadContextMeta: !ef,
                                entitiesData: Y,
                            },
                        }),
                        ew = (0, c.c)(() => {
                            if (!ep()) {
                                if (Z) return void q();
                                if (ej) return void eg.open();
                                eH(), ex(!eD);
                            }
                        }),
                        eB = (0, o.useMemo)(() => {
                            var e, t;
                            return em
                                ? (0, a.jsx)(z.D, {
                                      className: (0, _.$)(ed().playControl, { [ed().playControl_withLogin]: eb }),
                                      color: eb ? 'secondary' : 'primary',
                                      buttonVariant: 'default',
                                      iconSize: eb ? eO : 'xxl',
                                      size: eb ? ek : void 0,
                                      radius: eb ? 'xxxl' : 'round',
                                      isPlaying: eD,
                                      variant: eb ? 'default' : 'filled',
                                      onClick: ew,
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
                                      isPlaying: eD,
                                      disabled: !(null == v || null == (e = v.artist) ? void 0 : e.isAvailableForPlaying) || !v.artist.isAvailable,
                                      onClick: ew,
                                      variant: 'default',
                                      children: ey && (0, a.jsx)(f.A, { id: 'player-actions.listen' }),
                                  });
                        }, [ey, null == v ? void 0 : v.artist.isAvailable, null == v ? void 0 : v.artist.isAvailableForPlaying, ew, em, eD, eb, eO, ek]),
                        eM = (0, c.c)(() => {
                            if (Z) return void q();
                            !ep() && (null == v ? void 0 : v.artist.id) && (ev.setUtmLink(ea), ev.openArtistTrailer(v.artist.id), eo(g.ky.Artist, v.artist.id));
                        }),
                        eU = (0, o.useMemo)(
                            () =>
                                eA
                                    ? (0, a.jsx)(X.WithOffline, {
                                          fallback: (0, a.jsx)(W.L, {
                                              children: (0, a.jsx)(F.k, {
                                                  size: 's',
                                                  radius: 'xxxl',
                                                  iconSize: 'xxs',
                                                  className: ed().trailerControl,
                                                  onClick: eM,
                                                  children: ey && (0, a.jsx)(f.A, { id: 'entity-names.trailer' }),
                                              }),
                                          }),
                                      })
                                    : null,
                            [ey, eM, eA],
                        ),
                        ez = (0, o.useMemo)(() => {
                            var e;
                            return em && eR
                                ? null
                                : (null == v ? void 0 : v.donationUrl) && (null == (e = v.artist) ? void 0 : e.id)
                                  ? (0, a.jsx)(O.F, {
                                        blockType: g.LA.Donations,
                                        blockId: j.U.DONATY,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        children: (0, a.jsx)(P.B, {
                                            objectType: g.ky.Donation,
                                            objectId: v.artist.id,
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: 1,
                                            mainObjectId: v.artist.id,
                                            mainObjectType: g.ky.Artist,
                                            children: (0, a.jsx)(eu, {
                                                children: (0, a.jsx)(J, { className: ed().donateControl, iconSize: eO, controlSize: ek, url: eh(v.donationUrl) }),
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
                            eR,
                            null == v ? void 0 : v.donationUrl,
                            null == v ? void 0 : v.artist.id,
                            null == v ? void 0 : v.artist.isPinned,
                            null == v ? void 0 : v.artist.isAvailable,
                            el,
                            eO,
                            ek,
                            eh,
                        ]),
                        eF = (0, o.useMemo)(() => {
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
                                        })({ isMobile: em, brandedButton: eR, pinOrDonateControl: eN || eT, trailerButton: eA }),
                                    ),
                                },
                                r = { '--baranded-button-color-background': (0, G.W)(null == v ? void 0 : v.artist.averageColor) };
                            return (0, a.jsxs)('div', {
                                style: t,
                                className: ed().controls,
                                children: [
                                    eB,
                                    eR &&
                                        (0, a.jsx)(X.WithOffline, {
                                            fallback: (0, a.jsx)(p.$, {
                                                className: ed().brandedControl,
                                                style: r,
                                                withRipple: !1,
                                                withHover: !1,
                                                radius: 'xxxl',
                                                size: 's',
                                                color: 'primary',
                                                onClick: eL,
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
                                    (0, a.jsx)(X.WithOffline, {
                                        fallback: (0, a.jsx)(M.c, {
                                            className: ed().likeControl,
                                            isLiked: null == v ? void 0 : v.artist.isLiked,
                                            onClick: ei,
                                            withRipple: !em,
                                            iconSize: eO,
                                            size: ek,
                                            variant: 'default',
                                            iconClassName: ed().likeIcon,
                                            disabled: !(null == v ? void 0 : v.artist.isAvailable) || !e_.isAuthorized,
                                        }),
                                    }),
                                    (0, a.jsx)(X.WithOffline, { fallback: ez }),
                                    (0, a.jsx)(T.g, {
                                        artist: null == v ? void 0 : v.artist,
                                        open: en,
                                        onOpenChange: ec,
                                        className: ed().menuControl,
                                        size: ek,
                                        icon: (0, a.jsx)(h.I, { size: eO, variant: 'more' }),
                                        'data-test-id': n.e8.pageHeader.ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                                ],
                            });
                        }, [
                            null == v ? void 0 : v.artist,
                            null == v || null == (i = v.brandedButton) ? void 0 : i.title,
                            ek,
                            ei,
                            eO,
                            en,
                            em,
                            eL,
                            eB,
                            ez,
                            eU,
                            e_.isAuthorized,
                            eR,
                            eT,
                            eN,
                            eA,
                        ]),
                        // for PulseSync WebHost
                        [pulseSyncHeaderInfoRevision, pulseSyncSetHeaderInfoRevision] = (0, o.useState)(0);
                    (0, o.useEffect)(() => {
                        const onNativeSlotChange = (e) => {
                            'headerInfoItems' === e.detail && pulseSyncSetHeaderInfoRevision((e) => e + 1);
                        };
                        return (
                            document.addEventListener('pulsesync:native-slot-change', onNativeSlotChange),
                            () => document.removeEventListener('pulsesync:native-slot-change', onNativeSlotChange)
                        );
                    }, []);
                    let eW = (0, o.useMemo)(() => {
                        const pulseSyncNativeArtistMetaItems = [
                                (null == v ? void 0 : v.lastMonthListeners) &&
                                    (0, a.jsxs)('div', {
                                        className: ed().label,
                                        'data-test-id': n.e8.pageHeader.ARTIST_LISTENERS_COUNT,
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
                            ].filter(Boolean),
                            pulseSyncArtistMetaItems = window.pulsesyncApi?.injectNativeSlotItems?.('headerInfoItems', pulseSyncNativeArtistMetaItems, {
                                eventDetail: null,
                                renderItem: ({ key, payload }) => {
                                    const text = String(payload?.text ?? '').trim(),
                                        icon = String(payload?.icon ?? '').trim(),
                                        label = String(payload?.label ?? text).trim();
                                    if (!text && !icon) return null;
                                    return (0, a.jsxs)(
                                        'div',
                                        {
                                            className: ed().label,
                                            ...(label ? { 'aria-label': label } : {}),
                                            'data-pulsesync-addon-header-item': 'meta',
                                            children: [
                                                icon && (0, a.jsx)(h.I, { variant: icon, size: 'xxxs' }),
                                                (0, a.jsx)(A.HL, { type: 'text', size: 'm', weight: 'medium', variant: 'span', children: text }),
                                            ],
                                        },
                                        key,
                                    );
                                },
                            }) ?? pulseSyncNativeArtistMetaItems;
                        return (0, a.jsx)('div', { className: ed().meta, children: pulseSyncArtistMetaItems });
                    }, [null == v ? void 0 : v.lastMonthListeners, pulseSyncHeaderInfoRevision]);
                    return (0, a.jsx)('div', {
                        className: ed().root,
                        children: (0, a.jsx)(ee.k, {
                            ref: $,
                            className: m,
                            entityName: eP,
                            title: (null == v || null == (l = v.artist) ? void 0 : l.name) || '',
                            meta: eW,
                            cover: (0, a.jsx)(et.I, {
                                coverVariant: 'round',
                                coverUri: null == v || null == (d = v.artist) ? void 0 : d.coverUri,
                                isAvailable: null == v ? void 0 : v.artist.isAvailable,
                                onClick: V,
                                'aria-label': V ? es({ id: 'slider.view-artist-covers' }) : void 0,
                            }),
                            controls: eF,
                            disclaimerLabel: eI,
                            headingVariant: 'h1',
                            showMobileLoginButton: eE,
                            showMobileSubscriptionButton: eC,
                        }),
                    });
                }),
                ev = (0, o.forwardRef)((e, t) => (0, a.jsx)(em, { forwardRef: t, ...e }));
            var e_ = r(64170),
                ef = r(40783),
                eg = r(7999),
                ex = r(91853),
                ep = r(8868),
                eh = r(71610),
                eA = r(22714),
                eT = r(94805),
                eN = r(3796),
                eE = r(45477),
                eC = r(75582),
                eb = r(97201),
                ej = r(36477),
                eI = r(90357),
                eS = r(28724),
                ek = r(58054),
                eO = r(32468),
                eP = r(74694),
                eR = r(57815),
                eL = r(22556),
                ey = r(44242),
                eD = r(42125),
                eH = r(44338),
                ew = r(24535),
                eB = r(47216),
                eM = r(94821),
                eU = r(26365);
            async function ez(e, t) {
                var r, a, i, l, o;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, eD.W)(t.locale),
                    n = (0, eH.N)(e.artist.name),
                    d = s({ id: 'metadata.artist-title' }, { artistTitle: e.artist.name }),
                    c = s({ id: 'metadata.artist-description' }, { artistTitle: e.artist.name });
                return {
                    title: d,
                    description: c,
                    openGraph: (0, ew.i)({
                        ogTitle: n,
                        ogDescription: c,
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: null != (i = null == (r = e.artist.cover) ? void 0 : r.uri) ? i : '',
                        siteName: s({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, eB.H)({ cardType: eM.W.APP, title: n, url: t.url, appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, ey.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (o = t.fullUrl) ? o : '', host: t.host },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': e.artist.name },
                    alternates: (0, eU.S)('/artist/:artistId', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var eF = r(22644),
                eW = r(51714),
                eX = r(92533),
                eG = r(69951),
                eK = r(88964),
                eQ = r(22748),
                eY = r(31286),
                e$ = r(98350),
                eV = r(34223),
                eZ = r(45257),
                eq = r(20279),
                eJ = r.n(eq);
            let e0 = (0, l.PA)((e) => {
                let { artistId: t } = e,
                    r = (0, eK.j)(),
                    { contentScrollRef: l, setContentScrollRef: d } = (0, ei.g)(),
                    { formatMessage: m } = (0, s.A)(),
                    {
                        artist: { offlineArtist: f },
                    } = (0, B.g)(),
                    { trackIds: g, downloadedTracks: p } = f,
                    { from: h } = (0, R.f)({ pageId: I._Q.ARTIST, blockId: j.U.TRACK_LIST }),
                    A = (0, eQ.v)(),
                    T = (0, eY.w)(),
                    { forceUpdateRefCallback: N, offsetY: E } = (0, u.G)(l),
                    { topColorStyle: C, headerStyle: b } = (0, ef.Q)(null, E),
                    S = (0, c.c)(() => {
                        r.tracksController && g.ids && p.getData(r.tracksController, g.ids);
                    });
                (0, eX.L)(S),
                    (0, o.useEffect)(() => {
                        f.meta && p.isResolved && p.items && f.setTracksCount(p.items.length);
                    }, [f, f.meta, p.isResolved, p.items]),
                    (0, o.useEffect)(() => {
                        p.isNeededToLoad && g.isResolved && S();
                    }, [p.isNeededToLoad, g.isResolved, S]),
                    (0, o.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f, t],
                    ),
                    (0, eN.J)(f.isResolved);
                let k = (0, o.useMemo)(
                        () =>
                            f.isLoading || !f.meta
                                ? (0, a.jsx)(v.c, { className: eJ().header, coverRadius: 'round' })
                                : (0, a.jsx)(ev, { className: eJ().header, artistMeta: f.meta, entitiesData: p.entitiesData, ref: N }),
                        [f.isLoading, f.meta, p.entitiesData, N],
                    ),
                    O = (0, o.useMemo)(() => ({ Header: () => k, Footer: () => (0, a.jsx)(eO.A, { children: (0, a.jsx)(ek.w, { className: eJ().footer }) }) }), [k]),
                    P = p.items ? p.items.length : 10;
                if (f.isNeededToLoad && A) {
                    let e = [f.getArtist(t, A), g.getIds(t, A)];
                    (0, o.use)(Promise.allSettled(e));
                }
                return (f.isNotFound && (0, i.notFound)(), f.isRejected || g.isRejected || p.isRejected)
                    ? (0, a.jsx)(e_.SomethingWentWrong, {})
                    : (0, a.jsx)(eA.n, {
                          pageId: I._Q.ARTIST,
                          pageEntityId: t,
                          children: (0, a.jsxs)(eg.h, {
                              scrollElement: l,
                              children: [
                                  (0, a.jsx)(eP.Y, { style: b }),
                                  (0, a.jsx)('div', { className: eJ().averageColorBackground, style: C }),
                                  (0, a.jsx)(eZ.$, {
                                      context: { listAriaLabel: m({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, _.$)(eJ().root, eJ().important),
                                      listClassName: eJ().content,
                                      customComponents: O,
                                      totalCount: P,
                                      itemContentCallback: (e) => {
                                          var t;
                                          let r = null == (t = p.items) ? void 0 : t[e];
                                          return r
                                              ? (0, a.jsx)(
                                                    eG.K,
                                                    {
                                                        track: r,
                                                        playContextParams: T(r.id, {
                                                            contextData: { type: x.K.Various, meta: { id: I._Q.ARTIST }, from: h },
                                                            entitiesData: p.entitiesData,
                                                            queueParams: { index: e, entityId: r.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    r.id,
                                                )
                                              : (0, a.jsx)(eV.D, { isActive: !0, className: eJ().trackShimmer, variant: e$.X.PLAYLIST });
                                      },
                                      debounceDurationInMs: 300,
                                      initialItemCount: P,
                                      handleRef: d,
                                      shouldTriggerRangeChangedOn: [P],
                                      testId: n.Xk.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                                  }),
                              ],
                          }),
                      });
            });
            var e1 = r(22873),
                e7 = r.n(e1),
                e2 = r(40959),
                e8 = r(90776),
                e3 = r.n(e8);
            let e6 = (0, l.PA)((e) => {
                    let { artist: t } = e;
                    return (0, a.jsx)(e2.E, {
                        landing: t.landing,
                        errorComponent: (0, a.jsx)(e_.SomethingWentWrong, { className: e3().error, withBackwardControl: !1 }),
                        containerClassName: e3().root,
                    });
                }),
                e5 = (0, l.PA)((e) => {
                    var t, r, l, _, f, g;
                    let { artistId: x, preloadedArtist: p } = e,
                        { notify: h } = (0, eC.l)(),
                        {
                            artist: A,
                            disclaimerModalState: T,
                            slam: N,
                            modals: { imageSliderModal: E },
                        } = (0, B.g)(),
                        { formatMessage: C } = (0, s.A)(),
                        b = (0, o.useRef)(0),
                        { contentScrollRef: j, setContentScrollRef: I } = (0, ei.g)(),
                        { forceUpdateRefCallback: S, offsetY: k } = (0, u.G)(j),
                        O = (0, o.useRef)(null),
                        P = (0, eT.y)(null == A || null == (r = A.meta) || null == (t = r.artist) ? void 0 : t.averageColor),
                        { topColorStyle: R, headerStyle: L } = (0, ef.Q)(P, k),
                        y = null == (l = A.meta) ? void 0 : l.hasCovers,
                        D = (0, i.useSearchParams)();
                    (0, eW.G)(x),
                        (0, ep.A)(),
                        (0, o.useEffect)(() => {
                            let e = D.get(eb.K.BLOCK);
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
                                })({ blockId: e, scrollRef: j, headerRef: O });
                        }, [A.infoLoadingState.isResolved, A.landing.isLoaded, j, D]);
                    let H = (0, ex.S)({ artist: null == (_ = A.meta) ? void 0 : _.artist, shouldHistoryBack: !0 });
                    (0, o.useEffect)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                    }, [null == (f = A.meta) ? void 0 : f.artist.isUnsafeLegal, H]),
                        (0, eF._)(A, x);
                    let w = (0, c.c)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.hasCovers) && A.meta.covers && E.openImages({ images: A.meta.covers });
                    });
                    if (N.isOfflineModeEnabled) return (0, a.jsx)(e0, { artistId: x });
                    if (A.deprecationTargetArtistId) {
                        let { href: e } = (0, ej.u)('/artist/:artistId', { params: { artistId: A.deprecationTargetArtistId } });
                        (0, i.redirect)(e);
                    }
                    (0, o.useMemo)(
                        () => () => {
                            (A.infoLoadingState.isRejected || (!A.meta && !A.infoLoadingState.isLoading && !A.infoLoadingState.isNeededToLoad)) &&
                                b &&
                                !(b.current > 0) &&
                                (h((0, a.jsx)(eI.h, { error: C({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: eE.u.ERROR }), b.current++);
                        },
                        [A.infoLoadingState.isRejected, A.infoLoadingState.isLoading, A.infoLoadingState.isNeededToLoad, A.meta, h, C],
                    )(),
                        (0, eN.J)(A.infoLoadingState.isResolved),
                        A.isInfoNotFound && (0, i.notFound)(),
                        ((e) => {
                            var t;
                            (0, o.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.infoLoadingState.isLoading &&
                                    e.meta.artist &&
                                    ez({ artist: (0, eR.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, eL.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                        })(A);
                    let M = (0, o.useMemo)(
                            () =>
                                A.infoLoadingState.isLoading || !A.meta
                                    ? (0, a.jsx)(v.c, { className: e7().header, coverRadius: 'round' })
                                    : (0, a.jsx)(ev, { className: e7().header, artistMeta: A.meta, ref: S, onCoverClick: y ? w : void 0 }),
                            [A.infoLoadingState.isLoading, A.meta, y, S, w],
                        ),
                        U = [];
                    return (A.infoLoadingState.isNeededToLoad && U.push(A.getInfo({ artistId: x, preloadedArtist: p })),
                    A.landing.isNeededToLoad && U.push(A.landing.getArtistSkeleton({ artistId: x, skeletonId: d.p.ARTIST }, { preloadBlocksCount: 2 })),
                    U.length && (0, o.use)(Promise.allSettled(U)),
                    A.isInfoSomethingWentWrong)
                        ? (0, a.jsx)(e_.SomethingWentWrong, {})
                        : (null == (g = A.meta) ? void 0 : g.artist.isLegalRejected)
                          ? (0, a.jsx)(eS.M, { modalState: T })
                          : (0, a.jsx)(eh.j, {
                                children: (0, a.jsxs)(eg.h, {
                                    scrollElement: j,
                                    children: [
                                        (0, a.jsx)(eP.Y, { style: L, innerHeaderRef: O }),
                                        (0, a.jsx)('div', { className: e7().averageColorBackground, style: R }),
                                        (0, a.jsxs)(m.N, {
                                            className: e7().root,
                                            containerClassName: e7().content,
                                            ref: I,
                                            'data-test-id': n.Xk.artist.ARTIST_PAGE,
                                            children: [
                                                (0, a.jsxs)('div', { children: [M, (0, a.jsx)(e6, { artist: A })] }),
                                                (0, a.jsx)(eO.A, { children: (0, a.jsx)(ek.w, { className: e7().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                e4 = (0, l.PA)((e) => (0, a.jsx)(eA.n, { pageId: I._Q.ARTIST, pageEntityId: e.artistId, children: (0, a.jsx)(e5, { ...e }) }));
            var e9 = r(17024);
            let te = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return (e && (0, e9.L)(e)) || (0, i.notFound)(), (0, a.jsx)(e4, { artistId: e });
            };
        },
        81442: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 79288));
        },
        87151: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var a = r(65024);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => l.G, X1: () => a.X, m5: () => i.m });
            var a = r(50961),
                i = r(50891),
                l = r(10733);
            r(33898);
        },
        90776: (e) => {
            e.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        92533: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => n });
            var a = r(55178),
                i = r(44547),
                l = r(91027),
                o = r(88964);
            let s = [i.DT.IDLE, i.DT.DOWNLOADED],
                n = (e) => {
                    var t;
                    let r = (0, o.j)(),
                        n = (0, l.c)((t) => {
                            let { state: r } = t;
                            s.includes(r.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = r.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (a = r.store) || a.tracks.events.on(i.je.ENTITY_CHANGED, n),
                            () => {
                                var t, a;
                                null == (t = r.store) || t.tracks.events.off(i.je.STATE_CHANGED, e), null == (a = r.store) || a.tracks.events.off(i.je.ENTITY_CHANGED, n);
                            }
                        );
                    }, [e, n, null == (t = r.store) ? void 0 : t.tracks.events]);
                };
        },
        94218: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => m });
            var a = r(32290),
                i = r(21916),
                l = r(39407),
                o = r(21732),
                s = r(91027),
                n = r(63423),
                d = r(71926),
                c = r(70204),
                u = r(34186);
            let m = (e) => {
                let { size: t = 'm', variant: r = 'default', withRipple: m = !0, buttonText: v, isBlock: _, key: f, className: g } = e,
                    x = (0, i.useRouter)(),
                    p = (0, u.N)().get(c.QG),
                    h = (0, s.c)(() => {
                        p.authorizationUrl && x.push(p.authorizationUrl);
                    });
                return (0, a.jsx)(
                    n.$,
                    {
                        onClick: h,
                        className: g,
                        isBlock: _,
                        color: 'primary',
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: v || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        94805: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            var a = r(80451),
                i = r(14257),
                l = r(50);
            let o = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r, g: l, b: o } = (0, a.hexToRgb)(e),
                        s = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(l, ', ').concat(o, ', ').concat(s, ')');
                }
            };
        },
        96434: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            let a = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                9117, 7034, 7231, 5718, 9763, 6347, 3183, 7258, 5367, 6639, 7972, 8868, 3379, 3647, 8497, 7680, 5108, 5583, 5976, 4413, 1914, 6723, 4761, 992, 3931, 6706,
                1311, 5201, 1588, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1417, 9755, 1330, 2176, 6477, 7275, 2586, 8347, 4522, 7702, 6874, 861, 782, 4668, 9740,
                1175, 14, 8915, 8816, 2563, 6341, 3759, 4797, 4638, 277, 8160, 1385, 9710, 4547, 3350, 4220, 9562, 7358,
            ],
            () => e((e.s = 81442)),
        ),
            (_N_E = e.O());
    },
]);
