(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        1466: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(25839),
                a = i(82298),
                l = i(74631),
                n = i(39004),
                s = i(8487),
                o = i(4071),
                c = i(66738),
                d = i(4254),
                u = i(51790),
                _ = i(12558),
                m = i.n(_);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, l.useRef)(null),
                    { formatMessage: v } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        5545: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 35910));
        },
        6968: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(25839),
                a = i(82298),
                l = i(28631),
                n = i(74631);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(45300),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: n, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(10508),
                v = i(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let f = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(v.sN, { ref: d, rangeChanged: x, totalCount: s, endReached: f, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: v,
                            overscan: x = 700,
                            pageSize: f = 20,
                            totalCount: C,
                            totalRequests: p,
                            debounceDurationInMs: g,
                            initialItemCount: A,
                            minInitialItemCount: b = 20,
                            handleRef: j,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...y
                        } = e,
                        [R, I] = (0, n.useState)(!1),
                        E = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, p, k]),
                        w = A ? Math.min(A, b) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': N,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: x,
                                components: L,
                                listClassName: v,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: m,
                                scrollerRef: j,
                                totalCount: C,
                                pageSize: f,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: T,
                                ...y,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var r = i(25839),
                a = i(33660),
                l = i(74631),
                n = i(39004),
                s = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                _ = i(63149);
            let m = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [m, v] = (0, l.useState)(!1),
                    { formatMessage: h } = (0, n.A)();
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (m) return;
                    let l = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    v(!0);
                    let n = await e.toggleLike();
                    (v(!1),
                        n === s.f.OK
                            ? i((0, r.jsx)(_.T, { artist: l }), { containerId: o.u.INFO })
                            : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, m, h, i]);
            };
        },
        12558: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        13936: (e) => {
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
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(25839),
                a = i(82298),
                l = i(61493),
                n = i(23976),
                s = i(40828),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: v,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        v && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: v }), radius: h }),
                        _ &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: v }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(25839),
                a = i(88204),
                l = i(39004),
                n = i(36619),
                s = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                _ = i(33660),
                m = i(74631),
                v = i(31860),
                h = i(91149),
                x = i(92942),
                f = i(27954),
                C = i(57549),
                p = i(86869),
                g = i(69084),
                A = i(4254),
                b = i(51790),
                j = i(6323),
                S = i(24596),
                N = i.n(S);
            let k = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: s } = (0, l.A)(),
                    o = s(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: n,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(g.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(p.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(j.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var T = i(7361),
                y = i(90613),
                R = i(3210),
                I = i(11609),
                E = i(79367),
                L = i(40110),
                w = i(20258),
                O = i(34159),
                P = i(30290),
                B = i(29872),
                z = i(56120),
                D = i(87201),
                U = i(83014),
                F = i(44806),
                M = i(55491),
                K = i(44851),
                H = i(14240),
                W = i(56615),
                $ = i(16386),
                V = i(67303),
                q = i(74682),
                X = i(59043),
                J = i(2144),
                Z = i(6304);
            let G = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: p, onOpenChange: g, open: A, ...b } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: S } = (0, B.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: Y,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, y.A)(p),
                    ei = (0, T.K)(p),
                    er = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, n] = (0, m.useState)(!1),
                            { formatMessage: s } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(C.h, { error: s({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let l = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(k, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, r.jsx)(C.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(p),
                    ea = (0, O.F)(),
                    el = ''.concat(L.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: en } = (0, l.A)(),
                    { utmLink: es } = (0, P.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ed = (0, R.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == p ? void 0 : p.seeds) ? a : [],
                        pageIdForFrom: w._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    em = (0, E.P)(),
                    ev = en((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (j && Y.isAuthorized) return void S();
                        eu || e_();
                    }),
                    ex = (0, c.c)(() => {
                        if (!em()) {
                            if (j) return void S();
                            (null == p ? void 0 : p.id) && (Q.setUtmLink(es), Q.openArtistTrailer(p.id), ea(n.DomainObjectType.Artist, p.id));
                        }
                    }),
                    ef = (0, c.c)(() => {
                        G.open(null == p ? void 0 : p.id);
                    });
                (0, z.N)(A);
                let eC = { variant: M.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ec },
                    ep = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eg = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(F.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: g,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: s.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        ep && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(I.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !N && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !Y.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        eg && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ex }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(J.C, { onClick: eh, disabled: !(null == p ? void 0 : p.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: g }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !p, shareLink: eo, entityMeta: eC }),
                        eA &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': s.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        22413: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => s, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            l = a.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, i) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, i)),
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
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function s(e, t) {
                n(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        27954: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => n });
            var r = i(74631),
                a = i(36432);
            let l = (0, r.createContext)(null);
            function n() {
                let e = (0, r.useContext)(l);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        35910: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => z }));
            var r = i(25839),
                a = i(84059),
                l = i(74631),
                n = i(82298),
                s = i(88204),
                o = i(39004),
                c = i(61493),
                d = i(71035),
                u = i(4254),
                _ = i(78299),
                m = i(84058),
                v = i(1407),
                h = i(20258),
                x = i(10322),
                f = i(21784),
                C = i(89192),
                p = i(30716),
                g = i(80499),
                A = i(82706),
                b = i(27954),
                j = i(60678),
                S = i(99401),
                N = i(26076),
                k = i(10603),
                T = i(19412),
                y = i(6968),
                R = i(90250),
                I = i(43098),
                E = i.n(I);
            let L = (0, s.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: s } = e,
                    { id: I, name: L, type: w, artistsSubpage: O, reset: P, isNeededToLoad: B, getData: z } = (0, g.s)(A.n.LABEL),
                    {
                        settings: { isMobile: D },
                    } = (0, b.g)(),
                    { formatMessage: U } = (0, o.A)(),
                    { contentScrollRef: F, setContentScrollRef: M } = (0, C.g)(),
                    K = (0, f.W)(),
                    H = U({ id: 'page.label-artists-header' }, { labelName: L }),
                    W = (0, d.c)((e) => {
                        O.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, j.X)(O.pagesLoader, W),
                    (0, l.useEffect)(
                        () => () => {
                            (P(), O.reset());
                        },
                        [P, O],
                    ),
                    O.isNotFound && (0, a.notFound)(),
                    (0, R.Q)({ id: Number(I), name: null != L ? L : '', type: null != w ? w : '' }, R.T.ARTISTS),
                    (0, p.J)(O.isResolved));
                let $ = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(N.A, { children: (0, r.jsx)(S.w, { className: E().footer }) }) }), []),
                    V = U({ id: 'entity-names.label-artists-list' }),
                    q = [];
                if (
                    (O.isNeededToLoad && q.push(O.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: s })),
                    B && q.push(z({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    q.length && (0, l.use)(Promise.allSettled(q)),
                    O.isRejected && !O.isNotFound)
                )
                    return (0, r.jsx)(_.SomethingWentWrong, {});
                let X = O.isShimmerVisible ? 20 : O.totalCount;
                return (0, r.jsx)(x.n, {
                    pageId: h._Q.LABEL_ARTISTS,
                    children: (0, r.jsx)(v.h, {
                        scrollElement: F,
                        outerTitle: H,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            'data-test-id': c.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: K.canBack,
                                    className: E().header,
                                    children: (0, r.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: H }),
                                }),
                                (0, r.jsx)(y.$, {
                                    className: (0, n.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    customComponents: $,
                                    itemContentCallback: (e) => {
                                        let t = O.items[e],
                                            i = U({ id: 'loading-messages.entity-is-loading' }, { entityName: U({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(m.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(T.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: W,
                                    pageSize: 20,
                                    totalRequests: O.requestsCount,
                                    handleRef: M,
                                    context: { listAriaLabel: V },
                                    isMobileLayout: D,
                                    useWindowScroll: D,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var w = i(23976),
                O = i(95772);
            let P = () => {
                let e = (0, f.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(v.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, r.jsx)(k.Y, {
                                variant: k.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(w.W, { className: E().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, n.$)(E().scrollContainer, E().important, E().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: E().content,
                                    children: (0, r.jsx)(O.e, {
                                        isActive: !0,
                                        itemClassName: E().item,
                                        'aria-label': i,
                                        round: !0,
                                        centered: !0,
                                        linesCount: 4,
                                        count: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var B = i(61288);
            let z = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, B.L)(e)) || (0, a.notFound)(), (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(P, {}), children: (0, r.jsx)(L, { labelId: e }) }));
            };
        },
        40828: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        43098: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                shimmerScrollContainer: 'LabelArtistsPage_shimmerScrollContainer__Znpy2',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
                shimmerTitle: 'LabelArtistsPage_shimmerTitle__hXk1g',
            };
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
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(25839),
                a = i(88204),
                l = i(8487),
                n = i(61493),
                s = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(s.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        60678: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(25839),
                a = i(74631),
                l = i(71035),
                n = i(1466),
                s = i(91149),
                o = i(92942),
                c = i(36159);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    _ = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: _ }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(27954),
                a = i(44806);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(25839),
                a = i(53712),
                l = i(35015),
                n = i(3163);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(n.O, {
                    closeToast: i,
                    entityVariant: l.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(25839),
                a = i(74631),
                l = i(39004),
                n = i(61493),
                s = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: v,
                            className: h,
                            forwardRef: x,
                            style: f,
                            children: C,
                        } = e,
                        { formatMessage: p } = (0, l.A)(),
                        g = p({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(25839),
                a = i(39004),
                l = i(3392);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => n });
            var r = i(25839),
                a = i(35015),
                l = i(10546);
            let n = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(l.k, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84e3: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(36484),
                a = i(62562);
            let l = () => (0, a.N)().get(r.Zf);
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => M });
            var r = i(25839),
                a = i(82298),
                l = i(88204),
                n = i(74631),
                s = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                _ = i(49656),
                m = i(51246),
                v = i(66738),
                h = i(86869),
                x = i(4254),
                f = i(1797),
                C = i(7361),
                p = i(90613),
                g = i(79367),
                A = i(29481),
                b = i(47009),
                j = i(34159),
                S = i(52512),
                N = i(30290),
                k = i(61561),
                T = i(85686),
                y = i(85743),
                R = i(50209),
                I = i(27954),
                E = i(6323),
                L = i(64720),
                w = i(97522),
                O = i(41580),
                P = i(49438),
                B = i(71996),
                z = i(78437),
                D = i(21971),
                U = i(13936),
                F = i.n(U);
            let M = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: U, topTitleElement: M, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: W } = (0, S.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, I.g)(),
                    { from: X, utmLink: J } = (0, N.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, s.A)(),
                    [G, Q] = (0, n.useState)(!1),
                    [Y, ee] = (0, n.useState)(!1),
                    [et, ei] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: el } = (0, y.z)(),
                    en = (0, A.N)(),
                    es = (0, b.b)(),
                    eo = (0, C.K)(t),
                    ec = (0, p.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, T.Z)(t.url),
                    [eh, ex] = (0, n.useState)(!1),
                    ef = (0, j.F)(),
                    eC = (0, g.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        ($.openArtistTrailer(t.id), ef(o.DomainObjectType.Artist, t.id));
                    }),
                    eg = (0, n.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, Z]),
                    { isPlaying: eA, togglePlay: eb } = (0, R.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: J }, loadContextMeta: !0 },
                    }),
                    ej = (0, f.S)({ artist: t, callback: ev }),
                    eS = (0, f.S)({ artist: t, callback: eb }),
                    eN = (0, u.c)((e) => {
                        (null == ea || ea(), en({ to: o.AppScreen.ArtistScreen }), ej(e));
                    }),
                    ek = (0, k.N)(),
                    eT = (0, u.c)(() => {
                        if (!eC()) {
                            if (ek) return void q.open();
                            (G || eA || (Q(!0), null == el || el()), eS(), es(!eA));
                        }
                    }),
                    ey = (0, u.c)(() => {
                        (Y || em || (ee(!0), null == er || er()), eo());
                    }),
                    eR = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (ei(e), ex(e));
                    }),
                    eE = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: et,
                                    onClick: eR,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eI, et],
                    ),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ep,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ep]),
                    ew = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                O.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eO = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || eh,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: em,
                                            onClick: ey,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eE,
                                    pinControl: ew,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, r.jsx)(E.B, {
                                            className: F().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eg,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eN, e_, eg, t.isAvailable, eO],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: H,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eg,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            M,
                            (0, r.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, r.jsx)(w.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eg,
                                    onClick: eN,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(w.N, { className: F().srTitleLink, href: t.url, onClick: eN, children: eg }),
                    'data-intersection-property-id': W,
                    contentLinesCount: U,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(25839),
                a = i(33660),
                l = i(74631),
                n = i(39004),
                s = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let _ = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: _ } = (0, n.A)(),
                    [m, v] = (0, l.useState)(!1);
                return (0, l.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(d.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                    if (m) return;
                    let l = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    v(!0);
                    let n = await e.togglePin();
                    (v(!1),
                        n
                            ? i((0, r.jsx)(u.l, { artist: l }), { containerId: s.u.INFO })
                            : i((0, r.jsx)(d.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                }, [e, t.isAuthorized, m, _, i]);
            };
        },
        95772: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(25839),
                a = i(19412);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: l,
                    centered: n,
                    withInfo: s,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: l, centered: n, withInfo: s, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6287, 3472, 2121, 1107, 7349, 8161, 6706, 1311, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3257, 3580, 3269, 4163,
                3246, 3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 6237, 4475, 5056, 7358,
            ],
            () => e((e.s = 5545)),
        ),
            (_N_E = e.O()));
    },
]);
