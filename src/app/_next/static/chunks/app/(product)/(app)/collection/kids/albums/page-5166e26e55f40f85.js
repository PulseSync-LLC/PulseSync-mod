(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 4602],
    {
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => l });
            var s = i(67174);
            let l = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        11006: (e) => {
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
        12666: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 57328)), Promise.resolve().then(i.bind(i, 91312)));
        },
        14965: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: l = {}, ...r } = t,
                        o = e || 'Internal error';
                    (super(o, r), (this.message = o), (this.code = i), (this.data = l), (this.stack = Error(o).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        53080: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => o });
            var s = i(88800);
            i(30282);
            var l = i(11006),
                r = i.n(l);
            let o = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: r().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => l });
            var s = i(97956);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: l, userRegion: r } = e;
                return 'ru' === r && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : l();
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => s, JU: () => l, DQ: () => _, Ve: () => y });
            var s,
                l,
                r = i(43297),
                o = (function () {
                    function e(e) {
                        ((this.observableValue = (0, r.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (l) {
                                    if (l !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, l), e(l));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, r.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (l) {
                                if (l !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, l), e(l));
                                }
                            })
                        );
                    }));
            })();
            var a = i(14965);
            class n extends a.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, n.prototype));
                }
            }
            class c extends a.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(s || (s = {}));
            let u = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new o(null)),
                        (this.isLoadingObservable = new o(!1)),
                        (this.errorObservable = new o(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new n(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = d(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(l || (l = {}));
            let h = new Map([
                    [s.EXPLICIT_ICON, l.E],
                    [s.AGE_18_ICON, l.AGE_18],
                    [s.AGE_16_ICON, l.AGE_16],
                    [s.AGE_12_ICON, l.AGE_12],
                    [s.EXCLAMATION_ICON, l.EXCLAMATION],
                ]),
                p = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                _ = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = d(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = h.get(t.type);
                    return void 0 !== i ? i : null;
                },
                y = (e, t) => d(e, t).length > 0;
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => n });
            var s = i(53548),
                l = i(63582),
                r = i(245),
                o = i(22681),
                a = i(56374);
            let n = (0, l.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, r.N)(),
                    t = (0, o.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, a.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                o = i(2058),
                a = i(30282),
                n = i(94144),
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
            let u = (e, t, i) => {
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
                d = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: u(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: u(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var m = i(62293),
                h = i(99839);
            let p = (e) => e(new Date(), (0, h.m)());
            var _ = i(51611),
                y = i(72288),
                E = i(11006),
                O = i.n(E),
                b = i(17392),
                g = i(29504),
                v = i(91292);
            let C = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, l.$)(O().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: O().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(v.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, l.$)(O().copyrightLink, O().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(g.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(v.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: O().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: O().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: O().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: l } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: O().item,
                                            children: (0, s.jsx)(v.N, { target: '_blank', href: l, className: O().link, 'data-test-id': b.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(g.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: O().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, l.$)(O().root, O().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, s.jsx)(I, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(C, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, y.g)(),
                    { formatDate: l, formatMessage: r } = (0, o.A)(),
                    { language: a } = (0, _.h)(),
                    n = d({ formatMessage: r, language: a, tld: i.tld, year: p(l) });
                return (0, s.jsx)(C, { className: t, data: n });
            });
            let N = (0, r.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: r, location: h, user: E } = (0, y.g)(),
                    { formatDate: b, formatMessage: g } = (0, o.A)(),
                    { isEnabled: v } = null != (t = (0, n.P)()) ? t : {},
                    { language: C } = (0, _.h)(),
                    I = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: o, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: l, userRegion: r } = e,
                                    o = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: u(c.COPYRIGHT_HOLDER, s, l) },
                                    a = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: u(c.PRIVACY_POLICY, s, l) },
                                    n = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: u(c.AGREEMENT, s, l) },
                                    d = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: u(c.RECOMMENDATION_RULES, s, l) },
                                    m = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: u(c.HELP, s, l) },
                                    h = [o, n, d];
                                return (i && 'ru' === r && h.push(a), h.push(m), h);
                            })({ formatMessage: i, isWebApplication: s, language: l, tld: r, userRegion: o }),
                            disclaimer: (0, m.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: d({ formatMessage: i, language: l, tld: r, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: g,
                        isWebApplication: a.$3,
                        tld: h.tld,
                        language: C,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: p(b),
                    });
                return (0, s.jsx)(A, { className: (0, l.$)({ [O().root_withOffsetForDeeplink]: v }, i), data: I });
            });
        },
        91312: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsAlbumsPage: () => T });
            var s = i(88800),
                l = i(65724),
                r = i(84961),
                o = i(53548),
                a = i(2058),
                n = i(88969),
                c = i(87999),
                u = i(76903),
                d = i(17392),
                m = i(29504),
                h = i(32596),
                p = i(10079),
                _ = i(69630),
                y = i(98427),
                E = i(46422),
                O = i(44230),
                b = i(37670),
                g = i(72288),
                v = i(54320),
                C = i(86790),
                I = i(60266),
                A = i(93317),
                N = i(37770),
                f = i(79418),
                L = i(71104),
                x = i(45654),
                k = i(53080),
                P = i.n(k);
            let T = (0, r.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, g.g)(),
                    { contentScrollRef: i, setContentScrollRef: r } = (0, O.g)(),
                    k = (0, E.W)(),
                    { formatMessage: T } = (0, a.A)(),
                    R = (0, o.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: L.c });
                        },
                        [t],
                    );
                (0, v.X)(t.pagesLoader, R);
                let D = (0, o.useMemo)(() => ({ Footer: () => (0, s.jsx)(I.A, { children: (0, s.jsx)(C.w, { className: P().footer }) }) }), []),
                    w = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, o.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, b.J)(t.isResolved),
                t.isNeededToLoad && (0, o.use)(t.getData({ pageSize: L.c })),
                t.isRejected)
                    ? (0, s.jsx)(h.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(x.i, { title: T({ id: 'kids.albums-and-podcasts' }) })
                      : (0, s.jsx)(u.a, {
                            pageId: c.AppScreen.CollectionKidsAlbums,
                            pageIdForFrom: y.b.COLLECTION_KIDS_ALBUMS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: T({ id: 'kids.albums-and-podcasts' }),
                                children: (0, s.jsxs)('div', {
                                    className: P().root,
                                    'data-test-id': d.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, s.jsx)(A.Y, {
                                            variant: A.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: k.canBack,
                                            children: (0, s.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(n.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, s.jsx)(f.$, {
                                            className: (0, l.$)(P().scrollContainer, P().important),
                                            listClassName: P().content,
                                            itemClassName: P().item,
                                            customComponents: D,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    l = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(p.a, { album: i, contentLinesCount: 4, withLikesCount: !0 }, i.id)
                                                    : (0, s.jsx)(N.V, { 'aria-label': l, linesCount: 4 });
                                            },
                                            initialItemCount: w,
                                            totalCount: w,
                                            onGetDataByPage: R,
                                            pageSize: L.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: r,
                                            context: { listAriaLabel: T({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => l, P: () => r });
            var s = i(53548);
            let l = (0, s.createContext)(null),
                r = () => (0, s.useContext)(l);
        },
        99839: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 8767, 2513, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800,
                5151, 4732, 9087, 3979, 6719, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 9755, 763, 2670, 7358,
            ],
            () => e((e.s = 12666)),
        ),
            (_N_E = e.O()));
    },
]);
