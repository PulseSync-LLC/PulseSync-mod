(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1344],
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
        1466: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => _ });
            var i = n(25839),
                r = n(82298),
                a = n(74631),
                l = n(39004),
                s = n(8487),
                o = n(4071),
                c = n(66738),
                u = n(4254),
                d = n(51790),
                m = n(12558),
                g = n.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: n } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, l.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: g().message,
                            children: [
                                (0, i.jsx)(u.HL, {
                                    className: g().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(o.$, {
                                    ref: m,
                                    className: g().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: g().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, i.jsx)(d.$, { className: (0, r.$)(g().root, g().important), message: h, closeToast: n });
            };
        },
        1797: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            var i = n(40207);
            let r = (e) => {
                let { artist: t, callback: n, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: n, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        6968: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => p });
            var i = n(25839),
                r = n(82298),
                a = n(28631),
                l = n(74631);
            let s = (e) => {
                    let { style: t, forwardRef: n, context: r, ...a } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        s = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': l, style: { ...t }, ref: n, ...a });
                },
                o = (0, l.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }));
            var c = n(45300),
                u = n.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: n, withFooter: a, withHeader: l, withForceScroll: s, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(u().scroller, { [u().scroller_withFooter]: a, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: n,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var g = n(10508),
                _ = n(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: r,
                            debounceDurationInMs: a = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, h] = (0, l.useState)(null),
                        p = (0, l.useMemo)(
                            () =>
                                (0, g.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && n)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) n(e);
                                    }
                                }, a),
                            [a, r, t, n, o],
                        );
                    (0, l.useEffect)(() => {
                        o.length > 0 && m && p(m);
                    }, o);
                    let f = (0, l.useMemo)(() => {
                        if (c)
                            return (0, g.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(_.sN, { ref: u, rangeChanged: p, totalCount: s, endReached: f, ...d });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: g,
                            listClassName: _,
                            overscan: p = 700,
                            pageSize: f = 20,
                            totalCount: x,
                            totalRequests: v,
                            debounceDurationInMs: y,
                            initialItemCount: E,
                            minInitialItemCount: k = 20,
                            handleRef: N,
                            alwaysShowScrollbar: L = !1,
                            testId: A,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: R,
                            ...b
                        } = e,
                        [j, O] = (0, l.useState)(!1),
                        I = (0, l.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        T = (0, l.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == n ? void 0 : n.List) ? e : o,
                                      Item: null == n ? void 0 : n.Item,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == n ? void 0 : n.List) ? t : o,
                                      Item: null == n ? void 0 : n.Item,
                                      Header: null == n ? void 0 : n.Header,
                                      Footer: null == n ? void 0 : n.Footer,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  };
                        }, [n, v, S]),
                        C = E ? Math.min(E, k) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: j || L, [u().root_notScrolling]: !j && !L }, t),
                        'data-test-id': A,
                        children: [
                            S && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, i.jsx)(h, {
                                overscan: p,
                                components: T,
                                listClassName: _,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: g,
                                scrollerRef: N,
                                totalCount: x,
                                pageSize: f,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: C,
                                shouldTriggerRangeChangedOn: R,
                                ...b,
                            }),
                            S && (null == n ? void 0 : n.Footer) && n.Footer(),
                        ],
                    });
                };
        },
        10959: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => r });
            var i = n(44806);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: r, userRegion: a } = e;
                return 'ru' === a && t(i.z.WebNextFooterDisclaimer, 'on') ? n() : r();
            };
        },
        12234: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => r });
            var i = n(71872);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        12526: (e, t, n) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!n.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return n.e(t[1]).then(() => n.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r));
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
        14514: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        17951: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => r });
            var i = n(61399);
            let r = (e) => {
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
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (n = e.isAvailable) || n, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        18421: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { C: () => a }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        // for PulseSync: BEGIN substituted-track enum extension
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                        // for PulseSync: END substituted-track enum extension
                })(i || (i = {})));
            let r = new Set(Object.values(i)),
                a = (e) => 'string' == typeof e && r.has(e);
        },
        19386: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => l });
            var i = n(74631),
                r = n(43354),
                a = n(25895);
            let l = (e) => {
                var t;
                let { setDeeplink: n } = null != (t = (0, r.P)()) ? t : {};
                (0, i.useEffect)(() => {
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
        26076: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => l });
            var i = n(25839);
            n(93588);
            var r = n(400),
                a = n.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: a().empty });
            };
        },
        26208: (e, t, n) => {
            'use strict';
            function i(e) {
                let { tld: t, url: n } = e;
                return n || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            n.d(t, { v: () => i });
        },
        27935: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var i = n(89288),
                r = n(28869);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: l, ogImage: s, siteName: o, ogType: c, customImage: u } = e,
                    d = s ? { url: (0, i.lU)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (l || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
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
        28604: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => r });
            var i = n(74631);
            let r = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28869: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => d });
            var i = n(58025),
                r = n(78773),
                a = n(14514),
                l = n(56107);
            let s = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = n(55040);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = d.getDefaultLocale().region;
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
                    var t, n, i;
                    let r = (0, a.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(r), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(r));
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
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new l.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [u] = s(e) || [];
                    this.language = (0, a.k)(this.config, u);
                }
            }
        },
        31447: (e, t, n) => {
            'use strict';
            n.d(t, { EV: () => r, r3: () => i });
            let i = 20,
                r = 20;
        },
        41016: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => l });
            var i = n(71872),
                r = n(80461);
            let a = '@yandexmusic';
            function l(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: a, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: a,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        43354: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => r, P: () => a });
            var i = n(74631);
            let r = (0, i.createContext)(null),
                a = () => (0, i.useContext)(r);
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
        46646: (e, t, n) => {
            var i = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!n.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    r = t[0];
                return n.e(t[1]).then(() => n.t(r, 19));
            }
            ((r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r));
        },
        53712: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r });
            var i = n(25895);
            let r = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        55040: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var i = n(36432),
                r = n(78773);
            let a = async (e) => e.then((e) => e.default),
                l = r.pE[r.cy],
                s = l.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = l.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        n = t.get(e),
                        r = t.get('ru');
                    if (n) return n();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => N });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(74631),
                s = n(8487),
                o = n(61493),
                c = n(71035),
                u = n(4071),
                d = n(4254),
                m = n(36484),
                g = n(62562),
                _ = n(21784),
                h = n(53712),
                p = n(85686),
                f = n(12929),
                x = n(95067),
                v = n(97522),
                y = n(71472),
                E = n.n(y);
            let k = {
                    [f.n.ALBUM]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, i.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                N = (0, a.PA)((e) => {
                    var t;
                    let { modalState: n, data: a, onClose: y, className: N } = e,
                        L = null != a ? a : null == n ? void 0 : n.modalData,
                        A = (0, _.W)(),
                        S = (0, p.Z)(h.Z.main.href),
                        R = (0, g.N)().get(m.U2),
                        b = (0, c.c)(() => {
                            if (y) return y();
                            (A.canBack && A.back(), S());
                        }),
                        j = (null == L || null == (t = L.details) ? void 0 : t.url) && L.details.text,
                        O = (0, c.c)(() => {
                            var e;
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let t = R.get(x.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                a =
                                    null != (e = null == n ? void 0 : n.entityKey)
                                        ? e
                                        : ''.concat(null == n ? void 0 : n.entityType, '_').concat(null == n ? void 0 : n.entityId);
                            (t ? R.set(x.c.ExEx, [...t, a], { expires: new Date(r) }) : R.set(x.c.ExEx, [a], { expires: new Date(r) }),
                                null == y || y(),
                                (null == n ? void 0 : n.onDisclaimerConfirmHandler) && n.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == n ? void 0 : n.shouldHistoryBack) ? (null == y || y(), A.canBack && A.back(), S()) : null == y || y(),
                                (null == n ? void 0 : n.onDisclaimerRejectHandler) && n.onDisclaimerRejectHandler());
                        });
                    (0, l.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let T = (0, l.useMemo)(() => {
                            if (L) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(E().title, E().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: L.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: E().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: L.description,
                                        }),
                                        j &&
                                            (0, i.jsx)(v.N, {
                                                href: null == (e = L.details) ? void 0 : e.url,
                                                className: E().link,
                                                children: (0, i.jsx)(d.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = L.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [L, j]),
                        C = (0, l.useMemo)(
                            () =>
                                (null == n ? void 0 : n.type) === f.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: E().buttons,
                                          children: [
                                              (0, i.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: E().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: O,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: E().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: n.entityType && k[n.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: E().buttons,
                                          children: (0, i.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: b,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: E().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [O, null == n ? void 0 : n.entityType, null == n ? void 0 : n.type, b, I],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(E().root, N),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: E().container, children: [T, C] }),
                    });
                });
        },
        60678: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => u });
            var i = n(25839),
                r = n(74631),
                a = n(71035),
                l = n(1466),
                s = n(91149),
                o = n(92942),
                c = n(36159);
            let u = (e, t) => {
                let { notify: n, dismiss: u } = (0, o.l)(),
                    d = (0, r.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var n;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let i = [...(null != (n = e.lastRejectedPagesList) ? n : [])].reverse().filter((t) => {
                            var n;
                            return (null == (n = e.pageStates) ? void 0 : n[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = n((0, i.jsx)(l.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [u, m, n, e.rejectedPagesCount]);
            };
        },
        61288: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        61399: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => r });
            var i = n(18421);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        61732: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            let i = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                r = (e) => {
                    let { title: t, description: n, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = i('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let a = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            n = Array.isArray(r.images) ? r.images[0] : null;
                        a = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let l = i('property', 'og:title'),
                            s = i('property', 'og:description'),
                            o = i('property', 'og:image');
                        (l.setAttribute('content', e),
                            s.setAttribute('content', t),
                            o.setAttribute('content', a),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o));
                    }
                };
        },
        64595: (e, t, n) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            n.d(t, { k: () => i });
        },
        64715: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => I });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(74631),
                s = n(39004),
                o = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                d = n(4254),
                m = n(67379),
                g = n(44031),
                _ = n(87277),
                h = n(59450),
                p = n(84e3),
                f = n(97952),
                x = n(89192),
                v = n(53712),
                y = n(27954),
                E = n(44806),
                k = n(15270),
                N = n(23818),
                L = n(85686);
            let A = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var S = n(27990),
                R = n.n(S);
            let b = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { slam: a } = (0, y.g)(),
                    { contentRef: l } = (0, x.g)(),
                    s = (0, L.Z)(v.Z.mymusicDownloadsTracks.href);
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(R().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(k.L, { withBackwardFallback: '/', className: (0, r.$)(R().navigation, { [R().navigation_desktop]: !l }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(R().content, { [R().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(N._V, { className: R().image, src: A.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, i.jsxs)('div', {
                                    className: R().message,
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            className: R().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            className: R().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                a.hasDownloadedTracks &&
                                    (0, i.jsx)(c.$, {
                                        className: R().button,
                                        onClick: s,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, i.jsx)(d.HL, {
                                            className: R().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, i.jsx)(o.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var j = n(68854),
                O = n.n(j);
            let I = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, s.A)(),
                    N = (0, l.useContext)(y.P),
                    L = null == N ? void 0 : N.experiments.checkExperiment(E.z.WebNextUnstableMusicScreen, 'on'),
                    A = a(L ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        r = (0, p.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !n || !i) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: g.EntityTypes.Error,
                                entityId: g.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: i,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, n, i, r]);
                })(A);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, f.$)(),
                            i = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: g.ActionType.Refresh,
                                        userInteractionType: g.UserInteractionType.Tap,
                                        entityType: g.EntityTypes.Error,
                                        entityId: g.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, n, i]),
                        };
                    })(),
                    R = (0, l.useCallback)(() => {
                        (S(), (window.location.href = v.Z.main.href));
                    }, [S]),
                    { contentRef: j } = (0, x.g)();
                return L
                    ? (0, i.jsx)(b, { className: t, withBackwardControl: n })
                    : (0, i.jsxs)('div', {
                          className: (0, r.$)(O().root, t),
                          children: [
                              n &&
                                  (0, i.jsx)(k.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(O().navigation, { [O().navigation_desktop]: !j }),
                                      withForwardControl: !1,
                                  }),
                              (0, i.jsxs)('div', {
                                  className: (0, r.$)(O().content, { [O().content_shrink]: !n }),
                                  children: [
                                      (0, i.jsx)(u.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                      (0, i.jsx)(d.DZ, { className: (0, r.$)(O().title, O().important), variant: 'h3', size: 'xs', children: A }),
                                      (0, i.jsxs)(d.HL, {
                                          className: (0, r.$)(O().text, O().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, i.jsx)(c.$, {
                                          onClick: R,
                                          className: O().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, i.jsxs)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
        78773: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => a, cy: () => r, pE: () => i });
            let i = {
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
                a = 'ru-RU';
        },
        80461: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        84e3: (e, t, n) => {
            'use strict';
            n.d(t, { U: () => a });
            var i = n(36484),
                r = n(62562);
            let a = () => (0, r.N)().get(i.Zf);
        },
        86166: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { $: () => i }),
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
                })(i || (i = {})));
        },
        89221: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var i = n(13580),
                r = n(74631),
                a = n(78773),
                l = n(28869),
                s = n(14514),
                o = n(55040);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        n = (0, s.k)(a.pE[a.cy], t),
                        r = await c(n);
                    return (e, t) => {
                        let a = null == r ? void 0 : r[e.id],
                            l = '';
                        return ((Array.isArray(a) || 'string' == typeof a) && (l = new i.S(a, n).format(t)), Array.isArray(l) ? l.join('') : l);
                    };
                };
        },
        89514: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        95445: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var i = n(25895);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                a = function (e, t) {
                    for (var n = arguments.length, a = Array(n > 2 ? n - 2 : 0), l = 2; l < n; l++) a[l - 2] = arguments[l];
                    let [s] = a,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != s ? s : {}), options: e }),
                        u = {},
                        { href: d } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: n } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: d, languages: u };
                };
        },
        99401: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => A });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(39004),
                s = n(93588),
                o = n(43354),
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
            let u = (e, t, n) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: n, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, i, n) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, i, n) },
                    };
                };
            var m = n(10959),
                g = n(89514);
            let _ = (e) => e(new Date(), (0, g.m)());
            var h = n(96433),
                p = n(27954),
                f = n(400),
                x = n.n(f),
                v = n(61493),
                y = n(4254),
                E = n(97522);
            let k = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, i.jsx)(E.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(E.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, i.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: x().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, i.jsx)(E.N, { target: '_blank', href: r, className: x().link, 'data-test-id': v.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, i.jsx)(N, { links: n.links, disclaimer: n.disclaimer }), (0, i.jsx)(k, { data: n.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, p.g)(),
                    { formatDate: r, formatMessage: a } = (0, l.A)(),
                    { language: s } = (0, h.h)(),
                    o = d({ formatMessage: a, language: s, tld: n.tld, year: _(r) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let A = (0, a.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: a, location: g, user: f } = (0, p.g)(),
                    { formatDate: v, formatMessage: y } = (0, l.A)(),
                    { isEnabled: E } = null != (t = (0, o.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: i, language: r, tld: a, userRegion: l, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: i, language: r, userRegion: a } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, r) },
                                    s = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, r) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, r) },
                                    g = [l, o, d];
                                return (n && 'ru' === a && g.push(s), g.push(m), g);
                            })({ formatMessage: n, isWebApplication: i, language: r, tld: a, userRegion: l }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: n, language: r, tld: a, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: s.$3,
                        tld: g.tld,
                        language: k,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: _(v),
                    });
                return (0, i.jsx)(L, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: E }, n), data: N });
            });
        },
    },
]);
