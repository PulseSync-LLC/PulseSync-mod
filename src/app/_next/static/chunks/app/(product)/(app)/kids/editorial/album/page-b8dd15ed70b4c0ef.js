(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2837, 5940],
    {
        4044: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        4370: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(67174);
            let r = {
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
        9184: (e) => {
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
        9492: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var s = i(88800),
                r = i(65724),
                n = i(53548),
                l = i(2058),
                o = i(88969),
                a = i(96817),
                c = i(52300),
                d = i(29504),
                u = i(59304),
                p = i(4044),
                m = i.n(p);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    p = (0, n.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, n.useEffect)(() => {
                    var e;
                    null == (e = p.current) || e.focus();
                }, []);
                let _ = (0, n.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(a.$, {
                                    ref: p,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: _, closeToast: i });
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
                    let { code: i = 'E_INTERNAL', data: r = {}, ...n } = t,
                        l = e || 'Internal error';
                    (super(l, n), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        16434: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        19503: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
            };
        },
        32596: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => w });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                l = i(53548),
                o = i(2058),
                a = i(88969);
            i(30282);
            var c = i(96817),
                d = i(52300),
                u = i(29504),
                p = i(87999),
                m = i(47149),
                h = i(84423),
                _ = i(89846),
                g = i(64543),
                v = i(63582);
            let y = (0, v.n)({ event: 'Screen.ActionPerformed', kind: 'hook', requiredScopes: ['screen'] }, function () {
                    var e;
                    let t = null == (e = (0, h.s)()) ? void 0 : e.evgenInstance,
                        { hash: i } = (0, _.g)(),
                        { screen: s } = (0, g.j)();
                    return {
                        sendRefreshEvent: (0, l.useCallback)(() => {
                            if (!t || !i || !(null == s ? void 0 : s.pageId)) return;
                            let e = {
                                actionType: p.ActionType.Refresh,
                                userInteractionType: p.UserInteractionType.Tap,
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                hash: i,
                                pageId: s.pageId,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            };
                            Object.values(e).some((e) => void 0 === e) || (0, m.bv)(t, e);
                        }, [t, i, null == s ? void 0 : s.pageId]),
                    };
                }),
                b = (0, v.n)({ event: 'Screen.ErrorRaised', kind: 'hook', requiredScopes: ['screen'] }, function (e) {
                    var t;
                    let i = null == (t = (0, h.s)()) ? void 0 : t.evgenInstance,
                        { hash: s } = (0, _.g)(),
                        { screen: r } = (0, g.j)();
                    (0, l.useEffect)(() => {
                        if (!i || !s || !(null == r ? void 0 : r.pageId)) return;
                        let t = {
                            entityType: p.EntityTypes.Error,
                            entityId: p.EntityTypes.SomethingWrong,
                            errorMessage: e,
                            hash: s,
                            pageId: r.pageId,
                            pageStyle: p.PageStyles.Fullscreen,
                            pagePlacement: p.PagePlacements.Fullscreen,
                            mainObjectType: p.DomainObjectType.NonApplicable,
                            mainObjectId: p.DomainObjectType.NonApplicable,
                        };
                        Object.values(t).some((e) => void 0 === e) || (0, m.z5)(i, t);
                    }, [i, e, s, null == r ? void 0 : r.pageId]);
                });
            var f = i(44230),
                x = i(4370),
                E = i(72288),
                O = i(97956),
                I = i(56248),
                N = i(90688),
                k = i(78940);
            let S = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var C = i(96856),
                A = i.n(C);
            let j = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { slam: l } = (0, E.g)(),
                    { contentRef: o } = (0, f.g)(),
                    d = (0, k.Z)(x.Z.mymusicDownloadsTracks.href);
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(A().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(I.L, {
                                withBackwardFallback: '/',
                                className: (0, r.$)(A().navigation, { [A().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: n,
                            }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(A().content, { [A().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(N._V, { className: A().image, src: S.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, s.jsxs)('div', {
                                    className: A().message,
                                    children: [
                                        (0, s.jsx)(u.DZ, {
                                            className: A().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, s.jsx)(u.HL, {
                                            className: A().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                l.hasDownloadedTracks &&
                                    (0, s.jsx)(c.$, {
                                        className: A().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, s.jsx)(u.HL, {
                                            className: A().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, s.jsx)(a.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = i(9184),
                T = i.n(L);
            let w = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: i = !0, onBack: n } = e,
                    { formatMessage: p } = (0, o.A)(),
                    m = (0, l.useContext)(E.P),
                    h = null == m ? void 0 : m.experiments.checkExperiment(O.z.WebNextUnstableMusicScreen, 'on'),
                    _ = p(h ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                b(_);
                let { sendRefreshEvent: g } = y(),
                    v = (0, l.useCallback)(() => {
                        (g(), (window.location.href = x.Z.main.href));
                    }, [g]),
                    { contentRef: N } = (0, f.g)();
                return h
                    ? (0, s.jsx)(j, { className: t, withBackwardControl: i, onBack: n })
                    : (0, s.jsxs)('div', {
                          className: (0, r.$)(T().root, t),
                          children: [
                              i &&
                                  (0, s.jsx)(I.L, {
                                      withBackwardFallback: '/',
                                      className: (0, r.$)(T().navigation, { [T().navigation_desktop]: !N }),
                                      withForwardControl: !1,
                                      onBackwardClick: n,
                                  }),
                              (0, s.jsxs)('div', {
                                  className: (0, r.$)(T().content, { [T().content_shrink]: !i }),
                                  children: [
                                      (0, s.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                      (0, s.jsx)(u.DZ, { className: (0, r.$)(T().title, T().important), variant: 'h3', size: 'xs', children: _ }),
                                      (0, s.jsxs)(u.HL, {
                                          className: (0, r.$)(T().text, T().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, s.jsx)(c.$, {
                                          onClick: v,
                                          className: T().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, s.jsxs)(u.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        39098: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86014));
        },
        54320: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(88800),
                r = i(53548),
                n = i(29993),
                l = i(9492),
                o = i(29595),
                a = i(74965),
                c = i(74773);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, a.l)(),
                    u = (0, r.useRef)(void 0),
                    p = (0, n.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(l.L, { reloadBlocks: p }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, p, i, e.rejectedPagesCount]);
            };
        },
        60266: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(88800);
            i(30282);
            var r = i(11006),
                n = i.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: n().empty });
            };
        },
        62293: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(97956);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: n } = e;
                return 'ru' === n && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        62837: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => p, Yw: () => s, JU: () => r, DQ: () => _, Ve: () => g });
            var s,
                r,
                n = i(43297),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, n.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, n.EW)(e)), (this.prevValueByListener = new Map()));
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
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var o = i(14965);
            class a extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends o.t {
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
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class p {
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
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
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
                            let t = e instanceof Error ? e : new a(e);
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
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
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
            })(r || (r = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, r.E],
                    [s.AGE_18_ICON, r.AGE_18],
                    [s.AGE_16_ICON, r.AGE_16],
                    [s.AGE_12_ICON, r.AGE_12],
                    [s.EXCLAMATION_ICON, r.EXCLAMATION],
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                _ = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => u(e, t).length > 0;
        },
        70621: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var s = i(53548),
                r = i(63582),
                n = i(245),
                l = i(22681),
                o = i(56374);
            let a = (0, r.n)({ event: 'LandingBlock.ActionPerformed', kind: 'hook', requiredScopes: ['screen', 'block', 'object'] }, () => {
                let e = (0, n.N)(),
                    t = (0, l.w)(),
                    i = (0, s.useMemo)(() => (t ? e.createBlockReporter(t.snapshot) : null), [e, t]);
                return (0, o.c)((e) => {
                    t?.object && i && i.actionPerformed({ ...e, viewUuid: (t.object.activeViewSession ?? t.object.viewSession).start() });
                });
            });
        },
        76903: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => u });
            var s = i(88800),
                r = i(53548),
                n = i(53534),
                l = i(63582),
                o = i(245);
            let a = new WeakMap();
            class c {
                screenViewUuid;
                queue;
                consumers = new Set();
                loadedTabs = new Set();
                opened = !1;
                pendingOpen = !1;
                closed = !1;
                pendingClose = null;
                constructor(e, t) {
                    this.screenViewUuid = e;
                    let i =
                        a.get(t) ??
                        (() => {
                            let e = [],
                                t = !1,
                                i = () => {
                                    for (; e.length > 0;) e.shift()?.();
                                },
                                s = () => {
                                    t ||
                                        ((t = !0),
                                        queueMicrotask(() => {
                                            try {
                                                i();
                                            } finally {
                                                ((t = !1), e.length > 0 && s());
                                            }
                                        }));
                                };
                            return {
                                open: (e) => {
                                    (i(), e());
                                },
                                defer: (t) => {
                                    (e.push(t), s());
                                },
                            };
                        })();
                    (a.set(t, i), (this.queue = i));
                }
                open(e, t) {
                    ((this.pendingClose = null),
                        this.opened ||
                            this.pendingOpen ||
                            ((this.pendingOpen = !0),
                            this.queue.open(() => {
                                try {
                                    (t(), (this.opened = !0));
                                } finally {
                                    this.pendingOpen = !1;
                                }
                            })),
                        this.consumers.add(e));
                }
                close(e, t) {
                    (this.consumers.delete(e), this.closed || this.pendingClose?.scheduled || ((this.pendingClose = { send: t, scheduled: !1 }), this.scheduleClose()));
                }
                release(e) {
                    (this.consumers.delete(e), this.scheduleClose());
                }
                loadTab(e, t) {
                    this.loadedTabs.has(e) || (t(), this.loadedTabs.add(e));
                }
                scheduleClose() {
                    let e = this.pendingClose;
                    !e ||
                        e.scheduled ||
                        this.consumers.size > 0 ||
                        ((e.scheduled = !0),
                        this.queue.defer(() => {
                            this.pendingClose !== e || this.consumers.size > 0 || ((this.pendingClose = null), e.send(), (this.closed = !0));
                        }));
                }
            }
            var d = i(87999);
            let u = (0, l.B)(
                { kind: 'provider', requiredProps: ['pageId'], pendingProps: ['mainObjectType', 'mainObjectId'], scope: 'screen' },
                ({ children: e, ...t }) => {
                    let i = (0, o.N)(),
                        l = ((e) =>
                            (!Object.hasOwn(e, 'mainObjectType') || void 0 !== e.mainObjectType) &&
                            ('string' == typeof e.mainObjectId ||
                                (!Object.hasOwn(e, 'mainObjectId') && (!Object.hasOwn(e, 'mainObjectType') || e.mainObjectType === d.DomainObjectType.NonApplicable))))(
                            t,
                        ),
                        [a, u] = (0, r.useState)(() => {
                            let e = new c(i.createScreenSession().screenViewUuid, i);
                            return { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, e) : null, session: e };
                        });
                    if (
                        a.client !== i ||
                        a.input.pageId !== t.pageId ||
                        a.input.skeletonId !== t.skeletonId ||
                        a.input.mainObjectType !== t.mainObjectType ||
                        a.input.mainObjectId !== t.mainObjectId
                    ) {
                        let r = new c(i.createScreenSession().screenViewUuid, i),
                            o = { client: i, input: t, isReady: l, scope: l ? i.createScreenScope(t, r) : null, session: r };
                        return (u(o), (0, s.jsx)(n.k, { value: o, children: e }));
                    }
                    if (
                        a.isReady !== l ||
                        a.input.displayReasonId !== t.displayReasonId ||
                        a.input.pageIdForFrom !== t.pageIdForFrom ||
                        a.input.pagePlacement !== t.pagePlacement ||
                        a.input.pageStyle !== t.pageStyle
                    ) {
                        let r = { ...a, input: t, isReady: l, scope: l ? i.createScreenScope(t, a.session) : null };
                        return (u(r), (0, s.jsx)(n.k, { value: r, children: e }));
                    }
                    return (0, s.jsx)(n.k, { value: a, children: e });
                },
            );
        },
        79418: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(88800),
                r = i(65724),
                n = i(61013),
                l = i(53548);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: r, ...n } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': l, style: { ...t }, ref: i, ...n });
                },
                a = (0, l.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var c = i(16434),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: n, withHeader: l, withForceScroll: o, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: n, [d().scroller_withHeader]: l, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                p = (0, l.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(55482),
                h = i(75151);
            let _ = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: n = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [p, _] = (0, l.useState)(null),
                        g = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), a.length > 0 && _(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, n),
                            [n, r, t, i, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && p && g(p);
                    }, a);
                    let v = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, s.jsx)(h.sN, { ref: d, rangeChanged: g, totalCount: o, endReached: v, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: b,
                            debounceDurationInMs: f,
                            initialItemCount: x,
                            minInitialItemCount: E = 20,
                            handleRef: O,
                            alwaysShowScrollbar: I = !1,
                            testId: N,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...C
                        } = e,
                        [A, j] = (0, l.useState)(!1),
                        L = (0, l.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        T = (0, l.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: p,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: p,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, b, k]),
                        w = x ? Math.min(x, E) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: A || I, [d().root_notScrolling]: !A && !I }, t),
                        'data-test-id': N,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(_, {
                                overscan: g,
                                components: T,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: S,
                                ...C,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        86014: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => T }));
            var s = i(88800),
                r = i(58390),
                n = i(65724),
                l = i(84961),
                o = i(53548),
                a = i(2058),
                c = i(87999),
                d = i(76903),
                u = i(17392),
                p = i(29993),
                m = i(79070),
                h = i(29504),
                _ = i(32596),
                g = i(10079),
                v = i(69630),
                y = i(98427),
                b = i(46422),
                f = i(44230),
                x = i(37670),
                E = i(72288),
                O = i(54320),
                I = i(86790),
                N = i(60266),
                k = i(93317),
                S = i(37770),
                C = i(79418),
                A = i(19503),
                j = i.n(A);
            let L = (0, l.PA)((e) => {
                    var t, i, l, A;
                    let { id: L } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: T },
                            settings: { isMobile: w },
                        } = (0, E.g)(),
                        P = (0, b.W)(),
                        { contentScrollRef: R, setContentScrollRef: M } = (0, f.g)(),
                        { formatMessage: D } = (0, a.A)(),
                        F = (0, p.c)((e) => {
                            T.getAlbums({ page: e, pageSize: 20 });
                        });
                    (T.isNotFound && (0, r.notFound)(),
                        (0, o.useEffect)(
                            () => () => {
                                T.reset();
                            },
                            [T],
                        ));
                    let B = (0, m.L)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(I.w, { className: j().footer }) }) }));
                    if (
                        ((0, x.J)(T.isResolved),
                        (0, O.X)(T.pagesLoader, F),
                        T.isNeededToLoad && (0, o.use)(T.getData({ id: L, page: 0, pageSize: 20 })),
                        T.isSomethingWrong)
                    )
                        return (0, s.jsx)(_.SomethingWentWrong, {});
                    let H = T.isLoading ? 20 : null != (l = null == (i = T.pagesLoader) || null == (t = i.pager) ? void 0 : t.total) ? l : 0;
                    return (0, s.jsx)(d.a, {
                        pageId: c.AppScreen.KidsEditorialAlbums,
                        pageIdForFrom: y.b.KIDS_EDITORIAL_ALBUMS,
                        children: (0, s.jsx)(v.h, {
                            scrollElement: R,
                            outerTitle: T.title,
                            children: (0, s.jsxs)('div', {
                                className: j().root,
                                'data-test-id': u.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, s.jsx)(k.Y, {
                                        variant: k.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: P.canBack,
                                        children: (0, s.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: T.title }),
                                    }),
                                    (0, s.jsx)(C.$, {
                                        context: { listAriaLabel: D({ id: 'mixes.albums-list' }, { genreName: T.title || '' }) },
                                        className: (0, n.$)(j().scrollContainer, j().important),
                                        customComponents: B,
                                        itemContentCallback: (e) => {
                                            let t = T.albums[e],
                                                i = D({ id: 'loading-messages.entity-is-loading' }, { entityName: D({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, s.jsx)(g.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, s.jsx)(S.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: H,
                                        onGetDataByPage: F,
                                        pageSize: 20,
                                        totalRequests: null != (A = T.pagesLoader.requestsCount) ? A : 0,
                                        listClassName: j().content,
                                        itemClassName: j().item,
                                        handleRef: M,
                                        isMobileLayout: w,
                                        useWindowScroll: w,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                T = () => {
                    let e = (0, r.useSearchParams)().get('id');
                    return (e || (0, r.notFound)(), (0, s.jsx)(L, { id: e }));
                };
        },
        86790: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var s = i(88800),
                r = i(65724),
                n = i(84961),
                l = i(2058),
                o = i(30282),
                a = i(94144),
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
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: c.YANDEX, title: t({ id: 'footer.yandex-music' }), url: d(c.YANDEX, s, i) },
                        yandexProjects: { id: c.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: d(c.YANDEX_PROJECTS, s, i) },
                    };
                };
            var p = i(62293),
                m = i(99839);
            let h = (e) => e(new Date(), (0, m.m)());
            var _ = i(51611),
                g = i(72288),
                v = i(11006),
                y = i.n(v),
                b = i(17392),
                f = i(29504),
                x = i(91292);
            let E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(y().copyrights, t),
                        'data-test-id': b.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(x.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': b.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(x.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': b.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: y().list,
                                'data-test-id': b.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, s.jsx)(x.N, { target: '_blank', href: r, className: y().link, 'data-test-id': b.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': b.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                I = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(y().root, y().important, t),
                        'data-test-id': b.S7.FOOTER,
                        children: [(0, s.jsx)(O, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(E, { data: i.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, g.g)(),
                    { formatDate: r, formatMessage: n } = (0, l.A)(),
                    { language: o } = (0, _.h)(),
                    a = u({ formatMessage: n, language: o, tld: i.tld, year: h(r) });
                return (0, s.jsx)(E, { className: t, data: a });
            });
            let N = (0, n.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: n, location: m, user: v } = (0, g.g)(),
                    { formatDate: b, formatMessage: f } = (0, l.A)(),
                    { isEnabled: x } = null != (t = (0, a.P)()) ? t : {},
                    { language: E } = (0, _.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: l, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: n } = e,
                                    l = { id: c.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: d(c.COPYRIGHT_HOLDER, s, r) },
                                    o = { id: c.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: d(c.PRIVACY_POLICY, s, r) },
                                    a = { id: c.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: d(c.AGREEMENT, s, r) },
                                    u = { id: c.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: d(c.RECOMMENDATION_RULES, s, r) },
                                    p = { id: c.HELP, title: t({ id: 'footer.links-help' }), url: d(c.HELP, s, r) },
                                    m = [l, a, u];
                                return (i && 'ru' === n && m.push(o), m.push(p), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: n, userRegion: l }),
                            disclaimer: (0, p.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: n, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: o.$3,
                        tld: m.tld,
                        language: E,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: h(b),
                    });
                return (0, s.jsx)(I, { className: (0, r.$)({ [y().root_withOffsetForDeeplink]: x }, i), data: O });
            });
        },
        94144: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => n });
            var s = i(53548);
            let r = (0, s.createContext)(null),
                n = () => (0, s.useContext)(r);
        },
        96856: (e) => {
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
                4700, 7908, 3248, 5038, 7065, 1147, 4555, 1191, 7072, 8655, 2691, 4046, 6706, 4771, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 8283, 1800, 5151,
                4732, 9087, 3979, 1928, 9091, 9124, 900, 9934, 2470, 7670, 4441, 9337, 2088, 79, 763, 2670, 7358,
            ],
            () => e((e.s = 39098)),
        ),
            (_N_E = e.O()));
    },
]);
