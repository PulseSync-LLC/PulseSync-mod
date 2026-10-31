(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3042],
    {
        324: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var n = a(28166);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(n.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        1220: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { $: () => n }),
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
        2218: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var n = a(28166),
                r = a(77863);
            let i = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(n.Lz, '/').concat(e.url) } },
                      };
            }
        },
        4370: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var n = a(67174);
            let r = {
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
        4476: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => o });
            var n = a(88800),
                r = a(53548),
                i = a(54020),
                s = a(8840),
                l = a(80566);
            let o = (e) => {
                let { children: t } = e,
                    a = (0, r.useRef)({}),
                    o = (0, r.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    n = a.current[t];
                                if (n) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, i.A)());
                                            (n.callback(!0, e), (n.showed = !0), (n.viewUuid = e));
                                        }, 1e3);
                                        n.timerId = e;
                                    }
                                    (!e.isIntersecting && n.showed && (n.callback(!1, n.viewUuid), (n.showed = !1), (n.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(n.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = o.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, r.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = o.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, n.jsx)(l.B.Provider, { value: u, children: t });
            };
        },
        7555: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => c });
            var n,
                r = a(53548),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    2095: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = {
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
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6009: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            l = n(a(2095)),
                            o = (e) => {
                                let { forwardRef: t, radius: a, variant: n = 'default', children: s, className: o, withShadow: c, style: d, ...u } = e;
                                return (0, r.jsx)('div', {
                                    className: (0, i.clsx)(
                                        l.default.root,
                                        l.default['root_radius_'.concat(a)],
                                        l.default['root_variant_'.concat(n)],
                                        { [l.default.root_withShadow]: c },
                                        o,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'U', { value: !0 }), (o.X = void 0));
                var e = l(6009);
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
        10465: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => n });
            let n = () => ({ timeStyle: 'short' });
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
        12526: (e, t, a) => {
            var n = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 12526), (e.exports = r));
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => n });
            let n = (e, t) => {
                let [a, n] = e.split('?'),
                    r = new URLSearchParams(n || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let i = r.toString();
                return ''.concat(a).concat(i ? '?'.concat(i) : '');
            };
        },
        13060: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(88800),
                r = a(65724),
                i = a(17392),
                s = a(52300),
                l = a(29504),
                o = a(19872),
                c = a.n(o);
            let d = (e) => {
                let { title: t, className: a, titleClassName: o, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(c().root, a),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(l.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, r.$)(c().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
        16661: (e) => {
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
        19191: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => x });
            var n = a(53548),
                r = a(78793),
                i = a(92716),
                s = a(90399),
                l = a(90615),
                o = a(90780),
                c = a(12816),
                d = a(96527),
                u = a(46166),
                b = a(14518),
                m = a(65523);
            let x = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    x = (0, o.st)(),
                    { hash: p } = (0, o.gf)(),
                    { pageId: N } = (0, b.$)(),
                    { objectsCount: g, objectType: h, objectId: v, objectPosX: f, objectPosY: _, objectPos: y } = (0, u.J)(),
                    W = (0, d.N)(),
                    C = (0, m.U)(),
                    E = (0, n.useCallback)(
                        (e) => {
                            let a = (0, r.F)({
                                params: { hash: p, artistId: t, objectsCount: g, objectType: h, objectId: v, objectPosX: f, objectPosY: _, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && a && (0, s.U6)(x.evgenInstance, a);
                        },
                        [x, t, p, C, v, f, _, h, g],
                    ),
                    k = (0, n.useCallback)(
                        (e) => {
                            let n = (0, r.F)({
                                params: { hash: p, artistId: t, viewUuid: a, objectId: v, objectPos: y, to: e },
                                logger: C,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            x && n && a && (0, l.mh)(x.evgenInstance, n);
                        },
                        [x, t, p, C, v, y, a],
                    );
                return (0, n.useCallback)(
                    (e) => {
                        if (x && N && c.xK.includes(N))
                            switch (N) {
                                case c._Q.ARTIST:
                                    E(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    k(e);
                                    break;
                                case c._Q.SEARCH:
                                    W({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [x, N, W, k, E],
                );
            };
        },
        19872: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        19998: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => W });
            var n = a(88800),
                r = a(65724),
                i = a(84961),
                s = a(53548),
                l = a(88969),
                o = a(17392),
                c = a(29993),
                d = a(96817),
                u = a(29504),
                b = a(4086),
                m = a(41928),
                x = a(46422),
                p = a(4370),
                N = a(78940),
                g = a(85587),
                h = a(15253),
                v = a(91292),
                f = a(28806),
                _ = a.n(f);
            let y = {
                    [g.n.ALBUM]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [g.n.PODCAST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [g.n.ARTIST]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [g.n.TRACK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [g.n.AUDIOBOOK]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [g.n.CLIP]: (0, n.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                W = (0, i.PA)((e) => {
                    var t;
                    let { modalState: a, data: i, onClose: f, className: W } = e,
                        C = null != i ? i : null == a ? void 0 : a.modalData,
                        E = (0, x.W)(),
                        k = (0, N.Z)(p.Z.main.href),
                        A = (0, m.N)().get(b.U2),
                        T = (0, c.c)(() => {
                            if (f) return f();
                            (E.canBack && E.back(), k());
                        }),
                        S = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = A.get(h.c.ExEx),
                                n = new Date(),
                                r = n.setMinutes(n.getMinutes() + 15),
                                i =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? A.set(h.c.ExEx, [...t, i], { expires: new Date(r) }) : A.set(h.c.ExEx, [i], { expires: new Date(r) }),
                                null == f || f(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        P = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == f || f(), E.canBack && E.back(), k()) : null == f || f(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let w = (0, s.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(_().title, _().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: _().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        S &&
                                            (0, n.jsx)(v.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: _().link,
                                                children: (0, n.jsx)(u.HL, {
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
                        }, [C, S]),
                        R = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === g.Z.UNSAFE
                                    ? (0, n.jsxs)('div', {
                                          className: _().buttons,
                                          children: [
                                              (0, n.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, n.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, n.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && y[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)('div', {
                                          className: _().buttons,
                                          children: (0, n.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: T,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: _().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, n.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, T, P],
                        );
                    return (0, n.jsx)('div', {
                        className: (0, r.$)(_().root, W),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, n.jsxs)('div', { className: _().container, children: [w, R] }),
                    });
                });
        },
        21424: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            let n = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        21438: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let n = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && n.test(e);
            }
        },
        22989: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        25299: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => Z }));
            var n = a(88800),
                r = a(58390),
                i = a(84961),
                s = a(53548),
                l = a(2058),
                o = a(54020),
                c = a(17392),
                d = a(66719),
                u = a(29504),
                b = a(69630),
                m = a(91959),
                x = a(48911),
                p = a(27021),
                N = a(52018),
                g = a(12816),
                h = a(4476),
                v = a(77948),
                f = a(59844),
                _ = a(46422),
                y = a(44230),
                W = a(37670),
                C = a(72288),
                E = a(97956),
                k = a(19998),
                A = a(86790),
                T = a(60266),
                S = a(93317),
                L = a(63793),
                P = a(78793),
                w = a(90615),
                R = a(90780),
                I = a(65523),
                D = a(81685),
                O = a(30144),
                j = a(324),
                M = a(53073),
                F = a(83418),
                U = a(46511),
                Y = a(57297),
                H = a(2218),
                B = a(77863),
                V = a(45383);
            async function z(e, t) {
                var a, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let i = await (0, U.W)(t.locale),
                    s = i({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    l = i({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, Y.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, F.v)({ host: t.host }),
                        siteName: i({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, H.H)({ cardType: B.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, M.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: i({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var G = a(27342),
                K = a(63512),
                X = a(34713),
                Q = a.n(X);
            let $ = (0, i.PA)((e) => {
                var t, a, i;
                let { artistId: j, preloadedArtist: M, preloadedConcerts: F } = e,
                    { artist: U, disclaimerModalState: Y, experiments: H } = (0, C.g)(),
                    B = H.checkExperiment(E.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: V } = (0, l.A)(),
                    { contentScrollRef: X, setContentScrollRef: $ } = (0, y.g)(),
                    J = (0, _.W)(),
                    Z = (0, s.useRef)(String((0, o.A)())),
                    q = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, R.st)(),
                            { hash: r } = (0, R.gf)(),
                            i = (0, I.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, P.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, w.__)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current }),
                    ee = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, R.st)(),
                            { hash: r } = (0, R.gf)(),
                            i = (0, I.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, P.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, w.pe)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current });
                (0, s.useEffect)(
                    () => (
                        q(),
                        () => {
                            ee();
                        }
                    ),
                    [ee, q],
                );
                let et = (0, m.S)({ artist: null == (t = U.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, K.G)(j),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = U.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (a = U.meta) ? void 0 : a.artist.isUnsafeLegal, et]),
                    (0, G._)(U, j),
                    (0, s.useEffect)(
                        () => () => {
                            U.concertsSubpage.reset();
                        },
                        [U],
                    ),
                    (0, W.J)(U.concertsSubpage.isResolved),
                    U.concertsSubpage.isNotFound && (0, r.notFound)());
                let ea = (0, s.useMemo)(() => {
                        var e;
                        if (U.concertsSubpage.isLoading) return (0, L.T)(10);
                        let t = B ? N.M : p.Z;
                        return null == (e = U.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, n.jsx)(
                                      v.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: a + 1,
                                          children: (0, n.jsx)(x.V, {
                                              artistId: j,
                                              concert: e,
                                              viewUuid: Z.current,
                                              meta: (0, n.jsx)(t, { concert: e }),
                                              shouldShowMask: B,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [U.concertsSubpage.concerts, U.concertsSubpage.isLoading, j, B, Z]),
                    en = [];
                if (
                    (U.concertsSubpage.isNeededToLoad && en.push(U.concertsSubpage.getData({ artistId: Number(j), preloadedConcerts: F })),
                    U.infoLoadingState.isNeededToLoad && en.push(U.getInfo({ artistId: j, preloadedArtist: M })),
                    ((e) => {
                        var t;
                        let { fullscreenVideoPlayer: a } = (0, C.g)(),
                            n = null == e || null == (t = e.meta) ? void 0 : t.artist,
                            r = null == e ? void 0 : e.infoLoadingState.isLoading,
                            i = null == e ? void 0 : e.infoLoadingState.isRejected,
                            l = (0, s.useCallback)((e) => (i ? {} : n && !r ? z({ artist: (0, D.E)(n) }, e) : void 0), [n, r, i]);
                        (0, O.C)(a.modal.isOpened ? null : l);
                    })(U),
                    en.length && (0, s.use)(Promise.allSettled(en)),
                    null == (i = U.meta) ? void 0 : i.artist.isLegalRejected)
                )
                    return (0, n.jsx)(k.M, { modalState: Y });
                let er = (0, s.useMemo)(
                    () =>
                        B && U.concertsSubpage.artistTitle
                            ? V({ id: 'page.artist-all-concerts-header' }, { artistName: U.concertsSubpage.artistTitle })
                            : V({ id: 'page.artist-concerts-header' }, { artistName: U.commonSubPage.artistName }),
                    [B, U.concertsSubpage.artistTitle, U.commonSubPage.artistName, V],
                );
                return (0, n.jsx)(f.n, {
                    pageId: g._Q.ARTIST_CONCERTS,
                    pageEntityId: j,
                    children: (0, n.jsx)(h.j, {
                        children: (0, n.jsx)(b.h, {
                            scrollElement: X,
                            outerTitle: er,
                            children: (0, n.jsxs)('div', {
                                className: Q().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, n.jsx)(S.Y, {
                                        variant: S.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: J.canBack,
                                        children: (0, n.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: er }),
                                    }),
                                    (0, n.jsxs)(d.N, {
                                        ref: $,
                                        className: Q().scrollableContent,
                                        containerClassName: Q().container,
                                        children: [
                                            (0, n.jsx)('div', { className: Q().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: ea }),
                                            (0, n.jsx)(T.A, { children: (0, n.jsx)(A.w, { className: Q().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var J = a(21438);
            let Z = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, J.L)(e)) || (0, r.notFound)(), (0, n.jsx)($, { artistId: e }));
            };
        },
        27021: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => b });
            var n = a(88800),
                r = a(84961),
                i = a(53548),
                s = a(2058),
                l = a(29504),
                o = a(10465),
                c = a(13060),
                d = a(95960),
                u = a.n(d);
            let b = (0, r.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: r } = (0, s.A)(),
                    d = [],
                    b = (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(b, (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: r(a.datetime, (0, o.f)()) })),
                    (null == a ? void 0 : a.contentRating) && d.push(b, (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, n.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == a ? void 0 : a.city }),
                            (0, n.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        27342: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var n = a(53548);
            let r = (e, t) => {
                (0, n.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        28806: (e) => {
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
        29201: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var n = a(35396);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, n.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        30144: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => x });
            var n = a(53548),
                r = a(58390),
                i = a(51611),
                s = a(65523);
            let l = {
                other: {
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-mobile-web-app-status-bar-style': 'black',
                    'apple-mobile-web-app-title': 'Яндекс Музыка',
                    robots: 'noyaca',
                },
            };
            var o = a(46511);
            async function c() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { fullUrl: null, locale: null, url: null, tld: 'net', host: 'music.yandex.ru' },
                    t = await (0, o.W)(e.locale);
                return {
                    ...l,
                    title: t({ id: 'metadata.yandex-music-default-title' }),
                    description: t({ id: 'metadata.yandex-music-default-description' }),
                    alternates: { canonical: e.canonical },
                };
            }
            var d = a(88349),
                u = a(91241);
            let b = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let n = window.document.createElement('meta');
                    return (n.setAttribute(e, t), n);
                },
                m = (e) => {
                    let { title: t, description: a, openGraph: n } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = b('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (n) {
                        let e = 'string' == typeof n.title ? n.title : '',
                            t = 'string' == typeof n.description ? n.description : '',
                            a = Array.isArray(n.images) ? n.images[0] : null;
                        r = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let i = b('property', 'og:title'),
                            s = b('property', 'og:description'),
                            l = b('property', 'og:image');
                        (i.setAttribute('content', e),
                            s.setAttribute('content', t),
                            l.setAttribute('content', r),
                            window.document.head.appendChild(i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l));
                    }
                },
                x = (e) => {
                    let { language: t } = (0, i.h)(),
                        a = (0, s.U)(),
                        l = (0, r.usePathname)(),
                        o = (0, r.useSearchParams)().toString();
                    (0, n.useEffect)(() => {
                        if (!e) return;
                        let n = !0,
                            r = ((e, t) => ({ fullUrl: e.href, locale: new Intl.Locale(t), url: e.pathname, tld: (0, d.f)(e.host) || u.l, host: e.host }))(
                                window.location,
                                t,
                            ),
                            i = window.location.pathname + window.location.search,
                            s = () => n && i === window.location.pathname + window.location.search;
                        return (
                            (async () => {
                                try {
                                    let t = await e(r);
                                    if (!s() || !t) return;
                                    let a = 'string' == typeof t.title && t.title.trim() ? t.title : (await c(r)).title;
                                    s() && m({ ...t, title: a });
                                } catch (e) {
                                    if (!s()) return;
                                    a.error('[ClientMetadata] Failed to update metadata', { error: e });
                                    try {
                                        let e = await c(r);
                                        s() && m(e);
                                    } catch (e) {
                                        s() && a.error('[ClientMetadata] Failed to load fallback metadata', { error: e });
                                    }
                                }
                            })(),
                            () => {
                                n = !1;
                            }
                        );
                    }, [e, t, a, l, o]);
                };
        },
        31423: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        32414: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        34303: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.URL = 'url'),
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
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        34713: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContent: 'ArtistConcertsPage_scrollableContent__aiEjd',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        35396: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { C: () => i }),
                (function (e) {
                    // for PulseSync: BEGIN substituted-track enum extension
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        ((e.EXCLAMATION_ICON = 'exclamationIcon'), (e.SUBSTITUTED_ICON = 'substitutedIcon')));
                    // for PulseSync: END substituted-track enum extension
                })(n || (n = {})));
            let r = new Set(Object.values(n)),
                i = (e) => 'string' == typeof e && r.has(e);
        },
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var n = a(53548);
            a(30282);
            var r = a(58390);
            let i = (e) => {
                let t = (0, r.usePathname)(),
                    [a, i] = (0, n.useState)(!1);
                ((0, n.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, n.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), i(!0));
                    }, [e, a, t]));
            };
        },
        44167: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => v });
            var n = a(88800),
                r = a(53548),
                i = a(2058),
                s = a(30282),
                l = a(17392),
                o = a(96817),
                c = a(11372),
                d = a(73170),
                u = a(4086),
                b = a(41928),
                m = a(12149),
                x = a(58390),
                p = a(12533),
                N = a(34303),
                g = a(31423),
                h = a.n(g);
            let v = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: g, onClose: v } = e,
                    f = (0, b.N)().get(u.V4),
                    { formatMessage: _ } = (0, i.A)(),
                    y = (() => {
                        let e = (0, x.useSearchParams)();
                        return (0, r.useCallback)(
                            (t) => {
                                let a = e.get(N.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let n = new URLSearchParams();
                                return (n.set(N.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, p.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    W = (0, r.useCallback)(
                        (e) => {
                            e.origin === f.afisha.host && 'close' === e.data.type && v();
                        },
                        [v, f.afisha.host],
                    );
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', W),
                        () => {
                            window.removeEventListener('message', W);
                        }
                    ),
                    [W],
                );
                let C = (0, r.useCallback)(
                        (e) => {
                            e ? g() : v();
                        },
                        [v, g],
                    ),
                    E = (0, s.tE)(f, (0, m.u)()),
                    k = y(''.concat(f.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(E));
                return (0, n.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: C,
                    onClose: v,
                    showHeader: !1,
                    className: h().widget,
                    contentClassName: h().content,
                    overlayColor: 'full',
                    'data-test-id': l.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(o.$, { 'aria-label': _({ id: 'interface-actions.close' }), onClick: v }) }),
                        (0, n.jsx)('iframe', {
                            src: k,
                            className: h().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        45383: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var n = a(67174);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) i[s - 2] = arguments[s];
                    let [l] = i,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        d = {},
                        { href: u } = (0, n.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, n.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        46422: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r, W: () => i });
            var n = a(53548);
            let r = (0, n.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function i() {
                return (0, n.useContext)(r);
            }
        },
        46511: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var n = a(27794),
                r = a(53548),
                i = a(72542),
                s = a(83602),
                l = a(21424),
                o = a(95330);
            let c = (0, r.cache)(async (e) => (0, o.M)(e, o.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, l.k)(i.pE[i.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let i = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (s = new n.S(i, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        46646: (e, t, a) => {
            var n = { './en.json': [61263, 1263], './kk.json': [85218, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 46646), (e.exports = r));
        },
        48911: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => R });
            var n = a(88800),
                r = a(65724),
                i = a(84961),
                s = a(53548),
                l = a(92716),
                o = a(17392),
                c = a(29993),
                d = a(78275),
                u = a(52073),
                b = a(96817),
                m = a(7555),
                x = a(28830),
                p = a(78940),
                N = a(72288),
                g = a(97956),
                h = a(67174),
                v = a(19191),
                f = a(78793),
                _ = a(90399),
                y = a(90615),
                W = a(90780),
                C = a(12816),
                E = a(46166),
                k = a(14518),
                A = a(65523),
                T = a(76484),
                S = a(44167),
                L = a(74250),
                P = a(16661),
                w = a.n(P);
            let R = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: P,
                        radius: R = 'l',
                        className: I,
                        shouldSendAnalyticsOnHide: D,
                        forceAfishaWidget: O,
                        shouldShowMask: j,
                    } = e,
                    { state: M, toggleTrue: F, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: Y } = (0, N.g)(),
                    H = !O && Y.checkExperiment(g.z.WebNextConcertPage, 'on'),
                    { href: B } = (0, h.u)('/concert/:concertId', { params: { concertId: a.id } }),
                    V = (0, p.Z)(B),
                    z = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, W.st)(),
                            { hash: r } = (0, W.gf)(),
                            { pageId: i } = (0, k.$)(),
                            { objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u, objectPos: b } = (0, E.J)(),
                            m = (0, A.U)(),
                            x = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: r, artistId: t, objectsCount: l, objectType: o, objectId: c, objectPosX: d, objectPosY: u },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && (0, _.HB)(n.evgenInstance, e);
                            }, [n, t, r, m, c, d, u, o, l]),
                            p = (0, s.useCallback)(() => {
                                let e = (0, f.F)({
                                    params: { hash: r, artistId: t, viewUuid: a, objectId: c, objectPos: b },
                                    logger: m,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && a && (0, y.Z4)(n.evgenInstance, e);
                            }, [n, t, r, m, c, b, a]);
                        return (0, s.useCallback)(() => {
                            if (n && i && C.xK.includes(i))
                                switch (i) {
                                    case C._Q.ARTIST:
                                    case C._Q.CONCERT:
                                        x();
                                        break;
                                    case C._Q.ARTIST_CONCERTS:
                                        p();
                                }
                        }, [n, i, p, x]);
                    })({ artistId: t, viewUuid: P }),
                    G = (0, v.m)({ artistId: t, viewUuid: P }),
                    { ref: K, intersectionPropertyId: X } = (0, x.n)({ callback: null !== t ? z : void 0, singleEvent: !D }),
                    Q = (0, s.useId)(),
                    $ = (0, s.useId)(),
                    J = (0, T.Y)()(a),
                    Z = (0, c.c)((e) => {
                        ((0, u.P)(e, w().ripple), H && (V(e), G(l.FromArtistScreenTo.ConcertScreen)));
                    }),
                    q = (0, c.c)((e) => {
                        (F(), G(l.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, n.jsxs)(m.t, {
                    radius: R,
                    className: (0, r.$)(w().root, I, { [w().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: K,
                    'data-intersection-property-id': X,
                    onClick: Z,
                    children: [
                        a.datetime &&
                            (0, n.jsx)(L.d, {
                                datetime: a.datetime,
                                id: Q,
                                className: (0, r.$)(w().date, { [w().dateWithMask]: j, [w().important]: j }),
                                dayClassName: w().dateColor,
                                monthClassName: w().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: $, concert: a }),
                        a.dataSessionId &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(b.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: w().button,
                                        'aria-describedby': ''.concat(Q, ' ').concat($),
                                        'aria-label': J,
                                        onClick: q,
                                        'data-test-id': o.OA.concert.CONCERT_CARD_BUTTON,
                                        children: J,
                                    }),
                                    (0, n.jsx)(S.h, { dataSessionId: a.dataSessionId, isOpened: M, onOpen: F, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        51806: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        52018: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => m });
            var n = a(88800),
                r = a(84961),
                i = a(53548),
                s = a(88969),
                l = a(17392),
                o = a(79070),
                c = a(29504),
                d = a(13060),
                u = a(95960),
                b = a.n(u);
            let m = (0, r.PA)((e) => {
                let { id: t, concert: a, withCashback: r = !0, withInlineMeta: u = !1, titleSize: m = 'm' } = e,
                    x = [],
                    p = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    x.push(
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': l.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        x.push(
                            p,
                            (0, n.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': l.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let N = (0, o.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': l.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && N && x.push(p, N),
                    (0, n.jsxs)('div', {
                        className: b().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: m,
                                weight: 'medium',
                                className: b().city,
                                lineClamp: 1,
                                'data-test-id': l.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: b().info, children: x.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && N,
                            r &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: b().cashback, valuePercent: a.cashbackValuePercent }),
                            r &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: b().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        52073: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.createRipple = void 0),
                (n.createRipple = function (e, t, a) {
                    let n = null != a ? a : e.currentTarget,
                        r = document.createElement('span'),
                        i = Math.max(n.clientWidth, n.clientHeight),
                        s = i / 2,
                        l = n.getBoundingClientRect(),
                        o = 0 === e.clientX ? Math.round(l.width / 2) : e.clientX - l.left,
                        c = 0 === e.clientY ? Math.round(l.height / 2) : e.clientY - l.top;
                    ((r.style.width = ''.concat(i, 'px')),
                        (r.style.height = ''.concat(i, 'px')),
                        (r.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                        (r.style.top = ''.concat(c - s, 'px')),
                        r.classList.add(t));
                    let d = n.getElementsByClassName(t)[0];
                    (d && d.remove(), n.insertBefore(r, n.firstChild));
                }),
                n.__esModule);
            var r = n.createRipple;
        },
        53073: (e, t, a) => {
            'use strict';
            function n() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => n });
        },
        57297: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var n = a(35412),
                r = a(83602);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: s, ogImage: l, siteName: o, ogType: c, customImage: d } = e,
                    u = l ? { url: (0, n.lU)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        58217: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var n = a(53548),
                r = a(54020),
                i = a(29993),
                s = a(4086),
                l = a(41928),
                o = a(72288),
                c = a(85587),
                d = a(15253);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: a,
                        getStorageKey: u,
                        callback: b,
                        onAfterHandled: m,
                        onBeforeHandle: x,
                        onReject: p,
                        modalBehavior: N,
                        preventDefaultWhenSafe: g,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: v },
                    } = (0, o.g)(),
                    f = (0, n.useRef)(String((0, r.A)())),
                    _ = (0, n.useRef)(!1),
                    y = (0, n.useRef)(!1),
                    W = (0, n.useRef)(0),
                    C = (0, n.useRef)(!0),
                    E = (0, l.N)().get(s.U2),
                    k = (0, i.c)((e) => {
                        (g && (null == e || e.preventDefault()), b && b(e), m && m());
                    });
                return (
                    (0, n.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === f.current && !_.current && (k(), (_.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, k]),
                    (0, n.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, n.useEffect)(
                        () => () => {
                            C.current = !1;
                        },
                        [],
                    ),
                    (0, i.c)(async (e) => {
                        if (!y.current) {
                            y.current = !0;
                            try {
                                if ((null == x || x(e), t)) {
                                    var n, r, i;
                                    let s = t.getDisclaimerEntityRef(a),
                                        l = null != (n = null == u ? void 0 : u(t, s)) ? n : ''.concat(s.entityType, '_').concat(s.entityId),
                                        o = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = E.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(l)) return void k(e);
                                    }
                                    if (o) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(c.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != p ? p : null),
                                            h.setId(f.current),
                                            h.setEntityKey(l),
                                            h.setCurrentEntityRef(s.entityType, s.entityId),
                                            h.setShouldHistoryBack(!!(null == N ? void 0 : N.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (r = null == N ? void 0 : N.closeOnOutside) || r),
                                            h.setShouldCloseModalOnEscape(null == (i = null == N ? void 0 : N.closeOnEscape) || i),
                                            (W.current += 1));
                                        let a = W.current,
                                            n = await t.getModalDisclaimerData();
                                        if (W.current !== a || !1 === C.current) return;
                                        (h.setModalData(null != n ? n : null), (_.current = !1), v.open());
                                        return;
                                    }
                                    (g && (null == e || e.preventDefault()), k(e));
                                    return;
                                }
                                (g && (null == e || e.preventDefault()), k(e));
                            } finally {
                                y.current = !1;
                            }
                        }
                    })
                );
            };
        },
        59844: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var n = a(88800),
                r = a(53548),
                i = a(90334);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, a, s, l, o]);
                return (0, n.jsx)(i.r.Provider, { value: d, children: c });
            };
        },
        60266: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var n = a(88800);
            a(30282);
            var r = a(11006),
                i = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: i().empty });
            };
        },
        62293: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var n = a(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: i } = e;
                return 'ru' === i && t(n.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        63512: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var n = a(53548),
                r = a(94144),
                i = a(67174);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, n.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, i.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        63793: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var n = a(88800),
                r = a(68594);
            let i = (e) => Array.from({ length: e }, (e, t) => (0, n.jsx)(r.W, {}, t));
        },
        68594: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var n = a(88800),
                r = a(65724),
                i = a(2058),
                s = a(19994),
                l = a(51806),
                o = a.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: a } = e,
                    { formatMessage: l } = (0, i.A)();
                return (0, n.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, r.$)(o().root, t),
                    children: [
                        (0, n.jsx)(s.W, { className: o().date, radius: 'm', isActive: a }),
                        (0, n.jsxs)('div', {
                            className: o().meta,
                            children: [
                                (0, n.jsx)(s.W, { className: o().title, radius: 's', isActive: a }),
                                (0, n.jsx)(s.W, { className: o().description, radius: 's', isActive: a }),
                            ],
                        }),
                        (0, n.jsx)(s.W, { className: o().action, radius: 'l', isActive: a }),
                    ],
                });
            };
        },
        70510: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 25299));
        },
        72542: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => i, cy: () => r, pE: () => n });
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
                r = 'yandex',
                i = 'ru-RU';
        },
        73170: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var n,
                r = a(53548),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            l = n(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: n, ...o } = e,
                                c = (0, i.clsx)(l.default.root, { [l.default.focusable]: a }, t);
                            return (0, s.isValidElement)(n)
                                ? (0, s.cloneElement)(n, { ...o, className: (0, i.clsx)(c, n.props.className) })
                                : (0, r.jsx)('span', { className: c, ...o, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function l(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, l), a.exports);
            }
            ((l.d = (e, t) => {
                for (var a in t) l.o(t, a) && !l.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (l.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.SROnly = void 0));
                var e = l(5531);
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
        74250: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var n = a(88800),
                r = a(65724),
                i = a(2058),
                s = a(17392),
                l = a(29504),
                o = a(32414),
                c = a(22989),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: b, withWeekday: m = !0, ...x } = e,
                    { formatDate: p } = (0, i.A)(),
                    N = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            a = {
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
                        if (e) return a[new Date(e).getMonth()];
                    })(t);
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(d().root, a),
                    'aria-label': p(t, (0, o.s)()),
                    ...x,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, r.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: N,
                        }),
                        (0, n.jsx)(l.HL, {
                            variant: 'div',
                            className: (0, r.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: p(t, { day: 'numeric' }),
                        }),
                        m &&
                            (0, n.jsx)(l.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, r.$)(d().weekday, b),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: p(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        76484: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var n = a(2058),
                r = a(29993);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, r.c)((a) => {
                    var n, r;
                    return (null == (n = a.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (r = a.price) ? void 0 : r.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
        },
        77863: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            var n = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        77948: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var n = a(88800),
                r = a(53548),
                i = a(90134);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: b } = e,
                    m = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, l, o, c, d, u],
                    );
                return (0, n.jsx)(i.l.Provider, { value: m, children: b });
            };
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => o });
            var n,
                r = a(53548),
                i = {
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {},
                l = {};
            ((() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var n = (s[t] = { exports: {} });
                    return (i[t](n, n.exports, e), n.exports);
                })(810);
                l.useToggle = (t) => {
                    let [a, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: a, toggle: r, setState: n, toggleTrue: i, toggleFalse: s };
                };
            })(),
                l.__esModule);
            var o = l.useToggle;
        },
        81685: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var n = a(29201);
            let r = (e) => {
                var t, a;
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
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, n.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        83418: (e, t, a) => {
            'use strict';
            function n(e) {
                let { host: t, url: a } = e;
                return a || (t ? 'https://'.concat(t, '/meta/home.png') : '');
            }
            a.d(t, { v: () => n });
        },
        83602: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var n = a(9519),
                r = a(72542),
                i = a(21424),
                s = a(4653);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = a(1220);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var d = a(95330);
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
                    return c((0, i.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, i.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, n;
                    let r = (0, i.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (n = this.changeLanguageHandler) || n.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, i.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, i.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: o, logger: c }) {
                    let d;
                    if (
                        ((0, n._)(this, 'language', void 0),
                        (0, n._)(this, 'storage', void 0),
                        (0, n._)(this, 'dictionary', void 0),
                        (0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'changeLanguageHandler', void 0),
                        (0, n._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
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
                    this.language = (0, i.k)(this.config, d);
                }
            }
        },
        85587: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => n, n: () => r });
            var n = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        86790: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => E });
            var n = a(88800),
                r = a(65724),
                i = a(84961),
                s = a(2058),
                l = a(30282),
                o = a(94144),
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
            let d = (e, t, a) => {
                    switch (e) {
                        case c.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case c.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case c.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case c.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case c.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case c.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case c.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: a, tld: n, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, n, a) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, n, a) },
                    };
                };
            var b = a(62293),
                m = a(99839);
            let x = (e) => e(new Date(), (0, m.m)());
            var p = a(51611),
                N = a(72288),
                g = a(11006),
                h = a.n(g),
                v = a(17392),
                f = a(29504),
                _ = a(91292);
            let y = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, r.$)(h().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, n.jsx)(_.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(_.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                W = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, n.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: h().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, n.jsx)(_.N, { target: '_blank', href: r, className: h().link, 'data-test-id': v.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, r.$)(h().root, h().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, n.jsx)(W, { links: a.links, disclaimer: a.disclaimer }), (0, n.jsx)(y, { data: a.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, N.g)(),
                    { formatDate: r, formatMessage: i } = (0, s.A)(),
                    { language: l } = (0, p.h)(),
                    o = u({ formatMessage: i, language: l, tld: a.tld, year: x(r) });
                return (0, n.jsx)(y, { className: t, data: o });
            });
            let E = (0, i.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: i, location: m, user: g } = (0, N.g)(),
                    { formatDate: v, formatMessage: f } = (0, s.A)(),
                    { isEnabled: _ } = null != (t = (0, o.P)()) ? t : {},
                    { language: y } = (0, p.h)(),
                    W = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: n, language: r, userRegion: i } = e,
                                    s = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, n, r) },
                                    l = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, n, r) },
                                    o = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, n, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, n, r) },
                                    b = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, n, r) },
                                    m = [s, o, u];
                                return (a && 'ru' === i && m.push(l), m.push(b), m);
                            })({ formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s }),
                            disclaimer: (0, b.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: a, language: r, tld: i, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: l.$3,
                        tld: m.tld,
                        language: y,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: x(v),
                    });
                return (0, n.jsx)(C, { className: (0, r.$)({ [h().root_withOffsetForDeeplink]: _ }, a), data: W });
            });
        },
        90399: (e, t, a) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                    s = (0, r.makeMetaParams)(2),
                    l = {
                        ...t,
                        objectsCount: a,
                        objectPosX: n,
                        objectPosY: i,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: s,
                    };
                e.trackEvent('Artist.Concerts.Showed', l);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                        s = (0, r.makeMetaParams)(2),
                        l = {
                            ...t,
                            objectsCount: a,
                            objectPosX: n,
                            objectPosY: i,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: s,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', l);
                }));
            let r = a(92948);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        90615: (e, t, a) => {
            'use strict';
            ((t.__ = function (e, t) {
                let a = (0, n.makeMetaParams)(1),
                    r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                e.trackEvent('ArtistConcerts.Opened', r);
            }),
                (t.pe = function (e, t) {
                    let a = (0, n.makeMetaParams)(1),
                        r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                    e.trackEvent('ArtistConcerts.Closed', r);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = { ...t, objectPos: a, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: r };
                    e.trackEvent('ArtistConcerts.Concert.Showed', i);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = {
                            ...t,
                            objectPos: a,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: r,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', i);
                }));
            let n = a(92948);
        },
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => n });
            let n = 'ru';
        },
        91959: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var n = a(58217);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        94144: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => i });
            var n = a(53548);
            let r = (0, n.createContext)(null),
                i = () => (0, n.useContext)(r);
        },
        95330: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => o });
            var n = a(39499),
                r = a(72542);
            let i = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => i(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => i(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new n.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        95960: (e) => {
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
        97956: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextTagSandbox = 'WebNextTagSandbox'),
                    (e.WebNextUnauthorizedProbe = 'WebNextUnauthorizedProbe'),
                    (e.WebNextForcedLogin = 'WebNextForcedLogin'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextProductWithoutRecommendation = 'WebNextProductWithoutRecommendation'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextBrandedPlayerErids = 'WebNextBrandedPlayerErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextLatestGenreAlbumsDegradation = 'WebNextLatestGenreAlbumsDegradation'),
                    (e.WebNextPlaylistFiltersDegradation = 'WebNextPlaylistFiltersDegradation'),
                    (e.WebNextUgcUploadDegradation = 'WebNextUgcUploadDegradation'),
                    (e.WebNextLibrarySyncLimits = 'WebNextLibrarySyncLimits'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
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
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextTrackNotModified = 'WebNextTrackNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonEnabled = 'WebNextYnisonEnabled'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
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
                    (e.WebNextPaywallDisclaimer = 'WebNextPaywallDisclaimer'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextWaveLikesAndShares = 'WebNextWaveLikesAndShares'),
                    // for PulseSync: BEGIN yellow play button experiment ID for mod settings
                    (e.WebNextPlayerBarYellowButton = 'WebNextPlayerBarYellowButton'),
                    // for PulseSync: END yellow play button experiment ID for mod settings
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextWavePauseState = 'WebNextWavePauseState'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextReplicsLumenUI = 'WebNextReplicsLumenUI'),
                    (e.WebNextReplicsLumenOption = 'WebNextReplicsLumenOption'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion15267 = 'WebNextYaspVersion15267'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextWizard3 = 'WebNextWizard3'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextWaveForTwoOnboarding = 'WebNextWaveForTwoOnboarding'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    (e.WebNextSendVibeFeedbacksWithTracks = 'WebNextSendVibeFeedbacksWithTracks'),
                    (e.WebNextArtistRecommendationsAutoScroll = 'WebNextArtistRecommendationsAutoScroll'),
                    (e.WebNextOtelTechMetrics = 'WebNextOtelTechMetrics'),
                    (e.WebNextMainPlayerTitle = 'WebNextMainPlayerTitle'),
                    (e.WebNextUnstableMusicScreen = 'WebNextUnstableMusicScreen'),
                    (e.WebNextLumenCollectionEntryPoint = 'WebNextLumenCollectionEntryPoint'),
                    (e.WebNextWebView = 'WebNextWebView'),
                    e
                );
            })({});
        },
        99839: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3637, 7617, 8752, 7435, 2344, 6706, 4771, 8832, 6904, 5977, 2058, 2881, 8628, 9693, 8283, 2824, 9202, 4732, 1195, 1598, 6281, 7967, 900, 6387, 1372, 763,
                2670, 7358,
            ],
            () => e((e.s = 70510)),
        ),
            (_N_E = e.O()));
    },
]);
