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
            i.d(t, { S: () => a });
            var n = i(40207);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, n.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        7361: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var n = i(25839),
                a = i(33660),
                r = i(74631),
                s = i(39004),
                l = i(31860),
                o = i(91149),
                c = i(92942),
                d = i(27954),
                u = i(57549),
                m = i(63149);
            let _ = (e) => {
                let { user: t } = (0, d.g)(),
                    { notify: i } = (0, c.l)(),
                    [_, g] = (0, r.useState)(!1),
                    { formatMessage: h } = (0, s.A)();
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, n.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                    g(!0);
                    let s = await e.toggleLike();
                    (g(!1),
                        s === l.f.OK
                            ? i((0, n.jsx)(m.T, { artist: r }), { containerId: o.u.INFO })
                            : i((0, n.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                }, [e, t.isAuthorized, _, h, i]);
            };
        },
        10959: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var n = i(44806);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(n.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        12234: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => a });
            var n = i(71872);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(n.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, i) => {
            var n = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 9088] };
            function a(e) {
                if (!i.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    a = t[0];
                return i.e(t[1]).then(() => i.t(a, 19));
            }
            ((a.keys = () => Object.keys(n)), (a.id = 12526), (e.exports = a));
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
            i.d(t, { k: () => n });
            let n = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        17951: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => a });
            var n = i(61399);
            let a = (e) => {
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
                                            disclaimers: (0, n.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (i = e.isAvailable) || i, disclaimers: (0, n.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { C: () => r }),
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
                })(n || (n = {})));
            let a = new Set(Object.values(n)),
                r = (e) => 'string' == typeof e && a.has(e);
        },
        19386: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var n = i(74631),
                a = i(43354),
                r = i(25895);
            let s = (e) => {
                var t;
                let { setDeeplink: i } = null != (t = (0, a.P)()) ? t : {};
                (0, n.useEffect)(() => {
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
            var n = i(25839),
                a = i(82298),
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
                    linesCount: _ = 3,
                    withSubcover: g,
                    radius: h = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': r.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        g && (0, n.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, n.jsx)(s.W, { isActive: t, className: (0, a.$)(o().cover, l, { [o().cover_round]: c, [o().cover_withSubcover]: g }), radius: h }),
                        m &&
                            (0, n.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, n.jsx)(s.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: g }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        21971: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var n = i(25839),
                a = i(88204),
                r = i(39004),
                s = i(44031),
                l = i(61493),
                o = i(22939),
                c = i(71035),
                d = i(66738),
                u = i(10820),
                m = i(33660),
                _ = i(74631),
                g = i(31860),
                h = i(91149),
                p = i(92942),
                x = i(27954),
                v = i(57549),
                f = i(86869),
                y = i(69084),
                A = i(4254),
                k = i(51790),
                E = i(6323),
                N = i(24596),
                b = i.n(N);
            let T = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: l } = (0, r.A)(),
                    o = l(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, n.jsx)(k.$, {
                    closeToast: s,
                    message: (0, n.jsxs)('div', {
                        className: b().message,
                        children: [
                            (0, n.jsx)(y.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, n.jsx)(f.t, {
                                className: b().cover,
                                radius: 'round',
                                children: (0, n.jsx)(E.B, { className: b().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, n.jsx)(A.HL, { className: b().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var j = i(7361),
                C = i(90613),
                S = i(3210),
                L = i(11609),
                I = i(79367),
                O = i(40110),
                R = i(20258),
                D = i(34159),
                P = i(30290),
                w = i(29872),
                M = i(56120),
                U = i(87201),
                z = i(83014),
                W = i(44806),
                H = i(55491),
                B = i(44851),
                F = i(14240),
                K = i(56615),
                Y = i(16386),
                G = i(67303),
                $ = i(74682),
                X = i(59043),
                Z = i(2144),
                V = i(6304);
            let J = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: f, onOpenChange: y, open: A, ...k } = e,
                    { shouldShowBuySubscriptionModal: E, showBuySubscriptionModal: N } = (0, w.q)(),
                    {
                        settings: { isMobile: b },
                        modals: { artistAboutModal: J },
                        trailer: q,
                        user: Q,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, C.A)(f),
                    ei = (0, j.K)(f),
                    en = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, p.l)(),
                            [a, s] = (0, _.useState)(!1),
                            { formatMessage: l } = (0, r.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, n.jsx)(v.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let r = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let o = await e.toggleDislike();
                            (s(!1),
                                o === g.f.OK
                                    ? i((0, n.jsx)(T, { coverUri: r.coverUri, title: r.name, isDisliked: r.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, n.jsx)(v.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(f),
                    ea = (0, D.F)(),
                    er = ''.concat(O.U.ARTIST, '-').concat(null == f ? void 0 : f.id),
                    { formatMessage: es } = (0, r.A)(),
                    { utmLink: el } = (0, P.f)({ blockId: O.U.ARTIST, contextType: o.K.Artist, contextId: null == f ? void 0 : f.id }),
                    { shareLink: eo, pathname: ec } = (0, F.b)('/artist/:artistId', { params: { artistId: null != (i = null == f ? void 0 : f.id) ? i : '' } }),
                    ed = (0, S.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == f ? void 0 : f.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, U.B)({
                        seeds: null != (a = null == f ? void 0 : f.seeds) ? a : [],
                        pageIdForFrom: R._Q.RADIO,
                        blockIdForFrom: er,
                        parentContextId: null == f ? void 0 : f.id,
                    }),
                    e_ = (0, I.P)(),
                    eg = es((null == f ? void 0 : f.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (E && Q.isAuthorized) return void N();
                        eu || em();
                    }),
                    ep = (0, c.c)(() => {
                        if (!e_()) {
                            if (E) return void N();
                            (null == f ? void 0 : f.id) && (q.setUtmLink(el), q.openArtistTrailer(f.id), ea(s.DomainObjectType.Artist, f.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        J.open(null == f ? void 0 : f.id);
                    });
                (0, M.N)(A);
                let ev = { variant: H.Y.ARTIST, id: null == f ? void 0 : f.id, title: null == f ? void 0 : f.name, path: ec },
                    ef = ee.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    ey = null == f || null == (t = f.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(W.z.WebNextArtistInfo, 'on'),
                    ek = !ee.checkExperiment(W.z.WebNextProductWithoutRecommendation, 'on');
                return (0, n.jsxs)(u.W1, {
                    isMobile: b,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: y,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...k,
                    children: [
                        ef && (0, n.jsx)(V.WithOffline, { fallback: (0, n.jsx)(L.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !b && (0, n.jsx)(V.WithOffline, { fallback: (0, n.jsx)(G.L, { onClick: et, isPinned: null == f ? void 0 : f.isPinned }) }),
                        (0, n.jsx)(V.WithOffline, {
                            fallback: (0, n.jsx)(Y.T, {
                                onClick: ei,
                                isLiked: null == f ? void 0 : f.isLiked,
                                disabled: !Q.isAuthorized || !(null == f ? void 0 : f.isAvailable),
                            }),
                        }),
                        ey && (0, n.jsx)(V.WithOffline, { fallback: (0, n.jsx)(X.N, { onClick: ep }) }),
                        ek &&
                            (0, n.jsx)(V.WithOffline, {
                                fallback: (0, n.jsx)(Z.C, { onClick: eh, disabled: !(null == f ? void 0 : f.isAvailable), variant: B.I.ARTIST, onOpenMenuChange: y }),
                            }),
                        (0, n.jsx)($.H, { disabled: !f, shareLink: eo, entityMeta: ev }),
                        eA &&
                            (0, n.jsx)(V.WithOffline, {
                                fallback: (0, n.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, n.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: eg,
                                }),
                            }),
                        (0, n.jsx)(V.WithOffline, {
                            fallback: (0, n.jsx)(K.D, { onClick: en, isDisliked: null == f ? void 0 : f.isDisliked, disabled: !(null == f ? void 0 : f.isAvailable) }),
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
            var n = i(25839);
            i(93588);
            var a = i(400),
                r = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: r().empty });
            };
        },
        26208: (e, t, i) => {
            'use strict';
            function n(e) {
                let { host: t, url: i } = e;
                return i || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            i.d(t, { v: () => n });
        },
        27429: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 60738));
        },
        27935: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => r });
            var n = i(89288),
                a = i(28869);
            function r(e) {
                let { ogTitle: t, ogDescription: i, fullUrl: r, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, n.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: i,
                    url: r,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
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
        28604: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => a });
            var n = i(74631);
            let a = (e, t) => {
                (0, n.useEffect)(
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
            var n = i(58025),
                a = i(78773),
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
                    return new Intl.Locale(a.Xn);
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
                    var t, i, n;
                    let a = (0, r.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (i = this.storage) || i.set(a), null == (n = this.changeLanguageHandler) || n.onChangeLanguage(a));
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
                        ((0, n._)(this, 'language', void 0),
                        (0, n._)(this, 'storage', void 0),
                        (0, n._)(this, 'dictionary', void 0),
                        (0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'changeLanguageHandler', void 0),
                        (0, n._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = i),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
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
            var n = i(71872),
                a = i(80461);
            let r = '@yandexmusic';
            function s(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: r,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(n.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => r });
            var n = i(74631);
            let a = (0, n.createContext)(null),
                r = () => (0, n.useContext)(a);
        },
        46646: (e, t, i) => {
            var n = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!i.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    a = t[0];
                return i.e(t[1]).then(() => i.t(a, 19));
            }
            ((a.keys = () => Object.keys(n)), (a.id = 46646), (e.exports = a));
        },
        53712: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => a });
            var n = i(25895);
            let a = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        55040: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => c, X: () => o });
            var n = i(36432),
                a = i(78773);
            let r = async (e) => e.then((e) => e.default),
                s = a.pE[a.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => r(i(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => r(i(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        i = t.get(e),
                        a = t.get('ru');
                    if (i) return i();
                    if (a) return a();
                    throw new n.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => E });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(8487),
                o = i(61493),
                c = i(71035),
                d = i(4071),
                u = i(4254),
                m = i(36484),
                _ = i(62562),
                g = i(21784),
                h = i(53712),
                p = i(85686),
                x = i(12929),
                v = i(95067),
                f = i(97522),
                y = i(71472),
                A = i.n(y);
            let k = {
                    [x.n.ALBUM]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                E = (0, r.PA)((e) => {
                    var t;
                    let { modalState: i, data: r, onClose: y, className: E } = e,
                        N = null != r ? r : null == i ? void 0 : i.modalData,
                        b = (0, g.W)(),
                        T = (0, p.Z)(h.Z.main.href),
                        j = (0, _.N)().get(m.U2),
                        C = (0, c.c)(() => {
                            if (y) return y();
                            (b.canBack && b.back(), T());
                        }),
                        S = (null == N || null == (t = N.details) ? void 0 : t.url) && N.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == i || i.setConfirmUnsafeDisclaimer(!0);
                            let t = j.get(v.c.ExEx),
                                n = new Date(),
                                a = n.setMinutes(n.getMinutes() + 15),
                                r =
                                    null != (e = null == i ? void 0 : i.entityKey)
                                        ? e
                                        : ''.concat(null == i ? void 0 : i.entityType, '_').concat(null == i ? void 0 : i.entityId);
                            (t ? j.set(v.c.ExEx, [...t, r], { expires: new Date(a) }) : j.set(v.c.ExEx, [r], { expires: new Date(a) }),
                                null == y || y(),
                                (null == i ? void 0 : i.onDisclaimerConfirmHandler) && i.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == i ? void 0 : i.shouldHistoryBack) ? (null == y || y(), b.canBack && b.back(), T()) : null == y || y(),
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
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, a.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: N.title,
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: N.description,
                                        }),
                                        S &&
                                            (0, n.jsx)(f.N, {
                                                href: null == (e = N.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, n.jsx)(u.HL, {
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
                                (null == i ? void 0 : i.type) === x.Z.UNSAFE
                                    ? (0, n.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, n.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, n.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, n.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: i.entityType && k[i.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, n.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: C,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, n.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == i ? void 0 : i.entityType, null == i ? void 0 : i.type, C, I],
                        );
                    return (0, n.jsx)('div', {
                        className: (0, a.$)(A().root, E),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, n.jsxs)('div', { className: A().container, children: [O, R] }),
                    });
                });
        },
        56615: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var n = i(25839),
                a = i(88204),
                r = i(8487),
                s = i(61493),
                l = i(66738),
                o = i(10820),
                c = i(27954);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, n.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, n.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, n.jsx)(r.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        60738: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => K }));
            var n = i(25839),
                a = i(84059),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(8487),
                c = i(61493),
                d = i(13833),
                u = i(4254),
                m = i(64715),
                _ = i(84058),
                g = i(1407),
                h = i(1797),
                p = i(20258),
                x = i(10322),
                v = i(21784),
                f = i(89192),
                y = i(30716),
                A = i(27954),
                k = i(56412),
                E = i(99401),
                N = i(26076),
                b = i(10603),
                T = i(95772),
                j = i(17951),
                C = i(61732),
                S = i(12234),
                L = i(64595),
                I = i(26208),
                O = i(89221),
                R = i(27935),
                D = i(41016),
                P = i(80461),
                w = i(95445);
            async function M(e, t) {
                var i, n, a;
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
                        customImage: (0, I.v)({ host: t.host }),
                        siteName: r({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, D.H)({ cardType: P.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, L.k)(),
                    appLinks: (0, S.X)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: r({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, w.S)('/artist/:artistId/similar', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var U = i(28604),
                z = i(19386),
                W = i(61495),
                H = i.n(W);
            let B = (0, r.PA)((e) => {
                var t, i, r, S;
                let { artistId: L, preloadedArtist: I, preloadedSimilarArtists: O } = e,
                    { artist: R, disclaimerModalState: D } = (0, A.g)(),
                    { formatMessage: P } = (0, l.A)(),
                    { contentScrollRef: w, setContentScrollRef: W } = (0, f.g)(),
                    B = (0, v.W)(),
                    F = (0, h.S)({ artist: null == (t = R.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, z.G)(L),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = R.meta) ? void 0 : e.artist.isUnsafeLegal) && F();
                    }, [null == (i = R.meta) ? void 0 : i.artist.isUnsafeLegal, F]),
                    (0, U._)(R, L),
                    (0, s.useEffect)(
                        () => () => {
                            R.similarArtistsSubPage.reset();
                        },
                        [R],
                    ),
                    R.similarArtistsSubPage.isNotFound && (0, a.notFound)(),
                    (0, y.J)(R.similarArtistsSubPage.isResolved));
                let K = (0, s.useMemo)(() => {
                        if (R.similarArtistsSubPage.isResolved) {
                            var e;
                            return null == (e = R.similarArtistsSubPage.similarArtists)
                                ? void 0
                                : e.map((e) => (0, n.jsx)(_.a, { className: H().item, artist: e, contentLinesCount: 3 }, e.id));
                        }
                        let t = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.similar-artists' }) });
                        return (0, n.jsx)(T.e, { isActive: !0, itemClassName: H().item, round: !0, centered: !0, 'aria-label': t });
                    }, [
                        R.similarArtistsSubPage.loadingState,
                        R.similarArtistsSubPage.similarArtists,
                        P,
                        null == (r = R.similarArtistsSubPage.similarArtists) ? void 0 : r.length,
                    ]),
                    Y = [];
                return (R.similarArtistsSubPage.isNeededToLoad && Y.push(R.similarArtistsSubPage.getData({ artistId: L, preloadedSimilarArtists: O })),
                R.infoLoadingState.isNeededToLoad && Y.push(R.getInfo({ artistId: L, preloadedArtist: I })),
                ((e) => {
                    var t;
                    (0, s.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            M({ artist: (0, j.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, C.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(R),
                Y.length && (0, s.use)(Promise.allSettled(Y)),
                null == (S = R.meta) ? void 0 : S.artist.isLegalRejected)
                    ? (0, n.jsx)(k.M, { modalState: D })
                    : R.isInfoSomethingWentWrong
                      ? (0, n.jsx)(m.SomethingWentWrong, {})
                      : (0, n.jsx)(x.n, {
                            pageId: p._Q.ARTIST_SIMILAR,
                            pageEntityId: L,
                            children: (0, n.jsx)(g.h, {
                                scrollElement: w,
                                outerTitle: P({ id: 'page.artist-similar-header' }, { artistName: R.commonSubPage.artistName }),
                                children: (0, n.jsxs)('div', {
                                    className: H().root,
                                    'data-test-id': c.Xk.artist.ARTIST_SIMILAR_PAGE,
                                    children: [
                                        (0, n.jsx)(b.Y, {
                                            variant: b.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: B.canBack,
                                            children: (0, n.jsx)(u.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, n.jsx)(o.A, { id: 'page.artist-similar-header', values: { artistName: R.commonSubPage.artistName } }),
                                            }),
                                        }),
                                        (0, n.jsxs)(d.N, {
                                            className: H().scrollableContent,
                                            containerClassName: H().container,
                                            ref: W,
                                            children: [
                                                (0, n.jsx)('div', { className: H().content, 'aria-labelledby': 'collection-artists-header', tabIndex: 0, children: K }),
                                                (0, n.jsx)(N.A, { children: (0, n.jsx)(E.w, { className: H().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var F = i(61288);
            let K = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, F.L)(e)) || (0, a.notFound)(), (0, n.jsx)(B, { artistId: e }));
            };
        },
        61288: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => a });
            let n = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && n.test(e);
            }
        },
        61399: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var n = i(18421);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, n.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
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
            var n = i(27954),
                a = i(44806);
            let r = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: r },
                    experiments: s,
                } = (0, n.g)();
                return (
                    !(null == r ? void 0 : r.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        61732: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            let n = (e, t) => {
                    let i = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (i) return i;
                    let n = window.document.createElement('meta');
                    return (n.setAttribute(e, t), n);
                },
                a = (e) => {
                    let { title: t, description: i, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof i)) {
                        let e = n('name', 'description');
                        (e.setAttribute('content', i), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            i = Array.isArray(a.images) ? a.images[0] : null;
                        r = i && 'object' == typeof i && 'url' in i ? String(i.url) : '';
                        let s = n('property', 'og:title'),
                            l = n('property', 'og:description'),
                            o = n('property', 'og:image');
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
            var n = i(25839),
                a = i(53712),
                r = i(35015),
                s = i(3163);
            let l = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, n.jsx)(s.O, {
                    closeToast: i,
                    entityVariant: r.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: a.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        64595: (e, t, i) => {
            'use strict';
            function n() {
                return { appId: '117328825040925' };
            }
            i.d(t, { k: () => n });
        },
        64715: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => I });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(8487);
            i(93588);
            var c = i(4071),
                d = i(66738),
                u = i(4254),
                m = i(67379),
                _ = i(44031),
                g = i(87277),
                h = i(59450),
                p = i(84e3),
                x = i(97952),
                v = i(89192),
                f = i(53712),
                y = i(27954),
                A = i(44806),
                k = i(15270),
                E = i(23818),
                N = i(85686);
            let b = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var T = i(27990),
                j = i.n(T);
            let C = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { slam: r } = (0, y.g)(),
                    { contentRef: s } = (0, v.g)(),
                    l = (0, N.Z)(f.Z.mymusicDownloadsTracks.href);
                return (0, n.jsxs)('div', {
                    className: (0, a.$)(j().root, t),
                    children: [
                        i &&
                            (0, n.jsx)(k.L, { withBackwardFallback: '/', className: (0, a.$)(j().navigation, { [j().navigation_desktop]: !s }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, a.$)(j().content, { [j().content_shrink]: !i }),
                            children: [
                                (0, n.jsx)(E._V, { className: j().image, src: b.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, n.jsxs)('div', {
                                    className: j().message,
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            className: j().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            className: j().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                r.hasDownloadedTracks &&
                                    (0, n.jsx)(c.$, {
                                        className: j().button,
                                        onClick: l,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, n.jsx)(u.HL, {
                                            className: j().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, n.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var S = i(68854),
                L = i.n(S);
            let I = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: r } = (0, l.A)(),
                    E = (0, s.useContext)(y.P),
                    N = null == E ? void 0 : E.experiments.checkExperiment(A.z.WebNextUnstableMusicScreen, 'on'),
                    b = r(N ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: n } = (0, x.$)(),
                        a = (0, p.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !i || !n) return;
                        let r = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: n,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, g.z5)(t.evgenInstance, r);
                    }, [t, e, i, n, a]);
                })(b);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            n = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, g.bv)(e.evgenInstance, a);
                            }, [e, t, i, n]),
                        };
                    })(),
                    j = (0, s.useCallback)(() => {
                        (T(), (window.location.href = f.Z.main.href));
                    }, [T]),
                    { contentRef: S } = (0, v.g)();
                return N
                    ? (0, n.jsx)(C, { className: t, withBackwardControl: i })
                    : (0, n.jsxs)('div', {
                          className: (0, a.$)(L().root, t),
                          children: [
                              i &&
                                  (0, n.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, a.$)(L().navigation, { [L().navigation_desktop]: !S }),
                                      withForwardControl: !1,
                                  }),
                              (0, n.jsxs)('div', {
                                  className: (0, a.$)(L().content, { [L().content_shrink]: !i }),
                                  children: [
                                      (0, n.jsx)(d.I, { className: L().icon, variant: 'attention', size: 'xxl' }),
                                      (0, n.jsx)(u.DZ, { className: (0, a.$)(L().title, L().important), variant: 'h3', size: 'xs', children: b }),
                                      (0, n.jsxs)(u.HL, {
                                          className: (0, a.$)(L().text, L().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, n.jsx)(c.$, {
                                          onClick: j,
                                          className: L().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, n.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, n.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
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
            var n = i(25839),
                a = i(74631),
                r = i(39004),
                s = i(61493),
                l = i(4071),
                o = i(66738),
                c = i(49984);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: g,
                            className: h,
                            forwardRef: p,
                            style: x,
                            children: v,
                        } = e,
                        { formatMessage: f } = (0, r.A)(),
                        y = f({ id: 'trailer.button-aria-label' });
                    return (0, n.jsx)(l.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: _,
                        ref: p,
                        icon: (0, n.jsx)(o.I, { variant: 'trailer', size: u, className: g }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, n.jsx)(d, { forwardRef: t, ...e }));
        },
        78437: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var n = i(25839),
                a = i(39004),
                r = i(3392);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, n.jsx)(r.m_, {
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
            i.d(t, { Xn: () => r, cy: () => a, pE: () => n });
            let n = {
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
                a = 'yandex',
                r = 'ru-RU';
        },
        80461: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => n });
            var n = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        80477: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var n = i(25839),
                a = i(35015),
                r = i(10546);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, n.jsx)(r.k, {
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
        84058: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => H });
            var n = i(25839),
                a = i(82298),
                r = i(88204),
                s = i(74631),
                l = i(39004),
                o = i(44031),
                c = i(61493),
                d = i(22939),
                u = i(71035),
                m = i(49656),
                _ = i(51246),
                g = i(66738),
                h = i(86869),
                p = i(4254),
                x = i(1797),
                v = i(7361),
                f = i(90613),
                y = i(79367),
                A = i(29481),
                k = i(47009),
                E = i(34159),
                N = i(52512),
                b = i(30290),
                T = i(61561),
                j = i(85686),
                C = i(85743),
                S = i(50209),
                L = i(27954),
                I = i(6323),
                O = i(64720),
                R = i(97522),
                D = i(41580),
                P = i(49438),
                w = i(71996),
                M = i(78437),
                U = i(21971),
                z = i(13936),
                W = i.n(z);
            let H = (0, r.PA)((e) => {
                let { artist: t, className: i, children: r, contentLinesCount: z, topTitleElement: H, bottomTitleElement: B } = e,
                    { ref: F, intersectionPropertyId: K } = (0, N.n)(),
                    {
                        trailer: Y,
                        user: G,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: X, utmLink: Z } = (0, b.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: V } = (0, l.A)(),
                    [J, q] = (0, s.useState)(!1),
                    [Q, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: en, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: er } = (0, C.z)(),
                    es = (0, A.N)(),
                    el = (0, k.b)(),
                    eo = (0, v.K)(t),
                    ec = (0, f.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    eg = (0, j.Z)(t.url),
                    [eh, ep] = (0, s.useState)(!1),
                    ex = (0, E.F)(),
                    ev = (0, y.P)(),
                    ef = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ev())) return void e.preventDefault();
                        (Y.openArtistTrailer(t.id), ex(o.DomainObjectType.Artist, t.id));
                    }),
                    ey = (0, s.useMemo)(() => {
                        let e = V({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? V({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, V]),
                    { isPlaying: eA, togglePlay: ek } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: Z }, loadContextMeta: !0 },
                    }),
                    eE = (0, x.S)({ artist: t, callback: eg }),
                    eN = (0, x.S)({ artist: t, callback: ek }),
                    eb = (0, u.c)((e) => {
                        (null == ea || ea(), es({ to: o.AppScreen.ArtistScreen }), eE(e));
                    }),
                    eT = (0, T.N)(),
                    ej = (0, u.c)(() => {
                        if (!ev()) {
                            if (eT) return void $.open();
                            (J || eA || (q(!0), null == er || er()), eN(), el(!eA));
                        }
                    }),
                    eC = (0, u.c)(() => {
                        (Q || e_ || (ee(!0), null == en || en()), eo());
                    }),
                    eS = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (ei(e), ep(e));
                    }),
                    eI = (0, s.useMemo)(
                        () =>
                            (0, n.jsx)(
                                U.g,
                                {
                                    artist: t,
                                    onOpenChange: eL,
                                    open: et,
                                    onClick: eS,
                                    className: (0, a.$)(W().menuButton, W().control),
                                    size: 's',
                                    icon: (0, n.jsx)(g.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eS, eL, et],
                    ),
                    eO = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, n.jsx)(
                                M.n,
                                {
                                    children: (0, n.jsx)(w.k, {
                                        className: (0, a.$)(W().trailerButton, W().control),
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
                            (0, n.jsx)(
                                D.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(W().pinButton, W().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eD = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, n.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eh,
                                    className: W().controls,
                                    radius: 'round',
                                    playControl: (0, n.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(W().playButton, W().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ej,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, n.jsx)(
                                        O.c,
                                        {
                                            className: (0, a.$)(W().likeButton, W().control),
                                            isLiked: e_,
                                            onClick: eC,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !G.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eI,
                                    pinControl: eR,
                                    trailerControl: eO,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, s.useMemo)(
                        () =>
                            (0, n.jsx)(h.t, {
                                className: W().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, n.jsxs)('div', {
                                    className: W().coverBlock,
                                    onClick: eb,
                                    children: [
                                        (0, n.jsx)(I.B, {
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
                        [eb, em, ey, t.isAvailable, eD],
                    );
                return (0, n.jsx)(_.MN, {
                    ref: F,
                    className: (0, a.$)(W().root, i),
                    textPosition: 'center',
                    'aria-label': ey,
                    title: (0, n.jsxs)(n.Fragment, {
                        children: [
                            H,
                            (0, n.jsx)(p.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                children: (0, n.jsx)(R.N, {
                                    className: W().titleLink,
                                    href: t.url,
                                    tabIndex: -1,
                                    'aria-label': ey,
                                    onClick: eb,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            B,
                        ],
                    }),
                    srTitle: (0, n.jsx)(R.N, { className: W().srTitleLink, href: t.url, onClick: eb, children: ey }),
                    'data-intersection-property-id': K,
                    contentLinesCount: z,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: r,
                });
            });
        },
        86166: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { $: () => n }),
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
                })(n || (n = {})));
        },
        89221: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => d });
            var n = i(13580),
                a = i(74631),
                r = i(78773),
                s = i(28869),
                l = i(14514),
                o = i(55040);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        i = (0, l.k)(r.pE[r.cy], t),
                        a = await c(i);
                    return (e, t) => {
                        let r = null == a ? void 0 : a[e.id],
                            s = '';
                        return ((Array.isArray(r) || 'string' == typeof r) && (s = new n.S(r, i).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        89514: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        90613: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var n = i(25839),
                a = i(33660),
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
                    [_, g] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, n.jsx)(d.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (_) return;
                    let r = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                    g(!0);
                    let s = await e.togglePin();
                    (g(!1),
                        s
                            ? i((0, n.jsx)(u.l, { artist: r }), { containerId: l.u.INFO })
                            : i((0, n.jsx)(d.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, _, m, i]);
            };
        },
        95445: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var n = i(25895);
            let a = {
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
                        { href: u } = (0, n.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: i } = (0, n.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = i;
                    }
                    return { canonical: u, languages: d };
                };
        },
        95772: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var n = i(25839),
                a = i(19412);
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
                    (0, n.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: s, withInfo: l, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        99401: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var n = i(25839),
                a = i(82298),
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
                    let { formatMessage: t, language: i, tld: n, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, i) },
                    };
                };
            var m = i(10959),
                _ = i(89514);
            let g = (e) => e(new Date(), (0, _.m)());
            var h = i(96433),
                p = i(27954),
                x = i(400),
                v = i.n(x),
                f = i(61493),
                y = i(4254),
                A = i(97522);
            let k = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, a.$)(v().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, n.jsx)(A.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(A.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                E = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, n.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: v().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, n.jsx)(A.N, { target: '_blank', href: a, className: v().link, 'data-test-id': f.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, a.$)(v().root, v().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, n.jsx)(E, { links: i.links, disclaimer: i.disclaimer }), (0, n.jsx)(k, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: a, formatMessage: r } = (0, s.A)(),
                    { language: l } = (0, h.h)(),
                    o = u({ formatMessage: r, language: l, tld: i.tld, year: g(a) });
                return (0, n.jsx)(k, { className: t, data: o });
            });
            let b = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: _, user: x } = (0, p.g)(),
                    { formatDate: f, formatMessage: y } = (0, s.A)(),
                    { isEnabled: A } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    E = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: n, language: a, tld: r, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: n, language: a, userRegion: r } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, a) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, a) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, a) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, a) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, a) },
                                    _ = [s, o, u];
                                return (i && 'ru' === r && _.push(l), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: n, language: a, tld: r, userRegion: s }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: i, language: a, tld: r, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: l.$3,
                        tld: _.tld,
                        language: k,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: g(f),
                    });
                return (0, n.jsx)(N, { className: (0, a.$)({ [v().root_withOffsetForDeeplink]: A }, i), data: E });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3349, 8803, 6392, 7170, 6287, 3472, 2121, 9122, 3112, 316, 6706, 4771, 8398, 260, 6702, 9004, 7511, 9414, 3595, 1251, 1817, 3580, 1943, 2038, 4163, 3246,
                7848, 3482, 6680, 2247, 4345, 8836, 820, 4434, 48, 862, 8372, 4475, 5056, 7358,
            ],
            () => e((e.s = 27429)),
        ),
            (_N_E = e.O()));
    },
]);
