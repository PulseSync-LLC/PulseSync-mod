(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3552],
    {
        400: (e) => {
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
        2291: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, w: () => n });
            let n = 20,
                l = 20;
        },
        6968: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => m });
            var n = r(25839),
                l = r(82298),
                o = r(28631),
                s = r(74631);
            let i = (e) => {
                    let { style: t, forwardRef: r, context: l, ...o } = e,
                        s = (null == l ? void 0 : l.listAriaLabel) || void 0,
                        i = (null == l ? void 0 : l.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: i, 'aria-label': s, style: { ...t }, ref: r, ...o });
                },
                a = (0, s.forwardRef)((e, t) => (0, n.jsx)(i, { forwardRef: t, ...e }));
            var c = r(45300),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: o, withHeader: s, withForceScroll: i, ...a } = e;
                    return (0, n.jsx)('div', {
                        className: (0, l.$)(u().scroller, { [u().scroller_withFooter]: o, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: i }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
            var g = r(10508),
                p = r(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: l,
                            debounceDurationInMs: o = 100,
                            totalCount: i = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [_, h] = (0, s.useState)(null),
                        m = (0, s.useMemo)(
                            () =>
                                (0, g.A)((e) => {
                                    if ((null == l || l(e), a.length > 0 && h(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            l = Math.floor(e.startIndex / t);
                                        for (let e = l; e < n; e++) r(e);
                                    }
                                }, o),
                            [o, l, t, r, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && _ && m(_);
                    }, a);
                    let x = (0, s.useMemo)(() => {
                        if (c)
                            return (0, g.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, n.jsx)(p.sN, { ref: u, rangeChanged: m, totalCount: i, endReached: x, ...d });
                },
                m = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: i,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: g,
                            listClassName: p,
                            overscan: m = 700,
                            pageSize: x = 20,
                            totalCount: E,
                            totalRequests: S,
                            debounceDurationInMs: v,
                            initialItemCount: f,
                            minInitialItemCount: y = 20,
                            handleRef: T,
                            alwaysShowScrollbar: N = !1,
                            testId: w,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...P
                        } = e,
                        [R, C] = (0, s.useState)(!1),
                        I = (0, s.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    C(e);
                                }, 100),
                            [],
                        ),
                        k = (0, s.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, S, A]),
                        j = f ? Math.min(f, y) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, l.$)(u().root, { [u().root_scrolling]: R || N, [u().root_notScrolling]: !R && !N }, t),
                        'data-test-id': w,
                        children: [
                            A && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(h, {
                                overscan: m,
                                components: k,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: g,
                                scrollerRef: T,
                                totalCount: E,
                                pageSize: x,
                                onPageHandler: i,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: O,
                                ...P,
                            }),
                            A && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var n = r(44806);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: o } = e;
                return 'ru' === o && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : l();
            };
        },
        22413: (e, t, r) => {
            'use strict';
            r.d(t, { Jt: () => o, TF: () => i, hZ: () => s });
            var n = function () {
                return (n =
                    Object.assign ||
                    function (e) {
                        for (var t, r = 1, n = arguments.length; r < n; r++)
                            for (var l in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                        return e;
                    }).apply(this, arguments);
            };
            function l(e, t) {
                if (!t) return '';
                var r = '; ' + e;
                return !0 === t ? r : r + '=' + t;
            }
            function o(e) {
                return (function (e) {
                    for (var t = {}, r = e ? e.split('; ') : [], n = 0; n < r.length; n++) {
                        var l = r[n].split('='),
                            o = l.slice(1).join('=');
                        '"' === o[0] && (o = o.slice(1, -1));
                        try {
                            t[decodeURIComponent(l[0])] = o.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, r) {
                var o;
                document.cookie =
                    ((o = n({ path: '/' }, r)),
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
                                l('Expires', e.expires ? e.expires.toUTCString() : '') +
                                l('Domain', e.domain) +
                                l('Path', e.path) +
                                l('Secure', e.secure) +
                                l('SameSite', e.sameSite)
                            );
                        })(o));
            }
            function i(e, t) {
                s(e, '', n(n({}, t), { expires: -1 }));
            }
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var n = r(25839);
            r(93588);
            var l = r(400),
                o = r.n(l);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: o().empty });
            };
        },
        27990: (e) => {
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
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, P: () => o });
            var n = r(74631);
            let l = (0, n.createContext)(null),
                o = () => (0, n.useContext)(l);
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
        64715: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => I });
            var n = r(25839),
                l = r(82298),
                o = r(88204),
                s = r(74631),
                i = r(39004),
                a = r(8487);
            r(93588);
            var c = r(4071),
                u = r(66738),
                d = r(4254),
                _ = r(67379),
                g = r(44031),
                p = r(87277),
                h = r(59450),
                m = r(84e3),
                x = r(97952),
                E = r(89192),
                S = r(53712),
                v = r(27954),
                f = r(44806),
                y = r(15270),
                T = r(23818),
                N = r(85686);
            let w = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var A = r(27990),
                O = r.n(A);
            let P = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { slam: o } = (0, v.g)(),
                    { contentRef: s } = (0, E.g)(),
                    i = (0, N.Z)(S.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, l.$)(O().root, t),
                    children: [
                        r &&
                            (0, n.jsx)(y.L, { withBackwardFallback: '/', className: (0, l.$)(O().navigation, { [O().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, l.$)(O().content, { [O().content_shrink]: !r }),
                            children: [
                                (0, n.jsx)(T._V, { className: O().image, src: w.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: O().message,
                                    children: [
                                        (0, n.jsx)(d.DZ, {
                                            className: O().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(d.HL, {
                                            className: O().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                o.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: O().button,
                                        onClick: i,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(d.HL, {
                                            className: O().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var R = r(68854),
                C = r.n(R);
            let I = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: o } = (0, i.A)(),
                    T = (0, s.useContext)(v.P),
                    N = null == T ? void 0 : T.experiments.checkExperiment(f.z.WebNextUnstableMusicScreen, 'on'),
                    w = o(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: n } = (0, x.$)(),
                        l = (0, m.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !n) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: n,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            },
                            logger: l,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, p.z5)(t.evgenInstance, o);
                    }, [t, e, r, n, l]);
                })(w);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, x.$)(),
                            n = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let l = (0, _.F)({
                                    params: {
                                        actionType: g.ActionType.Refresh,
                                        userInteractionType: g.UserInteractionType.Tap,
                                        entityType: g.EntityTypes.Error,
                                        entityId: g.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                l && (0, p.bv)(e.evgenInstance, l);
                            }, [e, t, r, n]),
                        };
                    })(),
                    O = (0, s.useCallback)(() => {
                        (A(), (window.location.href = S.Z.main.href));
                    }, [A]),
                    { contentRef: R } = (0, E.g)();
                return N
                    ? (0, n.jsx)(P, { className: t, withBackwardControl: r })
                    : (0, n.jsxs)('div', {
                          className: (0, l.$)(C().root, t),
                          children: [
                              r &&
                                  (0, n.jsx)(y.L, {
                                      withBackwardFallback: '/',
                                      className: (0, l.$)(C().navigation, { [C().navigation_desktop]: !R }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, l.$)(C().content, { [C().content_shrink]: !r }),
                                  children: [
                                      (0, n.jsx)(u.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(d.DZ, { className: (0, l.$)(C().title, C().important), variant: 'h3', size: 'xs', children: w }),
                                      (0, n.jsxs)(d.HL, {
                                          className: (0, l.$)(C().text, C().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: O,
                                          className: C().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        67311: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => o, si: () => i, fW: () => _, MJ: () => d, jU: () => p, Bx: () => g });
            var n = r(22413);
            function l(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, n.Jt)(e);
                        if (t) {
                            var r, o;
                            return null != (o = null == (r = l(s)) ? void 0 : r.value) ? o : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = l ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, o, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = s('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let o = r.getItem(e) || void 0;
                        if (!t) return o;
                        let s = l(o);
                        if (!s) return null;
                        let i = null != (n = null == s ? void 0 : s.value) ? n : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = s('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(58025),
                c = r(36432);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, o;
                        let s = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (o = null == (r = l(s)) ? void 0 : r.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = s('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(r);
                        null != l && e.set(r, l, n);
                    });
            }
            function p(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        68854: (e) => {
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
        80499: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => m, s: () => x });
            var n = r(25839),
                l = r(88204),
                o = r(84059),
                s = r(74631),
                i = r(89288),
                a = r(36432),
                c = r(94421),
                u = r(99989),
                d = r(27954),
                _ = r(83382);
            (0, l.eO)(!1);
            let g = (0, s.createContext)(null),
                p = (e) => {
                    let { children: t, store: r, storeKey: l } = e,
                        o = (0, s.useMemo)(() => ({ store: r, storeKey: l }), [r, l]);
                    return (0, n.jsx)(g.Provider, { value: o, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: l } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, i.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        l = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: s } = e,
                                i = (0, _.Y)(),
                                a = (0, d.g)(),
                                { store: g, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: s, patchKey: r, patchesRef: m }), (0, n.jsx)(p, { store: g, storeKey: r, children: o })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, s.useContext)(g);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        82706: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        83382: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => i });
            var n = r(67311),
                l = r(36484),
                o = r(62562),
                s = r(84e3);
            let i = () => {
                let e = (0, o.N)(),
                    t = e.get(l.oo),
                    r = e.get(l.uM),
                    i = e.get(l.ff),
                    a = e.get(l.V4),
                    c = e.get(l.P0),
                    u = (() => {
                        let e = (0, o.N)(),
                            t = e.get(l.$I),
                            r = e.get(l.EN),
                            n = e.get(l.N1),
                            s = e.get(l._1),
                            i = e.get(l.V3),
                            a = e.get(l.Lb),
                            c = e.get(l.wK),
                            u = e.get(l.tz),
                            d = e.get(l.$8),
                            _ = e.get(l.Oo),
                            g = e.get(l.X4),
                            p = e.get(l.O9),
                            h = e.get(l.E),
                            m = e.get(l.wH),
                            x = e.get(l.ok),
                            E = e.get(l.X8),
                            S = e.get(l.yq),
                            v = e.get(l.NN),
                            f = e.get(l.qN),
                            y = e.get(l.ro),
                            T = e.get(l.nM),
                            N = e.get(l.Ut),
                            w = e.get(l.K1),
                            A = e.get(l.eu),
                            O = e.get(l.aE),
                            P = e.get(l.ki),
                            R = e.get(l.c9),
                            C = e.get(l.en),
                            I = e.get(l.jQ),
                            k = e.get(l.cZ),
                            j = e.get(l.Zl),
                            b = e.get(l.CN),
                            L = e.get(l.P1),
                            M = e.get(l.zj),
                            H = e.get(l.re),
                            D = e.get(l.JM),
                            F = e.get(l.Lk),
                            U = e.get(l.$$),
                            W = e.get(l.sv),
                            Y = e.get(l.gd),
                            G = e.get(l.Ez),
                            $ = e.get(l.u2),
                            X = e.get(l.TD),
                            z = e.get(l.dh),
                            V = e.get(l.LC),
                            J = e.get(l.PL),
                            K = e.get(l.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: n,
                            usersResource: s,
                            landingResource: i,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: _,
                            topResource: g,
                            artistsResource: p,
                            slidesResource: h,
                            redAlertResource: m,
                            rotorResource: x,
                            waveResource: E,
                            searchResource: S,
                            searchPlaylistResource: v,
                            playlistResource: f,
                            playlistsResource: y,
                            pinResource: T,
                            metatagsResource: N,
                            tagResource: w,
                            feedResource: A,
                            pinsResource: O,
                            musicHistoryResource: P,
                            dynamicPagesResource: R,
                            chartResource: C,
                            clipsResource: I,
                            lyricViewsResource: k,
                            nonMusicResource: j,
                            donationResource: b,
                            loaderResource: L,
                            lumenResource: M,
                            prefixlessResource: H,
                            streamsResource: D,
                            filtersResource: F,
                            ugcResource: U,
                            collectionResource: W,
                            adsResource: Y,
                            personalResource: G,
                            familyResource: $,
                            childrenLandingResource: X,
                            promoResource: z,
                            telemetryResource: V,
                            labelsResource: J,
                            concertsResource: K,
                            wordsResource: e.get(l.dA),
                            wheelResource: e.get(l.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    _ = (0, o.N)().get(l.TK),
                    g = e.get(l.ni),
                    p = new n.si(),
                    h = new n.fW();
                return {
                    ...u,
                    acqOffers: r,
                    disclaimerDictionary: i,
                    logger: d,
                    modelActionsLogger: _,
                    localStorage: p,
                    sessionStorage: h,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: g,
                };
            };
        },
        84e3: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => o });
            var n = r(36484),
                l = r(62562);
            let o = () => (0, l.N)().get(n.Zf);
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        94421: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => l, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => w });
            var n = r(25839),
                l = r(82298),
                o = r(88204),
                s = r(39004),
                i = r(93588),
                a = r(43354),
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
            let u = (e, t, r) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, n, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, n, r) },
                    };
                };
            var _ = r(10959),
                g = r(89514);
            let p = (e) => e(new Date(), (0, g.m)());
            var h = r(96433),
                m = r(27954),
                x = r(400),
                E = r.n(x),
                S = r(61493),
                v = r(4254),
                f = r(97522);
            let y = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, l.$)(E().copyrights, t),
                        'data-test-id': S.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(f.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': S.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(f.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': S.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: E().list,
                                'data-test-id': S.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, n.jsx)(f.N, { target: '_blank', href: l, className: E().link, 'data-test-id': S.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': S.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, l.$)(E().root, E().important, t),
                        'data-test-id': S.S7.FOOTER,
                        children: [(0, n.jsx)(T, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(y, { data: r.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, m.g)(),
                    { formatDate: l, formatMessage: o } = (0, s.A)(),
                    { language: i } = (0, h.h)(),
                    a = d({ formatMessage: o, language: i, tld: r.tld, year: p(l) });
                return (0, n.jsx)(y, { className: t, data: a });
            });
            let w = (0, o.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: o, location: g, user: x } = (0, m.g)(),
                    { formatDate: S, formatMessage: v } = (0, s.A)(),
                    { isEnabled: f } = null != (t = (0, a.P)()) ? t : {},
                    { language: y } = (0, h.h)(),
                    T = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: l, tld: o, userRegion: s, year: i } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: l, userRegion: o } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, n, l) },
                                    i = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, n, l) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, n, l) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, n, l) },
                                    _ = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, n, l) },
                                    g = [s, a, d];
                                return (r && 'ru' === o && g.push(i), g.push(_), g);
                            })({ formatMessage: r, isWebApplication: n, language: l, tld: o, userRegion: s }),
                            disclaimer: (0, _.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: r, language: l, tld: o, year: i }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: i.$3,
                        tld: g.tld,
                        language: y,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: p(S),
                    });
                return (0, n.jsx)(N, { className: (0, l.$)({ [E().root_withOffsetForDeeplink]: f }, r), data: T });
            });
        },
        99989: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => o });
            var n = r(28410),
                l = r(74631);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: o } = e,
                    s = (0, l.useRef)([]),
                    [i] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(i, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [r, o, i]),
                    { store: i, patchesRef: s }
                );
            };
        },
    },
]);
