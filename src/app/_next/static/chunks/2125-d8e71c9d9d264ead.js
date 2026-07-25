(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2125],
    {
        3785: (e, t, n) => {
            'use strict';
            var i;
            n.d(t, { M: () => i }),
                (function (e) {
                    (e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'),
                        (e.SUBSTITUTED_ICON = 'substitutedIcon');
                })(i || (i = {}));
        },
        8626: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        11262: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => u });
            var i = n(32290),
                r = n(55178),
                a = n(91027),
                l = n(71730),
                o = n(45477),
                s = n(75582),
                c = n(49399);
            let u = (e, t) => {
                let { notify: n, dismiss: u } = (0, s.l)(),
                    d = (0, r.useRef)(void 0),
                    g = (0, a.c)(() => {
                        var n;
                        u({ notificationId: d.current }), (d.current = 0);
                        let i = [...(null != (n = e.lastRejectedPagesList) ? n : [])].reverse().filter((t) => {
                            var n;
                            return (null == (n = e.pageStates) ? void 0 : n[t]) === c.G.REJECT;
                        });
                        e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            });
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = n((0, i.jsx)(l.L, { reloadBlocks: g }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [u, g, n, e.rejectedPagesCount]);
            };
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
            (r.keys = () => Object.keys(i)), (r.id = 12526), (e.exports = r);
        },
        14190: (e, t, n) => {
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
        14459: (e, t, n) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            n.d(t, { k: () => i });
        },
        14858: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => l });
            var i = n(60900),
                r = n(57594),
                a = n(79406);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    { formatMessage: t } = (0, i.A)(),
                    { user: n, experiments: l } = (0, r.g)(),
                    o = 'ru' === n.account.data.userSessionRegionIso && l.checkExperiment(a.z.WebNextFooterDisclaimer, 'on'),
                    s = t(e ? { id: 'footer.explicit-content' } : { id: 'about-app.explicit-content' });
                return o ? t({ id: 'footer.disclaimer-content' }) : s;
            };
        },
        17024: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => r });
            let i = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        18870: (e, t, n) => {
            'use strict';
            var i;
            n.d(t, { $: () => i }),
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
                })(i || (i = {}));
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => r });
            var i = n(36477);
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
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        22556: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => r });
            let i = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let i = window.document.createElement('meta');
                    return i.setAttribute(e, t), i;
                },
                r = (e) => {
                    let { title: t, description: n, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = i('name', 'description');
                        e.setAttribute('content', n), window.document.head.appendChild(e);
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
                        l.setAttribute('content', e),
                            o.setAttribute('content', t),
                            s.setAttribute('content', a),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(s);
                    }
                };
        },
        22644: (e, t, n) => {
            'use strict';
            n.d(t, { _: () => r });
            var i = n(55178);
            let r = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        24535: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => a });
            var i = n(80451),
                r = n(73422);
            function a(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: a, locale: l, ogImage: o, siteName: s, ogType: c, customImage: u } = e,
                    d = o ? { url: (0, i.createAvatarUrl)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
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
        26365: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => a });
            var i = n(36477);
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
        28724: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => A });
            var i = n(32290),
                r = n(63618),
                a = n(96103),
                l = n(55178),
                o = n(39407),
                s = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(71926),
                g = n(70204),
                m = n(34186),
                h = n(83808),
                _ = n(20472),
                p = n(84062),
                f = n(85017),
                x = n(19379),
                v = n(61258),
                y = n(76768),
                E = n.n(y);
            let k = {
                    [f.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                A = (0, a.PA)((e) => {
                    var t;
                    let { modalState: n, data: a, onClose: y, className: A } = e,
                        L = null != a ? a : null == n ? void 0 : n.modalData,
                        N = (0, h.W)(),
                        R = (0, p.Z)(_.Z.main.href),
                        S = (0, m.N)().get(g.U2),
                        I = (0, c.c)(() => {
                            if (y) return y();
                            N.canBack && N.back(), R();
                        }),
                        O = (null == L || null == (t = L.details) ? void 0 : t.url) && L.details.text,
                        j = (0, c.c)(() => {
                            var e;
                            null == n || n.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(x.c.ExEx),
                                i = new Date(),
                                r = i.setMinutes(i.getMinutes() + 15),
                                a =
                                    null != (e = null == n ? void 0 : n.entityKey)
                                        ? e
                                        : ''.concat(null == n ? void 0 : n.entityType, '_').concat(null == n ? void 0 : n.entityId);
                            t ? S.set(x.c.ExEx, [...t, a], { expires: new Date(r) }) : S.set(x.c.ExEx, [a], { expires: new Date(r) }),
                                null == y || y(),
                                (null == n ? void 0 : n.onDisclaimerConfirmHandler) && n.onDisclaimerConfirmHandler();
                        }),
                        C = (0, c.c)(() => {
                            (null == n ? void 0 : n.shouldHistoryBack) ? (null == y || y(), N.canBack && N.back(), R()) : null == y || y(),
                                (null == n ? void 0 : n.onDisclaimerRejectHandler) && n.onDisclaimerRejectHandler();
                        });
                    (0, l.useEffect)(
                        () => () => {
                            null == n || n.reset();
                        },
                        [n],
                    );
                    let w = (0, l.useMemo)(() => {
                            if (L) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(E().title, E().text),
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: L.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: E().text,
                                            'data-test-id': s.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: L.description,
                                        }),
                                        O &&
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
                        }, [L, O]),
                        T = (0, l.useMemo)(
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
                                                  onClick: j,
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
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: E().button,
                                              'data-test-id': s.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [j, null == n ? void 0 : n.entityType, null == n ? void 0 : n.type, I, C],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, r.$)(E().root, A),
                        'data-test-id': s.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: E().container, children: [w, T] }),
                    });
                });
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
        31010: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => r, P: () => a });
            var i = n(55178);
            let r = (0, i.createContext)(null),
                a = () => (0, i.useContext)(r);
        },
        32468: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => l });
            var i = n(32290),
                r = n(77088),
                a = n.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: a().empty });
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
        42125: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var i = n(3266),
                r = n(55178),
                a = n(14190),
                l = n(73422),
                o = n(84570),
                s = n(64552);
            let c = (0, r.cache)(async (e) => (0, s.M)(e, s.X)),
                u = async (e) => {
                    let t = (e || l.E.getDefaultLocale()).language,
                        n = (0, o.k)(a.pE[a.cy], t),
                        r = await c(n);
                    return (e, t) => {
                        let a = null == r ? void 0 : r[e.id],
                            l = '';
                        return (Array.isArray(a) || 'string' == typeof a) && (l = new i.S(a, n).format(t)), Array.isArray(l) ? l.join('') : l;
                    };
                };
        },
        44242: (e, t, n) => {
            'use strict';
            function i(e) {
                return { ios: { app_name: e.appName, app_store_id: '520797969', url: 'yandexmusic:/'.concat(e.additional.url) }, web: { url: e.additional.fullUrl } };
            }
            n.d(t, { X: () => i });
        },
        45257: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => p });
            var i = n(32290),
                r = n(63618),
                a = n(8055),
                l = n(55178);
            let o = (e) => {
                    let { style: t, forwardRef: n, context: r, ...a } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': l, style: { ...t }, ref: n, ...a });
                },
                s = (0, l.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = n(39684),
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
            var m = n(62060),
                h = n(31417);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: n,
                            onRangeHandler: r,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: s = [],
                            endReached: c,
                            ...u
                        } = e,
                        [d, g] = (0, l.useState)(null),
                        _ = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), s.length > 0 && g(e), t && n)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < i; e++) n(e);
                                    }
                                }, a),
                            [a, r, t, n, s],
                        );
                    (0, l.useEffect)(() => {
                        s.length > 0 && d && _(d);
                    }, s);
                    let p = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, i.jsx)(h.sN, { rangeChanged: _, totalCount: o, endReached: p, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: n,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: p = 700,
                            pageSize: f = 20,
                            totalCount: x,
                            totalRequests: v,
                            debounceDurationInMs: y,
                            initialItemCount: E,
                            minInitialItemCount: k = 20,
                            handleRef: A,
                            alwaysShowScrollbar: L = !1,
                            testId: N,
                            isMobileLayout: R = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...I
                        } = e,
                        [O, j] = (0, l.useState)(!1),
                        C = (0, l.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        w = (0, l.useMemo)(() => {
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
                        }, [n, v, R]),
                        T = E ? Math.min(E, k) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: O || L, [u().root_notScrolling]: !O && !L }, t),
                        'data-test-id': N,
                        children: [
                            R && (null == n ? void 0 : n.Header) && n.Header(),
                            (0, i.jsx)(_, {
                                overscan: p,
                                components: w,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: C,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: x,
                                pageSize: f,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: S,
                                ...I,
                            }),
                            R && (null == n ? void 0 : n.Footer) && n.Footer(),
                        ],
                    });
                };
        },
        46646: (e, t, n) => {
            var i = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
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
            (r.keys = () => Object.keys(i)), (r.id = 46646), (e.exports = r);
        },
        47216: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a });
            var i = n(94821);
            let r = '@yandexmusic';
            function a(e) {
                return e.cardType === i.W.SUMMARY_LARGE_IMAGE
                    ? { card: i.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : { card: i.W.APP, site: r, title: e.title, app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: 'yandexmusic:/'.concat(e.url) } } };
            }
        },
        51714: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => l });
            var i = n(55178),
                r = n(31010),
                a = n(36477);
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
        54639: (e, t, n) => {
            'use strict';
            n.d(t, { EV: () => r, r3: () => i });
            let i = 20,
                r = 20;
        },
        57594: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => a, g: () => l });
            var i = n(29222),
                r = n(55178);
            let a = (0, r.createContext)(null);
            function l() {
                let e = (0, r.useContext)(a);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        57815: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => r });
            var i = n(87151);
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
        58054: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => E });
            var i = n(32290),
                r = n(63618),
                a = n(96103),
                l = n(60900),
                o = n(39407),
                s = n(21732),
                c = n(71926),
                u = n(14858),
                d = n(8626),
                g = n(31010),
                m = n(61945),
                h = n(57594),
                _ = (function (e) {
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
            let p = (e, t, n) => {
                switch (e) {
                    case _.YANDEX:
                        if ('ru' === t) return 'https://ya.ru';
                        return;
                    case _.YANDEX_PROJECTS:
                        return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                    case _.COPYRIGHT_HOLDER:
                        return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                    case _.AGREEMENT:
                        return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                    case _.RECOMMENDATION_RULES:
                        return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                    case _.HELP:
                        return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                    case _.PRIVACY_POLICY:
                        return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                }
            };
            var f = n(61258),
                x = n(77088),
                v = n.n(x);
            let y = (0, a.PA)((e) => {
                    let { className: t } = e,
                        { location: n } = (0, h.g)(),
                        { formatDate: a } = (0, l.A)(),
                        { language: u } = (0, m.h)();
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(v().copyrights, t),
                        'data-test-id': s.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(c.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    a(new Date(), (0, d.m)()),
                                    ' \xa0',
                                    (0, i.jsx)(f.N, {
                                        target: '_blank',
                                        href: p(_.YANDEX, n.tld, u),
                                        className: (0, r.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': s.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: (0, i.jsx)(o.A, { id: 'footer.yandex-music' }),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(c.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(f.N, {
                                target: '_blank',
                                href: p(_.YANDEX_PROJECTS, n.tld, u),
                                className: v().copyrightLink,
                                'data-test-id': s.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: (0, i.jsx)(o.A, { id: 'footer.yandex-project' }),
                            }),
                        ],
                    });
                }),
                E = (0, a.PA)((e) => {
                    var t;
                    let { className: n } = e,
                        { user: a, location: l } = (0, h.g)(),
                        { isEnabled: d } = null != (t = (0, g.P)()) ? t : {},
                        { language: x } = (0, m.h)(),
                        E = (0, u.w)(!0),
                        k = ((e) => {
                            let { platform: t, tld: n, language: r, userRegion: a } = e,
                                l = { title: (0, i.jsx)(o.A, { id: 'footer.links-copyright-holders' }), url: p(_.COPYRIGHT_HOLDER, n, r) },
                                s = { title: (0, i.jsx)(o.A, { id: 'footer.links-privacy-policy' }), url: p(_.PRIVACY_POLICY, n, r) },
                                c = { title: (0, i.jsx)(o.A, { id: 'footer.links-terms' }), url: p(_.AGREEMENT, n, r) },
                                u = { title: (0, i.jsx)(o.A, { id: 'footer.links-recommendation-rules' }), url: p(_.RECOMMENDATION_RULES, n, r) },
                                d = { title: (0, i.jsx)(o.A, { id: 'footer.links-help' }), url: p(_.HELP, n, r) };
                            switch (t) {
                                case 'spa':
                                case 'web': {
                                    let e = [l, c, u];
                                    return 'ru' === a && e.push(s), e.push(d), e;
                                }
                                case 'desktop':
                                    return [l, c, u, d];
                            }
                        })({ platform: 'desktop', tld: l.tld, language: x, userRegion: a.account.data.userSessionRegionIso });
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(v().root, v().important, { [v().root_withOffsetForDeeplink]: d }, n),
                        'data-test-id': s.S7.FOOTER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().links,
                                children: [
                                    (0, i.jsx)('ol', {
                                        className: v().list,
                                        'data-test-id': s.S7.FOOTER_LINKS_LIST,
                                        children: k.map((e) => {
                                            let { title: t, url: n } = e;
                                            return (0, i.jsx)(
                                                'li',
                                                {
                                                    className: v().item,
                                                    children: (0, i.jsx)(f.N, {
                                                        target: '_blank',
                                                        href: n,
                                                        className: v().link,
                                                        'data-test-id': s.S7.FOOTER_LINK,
                                                        children: t,
                                                    }),
                                                },
                                                n,
                                            );
                                        }),
                                    }),
                                    (0, i.jsx)(c.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: v().explicitText,
                                        tabIndex: 0,
                                        dangerouslySetInnerHTML: { __html: E },
                                        'data-test-id': s.S7.FOOTER_DISCLAIMER_TEXT,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y, {}),
                        ],
                    });
                });
        },
        64170: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => E });
            var i = n(32290),
                r = n(63618),
                a = n(96103),
                l = n(55178),
                o = n(60900),
                s = n(39407),
                c = n(63423),
                u = n(82586),
                d = n(71926),
                g = n(16172),
                m = n(52068),
                h = n(62376),
                _ = n(37240),
                p = n(83920),
                f = n(20472),
                x = n(12894),
                v = n(30310),
                y = n.n(v);
            let E = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    v = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        { pageId: i } = (0, _.$)(),
                        r = (0, h.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !n || !i) return;
                        let a = (0, g.Fx)({
                            params: {
                                entityType: g.LA.Error,
                                entityId: g.LA.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: i,
                                pageStyle: g.QL.Fullscreen,
                                pagePlacement: g.c4.Fullscreen,
                                mainObjectType: g.ky.NonApplicable,
                                mainObjectId: g.ky.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, g.z5)(t.evgenInstance, a);
                    }, [t, e, n, i, r]);
                })(v);
                let { sendRefreshEvent: E } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: n } = (0, _.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let r = (0, g.Fx)({
                                    params: {
                                        actionType: g.X2.Refresh,
                                        userInteractionType: g.gi.Tap,
                                        entityType: g.LA.Error,
                                        entityId: g.LA.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: g.QL.Fullscreen,
                                        pagePlacement: g.c4.Fullscreen,
                                        mainObjectType: g.ky.NonApplicable,
                                        mainObjectId: g.ky.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, g.bv)(e.evgenInstance, r);
                            }, [e, t, n, i]),
                        };
                    })(),
                    k = (0, l.useCallback)(() => {
                        E(), (window.location.href = f.Z.main.href);
                    }, [E]),
                    { contentRef: A } = (0, p.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(y().root, t),
                    children: [
                        n &&
                            (0, i.jsx)(x.L, { withBackwardFallback: '/', className: (0, r.$)(y().navigation, { [y().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(y().content, { [y().content_shrink]: !n }),
                            children: [
                                (0, i.jsx)(u.I, { className: y().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(d.DZ, { className: (0, r.$)(y().title, y().important), variant: 'h3', size: 'xs', children: v }),
                                (0, i.jsxs)(d.HL, {
                                    className: (0, r.$)(y().text, y().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(s.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: k,
                                    className: y().button,
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
        64552: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => s });
            var i = n(29222),
                r = n(14190);
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
        65024: (e, t, n) => {
            'use strict';
            n.d(t, { C: () => r });
            let i = new Set(Object.values(n(3785).M)),
                r = (e) => 'string' == typeof e && i.has(e);
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => h });
            var i = n(32290),
                r = n(63618),
                a = n(55178),
                l = n(60900),
                o = n(39407),
                s = n(63423),
                c = n(82586),
                u = n(71926),
                d = n(58534),
                g = n(70718),
                m = n.n(g);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: n } = e,
                    g = (0, a.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let _ = (0, a.useMemo)(
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
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, i.jsx)(d.$, { className: (0, r.$)(m().root, m().important), message: _, closeToast: n });
            };
        },
        73422: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => d });
            var i = n(91945),
                r = n(14190),
                a = n(84570),
                l = n(40363);
            let o = (e) => l.U.parseAcceptLanguage(null != e ? e : void 0);
            var s = n(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: s.$.RU, en: s.$.EN, uz: s.$.UZ, kk: s.$.KK }[e]) ? t : s.$.RU;
            };
            var u = n(64552);
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
                        t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {});
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
        83992: (e, t, n) => {
            'use strict';
            function i(e) {
                let { tld: t, url: n } = e;
                return n || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            n.d(t, { v: () => i });
        },
        84570: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        87151: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => r });
            var i = n(65024);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        91853: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            var i = n(19383);
            let r = (e) => {
                let { artist: t, callback: n, shouldHistoryBack: r } = e;
                return (0, i.l)({ entity: t, callback: n, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        94821: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => i });
            var i = (function (e) {
                return (e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e;
            })({});
        },
    },
]);
