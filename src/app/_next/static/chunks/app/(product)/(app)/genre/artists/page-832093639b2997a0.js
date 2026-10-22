(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1943, 4324, 7181, 9029],
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
        1466: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var i = r(25839),
                a = r(82298),
                n = r(74631),
                s = r(39004),
                o = r(8487),
                l = r(4071),
                c = r(66738),
                u = r(4254),
                d = r(51790),
                m = r(12558),
                h = r.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, n.useRef)(null),
                    { formatMessage: p } = (0, s.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, n.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: h().message,
                            children: [
                                (0, i.jsx)(u.HL, {
                                    className: h().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(l.$, {
                                    ref: m,
                                    className: h().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: h().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, i.jsx)(d.$, { className: (0, a.$)(h().root, h().important), message: g, closeToast: r });
            };
        },
        1797: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(40207);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                s = r(39004),
                o = r(31860),
                l = r(91149),
                c = r(92942),
                u = r(27954),
                d = r(57549),
                m = r(63149);
            let h = (e) => {
                let { user: t } = (0, u.g)(),
                    { notify: r } = (0, c.l)(),
                    [h, p] = (0, n.useState)(!1),
                    { formatMessage: g } = (0, s.A)();
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let s = await e.toggleLike();
                    (p(!1),
                        s === o.f.OK
                            ? r((0, i.jsx)(m.T, { artist: n }), { containerId: l.u.INFO })
                            : r((0, i.jsx)(d.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, h, g, r]);
            };
        },
        10126: (e) => {
            e.exports = { root: 'VirtualGrid_root__nSEzJ', column: 'VirtualGrid_column__P8hJp', row: 'VirtualGrid_row__PL5V_' };
        },
        10959: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var i = r(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : a();
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
        18421: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { C: () => n }),
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
                })(i || (i = {})));
            let a = new Set(Object.values(i)),
                n = (e) => 'string' == typeof e && a.has(e);
        },
        19412: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var i = r(25839),
                a = r(82298),
                n = r(61493),
                s = r(23976),
                o = r(40828),
                l = r.n(o);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: o,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: m = !0,
                    linesCount: h = 3,
                    withSubcover: p,
                    radius: g = 'l',
                } = e;
                return (0, i.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(l().root, r),
                    'data-test-id': n.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, i.jsx)(s.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, i.jsx)(s.W, { isActive: t, className: (0, a.$)(l().cover, o, { [l().cover_round]: c, [l().cover_withSubcover]: p }), radius: g }),
                        m &&
                            (0, i.jsx)('div', {
                                className: (0, a.$)(l().infoContainer, l()['content_linesCount_'.concat(h)], { [l().infoContainer_centered]: d }),
                                children: (0, i.jsx)(s.W, { isActive: t, className: (0, a.$)(l().title, { [l().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => J });
            var i = r(25839),
                a = r(88204),
                n = r(39004),
                s = r(44031),
                o = r(61493),
                l = r(22939),
                c = r(71035),
                u = r(66738),
                d = r(10820),
                m = r(33660),
                h = r(74631),
                p = r(31860),
                g = r(91149),
                f = r(92942),
                v = r(27954),
                _ = r(57549),
                x = r(86869),
                b = r(69084),
                y = r(4254),
                C = r(51790),
                k = r(6323),
                A = r(24596),
                E = r.n(A);
            let N = (e) => {
                let { coverUri: t, title: r, isDisliked: a, closeToast: s } = e,
                    { formatMessage: o } = (0, n.A)(),
                    l = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, i.jsx)(C.$, {
                    closeToast: s,
                    message: (0, i.jsxs)('div', {
                        className: E().message,
                        children: [
                            (0, i.jsx)(b.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, i.jsx)(x.t, {
                                className: E().cover,
                                radius: 'round',
                                children: (0, i.jsx)(k.B, { className: E().image, src: t, alt: r, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, i.jsx)(y.HL, { className: E().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var T = r(7361),
                j = r(90613),
                R = r(3210),
                w = r(11609),
                I = r(79367),
                O = r(40110),
                S = r(20258),
                L = r(34159),
                P = r(30290),
                z = r(29872),
                D = r(56120),
                M = r(87201),
                B = r(83014),
                W = r(44806),
                F = r(55491),
                U = r(44851),
                H = r(14240),
                G = r(56615),
                X = r(16386),
                Y = r(67303),
                K = r(74682),
                $ = r(59043),
                V = r(2144),
                q = r(6304);
            let J = (0, a.PA)((e) => {
                var t, r, a;
                let { artist: x, onOpenChange: b, open: y, ...C } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: A } = (0, z.q)(),
                    {
                        settings: { isMobile: E },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, j.A)(x),
                    er = (0, T.K)(x),
                    ei = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: r } = (0, f.l)(),
                            [a, s] = (0, h.useState)(!1),
                            { formatMessage: o } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void r((0, i.jsx)(_.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (a) return;
                            let n = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let l = await e.toggleDislike();
                            (s(!1),
                                l === p.f.OK
                                    ? r((0, i.jsx)(N, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: g.u.INFO })
                                    : r((0, i.jsx)(_.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(x),
                    ea = (0, L.F)(),
                    en = ''.concat(O.U.ARTIST, '-').concat(null == x ? void 0 : x.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: eo } = (0, P.f)({ blockId: O.U.ARTIST, contextType: l.K.Artist, contextId: null == x ? void 0 : x.id }),
                    { shareLink: el, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (r = null == x ? void 0 : x.id) ? r : '' } }),
                    eu = (0, R.A)({ entityVariant: B.D.ARTIST, urlParams: { id: null == x ? void 0 : x.id } }),
                    { isPlaying: ed, togglePlay: em } = (0, M.B)({
                        seeds: null != (a = null == x ? void 0 : x.seeds) ? a : [],
                        pageIdForFrom: S._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == x ? void 0 : x.id,
                    }),
                    eh = (0, I.P)(),
                    ep = es((null == x ? void 0 : x.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (k && Q.isAuthorized) return void A();
                        ed || em();
                    }),
                    ef = (0, c.c)(() => {
                        if (!eh()) {
                            if (k) return void A();
                            (null == x ? void 0 : x.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(x.id), ea(s.DomainObjectType.Artist, x.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        J.open(null == x ? void 0 : x.id);
                    });
                (0, D.N)(y);
                let e_ = { variant: F.Y.ARTIST, id: null == x ? void 0 : x.id, title: null == x ? void 0 : x.name, path: ec },
                    ex = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    eb = null == x || null == (t = x.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(W.z.WebNextArtistInfo, 'on'),
                    eC = !ee.checkExperiment(W.z.WebNextProductWithoutRecommendation, 'on');
                return (0, i.jsxs)(d.W1, {
                    isMobile: E,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: b,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...C,
                    children: [
                        ex && (0, i.jsx)(q.WithOffline, { fallback: (0, i.jsx)(w.d, { entityVariant: B.D.ARTIST, adminUrl: eu }) }),
                        !E && (0, i.jsx)(q.WithOffline, { fallback: (0, i.jsx)(Y.L, { onClick: et, isPinned: null == x ? void 0 : x.isPinned }) }),
                        (0, i.jsx)(q.WithOffline, {
                            fallback: (0, i.jsx)(X.T, {
                                onClick: er,
                                isLiked: null == x ? void 0 : x.isLiked,
                                disabled: !Q.isAuthorized || !(null == x ? void 0 : x.isAvailable),
                            }),
                        }),
                        eb && (0, i.jsx)(q.WithOffline, { fallback: (0, i.jsx)($.N, { onClick: ef }) }),
                        eC &&
                            (0, i.jsx)(q.WithOffline, {
                                fallback: (0, i.jsx)(V.C, { onClick: eg, disabled: !(null == x ? void 0 : x.isAvailable), variant: U.I.ARTIST, onOpenMenuChange: b }),
                            }),
                        (0, i.jsx)(K.H, { disabled: !x, shareLink: el, entityMeta: e_ }),
                        ey &&
                            (0, i.jsx)(q.WithOffline, {
                                fallback: (0, i.jsx)(d.Dr, {
                                    onClick: ev,
                                    icon: (0, i.jsx)(u.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ep,
                                }),
                            }),
                        (0, i.jsx)(q.WithOffline, {
                            fallback: (0, i.jsx)(G.D, { onClick: ei, isDisliked: null == x ? void 0 : x.isDisliked, disabled: !(null == x ? void 0 : x.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        24596: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        26076: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var i = r(25839);
            r(93588);
            var a = r(400),
                n = r.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        32190: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                o = r(32942),
                l = r.n(o);
            let c = (0, n.PA)((e) => {
                let { indices: t, virtualItem: r, renderItemByIndex: n, columnClassName: o, className: c, resizeObserver: u, scrollMargin: d } = e,
                    m = (0, s.useRef)(null),
                    h = t[r.index],
                    p = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - d, 'px') };
                return (
                    (0, s.useEffect)(() => {
                        let e = m.current;
                        if (e)
                            return (
                                null == u || u.observe(e),
                                () => {
                                    null == u || u.unobserve(e);
                                }
                            );
                    }, [u]),
                    (0, i.jsx)('div', {
                        'data-index': r.index,
                        ref: m,
                        style: p,
                        className: (0, a.$)(l().root, c),
                        children: null == h ? void 0 : h.map((e) => (0, i.jsx)('div', { className: o, children: n(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
        },
        32942: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        33254: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 56947));
        },
        36808: (e) => {
            var t = /((([a-zA-Z]+(-[a-zA-Z0-9]+){0,2})|\*)(;q=[0-1](\.[0-9]+)?)?)*/g;
            function r(e) {
                return (e || '')
                    .match(t)
                    .map(function (e) {
                        if (e) {
                            var t = e.split(';'),
                                r = t[0].split('-'),
                                i = 3 === r.length;
                            return { code: r[0], script: i ? r[1] : null, region: i ? r[2] : r[1], quality: t[1] ? parseFloat(t[1].split('=')[1]) : 1 };
                        }
                    })
                    .filter(function (e) {
                        return e;
                    })
                    .sort(function (e, t) {
                        return t.quality - e.quality;
                    });
            }
            ((e.exports.parse = r),
                (e.exports.pick = function (e, t, i) {
                    if (((i = i || {}), !e || !e.length || !t)) return null;
                    'string' == typeof t && (t = r(t));
                    for (
                        var a = e.map(function (e) {
                                var t = e.split('-'),
                                    r = 3 === t.length;
                                return { code: t[0], script: r ? t[1] : null, region: r ? t[2] : t[1] };
                            }),
                            n = 0;
                        n < t.length;
                        n++
                    )
                        for (
                            var s = t[n],
                                o = s.code.toLowerCase(),
                                l = s.region ? s.region.toLowerCase() : s.region,
                                c = s.script ? s.script.toLowerCase() : s.script,
                                u = 0;
                            u < a.length;
                            u++
                        ) {
                            var d = a[u].code.toLowerCase(),
                                m = a[u].script ? a[u].script.toLowerCase() : a[u].script,
                                h = a[u].region ? a[u].region.toLowerCase() : a[u].region;
                            if (o === d && (i.loose || !c || c === m) && (i.loose || !l || l === h)) return e[u];
                        }
                    return null;
                }));
        },
        37481: (e) => {
            e.exports = {
                root: 'GenreArtistsPage_root__PgtIz',
                container: 'GenreArtistsPage_container__NruTu',
                shimmerTitle: 'GenreArtistsPage_shimmerTitle__K2uY9',
                footer: 'GenreArtistsPage_footer__fYaCO',
            };
        },
        40489: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var i = r(26508),
                a = r(49656),
                n = r(28631),
                s = r(74631);
            let o = (e) => {
                let { minColumnWidth: t, maxColumnWidth: r, containerWidth: i, totalCount: a, columnGap: n, minColumnCount: s, maxColumnCount: o } = e,
                    l = Math.max(1, Math.floor((i + n) / (t + n))),
                    c = Math.max(s, Math.floor((i + n) / ((r + t) * 0.5 + n)));
                for (let e = s; e <= l; e++) {
                    let a = (i - (e - 1) * n) / e;
                    if (a >= t && a <= r) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(a / (c = o ? Math.min(c, o) : c)), columnCount: c };
            };
            var l = r(52312);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: r,
                        rowGap: c,
                        columnGap: u,
                        minColumnWidth: d,
                        maxColumnWidth: m,
                        minColumnCount: h,
                        maxColumnCount: p,
                        containerRef: g,
                    } = e,
                    { rowCount: f, columnCount: v } = ((e) => {
                        let { containerRef: t, minColumnCount: r, maxColumnWidth: i, minColumnWidth: a, totalCount: l, columnGap: c, maxColumnCount: u } = e,
                            [d, m] = (0, s.useState)({ rowCount: 0, columnCount: 0 }),
                            h = (0, s.useRef)(null),
                            p = (0, s.useMemo)(
                                () =>
                                    (0, n.A)(
                                        (e) => {
                                            m(
                                                o({
                                                    minColumnWidth: a,
                                                    maxColumnWidth: i,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: l,
                                                    columnGap: c,
                                                    minColumnCount: r,
                                                    maxColumnCount: u,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, u, i, r, a, l],
                            );
                        return (
                            (0, s.useLayoutEffect)(
                                () => (
                                    h.current && h.current.disconnect(),
                                    (h.current = new ResizeObserver((e) => {
                                        e.forEach(p);
                                    })),
                                    t &&
                                        (m(
                                            o({
                                                minColumnWidth: a,
                                                maxColumnWidth: i,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: l,
                                                columnGap: c,
                                                minColumnCount: r,
                                                maxColumnCount: u,
                                            }),
                                        ),
                                        h.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = h.current) || e.disconnect();
                                    }
                                ),
                                [c, t, p, u, i, r, a, l],
                            ),
                            d
                        );
                    })({ totalCount: t, columnGap: null != u ? u : 0, minColumnCount: h, maxColumnWidth: m, minColumnWidth: d, maxColumnCount: p, containerRef: g }),
                    { virtualizer: _, resizeObserver: x } = (0, l.r)({ count: f, getEstimateSize: r, gap: c, containerRef: g }),
                    b = (0, i.A)(
                        Array.from({ length: t }, (e, t) => t),
                        v,
                    ),
                    y = (0, a.L)(() => {
                        var e, t;
                        if (!_.range) return null;
                        let r = null == (e = b[_.range.startIndex]) ? void 0 : e.at(0),
                            i = null == (t = b[_.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== r && void 0 !== i ? { startIndex: r, endIndex: i } : null;
                    });
                return { virtualizer: _, rowResizeObserver: x, indices: b, columnCount: v, visibleRange: y };
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
        43354: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => n });
            var i = r(74631);
            let a = (0, i.createContext)(null),
                n = () => (0, i.useContext)(a);
        },
        52312: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => c });
            var i = r(84361),
                a = r(74631),
                n = r(71035),
                s = r(89192),
                o = r(27954);
            let l = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: r, gap: c, containerRef: u, overscan: d = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: h } = (0, s.g)(),
                        p = (0, a.useRef)(new Map()),
                        g = (0, a.useRef)(void 0),
                        f = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : r(e);
                            },
                            overscan: d,
                            initialRect: l,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, r) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && r ? i + r.scrollTop : 0;
                            })(m, u, h),
                        },
                        v = (0, i.XW)(f),
                        _ = (0, i.Te)({ ...f, getScrollElement: () => h, initialOffset: null == h ? void 0 : h.scrollTop }),
                        x = m ? v : _,
                        b = (0, n.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, a.useEffect)(() => {
                            g.current ||
                                (g.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let r = e.target.getAttribute('data-index');
                                        if (e.target && r) {
                                            let i = e.contentRect.height;
                                            i && i !== p.current.get(r) && (p.current.set(r, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && b());
                                }));
                        }, [b]),
                        { virtualizer: x, resizeObserver: g.current }
                    );
                };
        },
        56107: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => s });
            var i = r(36808),
                a = Object.defineProperty,
                n = (e, t, r) => (
                    ((e, t, r) => (t in e ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r)))(e, 'symbol' != typeof t ? t + '' : t, r),
                    r
                );
            class s {
                constructor({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: t }) {
                    (n(this, 'brandLangs'),
                        n(this, 'brandDefaultLang'),
                        n(this, 'regionLangs'),
                        n(this, 'enableWideLanguageSelectWithBrandLangs'),
                        (this.brandLangs = e.langs),
                        (this.brandDefaultLang = e.defaultLang),
                        (this.regionLangs = e.regionLangs),
                        (this.enableWideLanguageSelectWithBrandLangs = t));
                }
                static parseAcceptLanguage(e) {
                    return i.parse(e).map(({ code: e }) => e);
                }
                getLang({ regionIsoName: e, urlLang: t, cookieLang: r, acceptLangs: i }) {
                    var a, n, s;
                    let o = e ? (null == (a = this.regionLangs) ? void 0 : a[e]) : void 0,
                        l = this.enableWideLanguageSelectWithBrandLangs ? this.brandLangs : null != (n = null == o ? void 0 : o.langs) ? n : this.brandLangs,
                        c = null != (s = null == o ? void 0 : o.defaultLang) ? s : this.brandDefaultLang;
                    return this.selectLang({ supportedLangs: l, defaultLang: c, urlLang: t, cookieLang: r, acceptLangs: i });
                }
                intersect(e, t) {
                    let r = new Set(t);
                    return e.filter((e) => r.has(e));
                }
                selectLang({ supportedLangs: e, defaultLang: t, urlLang: r, cookieLang: i, acceptLangs: a }) {
                    if ('string' == typeof r && e.includes(r)) return r;
                    let n = null != a ? a : [],
                        s = i ? [i, ...n] : n,
                        o = this.intersect(s, e)[0];
                    return void 0 !== o ? o : t;
                }
            }
        },
        56615: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => u });
            var i = r(25839),
                a = r(88204),
                n = r(8487),
                s = r(61493),
                o = r(66738),
                l = r(10820),
                c = r(27954);
            let u = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: r, disabled: a, className: u } = e,
                    { user: d } = (0, c.g)();
                return (0, i.jsx)(l.Dr, {
                    onClick: r,
                    className: u,
                    icon: (0, i.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !d.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, i.jsx)(n.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        56947: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => X }));
            var i = r(25839),
                a = r(74631),
                n = r(84059),
                s = r(88204),
                o = r(39004),
                l = r(61493),
                c = r(71035),
                u = r(13833),
                d = r(4254),
                m = r(64715),
                h = r(84058),
                p = r(1407),
                g = r(96382),
                f = r(20258),
                v = r(10322),
                _ = r(21784),
                x = r(89192),
                b = r(30716),
                y = r(80499),
                C = r(82706),
                k = r(60678),
                A = r(99401),
                E = r(26076),
                N = r(10603),
                T = r(19412),
                j = r(94540),
                R = r(61732),
                w = r(12234),
                I = r(89221),
                O = r(41242),
                S = r(27935),
                L = r(41016),
                P = r(80461),
                z = r(95445),
                D = r(71121);
            async function M(e, t) {
                let { locale: r, fullUrl: i, url: a, tld: n, host: s } = t,
                    o = await (0, I.W)(r),
                    l = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: l }),
                    u = 'artists' in e ? e.artists : void 0,
                    d = (0, D.f)({ genreTitle: l, artists: u, messageFormatter: o }),
                    m = new URL(''.concat('', '/meta/og-image.png'), 'https://'.concat(s)).href;
                return {
                    title: c,
                    description: d,
                    openGraph: (0, S.i)({
                        ogTitle: (0, O.N)(l),
                        ogDescription: d,
                        fullUrl: null != i ? i : '',
                        locale: r,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, L.H)({ cardType: P.W.APP, title: c, url: null != a ? a : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, w.X)({
                        additional: { tld: n, url: null != a ? a : '', fullUrl: null != i ? i : '', host: s },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, z.S)('/genre/:metatagId/artists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var B = r(75568),
                W = r(37481),
                F = r.n(W);
            let U = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { artistsSubpage: s } = (0, y.s)(C.n.GENRE),
                    { formatMessage: w } = (0, o.A)(),
                    { contentScrollRef: I, setContentScrollRef: O } = (0, x.g)(),
                    S = (0, _.W)(),
                    L = (0, c.c)(() => j.tA),
                    P = (0, c.c)(() => (s.isShimmerVisible ? j.xi : s.totalCount)),
                    z = (0, a.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: j.cM });
                        },
                        [s, t],
                    ),
                    D = ((e) => {
                        let { pageSize: t, callback: r } = e;
                        return (0, c.c)((e, i) => {
                            if (!r) return;
                            let a = Math.floor((e.startIndex * i) / t),
                                n = Math.ceil((e.endIndex * i) / t);
                            for (let e = a; e <= n; e++) r(e);
                        });
                    })({ pageSize: j.cM, callback: z });
                (0, k.X)(s.pagesLoader, z);
                let W = (0, c.c)((e) => {
                    let t = s.items[e],
                        r = w({ id: 'loading-messages.entity-is-loading' }, { entityName: w({ id: 'entity-names.artist' }) });
                    return t ? (0, i.jsx)(h.a, { artist: t, contentLinesCount: 3 }, t.id) : (0, i.jsx)(T.V, { 'aria-label': r, round: !0, centered: !0 });
                });
                return ((0, a.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                ),
                s.isNotFound && (0, n.notFound)(),
                (0, b.J)(s.isResolved),
                ((e) => {
                    (0, a.useEffect)(() => {
                        e &&
                            M(
                                ((e) => {
                                    var t, r, i;
                                    return {
                                        id: '',
                                        title: { title: '', fullTitle: e.fullTitle || '' },
                                        artists: e.items.map((e) => ({ artist: (0, B.N)(e), popularTracks: [] })),
                                        pager: {
                                            page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                            perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                            total: (null == (i = e.pagesLoader.pager) ? void 0 : i.total) || 0,
                                        },
                                    };
                                })(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, R.j)(e);
                            });
                    }, [e]);
                })(s),
                t && s.isNeededToLoad && (0, a.use)(s.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: j.cM })),
                s.isSomethingWrong)
                    ? (0, i.jsx)(m.SomethingWentWrong, {})
                    : (0, i.jsx)(v.n, {
                          pageId: f._Q.GENRE_ARTISTS,
                          children: (0, i.jsx)(p.h, {
                              scrollElement: I,
                              outerTitle: s.fullTitle,
                              children: (0, i.jsxs)('div', {
                                  className: F().root,
                                  'data-test-id': l.Xk.genre.GENRE_ARTISTS_PAGE,
                                  children: [
                                      (0, i.jsx)(N.Y, {
                                          variant: N.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: S.canBack,
                                          children: (0, i.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                      }),
                                      (0, i.jsxs)(u.N, {
                                          ref: O,
                                          className: F().root,
                                          containerClassName: F().container,
                                          children: [
                                              (0, i.jsx)(g.Q, {
                                                  maxColumnCount: j.I7,
                                                  count: P(),
                                                  rowGap: j.fZ,
                                                  columnGap: j.vX,
                                                  getEstimateRowSize: L,
                                                  minColumnWidth: j.K$,
                                                  maxColumnWidth: j.El,
                                                  onChangeRange: D,
                                                  renderItemByIndex: W,
                                              }),
                                              (0, i.jsx)(E.A, { children: (0, i.jsx)(A.w, { className: F().footer }) }),
                                          ],
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var H = r(23976);
            let G = () => {
                    let e = (0, _.W)(),
                        { contentScrollRef: t, setContentScrollRef: r } = (0, x.g)(),
                        { formatMessage: a } = (0, o.A)(),
                        n = a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.artist' }) }),
                        s = (0, c.c)(() => (0, i.jsx)(T.V, { 'aria-label': n, round: !0, centered: !0 })),
                        l = (0, c.c)(() => j.tA),
                        d = (0, c.c)(() => void 0);
                    return (0, i.jsx)(p.h, {
                        scrollElement: t,
                        children: (0, i.jsxs)('div', {
                            className: F().root,
                            children: [
                                (0, i.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, i.jsx)(H.W, { className: F().shimmerTitle, radius: 'l' }),
                                }),
                                (0, i.jsx)(u.N, {
                                    ref: r,
                                    className: F().root,
                                    containerClassName: F().container,
                                    children: (0, i.jsx)(g.Q, {
                                        maxColumnCount: j.I7,
                                        count: j.xi,
                                        rowGap: j.fZ,
                                        columnGap: j.vX,
                                        getEstimateRowSize: l,
                                        minColumnWidth: j.K$,
                                        maxColumnWidth: j.El,
                                        onChangeRange: d,
                                        renderItemByIndex: s,
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                X = () => {
                    let e = (0, n.useSearchParams)().get('metatagId');
                    return (e || (0, n.notFound)(), (0, i.jsx)(a.Suspense, { fallback: (0, i.jsx)(G, {}), children: (0, i.jsx)(U, { metatagId: e }) }));
                };
        },
        60678: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => u });
            var i = r(25839),
                a = r(74631),
                n = r(71035),
                s = r(1466),
                o = r(91149),
                l = r(92942),
                c = r(36159);
            let u = (e, t) => {
                let { notify: r, dismiss: u } = (0, l.l)(),
                    d = (0, a.useRef)(void 0),
                    m = (0, n.c)(() => {
                        var r;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = r((0, i.jsx)(s.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [u, m, r, e.rejectedPagesCount]);
            };
        },
        61399: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var i = r(18421);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61561: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var i = r(27954),
                a = r(44806);
            let n = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61943: (e, t, r) => {
            'use strict';
            (r.d(t, { s: () => y }), r(56107));
            function i(e, t, r) {
                return ((t = s(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e);
            }
            function a(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
                        if (null != r) {
                            var i,
                                a,
                                n,
                                s,
                                o = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((n = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (i = n.call(r)).done) && (o.push(i.value), o.length !== t); l = !0);
                            } catch (e) {
                                ((c = !0), (a = e));
                            } finally {
                                try {
                                    if (!l && null != r.return && ((s = r.return()), Object(s) !== s)) return;
                                } finally {
                                    if (c) throw a;
                                }
                            }
                            return o;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (e) {
                            if ('string' == typeof e) return n(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            if (('Object' === r && e.constructor && (r = e.constructor.name), 'Map' === r || 'Set' === r)) return Array.from(e);
                            if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return n(e, t);
                        }
                    })(e, t) ||
                    (function () {
                        throw TypeError(
                            'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
                        );
                    })()
                );
            }
            function n(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, i = Array(t); r < t; r++) i[r] = e[r];
                return i;
            }
            function s(e) {
                var t = (function (e, t) {
                    if ('object' != typeof e || null === e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var i = r.call(e, t || 'default');
                        if ('object' != typeof i) return i;
                        throw TypeError('@@toPrimitive must return a primitive value.');
                    }
                    return ('string' === t ? String : Number)(e);
                })(e, 'string');
                return 'symbol' == typeof t ? t : String(t);
            }
            function o(e, t) {
                var r,
                    i,
                    a = c(e, t, 'get');
                return ((r = e), (i = a).get ? i.get.call(r) : i.value);
            }
            function l(e, t, r) {
                var i = c(e, t, 'set');
                return (
                    (function (e, t, r) {
                        if (t.set) t.set.call(e, r);
                        else {
                            if (!t.writable) throw TypeError('attempted to set read only private field');
                            t.value = r;
                        }
                    })(e, i, r),
                    r
                );
            }
            function c(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to ' + r + ' private field on non-instance');
                return t.get(e);
            }
            function u(e, t, r) {
                if (!t.has(e)) throw TypeError('attempted to get private field on non-instance');
                return r;
            }
            function d(e, t) {
                if (t.has(e)) throw TypeError('Cannot initialize the same private elements twice on an object');
            }
            function m(e, t, r) {
                (d(e, t), t.set(e, r));
            }
            function h(e, t) {
                (d(e, t), t.add(e));
            }
            var p = [
                ' daum[ /]',
                ' deusu/',
                ' yadirectfetcher',
                '(?:^| )site',
                '(?:^|[^g])news',
                '@[a-z]',
                '\\(at\\)[a-z]',
                '\\(github\\.com/',
                '\\[at\\][a-z]',
                '^12345',
                '^<',
                '^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$',
                '^[^ ]{50,}$',
                '^active',
                '^ad muncher',
                '^amaya',
                '^anglesharp/',
                '^anonymous',
                '^avsdevicesdk/',
                '^axios/',
                '^bidtellect/',
                '^biglotron',
                '^btwebclient/',
                '^castro',
                '^clamav[ /]',
                '^client/',
                '^cobweb/',
                '^coccoc',
                '^custom',
                '^ddg[_-]android',
                '^discourse',
                '^dispatch/\\d',
                '^downcast/',
                '^duckduckgo',
                '^facebook',
                '^fdm[ /]\\d',
                '^getright/',
                '^gozilla/',
                '^hatena',
                '^hobbit',
                '^hotzonu',
                '^hwcdn/',
                '^jeode/',
                '^jetty/',
                '^jigsaw',
                '^linkdex',
                '^lwp[-: ]',
                '^metauri',
                '^microsoft bits',
                '^movabletype',
                '^mozilla/\\d\\.\\d \\(compatible;?\\)$',
                '^mozilla/\\d\\.\\d \\w*$',
                '^navermailapp',
                '^netsurf',
                '^offline explorer',
                '^php',
                '^postman',
                '^postrank',
                '^python',
                '^read',
                '^reed',
                '^restsharp/',
                '^snapchat',
                '^space bison',
                '^svn',
                '^swcd ',
                '^taringa',
                '^test certificate info',
                '^thumbor/',
                '^tumblr/',
                '^user-agent:mozilla',
                '^valid',
                '^venus/fedoraplanet',
                '^w3c',
                '^webbandit/',
                '^webcopier',
                '^wget',
                '^whatsapp',
                '^xenu link sleuth',
                '^yahoo',
                '^yandex',
                '^zdm/\\d',
                '^zoom marketplace/',
                '^{{.*}}$',
                'adbeat\\.com',
                'appinsights',
                'archive',
                'ask jeeves/teoma',
                'bit\\.ly/',
                'bluecoat drtr',
                'bot',
                'browsex',
                'burpcollaborator',
                'capture',
                'catch',
                'check',
                'chrome-lighthouse',
                'chromeframe',
                'cloud',
                'crawl',
                'cryptoapi',
                'dareboost',
                'datanyze',
                'dataprovider',
                'dejaclick',
                'dmbrowser',
                'download',
                'evc-batch/',
                'feed',
                'firephp',
                'freesafeip',
                'gomezagent',
                'google',
                'headlesschrome/',
                'http',
                'httrack',
                'hubspot marketing grader',
                'hydra',
                'ibisbrowser',
                'images',
                'inspect',
                'iplabel',
                'ips-agent',
                'java',
                'library',
                'mail\\.ru/',
                'manager',
                'monitor',
                'morningscore/',
                'neustar wpm',
                'nutch',
                'offbyone',
                'optimize',
                'pageburst',
                'pagespeed',
                'perl',
                'phantom',
                'pingdom',
                'powermarks',
                'preview',
                'proxy',
                'ptst[ /]\\d',
                'reader',
                'rexx;',
                'rigor',
                'rss',
                'scan',
                'scrape',
                'search',
                'serp ?reputation ?management',
                'server',
                'sogou',
                'sparkler/',
                'speedcurve',
                'spider',
                'splash',
                'statuscake',
                'stumbleupon\\.com',
                'supercleaner',
                'synapse',
                'synthetic',
                'torrent',
                'tracemyfile',
                'transcoder',
                'trendsmapresolver',
                'twingly recon',
                'url',
                'virtuoso',
                'wappalyzer',
                'webglance',
                'webkit2png',
                'websitemetadataretriever',
                'whatcms/',
                'wordpress',
                'zgrab',
            ];
            !(function (e) {
                try {
                    RegExp('(?<! cu)bot').test('dangerbot');
                } catch (t) {
                    return e;
                }
                [
                    ['bot', '(?<! cu)bot'],
                    ['google', '(?<! (?:channel/|google/))google(?!(app|/google| pixel))'],
                    ['http', '(?<!(?:lib))http'],
                    ['java', 'java(?!;)'],
                    ['search', '(?<! ya(?:yandex)?)search'],
                ].forEach(function (t) {
                    var r = a(t, 2),
                        i = r[0],
                        n = r[1],
                        s = e.lastIndexOf(i);
                    ~s && e.splice(s, 1, n);
                });
            })(p);
            var g = new WeakMap(),
                f = new WeakMap(),
                v = new WeakSet(),
                _ = new WeakSet();
            function x() {
                l(this, f, RegExp(o(this, g).join('|'), 'i'));
            }
            function b(e) {
                return o(this, g).indexOf(e.toLowerCase());
            }
            new ((function () {
                var e;
                function t(e) {
                    var r = this;
                    if (!(this instanceof t)) throw TypeError('Cannot call a class as a function');
                    return (
                        h(this, _),
                        h(this, v),
                        m(this, g, { writable: !0, value: void 0 }),
                        m(this, f, { writable: !0, value: void 0 }),
                        l(this, g, e || p.slice()),
                        u(this, v, x).call(this),
                        Object.defineProperties(
                            function (e) {
                                return r.test(e);
                            },
                            Object.entries(Object.getOwnPropertyDescriptors(t.prototype)).reduce(function (e, t) {
                                var n = a(t, 2),
                                    s = n[0],
                                    o = n[1];
                                return (
                                    'function' == typeof o.value && Object.assign(e, i({}, s, { value: r[s].bind(r) })),
                                    'function' == typeof o.get &&
                                        Object.assign(
                                            e,
                                            i({}, s, {
                                                get: function () {
                                                    return r[s];
                                                },
                                            }),
                                        ),
                                    e
                                );
                            }, {}),
                        )
                    );
                }
                return (
                    (e = [
                        {
                            key: 'pattern',
                            get: function () {
                                return new RegExp(o(this, f));
                            },
                        },
                        {
                            key: 'test',
                            value: function (e) {
                                return !!e && o(this, f).test(e);
                            },
                        },
                        {
                            key: 'find',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
                                    t = e.match(o(this, f));
                                return t && t[0];
                            },
                        },
                        {
                            key: 'matches',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                return o(this, g).filter(function (t) {
                                    return RegExp(t, 'i').test(e);
                                });
                            },
                        },
                        {
                            key: 'clear',
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';
                                this.exclude(this.matches(e));
                            },
                        },
                        {
                            key: 'extend',
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                                ([].push.apply(
                                    o(this, g),
                                    t
                                        .filter(function (t) {
                                            return -1 === u(e, _, b).call(e, t);
                                        })
                                        .map(function (e) {
                                            return e.toLowerCase();
                                        }),
                                ),
                                    u(this, v, x).call(this));
                            },
                        },
                        {
                            key: 'exclude',
                            value: function () {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = e.length; t--;) {
                                    var r = u(this, _, b).call(this, e[t]);
                                    r > -1 && o(this, g).splice(r, 1);
                                }
                                u(this, v, x).call(this);
                            },
                        },
                        {
                            key: 'spawn',
                            value: function (e) {
                                return new t(e || o(this, g));
                            },
                        },
                    ]),
                    (function (e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            ((i.enumerable = i.enumerable || !1), (i.configurable = !0), 'value' in i && (i.writable = !0), Object.defineProperty(e, s(i.key), i));
                        }
                    })(t.prototype, e),
                    Object.defineProperty(t, 'prototype', { writable: !1 }),
                    t
                );
            })())();
            let y = 'funtech-lang';
        },
        63149: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => o });
            var i = r(25839),
                a = r(53712),
                n = r(35015),
                s = r(3163);
            let o = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(s.O, {
                    closeToast: r,
                    entityVariant: n.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        71996: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(25839),
                a = r(74631),
                n = r(39004),
                s = r(61493),
                o = r(4071),
                l = r(66738),
                c = r(49984);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: m,
                            onClick: h,
                            iconClassName: p,
                            className: g,
                            forwardRef: f,
                            style: v,
                            children: _,
                        } = e,
                        { formatMessage: x } = (0, n.A)(),
                        b = x({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: g,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: h,
                        ref: f,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: d, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: _,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        75568: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var i = r(47127),
                a = r(61399);
            let n = (e) => {
                var t, r, n, s, o;
                return e
                    ? {
                          id: e.id,
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
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        78437: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(25839),
                a = r(39004),
                n = r(3392);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: r } = (0, a.A)();
                return (0, i.jsx)(n.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: r({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        80477: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => s });
            var i = r(25839),
                a = r(35015),
                n = r(10546);
            let s = (e) => {
                let { artist: t, closeToast: r } = e;
                return (0, i.jsx)(n.k, {
                    closeToast: r,
                    entityVariant: a.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84058: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => F });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(74631),
                o = r(39004),
                l = r(44031),
                c = r(61493),
                u = r(22939),
                d = r(71035),
                m = r(49656),
                h = r(51246),
                p = r(66738),
                g = r(86869),
                f = r(4254),
                v = r(1797),
                _ = r(7361),
                x = r(90613),
                b = r(79367),
                y = r(29481),
                C = r(47009),
                k = r(34159),
                A = r(52512),
                E = r(30290),
                N = r(61561),
                T = r(85686),
                j = r(85743),
                R = r(50209),
                w = r(27954),
                I = r(6323),
                O = r(64720),
                S = r(97522),
                L = r(41580),
                P = r(49438),
                z = r(71996),
                D = r(78437),
                M = r(21971),
                B = r(13936),
                W = r.n(B);
            let F = (0, n.PA)((e) => {
                let { artist: t, className: r, children: n, contentLinesCount: B, topTitleElement: F, bottomTitleElement: U } = e,
                    { ref: H, intersectionPropertyId: G } = (0, A.n)(),
                    {
                        trailer: X,
                        user: Y,
                        paywall: { modal: K },
                    } = (0, w.g)(),
                    { from: $, utmLink: V } = (0, E.f)({ contextId: t.id, contextType: u.K.Artist }),
                    { formatMessage: q } = (0, o.A)(),
                    [J, Z] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, er] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ei, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, j.z)(),
                    es = (0, y.N)(),
                    eo = (0, C.b)(),
                    el = (0, _.K)(t),
                    ec = (0, x.A)(t),
                    { id: eu, name: ed, coverUri: em, isLiked: eh } = t,
                    ep = (0, T.Z)(t.url),
                    [eg, ef] = (0, s.useState)(!1),
                    ev = (0, k.F)(),
                    e_ = (0, b.P)(),
                    ex = (0, d.c)((e) => {
                        if ((e.stopPropagation(), e_())) return void e.preventDefault();
                        (X.openArtistTrailer(t.id), ev(l.DomainObjectType.Artist, t.id));
                    }),
                    eb = (0, s.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: ed }),
                            t = eh ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [ed, eh, q]),
                    { isPlaying: ey, togglePlay: eC } = (0, R.D)({
                        playContextParams: { contextData: { type: u.K.Artist, meta: { id: Number(eu) }, from: $, utmLink: V }, loadContextMeta: !0 },
                    }),
                    ek = (0, v.S)({ artist: t, callback: ep }),
                    eA = (0, v.S)({ artist: t, callback: eC }),
                    eE = (0, d.c)((e) => {
                        (null == ea || ea(), es({ to: l.AppScreen.ArtistScreen }), ek(e));
                    }),
                    eN = (0, N.N)(),
                    eT = (0, d.c)(() => {
                        if (!e_()) {
                            if (eN) return void K.open();
                            (J || ey || (Z(!0), null == en || en()), eA(), eo(!ey));
                        }
                    }),
                    ej = (0, d.c)(() => {
                        (Q || eh || (ee(!0), null == ei || ei()), el());
                    }),
                    eR = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ew = (0, d.c)((e) => {
                        (er(e), ef(e));
                    }),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(
                                M.g,
                                {
                                    artist: t,
                                    onOpenChange: ew,
                                    open: et,
                                    onClick: eR,
                                    className: (0, a.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, i.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, ew, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, i.jsx)(
                                D.n,
                                {
                                    children: (0, i.jsx)(z.k, {
                                        className: (0, a.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ex,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ex]),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(
                                L.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eL = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, i.jsx)(
                                h.hg,
                                {
                                    isVisible: et || eg,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, i.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, i.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(W().likeButton, W().control),
                                            isLiked: eh,
                                            onClick: ej,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !Y.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eI,
                                    pinControl: eS,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, i.jsx)(g.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, i.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eE,
                                    children: [
                                        (0, i.jsx)(I.B, {
                                            className: W().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eb,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eL,
                                    ],
                                }),
                            }),
                        [eE, em, eb, t.isAvailable, eL],
                    );
                return (0, i.jsx)(h.MN, {
                    ref: H,
                    className: (0, a.$)(W().root, r),
                    textPosition: 'center',
                    'aria-label': eb,
                    title: (0, i.jsxs)(i.Fragment, {
                        children: [
                            F,
                            (0, i.jsx)(f.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, i.jsx)(S.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': eb,
                                    onClick: eE,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: ed,
                                }),
                            }),
                            U,
                        ],
                    }),
                    srTitle: (0, i.jsx)(S.N, { className: W().srTitleLink, href: t.url, onClick: eE, children: eb }),
                    'data-intersection-property-id': G,
                    contentLinesCount: B,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        89514: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        90613: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var i = r(25839),
                a = r(33660),
                n = r(74631),
                s = r(39004),
                o = r(91149),
                l = r(92942),
                c = r(27954),
                u = r(57549),
                d = r(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: r } = (0, l.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [h, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void r((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (h) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    p(!0);
                    let s = await e.togglePin();
                    (p(!1),
                        s
                            ? r((0, i.jsx)(d.l, { artist: n }), { containerId: o.u.INFO })
                            : r((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, h, m, r]);
            };
        },
        94540: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => o, I7: () => l, K$: () => s, cM: () => u, fZ: () => a, tA: () => n, vX: () => i, xi: () => c });
            let i = 16,
                a = 16,
                n = 315,
                s = 170,
                o = 270,
                l = 7,
                c = 30,
                u = 30;
        },
        96382: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => d });
            var i = r(25839),
                a = r(88204),
                n = r(74631),
                s = r(68934),
                o = r(40489),
                l = r(32190),
                c = r(10126),
                u = r.n(c);
            let d = (0, a.PA)((e) => {
                let {
                        count: t,
                        rowGap: r,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: d = 2,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: p,
                        renderItemByIndex: g,
                        onChangeRange: f,
                    } = e,
                    [v, _] = (0, s.d)(),
                    {
                        virtualizer: x,
                        rowResizeObserver: b,
                        columnCount: y,
                        indices: C,
                    } = (0, o.L)({
                        count: t,
                        rowGap: r,
                        columnGap: a,
                        getEstimateRowSize: c,
                        minColumnCount: d,
                        minColumnWidth: m,
                        maxColumnWidth: h,
                        maxColumnCount: p,
                        containerRef: v,
                    });
                (0, n.useEffect)(() => {
                    !x.isScrolling && x.range && (null == f || f(x.range, y));
                }, [f, x.isScrolling, x.range, y]);
                let k = { '--virtual-grid-height': ''.concat(x.getTotalSize(), 'px'), '--virtual-grid-column-count': y };
                return (0, i.jsx)('div', {
                    ref: _,
                    style: k,
                    className: u().root,
                    children: x
                        .getVirtualItems()
                        .map((e) =>
                            (0, i.jsx)(
                                l.U,
                                {
                                    className: u().row,
                                    columnClassName: u().column,
                                    virtualItem: e,
                                    resizeObserver: b,
                                    indices: C,
                                    renderItemByIndex: g,
                                    scrollMargin: x.options.scrollMargin,
                                },
                                e.key,
                            ),
                        ),
                });
            });
        },
        99401: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => E });
            var i = r(25839),
                a = r(82298),
                n = r(88204),
                s = r(39004),
                o = r(93588),
                l = r(43354),
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
                    let { formatMessage: t, language: r, tld: i, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, r) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, r) },
                    };
                };
            var m = r(10959),
                h = r(89514);
            let p = (e) => e(new Date(), (0, h.m)());
            var g = r(96433),
                f = r(27954),
                v = r(400),
                _ = r.n(v),
                x = r(61493),
                b = r(4254),
                y = r(97522);
            let C = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(_().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: _().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(_().copyrightLink, _().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(b.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: _().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: _().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: _().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: _().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: a, className: _().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(b.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: _().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(_().root, _().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(k, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(C, { data: r.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, f.g)(),
                    { formatDate: a, formatMessage: n } = (0, s.A)(),
                    { language: o } = (0, g.h)(),
                    l = d({ formatMessage: n, language: o, tld: r.tld, year: p(a) });
                return (0, i.jsx)(C, { className: t, data: l });
            });
            let E = (0, n.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: n, location: h, user: v } = (0, f.g)(),
                    { formatDate: x, formatMessage: b } = (0, s.A)(),
                    { isEnabled: y } = null != (t = (0, l.P)()) ? t : {},
                    { language: C } = (0, g.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: a, userRegion: n } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, a) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, a) },
                                    l = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, a) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, a) },
                                    h = [s, l, d];
                                return (r && 'ru' === n && h.push(o), h.push(m), h);
                            })({ formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: r, language: a, tld: n, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: b,
                        isWebApplication: o.$3,
                        tld: h.tld,
                        language: C,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: p(x),
                    });
                return (0, i.jsx)(A, { className: (0, a.$)({ [_().root_withOffsetForDeeplink]: y }, r), data: k });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6392, 7170, 6287, 3472, 2121, 9122, 3112, 4446, 6706, 4771, 1311, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 3580, 4361, 2038, 4163,
                3246, 7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 5382, 4475, 5056, 7358,
            ],
            () => e((e.s = 33254)),
        ),
            (_N_E = e.O()));
    },
]);
