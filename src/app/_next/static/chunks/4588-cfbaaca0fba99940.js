(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4588],
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
            n.d(t, { L: () => p });
            var i = n(25839),
                r = n(82298),
                a = n(74631),
                l = n(39004),
                o = n(8487),
                s = n(4071),
                c = n(66738),
                u = n(4254),
                d = n(51790),
                g = n(12558),
                m = n.n(g);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: n } = e,
                    g = (0, a.useRef)(null),
                    { formatMessage: p } = (0, l.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, i.jsx)(u.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(s.$, {
                                    ref: g,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, i.jsx)(d.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: n });
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
            n.d(t, { $: () => _ });
            var i = n(25839),
                r = n(82298),
                a = n(28631),
                l = n(74631);
            let o = (e) => {
                    let { style: t, forwardRef: n, context: r, ...a } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': l, style: { ...t }, ref: n, ...a });
                },
                s = (0, l.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = n(45300),
                u = n.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: n, withFooter: a, withHeader: l, withForceScroll: o, ...s } = e;
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(u().scroller, { [u().scroller_withFooter]: a, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: n,
                        ...s,
                        tabIndex: -1,
                    });
                },
                g = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var m = n(10508),
                p = n(63257);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: r,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, h] = (0, l.useState)(null),
                        _ = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), s.length > 0 && h(e), t && n)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) n(e);
                                    }
                                }, a),
                            [a, r, t, n, s],
                        );
                    (0, l.useEffect)(() => {
                        s.length > 0 && g && _(g);
                    }, s);
                    let f = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(p.sN, { ref: u, rangeChanged: _, totalCount: o, endReached: f, ...d });
                },
                _ = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: _ = 700,
                            pageSize: f = 20,
                            totalCount: y,
                            totalRequests: x,
                            debounceDurationInMs: v,
                            initialItemCount: E,
                            minInitialItemCount: k = 20,
                            handleRef: L,
                            alwaysShowScrollbar: A = !1,
                            testId: N,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: O,
                            ...S
                        } = e,
                        [I, T] = (0, l.useState)(!1),
                        C = (0, l.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        j = (0, l.useMemo)(() => {
                            var e, t;
                            return R
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == n ? void 0 : n.List) ? e : s,
                                      Item: null == n ? void 0 : n.Item,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == n ? void 0 : n.List) ? t : s,
                                      Item: null == n ? void 0 : n.Item,
                                      Header: null == n ? void 0 : n.Header,
                                      Footer: null == n ? void 0 : n.Footer,
                                      ScrollSeekPlaceholder: null == n ? void 0 : n.ScrollSeekPlaceholder,
                                  };
                        }, [n, x, R]),
                        b = E ? Math.min(E, k) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: I || A, [u().root_notScrolling]: !I && !A }, t),
                        'data-test-id': N,
                        children: [
                            R && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, i.jsx)(h, {
                                overscan: _,
                                components: j,
                                listClassName: p,
                                itemClassName: d,
                                isScrolling: C,
                                itemContent: m,
                                scrollerRef: L,
                                totalCount: y,
                                pageSize: f,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: v,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: O,
                                ...S,
                            }),
                            R && (null == n ? void 0 : n.Footer) && n.Footer(),
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
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: l, ogImage: o, siteName: s, ogType: c, customImage: u } = e,
                    d = o ? { url: (0, i.lU)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: a,
                    ...(c && { type: c }),
                    siteName: s,
                    locale: (l || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        27954: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a, g: () => l });
            var i = n(74631),
                r = n(36432);
            let a = (0, i.createContext)(null);
            function l() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
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
            let o = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = n(86166);
            let c = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
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
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: s, logger: c }) {
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
                        (this.changeLanguageHandler = s),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new l.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [u] = o(e) || [];
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
        43464: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let i = new Set(Object.values(n(85705).M)),
                r = (e) => 'string' == typeof e && i.has(e);
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
            n.d(t, { M: () => c, X: () => s });
            var i = n(36432),
                r = n(78773);
            let a = async (e) => e.then((e) => e.default),
                l = r.pE[r.cy],
                o = l.langs.reduce((e, t) => (e.set(t, async () => a(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                s = l.langs.reduce((e, t) => (e.set(t, async () => a(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        n = t.get(e),
                        r = t.get('ru');
                    if (n) return n();
                    if (r) return r();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        56412: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => L });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(74631),
                o = n(8487),
                s = n(61493),
                c = n(71035),
                u = n(4071),
                d = n(4254),
                g = n(36484),
                m = n(62562),
                p = n(21784),
                h = n(53712),
                _ = n(85686),
                f = n(12929),
                y = n(95067),
                x = n(97522),
                v = n(71472),
                E = n.n(v);
            let k = {
                    [f.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                L = (0, a.PA)((e) => {
                    var t;
                    let { modalState: n, data: a, onClose: v, className: L } = e,
                        A = null != a ? a : null == n ? void 0 : n.modalData,
                        N = (0, p.W)(),
                        R = (0, _.Z)(h.Z.main.href),
                        O = (0, m.N)().get(g.U2),
                        S = (0, c.c)(() => {
                            if (v) return v();
                            (N.canBack && N.back(), R());
                        }),
                        I = (null == A || null == (t = A.details) ? void 0 : t.url) && A.details.text,
                        T = (0, c.c)(() => {
                            var e;
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let t = O.get(y.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                a =
                                    null != (e = null == n ? void 0 : n.entityKey)
                                        ? e
                                        : ''.concat(null == n ? void 0 : n.entityType, '_').concat(null == n ? void 0 : n.entityId);
                            (t ? O.set(y.c.ExEx, [...t, a], { expires: new Date(r) }) : O.set(y.c.ExEx, [a], { expires: new Date(r) }),
                                null == v || v(),
                                (null == n ? void 0 : n.onDisclaimerConfirmHandler) && n.onDisclaimerConfirmHandler());
                        }),
                        C = (0, c.c)(() => {
                            ((null == n ? void 0 : n.shouldHistoryBack) ? (null == v || v(), N.canBack && N.back(), R()) : null == v || v(),
                                (null == n ? void 0 : n.onDisclaimerRejectHandler) && n.onDisclaimerRejectHandler());
                        });
                    (0, l.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let j = (0, l.useMemo)(() => {
                            if (A) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(E().title, E().text),
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: A.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: E().text,
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: A.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(x.N, {
                                                href: null == (e = A.details) ? void 0 : e.url,
                                                className: E().link,
                                                children: (0, i.jsx)(d.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = A.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [A, I]),
                        b = (0, l.useMemo)(
                            () =>
                                (null == n ? void 0 : n.type) === f.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: E().buttons,
                                          children: [
                                              (0, i.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: C,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: E().button,
                                                  'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: T,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: E().button,
                                                  'data-test-id': s.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: n.entityType && k[n.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: E().buttons,
                                          children: (0, i.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: S,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: E().button,
                                              'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [T, null == n ? void 0 : n.entityType, null == n ? void 0 : n.type, S, C],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(E().root, L),
                        'data-test-id': s.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: E().container, children: [j, b] }),
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
                o = n(91149),
                s = n(92942),
                c = n(36159);
            let u = (e, t) => {
                let { notify: n, dismiss: u } = (0, s.l)(),
                    d = (0, r.useRef)(void 0),
                    g = (0, a.c)(() => {
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
                    e.rejectedPagesCount > 0 && !d.current && (d.current = n((0, i.jsx)(l.L, { reloadBlocks: g }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [u, g, n, e.rejectedPagesCount]);
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
            var i = n(43464);
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
                            o = i('property', 'og:description'),
                            s = i('property', 'og:image');
                        (l.setAttribute('content', e),
                            o.setAttribute('content', t),
                            s.setAttribute('content', a),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(s));
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
        78299: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => L });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(74631),
                o = n(39004),
                s = n(8487);
            n(93588);
            var c = n(4071),
                u = n(66738),
                d = n(4254),
                g = n(67379),
                m = n(36619),
                p = n(76945),
                h = n(59450),
                _ = n(84e3),
                f = n(97952),
                y = n(89192),
                x = n(53712),
                v = n(15270),
                E = n(68854),
                k = n.n(E);
            let L = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    E = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: n } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        r = (0, _.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !n || !i) return;
                        let a = (0, g.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, p.z5)(t.evgenInstance, a);
                    }, [t, e, n, i, r]);
                })(E);
                let { sendRefreshEvent: L } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: n } = (0, f.$)(),
                            i = (0, _.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let r = (0, g.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, n, i]),
                        };
                    })(),
                    A = (0, l.useCallback)(() => {
                        (L(), (window.location.href = x.Z.main.href));
                    }, [L]),
                    { contentRef: N } = (0, y.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(k().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(v.L, { withBackwardFallback: '/', className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !N }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(k().content, { [k().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(u.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(d.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: E }),
                                (0, i.jsxs)(d.HL, {
                                    className: (0, r.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: A,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(s.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
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
        85705: (e, t, n) => {
            'use strict';
            var i;
            (n.d(t, { M: () => i }),
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
                o = n(14514),
                s = n(55040);
            let c = (0, r.cache)(async (e) => (0, s.M)(e, s.X)),
                u = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        n = (0, o.k)(a.pE[a.cy], t),
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
                    let [o] = a,
                        s = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        u = {},
                        { href: d } = (0, i.u)(s, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: n } = (0, i.u)(s, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: d, languages: u };
                };
        },
        99401: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => N });
            var i = n(25839),
                r = n(82298),
                a = n(88204),
                l = n(39004),
                o = n(93588),
                s = n(43354),
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
            var g = n(10959),
                m = n(89514);
            let p = (e) => e(new Date(), (0, m.m)());
            var h = n(96433),
                _ = n(27954),
                f = n(400),
                y = n.n(f),
                x = n(61493),
                v = n(4254),
                E = n(97522);
            let k = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, i.jsx)(E.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(E.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                L = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, i.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: y().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, i.jsx)(E.N, { target: '_blank', href: r, className: y().link, 'data-test-id': x.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: n } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(L, { links: n.links, disclaimer: n.disclaimer }), (0, i.jsx)(k, { data: n.copyrights })],
                    });
                };
            (0, a.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, _.g)(),
                    { formatDate: r, formatMessage: a } = (0, l.A)(),
                    { language: o } = (0, h.h)(),
                    s = d({ formatMessage: a, language: o, tld: n.tld, year: p(r) });
                return (0, i.jsx)(k, { className: t, data: s });
            });
            let N = (0, a.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: a, location: m, user: f } = (0, _.g)(),
                    { formatDate: x, formatMessage: v } = (0, l.A)(),
                    { isEnabled: E } = null != (t = (0, s.P)()) ? t : {},
                    { language: k } = (0, h.h)(),
                    L = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: i, language: r, tld: a, userRegion: l, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: i, language: r, userRegion: a } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, i, r) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, i, r) },
                                    s = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, i, r) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, i, r) },
                                    g = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, i, r) },
                                    m = [l, s, d];
                                return (n && 'ru' === a && m.push(o), m.push(g), m);
                            })({ formatMessage: n, isWebApplication: i, language: r, tld: a, userRegion: l }),
                            disclaimer: (0, g.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: d({ formatMessage: n, language: r, tld: a, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => a.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: k,
                        userRegion: f.account.data.userSessionRegionIso,
                        year: p(x),
                    });
                return (0, i.jsx)(A, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: E }, n), data: L });
            });
        },
    },
]);
