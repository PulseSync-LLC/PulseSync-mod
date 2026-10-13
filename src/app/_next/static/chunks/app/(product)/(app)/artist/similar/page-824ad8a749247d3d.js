(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9846],
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
        1797: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var a = i(40207);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, a.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var a = i(25839),
                n = i(33660),
                r = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let g = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [g, _] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, s.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (g) return;
                    let r = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    _(!0);
                    let s = await e.toggleLike();
                    (_(!1),
                        s === l.f.OK
                            ? i((0, a.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, a.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, g, h, i]);
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var a = i(44806);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: r } = e;
                return 'ru' === r && t(a.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        12234: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            var a = i(71872);
            function n(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(a.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, i) => {
            var a = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 12526), (e.exports = n));
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
        14514: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            let a = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        17951: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => n });
            var a = i(61399);
            let n = (e) => {
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
        19386: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(74631),
                n = i(43354),
                r = i(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, n.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, r.u)('/artist/:artistId', { params: { artistId: e } });
                        null == i || i(t);
                    }
                    return () => {
                        null == i || i(null);
                    };
                }, [e, i]);
            };
        },
        19412: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var a = i(25839),
                n = i(82298),
                r = i(61493),
                s = i(23976),
                l = i(40828),
                o = i.n(l);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: l,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: g = 3,
                    withSubcover: _,
                    radius: h = 'l',
                } = e;
                return (0, a.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        _ && (0, a.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, a.jsx)(s.W, { isActive: t, className: (0, n.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: _ }), radius: h }),
                        m &&
                            (0, a.jsx)('div', {
                                className: (0, n.$)(o().infoContainer, o()['content_linesCount_'.concat(g)], { [o().infoContainer_centered]: u }),
                                children: (0, a.jsx)(s.W, { isActive: t, className: (0, n.$)(o().title, { [o().title_withSubcover]: _ }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => V });
            var a = i(25839),
                n = i(88204),
                r = i(39004),
                s = i(36619),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                g = i(74631),
                _ = i(31860),
                h = i(91149),
                p = i(92942),
                v = i(27954),
                x = i(57549),
                f = i(86869),
                y = i(69084),
                A = i(4254),
                k = i(51790),
                E = i(6323),
                N = i(24596),
                T = i.n(N);
            let C = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: s } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(k.$, {
                    closeToast: s,
                    message: (0, a.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, a.jsx)(y.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(f.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, a.jsx)(E.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(A.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var j = i(7361),
                b = i(90613),
                S = i(3210),
                I = i(11609),
                L = i(79367),
                O = i(40110),
                R = i(20258),
                D = i(34159),
                P = i(30290),
                w = i(29872),
                M = i(56120),
                z = i(87201),
                U = i(83014),
                W = i(44806),
                H = i(55491),
                B = i(44851),
                F = i(14240),
                K = i(56615),
                Y = i(16386),
                G = i(67303),
                X = i(74682),
                $ = i(59043),
                Z = i(2144),
                J = i(6304);
            let V = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: f, onOpenChange: y, open: A, ...k } = e,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: N } = (0, w.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: V },
                        trailer: q,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, b.A)(f),
                    ei = (0, j.K)(f),
                    ea = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, p.l)(),
                            [n, s] = (0, g.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, a.jsx)(x.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (n) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === _.f.OK
                                    ? i((0, a.jsx)(C, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, a.jsx)(x.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(f),
                    en = (0, D.F)(),
                    er = ''.concat(O.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, r.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, z.B)({
                        seeds: null != (n = null == f ? void 0 : f.seeds) ? n : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    eg = (0, L.P)(),
                    e_ = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (E && Q.isAuthorized) return void N();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!eg()) {
                            if (E) return void N();
                            (null == f ? void 0 : f.id) && (q.setUtmLink(el), q.openArtistTrailer(f.id), en(s.DomainObjectType.Artist, f.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        V.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let ex = { variant: H.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    ey = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(W.z.WebNextArtistInfo, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        ef && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(I.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)(G.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        ey && (0, a.jsx)(J.WithOffline, { fallback: (0, a.jsx)($.N, { onClick: ep }) }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(Z.C, { onClick: eh, disabled: !(null == f ? void 0 : f.isAvailable), variant: B.I.ARTIST, onOpenMenuChange: y }),
                        }),
                        (0, a.jsx)(X.H, { disabled: !f, shareLink: eo, entityMeta: ex }),
                        eA &&
                            (0, a.jsx)(J.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, a.jsx)(J.WithOffline, {
                            fallback: (0, a.jsx)(K.D, { onClick: ea, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
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
        26076: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var a = i(25839);
            i(93588);
            var n = i(400),
                r = i.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        26208: (e, t, i) => {
            'use strict';
            function a(e) {
                let { tld: t, url: i } = e;
                return i || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            i.d(t, { v: () => a });
        },
        27935: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var a = i(89288),
                n = i(28869);
            function r(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: r, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, a.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: r,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || n.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        28604: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => n });
            var a = i(74631);
            let n = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var a = i(58025),
                n = i(78773),
                r = i(14514),
                s = i(56107);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = i(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = i(55040);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(n.Xn);
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
                    return c((0, r.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, r.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, i, a;
                    let n = (0, r.k)(this.config, e);
                    n !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(n), null == (a = this.changeLanguageHandler) || a.onChangeLanguage(n));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, r.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, r.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
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
                        (this.config = n.pE[n.cy]),
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
                    this.language = (0, r.k)(this.config, d);
                }
            }
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
        41016: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s });
            var a = i(71872),
                n = i(80461);
            let r = '@yandexmusic';
            function s(e) {
                return e.cardType === n.W.SUMMARY_LARGE_IMAGE
                    ? { card: n.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : {
                          card: n.W.APP,
                          site: r,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(a.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => r });
            var a = i(74631);
            let n = (0, a.createContext)(null),
                r = () => (0, a.useContext)(n);
        },
        43464: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => n });
            let a = new Set(Object.values(i(85705).M)),
                n = (e) => 'string' == typeof e && a.has(e);
        },
        46646: (e, t, i) => {
            var a = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function n(e) {
                if (!i.o(a, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = a[e],
                    n = t[0];
                return i.e(t[1]).then(() => i.t(n, 19));
            }
            ((n.keys = () => Object.keys(a)), (n.id = 46646), (e.exports = n));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var a = i(25895);
            let n = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        55040: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var a = i(36432),
                n = i(78773);
            let r = async (e) => e.then((e) => e.default),
                s = n.pE[n.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => r(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => r(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        n = t.get('ru');
                    if (i) return i();
                    if (n) return n();
                    throw new a.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => E });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(8487),
                o = i(61493),
                c = i(71035),
                d = i(4071),
                u = i(4254),
                m = i(36484),
                g = i(62562),
                _ = i(21784),
                h = i(53712),
                p = i(85686),
                v = i(12929),
                x = i(95067),
                f = i(97522),
                y = i(71472),
                A = i.n(y);
            let k = {
                    [v.n.ALBUM]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [v.n.PODCAST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [v.n.ARTIST]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [v.n.TRACK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [v.n.AUDIOBOOK]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [v.n.CLIP]: (0, a.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                E = (0, r.PA)((e) => {
                    var t;
                    let { modalState: i, data: r, onClose: y, className: E } = e,
                        N = null != r ? r : null == i ? void 0 : i.modalData,
                        T = (0, _.W)(),
                        C = (0, p.Z)(h.Z.main.href),
                        j = (0, g.N)().get(m.U2),
                        b = (0, c.c)(() => {
                            if (y) return y();
                            (T.canBack && T.back(), C());
                        }),
                        S = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        I = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = j.get(x.c.ExEx),
                                a = new Date(),
                                n = a.setMinutes(a.getMinutes() + 15),
                                r =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? j.set(x.c.ExEx, [...t, r], { expires: new Date(n) }) : j.set(x.c.ExEx, [r], { expires: new Date(n) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        L = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), T.canBack && T.back(), C()) : null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerRejectHandler) && i.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == i || i.reset();
                        },
                        [i],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (N) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, n.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: N.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: N.description,
                                        }),
                                        S &&
                                            (0, a.jsx)(f.N, {
                                                href: null == (e = N.details) ? void 0 : e.url,
                                                className: A().link,
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
                        }, [N, S]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == i ? void 0 : i.type) === v.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, a.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && k[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, a.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: b,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [I, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, b, L],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, n.$)(A().root, E),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: A().container, children: [O, R] }),
                    });
                });
        },
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var a = i(25839),
                n = i(88204),
                r = i(8487),
                s = i(61493),
                l = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        60738: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var a = i(25839),
                n = i(84059),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(8487),
                c = i(61493),
                d = i(13833),
                u = i(4254),
                m = i(78299),
                g = i(84058),
                _ = i(1407),
                h = i(1797),
                p = i(20258),
                v = i(10322),
                x = i(21784),
                f = i(89192),
                y = i(30716),
                A = i(27954),
                k = i(56412),
                E = i(99401),
                N = i(26076),
                T = i(10603),
                C = i(95772),
                j = i(17951),
                b = i(61732),
                S = i(12234),
                I = i(64595),
                L = i(26208),
                O = i(89221),
                R = i(27935),
                D = i(41016),
                P = i(80461),
                w = i(95445);
            async function M(e, t) {
                var i, a, n;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let r = await (0, O.W)(t.locale),
                    s = r({ id: 'metadata.artist-similar-title' }, { artistName: e.artist.name }),
                    l = r({ id: 'metadata.artist-similar-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, R.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        customImage: (0, L.v)({ tld: t.tld }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: P.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, I.k)(),
                    appLinks: (0, S.X)({
                        additional: { ...t, url: null != (a = t.url) ? a : '', fullUrl: null != (n = t.fullUrl) ? n : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, w.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var z = i(28604),
                U = i(19386),
                W = i(61495),
                H = i.n(W);
            let B = (0, r.PA)((e) => {
                var t, i, r, S;
                let { artistId: I, preloadedArtist: L, preloadedSimilarArtists: O } = e,
                    { artist: R, disclaimerModalState: D } = (0, A.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: w, setContentScrollRef: W } = (0, f.g)(),
                    B = (0, x.W)(),
                    F = (0, h.S)({ artist: null == (t = R.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, U.G)(I),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = R.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                    }, [null == (i = R.meta) ? void 0 : i.artist.isUnsafeLegal, F]),
                    (0, z._)(R, I),
                    (0, s.useEffect)(
                        () => () => {
                            R.similarArtistsSubPage.reset();
                        },
                        [R],
                    ),
                    R.similarArtistsSubPage.isNotFound && (0, n.notFound)(),
                    (0, y.J)(R.similarArtistsSubPage.isResolved));
                let K = (0, s.useMemo)(() => {
                        if (R.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = R.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, a.jsx)(g.a, { className: H().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.similar-artists' }) });
                        return (0, a.jsx)(C.e, { isActive: !0, itemClassName: H().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        R.similarArtistsSubPage.loadingState,
                        R.similarArtistsSubPage.similarArtists,
                        P,
                        null == (r = R.similarArtistsSubPage.similarArtists) ? void 0 : r.length,
                    ]),
                    Y = [];
                return (R.similarArtistsSubPage.isNeededToLoad && Y.push(R.similarArtistsSubPage.getData({ artistId: I, preloadedSimilarArtists: O })),
                R.infoLoadingState.isNeededToLoad && Y.push(R.getInfo({ artistId: I, preloadedArtist: L })),
                ((e) => {
                    var t;
                    (0, s.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            M({ artist: (0, j.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, b.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(R),
                Y.length && (0, s.use)(Promise.allSettled(Y)),
                null == (S = R.meta) ? void 0 : S.artist.isLegalRejected)
                    ? (0, a.jsx)(k.M, { modalState: D })
                    : R.isInfoSomethingWentWrong
                      ? (0, a.jsx)(m.SomethingWentWrong, {})
                      : (0, a.jsx)(v.n, {
                            pageId: p._Q.ARTIST_SIMILAR,
                            pageEntityId: I,
                            children: (0, a.jsx)(_.h, {
                                scrollElement: w,
                                outerTitle: P({ id: 'page.artist-similar-header' }, { artistName: R.commonSubPage.artistName }),
                                children: (0, a.jsxs)('div', {
                                    className: H().root,
                                    'data-test-id': c.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, a.jsx)(T.Y, {
                                            variant: T.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, a.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, a.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: R.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, a.jsxs)(d.N, {
                                            className: H().scrollableContent,
                                            containerClassName: H().container,
                                            ref: W,
                                            children: [
                                                (0, a.jsx)('div', { className: H().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: K }),
                                                (0, a.jsx)(N.A, { children: (0, a.jsx)(E.w, { className: H().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var F = i(61288);
            let K = () => {
                let e = (0, n.useSearchParams)().get('artistId');
                return ((e && (0, F.L)(e)) || (0, n.notFound)(), (0, a.jsx)(B, { artistId: e }));
            };
        },
        61288: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            let a = /^(0|[1-9]\d*)$/;
            function n(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        61399: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            var a = i(43464);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61495: (e) => {
            e.exports = {
                root: 'ArtistSimilarPage_root__rvTLl',
                scrollableContent: 'ArtistSimilarPage_scrollableContent__WD72A',
                container: 'ArtistSimilarPage_container__DDj5O',
                content: 'ArtistSimilarPage_content__X71xs',
                footer: 'ArtistSimilarPage_footer__FdVkO',
            };
        },
        61561: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            var a = i(27954),
                n = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: s,
                } = (0, a.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61732: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            let a = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let a = window.document.createElement('meta');
                    return (a.setAttribute(e, t), a);
                },
                n = (e) => {
                    let { title: t, description: i, openGraph: n } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = a('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (n) {
                        let e = 'string' == typeof n.title ? n.title : '',
                            t = 'string' == typeof n.description ? n.description : '',
                            i = Array.isArray(n.images) ? n.images[0] : null;
                        r = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = a('property', 'og:title'),
                            l = a('property', 'og:description'),
                            o = a('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', r),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        63149: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => l });
            var a = i(25839),
                n = i(53712),
                r = i(35015),
                s = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        64595: (e, t, i) => {
            'use strict';
            function a() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => a });
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
        71996: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var a = i(25839),
                n = i(74631),
                r = i(39004),
                s = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: g,
                            iconClassName: _,
                            className: h,
                            forwardRef: p,
                            style: v,
                            children: x,
                        } = e,
                        { formatMessage: f } = (0, r.A)(),
                        y = f({ id: 'trailer.button-aria-label' });
                    return (0, a.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: g,
                        ref: p,
                        icon: (0, a.jsx)(o.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: x,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, a.jsx)(d, { forwardRef: t, ...e }));
        },
        78049: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 60738));
        },
        78299: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => E });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                g = i(36619),
                _ = i(76945),
                h = i(59450),
                p = i(84e3),
                v = i(97952),
                x = i(89192),
                f = i(53712),
                y = i(15270),
                A = i(68854),
                k = i.n(A);
            let E = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    A = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: a } = (0, v.$)(),
                        n = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !a) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: a,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, _.z5)(t.evgenInstance, r);
                    }, [t, e, i, a, n]);
                })(A);
                let { sendRefreshEvent: E } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, v.$)(),
                            a = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, m.F)({
                                    params: {
                                        actionType: g.ActionType.Refresh,
                                        userInteractionType: g.UserInteractionType.Tap,
                                        entityType: g.EntityTypes.Error,
                                        entityId: g.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, _.bv)(e.evgenInstance, n);
                            }, [e, t, i, a]),
                        };
                    })(),
                    N = (0, s.useCallback)(() => {
                        (E(), (window.location.href = f.Z.main.href));
                    }, [E]),
                    { contentRef: T } = (0, x.g)();
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(k().root, t),
                    children: [
                        i &&
                            (0, a.jsx)(y.L, { withBackwardFallback: '/', className: (0, n.$)(k().navigation, { [k().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, a.jsxs)('div', {
                            className: (0, n.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, a.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, a.jsx)(u.DZ, { className: (0, n.$)(k().title, k().important), variant: 'h3', size: 'xs', children: A }),
                                (0, a.jsxs)(u.HL, {
                                    className: (0, n.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, a.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, a.jsx)(c.$, {
                                    onClick: N,
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
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var a = i(25839),
                n = i(39004),
                r = i(3392);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, n.A)();
                return (0, a.jsx)(r.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        78773: (e, t, i) => {
            'use strict';
            i.d(t, { Xn: () => r, cy: () => n, pE: () => a });
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
                n = 'yandex',
                r = 'ru-RU';
        },
        80461: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => a });
            var a = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(25839),
                n = i(35015),
                r = i(10546);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, a.jsx)(r.k, {
                    closeToast: i,
                    entityVariant: n.c.ARTIST,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    entityTitle: t.name,
                    isPinned: t.isPinned,
                    radius: 'round',
                });
            };
        },
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => H });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(36619),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                g = i(51246),
                _ = i(66738),
                h = i(86869),
                p = i(4254),
                v = i(1797),
                x = i(7361),
                f = i(90613),
                y = i(79367),
                A = i(29481),
                k = i(47009),
                E = i(34159),
                N = i(52512),
                T = i(30290),
                C = i(61561),
                j = i(85686),
                b = i(85743),
                S = i(50209),
                I = i(27954),
                L = i(6323),
                O = i(64720),
                R = i(97522),
                D = i(41580),
                P = i(49438),
                w = i(71996),
                M = i(78437),
                z = i(21971),
                U = i(13936),
                W = i.n(U);
            let H = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: U, topTitleElement: H, bottomTitleElement: B } = e,
                    { ref: F, intersectionPropertyId: K } = (0, N.n)(),
                    {
                        trailer: Y,
                        user: G,
                        paywall: { modal: X },
                    } = (0, I.g)(),
                    { from: $, utmLink: Z } = (0, T.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: J } = (0, l.A)(),
                    [V, q] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: ea, sendNavigateSearchFeedback: en, sendPlaySearchFeedback: er } = (0, b.z)(),
                    es = (0, A.N)(),
                    el = (0, k.b)(),
                    eo = (0, x.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: eg } = t,
                    e_ = (0, j.Z)(t.url),
                    [eh, ep] = (0, s.useState)(!1),
                    ev = (0, E.F)(),
                    ex = (0, y.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ex())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    ey = (0, s.useMemo)(() => {
                        let e = J({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = eg ? J({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, eg, J]),
                    { isPlaying: eA, togglePlay: ek } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: $, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eE = (0, v.S)({ artist: t, callback: e_ }),
                    eN = (0, v.S)({ artist: t, callback: ek }),
                    eT = (0, u.c)((e) => {
                        (null == en || en(), es({ to: o.AppScreen.ArtistScreen }), eE(e));
                    }),
                    eC = (0, C.N)(),
                    ej = (0, u.c)(() => {
                        if (!ex()) {
                            if (eC) return void X.open();
                            (V || eA || (q(!0), null == er || er()), eN(), el(!eA));
                        }
                    }),
                    eb = (0, u.c)(() => {
                        (Q || eg || (ee(!0), null == ea || ea()), eo());
                    }),
                    eS = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eL = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                z.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: et,
                                    onClick: eS,
                                    className: (0, n.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, a.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eI, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, a.jsx)(
                                M.n,
                                {
                                    children: (0, a.jsx)(w.k, {
                                        className: (0, n.$)(W().trailerButton, W().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ef,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ef]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(
                                D.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, n.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eD = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, a.jsx)(
                                g.hg,
                                {
                                    isVisible: et || eh,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        O.c,
                                        {
                                            className: (0, n.$)(W().likeButton, W().control),
                                            isLiked: eg,
                                            onClick: eb,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !G.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eL,
                                    pinControl: eR,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, a.jsx)(h.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, a.jsx)(L.B, {
                                            className: W().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ey,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eD,
                                    ],
                                }),
                            }),
                        [eT, em, ey, t.isAvailable, eD],
                    );
                return (0, a.jsx)(g.MN, {
                    ref: F,
                    className: (0, n.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': ey,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            H,
                            (0, a.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, a.jsx)(R.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ey,
                                    onClick: eT,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            B,
                        ],
                    }),
                    srTitle: (0, a.jsx)(R.N, { className: W().srTitleLink, href: t.url, onClick: eT, children: ey }),
                    'data-intersection-property-id': K,
                    contentLinesCount: U,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        85705: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { M: () => a }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track icon registration in the disclaimer icon enum
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track icon registration in the disclaimer icon enum
                })(a || (a = {})));
        },
        86166: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { $: () => a }),
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
        89221: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var a = i(13580),
                n = i(74631),
                r = i(78773),
                s = i(28869),
                l = i(14514),
                o = i(55040);
            let c = (0, n.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(r.pE[r.cy], t),
                        n = await c(i);
                    return (e, t) => {
                        let r = null == n ? void 0 : n[e.id],
                            s = '';
                        return ((Array.isArray(r) || 'string' == typeof r) && (s = new a.S(r, i).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var a = i(25839),
                n = i(33660),
                r = i(74631),
                s = i(39004),
                l = i(91149),
                o = i(92942),
                c = i(27954),
                d = i(57549),
                u = i(80477);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, o.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [g, _] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, a.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (g) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                    _(!0);
                    let s = await e.togglePin();
                    (_(!1),
                        s
                            ? i((0, a.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, a.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, g, m, i]);
            };
        },
        95445: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var a = i(25895);
            let n = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                r = function (e, t) {
                    for (var i = arguments.length, r = Array(i > 2 ? i - 2 : 0), s = 2; s < i; s++) r[s - 2] = arguments[s];
                    let [l] = r,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, a.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(n)) {
                        let { href: i } = (0, a.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        95772: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(25839),
                n = i(19412);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: s,
                    withInfo: l,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, a.jsx)(
                        n.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: s, withInfo: l, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => T });
            var a = i(25839),
                n = i(82298),
                r = i(88204),
                s = i(39004),
                l = i(93588),
                o = i(43354),
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
            let d = (e, t, i) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: a, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, a, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, a, i) },
                    };
                };
            var m = i(10959),
                g = i(89514);
            let _ = (e) => e(new Date(), (0, g.m)());
            var h = i(96433),
                p = i(27954),
                v = i(400),
                x = i.n(v),
                f = i(61493),
                y = i(4254),
                A = i(97522);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, n.$)(x().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, a.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: x().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, a.jsx)(A.N, { target: '_blank', href: n, className: x().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, a.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, a.jsxs)('footer', {
                        className: (0, n.$)(x().root, x().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, a.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: n, formatMessage: r } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: _(n) });
                return (0, a.jsx)(k, { className: t, data: o });
            });
            let T = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: g, user: v } = (0, p.g)(),
                    { formatDate: f, formatMessage: y } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: a, language: n, userRegion: r } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, a, n) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, a, n) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, a, n) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, a, n) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, a, n) },
                                    g = [s, o, u];
                                return (i && 'ru' === r && g.push(l), g.push(m), g);
                            })({ formatMessage: i, isWebApplication: a, language: n, tld: r, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: g.tld,
                        language: k,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(f),
                    });
                return (0, a.jsx)(N, { className: (0, n.$)({ [x().root_withOffsetForDeeplink]: A }, i), data: E });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 1676, 7339, 6287, 3472, 2121, 1107, 7349, 316, 6706, 9212, 260, 4512, 9004, 4985, 7839, 7957, 9761, 9479, 1817, 1943, 3580, 3269, 4163, 3246, 4517,
                3482, 6680, 6504, 5329, 8836, 820, 4434, 48, 862, 6361, 4475, 5056, 7358,
            ],
            () => e((e.s = 78049)),
        ),
            (_N_E = e.O()));
    },
]);
