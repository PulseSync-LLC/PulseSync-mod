(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1468],
    {
        1037: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => m });
            var a = r(67379),
                i = r(17850),
                l = r(59450),
                o = r(71035),
                n = r(79670),
                s = r(26742),
                d = r(25488),
                c = r(97952),
                u = r(84e3);
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
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => g });
            var a = r(25839),
                i = r(82298),
                l = r(28631),
                o = r(74631);
            let n = (e) => {
                    let { style: t, forwardRef: r, context: i, ...l } = e,
                        o = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        n = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': o, style: { ...t }, ref: r, ...l });
                },
                s = (0, o.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
            var d = r(45300),
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
            var v = r(10508),
                _ = r(63257);
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
                            shouldTriggerRangeChangedOn: I,
                            ...k
                        } = e,
                        [y, E] = (0, o.useState)(!1),
                        P = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    E(e);
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
                                isScrolling: P,
                                itemContent: v,
                                scrollerRef: C,
                                totalCount: p,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: I,
                                ...k,
                            }),
                            S && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        7784: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => m });
            var a = r(25839),
                i = r(82298),
                l = r(61493),
                o = r(4071),
                n = r(66738),
                s = r(86869),
                d = r(6323),
                c = r(93222),
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
        10944: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(25839),
                i = r(82298),
                l = r(88204),
                o = r(74631),
                n = r(23976),
                s = r(27954),
                d = r(56918),
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
        16978: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => v });
            var a = r(25839),
                i = r(84059),
                l = r(8487),
                o = r(61493),
                n = r(71035),
                s = r(4071),
                d = r(4254),
                c = r(57024),
                u = r(36484),
                m = r(62562);
            let v = (e) => {
                let { size: t = 'm', variant: r = 'default', color: v = 'primary', withRipple: _ = !0, buttonText: f, isBlock: g, key: x, className: p } = e,
                    h = (0, i.useRouter)(),
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
                        children: f || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        17951: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var a = r(61399);
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
        19386: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o });
            var a = r(74631),
                i = r(43354),
                l = r(25895);
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
        22293: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var a = r(74631),
                i = r(67379),
                l = r(36619),
                o = r(76945),
                n = r(59450),
                s = r(71035),
                d = r(84e3),
                c = r(79670),
                u = r(97952);
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
        24328: (e) => {
            e.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        28604: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => i });
            var a = r(74631);
            let i = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        32109: (e) => {
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
        33005: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => m });
            var a = r(25839),
                i = r(88204),
                l = r(74631),
                o = r(39004),
                n = r(89288),
                s = r(61493),
                d = r(4071),
                c = r(66738);
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
        41242: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(22403);
            function i(e, t) {
                var r;
                return (0, a.Y)(e, null != (r = null == t ? void 0 : t.maxLength) ? r : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        43464: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => i });
            let a = new Set(Object.values(r(85705).M)),
                i = (e) => 'string' == typeof e && a.has(e);
        },
        45300: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        56412: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => C });
            var a = r(25839),
                i = r(82298),
                l = r(88204),
                o = r(74631),
                n = r(8487),
                s = r(61493),
                d = r(71035),
                c = r(4071),
                u = r(4254),
                m = r(36484),
                v = r(62562),
                _ = r(21784),
                f = r(53712),
                g = r(85686),
                x = r(12929),
                p = r(95067),
                h = r(97522),
                A = r(71472),
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
                        I = (0, v.N)().get(m.U2),
                        k = (0, d.c)(() => {
                            if (A) return A();
                            (T.canBack && T.back(), S());
                        }),
                        y = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        E = (0, d.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = I.get(p.c.ExEx),
                                a = new Date(),
                                i = a.setMinutes(a.getMinutes() + 15),
                                l =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? I.set(p.c.ExEx, [...t, l], { expires: new Date(i) }) : I.set(p.c.ExEx, [l], { expires: new Date(i) }),
                                null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        P = (0, d.c)(() => {
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
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: b().button,
                                                  'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(n.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: E,
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
                                              onClick: k,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: b().button,
                                              'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(n.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [E, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, k, P],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(b().root, C),
                        'data-test-id': s.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: b().container, children: [L, R] }),
                    });
                });
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
        58509: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            var a = r(89288),
                i = r(49337),
                l = r(96618);
            let o = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r, g: l, b: o } = (0, a.E2)(e),
                        n = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(l, ', ').concat(o, ', ').concat(n, ')');
                }
            };
        },
        59911: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => i });
            var a = r(74631);
            let i = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        60379: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var a = r(89288);
            let i = (e) => {
                if (!e) return null;
                let { h: t, s: r, l: i } = (0, a.g8)(e),
                    l = Math.min(70, Math.max(10, i + 10));
                return 'hsl('.concat(t, 'deg, ').concat(r, '%, ').concat(l, '%)');
            };
        },
        61288: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => i });
            let a = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        61399: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var a = r(43464);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        65133: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => te }));
            var a = r(25839),
                i = r(84059),
                l = r(88204),
                o = r(74631),
                n = r(39004),
                s = r(61493),
                d = r(97762),
                c = r(71035),
                u = r(72115),
                m = r(13833),
                v = r(10944),
                _ = r(82298),
                f = r(8487),
                g = r(36619),
                x = r(22939),
                p = r(4071),
                h = r(66738),
                A = r(4254),
                b = r(21971),
                j = r(49200),
                C = r(7361),
                N = r(90613),
                T = r(79367),
                S = r(40110),
                I = r(20258),
                k = r(47009),
                y = r(34159),
                E = r(57138),
                P = r(95314),
                L = r(30290),
                R = r(29872),
                O = r(61561),
                w = r(72378),
                H = r(85686),
                D = r(50209),
                M = r(27954),
                B = r(64720),
                U = r(41580),
                z = r(49438),
                W = r(71996),
                F = r(95924),
                K = r(6304),
                G = r(60379),
                $ = r(49999),
                Y = r(28631),
                X = r(1037),
                Q = r(95641),
                V = r(33005),
                Z = r(52512),
                q = r(49984);
            let J = (0, l.PA)((e) => {
                let { url: t, iconSize: r, controlSize: i, className: l, 'aria-label': o, ref: n } = e,
                    s = (0, H.Z)(t),
                    d = (0, X.c)(),
                    u = (0, Q.C)(),
                    { ref: m, intersectionPropertyId: v } = (0, Z.n)({ callback: u, withViewUuid: !0 }),
                    _ = (0, c.c)((e) => {
                        (d(g.AppScreen.Link, t), s(e));
                    });
                return (0, a.jsx)('div', {
                    ref: n,
                    'data-intersection-property-id': q.N,
                    className: l,
                    children: (0, a.jsx)(V.v, { 'data-intersection-property-id': v, iconSize: r, size: i, onClick: _, ref: m, 'aria-label': o }),
                });
            });
            var ee = r(92543),
                et = r(7784),
                er = r(68934),
                ea = r(3392),
                ei = r(89192),
                el = r(91062),
                eo = r(8900),
                en = r(75167),
                es = r(32109),
                ed = r.n(es);
            let ec = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                eu = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, M.g)(),
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
                    let { className: m, artistMeta: v, entitiesData: X, forwardRef: Q, onCoverClick: V } = e,
                        { shouldShowBuySubscriptionModal: Z, showBuySubscriptionModal: q } = (0, R.q)(),
                        { from: er, utmLink: ea } = (0, L.f)({
                            pageId: I._Q.ARTIST,
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
                        } = (0, M.g)(),
                        ex = (0, k.b)(),
                        ep = (0, T.P)(),
                        eh = (0, j.Q)(),
                        eA = !!(null == v || null == (t = v.artist.trailer) ? void 0 : t.isAvailable) && !em,
                        eb = !em,
                        ej = !!(null == v ? void 0 : v.donationUrl),
                        eC = em && !e_.isAuthorized,
                        eN = em && !e_.hasPlus && e_.isAuthorized,
                        eT = eC || eN,
                        eS = (0, O.N)(),
                        eI = (0, w.c)(null == v ? void 0 : v.artist),
                        ek = (() => {
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
                        { controlSize: ey, iconSize: eE } = (0, $.q)(em),
                        eP = (0, o.useMemo)(
                            () => ((null == v ? void 0 : v.artist.isComposer) ? en({ id: 'entity-names.composer' }) : en({ id: 'entity-names.singer' })),
                            [en, null == v ? void 0 : v.artist.isComposer],
                        ),
                        eL = !!(null == v ? void 0 : v.brandedButton) && !ef,
                        eR = (0, H.Z)(null != (u = null == v || null == (r = v.brandedButton) ? void 0 : r.url) ? u : ''),
                        eO = !ek || (ek && !eL),
                        { isPlaying: ew, togglePlay: eH } = (0, D.D)({
                            playContextParams: {
                                contextData: { type: ef ? x.K.Various : x.K.Artist, meta: { id: Number(null == v ? void 0 : v.artist.id) }, from: er, utmLink: ea },
                                loadContextMeta: !ef,
                                entitiesData: X,
                            },
                        }),
                        eD = (0, c.c)(() => {
                            if (!ep()) {
                                if (Z) return void q();
                                if (eS) return void eg.open();
                                (eH(), ex(!ew));
                            }
                        }),
                        eM = (0, o.useMemo)(() => {
                            var e, t;
                            return em
                                ? (0, a.jsx)(z.D, {
                                      className: (0, _.$)(ed().playControl, { [ed().playControl_withLogin]: eT }),
                                      color: eT ? 'secondary' : 'primary',
                                      buttonVariant: 'default',
                                      iconSize: eT ? eE : 'xxl',
                                      size: eT ? ey : void 0,
                                      radius: eT ? 'xxxl' : 'round',
                                      isPlaying: ew,
                                      variant: eT ? 'default' : 'filled',
                                      onClick: eD,
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
                                      onClick: eD,
                                      variant: 'default',
                                      children: eO && (0, a.jsx)(f.A, { id: 'player-actions.listen' }),
                                  });
                        }, [eO, null == v ? void 0 : v.artist.isAvailable, null == v ? void 0 : v.artist.isAvailableForPlaying, eD, em, ew, eT, eE, ey]),
                        eB = (0, c.c)(() => {
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
                                                  onClick: eB,
                                                  children: eO && (0, a.jsx)(f.A, { id: 'entity-names.trailer' }),
                                              }),
                                          }),
                                      })
                                    : null,
                            [eO, eB, eA],
                        ),
                        ez = (0, o.useMemo)(() => {
                            var e;
                            return em && eL
                                ? null
                                : (null == v ? void 0 : v.donationUrl) && (null == (e = v.artist) ? void 0 : e.id)
                                  ? (0, a.jsx)(E.F, {
                                        blockType: g.EntityTypes.Donations,
                                        blockId: S.U.DONATY,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        children: (0, a.jsx)(P.B, {
                                            objectType: g.DomainObjectType.Donation,
                                            objectId: v.artist.id,
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: 1,
                                            mainObjectId: v.artist.id,
                                            mainObjectType: g.DomainObjectType.Artist,
                                            children: (0, a.jsx)(eu, {
                                                children: (0, a.jsx)(J, { className: ed().donateControl, iconSize: eE, controlSize: ey, url: eh(v.donationUrl) }),
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
                            eE,
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
                                    eM,
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
                                        fallback: (0, a.jsx)(B.c, {
                                            className: ed().likeControl,
                                            isLiked: null == v ? void 0 : v.artist.isLiked,
                                            onClick: ei,
                                            withRipple: !em,
                                            iconSize: eE,
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
                                        icon: (0, a.jsx)(h.I, { size: eE, variant: 'more' }),
                                        'data-test-id': s.e8.pageHeader.ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                                ],
                            });
                        }, [
                            null == v ? void 0 : v.artist,
                            null == v || null == (i = v.brandedButton) ? void 0 : i.title,
                            ey,
                            ei,
                            eE,
                            es,
                            em,
                            eR,
                            eM,
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
                            ref: Q,
                            className: m,
                            entityName: eP,
                            title: (null == v || null == (l = v.artist) ? void 0 : l.name) || '',
                            meta: eF,
                            cover: (0, a.jsx)(et.I, {
                                coverVariant: 'round',
                                coverUri: null == v || null == (d = v.artist) ? void 0 : d.coverUri,
                                isAvailable: null == v ? void 0 : v.artist.isAvailable,
                                onClick: V,
                                'aria-label': V ? en({ id: 'slider.view-artist-covers' }) : void 0,
                            }),
                            controls: eW,
                            disclaimerLabel: eI,
                            headingVariant: 'h1',
                            showMobileLoginButton: eC,
                            showMobileSubscriptionButton: eN,
                        }),
                    });
                }),
                ev = (0, o.forwardRef)((e, t) => (0, a.jsx)(em, { forwardRef: t, ...e }));
            var e_ = r(78299),
                ef = r(59911),
                eg = r(1407),
                ex = r(1797),
                ep = r(22293),
                eh = r(95858),
                eA = r(10322),
                eb = r(58509),
                ej = r(30716),
                eC = r(91149),
                eN = r(92942),
                eT = r(6969),
                eS = r(25895),
                eI = r(57549),
                ek = r(56412),
                ey = r(99401),
                eE = r(26076),
                eP = r(10603),
                eL = r(17951),
                eR = r(61732),
                eO = r(12234),
                ew = r(89221),
                eH = r(41242),
                eD = r(27935),
                eM = r(41016),
                eB = r(80461),
                eU = r(95445);
            async function ez(e, t) {
                var r, a, i, l, o;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, ew.W)(t.locale),
                    s = (0, eH.N)(e.artist.name),
                    d = n({ id: 'metadata.artist-title' }, { artistTitle: e.artist.name }),
                    c = n({ id: 'metadata.artist-description' }, { artistTitle: e.artist.name });
                return {
                    title: d,
                    description: c,
                    openGraph: (0, eD.i)({
                        ogTitle: s,
                        ogDescription: c,
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: null != (i = null == (r = e.artist.cover) ? void 0 : r.uri) ? i : '',
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, eM.H)({ cardType: eB.W.APP, title: s, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, eO.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (o = t.fullUrl) ? o : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': e.artist.name },
                    alternates: (0, eU.S)('/artist/:artistId', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var eW = r(28604),
                eF = r(19386),
                eK = r(82589),
                eG = r(82967),
                e$ = r(96444),
                eY = r(93956),
                eX = r(79422),
                eQ = r(3718),
                eV = r(97805),
                eZ = r(6968),
                eq = r(95687),
                eJ = r.n(eq);
            let e0 = (0, l.PA)((e) => {
                let { artistId: t } = e,
                    r = (0, e$.j)(),
                    { contentScrollRef: l, setContentScrollRef: d } = (0, ei.g)(),
                    { formatMessage: m } = (0, n.A)(),
                    {
                        artist: { offlineArtist: f },
                    } = (0, M.g)(),
                    { trackIds: g, downloadedTracks: p } = f,
                    { from: h } = (0, L.f)({ pageId: I._Q.ARTIST, blockId: S.U.TRACK_LIST }),
                    A = (0, eY.v)(),
                    b = (0, eX.w)(),
                    { forceUpdateRefCallback: j, offsetY: C } = (0, u.G)(l),
                    { topColorStyle: N, headerStyle: T } = (0, ef.Q)(null, C),
                    k = (0, c.c)(() => {
                        r.tracksController && g.ids && p.getData(r.tracksController, g.ids);
                    });
                ((0, eK.L)(k),
                    (0, o.useEffect)(() => {
                        f.meta && p.isResolved && p.items && f.setTracksCount(p.items.length);
                    }, [f, f.meta, p.isResolved, p.items]),
                    (0, o.useEffect)(() => {
                        p.isNeededToLoad && g.isResolved && k();
                    }, [p.isNeededToLoad, g.isResolved, k]),
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
                    E = (0, o.useMemo)(() => ({ Header: () => y, Footer: () => (0, a.jsx)(eE.A, { children: (0, a.jsx)(ey.w, { className: eJ().footer }) }) }), [y]),
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
                                  (0, a.jsx)(eP.Y, { style: T }),
                                  (0, a.jsx)('div', { className: eJ().averageColorBackground, style: N }),
                                  (0, a.jsx)(eZ.$, {
                                      context: { listAriaLabel: m({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, _.$)(eJ().root, eJ().important),
                                      listClassName: eJ().content,
                                      customComponents: E,
                                      totalCount: P,
                                      itemContentCallback: (e) => {
                                          var t;
                                          let r = null == (t = p.items) ? void 0 : t[e];
                                          return r
                                              ? (0, a.jsx)(
                                                    eG.K,
                                                    {
                                                        track: r,
                                                        playContextParams: b(r.id, {
                                                            contextData: { type: x.K.Various, meta: { id: I._Q.ARTIST }, from: h },
                                                            entitiesData: p.entitiesData,
                                                            queueParams: { index: e, entityId: r.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    r.id,
                                                )
                                              : (0, a.jsx)(eV.D, { isActive: !0, className: eJ().trackShimmer, variant: eQ.X.PLAYLIST });
                                      },
                                      debounceDurationInMs: 300,
                                      initialItemCount: P,
                                      handleRef: d,
                                      shouldTriggerRangeChangedOn: [P],
                                      testId: s.Xk.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                                  }),
                              ],
                          }),
                      });
            });
            var e1 = r(65846),
                e2 = r.n(e1),
                e9 = r(32113),
                e3 = r(24328),
                e8 = r.n(e3);
            let e4 = (0, l.PA)((e) => {
                    let { artist: t } = e;
                    return (0, a.jsx)(e9.E, {
                        landing: t.landing,
                        errorComponent: (0, a.jsx)(e_.SomethingWentWrong, { className: e8().error, withBackwardControl: !1 }),
                        containerClassName: e8().root,
                    });
                }),
                e7 = (0, l.PA)((e) => {
                    var t, r, l, _, f, g;
                    let { artistId: x, preloadedArtist: p } = e,
                        { notify: h } = (0, eN.l)(),
                        {
                            artist: A,
                            disclaimerModalState: b,
                            slam: j,
                            modals: { imageSliderModal: C },
                        } = (0, M.g)(),
                        { formatMessage: N } = (0, n.A)(),
                        T = (0, o.useRef)(0),
                        { contentScrollRef: S, setContentScrollRef: I } = (0, ei.g)(),
                        { forceUpdateRefCallback: k, offsetY: y } = (0, u.G)(S),
                        E = (0, o.useRef)(null),
                        P = (0, eb.y)(null == A || null == (r = A.meta) || null == (t = r.artist) ? void 0 : t.averageColor),
                        { topColorStyle: L, headerStyle: R } = (0, ef.Q)(P, y),
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
                                })({ blockId: e, scrollRef: S, headerRef: E });
                        }, [A.infoLoadingState.isResolved, A.landing.isLoaded, S, w]));
                    let H = (0, ex.S)({ artist: null == (_ = A.meta) ? void 0 : _.artist, shouldHistoryBack: !0 });
                    ((0, o.useEffect)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                    }, [null == (f = A.meta) ? void 0 : f.artist.isUnsafeLegal, H]),
                        (0, eW._)(A, x));
                    let D = (0, c.c)(() => {
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
                                (h((0, a.jsx)(eI.h, { error: N({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: eC.u.ERROR }), T.current++);
                        },
                        [A.infoLoadingState.isRejected, A.infoLoadingState.isLoading, A.infoLoadingState.isNeededToLoad, A.meta, h, N],
                    )(),
                        (0, ej.J)(A.infoLoadingState.isResolved),
                        A.isInfoNotFound && (0, i.notFound)(),
                        ((e) => {
                            var t;
                            (0, o.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.infoLoadingState.isLoading &&
                                    e.meta.artist &&
                                    ez({ artist: (0, eL.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, eR.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                        })(A));
                    let B = (0, o.useMemo)(
                            () =>
                                A.infoLoadingState.isLoading || !A.meta
                                    ? (0, a.jsx)(v.c, { className: e2().header, coverRadius: 'round' })
                                    : (0, a.jsx)(ev, { className: e2().header, artistMeta: A.meta, ref: k, onCoverClick: O ? D : void 0 }),
                            [A.infoLoadingState.isLoading, A.meta, O, k, D],
                        ),
                        U = [];
                    return (A.infoLoadingState.isNeededToLoad && U.push(A.getInfo({ artistId: x, preloadedArtist: p })),
                    A.landing.isNeededToLoad && U.push(A.landing.getArtistSkeleton({ artistId: x, skeletonId: d.p.ARTIST }, { preloadBlocksCount: 2 })),
                    U.length && (0, o.use)(Promise.allSettled(U)),
                    A.isInfoSomethingWentWrong)
                        ? (0, a.jsx)(e_.SomethingWentWrong, {})
                        : (null == (g = A.meta) ? void 0 : g.artist.isLegalRejected)
                          ? (0, a.jsx)(ek.M, { modalState: b })
                          : (0, a.jsx)(eh.j, {
                                children: (0, a.jsxs)(eg.h, {
                                    scrollElement: S,
                                    children: [
                                        (0, a.jsx)(eP.Y, { style: R, innerHeaderRef: E }),
                                        (0, a.jsx)('div', { className: e2().averageColorBackground, style: L }),
                                        (0, a.jsxs)(m.N, {
                                            className: e2().root,
                                            containerClassName: e2().content,
                                            ref: I,
                                            'data-test-id': s.Xk.artist.ARTIST_PAGE,
                                            children: [
                                                (0, a.jsxs)('div', { children: [B, (0, a.jsx)(e4, { artist: A })] }),
                                                (0, a.jsx)(eE.A, { children: (0, a.jsx)(ey.w, { className: e2().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                e6 = (0, l.PA)((e) => (0, a.jsx)(eA.n, { pageId: I._Q.ARTIST, pageEntityId: e.artistId, children: (0, a.jsx)(e7, { ...e }) }));
            var e5 = r(61288);
            let te = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, e5.L)(e)) || (0, i.notFound)(), (0, a.jsx)(e6, { artistId: e }));
            };
        },
        65846: (e) => {
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
        71472: (e) => {
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
        72115: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                i = r(6274),
                l = r(74631),
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
        72378: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            let a = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        78373: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 65133));
        },
        79422: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => l });
            var a = r(74631),
                i = r(71035);
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
        82589: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => s });
            var a = r(74631),
                i = r(8187),
                l = r(71035),
                o = r(96444);
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
        85705: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { M: () => a }),
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
        },
        86166: (e, t, r) => {
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
        93956: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i, v: () => l });
            var a = r(74631);
            let i = (0, a.createContext)(null);
            function l() {
                return (0, a.useContext)(i);
            }
        },
        95641: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => m });
            var a = r(67379),
                i = r(17850),
                l = r(59450),
                o = r(71035),
                n = r(79670),
                s = r(26742),
                d = r(25488),
                c = r(97952),
                u = r(84e3);
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
        95687: (e) => {
            e.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3397, 3349, 7339, 1676, 3472, 6287, 2121, 7349, 6749, 9613, 9554, 1107, 8451, 1583, 8561, 2e3, 1632, 5743, 3084, 3021, 5058, 3789, 9468, 364, 6706, 1311,
                5201, 546, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 3257, 4305, 2917, 8421, 3381, 3269, 4163, 3246, 4517, 3482, 6680, 6504, 5329, 8836,
                820, 4434, 48, 862, 6361, 5898, 2533, 8222, 4932, 5622, 9973, 5853, 6271, 7804, 2010, 7198, 4475, 5056, 7358,
            ],
            () => e((e.s = 78373)),
        ),
            (_N_E = e.O()));
    },
]);
