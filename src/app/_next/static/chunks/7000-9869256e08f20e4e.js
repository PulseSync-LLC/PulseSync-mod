(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7e3],
    {
        108: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(2058),
                n = a(61691);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        416: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(17392),
                l = a(7802),
                d = a(29993),
                c = a(50408),
                u = a(79070),
                _ = a(96817),
                m = a(29504),
                p = a(86462),
                v = a(78940),
                h = a(72288),
                b = a(63826),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                var t, a, r, b;
                let { anchorId: f, screenId: g, button: A, buttonSize: N, buttonClassName: C, textClassName: y, feedbackToken: T, hide: E } = e,
                    { communication: S } = (0, h.g)(),
                    [B] = (0, c.d)(),
                    { openPaymentWidgetModal: I } = (0, p.D)({
                        storeName: 'music',
                        communicationId: null != (b = null == (t = A.action) ? void 0 : t.communicationId) ? b : '',
                        offerElement: { element: B, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = A.action) ? void 0 : a.communicationId),
                    }),
                    w = ((null == (r = A.action) ? void 0 : r.type) === l.T.LINK && A.action.value) || '',
                    j = (0, v.Z)(w),
                    P = (0, d.c)((e) => {
                        if (A.action)
                            switch ((f && g && A.action.id && S.action(f, g, A.action.id, T), A.action.type)) {
                                case l.T.PAYWALL:
                                    (I(), null == E || E());
                                    return;
                                case l.T.LINK:
                                    A.action.value && (j(e), null == E || E());
                                    return;
                                case l.T.CLOSE:
                                    null == E || E();
                                    return;
                            }
                    }),
                    k = (0, o.useMemo)(() => {
                        if (A.textColor) return { color: A.textColor };
                    }, [A.textColor]),
                    L = (0, u.L)(() => {
                        var e;
                        switch (null == (e = A.action) ? void 0 : e.type) {
                            case l.T.LINK:
                                return s.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case l.T.CLOSE:
                                return s.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return s.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, i.jsx)(_.$, {
                    className: (0, n.$)(x().root, x()['root_'.concat(A.color)], C),
                    role: w ? 'link' : 'button',
                    color: A.color ? A.color : void 0,
                    radius: 'xxxl',
                    onClick: P,
                    size: N,
                    'data-test-id': L,
                    children: (0, i.jsx)(m.HL, { className: (0, n.$)(x().text, y), variant: 'div', type: 'text', size: 'm', style: k, children: A.text }),
                });
            });
        },
        631: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, n, r;
                let o = null != (r = null == (n = document.getElementById(t)) || null == (i = n.querySelector('iframe')) ? void 0 : i.contentWindow) ? r : null;
                return null !== o && e.source === o && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        2258: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { v: () => i }),
                (function (e) {
                    ((e.ON_START_BAR_BELOW = 'music-web-on-start-bar-bellow'), (e.ON_START_FULLSCREEN = 'music-web-on-start-fullscreen'));
                })(i || (i = {})));
        },
        3030: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        3474: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var i,
                n = a(5120);
            !(function (e) {
                ((e.PRIMARY = 'primary'), (e.SECONDARY = 'secondary'), (e.PLUS = 'plus'));
            })(i || (i = {}));
            var r = a(7802);
            let o = n.gK.model('CommunicationButtonAction', {
                    id: n.gK.maybeNull(n.gK.string),
                    type: n.gK.maybeNull(n.gK.enumeration(Object.values(r.T))),
                    value: n.gK.maybeNull(n.gK.string),
                    communicationId: n.gK.maybeNull(n.gK.string),
                }),
                s = n.gK.model('CommunicationButton', {
                    text: n.gK.maybeNull(n.gK.string),
                    color: n.gK.maybeNull(n.gK.enumeration(Object.values(i))),
                    action: n.gK.maybeNull(o),
                    textColor: n.gK.maybeNull(n.gK.string),
                });
        },
        3922: (e, t, a) => {
            'use strict';
            a.d(t, { DefaultLayout: () => rT });
            var i,
                n,
                r,
                o,
                s,
                l,
                d,
                c,
                u,
                _,
                m = a(88800),
                p = a(65724),
                v = a(84961),
                h = a(58390),
                b = a(79070),
                x = a(57496),
                f = a(53548),
                g = a.t(f, 2),
                A = a(2258);
            let N = { src: '/_next/static/media/recommendations-unavailable-logo.5f746fbb.png' };
            var C = a(30283),
                y = a(2058),
                T = a(88969),
                E = a(64543),
                S = a(17392),
                B = a(29993),
                I = a(52073),
                w = a(96817),
                j = a(52300),
                P = a(11372),
                k = a(17610),
                L = a(29504),
                R = a(44230),
                O = a(47964),
                D = a(72288),
                M = a(16462),
                U = a(55625),
                F = a.n(U);
            let z = (0, v.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, y.A)(),
                    {
                        vibe: i,
                        settings: { isMobile: n },
                        vibeSettings: r,
                    } = (0, D.g)(),
                    { screen: o, block: s } = (0, E.j)(),
                    l = null == o ? void 0 : o.pageIdForFrom,
                    { blockIdForFrom: d } = null != s ? s : {},
                    c = (0, f.useRef)(null),
                    u = (0, f.useRef)(null),
                    { resetContext: _ } = (0, O.B)({ seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: l, blockIdForFrom: d }),
                    { contentRef: p } = (0, R.g)();
                (0, f.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                );
                let v = !!(i.isApplying || i.isMyVibe),
                    h = (0, B.c)((e) => {
                        var t;
                        i.isApplying || (c.current && (0, I.P)(e, F().ripple, c.current), _(), null == (t = u.current) || t.focus());
                    });
                return (0, m.jsx)(P.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.modal.isOpened,
                    onOpenChange: r.modal.onOpenChange,
                    onClose: r.modal.close,
                    className: F().root,
                    contentClassName: F().modalContent,
                    overlayClassName: F().overlay,
                    portalNode: n ? null : p,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    'data-test-id': S.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                    children: (0, m.jsxs)('div', {
                        className: F().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: F().header,
                                children: [
                                    (0, m.jsx)(L.DZ, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        'data-test-id': S.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                        children: (0, m.jsx)(T.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: F().actions,
                                        children: [
                                            (0, m.jsx)(k.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(w.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(j.I, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: h,
                                                    disabled: !!i.isMyVibe,
                                                    'aria-hidden': !!i.isMyVibe,
                                                    'aria-disabled': v,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: c,
                                                    'data-test-id': S.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                }),
                                            }),
                                            (0, m.jsx)(w.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(j.I, { variant: 'close', size: 'xxs' }),
                                                onClick: r.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: u,
                                                'data-test-id': S.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(M.C, {}),
                        ],
                    }),
                });
            });
            var W = a(4370),
                K = a(8655),
                V = a(47938),
                H = a(6900),
                G = a(69704);
            let Y = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { theme: a } = (0, G.W)(),
                    i = (0, f.useRef)(a);
                ((0, f.useLayoutEffect)(() => {
                    i.current = a;
                }, [a]),
                    (0, f.useLayoutEffect)(() => {
                        if (!t || 'undefined' == typeof document) return;
                        let a = (0, H.J)(e),
                            n = () => {
                                document.body.classList.contains(a) || (0, V.Z)(e);
                            };
                        n();
                        let r = new MutationObserver(() => {
                            n();
                        });
                        return (
                            r.observe(document.body, { attributes: !0, attributeFilter: ['class'] }),
                            () => {
                                (r.disconnect(), (0, V.Z)(i.current));
                            }
                        );
                    }, [e, t]));
            };
            var $ = a(97956),
                q = a(39661),
                Z = a.n(q),
                X = a(87999),
                Q = a(76903);
            let J = () => {
                var e;
                let {
                    user: t,
                    settings: a,
                    advertBanners: {
                        banners: { sideAdvertBanner: i },
                    },
                    freeAccess: n,
                } = (0, D.g)();
                return !!i.isVisible && (null == (e = a.browserInfo) || !e.isTouch) && (!t.isAuthorized || n.isFreeWebUser);
            };
            var ee = a(61166),
                et = a(95850);
            let ea = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var ei = a(38744),
                en = a.n(ei);
            let er = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: i } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                        } = (0, D.g)(),
                        { formatMessage: r } = (0, y.A)();
                    return (0, m.jsx)('section', {
                        className: (0, p.$)(en().root, t, { [en().root_vibePage]: i, [en().root_hidden]: !n.isVisible }),
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: (0, m.jsx)('div', {
                            className: en().contentWrapper,
                            children: (0, m.jsx)(et.N, {
                                className: en().content,
                                ownerId: ee.P,
                                containerId: 'adfox_173831489302952769',
                                params: ea,
                                onLoad: n.setType,
                                onError: n.toggleHasErrorTrue,
                                onNoAds: n.toggleNoAdsTrue,
                            }),
                        }),
                    });
                }),
                eo = (0, f.forwardRef)((e, t) => (0, m.jsx)(er, { forwardRef: t, ...e }));
            var es = a(38147),
                el = a(65523),
                ed = a(49518),
                ec = a(60208);
            let eu = (0, v.PA)((e) => {
                let { className: t, productionBlockId: a, testBlockId: i, onRender: n, onNoAds: r, onError: o, isAsync: s } = e,
                    { experiments: l } = (0, D.g)(),
                    { render: d } = (0, ed.s)(),
                    c = (0, ec.D)(),
                    u = (0, f.useMemo)(() => {
                        let e = l.checkExperiment($.z.WebNextAdvertTest, 'on'),
                            t = 'production' === c;
                        return e || !t ? i : a;
                    }, [c, l, a, i]),
                    _ = ''.concat(ee.l, '_').concat(u);
                return (
                    (0, f.useEffect)(() => {
                        d(
                            {
                                blockId: u,
                                renderTo: _,
                                async: s,
                                onRender: () => {
                                    null == n || n(es.h.DIRECT);
                                },
                                onError: o,
                            },
                            () => {
                                null == r || r();
                            },
                        );
                    }, [u, _, d, n, o, r, s]),
                    (0, m.jsx)('div', { id: _, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
            var e_ = a(61013);
            let em = () => (30 * window.innerHeight) / 100,
                ep = (e, t) => e > 0 && t > 0;
            var ev = a(6462),
                eh = a.n(ev);
            let eb = (0, v.PA)((e) => {
                    let { className: t, children: a } = e,
                        i = (0, h.usePathname)(),
                        { formatMessage: n } = (0, y.A)(),
                        { setContentRef: r, setContentRootRef: o, setSideBannerRef: s, paywallRef: l, contentScrollRef: d } = (0, R.g)(),
                        c = (0, el.U)(),
                        {
                            experiments: u,
                            user: _,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: v, topAdvertBanner: x },
                            },
                        } = (0, D.g)(),
                        g = J(),
                        A =
                            (i === W.Z.main.href || i === W.Z.video.href) &&
                            (u.checkExperiment($.z.WebNextNewWaveTab, 'on') || u.checkExperiment($.z.WebNextNewWaveTab, 'on1')),
                        N = v.isVisible && v.type === es.h.BRANDING,
                        C = x.isTouchTopAdvertEnabled && !l && !_.hasPlus && !N,
                        T = 'R-I-16641233-2',
                        E = ((e) => {
                            let [t, a] = (0, f.useState)(em),
                                i = (0, f.useRef)(null),
                                n = (0, f.useRef)(!1),
                                r = (0, f.useRef)(em()),
                                o = (0, f.useRef)(em()),
                                s = (0, B.c)((e) => {
                                    let t = e.scrollTop,
                                        a = e.scrollHeight,
                                        i = e.clientHeight,
                                        n = o.current,
                                        r = t <= 5;
                                    if (!ep(a, i)) return n;
                                    let s = a - i;
                                    return s <= 0 ? n : s >= n ? (r ? n : 0) : r ? n : Math.max(0, n - s);
                                }),
                                l = (0, B.c)((e) => {
                                    (a(Math.round(e)), (r.current = e));
                                }),
                                d = (0, B.c)(() => {
                                    o.current = em();
                                }),
                                c = (0, B.c)((e) => {
                                    let t = i.current;
                                    (null !== t && cancelAnimationFrame(t),
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let t = s(e),
                                                a = Math.abs(t - r.current),
                                                n = o.current;
                                            (0 === t || t >= n || a >= 2) && l(t);
                                        })));
                                });
                            (0, f.useLayoutEffect)(() => {
                                if (!e) {
                                    let e = em();
                                    ((o.current = e), l(e), (n.current = !1));
                                    return;
                                }
                                if (n.current) return;
                                n.current = !0;
                                let t = em();
                                return ((o.current = t), e.scrollTop <= 50) ? void l(t) : ep(e.scrollHeight, e.clientHeight) ? void l(s(e)) : void l(t);
                            }, [e, l, s]);
                            let u = (0, f.useMemo)(
                                () =>
                                    e
                                        ? (0, e_.A)(() => {
                                              (d(), c(e));
                                          }, 100)
                                        : null,
                                [e, c, d],
                            );
                            return (
                                (0, f.useEffect)(() => {
                                    if (!e || !u) return;
                                    c(e);
                                    let t = () => {
                                        c(e);
                                    };
                                    e.addEventListener('scroll', t, { passive: !0 });
                                    let a = new ResizeObserver(u);
                                    a.observe(e);
                                    let n = () => {
                                        (d(), u());
                                    };
                                    return (
                                        window.addEventListener('resize', n, { passive: !0 }),
                                        () => {
                                            u.cancel();
                                            let s = i.current;
                                            null !== s && (cancelAnimationFrame(s), (i.current = null));
                                            let l = em();
                                            ((r.current = l),
                                                (o.current = l),
                                                e.removeEventListener('scroll', t),
                                                a.disconnect(),
                                                window.removeEventListener('resize', n));
                                        }
                                    );
                                }, [e, c, u, d]),
                                t
                            );
                        })(d),
                        S = (0, B.c)(() => {
                            c.error('Cannot render advert banner', { adBlockId: T });
                        }),
                        I = (0, b.L)(() => {
                            if (C)
                                return (0, m.jsx)('div', {
                                    className: eh().adContainer,
                                    'aria-label': n({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, m.jsx)(eu, { isAsync: !1, onError: S, productionBlockId: T, testBlockId: T, className: eh().adBanner }),
                                });
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(eh().root, t, { [eh().root_newVibe]: A }),
                        ref: o,
                        children: [
                            I,
                            (0, m.jsx)('main', {
                                className: (0, p.$)(eh().main, { [eh().main_newVibe]: A, [eh().withBrandedBanner]: N }),
                                style: N ? { marginBlockStart: ''.concat(E, 'px') } : void 0,
                                ref: r,
                                children: (0, m.jsx)(f.Suspense, { children: a }),
                            }),
                            g && (0, m.jsx)(eo, { className: (0, p.$)(eh().sideBanner, { [eh().sideBanner_newVibe]: A }), isWavePage: A, ref: s }),
                        ],
                    });
                }),
                ex = (e) => window.innerWidth < (e ? 1920 : 1024),
                ef = () => {
                    let { sideBannerRef: e } = (0, R.g)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, D.g)(),
                        a = J(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, f.useState)(ex(i)),
                        o = (0, f.useMemo)(
                            () =>
                                (0, e_.A)(
                                    () => {
                                        r(ex(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, f.useEffect)(
                            () => (
                                window.addEventListener('resize', o),
                                o(),
                                () => {
                                    window.removeEventListener('resize', o);
                                }
                            ),
                            [o],
                        ),
                        n
                    );
                };
            var eg = a(84423),
                eA = a(89846),
                eN = a(4086),
                eC = a(41928),
                ey = a(15253),
                eT = a(5743),
                eE = a(63582);
            let eS = (0, eE.n)({ event: 'Sidebar.Opened', kind: 'hook', requiredScopes: [] }, function () {
                var e;
                let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                    { hash: a } = (0, eA.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, D.g)();
                return (0, B.c)((e) => {
                    if (!t || void 0 === a) return;
                    let n = {
                        hash: a,
                        pageId: X.AppScreen.Sidebar,
                        sidebarSize: e || i ? X.UIElementSizes.Small : X.UIElementSizes.Medium,
                        sidebarPosition: i ? X.UIPositions.Bottom : X.UIPositions.Left,
                    };
                    (0, eT.U0)(t, n);
                });
            });
            var eB = a(72997),
                eI = a.n(eB),
                ew = a(30282),
                ej = a(95694),
                eP = a(68211),
                ek = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    2678: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    8946: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    450: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    9432: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    o = r / 2,
                                    s = i.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(s.width / 2) : e.clientX - s.left,
                                    d = 0 === e.clientY ? Math.round(s.height / 2) : e.clientY - s.top;
                                ((n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - o, 'px')),
                                    (n.style.top = ''.concat(d - o, 'px')),
                                    n.classList.add(t));
                                let c = i.getElementsByClassName(t)[0];
                                (c && c.remove(), i.insertBefore(n, i.firstChild));
                            }));
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
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            n = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let r = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, n.findColorBucketByName)(e);
                            return a ? r(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? r(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var r = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return r.getVibePaletteColors;
                            },
                        });
                    },
                    8122: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0));
                        let n = a(4377),
                            r = a(5881),
                            o = a(9779),
                            s = i(a(2678));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: l = 'vertical', ...d } = e;
                            return (0, n.jsx)(o.NavigationProvider, {
                                collapsed: i,
                                direction: l,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(s.default.root, s.default['root_direction_'.concat(l)], { [s.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    9779: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0));
                        let i = a(4377),
                            n = a(810);
                        ((t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: o } = e,
                                    s = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: s, children: o });
                            }));
                    },
                    2676: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0));
                        let n = a(4377),
                            r = a(810),
                            o = a(5881),
                            s = a(9779),
                            l = i(a(8946));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(s.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, o.clsx)(l.default.root, l.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    9699: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0));
                        let n = a(4377),
                            r = a(810),
                            o = a(5881),
                            s = a(9779),
                            l = a(6882),
                            d = i(a(450)),
                            c = i(a(9432));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: _,
                                    withRipple: m = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: v,
                                    ...h
                                } = e,
                                { collapsed: b, direction: x } = (0, r.useContext)(s.NavigationContext),
                                f = v ? c.default : d.default,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m && (0, l.createRipple)(e, f.ripple);
                                    },
                                    [f.ripple, m],
                                ),
                                [A, N] = r.Children.toArray(i.props.children),
                                C = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: f.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, o.clsx)(f.textContainer, f['textContainer_direction_'.concat(x)], { [f.textContainer_selected]: u }),
                                                    children: N,
                                                }),
                                            ],
                                        }),
                                    [f, A, x, u, N],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, o.clsx)(
                                        f.item,
                                        f['item_direction_'.concat(x)],
                                        { [f.item_selected]: u, [f['item_collapsed_'.concat(x)]]: b },
                                        i.props.className,
                                    ),
                                    children: C,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, o.clsx)(
                                    f.root,
                                    f['root_direction_'.concat(x)],
                                    f['root_variant_'.concat(p)],
                                    { [f.root_animate]: _, [f.root_collapsed]: b },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: g,
                                ...h,
                                children: y,
                            });
                        }
                        ((t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }))));
                    },
                    2660: (e) => {
                        e.exports = eP;
                    },
                    810: (e) => {
                        e.exports = g;
                    },
                },
                eL = {};
            function eR(e) {
                var t = eL[e];
                if (void 0 !== t) return t.exports;
                var a = (eL[e] = { exports: {} });
                return (ek[e].call(a.exports, a, a.exports, eR), a.exports);
            }
            ((eR.d = (e, t) => {
                for (var a in t) eR.o(t, a) && !eR.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eR.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eR.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eO = {};
            (() => {
                (Object.defineProperty(eO, 'X$', { value: !0 }), (eO.Dx = eO.KB = eO.W_ = void 0));
                var e = eR(8122);
                Object.defineProperty(eO, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = eR(2676);
                Object.defineProperty(eO, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = eR(9699);
                Object.defineProperty(eO, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var eD = eO.W_,
                eM = eO.KB,
                eU = eO.Dx;
            eO.X$;
            var eF = a(74973),
                ez = a(53643),
                eW = (function (e) {
                    return (
                        (e.SEARCH = 'SEARCH'),
                        (e.HOME = 'HOME'),
                        (e.FOR_YOU_AND_TRENDS = 'FOR_YOU_AND_TRENDS'),
                        (e.CONCERTS = 'CONCERTS'),
                        (e.NON_MUSIC = 'NON_MUSIC'),
                        (e.KIDS = 'KIDS'),
                        (e.COLLECTION = 'COLLECTION'),
                        (e.PLUS = 'PLUS'),
                        (e.MUZMARKET = 'MUZMARKET'),
                        e
                    );
                })({}),
                eK = a(77356),
                eV = a(46312),
                eH = a(67174);
            let eG = () => {
                let { user: e, experiments: t, location: a, slam: i, settings: n } = (0, D.g)(),
                    { formatMessage: r } = (0, y.A)(),
                    o = ((e) => {
                        let {
                                checkExperiment: t,
                                formatMessage: a,
                                hasPlus: i,
                                isAuthorized: n,
                                isChildModeEnabled: r,
                                isMobile: o,
                                isOfflineModeEnabled: s,
                                isWebApplication: l,
                                tld: d,
                            } = e,
                            c = [],
                            u = t($.z.WebNextNewWaveTab, 'on') || t($.z.WebNextNewWaveTab, 'on1');
                        if (
                            (t($.z.WebNextDisableSearch, 'on') ||
                                c.push({ id: eW.SEARCH, path: W.Z.search.href, availablePaths: [W.Z.search.href], title: a({ id: 'navigation.search' }), isEnabled: !s }),
                            c.push({
                                id: eW.HOME,
                                path: W.Z.main.href,
                                availablePaths: [W.Z.main.href],
                                title: a(u ? { id: 'navigation.page-my-vibe' } : { id: 'navigation.page-main' }),
                                isEnabled: !s,
                            }),
                            u)
                        ) {
                            let e = n ? eV.p.MAIN : eV.p.MAIN_NOLOGIN,
                                t = (0, eH.u)('/landing/:skeleton', { params: { skeleton: e } }).href;
                            c.push({ id: eW.FOR_YOU_AND_TRENDS, path: t, availablePaths: [t], title: a({ id: 'navigation.page-for-you-and-trends' }), isEnabled: !s });
                        }
                        return (
                            t($.z.WebNextConcertsTab, 'on') &&
                                !t($.z.WebNextDisableConcertsTab, 'on') &&
                                i &&
                                c.push({
                                    id: eW.CONCERTS,
                                    path: W.Z.concerts.href,
                                    availablePaths: [W.Z.concerts.href],
                                    title: a({ id: 'entity-names.concerts' }),
                                    isEnabled: !s,
                                }),
                            t($.z.WebNextDisableNonMusic, 'on') ||
                                c.push({
                                    id: eW.NON_MUSIC,
                                    path: '/non-music',
                                    availablePaths: ['/non-music'],
                                    title: a({ id: 'entity-names.podcasts-and-books' }),
                                    isEnabled: !s,
                                }),
                            !t($.z.WebNextDisableKids, 'on') &&
                                r &&
                                c.push({ id: eW.KIDS, path: W.Z.kids.href, availablePaths: [W.Z.kids.href], title: a({ id: 'kids.for-kids' }), isEnabled: !s }),
                            !t($.z.WebNextDisableCollection, 'on') &&
                                n &&
                                c.push({
                                    id: eW.COLLECTION,
                                    path: W.Z.collection.href,
                                    availablePaths: [W.Z.collection.href, W.Z.mymusic.href],
                                    title: a({ id: 'navigation.page-collection' }),
                                    isEnabled: !0,
                                }),
                            !t($.z.WebNextDisablePlus, 'on') &&
                                t($.z.WebNextPlusOptionsMarketplace, 'on') &&
                                l &&
                                !o &&
                                i &&
                                c.push({ id: eW.PLUS, path: '/plus', availablePaths: ['/plus'], title: a({ id: 'navigation.page-plus' }), isEnabled: !0 }),
                            t($.z.WebNextMarketLanding, 'on') &&
                                'ru' === d &&
                                !o &&
                                n &&
                                c.push({
                                    id: eW.MUZMARKET,
                                    path: W.Z.muzmarket.href,
                                    availablePaths: [W.Z.muzmarket.href],
                                    title: a({ id: 'navigation.page-muzmarket' }),
                                    isEnabled: !s,
                                }),
                            c
                        );
                    })({
                        checkExperiment: (e, a) => t.checkExperiment(e, a),
                        formatMessage: r,
                        hasPlus: e.hasPlus,
                        isAuthorized: e.isAuthorized,
                        isChildModeEnabled: e.settings.isChildModeEnabled,
                        isMobile: !!n.isMobile,
                        isOfflineModeEnabled: !!i.isOfflineModeEnabled,
                        isWebApplication: ew.$3,
                        tld: a.tld,
                    }),
                    s = t.checkExperiment($.z.WebNextNewWaveTab, 'on') || t.checkExperiment($.z.WebNextNewWaveTab, 'on1'),
                    l = {
                        [eW.SEARCH]: () => ({
                            icon: 'search',
                            iconSelected: 'search_selected',
                            iconNewVersion: 'navigationSearch',
                            iconNewVersionSelected: 'navigationSearch',
                            analyticsParams: { to: X.AppScreen.SearchScreen, entityType: X.EntityTypes.Search },
                        }),
                        [eW.HOME]: () => {
                            let e = s && t.checkExperiment($.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe';
                            return {
                                icon: 'home',
                                iconSelected: 'home_selected',
                                iconNewVersion: s ? e : 'navigationForYouAndTrends',
                                iconNewVersionSelected: s ? e : 'navigationForYouAndTrends_selected',
                                analyticsParams: { to: s ? X.AppScreen.WaveLandingScreen : X.AppScreen.MainScreen, entityType: X.EntityTypes.Home },
                            };
                        },
                        [eW.FOR_YOU_AND_TRENDS]: () => ({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            analyticsParams: { to: X.AppScreen.ForYouScreen, entityType: X.EntityTypes.Home },
                        }),
                        [eW.CONCERTS]: () => ({
                            icon: 'ticket',
                            iconSelected: 'ticket_selected',
                            iconNewVersion: 'navigationConcerts',
                            iconNewVersionSelected: 'navigationConcerts_selected',
                            analyticsParams: { to: X.AppScreen.ConcertsLandingScreen, entityType: X.EntityTypes.Concerts },
                            onboardingConfig: {
                                id: eK.h.CONCERTS_TAB,
                                text: r({ id: 'concerts.onboarding' }, { nbsp: '\xa0' }),
                                isEnabled: t.checkExperiment($.z.WebNextConcertTabOnboarding, 'on'),
                            },
                        }),
                        [eW.NON_MUSIC]: () => ({
                            icon: 'non_music',
                            iconSelected: 'non_music_selected',
                            iconNewVersion: 'navigationNonMusic',
                            iconNewVersionSelected: 'navigationNonMusic_selected',
                            analyticsParams: { to: X.AppScreen.NonmusicLandingScreen, entityType: X.EntityTypes.NonMusic },
                        }),
                        [eW.KIDS]: () => ({
                            icon: 'kids',
                            iconSelected: 'kids_selected',
                            iconNewVersion: 'navigationKids',
                            iconNewVersionSelected: 'navigationKids_selected',
                            analyticsParams: { to: X.AppScreen.KidsLandingScreen, entityType: X.EntityTypes.Kids },
                        }),
                        [eW.COLLECTION]: () => ({
                            icon: 'collections',
                            iconSelected: 'collections_selected',
                            iconNewVersion: 'navigationCollection',
                            iconNewVersionSelected: 'navigationCollection_selected',
                            analyticsParams: { to: X.AppScreen.CollectionLandingScreen, entityType: X.EntityTypes.Collection },
                        }),
                        [eW.PLUS]: () => ({
                            icon: 'plusOutlined',
                            iconSelected: 'plusOutlined',
                            iconNewVersion: 'navigationPlus',
                            iconNewVersionSelected: 'navigationPlus',
                            analyticsParams: { to: X.AppScreen.PlusScreen, entityType: X.EntityTypes.Plus },
                        }),
                        [eW.MUZMARKET]: () => ({
                            icon: 'navigationMuzmarket',
                            iconSelected: 'navigationMuzmarket',
                            iconNewVersion: 'navigationMuzmarket',
                            iconNewVersionSelected: 'navigationMuzmarket',
                            analyticsParams: { to: X.AppScreen.MuzmarketScreen, entityType: X.EntityTypes.Muzmarket },
                        }),
                    };
                return o.map((e) => ({ ...e, ...l[e.id]() }));
            };
            var eY = a(92192);
            let e$ = () => {
                let e = (0, eY.D)(),
                    t = (0, h.usePathname)();
                return (0, f.useCallback)((a) => a.some((a) => (a === W.Z.main.href ? a === t : e.startsWith(a))), [e, t]);
            };
            var eq = a(52726),
                eZ = a(91292),
                eX = a(64546),
                eQ = a(47149);
            let eJ = (0, eE.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function () {
                    var e;
                    let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, eA.g)(),
                        { location: i } = (0, D.g)();
                    return (0, B.c)((e, n) => {
                        t &&
                            a &&
                            void 0 !== n &&
                            (i.isNotFound || void 0 !== e) &&
                            (0, eQ.ID)(
                                t,
                                ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: X.EntityTypes.Error,
                                              entityId: X.EntityTypes.Error,
                                              hash: n,
                                              pageId: X.AppScreen.PageNotFoundScreen,
                                              pageStyle: X.PageStyles.Fullscreen,
                                              pagePlacement: X.PagePlacements.Fullscreen,
                                              mainObjectType: X.DomainObjectType.NonApplicable,
                                              mainObjectId: X.DomainObjectType.NonApplicable,
                                              from: X.AppScreen.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: X.AppScreen.Sidebar,
                                              pageStyle: X.PageStyles.Bar,
                                              pagePlacement: X.PagePlacements.Left,
                                              from: X.AppScreen.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: e, to: n, hash: a }),
                            );
                    });
                }),
                e0 = {
                    [eW.SEARCH]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [eW.HOME]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [eW.FOR_YOU_AND_TRENDS]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [eW.CONCERTS]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [eW.NON_MUSIC]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [eW.KIDS]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [eW.COLLECTION]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [eW.PLUS]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                    [eW.MUZMARKET]: S.e8.navbar.NAVBAR_NAVIGATION_ITEM_MUZMARKET,
                },
                e1 = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                e2 = e1({ placement: 'right', padding: 8 });
            var e5 = a(45197),
                e8 = a.n(e5);
            let e4 = (e) => {
                let { children: t } = e;
                return (0, m.jsxs)('span', {
                    className: e8().root,
                    children: [t, (0, m.jsx)(L.HL, { variant: 'span', type: 'controls', size: 'xxs', weight: 'medium', className: e8().badge, children: 'BETA' })],
                });
            };
            var e3 = a(62414),
                e9 = a(37523),
                e6 = a(7833),
                e7 = a(83295),
                te = a(98427),
                tt = a(50408),
                ta = a(49034),
                ti = a(26645),
                tn = a(95547),
                tr = a.n(tn);
            let to = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                ts = (0, v.PA)((e) => {
                    let { config: t, children: a, intersectionPropertyId: i, referenceRef: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        {
                            settings: { isMobile: o },
                        } = (0, D.g)(),
                        { compositePlayerBarRef: s } = (0, R.g)(),
                        { setIsOnboardingOpened: l } = (0, ti.w)(),
                        [d, c] = (0, tt.d)(),
                        u = (0, e7.S)([c, n]),
                        _ = (0, ta.z)({ id: t.id, ref: d, intersectionPropertyId: i }),
                        [p, v] = (0, f.useState)(_ && t.isEnabled),
                        h = (0, B.c)((e) => {
                            (null == e || e.stopPropagation(), v(!1), l(!1));
                        }),
                        b = (0, B.c)((e) => {
                            e || h();
                        });
                    return (0, m.jsxs)(k.m_, {
                        placement: o ? 'top' : 'right',
                        arrowProps: to,
                        offsetOptions: o ? 15 : -10,
                        isHoverEnabled: !1,
                        open: p,
                        onOpenChange: b,
                        enableAriaDescribedby: !0,
                        referenceRef: null != u ? u : void 0,
                        children: [
                            a,
                            (0, m.jsxs)(k.ZI, {
                                className: tr().tooltip,
                                rootNode: o ? s : void 0,
                                children: [
                                    (0, m.jsx)(w.$, {
                                        icon: (0, m.jsx)(j.I, { variant: 'close', size: 'xxs' }),
                                        onClick: h,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: tr().button,
                                        'aria-label': r({ id: 'interface-actions.close' }),
                                    }),
                                    (0, m.jsx)(L.HL, { className: tr().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                tl = (e) => {
                    let { config: t, children: a, intersectionPropertyId: i, referenceRef: n } = e;
                    return t ? (0, m.jsx)(ts, { config: t, intersectionPropertyId: i, referenceRef: n, children: a }) : a;
                },
                td = (e) => {
                    let { route: t, ref: a, ...i } = e,
                        n = (0, e3.D)(),
                        r = (0, f.useId)(),
                        o = (0, e7.S)([n, a]);
                    return (0, m.jsx)(tl, {
                        config: t.onboardingConfig,
                        intersectionPropertyId: r,
                        referenceRef: o,
                        children: (0, m.jsx)(eU, { ...i, ref: o, 'data-intersection-property-id': r }),
                    });
                },
                tc = (e) => {
                    let { route: t, ...a } = e;
                    return (0, m.jsx)(Q.a, {
                        pageId: X.AppScreen.Sidebar,
                        pageIdForFrom: te.b.SIDEBAR,
                        children: (0, m.jsx)(e9.F, {
                            blockType: t.analyticsParams.entityType,
                            blockId: t.analyticsParams.entityType,
                            blockPosX: 1,
                            blockPosY: 1,
                            objectsCount: 1,
                            children: (0, m.jsx)(e6.B, {
                                objectType: X.DomainObjectType.Shortcut,
                                objectId: t.path,
                                objectPosX: 1,
                                objectPosY: 1,
                                children: (0, m.jsx)(td, { route: t, ...a }),
                            }),
                        }),
                    });
                };
            var tu = a(62571),
                t_ = a(21970),
                tm = a(45628),
                tp = a(15028);
            function tv(e, t) {
                var a = Object.create(null);
                return (
                    e &&
                        f.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            a[e.key] = t && (0, f.isValidElement)(e) ? t(e) : e;
                        }),
                    a
                );
            }
            function th(e, t, a) {
                return null != a[t] ? a[t] : e.props[t];
            }
            var tb =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                tx = (function (e) {
                    function t(t, a) {
                        var i = e.call(this, t, a) || this,
                            n = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return ((i.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }), i);
                    }
                    (0, tm.A)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (a.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var a,
                                i,
                                n = t.children,
                                r = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? tv(e.children, function (t) {
                                          return (0, f.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: th(t, 'appear', e),
                                              enter: th(t, 'enter', e),
                                              exit: th(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function a(a) {
                                                  return a in t ? t[a] : e[a];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var i,
                                                  n = Object.create(null),
                                                  r = [];
                                              for (var o in e) o in t ? r.length && ((n[o] = r), (r = [])) : r.push(o);
                                              var s = {};
                                              for (var l in t) {
                                                  if (n[l])
                                                      for (i = 0; i < n[l].length; i++) {
                                                          var d = n[l][i];
                                                          s[n[l][i]] = a(d);
                                                      }
                                                  s[l] = a(l);
                                              }
                                              for (i = 0; i < r.length; i++) s[r[i]] = a(r[i]);
                                              return s;
                                          })(n, (a = tv(e.children)))),
                                      ).forEach(function (t) {
                                          var o = i[t];
                                          if ((0, f.isValidElement)(o)) {
                                              var s = t in n,
                                                  l = t in a,
                                                  d = n[t],
                                                  c = (0, f.isValidElement)(d) && !d.props.in;
                                              l && (!s || c)
                                                  ? (i[t] = (0, f.cloneElement)(o, {
                                                        onExited: r.bind(null, o),
                                                        in: !0,
                                                        exit: th(o, 'exit', e),
                                                        enter: th(o, 'enter', e),
                                                    }))
                                                  : l || !s || c
                                                    ? l &&
                                                      s &&
                                                      (0, f.isValidElement)(d) &&
                                                      (i[t] = (0, f.cloneElement)(o, {
                                                          onExited: r.bind(null, o),
                                                          in: d.props.in,
                                                          exit: th(o, 'exit', e),
                                                          enter: th(o, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, f.cloneElement)(o, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (a.handleExited = function (e, t) {
                            var a = tv(this.props.children);
                            e.key in a ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var a = (0, t_.A)({}, t.children);
                                        return (delete a[e.key], { children: a });
                                    }));
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.component,
                                a = e.childFactory,
                                i = (0, tu.A)(e, ['component', 'childFactory']),
                                n = this.state.contextValue,
                                r = tb(this.state.children).map(a);
                            return (delete i.appear, delete i.enter, delete i.exit, null === t)
                                ? f.createElement(tp.A.Provider, { value: n }, r)
                                : f.createElement(tp.A.Provider, { value: n }, f.createElement(t, i, r));
                        }),
                        t
                    );
                })(f.Component);
            ((tx.propTypes = {}),
                (tx.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            var tf = a(16967),
                tg = a(42078),
                tA = a(90688),
                tN = a(7555),
                tC = a(61691),
                ty = a(60757),
                tT = a(29008),
                tE = a(46474),
                tS = a(18610),
                tB = a(56651),
                tI = a(78940);
            let tw = (0, eE.n)({ event: 'Sidebar.Navigated', kind: 'hook', requiredScopes: [] }, function () {
                var e;
                let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                    { hash: a } = (0, eA.g)(),
                    {
                        settings: { isMobile: i },
                    } = (0, D.g)();
                return (0, B.c)((e, n) => {
                    if (!t || void 0 === a || void 0 === n) return;
                    let r = {
                        hash: a,
                        pageId: X.AppScreen.Sidebar,
                        sidebarSize: e || i ? X.UIElementSizes.Small : X.UIElementSizes.Medium,
                        from: X.AppScreen.Sidebar,
                        to: n,
                    };
                    (0, eT.qi)(t, r);
                });
            });
            var tj = a(8990),
                tP = a(14431),
                tk = a.n(tP);
            let tL = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, m.jsx)(eZ.N, { href: a, className: tk().link, 'aria-label': i, ...n, children: t }) : t;
                },
                tR = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: o,
                            withCollapseAnimation: s,
                            entityUrl: l,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: _,
                        } = e,
                        v = e$(),
                        h = (0, f.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, I.P)(e, tk().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        b = l && v([l]) ? void 0 : l;
                    return (0, m.jsxs)(tj.C, {
                        ref: u,
                        className: (0, p.$)(tk().root, { [tk().root_withoutLink]: !b }, t),
                        role: 'listitem',
                        'aria-label': b ? void 0 : _,
                        'data-test-id': S.e8.navbar.PIN_ITEM,
                        children: [
                            (0, m.jsxs)(tL, {
                                entityUrl: b,
                                ariaLabel: _,
                                onClick: h,
                                children: [
                                    (0, m.jsx)('div', { className: tk().cover, 'data-test-id': S.e8.navbar.PIN_COVER, children: a }),
                                    (0, m.jsx)('div', {
                                        className: tk().meta,
                                        children: (0, m.jsxs)('div', {
                                            className: (0, p.$)(tk().info, {
                                                [tk().info_collapsed]: o,
                                                [tk().info_animated]: s,
                                                [tk().info_withContextMenu]: (0, f.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, m.jsx)(L.HL, {
                                                    'aria-hidden': !0,
                                                    className: tk().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': S.e8.navbar.PIN_TITLE,
                                                    children: i,
                                                }),
                                                (0, m.jsx)(L.HL, {
                                                    'aria-hidden': !0,
                                                    className: tk().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': S.e8.navbar.PIN_SUBTITLE,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, f.isValidElement)(r) &&
                                (0, m.jsx)('div', {
                                    className: (0, p.$)(tk().contextMenu, { [tk().contextMenu_hidden]: o }),
                                    'data-test-id': S.e8.navbar.PIN_CONTEXT_MENU_BUTTON,
                                    children: r,
                                }),
                        ],
                    });
                },
                tO = (0, f.forwardRef)((e, t) => (0, m.jsx)(tR, { forwardRef: t, ...e })),
                tD = (0, f.createContext)(null);
            var tM = a(82640),
                tU = a.n(tM),
                tF = a(19934),
                tz = a(95210),
                tW = a(27817);
            let tK = (0, eE.n)({ event: 'Sidebar.ActionPerformed', kind: 'hook', requiredScopes: [] }, function () {
                    var e;
                    let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, eA.g)(),
                        {
                            settings: { isMobile: i },
                        } = (0, D.g)();
                    return (0, B.c)((e) => {
                        let { actionType: n, isCollapsed: r, mainObjectType: o, mainObjectId: s } = e;
                        if (!t || void 0 === a || void 0 === n) return;
                        let l = {
                            hash: a,
                            actionType: n,
                            userInteractionType: X.UserInteractionType.Tap,
                            pageId: X.AppScreen.Sidebar,
                            sidebarSize: r || i ? X.UIElementSizes.Small : X.UIElementSizes.Medium,
                        };
                        (o && (l.mainObjectType = o), s && (l.mainObjectId = s), (0, eT.dL)(t, l));
                    });
                }),
                tV = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, y.A)(),
                        { isCollapsed: n } = (0, f.useContext)(tD) || {},
                        [r, o] = (0, f.useState)(!1),
                        s = tK(),
                        l = (0, f.useCallback)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }, []),
                        d = (0, f.useCallback)(() => {
                            (t(), s({ actionType: X.ActionType.Unpin, isCollapsed: null != n && n }));
                        }, [n, t, s]);
                    return (
                        (0, tz.N)(r),
                        (0, m.jsx)(tF.W1, {
                            className: (0, p.$)(tU().contextMenu, { [tU().contextMenu_visible]: r }),
                            onClick: l,
                            icon: (0, m.jsx)(j.I, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: o,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: S.e8.navbar.PIN_CONTEXT_MENU,
                            children: (0, m.jsx)(tW.L, { onClick: d, isPinned: a }),
                        })
                    );
                },
                tH = (0, v.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: o } = (0, y.A)(),
                        { isCollapsed: s, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, tB.A)(i),
                        c = (0, tT.r)(i.type, tT.c.PIN),
                        u = tw(),
                        _ = ((e) =>
                            (0, f.useMemo)(() => {
                                switch (e) {
                                    case tC._.PODCAST:
                                        return X.AppScreen.PodcastScreen;
                                    case tC._.AUDIOBOOK:
                                        return X.AppScreen.AudiobookScreen;
                                    default:
                                        return X.AppScreen.AlbumScreen;
                                }
                            }, [e]))(i.type),
                        v = (0, tI.Z)(i.url),
                        h = ((e) => {
                            let { albumId: t, albumUrl: a, callback: i } = e,
                                { getAlbumUrlWithSavedClid: n, checkIsCurrentAlbumPage: r } = (0, tE.I)(),
                                o = (0, tS.p)();
                            return (0, B.c)((e) => {
                                if (!t || !a) {
                                    null == i || i(e);
                                    return;
                                }
                                if (r(t)) {
                                    (null == e || e.preventDefault(), o(n(t, a)));
                                    return;
                                }
                                null == i || i(e);
                            });
                        })({ albumId: i.id, albumUrl: i.url, callback: v }),
                        b = (0, ty.c)({ album: i, callback: h }),
                        x = (0, B.c)((e) => {
                            (u(null != s && s, _), b(e));
                        }),
                        g = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tN.t, {
                                    className: tU().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(k.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                className: tU().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(k.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(L.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, s, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: o({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, p.$)(tU().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: g,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: x,
                    });
                }),
                tG = (0, f.forwardRef)((e, t) => (0, m.jsx)(tH, { forwardRef: t, ...e }));
            var tY = a(91959),
                t$ = a(77455);
            let tq = (0, v.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: o } = (0, y.A)(),
                        { isCollapsed: s, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, t$.A)(i),
                        c = tw(),
                        u = (0, tI.Z)(i.url),
                        _ = (0, tY.S)({ artist: i, callback: u }),
                        v = (0, B.c)((e) => {
                            (c(null != s && s, X.AppScreen.ArtistScreen), _(e));
                        }),
                        h = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tN.t, {
                                    className: tU().cover,
                                    radius: 'round',
                                    children: (0, m.jsxs)(k.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                className: tU().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(k.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(L.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, s, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: o({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, p.$)(tU().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(T.A, { id: 'entity-names.artist' }),
                        cover: h,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: v,
                    });
                }),
                tZ = (0, f.forwardRef)((e, t) => (0, m.jsx)(tq, { forwardRef: t, ...e }));
            var tX = a(24460);
            let tQ = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: o } = (0, y.A)(),
                        { isCollapsed: s, withCollapseAnimation: l } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        d = (0, tX.A)(i),
                        c = tw(),
                        u = (0, B.c)(() => {
                            c(null != s && s, X.AppScreen.PlaylistScreen);
                        }),
                        _ = (0, f.useMemo)(
                            () =>
                                (0, m.jsx)(tN.t, {
                                    className: tU().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(k.m_, {
                                        ...r,
                                        enabled: s,
                                        children: [
                                            (0, m.jsx)(tA._V, {
                                                'aria-hidden': !0,
                                                className: tU().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(k.ZI, {
                                                className: tU().tooltip,
                                                children: (0, m.jsx)(L.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [s, i.coverUri, i.title, r],
                        );
                    return (0, m.jsx)(tO, {
                        ref: n,
                        ariaLabel: o({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, p.$)(tU().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(T.A, { id: 'entity-names.playlist' }),
                        cover: _,
                        isCollapsed: !!s,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tV, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                tJ = (0, f.forwardRef)((e, t) => (0, m.jsx)(tQ, { forwardRef: t, ...e }));
            var t0 = a(33979),
                t1 = a(78275),
                t2 = a(16112),
                t5 = a(55211),
                t8 = a(5407),
                t4 = a(64284),
                t3 = a(90420),
                t9 = a(39267);
            let t6 = (0, eE.n)({ event: 'Sidebar.Started', kind: 'hook', requiredScopes: [] }, function () {
                    var e;
                    let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, eA.g)(),
                        {
                            settings: { isMobile: i },
                        } = (0, D.g)();
                    return (0, B.c)((e) => {
                        let { isCollapsed: n, mainObjectId: r } = e;
                        if (!t || void 0 === a || void 0 === r) return;
                        let o = {
                            hash: a,
                            pageId: X.AppScreen.Sidebar,
                            sidebarSize: n || i ? X.UIElementSizes.Small : X.UIElementSizes.Medium,
                            mainObjectType: X.DomainObjectType.Wave,
                            mainObjectId: r,
                        };
                        (0, eT.cV)(t, o);
                    });
                }),
                t7 = (0, v.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        o = (0, f.useId)(),
                        { formatMessage: s } = (0, y.A)(),
                        { isCollapsed: l, withCollapseAnimation: d } = null != (t = (0, f.useContext)(tD)) ? t : {},
                        [c, u] = (0, f.useState)(!1),
                        _ = (0, t2.A)(i),
                        { freeAccess: v } = (0, D.g)(),
                        { state: h, setState: x } = (0, t1.e)(!1),
                        g = t6(),
                        A = tK(),
                        N = (0, t0.g)(),
                        C = (0, t8.P)(),
                        T = i.stationType === t3.q7,
                        { isPlaying: E, togglePlay: S, isCurrent: I } = (0, O.B)({ seeds: i.seeds, pageIdForFrom: te.b.SIDEBAR, blockIdForFrom: t4.U.RADIO }),
                        w = (0, B.c)(async () => {
                            var e, t;
                            return v.isVibeStartRestricted
                                ? void x(!0)
                                : (E
                                      ? A({
                                            actionType: X.ActionType.Pause,
                                            isCollapsed: null != l && l,
                                            mainObjectType: X.DomainObjectType.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : (g({ isCollapsed: null != l && l, mainObjectId: null != (t = i.seeds[0]) ? t : '' }), N()),
                                  S());
                        }),
                        j = (0, B.c)(() => {
                            C() ||
                                (u(!0),
                                w().finally(() => {
                                    u(!1);
                                }));
                        }),
                        P = (0, f.useMemo)(
                            () => (0, m.jsx)(L.HL, { id: o, variant: 'span', type: 'controls', size: 's', lineClamp: 1, children: i.title }),
                            [o, i.title],
                        ),
                        R = (0, b.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, m.jsx)(t5.n, {
                                      agent: i.agent,
                                      isCurrent: I,
                                      isPlaying: E,
                                      onPlayButtonClick: j,
                                      className: (0, p.$)({ [tU().multivibeContainer]: T }),
                                      coverClassName: (0, p.$)({ [tU().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tU().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tU().multivibeControl]: T }),
                                  })
                                : (0, m.jsx)(t9.q, {
                                      isCurrent: I,
                                      isPlaying: E,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: j,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: o,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      className: (0, p.$)({ [tU().multivibeContainer]: T }),
                                      withLoadingIndicator: !1,
                                      coverClassName: (0, p.$)({ [tU().multivibeCover]: T }),
                                      entityCoverClassName: (0, p.$)({ [tU().multivibeAvatar]: T }),
                                      controlClassName: (0, p.$)({ [tU().multivibeControl]: T }),
                                  });
                        }),
                        M = (0, b.L)(() =>
                            (0, m.jsxs)(k.m_, {
                                ...r,
                                enabled: l,
                                children: [
                                    R,
                                    (0, m.jsx)(k.ZI, {
                                        className: tU().tooltip,
                                        children: (0, m.jsx)(L.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        U = (0, f.useCallback)(
                            () =>
                                (0, m.jsx)(tO, {
                                    ref: n,
                                    ariaLabel: s({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    onDoubleClick: w,
                                    className: (0, p.$)(tU().root, a),
                                    isCollapsed: !!l,
                                    contextMenu: (0, m.jsx)(tV, { onPinClick: _, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: P,
                                    subtitle: i.getDescription(s({ id: 'entity-names.my-vibe' })),
                                    cover: M,
                                }),
                            [n, w, a, l, _, i, d, P, s, M],
                        );
                    return (0, m.jsx)(eq.S, {
                        isEnabled: v.isVibeStartRestricted,
                        isOpened: h,
                        onOpenChange: x,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: U,
                    });
                }),
                ae = (0, f.forwardRef)((e, t) => (0, m.jsx)(t7, { forwardRef: t, ...e }));
            var at = a(9889),
                aa = a.n(at);
            let ai = e1({ placement: 'right', padding: 20 }),
                an = { enter: aa().pin_enter, enterActive: aa().pin_enter_active, exit: aa().pin_exit, exitActive: aa().pin_exit_active },
                ar = (0, v.PA)((e) => {
                    let { className: t, withCollapseAnimation: a, isCollapsed: i, style: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        { pinsCollection: o } = (0, D.g)(),
                        s = o.filteredItems,
                        l = null == s ? void 0 : s.map(() => (0, f.createRef)()),
                        d = (0, f.useMemo)(() => ({ withCollapseAnimation: a, isCollapsed: i }), [i, a]),
                        c = s && s.length > 0,
                        u = s && s.length >= 3;
                    return (0, m.jsx)(tD.Provider, {
                        value: d,
                        children: (0, m.jsx)('div', {
                            className: (0, p.$)(aa().root, { [aa().root_withScroll]: u, [aa().root_hasPins]: c }, t),
                            style: n,
                            'data-test-id': S.e8.navbar.PIN_LIST,
                            children: (0, m.jsx)('div', {
                                role: 'list',
                                'aria-label': r({ id: 'navigation.pins-list' }),
                                className: aa().content,
                                children: (0, m.jsx)(tx, {
                                    component: null,
                                    children:
                                        null == s
                                            ? void 0
                                            : s.map((e, t) => {
                                                  switch (e.type) {
                                                      case tg._.ALBUM_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: an,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tG, {
                                                                      className: aa().pin,
                                                                      tooltipOptions: ai,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.ARTIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: an,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tZ, {
                                                                      className: aa().pin,
                                                                      tooltipOptions: ai,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.PLAYLIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: an,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tJ, {
                                                                      className: aa().pin,
                                                                      tooltipOptions: ai,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case tg._.WAVE_ITEM:
                                                          return (0, m.jsx)(
                                                              tf.A,
                                                              {
                                                                  classNames: an,
                                                                  nodeRef: null == l ? void 0 : l[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(ae, {
                                                                      className: aa().pin,
                                                                      tooltipOptions: ai,
                                                                      ref: null == l ? void 0 : l[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                ao = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                as = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                al = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                ad = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var ac = a(98675),
                au = a.n(ac);
            let a_ = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, G.W)(),
                        n = (0, b.L)(() => {
                            switch (i) {
                                case K.S.Dark:
                                    if (t) return as.src;
                                    return ao.src;
                                case K.S.Light:
                                    if (t) return ad.src;
                                    return al.src;
                            }
                        });
                    return (0, m.jsx)(tA._V, { ref: a, className: au().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                am = (0, f.forwardRef)((e, t) => (0, m.jsx)(a_, { forwardRef: t, ...e }));
            var ap = a(66294),
                av = a.n(ap),
                ah = a(72131);
            let ab = (0, eE.n)({ event: 'Screen.Navigated', kind: 'hook', requiredScopes: [] }, function () {
                var e;
                let t = null == (e = (0, eg.s)()) ? void 0 : e.evgenInstance,
                    { hash: a } = (0, eA.g)();
                return (0, B.c)(() => {
                    t &&
                        a &&
                        (0, eQ.ID)(t, {
                            entityType: X.EntityTypes.Error,
                            entityId: X.EntityTypes.Error,
                            hash: a,
                            pageId: X.AppScreen.PageNotFoundScreen,
                            pageStyle: X.PageStyles.Fullscreen,
                            pagePlacement: X.PagePlacements.Fullscreen,
                            mainObjectType: X.DomainObjectType.NonApplicable,
                            mainObjectId: X.DomainObjectType.NonApplicable,
                            from: X.AppScreen.PageNotFoundScreen,
                            to: X.AppScreen.AppDownloadScreen,
                        });
                });
            });
            var ax = (function (e) {
                    return ((e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e);
                })({}),
                af = a(79275),
                ag = a.n(af);
            let aA = { exit: ag().bar_exit, exitActive: ag().bar_exit_active, enter: ag().bar_enter, enterActive: ag().bar_enter_active },
                aN = { exit: ag().button_exit, exitActive: ag().button_exit_active, enter: ag().button_enter, enterActive: ag().button_enter_active },
                aC = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        o = (0, f.useRef)(null),
                        s = (0, f.useRef)(null);
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(ag().root, t),
                        children: [
                            (0, m.jsx)(tf.A, {
                                nodeRef: s,
                                in: n,
                                timeout: 150,
                                classNames: aN,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ag().button), ref: s, children: i }),
                            }),
                            (0, m.jsx)(tf.A, {
                                nodeRef: o,
                                in: !n,
                                timeout: 150,
                                classNames: aA,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(ag().bar, r), ref: o, children: a }),
                            }),
                        ],
                    });
                },
                ay = (e) => {
                    switch (e) {
                        case ax.MACOS:
                            return 'macos';
                        case ax.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                aT = (e) => {
                    let { formatMessage: t } = (0, y.A)();
                    switch (e) {
                        case ax.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case ax.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var aE = a(10748),
                aS = a.n(aE);
            let aB = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        o = aT(t),
                        s = (0, f.useMemo)(() => {
                            let e = { span: (e) => (0, m.jsx)('span', { className: aS().textBright, children: e }) };
                            switch (t) {
                                case ax.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case ax.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, m.jsx)('section', {
                        ref: a,
                        'aria-label': o,
                        children: (0, m.jsxs)(tN.t, {
                            radius: 'm',
                            className: aS().root,
                            children: [
                                (0, m.jsx)(w.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: aS().closeButton,
                                    icon: (0, m.jsx)(j.I, { variant: 'close', size: 'xxs', className: aS().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, m.jsx)(L.HL, { variant: 'div', className: aS().text, size: 'm', children: s }),
                                (0, m.jsx)(w.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': o,
                                    onClick: i,
                                    icon: (0, m.jsx)(j.I, { variant: ay(t), size: 'xxs', className: aS().downloadButtonIcon }),
                                    'data-test-id': S.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED,
                                    children: (0, m.jsx)(L.HL, {
                                        variant: 'span',
                                        className: aS().downloadButtonText,
                                        size: 'm',
                                        children: (0, m.jsx)(T.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                aI = (0, f.forwardRef)((e, t) => (0, m.jsx)(aB, { forwardRef: t, ...e }));
            var aw = a(3030),
                aj = a.n(aw);
            let aP = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = aT(t),
                        n = (0, f.useMemo)(() => ay(t), [t]);
                    return (0, m.jsxs)(tN.t, {
                        radius: 'm',
                        className: aj().root,
                        children: [
                            (0, m.jsx)(j.I, { variant: n, className: aj().icon }),
                            (0, m.jsxs)(k.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, m.jsx)(w.$, {
                                        className: aj().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, m.jsx)(j.I, { variant: 'download', size: 'xxs', className: aj().buttonIcon }),
                                        'aria-label': i,
                                        'data-test-id': S.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED,
                                    }),
                                    (0, m.jsx)(k.ZI, {
                                        children: (0, m.jsx)(L.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                ak = (0, v.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, D.g)(),
                        n = (0, eC.N)(),
                        r = n.get(eN.oo),
                        o = n.get(eN.V4),
                        [s, l] = (0, f.useState)(!1),
                        d = ab(),
                        c = (0, f.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return ax.MACOS;
                                case 'Windows':
                                    return ax.WINDOWS;
                                default:
                                    return ax.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, ah._)(o.downloadDesktop.url),
                        _ = (0, f.useCallback)(() => {
                            (d(), window.open(u, '_blank', 'noreferrer noopener'));
                        }, [d, u]),
                        p = (0, f.useCallback)(() => {
                            (r.set(ey.c.NavbarDownloadBarIsHidden, !0, { expires: 30 }), l(!0));
                        }, [r]);
                    return s
                        ? null
                        : (0, m.jsx)(aC, {
                              isCollapsed: a,
                              button: (0, m.jsx)(aP, { variant: c, onDownloadClick: _ }),
                              children: (0, m.jsx)(aI, { variant: c, onDownloadClick: _, onCloseClick: p }),
                          });
                });
            var aL = a(19994),
                aR = a(86462),
                aO = a(45213),
                aD = a.n(aO);
            let aM = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                aU = (0, v.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i } = (0, D.g)(),
                        [n, r] = (0, tt.d)(),
                        { formatMessage: o } = (0, y.A)(),
                        {
                            mainText: s,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            openPaymentWidgetModal: c,
                            saveOfferAndAuthorize: u,
                        } = (0, aR.D)({ storeName: 'music', isEnabled: t, offerElement: { element: n, intersectionPropertyId: aM } }),
                        _ = (0, b.L)(() => s || o({ id: 'authorization.start-button' })),
                        p = (0, B.c)(() => {
                            if (!i.isAuthorized) return void u();
                            c();
                        });
                    return l
                        ? (0, m.jsx)(aL.W, { className: aD().plusButtonShimmer, isActive: d, radius: 'xxxl' })
                        : (0, m.jsx)(w.$, {
                              className: aD().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: p,
                              ref: r,
                              'data-intersection-property-id': aM,
                              ...a,
                              children: (0, m.jsx)(L.HL, { variant: 'div', size: 's', lineClamp: 2, children: _ }),
                          });
                });
            aU.displayName = 'PlusNavbarButton';
            var aF = a(44450),
                az = a(26e3),
                aW = a(40210);
            function aK() {
                return (aK = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let aV = function (e) {
                return f.createElement(
                    'svg',
                    aK({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    f.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        f.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = f.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = f.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            f.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                o || (o = f.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            s || (s = f.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            l ||
                                (l = f.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    f.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    f.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = f.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            f.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            f.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = f.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = f.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    _ ||
                        (_ = f.createElement(
                            'defs',
                            null,
                            f.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                f.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                f.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            f.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                f.createElement('stop', { stopColor: '#FF5C4D' }),
                                f.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                f.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                f.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                f.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            f.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                f.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var aH = a(89057),
                aG = a.n(aH);
            let aY = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, D.g)(),
                        { formatMessage: r } = (0, y.A)();
                    return (0, m.jsxs)('section', {
                        className: (0, p.$)(aG().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        'data-test-id': S.e8.plusBar.PLUS_BAR,
                        children: [
                            (0, m.jsx)(aV, { className: aG().logos, 'aria-hidden': 'true' }),
                            (0, m.jsx)(L.HL, {
                                className: aG().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': S.e8.plusBar.PLUS_BAR_TITLE,
                                children: (0, m.jsx)(T.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsx)(L.HL, {
                                className: aG().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                'data-test-id': S.e8.plusBar.PLUS_BAR_ADDITION,
                                children: (0, m.jsx)(T.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: aG().buttons,
                                children: [
                                    (0, m.jsx)(aU, { shouldFetchOffers: i, 'data-test-id': S.e8.plusBar.PLUS_BAR_OFFER_BUTTON }),
                                    (0, m.jsx)(w.$, {
                                        className: aG().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        'data-test-id': S.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON,
                                        children: (0, m.jsx)(T.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                a$ = (0, f.forwardRef)((e, t) =>
                    (0, m.jsx)(aF.r, { page: az.l.SIDEBAR, places: [aW.R.SIDEBAR_BANNER], children: (0, m.jsx)(aY, { forwardRef: t, ...e }) }),
                );
            var aq = a(9995),
                aZ = a.n(aq);
            let aX = (0, v.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, y.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, D.g)();
                return (0, m.jsx)(aC, {
                    className: aZ().root,
                    isCollapsed: t,
                    button: (0, m.jsxs)(k.m_, {
                        ...e2,
                        enabled: t,
                        children: [
                            (0, m.jsx)(w.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, m.jsx)(j.I, { className: aZ().icon, variant: 'plusOutlined' }),
                                className: (0, p.$)(aZ().button, aZ().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                'data-test-id': S.e8.navbar.PAYWALL_BUTTON_MINIMIZED,
                            }),
                            (0, m.jsx)(k.ZI, {
                                children: (0, m.jsx)(L.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, m.jsx)(T.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(a$, { shouldFetchOffers: a }),
                });
            });
            aX.displayName = 'NavbarDesktopAnimatedPlusBar';
            var aQ = a(2946),
                aJ = a(7628),
                a0 = a(4213),
                a1 = a.n(a0);
            let a2 = () => {
                let { formatMessage: e } = (0, y.A)(),
                    t = e({ id: 'authorization.enter-title' }),
                    a = e({ id: 'authorization.enter-subtitle' });
                return (0, m.jsxs)('div', {
                    className: a1().root,
                    'data-test-id': S.e8.unauthBar.UNAUTH_BAR,
                    children: [
                        (0, m.jsx)(f.Suspense, { children: (0, m.jsx)(aQ.F, { className: a1().userProfile, userIdClassName: a1().userId, variant: 'desktop' }) }),
                        (0, m.jsx)(L.HL, {
                            className: a1().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            'data-test-id': S.e8.unauthBar.UNAUTH_BAR_TITLE,
                            children: t,
                        }),
                        (0, m.jsx)(L.HL, {
                            className: a1().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            'data-test-id': S.e8.unauthBar.UNAUTH_BAR_ADDITION,
                            children: a,
                        }),
                        (0, m.jsx)(aJ.H, { size: 's', isBlock: !0 }),
                    ],
                });
            };
            var a5 = a(91129),
                a8 = a.n(a5);
            let a4 = (0, v.PA)((e) => {
                let { isCollapsed: t, withUserProfileAnimation: a } = e,
                    { user: i } = (0, D.g)();
                return i.isAuthorized
                    ? (0, m.jsx)('div', {
                          className: a8().userProfileContainer,
                          children: (0, m.jsx)(aQ.F, {
                              className: a8().userProfile,
                              userIdClassName: a8().userId,
                              metaClassName: (0, p.$)(a8().userMeta, { [a8().userMeta_withAnimation]: a, [a8().userMeta_collapsed]: t }),
                              withMeta: !0,
                          }),
                      })
                    : (0, m.jsx)(aC, {
                          barClassName: a8().unauthorizedBar,
                          isCollapsed: t,
                          button: (0, m.jsxs)(k.m_, {
                              ...e2,
                              enabled: t,
                              children: [
                                  (0, m.jsx)('div', { className: a8().userProfileContainer, children: (0, m.jsx)(aQ.F, { className: a8().userProfile }) }),
                                  (0, m.jsx)(k.ZI, {
                                      children: (0, m.jsx)(L.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: (0, m.jsx)(T.A, { id: 'authorization.enter-tooltip' }),
                                      }),
                                  }),
                              ],
                          }),
                          children: (0, m.jsx)(a2, {}),
                      });
            });
            a4.displayName = 'NavbarDesktopUserWidget';
            let a3 = (0, v.PA)((e) => {
                var t, a, i, n, r;
                let { className: o, isCollapsed: s, shownAnimation: l, handleClick: d } = e,
                    c = ef(),
                    u = e$(),
                    { formatMessage: _ } = (0, y.A)(),
                    v = (0, ez.j)(),
                    {
                        user: h,
                        experiments: b,
                        settings: x,
                        modals: { bestRecommedationModal: g },
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: A },
                        },
                    } = (0, D.g)(),
                    N = eG(),
                    C = (0, eC.N)().get(eN.oo),
                    E = eJ(),
                    S = ((e) => {
                        let t = (0, eC.N)().get(eN.oo),
                            a = ef(),
                            [i, n] = (0, f.useState)(!1);
                        return (
                            (0, f.useEffect)(() => {
                                !0 !== t.get(ey.c.NavbarCollapsed) && (((e || a) && !1 !== t.get(ey.c.NavbarCollapsed)) || n(!0));
                            }, [e, a, t]),
                            i
                        );
                    })(s),
                    I = h.isAuthorized && !h.hasPlus,
                    R = (0, eF.Q)(),
                    O = A.isVisible && A.type === es.h.BRANDING && R.isEnabled ? (null == (t = R.data) ? void 0 : t.style) : void 0,
                    M = b.checkExperiment($.z.WebNextPromoVeryBestRecommendations, 'on'),
                    U = b.checkExperiment($.z.WebNextNavbarExplicit, 'on'),
                    F = !s && U;
                null == (a = x.browserInfo) || a.isTouch;
                let z = C.get(ey.c.NavbarDownloadBarIsHidden),
                    W = b.checkExperiment($.z.WebNextNewWaveTab, 'on') || b.checkExperiment($.z.WebNextNewWaveTab, 'on1'),
                    K =
                        !(null == (i = x.browserInfo) ? void 0 : i.isTouch) &&
                        h.isAuthorized &&
                        !h.hasPlus &&
                        (null == (r = b.getExperiment($.z.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                    [V, H] = (0, f.useState)(!1),
                    [G, Y] = (0, f.useState)(null),
                    q = (0, f.useMemo)(() => N.some((e) => e.id === eW.COLLECTION && e.isEnabled), [N]),
                    Z = K && q;
                (0, f.useEffect)(() => {
                    K || H(!1);
                }, [K]);
                let X = (0, B.c)(() => (0, m.jsx)('span', { 'aria-hidden': !0 })),
                    Q = !z && ew.$3 && 0,
                    J = (0, f.useMemo)(() => (s ? _({ id: 'sidebar.uncollapse' }) : _({ id: 'sidebar.collapse' })), [s, _]),
                    ee = (0, f.useCallback)(
                        (e, t) =>
                            e.id === eW.CONCERTS && b.checkExperiment($.z.WebNextConcertsTicketIcon, 'on')
                                ? (0, m.jsx)(am, { isSelected: t })
                                : W
                                  ? (0, m.jsx)(j.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                  : (0, m.jsx)(j.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                        [b, W],
                    ),
                    et = (0, B.c)(() => {
                        F && g.open();
                    }),
                    ea = (0, B.c)((e, t) => () => {
                        E(e, t);
                    }),
                    ei = (0, f.useMemo)(
                        () =>
                            (0, m.jsx)(
                                eM,
                                {
                                    className: (0, p.$)({ [av().navigationGroup]: W }),
                                    children: N.map((e) => {
                                        let t = u(e.availablePaths),
                                            a = ((e) => (e.id === eW.MUZMARKET ? (0, m.jsx)(e4, { children: e.title }) : e.title))(e),
                                            i = e.id === eW.COLLECTION && !!K && e.isEnabled,
                                            n = ea(e.analyticsParams.entityType, e.analyticsParams.to),
                                            r = !i && e.isEnabled && !t;
                                        return (0, m.jsx)(
                                            tc,
                                            {
                                                route: e,
                                                selected: t,
                                                shownAnimation: l,
                                                variant: 'main',
                                                isNewVisualVersion: W,
                                                withRipple: W && e.isEnabled && !t,
                                                children: (0, m.jsxs)(eZ.N, {
                                                    ref: i ? Y : void 0,
                                                    href: r ? e.path : void 0,
                                                    role: 'link',
                                                    'aria-disabled': !e.isEnabled,
                                                    tabIndex: e.isEnabled ? 0 : -1,
                                                    className: (0, p.$)({ [av().disabledNavigationItem]: !e.isEnabled }),
                                                    onClick: i
                                                        ? (e) => {
                                                              (e.preventDefault(), n(), H((e) => !e));
                                                          }
                                                        : n,
                                                    'data-test-id': e0[e.id],
                                                    children: [
                                                        (0, m.jsxs)(k.m_, {
                                                            ...e2,
                                                            enabled: s,
                                                            children: [
                                                                ee(e, t),
                                                                (0, m.jsx)(k.ZI, {
                                                                    children: (0, m.jsx)(L.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        children: a,
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)(L.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: (0, p.$)({ [av().title_animate]: l, [av().title_collapsed]: s }),
                                                            children: a,
                                                        }),
                                                    ],
                                                }),
                                            },
                                            e.id,
                                        );
                                    }),
                                },
                                'main',
                            ),
                        [u, s, b, b.loadingState, l, N, ea, ee, K, H],
                    ),
                    en = (0, f.useMemo)(
                        () =>
                            c
                                ? null
                                : (0, f.createElement)(k.m_, {
                                      ...e2,
                                      key: 'collapseTooltip',
                                      enabled: s,
                                      isFocusEnabled: !1,
                                      children: [
                                          (0, m.jsx)(w.$, {
                                              className: av().collapseButton,
                                              'aria-label': J,
                                              radius: 'round',
                                              color: 'secondary',
                                              size: 'xs',
                                              icon: (0, m.jsx)(j.I, { variant: s ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                              onClick: d,
                                          }),
                                          (0, m.jsx)(k.ZI, { className: (0, p.$)({ [av().collapseButtonTooltip_hidden]: !s }), children: J }),
                                      ],
                                  }),
                        [s, J, d, c],
                    );
                return (0, m.jsxs)('div', {
                    className: (0, p.$)(av().root, o),
                    style: O,
                    children: [
                        (0, m.jsxs)('div', {
                            className: av().logoWrapper,
                            children: [
                                (0, m.jsx)(eZ.N, {
                                    href: '/',
                                    className: av().logoLink,
                                    'aria-label': _({ id: 'navigation.page-main' }),
                                    children: (0, m.jsx)(ej.gu, { className: av().logo, collapsed: s, shownAnimation: l, lang: v }),
                                }),
                                en,
                            ],
                        }),
                        M &&
                            (0, m.jsx)(L.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'xs',
                                weight: 'medium',
                                className: (0, p.$)(av().subTitle, { [av().title_animate]: l, [av().title_collapsed]: s, [av().subTitle_withCursorPointer]: F }),
                                onClick: et,
                                children: (0, m.jsx)(T.A, { id: 'navigation.best-recommendations' }),
                            }),
                        (0, m.jsx)('div', {
                            className: av().scrollableContainer,
                            children: (0, m.jsxs)('div', {
                                className: av().scrollableContent,
                                children: [
                                    (0, m.jsx)(eD, {
                                        className: (0, p.$)(av().navigation, { [av().navigation_new]: W, [av().navigation_gapFill]: !1 }),
                                        collapsed: s,
                                        'aria-label': _({ id: 'navigation.main-menu' }),
                                        children: ei,
                                    }),
                                    (0, m.jsx)(eX.WithOffline, {
                                        fallback: (0, m.jsx)(ar, { style: O, isCollapsed: s, withCollapseAnimation: !!l, className: av().pinsList }),
                                    }),
                                    I && (0, m.jsx)(aX, { shouldFetchOffers: S, isCollapsed: s }),
                                    Q && (0, m.jsx)(ak, { isCollapsed: s }),
                                ],
                            }),
                        }),
                        (0, m.jsx)(a4, { withUserProfileAnimation: l, isCollapsed: s }),
                        Z &&
                            null !== G &&
                            (0, m.jsx)(eq.S, {
                                isOpened: V,
                                onOpenChange: H,
                                placement: 'right',
                                positionElement: G,
                                textVariant: 'collectionFreemium',
                                renderChildren: X,
                            }),
                        U &&
                            (0, m.jsxs)(P.a, {
                                className: av().bestRecommendationsModal,
                                headerClassName: av().bestRecommendationsModalHeader,
                                contentClassName: av().bestRecommendationsModalContent,
                                open: g.isOpened,
                                onOpenChange: g.onOpenChange,
                                onClose: g.close,
                                size: 'fitContent',
                                placement: 'center',
                                overlayColor: 'full',
                                labelClose: _({ id: 'interface-actions.close' }),
                                children: [
                                    (0, m.jsx)(j.I, { variant: 'musicLogo', className: av().bestRecommendationsModalLogo }),
                                    (0, m.jsx)(L.HL, {
                                        className: av().bestRecommendationsModalText,
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'normal',
                                        dangerouslySetInnerHTML: { __html: _({ id: 'about-app.explicit-content' }) },
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var a9 = a(97572),
                a6 = a.n(a9);
            let a7 = (0, v.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, D.g)(),
                        i = e$(),
                        { formatMessage: n } = (0, y.A)(),
                        r = eG(),
                        o = n({ id: 'navigation.main-menu' }),
                        s = eJ(),
                        l = a.checkExperiment($.z.WebNextNewWaveTab, 'on') || a.checkExperiment($.z.WebNextNewWaveTab, 'on1'),
                        d = (0, f.useCallback)(
                            (e, t) =>
                                e.id === eW.CONCERTS && a.checkExperiment($.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(am, { isSelected: t || l })
                                    : l
                                      ? (0, m.jsx)(j.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(j.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, l],
                        ),
                        c = (0, B.c)((e, t) => () => {
                            s(e, t);
                        });
                    return (0, m.jsx)('div', {
                        className: (0, p.$)(a6().root, t),
                        children: (0, m.jsx)(eD, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': o,
                            children: (0, m.jsx)(eM, {
                                children: (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, m.jsx)(
                                                tc,
                                                {
                                                    route: e,
                                                    selected: t,
                                                    isNewVisualVersion: l,
                                                    children: (0, m.jsxs)(eZ.N, {
                                                        href: e.isEnabled && !t ? e.path : void 0,
                                                        role: 'link',
                                                        'aria-disabled': !e.isEnabled,
                                                        tabIndex: e.isEnabled ? 0 : -1,
                                                        className: (0, p.$)({ [a6().disabledNavigationItem]: !e.isEnabled }),
                                                        onClick: c(e.analyticsParams.entityType, e.analyticsParams.to),
                                                        'data-test-id': e0[e.id],
                                                        children: [
                                                            d(e, t),
                                                            (0, m.jsx)(L.HL, {
                                                                variant: 'span',
                                                                type: 'controls',
                                                                size: 'm',
                                                                weight: 'medium',
                                                                lineClamp: 1,
                                                                children: e.title,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !l && (0, m.jsx)(eU, { children: (0, m.jsx)(aQ.F, { className: a6().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                ie = (0, v.PA)((e) => {
                    var t, a;
                    let { className: i, externalIsCollapsed: n, externalSetIsCollapsed: r } = e,
                        o = null == (t = (0, eg.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, eA.g)(),
                        l = (0, eC.N)().get(eN.oo),
                        d = ef(),
                        {
                            settings: { isMobile: c },
                        } = (0, D.g)(),
                        [u, _] = (0, f.useState)(null != (a = l.get(ey.c.NavbarCollapsed)) ? a : d),
                        [v, h] = (0, f.useState)(!1),
                        b = eS(),
                        x = null != n ? n : u,
                        g = null != r ? r : _,
                        A = (0, f.useMemo)(() => (c ? a7 : a3), [c]),
                        N = (0, B.c)((e) => {
                            (e.stopPropagation(), e.preventDefault());
                            let t = !x;
                            (l.set(ey.c.NavbarCollapsed, t, { expires: 180 }), g(t), h(!0));
                        });
                    return (
                        (0, f.useEffect)(() => {
                            b(x || d);
                        }, [o, s, d, x, c, b]),
                        (0, m.jsx)('aside', {
                            className: (0, p.$)(eI().root, { [eI().root_collapsed]: x || d }, i),
                            'data-test-id': S.e8.navbar.NAVBAR,
                            children: (0, m.jsx)(A, { handleClick: N, isCollapsed: x || d, shownAnimation: v }),
                        })
                    );
                });
            var it = a(631);
            let ia = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' },
                ii = 'adfox_175861261312993498';
            var ir = a(82712),
                io = (function (e) {
                    return ((e.PLAYER = 'branded_player'), e);
                })({});
            let is = (e) =>
                    (0, ir.m)(e) &&
                    e.type === io.PLAYER &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'thumb' in e.payload &&
                    ((e) =>
                        !!(
                            'object' == typeof e &&
                            null !== e &&
                            'href' in e &&
                            'string' == typeof e.href &&
                            'width' in e &&
                            'number' == typeof e.width &&
                            'height' in e &&
                            'number' == typeof e.height
                        ))(e.payload.thumb) &&
                    'modal' in e.payload &&
                    (null === e.payload.modal ||
                        ((e) =>
                            !!(
                                'object' == typeof e &&
                                null !== e &&
                                'imageUri' in e &&
                                'string' == typeof e.imageUri &&
                                'content' in e &&
                                'string' == typeof e.content &&
                                'primaryHref' in e &&
                                'string' == typeof e.primaryHref &&
                                'shouldShowSecondaryButton' in e &&
                                'boolean' == typeof e.shouldShowSecondaryButton &&
                                'secondaryText' in e &&
                                'string' == typeof e.secondaryText
                            ))(e.payload.modal)) &&
                    (!('disclaimer' in e.payload) ||
                        null === e.payload.disclaimer ||
                        ((e) =>
                            !!('object' == typeof e && null !== e && 'advertiser' in e && 'string' == typeof e.advertiser && 'token' in e && 'string' == typeof e.token))(
                            e.payload.disclaimer,
                        )),
                il = (0, v.PA)(() => {
                    let {
                            advertBanners: {
                                banners: { brandedPlayerBanner: e },
                            },
                        } = (0, D.g)(),
                        t = (0, B.c)(() => {
                            e.setType(es.h.BRANDING);
                        }),
                        a = (0, B.c)((t) => {
                            (0, it.f)(t, ii, is) && e.setPayload(t.data.payload);
                        });
                    return ((0, f.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, f.useEffect)(
                        () => (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        ),
                        [a],
                    ),
                    e.isVisible)
                        ? (0, m.jsx)(et.N, { ownerId: ee.P, containerId: ii, params: ia, onLoad: t, onError: e.toggleHasErrorTrue, onNoAds: e.toggleNoAdsTrue })
                        : null;
                });
            var id = a(51318),
                ic = a(17071),
                iu = a(38860),
                i_ = a(5915),
                im = a(78999),
                ip = a.n(im);
            let iv = (0, v.PA)((e) => {
                let { className: t, data: a, mediaContent: i, linkClassName: n } = e,
                    {
                        settings: { isMobile: r },
                    } = (0, D.g)(),
                    o = (0, f.useMemo)(
                        () =>
                            (null == a ? void 0 : a.clickThroughUrl)
                                ? (0, m.jsx)(eZ.N, {
                                      target: '_blank',
                                      href: a.clickThroughUrl,
                                      className: (0, p.$)(ip().button, ip().linkButton, n),
                                      children: (0, m.jsx)(T.A, { id: 'ads.learn-more' }),
                                  })
                                : (0, m.jsx)(w.$, {
                                      className: (0, p.$)(ip().button, n),
                                      variant: 'default',
                                      radius: 'xxxl',
                                      disabled: !0,
                                      children: (0, m.jsx)(T.A, { id: 'ads.learn-more' }),
                                  }),
                        [null == a ? void 0 : a.clickThroughUrl, n],
                    );
                return (0, m.jsxs)('div', {
                    className: (0, p.$)(ip().root, t),
                    children: [
                        i,
                        (0, m.jsxs)('div', {
                            className: ip().container,
                            children: [
                                (0, m.jsxs)('div', {
                                    className: ip().info,
                                    children: [
                                        (0, m.jsx)(tA._V, {
                                            className: ip().favicon,
                                            withAspectRatio: !0,
                                            'aria-hidden': !0,
                                            fit: 'cover',
                                            src: (null == a ? void 0 : a.iconSrc) || '',
                                            alt: '',
                                            fallbackIconVariant: 'picture',
                                        }),
                                        (0, m.jsxs)('div', {
                                            className: ip().text,
                                            children: [
                                                (0, m.jsx)(L.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: ip().title,
                                                    lineClamp: r ? 5 : void 0,
                                                    children: null == a ? void 0 : a.adTitle,
                                                }),
                                                (0, m.jsx)(L.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: ip().subtitle,
                                                    children: (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, m.jsx)('div', { className: ip().buttonContainer, children: o }),
                            ],
                        }),
                    ],
                });
            });
            var ih = a(26208),
                ib = a(43484),
                ix = a.n(ib);
            let ig = (0, v.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, D.g)(),
                        { formatMessage: i } = (0, y.A)(),
                        n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        r = (0, f.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return n
                        ? (0, m.jsxs)(tF.W1, {
                              className: ix().contextMenuButton,
                              size: 'xxs',
                              icon: (0, m.jsx)(j.I, { size: 'xxs', variant: 'more', className: ix().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo && (0, m.jsx)(L.HL, { variant: 'div', size: 's', className: ix().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, m.jsx)(tF.Dr, {
                                          onClick: r,
                                          icon: (0, m.jsx)(j.I, { variant: 'info', size: 'xxs' }),
                                          children: (0, m.jsx)(T.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                iA = (0, v.PA)((e) => {
                    var t, a, i;
                    let { className: n } = e,
                        { advert: r } = (0, D.g)();
                    return r.isAdvertDisabled(ih.f.AUDIO) || !(r.data && r.isAdvertShown)
                        ? null
                        : (0, m.jsx)('div', {
                              className: n,
                              children: (0, m.jsx)(iv, {
                                  data: r.data,
                                  mediaContent: (0, m.jsxs)('div', {
                                      className: ix().imageContainer,
                                      children: [
                                          (0, m.jsx)(tA._V, {
                                              className: (0, p.$)(ix().image, { [ix().image_fallback]: !(null == (t = r.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = r.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(tA._V, {
                                              className: ix().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = r.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(ig, { advertData: r.data }),
                                      ],
                                  }),
                                  linkClassName: ix().linkButton,
                              }),
                          });
                });
            var iN = a(24437),
                iC = a(44164),
                iy = a.n(iC),
                iT = a(73170),
                iE = a(54112),
                iS = a(7123),
                iB = a(56425),
                iI = a(35402),
                iw = a(13315),
                ij = a(31941),
                iP = a.n(ij);
            let ik = (0, v.PA)((e) => {
                let { className: t, thumbData: a, onThumbAction: i } = e,
                    { sonataState: n } = (0, D.g)(),
                    { formatMessage: r } = (0, y.A)(),
                    [o, s] = (0, f.useState)(null),
                    [l, d] = (0, f.useState)(null),
                    c = (0, f.useRef)(null),
                    u = (0, f.useRef)(null),
                    _ = (0, B.c)(() => {
                        n.status === iS.MT.PLAYING ? null == o || o.play() : null == o || o.pause();
                    });
                ((0, f.useEffect)(() => {
                    if (!a) return;
                    if ((0, iw.J)(a.href)) return void d(a.href);
                    let e = iB.z[a.href];
                    e
                        ? e().then((e) => {
                              (0, iw.J)(e) ? d(e) : d(''.concat(window.location.origin).concat(e));
                          })
                        : d(a.href);
                }, [a]),
                    (0, f.useEffect)(() => {
                        o && (o.setUseFrameInterpolation(!1), o.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [o]),
                    (0, f.useEffect)(() => {
                        if (o)
                            return (
                                o.addEventListener('load', _),
                                () => {
                                    o.removeEventListener('load', _);
                                }
                            );
                    }, [o, _, n.status]),
                    (0, f.useEffect)(() => {
                        _();
                    }, [o, _, n.status]),
                    (0, f.useEffect)(
                        () => () => {
                            u.current && clearTimeout(u.current);
                        },
                        [],
                    ));
                let v = (0, B.c)(() => {
                        (u.current && (clearTimeout(u.current), (u.current = null)), null == i || i());
                    }),
                    h = (0, B.c)(() => {
                        i &&
                            (u.current && clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                (null == i || i(), (u.current = null));
                            }, 800)));
                    }),
                    x = (0, B.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null));
                    }),
                    g = (0, b.L)(() => {
                        if (a)
                            return { '--thumb-width': ''.concat(a.width, 'px'), '--thumb-height': ''.concat(a.height, 'px'), '--thumb-cursor': i ? 'pointer' : 'auto' };
                    });
                return l
                    ? i
                        ? (0, m.jsx)('div', {
                              className: iP().root,
                              style: g,
                              children: (0, m.jsx)(w.$, {
                                  ref: c,
                                  className: (0, p.$)(iP().container, t),
                                  onClick: v,
                                  onMouseEnter: h,
                                  onMouseLeave: x,
                                  withRipple: !1,
                                  'aria-label': r({ id: 'branded-player.branding-integration' }),
                                  'data-test-id': S.OA.customPlayerThumb.CUSTOM_PLAYER_THUMB_BUTTON,
                                  children: (0, m.jsx)(iI.j, { src: l, loop: !0, dotLottieRefCallback: s, layout: { align: [0, 1] } }, l),
                              }),
                          })
                        : (0, m.jsx)('div', {
                              className: iP().root,
                              style: g,
                              children: (0, m.jsx)('div', {
                                  ref: c,
                                  className: (0, p.$)(iP().container, t),
                                  children: (0, m.jsx)(iI.j, { src: l, loop: !0, dotLottieRefCallback: s, layout: { align: [0, 1] } }, l),
                              }),
                          })
                    : null;
            });
            var iL = a(34712),
                iR = a(34194),
                iO = a.n(iR);
            let iD = (0, v.PA)((e) => {
                var t;
                let { modal: a, disclaimer: i } = e,
                    {
                        paywall: n,
                        experiments: r,
                        advertBanners: {
                            banners: { brandedPlayerBanner: o },
                        },
                    } = (0, D.g)(),
                    { contentRootRef: s } = (0, R.g)(),
                    { formatMessage: l } = (0, y.A)(),
                    [d, c] = (0, f.useState)(!1),
                    u = r.checkExperiment($.z.WebNextBrandedPlayerErids, 'on'),
                    _ = (0, tI.Z)(a.primaryHref),
                    p = (0, B.c)((e) => {
                        var t, a;
                        null == (t = (a = o.modal).onOpenChange) || t.call(a, e);
                    });
                ((e) => {
                    let { enabled: t, onChange: a } = e,
                        i = (0, h.usePathname)();
                    (0, f.useRef)(i);
                    let n = (0, B.c)(a);
                    return (
                        (0, f.useEffect)(() => {}, [t, n, i]),
                        (0, f.useEffect)(() => {
                            if (!t || !ew.NN) return;
                            let e = window.navigation;
                            if (e)
                                return (
                                    e.addEventListener('navigate', n),
                                    () => {
                                        e.removeEventListener('navigate', n);
                                    }
                                );
                        }, [t, n])
                    );
                })({ enabled: o.modal.isOpened, onChange: o.modal.close });
                let v = { '--modal-bottom-offset': ''.concat(null == (t = o.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, m.jsxs)(P.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: o.modal.isOpened,
                    onOpenChange: p,
                    className: iO().root,
                    contentClassName: iO().modalContent,
                    portalNode: s,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: v,
                    'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL,
                    children: [
                        (0, m.jsxs)('header', {
                            children: [
                                a.imageUri &&
                                    (0, m.jsx)(tA._V, { src: a.imageUri, className: iO().image, 'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL_IMAGE }),
                                (0, m.jsx)(w.$, {
                                    className: iO().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: o.modal.close,
                                    icon: (0, m.jsx)(j.I, { variant: 'close', size: 'xs' }),
                                    'aria-label': l({ id: 'interface-actions.close' }),
                                    'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL_CLOSE_BUTTON,
                                }),
                            ],
                        }),
                        (0, m.jsx)(L.HL, {
                            variant: 'span',
                            className: iO().content,
                            lineClamp: 2,
                            'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL_CONTENT_TEXT,
                            children: a.content,
                        }),
                        u &&
                            i &&
                            (0, m.jsxs)(iL.AM, {
                                placement: 'top-start',
                                open: d,
                                onOpenChange: c,
                                offsetOptions: 8,
                                transform: !1,
                                children: [
                                    (0, m.jsxs)(w.$, {
                                        className: iO().advDisclaimerTrigger,
                                        variant: 'text',
                                        color: 'secondary',
                                        withHover: !1,
                                        withRipple: !1,
                                        'data-test-id': S.OA.playerBranding.ADVERT_DISCLAIMER_TRIGGER_BUTTON,
                                        children: [
                                            (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                            (0, m.jsx)(j.I, { className: iO().advDisclaimerTriggerIcon, variant: 'moreOutlined', size: 'xxxs' }),
                                        ],
                                    }),
                                    (0, m.jsx)(iL.hl, {
                                        className: iO().advDisclaimerPopover,
                                        children: (0, m.jsx)(L.HL, {
                                            className: iO().advDisclaimerText,
                                            variant: 'p',
                                            type: 'text',
                                            size: 'xs',
                                            weight: 'medium',
                                            'data-test-id': S.OA.playerBranding.ADVERT_DISCLAIMER_TEXT,
                                            children: (0, m.jsx)(T.A, { id: 'ads.disclaimer', values: { advertiser: i.advertiser, eridToken: i.token } }),
                                        }),
                                    }),
                                ],
                            }),
                        (0, m.jsxs)('div', {
                            className: iO().actions,
                            children: [
                                (0, m.jsx)(w.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: _,
                                    className: iO().button,
                                    'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL_PRIMARY_BUTTON,
                                    children: (0, m.jsx)(L.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, m.jsx)(T.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, m.jsx)(w.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: n.openModal,
                                        className: iO().button,
                                        'data-test-id': S.OA.playerBranding.BRANDED_PLAYER_MODAL_SECONDARY_BUTTON,
                                        children: (0, m.jsx)(L.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, m.jsx)(T.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var iM = a(91467),
                iU = a(97361),
                iF = a(9630),
                iz = a(71774),
                iW = a(11518),
                iK = a.n(iW),
                iV = a(27723),
                iH = a(54965),
                iG = a(91641),
                iY = a(39901),
                i$ = a.n(iY);
            let iq = (e) => {
                let { progress: t, position: a, duration: i, timecodeClassName: n, currentTimecodeClassName: r, progressElementWidth: o, shouldHoldTimecode: s } = e,
                    l = (0, iU.P)(a),
                    d = (0, iU.P)(i),
                    c = (0, f.useRef)(null),
                    [u, _] = (0, f.useState)(0),
                    v = (0, iH.E)(Math.round(i), Math.round(i));
                (0, f.useEffect)(() => {
                    c.current && _(Math.round(c.current.getBoundingClientRect().width));
                }, [v.length, o]);
                let h = Math.round((t / 100) * o),
                    x = 0 !== o ? o - u : 0,
                    g = Math.min(Math.max(h - u / 2, 0), x),
                    A = (0, b.L)(() => {
                        if (!s) return { '--timecode-position': ''.concat(g, 'px') };
                    });
                return (0, m.jsxs)(m.Fragment, {
                    children: [
                        (0, m.jsx)(iG.d, {
                            role: 'text',
                            'aria-label': d,
                            value: v,
                            variant: 'end',
                            className: (0, p.$)(i$().timecode, n, i$().timecode_end, { [i$().timecode_end_hidden]: !(h < x - u / 2) }),
                        }),
                        (0, m.jsx)(iG.d, {
                            role: 'text',
                            'aria-label': l,
                            style: A,
                            ref: c,
                            value: (0, iH.E)(Math.round(a), Math.round(i)),
                            variant: 'start',
                            className: (0, p.$)(i$().timecode, i$().timecode_current, n, r, {
                                [i$().timecode_current_animation]: u > 0,
                                [i$().timecode_current_hidden]: s && !(h > 2 * u),
                            }),
                        }),
                    ],
                });
            };
            var iZ = a(85737),
                iX = a.n(iZ);
            let iQ = (0, v.PA)((e) => {
                    let { progress: t, position: a, duration: i, progressElementWidth: n, hasCustomThumb: r, customThumbHeight: o } = e,
                        { experiments: s } = (0, D.g)();
                    return s.checkExperiment($.z.WebNextPlayerTimecodeTooltip, 'on')
                        ? (0, m.jsx)(iV.u, {
                              className: (0, p.$)(iX().timecodeTooltip, iX().important),
                              progress: t,
                              position: a,
                              duration: i,
                              progressElementWidth: n,
                              offset: o,
                          })
                        : (0, m.jsx)(iq, {
                              currentTimecodeClassName: r ? void 0 : (0, p.$)(iX().timecodeGroupCurrent, iX().important),
                              timecodeClassName: iX().timecodeGroup,
                              progress: t,
                              position: a,
                              duration: i,
                              progressElementWidth: n,
                              shouldHoldTimecode: r,
                          });
                }),
                iJ = (0, v.PA)((e) => {
                    var t, a, i, n, r;
                    let {
                            sliderClassName: o,
                            disabled: s,
                            isMobile: l,
                            progressbarClassName: d,
                            thumbClassName: c,
                            showThumbVariant: u,
                            withTimecode: _,
                            sonataPlaybackId: v,
                        } = e,
                        h = (0, iF.e)(),
                        x = null == h ? void 0 : h.getState(v),
                        g = (0, f.useRef)(!1),
                        {
                            advert: A,
                            sonataState: N,
                            settings: C,
                            advertBanners: {
                                banners: { brandedPlayerBanner: T },
                            },
                        } = (0, D.g)(),
                        { formatMessage: E } = (0, y.A)(),
                        I = (0, iM.r)(),
                        [w, j] = (0, f.useState)(N.position),
                        [P, k] = (0, f.useState)(N.duration),
                        L = (0, iU.P)(Math.round(null != w ? w : 0)),
                        R = w && P ? (100 * Math.min(w, P)) / P : 0,
                        O = (0, f.useRef)(null),
                        [M, U] = (0, f.useState)(0),
                        F = M > 0,
                        { state: z, toggleTrue: W, toggleFalse: K } = (0, t1.e)(!1),
                        { state: V, toggleTrue: H, toggleFalse: G } = (0, t1.e)(!1),
                        { isVisibilityRestored: Y } = (() => {
                            let { state: e, toggleTrue: t, toggleFalse: a } = (0, t1.e)(!1);
                            return (
                                (0, f.useEffect)(() => {
                                    let e = new AbortController();
                                    return (
                                        document.addEventListener(
                                            'visibilitychange',
                                            () => {
                                                document.hidden || t();
                                            },
                                            { signal: e.signal },
                                        ),
                                        () => {
                                            e.abort();
                                        }
                                    );
                                }, [t]),
                                (0, f.useEffect)(() => {
                                    if (!e) return;
                                    let t = requestAnimationFrame(() => {
                                        a();
                                    });
                                    return () => {
                                        cancelAnimationFrame(t);
                                    };
                                }, [e, a]),
                                { isVisibilityRestored: e }
                            );
                        })(),
                        $ = (0, b.L)(() => {
                            var e, t;
                            return T.isVisible && (null == (e = T.payload) ? void 0 : e.thumb)
                                ? { thumb: T.payload.thumb, onThumbAction: T.modal.open }
                                : C.selectedThumbId && C.selectedThumbId !== iz.T.DEFAULT
                                  ? { thumb: null == (t = (0, iB.r)(E).get(C.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    ((0, f.useEffect)(() => {
                        (null == h ? void 0 : h.state.playerState.status.value) === iS.MT.PLAYING && G();
                    }, [G, null == h ? void 0 : h.state.playerState.status.value]),
                        (0, f.useEffect)(() => {
                            let e = null == h ? void 0 : h.state.queueState.currentEntity.onChange(H);
                            return (
                                G(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [H, G, null == h ? void 0 : h.state.queueState.currentEntity]));
                    let q = (0, B.c)((e, t) => {
                            A.isAdvertShown || ((g.current = !t), t ? null == h || h.setProgress(e, v) : j(e));
                        }),
                        Z = (0, B.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (k(0), j(0)) : (k(e), g.current || j(t)));
                        });
                    ((0, f.useEffect)(() => {
                        v || Z(N.duration, N.position);
                    }, [N.duration, N.position, Z, v]),
                        (0, f.useEffect)(() => {
                            var e;
                            if (!v) return;
                            let t =
                                null == x || null == (e = x.playerState)
                                    ? void 0
                                    : e.progress.onChange((e) => {
                                          e && Z(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [v, null == x || null == (t = x.playerState) ? void 0 : t.progress, Z]),
                        (0, f.useEffect)(() => {
                            var e;
                            let t =
                                null == I || null == (e = I.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && A.isAdvertShown && Z(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == I || null == (a = I.audioAdvertPlayback) ? void 0 : a.state.playerState.progress, Z, A.isAdvertShown]));
                    let X = (R / 100) * M - 6;
                    (0, f.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            U(Math.round(null != (t = null == (e = O.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            O.current && e.observe(O.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Q = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(R, '%'),
                        '--thumb-position': ''.concat(X, 'px'),
                        ...((V || Y) && { '--transition-disabled': 'none' }),
                    };
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(iK().root, { [iK().root_focusVisible]: z, [iK().root_isPlayingTrack]: !A.isAdvertShown }),
                        style: Q,
                        'data-test-id': S.Kq.changeTimecode.TIMECODE_WRAPPER,
                        children: [
                            !l &&
                                _ &&
                                F &&
                                (0, m.jsx)(iQ, {
                                    progress: R,
                                    position: null != w ? w : 0,
                                    duration: null != P ? P : 0,
                                    progressElementWidth: M,
                                    hasCustomThumb: !!$,
                                    customThumbHeight: null != (r = null == $ || null == (i = $.thumb) ? void 0 : i.height) ? r : 0,
                                }),
                            (0, m.jsx)('div', { ref: O, className: (0, p.$)(iK().progressbar, d) }),
                            F && !$ && (0, m.jsx)('div', { className: (0, p.$)(iK().thumb, c) }),
                            $ &&
                                (0, m.jsx)(ik, {
                                    className: iK().brandedThumb,
                                    thumbData: null == $ ? void 0 : $.thumb,
                                    onThumbAction: null == $ ? void 0 : $.onThumbAction,
                                }),
                            (null == (n = T.payload) ? void 0 : n.modal) && (0, m.jsx)(iD, { modal: T.payload.modal, disclaimer: T.payload.disclaimer }),
                            (0, m.jsx)(iE.A, {
                                'aria-valuetext': L,
                                onClick: K,
                                onBlur: K,
                                onFocus: W,
                                className: (0, p.$)(iK().slider, iK().important, o),
                                disabled: s || A.isAdvertShown,
                                'aria-label': E({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: u,
                                onChange: q,
                                maxValue: P ? Math.round(P) : 0,
                                mode: 'deferred',
                                value: Math.round(null != w ? w : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                'data-test-id': S.Kq.changeTimecode.TIMECODE_SLIDER,
                            }),
                            (0, m.jsx)('div', { className: iK().backgroundProgressbar }),
                        ],
                    });
                });
            var i0 = a(59717),
                i1 = a(86200),
                i2 = a(8641),
                i5 = a(17743),
                i8 = a(16208),
                i4 = a(48215),
                i3 = a(15232),
                i9 = a(1829),
                i6 = a(35262),
                i7 = a(81877),
                ne = a(49738),
                nt = a(63955),
                na = a(64014);
            let ni = 'player-region';
            var nn = a(92644),
                nr = a(52032),
                no = a.n(nr);
            let ns = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, m.jsx)('div', {
                        ref: n,
                        className: (0, p.$)(no().root, t),
                        children: (0, m.jsx)(w.$, {
                            className: no().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, m.jsx)(j.I, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            'data-test-id': S.e8.player.FULLSCREEN_PLAYER_BUTTON,
                        }),
                    });
                },
                nl = (0, f.forwardRef)((e, t) => (0, m.jsx)(ns, { forwardRef: t, ...e }));
            var nd = a(58292),
                nc = a(4887),
                nu = a.n(nc);
            let n_ = (0, v.PA)((e) => {
                var t;
                let {
                        className: a,
                        entityMeta: i,
                        isLiked: n,
                        isDisliked: r,
                        onLikeClick: o,
                        onDislikeClick: s,
                        renderSonataControls: l,
                        withLike: d,
                        withDislike: c,
                        withExtraControls: u,
                        withFullscreen: _,
                        withContextMenu: v = !0,
                        withTrackAndArtistLinks: h = !0,
                        sonataPlaybackId: x,
                        sonataVolume: g,
                    } = e,
                    {
                        user: A,
                        sonataState: N,
                        fullscreenPlayer: C,
                        settings: { isMobileLandscapeHeight: E },
                        advert: P,
                        track: R,
                        experiments: O,
                    } = (0, D.g)(),
                    [M, U] = (0, f.useState)(!1),
                    [F, z] = (0, f.useState)(!1),
                    { formatMessage: W } = (0, y.A)(),
                    K = _ && !N.isGenerativeContext,
                    V = N.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    H = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    G = null == i ? void 0 : i.isTrackAudiobook,
                    Y = (0, i2.d)(),
                    q = (0, nn.K)(i),
                    Z = (0, B.c)(() => {
                        R.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    X = (0, B.c)((e) => {
                        e.stopPropagation();
                    }),
                    Q = (0, B.c)(async (e) => {
                        await Y(N, e, x);
                    }),
                    J = (0, B.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && K && a && !P.isAdvertShown && C.showFullscreenPlayerModal();
                    }),
                    ee = (0, B.c)((e) => {
                        if (!N.isGenerativeContext && i) {
                            if (((0, I.P)(e, nu().ripple), 2 === e.detail)) {
                                (R.close(), J(e));
                                return;
                            }
                            _ && 1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !C.modal.isOpened && Z();
                        }
                    }),
                    et = (0, f.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(W({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(W({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : C.showSyncLyrics;
                            return (0, m.jsx)(w.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) || E,
                                'aria-hidden': !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature),
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, m.jsx)(j.I, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                'data-test-id': S.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                            });
                        },
                        [W, C.showSyncLyrics, null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature, E],
                    ),
                    ea = (0, f.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || P.isAdvertShown
                                ? null
                                : A.isAuthorized && !A.hasPlus
                                  ? (0, m.jsx)(eq.S, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: et })
                                  : (0, m.jsx)(nt.Z, { isEnabled: !A.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: et }),
                        [null == i ? void 0 : i.isNonMusic, P.isAdvertShown, A.isAuthorized, et, A.hasPlus],
                    ),
                    ei = (0, f.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : C.showPlayQueue;
                            return (0, m.jsx)(w.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': W({ id: 'play-queue.title' }),
                                icon: (0, m.jsx)(j.I, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                'data-test-id': S.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            });
                        },
                        [i, C.showPlayQueue, W],
                    ),
                    en = (0, f.useMemo)(
                        () => (P.isAdvertShown ? null : (0, m.jsx)(nt.Z, { isEnabled: !A.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: ei })),
                        [P.isAdvertShown, A.isAuthorized, ei],
                    ),
                    er = (0, f.useMemo)(() => {
                        if (v && i && !N.isGenerativeContext && !P.isAdvertShown)
                            return (0, m.jsx)('div', {
                                onDoubleClick: X,
                                children: (0, m.jsx)(i9._, {
                                    track: i,
                                    placement: 'top',
                                    className: nu().trackContextMenuIcon,
                                    open: M,
                                    onOpenChange: U,
                                    icon: (0, m.jsx)(j.I, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    'data-test-id': S.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                                }),
                            });
                    }, [P.isAdvertShown, i, X, M, N.isGenerativeContext, v]),
                    eo = (0, f.useMemo)(
                        () =>
                            i
                                ? G
                                    ? (0, m.jsx)(i8.Z, {
                                          afterTitle: er,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withArtistLink: h,
                                          withContextMenuArtists: !0,
                                      })
                                    : H
                                      ? (0, m.jsx)(i4.w, {
                                            afterTitle: er,
                                            explicitSize: 'xxxs',
                                            track: i,
                                            withDate: !1,
                                            withSecondaryColor: !0,
                                            withPodcastName: !0,
                                            withAlbumTitleLink: h,
                                        })
                                      : (0, m.jsx)(i3.j, {
                                            afterTitle: er,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: h && !N.isGenerativeContext,
                                            withArtistLink: h,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [er, i, G, H, N.isGenerativeContext, h],
                    ),
                    es = (0, b.L)(() =>
                        l
                            ? l({ isMobile: !1, entityMeta: i })
                            : (0, m.jsx)(i5.$, {
                                  className: (0, p.$)(nu().sonataControls, nu().important),
                                  withRepeat: !0,
                                  withShuffle: !0,
                                  isMobile: !1,
                                  entityMeta: i,
                              }),
                    ),
                    el = O.checkExperiment($.z.WebNextNewWaveTab, 'on') || O.checkExperiment($.z.WebNextNewWaveTab, 'on1');
                return (0, m.jsx)('section', {
                    style: P.isAdvertShown ? void 0 : q,
                    className: (0, p.$)(nu().root, nu().important, a, { [nu().root_interactive]: _ }),
                    'data-test-id': S.e8.player.PLAYERBAR_DESKTOP,
                    'aria-labelledby': ni,
                    children: (0, m.jsxs)('div', {
                        className: nu().playerBar,
                        children: [
                            !N.isGenerativeContext &&
                                (0, m.jsx)(iJ, {
                                    sliderClassName: nu().slider,
                                    progressbarClassName: nu().progressBar,
                                    thumbClassName: nu().thumb,
                                    disabled: !i,
                                    isMobile: !1,
                                    withTimecode: !0,
                                    sonataPlaybackId: x,
                                }),
                            (0, m.jsxs)('div', {
                                className: (0, p.$)(nu().player, { [nu().player_disabled]: !i }),
                                children: [
                                    _ && (0, m.jsx)('div', { onClick: ee, className: nu().triggerModal }),
                                    (0, m.jsx)(iT.q, { children: (0, m.jsx)(L.DZ, { variant: 'h3', id: ni, children: (0, m.jsx)(T.A, { id: 'a11y-regions.player' }) }) }),
                                    (0, m.jsx)('div', {
                                        className: nu().info,
                                        children: (0, m.jsx)('div', {
                                            className: nu().infoCard,
                                            children:
                                                i &&
                                                !P.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        (0, m.jsxs)(tN.t, {
                                                            radius: 's',
                                                            className: nu().coverContainer,
                                                            'data-test-id': S.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                                            children: [
                                                                (0, m.jsx)(i7.B, {
                                                                    className: nu().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                K &&
                                                                    (0, m.jsxs)(k.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, m.jsx)(nl, {
                                                                                ariaLabel: W({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: C.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, m.jsx)(k.ZI, { children: (0, m.jsx)(T.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)('div', { className: nu().description, children: eo }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: (0, p.$)(nu().sonata, { [nu().sonata_withReversedControls]: el }),
                                        children: [
                                            d &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(ne.c, { disabled: !i || P.isAdvertShown, isLiked: n, onClick: o, iconSize: 'xs' }),
                                                }),
                                            es,
                                            c &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(i6._, { disabled: !i || P.isAdvertShown, isDisliked: r, onClick: s, iconSize: 'xs' }),
                                                }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nu().meta,
                                        children: [
                                            u &&
                                                !N.isGenerativeContext &&
                                                !P.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        V && (0, m.jsx)(na.i, { iconSize: 'l' }),
                                                        ea,
                                                        en,
                                                        (0, m.jsx)(nd.p$, {
                                                            placement: 'bottom',
                                                            open: F,
                                                            onOpenChange: z,
                                                            icon: (0, m.jsx)(j.I, { variant: 'settings', size: 'xs' }),
                                                            size: 'xxxs',
                                                            referenceClassName: nu().settingsButton,
                                                        }),
                                                    ],
                                                }),
                                            (0, m.jsx)(i1.r, { variant: i0.q.VERTICAL, sonataVolume: null != g ? g : N.volume, onVolumeClick: Q, playbackId: x }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var nm = a(5866),
                np = a(69547),
                nv = a.n(np);
            let nh = (0, v.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: n, onLikeClick: r, renderSonataControls: o, withLike: s, withFullscreen: l, sonataPlaybackId: d } = e,
                        { user: c, sonataState: u, fullscreenPlayer: _, advert: v } = (0, D.g)(),
                        h = c.isAuthorized && i && !v.isAdvertShown,
                        x = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        g = null == i ? void 0 : i.isTrackAudiobook,
                        A = (0, nn.K)(i),
                        N = (0, f.useCallback)(
                            (e) => {
                                if (v.isAdvertShown || !l) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !u.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, u.isGenerativeContext, v.isAdvertShown, l],
                        ),
                        C = (0, f.useMemo)(
                            () =>
                                v.isAdvertShown
                                    ? null
                                    : i
                                      ? g
                                          ? (0, m.jsx)(i8.Z, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : x
                                            ? (0, m.jsx)(i4.w, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, m.jsx)(i3.j, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, m.jsxs)('div', {
                                            className: nv().shimmerMeta,
                                            children: [
                                                (0, m.jsx)(aL.W, { className: nv().shimmerMetaTitle }),
                                                (0, m.jsx)(aL.W, { className: nv().shimmerMetaDescription }),
                                            ],
                                        }),
                            [v.isAdvertShown, i, g, x],
                        ),
                        y = (0, b.L)(() =>
                            v.isAdvertShown
                                ? (0, m.jsx)('div', { className: nv().infoCard })
                                : i
                                  ? (0, m.jsxs)('div', {
                                        className: nv().infoCard,
                                        children: [
                                            (0, m.jsx)(tN.t, {
                                                radius: 's',
                                                className: nv().coverContainer,
                                                children: (0, m.jsx)(i7.B, { className: nv().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, m.jsx)('div', { className: nv().description, children: C }),
                                        ],
                                    })
                                  : (0, m.jsxs)('div', {
                                        className: nv().infoCard,
                                        children: [
                                            (0, m.jsx)(tN.t, {
                                                radius: 's',
                                                className: nv().coverContainer,
                                                children: (0, m.jsx)(aL.W, { className: nv().shimmerCover }),
                                            }),
                                            (0, m.jsx)('div', { className: nv().description, children: C }),
                                        ],
                                    }),
                        ),
                        E = (0, b.L)(() => (o ? o({ isMobile: !0, entityMeta: i }) : (0, m.jsx)(i5.$, { isMobile: !0, entityMeta: i })));
                    return (0, m.jsxs)('section', {
                        style: v.isAdvertShown ? void 0 : A,
                        className: (0, p.$)(nv().root, a),
                        onClick: N,
                        'data-test-id': S.e8.player.MOBILE_PLAYERBAR,
                        children: [
                            (0, m.jsx)(iT.q, { children: (0, m.jsx)(L.DZ, { variant: 'h3', id: ni, children: (0, m.jsx)(T.A, { id: 'a11y-regions.player' }) }) }),
                            !u.isGenerativeContext &&
                                (0, m.jsx)(nm.v, {
                                    className: nv().backgroundProgress,
                                    sliderClassName: nv().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                    sonataPlaybackId: d,
                                }),
                            (0, m.jsxs)('div', {
                                className: nv().info,
                                children: [
                                    y,
                                    (0, m.jsxs)('div', {
                                        className: nv().infoButtons,
                                        children: [
                                            s &&
                                                i &&
                                                h &&
                                                !v.isAdvertShown &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(ne.c, { isLiked: n, iconSize: 'xs', onClick: r, disabled: !c.isAuthorized }),
                                                }),
                                            E,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nb = (0, v.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: n,
                        } = (0, D.g)(),
                        { isLiked: r, handleLike: o, isDisliked: s, handleDislike: l } = (0, i_.f)(),
                        d = (0, iu.z)(),
                        c = (0, B.c)(() => {
                            if (i.entityMeta) {
                                if (n.modal.isOpened) return void n.modal.close();
                                n.modal.open();
                            }
                        });
                    (0, f.useEffect)(() => {
                        if (!i.isGenerativeContext)
                            return (
                                null == d || d.addShortcutsListener(ic.M.MAIN, id.l.TOGGLE_FULLSCREEN_PLAYER, c),
                                null == d || d.addShortcutsListener(ic.M.MAIN, id.l.LIKE, o),
                                null == d || d.addShortcutsListener(ic.M.MAIN, id.l.DISLIKE, l),
                                () => {
                                    (null == d || d.removeShortcutsListener(ic.M.MAIN, id.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == d || d.removeShortcutsListener(ic.M.MAIN, id.l.LIKE),
                                        null == d || d.removeShortcutsListener(ic.M.MAIN, id.l.DISLIKE));
                                }
                            );
                    }, [l, o, d, i.isGenerativeContext, i.entityMeta, c]);
                    let u = (0, b.L)(() =>
                        a
                            ? (0, m.jsx)(nh, {
                                  className: (0, p.$)(t, iy().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  onLikeClick: o,
                                  withLike: !0,
                                  withFullscreen: !0,
                              })
                            : (0, m.jsx)(n_, {
                                  className: (0, p.$)(t, iy().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  isDisliked: s,
                                  onDislikeClick: l,
                                  onLikeClick: o,
                                  withLike: !0,
                                  withDislike: !0,
                                  withExtraControls: !0,
                                  withFullscreen: !0,
                              }),
                    );
                    return (0, m.jsxs)(m.Fragment, { children: [u, (0, m.jsx)(iA, { className: iy().adPopup }), (0, m.jsx)(il, {}), (0, m.jsx)(iN.e, {})] });
                });
            var nx = a(32245),
                nf = a.n(nx);
            let ng = (0, v.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: a, buttonText: i, href: n },
                    } = (0, D.g)(),
                    r = (0, tI.Z)(n),
                    { theme: o } = (0, G.W)();
                return (0, m.jsx)('div', {
                    className: (0, p.$)(nf().wrapper, t),
                    'data-test-id': S.e8.redAlert.RED_ALERT,
                    children: (0, m.jsxs)('div', {
                        className: (0, p.$)(nf().root, { [nf().root_light]: o === K.S.Light }),
                        children: [
                            (0, m.jsx)(L.HL, {
                                className: nf().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': S.e8.redAlert.RED_ALERT_TEXT,
                                children: a,
                            }),
                            (0, m.jsx)(w.$, {
                                className: nf().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                'data-test-id': S.e8.redAlert.RED_ALERT_BUTTON,
                                children: (0, m.jsx)(L.HL, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: i }),
                            }),
                        ],
                    }),
                });
            });
            var nA = a(32596),
                nN = a(416),
                nC = a(73856),
                ny = a.n(nC);
            let nT = (0, v.PA)((e) => {
                var t, a, i, n, r, o;
                let { className: s, barBelow: l } = e,
                    d = (0, h.usePathname)(),
                    { experiments: c, paywall: u, user: _ } = (0, D.g)(),
                    v = _.hasPlus && d === W.Z.main.href && c.checkExperiment($.z.WebNextProductWithoutRecommendation, 'on') && u.isPassed,
                    { formatMessage: b } = (0, y.A)(),
                    [x, g] = (0, f.useState)(!1),
                    A = null == (t = l.barBelowItem) ? void 0 : t.content.advDisclaimer,
                    N = { 'data-test-id': v ? S.Kq.barBelow.BAR_BELOW_RECOMMENDATIONS_UNAVAILABLE_CONTENT : S.Kq.barBelow.BAR_BELOW_CONTENT },
                    C = (0, f.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {}, disclaimerTrigger: {} };
                        if (!l.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = l.barBelowItem.content;
                        (t && (e.title.color = t), a && (e.text.color = a), i && (e.bg.backgroundColor = i), n && (e.bg.backgroundImage = 'url("'.concat(n, '")')));
                        let r = a || t;
                        return (r && (e.disclaimerTrigger['--adv-disclaimer-color'] = r), e);
                    }, [l]),
                    E = (0, f.useMemo)(() => {
                        var e;
                        return null == (e = l.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, m.jsx)(
                                      nN.t,
                                      {
                                          anchorId: null == (t = l.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = l.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'xs',
                                          buttonClassName: ny().button,
                                          hide: l.hide,
                                          feedbackToken: l.barBelowItem ? l.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [l]),
                    B = (0, f.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? l.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && l.setAnimationAlreadyBeenHidden();
                        },
                        [l],
                    ),
                    I = (0, f.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && l.setAnimationAlreadyBeenStarted();
                        },
                        [l],
                    );
                return (0, m.jsx)(aF.r, {
                    page: az.l.MUSIC_DEEPLINK_SCREEN,
                    places: [aW.R.TOP_BUTTON],
                    children: (0, m.jsxs)('section', {
                        className: (0, p.$)(
                            ny().root,
                            {
                                [ny().root_hidden]: !l.isVisible && !l.hideWithAnimation,
                                [ny().root_show]: l.showWithAnimation,
                                [ny().root_hide]: l.hideWithAnimation,
                                [ny().root_productWithoutRecommendation]: v,
                            },
                            s,
                        ),
                        style: C.bg,
                        onAnimationStart: I,
                        onAnimationEnd: B,
                        'aria-label': b({ id: 'bar-below.section-name' }),
                        'data-test-id': S.Kq.barBelow.BAR_BELOW,
                        children: [
                            (null == (a = l.barBelowItem) ? void 0 : a.content.imageUrl) &&
                                (0, m.jsx)(tA._V, {
                                    className: ny().image,
                                    'aria-hidden': !0,
                                    src: null == (i = l.barBelowItem) ? void 0 : i.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !v,
                                    withAspectRatio: !0,
                                    'data-test-id': S.Kq.barBelow.BAR_BELOW_IMAGE,
                                }),
                            (0, m.jsxs)('div', {
                                className: ny().content,
                                ...N,
                                children: [
                                    (v || (null == (n = l.barBelowItem) ? void 0 : n.content.title)) &&
                                        (0, m.jsx)(L.DZ, {
                                            className: ny().title,
                                            variant: 'h3',
                                            style: C.title,
                                            lineClamp: v ? void 0 : 2,
                                            'data-test-id': S.Kq.barBelow.BAR_BELOW_TITLE_TEXT,
                                            children: v
                                                ? (0, m.jsx)(T.A, {
                                                      id: 'bar-below.recommendations-unavailable',
                                                      values: {
                                                          collection: (e) =>
                                                              (0, m.jsx)(eZ.N, {
                                                                  className: ny().collectionLink,
                                                                  href: W.Z.collection.href,
                                                                  'data-test-id': S.Kq.barBelow.BAR_BELOW_COLLECTION_LINK,
                                                                  children: e,
                                                              }),
                                                      },
                                                  })
                                                : null == (r = l.barBelowItem)
                                                  ? void 0
                                                  : r.content.title,
                                        }),
                                    (null == (o = l.barBelowItem) ? void 0 : o.content.text) &&
                                        (0, m.jsx)(L.DZ, {
                                            className: ny().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: C.text,
                                            lineClamp: l.barBelowItem.content.title ? 1 : 2,
                                            'data-test-id': S.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT,
                                            children: l.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, m.jsx)('div', { className: ny().buttons, children: E }),
                            A &&
                                (0, m.jsx)('div', {
                                    className: ny().advDisclaimer,
                                    children: (0, m.jsxs)(iL.AM, {
                                        placement: 'left-end',
                                        open: x,
                                        onOpenChange: g,
                                        offsetOptions: { mainAxis: 8 },
                                        transform: !1,
                                        children: [
                                            (0, m.jsx)('button', {
                                                type: 'button',
                                                className: ny().advDisclaimerTrigger,
                                                style: C.disclaimerTrigger,
                                                'data-test-id': S.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                children: (0, m.jsx)(T.A, { id: 'ads.ad' }),
                                            }),
                                            (0, m.jsx)(iL.hl, {
                                                className: ny().advDisclaimerContent,
                                                children: (0, m.jsx)('div', {
                                                    className: ny().advDisclaimerInner,
                                                    children: (0, m.jsx)(L.HL, {
                                                        className: ny().advDisclaimerText,
                                                        type: 'text',
                                                        variant: 'p',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': S.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TEXT,
                                                        children: A,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                });
            });
            var nE = a(91051),
                nS = a(15382),
                nB = a.n(nS);
            let nI = 'buy-subscription-modal',
                nw = (0, v.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, h.useRouter)(),
                        i = (0, eC.N)().get(eN.QG),
                        { user: n } = (0, D.g)(),
                        [r, o] = (0, tt.d)(),
                        {
                            openPaymentWidgetModal: s,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: c,
                            mainTextA11y: u,
                            additionText: _,
                            saveOfferAndAuthorize: p,
                        } = (0, aR.D)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: nI } }),
                        v = (0, B.c)(() => {
                            if ((t.close(), !n.isAuthorized)) return void p();
                            s();
                        }),
                        b = (0, B.c)(() => {
                            (t.close(), i.authorizationUrl && a.push(i.authorizationUrl));
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(L.HL, {
                                className: nB().heading,
                                variant: 'div',
                                weight: 'bold',
                                'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: nB().buttons,
                                children: [
                                    (0, m.jsx)(nE.b, {
                                        ref: o,
                                        'data-intersection-property-id': nI,
                                        mainText: c,
                                        ariaLabel: u,
                                        additionText: _,
                                        isShimmerActive: l,
                                        isShimmerVisible: d,
                                        onClick: v,
                                        className: nB().button,
                                        mainTextClassName: nB().buttonMainText,
                                        additionTextClassName: nB().buttonAdditionText,
                                        'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                    }),
                                    (0, m.jsx)(w.$, {
                                        onClick: b,
                                        className: nB().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        children: (0, m.jsx)(L.HL, {
                                            className: nB().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, m.jsx)(T.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var nj = a(98148),
                nP = a(52620),
                nk = a.n(nP);
            let nL = 'buy-subscription-benefits-modal',
                nR = (0, v.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: r } = e,
                        { user: o } = (0, D.g)(),
                        [s, l] = (0, tt.d)(),
                        {
                            openPaymentWidgetModal: d,
                            isShimmerActive: c,
                            isShimmerVisible: u,
                            mainText: _,
                            mainTextA11y: p,
                            additionText: v,
                            oneClickAvailable: h,
                            oneClickDisclaimerText: b,
                            oneClickDisclaimerTextA11y: x,
                            buttonText: f,
                        } = (0, aR.D)({ storeName: 'music', offerElement: { element: s, intersectionPropertyId: nL } }),
                        g = !!f && o.isAuthorized,
                        A = !o.isAuthorized,
                        N = o.isAuthorized && !o.hasPlus,
                        C = (0, B.c)(() => {
                            (t.close(), d());
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(tN.t, {
                                radius: r ? 'round' : 'm',
                                className: nk().entityCover,
                                children: (0, m.jsx)(i7.B, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || n,
                                }),
                            }),
                            !!a &&
                                (0, m.jsx)(L.HL, {
                                    variant: 'span',
                                    className: nk().entityTitle,
                                    lineClamp: 2,
                                    'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ENTITY_TITLE,
                                    children: a,
                                }),
                            (0, m.jsxs)('div', {
                                className: nk().headingContainer,
                                children: [
                                    (0, m.jsx)(L.HL, {
                                        className: nk().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                        children: (0, m.jsx)(T.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: '\xa0' } }),
                                    }),
                                    g &&
                                        (0, m.jsx)(L.HL, {
                                            className: nk().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_OFFER_TITLE,
                                            children: (0, m.jsx)(T.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == f ? void 0 : f.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, m.jsxs)('div', {
                                className: nk().benefits,
                                'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BENEFITS,
                                children: [
                                    (0, m.jsxs)('div', {
                                        className: nk().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nk().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nk().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(L.HL, {
                                                variant: 'span',
                                                className: nk().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nk().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nk().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nk().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(L.HL, {
                                                variant: 'span',
                                                className: nk().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(nj.c, { className: nk().benefitDivider }),
                                    (0, m.jsx)(nj.c, { className: nk().benefitDivider }),
                                    (0, m.jsxs)('div', {
                                        className: nk().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nk().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nk().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(L.HL, {
                                                variant: 'span',
                                                className: nk().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nk().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nk().benefitIcon,
                                                children: (0, m.jsx)(tA._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nk().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(L.HL, {
                                                variant: 'span',
                                                className: nk().benefitText,
                                                children: (0, m.jsx)(T.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            A &&
                                (0, m.jsxs)('div', {
                                    className: nk().loginContainer,
                                    children: [
                                        (0, m.jsx)(aJ.H, {
                                            size: 'l',
                                            variant: 'default',
                                            buttonText: (0, m.jsx)(L.HL, {
                                                variant: 'span',
                                                size: 'l',
                                                children: (0, m.jsx)(T.A, { id: 'authorization.enter-and-listen-button' }),
                                            }),
                                            className: nk().button,
                                            'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        }),
                                        (0, m.jsxs)(L.HL, {
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'medium',
                                            className: nk().bonusText,
                                            'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BONUS_TEXT,
                                            children: [
                                                (0, m.jsx)(j.I, { variant: 'gift', size: 'xxs', className: nk().giftIcon }),
                                                (0, m.jsx)(T.A, { id: 'payment.learn-personal-bonus' }),
                                            ],
                                        }),
                                    ],
                                }),
                            N &&
                                (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        (0, m.jsx)(nE.b, {
                                            ref: l,
                                            'data-intersection-property-id': nL,
                                            mainText: _,
                                            ariaLabel: p,
                                            additionText: v,
                                            isShimmerActive: c,
                                            isShimmerVisible: u,
                                            onClick: C,
                                            className: nk().button,
                                            mainTextClassName: nk().buttonMainText,
                                            additionTextClassName: nk().buttonAdditionText,
                                            color: 'primary',
                                            'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                        }),
                                        h &&
                                            (0, m.jsx)(L.HL, {
                                                variant: 'div',
                                                size: 's',
                                                weight: 'normal',
                                                'aria-label': x,
                                                className: nk().oneClickDisclaimerText,
                                                'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_DISCLAIMER_TEXT,
                                                children: b,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var nO = a(75641),
                nD = a.n(nO);
            let nM = (0, v.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, isLegalRejected: r, withRoundCover: o } = e,
                    s = (0, b.L)(() =>
                        r ? (0, m.jsx)(nw, { modal: t }) : (0, m.jsx)(nR, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: o }),
                    );
                return (0, m.jsx)(P.a, {
                    className: nD().root,
                    headerClassName: nD().header,
                    contentClassName: nD().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonDataTestId: S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON,
                    'data-test-id': S.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET,
                    children: s,
                });
            });
            nM.displayName = 'BuySubscriptionModal';
            let nU = (0, f.createContext)(null);
            var nF = a(80527),
                nz = a(92847),
                nW = a(53158),
                nK = a(7554),
                nV = a.n(nK);
            let nH = (0, v.PA)((e) => {
                    var t, a;
                    let { children: i, className: n } = e,
                        { formatMessage: r } = (0, y.A)(),
                        {
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: o },
                            },
                        } = (0, D.g)(),
                        s = (0, eF.Q)(),
                        l = (0, f.useContext)(nU),
                        d = null != (a = null == l ? void 0 : l.isCollapsed) && a,
                        c = (0, B.c)(() => {
                            o.setType(es.h.BRANDING);
                        });
                    return ((0, f.useEffect)(
                        () => () => {
                            o.reset();
                        },
                        [o],
                    ),
                    o.isVisible)
                        ? (0, m.jsxs)('div', {
                              'aria-label': r({ id: 'advert.banner' }),
                              role: 'banner',
                              children: [
                                  (0, m.jsx)(et.N, {
                                      ownerId: ee.P,
                                      containerId: nF.E9,
                                      params: nF.$,
                                      onLoad: c,
                                      onError: o.toggleHasErrorTrue,
                                      onNoAds: o.toggleNoAdsTrue,
                                      className: (0, p.$)(nV().creative, { [nV().creative_withCollapsedNavbar]: d }),
                                  }),
                                  (0, m.jsx)(et.N, {
                                      ownerId: ee.P,
                                      containerId: nF.r_,
                                      params: nF.kz,
                                      onLoad: c,
                                      onError: o.toggleHasErrorTrue,
                                      onNoAds: o.toggleNoAdsTrue,
                                  }),
                                  (0, m.jsx)('div', {
                                      className: (0, p.$)(nV().root, n, { [nV().root_withCollapsedNavbar]: d }),
                                      style: null == (t = s.data) ? void 0 : t.style,
                                      children: i,
                                  }),
                              ],
                          })
                        : i;
                }),
                nG = (0, v.PA)((e) => {
                    let { children: t, className: a } = e;
                    return (0, m.jsx)(nW.A, { containerId: nF.r_, expectedType: nz.k.AXE_GRADIENT, children: (0, m.jsx)(nH, { className: a, children: t }) });
                });
            var nY = a(59304),
                n$ = a(49288),
                nq = a.n(n$);
            let nZ = (e) => {
                let { refetchRequests: t, closeToast: a } = e,
                    { formatMessage: i } = (0, y.A)(),
                    n = (0, f.useMemo)(
                        () =>
                            (0, m.jsxs)('div', {
                                className: nq().message,
                                children: [
                                    (0, m.jsx)(L.HL, {
                                        className: nq().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: (0, m.jsx)(T.A, { id: 'error-messages.error-during-initial-loading' }),
                                    }),
                                    (0, m.jsx)(w.$, {
                                        className: nq().button,
                                        onClick: t,
                                        variant: 'text',
                                        'aria-label': i({ id: 'interface-actions.reload-part-page' }),
                                        icon: (0, m.jsx)(j.I, { variant: 'reset', size: 'xxs', className: nq().icon }),
                                    }),
                                ],
                            }),
                        [i, t],
                    );
                return (0, m.jsx)(nY.$, { className: (0, p.$)(nq().root, nq().important), message: n, closeToast: a });
            };
            var nX = a(29595),
                nQ = a(74965),
                nJ = a(70787),
                n0 = a(74773),
                n1 = a(79272),
                n2 = a(94144),
                n5 = a(88626),
                n8 = a(12533),
                n4 = a(34303),
                n3 = a(58360),
                n9 = a.n(n3);
            let n6 = 'noreferrer noopener',
                n7 = (0, v.PA)(() => {
                    var e;
                    let {
                            settings: { browserInfo: t },
                            user: { account: a },
                        } = (0, D.g)(),
                        { deeplink: i } = null != (e = (0, n2.P)()) ? e : {},
                        n = (0, n1.q)({ browserInfo: t, login: a.data.login }),
                        { shouldShow: r } = ((e) => {
                            let {
                                    enabled: t = !0,
                                    searchParamKey: a,
                                    storageKey: i,
                                    storageValue: n = 'true',
                                    storageMatcher: r = (e) => 'true' === e,
                                    useSessionStorage: o = !0,
                                    searchParamHideValue: s,
                                    shouldHideChecker: l,
                                } = e,
                                [d, c] = (0, f.useState)(!1),
                                [u, _] = (0, f.useState)(!1),
                                m = (0, h.useSearchParams)(),
                                p = (0, eC.N)(),
                                v = p.get(eN.vH),
                                b = p.get(eN.Zf),
                                x = (0, B.c)(l || (() => !1)),
                                g = ((e) => {
                                    switch (e.length) {
                                        case 0:
                                            return;
                                        case 1:
                                            return e[0];
                                        default:
                                            return e;
                                    }
                                })(m.getAll(a)),
                                A = (0, B.c)(() => {
                                    if (!o) return !1;
                                    try {
                                        let e = v.get(i);
                                        return r('string' == typeof e ? e : null);
                                    } catch (e) {
                                        return (b.error('Failed to get sessionStorage', { type: 'useSearchParamVisibility', storageKey: i }), !1);
                                    }
                                }),
                                N = (0, B.c)(() => {
                                    if (o)
                                        try {
                                            v.set(i, n);
                                        } catch (e) {
                                            b.error('Failed to set sessionStorage', { type: 'useSearchParamVisibility', storageKey: i });
                                        }
                                });
                            return (
                                (0, f.useEffect)(() => {
                                    c(!0);
                                }, []),
                                (0, f.useEffect)(() => {
                                    if (!d || !t) return void _(!1);
                                    let e =
                                            (!!s &&
                                                ((e, t) => {
                                                    if (!e || !t) return !1;
                                                    let a = t.toLowerCase();
                                                    return Array.isArray(e) ? e.some((e) => e.toLowerCase() === a) : e.toLowerCase() === a;
                                                })(g, s)) ||
                                            x(g),
                                        a = A();
                                    (e && N(), _(!(e || a)));
                                }, [g, s, o, d, t, x, A, N]),
                                { shouldShow: !!d && u, searchParamValue: g }
                            );
                        })({ searchParamKey: n4.K.UTM_SOURCE, storageKey: ey.c.HideDeeplinkAndOnelink, searchParamHideValue: 'bottomsheet' }),
                        o = (0, b.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery) ? 'huaweiAppGallery' : (null == t ? void 0 : t.OSFamily) === n5.j.IOS ? 'macos' : 'googlePlay',
                        ),
                        s = (0, b.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery)
                                ? (0, m.jsx)(T.A, { id: 'deeplinks.download-from-app-gallery' })
                                : (null == t ? void 0 : t.OSFamily) === n5.j.IOS
                                  ? (0, m.jsx)(T.A, { id: 'deeplinks.download-from-app-store' })
                                  : (0, m.jsx)(T.A, { id: 'deeplinks.download-from-google-play' }),
                        ),
                        l = (0, B.c)(() => {
                            if (!i) return;
                            let e = new URLSearchParams(window.location.search);
                            window.open((0, n8.C)(i, e), '_self', n6);
                        }),
                        d = (0, B.c)(() => {
                            let e = new URLSearchParams(window.location.search),
                                t = n(i && (0, n8.C)(i, e));
                            window.open(t, '_blank', n6);
                        });
                    return r
                        ? (0, m.jsxs)('div', {
                              className: n9().root,
                              children: [
                                  (0, m.jsx)(w.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: l,
                                      radius: 'xxxl',
                                      className: n9().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(j.I, { className: (0, p.$)(n9().buttonIcon, n9().musicIcon), variant: 'musicLogo' }),
                                      children: (0, m.jsx)(L.HL, {
                                          className: n9().buttonTitle,
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, m.jsx)(T.A, { id: 'deeplinks.listen-in-app' }),
                                      }),
                                  }),
                                  (0, m.jsx)(w.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: d,
                                      radius: 'xxxl',
                                      className: n9().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(j.I, { className: (0, p.$)(n9().buttonIcon, n9().onelinkIcon), variant: o }),
                                      children: (0, m.jsx)(L.HL, { className: n9().buttonTitle, variant: 'div', type: 'text', size: 'm', weight: 'normal', children: s }),
                                  }),
                              ],
                          })
                        : null;
                });
            var re = a(28166);
            let rt = (e) => {
                let { children: t, isEnabled: a } = e,
                    [i, n] = (0, f.useState)(re.ov),
                    r = (0, B.c)((e) => {
                        let { href: t } = (0, eH.u)(null != e ? e : '', { options: { host: re.ov } });
                        n(t);
                    }),
                    o = (0, f.useMemo)(() => ({ deeplink: i, setDeeplink: r, isEnabled: a }), [a, r, i]);
                return a ? (0, m.jsx)(n2.H.Provider, { value: o, children: t }) : t;
            };
            var ra = a(19129),
                ri = a(54486);
            let rn = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var rr = a(30990),
                ro = a.n(rr);
            let rs = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, onAdvertChange: i, ...n } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: r },
                            },
                        } = (0, D.g)(),
                        { formatMessage: o } = (0, y.A)(),
                        s = (0, B.c)((e) => {
                            (void 0 !== e && r.setType(e), i());
                        });
                    return (0, m.jsx)('section', {
                        ref: a,
                        className: (0, p.$)(ro().root, t, { [ro().root_hidden]: !r.isVisible }),
                        'aria-label': o({ id: 'advert.banner' }),
                        role: 'banner',
                        ...n,
                        children: (0, m.jsx)(et.N, {
                            className: ro().advert,
                            ownerId: ee.P,
                            containerId: 'adfox_173831489272852769',
                            params: rn,
                            onLoad: r.setType,
                            onRender: s,
                            onError: r.toggleHasErrorTrue,
                            onNoAds: r.toggleNoAdsTrue,
                        }),
                    });
                }),
                rl = (0, f.forwardRef)((e, t) => (0, m.jsx)(rs, { forwardRef: t, ...e }));
            var rd = a(50227),
                rc = a.n(rd);
            let ru = (0, v.PA)((e) => {
                let { children: t } = e,
                    [a, i] = (0, f.useState)(!1),
                    [n, r] = (0, f.useState)(!0),
                    [o, s] = (0, f.useState)(!1),
                    { contentRef: l, contentScrollRef: d } = (0, R.g)(),
                    c = (0, f.useRef)(null),
                    {
                        user: u,
                        settings: { isMobile: _ },
                        advertBanners: {
                            banners: { topAdvertBanner: v },
                        },
                        freeAccess: h,
                    } = (0, D.g)(),
                    b = (!u.isAuthorized || h.isFreeWebUser) && v.isVisible,
                    x = (0, f.useCallback)(() => {
                        (r(!1), i(!0));
                    }, [r, i]),
                    g = (0, f.useCallback)(() => {
                        (r(!0), i(!1));
                    }, [r, i]),
                    A = (0, f.useCallback)(() => {
                        s(!1);
                    }, [s]),
                    N = (0, f.useMemo)(
                        () =>
                            b
                                ? (0, m.jsx)(rl, { className: (0, p.$)(rc().banner, { [rc().banner_canShow]: a }), onFocus: x, onBlur: g, onAdvertChange: A, ref: c })
                                : null,
                        [b, a, x, g, A],
                    ),
                    C = (0, f.useCallback)(() => (_ ? window.scrollY : null == d ? void 0 : d.scrollTop), [d, _]),
                    y = (0, f.useCallback)(() => {
                        if (!N) return;
                        let e = C();
                        if (void 0 === e) return void i(!0);
                        let t = e > 0;
                        if (!_ && l && d) {
                            var a;
                            let e = l.clientHeight + ((null == (a = c.current) ? void 0 : a.offsetHeight) || 0) < d.scrollHeight;
                            e ? r(!0) : !e && t && r(!1);
                        }
                        if (!n || (!t && o)) return;
                        let u = !t;
                        (i(u), u && s(!0));
                    }, [l, d, N, n, C, _, o, i, r, s]);
                (0, f.useEffect)(() => {
                    y();
                }, [y, d]);
                let T = (0, f.useMemo)(() => (0, e_.A)(y, 200), [y]);
                return (
                    (0, ri.L)(_ ? { onScroll: T } : { onScroll: T, elementRef: d }),
                    (0, m.jsxs)('div', { className: rc().root, children: [N, (0, m.jsx)('div', { className: rc().content, children: t })] })
                );
            });
            var r_ = a(85838),
                rm = a(50943),
                rp = a.n(rm);
            let rv = (e) => {
                    let { onDismiss: t, closeToast: a } = e,
                        i = (0, B.c)(() => {
                            (t(), null == a || a());
                        });
                    return (0, m.jsx)(nY.$, {
                        className: rp().root,
                        cover: (0, m.jsx)(tA._V, { className: rp().logo, src: N.src, alt: '', fit: 'contain', withAvatarReplace: !1 }),
                        coverClassName: rp().cover,
                        message: (0, m.jsx)(L.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 's',
                            'data-test-id': S.S7.NOTIFICATION_RECOMMENDATIONS_UNAVAILABLE_TEXT,
                            children: (0, m.jsx)(T.A, { id: 'notifications-info.recommendations-unavailable' }),
                        }),
                        closeToast: i,
                    });
                },
                rh = (0, v.PA)(() => {
                    let e = (0, h.usePathname)(),
                        { experiments: t, communication: a, user: i } = (0, D.g)(),
                        { notify: n, dismiss: r } = (0, nQ.l)(),
                        o = a.isRecommendationsNotificationDismissed,
                        s = i.hasPlus && t.checkExperiment($.z.WebNextProductWithoutRecommendation, 'on'),
                        l = e === W.Z.main.href;
                    return (
                        (0, f.useEffect)(() => {
                            if (!s || l || o) return;
                            let e = n((0, m.jsx)(rv, { onDismiss: a.dismissRecommendationsNotification }), {
                                containerId: nX.u.PRODUCT_WITHOUT_RECOMMENDATION,
                                autoClose: !1,
                                important: !0,
                                single: !1,
                                toastId: 'product-without-recommendation',
                            });
                            return () => r({ notificationId: e, forceClose: !0 });
                        }, [a, r, o, s, l, n]),
                        null
                    );
                });
            var rb = a(26071),
                rx = a.n(rb);
            let rf = [{ id: nX.u.INFO }, { id: nX.u.ERROR, limit: 1 }, { id: nX.u.PRODUCT_WITHOUT_RECOMMENDATION }],
                rg = () => {
                    let e = (0, f.useRef)(null);
                    return (
                        (0, f.useEffect)(() => {
                            let t = e.current;
                            if (!t) return;
                            let a = '.'.concat(rx().root, ':not(.').concat(rx().recommendations, ')'),
                                i = () => {
                                    let e = Math.max(0, ...Array.from(t.querySelectorAll(a), (e) => e.getBoundingClientRect().height));
                                    t.style.setProperty('--transient-offset', e > 0 ? 'calc(-'.concat(e, 'px - var(--ym-spacer-size-m))') : '0px');
                                },
                                n = new ResizeObserver(i),
                                r = () => {
                                    (n.disconnect(), t.querySelectorAll(a).forEach((e) => n.observe(e)), i());
                                },
                                o = new MutationObserver(r);
                            return (
                                o.observe(t, { childList: !0, subtree: !0 }),
                                r(),
                                () => {
                                    (o.disconnect(), n.disconnect());
                                }
                            );
                        }, []),
                        (0, m.jsxs)('div', {
                            ref: e,
                            className: rx().container,
                            children: [
                                rf.map((e) => {
                                    let { id: t, limit: a } = e;
                                    return (0, m.jsx)(
                                        r_.Notification,
                                        {
                                            className: (0, p.$)(rx().root, { [rx().recommendations]: t === nX.u.PRODUCT_WITHOUT_RECOMMENDATION }),
                                            enableMultiContainer: !0,
                                            containerId: t,
                                            position: 'bottom-center',
                                            limit: a,
                                        },
                                        t,
                                    );
                                }),
                                (0, m.jsx)(rh, {}),
                            ],
                        })
                    );
                },
                rA = a(6087).default.default(
                    () =>
                        Promise.all([
                            a.e(42),
                            a.e(7437),
                            a.e(6075),
                            a.e(1910),
                            a.e(1833),
                            a.e(4814),
                            a.e(917),
                            a.e(2932),
                            a.e(7565),
                            a.e(6740),
                            a.e(9625),
                            a.e(2441),
                            a.e(6580),
                            a.e(2951),
                            a.e(2124),
                            a.e(1864),
                            a.e(8655),
                            a.e(9202),
                            a.e(9380),
                            a.e(8872),
                            a.e(7618),
                            a.e(4683),
                            a.e(2690),
                            a.e(2671),
                            a.e(617),
                            a.e(7824),
                            a.e(5250),
                        ])
                            .then(a.bind(a, 76348))
                            .then((e) => e.ProductLayoutClientOnlyModalsContent),
                    { ssr: !1 },
                ),
                rN = (0, v.PA)((e) => {
                    var t, a, i;
                    let { children: n, barBelow: r, isNewWaveMainTabActive: o, layoutChromeStyles: s, rootClassName: l, rootStyle: d } = e,
                        c = (0, h.usePathname)(),
                        { setCompositePlayerBarRef: u } = (0, R.g)(),
                        _ = (0, eC.N)().get(eN.oo),
                        v = ef(),
                        {
                            settings: { browserInfo: b, isMobile: x, isWindowsApplication: g, isMacOSApplication: A, isLinuxApplication: N },
                            experiments: C,
                            user: y,
                            redAlert: T,
                            album: E,
                            albumCPA: { isPlusCPAPlayerBarEnabled: S, isHidePlusModalEnabled: B },
                            modals: { buySubscriptionModal: I },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: w },
                            },
                            freeAccess: j,
                        } = (0, D.g)(),
                        [P, k] = (0, f.useState)(null != (i = _.get(ey.c.NavbarCollapsed)) ? i : v),
                        L = (0, f.useMemo)(() => ({ isCollapsed: P || v, setIsCollapsed: k }), [P, v]);
                    (() => {
                        let { notify: e, dismiss: t } = (0, nQ.l)(),
                            a = (0, f.useRef)(void 0),
                            { library: i, user: n } = (0, D.g)(),
                            r = (0, eC.N)().get(eN.U2),
                            [o, s] = (0, f.useState)(!0),
                            l = (0, f.useCallback)(async () => {
                                s(!1);
                                let e = [];
                                (n.settings.loadingState === n0.G.REJECT && e.push(n.getSettings()),
                                    i.loadingState === n0.G.REJECT && e.push(i.getData()),
                                    t({ notificationId: a.current, forceClose: !0 }),
                                    await Promise.allSettled(e),
                                    s(!0));
                            }, [t, i, n]);
                        ((0, f.useEffect)(() => {
                            let t = [n.settings.loadingState];
                            (0, nJ.g)(r) || t.push(i.loadingState);
                            let s = t.every((e) => e !== n0.G.PENDING);
                            o && s && t.includes(n0.G.REJECT) && (a.current = e((0, m.jsx)(nZ, { refetchRequests: l }), { containerId: nX.u.IMPORTANT, autoClose: !1 }));
                        }, [e, l, o, i.loadingState, n.settings.loadingState, r]),
                            (0, f.useEffect)(
                                () => () => {
                                    t({ notificationId: a.current, forceClose: !0 });
                                },
                                [t],
                            ));
                    })();
                    let O = (!y.isAuthorized || j.isFreeWebUser) && (null == b ? void 0 : b.isTouch),
                        M = C.checkExperiment($.z.WebNextDeeplinksToMobile, 'on') && y.hasPlus && !!(null == b ? void 0 : b.isMobile) && !1,
                        U = M && !o,
                        { setDefaultLayoutRef: F } = (0, R.g)(),
                        z = S(null == E ? void 0 : E.id, null == E || null == (t = E.meta) ? void 0 : t.isNonMusic),
                        W = B(null == E ? void 0 : E.id, null == E || null == (a = E.meta) ? void 0 : a.isNonMusic),
                        K = !O || z,
                        V = z && (null == b ? void 0 : b.isTouch);
                    return (
                        (0, f.useEffect)(() => {
                            W && I.close();
                        }, [W, I]),
                        (0, m.jsx)(nU.Provider, {
                            value: L,
                            children: (0, m.jsx)(ru, {
                                children: (0, m.jsx)(rt, {
                                    isEnabled: M,
                                    children: (0, m.jsx)(nG, {
                                        children: (0, m.jsxs)('div', {
                                            ref: F,
                                            className: l,
                                            style: d,
                                            children: [
                                                V && (0, m.jsx)(nM, { modal: I }),
                                                !x &&
                                                    K &&
                                                    (0, m.jsx)(ie, {
                                                        className: (0, p.$)(s.navbar, {
                                                            [s.navbar_application_windows]: g,
                                                            [s.navbar_application_macos]: A,
                                                            [s.navbar_application_linux]: N,
                                                        }),
                                                        externalIsCollapsed: P,
                                                        externalSetIsCollapsed: k,
                                                    }),
                                                (0, m.jsx)(eb, {
                                                    className: (0, p.$)(Z().content, { [Z().content_withPlayerBar]: x && !o, [Z().content_withAxeBanner]: w.isVisible }),
                                                    children: (0, m.jsxs)(ra.ErrorBoundary, { fallback: nA.SomethingWentWrong, children: [n, (0, m.jsx)(rg, {})] }, c),
                                                }),
                                                !x &&
                                                    K &&
                                                    !o &&
                                                    (0, m.jsx)(Q.a, {
                                                        pageId: X.AppScreen.ExpandedPlayerScreen,
                                                        pageIdForFrom: te.b.PLAYER,
                                                        children: (0, m.jsx)(nb, { className: Z().playerBar }),
                                                    }),
                                                x &&
                                                    K &&
                                                    (0, m.jsxs)('div', {
                                                        ref: u,
                                                        className: (0, p.$)(Z().compositePlayerBar, { [Z().compositePlayerBar_withNewVibe]: o }),
                                                        children: [
                                                            U && (0, m.jsx)(n7, {}),
                                                            !o &&
                                                                (0, m.jsx)(Q.a, {
                                                                    pageId: X.AppScreen.ExpandedPlayerScreen,
                                                                    pageIdForFrom: te.b.PLAYER,
                                                                    children: (0, m.jsx)(nb, { className: Z().playerBar }),
                                                                }),
                                                            (0, m.jsx)(ie, {
                                                                className: (0, p.$)(s.navbar, {
                                                                    [s.navbar_application_windows]: g,
                                                                    [s.navbar_application_macos]: A,
                                                                    [s.navbar_application_linux]: N,
                                                                }),
                                                                externalIsCollapsed: P,
                                                                externalSetIsCollapsed: k,
                                                            }),
                                                        ],
                                                    }),
                                                T.isVisible && (0, m.jsx)(ng, { className: s.barBelow }),
                                                !T.isVisible && r && (0, m.jsx)(nT, { className: s.barBelow, barBelow: r }),
                                                (0, m.jsx)(rA, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var rC = a(20855),
                ry = a.n(rC);
            let rT = (0, v.PA)((e) => {
                let t,
                    { className: a, children: i } = e,
                    n = (0, h.usePathname)(),
                    {
                        settings: { isMobile: r, isWindowsApplication: o, isLinuxApplication: s },
                        redAlert: l,
                        communication: d,
                        paywall: c,
                        user: u,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: _ },
                        },
                        sonataState: v,
                        experiments: g,
                        vibe: y,
                        words: T,
                    } = (0, D.g)(),
                    E = !r && u.hasPlus && n === W.Z.main.href && g.checkExperiment($.z.WebNextProductWithoutRecommendation, 'on') && c.isPassed,
                    S = ((e) =>
                        (0, f.useMemo)(() => {
                            if (e)
                                return C.t.create({
                                    anchorId: A.v.ON_START_BAR_BELOW,
                                    isVisible: !0,
                                    hasAnimationAlreadyBeenShown: !0,
                                    hasAnimationAlreadyBeenStarted: !0,
                                    list: [
                                        {
                                            anchorId: A.v.ON_START_BAR_BELOW,
                                            screenId: 'product-without-recommendation',
                                            feedbackToken: null,
                                            content: { imageUrl: N.src, buttons: [] },
                                        },
                                    ],
                                });
                        }, [e]))(E),
                    B = (0, b.L)(() => {
                        if (E) return S;
                        if (!r) {
                            var e;
                            return null == (e = d.list) ? void 0 : e.barBelow;
                        }
                    }),
                    I =
                        (n === W.Z.main.href || n === W.Z.video.href) &&
                        (g.checkExperiment($.z.WebNextNewWaveTab, 'on') || g.checkExperiment($.z.WebNextNewWaveTab, 'on1'));
                Y(K.S.Dark, I);
                let w = l.isVisible || ((null == B ? void 0 : B.isVisible) && B.hasAnimationAlreadyBeenStarted),
                    j = {
                        barBelow: ry().barBelow,
                        navbar: ry().navbar,
                        navbar_application_linux: ry().navbar_application_linux,
                        navbar_application_macos: ry().navbar_application_macos,
                        navbar_application_windows: ry().navbar_application_windows,
                    },
                    P = ry().root_withBarBelow,
                    k = ry().root;
                if (I) {
                    var L;
                    let e = y.isShuffleVibe && v.isVibeContext;
                    ((t = ((e) => {
                        let { palette: t, isPlaying: a } = e;
                        return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
                    })({ palette: (0, x.OH)(e || null == (L = v.entityMeta) ? void 0 : L.averageColor), isPlaying: v.isPlaying && !T.bigCardPanel.isOpened })),
                        (P = ry().rootNewVibe_withBarBelow),
                        (k = ry().rootNewVibe));
                }
                let R = (0, p.$)(
                    Z().root,
                    k,
                    {
                        [ry().root_applicationPreserveTitleBar]: o || s,
                        [ry().root_withProductWithoutRecommendation]: E,
                        [P]: w,
                        [ry().withRedAlert]: l.isVisible,
                        [Z().root_withAxeBanner]: _.isVisible,
                    },
                    a,
                );
                return (0, m.jsxs)(rN, {
                    barBelow: B,
                    isNewWaveMainTabActive: I,
                    layoutChromeStyles: j,
                    rootClassName: R,
                    rootStyle: t,
                    children: [i, I && (0, m.jsx)(z, {})],
                });
            });
        },
        4213: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        4887: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                root_interactive: 'PlayerBarDesktopWithBackgroundProgressBar_root_interactive__GcrNw',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                thumb: 'PlayerBarDesktopWithBackgroundProgressBar_thumb__LHPFo',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        4941: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        5048: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var i = a(61691),
                n = a(15077);
            let r = (e) => {
                switch (e) {
                    case i._.PODCAST:
                        return n.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        5743: (e, t, a) => {
            'use strict';
            ((t.U0 = function (e, t) {
                let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: o = '' } = t,
                    s = (0, i.makeMetaParams)(2),
                    l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: o, _meta: s };
                e.trackEvent('Sidebar.Opened', l);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: o = '' } = t,
                        s = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: o, _meta: s };
                    e.trackEvent('Sidebar.ActionPerformed', l);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: o = '' } = t,
                        s = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: o, _meta: s };
                    e.trackEvent('Sidebar.Navigated', l);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: o = '' } = t,
                        s = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: o, _meta: s };
                    e.trackEvent('Sidebar.Started', l);
                }));
            let i = a(59203),
                n = a(87999);
        },
        5866: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                o = a(2058),
                s = a(17392),
                l = a(29993),
                d = a(79070),
                c = a(54112),
                u = a(91467),
                _ = a(54965),
                m = a(97361),
                p = a(9630),
                v = a(72288),
                h = a(20674),
                b = a.n(h),
                x = a(91641);
            let f = (e) => {
                var t, a, h, f;
                let {
                        className: g,
                        sliderClassName: A,
                        disabled: N,
                        isFullscreen: C,
                        isMobile: y,
                        showThumbVariant: T,
                        withTimecode: E = !0,
                        sonataPlaybackId: S,
                        customDuration: B,
                        canMoveForward: I,
                    } = e,
                    w = (0, p.e)(),
                    j = (C || !y) && E,
                    P = (0, r.useRef)(!1),
                    { sonataState: k } = (0, v.g)(),
                    [L, R] = (0, r.useState)(null != (h = k.position) ? h : 0),
                    [O, D] = (0, r.useState)(null != (f = k.duration) ? f : 0),
                    [M, U] = (0, r.useState)(0),
                    { formatMessage: F } = (0, o.A)(),
                    { advert: z } = (0, v.g)(),
                    W = (0, u.r)(),
                    K = L && O ? (100 * Math.min(L, O)) / O : 0,
                    V = null == w ? void 0 : w.getState(S),
                    H = (0, m.P)(L),
                    G = (0, _.E)(Math.round(L), Math.round(O)),
                    Y = (0, m.P)(O),
                    $ = B && L > B,
                    q = (0, l.c)((e, t) => {
                        z.isAdvertShown || ((P.current = !t), t ? null == w || w.setProgress(e, S) : R(e));
                    });
                (0, r.useEffect)(() => {
                    $ && (I ? null == w || w.moveForward(S) : (null == w || w.moveBackward(S), null == w || w.pause(S)));
                }, [I, $, w, S]);
                let Z = (0, r.useCallback)(
                    (e) => {
                        e &&
                            (e.duration === 1 / 0
                                ? (D(0), R(0), U(0))
                                : (D(B && !z.isAdvertShown ? B : e.duration), R((t) => (P.current ? t : e.position)), U(e.loaded)));
                    },
                    [B, z.isAdvertShown],
                );
                (0, r.useEffect)(() => {
                    var e, t;
                    let a = null == W || null == (e = W.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Z),
                        i = null == V || null == (t = V.playerState) ? void 0 : t.progress.onChange(Z);
                    return () => {
                        (null == i || i(), null == a || a());
                    };
                }, [
                    null == W || null == (t = W.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                    Z,
                    null == V || null == (a = V.playerState) ? void 0 : a.progress,
                ]);
                let X = (0, d.L)(() => {
                    if (0 !== O) return B && B <= O ? Math.round(B) : Math.round(O);
                });
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, { [b().root_fullscreen]: C, [b().root_mobile]: y, [b().root_withTimecode]: E }, g),
                    style: { '--track-progress': ''.concat(K, '%') },
                    'data-test-id': s.Kq.changeTimecode.TIMECODE_WRAPPER,
                    children: [
                        j && (0, i.jsx)(x.d, { role: 'text', 'aria-label': H, value: G, variant: 'start', className: b().timecode }),
                        (0, i.jsx)(c.A, {
                            'aria-valuetext': H,
                            className: (0, n.$)(b().slider, { [b()['slider_thumbSize_'.concat(y ? 'xs' : 'm')]]: !0 }, A),
                            disabled: N,
                            thumbSize: y ? 'xs' : 's',
                            trackSize: y ? 'xs' : 's',
                            value: Math.round(L),
                            mode: 'deferred',
                            secondaryValue: Math.round(M),
                            maxValue: X,
                            onChange: q,
                            'aria-label': F({ id: 'player-actions.timecode-control' }),
                            showThumbVariant: T,
                            'data-test-id': s.Kq.changeTimecode.TIMECODE_SLIDER,
                        }),
                        j && (0, i.jsx)(x.d, { role: 'text', 'aria-label': Y, value: (0, _.E)(Math.round(O), Math.round(O)), variant: 'end', className: b().timecode }),
                    ],
                });
            };
        },
        6259: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        6322: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => o });
            var i = a(88800),
                n = a(15077),
                r = a(33719);
            let o = (e) => {
                let { playlist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.PLAYLIST,
                    entityUrl: t.url,
                    coverUri: t.coverUri,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            };
        },
        6462: (e) => {
            e.exports = {
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        6900: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => n });
            var i = a(8655);
            let n = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return n[e];
                        default:
                            return '';
                    }
                };
        },
        7554: (e) => {
            e.exports = {
                root: 'WithBrandedEntityAxeBanner_root__aXh91',
                root_withCollapsedNavbar: 'WithBrandedEntityAxeBanner_root_withCollapsedNavbar__msb7M',
                creative: 'WithBrandedEntityAxeBanner_creative__Fp6Vg',
            };
        },
        7802: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        8655: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        9184: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        9889: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        9995: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        10325: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n });
            var i = a(43522);
            let n = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        10748: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        11518: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
                important: 'ChangeTimecodeBackground_important__OSzLR',
            };
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    n = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let r = n.toString();
                return ''.concat(a).concat(r ? '?'.concat(r) : '');
            };
        },
        13315: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(30123);
            let n = (e) => e.startsWith(i.nl);
        },
        13946: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => W });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(79070),
                l = a(17610),
                d = a(24548),
                c = a(29993),
                u = a(72288),
                _ = a(35994);
            let m = (e, t) => {
                let { withLink: a, separator: i } = t,
                    n = a && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: i, link: n };
            };
            var p = a(21010),
                v = a.n(p),
                h = a(17392),
                b = a(29504),
                x = a(91292),
                f = a(2058),
                g = a(87999),
                A = a(80643),
                N = a(78940),
                C = a(55693),
                y = a(58217);
            let T = (0, r.PA)((e) => {
                    let { item: t, linkClassName: a, captionClassName: n, captionSize: r = 'm', allArtistsTitle: o, withCustomTooltip: s, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: v,
                            tooltipText: T,
                            isTooltipEnabled: E,
                            handleNavigate: S,
                        } = ((e) => {
                            var t, a;
                            let { item: i, allArtistsTitle: n, withCustomTooltip: r } = e,
                                { formatMessage: o } = (0, f.A)(),
                                s = ((e, t) => {
                                    let { item: a, allArtistsTitle: i, withCustomTooltip: n } = e,
                                        r = i || a.name;
                                    return {
                                        ...a,
                                        title: n ? void 0 : r,
                                        ariaLabel: a.link ? t({ id: 'entity-names.artist-name' }, { artistName: a.name }) : void 0,
                                        tooltipText: r,
                                        isTooltipEnabled: !i && n,
                                    };
                                })({ item: i, allArtistsTitle: n, withCustomTooltip: r }, o),
                                {
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                _ = (0, N.Z)(null != (a = null == (t = s.link) ? void 0 : t.href) ? a : s.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, C.z)(),
                                p = (0, A.S)(),
                                v = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), _(e));
                                }),
                                h = ((e) => {
                                    let { artist: t, callback: a } = e,
                                        { currentTrackInfo: i, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, u.g)(),
                                        { modal: o } = i;
                                    return (0, y.l)({
                                        entity: t,
                                        callback: a,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (i.reset(), o.close()), n.modal.isOpened && n.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            r.modal.isOpened && (r.modal.close(), r.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: v }),
                                b = (0, c.c)((e) => {
                                    (p({ to: g.AppScreen.ArtistScreen }), null == m || m(), h(e));
                                });
                            return { ...s, handleNavigate: b };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: s });
                    return m
                        ? (0, i.jsx)(x.N, {
                              ...m,
                              'aria-label': v,
                              className: a,
                              onClick: S,
                              title: p,
                              'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(b.HL, { variant: 'span', type: 'entity', size: r, weight: 'medium', className: n, children: _ }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: d,
                              children: (0, i.jsx)(b.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: r,
                                  weight: 'medium',
                                  className: n,
                                  title: p,
                                  'data-test-id': h.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: a, captionClassName: n, captionSize: r, allArtistsTitle: s, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, i.jsx)(T, {
                                item: t.primary,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: r,
                                allArtistsTitle: s,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, i.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, i.jsx)(T, {
                                                item: e,
                                                linkClassName: a,
                                                captionClassName: n,
                                                captionSize: r,
                                                allArtistsTitle: s,
                                                withCustomTooltip: l,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var S = a(88969),
                B = a(65453);
            let I = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(B.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(v().spoiler, a),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': h.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var w = a(61013),
                j = a(87819),
                P = a(40634),
                k = a(48468),
                L = a.n(k);
            let R = (0, r.PA)((e) => {
                    let { label: t, artists: a, forwardRef: n } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, j.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: n, children: t }),
                            (0, i.jsx)(l.ZI, { className: L().tooltipContent, children: a.map((e) => (0, i.jsx)(P.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, o.forwardRef)((e, t) => (0, i.jsx)(R, { forwardRef: t, ...e }));
            var D = a(19934),
                M = a(70396),
                U = a.n(M);
            let F = (0, r.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: r } = (0, f.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, n.$)(U().root, U().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(P.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, r.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: n } = e,
                        [r, l] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, s.L)(() =>
                            (0, w.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, o.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(F, { artists: t, label: a }) : (0, i.jsx)(O, { artists: t, label: a })) : a;
                }),
                W = (0, r.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: a,
                            spoilerClassName: r,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: h,
                            variant: b = 'breakAll',
                            spoilerComponent: x,
                            ...f
                        } = e,
                        g = ((e) => {
                            var t, a, i;
                            let { separator: n, visibleArtistsCount: r, withLink: s, withComposer: l, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                v = null == (a = e.withAllArtistsTitle) || a,
                                h = null == (i = e.withCustomTooltip) || i,
                                b = (0, o.useRef)(null),
                                [x, f] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: g },
                                } = (0, u.g)(),
                                A = ((!g || 1 === p.length) && _) || !_,
                                N = ((e, t) => {
                                    var a, i, n;
                                    let r = null == (a = null == t ? void 0 : t.withComposer) || a,
                                        o = null == (i = null == t ? void 0 : t.withLink) || i,
                                        s = null != (n = null == t ? void 0 : t.separator) ? n : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let a = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...a];
                                            })
                                            .join(s),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: a, withComposer: i } = t;
                                            return {
                                                visibleArtists: (a ? e.slice(0, a) : e).filter((e) => i || !e.isComposer),
                                                hiddenArtistsCount: a && a < e.length ? e.length - a : 0,
                                            };
                                        })(e, { withComposer: r, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, a) =>
                                            ((e, t) => {
                                                var a;
                                                let { withLink: i, separator: n, isFirst: r } = t;
                                                return {
                                                    primary: m(e, { withLink: i, separator: r ? void 0 : n }),
                                                    decomposed: (null != (a = e.decomposed) ? a : []).map((e) => {
                                                        let t = n ? e.separator : '';
                                                        return m(e, { withLink: i, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === a }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: n, visibleArtistsCount: x ? void 0 : r, withComposer: l, withLink: !!A && s, artistIdWithoutLink: d }),
                                C = v ? N.allArtistsTitle : '',
                                y = (0, c.c)((e) => {
                                    (f(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: N.groups,
                                hiddenArtistsCount: N.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: h,
                                withContextMenu: _,
                                labelRef: b,
                                handleOnSpoilerClick: y,
                                isTooltipEnabled: !!C && h && !_ && !g,
                                title: !C || h || _ ? void 0 : C,
                            };
                        })(f),
                        A = (0, s.L)(() =>
                            g.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(x)
                                  ? x
                                  : (0, i.jsx)(I, { spoilerClassName: r, spoilerArtistsCount: g.hiddenArtistsCount, handleOnSpoilerClick: g.handleOnSpoilerClick }),
                        ),
                        N = (0, i.jsx)(l.m_, {
                            referenceRef: g.labelRef,
                            enabled: g.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: g.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: a ? { WebkitLineClamp: a } : void 0,
                                className: (0, n.$)(v().root, v()['root_variant_'.concat(b)], { [v().root_clamp]: a && a > 0, [v().ellipsis]: !a }, t),
                                title: g.title,
                                children: [
                                    g.groups.map((e) =>
                                        (0, i.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: h,
                                                allArtistsTitle: g.allArtistsTitle,
                                                withCustomTooltip: g.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    A,
                                ],
                            }),
                        });
                    return g.withContextMenu ? (0, i.jsx)(z, { labelRef: g.labelRef, artists: g.artists, label: N }) : N;
                });
        },
        14315: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(88800),
                n = a(65724),
                r = a(2058),
                o = a(28692),
                s = a(29993),
                l = a(96817),
                d = a(52300),
                c = a(17392),
                u = a(7023),
                _ = a(66241),
                m = a.n(_);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: _,
                        iconClassName: p,
                        size: v = 'xxxs',
                        iconSize: h = 'xs',
                        color: b,
                        variant: x = 'default',
                        onClick: f,
                    } = e,
                    { formatMessage: g } = (0, r.A)(),
                    A = t || a !== o.pM.ONE ? 'repeat' : 'repeat_one',
                    N = (0, u.z)(a, g, t),
                    C = (0, s.c)((e) => {
                        (null == f || f(), e.stopPropagation());
                    });
                return (0, i.jsx)(l.$, {
                    className: _,
                    radius: 'round',
                    size: v,
                    variant: x,
                    color: b,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': N,
                    'aria-pressed': !t && a !== o.pM.NONE,
                    onClick: C,
                    icon: (0, i.jsx)(d.I, {
                        size: h,
                        variant: A,
                        className: (0, n.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    'data-test-id': ((e, t) =>
                        e === o.pM.NONE || t
                            ? c.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                            : e === o.pM.ONE
                              ? c.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                              : c.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                });
            };
        },
        14329: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        14431: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var i = a(53548);
            let n = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15232: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => T });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(58390),
                d = a(17392),
                c = a(79070),
                u = a(17610),
                _ = a(29504),
                m = a(13946),
                p = a(55693),
                v = a(72288),
                h = a(24548),
                b = a(85587),
                x = a(90224),
                f = a(91292),
                g = a(7608),
                A = a(6667),
                N = a(85463),
                C = a(65462),
                y = a.n(C);
            let T = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: C,
                        withExplicitMark: T,
                        withSecondaryColor: E,
                        captionSize: S = 'm',
                        explicitSize: B = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: w,
                        artistsClassName: j,
                        ignoreDislikedStyles: P,
                        withCustomTooltip: k = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: R,
                        beforeTitle: O,
                        withArtistLink: D,
                        variant: M,
                        withTrackLink: U,
                        afterTitle: F,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: W } = (0, s.A)(),
                    { sendNavigateSearchFeedback: K } = (0, p.z)(),
                    {
                        settings: { isMobile: V },
                        slam: H,
                    } = (0, v.g)(),
                    G = (0, A.$)({ withCustomTooltip: k }),
                    Y = (0, l.useSearchParams)(),
                    $ = (0, g.B)(r, {
                        isMobile: V,
                        isOfflineModeEnabled: H.isOfflineModeEnabled,
                        albumArtists: C,
                        withTrackLink: U,
                        withArtistLink: D,
                        variant: M,
                        withExplicitMark: T,
                        query: R ? Object.fromEntries(Y) : void 0,
                    }),
                    {
                        displayTitle: q,
                        ariaLabel: Z,
                        tooltipText: X,
                        titleAttribute: Q,
                        versionTitleAttribute: J,
                        isTooltipEnabled: ee,
                    } = ((e, t, a, i) => {
                        var n, r;
                        let { canEnableCustomTooltip: o, isMobile: s } = a,
                            l = ((e, t) => (e.shouldShowRemovedTitle ? t({ id: 'track-title.error-not-found' }) : e.title))(t, i),
                            d = t.shouldShowRemovedTitle ? l : ''.concat(l, ' ').concat(null != (n = t.version) ? n : ''),
                            c = i({ id: 'entity-names.track-name' }, { trackName: e.title });
                        return {
                            displayTitle: l,
                            ariaLabel: ''.concat(c, ' ').concat(null != (r = e.version) ? r : ''),
                            tooltipText: d,
                            isTooltipEnabled: o && !s,
                            titleAttribute: !o && (t.shouldShowRemovedTitle || t.link) ? d : void 0,
                            versionTitleAttribute: o ? void 0 : t.version,
                        };
                    })(r, $, { canEnableCustomTooltip: G, isMobile: V }, W),
                    et = (0, N.O)({ track: r, onNavigate: K, withSavingQueryParams: R, entityType: b.n.TRACK }),
                    ea = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.m_, {
                                enabled: ee,
                                offsetOptions: 4,
                                placement: 'top',
                                text: X,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, n.$)(y().text, y().title),
                                    type: 'entity',
                                    size: S,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: q,
                                }),
                            }),
                        [S, q, X, ee],
                    ),
                    ei = (0, c.L)(() =>
                        $.shouldShowRemovedTitle
                            ? (0, i.jsx)(u.m_, {
                                  enabled: ee,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: X,
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, n.$)(y().text, y().title),
                                      type: 'entity',
                                      size: S,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Q,
                                      children: q,
                                  }),
                              })
                            : $.link
                              ? (0, i.jsx)(f.N, {
                                    onClick: et,
                                    className: y().albumLink,
                                    href: $.link.href,
                                    'aria-label': Z,
                                    title: Q,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: ea(),
                                })
                              : ea({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                    ),
                    en = (0, o.useMemo)(() => +!!L, [L]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !r.isAvailable, [y().root_disliked]: r.isDisliked && !P, [y().root_withSecondaryColor]: E }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, { [y().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, n.$)(y().text, w),
                                        type: 'entity',
                                        size: S,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            ei,
                                            $.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: S,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: J,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', $.version],
                                                }),
                                        ],
                                    }),
                                    $.explicitMark &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: B,
                                            variant: $.explicitMark,
                                            className: y().explicitMark,
                                            trackId: r.id,
                                        }),
                                    F,
                                ],
                            }),
                            $.artists.length > 0 &&
                                (0, i.jsx)(m.i, {
                                    className: (0, n.$)(y().text, { [y().artists]: L }, j, w),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, n.$)(y().text, y().link),
                                    captionClassName: (0, n.$)(y().text, y().artistCaption),
                                    artists: $.artists,
                                    withLink: $.withArtistLink,
                                    lineClamp: en,
                                    captionSize: S,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        15382: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        16112: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => E });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                o = a(2058),
                s = a(42078),
                l = a(29595),
                d = a(74965),
                c = a(72288),
                u = a(66943),
                _ = a(65724),
                m = a(84961),
                p = a(17392),
                v = a(79070),
                h = a(90688),
                b = a(97956),
                x = a(90420),
                f = a(15077),
                g = a(33719),
                A = a(55211),
                N = a(14329),
                C = a.n(N);
            let y = (0, m.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: n } = (0, c.g)(),
                    r = n.checkExperiment(b.z.WebNextWaveAgentExperiment, 'on'),
                    o = t.type === x.q7,
                    s = (0, v.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, i.jsx)(A.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(C().view, { [C().multivibeContainer]: o }),
                                  coverClassName: (0, _.$)({ [C().multivibeCover]: o }),
                                  entityCoverClassName: (0, _.$)({ [C().multivibeAvatar]: o }),
                                  controlClassName: (0, _.$)({ [C().multivibeControl]: o }),
                              })
                            : (0, i.jsx)(h._V, {
                                  className: C().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = r && t.agent ? void 0 : 'round';
                return (0, i.jsx)(g.k, {
                    closeToast: a,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: s,
                    radius: l,
                    className: C().root,
                });
            });
            var T = a(93512);
            let E = (e) => {
                let { user: t, pinsCollection: a } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, o.A)(),
                    [p, v] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        o = (0, n.HO)(a.get(e.pinId));
                    v(!0);
                    let d = await e.togglePin();
                    (v(!1),
                        o &&
                            o.type === s._.WAVE_ITEM &&
                            o.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = o.data.backgroundImageUrl), (r.colors = o.data.colors), (r.agent = o.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (r.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (r.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (r.agent = (0, T.K)(d.data.agent))),
                        d
                            ? _((0, i.jsx)(y, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, a, t.isAuthorized, e]);
            };
        },
        16208: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => E });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(17392),
                d = a(17610),
                c = a(29504),
                u = a(13946),
                _ = a(66264),
                m = a(72288),
                p = a(24548),
                v = a(85587),
                h = a(90224),
                b = a(91292),
                x = a(7608),
                f = a(6667),
                g = a(85463),
                A = a(32138),
                N = a(65462),
                C = a.n(N),
                y = a(81132),
                T = a.n(y);
            let E = (0, r.PA)((e) => {
                var t, a, r, N, y;
                let {
                        track: E,
                        className: S,
                        withAuthor: B,
                        withSecondaryColor: I = !1,
                        withListeningProgress: w = !1,
                        captionSize: j = 'm',
                        explicitSize: P = 'xs',
                        withExplicitMark: k,
                        titleContainerClassName: L,
                        textClassName: R,
                        playContextParams: O,
                        withTimeLeftText: D = !0,
                        ignoreDislikedStyles: M,
                        albumArtists: U,
                        withCustomTooltip: F = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: W,
                        beforeTitle: K,
                        afterTitle: V,
                        withContextMenuArtists: H,
                        withArtistLink: G,
                    } = e,
                    {
                        sonataState: Y,
                        slam: $,
                        settings: { isMobile: q },
                    } = (0, m.g)(),
                    { formatMessage: Z } = (0, s.A)(),
                    X = (0, f.$)({ withCustomTooltip: F }),
                    Q = (0, g.O)({ track: E, withSavingQueryParams: W, entityType: v.n.AUDIOBOOK }),
                    J = !!(w && O && E.shouldRememberPosition && E.streamProgress && E.durationMs),
                    ee =
                        E.id === (null == (t = Y.entityMeta) ? void 0 : t.id) &&
                        (null == (r = Y.entityMeta) || null == (a = r.streamProgress) ? void 0 : a.endPositionSec),
                    et = (0, A.d)(J, E.streamProgress, ee),
                    ea = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                shouldHideAudiobookInfo: n,
                                albumArtists: r,
                                withAuthor: o,
                                withArtistLink: s,
                                withExplicitMark: l,
                            } = t,
                            d = (0, x.B)(e, { isMobile: a, isOfflineModeEnabled: i, albumArtists: r, withArtistLink: s, withExplicitMark: l }),
                            c = !!(o && d.artists.length > 0 && !n);
                        return { ...d, hasAuthor: c };
                    })(E, {
                        isMobile: q,
                        isOfflineModeEnabled: $.isOfflineModeEnabled,
                        shouldHideAudiobookInfo: et,
                        albumArtists: U,
                        withAuthor: B,
                        withArtistLink: G,
                        withExplicitMark: k,
                    }),
                    ei = ((e, t, a, i) => {
                        let { canEnableCustomTooltip: n, isMobile: r } = a,
                            o = e.shouldShowRemovedTitle ? t({ id: 'track-title.audiobook-not-found' }) : e.title;
                        return {
                            displayTitle: o,
                            ariaLabel: t({ id: 'entity-names.audiobook-name' }, { bookName: i }),
                            titleAttribute: n || e.shouldShowRemovedTitle ? void 0 : o,
                            versionTitleAttribute: n ? void 0 : e.version,
                            isTooltipEnabled: n && !r,
                        };
                    })(ea, Z, { canEnableCustomTooltip: X, isMobile: q }, null == (N = E.mainAlbum) ? void 0 : N.title),
                    en = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.m_, {
                                enabled: ei.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ei.displayTitle,
                                hoverSettings: p.V,
                                children: (0, i.jsx)(c.HL, {
                                    className: C().title,
                                    type: 'entity',
                                    size: j,
                                    variant: 'span',
                                    title: ei.titleAttribute,
                                    ...e,
                                    children: ei.displayTitle,
                                }),
                            }),
                        [ei.isTooltipEnabled, ei.titleAttribute, j, ei.displayTitle],
                    ),
                    er = null == (y = ea.link) ? void 0 : y.href,
                    eo = (0, o.useMemo)(
                        () =>
                            ea.shouldShowRemovedTitle
                                ? ei.displayTitle
                                : void 0 !== er
                                  ? (0, i.jsx)(b.N, {
                                        'aria-label': ei.ariaLabel,
                                        className: C().albumLink,
                                        href: er,
                                        title: ei.titleAttribute,
                                        onClick: Q,
                                        'data-test-id': l.Kq.track.TRACK_TITLE,
                                        children: en(),
                                    })
                                  : en({ 'data-test-id': l.Kq.track.TRACK_TITLE }),
                        [ea.shouldShowRemovedTitle, er, ei.ariaLabel, ei.displayTitle, en, ei.titleAttribute, Q],
                    ),
                    es = (0, o.useMemo)(() => +!!z, [z]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(C().root, { [C().root_disabled]: !E.isAvailable, [C().root_disliked]: E.isDisliked && !M, [C().root_withSecondaryColor]: I }, S),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(C().metaContainer, T().metaContainer, { [T().metaContainer_oneLine]: !B }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(C().titleContainer, L, T().titleContainer),
                                children: [
                                    (0, i.jsxs)(c.HL, {
                                        className: (0, n.$)(C().text, R),
                                        type: 'entity',
                                        size: j,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            K,
                                            eo,
                                            ea.version &&
                                                (0, i.jsxs)(c.HL, {
                                                    className: (0, n.$)(C().text, C().version),
                                                    type: 'entity',
                                                    size: j,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ei.versionTitleAttribute,
                                                    children: ['\xa0', ea.version],
                                                }),
                                        ],
                                    }),
                                    ea.explicitMark &&
                                        (0, i.jsx)(h.N, {
                                            containerClassName: C().explicitMarkContainer,
                                            getDescriptionTexts: E.getDescriptionTexts,
                                            variant: ea.explicitMark,
                                            className: C().explicitMark,
                                            size: P,
                                            trackId: E.id,
                                        }),
                                    V,
                                ],
                            }),
                            ea.hasAuthor &&
                                (0, i.jsx)(c.HL, {
                                    type: 'entity',
                                    size: j,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(C().text, T().artists, R),
                                    children: (0, i.jsx)(u.i, {
                                        className: (0, n.$)(C().text, { [C().artists]: z }, R),
                                        linkClassName: (0, n.$)(C().text, C().link),
                                        captionClassName: (0, n.$)(C().text, C().artistCaption),
                                        artists: ea.artists,
                                        withLink: ea.withArtistLink,
                                        lineClamp: es,
                                        captionSize: j,
                                        withContextMenu: H,
                                    }),
                                }),
                            J &&
                                E.streamProgress &&
                                O &&
                                (0, i.jsx)(_.B, {
                                    className: (0, n.$)(T().progress, {
                                        [T().progress_withPreviousInfo]: ea.hasAuthor,
                                        [T().progress_disabled]: !E.isAvailable || E.isDisliked,
                                    }),
                                    id: E.id,
                                    albumId: E.albumId,
                                    streamProgress: E.streamProgress,
                                    durationMs: E.durationMs || 0,
                                    playContextParams: O,
                                    withTimeLeftText: D,
                                }),
                        ],
                    }),
                });
            });
        },
        16381: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        17743: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => K });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                o = a(33979),
                s = a(29993),
                l = a(37173),
                d = a(5407),
                c = a(91467),
                u = a(86535),
                _ = a(98427),
                m = a(51318),
                p = a(17071),
                v = a(38860),
                h = a(47964),
                b = a(9630),
                x = a(72288),
                f = a(27397),
                g = a(36361),
                A = a(16704);
            let N = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: n, className: r } = e;
                return (0, i.jsx)(A.D, { className: r, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: n });
            };
            var C = a(51976),
                y = a(65724),
                T = a(2058),
                E = a(17392),
                S = a(96817),
                B = a(52300),
                I = a(14315),
                w = a(68039),
                j = a(86961),
                P = a.n(j);
            let k = (0, n.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: n,
                        canMoveForward: r,
                        canMoveBackward: o,
                        canRewind: s,
                        canShuffle: l,
                        onClickNext: d,
                        onClickPrev: c,
                        onRewindBackwardsClick: u,
                        onRewindForwardClick: _,
                        onClickPlayPause: m,
                        canChangeRepeatMode: p,
                        shuffle: v,
                        className: h,
                        onRepeatClick: b,
                        onShuffleClick: x,
                    } = e,
                    { formatMessage: f } = (0, T.A)();
                return (0, i.jsxs)('div', {
                    className: (0, y.$)(P().root, h),
                    children: [
                        (0, i.jsxs)('div', {
                            className: P().buttonContainer,
                            children: [
                                (t || l) &&
                                    (0, i.jsx)(w.u, {
                                        className: P().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: v,
                                        onClick: x,
                                        'data-test-id': E.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                !t &&
                                    s &&
                                    (0, i.jsx)(S.$, {
                                        className: (0, y.$)(P().sonataButton, P().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: u,
                                        'data-test-id': E.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: P().sonataButtons,
                            children: [
                                (0, i.jsx)(S.$, {
                                    className: P().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !o,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.previous-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xxs' }),
                                    onClick: c,
                                    'data-test-id': E.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                                (0, i.jsx)(A.D, {
                                    className: (0, y.$)(P().sonataButton, P().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: P().playPauseButtonIcon,
                                    onClick: m,
                                }),
                                (0, i.jsx)(S.$, {
                                    className: P().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !r,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.next-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xxs' }),
                                    onClick: d,
                                    'data-test-id': E.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: P().buttonContainer,
                            children: [
                                !t &&
                                    s &&
                                    (0, i.jsx)(S.$, {
                                        className: (0, y.$)(P().sonataButton, P().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        'data-test-id': E.Kq.sonata.REWIND_FORWARD_BUTTON,
                                    }),
                                (t || p) &&
                                    (0, i.jsx)(I.s, {
                                        className: P().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: n,
                                        onClick: b,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(18593),
                R = a(99698),
                O = a(42174),
                D = a(35262),
                M = a(49738),
                U = a(64546),
                F = a(4941),
                z = a.n(F);
            let W = (0, n.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: n,
                            canRewind: o,
                            onClickNext: s,
                            onClickPrev: l,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: c,
                            onClickPlayPause: u,
                            className: _,
                        } = e,
                        { formatMessage: h } = (0, T.A)(),
                        { user: b, sonataState: f } = (0, x.g)(),
                        g = (0, v.z)(),
                        N = f.entityMeta,
                        C = f.contextType === L.K.Generative,
                        I = b.isAuthorized && !C,
                        w = (0, O.K)(f.entityMeta),
                        j = (0, R.m)(f.entityMeta);
                    (0, r.useEffect)(() => {
                        if (!f.isGenerativeContext)
                            return (
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.LIKE, w),
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.DISLIKE, j),
                                () => {
                                    (null == g || g.removeShortcutsListener(p.M.MAIN, m.l.LIKE), null == g || g.removeShortcutsListener(p.M.MAIN, m.l.DISLIKE));
                                }
                            );
                    }, [j, w, g, f.isGenerativeContext]);
                    let P = (0, r.useMemo)(
                            () =>
                                o
                                    ? (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: d,
                                          'data-test-id': E.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON,
                                      })
                                    : (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !n,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.previous-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xs' }),
                                          onClick: l,
                                          'data-test-id': E.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON,
                                      }),
                            [o, n, h, l, d],
                        ),
                        k = (0, r.useMemo)(
                            () =>
                                o
                                    ? (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: c,
                                          'data-test-id': E.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON,
                                      })
                                    : (0, i.jsx)(S.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.next-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xs' }),
                                          onClick: s,
                                          'data-test-id': E.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON,
                                      }),
                            [o, a, h, s, c],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, y.$)(z().root, _),
                        children: [
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children: N && I && (0, i.jsx)(U.WithOffline, { fallback: (0, i.jsx)(D._, { isDisliked: N.isDisliked, iconSize: 'xs', onClick: j }) }),
                            }),
                            (0, i.jsxs)('div', {
                                className: z().sonataButtons,
                                children: [
                                    P,
                                    (0, i.jsx)(A.D, {
                                        className: z().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: z().playPauseButtonIcon,
                                        onClick: u,
                                    }),
                                    k,
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children:
                                    N &&
                                    I &&
                                    (0, i.jsx)(U.WithOffline, {
                                        fallback: (0, i.jsx)(M.c, { isLiked: N.isLiked, iconSize: 'xs', onClick: w, disabled: !b.isAuthorized }),
                                    }),
                            }),
                        ],
                    });
                }),
                K = (0, n.PA)((e) => {
                    var t, a;
                    let { isMobile: n, entityMeta: A, isFullscreen: y, className: T, withShuffle: E, withRepeat: S } = e,
                        { sonataState: B, vibe: I, advert: w, freePlayerAccess: j } = (0, x.g)(),
                        P = (0, v.z)(),
                        L = (0, b.e)(),
                        { rewindBackwards: R, rewindForward: O } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, x.g)(),
                                t = (0, b.e)();
                            return {
                                rewindBackwards: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        i = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(i < a ? i : a);
                                }, [e, t]),
                            };
                        })(),
                        D = (0, c.r)(),
                        M = (0, o.g)(),
                        U = (null == A ? void 0 : A.isNonMusic) && !w.isAdvertShown,
                        F = (0, d.P)(),
                        { togglePlay: z } = (0, h.B)({
                            seeds: null != (a = null == (t = I.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: _.b.HOME,
                            blockIdForFrom: u.h.RUP_MAIN_RADIO,
                            onPlayInterrupted: () => j.showRestrictionModal(l.W.Interrupted),
                        }),
                        K = (0, r.useMemo)(() => (w.isAdvertShown ? w.isAdvertPlaying : B.isPlaying), [w.isAdvertShown, w.isAdvertPlaying, B.isPlaying]),
                        V = (0, s.c)(() => {
                            if (w.isAdvertShown) {
                                var e;
                                null == D || null == (e = D.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            A ? null == L || L.togglePause() : z();
                        }),
                        H = (0, s.c)(() => {
                            !(y && F()) && (V(), K || M());
                        }),
                        G = (0, s.c)(() => {
                            null == L || L.moveForward();
                        }),
                        Y = (0, s.c)(() => {
                            null == L || L.moveBackward();
                        }),
                        $ = (0, g.e)(),
                        q = (0, f.A)(),
                        Z = (0, s.c)(() => {
                            q(B);
                        }),
                        X = (0, s.c)(() => {
                            $(B);
                        });
                    (0, r.useEffect)(() => {
                        if (!y && (null == P || P.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY, V), !w.isAdvertShown))
                            return (
                                null == P || P.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT, Z),
                                null == P || P.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE, X),
                                () => {
                                    (null == P || P.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY),
                                        w.isAdvertShown ||
                                            (null == P || P.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE),
                                            null == P || P.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT)));
                                }
                            );
                    }, [y, V, Z, X, P, w.isAdvertShown]);
                    let Q = (0, r.useMemo)(() => (y ? (n ? W : k) : n ? N : C.Z), [n, y]);
                    return (0, i.jsx)(Q, {
                        className: T,
                        disabled: null === B.entityMeta || (w.isAdvertShown && !n),
                        isPlaying: K || !1,
                        canMoveBackward: B.canMoveBackward && !w.isAdvertShown,
                        canMoveForward: B.canMoveForward && !w.isAdvertShown,
                        withShuffle: E,
                        withRepeat: S,
                        canShuffle: B.canShuffle,
                        shuffle: B.shuffle,
                        onClickPlayPause: H,
                        onClickNext: G,
                        onClickPrev: Y,
                        canRewind: U,
                        onRewindBackwardsClick: R,
                        onRewindForwardClick: O,
                        canChangeRepeatMode: B.canChangeRepeatMode,
                        repeatMode: B.repeatMode,
                        onRepeatClick: Z,
                        onShuffleClick: X,
                    });
                });
        },
        18143: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        18278: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => d });
            var i = a(88800),
                n = a(53548),
                r = a(17392),
                o = a(29504),
                s = a(15526),
                l = a.n(s);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [s, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    s)
                )
                    return s.map((e, t) =>
                        (0, i.jsx)(
                            o.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19129: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => d });
            var i = a(9519),
                n = a(88800),
                r = a(53548),
                o = a(4086),
                s = a(41928);
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: { ...t }, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, n.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    (super(...e), (0, i._)(this, 'state', { hasError: !1 }));
                }
            }
            let d = (function (e) {
                let t = (t) => {
                    let a = (0, s.N)().get(o.Zf);
                    return (0, n.jsx)(e, { ...t, logger: a });
                };
                return ((t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t);
            })(l);
        },
        20674: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        20855: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withProductWithoutRecommendation: 'DefaultLayout_root_withProductWithoutRecommendation__6LXgR',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                withRedAlert: 'DefaultLayout_withRedAlert__md0yB',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        21284: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { h: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(i || (i = {})));
        },
        24460: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                o = a(2058),
                s = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(6322);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let o = await e.togglePin();
                    (p(!1),
                        o
                            ? a((0, i.jsx)(u.l, { playlist: r }), { containerId: s.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [t.isAuthorized, m, e, a, _]);
            };
        },
        24548: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        25883: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => s });
            var i = a(88800),
                n = a(84961),
                r = a(33719),
                o = a(5048);
            let s = (0, n.PA)((e) => {
                let { album: t, closeToast: a } = e,
                    n = (0, o.b)(t.type);
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.title,
                    isPinned: t.isPinned,
                    radius: 's',
                });
            });
        },
        26071: (e) => {
            e.exports = {
                container: 'LayoutNotificationContainers_container__8wnWk',
                root: 'LayoutNotificationContainers_root__5HClw',
                recommendations: 'LayoutNotificationContainers_recommendations__g9p5w',
            };
        },
        26208: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        26645: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, w: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        27817: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => u });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                o = a(88969),
                s = a(17392),
                l = a(52300),
                d = a(19934),
                c = a(72288);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: a, disabled: n, className: u, iconClassName: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'unpin' : 'pin',
                    v = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    h = (0, r.useMemo)(() => (t ? (0, i.jsx)(o.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(o.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: a,
                    icon: (0, i.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': v,
                    disabled: n || !m.isAuthorized,
                    children: h,
                });
            });
        },
        28870: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(5120);
            let n = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        29008: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o, r: () => s });
            var i = a(53548),
                n = a(2058),
                r = a(61691),
                o = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let s = (e, t) => {
                let { formatMessage: a } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return a({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return a({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return a({ id: 'entity-names.book' });
                            return a({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'entity-names.fairy-tale' });
                        default:
                            return a({ id: 'entity-names.album' });
                    }
                }, [e, a, t]);
            };
        },
        30283: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => l });
            var i = a(5120),
                n = a(2258),
                r = a(3474);
            let o = i.gK.model('BarBelowContent', {
                    bgUrl: i.gK.maybeNull(i.gK.string),
                    bgColor: i.gK.maybeNull(i.gK.string),
                    imageUrl: i.gK.maybeNull(i.gK.string),
                    title: i.gK.maybeNull(i.gK.string),
                    titleColor: i.gK.maybeNull(i.gK.string),
                    text: i.gK.maybeNull(i.gK.string),
                    textColor: i.gK.maybeNull(i.gK.string),
                    buttons: i.gK.array(r._),
                    advDisclaimer: i.gK.maybeNull(i.gK.string),
                }),
                s = i.gK.model('BarBelow', {
                    anchorId: i.gK.enumeration(Object.values(n.v)),
                    screenId: i.gK.string,
                    content: o,
                    feedbackToken: i.gK.maybeNull(i.gK.string),
                }),
                l = i.gK
                    .model('BarBelowMain', {
                        anchorId: i.gK.maybe(i.gK.string),
                        isVisible: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenShown: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenHidden: i.gK.maybe(i.gK.boolean),
                        hasAnimationAlreadyBeenStarted: i.gK.maybe(i.gK.boolean),
                        list: i.gK.array(s),
                    })
                    .volatile(() => ({ wasShown: !1 }))
                    .views((e) => ({
                        get barBelowItem() {
                            return e.list.find((t) => t.anchorId === e.anchorId);
                        },
                        get showWithAnimation() {
                            return !e.hasAnimationAlreadyBeenShown && e.isVisible;
                        },
                        get hideWithAnimation() {
                            return e.hasAnimationAlreadyBeenShown && !e.hasAnimationAlreadyBeenHidden && !e.isVisible;
                        },
                    }))
                    .actions((e) => ({
                        setAnchorId(t) {
                            e.anchorId = t;
                        },
                        show() {
                            ((e.isVisible = !0), (e.wasShown = !0));
                        },
                        hide() {
                            e.isVisible = !1;
                        },
                        setAnimationAlreadyBeenShown() {
                            e.hasAnimationAlreadyBeenShown = !0;
                        },
                        setAnimationAlreadyBeenHidden() {
                            e.hasAnimationAlreadyBeenHidden = !0;
                        },
                        setAnimationAlreadyBeenStarted() {
                            e.hasAnimationAlreadyBeenStarted = !0;
                        },
                    }));
        },
        30990: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        31510: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => i });
            let i = (e) => ({ uri: e.uri, color: e.color });
        },
        31941: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        32138: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n });
            var i = a(72288);
            let n = (e, t, a) => {
                let {
                    settings: { isMobile: n },
                } = (0, i.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (a && a > 0)));
            };
        },
        32245: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => k });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(88969);
            a(30282);
            var d = a(96817),
                c = a(52300),
                u = a(29504),
                _ = a(87999),
                m = a(47149),
                p = a(84423),
                v = a(89846),
                h = a(64543),
                b = a(63582);
            let x = (0, b.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, p.s)()) ? void 0 : e.evgenInstance,
                        { hash: a } = (0, v.g)(),
                        { screen: i } = (0, h.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !a || !(null == i ? void 0 : i.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: a,
                                pageId: i.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, a, null == i ? void 0 : i.pageId]),
                    };
                }),
                f = (0, b.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let a = null == (t = (0, p.s)()) ? void 0 : t.evgenInstance,
                        { hash: i } = (0, v.g)(),
                        { screen: n } = (0, h.j)();
                    (0, o.useEffect)(() => {
                        if (!a || !i || !(null == n ? void 0 : n.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: i,
                            pageId: n.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(a, t);
                    }, [a, e, i, null == n ? void 0 : n.pageId]);
                });
            var g = a(44230),
                A = a(4370),
                N = a(72288),
                C = a(97956),
                y = a(56248),
                T = a(90688),
                E = a(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var B = a(96856),
                I = a.n(B);
            let w = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: r } = e,
                    { slam: o } = (0, N.g)(),
                    { contentRef: s } = (0, g.g)(),
                    c = (0, E.Z)(A.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(I().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(y.L, {
                                withBackwardFallback: '/',
                                className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !s }),
                                withForwardControl: !1,
                                onBackwardClick: r,
                            }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(I().content, { [I().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(T._V, { className: I().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: I().message,
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            className: I().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            className: I().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, i.jsx)(d.$, {
                                        className: I().button,
                                        onClick: c,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(u.HL, {
                                            className: I().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = a(9184),
                P = a.n(j);
            let k = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: r } = e,
                    { formatMessage: _ } = (0, s.A)(),
                    m = (0, o.useContext)(N.P),
                    p = null == m ? void 0 : m.experiments.checkExperiment(C.z.WebNextUnstableMusicScreen, 'on'),
                    v = _(p ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                f(v);
                let { sendRefreshEvent: h } = x(),
                    b = (0, o.useCallback)(() => {
                        (h(), (window.location.href = A.Z.main.href));
                    }, [h]),
                    { contentRef: T } = (0, g.g)();
                return p
                    ? (0, i.jsx)(w, { className: t, withBackwardControl: a, onBack: r })
                    : (0, i.jsxs)('div', {
                          className: (0, n.$)(P().root, t),
                          children: [
                              a &&
                                  (0, i.jsx)(y.L, {
                                      withBackwardFallback: '/',
                                      className: (0, n.$)(P().navigation, { [P().navigation_desktop]: !T }),
                                      withForwardControl: !1,
                                      onBackwardClick: r,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, n.$)(P().content, { [P().content_shrink]: !a }),
                                  children: [
                                      (0, i.jsx)(c.I, { className: P().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(u.DZ, { className: (0, n.$)(P().title, P().important), variant: 'h3', size: 'xs', children: v }),
                                      (0, i.jsxs)(u.HL, {
                                          className: (0, n.$)(P().text, P().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(d.$, {
                                          onClick: b,
                                          className: P().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        32947: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n, L: () => r });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let r = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let a = new Date();
                return (a.setDate(a.getDate() - 1), i(a, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        33719: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => g });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                o = a(17392),
                s = a(90688),
                l = a(73170),
                d = a(29504),
                c = a(2058),
                u = a(88969),
                _ = a(29993),
                m = a(15077),
                p = a(72288),
                v = a(97956),
                h = a(91292),
                b = a(59304),
                x = a(95641),
                f = a.n(x);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: a,
                        coverUri: x,
                        entityTitle: g,
                        entityDescription: A,
                        entityVariant: N,
                        entityUrl: C,
                        customCover: y,
                        radius: T,
                        isPinned: E,
                    } = e,
                    S = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: o, entityDescription: s } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    B = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: o, entityDescription: s } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    I = (0, r.useMemo)(
                        () =>
                            C
                                ? (0, i.jsx)(h.N, {
                                      className: f().link,
                                      href: C,
                                      title: g,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: f().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: f().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, C],
                    ),
                    w = (0, r.useMemo)(
                        () => y || (0, i.jsx)(s._V, { className: f().image, src: x, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [x, y],
                    ),
                    j = (0, r.useMemo)(() => {
                        let e = { entity: I, description: A };
                        return E
                            ? S({ entityVariant: N, values: e, entityTitle: g, entityDescription: A })
                            : B({ entityVariant: N, values: e, entityTitle: g, entityDescription: A });
                    }, [I, A, E, B, N, g, S]);
                return (0, i.jsx)(b.$, {
                    className: (0, n.$)(f().root, { [f().root_withLongText]: N === m.c.AUDIOBOOK }, a),
                    closeToast: t,
                    cover: w,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': j.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: f().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': o.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: j.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        34194: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
                advDisclaimerTrigger: 'BrandedPlayerModal_advDisclaimerTrigger__60ecu',
                advDisclaimerTriggerIcon: 'BrandedPlayerModal_advDisclaimerTriggerIcon__0LYXY',
                advDisclaimerPopover: 'BrandedPlayerModal_advDisclaimerPopover__l7iKp',
                advDisclaimerText: 'BrandedPlayerModal_advDisclaimerText__B91Hs',
            };
        },
        35402: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => s });
            var i = a(13758),
                n = a(57249),
                r = a(6087),
                o = a(49124);
            let s = r.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 13758))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = o.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/undefined/music/vundefined' : window.location.origin;
                (0, i.setWasmUrl)(new URL(n, e).href);
            }
        },
        35994: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => n });
            var i = a(67174);
            let n = (e) => (0, i.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36303: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(2058),
                n = a(48987);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)(),
                    { hours: r, minutes: o, seconds: s } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
                return a(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: r, beginMinutes: o, beginSeconds: s, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        37013: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        38147: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        38514: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => n });
            var i = a(67174);
            let n = (e) => (0, i.u)('/album/:albumId', { params: { albumId: e } });
        },
        38744: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
            };
        },
        39661: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        39901: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        40634: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => f });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(87999),
                l = a(80643),
                d = a(17392),
                c = a(29993),
                u = a(90688),
                _ = a(19934),
                m = a(7555),
                p = a(29504),
                v = a(78940),
                h = a(72288),
                b = a(80932),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    b = (0, v.Z)(t.url),
                    g = (0, l.S)(),
                    A = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(f, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    N = (0, c.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), g({ to: s.AppScreen.ArtistScreen }), b(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(_.Dr, {
                            className: (0, n.$)(x().root, a),
                            onClick: N,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        42078: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(i || (i = {})));
        },
        43484: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        44164: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        44230: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n, g: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                r = () => (0, i.useContext)(n);
        },
        44440: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        44988: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var i = a(88800),
                n = a(84961),
                r = a(17392),
                o = a(52300),
                s = a(19934),
                l = a(108),
                d = a(72288);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: a, className: n, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    v = (0, l.$)(t, u);
                return (0, i.jsx)(s.Dr, {
                    className: n,
                    onClick: a,
                    icon: (0, i.jsx)(o.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        45197: (e) => {
            e.exports = { root: 'MuzmarketTitle_root___tr35', badge: 'MuzmarketTitle_badge__d3Xuz' };
        },
        45213: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        46079: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            let i = (0, a(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46312: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { p: () => i }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(i || (i = {})));
        },
        46474: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(53548),
                n = a(29993),
                r = a(72288);
            a(97956);
            var o = a(34303),
                s = a(67174),
                l = (a(10325), a(43522)),
                d = (a(44440), a(14912));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, r.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, n.c)((e, t) => {}),
                    _ = (0, n.c)(() => {
                        let e = (0, l.j)();
                        if (null === e) return;
                        e.delete(o.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    m = (0, n.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, n.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, n.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, s.u)(t, { query: { [o.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: _,
                    checkIsValidClid: m,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        47938: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(6900),
                n = a(8655);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(i.o)), e && Object.values(n.S).includes(e) && document.body.classList.add(i.o[e]));
            };
        },
        48215: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => k });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(58390),
                d = a(17392),
                c = a(29993),
                u = a(79070),
                _ = a(17610),
                m = a(29504),
                p = a(66264),
                v = a(58217),
                h = a(78940),
                b = a(72288),
                x = a(24548),
                f = a(85587),
                g = a(90224),
                A = a(91292),
                N = a(32947),
                C = a(62837),
                y = a(38514),
                T = a(69553),
                E = a(6667),
                S = a(85463),
                B = a(32138),
                I = a(65462),
                w = a.n(I),
                j = a(87724),
                P = a.n(j);
            let k = (0, r.PA)((e) => {
                var t, a, r, I, j, k, L;
                let {
                        track: R,
                        className: O,
                        withPodcastName: D,
                        withDate: M,
                        withSecondaryColor: U = !1,
                        withListeningProgress: F = !1,
                        captionSize: z = 'm',
                        explicitSize: W = 'xs',
                        withExplicitMark: K,
                        titleContainerClassName: V,
                        textClassName: H,
                        playContextParams: G,
                        withTimeLeftText: Y = !0,
                        ignoreDislikedStyles: $,
                        withCustomTooltip: q = !0,
                        withSavingQueryParams: Z,
                        beforeTitle: X,
                        afterTitle: Q,
                        titleLineClamp: J = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ea,
                    } = e,
                    {
                        fullscreenPlayer: ei,
                        sonataState: en,
                        slam: er,
                        settings: { isMobile: eo },
                    } = (0, b.g)(),
                    { formatMessage: es, formatDate: el } = (0, s.A)(),
                    ed = (0, E.$)({ withCustomTooltip: q }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, h.Z)(null != (k = null == (t = R.mainAlbum) ? void 0 : t.url) ? k : ''),
                    e_ = !!(F && G && R.shouldRememberPosition && R.streamProgress && R.durationMs),
                    em =
                        R.id === (null == (a = en.entityMeta) ? void 0 : a.id) &&
                        (null == (I = en.entityMeta) || null == (r = I.streamProgress) ? void 0 : r.endPositionSec),
                    ep = (0, B.d)(e_, R.streamProgress, em),
                    ev = ((e, t) => {
                        let {
                                isMobile: a,
                                isOfflineModeEnabled: i,
                                mainAlbum: n,
                                shouldHidePodcastInfo: r,
                                withPodcastName: o,
                                withDate: s,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, T.q)(e, { isMobile: a, isOfflineModeEnabled: i, query: c }),
                            _ = (null == l || l) && e.disclaimers ? (0, C.DQ)(e.disclaimers) : null,
                            m = null != o && o && !r ? n : null,
                            p = m && (null == d || d) ? (0, y.L)(m.id) : null,
                            v = (null == s || s) && !r ? e.pubDate : void 0,
                            h = e.pubDate ? new Date(e.pubDate) : new Date(),
                            b = (0, N.L)(h),
                            x = !!(v && [N.r.TODAY, N.r.YESTERDAY].includes(b));
                        return { ...u, explicitMark: _, album: m, albumLink: p, pubDate: v, dateType: b, isSoonDate: x };
                    })(R, {
                        isMobile: eo,
                        isOfflineModeEnabled: er.isOfflineModeEnabled,
                        mainAlbum: R.mainAlbum,
                        shouldHidePodcastInfo: ep,
                        withPodcastName: D,
                        withDate: M,
                        withExplicitMark: K,
                        withAlbumTitleLink: ea,
                        query: Z ? Object.fromEntries(ec) : void 0,
                    }),
                    eh = ((e, t, a, i, n) => {
                        var r, o;
                        let { canEnableCustomTooltip: s, isMobile: l } = n,
                            d = t.shouldShowRemovedTitle ? a({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = a({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (o = e.version) ? o : ''),
                            _ = t.album ? a({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            m = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case N.r.TODAY:
                                    m = a({ id: 'interface-actions.date-today' });
                                    break;
                                case N.r.YESTERDAY:
                                    m = a({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case N.r.DATE_WITH_YEAR:
                                    m = i(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    m = i(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: s || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: s ? void 0 : t.version,
                            isTooltipEnabled: s && !l,
                            albumAriaLabel: _,
                            albumTitleAttribute: s || null == (r = t.album) ? void 0 : r.title,
                            dateText: m,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(R, ev, es, el, { canEnableCustomTooltip: ed, isMobile: eo }),
                    eb = (0, v.l)({ entity: null != (L = R.mainAlbum) ? L : null, entityType: f.n.PODCAST, callback: eu }),
                    ex = (0, c.c)((e) => {
                        (ei.modal.isOpened && ei.modal.close(), eb(e));
                    }),
                    ef = (0, S.O)({ track: R, withSavingQueryParams: Z, entityType: f.n.PODCAST }),
                    eg = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(_.m_, {
                                enabled: eh.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: eh.displayTitle,
                                hoverSettings: x.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: w().title,
                                    type: 'entity',
                                    size: z,
                                    variant: 'span',
                                    title: eh.titleAttribute,
                                    ...e,
                                    children: eh.displayTitle,
                                }),
                            }),
                        [eh.isTooltipEnabled, eh.titleAttribute, z, eh.displayTitle],
                    ),
                    eA = null == (j = ev.link) ? void 0 : j.href,
                    eN = (0, o.useMemo)(
                        () =>
                            ev.shouldShowRemovedTitle
                                ? (0, i.jsx)(_.m_, {
                                      enabled: eh.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: eh.displayTitle,
                                      hoverSettings: x.V,
                                      children: (0, i.jsx)('span', { children: eh.displayTitle }),
                                  })
                                : void 0 !== eA
                                  ? (0, i.jsx)(A.N, {
                                        onClick: ef,
                                        className: w().albumLink,
                                        href: eA,
                                        'aria-label': eh.ariaLabel,
                                        title: eh.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: eg(),
                                    })
                                  : eg({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [eh.isTooltipEnabled, ev.shouldShowRemovedTitle, eA, eh.displayTitle, eg, eh.titleAttribute, ef, eh.ariaLabel],
                    ),
                    eC = (0, u.L)(() => {
                        let e = ev.album;
                        if (!e) return;
                        let t = (0, i.jsx)(_.m_, {
                            enabled: eh.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: x.V,
                            children: (0, i.jsx)(m.HL, { variant: 'span', type: 'entity', size: z, className: w().albumTitle, children: e.title }),
                        });
                        return ev.albumLink
                            ? (0, i.jsx)(A.N, {
                                  'aria-label': eh.albumAriaLabel,
                                  className: w().link,
                                  href: ev.albumLink.href,
                                  title: eh.albumTitleAttribute,
                                  onClick: ex,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, n.$)(w().root, { [w().root_disabled]: !R.isAvailable, [w().root_disliked]: R.isDisliked && !$, [w().root_withSecondaryColor]: U }, O),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(w().metaContainer, P().podcastMetaContainer, ee),
                        children: [
                            e_ &&
                                G &&
                                R.streamProgress &&
                                (0, i.jsx)(p.B, {
                                    className: (0, n.$)(P().progress, et, {
                                        [P().progress_withPreviousInfo]: ev.album || ev.pubDate,
                                        [P().progress_disabled]: !R.isAvailable || R.isDisliked,
                                    }),
                                    id: R.id,
                                    albumId: R.albumId,
                                    streamProgress: R.streamProgress,
                                    durationMs: R.durationMs || 0,
                                    playContextParams: G,
                                    withTimeLeftText: Y,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(w().titleContainer, V, P().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, n.$)(w().text, H),
                                        type: 'entity',
                                        size: z,
                                        variant: 'div',
                                        lineClamp: J,
                                        children: [
                                            X,
                                            eN,
                                            ev.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, n.$)(w().text, w().version),
                                                    type: 'entity',
                                                    size: z,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: eh.versionTitleAttribute,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', ev.version],
                                                }),
                                        ],
                                    }),
                                    ev.explicitMark &&
                                        (0, i.jsx)(g.N, {
                                            containerClassName: w().explicitMarkContainer,
                                            getDescriptionTexts: R.getDescriptionTexts,
                                            variant: ev.explicitMark,
                                            className: w().explicitMark,
                                            size: W,
                                            trackId: R.id,
                                        }),
                                    Q,
                                ],
                            }),
                            eh.withSecondaryInfo &&
                                (0, i.jsxs)(m.HL, {
                                    type: 'entity',
                                    size: z,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(w().text, P().podcastName, H),
                                    children: [
                                        eC,
                                        null !== eh.dateText &&
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: z,
                                                className: (0, n.$)({
                                                    [P().dateWithName]: !!ev.album,
                                                    [P().soonDate]: ev.isSoonDate,
                                                    [P().dateDisabled]: !R.isAvailable,
                                                    [P().dateDisliked]: R.isDisliked && !$,
                                                }),
                                                children: eh.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        49034: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => d });
            var i = a(53548),
                n = a(8840),
                r = a(4086),
                o = a(41928),
                s = a(39318),
                l = a(26645);
            let d = (e) => {
                var t;
                let { id: a, ref: d, intersectionPropertyId: c = s.N } = e,
                    { config: u, isOnboardingOpened: _, setIsOnboardingOpened: m } = (0, l.w)(),
                    p = (0, i.useRef)(!1),
                    v = (0, n.BL)([{ current: d }], !d),
                    { isIntersecting: h } = null != (t = v[c]) ? t : {},
                    b = (0, o.N)().get(r.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, i.useEffect)(() => {
                    if (p.current && h) {
                        let e = u.find((e) => {
                            let { id: t } = e;
                            return t === a;
                        });
                        e && b.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [u, a, h, b, v, d]),
                u)) {
                    let i = b.get(t);
                    if (n) {
                        if (null == _ ? void 0 : _.current) return !1;
                        if (a === e) {
                            if (i) return !1;
                            return ((p.current = !0), m(!0), !0);
                        }
                        if (!i) break;
                    }
                }
                return !1;
            };
        },
        49288: (e) => {
            e.exports = {
                root: 'NotificationReloadPrefetchedRequests_root__90_4R',
                important: 'NotificationReloadPrefetchedRequests_important__ews9K',
                text: 'NotificationReloadPrefetchedRequests_text__oXCop',
                icon: 'NotificationReloadPrefetchedRequests_icon__Pg1_X',
                button: 'NotificationReloadPrefetchedRequests_button__lSehi',
                message: 'NotificationReloadPrefetchedRequests_message__i9Tx6',
            };
        },
        49518: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => _ });
            var i = a(53548),
                n = a(29993);
            let r = null,
                o = [],
                s = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void o.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    r.context.AdvManager.render(...t);
                },
                l = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [n, ...s] = a;
                    if (null === r)
                        return void o.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == r ? void 0 : r.cspNonce) ? t : void 0, ...n }, ...s);
                        });
                    r.code.create({ cspNonce: null != (e = r.cspNonce) ? e : void 0, ...n }, ...s);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void o.push((e) => {
                            e.code.reload(...t);
                        });
                    r.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void o.push((e) => {
                            e.code.destroy(...t);
                        });
                    r.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void o.push((e) => {
                            e.code.initialize(...t);
                        });
                    r.code.initialize(...t);
                },
                _ = () => {
                    let [e, t] = (0, i.useState)(null !== r),
                        a = (0, n.c)((a) => {
                            var i, n, s;
                            let { cspNonce: l } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (n = window) ? void 0 : n.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (r = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: l }),
                                t(!0),
                                (s = r),
                                o.forEach((e) => {
                                    e(s);
                                }),
                                (o = []));
                        });
                    return { isLoaded: e, init: a, render: s, create: l, reload: d, destroy: c, initialize: u };
                };
        },
        50227: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        50943: (e) => {
            e.exports = {
                root: 'ProductWithoutRecommendationNotificationInitializer_root__YcanW',
                cover: 'ProductWithoutRecommendationNotificationInitializer_cover__Gr2nS',
                logo: 'ProductWithoutRecommendationNotificationInitializer_logo__xpJYk',
            };
        },
        51231: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            var i = a(5120),
                n = a(31510);
            let r = (e) => {
                let t = (0, n.e)(e);
                return (0, i.wg)(t);
            };
        },
        51976: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => T });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                o = a(29993),
                s = a(79070),
                l = a(12670),
                d = a(72288),
                c = a(52726),
                u = a(63955),
                _ = a(16704),
                m = a(19376),
                p = a(65724),
                v = a(2058),
                h = a(17392),
                b = a(96817),
                x = a(52300),
                f = a(14315),
                g = a(68039),
                A = a(16381),
                N = a.n(A);
            let C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            withShuffle: a,
                            shuffle: n,
                            canMoveBackward: r,
                            canMoveForward: s,
                            onClickNext: l,
                            onClickPrev: d,
                            withRepeat: c,
                            repeatMode: u,
                            playButton: _,
                            isDisabledShuffle: m,
                            isDisabledRepeat: A,
                            onRepeatClick: C,
                            onShuffleClick: y,
                        } = e,
                        { formatMessage: T } = (0, v.A)(),
                        E = (0, o.c)(() => {
                            l();
                        }),
                        S = (0, o.c)(() => {
                            d();
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, p.$)(N().root, t),
                        children: [
                            a &&
                                (0, i.jsx)('div', {
                                    className: N().buttonContainer,
                                    children: (0, i.jsx)(g.u, {
                                        className: N().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        iconSize: 'xs',
                                        isDisabled: m,
                                        shuffle: n,
                                        onClick: y,
                                        'data-test-id': h.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: N().sonataButtons,
                                children: [
                                    (0, i.jsx)(b.$, {
                                        className: N().sonataButton,
                                        variant: 'text',
                                        size: 'm',
                                        radius: 'round',
                                        disabled: !r,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.previous-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'previous', size: 'xxs' }),
                                        onClick: S,
                                        'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                    _,
                                    (0, i.jsx)(b.$, {
                                        className: N().sonataButton,
                                        radius: 'round',
                                        size: 'm',
                                        variant: 'text',
                                        disabled: !s,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': T({ id: 'player-actions.next-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'next', size: 'xxs' }),
                                        onClick: E,
                                        'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                                ],
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: N().buttonContainer,
                                    children: (0, i.jsx)(f.s, {
                                        className: N().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        isDisabled: A,
                                        iconSize: 'xs',
                                        repeatMode: u,
                                        onClick: C,
                                    }),
                                }),
                        ],
                    });
                }),
                y = { mainAxis: 44 },
                T = (0, n.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: n,
                            canMoveForward: p,
                            canMoveBackward: v,
                            canShuffle: h,
                            shuffle: b,
                            onClickNext: x,
                            onClickPrev: f,
                            onClickPlayPause: g,
                            canChangeRepeatMode: A,
                            className: T,
                            withShuffle: E,
                            withRepeat: S,
                            onRepeatClick: B,
                            onShuffleClick: I,
                        } = e,
                        { advert: w, freePlayerAccess: j, freeAccess: P, user: k, paymentWidgetModal: L } = (0, d.g)();
                    (0, m.e)();
                    let R = (0, r.useCallback)(
                            () =>
                                (0, i.jsx)(_.D, {
                                    className: N().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: a,
                                    iconClassName: N().playButtonIcon,
                                    onClick: g,
                                }),
                            [a, g],
                        ),
                        O = (0, o.c)((e) => {
                            e || j.hideRestrictionModal();
                        }),
                        D = (0, s.L)(() => {
                            let e = P.isFreeWebUser && k.isAuthorized && !P.limitedFreePlayback ? 'vibe' : 'fullTracks';
                            return j.shownRestrictionModal === l.h.PlayerAuthorization
                                ? (0, i.jsx)(u.Z, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: R })
                                : L.modal.isOpened || j.shownRestrictionModal !== l.h.PlayerSubscription
                                  ? R()
                                  : (0, i.jsx)(c.S, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: R });
                        });
                    return (0, i.jsx)(C, {
                        isDisabledRepeat: !A || t,
                        isDisabledShuffle: !h || t,
                        withShuffle: ((t || h) && !(null == w ? void 0 : w.isAdvertShown)) || !!E,
                        shuffle: b,
                        canMoveBackward: v,
                        canMoveForward: p,
                        onClickNext: x,
                        onClickPrev: f,
                        withRepeat: ((t || A) && !(null == w ? void 0 : w.isAdvertShown)) || !!S,
                        repeatMode: n,
                        className: T,
                        playButton: D,
                        onRepeatClick: B,
                        onShuffleClick: I,
                    });
                });
        },
        52032: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        52150: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(53548).createContext)({ pageAlbumId: void 0 });
        },
        52455: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => d });
            var i,
                n = a(53548),
                r = {
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
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (r[e](a, a.exports, s), a.exports);
            }
            var l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useResize = void 0));
                let e = s(810),
                    t = s(1848);
                l.useResize = (a, i) => {
                    (0, e.useEffect)(() => {
                        let e = (0, t.getElementFromRefOrElement)(i);
                        if (null === e) return;
                        let n = null != e ? e : document.documentElement,
                            r = new ResizeObserver(a);
                        return (r.observe(n), () => r.disconnect());
                    }, [i, a]);
                };
            })(),
                l.__esModule);
            var d = l.useResize;
        },
        52456: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                n = a(14022),
                r = a(53548),
                o = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (o[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useDebouncedToggle = void 0));
                let e = l(352),
                    t = l(810);
                d.useDebouncedToggle = (a) => {
                    let { delay: i, initialState: n, throttleTimeout: r } = a,
                        o = (0, t.useRef)(null),
                        [s, l] = (0, t.useState)(!!n),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (l(!n),
                                        o.current && window.clearTimeout(o.current),
                                        (o.current = window.setTimeout(() => {
                                            l(!!n);
                                        }, i)));
                                }, r),
                            [i, n, r],
                        ),
                        c = (0, t.useCallback)(() => {
                            (l(!!n), o.current && window.clearTimeout(o.current));
                        }, [n]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                o.current && window.clearTimeout(o.current);
                            },
                            [],
                        ),
                        { state: s, handleDebouncedToggle: d, reset: c }
                    );
                };
            })(),
                d.__esModule);
            var c = d.useDebouncedToggle;
        },
        52620: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        53158: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => x });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                o = a(29993),
                s = a(631),
                l = a(38147),
                d = a(72288),
                c = a(69704),
                u = a(78101),
                _ = a(8655);
            let m = (e, t) => (t === _.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                p = (e) => e.toString(16).padStart(2, '0');
            var v = a(82712),
                h = a(92847);
            let b = (e) =>
                    (0, v.m)(e) &&
                    (e.type === h.k.PLAYLIST_GRADIENT || e.type === h.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                x = (0, n.PA)((e) => {
                    let { children: t, containerId: a, expectedType: n } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: _, brandedEntityAxeBanner: v },
                            },
                        } = (0, d.g)(),
                        { theme: x } = (0, c.W)(),
                        f = (0, r.useContext)(u.G),
                        [g, A] = (0, r.useState)(null),
                        N = (0, o.c)((e) => {
                            (0, s.f)(e, a, b) && e.data.type === n && A(e.data);
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('message', N),
                            () => {
                                window.removeEventListener('message', N);
                            }
                        ),
                        [N],
                    );
                    let C = n === h.k.PLAYLIST_GRADIENT && _.isVisible && _.type !== l.h.EMPTY,
                        y = n === h.k.AXE_GRADIENT && v.isVisible && v.type !== l.h.EMPTY,
                        T = C || y,
                        E = (0, r.useMemo)(() => {
                            if ((null == g ? void 0 : g.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    v.isVisible && v.type !== l.h.EMPTY && x
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  n = parseInt(a.substring(2, 4), 16),
                                                  r = parseInt(a.substring(4, 6), 16),
                                                  o = m(i, t),
                                                  s = m(n, t),
                                                  l = m(r, t);
                                              return '#'.concat(p(o)).concat(p(s)).concat(p(l));
                                          })(g.payload.color, x)
                                        : g.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === g.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': g.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': g.payload.button.textColor,
                                  };
                        }, [null == g ? void 0 : g.payload.color, null == g ? void 0 : g.payload.button, x, v.isVisible, v.type]),
                        S = (0, r.useMemo)(() => (T && null !== g ? { data: { type: g.type, style: E, button: g.payload.button }, isEnabled: T } : f), [g, E, T, f]);
                    return (0, i.jsx)(u.G.Provider, { value: S, children: t });
                });
        },
        54486: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var i,
                n = a(14022),
                r = a(53548),
                o = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            n = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                o = (0, n.useRef)(null),
                                [s, l] = (0, n.useState)(!!a),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (l(!a),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t)));
                                        }, r),
                                    [t, a, r],
                                ),
                                c = (0, n.useCallback)(() => {
                                    (l(!!a), o.current && window.clearTimeout(o.current));
                                }, [a]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
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
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (o[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0));
                let e = l(810),
                    t = l(1848),
                    a = l(8612);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: o } = i,
                        { state: s, handleDebouncedToggle: l } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            (r && l(), null == n || n());
                        }, [r, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(o);
                            if (null === e) return;
                            let a = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (a.addEventListener('scroll', d, i), () => a.removeEventListener('scroll', d, i));
                        }, [o, d]),
                        s
                    );
                };
            })(),
                d.__esModule);
            var c = d.useScroll;
        },
        55211: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(88800),
                n = a(65724),
                r = a(21284),
                o = a(79070),
                s = a(39267),
                l = a(85925),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: b,
                        fallbackIconSize: x,
                    } = e,
                    f = (0, o.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(s.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: x,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: b,
                });
            };
        },
        55625: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        56425: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s, r: () => l });
            var i = a(71774),
                n = a(5120),
                r = a(28870);
            let o = n.gK.model('CustomPlayerThumbItem', { id: n.gK.enumeration(Object.values(i.T)), name: n.gK.string, thumb: r.K }),
                s = {
                    [i.T.DUCK]: () =>
                        a
                            .e(8962)
                            .then(a.t.bind(a, 68962, 17))
                            .then((e) => e.default),
                    [i.T.CAR]: () =>
                        a
                            .e(8765)
                            .then(a.t.bind(a, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [i.T.DUCK, o.create({ id: i.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: i.T.DUCK, width: 50, height: 50 } })],
                        [i.T.CAR, o.create({ id: i.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: i.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        56651: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                o = a(2058),
                s = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(25883);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                    p(!0);
                    let o = await e.togglePin();
                    (p(!1),
                        o
                            ? a((0, i.jsx)(u.l, { album: r }), { containerId: s.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, _, a, m, t.isAuthorized]);
            };
        },
        58360: (e) => {
            e.exports = {
                root: 'DeeplinkAndOnelinkContainer_root__69SNc',
                button: 'DeeplinkAndOnelinkContainer_button__QzMwG',
                buttonTitle: 'DeeplinkAndOnelinkContainer_buttonTitle__KmdNV',
                buttonIcon: 'DeeplinkAndOnelinkContainer_buttonIcon__U6JJv',
                musicIcon: 'DeeplinkAndOnelinkContainer_musicIcon__jIu2m',
                onelinkIcon: 'DeeplinkAndOnelinkContainer_onelinkIcon__ELZLH',
            };
        },
        60757: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var i = a(58217);
            let n = (e) => {
                let { album: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        61166: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, l: () => i });
            let i = 'yandex_rtb',
                n = 256152;
        },
        63826: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        64014: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => m });
            var i = a(88800),
                n = a(53548),
                r = a(2058),
                o = a(17392),
                s = a(29993),
                l = a(96817),
                d = a(52300),
                c = a(9630),
                u = a(39185);
            let _ = (e) => {
                    var t, a, _;
                    let {
                            className: m,
                            variant: p = 'text',
                            iconSize: v,
                            onClick: h,
                            iconClassName: b,
                            withRipple: x = !1,
                            size: f = 's',
                            forwardRef: g,
                            children: A,
                            color: N,
                            disabled: C = !1,
                            isIconCentered: y = !1,
                        } = e,
                        T = (0, c.e)(),
                        { formatMessage: E } = (0, r.A)(),
                        S = null != (t = null == T ? void 0 : T.state.playerState.speed.value) ? t : 1,
                        B = null != (a = u.f_[S]) ? a : 0,
                        [I, w] = (0, n.useState)(B),
                        j = null != (_ = u.pp[I]) ? _ : 1,
                        P = (0, s.c)(() => {
                            var e;
                            let t = (I + 1) % u.pp.length;
                            (w(t), null == T || T.setSpeed(Number(null != (e = u.pp[t]) ? e : 1)), null == h || h());
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let e =
                                null == T
                                    ? void 0
                                    : T.state.playerState.speed.onChange(() => {
                                          var e;
                                          let t = T.state.playerState.speed.value;
                                          w(null != (e = u.f_[t]) ? e : 0);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [T]),
                        (0, i.jsx)(l.$, {
                            className: m,
                            color: N,
                            withRipple: x,
                            variant: p,
                            size: f,
                            radius: 'xxxl',
                            'aria-label': E({ id: 'interface-actions.speed' }, { speed: j }),
                            onClick: P,
                            icon: (0, i.jsx)(d.I, { size: v, className: b, variant: (0, u.CU)(j, y) }),
                            ref: g,
                            disabled: C,
                            'data-test-id': o.S7.SPEED_BUTTON,
                            children: A,
                        })
                    );
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        64247: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => o });
            var i = a(88800),
                n = a(15077),
                r = a(33719);
            let o = (e) => {
                let { artist: t, closeToast: a } = e;
                return (0, i.jsx)(r.k, {
                    closeToast: a,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        65453: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => d });
            var i,
                n = a(53548),
                r = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    7354: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    3616: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let n = a(4377),
                            r = a(810),
                            o = a(5881),
                            s = i(a(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, n.jsx)('a', {}),
                                        block: a,
                                        target: i,
                                        rel: l,
                                        href: d,
                                        forwardRef: c,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: p,
                                        children: v,
                                        textClassName: h = '',
                                        containerClassName: b,
                                        ...x
                                    } = e,
                                    f = (0, r.useId)(),
                                    g = !r.Children.count(v),
                                    A = 'left' === u,
                                    N = null;
                                if (void 0 !== m) {
                                    var C;
                                    N = (0, r.cloneElement)(m, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !g && u },
                                            null == (C = m.props) ? void 0 : C.className,
                                        ),
                                        key: f,
                                    });
                                }
                                let y = (0, r.useMemo)(
                                    () =>
                                        m
                                            ? (0, n.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, b),
                                                  children: [A && N, !g && (0, n.jsx)('span', { className: h, children: v }), !A && N],
                                              })
                                            : v,
                                    [v, b, m, A, g, N, h],
                                );
                                return (0, r.cloneElement)(
                                    t,
                                    {
                                        ref: c,
                                        target: i,
                                        rel: '_blank' === i && void 0 === l ? 'noopener noreferrer' : l,
                                        href: d,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: a, [s.default.flexIcon]: m && _, [s.default.iconOnly]: m && g }, p),
                                        ...x,
                                        ...t.props,
                                    },
                                    y,
                                );
                            };
                        t.Link = (0, r.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (r[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = s(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var d = l.r;
            l.X;
        },
        65523: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(4086),
                n = a(41928),
                r = a(44084);
            let o = new WeakMap(),
                s = () =>
                    ((e) => {
                        if (e instanceof r.r) return e;
                        let t = o.get(e);
                        if (t) return t;
                        let a = {
                            log: (t, a) => e.info(t, a),
                            trace: (t, a) => e.trace(t, a),
                            debug: (t, a) => e.debug(t, a),
                            info: (t, a) => e.info(t, a),
                            warn: (t, a) => e.warn(t, a),
                            error: (t, a) => e.error(t, a),
                            fatal: (t, a) => e.fatal(t, a),
                            child: (t) => e.child(t),
                        };
                        return (o.set(e, a), a);
                    })((0, n.N)().get(i.Zf));
        },
        66241: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        66264: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => g });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(88969),
                l = a(17392),
                d = a(68254),
                c = a(52300),
                u = a(29504),
                _ = a(7123),
                m = a(39079),
                p = a(9630),
                v = a(72288),
                h = a(36303),
                b = a(91106),
                x = a(92152),
                f = a.n(x);
            let g = (0, r.PA)((e) => {
                var t, a, r, x, g, A, N, C, y;
                let { className: T, id: E, albumId: S, streamProgress: B, durationMs: I, playContextParams: w, withTimeLeftText: j = !0, isFinishedLabelHidden: P } = e,
                    k = (0, p.e)(),
                    { sonataState: L, album: R } = (0, v.g)(),
                    O = Math.floor(I / 1e3),
                    [D, M] = (0, o.useState)(!1),
                    U = (0, b.$)(),
                    { isPlaying: F, isCurrent: z } = (0, m.D)({ playContextParams: w, entityId: S ? ''.concat(E, ':').concat(S) : E });
                ((0, o.useEffect)(() => {
                    if (!z) return void M(!1);
                    let e =
                        null == k
                            ? void 0
                            : k.state.playerState.status.onChange(() => {
                                  (null == k ? void 0 : k.state.playerState.status.value) === _.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [k, B, z, F]),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == R || null == (e = R.meta) ? void 0 : e.listeningFinished)
                            ? (B.updateEndPositionSec(0), B.updateEverFinished(!0))
                            : (null == R ? void 0 : R.allTracksUnfinished) && B.updateEverFinished(!1);
                    }, [B, null == R ? void 0 : R.allTracksUnfinished, null == R || null == (t = R.meta) ? void 0 : t.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        (z &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            B &&
                            L.entityMeta.streamProgress.hasEverFinished !== B.hasEverFinished &&
                            B.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            O - ((null == B ? void 0 : B.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == B || B.updateEverFinished(!0)));
                    }, [
                        z,
                        null == L || null == (a = L.entityMeta) ? void 0 : a.streamProgress,
                        null == L || null == (x = L.entityMeta) || null == (r = x.streamProgress) ? void 0 : r.hasEverFinished,
                        B,
                        B.hasEverFinished,
                        B.endPositionSec,
                        O,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!z) return;
                        let e =
                            null == k
                                ? void 0
                                : k.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = k.state.playerState.progress.value,
                                          a = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && B.updateEndPositionSec(t.position),
                                          z &&
                                              parseInt(''.concat(null == a ? void 0 : a.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == a || a.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [k, B, z, F, D, E, null == L ? void 0 : L.entityMeta]));
                let W = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || B.endPositionSec,
                    K = (0, h.m)(null != W ? W : 0, O),
                    V = (0, o.useMemo)(() => {
                        var e, t, a;
                        if (
                            ((z && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == B ? void 0 : B.hasEverFinished) ||
                                (null == R || null == (a = R.meta) ? void 0 : a.listeningFinished)) &&
                            !P
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !j }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(s.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: f().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!W || 0 === W) return;
                        let r = O - W,
                            o = U(r);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !j }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                r > 1 || P
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': K,
                                          'aria-busy': z && F,
                                          value: W,
                                          max: O,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: f().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        O,
                        null == B ? void 0 : B.hasEverFinished,
                        j,
                        U,
                        z,
                        F,
                        null == L || null == (C = L.entityMeta) || null == (N = C.streamProgress) ? void 0 : N.hasEverFinished,
                        null == R || null == (y = R.meta) ? void 0 : y.listeningFinished,
                        P,
                        W,
                        K,
                    ]);
                return (0, i.jsx)('div', { className: (0, n.$)(f().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: V });
            });
        },
        66294: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        68039: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(88800),
                n = a(65724),
                r = a(2058),
                o = a(29993),
                s = a(96817),
                l = a(52300),
                d = a(17392),
                c = a(37013),
                u = a.n(c);
            let _ = (e) => {
                let { isDisabled: t, shuffle: a, className: c, size: _ = 'xxxs', variant: m = 'default', iconSize: p = 'xs', color: v, onClick: h } = e,
                    { formatMessage: b } = (0, r.A)(),
                    x = (0, o.c)((e) => {
                        (null == h || h(), e.stopPropagation());
                    });
                return (0, i.jsx)(s.$, {
                    className: c,
                    radius: 'round',
                    size: _,
                    variant: m,
                    color: v,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': b({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, i.jsx)(l.I, {
                        variant: 'shuffle',
                        size: p,
                        className: (0, n.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: x,
                    'data-test-id': !a || t ? d.Kq.sonata.SHUFFLE_BUTTON : d.Kq.sonata.SHUFFLE_BUTTON_ON,
                });
            };
        },
        69547: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        69704: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => n, W: () => r });
            var i = a(53548);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71774: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        72997: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        73856: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
                button: 'BarBelow_button__4l6dO',
                advDisclaimer: 'BarBelow_advDisclaimer__ZbpQU',
                advDisclaimerTrigger: 'BarBelow_advDisclaimerTrigger___O0bh',
                advDisclaimerContent: 'BarBelow_advDisclaimerContent__lKKit',
                advDisclaimerInner: 'BarBelow_advDisclaimerInner__1CyNr',
                advDisclaimerText: 'BarBelow_advDisclaimerText__wJgZZ',
                root_productWithoutRecommendation: 'BarBelow_root_productWithoutRecommendation__aOkOm',
                collectionLink: 'BarBelow_collectionLink__qXt9B',
            };
        },
        74973: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(53548),
                n = a(78101);
            let r = () => (0, i.useContext)(n.G);
        },
        75641: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        77356: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77455: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => _ });
            var i = a(88800),
                n = a(96706),
                r = a(53548),
                o = a(2058),
                s = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(64247);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: a } = (0, l.l)(),
                    { formatMessage: _ } = (0, o.A)(),
                    [m, p] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void a((0, i.jsx)(c.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let o = await e.togglePin();
                    (p(!1),
                        o
                            ? a((0, i.jsx)(u.l, { artist: r }), { containerId: s.u.INFO })
                            : a((0, i.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, t.isAuthorized, m, _, a]);
            };
        },
        78101: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(53548).createContext)({ data: null, isEnabled: !1 });
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i,
                n = a(53548),
                r = {
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useToggle = void 0));
                let e = (function e(t) {
                    var a = o[t];
                    if (void 0 !== a) return a.exports;
                    var i = (o[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                s.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        o = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: n, setState: i, toggleTrue: r, toggleFalse: o };
                };
            })(),
                s.__esModule);
            var l = s.useToggle;
        },
        78999: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        79272: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i = a(58390),
                n = a(28166),
                r = a(29993),
                o = a(79070),
                s = a(88626),
                l = a(67174);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: a } = e,
                        c = (0, i.useSearchParams)(),
                        u = (0, o.L)(() => {
                            var e;
                            let a = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === s.j.IOS
                                ? a >= 16
                                : (null == t ? void 0 : t.OSFamily) === s.j.ANDROID
                                  ? a >= 7
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, r.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      r = e.get('channel'),
                                      o = e.get('tags'),
                                      s = { campaign: 'yamusicweb', channel: null != r ? r : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((a && (s.login = a), i)) {
                                      let e = ''.concat(n.ov).concat(i);
                                      ((s.deep_link_value = e), (s.af_dp = e), (s.deeplink_url = i));
                                  }
                                  o && (s.pid = o);
                                  let c = Object.keys(s).reduce((e, t) => {
                                          let a = s[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, l.u)('/', { query: c, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(c, e, a)
                            : ((e) => {
                                  if (e === s.j.IOS) {
                                      let { href: e } = (0, l.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === s.j.ANDROID) {
                                      let { href: e } = (0, l.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, l.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        79275: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        80527: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => o, E9: () => d, KZ: () => l, LB: () => s, RA: () => n, kz: () => r, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                n = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                o = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                s = 'adfox_173998931315812570',
                l = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        81132: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        82640: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
                multivibeContainer: 'PinItem_multivibeContainer__M3tj_',
                multivibeCover: 'PinItem_multivibeCover__QykrX',
                multivibeAvatar: 'PinItem_multivibeAvatar__2WWq4',
                multivibeControl: 'PinItem_multivibeControl__uw80u',
            };
        },
        82712: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        83295: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(87819),
                n = {
                    1964: (e) => {
                        e.exports = i;
                    },
                },
                r = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useMergeRefs = void 0));
                var e = (function e(t) {
                    var a = r[t];
                    if (void 0 !== a) return a.exports;
                    var i = (r[t] = { exports: {} });
                    return (n[t](i, i.exports, e), i.exports);
                })(1964);
                Object.defineProperty(o, 'useMergeRefs', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                o.__esModule);
            var s = o.useMergeRefs;
        },
        85737: (e) => {
            e.exports = {
                timecodeGroup: 'ProgressTimecode_timecodeGroup__UcY0H',
                timecodeGroupCurrent: 'ProgressTimecode_timecodeGroupCurrent__qINpH',
                important: 'ProgressTimecode_important__t2lRe',
                timecodeTooltip: 'ProgressTimecode_timecodeTooltip__UIhuB',
            };
        },
        85925: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        86535: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(64284),
                n = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        86961: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        87724: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        87762: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => r });
            var i = a(53548),
                n = a(52150);
            function r() {
                return (0, i.useContext)(n.H);
            }
        },
        88626: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        89057: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        90224: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => v });
            var i = a(88800),
                n = a(65724),
                r = a(84961),
                o = a(53548),
                s = a(2058),
                l = a(17392),
                d = a(52300),
                c = a(62837),
                u = a(72288),
                _ = a(94398),
                m = a(17332),
                p = a.n(m);
            let v = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: r, containerClassName: m, variant: v, size: h = 'xxxs', ...b } = e,
                    { formatMessage: x } = (0, s.A)(),
                    {
                        settings: { isMobile: f },
                    } = (0, u.g)(),
                    [g, A] = (0, o.useState)(null);
                (0, o.useEffect)(() => {
                    a && a().then(A);
                }, [a, r]);
                let {
                    iconVariant: N,
                    descriptionText: C,
                    isTooltipEnabled: y,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: a, descriptionTexts: i, isMobile: n } = e,
                        r = (null == i ? void 0 : i.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(a),
                        descriptionText: r,
                        isTooltipEnabled: !!(null == i ? void 0 : i.length) && !n,
                        ariaLabel: r.length > 0 ? r : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: v, descriptionTexts: g, isMobile: f }, x);
                return (0, i.jsx)(_.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: y,
                    children: (0, i.jsx)('span', {
                        className: m,
                        children: (0, i.jsx)(d.I, {
                            className: (0, n.$)(p().explicitMark, t),
                            'aria-label': T,
                            variant: N,
                            size: h,
                            ...b,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        91106: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(53548),
                n = a(2058);
            let r = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            n = function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), a);
                        if (i < 60) return n(i, a);
                        let r = Math.floor(i / 60),
                            o = i % 60,
                            s = (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return a ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(r, a);
                        return o > 0 ? ''.concat(s, ' ').concat(n(o)) : s;
                    },
                    [e],
                );
            };
        },
        91129: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        91292: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(88800),
                n = a(53548),
                r = a(12389),
                o = a.n(r),
                s = a(29993),
                l = a(65453),
                d = a(46079),
                c = a(67174);
            let u = (e) => {
                    let [t, a] = (0, n.useState)(!1),
                        r = (0, s.c)(() => {
                            a(!0);
                        });
                    return (0, i.jsx)(o(), { prefetch: t, ...e, onMouseEnter: r });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: a, component: r, ...s } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, n.useContext)(d.j),
                        { href: p, target: v, rel: h } = (0, c.u)(null != a ? a : ''),
                        b = (0, n.isValidElement)(r)
                            ? r
                            : (function (e, t, a) {
                                  return e ? (t ? (0, i.jsx)(o(), { prefetch: !1 }) : a ? (0, i.jsx)(u, { href: e }) : (0, i.jsx)(o(), {})) : (0, i.jsx)('a', {});
                              })(a, _, m);
                    return (0, i.jsx)(l.N, { ref: t, component: b, href: a ? p : void 0, target: v, rel: h, ...s });
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { ...e, forwardedRef: t }));
        },
        91641: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var i = a(88800),
                n = a(65724),
                r = a(53548),
                o = a(17392),
                s = a(29504),
                l = a(6259),
                d = a.n(l);
            let c = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...c } = e,
                        u = 'start' === a ? o.Kq.changeTimecode.TIMECODE_TIME_START : o.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(s.HL, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(d().root, d()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...c,
                        'data-test-id': u,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(58217);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92152: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        92644: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(35412);
            let n = (e) => ({
                '--player-average-color-background': ((e) => {
                    if (!e) return;
                    let { h: t, s: a } = (0, i.g8)(e);
                    return 'hsl('.concat(t, ', ').concat(a, '%, 20%)');
                })(null == e ? void 0 : e.averageColor),
            });
        },
        92847: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        92867: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => d });
            var i = a(53548),
                n = a.t(i, 2),
                r = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useIsomorphicEffect = void 0));
                let e = (function e(t) {
                    var a = o[t];
                    if (void 0 !== a) return a.exports;
                    var i = (o[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                s.useIsomorphicEffect = 'undefined' != typeof document ? e.useLayoutEffect : e.useEffect;
            })(),
                s.__esModule);
            var l = s.useIsomorphicEffect;
            let d = (e) => {
                let [t, a] = (0, i.useState)(!1);
                return (
                    l(() => {
                        let t = window.matchMedia(e),
                            i = () => a(t.matches);
                        return (
                            i(),
                            t.addEventListener('change', i),
                            () => {
                                t.removeEventListener('change', i);
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
        92966: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => v });
            var i = a(88800),
                n = a(2058),
                r = a(29993),
                o = a(87762),
                s = a(29595),
                l = a(74965),
                d = a(72288),
                c = a(66943),
                u = a(96706),
                _ = a(53548),
                m = a(79390),
                p = a(96295);
            let v = (e) => {
                let {
                        user: t,
                        paywall: a,
                        albumCPA: { isPlusCPAEnabled: v },
                    } = (0, d.g)(),
                    { formatMessage: h } = (0, n.A)(),
                    { notify: b } = (0, l.l)(),
                    x = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [a, o] = (0, _.useState)(!1),
                            { formatMessage: v } = (0, n.A)();
                        return (0, r.c)(async (n) => {
                            let { album: r, withLink: l = !0, withNotification: d = !0 } = n;
                            if (a) return;
                            let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                            o(!0);
                            let h = await r.toggleLike();
                            if ((o(!1), !d)) return;
                            let b = t.modal.isOpened;
                            h === m.f.OK
                                ? e((0, i.jsx)(p.T, { withLink: l, album: _ }), { containerId: b ? s.u.FULLSCREEN_INFO : s.u.INFO })
                                : e((0, i.jsx)(c.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: b ? s.u.FULLSCREEN_ERROR : s.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: f } = (0, o.T)();
                return (0, r.c)(async () => {
                    if (e)
                        return v({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void a.openModal()
                            : t.isAuthorized
                              ? x({ album: e })
                              : void b((0, i.jsx)(c.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                });
            };
        },
        93512: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(51231);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => r });
            var i = a(53548);
            let n = (0, i.createContext)(null),
                r = () => (0, i.useContext)(n);
        },
        94398: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(88800),
                n = a(17392),
                r = a(17610),
                o = a(29504),
                s = a(37438),
                l = a.n(s);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: a, title: s, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        s && (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, i.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95547: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95850: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(88800),
                n = a(84961),
                r = a(53548),
                o = a(58390),
                s = a(38147),
                l = a(49518),
                d = a(65523),
                c = a(72288),
                u = a(8655),
                _ = a(69704);
            let m = (0, n.PA)((e) => {
                let { className: t, ownerId: a, containerId: n, params: m, onLoad: p, onRender: v, onNoAds: h, onError: b } = e,
                    { user: x } = (0, c.g)(),
                    f = (0, o.usePathname)(),
                    g = (0, o.useSearchParams)(),
                    { create: A, destroy: N, initialize: C } = (0, l.s)(),
                    { theme: y } = (0, _.W)(),
                    T = (0, d.U)(),
                    E = (0, r.useRef)(!0),
                    S = { ...m };
                return (
                    (S.puid1 = x.advertRole),
                    (0, r.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: n,
                            params: S,
                            insertionCodeParams: { darkTheme: y === u.S.Dark, additionalClasses: y ? [y] : [] },
                            onClose: () => {
                                T.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((T.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == p || p(s.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == p || p(s.h.DIRECT);
                                    return;
                                }
                                null == p || p(s.h.CREATIVE);
                            },
                            onRender: () => {
                                (T.log('[AdvertBanner] Render'), null == v || v());
                            },
                            onStub: () => {
                                (T.log('[AdvertBanner] Stub'), null == h || h());
                            },
                            onError: (e) => {
                                (T.log('[AdvertBanner] Error', { error: e }), null == b || b());
                            },
                        });
                    }, []),
                    (0, r.useEffect)(() => {
                        if (E.current) {
                            E.current = !1;
                            return;
                        }
                        (T.log('[AdvertBanner] Destroy'), N(n), T.log('[AdvertBanner] Initialize'), C(n));
                    }, [f, g, n, N, C, T]),
                    (0, i.jsx)('div', { id: n, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        96295: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => s });
            var i = a(88800),
                n = a(84961),
                r = a(42729),
                o = a(5048);
            let s = (0, n.PA)((e) => {
                let { album: t, closeToast: a, withLink: n } = e,
                    s = (0, o.b)(t.type);
                return (0, i.jsx)(r.O, {
                    closeToast: a,
                    entityVariant: s,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        96856: (e) => {
            e.exports = {
                root: 'UnstableMusicScreen_root__YblW2',
                content: 'UnstableMusicScreen_content__VnJFc',
                content_shrink: 'UnstableMusicScreen_content_shrink__0bG5x',
                navigation: 'UnstableMusicScreen_navigation___dOLr',
                navigation_desktop: 'UnstableMusicScreen_navigation_desktop__mM97H',
                image: 'UnstableMusicScreen_image__85q4P',
                message: 'UnstableMusicScreen_message__Z0HNs',
                title: 'UnstableMusicScreen_title__EdP6Y',
                text: 'UnstableMusicScreen_text__Bc7HH',
                button: 'UnstableMusicScreen_button__UQBy2',
                buttonText: 'UnstableMusicScreen_buttonText__kM_WM',
            };
        },
        97361: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            var i = a(2058),
                n = a(29831);
            let r = (e) => {
                let { formatMessage: t } = (0, i.A)();
                return (0, n.j)(e, t);
            };
        },
        97572: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        98675: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
    },
]);
