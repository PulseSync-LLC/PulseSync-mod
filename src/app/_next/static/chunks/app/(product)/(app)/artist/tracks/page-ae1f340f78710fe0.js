(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9689],
    {
        3785: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { M: () => a }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon');
                })(a || (a = {}));
        },
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => n });
            var a = i(21916),
                r = i(55178);
            let n = (e) => {
                let t = (0, a.usePathname)(),
                    [i, n] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, i, t]);
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var a = i(32290),
                r = i(55178),
                n = i(21732),
                s = i(71926),
                l = i(91624),
                o = i.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, a.jsx)(
                            s.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        8677: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => D });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(16172),
                d = i(21732),
                u = i(91027),
                m = i(82586),
                _ = i(70280),
                p = i(71926),
                g = i(17705),
                h = i(63423);
            let x = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            null == r || r(), e.stopPropagation();
                        },
                        [r],
                    );
                return (0, a.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: g,
                    icon: (0, a.jsx)(m.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var v = i(71735),
                f = i(54391),
                k = i(22191),
                A = i(28999),
                C = i(57594),
                y = i(92744),
                T = i(29268),
                N = i(4008),
                b = i(53161),
                L = i(52843),
                I = i(39400),
                S = i(54714),
                j = i.n(S),
                E = i(38420),
                w = i(92565),
                R = i.n(w);
            let O = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, a.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, a.jsx)(E.A, { value: t.downloadingProgress, size: 16, className: R().downloadingProgress, progressBarClassName: R().progress })
                          : null;
                }),
                D = (0, n.PA)((e) => {
                    var t, i;
                    let {
                            className: n,
                            track: h,
                            withLightning: S,
                            ignoreDislikedStyles: E,
                            onLikeClick: w,
                            utmLink: R,
                            withSecondaryColor: D,
                            handleRemove: M,
                            withTrailer: P = !0,
                            likeIconSize: U = 'xxs',
                            removeButtonAriaLabel: z,
                            hideControls: B,
                        } = e,
                        { user: W, trailer: H } = (0, C.g)(),
                        { formatMessage: F } = (0, l.A)(),
                        { sendLikeSearchFeedback: K } = (0, A.z)(),
                        [$, Y] = (0, s.useState)(!1),
                        [G, X] = (0, s.useState)(!1),
                        V = (0, v.P)(),
                        q = (0, g.K)(h),
                        J = (0, k.P)(Math.round((null != (i = h.durationMs) ? i : 0) / 1e3)),
                        Z = (0, f.F)(),
                        Q = W.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !B,
                        et = (0, u.c)(async () => {
                            $ || h.isLiked || (Y(!0), null == K || K()), await q(), null == w || w(h.isLiked);
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ea = (0, u.c)((e) => {
                            if ((e.stopPropagation(), V())) return void e.preventDefault();
                            H.openTrackTrailer(h.id), Z(c.ky.Track, h.id);
                        }),
                        er = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, a.jsx)('div', {
                                    onClick: ei,
                                    children: (0, a.jsx)(I._, {
                                        track: h,
                                        open: G,
                                        onOpenChange: X,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: R,
                                        className: (0, r.$)(j().contextMenu, { [j().contextMenu_visible]: G }),
                                        handleRemove: M,
                                        withTrailer: P,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, M, G, ee, P, h, R]);
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(j().root, j().controls, n, {
                            [j().controls_dislikedControls]: h.isDisliked,
                            [j().controls_dislikedColors]: h.isDisliked && !E,
                            [j().controls_disabled]: !h.isAvailable,
                            [j().root_withSecondaryColor]: D,
                        }),
                        children: [
                            S &&
                                (0, a.jsx)(m.I, {
                                    'aria-label': F({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: j().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, a.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(m.I, {
                                            'aria-label': F({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: j().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(_.ZI, { children: (0, a.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Q && (0, a.jsx)('div', { className: (0, r.$)(j().item, j().downloadIcon), children: (0, a.jsx)(O, { track: h }) }),
                            M && !B && (0, a.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(j().item, j().removeButton), onClick: M, ariaLabel: z }),
                            ee &&
                                (0, a.jsx)(N.WithOffline, {
                                    fallback: (0, a.jsx)(y.c, {
                                        size: 'xs',
                                        iconSize: U,
                                        className: (0, r.$)(j().item, j().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !W.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, a.jsx)(N.WithOffline, {
                                    fallback: (0, a.jsx)(T.k, {
                                        className: (0, r.$)(j().item, j().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ea,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(j().item, j().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(j().duration, { [j().duration_hidden]: G && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': J,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / b.k7);
                                                    return (0, L.E)(t);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            (r.keys = () => Object.keys(a)), (r.id = 12526), (e.exports = r);
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => x });
            var a = i(55178),
                r = i(16172),
                n = i(52068),
                s = i(6752),
                l = i(62376),
                o = i(1677),
                c = i(48922),
                d = i(84782),
                u = i(30915),
                m = i(18746),
                _ = i(2792),
                p = i(37240),
                g = i(51012),
                h = i(47498);
            let x = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: x, displayReasonId: v } = (0, p.$)(),
                    { tabId: f, tabPos: k, isTabSelectedByDefault: A } = (0, h.R)(),
                    { offsetBlockPosY: C } = (0, u.u)(),
                    { blockType: y, blockId: T, blockPosX: N, blockPosY: b, mainObjectId: L, mainObjectType: I, displayReasonId: S } = (0, d.N)(),
                    { filterKey: j, filterValue: E, filterPos: w } = (0, m.G)(),
                    { objectType: R, objectsCount: O, objectId: D, objectPosX: M, objectPosY: P } = (0, _.J)(),
                    { skeleton: U } = (0, g.b)(),
                    z = null != S ? S : v,
                    B = (0, s.L)(() => (void 0 !== C && void 0 !== b ? C + b : b));
                return (0, a.useCallback)(
                    (a, n) => {
                        if (!t || !x || !c.xK.includes(x) || !c.fD.includes(x)) return;
                        let s = o.F[x];
                        if (!s) return;
                        let l = {
                            hash: i,
                            pageId: s,
                            entityType: y,
                            entityId: T,
                            entityPosX: N,
                            entityPosY: B,
                            objectsCount: O,
                            viewUuid: n,
                            objectType: R,
                            objectId: D,
                            objectPosX: M,
                            objectPosY: P,
                        };
                        void 0 !== j && ((l.filterKey = j), (l.filterValue = E), (l.filterPos = w)),
                            c.qG.includes(x) && ((l.tabId = f), (l.tabPos = k), (l.isTabSelectedByDefault = A)),
                            U && (l.skeletonId = U),
                            'string' == typeof L && 'string' == typeof I && ((l.mainObjectType = I), (l.mainObjectId = L)),
                            z && (l.displayReasonId = z);
                        let d = (0, r.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (a ? (0, r.Pf)(t.evgenInstance, d) : (0, r.nv)(t.evgenInstance, d));
                    },
                    [t, z, T, N, B, y, j, w, E, i, A, e, L, I, D, M, P, R, O, x, U, f, k],
                );
            };
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => h });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(26252),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                m = i(57594),
                _ = i(60244),
                p = i(90006),
                g = i.n(p);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: n, containerClassName: p, variant: h, size: x = 'xxxs', ...v } = e,
                    { formatMessage: f } = (0, l.A)(),
                    {
                        settings: { isMobile: k },
                    } = (0, m.g)(),
                    [A, C] = (0, s.useState)(null),
                    y = (0, d.L)(() => {
                        switch (h) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, s.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, s.useEffect)(() => {
                    i && i().then(C);
                }, [i, n]);
                let N = (null == A ? void 0 : A.join('\n')) || '',
                    b = !!(null == A ? void 0 : A.length) && !k,
                    L = N.length > 0 ? N : T;
                return (0, a.jsx)(_.k, {
                    description: N,
                    placement: 'bottom-start',
                    enabled: b,
                    children: (0, a.jsx)('span', {
                        className: p,
                        children: (0, a.jsx)(u.I, {
                            className: (0, r.$)(g().explicitMark, t),
                            'aria-label': L,
                            variant: y,
                            size: x,
                            ...v,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14190: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => n, cy: () => r, pE: () => a });
            let a = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                r = 'yandex',
                n = 'ru-RU';
        },
        14459: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
        },
        14858: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var a = i(60900),
                r = i(57594),
                n = i(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, a.A)(),
                    { user: i, experiments: s } = (0, r.g)(),
                    l = 'ru' === i.account.data.userSessionRegionIso && s.checkExperiment(n.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        17024: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            let a = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        18870: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { $: () => a }),
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
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        22556: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let a = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return a.setAttribute(e, t), a;
                },
                r = (e) => {
                    let { title: t, description: i, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = a('name', 'description');
                        e.setAttribute('content', i), window.document.head.appendChild(e);
                    }
                    let n = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            i = Array.isArray(r.images) ? r.images[0] : null;
                        n = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = a('property', 'og:title'),
                            l = a('property', 'og:description'),
                            o = a('property', 'og:image');
                        s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o);
                    }
                };
        },
        22644: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => r });
            var a = i(55178);
            let r = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var a = i(32290),
                r = i(55178),
                n = i(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, i, s, l, o]);
                return (0, a.jsx)(n.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var a = i(55178),
                r = i(12989),
                n = i(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, a.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, a.useId)(),
                    c = (0, a.useContext)(n.B),
                    d = (0, a.useCallback)(
                        (a, r) => {
                            e ? e(a, i ? r : void 0) : l(a, r), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, i],
                    );
                return (
                    (0, a.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        24535: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => n });
            var a = i(80451),
                r = i(73422);
            function n(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        26365: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(36477);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var i = arguments.length, n = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: i } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        28724: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => y });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(39407),
                o = i(21732),
                c = i(91027),
                d = i(63423),
                u = i(71926),
                m = i(70204),
                _ = i(34186),
                p = i(83808),
                g = i(20472),
                h = i(84062),
                x = i(85017),
                v = i(19379),
                f = i(61258),
                k = i(76768),
                A = i.n(k);
            let C = {
                    [x.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                y = (0, n.PA)((e) => {
                    var t;
                    let { modalState: i, data: n, onClose: k, className: y } = e,
                        T = null != n ? n : null == i ? void 0 : i.modalData,
                        N = (0, p.W)(),
                        b = (0, h.Z)(g.Z.main.href),
                        L = (0, _.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (k) return k();
                            N.canBack && N.back(), b();
                        }),
                        S = (null == T || null == (t = T.details) ? void 0 : t.url) && T.details.text,
                        j = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = L.get(v.c.ExEx),
                                a = new Date(),
                                r = a.setMinutes(a.getMinutes() + 15),
                                n =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            t ? L.set(v.c.ExEx, [...t, n], { expires: new Date(r) }) : L.set(v.c.ExEx, [n], { expires: new Date(r) }),
                                null == k || k(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler();
                        }),
                        E = (0, c.c)(() => {
                            (null == i ? void 0 : i.shouldHistoryBack) ? (null == k || k(), N.canBack && N.back(), b()) : null == k || k(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler();
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let w = (0, s.useMemo)(() => {
                            if (T) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: T.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: T.description,
                                        }),
                                        S &&
                                            (0, a.jsx)(f.N, {
                                                href: null == (e = T.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = T.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [T, S]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === x.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: j,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && C[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [j, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, I, E],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(A().root, y),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [w, R] }),
                    });
                });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(32290),
                r = i(55178),
                n = i(60900),
                s = i(21732),
                l = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: g,
                            forwardRef: h,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, n.A)(),
                        k = f({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: g,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': k,
                        onClick: _,
                        ref: h,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => n });
            var a = i(60900),
                r = i(64605);
            let n = (e, t) => {
                let { formatMessage: i } = (0, a.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var a = i(55178);
            let r = (0, a.createContext)(null),
                n = () => (0, a.useContext)(r);
        },
        31286: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(55178),
                r = i(91027);
            let n = () => {
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
                    (0, r.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(32290),
                r = i(77088),
                n = i.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: n().empty });
            };
        },
        34223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var a = i(32290),
                r = i(98350),
                n = i(63618),
                s = i(55178),
                l = i(60900),
                o = i(79856),
                c = i(91063),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, a.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: d().coverContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: d().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(89661),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, s.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, a.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
                    let { isActive: t, variant: i, className: n } = e;
                    switch (i) {
                        case r.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: t, className: n });
                        case r.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        34803: (e, t, i) => {
            'use strict';
            i.r(t), i.d(t, { default: () => q });
            var a = i(32290),
                r = i(21916),
                n = i(63618),
                s = i(96103),
                l = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(71483),
                m = i(91027),
                _ = i(71926),
                p = i(64170),
                g = i(7999),
                h = i(69951),
                x = i(91853),
                v = i(48922),
                f = i(22714),
                k = i(72396),
                A = i(83808),
                C = i(83920),
                y = i(3796),
                T = i(31286),
                N = i(57594),
                b = i(98350),
                L = i(28724),
                I = i(58054),
                S = i(32468),
                j = i(74694),
                E = i(34223),
                w = i(45257),
                R = i(57815),
                O = i(22556),
                D = i(44242),
                M = i(14459),
                P = i(83992),
                U = i(42125),
                z = i(24535),
                B = i(47216),
                W = i(94821),
                H = i(26365);
            async function F(e, t) {
                var i, a, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    s = n({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, z.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, P.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, B.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, M.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, H.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = i(22644),
                $ = i(51714),
                Y = i(81613),
                G = i.n(Y);
            let X = (0, s.PA)((e) => {
                var t, i, s, D, M, P;
                let { artistId: U, preloadedArtist: z } = e,
                    {
                        artist: B,
                        sonataState: W,
                        disclaimerModalState: H,
                        settings: { isMobile: Y },
                    } = (0, N.g)(),
                    { formatMessage: X } = (0, o.A)(),
                    { from: V, utmLink: q } = (0, k.f)({ pageId: v._Q.ARTIST_TRACKS, pageEntityId: U, contextType: u.K.Artist, contextId: U }),
                    { contentScrollRef: J, setContentScrollRef: Z } = (0, C.g)(),
                    Q = (0, A.W)(),
                    ee = (0, T.w)(),
                    et = (0, x.S)({ artist: null == (t = B.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, $.G)(U),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = B.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (i = B.meta) ? void 0 : i.artist.isUnsafeLegal, et]),
                    (0, K._)(B, U),
                    (0, l.useEffect)(
                        () => () => {
                            B.fullTracksListSubpage.reset();
                        },
                        [B],
                    ),
                    B.fullTracksListSubpage.isNotFound && (0, r.notFound)(),
                    (0, y.J)(B.fullTracksListSubpage.isResolved);
                let ei = (0, l.useMemo)(() => ({ Footer: () => (0, a.jsx)(S.A, { children: (0, a.jsx)(I.w, { className: G().footer }) }) }), []),
                    ea = (0, m.c)((e) => {
                        let t = [];
                        for (let a = e.startIndex; a <= e.endIndex; a++) {
                            var i;
                            let e = null == (i = B.fullTracksListSubpage.ids) ? void 0 : i[a];
                            !B.fullTracksListSubpage.getTrackByIndex(a) && e && t.push(e);
                        }
                        t.length && B.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    er = [];
                return (B.fullTracksListSubpage.isNeededToLoad && er.push(B.fullTracksListSubpage.getTracksIds({ artistId: U })),
                B.infoLoadingState.isNeededToLoad && er.push(B.getInfo({ artistId: U, preloadedArtist: z })),
                ((e) => {
                    var t;
                    (0, l.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            F({ artist: (0, R.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, O.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(B),
                er.length && (0, l.use)(Promise.allSettled(er)),
                B.fullTracksListSubpage.isRejected && !B.fullTracksListSubpage.isNotFound)
                    ? (0, a.jsx)(p.SomethingWentWrong, {})
                    : (null == (s = B.meta) ? void 0 : s.artist.isLegalRejected)
                      ? (0, a.jsx)(L.M, { modalState: H })
                      : (0, a.jsx)(f.n, {
                            pageId: v._Q.ARTIST_TRACKS,
                            pageEntityId: U,
                            children: (0, a.jsx)(g.h, {
                                scrollElement: J,
                                outerTitle: X({ id: 'page.artist-tracks-header' }, { artistName: B.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: G().root,
                                    'data-test-id': d.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, a.jsx)(j.Y, {
                                            variant: j.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Q.canBack,
                                            children: (0, a.jsx)(_.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (D = B.meta) ? void 0 : D.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, a.jsx)(w.$, {
                                            className: (0, n.$)(G().scrollContainer, G().important),
                                            customComponents: ei,
                                            itemContentCallback: (e) => {
                                                let t = B.fullTracksListSubpage.getTrackByIndex(e),
                                                    i = X({ id: 'loading-messages.entity-is-loading' }, { entityName: X({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, a.jsx)(h.K, {
                                                          track: t,
                                                          playContextParams: ee(e, {
                                                              contextData: { type: u.K.Artist, meta: { id: Number(U) }, from: V, utmLink: q },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: W.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, a.jsx)(E.D, { isActive: !0, 'aria-label': i, variant: b.X.PLAYLIST, className: G().shimmerItem });
                                            },
                                            totalCount: null != (P = null == (M = B.fullTracksListSubpage.ids) ? void 0 : M.length) ? P : 0,
                                            onGetDataByRange: ea,
                                            pageSize: 20,
                                            listClassName: G().content,
                                            itemClassName: G().item,
                                            totalRequests: B.fullTracksListSubpage.tracks.size,
                                            handleRef: Z,
                                            context: { listAriaLabel: X({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: Y,
                                            useWindowScroll: Y,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var V = i(17024);
            let q = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return (e && (0, V.L)(e)) || (0, r.notFound)(), (0, a.jsx)(X, { artistId: e });
            };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
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
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var a = i(32290),
                r = i(96103),
                n = i(21732),
                s = i(82586),
                l = i(19740),
                o = i(30542),
                c = i(57594);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, o.$)(t, d);
                return (0, a.jsx)(l.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, a.jsx)(s.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                _ = i(16172),
                p = i(21732),
                g = i(91027),
                h = i(71926),
                x = i(47745),
                v = i(84062),
                f = i(28999),
                k = i(61258),
                A = i(19383);
            let C = (0, n.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: n,
                            captionSize: s = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: C } = (0, m.A)(),
                        {
                            track: y,
                            settings: { isMobile: T },
                        } = (0, o.g)(),
                        N = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: b } = (0, f.z)(),
                        L = (0, x.N)(),
                        I = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: a, fullscreenPlayer: r, fullscreenVideoPlayer: n } = (0, o.g)(),
                                { modal: s } = a;
                            return (0, A.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    null == e || e.stopPropagation(), s.isOpened && (a.reset(), s.close()), r.modal.isOpened && r.modal.close();
                                },
                                onAfterHandled: () => {
                                    n.modal.isOpened && (n.modal.close(), n.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, g.c)((e) => {
                                T && y.isOpened && y.close(), N(e);
                            }),
                        }),
                        S = (0, g.c)((e) => {
                            L({ to: _.QT.ArtistScreen }), null == b || b(), I(e);
                        });
                    return i && !t.various
                        ? (0, a.jsx)(k.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: S,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, a.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, a.jsx)(h.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: n, children: t.name }),
                              }),
                          })
                        : (0, a.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, a.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: n,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                y = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: n,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, a.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: n,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, r, n, l, o, c, d]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(C, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: n,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var T = i(39407),
                N = i(63887);
            let b = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: n } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        ' ',
                        (0, a.jsx)(N.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, i),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, a.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(8055),
                I = i(6752),
                S = i(78035),
                j = i(78176),
                E = i(83598),
                w = i.n(E);
            let R = (0, n.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, a.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, S.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, a.jsx)('div', { ref: r, children: t }),
                            (0, a.jsx)(l.ZI, { className: w().tooltipContent, children: i.map((e) => (0, a.jsx)(j.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, s.forwardRef)((e, t) => (0, a.jsx)(R, { forwardRef: t, ...e }));
            var D = i(19740),
                M = i(52598),
                P = i.n(M);
            let U = (0, n.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, a.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(P().root, P().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, a.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, n.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [n, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, g.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, I.L)(() =>
                            (0, L.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, s.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, a.jsx)(U, { artists: t, label: i }) : (0, a.jsx)(O, { artists: t, label: i })) : i;
                }),
                B = (0, n.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: n = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: g,
                            captionClassName: h,
                            captionSize: x,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: f = !0,
                            withComposer: k = !0,
                            spoilerComponent: A,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: N,
                        } = e,
                        L = (0, s.useRef)(null),
                        [I, S] = (0, s.useState)(!1),
                        j = f
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(n)
                            : '',
                        {
                            settings: { isMobile: E },
                        } = (0, o.g)(),
                        w = 1 === i.length,
                        R = (0, s.useCallback)((e) => {
                            S(!0), e.preventDefault();
                        }, []),
                        O = (0, s.useMemo)(() => {
                            let e = i;
                            return (
                                m && !I && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!k && t.isComposer) return e.length ? e : [];
                                    let i = (0, a.jsx)(
                                        y,
                                        {
                                            artist: t,
                                            linkClassName: g,
                                            captionClassName: h,
                                            withLink: _ && t.id !== T && (((!E || w) && N) || !N),
                                            captionSize: x,
                                            allArtistsTitle: j,
                                            withCustomTooltip: C,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!n,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([n, i]) : [i];
                                }, [])
                            );
                        }, [i, m, I, k, E, w, N, g, h, _, T, x, j, C, n]),
                        D = (0, s.useMemo)(() => {
                            if (!I && m && m < i.length) {
                                let e = i.length - m;
                                return (0, s.isValidElement)(A) ? A : (0, a.jsx)(b, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [i.length, R, I, p, A, m]),
                        M = (0, s.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        P = (0, a.jsx)(l.m_, {
                            referenceRef: L,
                            enabled: !!(f && j) && C && !N && !E,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j,
                            hoverSettings: c.V,
                            children: (0, a.jsxs)('div', {
                                style: M,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: f && j && !C && !N ? j : void 0,
                                children: [O, D],
                            }),
                        });
                    return N ? (0, a.jsx)(z, { labelRef: L, artists: i, label: P }) : P;
                });
        },
        42125: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(3266),
                r = i(55178),
                n = i(14190),
                s = i(73422),
                l = i(84570),
                o = i(64552);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(n.pE[n.cy], t),
                        r = await c(i);
                    return (e, t) => {
                        let n = null == r ? void 0 : r[e.id],
                            s = '';
                        return (Array.isArray(n) || 'string' == typeof n) && (s = new a.S(n, i).format(t)), Array.isArray(s) ? s.join('') : s;
                    };
                };
        },
        43565: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => o });
            var a = i(32290),
                r = i(63618),
                n = i(82586),
                s = i(20753),
                l = i.n(s);
            let o = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, a.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        44242: (e, t, i) => {
            'use strict';
            function a(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            i.d(t, { X: () => a });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var a = i(32290),
                r = i(63618),
                n = i(8055),
                s = i(55178);
            let l = (e) => {
                    let { style: t, forwardRef: i, context: r, ...n } = e,
                        s = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        l = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': s, style: { ...t }, ref: i, ...n });
                },
                o = (0, s.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: s, withForceScroll: l, ...o } = e;
                    return (0, a.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                p = i(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            ...d
                        } = e,
                        [u, m] = (0, s.useState)(null),
                        g = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && m(e), t && i)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < a; e++) i(e);
                                    }
                                }, n),
                            [n, r, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && u && g(u);
                    }, o);
                    let h = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, a.jsx)(p.sN, { rangeChanged: g, totalCount: l, endReached: h, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: h = 700,
                            pageSize: x = 20,
                            totalCount: v,
                            totalRequests: f,
                            debounceDurationInMs: k,
                            initialItemCount: A,
                            minInitialItemCount: C = 20,
                            handleRef: y,
                            alwaysShowScrollbar: T = !1,
                            testId: N,
                            isMobileLayout: b = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...I
                        } = e,
                        [S, j] = (0, s.useState)(!1),
                        E = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        w = (0, s.useMemo)(() => {
                            var e, t;
                            return b
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, f, b]),
                        R = A ? Math.min(A, C) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: S || T, [d().root_notScrolling]: !S && !T }, t),
                        'data-test-id': N,
                        children: [
                            b && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, a.jsx)(g, {
                                overscan: h,
                                components: w,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: y,
                                totalCount: v,
                                pageSize: x,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: k,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: L,
                                ...I,
                            }),
                            b && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    r = t[0];
                return i.e(t[1]).then(() => i.t(r, 19));
            }
            (r.keys = () => Object.keys(a)), (r.id = 46646), (e.exports = r);
        },
        47216: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(94821);
            let r = '@yandexmusic';
            function n(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : { card: a.W.APP, site: r, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        51714: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(55178),
                r = i(31010),
                n = i(36477);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, r.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            let a = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => n });
            var a = i(19383),
                r = i(85017);
            let n = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: n } = e;
                return (0, a.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        55379: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 34803));
        },
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            let a = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => n, g: () => s });
            var a = i(29222),
                r = i(55178);
            let n = (0, r.createContext)(null);
            function s() {
                let e = (0, r.useContext)(n);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        57815: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => r });
            var a = i(87151);
            let r = (e) => {
                var t, i;
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
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        58054: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(60900),
                l = i(39407),
                o = i(21732),
                c = i(71926),
                d = i(14858),
                u = i(8626),
                m = i(31010),
                _ = i(61945),
                p = i(57594),
                g = (function (e) {
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
            let h = (e, t, i) => {
                switch (e) {
                    case g.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case g.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                    case g.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                    case g.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                    case g.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case g.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                    case g.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                }
            };
            var x = i(61258),
                v = i(77088),
                f = i.n(v);
            let k = (0, n.PA)((e) => {
                    let { className: t } = e,
                        { location: i } = (0, p.g)(),
                        { formatDate: n } = (0, s.A)(),
                        { language: d } = (0, _.h)();
                    return (0, a.jsxs)('div', {
                        className: (0, r.$)(f().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    n(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, a.jsx)(x.N, {
                                        target: '_blank',
                                        href: h(g.YANDEX, i.tld, d),
                                        className: (0, r.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, a.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, a.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(x.N, {
                                target: '_blank',
                                href: h(g.YANDEX_PROJECTS, i.tld, d),
                                className: f().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, a.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                A = (0, n.PA)((e) => {
                    var t;
                    let { className: i } = e,
                        { user: n, location: s } = (0, p.g)(),
                        { isEnabled: u } = null != (t = (0, m.P)()) ? t : {},
                        { language: v } = (0, _.h)(),
                        A = (0, d.w)(!0),
                        C = ((e) => {
                            let { platform: t, tld: i, language: r, userRegion: n } = e,
                                s = { title: (0, a.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: h(g.COPYRIGHT_HOLDER, i, r) },
                                o = { title: (0, a.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: h(g.PRIVACY_POLICY, i, r) },
                                c = { title: (0, a.jsx)(l.A, { id: 'footer.links-terms' }), url: h(g.AGREEMENT, i, r) },
                                d = { title: (0, a.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: h(g.RECOMMENDATION_RULES, i, r) },
                                u = { title: (0, a.jsx)(l.A, { id: 'footer.links-help' }), url: h(g.HELP, i, r) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === n && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: v, userRegion: n.account.data.userSessionRegionIso });
                    return (0, a.jsxs)('footer', {
                        className: (0, r.$)(f().root, f().important, { [f().root_withOffsetForDeeplink]: u }, i),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, a.jsxs)('div', {
                                className: f().links,
                                children: [
                                    (0, a.jsx)('ol', {
                                        className: f().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: C.map((e) => {
                                            let { title: t, url: i } = e;
                                            return (0, a.jsx)(
                                                'li',
                                                {
                                                    className: f().item,
                                                    children: (0, a.jsx)(x.N, {
                                                        target: '_blank',
                                                        href: i,
                                                        className: f().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                i,
                                            );
                                        }),
                                    }),
                                    (0, a.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: f().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: A },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(k, {}),
                        ],
                    });
                });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var a = i(32290),
                r = i(21732),
                n = i(70280),
                s = i(71926),
                l = i(48736),
                o = i.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: l, placement: d = 'top', children: u } = e;
                    return (0, a.jsxs)(n.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, a.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, a.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, a.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => v });
            var a = i(32290),
                r = i(60900),
                n = i(91027),
                s = i(67732),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                m = i(55178),
                _ = i(63380),
                p = i(96103),
                g = i(97755),
                h = i(79238);
            let x = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: r } = e,
                        n = (0, h.b)(t);
                    return (0, a.jsx)(g.O, {
                        closeToast: i,
                        entityVariant: n,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: r,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: g } = (0, r.A)(),
                        { notify: h } = (0, o.l)(),
                        v = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, i] = (0, m.useState)(!1),
                                { formatMessage: s } = (0, r.A)();
                            return (0, n.c)(async (r) => {
                                let { album: n, withLink: o = !0, withNotification: c = !0 } = r;
                                if (t) return;
                                let m = { ...(0, u.HO)(n), url: n.url, isLiked: !n.isLiked };
                                i(!0);
                                let p = await n.toggleLike();
                                i(!1),
                                    c &&
                                        (p === _.f.OK
                                            ? e((0, a.jsx)(x, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, a.jsx)(d.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                            });
                        })(),
                        { pageAlbumId: f } = (0, s.T)();
                    return (0, n.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void h((0, a.jsx)(d.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => A });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(16172),
                _ = i(52068),
                p = i(62376),
                g = i(37240),
                h = i(83920),
                x = i(20472),
                v = i(12894),
                f = i(30310),
                k = i.n(f);
            let A = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    f = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, _.st)(),
                        { hash: i } = (0, _.gf)(),
                        { pageId: a } = (0, g.$)(),
                        r = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let n = (0, m.Fx)({
                            params: {
                                entityType: m.LA.Error,
                                entityId: m.LA.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: m.QL.Fullscreen,
                                pagePlacement: m.c4.Fullscreen,
                                mainObjectType: m.ky.NonApplicable,
                                mainObjectId: m.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, m.z5)(t.evgenInstance, n);
                    }, [t, e, i, a, r]);
                })(f);
                let { sendRefreshEvent: A } = (function () {
                        let e = (0, _.st)(),
                            { hash: t } = (0, _.gf)(),
                            { pageId: i } = (0, g.$)(),
                            a = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, m.Fx)({
                                    params: {
                                        actionType: m.X2.Refresh,
                                        userInteractionType: m.gi.Tap,
                                        entityType: m.LA.Error,
                                        entityId: m.LA.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.QL.Fullscreen,
                                        pagePlacement: m.c4.Fullscreen,
                                        mainObjectType: m.ky.NonApplicable,
                                        mainObjectId: m.ky.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, m.bv)(e.evgenInstance, r);
                            }, [e, t, i, a]),
                        };
                    })(),
                    C = (0, s.useCallback)(() => {
                        A(), (window.location.href = x.Z.main.href);
                    }, [A]),
                    { contentRef: y } = (0, h.g)();
                return (0, a.jsxs)('div', {
                    className: (0, r.$)(k().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(v.L, { withBackwardFallback: '/', className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !y }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, r.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: f }),
                                (0, a.jsxs)(u.HL, {
                                    className: (0, r.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: C,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, a.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, a.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64552: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(29222),
                r = i(14190);
            let n = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        r = t.get('ru');
                    if (i) return i();
                    if (r) return r();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => r });
            let a = new Set(Object.values(i(3785).M)),
                r = (e) => 'string' == typeof e && a.has(e);
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => n });
            var a = i(55178),
                r = i(56008);
            function n() {
                return (0, a.useContext)(r.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => N });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(21916),
                l = i(55178),
                o = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                p = i(28999),
                g = i(57594),
                h = i(53514),
                x = i(85017),
                v = i(13798),
                f = i(61258),
                k = i(25649),
                A = i(24760),
                C = i(84141),
                y = i(5856),
                T = i.n(y);
            let N = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: y,
                        withExplicitMark: N = !0,
                        withSecondaryColor: b,
                        captionSize: L = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: j,
                        artistsClassName: E,
                        ignoreDislikedStyles: w,
                        withCustomTooltip: R = !0,
                        hasLineClamp: O = !0,
                        withSavingQueryParams: D,
                        beforeTitle: M,
                        withArtistLink: P = !0,
                        withTrackLink: U = !0,
                        afterTitle: z,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: W } = (0, o.A)(),
                    { sendNavigateSearchFeedback: H } = (0, p.z)(),
                    {
                        settings: { isMobile: F },
                    } = (0, g.g)(),
                    K = (0, A.$)({ withCustomTooltip: R }),
                    $ = (0, s.useSearchParams)(),
                    Y = n.getUrl(D ? Object.fromEntries($) : void 0),
                    G = (0, l.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [W, n.title, n.version]),
                    X = (0, C.O)({ track: n, onNavigate: H, withSavingQueryParams: D, entityType: x.n.TRACK }),
                    V = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, a.jsx)(u.m_, {
                                enabled: K && !F,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, a.jsx)(m.HL, {
                                    className: (0, r.$)(T().text, T().title),
                                    type: 'entity',
                                    size: L,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [F, K, L, n.isRemoved, n.title, n.version],
                    ),
                    q = (0, l.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, a.jsx)(u.m_, {
                                  enabled: K && !F,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, a.jsx)(m.HL, {
                                      className: (0, r.$)(T().text, T().title),
                                      type: 'entity',
                                      size: L,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: K ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, a.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && U
                              ? (0, a.jsx)(f.N, {
                                    onClick: X,
                                    className: T().albumLink,
                                    href: Y,
                                    'aria-label': G,
                                    title: K ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: V(),
                                })
                              : V({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [F, n.title, n.isRemoved, n.version, n.hasTrackLink, V, K, W, L, G, X, Y, U]),
                    J = (0, k.s)(n.artists, y),
                    Z = (0, l.useMemo)(() => +!!O, [O]);
                return (0, a.jsx)('div', {
                    className: (0, r.$)(T().root, { [T().root_disabled]: !n.isAvailable, [T().root_disliked]: n.isDisliked && !w, [T().root_withSecondaryColor]: b }, t),
                    children: (0, a.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, r.$)(T().titleContainer, { [T().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, a.jsxs)(m.HL, {
                                        className: (0, r.$)(T().text, j),
                                        type: 'entity',
                                        size: L,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            q,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, a.jsxs)(m.HL, {
                                                    className: (0, r.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: L,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: K ? void 0 : n.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        N &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: I,
                                            variant: n.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: n.id,
                                        }),
                                    z,
                                ],
                            }),
                            J.length > 0 &&
                                (0, a.jsx)(_.i, {
                                    className: (0, r.$)(T().text, { [T().artists]: O }, E, j),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, r.$)(T().text, T().link),
                                    captionClassName: (0, r.$)(T().text, T().artistCaption),
                                    artists: J,
                                    withLink: n.isNonUserGenerated && P,
                                    lineClamp: Z,
                                    captionSize: L,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(21732),
                o = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                p = i(92102),
                g = i(85673),
                h = i.n(g);
            let x = (0, n.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: x,
                        isDragging: v,
                        draggingClassName: f,
                        ignoreDislikedStyles: k,
                        withSecondaryColor: A,
                        handleRemove: C,
                        withDislike: y,
                        withTrailer: T = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: b,
                        hideControls: L,
                    } = e,
                    I = (0, o.D)({ playContextParams: n, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, c.g)(),
                    j = (0, s.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: k,
                                radius: 'xs',
                                ...e,
                            }),
                        [k, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, a.jsx)(p.C, {
                    className: (0, r.$)(g, { [h().trackWithDots]: x, [h().important]: x }),
                    track: i,
                    beforeBlock: x ? (0, a.jsx)(u.O, { className: (0, r.$)(h().dots, f), isDragging: v }) : void 0,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !S, beforeTitle: N, track: i, ignoreDislikedStyles: k, withSecondaryColor: A }),
                    playButtonCellRender: j,
                    controls: (0, a.jsx)(m.Q, {
                        track: i,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: k,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: C,
                        withDislike: y,
                        withTrailer: T,
                        removeButtonAriaLabel: b,
                        hideControls: L,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73422: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(91945),
                r = i(14190),
                n = i(84570),
                s = i(40363);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(64552);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let r = (0, n.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(r), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: i, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, a._)(this, 'language', void 0),
                        (0, a._)(this, 'storage', void 0),
                        (0, a._)(this, 'dictionary', void 0),
                        (0, a._)(this, 'config', void 0),
                        (0, a._)(this, 'logger', void 0),
                        (0, a._)(this, 'changeLanguageHandler', void 0),
                        (0, a._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [d] = l(e) || [];
                    this.language = (0, n.k)(this.config, d);
                }
            }
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
        77088: (e) => {
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => f });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(16172),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                _ = i(71926),
                p = i(47745),
                g = i(84062),
                h = i(57594),
                x = i(16510),
                v = i.n(x);
            let f = (0, n.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: n } = (0, h.g)(),
                    x = (0, g.Z)(t.url),
                    k = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, a.jsx)(f, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        n.modal.isOpened && n.modal.close(), k({ to: l.QT.ArtistScreen }), x(e);
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [
                        (0, a.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, a.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, a.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, a.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => n });
            var a = i(64605),
                r = i(97647);
            let n = (e) => {
                switch (e.type) {
                    case a._.PODCAST:
                        return r.c.PODCAST;
                    case a._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case a._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => a });
            let a = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81613: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83992: (e, t, i) => {
            'use strict';
            function a(e) {
                let { tld: t, url: i } = e;
                return i || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            i.d(t, { v: () => a });
        },
        84570: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            var a = i(65024);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(19383);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, i) => {
            'use strict';
            var a;
            i.d(t, { T: () => a }),
                (function (e) {
                    (e.OK = 'ok'), (e.ERROR = 'error');
                })(a || (a = {}));
        },
        92102: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => C });
            var a = i(32290),
                r = i(63618),
                n = i(96103),
                s = i(55178),
                l = i(91027),
                o = i(58359),
                c = i(71735),
                d = i(2969),
                u = i(23352),
                m = i(46200),
                _ = i(5537),
                p = i(28999),
                g = i(72676),
                h = i(57594),
                x = i(1444),
                v = i(60900),
                f = i(54171),
                k = i(35587),
                A = i.n(k);
            let C = (0, n.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: n,
                        meta: k,
                        beforeBlock: C,
                        controls: y,
                        playButtonCellRender: T,
                        withLightning: N,
                        isPlaying: b,
                        isCurrent: L,
                        togglePlay: I,
                        restartPlay: S,
                        onPlayClick: j,
                        playButtonIconSize: E,
                        skipFreemiumCloseListeningPaywall: w = !1,
                        ...R
                    } = e,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: P,
                        settings: { isMobile: U },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: B },
                        paywall: { modal: W },
                    } = (0, h.g)(),
                    { ref: H, intersectionPropertyId: F } = (0, u.n)(),
                    K = (0, d.b)(),
                    $ = (0, c.P)(),
                    Y = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: a } = (0, v.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            i = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let a = t.entityMeta.entityId;
                            return i && a === e;
                        }
                        return i;
                    })(n.entityId),
                    X = B(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    V = n.isAvailable && O && !X,
                    q = (0, _.N)(),
                    J = n.isAvailable && q && !X && !w,
                    Z = (0, f.w)({ track: n, callback: I }),
                    Q = (0, l.c)(() => {
                        M.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, f.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, ea] = (0, s.useState)(!1),
                    er = (0, l.c)(() => {
                        if (!$()) {
                            if (V) return void D();
                            if (J) return void W.open();
                            ei || b || (ea(!0), null == et || et()), Z(), K(!b), null == j || j(!b);
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (b) return void S();
                        er();
                    }),
                    es = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            O && n.isAvailableOnlyForPlus && D(), q && n.isAvailableOnlyForPlus && W.open();
                            return;
                        }
                        if (V) return void D();
                        let t = !U && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !P.modal.isOpened));
                        return J && !t
                            ? void W.open()
                            : ((0, o.P)(e, A().ripple), U)
                              ? void er()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !P.modal.isOpened && (ee(), J && W.open()));
                    }),
                    el = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: b, isCurrent: L, isLoading: G, playButtonIconSize: E });
                return (0, a.jsxs)(x.C, {
                    ref: H,
                    'aria-label': Y,
                    'data-intersection-property-id': F,
                    onClick: es,
                    className: (0, r.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: L && U }, i),
                    ...R,
                    children: [C, el, k, y],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94821: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
        98350: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var a = (function (e) {
                return (e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e;
            })({});
        },
    },
    (e) => {
        e.O(
            0,
            [
                7034, 5718, 3183, 7972, 8868, 7231, 6347, 9763, 6639, 7258, 6986, 6706, 8892, 2536, 66, 5835, 2812, 8035, 551, 2732, 1410, 1417, 6252, 3266, 6477, 7275,
                2586, 8347, 7702, 6874, 861, 782, 4668, 9740, 1175, 14, 8915, 6341, 4220, 9562, 7358,
            ],
            () => e((e.s = 55379)),
        ),
            (_N_E = e.O());
    },
]);
