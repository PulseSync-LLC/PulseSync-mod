(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8490],
    {
        3259: (e) => {
            e.exports = {
                root: 'SlideCard_root__RSnvj',
                background: 'SlideCard_background__dftlE',
                logoContainer: 'SlideCard_logoContainer__1XaMN',
                logo: 'SlideCard_logo__ocv3o',
                buttonsContainer: 'SlideCard_buttonsContainer__ynOyN',
                wideContent: 'SlideCard_wideContent__TSSJ9',
                playAnimation: 'SlideCard_playAnimation__rFZZ3',
                fade: 'SlideCard_fade__2HpC6',
                content: 'SlideCard_content__7Y6aU',
                content_align_top: 'SlideCard_content_align_top__fDfyz',
                content_align_center: 'SlideCard_content_align_center__QFnxv',
                content_align_bottom: 'SlideCard_content_align_bottom__nsslT',
                button: 'SlideCard_button__EYX_G',
            };
        },
        4300: (e, t, a) => {
            'use strict';
            a.d(t, { WithSlidesWebView: () => _ });
            var i = a(88800),
                s = a(84961),
                l = a(35412),
                r = a(57127),
                n = a(4086),
                o = a(41928),
                d = a(72288),
                c = a(97956),
                u = a(72131);
            let _ = (0, s.PA)((e) => {
                let { children: t, slidesConsumer: a, entityId: s } = e,
                    { experiments: _ } = (0, d.g)(),
                    m = (0, o.N)().get(n.V4),
                    v = (0, u._)(m.webHost);
                if (_.checkExperiment(c.z.WebNextSlidesWebview, 'on') && _.checkExperiment(c.z.WebNextWebView, 'on')) {
                    let e = ''.concat('/apps/slides', '/').concat(a),
                        { href: t } = (0, l.no)(void 0 === s ? e : ''.concat(e, '/:entityId'), {
                            params: void 0 === s ? void 0 : { entityId: s },
                            options: { host: 'https://'.concat(v) },
                        });
                    return (0, i.jsx)(r.WebViewPage, { url: t });
                }
                return t;
            });
        },
        4795: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(72288),
                s = a(97956);
            let l = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: l },
                    experiments: r,
                } = (0, i.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = r.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5295: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => s });
            var i = a(54683);
            let s = (e, t, a) => {
                let s = null != t ? t : i.wT,
                    l = null != a ? a : i.by,
                    r = (0, i.de)((0, i.aq)(e), s, l),
                    n = Math.round(255 * r[0]),
                    o = Math.round(255 * r[1]),
                    d = Math.round(255 * r[2]);
                return 'rgb('.concat(n, ', ').concat(o, ', ').concat(d, ')');
            };
        },
        5407: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => v });
            var i = a(88800),
                s = a(29993),
                l = a(88969),
                r = a(29504),
                n = a(59304),
                o = a(51028),
                d = a.n(o);
            let c = () =>
                (0, i.jsx)(n.$, {
                    message: (0, i.jsx)(r.HL, { variant: 'div', size: 'm', className: d().notification, children: (0, i.jsx)(l.A, { id: 'ads.continue-ad' }) }),
                    coverRadius: 's',
                });
            var u = a(29595),
                _ = a(74965),
                m = a(72288);
            let v = () => {
                let { notify: e } = (0, _.l)(),
                    { advert: t } = (0, m.g)();
                return (0, s.c)(() => (t.isAdvertShown && e((0, i.jsx)(c, {}), { containerId: u.u.INFO }), !!t.isAdvertShown));
            };
        },
        6158: (e) => {
            e.exports = {
                root: 'TextContent_root__A4Qmc',
                subtitle: 'TextContent_subtitle__Xe_FH',
                text: 'TextContent_text__xsfVD',
                disclaimer: 'TextContent_disclaimer__LIrZ_',
            };
        },
        9326: (e) => {
            e.exports = {
                root: 'ThenNowComparison_root__sAUJF',
                row: 'ThenNowComparison_row__1osE7',
                textPrimary: 'ThenNowComparison_textPrimary__mXrAG',
                textSecondary: 'ThenNowComparison_textSecondary__O5HTV',
                cover: 'ThenNowComparison_cover___UkLn',
                itemLabel: 'ThenNowComparison_itemLabel__L_vTN',
                itemMeta: 'ThenNowComparison_itemMeta__TqbEJ',
                header: 'ThenNowComparison_header__tWhL1',
            };
        },
        9618: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(53548),
                s = a(72288);
            let l = () => {
                var e;
                let {
                        modals: { buySubscriptionModal: t },
                        user: a,
                        settings: l,
                        familyInvite: r,
                        freeAccess: n,
                    } = (0, s.g)(),
                    o = null == (e = l.browserInfo) ? void 0 : e.isTouch,
                    d = r.modal.isOpened;
                return (0, i.useMemo)(
                    () => ({
                        showBuySubscriptionModal: t.open,
                        hideBuySubscriptionModal: t.close,
                        shouldShowBuySubscriptionModal: (n.isFreeWebUser || !a.isAuthorized) && !!o && !d,
                    }),
                    [t.close, t.open, n.isFreeWebUser, o, a.isAuthorized, d],
                );
            };
        },
        13876: (e) => {
            e.exports = { root: 'Carousel_root__2FSoC', swiper: 'Carousel_swiper__ivHi0', slide: 'Carousel_slide__wgnHc', wrapper: 'Carousel_wrapper__ruBr5' };
        },
        14828: (e) => {
            e.exports = { root: 'StatsContent_root__yJVzS', text: 'StatsContent_text__l2xi_' };
        },
        16226: (e) => {
            e.exports = {
                root: 'LineupContent_root__1ryY_',
                carousel: 'LineupContent_carousel__0n_iU',
                slide: 'LineupContent_slide__WMsD2',
                slideActive: 'LineupContent_slideActive__GGmyR',
                meta: 'LineupContent_meta__ad63g',
                description: 'LineupContent_description__Gyg86',
            };
        },
        22846: (e) => {
            e.exports = {
                root: 'SingleEntityContent_root__N2vvp',
                description: 'SingleEntityContent_description__3pg2A',
                smallRoundCover: 'SingleEntityContent_smallRoundCover__jicWf',
                smallRoundCover_withShadow: 'SingleEntityContent_smallRoundCover_withShadow__cjRgd',
                cover: 'SingleEntityContent_cover__zeDqH',
                cover_withShadow: 'SingleEntityContent_cover_withShadow__tMIE1',
                cover_withSmallRoundCoverOnCover: 'SingleEntityContent_cover_withSmallRoundCoverOnCover__8kG3v',
                cover_small: 'SingleEntityContent_cover_small___jnS4',
                meta: 'SingleEntityContent_meta__XxJqA',
                meta_withCover: 'SingleEntityContent_meta_withCover__Bp0Tx',
                image: 'SingleEntityContent_image__P6nK2',
                trailer: 'SingleEntityContent_trailer__uYOk0',
                subtitle: 'SingleEntityContent_subtitle__KuJyA',
            };
        },
        24546: (e) => {
            e.exports = { root: 'MaskedImageWithBackground_root__jLo5w', background: 'MaskedImageWithBackground_background__9PdlN' };
        },
        25921: (e) => {
            e.exports = {
                buttonsContainer: 'SlideButtons_buttonsContainer__82Z3p',
                contractButton: 'SlideButtons_contractButton__46CMy',
                editButton: 'SlideButtons_editButton__r2XNo',
                iconButton: 'SlideButtons_iconButton__oC0it',
                arrowLeftButton: 'SlideButtons_arrowLeftButton__LL3LY',
                arrowRightButton: 'SlideButtons_arrowRightButton__405wl',
                mainButtonContainer: 'SlideButtons_mainButtonContainer__4htPC',
            };
        },
        26128: (e) => {
            e.exports = { root: 'CommonButton_root__thXs_' };
        },
        28523: (e) => {
            e.exports = {
                root: 'ChartItem_root__nAl8B',
                animation: 'ChartItem_animation__P8XVq',
                cover: 'ChartItem_cover__jybex',
                order: 'ChartItem_order__rTmAw',
                image: 'ChartItem_image__enYFm',
                meta: 'ChartItem_meta__apT_y',
                text: 'ChartItem_text__qRsWe',
                textVariant: 'ChartItem_textVariant__0NuuM',
                subTitle: 'ChartItem_subTitle__J2Znt',
                stat: 'ChartItem_stat__ofy5i',
                statValueContainer: 'ChartItem_statValueContainer__pn9Ck',
                statValue: 'ChartItem_statValue__fu5js',
            };
        },
        32041: (e) => {
            e.exports = {
                root: 'Background_root__s7ccu',
                media_withPersonalColor: 'Background_media_withPersonalColor__KuaB0',
                firstFrame: 'Background_firstFrame__c5Gw0',
                lastFrame: 'Background_lastFrame__sfpL7',
                media: 'Background_media__8DaeZ',
                shareBackground: 'Background_shareBackground__vmgH2',
                hidden: 'Background_hidden__7fdP5',
                backgroundFadeIn: 'Background_backgroundFadeIn__6yd3z',
                'background-fade-in': 'Background_background-fade-in__AJNN6',
            };
        },
        35199: (e) => {
            e.exports = { root: 'LineupContentItem_root__h3Olw', background: 'LineupContentItem_background__w1inW', content: 'LineupContentItem_content__fvXBe' };
        },
        35948: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => i, y: () => s });
            let i = '(prefers-reduced-motion: reduce)',
                s = () => window.matchMedia(i).matches;
        },
        40251: (e) => {
            e.exports = {
                header: 'LineupFestivalImageItem_header__tQ4ho',
                metaLabel: 'LineupFestivalImageItem_metaLabel__Rvm_1',
                logo: 'LineupFestivalImageItem_logo__NQaIS',
                festivalImage: 'LineupFestivalImageItem_festivalImage__N73jB',
                festivalTitle: 'LineupFestivalImageItem_festivalTitle__CT_Un',
                artists: 'LineupFestivalImageItem_artists__0Rh7A',
                text: 'LineupFestivalImageItem_text__6_ilm',
            };
        },
        40849: (e) => {
            e.exports = { root: 'LineupArtistsWrapper_root__RAY_j' };
        },
        42674: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        42737: (e) => {
            e.exports = { root: 'SliderControls_root__v_ofj', control: 'SliderControls_control__E3joM', top: 'SliderControls_top__HN5gZ' };
        },
        43534: (e) => {
            e.exports = {
                root: 'ArtistsContent_root__Jpd8M',
                covers: 'ArtistsContent_covers__OeO2T',
                cover: 'ArtistsContent_cover__rzlO2',
                image: 'ArtistsContent_image__okuHk',
            };
        },
        44989: (e) => {
            e.exports = {
                header: 'LineupFestivalItem_header__VpBfn',
                headerLogo: 'LineupFestivalItem_headerLogo__tVwIZ',
                metaLabel: 'LineupFestivalItem_metaLabel__hc66P',
                festivalImage: 'LineupFestivalItem_festivalImage__JGaxU',
                artist: 'LineupFestivalItem_artist__ZTsFm',
                artists: 'LineupFestivalItem_artists__YKO8W',
                artistList: 'LineupFestivalItem_artistList__FpJ5r',
            };
        },
        45507: (e) => {
            e.exports = { root: 'SlideLogo_root__7H7nw' };
        },
        46476: (e) => {
            e.exports = {
                root: 'ChartArtistContent_root__OPxPJ',
                cover: 'ChartArtistContent_cover__flhXs',
                image: 'ChartArtistContent_image__D2isT',
                title: 'ChartArtistContent_title__a_d_4',
            };
        },
        46590: (e) => {
            e.exports = { root: 'WebViewPage_root__vl9f4' };
        },
        47786: (e) => {
            e.exports = { root: 'ChartContent_root__MFONP', text: 'ChartContent_text__cB18f' };
        },
        51028: (e) => {
            e.exports = { notification: 'NotificationAd_notification__DNmdu' };
        },
        51888: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => s, d: () => i });
            let i = (e) => String(e).split(':'),
                s = (e, t) => (t ? [e, t].join(':') : e);
        },
        55988: (e) => {
            e.exports = { root: 'Slider_root__T7EOX', root_visible: 'Slider_root_visible__b3Kqx', fade: 'Slider_fade__V7FGV', container: 'Slider_container__tZ0VH' };
        },
        57127: (e, t, a) => {
            'use strict';
            a.d(t, { WebViewPage: () => ex });
            var i = a(88800),
                s = a(84961),
                l = a(53548),
                r = a(58390),
                n = a(79070),
                o = a(46422),
                d = a(4370),
                c = a(78940),
                u = a(72288),
                _ = a(97956),
                m = a(34303),
                v = a(35412);
            let h = new Set([v.cy.HTTPS]);
            var p = a(17392),
                x = a(32596),
                g = a(87396),
                C = a(2058),
                T = a(29993),
                I = a(39499),
                A = a(63449),
                S = a(57448),
                N = a(79390),
                L = a(78309),
                f = a(49950),
                E = a(96706);
            let b = async (e) => {
                if ((e.isResolved || e.isLoading || (await e.getData()), e.isLoading && (await (0, E.z7)(() => !e.isLoading)), !e.isResolved))
                    throw new I.t('Failed to load the collection');
            };
            var y = a(16482),
                w = a(4765);
            let j = (e, t) => {
                let { entityType: a, entityId: i } = t;
                switch ({ [y.A.TRACK]: e.tracks, [y.A.ARTIST]: e.artists, [y.A.ALBUM]: e.albums, [y.A.CLIP]: e.clips, [y.A.PLAYLIST]: e.playlists }[a].items.get(i)) {
                    case w.O.LIKED:
                        return { state: L.U.LIKE };
                    case w.O.DISLIKED:
                        return { state: L.U.DISLIKE };
                    default:
                        return { state: L.U.NEUTRAL };
                }
            };
            var R = a(67960),
                k = a(51888);
            let O = async (e, t) => {
                    let { entityType: a, entityId: i } = e;
                    if (a === y.A.PLAYLIST) {
                        let e = /^\d+:\d+$/.test(i) ? (0, R.I)(i) : await t.getPlaylist({ playlistUuid: i, resumeStream: !1, richTracks: !1 }),
                            a = Number(e.uid);
                        return { entityId: ''.concat(a, ':').concat(e.kind), ownerId: a, kindId: e.kind };
                    }
                    if (a === y.A.TRACK && /^\d+:\d+$/.test(i)) {
                        let [e, t] = (0, k.d)(i);
                        if (e && t) return { entityId: e, albumId: Number(t) };
                    }
                    return { entityId: i };
                },
                P = async (e, t, a) => {
                    switch (t) {
                        case y.A.TRACK:
                            return e.toggleTrackLike(a);
                        case y.A.ARTIST:
                            return e.toggleArtistLike(a);
                        case y.A.ALBUM:
                            return e.toggleAlbumLike(a);
                        case y.A.CLIP:
                            return e.toggleClipLike(a);
                        case y.A.PLAYLIST:
                            return e.togglePlaylistLike(a);
                    }
                };
            var B = a(35540),
                D = a(15947),
                z = a(97261),
                M = a(67174),
                U = a(50267),
                V = a(5407),
                F = a(9618),
                H = a(4795),
                G = a(9630),
                W = a(44349),
                Z = a(18593),
                $ = a(895),
                q = a(20585);
            let X = (e) => {
                switch (e) {
                    case U.Y.MAIN:
                        return;
                    case U.Y.TRAILER:
                        return q.V.TRAILER;
                    default:
                        throw new I.t('Unsupported WebApp playback');
                }
            };
            var K = a(26627),
                Y = a(4086),
                J = a(41928),
                Q = a(65523);
            a(30282);
            var ee = a(97526),
                et = a(69704),
                ea = a(74773),
                ei = a(9519),
                es = a(54020),
                el = a(69991),
                er = a(4762),
                en = a(30683);
            let eo = [el.Z, ...$.vs, ...f.cD, ...B.Y, ...K.Nf];
            var ed = a(8438),
                ec = a(49124);
            class eu {
                async start() {
                    try {
                        let e = this.sdk.start();
                        if ((this.disposed || (this.options.iframe.src = this.url.href), await e, this.disposed)) return;
                        (this.hostDocument.addEventListener('visibilitychange', this.sendVisibility), this.sendVisibility());
                    } catch (e) {
                        throw (this.dispose(), e);
                    }
                }
                dispose() {
                    this.disposed || ((this.disposed = !0), this.hostDocument.removeEventListener('visibilitychange', this.sendVisibility), this.sdk.dispose());
                }
                getContext() {
                    var e, t;
                    return {
                        locale: this.options.locale,
                        theme: null != (e = this.options.theme) ? e : 'system',
                        client: { name: (0, ed.y)(), version: null != (t = ec.env.APP_VERSION) ? t : '' },
                        safeArea: { top: 32, right: 0, bottom: 0, left: 0 },
                        appSessionId: (0, es.A)(),
                    };
                }
                close() {
                    (this.dispose(), this.options.onClose());
                }
                sendVisibility() {
                    try {
                        this.sdk.command(K.OW.name, { visible: !this.hostDocument.hidden });
                    } catch (t) {
                        var e;
                        null == (e = this.options.logger) || e.error('Failed to send WebApp visibility', { error: t });
                    }
                }
                constructor(e) {
                    ((0, ei._)(this, 'options', void 0),
                        (0, ei._)(this, 'sdk', void 0),
                        (0, ei._)(this, 'hostDocument', void 0),
                        (0, ei._)(this, 'url', void 0),
                        (0, ei._)(this, 'disposed', void 0),
                        (this.options = e),
                        (this.disposed = !1));
                    let { iframe: t, handlers: a, logger: i } = e;
                    ((this.hostDocument = t.ownerDocument), (this.close = this.close.bind(this)), (this.sendVisibility = this.sendVisibility.bind(this)));
                    try {
                        let s = t.contentWindow;
                        if (!s) throw new I.t('WebApp iframe is not mounted');
                        ((this.url = new URL(e.url)),
                            (this.sdk = (0, er.D)({
                                transport: (0, en._)({ targetWindow: s, expectedOrigin: this.url.origin }),
                                actions: eo,
                                context: this.getContext(),
                                logger: i,
                                handlers: { ...a, [el.Z.name]: this.close },
                            })));
                    } catch (e) {
                        throw (null == i || i.error('Failed to prepare WebApp session', { error: e }), e);
                    }
                }
            }
            var e_ = a(63688),
                em = a.n(e_);
            let ev = (0, s.PA)((e) => {
                let { documentUrl: t, onClose: a } = e,
                    s = (0, l.useRef)(null),
                    { isPending: n, isRejected: o } = ((e) => {
                        let { frameRef: t, documentUrl: a, onClose: i } = e,
                            [s, n] = (0, l.useState)(ea.G.PENDING),
                            o = (() => {
                                let e = ((e) => {
                                        let t = (0, G.e)(),
                                            a = (0, T.c)(() => {
                                                if (!t) throw new I.t('Player is not ready');
                                                return t;
                                            }),
                                            { paywall: i } = (0, u.g)(),
                                            s = (0, V.P)(),
                                            r = (0, H.N)(),
                                            { shouldShowBuySubscriptionModal: n, showBuySubscriptionModal: o } = (0, F.q)(),
                                            d = (0, T.c)((e) => {
                                                if (s()) throw new I.t('Playback is unavailable during an advertisement');
                                                if (e !== U.Y.TRAILER) {
                                                    if (n) throw (o(), new I.t('A subscription is required for playback'));
                                                    if (r) throw (i.modal.open(), new I.t('A subscription is required for playback'));
                                                }
                                            });
                                        return (0, l.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { getSonata: t, checkPlaybackAccess: a, from: i } = e;
                                                    return {
                                                        ...((e) => {
                                                            let t,
                                                                a = new Map(),
                                                                i = Promise.resolve(),
                                                                s = async (i, s) => {
                                                                    var l;
                                                                    let r = e();
                                                                    r !== t && (a.clear(), (t = r));
                                                                    let n = X(i),
                                                                        o = r.getState(n).playerState.exponentVolume.value;
                                                                    if ((s && 0 === o) || (!s && 0 !== o)) return;
                                                                    s && a.set(i, o);
                                                                    let d = r.getState(q.V.TRAILER).playerState.exponentVolume.value,
                                                                        c = s ? 0 : null != (l = a.get(i)) ? l : 1;
                                                                    (await r.setExponentVolume(c, n), i === U.Y.MAIN && (await r.setExponentVolume(d, q.V.TRAILER)));
                                                                },
                                                                l = (e, t) => {
                                                                    let a = () => s(e, t),
                                                                        l = i.then(a, a);
                                                                    return ((i = l), l);
                                                                };
                                                            return {
                                                                [$.ho.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return l(t, !0);
                                                                },
                                                                [$.oq.name]: (e) => {
                                                                    let { playback: t } = e;
                                                                    return l(t, !1);
                                                                },
                                                            };
                                                        })(t),
                                                        [$.q5.name]: async (e) => {
                                                            let { playback: s, queue: l } = e,
                                                                r = t();
                                                            a(s);
                                                            let n = l[0];
                                                            if (!n) throw new I.t('WebApp playback queue must not be empty');
                                                            let o = X(s),
                                                                d = s === U.Y.TRAILER ? W.R.SmartPreview : W.R.Unknown;
                                                            (await r.setContext(
                                                                {
                                                                    contextData: { type: Z.K.Various, meta: n, from: i },
                                                                    entitiesData: l.map((e) => ({ type: d, meta: e })),
                                                                    queueParams: { index: 0 },
                                                                    loadContextMeta: !1,
                                                                },
                                                                o,
                                                            ),
                                                                await r.play(o));
                                                        },
                                                        [$.gq.name]: async (e) => {
                                                            let { playback: a } = e;
                                                            await t().pause(X(a));
                                                        },
                                                    };
                                                })({ getSonata: a, checkPlaybackAccess: d, from: e }),
                                            [a, d, e],
                                        );
                                    })('webview'),
                                    t = (() => {
                                        let { library: e, user: t, paywall: a } = (0, u.g)(),
                                            { playlistResource: i } = (0, S.f)(),
                                            s = (0, A.n)(),
                                            r = (0, T.c)(() => {
                                                let e = t.account.data.uid;
                                                if (!t.isAuthorized || void 0 === e) throw new I.t('Authorization is required for collection actions');
                                                return e;
                                            }),
                                            n = (0, T.c)(() => {
                                                if (s) throw (a.modal.open(), new I.t('A subscription is required to access the collection'));
                                            });
                                        return (0, l.useMemo)(
                                            () =>
                                                ((e) => {
                                                    let { library: t, playlistResource: a, getUserId: i, checkCollectionAccess: s } = e,
                                                        l = Promise.resolve(),
                                                        r = async (e, l) => {
                                                            s();
                                                            let r = i();
                                                            await b(t);
                                                            let n = await O(e, a),
                                                                o = { entityType: e.entityType, entityId: String(n.entityId) },
                                                                d = j(t, o);
                                                            if (void 0 === l || (d.state === L.U.LIKE) === l) return d;
                                                            if ((await P(t, e.entityType, { ...n, userId: r })) !== N.f.OK)
                                                                throw new I.t('Failed to update the collection');
                                                            return (await b(t), j(t, o));
                                                        },
                                                        n = (e, t) => {
                                                            let a = () => r(e, t),
                                                                i = l.then(a, a);
                                                            return ((l = i), i);
                                                        };
                                                    return { [f.Qc.name]: (e) => n(e, !0), [f.LZ.name]: (e) => n(e, !1), [f.X7.name]: (e) => n(e) };
                                                })({ library: e, playlistResource: i, getUserId: r, checkCollectionAccess: n }),
                                            [e, i, r, n],
                                        );
                                    })(),
                                    a = (() => {
                                        let e = (0, r.useRouter)(),
                                            t = (0, T.c)((t) => {
                                                let { weblink: a } = t,
                                                    { href: i, target: s } = (0, M.u)(a),
                                                    l = (0, D.U)(i, window.location.href, s);
                                                l &&
                                                    (l.type === z.I.EXTERNAL || l.type === z.I.DEEPLINK
                                                        ? ((e) => {
                                                              let { target: t, rel: a } = (0, M.u)(e, { options: { isExternalLink: !0 } });
                                                              window.open(e, t, a);
                                                          })(l.href)
                                                        : e.push(l.href));
                                            });
                                        return (0, l.useMemo)(() => ({ [B.r.name]: t }), [t]);
                                    })(),
                                    i = (() => {
                                        let e = (0, J.N)().get(Y.QG),
                                            t =
                                                ((0, Q.U)(),
                                                (0, T.c)(async (e) => {
                                                    let { data: t, title: a } = e,
                                                        i = ((e) => {
                                                            let t = 'data:image/png;base64,',
                                                                a = atob(e.startsWith(t) ? e.slice(t.length) : e),
                                                                i = Uint8Array.from(a, (e) => e.charCodeAt(0));
                                                            if ([137, 80, 78, 71, 13, 10, 26, 10].every((e, t) => i[t] === e))
                                                                return new Blob([i], { type: 'image/png' });
                                                            throw Error('WebApp share data must contain a PNG image');
                                                        })(t),
                                                        s = 'ya-music-'.concat(Date.now(), '.png'),
                                                        l = new File([i], s, { type: i.type });
                                                    await (0, ee.r)(l, s);
                                                })),
                                            a = (0, T.c)(() => {
                                                e.redirectToAuthorizationUrl();
                                            });
                                        return (0, l.useMemo)(() => ({ [K.ZR.name]: t, [K.P$.name]: a }), [a, t]);
                                    })();
                                return (0, l.useMemo)(() => ({ ...e, ...t, ...a, ...i }), [e, t, a, i]);
                            })(),
                            d = (0, Q.U)(),
                            { locale: c } = (0, C.A)(),
                            { theme: _ } = (0, et.W)(),
                            m = (0, T.c)(() => ({ locale: c, theme: _ })),
                            v = (0, T.c)(i);
                        return (
                            (0, l.useEffect)(() => {
                                let e,
                                    i = t.current;
                                if (!i) return;
                                let s = !0;
                                return (
                                    n(ea.G.PENDING),
                                    (async () => {
                                        try {
                                            ((e = new eu({ iframe: i, url: a, handlers: o, onClose: v, logger: d, ...m() })), await e.start(), s && n(ea.G.RESOLVE));
                                        } catch (e) {
                                            s && n(ea.G.REJECT);
                                        }
                                    })(),
                                    () => {
                                        ((s = !1), null == e || e.dispose());
                                    }
                                );
                            }, [v, a, t, m, o, d]),
                            { isPending: s === ea.G.PENDING, isRejected: s === ea.G.REJECT }
                        );
                    })({ frameRef: s, documentUrl: t, onClose: a });
                return (0, i.jsxs)('div', {
                    className: em().root,
                    'aria-busy': n,
                    children: [
                        (0, i.jsx)('iframe', {
                            ref: s,
                            className: em().frame,
                            title: t,
                            referrerPolicy: 'origin',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read; clipboard-write',
                            hidden: o,
                            'data-test-id': p.Xk.webView.WEB_VIEW_IFRAME,
                        }),
                        n && (0, i.jsx)(g.MainSuspenseLoader, { style: { position: 'absolute' } }),
                        o && (0, i.jsx)(x.SomethingWentWrong, { onBack: a }),
                    ],
                });
            });
            var eh = a(46590),
                ep = a.n(eh);
            let ex = (0, s.PA)((e) => {
                var t;
                let { url: a } = e,
                    { experiments: s } = (0, u.g)(),
                    p = s.checkExperiment(_.z.WebNextWebView, 'on'),
                    x = (0, r.usePathname)(),
                    g = (0, r.useSearchParams)(),
                    C =
                        null != a
                            ? a
                            : null ==
                                (t = ((e) => {
                                    if (!e) return null;
                                    let t = (0, v.Rj)(e, { allowedProtocols: h });
                                    return t.isAllowed && 'https://music.yandex.ru' === t.url.origin ? t.url : null;
                                })(g.get(m.K.URL)))
                              ? void 0
                              : t.href,
                    T = (0, o.W)(),
                    I = (0, l.useRef)(null);
                if (null === I.current && ((I.current = d.Z.main.href), T.length >= 2)) {
                    let e = T.state,
                        t = (null == e ? void 0 : e.data.href.split('?')[0]) === x ? e.prev : e,
                        a = null == t ? void 0 : t.data.href;
                    a && a.split('?')[0] !== x && (I.current = a);
                }
                let A = (0, c.Z)(I.current),
                    S = (0, n.L)(() => ((p && C) || (0, r.redirect)(d.Z.main.href), (0, i.jsx)(ev, { documentUrl: C, onClose: A }, C)));
                return (0, i.jsx)('main', { className: ep().root, children: S });
            });
        },
        57328: (e, t, a) => {
            'use strict';
            a.d(t, { WithAuth: () => h });
            var i = a(88800),
                s = a(84961),
                l = a(58390),
                r = a(65724),
                n = a(88969),
                o = a(29504),
                d = a(7628),
                c = a(42674),
                u = a.n(c);
            let _ = (0, s.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(o.DZ, {
                            className: (0, r.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(o.HL, {
                            className: (0, r.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(d.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = a(4370),
                v = a(72288);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: a } = e,
                    { user: s } = (0, v.g)();
                return s.isAuthorized ? t : (a && (0, l.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        63449: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => l });
            var i = a(72288),
                s = a(97956);
            let l = () => {
                var e, t, a;
                let { user: l, experiments: r, settings: n } = (0, i.g)();
                return (
                    !r.checkExperiment(s.z.WebNextDisableCollection, 'on') &&
                    !(null == (e = n.browserInfo) ? void 0 : e.isTouch) &&
                    l.isAuthorized &&
                    !l.hasPlus &&
                    (null == (a = r.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (t = a.value) ? void 0 : t.closeCollection) === 'on'
                );
            };
        },
        63688: (e) => {
            e.exports = { root: 'WebViewFrame_root__nZh_X', frame: 'WebViewFrame_frame__nprFQ' };
        },
        65568: (e) => {
            e.exports = { root: 'SlideCaption_root__JumhY' };
        },
        67990: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        68647: (e, t, a) => {
            'use strict';
            a.d(t, { SlidesPage: () => ay });
            var i,
                s,
                l,
                r,
                n,
                o,
                d,
                c,
                u,
                _ = a(88800),
                m = a(65724),
                v = a(84961),
                h = a(53548),
                p = a(2058),
                x = a(88969),
                g = a(58390),
                C = a(35412),
                T = a(87999),
                I = a(76903),
                A = a(37523),
                S = a(17392),
                N = a(64150),
                L = a(29993),
                f = a(96817),
                E = a(52300),
                b = a(73170),
                y = a(29504),
                w = a(7123),
                j = a(61758),
                R = a(44361),
                k = a(49784),
                O = a(7833),
                P = a(78275),
                B = a(72288),
                D = a(42737),
                z = a.n(D);
            let M = (e) => {
                let { isFirstSlide: t, isLastSlide: a, style: i } = e,
                    s = (0, R.Mn)(),
                    { formatMessage: l } = (0, p.A)(),
                    r = (0, h.useCallback)(() => {
                        s.slidePrev();
                    }, [s]),
                    n = (0, h.useCallback)(() => {
                        s.slideNext();
                    }, [s]);
                return (0, _.jsxs)('div', {
                    className: z().root,
                    style: i,
                    children: [
                        (0, _.jsx)(f.$, {
                            variant: 'outline',
                            iconClassName: z().top,
                            size: 'm',
                            radius: 'round',
                            onClick: r,
                            disabled: t,
                            icon: (0, _.jsx)(E.I, { variant: 'arrowDown', size: 'xxs' }, 'prevIcon'),
                            withRipple: !1,
                            'aria-label': l({ id: 'slider.prev-slide' }),
                            className: z().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_PREV_BUTTON,
                        }),
                        (0, _.jsx)(f.$, {
                            variant: 'outline',
                            size: 'm',
                            radius: 'round',
                            onClick: n,
                            disabled: a,
                            icon: (0, _.jsx)(E.I, { variant: 'arrowDown', size: 'xxs' }, 'nextIcon'),
                            withRipple: !1,
                            'aria-label': l({ id: 'slider.next-slide' }),
                            className: z().control,
                            'data-test-id': S.e8.slider.SLIDES_SLIDER_NEXT_BUTTON,
                        }),
                    ],
                });
            };
            var U = a(62414),
                V = a(33979),
                F = a(18593),
                H = a(59758),
                G = a(7555),
                W = a(70621);
            !(function (e) {
                ((e.TOP = 'TOP'), (e.CENTER = 'CENTER'), (e.BOTTOM = 'BOTTOM'));
            })(i || (i = {}));
            var Z = a(90688),
                $ = a(5295),
                q = a(41731),
                X = a(35948),
                K = a(20585),
                Y = a(9630),
                J = a(32041),
                Q = a.n(J);
            let ee = (0, v.PA)((e) => {
                    let {
                            className: t,
                            children: a,
                            background: {
                                animationDelay: i,
                                withPersonalColor: s,
                                videoUrl: l,
                                firstFrameVideoUrl: r,
                                lastFrameVideoUrl: n,
                                bgImageUrl: o,
                                withSound: d,
                                videoLoopEnabled: c,
                            },
                            isActive: u,
                            isContentVisible: v,
                            setContentVisible: p,
                            setContentInvisible: x,
                            shareBackground: g,
                            'data-test-id': T,
                        } = e,
                        {
                            user: I,
                            slides: { isMuted: A },
                        } = (0, B.g)(),
                        { isVisible: N } = (0, q.d)(),
                        L = (0, h.useRef)(null),
                        [f, E] = (0, h.useState)(o),
                        [b, y] = (0, h.useState)(null),
                        j = (0, h.useRef)(null),
                        R = (0, Y.e)();
                    (0, h.useEffect)(() => {
                        if (l || !o || (0, X.y)()) {
                            (E(o), y(null), (j.current = null));
                            return;
                        }
                        if (o === f) {
                            j.current && j.current !== f && (y(null), (j.current = null));
                            return;
                        }
                        (y(o), (j.current = o));
                    }, [o, f, l]);
                    let k = (0, h.useCallback)(() => {
                            let e = j.current;
                            e && e === b && (E(e), y(null), (j.current = null));
                        }, [b]),
                        O = (null == R ? void 0 : R.getState(K.V.TRAILER).playerState.status.value) === w.MT.PLAYING && d,
                        P = (0, h.useCallback)(() => setTimeout(p, 1e3 * i), [i, p]);
                    ((0, h.useEffect)(() => {
                        !u && v && x();
                    }, [u, v, x]),
                        (0, h.useEffect)(() => {
                            var e, t, a;
                            u && !N
                                ? ((null == (e = L.current) ? void 0 : e.readyState) !== 4 && P(),
                                  null == (t = L.current) ||
                                      t
                                          .play()
                                          .then(() => {
                                              (P(), O && (null == R || R.pause(K.V.TRAILER)));
                                          })
                                          .catch(P))
                                : L.current && ((L.current.currentTime = 0), null == (a = L.current) || a.pause());
                        }, [P, u, N, p, O, R]));
                    let D = (0, h.useMemo)(() => {
                            if (s && I.collectionHue) return { '--user-background-color': (0, $.e)(I.collectionHue, 1, 0.5) };
                        }, [s, I.collectionHue]),
                        z = l && r && !s,
                        M = !l && f,
                        U = !!n || void 0;
                    return (0, _.jsxs)('div', {
                        className: (0, m.$)(Q().root, t),
                        style: D,
                        'data-test-id': T,
                        children: [
                            M &&
                                (0, _.jsx)(
                                    Z._V,
                                    {
                                        src: (0, C.lU)(f, 800, !0),
                                        className: Q().firstFrame,
                                        'data-screenshot-hidden': U,
                                        'data-test-id': S.OA.slides.SLIDE_BACKGROUND_IMAGE,
                                    },
                                    f,
                                ),
                            !l &&
                                b &&
                                (0, _.jsx)(
                                    Z._V,
                                    {
                                        src: (0, C.lU)(b, 800, !0),
                                        className: (0, m.$)(Q().firstFrame, Q().backgroundFadeIn),
                                        onAnimationEnd: k,
                                        'data-screenshot-hidden': U,
                                    },
                                    b,
                                ),
                            z && (0, _.jsx)(Z._V, { src: (0, C.lU)(r, 800, !0), className: Q().firstFrame }),
                            l &&
                                (0, _.jsx)('video', {
                                    className: (0, m.$)(Q().media, { [Q().media_withPersonalColor]: s }),
                                    'data-screenshot-hidden': !0,
                                    ref: L,
                                    src: l,
                                    poster: (0, C.lU)(o, 800, !0),
                                    playsInline: !0,
                                    muted: !d || A,
                                    loop: c,
                                }),
                            l && n && (0, _.jsx)(Z._V, { 'data-screenshot-visible': !0, src: (0, C.lU)(n, 800, !0), className: (0, m.$)(Q().lastFrame, Q().hidden) }),
                            g && (0, _.jsx)(Z._V, { 'data-screenshot-visible': !0, src: (0, C.lU)(g, 800, !0), className: Q().shareBackground }),
                            !!a && a,
                        ],
                    });
                }),
                et = (0, h.memo)(ee);
            var ea = a(6087),
                ei = a(75914),
                es = a(79070);
            !(function (e) {
                ((e.TRACK = 'TRACK'), (e.ARTIST = 'ARTIST'), (e.ALBUM = 'ALBUM'), (e.CLIP = 'CLIP'), (e.PLAYLIST = 'PLAYLIST'));
            })(s || (s = {}));
            let el = new Set(Object.values(s)),
                er = (e) => 'string' == typeof e && el.has(e),
                en = (e, t, a) => {
                    if (!er(t)) return !1;
                    switch (t) {
                        case s.TRACK:
                            return e.isTrackLiked(a);
                        case s.ARTIST:
                            return e.isArtistLiked(a);
                        case s.ALBUM:
                            return e.isAlbumLiked(a);
                        case s.CLIP:
                            return e.isClipLiked(a);
                        case s.PLAYLIST:
                            return e.isPlaylistLiked(a);
                    }
                };
            var eo = a(80643),
                ed = a(81877),
                ec = a(91292),
                eu = a(89080),
                e_ = a.n(eu);
            let em = (e) => {
                var t;
                let { data: a, className: i, 'data-test-id': s } = e,
                    l = (0, eo.S)(),
                    r = (0, L.c)(() => {
                        var e;
                        l({ deepLink: null != (e = a.url) ? e : '', to: T.AppScreen.Link });
                    });
                return (0, _.jsxs)(ec.N, {
                    href: null != (t = a.url) ? t : void 0,
                    onClick: r,
                    className: (0, m.$)(e_().root, i),
                    'data-test-id': s,
                    children: [
                        (0, _.jsx)(G.t, {
                            radius: 'xs',
                            className: e_().cover,
                            children: a.imageUrl && (0, _.jsx)(ed.B, { src: a.imageUrl, withAvatarReplace: !0, fit: 'contain', className: e_().image, size: 100 }),
                        }),
                        (0, _.jsx)(y.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', className: e_().text, lineClamp: 1, children: a.title }),
                        (0, _.jsx)(E.I, { variant: 'arrowRight', size: 'xs', className: e_().icon }),
                    ],
                });
            };
            var ev = a(26128),
                eh = a.n(ev),
                ep = a(79390),
                ex = a(29595),
                eg = a(74965),
                eC = a(66943),
                eT = a(97462),
                eI = a.n(eT);
            let eA = (0, v.PA)((e) => {
                let { data: t, className: a, 'data-test-id': i } = e,
                    l = ((e) => {
                        let { library: t } = (0, B.g)();
                        return en(t, e.entityType, e.entityId);
                    })(t),
                    r = l ? t.liked : t.unliked,
                    n = ((e) => {
                        let { data: t, isLiked: a } = e,
                            { library: i, user: l } = (0, B.g)(),
                            { notify: r } = (0, eg.l)(),
                            { formatMessage: n } = (0, p.A)(),
                            o = (0, W.D)(),
                            [d, c] = (0, h.useState)(!1);
                        return (0, L.c)(async () => {
                            let e;
                            if (!(a ? t.liked : t.unliked).enabled) return;
                            if (!l.isAuthorized)
                                return void r((0, _.jsx)(eC.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: ex.u.ERROR });
                            if (d || !er(t.entityType)) return;
                            c(!0);
                            let u = l.account.data.uid,
                                m = { entityId: t.entityId, userId: u };
                            switch (t.entityType) {
                                case s.TRACK:
                                    e = await i.toggleTrackLike(m);
                                    break;
                                case s.ARTIST:
                                    e = await i.toggleArtistLike(m);
                                    break;
                                case s.ALBUM:
                                    e = await i.toggleAlbumLike(m);
                                    break;
                                case s.CLIP:
                                    e = await i.toggleClipLike(m);
                                    break;
                                case s.PLAYLIST: {
                                    let [a, s] = t.entityId.split(':');
                                    e = await i.togglePlaylistLike({ userId: u, entityId: t.entityId, ownerId: Number(a), kindId: Number(s) });
                                }
                            }
                            (c(!1),
                                e === ep.f.OK
                                    ? o({ actionType: a ? T.ActionType.Unlike : T.ActionType.Like, userInteractionType: T.UserInteractionType.Tap })
                                    : e === ep.f.ERROR && r((0, _.jsx)(eC.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: ex.u.ERROR }));
                        });
                    })({ data: t, isLiked: l }),
                    o = (0, es.L)(() => ({ '--text-color': r.textColor, '--button-color': r.buttonColor }));
                return (0, _.jsx)(f.$, {
                    style: o,
                    className: (0, m.$)(eh().root, eI().root, a),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    disabled: !r.enabled,
                    onClick: n,
                    'data-test-id': i,
                    children: (0, _.jsx)(y.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: r.title }),
                });
            });
            var eS = a(78940);
            let eN = (e) => {
                var t;
                let { data: a, className: i, handleClick: s, 'data-test-id': l } = e,
                    r = (0, eS.Z)(null != (t = a.url) ? t : ''),
                    n = (0, eo.S)(),
                    o = (0, h.useMemo)(() => ({ '--text-color': a.textColor, '--button-color': a.buttonColor }), [a.buttonColor, a.textColor]),
                    d = (0, L.c)(() => {
                        var e;
                        if (s) return s();
                        (n({ deepLink: null != (e = a.url) ? e : '', to: T.AppScreen.Link }), r());
                    });
                return (0, _.jsx)(f.$, {
                    role: 'link',
                    style: o,
                    className: (0, m.$)(eh().root, i),
                    size: 'default',
                    radius: 'xxxl',
                    color: 'primary',
                    withHover: !1,
                    withRipple: !1,
                    onClick: d,
                    'data-test-id': l,
                    children: (0, _.jsx)(y.HL, { variant: 'span', type: 'controls', size: 'l', weight: 'medium', lineClamp: 1, children: a.title }),
                });
            };
            var eL = a(25921),
                ef = a.n(eL);
            let eE = ea.default.default(
                    () =>
                        Promise.all([a.e(8823), a.e(9934), a.e(3830)])
                            .then(a.bind(a, 63830))
                            .then((e) => e.ShareButton),
                    { ssr: !1 },
                ),
                eb = (e) => {
                    let { button: t, buttonClassName: a, cardRef: i } = e,
                        s = (0, m.$)(a, ef().contractButton);
                    switch (t.type) {
                        case ei.m.ACTION:
                            if (t.data.url) return (0, _.jsx)(em, { data: t.data, className: s, 'data-test-id': S.OA.slides.SLIDE_ACTION_BUTTON });
                            return null;
                        case ei.m.SIMPLE:
                            if (t.data.url) return (0, _.jsx)(eN, { data: t.data, className: s, 'data-test-id': S.OA.slides.SLIDE_SIMPLE_BUTTON });
                            return null;
                        case ei.m.SHARE:
                            return (0, _.jsx)(eE, { data: t.data, wrapperClassName: s, cardRef: i, 'data-test-id': S.OA.slides.SLIDE_SHARE_BUTTON });
                        case ei.m.LIKE:
                            return (0, _.jsx)(eA, { data: t.data, className: s, 'data-test-id': S.OA.slides.SLIDE_LIKE_BUTTON });
                        default:
                            return null;
                    }
                },
                ey = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: i, className: s, cardRef: l, hasLeft: r = !0, hasRight: n = !0, onSaveChoice: o, onEditChoice: d, onSlidePrev: c, onSlideNext: u } = e,
                        { button: v } = i,
                        {
                            library: x,
                            slides: { savedChoice: g },
                        } = (0, B.g)(),
                        C = null != (a = null == g ? void 0 : g.isSaved) && a,
                        { formatMessage: T } = (0, p.A)(),
                        I = (0, h.useMemo)(() => {
                            if ((null == v ? void 0 : v.type) === ei.m.SHARE || (null == v ? void 0 : v.type) === ei.m.SIMPLE)
                                return { textColor: v.data.textColor, buttonColor: v.data.buttonColor };
                            if ((null == v ? void 0 : v.type) === ei.m.LIKE) {
                                let e = en(x, v.data.entityType, v.data.entityId) ? v.data.liked : v.data.unliked;
                                return { textColor: e.textColor, buttonColor: e.buttonColor };
                            }
                            return { textColor: null, buttonColor: null };
                        }, [v, x]),
                        A = (0, h.useMemo)(() => ({ '--text-color': I.textColor, '--button-color': I.buttonColor }), [I]),
                        L = (0, es.L)(() => v && (0, _.jsx)(eb, { button: v, buttonClassName: s, cardRef: l })),
                        b = (0, es.L)(() =>
                            i.savedChoiceKey && (r || n)
                                ? (0, _.jsx)(eN, { data: { title: T({ id: 'rewind.save-choice' }), url: null, ...I }, handleClick: o, className: s })
                                : L,
                        ),
                        y = null == (t = i.content) ? void 0 : t.type;
                    return y !== N.x.CAROUSEL && y !== N.x.COLLAGE && y !== N.x.LINEUP
                        ? L
                        : C
                          ? (0, _.jsxs)('div', {
                                className: ef().buttonsContainer,
                                children: [
                                    v && (0, _.jsx)(eb, { button: v, buttonClassName: s, cardRef: l }),
                                    (0, _.jsx)(f.$, {
                                        color: 'primary',
                                        className: (0, m.$)(ef().iconButton, eh().root, ef().editButton),
                                        icon: (0, _.jsx)(E.I, { variant: 'pencil', size: 'xxs' }),
                                        radius: 'round',
                                        role: 'link',
                                        size: 'default',
                                        withHover: !0,
                                        withRipple: !0,
                                        style: A,
                                        onClick: d,
                                    }),
                                ],
                            })
                          : (0, _.jsxs)('div', {
                                className: ef().buttonsContainer,
                                children: [
                                    r &&
                                        (0, _.jsx)(f.$, {
                                            color: 'primary',
                                            className: (0, m.$)(ef().iconButton, eh().root, ef().arrowLeftButton),
                                            icon: (0, _.jsx)(E.I, { variant: 'arrowLeft', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: A,
                                            onClick: c,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_PREV_BUTTON,
                                        }),
                                    (0, _.jsx)('div', { className: ef().mainButtonContainer, children: b }),
                                    n &&
                                        (0, _.jsx)(f.$, {
                                            color: 'primary',
                                            className: (0, m.$)(ef().iconButton, eh().root, ef().arrowRightButton),
                                            icon: (0, _.jsx)(E.I, { variant: 'arrowRight', size: 'xxs' }),
                                            radius: 'round',
                                            role: 'link',
                                            size: 'default',
                                            withHover: !0,
                                            withRipple: !0,
                                            style: A,
                                            onClick: u,
                                            'data-test-id': S.OA.slides.SLIDE_CAROUSEL_NEXT_BUTTON,
                                        }),
                                ],
                            });
                });
            var ew = a(29885);
            let ej = { 6: 84, 7: 84, 8: 68, 9: 68, 10: 56, 11: 56, 12: 48, 13: 48 };
            var eR = a(65568),
                ek = a.n(eR);
            let eO = (e) => {
                let { caption: t, className: a, lineClamp: i = 2, 'data-test-id': s } = e;
                return (0, _.jsx)(y.HL, {
                    variant: 'span',
                    type: 'text',
                    size: 'l',
                    weight: 'medium',
                    className: (0, m.$)(ek().root, a),
                    lineClamp: i,
                    'data-test-id': s,
                    children: t,
                });
            };
            var eP = a(89246),
                eB = a.n(eP);
            let eD = (e) => {
                let {
                        data: t,
                        className: a,
                        valueClassName: i,
                        valueContainerClassName: s,
                        withAutoResize: l,
                        descriptionLineClamp: r,
                        withOpacity: n,
                        lineClamp: o = 3,
                    } = e,
                    d = (0, h.useRef)(null),
                    { formatNumber: c } = (0, p.A)(),
                    u = (0, h.useCallback)((e) => (e >= 1e4 ? c(e) : String(e)), [c]);
                (0, h.useEffect)(() => {
                    if (d.current) {
                        if (null === t.value) return;
                        let e = new ew.T(d.current, Number(t.value), { startVal: 1, formattingFn: u });
                        e.error || e.start();
                    }
                }, [t.value, u]);
                let v = (0, h.useMemo)(() => {
                        if (l && t.value)
                            return {
                                fontSize: ((e) => {
                                    let t = String(e).length;
                                    return t > 13
                                        ? 'clamp('.concat(18, 'px, ').concat(11, 'cqi, ').concat(54, 'px)')
                                        : t <= 5
                                          ? 'clamp('.concat(18, 'px, ').concat(26, 'cqi, ').concat(100, 'px)')
                                          : 'clamp('
                                                .concat(18, 'px, ')
                                                .concat(26 - t, 'cqi, ')
                                                .concat(ej[t], 'px)');
                                })(t.value),
                            };
                    }, [t.value, l]),
                    x = (0, h.useMemo)(() => {
                        if (null !== t.value) return u(t.value);
                    }, [t.value, u]);
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        (0, _.jsxs)(b.q, { children: [t.value, ' ', t.valueSuffix, ' ', t.valueDescription] }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(eB().root, { [eB().root_withOpacity]: n }, a),
                            'aria-hidden': !0,
                            'data-test-id': S.OA.slides.STAT_ITEM,
                            children: [
                                (0, _.jsxs)('div', {
                                    className: (0, m.$)(eB().valueContainer, s),
                                    children: [
                                        (0, _.jsx)(y.DZ, {
                                            variant: 'div',
                                            size: 'xxxxl',
                                            tabIndex: -1,
                                            ref: d,
                                            'aria-hidden': !0,
                                            className: (0, m.$)(eB().value, i),
                                            style: v,
                                            'data-test-id': S.OA.slides.STAT_VALUE,
                                            'data-screenshot-value': x,
                                        }),
                                        t.valueSuffix &&
                                            (0, _.jsx)(y.DZ, {
                                                variant: 'div',
                                                size: 'xxxxl',
                                                className: eB().value,
                                                style: v,
                                                'data-test-id': S.OA.slides.STAT_VALUE_SUFFIX,
                                                children: t.valueSuffix,
                                            }),
                                    ],
                                }),
                                (0, _.jsx)(y.DZ, {
                                    variant: 'div',
                                    size: 'xl',
                                    weight: 'black',
                                    className: eB().unit,
                                    lineClamp: r,
                                    'data-test-id': S.OA.slides.STAT_VALUE_DESCRIPTION,
                                    children: t.valueDescription,
                                }),
                                t.footer && (0, _.jsx)(eO, { caption: t.footer, className: eB().footer, lineClamp: o, 'data-test-id': S.OA.slides.STAT_FOOTER }),
                            ],
                        }),
                    ],
                });
            };
            var ez = a(43534),
                eM = a.n(ez);
            let eU = (e) => {
                let { data: t } = e,
                    a = (0, h.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    ),
                    i = (0, h.useMemo)(() => ({ '--covers-offset-translate': ''.concat((t.covers.length - 1) * 7.5, 'px') }), [t.covers]),
                    s = (0, h.useCallback)((e) => ({ '--cover-offset-translate': '-'.concat(15 * e, 'px') }), []);
                return (0, _.jsxs)('div', {
                    className: eM().root,
                    'data-test-id': S.OA.slides.ARTISTS_CONTENT,
                    children: [
                        (0, _.jsx)(eD, { data: a, withAutoResize: !0 }),
                        (0, _.jsx)('div', {
                            className: eM().covers,
                            style: i,
                            children: t.covers.map((e, t) => {
                                var a;
                                return (0, _.jsx)(
                                    G.t,
                                    {
                                        radius: 'round',
                                        className: eM().cover,
                                        style: s(t),
                                        children: (0, _.jsx)(ed.B, {
                                            src: null != (a = e.uri) ? a : void 0,
                                            withAvatarReplace: !0,
                                            fit: 'contain',
                                            size: 100,
                                            className: eM().image,
                                        }),
                                    },
                                    e.uri,
                                );
                            }),
                        }),
                    ],
                });
            };
            var eV = a(82530),
                eF = a.n(eV);
            let eH = (e) => {
                    let {
                            forwardRef: t,
                            createUrlReplacer: a = C.lU,
                            className: i,
                            maskSrc: s,
                            style: l = {},
                            withAspectRatio: r = !1,
                            withAvatarReplace: n,
                            withMaskReplace: o = n,
                            ...d
                        } = e,
                        c = s ? 'url('.concat(o ? a(s, 'orig', r) : s, ')') : 'none';
                    return (0, _.jsx)(Z._V, {
                        className: (0, m.$)(eF().root, i),
                        createUrlReplacer: a,
                        ref: t,
                        style: { ...l, maskImage: c },
                        withAspectRatio: r,
                        withAvatarReplace: n,
                        ...d,
                    });
                },
                eG = (0, h.forwardRef)((e, t) => (0, _.jsx)(eH, { forwardRef: t, ...e }));
            var eW = a(24546),
                eZ = a.n(eW);
            let e$ = (e) => {
                    let { backgroundSrc: t, className: a, forwardRef: i, maskSrc: s, size: l, src: r, withAvatarReplace: n, ...o } = e;
                    return (0, _.jsxs)('div', {
                        className: eZ().root,
                        children: [
                            t && (0, _.jsx)(Z._V, { className: eZ().background, src: t, size: l, withAvatarReplace: n, ...o }),
                            (0, _.jsx)(eG, { className: a, maskSrc: s, ref: i, size: l, src: r, withAvatarReplace: n, ...o }),
                        ],
                    });
                },
                eq = (0, h.forwardRef)((e, t) => (0, _.jsx)(e$, { forwardRef: t, ...e }));
            var eX = a(89988);
            a(21867);
            var eK = a(13876),
                eY = a.n(eK);
            let eJ = (0, v.PA)((e) => {
                let {
                        isDisabled: t,
                        initialIndex: a = 0,
                        slidesPerView: i = eX.bF,
                        disabledClassName: s,
                        slideActiveClassName: l,
                        slideClassName: r,
                        onSlideChange: n,
                        onCarouselReady: o,
                        className: d,
                        spaceBetween: c,
                        children: u,
                    } = e,
                    v = (0, h.useRef)(null);
                (0, h.useEffect)(() => {
                    var e, a;
                    t ? null == (e = v.current) || e.disable() : null == (a = v.current) || a.enable();
                }, [t]);
                let p = (0, h.useCallback)(
                        (e) => {
                            let { activeIndex: a } = e;
                            t || null == n || n(a);
                        },
                        [t, n],
                    ),
                    x = (0, h.useCallback)(
                        (e) => {
                            ((v.current = e), null == o || o({ slideNext: () => e.slideNext(), slidePrev: () => e.slidePrev() }));
                        },
                        [o],
                    );
                return (0, _.jsx)(R.RC, {
                    a11y: { enabled: !0 },
                    centeredSlides: !0,
                    className: (0, m.$)(eY().root, eY().swiper, d, { [null != s ? s : '']: t }),
                    initialSlide: a,
                    keyboard: !0,
                    modules: [j.Jq, j.s3, j.Vx, j.dK],
                    pagination: { dynamicBullets: !0, dynamicMainBullets: 3 },
                    slidesPerView: i,
                    spaceBetween: null != c ? c : eX.ur,
                    wrapperClass: eY().wrapper,
                    onActiveIndexChange: p,
                    onSwiper: x,
                    children: u.map((e, t) => {
                        var i, s;
                        return (0, _.jsx)(
                            R.qr,
                            {
                                className: (0, m.$)(eY().slide, r, {
                                    [null != l ? l : '']: t === (null != (s = null == (i = v.current) ? void 0 : i.activeIndex) ? s : a),
                                }),
                                children: e,
                            },
                            t,
                        );
                    }),
                });
            });
            var eQ = a(96252),
                e0 = a.n(eQ);
            let e1 = (e) => {
                let { className: t, heading: a, lineClamp: i = 2, 'data-test-id': s } = e;
                return (0, _.jsx)(y.DZ, { variant: 'h3', size: 'xxl', weight: 'bold', className: (0, m.$)(e0().root, t), lineClamp: i, 'data-test-id': s, children: a });
            };
            var e8 = a(97974),
                e2 = a.n(e8);
            let e4 = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a, onSlideChange: i, onCarouselReady: s } = e,
                    {
                        slides: { savedChoice: l },
                    } = (0, B.g)(),
                    { isSaved: r } = null != l ? l : { index: 0, isSaved: !1 },
                    [n, o] = (0, h.useState)(() => {
                        if (void 0 !== a) return t.items[a];
                    }),
                    d = (0, h.useCallback)(
                        (e) => {
                            let a = t.items[e];
                            a && (o(a), null == i || i(e, t.items.length));
                        },
                        [t.items, i],
                    );
                return t.items.length
                    ? (0, _.jsxs)('div', {
                          className: e2().root,
                          children: [
                              n && n.data.description && (0, _.jsx)(eO, { caption: n.data.description, className: e2().description, lineClamp: 3 }),
                              (0, _.jsx)(eJ, {
                                  isDisabled: r,
                                  initialIndex: a,
                                  slideClassName: e2().slide,
                                  slideActiveClassName: e2().slideActive,
                                  disabledClassName: e2().disabled,
                                  onCarouselReady: s,
                                  onSlideChange: d,
                                  children: t.items.map((e, t) => {
                                      var a, i;
                                      return (0, _.jsx)(
                                          G.t,
                                          {
                                              className: e2().cover,
                                              children:
                                                  e.data.cover.uri &&
                                                  (0, _.jsx)(eq, {
                                                      backgroundSrc: null != (a = e.data.coverBackground) ? a : '',
                                                      className: e2().image,
                                                      fit: 'contain',
                                                      maskSrc: null != (i = e.data.coverMask) ? i : '',
                                                      size: eX.e0,
                                                      src: e.data.cover.uri,
                                                      withAvatarReplace: !0,
                                                      withSrcSet: !1,
                                                  }),
                                          },
                                          t,
                                      );
                                  }),
                              }),
                              (0, _.jsxs)('div', {
                                  className: e2().meta,
                                  children: [
                                      (null == n ? void 0 : n.data.subtitle) && (0, _.jsx)(eO, { caption: n.data.subtitle, className: e2().subtitle }),
                                      (null == n ? void 0 : n.data.title) && (0, _.jsx)(e1, { className: e2().title, heading: n.data.title, lineClamp: 3 }),
                                  ],
                              }),
                          ],
                      })
                    : null;
            });
            !(function (e) {
                ((e.SQUARE = 'SQUARE'), (e.CIRCLE = 'CIRCLE'));
            })(l || (l = {}));
            var e9 = a(72863),
                e5 = a.n(e9),
                e3 = a(5120);
            !(function (e) {
                ((e.NUMBER = 'NUMBER'), (e.TEXT = 'TEXT'));
            })(r || (r = {}));
            var e6 = a(28523),
                e7 = a.n(e6);
            let te = (0, v.PA)((e) => {
                    var t;
                    let { data: a, index: i, variant: s, isOrderVisible: n, hasOnlyArtistItems: o } = e,
                        { formatNumber: d } = (0, p.A)(),
                        c = (0, h.useMemo)(
                            () => ({ '--slide-final-translate-offset': s === N.x.CHART && o ? ''.concat(-8 * i, 'px') : 0, animationDelay: ''.concat(0.5 * i, 's') }),
                            [i, o, s],
                        ),
                        u = (0, h.useMemo)(() => {
                            let e = Number(a.subtitle);
                            return a.subtitle && !isNaN(e) ? d(e) : a.subtitle;
                        }, [a.subtitle, d]),
                        v = (0, h.useMemo)(
                            () =>
                                a.titleType === r.NUMBER && 'number' == typeof a.value
                                    ? (0, _.jsx)(eD, {
                                          data: (0, e3.wg)({ value: a.value }),
                                          className: e7().stat,
                                          valueClassName: e7().statValue,
                                          valueContainerClassName: e7().statValueContainer,
                                      })
                                    : a.title
                                      ? s === N.x.CHART_ARTIST
                                          ? (0, _.jsx)(y.DZ, { variant: 'div', size: 's', weight: 'black', lineClamp: 2, className: e7().textVariant, children: a.title })
                                          : (0, _.jsx)(y.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: e7().textVariant,
                                                'data-test-id': S.OA.slides.CHART_ITEM_TITLE,
                                                children: a.title,
                                            })
                                      : void 0,
                            [a.title, a.titleType, a.value, s],
                        ),
                        x = (0, h.useMemo)(() => {
                            if (u)
                                return (s === N.x.CHART && o) || s === N.x.CHART_FAVORITES
                                    ? (0, _.jsx)(y.DZ, {
                                          variant: 'div',
                                          size: 's',
                                          weight: 'black',
                                          lineClamp: 2,
                                          className: (0, m.$)(e7().textVariant, e7().subTitle),
                                          'data-test-id': S.OA.slides.CHART_ITEM_SUBTITLE,
                                          children: u,
                                      })
                                    : (0, _.jsx)(y.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'medium',
                                          lineClamp: 2,
                                          className: (0, m.$)(e7().text, { [e7().textVariant]: s === N.x.CHART_ARTIST }),
                                          'data-test-id': S.OA.slides.CHART_ITEM_SUBTITLE,
                                          children: u,
                                      });
                        }, [u, o, s]);
                    return (0, _.jsxs)('li', {
                        className: e7().root,
                        style: c,
                        tabIndex: 0,
                        'data-test-id': S.OA.slides.CHART_ITEM,
                        children: [
                            n &&
                                (0, _.jsx)(y.DZ, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'black',
                                    className: e7().order,
                                    'data-test-id': S.OA.slides.CHART_ITEM_POSITION,
                                    children: i + 1,
                                }),
                            (0, _.jsx)(G.t, {
                                radius: a.coverType === l.CIRCLE ? 'round' : 'xs',
                                className: e7().cover,
                                children:
                                    (null == (t = a.cover) ? void 0 : t.uri) &&
                                    (0, _.jsx)(ed.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: e7().image, size: 100 }),
                            }),
                            (0, _.jsxs)('div', { className: e7().meta, children: [v, x] }),
                        ],
                    });
                }),
                tt = (e) => {
                    let { items: t, isOrderVisible: a, variant: i } = e,
                        s = (0, h.useMemo)(() => t.every((e) => e.coverType === l.CIRCLE), [t]),
                        r = (0, h.useMemo)(() => {
                            switch (i) {
                                case N.x.CHART_ARTIST:
                                    return 'l';
                                case N.x.CHART_FAVORITES:
                                    return 'xxl';
                                case N.x.CHART:
                                    if (s) return;
                                    return 'm';
                                default:
                                    return null;
                            }
                        }, [s, i]);
                    return (0, _.jsx)('ol', {
                        className: (0, m.$)(e5().root, e5()['root_spacer_'.concat(r)]),
                        tabIndex: -1,
                        'data-test-id': S.OA.slides.CHART_LIST,
                        children: t.map((e, t) =>
                            (0, _.jsx)(te, { data: e, index: t, variant: i, hasOnlyArtistItems: s, isOrderVisible: a }, ''.concat(e.title, '-').concat(e.subtitle)),
                        ),
                    });
                };
            var ta = a(46476),
                ti = a.n(ta);
            let ts = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: ti().root,
                    children: [
                        (null == (t = a.cover) ? void 0 : t.uri) &&
                            (0, _.jsx)(G.t, {
                                radius: 'round',
                                className: ti().cover,
                                children: (0, _.jsx)(ed.B, { src: a.cover.uri, withAvatarReplace: !0, fit: 'contain', className: ti().image, size: 200 }),
                            }),
                        a.title && (0, _.jsx)(y.DZ, { variant: 'div', size: 'xl', weight: 'bold', className: ti().title, lineClamp: 2, children: a.title }),
                        (0, _.jsx)(tt, { items: a.items, isOrderVisible: !1, variant: N.x.CHART_ARTIST }),
                    ],
                });
            };
            var tl = a(47786),
                tr = a.n(tl);
            let tn = (e) => {
                var t;
                let { data: a } = e;
                return (0, _.jsxs)('div', {
                    className: tr().root,
                    'data-test-id': S.OA.slides.CHART_CONTENT,
                    children: [
                        a.description &&
                            (0, _.jsx)(eO, {
                                caption: null != (t = a.description) ? t : '',
                                className: tr().text,
                                lineClamp: 3,
                                'data-test-id': S.OA.slides.CHART_DESCRIPTION,
                            }),
                        (0, _.jsx)(tt, { items: a.items, variant: N.x.CHART, isOrderVisible: a.isOrderVisible }),
                    ],
                });
            };
            var to = a(94842),
                td = a.n(to);
            let tc = (e) => {
                let { data: t } = e,
                    a = 'number' == typeof t.value,
                    i = (0, h.useMemo)(
                        () => ({ value: t.value, valueDescription: t.valueDescription, valueSuffix: t.valueSuffix, footer: t.footer, align: t.align }),
                        [t.footer, t.value, t.valueDescription, t.valueSuffix, t.align],
                    );
                return (0, _.jsxs)('div', {
                    className: td().root,
                    'data-test-id': S.OA.slides.CHART_FAVORITES_CONTENT,
                    children: [
                        a && (0, _.jsx)(eD, { data: i, withAutoResize: !0 }),
                        t.description &&
                            (0, _.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: td().description,
                                lineClamp: 3,
                                'data-test-id': S.OA.slides.CHART_FAVORITES_DESCRIPTION,
                                children: t.description,
                            }),
                        (0, _.jsx)(tt, { items: t.items, isOrderVisible: t.isOrderVisible, variant: N.x.CHART_FAVORITES }),
                    ],
                });
            };
            (!(function (e) {
                ((e.CHOSEN = 'CHOSEN'), (e.TEXT = 'TEXT'));
            })(n || (n = {})),
                (function (e) {
                    ((e.CHOSEN_IMAGE = 'CHOSEN_IMAGE'), (e.IMAGE = 'IMAGE'));
                })(o || (o = {})),
                (function (e) {
                    ((e.TEXT = 'TEXT'), (e.COLLAGE = 'COLLAGE'));
                })(d || (d = {})));
            var tu = a(84516),
                t_ = a.n(tu);
            let tm = (0, v.PA)((e) => {
                let { data: t, carouselIndex: a = 0, onBackgroundChange: i, onCarouselReady: s, onSlideChange: l } = e,
                    {
                        slides: { savedChoices: r },
                    } = (0, B.g)();
                (0, h.useEffect)(() => {
                    var e, s, l;
                    return null == i ? void 0 : i(null != (l = null == (s = t.items[a]) || null == (e = s.contentBackground) ? void 0 : e.uri) ? l : '');
                }, [t.items, a, i]);
                let d = (0, L.c)((e) => {
                    var a, s, r;
                    (null == i || i(null != (r = null == (s = t.items[e]) || null == (a = s.contentBackground) ? void 0 : a.uri) ? r : ''),
                        null == l || l(e, t.items.length));
                });
                return t.items.length
                    ? (0, _.jsx)('div', {
                          className: t_().root,
                          children: (0, _.jsx)(eJ, {
                              initialIndex: a,
                              slidesPerView: 1,
                              onCarouselReady: s,
                              onSlideChange: d,
                              children: t.items.map((e, t) => {
                                  let a,
                                      { topBlock: i, bottomBlock: s } = e,
                                      {
                                          background: { uri: l },
                                          items: d,
                                      } = i.data,
                                      c = d.reduce((e, t) => {
                                          let a, i, s;
                                          if (t.type === o.IMAGE) a = t.data.uri;
                                          else if (t.type === o.CHOSEN_IMAGE) {
                                              var l;
                                              let e = r.get(null != (l = t.data.key) ? l : '');
                                              ((a = null == e ? void 0 : e.data.uri),
                                                  (i = null == e ? void 0 : e.data.coverMask),
                                                  (s = null == e ? void 0 : e.data.coverBackground));
                                          }
                                          if (!a) return e;
                                          let { x: n, y: d, z: c, width: u, height: _ } = t.data.rectangle;
                                          return (
                                              e.push({
                                                  uri: a,
                                                  coverMask: i,
                                                  coverBackground: s,
                                                  rectangle: {
                                                      left: ''.concat(n, '%'),
                                                      top: ''.concat(1.25 * d, '%'),
                                                      zIndex: c,
                                                      width: ''.concat(u, '%'),
                                                      height: ''.concat(1.25 * _, '%'),
                                                  },
                                              }),
                                              e
                                          );
                                      }, []),
                                      u =
                                          ((a = s.data.items),
                                          a.map((e) => {
                                              let t;
                                              if (e.type === n.TEXT) t = e.data.subtitle;
                                              else if (e.type === n.CHOSEN) {
                                                  var a;
                                                  let i = r.get(null != (a = e.data.key) ? a : '');
                                                  t = null == i ? void 0 : i.data.text;
                                              }
                                              return { title: e.data.title, subtitle: t };
                                          }));
                                  return (0, _.jsxs)(
                                      'div',
                                      {
                                          className: t_().slide,
                                          children: [
                                              (0, _.jsxs)('div', {
                                                  className: t_().topBlock,
                                                  children: [
                                                      l && (0, _.jsx)(Z._V, { className: t_().topBlockBackground, src: l, withAvatarReplace: !0 }),
                                                      c.map((e, t) => {
                                                          let { uri: a, coverMask: i, coverBackground: s, rectangle: l } = e;
                                                          return (0, _.jsx)(
                                                              'div',
                                                              {
                                                                  className: t_().topBlockImageWrapper,
                                                                  style: l,
                                                                  children: (0, _.jsx)(eq, {
                                                                      backgroundSrc: s,
                                                                      className: t_().topBlockImage,
                                                                      fit: 'contain',
                                                                      maskSrc: i,
                                                                      size: eX.e0,
                                                                      src: a,
                                                                      withAvatarReplace: !0,
                                                                      withSrcSet: !1,
                                                                  }),
                                                              },
                                                              t,
                                                          );
                                                      }),
                                                  ],
                                              }),
                                              (0, _.jsx)('div', {
                                                  className: t_().bottomBlock,
                                                  children: u.map((e, t) => {
                                                      let { title: a, subtitle: i } = e;
                                                      return (0, _.jsxs)(
                                                          'div',
                                                          {
                                                              className: t_().bottomBlock_item,
                                                              children: [
                                                                  a && (0, _.jsx)(eO, { caption: a, className: t_().title, lineClamp: 1 }),
                                                                  i && (0, _.jsx)(e1, { heading: i, className: t_().subtitle, lineClamp: 1 === t ? 1 : 2 }),
                                                              ],
                                                          },
                                                          a,
                                                      );
                                                  }),
                                              }),
                                          ],
                                      },
                                      t,
                                  );
                              }),
                          }),
                      })
                    : null;
            });
            var tv = a(16226),
                th = a.n(tv),
                tp = a(86165),
                tx = a(35199),
                tg = a.n(tx),
                tC = a(73171),
                tT = a(50408),
                tI = a(40849),
                tA = a.n(tI);
            let tS = { maxFontSize: 20, minFontSize: 12, lineHeight: 1 },
                tN = (e) => {
                    let { children: t, className: a, textOptions: i } = e,
                        s = { ...tS, ...i },
                        [l, r] = (0, tT.d)();
                    return ((0, tC.mf)(l, s), (0, _.jsx)('div', { className: (0, m.$)(tA().root, a), ref: r, children: t }));
                };
            var tL = a(40251),
                tf = a.n(tL);
            let tE = (e) => {
                let { data: t } = e,
                    { contentImage: a, contentLogo: i, metaLabel: s, festivalTextColor: l, festivalTitle: r, artists: n } = t,
                    o = null == a ? void 0 : a.uri,
                    d = null == i ? void 0 : i.uri,
                    c = l ? { '--festival-title-color': l } : void 0;
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        s &&
                            (0, _.jsx)('div', {
                                className: tf().header,
                                children: (0, _.jsx)(y.DZ, {
                                    className: tf().metaLabel,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'xxs',
                                    weight: 'bold',
                                    'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                    children: s,
                                }),
                            }),
                        o &&
                            (0, _.jsx)(Z._V, {
                                className: tf().festivalImage,
                                src: o,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        (0, _.jsxs)(tN, {
                            className: tf().text,
                            children: [
                                r &&
                                    (0, _.jsx)(y.DZ, {
                                        className: tf().festivalTitle,
                                        style: c,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 2,
                                        'data-test-id': S.OA.slides.LINEUP_FESTIVAL_TITLE,
                                        children: r,
                                    }),
                                n.length > 0 &&
                                    (0, _.jsx)(y.DZ, {
                                        className: tf().artists,
                                        style: c,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'xl',
                                        weight: 'bold',
                                        lineClamp: 6,
                                        'data-test-id': S.OA.slides.LINEUP_ARTISTS,
                                        children: n.join(eX.$$),
                                    }),
                            ],
                        }),
                        d &&
                            (0, _.jsx)(Z._V, {
                                className: tf().logo,
                                src: d,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'aria-hidden': !0,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                            }),
                    ],
                });
            };
            var tb = a(44989),
                ty = a.n(tb);
            let tw = (e) => {
                let { data: t } = e,
                    { contentLogo: a, contentImage: i, metaLabel: s, artists: l } = t,
                    r = null == a ? void 0 : a.uri,
                    n = null == i ? void 0 : i.uri,
                    o = (0, es.L)(() =>
                        r || s
                            ? (0, _.jsxs)('div', {
                                  className: ty().header,
                                  children: [
                                      r &&
                                          (0, _.jsx)(Z._V, {
                                              className: ty().headerLogo,
                                              src: r,
                                              fit: 'contain',
                                              size: 'orig',
                                              withAvatarReplace: !0,
                                              withSrcSet: !1,
                                              withFallback: !1,
                                              withLoadingIndicator: !1,
                                              'aria-hidden': !0,
                                              'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                          }),
                                      s &&
                                          (0, _.jsx)(y.DZ, {
                                              className: ty().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: s,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    d = (0, es.L)(() =>
                        l.length
                            ? (0, _.jsx)(tN, {
                                  className: ty().artists,
                                  children: (0, _.jsx)('div', {
                                      className: ty().artistList,
                                      children: l.map((e) =>
                                          (0, _.jsx)(
                                              y.DZ,
                                              {
                                                  className: ty().artist,
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'xs',
                                                  weight: 'bold',
                                                  lineClamp: 2,
                                                  'data-test-id': S.OA.slides.LINEUP_ARTIST,
                                                  children: e,
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                              })
                            : null,
                    );
                return (0, _.jsxs)(_.Fragment, {
                    children: [
                        o,
                        n &&
                            (0, _.jsx)(Z._V, {
                                className: ty().festivalImage,
                                src: n,
                                fit: 'contain',
                                size: 'orig',
                                withAvatarReplace: !0,
                                withSrcSet: !1,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                'data-test-id': S.OA.slides.LINEUP_CONTENT_IMAGE,
                            }),
                        d,
                    ],
                });
            };
            var tj = a(92265),
                tR = a.n(tj);
            let tk = (0, v.PA)((e) => {
                    let { data: t } = e,
                        { eventTagLabel: a, metaLabel: i, contentLogo: s, artists: l } = t,
                        r = (0, h.useRef)(null),
                        n = (0, h.useRef)(null),
                        o = (0, h.useRef)(l),
                        [d, c] = (0, h.useState)(!1),
                        u = ((e, t) => (e < 4 ? 1 : 4 === e || t ? 2 : 3))(l.length, d),
                        m = l.slice(0, u),
                        v = l.slice(u);
                    ((0, h.useLayoutEffect)(() => {
                        o.current !== l && ((o.current = l), c(!1));
                    }, [l]),
                        (0, h.useLayoutEffect)(() => {
                            let e = n.current;
                            3 === u && e && c(e.scrollHeight > e.clientHeight + 1);
                        }, [l, u]),
                        (0, h.useEffect)(() => {
                            let e = r.current;
                            if (!e) return;
                            let t = new ResizeObserver(() => {
                                let e = n.current;
                                c(!!((null == e ? void 0 : e.children.length) === 3 && e.scrollHeight > e.clientHeight + 1));
                            });
                            return (t.observe(e), () => t.disconnect());
                        }, []));
                    let p = (0, es.L)(() =>
                        a || i
                            ? (0, _.jsxs)('div', {
                                  className: tR().header,
                                  children: [
                                      a &&
                                          (0, _.jsx)(y.DZ, {
                                              className: tR().eventTag,
                                              lineClamp: 2,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_EVENT_TAG,
                                              children: a,
                                          }),
                                      i &&
                                          (0, _.jsx)(y.DZ, {
                                              className: tR().metaLabel,
                                              variant: 'span',
                                              type: 'text',
                                              size: 'xxs',
                                              weight: 'bold',
                                              'data-test-id': S.OA.slides.LINEUP_META_LABEL,
                                              children: i,
                                          }),
                                  ],
                              })
                            : null,
                    );
                    return (0, _.jsxs)('div', {
                        className: tR().root,
                        ref: r,
                        children: [
                            p,
                            (0, _.jsxs)(tN, {
                                className: tR().artists,
                                children: [
                                    (0, _.jsx)('div', {
                                        className: tR().highlighted,
                                        ref: n,
                                        children: m.map((e) =>
                                            (0, _.jsx)(
                                                y.DZ,
                                                {
                                                    className: tR().highlightedItem,
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'xl',
                                                    weight: 'bold',
                                                    lineClamp: 3,
                                                    'data-test-id': S.OA.slides.LINEUP_HIGHLIGHTED_ARTIST,
                                                    children: e,
                                                },
                                                e,
                                            ),
                                        ),
                                    }),
                                    v.length > 0 &&
                                        (0, _.jsx)(y.DZ, {
                                            className: tR().restItem,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'xxs',
                                            weight: 'bold',
                                            lineClamp: 4,
                                            'data-test-id': S.OA.slides.LINEUP_REST_ARTISTS,
                                            children: v.join(eX.$$),
                                        }),
                                ],
                            }),
                            (null == s ? void 0 : s.uri) &&
                                (0, _.jsx)(Z._V, {
                                    className: tR().logo,
                                    src: s.uri,
                                    fit: 'contain',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_CONTENT_LOGO,
                                }),
                        ],
                    });
                }),
                tO = (e) => {
                    var t;
                    let { type: a, data: i, isActive: s } = e,
                        l = null == (t = i.contentBackground) ? void 0 : t.uri,
                        r = ((e) => {
                            let { artistTextColor: t, metaLabelTextColor: a, eventTagLabelTextColor: i } = e;
                            if (t || a || i)
                                return {
                                    ...(t && { '--lineup-content-text-color': t }),
                                    ...(a && { '--lineup-content-meta-label-text-color': a }),
                                    ...(i && { '--lineup-content-event-tag-label-text-color': i }),
                                };
                        })(i),
                        n = ((e) => {
                            switch (e) {
                                case tp.y.LINEUP:
                                    return S.OA.slides.LINEUP_SIMPLE_ITEM;
                                case tp.y.LINEUP_WITH_FESTIVAL:
                                    return S.OA.slides.LINEUP_FESTIVAL_ITEM;
                                case tp.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return S.OA.slides.LINEUP_FESTIVAL_IMAGE_ITEM;
                                default:
                                    return;
                            }
                        })(a),
                        o = (0, es.L)(() => {
                            switch (a) {
                                case tp.y.LINEUP:
                                    return (0, _.jsx)(tk, { data: i });
                                case tp.y.LINEUP_WITH_FESTIVAL:
                                    return (0, _.jsx)(tw, { data: i });
                                case tp.y.LINEUP_WITH_FESTIVAL_IMAGE:
                                    return (0, _.jsx)(tE, { data: i });
                                default:
                                    return null;
                            }
                        });
                    return (0, _.jsxs)('div', {
                        className: tg().root,
                        style: r,
                        'data-screenshot-hidden': !s || void 0,
                        'data-test-id': n,
                        children: [
                            l &&
                                (0, _.jsx)(Z._V, {
                                    className: tg().background,
                                    src: l,
                                    fit: 'cover',
                                    size: 'orig',
                                    withAvatarReplace: !0,
                                    withSrcSet: !1,
                                    withFallback: !1,
                                    withLoadingIndicator: !1,
                                    'aria-hidden': !0,
                                    'data-test-id': S.OA.slides.LINEUP_BACKGROUND_IMAGE,
                                }),
                            (0, _.jsx)('div', { className: tg().content, children: o }),
                        ],
                    });
                },
                tP = (0, v.PA)((e) => {
                    let { data: t, carouselIndex: a = 0, onSlideChange: i, onCarouselReady: s, onBackgroundChange: l, onShareBackgroundChange: r } = e,
                        [n, o] = (0, h.useState)(a);
                    ((0, h.useEffect)(() => {
                        var e, i;
                        return null == l ? void 0 : l(null == (i = t.items[a]) || null == (e = i.data.slideBackground) ? void 0 : e.uri);
                    }, [a, t.items, l]),
                        (0, h.useEffect)(() => {
                            var e, i, s;
                            return null == r ? void 0 : r(null != (s = null == (i = t.items[a]) || null == (e = i.data.shareBackground) ? void 0 : e.uri) ? s : '');
                        }, [a, t.items, r]));
                    let d = (0, h.useMemo)(() => {
                            if (void 0 !== n) return t.items[n];
                        }, [n, t.items]),
                        c = (0, h.useCallback)(
                            (e) => {
                                var a, s, n;
                                let d = t.items[e];
                                d &&
                                    (o(e),
                                    null == i || i(e, t.items.length),
                                    null == l || l(null == (a = d.data.slideBackground) ? void 0 : a.uri),
                                    null == r || r(null != (n = null == (s = d.data.shareBackground) ? void 0 : s.uri) ? n : ''));
                            },
                            [t.items, l, r, i],
                        );
                    return t.items.length
                        ? (0, _.jsxs)('div', {
                              className: th().root,
                              'data-test-id': S.OA.slides.LINEUP_CONTENT,
                              children: [
                                  (0, _.jsx)(eJ, {
                                      className: th().carousel,
                                      initialIndex: a,
                                      slideClassName: th().slide,
                                      slideActiveClassName: th().slideActive,
                                      slidesPerView: 'auto',
                                      onCarouselReady: s,
                                      onSlideChange: c,
                                      spaceBetween: 14,
                                      children: t.items.map((e, t) => (0, _.jsx)(tO, { data: e.data, type: e.type, isActive: t === n }, t)),
                                  }),
                                  (0, _.jsx)('div', {
                                      className: th().meta,
                                      'data-screenshot-hidden': !0,
                                      children:
                                          (null == d ? void 0 : d.data.contentDescription) &&
                                          (0, _.jsx)(eO, {
                                              caption: d.data.contentDescription,
                                              className: th().description,
                                              lineClamp: 3,
                                              'data-test-id': S.OA.slides.LINEUP_DESCRIPTION,
                                          }),
                                  }),
                              ],
                          })
                        : null;
                });
            var tB = a(81438),
                tD = a(97916),
                tz = a.n(tD);
            let tM = (0, v.PA)((e) => {
                var t, a, i, s, l, r;
                let { data: n } = e,
                    { lumen: o } = (0, B.g)(),
                    { cover: d } = (0, tB.x)(),
                    c = o.isTriedToLoadData && !o.isAwakened,
                    u = null != (r = null == (t = n.unawakenedLumenImage) ? void 0 : t.uri) ? r : null,
                    m = c ? u : d,
                    v = null == (i = n.query) || null == (a = i.image) ? void 0 : a.uri,
                    h = null == (s = n.query) ? void 0 : s.textColor,
                    p = null == (l = n.query) ? void 0 : l.text,
                    x = h ? { '--query-text-color': h } : void 0,
                    g = (0, es.L)(() =>
                        o.isTriedToLoadData && m
                            ? (0, _.jsx)(G.t, {
                                  className: tz().lumenAvatar,
                                  children: (0, _.jsx)(Z._V, {
                                      src: m,
                                      fit: 'contain',
                                      withAvatarReplace: !0,
                                      withFallback: !1,
                                      withLoadingIndicator: !1,
                                      size: 'orig',
                                      className: tz().lumenAvatarImage,
                                      'aria-hidden': !0,
                                      'data-test-id': S.OA.slides.LUMEN_AVATAR,
                                  }),
                              })
                            : null,
                    ),
                    C = (0, es.L)(() =>
                        v && p
                            ? (0, _.jsxs)('div', {
                                  className: tz().queryWrapper,
                                  style: x,
                                  'data-test-id': S.OA.slides.LUMEN_QUERY,
                                  children: [
                                      v &&
                                          (0, _.jsx)(ed.B, { src: v, withAvatarReplace: !0, withAspectRatio: !0, fit: 'contain', size: 300, className: tz().queryImage }),
                                      p &&
                                          (0, _.jsx)(y.HL, {
                                              variant: 'span',
                                              type: 'text',
                                              size: 'm',
                                              weight: 'medium',
                                              className: tz().queryText,
                                              lineClamp: 2,
                                              'data-test-id': S.OA.slides.LUMEN_QUERY_TEXT,
                                              children: p,
                                          }),
                                  ],
                              })
                            : null,
                    );
                return (0, _.jsxs)('div', {
                    className: tz().root,
                    'data-test-id': S.OA.slides.LUMEN_CONTENT,
                    children: [
                        (0, _.jsx)('div', { className: tz().lumenAvatarArea, children: g }),
                        C,
                        n.title && (0, _.jsx)(e1, { heading: n.title, className: tz().title, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_TITLE }),
                        n.subtitle && (0, _.jsx)(eO, { caption: n.subtitle, className: tz().subtitle, lineClamp: 4, 'data-test-id': S.OA.slides.LUMEN_SUBTITLE }),
                    ],
                });
            });
            var tU = a(92814),
                tV = a.n(tU);
            let tF = (e) => {
                let { data: t } = e;
                return (0, _.jsxs)('div', {
                    className: tV().root,
                    children: [
                        (0, _.jsx)(y.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            className: (0, m.$)(tV().description, tV().text),
                            lineClamp: 3,
                            children: t.description,
                        }),
                        t.artwork && (0, _.jsx)(Z._V, { src: t.artwork, size: 300, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: tV().artwork }),
                        (0, _.jsx)(y.DZ, { variant: 'h2', size: 'xl', weight: 'black', className: (0, m.$)(tV().title, tV().text), lineClamp: 2, children: t.title }),
                    ],
                });
            };
            !(function (e) {
                ((e.REWIND = 'REWIND'), (e.TRACK = 'TRACK'));
            })(c || (c = {}));
            let tH = { src: '/_next/static/media/trailer_animated.aa3fd227.gif' };
            var tG = a(22846),
                tW = a.n(tG);
            let tZ = (0, v.PA)((e) => {
                var t, a;
                let { data: s, withPersonalColor: l } = e,
                    { user: r } = (0, B.g)(),
                    n = s.entityType === c.REWIND,
                    o = null == (t = s.smallRoundCover) ? void 0 : t.uri,
                    d = o && !n,
                    u = n || (o && !d),
                    v = s.align === i.BOTTOM,
                    p = u || d,
                    x = (0, h.useMemo)(() => {
                        if (!l || !r.collectionHue) {
                            var e;
                            return {
                                '--cover-background-color': s.cover.color,
                                '--small-round-cover-background-color': null == (e = s.smallRoundCover) ? void 0 : e.color,
                            };
                        }
                        return {
                            '--cover-background-color': (0, $.e)(r.collectionHue, 0.8, 0.6),
                            '--small-round-cover-background-color': (0, $.e)(r.collectionHue, 1, 0.35),
                        };
                    }, [s.cover.color, null == (a = s.smallRoundCover) ? void 0 : a.color, r.collectionHue, l]),
                    g = (0, es.L)(() =>
                        (0, _.jsx)(G.t, {
                            radius: 'round',
                            className: tW().smallRoundCover,
                            children: (0, _.jsx)(Z._V, {
                                src: tH.src,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                                fit: 'contain',
                                className: tW().trailer,
                                'aria-hidden': !0,
                            }),
                        }),
                    ),
                    C = (0, es.L)(() => {
                        if (o)
                            return (0, _.jsx)(G.t, {
                                radius: 'round',
                                className: (0, m.$)(tW().smallRoundCover, tW().smallRoundCover_withShadow),
                                children: (0, _.jsx)(ed.B, { src: o, withAvatarReplace: !0, fit: 'contain', size: 100, className: tW().image }),
                            });
                    }),
                    T = (0, es.L)(() => (u ? (n ? g : C) : null));
                return (0, _.jsxs)('div', {
                    className: tW().root,
                    style: x,
                    'data-test-id': S.OA.slides.SINGLE_ENTITY_CONTENT,
                    children: [
                        !v &&
                            s.description &&
                            (0, _.jsx)(eO, { caption: s.description, className: tW().description, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_DESCRIPTION }),
                        (0, _.jsxs)(G.t, {
                            className: (0, m.$)(tW().cover, { [tW().cover_small]: v, [tW().cover_withSmallRoundCoverOnCover]: d }),
                            'data-test-id': S.OA.slides.SINGLE_ENTITY_COVER,
                            children: [
                                s.cover.uri &&
                                    (0, _.jsx)(eq, {
                                        backgroundSrc: s.coverBackground,
                                        className: tW().image,
                                        fit: 'contain',
                                        maskSrc: s.coverMask,
                                        size: eX.e0,
                                        src: s.cover.uri,
                                        withAvatarReplace: !0,
                                        withSrcSet: !1,
                                    }),
                                d && C,
                            ],
                        }),
                        (0, _.jsxs)('div', {
                            className: (0, m.$)(tW().meta, { [tW().meta_withCover]: p }),
                            children: [
                                T,
                                s.subtitle &&
                                    (0, _.jsx)(eO, { caption: s.subtitle, className: tW().subtitle, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_SUBTITLE }),
                                s.title && (0, _.jsx)(e1, { heading: s.title, lineClamp: 3, 'data-test-id': S.OA.slides.SINGLE_ENTITY_TITLE }),
                                v &&
                                    s.description &&
                                    (0, _.jsx)(eO, {
                                        caption: s.description,
                                        className: tW().description,
                                        lineClamp: 3,
                                        'data-test-id': S.OA.slides.SINGLE_ENTITY_DESCRIPTION,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var t$ = a(14828),
                tq = a.n(t$);
            let tX = (e) => {
                var t, a;
                let { data: i } = e;
                return (0, _.jsxs)('div', {
                    className: tq().root,
                    'data-test-id': S.OA.slides.STATS_CONTENT,
                    children: [
                        (0, _.jsx)(eO, { caption: null != (t = i.header) ? t : '', className: tq().text, lineClamp: 3, 'data-test-id': S.OA.slides.STATS_HEADER }),
                        i.stats.map((e) =>
                            (0, _.jsx)(eD, { data: e, descriptionLineClamp: 2, withAutoResize: !0, withOpacity: !0 }, ''.concat(e.value, '-').concat(e.valueDescription)),
                        ),
                        (0, _.jsx)(eO, { caption: null != (a = i.footer) ? a : '', className: tq().text, lineClamp: 3, 'data-test-id': S.OA.slides.STATS_FOOTER }),
                    ],
                });
            };
            !(function (e) {
                ((e.SMALL = 'SMALL'), (e.BIG = 'BIG'));
            })(u || (u = {}));
            var tK = a(6158),
                tY = a.n(tK);
            let tJ = (e) => {
                var t;
                let { data: a, disclaimer: i } = e,
                    s = a.titleSize === u.BIG ? 'xxl' : 'xl',
                    l = (0, es.L)(() => {
                        if (null == i ? void 0 : i.textColor) return { '--disclaimer-text-color': i.textColor };
                    });
                return (0, _.jsxs)('div', {
                    className: tY().root,
                    style: l,
                    'data-test-id': S.OA.slides.TEXT_CONTENT,
                    children: [
                        (0, _.jsx)(y.DZ, {
                            variant: 'h2',
                            size: s,
                            weight: 'black',
                            className: tY().text,
                            lineClamp: 4,
                            'data-test-id': S.OA.slides.TEXT_TITLE,
                            children: a.title,
                        }),
                        (0, _.jsx)(eO, { caption: null != (t = a.subtitle) ? t : '', className: tY().text, lineClamp: 4, 'data-test-id': S.OA.slides.TEXT_SUBTITLE }),
                        (null == i ? void 0 : i.text) &&
                            (0, _.jsx)('span', {
                                className: tY().disclaimer,
                                dangerouslySetInnerHTML: { __html: (0, C.ky)(i.text) },
                                'data-test-id': S.OA.slides.TEXT_DISCLAIMER,
                            }),
                    ],
                });
            };
            var tQ = a(93686),
                t0 = a.n(tQ);
            let t1 = (e) => {
                let {
                    data: { title: t, subtitle: a, description: i },
                } = e;
                return (0, _.jsxs)('div', {
                    className: t0().root,
                    children: [
                        (0, _.jsx)(y.DZ, {
                            variant: 'h2',
                            size: 'xxxl',
                            weight: 'black',
                            className: (0, m.$)(t0().text, t0().header),
                            dangerouslySetInnerHTML: { __html: (0, C.ky)(t || '') },
                        }),
                        (0, _.jsx)(y.DZ, { variant: 'h3', size: 'xl', weight: 'black', className: t0().text, dangerouslySetInnerHTML: { __html: (0, C.ky)(a || '') } }),
                        i &&
                            (0, _.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: t0().text,
                                dangerouslySetInnerHTML: { __html: (0, C.ky)(i) },
                            }),
                    ],
                });
            };
            var t8 = a(84930),
                t2 = a.n(t8);
            let t4 = (e) => {
                let { data: t } = e,
                    a = t.coverType === l.CIRCLE ? 'round' : 'xs';
                return (0, _.jsxs)('div', {
                    className: t2().root,
                    'data-test-id': S.OA.slides.TEXT_FACT_CONTENT,
                    children: [
                        t.smallCover &&
                            (0, _.jsx)(G.t, {
                                radius: a,
                                className: t2().cover,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER,
                                children: (0, _.jsx)(ed.B, { src: t.smallCover, withAvatarReplace: !0, fit: 'contain', size: 100, className: t2().image }),
                            }),
                        t.coverTitle &&
                            (0, _.jsx)(y.DZ, {
                                variant: 'span',
                                weight: 'bold',
                                size: 'l',
                                className: t2().text,
                                lineClamp: 4,
                                'data-test-id': S.OA.slides.TEXT_FACT_COVER_TITLE,
                                children: t.coverTitle,
                            }),
                        (0, _.jsx)(eD, { data: t, withAutoResize: !0, lineClamp: 4 }),
                    ],
                });
            };
            var t9 = a(9326),
                t5 = a.n(t9);
            let t3 = (e) => {
                    let { label: t, description: a, artistsName: i, trackTitle: s, coverUri: l } = e,
                        r = [i, s].filter(Boolean).join(' • ');
                    return (0, _.jsxs)('div', {
                        children: [
                            (0, _.jsx)(y.DZ, { className: (0, m.$)(t5().textSecondary, t5().itemLabel), variant: 'h3', size: 's', weight: 'black', children: t }),
                            (0, _.jsx)(Z._V, {
                                className: t5().cover,
                                src: l,
                                fit: 'cover',
                                withLoadingIndicator: !1,
                                withFallback: !0,
                                withAvatarReplace: !0,
                                withAspectRatio: !0,
                                'aria-hidden': !0,
                            }),
                            (0, _.jsx)(y.HL, {
                                className: (0, m.$)(t5().textPrimary, t5().itemMeta),
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                lineClamp: 2,
                                children: r,
                            }),
                            (0, _.jsx)(y.DZ, { className: (0, m.$)(t5().textSecondary, t5().header), variant: 'h3', size: 'xl', weight: 'black', children: a }),
                        ],
                    });
                },
                t6 = (0, v.PA)((e) => {
                    var t, a, i, s, l, r, n, o, d, c, u, v;
                    let { data: h } = e,
                        { title: p, subtitle: x, firstItem: g, secondItem: C } = h;
                    return (0, _.jsxs)('div', {
                        className: t5().root,
                        children: [
                            (0, _.jsxs)('div', {
                                className: t5().row,
                                children: [
                                    (0, _.jsx)(y.DZ, { className: (0, m.$)(t5().textPrimary, t5().header), variant: 'h2', size: 'xxxl', weight: 'black', children: p }),
                                    (0, _.jsx)(y.DZ, { className: t5().textPrimary, variant: 'h3', size: 's', weight: 'black', children: x }),
                                ],
                            }),
                            g &&
                                (0, _.jsx)('div', {
                                    className: t5().row,
                                    children: (0, _.jsx)(t3, {
                                        label: g.label,
                                        description: g.description,
                                        artistsName: null != (n = null == (t = g.track) ? void 0 : t.artistsName) ? n : null,
                                        trackTitle: null != (o = null == (a = g.track) ? void 0 : a.title) ? o : null,
                                        coverUri: null != (d = null == (i = g.track) ? void 0 : i.coverUri) ? d : void 0,
                                    }),
                                }),
                            C &&
                                (0, _.jsx)('div', {
                                    className: t5().row,
                                    children: (0, _.jsx)(t3, {
                                        label: C.label,
                                        description: C.description,
                                        artistsName: null != (c = null == (s = C.track) ? void 0 : s.artistsName) ? c : null,
                                        trackTitle: null != (u = null == (l = C.track) ? void 0 : l.title) ? u : null,
                                        coverUri: null != (v = null == (r = C.track) ? void 0 : r.coverUri) ? v : void 0,
                                    }),
                                }),
                        ],
                    });
                }),
                t7 = (e) => {
                    let { content: t, withPersonalColor: a, ...i } = e;
                    if (null == t ? void 0 : t.data)
                        switch (t.type) {
                            case N.x.TEXT:
                                return (0, _.jsx)(tJ, { data: t.data, disclaimer: t.disclaimer });
                            case N.x.STATS:
                                return (0, _.jsx)(tX, { data: t.data });
                            case N.x.CHART:
                                return (0, _.jsx)(tn, { data: t.data });
                            case N.x.CHART_FAVORITES:
                                return (0, _.jsx)(tc, { data: t.data });
                            case N.x.SINGLE_ENTITY:
                                return (0, _.jsx)(tZ, { data: t.data, withPersonalColor: a });
                            case N.x.TEXT_FACT:
                                return (0, _.jsx)(t4, { data: t.data });
                            case N.x.CHART_ARTIST:
                                return (0, _.jsx)(ts, { data: t.data });
                            case N.x.ARTISTS:
                                return (0, _.jsx)(eU, { data: t.data });
                            case N.x.TEXT_EXTENDED:
                                return (0, _.jsx)(t1, { data: t.data });
                            case N.x.THEN_NOW_COMPARISON:
                                return (0, _.jsx)(t6, { data: t.data });
                            case N.x.PAY_CARD:
                                return (0, _.jsx)(tF, { data: t.data });
                            case N.x.CAROUSEL:
                                return (0, _.jsx)(e4, { data: t.data, ...i });
                            case N.x.COLLAGE:
                                return (0, _.jsx)(tm, { data: t.data, onBackgroundChange: i.onBackgroundChange, ...i });
                            case N.x.LINEUP:
                                return (0, _.jsx)(tP, { data: t.data, ...i });
                            case N.x.LUMEN:
                                return (0, _.jsx)(tM, { data: t.data });
                        }
                    return null;
                };
            var ae = a(45507),
                at = a.n(ae);
            let aa = (e) => {
                let { src: t, className: a, 'data-test-id': i } = e;
                return (0, _.jsx)(Z._V, {
                    className: (0, m.$)(at().root, a),
                    fit: 'contain',
                    src: t,
                    size: 'orig',
                    withAvatarReplace: !0,
                    alt: '',
                    'aria-hidden': !0,
                    withLoadingIndicator: !1,
                    'data-test-id': i,
                });
            };
            var ai = a(3259),
                as = a.n(ai);
            let al = !0,
                ar = (0, v.PA)((e) => {
                    var t, a;
                    let { slide: s, isActive: l } = e,
                        {
                            slides: { savedChoice: r, saveChoice: n, isMuted: o },
                        } = (0, B.g)(),
                        d = (0, W.D)(),
                        { carouselIndex: c = 0, setCarouselIndex: u } = s,
                        v = (0, h.useRef)(null),
                        [p, x] = (0, h.useState)(void 0),
                        [g, C] = (0, h.useState)(0),
                        [I, A] = (0, h.useState)(s.background),
                        [f, E] = (0, h.useState)(''),
                        { state: b, toggleTrue: y, toggleFalse: w } = (0, P.e)(!1),
                        j = (0, h.useMemo)(() => {
                            let e = s.content;
                            if ((null == e ? void 0 : e.data) && 'align' in e.data) {
                                var t;
                                switch (null == (t = e.data) ? void 0 : t.align) {
                                    case i.TOP:
                                        return 'top';
                                    case i.CENTER:
                                        break;
                                    case i.BOTTOM:
                                        return 'bottom';
                                }
                            }
                            return 'center';
                        }, [s]);
                    ((0, h.useEffect)(() => {
                        var e, t, a, i, l, r;
                        ((null == (e = s.content) ? void 0 : e.type) === N.x.CAROUSEL ||
                            (null == (t = s.content) ? void 0 : t.type) === N.x.COLLAGE ||
                            (null == (a = s.content) ? void 0 : a.type) === N.x.LINEUP) &&
                            C(null != (r = null == (l = s.content.data) || null == (i = l.items) ? void 0 : i.length) ? r : 0);
                    }, [s.content]),
                        (0, h.useEffect)(() => {
                            (o || (al = !0), o && al && (d({ actionType: T.ActionType.MuteTrailer, userInteractionType: T.UserInteractionType.Tap }), (al = !1)));
                        }, [o, d]));
                    let R = (0, L.c)((e) => x(e)),
                        k = (0, L.c)(() => (null == p ? void 0 : p.slidePrev())),
                        O = (0, L.c)(() => (null == p ? void 0 : p.slideNext())),
                        D = (0, L.c)(() => {
                            r && s.savedChoiceKey && n(s.savedChoiceKey, { ...r, isSaved: !1 });
                        }),
                        z = (0, L.c)(() => {
                            var e, t, a, i, l;
                            if (!s.savedChoiceKey || (null == (e = s.content) ? void 0 : e.type) !== N.x.CAROUSEL) return;
                            let r = null == (i = s.content.data) || null == (a = i.items) || null == (t = a[c]) ? void 0 : t.data;
                            if (!r) return;
                            d({ actionType: T.ActionType.SelectSlideItem, userInteractionType: T.UserInteractionType.Tap });
                            let { coverMask: o, coverBackground: u, title: _, cover: m } = r;
                            n(s.savedChoiceKey, { data: { coverMask: o, coverBackground: u, text: _, uri: null != (l = m.uri) ? l : void 0 }, index: c, isSaved: !0 });
                        }),
                        M = (0, L.c)((e, t) => {
                            (u(e), C(t));
                        }),
                        U = (0, L.c)((e) => {
                            A({ ...s.background, ...(e && { bgImageUrl: e }) });
                        }),
                        V = (0, L.c)((e) => E(e));
                    return (0, _.jsx)('div', {
                        className: (0, m.$)(as().root, {
                            [as().wideContent]: (null == (t = s.content) ? void 0 : t.type) === N.x.COLLAGE || (null == (a = s.content) ? void 0 : a.type) === N.x.LINEUP,
                        }),
                        ref: v,
                        'data-test-id': S.OA.slides.SLIDE_CARD,
                        children: (0, _.jsxs)(et, {
                            isActive: l,
                            isContentVisible: b,
                            setContentVisible: y,
                            setContentInvisible: w,
                            background: I,
                            shareBackground: f,
                            className: as().background,
                            'data-test-id': S.OA.slides.SLIDE_BACKGROUND,
                            children: [
                                (s.logo || s.promoLogo) &&
                                    (0, _.jsxs)('div', {
                                        className: as().logoContainer,
                                        children: [
                                            s.logo && (0, _.jsx)(aa, { src: s.logo, className: as().logo, 'data-test-id': S.OA.slides.SLIDE_LOGO }),
                                            s.promoLogo && (0, _.jsx)(aa, { src: s.promoLogo, 'data-test-id': S.OA.slides.SLIDE_PROMO_LOGO }),
                                        ],
                                    }),
                                s.content &&
                                    b &&
                                    (0, _.jsx)('div', {
                                        className: (0, m.$)(as().content, as()['content_align_'.concat(j)], { [as().playAnimation]: b }),
                                        children: (0, _.jsx)(t7, {
                                            carouselIndex: c,
                                            content: s.content,
                                            withPersonalColor: s.background.withPersonalColor,
                                            onCarouselReady: R,
                                            onSlideChange: M,
                                            onBackgroundChange: U,
                                            onShareBackgroundChange: V,
                                        }),
                                    }),
                                (0, _.jsx)('div', {
                                    'data-screenshot-hidden': !0,
                                    className: as().buttonsContainer,
                                    children: (0, _.jsx)(ey, {
                                        cardRef: v,
                                        className: as().button,
                                        slide: s,
                                        onEditChoice: D,
                                        onSaveChoice: z,
                                        onSlidePrev: k,
                                        onSlideNext: O,
                                        hasLeft: c > 0,
                                        hasRight: c < g - 1,
                                    }),
                                }),
                            ],
                        }),
                    });
                });
            var an = a(64284),
                ao = a(98427),
                ad = a(84384),
                ac = a(81892),
                au = a.n(ac);
            let a_ = (e) => {
                var t;
                let { slide: a, isVisible: i } = e,
                    s = (0, U.D)(),
                    l = (0, Y.e)(),
                    { from: r } = (0, ad.f)({ pageId: ao.b.TRAILER_OF_THE_YEAR, blockId: an.U.DEFAULT }),
                    n = (0, V.g)(),
                    { isActive: o } = (0, R.JO)(),
                    d = null == l ? void 0 : l.getState(K.V.TRAILER).queueState.entityList.value,
                    c = (0, h.useMemo)(
                        () =>
                            a.entitiesData &&
                            d &&
                            a.entitiesData.every((e, t) => {
                                var a;
                                return e.meta.id === (null == (a = d[t]) ? void 0 : a.entity.data.meta.id);
                            }),
                        [a.entitiesData, d],
                    ),
                    u = i && a.hasTrailer && (!c || (null == l ? void 0 : l.getState(K.V.TRAILER).playerState.status.value) !== w.MT.PLAYING),
                    v = u && (null == l || null == (t = l.getState(K.V.TRAILER).currentContext.value) ? void 0 : t.data.meta.id) === a.id;
                return (
                    (0, h.useEffect)(() => {
                        if (v)
                            return void l.restartContext({ playAfterRestart: !0, queueParams: { index: 0 }, entitiesData: a.entitiesData }, K.V.TRAILER).then(() => {
                                n();
                            });
                        u &&
                            (null == l ||
                                l
                                    .playContext(
                                        {
                                            contextData: { type: F.K.Various, overrideContextType: H.b.Other, trailer: !0, meta: { id: a.id }, from: r },
                                            queueParams: { index: 0 },
                                            entitiesData: a.entitiesData,
                                            loadContextMeta: !1,
                                        },
                                        K.V.TRAILER,
                                    )
                                    .then(() => {
                                        n();
                                    }));
                    }, [r, n, u, v, a.entitiesData, a.id, l]),
                    (0, _.jsx)(G.t, {
                        className: (0, m.$)(au().root, { [au().root_isActive]: o }),
                        radius: 'l',
                        tabIndex: 0,
                        ref: s,
                        children: (0, _.jsx)(ar, { slide: a, isActive: o }),
                    })
                );
            };
            var am = a(55988),
                av = a.n(am);
            let ah = (0, v.PA)((e) => {
                let { items: t } = e,
                    {
                        settings: { isMobile: a },
                        slides: i,
                    } = (0, B.g)(),
                    { formatMessage: s } = (0, p.A)(),
                    { state: l, toggleTrue: r } = (0, P.e)(!1),
                    n = (0, R.Mn)();
                (0, k.W)({ enabled: i.isLoaded });
                let [o, d] = (0, h.useState)(!0),
                    [c, u] = (0, h.useState)(!1);
                (0, h.useEffect)(
                    () => (
                        r(),
                        () => {
                            (null == n || n.slideTo(0), i.setActiveSlide(0));
                        }
                    ),
                    [r, n, i],
                );
                let v = (0, h.useCallback)(
                    (e) => {
                        (d(e.isBeginning), u(e.isEnd), i.setActiveSlide(e.activeIndex));
                    },
                    [i],
                );
                return (0, _.jsx)('div', {
                    className: (0, m.$)(av().root, { [av().root_visible]: l }),
                    'data-test-id': S.e8.slider.SLIDES_SLIDER,
                    children: (0, _.jsxs)(R.RC, {
                        direction: 'vertical',
                        centeredSlides: !a,
                        slidesPerView: 'auto',
                        spaceBetween: 16,
                        className: av().container,
                        keyboard: { enabled: !0 },
                        modules: [j.s3, j.Jq, j.FJ],
                        onActiveIndexChange: v,
                        a11y: { enabled: !0, containerMessage: s({ id: 'page.results-of-the-year' }) },
                        mousewheel: { thresholdDelta: 30, thresholdTime: 500 },
                        children: [
                            t.map((e, t) => {
                                var a, s;
                                return (0, _.jsx)(
                                    R.qr,
                                    {
                                        children: (0, _.jsx)(O.B, {
                                            objectType: T.DomainObjectType.SlideContent,
                                            objectId: ((e, t) => {
                                                var a, i, s, l, r, n, o, d, c, u, _, m, v, h, p, x;
                                                if (!e) return '';
                                                switch (e.type) {
                                                    case N.x.CHART:
                                                    case N.x.CHART_FAVORITES:
                                                        return null != (i = null == (a = e.data) ? void 0 : a.description) ? i : '';
                                                    case N.x.CAROUSEL:
                                                        return null != (r = null == (l = e.data) || null == (s = l.items[t]) ? void 0 : s.data.title) ? r : '';
                                                    case N.x.COLLAGE:
                                                        return null !=
                                                            (d = null == (o = e.data.items[t]) || null == (n = o.bottomBlock.data.items[0]) ? void 0 : n.data.title)
                                                            ? d
                                                            : '';
                                                    case N.x.LINEUP:
                                                        return null != (u = null == (c = e.data.items[t]) ? void 0 : c.data.contentDescription) ? u : '';
                                                    case N.x.STATS:
                                                        return null != (m = null == (_ = e.data) ? void 0 : _.header) ? m : '';
                                                    case N.x.LUMEN:
                                                        return null != (h = null == (v = e.data.query) ? void 0 : v.text) ? h : '';
                                                    case N.x.CHART_ARTIST:
                                                    case N.x.TEXT_EXTENDED:
                                                    case N.x.PAY_CARD:
                                                    case N.x.SINGLE_ENTITY:
                                                    case N.x.TEXT:
                                                    case N.x.THEN_NOW_COMPARISON:
                                                        return null != (x = null == (p = e.data) ? void 0 : p.title) ? x : '';
                                                    default:
                                                        return '';
                                                }
                                            })(e.content, null != (a = e.carouselIndex) ? a : 0),
                                            objectPosX: (null != (s = e.carouselIndex) ? s : 0) + 1,
                                            objectPosY: 1,
                                            children: (0, _.jsx)(a_, { isVisible: i.activeSlide === t, slide: e }),
                                        }),
                                    },
                                    e.id,
                                );
                            }),
                            (0, _.jsx)(M, { isFirstSlide: o, isLastSlide: c }),
                        ],
                    }),
                });
            });
            var ap = a(50355),
                ax = a(47149),
                ag = a(84423),
                aC = a(89846);
            let aT = (0, a(63582).n)({ event: 'Screen.Opened/Closed', kind: 'hook', requiredScopes: [] }, (e) => {
                var t;
                let a = null == (t = (0, ag.s)()) ? void 0 : t.evgenInstance,
                    { hash: i } = (0, aC.g)();
                return (0, L.c)((t) => {
                    if (!a || void 0 === i) return;
                    let s = { hash: i, pageId: T.AppScreen.SlidesScreen, mainObjectType: T.DomainObjectType.Slide, mainObjectId: e };
                    Object.values(s).some((e) => void 0 === e) || (t ? (0, ax.w5)(a, s) : (0, ax.XB)(a, s));
                });
            });
            var aI = a(46777),
                aA = a(4370),
                aS = a(95210),
                aN = a(97956),
                aL = a(74773),
                af = a(70400),
                aE = a.n(af);
            function ab(e, t) {
                return (e === aL.G.RESOLVE || e === aL.G.REJECT) && 0 === t.length;
            }
            let ay = (0, v.PA)((e) => {
                var t;
                let { slidesConsumer: a, artistId: i, podcastId: s, campaignId: l } = e,
                    { formatMessage: r } = (0, p.A)(),
                    { slides: n, experiments: o, sonataState: d, settings: c, lumen: u } = (0, B.g)(),
                    v = (0, Y.e)(),
                    j = o.checkExperiment(aN.z.WebNextSlidesPage, 'on'),
                    R = !(null == (t = c.browserInfo) ? void 0 : t.isMobile) || !c.browserInfo.isTouch,
                    k = null == v ? void 0 : v.getState(K.V.TRAILER),
                    O = (0, h.useRef)(1),
                    P = (0, L.c)((e) => {
                        null == v || v.setExponentVolume(e, K.V.TRAILER);
                    }),
                    D = (0, L.c)(() => {
                        null == v || v.pause(K.V.TRAILER);
                    });
                (0, h.useEffect)(() => {
                    (P(1), n.setIsMuted(!1));
                }, [P, n, v]);
                let { canBack: z, moveBack: M } = (0, aI.J)(aA.Z.main.href),
                    U = (0, eS.Z)(aA.Z.main.href);
                ((0, h.useEffect)(
                    () => () => {
                        (n.resetUser(), n.resetArtist(), n.resetPodcast(), n.resetSpecial(), n.resetKids(), D());
                    },
                    [D, n],
                ),
                    j || (0, g.notFound)());
                let V = aT(n.mainObjectId);
                (0, h.useEffect)(
                    () => (
                        V(!0),
                        () => {
                            V(!1);
                        }
                    ),
                    [V],
                );
                let F = (0, h.useMemo)(() => {
                        switch (a) {
                            case ap.z.USER:
                                return n.userItems;
                            case ap.z.ARTIST:
                                return n.artistItems;
                            case ap.z.PODCAST:
                                return n.podcastItems;
                            case ap.z.SPECIAL:
                                return n.specialItems;
                            case ap.z.KIDS:
                                return n.kidsItems;
                        }
                    }, [n.artistItems, n.kidsItems, n.podcastItems, n.specialItems, n.userItems, a]),
                    H = F.some((e) => e.background.withSound || e.hasTrailer),
                    G = F.some((e) => {
                        var t;
                        return (null == (t = e.content) ? void 0 : t.type) === N.x.LUMEN;
                    });
                ((0, h.useEffect)(() => {
                    u.isEnabled && u.isNeededToLoad && G && u.getData();
                }, [u, u.isEnabled, u.isNeededToLoad, G]),
                    (0, h.useEffect)(() => {
                        H && d.status === w.MT.PLAYING && (null == v || v.togglePause());
                    }, [H, v, d.status]),
                    (0, h.useEffect)(() => {
                        if (j)
                            switch (a) {
                                case ap.z.USER:
                                    ab(n.userSlidesLoadingState, F) && (0, g.notFound)();
                                    break;
                                case ap.z.ARTIST:
                                    ab(n.artistSlidesLoadingState, F) && (0, g.notFound)();
                                    break;
                                case ap.z.PODCAST:
                                    ab(n.podcastSlidesLoadingState, F) && (0, g.notFound)();
                                    break;
                                case ap.z.SPECIAL:
                                    ab(n.specialSlidesLoadingState, F) && (0, g.notFound)();
                                    break;
                                case ap.z.KIDS:
                                    ab(n.kidsSlidesLoadingState, F) && (0, g.notFound)();
                            }
                        else (0, g.notFound)();
                    }, [
                        o,
                        j,
                        F,
                        F.length,
                        n.artistSlidesLoadingState,
                        n.podcastSlidesLoadingState,
                        n.userSlidesLoadingState,
                        n.specialSlidesLoadingState,
                        a,
                        n.kidsSlidesLoadingState,
                    ]),
                    (0, aS.N)(!0));
                let W = (0, h.useMemo)(() => {
                        var e;
                        let t,
                            a = null == (e = F[n.activeSlide]) ? void 0 : e.slideColor;
                        if (a) {
                            let { r: e, g: i, b: s } = (0, C.E2)(a);
                            t = 'rgba('.concat(e, ', ').concat(i, ', ').concat(s, ', 0.5)');
                        }
                        return { '--card-color-enabled_variant': a, '--card-color-enabled': t, '--logo-color': a };
                    }, [F, F.length, n.activeSlide]),
                    Z = (0, h.useCallback)(() => {
                        let e = null == k ? void 0 : k.playerState.exponentVolume.value;
                        void 0 !== e && (n.toggleMute(), 0 !== e ? ((O.current = e), P(0)) : P(O.current));
                    }, [P, n, null == k ? void 0 : k.playerState.exponentVolume.value]),
                    $ = (0, L.c)(() => {
                        z ? M() : U();
                    }),
                    q = n.isMuted ? 'volumeOff' : 'volume',
                    X = r(n.isMuted ? { id: 'player-actions.volume-off' } : { id: 'player-actions.volume-on' });
                switch (a) {
                    case ap.z.USER:
                        n.userSlidesLoadingState === aL.G.IDLE && (0, h.use)(n.getUserSlides());
                        break;
                    case ap.z.ARTIST:
                        i && n.artistSlidesLoadingState === aL.G.IDLE && (0, h.use)(n.getArtistSlides({ artistId: i }));
                        break;
                    case ap.z.PODCAST:
                        s && n.podcastSlidesLoadingState === aL.G.IDLE && (0, h.use)(n.getPodcastSlides({ podcastId: Number(s) }));
                        break;
                    case ap.z.SPECIAL:
                        l && n.specialSlidesLoadingState === aL.G.IDLE && (0, h.use)(n.getSpecialSlides({ campaignId: l }));
                        break;
                    case ap.z.KIDS:
                        n.kidsSlidesLoadingState === aL.G.IDLE && (0, h.use)(n.getKidsSlides());
                }
                return (0, _.jsx)(I.a, {
                    pageId: T.AppScreen.SlidesScreen,
                    pageIdForFrom: ao.b.SLIDES_SCREEN,
                    mainObjectId: n.mainObjectId,
                    mainObjectType: T.DomainObjectType.Slide,
                    children: (0, _.jsxs)('div', {
                        className: aE().root,
                        style: W,
                        'data-test-id': S.Xk.slides.SLIDES_PAGE,
                        children: [
                            (0, _.jsx)(b.q, { children: (0, _.jsx)(y.DZ, { variant: 'h1', children: (0, _.jsx)(x.A, { id: 'page.results-of-the-year' }) }) }),
                            (0, _.jsxs)('header', {
                                className: aE().header,
                                'data-test-id': S.Xk.slides.SLIDES_HEADER,
                                children: [
                                    (null == F ? void 0 : F.length) > 0 &&
                                        (0, _.jsxs)('div', {
                                            className: aE().slidesResult,
                                            'data-test-id': S.Xk.slides.SLIDES_COUNTER,
                                            children: [
                                                (0, _.jsx)(y.HL, {
                                                    variant: 'span',
                                                    className: aE().counterActiveItem,
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': S.Xk.slides.SLIDES_COUNTER_CURRENT,
                                                    children: Number(n.activeSlide) + 1,
                                                }),
                                                (0, _.jsx)(y.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: aE().counterItem,
                                                    children: '/',
                                                }),
                                                (0, _.jsx)(y.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: aE().counterItem,
                                                    'data-test-id': S.Xk.slides.SLIDES_COUNTER_TOTAL,
                                                    children: null == F ? void 0 : F.length,
                                                }),
                                            ],
                                        }),
                                    R &&
                                        H &&
                                        (0, _.jsx)(f.$, {
                                            'aria-label': X,
                                            variant: 'text',
                                            radius: 'round',
                                            size: 'xxxs',
                                            icon: (0, _.jsx)(E.I, { size: 'xs', className: aE().icon, variant: q }),
                                            onClick: Z,
                                            className: (0, m.$)(aE().button, aE().volumeButton),
                                            withRipple: !1,
                                            'data-test-id': S.Xk.slides.SLIDES_VOLUME_BUTTON,
                                        }),
                                    (0, _.jsx)(f.$, {
                                        'aria-label': r({ id: 'navigation.go-back' }),
                                        radius: 'round',
                                        size: 'xs',
                                        icon: (0, _.jsx)(E.I, { size: 'xs', variant: 'close' }, 'handleBackIcon'),
                                        onClick: $,
                                        className: (0, m.$)(aE().button, aE().desktopBackButton),
                                        role: 'link',
                                        'data-test-id': S.Xk.slides.SLIDES_CLOSE_BUTTON,
                                    }),
                                    (0, _.jsx)(f.$, {
                                        variant: 'text',
                                        'aria-label': r({ id: 'navigation.go-back' }),
                                        radius: 'round',
                                        size: 'xs',
                                        icon: (0, _.jsx)(E.I, { size: 'xs', variant: 'arrowLeft' }, 'handleBackIcon'),
                                        onClick: $,
                                        className: (0, m.$)(aE().button, aE().mobileBackButton),
                                        role: 'link',
                                        'data-test-id': S.Xk.slides.SLIDES_BACK_BUTTON,
                                    }),
                                ],
                            }),
                            (0, _.jsx)(A.F, {
                                blockType: T.DomainObjectType.Slide,
                                blockId: n.mainObjectId,
                                blockPosX: 1,
                                blockPosY: 1,
                                objectsCount: F.length,
                                children: (0, _.jsx)(ah, { items: F }),
                            }),
                        ],
                    }),
                });
            });
        },
        70400: (e) => {
            e.exports = {
                root: 'SlidesPage_root__URM_B',
                header: 'SlidesPage_header__pnBx9',
                slidesResult: 'SlidesPage_slidesResult__neqIE',
                counterActiveItem: 'SlidesPage_counterActiveItem__Y_K9I',
                counterItem: 'SlidesPage_counterItem__3CqZW',
                button: 'SlidesPage_button__s9V8y',
                volumeButton: 'SlidesPage_volumeButton__HfFCM',
                desktopBackButton: 'SlidesPage_desktopBackButton__ae1Uj',
                mobileBackButton: 'SlidesPage_mobileBackButton__MwOgB',
            };
        },
        72863: (e) => {
            e.exports = {
                root: 'ChartBlock_root__GQF6w',
                root_spacer_m: 'ChartBlock_root_spacer_m__yVzU8',
                root_spacer_l: 'ChartBlock_root_spacer_l__wBImk',
                root_spacer_xxl: 'ChartBlock_root_spacer_xxl__cSNqe',
            };
        },
        73171: (e, t, a) => {
            'use strict';
            a.d(t, { mf: () => o });
            var i,
                s = a(53548),
                l = {
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                r = {},
                n = {};
            ((() => {
                (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useDynamicText = n.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var a = r[t];
                        if (void 0 !== a) return a.exports;
                        var i = (r[t] = { exports: {} });
                        return (l[t](i, i.exports, e), i.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    a = (e, t, a, i, s, l) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(i, 'px')), e.style.setProperty('--dynamic-line-height', String(s)));
                        let r = 'number' == typeof l ? e.scrollHeight <= Math.min(l * i * s, a) + 1 : e.scrollHeight <= a + 1,
                            n = e.scrollWidth <= t + 1;
                        return r && n;
                    },
                    i = (e) => {
                        let { container: i, containerWidth: s, containerHeight: l, minFontSize: r, maxFontSize: n, lineHeight: o, maxLines: d, styleVariants: c } = e,
                            u = ((e, a, i) => {
                                let s = e.cloneNode(!0);
                                return (
                                    (s.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            a,
                                            'px !important;\n    ',
                                        )),
                                    t(s),
                                    s.style.setProperty('--dynamic-line-height', String(i)),
                                    document.body.appendChild(s),
                                    s
                                );
                            })(i, s, o);
                        try {
                            if (null == c ? void 0 : c.length) {
                                var _;
                                let e = [...c].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (_ = e[e.length - 1]) ? _ : { fontSize: r, lineHeight: o };
                                for (let t of e) if (a(u, s, l, t.fontSize, t.lineHeight, d)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = r,
                                t = n,
                                i = null;
                            for (; e <= t;) {
                                let r = Math.floor((e + t) / 2);
                                a(u, s, l, r, o, d) ? ((i = r), (e = r + 1)) : (t = r - 1);
                            }
                            if (null === i) return { fontSize: r, lineHeight: o, fits: !1 };
                            return { fontSize: Math.max(r, i - 1), lineHeight: o, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((n.findOptimalFontSize = (e) => i(e).fontSize),
                    (n.useDynamicText = (t, a, s) => {
                        let { minFontSize: l, maxFontSize: r, lineHeight: n, maxLines: o, fallbackMaxLines: d, styleVariants: c } = a;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(n));
                            let e = () => {
                                    let e = t.clientWidth,
                                        a = t.clientHeight,
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === a || !u) return;
                                    let {
                                        maxLines: _,
                                        fontSize: m,
                                        lineHeight: v,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: a } = e,
                                            s = i({ ...e, maxLines: a });
                                        if (void 0 === t || s.fits) return { maxLines: a, fontSize: s.fontSize, lineHeight: s.lineHeight };
                                        let l = i({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: l.fontSize, lineHeight: l.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: a,
                                        minFontSize: l,
                                        maxFontSize: r,
                                        lineHeight: n,
                                        maxLines: o,
                                        fallbackMaxLines: d,
                                        styleVariants: c,
                                    });
                                    (null == s || s(_),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(m, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(v)));
                                },
                                a = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                a.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (a.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, s, d, n, r, o, l, c]);
                    }));
            })(),
                n.__esModule,
                n.findOptimalFontSize);
            var o = n.useDynamicText;
        },
        81438: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var i = a(72288),
                s = a(8655),
                l = a(69704);
            let r = () => {
                var e, t, a, r, n, o;
                let { lumen: d } = (0, i.g)(),
                    { theme: c } = (0, l.W)(),
                    u = null != c ? c : s.S.Dark,
                    _ = null == (e = d.themes) ? void 0 : e[u],
                    m = d.getFallbackImage()[u],
                    v = null != (r = null == _ ? void 0 : _.cover.uri) ? r : m;
                return {
                    cover: v,
                    fullCover: null != (n = null == _ || null == (t = _.fullCover) ? void 0 : t.uri) ? n : v,
                    faceCover: null != (o = null == _ || null == (a = _.faceCover) ? void 0 : a.uri) ? o : v,
                    solidColor: null == _ ? void 0 : _.solidColor,
                    fallbackImage: m,
                };
            };
        },
        81877: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => o });
            var i = a(88800),
                s = a(53548),
                l = a(17392),
                r = a(90688);
            let n = (e) => {
                    let { isAvailable: t = !0, className: a, fallbackIconSize: s, forwardRef: n, ...o } = e;
                    return t
                        ? (0, i.jsx)(r._V, { ref: n, className: a, fallbackIconSize: s, ...o, 'data-test-id': l.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(r.Ab, { className: a, iconSize: s, iconVariant: 'unavailable', 'data-test-id': l.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, s.forwardRef)((e, t) => (0, i.jsx)(n, { forwardRef: t, ...e }));
        },
        81892: (e) => {
            e.exports = { root: 'Slide_root__x5JEM', root_isActive: 'Slide_root_isActive__CKUSv' };
        },
        82530: (e) => {
            e.exports = { root: 'MaskedImage_root__Dquqg' };
        },
        84516: (e) => {
            e.exports = {
                root: 'CollageContent_root__NLzGo',
                slide: 'CollageContent_slide__5PvMl',
                topBlock: 'CollageContent_topBlock__7ckc_',
                topBlockBackground: 'CollageContent_topBlockBackground__y6HYf',
                topBlockImageWrapper: 'CollageContent_topBlockImageWrapper__Yc87n',
                topBlockImage: 'CollageContent_topBlockImage__tePia',
                subtitle: 'CollageContent_subtitle__M4cCR',
                title: 'CollageContent_title__35r5H',
                bottomBlock: 'CollageContent_bottomBlock__lSJaw',
                bottomBlock_item: 'CollageContent_bottomBlock_item__kSW3C',
            };
        },
        84930: (e) => {
            e.exports = {
                root: 'TextFactContent_root__vmKoy',
                text: 'TextFactContent_text__e_xOX',
                cover: 'TextFactContent_cover__xYsLC',
                image: 'TextFactContent_image__FnWmg',
            };
        },
        89080: (e) => {
            e.exports = {
                root: 'ActionButton_root__YMLj2',
                cover: 'ActionButton_cover__04uzU',
                image: 'ActionButton_image__Lrf7N',
                text: 'ActionButton_text__wPgyi',
                icon: 'ActionButton_icon__fKoaq',
            };
        },
        89246: (e) => {
            e.exports = {
                root: 'StatItem_root__L7Uw0',
                root_withOpacity: 'StatItem_root_withOpacity__pOgaf',
                valueContainer: 'StatItem_valueContainer__HlYQZ',
                value: 'StatItem_value__IkJBB',
                unit: 'StatItem_unit__cO46p',
                footer: 'StatItem_footer__QZ7q6',
            };
        },
        92265: (e) => {
            e.exports = {
                root: 'LineupItem_root__B3yvr',
                header: 'LineupItem_header__gyDnL',
                eventTag: 'LineupItem_eventTag__V_p_g',
                metaLabel: 'LineupItem_metaLabel__yXFDs',
                artists: 'LineupItem_artists__lOur3',
                highlighted: 'LineupItem_highlighted__4jOig',
                highlightedItem: 'LineupItem_highlightedItem__2Rd6o',
                restItem: 'LineupItem_restItem__bhuIs',
                logo: 'LineupItem_logo__TSyce',
            };
        },
        92814: (e) => {
            e.exports = {
                root: 'PayCard_root__wjBVD',
                title: 'PayCard_title__t7qpS',
                description: 'PayCard_description__hh2_O',
                text: 'PayCard_text__w251H',
                artwork: 'PayCard_artwork__9oAUA',
            };
        },
        93686: (e) => {
            e.exports = { root: 'TextExtendedContent_root__vzsuG', text: 'TextExtendedContent_text__ksTX_', header: 'TextExtendedContent_header__yn1Ej' };
        },
        94842: (e) => {
            e.exports = { root: 'ChartFavoriteContent_root__ksE_w', description: 'ChartFavoriteContent_description__CCBKM' };
        },
        96252: (e) => {
            e.exports = { root: 'SlideHeading_root__naZ6V' };
        },
        97462: (e) => {
            e.exports = { root: 'LikeButton_root__ZGF7T' };
        },
        97526: (e, t, a) => {
            'use strict';
            (a.d(t, { r: () => i }), a(30282));
            let i = async (e, t) => {
                if (!window.musicDesktop) throw Error('Desktop file saving is unavailable');
                window.musicDesktop.files.savePng(t, await e.arrayBuffer());
            };
        },
        97916: (e) => {
            e.exports = {
                root: 'LumenContent_root__cf3c7',
                lumenAvatarArea: 'LumenContent_lumenAvatarArea__gaLj1',
                lumenAvatar: 'LumenContent_lumenAvatar__US1qg',
                lumenAvatarImage: 'LumenContent_lumenAvatarImage__Pb4tm',
                queryWrapper: 'LumenContent_queryWrapper__wuKtz',
                queryImage: 'LumenContent_queryImage___Ou_l',
                queryText: 'LumenContent_queryText__LIC0Z',
                subtitle: 'LumenContent_subtitle__olkf8',
                title: 'LumenContent_title__0ogc5',
            };
        },
        97974: (e) => {
            e.exports = {
                root: 'CarouselContent_root__fLntt',
                slide: 'CarouselContent_slide__MdGZO',
                slideActive: 'CarouselContent_slideActive__fECY6',
                disabled: 'CarouselContent_disabled__fuxnG',
                description: 'CarouselContent_description__IYsQ8',
                cover: 'CarouselContent_cover__Oc6UR',
                meta: 'CarouselContent_meta__0S_Xt',
                image: 'CarouselContent_image__EKRdr',
                title: 'CarouselContent_title__LHzEy',
                subtitle: 'CarouselContent_subtitle__vZKi2',
            };
        },
        99890: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => l, UC: () => r, dM: () => n, uV: () => o });
            var i = a(89916),
                s = a(67990);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof i.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
    },
]);
