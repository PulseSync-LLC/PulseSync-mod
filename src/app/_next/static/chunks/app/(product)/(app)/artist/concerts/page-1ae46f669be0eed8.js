(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3042],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        1677: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => a });
            var r = n(16172),
                i = n(48922);
            let a = {
                [i._Q.HOME]: r.rW.MainScreen,
                [i._Q.NON_MUSIC]: r.rW.NonmusicLandingScreen,
                [i._Q.OWN_COLLECTION]: r.rW.CollectionLandingScreen,
                [i._Q.LANDING]: r.rW.DynamicScreen,
                [i._Q.OWN_ARTISTS]: r.rW.CollectionArtistsScreen,
                [i._Q.SEARCH]: r.rW.SearchScreen,
                [i._Q.ARTIST]: r.rW.ArtistScreen,
                [i._Q.CONCERTS]: r.rW.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.rW.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.rW.ConcertLocationSelector,
                [i._Q.ALBUM]: r.rW.AlbumScreen,
                [i._Q.PLAYLIST]: r.rW.PlaylistScreen,
                [i._Q.SLIDES_SCREEN]: r.rW.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.rW.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.rW.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.rW.FactScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.rW.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.rW.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: r.rW.MultivibeAcceptingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.rW.MultivibeActionScreen,
                [i._Q.MULTIVIBE_ALONE_SCREEN]: r.rW.MultivibeAloneScreen,
                [i._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: r.rW.MultivibeInvalidInvitationScreen,
                [i._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: r.rW.MultivibePendingInvitationScreen,
                [i._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: r.rW.MultivibeAlreadyExistScreen,
            };
        },
        2792: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var r = n(55178),
                i = n(10936);
            function a() {
                return (0, r.useContext)(i.l);
            }
        },
        3064: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => r });
            let r = (0, n(55178).createContext)({ skeleton: void 0 });
        },
        3785: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { M: () => r }),
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
                })(r || (r = {}));
        },
        3796: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var r = n(21916),
                i = n(55178);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [n, a] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t);
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !n && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, n, t]);
            };
        },
        6752: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => i });
            var r = {};
            Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule;
            var i = r.useReturnValue;
        },
        8626: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        9848: (e, t, n) => {
            'use strict';
            n.d(t, { F: () => r });
            let r = (0, n(55178).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        10570: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        10936: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => r });
            let r = (0, n(55178).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        11489: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        12526: (e, t, n) => {
            var r = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function i(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return n.e(t[1]).then(() => n.t(i, 19));
            }
            (i.keys = () => Object.keys(r)), (i.id = 12526), (e.exports = i);
        },
        12578: (e, t, n) => {
            'use strict';
            n.d(t, { h: () => p });
            var r = n(32290),
                i = n(55178),
                a = n(60900),
                s = n(21732),
                l = n(63423),
                o = n(84638),
                c = n(74196),
                d = n(70204),
                u = n(34186),
                _ = n(21916),
                b = n(74523),
                m = n(97201),
                v = n(11489),
                N = n.n(v);
            let p = (e) => {
                let { dataSessionId: t, isOpened: n, onOpen: v, onClose: p } = e,
                    x = (0, u.N)().get(d.tw),
                    { formatMessage: f } = (0, a.A)(),
                    g = (() => {
                        let e = (0, _.useSearchParams)();
                        return (0, i.useCallback)(
                            (t) => {
                                let n = e.get(m.K.UTM_CAMPAIGN);
                                if (!n) return t;
                                let r = new URLSearchParams();
                                return r.set(m.K.UTM_SOURCE, 'campaignid_'.concat(n)), (0, b.C)(t, r);
                            },
                            [e],
                        );
                    })(),
                    S = (0, i.useCallback)(
                        (e) => {
                            e.origin === x.afisha.host && 'close' === e.data.type && p();
                        },
                        [p, x.afisha.host],
                    );
                (0, i.useEffect)(
                    () => (
                        window.addEventListener('message', S),
                        () => {
                            window.removeEventListener('message', S);
                        }
                    ),
                    [S],
                );
                let E = (0, i.useCallback)(
                        (e) => {
                            e ? v() : p();
                        },
                        [p, v],
                    ),
                    I = g(''.concat(x.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(x.afisha.clientId));
                return (0, r.jsxs)(o.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: n,
                    onOpenChange: E,
                    onClose: p,
                    showHeader: !1,
                    className: N().widget,
                    contentClassName: N().content,
                    overlayColor: 'full',
                    containerProps: { 'data-test-id': s.OA.concert.AFISHA_MODAL },
                    children: [
                        (0, r.jsx)(c.q, { children: (0, r.jsx)(l.$, { 'aria-label': f({ id: 'interface-actions.close' }), onClick: p }) }),
                        (0, r.jsx)('iframe', {
                            src: I,
                            className: N().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        12989: (e, t, n) => {
            'use strict';
            n.d(t, { D: () => p });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(6752),
                l = n(62376),
                o = n(1677),
                c = n(48922),
                d = n(84782),
                u = n(30915),
                _ = n(18746),
                b = n(2792),
                m = n(37240),
                v = n(51012),
                N = n(47498);
            let p = () => {
                let e = (0, l.U)(),
                    t = (0, a.st)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: p, displayReasonId: x } = (0, m.$)(),
                    { tabId: f, tabPos: g, isTabSelectedByDefault: S } = (0, N.R)(),
                    { offsetBlockPosY: E } = (0, u.u)(),
                    { blockType: I, blockId: C, blockPosX: h, blockPosY: T, mainObjectId: y, mainObjectType: A, displayReasonId: L } = (0, d.N)(),
                    { filterKey: O, filterValue: R, filterPos: W } = (0, _.G)(),
                    { objectType: k, objectsCount: P, objectId: D, objectPosX: w, objectPosY: M } = (0, b.J)(),
                    { skeleton: j } = (0, v.b)(),
                    Q = null != L ? L : x,
                    U = (0, s.L)(() => (void 0 !== E && void 0 !== T ? E + T : T));
                return (0, r.useCallback)(
                    (r, a) => {
                        if (!t || !p || !c.xK.includes(p) || !c.fD.includes(p)) return;
                        let s = o.F[p];
                        if (!s) return;
                        let l = {
                            hash: n,
                            pageId: s,
                            entityType: I,
                            entityId: C,
                            entityPosX: h,
                            entityPosY: U,
                            objectsCount: P,
                            viewUuid: a,
                            objectType: k,
                            objectId: D,
                            objectPosX: w,
                            objectPosY: M,
                        };
                        void 0 !== O && ((l.filterKey = O), (l.filterValue = R), (l.filterPos = W)),
                            c.qG.includes(p) && ((l.tabId = f), (l.tabPos = g), (l.isTabSelectedByDefault = S)),
                            j && (l.skeletonId = j),
                            'string' == typeof y && 'string' == typeof A && ((l.mainObjectType = A), (l.mainObjectId = y)),
                            Q && (l.displayReasonId = Q);
                        let d = (0, i.Fx)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (r ? (0, i.Pf)(t.evgenInstance, d) : (0, i.nv)(t.evgenInstance, d));
                    },
                    [t, Q, C, h, U, I, O, W, R, n, S, e, y, A, D, w, M, k, P, p, j, f, g],
                );
            };
        },
        13819: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => _ });
            var r = n(32290),
                i = n(96103),
                a = n(55178),
                s = n(60900),
                l = n(71926),
                o = n(30436),
                c = n(98066),
                d = n(10570),
                u = n.n(d);
            let _ = (0, i.PA)((e) => {
                let { id: t, concert: n } = e,
                    { formatDate: i } = (0, s.A)(),
                    d = [],
                    _ = (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == n ? void 0 : n.place) && d.push((0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: n.place })),
                    (null == n ? void 0 : n.datetime) &&
                        d.push(_, (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: i(n.datetime, (0, o.f)()) })),
                    (null == n ? void 0 : n.contentRating) && d.push(_, (0, r.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: n.contentRating })),
                    (0, r.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, r.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == n ? void 0 : n.city }),
                            (0, r.jsx)('div', { className: u().info, children: d.map((e, t) => (0, a.cloneElement)(e, { key: t })) }),
                            (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(c.m, { className: u().cashback, valuePercent: n.cashbackValuePercent }),
                            !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(c.m, { className: u().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        14190: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => a, cy: () => i, pE: () => r });
            let r = {
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
                i = 'yandex',
                a = 'ru-RU';
        },
        14459: (e, t, n) => {
            'use strict';
            function r() {
                return { appId: '117328825040925' };
            }
            n.d(t, { k: () => r });
        },
        14858: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => s });
            var r = n(60900),
                i = n(57594),
                a = n(79406);
            let s = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, r.A)(),
                    { user: n, experiments: s } = (0, i.g)(),
                    l = 'ru' === n.account.data.userSessionRegionIso && s.checkExperiment(a.z.WebNextFooterDisclaimer, 'on'),
                    o = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return l ? t({ id: 'footer.disclaimer-content' }) : o;
            };
        },
        17024: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => i });
            let r = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && r.test(e);
            }
        },
        18746: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => a });
            var r = n(55178),
                i = n(70608);
            function a() {
                return (0, r.useContext)(i.S);
            }
        },
        18870: (e, t, n) => {
            'use strict';
            var r;
            n.d(t, { $: () => r }),
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
                })(r || (r = {}));
        },
        19111: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        19383: (e, t, n) => {
            'use strict';
            n.d(t, { l: () => u });
            var r = n(55178),
                i = n(27576),
                a = n(91027),
                s = n(70204),
                l = n(34186),
                o = n(57594),
                c = n(85017),
                d = n(19379);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: n,
                        getStorageKey: u,
                        callback: _,
                        onAfterHandled: b,
                        onBeforeHandle: m,
                        onReject: v,
                        modalBehavior: N,
                        preventDefaultWhenSafe: p,
                    } = e,
                    {
                        disclaimerModalState: x,
                        modals: { disclaimerModal: f },
                    } = (0, o.g)(),
                    g = (0, r.useRef)(String((0, i.A)())),
                    S = (0, r.useRef)(!1),
                    E = (0, r.useRef)(!1),
                    I = (0, r.useRef)(0),
                    C = (0, r.useRef)(!0),
                    h = (0, l.N)().get(s.U2),
                    T = (0, a.c)((e) => {
                        p && (null == e || e.preventDefault()), _ && _(e), b && b();
                    });
                return (
                    (0, r.useEffect)(() => {
                        x.isUnsafeDisclaimerConfirmed && x.id === g.current && !S.current && (T(), (S.current = !0));
                    }, [x.id, x.isUnsafeDisclaimerConfirmed, T]),
                    (0, r.useEffect)(() => {
                        x.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && x.setModalData(t.resolvedModalData);
                    }, [x, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, r.useEffect)(
                        () => () => {
                            C.current = !1;
                        },
                        [],
                    ),
                    (0, a.c)(async (e) => {
                        if (!E.current) {
                            E.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var r, i, a;
                                    let s = t.getDisclaimerEntityRef(n),
                                        l = null != (r = null == u ? void 0 : u(t, s)) ? r : ''.concat(s.entityType, '_').concat(s.entityId),
                                        o = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = h.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void T(e);
                                    }
                                    if (o) {
                                        null == e || e.preventDefault(),
                                            t.isUnsafeLegal && x.setType(c.Z.UNSAFE),
                                            x.setDisclaimerRejectHandler(null != v ? v : null),
                                            x.setId(g.current),
                                            x.setEntityKey(l),
                                            x.setCurrentEntityRef(s.entityType, s.entityId),
                                            x.setShouldHistoryBack(!!(null == N ? void 0 : N.shouldHistoryBack)),
                                            x.setShouldCloseModalOnOutsidePress(null == (i = null == N ? void 0 : N.closeOnOutside) || i),
                                            x.setShouldCloseModalOnEscape(null == (a = null == N ? void 0 : N.closeOnEscape) || a),
                                            (I.current += 1);
                                        let n = I.current,
                                            r = await t.getModalDisclaimerData();
                                        if (I.current !== n || !1 === C.current) return;
                                        x.setModalData(null != r ? r : null), (S.current = !1), f.open();
                                        return;
                                    }
                                    p && (null == e || e.preventDefault()), T(e);
                                    return;
                                }
                                p && (null == e || e.preventDefault()), T(e);
                            } finally {
                                E.current = !1;
                            }
                        }
                    })
                );
            };
        },
        19522: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => a });
            var r = n(60900),
                i = n(91027);
            let a = () => {
                let { formatMessage: e, formatNumber: t } = (0, r.A)();
                return (0, i.c)((n) => {
                    var r, i;
                    return (null == (r = n.price) ? void 0 : r.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(n.price.value, { style: 'currency', currency: null == (i = n.price) ? void 0 : i.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => i });
            var r = n(36477);
            let i = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        20599: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => r });
            let r = (0, n(55178).createContext)({ offsetBlockPosY: void 0 });
        },
        22556: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => i });
            let r = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let r = window.document.createElement('meta');
                    return r.setAttribute(e, t), r;
                },
                i = (e) => {
                    let { title: t, description: n, openGraph: i } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = r('name', 'description');
                        e.setAttribute('content', n), window.document.head.appendChild(e);
                    }
                    let a = '';
                    if (i) {
                        let e = 'string' == typeof i.title ? i.title : '',
                            t = 'string' == typeof i.description ? i.description : '',
                            n = Array.isArray(i.images) ? i.images[0] : null;
                        a = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let s = r('property', 'og:title'),
                            l = r('property', 'og:description'),
                            o = r('property', 'og:image');
                        s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', a),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o);
                    }
                };
        },
        22644: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => i });
            var r = n(55178);
            let i = (e, t) => {
                (0, r.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22714: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => s });
            var r = n(32290),
                i = n(55178),
                a = n(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, i.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, n, s, l, o]);
                return (0, r.jsx)(a.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => s });
            var r = n(55178),
                i = n(12989),
                a = n(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, r.useRef)(null),
                    l = (0, i.D)(),
                    o = (0, r.useId)(),
                    c = (0, r.useContext)(a.B),
                    d = (0, r.useCallback)(
                        (r, i) => {
                            e ? e(r, n ? i : void 0) : l(r, i), t && c.unobserveElement(o);
                        },
                        [e, c, o, l, t, n],
                    );
                return (
                    (0, r.useEffect)(
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
        24535: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var r = n(80451),
                i = n(73422);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, r.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || i.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        26042: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => s });
            var r = n(32290),
                i = n(55178),
                a = n(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: n, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    b = (0, i.useMemo)(
                        () => ({ objectId: t, objectPosX: n, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, n, s, l, o, c, d, u],
                    );
                return (0, r.jsx)(a.l.Provider, { value: b, children: _ });
            };
        },
        26365: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var r = n(36477);
            let i = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                a = function (e, t) {
                    for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), s = 2; s < n; s++) a[s - 2] = arguments[s];
                    let [l] = a,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, r.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(i)) {
                        let { href: n } = (0, r.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = n;
                    }
                    return { canonical: u, languages: d };
                };
        },
        28724: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => I });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(55178),
                l = n(39407),
                o = n(21732),
                c = n(91027),
                d = n(63423),
                u = n(71926),
                _ = n(70204),
                b = n(34186),
                m = n(83808),
                v = n(20472),
                N = n(84062),
                p = n(85017),
                x = n(19379),
                f = n(61258),
                g = n(76768),
                S = n.n(g);
            let E = {
                    [p.n.ALBUM]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [p.n.PODCAST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [p.n.ARTIST]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [p.n.TRACK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [p.n.AUDIOBOOK]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [p.n.CLIP]: (0, r.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                I = (0, a.PA)((e) => {
                    var t;
                    let { modalState: n, data: a, onClose: g, className: I } = e,
                        C = null != a ? a : null == n ? void 0 : n.modalData,
                        h = (0, m.W)(),
                        T = (0, N.Z)(v.Z.main.href),
                        y = (0, b.N)().get(_.U2),
                        A = (0, c.c)(() => {
                            if (g) return g();
                            h.canBack && h.back(), T();
                        }),
                        L = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        O = (0, c.c)(() => {
                            var e;
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let t = y.get(x.c.ExEx),
                                r = new Date(),
                                i = r.setMinutes(r.getMinutes() + 15),
                                a =
                                    null != (e = null == n ? void 0 : n.entityKey)
                                        ? e
                                        : ''.concat(null == n ? void 0 : n.entityType, '_').concat(null == n ? void 0 : n.entityId);
                            t ? y.set(x.c.ExEx, [...t, a], { expires: new Date(i) }) : y.set(x.c.ExEx, [a], { expires: new Date(i) }),
                                null == g || g(),
                                (null == n ? void 0 : n.onDisclaimerConfirmHandler) && n.onDisclaimerConfirmHandler();
                        }),
                        R = (0, c.c)(() => {
                            (null == n ? void 0 : n.shouldHistoryBack) ? (null == g || g(), h.canBack && h.back(), T()) : null == g || g(),
                                (null == n ? void 0 : n.onDisclaimerRejectHandler) && n.onDisclaimerRejectHandler();
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let W = (0, s.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(S().title, S().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, r.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: S().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        L &&
                                            (0, r.jsx)(f.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: S().link,
                                                children: (0, r.jsx)(u.HL, {
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
                        }, [C, L]),
                        k = (0, s.useMemo)(
                            () =>
                                (null == n ? void 0 : n.type) === p.Z.UNSAFE
                                    ? (0, r.jsxs)('div', {
                                          className: S().buttons,
                                          children: [
                                              (0, r.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: R,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: S().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, r.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, r.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: S().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: n.entityType && E[n.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)('div', {
                                          className: S().buttons,
                                          children: (0, r.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: A,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: S().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, r.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == n ? void 0 : n.entityType, null == n ? void 0 : n.type, A, R],
                        );
                    return (0, r.jsx)('div', {
                        className: (0, i.$)(S().root, I),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, r.jsxs)('div', { className: S().container, children: [W, k] }),
                    });
                });
        },
        28991: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContent: 'ArtistConcertsPage_scrollableContent__aiEjd',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        30436: (e, t, n) => {
            'use strict';
            n.d(t, { f: () => r });
            let r = () => ({ timeStyle: 'short' });
        },
        30915: (e, t, n) => {
            'use strict';
            n.d(t, { u: () => a });
            var r = n(55178),
                i = n(20599);
            function a() {
                return (0, r.useContext)(i.E);
            }
        },
        31010: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i, P: () => a });
            var r = n(55178);
            let i = (0, r.createContext)(null),
                a = () => (0, r.useContext)(i);
        },
        32468: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var r = n(32290),
                i = n(77088),
                a = n.n(i);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: a().empty });
            };
        },
        37240: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => a });
            var r = n(55178),
                i = n(1176);
            function a() {
                return (0, r.useContext)(i.r);
            }
        },
        37340: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => c });
            var r = n(32290),
                i = n(63618),
                a = n(60900),
                s = n(79856),
                l = n(61420),
                o = n.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: n } = e,
                    { formatMessage: l } = (0, a.A)();
                return (0, r.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, i.$)(o().root, t),
                    children: [
                        (0, r.jsx)(s.W, { className: o().date, radius: 'm', isActive: n }),
                        (0, r.jsxs)('div', {
                            className: o().meta,
                            children: [
                                (0, r.jsx)(s.W, { className: o().title, radius: 's', isActive: n }),
                                (0, r.jsx)(s.W, { className: o().description, radius: 's', isActive: n }),
                            ],
                        }),
                        (0, r.jsx)(s.W, { className: o().action, radius: 'l', isActive: n }),
                    ],
                });
            };
        },
        37997: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => u });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(48922),
                l = n(47745),
                o = n(2792),
                c = n(37240),
                d = n(62376);
            let u = (e) => {
                let { artistId: t, viewUuid: n } = e,
                    u = (0, a.st)(),
                    { hash: _ } = (0, a.gf)(),
                    { pageId: b } = (0, c.$)(),
                    { objectsCount: m, objectType: v, objectId: N, objectPosX: p, objectPosY: x, objectPos: f } = (0, o.J)(),
                    g = (0, l.N)(),
                    S = (0, d.U)(),
                    E = (0, r.useCallback)(
                        (e) => {
                            let n = (0, i.Fx)({
                                params: { hash: _, artistId: t, objectsCount: m, objectType: v, objectId: N, objectPosX: p, objectPosY: x, to: e },
                                logger: S,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            u && n && (0, i.U6)(u.evgenInstance, n);
                        },
                        [u, t, _, S, N, p, x, v, m],
                    ),
                    I = (0, r.useCallback)(
                        (e) => {
                            let r = (0, i.Fx)({
                                params: { hash: _, artistId: t, viewUuid: n, objectId: N, objectPos: f, to: e },
                                logger: S,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            u && r && n && (0, i.mh)(u.evgenInstance, r);
                        },
                        [u, t, _, S, N, f, n],
                    );
                return (0, r.useCallback)(
                    (e) => {
                        if (u && b && s.xK.includes(b))
                            switch (b) {
                                case s._Q.ARTIST:
                                    E(e);
                                    break;
                                case s._Q.ARTIST_CONCERTS:
                                    I(e);
                                    break;
                                case s._Q.SEARCH:
                                    g({ to: i.QT.ConcertPurchaseScreen });
                            }
                    },
                    [u, b, g, I, E],
                );
            };
        },
        42125: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => d });
            var r = n(3266),
                i = n(55178),
                a = n(14190),
                s = n(73422),
                l = n(84570),
                o = n(64552);
            let c = (0, i.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        n = (0, l.k)(a.pE[a.cy], t),
                        i = await c(n);
                    return (e, t) => {
                        let a = null == i ? void 0 : i[e.id],
                            s = '';
                        return (Array.isArray(a) || 'string' == typeof a) && (s = new r.S(a, n).format(t)), Array.isArray(s) ? s.join('') : s;
                    };
                };
        },
        42406: (e, t, n) => {
            'use strict';
            n.d(t, { BL: () => d, Gv: () => o, L5: () => c });
            var r,
                i = n(55178),
                a = {
                    5663: (e, t, n) => {
                        Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0);
                        let r = n(810),
                            { innerWidth: i = 0, innerHeight: a = 0 } = window;
                        function s(e) {
                            let { top: t, right: n, bottom: r, left: s } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= a) || (r >= 0 && r <= a)) && ((s >= 0 && s <= i) || (n >= 0 && n <= i));
                        }
                        function l(e) {
                            var t, n;
                            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (n = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, r)) ? n : e.attributes[0];
                        }
                        function o(e, t) {
                            let n = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, n);
                                });
                            }, t);
                            return n;
                        }
                        (t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = s),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, n, i) {
                                let [{ freezeOnceVisible: a, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof n || void 0 === n ? [t.defaultOptions, n] : [{ ...t.defaultOptions, ...n }, i],
                                    [_, b] = (0, r.useState)({}),
                                    m = (0, r.useRef)(new Set()),
                                    v = (0, r.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && v) {
                                                          if (m.current.has(t)) return;
                                                          b((n) => ({ ...n, [t]: { isIntersecting: e.isIntersecting } })),
                                                              a && e.isIntersecting && (m.current.add(t), v.unobserve(e.target));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, r.useLayoutEffect)(
                                        () => (
                                            v &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = s(e.current))) {
                                                            let t = l(e.current);
                                                            b((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || v.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                v && v.disconnect();
                                            }
                                        ),
                                        [u, v, e.length],
                                    ),
                                    _
                                );
                            });
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {},
                l = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return a[t](r, r.exports, e), r.exports;
                })(5663);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var c = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var d = l.useIntersectionObserver;
        },
        44242: (e, t, n) => {
            'use strict';
            function r(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            n.d(t, { X: () => r });
        },
        44989: (e, t, n) => {
            'use strict';
            n.d(t, { e: () => o });
            var r,
                i = n(55178),
                a = {
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {},
                l = {};
            (() => {
                Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0);
                let e = (function e(t) {
                    var n = s[t];
                    if (void 0 !== n) return n.exports;
                    var r = (s[t] = { exports: {} });
                    return a[t](r, r.exports, e), r.exports;
                })(810);
                l.useToggle = (t) => {
                    let [n, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let i = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        a = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: n, toggle: i, setState: r, toggleTrue: a, toggleFalse: s };
                };
            })(),
                l.__esModule;
            var o = l.useToggle;
        },
        46646: (e, t, n) => {
            var r = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function i(e) {
                if (!n.o(r, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = r[e],
                    i = t[0];
                return n.e(t[1]).then(() => n.t(i, 19));
            }
            (i.keys = () => Object.keys(r)), (i.id = 46646), (e.exports = i);
        },
        47098: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 85786));
        },
        47216: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var r = n(94821);
            let i = '@yandexmusic';
            function a(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : { card: r.W.APP, site: i, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        47498: (e, t, n) => {
            'use strict';
            n.d(t, { R: () => a });
            var r = n(55178),
                i = n(9848);
            function a() {
                return (0, r.useContext)(i.F);
            }
        },
        47745: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => x });
            var r = n(55178),
                i = n(16172),
                a = n(52068),
                s = n(6752),
                l = n(62376),
                o = n(1677),
                c = n(79374),
                d = n(48922),
                u = n(84782),
                _ = n(30915),
                b = n(18746),
                m = n(2792),
                v = n(37240),
                N = n(51012),
                p = n(47498);
            let x = () => {
                let e = (0, a.st)(),
                    t = (0, l.U)(),
                    { hash: n } = (0, a.gf)(),
                    { pageId: x, displayReasonId: f, pagePlacement: g, pageStyle: S } = (0, v.$)(),
                    { tabId: E, tabPos: I, isTabSelectedByDefault: C } = (0, p.R)(),
                    { offsetBlockPosY: h } = (0, _.u)(),
                    { blockId: T, blockType: y, blockPosX: A, blockPosY: L, mainObjectId: O, mainObjectType: R, displayReasonId: W } = (0, u.N)(),
                    { filterKey: k, filterValue: P, filterPos: D } = (0, b.G)(),
                    { objectId: w, objectPosX: M, objectPosY: j, objectType: Q, objectsCount: U } = (0, m.J)(),
                    { skeleton: B } = (0, N.b)(),
                    F = null != W ? W : f,
                    V = (0, s.L)(() => (void 0 !== h && void 0 !== L ? h + L : L));
                return (0, r.useCallback)(
                    (r) => {
                        let { to: a, objectId: s, objectType: l, deepLink: u, objectPosY: _ } = r;
                        if (!e || !x || !d.xK.includes(x) || !d.fD.includes(x)) return;
                        let b = o.F[x];
                        if (!b) return;
                        let m = {
                            hash: n,
                            pageId: b,
                            pagePlacement: null != g ? g : i.c4.Fullscreen,
                            pageStyle: null != S ? S : i.QL.Fullscreen,
                            entityType: y,
                            entityId: T,
                            entityPosX: A,
                            entityPosY: V,
                            objectId: null != s ? s : w,
                            objectType: null != l ? l : Q,
                            objectPosX: M,
                            objectPosY: null != _ ? _ : j,
                            objectsCount: U,
                            from: c.W[x],
                            to: a,
                        };
                        void 0 !== k && ((m.filterKey = k), (m.filterValue = P), (m.filterPos = D)),
                            d.qG.includes(x) && ((m.tabId = E), (m.tabPos = I), (m.isTabSelectedByDefault = C)),
                            B && (m.skeletonId = B),
                            u && (m.deepLink = u),
                            O && R && ((m.mainObjectType = R), (m.mainObjectId = O)),
                            F && (m.displayReasonId = F);
                        let v = (0, i.Fx)({ params: m, logger: t, context: 'useSendEventOnBlockNavigated' });
                        v && (0, i.QS)(e.evgenInstance, v);
                    },
                    [w, Q, e, x, n, g, S, y, T, A, V, k, P, D, M, j, U, B, O, R, F, t, E, I, C],
                );
            };
        },
        48922: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => r, fD: () => a, qG: () => s, xK: () => i });
            var r = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACCEPTING_INVITATION_SCREEN = 'multivibe_accepting_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_ALONE_SCREEN = 'multivibe_alone_screen'),
                    (e.MULTIVIBE_INVALID_INVITATION_SCREEN = 'multivibe_invalid_invitation_screen'),
                    (e.MULTIVIBE_PENDING_INVITATION_SCREEN = 'multivibe_pending_invitation_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_ALREADY_EXIST_SCREEN = 'multivibe_already_exist_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                a = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_accepting_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_alone_screen',
                    'multivibe_invalid_invitation_screen',
                    'multivibe_pending_invitation_screen',
                    'multivibe_already_exist_screen',
                ],
                s = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        51012: (e, t, n) => {
            'use strict';
            n.d(t, { b: () => a });
            var r = n(55178),
                i = n(3064);
            function a() {
                return (0, r.useContext)(i.D);
            }
        },
        51714: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => s });
            var r = n(55178),
                i = n(31010),
                a = n(36477);
            let s = (e) => {
                var t;
                let { setDeeplink: n } = null != (t = (0, i.P)()) ? t : {};
                (0, r.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, a.u)('/artist/:artistId', { params: { artistId: e } });
                        null == n || n(t);
                    }
                    return () => {
                        null == n || n(null);
                    };
                }, [e, n]);
            };
        },
        52068: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => b, st: () => a, gf: () => l });
            var r = n(55178);
            let i = (0, r.createContext)(null);
            function a() {
                return (0, r.useContext)(i);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function l() {
                return (0, r.useContext)(s);
            }
            var o = n(32290),
                c = n(27576);
            let d = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, o.jsx)(s.Provider, { value: n, children: t });
            };
            var u = n(16172);
            let _ = null,
                b = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: a, logger: s, metrika: l } = e,
                        c = (0, r.useMemo)(() => {
                            if (_) return _;
                            let e = (0, u.vD)((e) => l.count(e, a), s, t),
                                n = (0, u.xU)(),
                                r = (0, u.$N)();
                            return (_ = new u.gK(e, n, r));
                        }, [s, l]);
                    return (0, o.jsx)(i.Provider, { value: c, children: (0, o.jsx)(d, { children: n }) });
                };
        },
        52575: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        57815: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => i });
            var r = n(87151);
            let i = (e) => {
                var t, n;
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
                                            disclaimers: (0, r.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (n = e.isAvailable) || n, disclaimers: (0, r.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        58054: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => S });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(60900),
                l = n(39407),
                o = n(21732),
                c = n(71926),
                d = n(14858),
                u = n(8626),
                _ = n(31010),
                b = n(61945),
                m = n(57594),
                v = (function (e) {
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
            let N = (e, t, n) => {
                switch (e) {
                    case v.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case v.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                    case v.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                    case v.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                    case v.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case v.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                    case v.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                }
            };
            var p = n(61258),
                x = n(77088),
                f = n.n(x);
            let g = (0, a.PA)((e) => {
                    let { className: t } = e,
                        { location: n } = (0, m.g)(),
                        { formatDate: a } = (0, s.A)(),
                        { language: d } = (0, b.h)();
                    return (0, r.jsxs)('div', {
                        className: (0, i.$)(f().copyrights, t),
                        'data-test-id': o.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    a(new Date(), (0, u.m)()),
                                    ' \xa0',
                                    (0, r.jsx)(p.N, {
                                        target: '_blank',
                                        href: N(v.YANDEX, n.tld, d),
                                        className: (0, i.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': o.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, r.jsx)(l.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(p.N, {
                                target: '_blank',
                                href: N(v.YANDEX_PROJECTS, n.tld, d),
                                className: f().copyrightLink,
                                'data-test-id': o.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, r.jsx)(l.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                S = (0, a.PA)((e) => {
                    var t;
                    let { className: n } = e,
                        { user: a, location: s } = (0, m.g)(),
                        { isEnabled: u } = null != (t = (0, _.P)()) ? t : {},
                        { language: x } = (0, b.h)(),
                        S = (0, d.w)(!0),
                        E = ((e) => {
                            let { platform: t, tld: n, language: i, userRegion: a } = e,
                                s = { title: (0, r.jsx)(l.A, { id: 'footer.links-copyright-holders' }), url: N(v.COPYRIGHT_HOLDER, n, i) },
                                o = { title: (0, r.jsx)(l.A, { id: 'footer.links-privacy-policy' }), url: N(v.PRIVACY_POLICY, n, i) },
                                c = { title: (0, r.jsx)(l.A, { id: 'footer.links-terms' }), url: N(v.AGREEMENT, n, i) },
                                d = { title: (0, r.jsx)(l.A, { id: 'footer.links-recommendation-rules' }), url: N(v.RECOMMENDATION_RULES, n, i) },
                                u = { title: (0, r.jsx)(l.A, { id: 'footer.links-help' }), url: N(v.HELP, n, i) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [s, c, d];
                                    return 'ru' === a && e.push(o), e.push(u), e;
                                }
                                case 'desktop':
                                    return [s, c, d, u];
                            }
                        })({ platform: 'desktop', tld: s.tld, language: x, userRegion: a.account.data.userSessionRegionIso });
                    return (0, r.jsxs)('footer', {
                        className: (0, i.$)(f().root, f().important, { [f().root_withOffsetForDeeplink]: u }, n),
                        'data-test-id': o.S7.FOOTER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: f().links,
                                children: [
                                    (0, r.jsx)('ol', {
                                        className: f().list,
                                        'data-test-id': o.S7.FOOTER_LINKS_LIST,
                                        children: E.map((e) => {
                                            let { title: t, url: n } = e;
                                            return (0, r.jsx)(
                                                'li',
                                                {
                                                    className: f().item,
                                                    children: (0, r.jsx)(p.N, {
                                                        target: '_blank',
                                                        href: n,
                                                        className: f().link,
                                                        'data-test-id': o.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                n,
                                            );
                                        }),
                                    }),
                                    (0, r.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: f().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: S },
                                        'data-test-id': o.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(g, {}),
                        ],
                    });
                });
        },
        58359: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => i });
            var r = {};
            Object.defineProperty(r, '__esModule', { value: !0 }),
                (r.createRipple = void 0),
                (r.createRipple = function (e, t, n) {
                    let r = null != n ? n : e.currentTarget,
                        i = document.createElement('span'),
                        a = Math.max(r.clientWidth, r.clientHeight),
                        s = a / 2,
                        l = r.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    (i.style.width = ''.concat(a, 'px')),
                        (i.style.height = ''.concat(a, 'px')),
                        (i.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                        (i.style.top = ''.concat(c - s, 'px')),
                        i.classList.add(t);
                    let d = r.getElementsByClassName(t)[0];
                    d && d.remove(), r.insertBefore(i, r.firstChild);
                }),
                r.__esModule;
            var i = r.createRipple;
        },
        61258: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => v });
            var r = n(32290),
                i = n(96103),
                a = n(59611),
                s = n.n(a),
                l = n(55178),
                o = n(91027),
                c = n(63887),
                d = n(57594),
                u = n(79406),
                _ = n(36477);
            let b = (e) => {
                    let [t, n] = (0, l.useState)(!1),
                        i = (0, o.c)(() => {
                            n(!0);
                        });
                    return (0, r.jsx)(s(), { prefetch: t, ...e, onMouseEnter: i });
                },
                m = (0, i.PA)((e) => {
                    let { forwardedRef: t, href: n, component: i, ...a } = e,
                        { experiments: o } = (0, d.g)(),
                        { href: m, target: v, rel: N } = (0, _.u)(null != n ? n : ''),
                        p = o.checkExperiment(u.z.WebNextDisablePrefetchRequests, 'on'),
                        x = o.checkExperiment(u.z.WebNextDisablePrefetchRequests, 'hover'),
                        f = (0, l.isValidElement)(i)
                            ? i
                            : (function (e, t, n) {
                                  return e ? (t ? (0, r.jsx)(s(), { prefetch: !1 }) : n ? (0, r.jsx)(b, { href: e }) : (0, r.jsx)(s(), {})) : (0, r.jsx)('a', {});
                              })(n, p, x);
                    return (0, r.jsx)(c.N, { ref: t, component: f, href: n ? m : void 0, target: v, rel: N, ...a });
                }),
                v = (0, l.forwardRef)((e, t) => (0, r.jsx)(m, { ...e, forwardedRef: t }));
        },
        61420: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        61744: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => b });
            var r = n(32290),
                i = n(96103),
                a = n(55178),
                s = n(39407),
                l = n(21732),
                o = n(6752),
                c = n(71926),
                d = n(98066),
                u = n(10570),
                _ = n.n(u);
            let b = (0, i.PA)((e) => {
                let { id: t, concert: n, withCashback: i = !0, withInlineMeta: u = !1, titleSize: b = 'm' } = e,
                    m = [],
                    v = (0, r.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                (null == n ? void 0 : n.eventKind) &&
                    m.push(
                        (0, r.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, r.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: n.eventKind } }),
                        }),
                    ),
                    (null == n ? void 0 : n.contentRating) &&
                        m.push(
                            v,
                            (0, r.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: n.contentRating,
                            }),
                        );
                let N = (0, o.L)(() =>
                    (null == n ? void 0 : n.city)
                        ? (0, r.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: n.city,
                          })
                        : null,
                );
                return (
                    u && N && m.push(v, N),
                    (0, r.jsxs)('div', {
                        className: _().root,
                        id: t,
                        children: [
                            (0, r.jsx)(c.HL, {
                                variant: 'div',
                                size: b,
                                weight: 'medium',
                                className: _().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == n ? void 0 : n.title,
                            }),
                            (0, r.jsx)('div', { className: _().info, children: m.map((e, t) => (0, a.cloneElement)(e, { key: t })) }),
                            !u && N,
                            i &&
                                (null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                n.cashbackValuePercent &&
                                (0, r.jsx)(d.m, { className: _().cashback, valuePercent: n.cashbackValuePercent }),
                            i &&
                                !(null == n ? void 0 : n.isIdentityExperimentEnabled) &&
                                (null == n ? void 0 : n.isCashbackExperimentEnabled) &&
                                n.cashbackTitle &&
                                (0, r.jsx)(d.m, { className: _().cashback, title: n.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        62980: (e, t, n) => {
            'use strict';
            n.d(t, { d: () => u });
            var r = n(32290),
                i = n(63618),
                a = n(60900),
                s = n(21732),
                l = n(71926),
                o = n(83560),
                c = n(19111),
                d = n.n(c);
            let u = (e) => {
                let { datetime: t, className: n, monthClassName: c, dayClassName: u, weekdayClassName: _, withWeekday: b = !0, ...m } = e,
                    { formatDate: v } = (0, a.A)(),
                    N = ((e) => {
                        let { formatMessage: t } = (0, a.A)(),
                            n = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return n[new Date(e).getMonth()];
                    })(t);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(d().root, n),
                    'aria-label': v(t, (0, o.s)()),
                    ...m,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, i.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: N,
                        }),
                        (0, r.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, i.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: v(t, { day: 'numeric' }),
                        }),
                        b &&
                            (0, r.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, i.$)(d().weekday, _),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: v(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        63887: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => c });
            var r,
                i = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                                            else for (n in t) t[n] && (i && (i += ' '), (i += n));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    9829: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = {
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
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: n, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    3937: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0);
                        let i = n(4377),
                            a = n(810),
                            s = n(5881),
                            l = r(n(9829)),
                            o = (e) => {
                                let {
                                        component: t = (0, i.jsx)('a', {}),
                                        block: n,
                                        target: r,
                                        rel: o,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: b,
                                        className: m,
                                        children: v,
                                        textClassName: N = '',
                                        containerClassName: p,
                                        ...x
                                    } = e,
                                    f = (0, a.useId)(),
                                    g = !a.Children.count(v),
                                    S = 'left' === u,
                                    E = null;
                                if (void 0 !== b) {
                                    var I;
                                    E = (0, a.cloneElement)(b, {
                                        className: (0, s.clsx)(
                                            l.default.icon,
                                            { [l.default['icon_position_'.concat(u)]]: !g && u },
                                            null == (I = b.props) ? void 0 : I.className,
                                        ),
                                        key: f,
                                    });
                                }
                                let C = (0, a.useMemo)(
                                    () =>
                                        b
                                            ? (0, i.jsxs)('div', {
                                                  className: (0, s.clsx)(l.default.iconContainer, p),
                                                  children: [S && E, !g && (0, i.jsx)('span', { className: N, children: v }), !S && E],
                                              })
                                            : v,
                                    [v, p, b, S, g, E, N],
                                );
                                return (0, a.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: r,
                                        rel: '_blank' === r && void 0 === o ? 'noopener noreferrer' : o,
                                        href: c,
                                        className: (0, s.clsx)(l.default.root, { [l.default.block]: n, [l.default.flexIcon]: b && _, [l.default.iconOnly]: b && g }, m),
                                        ...x,
                                        ...t.props,
                                    },
                                    C,
                                );
                            };
                        t.Link = (0, a.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'X', { value: !0 }), (o.r = void 0);
                var e = l(3937);
                Object.defineProperty(o, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = o.r;
            o.X;
        },
        64146: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        64552: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var r = n(29222),
                i = n(14190);
            let a = async (e) => e.then((e) => e.default),
                s = i.pE[i.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        n = t.get(e),
                        i = t.get('ru');
                    if (n) return n();
                    if (i) return i();
                    throw new r.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        65024: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => i });
            let r = new Set(Object.values(n(3785).M)),
                i = (e) => 'string' == typeof e && r.has(e);
        },
        70608: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            let r = (0, n(55178).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        71610: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => o });
            var r = n(32290),
                i = n(55178),
                a = n(27576),
                s = n(42406),
                l = n(80536);
            let o = (e) => {
                let { children: t } = e,
                    n = (0, i.useRef)({}),
                    o = (0, i.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = n.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, a.A)());
                                            r.callback(!0, e), (r.showed = !0), (r.viewUuid = e);
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    !e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId);
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, i.useCallback)((e) => {
                        var t;
                        !n.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (n.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, i.useCallback)((e) => {
                        let t = n.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete n.current[e]);
                    }, []);
                (0, i.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, i.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        73422: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => u });
            var r = n(91945),
                i = n(14190),
                a = n(84570),
                s = n(40363);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = n(64552);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(i.Xn);
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
                    return c((0, a.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, a.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, n, r;
                    let i = (0, a.k)(this.config, e);
                    i !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(i), null == (r = this.changeLanguageHandler) || r.onChangeLanguage(i));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, a.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, a.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, r._)(this, 'language', void 0),
                        (0, r._)(this, 'storage', void 0),
                        (0, r._)(this, 'dictionary', void 0),
                        (0, r._)(this, 'config', void 0),
                        (0, r._)(this, 'logger', void 0),
                        (0, r._)(this, 'changeLanguageHandler', void 0),
                        (0, r._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = i.pE[i.cy]),
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
                    this.language = (0, a.k)(this.config, d);
                }
            }
        },
        73818: (e, t, n) => {
            'use strict';
            n.d(t, { p: () => r });
            let r = (0, n(55178).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        74196: (e, t, n) => {
            'use strict';
            n.d(t, { q: () => c });
            var r,
                i = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                                            else for (n in t) t[n] && (i && (i += ' '), (i += n));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    4517: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: n, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    2865: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0);
                        let i = n(4377),
                            a = n(5881),
                            s = n(810),
                            l = r(n(4517));
                        t.SROnly = (e) => {
                            let { className: t, focusable: n, children: r, ...o } = e,
                                c = (0, a.clsx)(l.default.root, { [l.default.focusable]: n }, t);
                            return (0, s.isValidElement)(r)
                                ? (0, s.cloneElement)(r, { ...o, className: (0, a.clsx)(c, r.props.className) })
                                : (0, i.jsx)('span', { className: c, ...o, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0);
                var e = l(2865);
                Object.defineProperty(o, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = o.SROnly;
            o.__esModule;
        },
        74523: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let r = (e, t) => {
                let [n, r] = e.split('?'),
                    i = new URLSearchParams(r || '');
                for (let [e, n] of new URLSearchParams(t).entries()) i.set(e, n);
                let a = i.toString();
                return ''.concat(n).concat(a ? '?'.concat(a) : '');
            };
        },
        75127: (e, t, n) => {
            'use strict';
            n.d(t, { T: () => a });
            var r = n(32290),
                i = n(37340);
            let a = (e) => Array.from({ length: e }, (e, t) => (0, r.jsx)(i.W, {}, t));
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
        79374: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => a });
            var r = n(16172),
                i = n(48922);
            let a = {
                [i._Q.ALBUM]: r.QT.AlbumScreen,
                [i._Q.PLAYLIST]: r.QT.PlaylistScreen,
                [i._Q.HOME]: r.QT.MainScreen,
                [i._Q.ARTIST]: r.QT.ArtistScreen,
                [i._Q.ARTIST_TRACKS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_SIMILAR]: r.QT.ArtistScreen,
                [i._Q.ARTIST_ALBUMS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_DISCOGRAPHY]: r.QT.ArtistScreen,
                [i._Q.ARTIST_COMPILATIONS]: r.QT.ArtistScreen,
                [i._Q.ARTIST_CONCERTS]: r.QT.ArtistScreen,
                [i._Q.SEARCH]: r.QT.SearchScreen,
                [i._Q.OWN_COLLECTION]: r.QT.CollectionLandingScreen,
                [i._Q.LANDING]: r.QT.DynamicScreen,
                [i._Q.HISTORY]: r.QT.MusicHistoryScreen,
                [i._Q.NON_MUSIC]: r.QT.NonmusicLandingScreen,
                [i._Q.CHART]: r.QT.PlaylistListScreen,
                [i._Q.PODCAST]: r.QT.AlbumScreen,
                [i._Q.AUDIOBOOK]: r.QT.AlbumScreen,
                [i._Q.OWN_ALBUMS]: r.QT.CollectionAlbumsScreen,
                [i._Q.OWN_DISLIKES]: r.QT.CollectionTrackListScreen,
                [i._Q.OWN_ARTISTS]: r.QT.CollectionArtistsScreen,
                [i._Q.OWN_PLAYLISTS]: r.QT.CollectionPlaylistsScreen,
                [i._Q.FAMILIAR_YOU]: r.QT.TrackListScreen,
                [i._Q.ENTITIES]: r.QT.ObjectsGridScreen,
                [i._Q.TRAILER]: r.QT.TrailerScreen,
                [i._Q.PLAYER]: r.QT.ExpandedPlayerScreen,
                [i._Q.VIDEO_PLAYER]: r.QT.VideoScreen,
                [i._Q.TRACK_SCREEN]: r.QT.TrackScreen,
                [i._Q.PAYWALL]: r.QT.PaywallScreen,
                [i._Q.CONCERTS]: r.QT.ConcertsLandingScreen,
                [i._Q.CONCERT]: r.QT.ConcertScreen,
                [i._Q.CONCERT_LOCATION_SELECTOR]: r.QT.ConcertLocationSelector,
                [i._Q.PAGE_NOT_FOUND_SCREEN]: r.QT.PageNotFoundScreen,
                [i._Q.SLIDES_SCREEN]: r.QT.SlidesScreen,
                [i._Q.PROMOLANDING_ALBUM]: r.QT.PromolandingAlbumScreen,
                [i._Q.WAVE_LANDING_SCREEN]: r.QT.WaveLandingScreen,
                [i._Q.FACT_SCREEN]: r.QT.FactScreen,
                [i._Q.LUMEN_AWAKENING_SCREEN]: r.QT.LumenAwakeningScreen,
                [i._Q.COLLECTION_VIBE_ROOMS]: r.QT.MultivibeScreen,
                [i._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.QT.MultivibeSendingInvitationScreen,
                [i._Q.MULTIVIBE_ACCEPTING_INVITATION_SCREEN]: r.QT.MultivibeAcceptingInvitationScreen,
                [i._Q.MULTIVIBE_ACTION_SCREEN]: r.QT.MultivibeActionScreen,
                [i._Q.MULTIVIBE_ALONE_SCREEN]: r.QT.MultivibeAloneScreen,
                [i._Q.MULTIVIBE_INVALID_INVITATION_SCREEN]: r.QT.MultivibeInvalidInvitationScreen,
                [i._Q.MULTIVIBE_PENDING_INVITATION_SCREEN]: r.QT.MultivibePendingInvitationScreen,
                [i._Q.MULTIVIBE_LIMIT_SCREEN]: r.QT.MultivibeLimitScreen,
                [i._Q.MULTIVIBE_ALREADY_EXIST_SCREEN]: r.QT.MultivibeAlreadyExistScreen,
            };
        },
        79406: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => r });
            var r = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayAudioHeartBeat = 'WebNextPlayAudioHeartBeat'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextUseWaveQueue = 'WebNextUseWaveQueue'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextResetWaveSeeds = 'WebNextResetWaveSeeds'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextFlushDeferredFeedbacksOnContextSwitch = 'WebNextFlushDeferredFeedbacksOnContextSwitch'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextRealTimeWheelFeedbacks = 'WebNextRealTimeWheelFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextQ2VContextColor = 'WebNextQ2VContextColor'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    e
                );
            })({});
        },
        79589: (e, t, n) => {
            'use strict';
            n.d(t, { V: () => O });
            var r = n(32290),
                i = n(63618),
                a = n(96103),
                s = n(55178),
                l = n(16172),
                o = n(21732),
                c = n(91027),
                d = n(44989),
                u = n(58359),
                _ = n(63423),
                b = n(86269),
                m = n(23352),
                v = n(84062),
                N = n(57594),
                p = n(79406),
                x = n(36477),
                f = n(37997),
                g = n(52068),
                S = n(48922),
                E = n(2792),
                I = n(37240),
                C = n(62376),
                h = n(19522),
                T = n(12578),
                y = n(62980),
                A = n(52575),
                L = n.n(A);
            let O = (0, a.PA)((e) => {
                let {
                        artistId: t,
                        concert: n,
                        meta: a,
                        viewUuid: A,
                        radius: O = 'l',
                        className: R,
                        shouldSendAnalyticsOnHide: W,
                        forceAfishaWidget: k,
                        shouldShowMask: P,
                    } = e,
                    { state: D, toggleTrue: w, toggleFalse: M } = (0, d.e)(!1),
                    { experiments: j } = (0, N.g)(),
                    Q = !k && j.checkExperiment(p.z.WebNextConcertPage, 'on'),
                    { href: U } = (0, x.u)('/concert/:concertId', { params: { concertId: n.id } }),
                    B = (0, v.Z)(U),
                    F = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, g.st)(),
                            { hash: i } = (0, g.gf)(),
                            { pageId: a } = (0, I.$)(),
                            { objectsCount: o, objectType: c, objectId: d, objectPosX: u, objectPosY: _, objectPos: b } = (0, E.J)(),
                            m = (0, C.U)(),
                            v = (0, s.useCallback)(() => {
                                let e = (0, l.Fx)({
                                    params: { hash: i, artistId: t, objectsCount: o, objectType: c, objectId: d, objectPosX: u, objectPosY: _ },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && (0, l.HB)(r.evgenInstance, e);
                            }, [r, t, i, m, d, u, _, c, o]),
                            N = (0, s.useCallback)(() => {
                                let e = (0, l.Fx)({
                                    params: { hash: i, artistId: t, viewUuid: n, objectId: d, objectPos: b },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                r && e && n && (0, l.Z4)(r.evgenInstance, e);
                            }, [r, t, i, m, d, b, n]);
                        return (0, s.useCallback)(() => {
                            if (r && a && S.xK.includes(a))
                                switch (a) {
                                    case S._Q.ARTIST:
                                    case S._Q.CONCERT:
                                        v();
                                        break;
                                    case S._Q.ARTIST_CONCERTS:
                                        N();
                                }
                        }, [r, a, N, v]);
                    })({ artistId: t, viewUuid: A }),
                    V = (0, f.m)({ artistId: t, viewUuid: A }),
                    { ref: Y, intersectionPropertyId: H } = (0, m.n)({ callback: null !== t ? F : void 0, singleEvent: !W }),
                    G = (0, s.useId)(),
                    K = (0, s.useId)(),
                    z = (0, h.Y)()(n),
                    X = (0, c.c)((e) => {
                        (0, u.P)(e, L().ripple), Q && (B(e), V(l.H2.ConcertScreen));
                    }),
                    $ = (0, c.c)((e) => {
                        w(), V(l.H2.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault();
                    });
                return (0, r.jsxs)(b.t, {
                    radius: O,
                    className: (0, i.$)(L().root, R, { [L().root_withConcertsRedesign]: n.isIdentityExperimentEnabled }),
                    ref: Y,
                    'data-intersection-property-id': H,
                    onClick: X,
                    children: [
                        n.datetime &&
                            (0, r.jsx)(y.d, {
                                datetime: n.datetime,
                                id: G,
                                className: (0, i.$)(L().date, { [L().dateWithMask]: P, [L().important]: P }),
                                dayClassName: L().dateColor,
                                monthClassName: L().dateColor,
                            }),
                        (0, s.cloneElement)(a, { id: K, concert: n }),
                        n.dataSessionId &&
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: L().button,
                                        'aria-describedby': ''.concat(G, ' ').concat(K),
                                        'aria-label': z,
                                        onClick: $,
                                        'data-test-id': o.OA.concert.CONCERT_CARD_BUTTON,
                                        children: z,
                                    }),
                                    (0, r.jsx)(T.h, { dataSessionId: n.dataSessionId, isOpened: D, onOpen: w, onClose: M }),
                                ],
                            }),
                    ],
                });
            });
        },
        80536: (e, t, n) => {
            'use strict';
            n.d(t, { B: () => r });
            let r = (0, n(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83560: (e, t, n) => {
            'use strict';
            n.d(t, { s: () => r });
            let r = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => i, W: () => a });
            var r = n(55178);
            let i = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function a() {
                return (0, r.useContext)(i);
            }
        },
        83992: (e, t, n) => {
            'use strict';
            function r(e) {
                let { tld: t, url: n } = e;
                return n || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            n.d(t, { v: () => r });
        },
        84062: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => s });
            var r = n(21916),
                i = n(91027),
                a = n(36477);
            let s = (e) => {
                let t = (0, r.useRouter)(),
                    { href: n, target: s } = (0, a.u)(e);
                return (0, i.c)((e) => {
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        ('_blank' === s
                            ? ((e) => {
                                  let { target: t, rel: n } = (0, a.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, n);
                              })(n)
                            : t.push(n));
                });
            };
        },
        84570: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => r });
            let r = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        84782: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => a });
            var r = n(55178),
                i = n(73818);
            function a() {
                return (0, r.useContext)(i.p);
            }
        },
        85017: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r, n: () => i });
            var r = (function (e) {
                    return (e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e;
                })({}),
                i = (function (e) {
                    return (e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e;
                })({});
        },
        85786: (e, t, n) => {
            'use strict';
            n.r(t), n.d(t, { default: () => Z });
            var r = n(32290),
                i = n(21916),
                a = n(96103),
                s = n(55178),
                l = n(60900),
                o = n(27576),
                c = n(21732),
                d = n(46049),
                u = n(71926),
                _ = n(7999),
                b = n(91853),
                m = n(79589),
                v = n(13819),
                N = n(61744),
                p = n(48922),
                x = n(71610),
                f = n(26042),
                g = n(22714),
                S = n(83808),
                E = n(83920),
                I = n(3796),
                C = n(57594),
                h = n(79406),
                T = n(28724),
                y = n(58054),
                A = n(32468),
                L = n(74694),
                O = n(75127),
                R = n(16172),
                W = n(52068),
                k = n(62376),
                P = n(57815),
                D = n(22556),
                w = n(44242),
                M = n(14459),
                j = n(83992),
                Q = n(42125),
                U = n(24535),
                B = n(47216),
                F = n(94821),
                V = n(26365);
            async function Y(e, t) {
                var n, r, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let a = await (0, Q.W)(t.locale),
                    s = a({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    l = a({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, U.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        customImage: (0, j.v)({ tld: t.tld }),
                        siteName: a({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, B.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, M.k)(),
                    appLinks: (0, w.X)({
                        additional: { ...t, url: null != (r = t.url) ? r : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: a({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var H = n(22644),
                G = n(51714),
                K = n(28991),
                z = n.n(K);
            let X = (0, a.PA)((e) => {
                var t, n, a;
                let { artistId: w, preloadedArtist: M, preloadedConcerts: j } = e,
                    { artist: Q, disclaimerModalState: U, experiments: B } = (0, C.g)(),
                    F = B.checkExperiment(h.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: V } = (0, l.A)(),
                    { contentScrollRef: K, setContentScrollRef: X } = (0, E.g)(),
                    $ = (0, S.W)(),
                    Z = (0, s.useRef)(String((0, o.A)())),
                    J = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, W.st)(),
                            { hash: i } = (0, W.gf)(),
                            a = (0, k.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, R.Fx)({ params: { hash: i, artistId: t, viewUuid: n }, logger: a, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, R.__)(r.evgenInstance, e);
                        }, [r, t, i, a, n]);
                    })({ artistId: w, viewUuid: Z.current }),
                    q = ((e) => {
                        let { artistId: t, viewUuid: n } = e,
                            r = (0, W.st)(),
                            { hash: i } = (0, W.gf)(),
                            a = (0, k.U)();
                        return (0, s.useCallback)(() => {
                            if (!r || !t) return;
                            let e = (0, R.Fx)({ params: { hash: i, artistId: t, viewUuid: n }, logger: a, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, R.pe)(r.evgenInstance, e);
                        }, [r, t, i, a, n]);
                    })({ artistId: w, viewUuid: Z.current });
                (0, s.useEffect)(
                    () => (
                        J(),
                        () => {
                            q();
                        }
                    ),
                    [q, J],
                );
                let ee = (0, b.S)({ artist: null == (t = Q.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                (0, G.G)(w),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = Q.meta) ? void 0 : e.artist.isUnsafeLegal) && ee();
                    }, [null == (n = Q.meta) ? void 0 : n.artist.isUnsafeLegal, ee]),
                    (0, H._)(Q, w),
                    (0, s.useEffect)(
                        () => () => {
                            Q.concertsSubpage.reset();
                        },
                        [Q],
                    ),
                    (0, I.J)(Q.concertsSubpage.isResolved),
                    Q.concertsSubpage.isNotFound && (0, i.notFound)();
                let et = (0, s.useMemo)(() => {
                        var e;
                        if (Q.concertsSubpage.isLoading) return (0, O.T)(10);
                        let t = F ? N.M : v.Z;
                        return null == (e = Q.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, n) =>
                                  (0, r.jsx)(
                                      f.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: n + 1,
                                          children: (0, r.jsx)(m.V, {
                                              artistId: w,
                                              concert: e,
                                              viewUuid: Z.current,
                                              meta: (0, r.jsx)(t, { concert: e }),
                                              shouldShowMask: F,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [Q.concertsSubpage.concerts, Q.concertsSubpage.isLoading, w, F, Z]),
                    en = [];
                if (
                    (Q.concertsSubpage.isNeededToLoad && en.push(Q.concertsSubpage.getData({ artistId: Number(w), preloadedConcerts: j })),
                    Q.infoLoadingState.isNeededToLoad && en.push(Q.getInfo({ artistId: w, preloadedArtist: M })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                Y({ artist: (0, P.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, D.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(Q),
                    en.length && (0, s.use)(Promise.allSettled(en)),
                    null == (a = Q.meta) ? void 0 : a.artist.isLegalRejected)
                )
                    return (0, r.jsx)(T.M, { modalState: U });
                let er = (0, s.useMemo)(
                    () =>
                        F && Q.concertsSubpage.artistTitle
                            ? V({ id: 'page.artist-all-concerts-header' }, { artistName: Q.concertsSubpage.artistTitle })
                            : V({ id: 'page.artist-concerts-header' }, { artistName: Q.commonSubPage.artistName }),
                    [F, Q.concertsSubpage.artistTitle, Q.commonSubPage.artistName, V],
                );
                return (0, r.jsx)(g.n, {
                    pageId: p._Q.ARTIST_CONCERTS,
                    pageEntityId: w,
                    children: (0, r.jsx)(x.j, {
                        children: (0, r.jsx)(_.h, {
                            scrollElement: K,
                            outerTitle: er,
                            children: (0, r.jsxs)('div', {
                                className: z().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, r.jsx)(L.Y, {
                                        variant: L.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: $.canBack,
                                        children: (0, r.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: er }),
                                    }),
                                    (0, r.jsxs)(d.N, {
                                        ref: X,
                                        className: z().scrollableContent,
                                        containerClassName: z().container,
                                        children: [
                                            (0, r.jsx)('div', { className: z().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: et }),
                                            (0, r.jsx)(A.A, { children: (0, r.jsx)(y.w, { className: z().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var $ = n(17024);
            let Z = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return (e && (0, $.L)(e)) || (0, i.notFound)(), (0, r.jsx)(X, { artistId: e });
            };
        },
        86269: (e, t, n) => {
            'use strict';
            n.d(t, { t: () => c });
            var r,
                i = n(55178),
                a = {
                    5881: (e, t, n) => {
                        function r() {
                            for (var e, t, n = 0, r = ''; n < arguments.length; )
                                (e = arguments[n++]) &&
                                    (t = (function e(t) {
                                        var n,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (n = 0; n < t.length; n++) t[n] && (r = e(t[n])) && (i && (i += ' '), (i += r));
                                            else for (n in t) t[n] && (i && (i += ' '), (i += n));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        n.r(t), n.d(t, { clsx: () => r, default: () => i });
                        let i = r;
                    },
                    7152: (e, t, n) => {
                        n.r(t), n.d(t, { default: () => r });
                        let r = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var n = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: n, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        (t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r);
                    },
                    4377: (e, t, n) => {
                        e.exports = n(9097);
                    },
                    4788: function (e, t, n) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0);
                        let i = n(4377),
                            a = n(5881),
                            s = n(810),
                            l = r(n(7152)),
                            o = (e) => {
                                let { forwardRef: t, radius: n, variant: r = 'default', children: s, className: o, withShadow: c, style: d, ...u } = e;
                                return (0, i.jsx)('div', {
                                    className: (0, a.clsx)(
                                        l.default.root,
                                        l.default['root_radius_'.concat(n)],
                                        l.default['root_variant_'.concat(r)],
                                        { [l.default.root_withShadow]: c },
                                        o,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = n.t(i, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var n = (s[e] = { exports: {} });
                return a[e].call(n.exports, n, n.exports, l), n.exports;
            }
            (l.d = (e, t) => {
                for (var n in t) l.o(t, n) && !l.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 });
                });
            var o = {};
            (() => {
                Object.defineProperty(o, 'U', { value: !0 }), (o.X = void 0);
                var e = l(4788);
                Object.defineProperty(o, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = o.X;
            o.U;
        },
        87151: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i });
            var r = n(65024);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        91853: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => i });
            var r = n(19383);
            let i = (e) => {
                let { artist: t, callback: n, shouldHistoryBack: i } = e;
                return (0, r.l)({ entity: t, callback: n, modalBehavior: void 0 === i ? void 0 : { shouldHistoryBack: i }, preventDefaultWhenSafe: !0 });
            };
        },
        94821: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => r });
            var r = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
        97201: (e, t, n) => {
            'use strict';
            n.d(t, { K: () => r });
            var r = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.MULTIVIBE_INVITE_ROOM_ID = 'multivibeInviteRoomId'),
                    e
                );
            })({});
        },
        98066: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => d });
            var r = n(32290),
                i = n(63618),
                a = n(21732),
                s = n(82586),
                l = n(71926),
                o = n(64146),
                c = n.n(o);
            let d = (e) => {
                let { title: t, className: n, titleClassName: o, valuePercent: d } = e;
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(c().root, n),
                    children: [
                        (0, r.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, r.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, i.$)(c().title, o),
                            'data-test-id': a.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
    },
    (e) => {
        e.O(
            0,
            [
                7258, 6639, 7034, 5718, 4100, 6706, 8892, 2536, 66, 5835, 2812, 8035, 2732, 1410, 3266, 6713, 6477, 7275, 2586, 8347, 4522, 4668, 1175, 4638, 4220, 9562,
                7358,
            ],
            () => e((e.s = 47098)),
        ),
            (_N_E = e.O());
    },
]);
