(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9755],
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
        7628: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => p });
            var s = n(88800),
                r = n(88969),
                i = n(58390),
                o = n(17392),
                a = n(29993),
                l = n(96817),
                c = n(29504),
                d = n(99890),
                u = n(4086),
                _ = n(41928);
            let p = (e) => {
                let { size: t = 'm', variant: n = 'default', color: p = 'primary', withRipple: m = !0, buttonText: h, isBlock: g, key: x, className: v } = e,
                    b = (0, i.useRouter)(),
                    j = (0, _.N)().get(u.QG),
                    S = (0, a.c)(() => {
                        j.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(j.authorizationUrl));
                    });
                return (0, s.jsx)(
                    l.$,
                    {
                        onClick: S,
                        className: v,
                        isBlock: g,
                        color: p,
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
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
        9492: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => m });
            var s = n(88800),
                r = n(65724),
                i = n(53548),
                o = n(2058),
                a = n(88969),
                l = n(96817),
                c = n(52300),
                d = n(29504),
                u = n(59304),
                _ = n(4044),
                p = n.n(_);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: n } = e,
                    _ = (0, i.useRef)(null),
                    { formatMessage: m } = (0, o.A)();
                (0, i.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, i.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(l.$, {
                                    ref: _,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(p().root, p().important), message: h, closeToast: n });
            };
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
        17017: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        19840: (e, t, n) => {
            'use strict';
            (n.d(t, { G: () => r }), n(46606));
            var s = n(91136);
            class r extends s.m {
                name = 'HttpErrorException';
                statusCode;
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        32596: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => P });
            var s = n(88800),
                r = n(65724),
                i = n(84961),
                o = n(53548),
                a = n(2058),
                l = n(88969);
            n(30282);
            var c = n(96817),
                d = n(52300),
                u = n(29504),
                _ = n(87999),
                p = n(47149),
                m = n(84423),
                h = n(89846),
                g = n(64543),
                x = n(63582);
            let v = (0, x.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, m.s)()) ? void 0 : e.evgenInstance,
                        { hash: n } = (0, h.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, o.useCallback)(() => {
                            if (!t || !n || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: _.ActionType.Refresh,
                                userInteractionType: _.UserInteractionType.Tap,
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                hash: n,
                                pageId: s.pageId,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, p.bv)(t, e);
                        }, [t, n, null == s ? void 0 : s.pageId]),
                    };
                }),
                b = (0, x.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let n = null == (t = (0, m.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, h.g)(),
                        { screen: r } = (0, g.j)();
                    (0, o.useEffect)(() => {
                        if (!n || !s || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: _.EntityTypes.Error,
                            entityId: _.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: r.pageId,
                            pageStyle: _.PageStyles.Fullscreen,
                            pagePlacement: _.PagePlacements.Fullscreen,
                            mainObjectType: _.DomainObjectType.NonApplicable,
                            mainObjectId: _.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, p.z5)(n, t);
                    }, [n, e, s, null == r ? void 0 : r.pageId]);
                });
            var j = n(44230),
                S = n(4370),
                N = n(72288),
                E = n(97956),
                f = n(56248),
                y = n(90688),
                T = n(78940);
            let O = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var k = n(96856),
                C = n.n(k);
            let I = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { slam: o } = (0, N.g)(),
                    { contentRef: a } = (0, j.g)(),
                    d = (0, T.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(C().root, t),
                    children: [
                        n &&
                            (0, s.jsx)(f.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(C().navigation, { [C().navigation_desktop]: !a }),
                                withForwardControl: !1,
                                onBackwardClick: i,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(C().content, { [C().content_shrink]: !n }),
                            children: [
                                (0, s.jsx)(y._V, { className: C().image, src: O.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: C().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: C().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var w = n(9184),
                A = n.n(w);
            let P = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: n = !0, onBack: i } = e,
                    { formatMessage: _ } = (0, a.A)(),
                    p = (0, o.useContext)(N.P),
                    m = null == p ? void 0 : p.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    h = _(m ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(h);
                let { sendRefreshEvent: g } = v(),
                    x = (0, o.useCallback)(() => {
                        (g(), (window.location.href = S.Z.main.href));
                    }, [g]),
                    { contentRef: y } = (0, j.g)();
                return m
                    ? (0, s.jsx)(I, { className: t, withBackwardControl: n, onBack: i })
                    : (0, s.jsxs)('div', {
                          className: (0, r.$)(A().root, t),
                          children: [
                              n &&
                                  (0, s.jsx)(f.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !y }),
                                      withForwardControl: !1,
                                      onBackwardClick: i,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, r.$)(A().content, { [A().content_shrink]: !n }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, r.$)(A().title, A().important), variant: 'h3', size: 'xs', children: h }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, r.$)(A().text, A().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: x,
                                          className: A().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        45654: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => S });
            var s = n(88800),
                r = n(84961),
                i = n(88969),
                o = n(96817),
                a = n(52300),
                l = n(66719),
                c = n(29504),
                d = n(69630),
                u = n(46422),
                _ = n(44230),
                p = n(4370),
                m = n(78940),
                h = n(72288),
                g = n(86790),
                x = n(60266),
                v = n(93317),
                b = n(92270),
                j = n.n(b);
            let S = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: n },
                    } = (0, h.g)(),
                    { contentScrollRef: r, setContentScrollRef: b } = (0, _.g)(),
                    S = (0, u.W)(),
                    N = (0, m.Z)(p.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(v.Y, {
                            variant: v.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: S.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: n ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(l.N, {
                            ref: b,
                            containerClassName: j().scrollableContainer,
                            className: j().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: j().content,
                                    children: [
                                        (0, s.jsx)('div', { className: j().icon, children: (0, s.jsx)(a.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(i.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(o.$, {
                                            onClick: N,
                                            className: j().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(i.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(x.A, { children: (0, s.jsx)(g.w, { className: j().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        46606: (e, t, n) => {
            'use strict';
            var s;
            (n.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        54320: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => d });
            var s = n(88800),
                r = n(53548),
                i = n(29993),
                o = n(9492),
                a = n(29595),
                l = n(74965),
                c = n(74773);
            let d = (e, t) => {
                let { notify: n, dismiss: d } = (0, l.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, i.c)(() => {
                        var n;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (n = e.lastRejectedPagesList) ? n : [])].reverse().filter((t) => {
                            var n;
                            return (null == (n = e.pageStates) ? void 0 : n[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = n((0, s.jsx)(o.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, n, e.rejectedPagesCount]);
            };
        },
        57328: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => h });
            var s = n(88800),
                r = n(84961),
                i = n(58390),
                o = n(65724),
                a = n(88969),
                l = n(29504),
                c = n(7628),
                d = n(42674),
                u = n.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(l.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(l.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = n(4370),
                m = n(72288);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: r } = (0, m.g)();
                return r.isAuthorized ? t : (n && (0, i.redirect)(p.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        67990: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        71104: (e, t, n) => {
            'use strict';
            n.d(t, { c: () => s });
            let s = 20;
        },
        76903: (e, t, n) => {
            'use strict';
            n.d(t, { a: () => u });
            var s = n(88800),
                r = n(53548),
                i = n(53534),
                o = n(63582),
                a = n(245);
            let l = new WeakMap();
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
                    let n =
                        l.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                n = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                n();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (n(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (l.set(t, n), (this.queue = n));
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
            var d = n(87999);
            let u = (0, o.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let n = (0, a.N)(),
                        o = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [l, u] = (0, r.useState)(() => {
                            let e = new c(n.createScreenSession().screenViewUuid, n);
                            return { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        l.client !== n ||
                        l.input.pageId !== t.pageId ||
                        l.input.skeletonId !== t.skeletonId ||
                        l.input.mainObjectType !== t.mainObjectType ||
                        l.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(n.createScreenSession().screenViewUuid, n),
                            a = { client: n, input: t, isReady: o, scope: o ? n.createScreenScope(t, r) : null, session: r };
                        return (u(a), (0, s.jsx)(i.k, { value: a, children: e }));
                    }
                    if (
                        l.isReady !== o ||
                        l.input.displayReasonId !== t.displayReasonId ||
                        l.input.pageIdForFrom !== t.pageIdForFrom ||
                        l.input.pagePlacement !== t.pagePlacement ||
                        l.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...l, input: t, isReady: o, scope: o ? n.createScreenScope(t, l.session) : null };
                        return (u(r), (0, s.jsx)(i.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(i.k, { value: l, children: e });
                },
            );
        },
        79418: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => g });
            var s = n(88800),
                r = n(65724),
                i = n(61013),
                o = n(53548);
            let a = (e) => {
                    let { style: t, forwardRef: n, context: r, ...i } = e,
                        o = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': o, style: { ...t }, ref: n, ...i });
                },
                l = (0, o.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = n(16434),
                d = n.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: n, withFooter: i, withHeader: o, withForceScroll: a, ...l } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: n,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, o.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var p = n(55482),
                m = n(75151);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: r,
                            debounceDurationInMs: i = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, o.useState)(null),
                        g = (0, o.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == r || r(e), l.length > 0 && h(e), t && n)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) n(e);
                                    }
                                }, i),
                            [i, r, t, n, l],
                        );
                    (0, o.useEffect)(() => {
                        l.length > 0 && _ && g(_);
                    }, l);
                    let x = (0, o.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, s.jsx)(m.sN, { ref: d, rangeChanged: g, totalCount: a, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: m,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: b,
                            debounceDurationInMs: j,
                            initialItemCount: S,
                            minInitialItemCount: N = 20,
                            handleRef: E,
                            alwaysShowScrollbar: f = !1,
                            testId: y,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...k
                        } = e,
                        [C, I] = (0, o.useState)(!1),
                        w = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        A = (0, o.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == n ? void 0 : n.List) ? e : l,
                                      Item: null == n ? void 0 : n.Item,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == n ? void 0 : n.List) ? t : l,
                                      Item: null == n ? void 0 : n.Item,
                                      Header: null == n ? void 0 : n.Header,
                                      Footer: null == n ? void 0 : n.Footer,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  };
                        }, [n, b, T]),
                        P = S ? Math.min(S, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: C || f, [d().root_notScrolling]: !C && !f }, t),
                        'data-test-id': y,
                        children: [
                            T && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, s.jsx)(h, {
                                overscan: g,
                                components: A,
                                listClassName: m,
                                itemClassName: u,
                                isScrolling: w,
                                itemContent: p,
                                scrollerRef: E,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: j,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: O,
                                ...k,
                            }),
                            T && (null == n ? void 0 : n.Footer) && n.Footer(),
                        ],
                    });
                };
        },
        89916: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => i.G, X1: () => s.X, m5: () => r.m });
            var s = n(46606),
                r = n(91136),
                i = n(19840);
            n(17017);
        },
        91136: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: n = 'E_INTERNAL', data: r = {}, ...i } = t,
                        o = e || 'Internal error';
                    (super(o, i), (this.message = o), (this.code = n), (this.data = r), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
            class r extends s {
                name = 'HttpException';
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        92270: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
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
        99890: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => i, UC: () => o, dM: () => a, uV: () => l });
            var s = n(89916),
                r = n(67990);
            let i = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
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
]);
