(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5396],
    {
        56: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockChildUser: () => o });
            var r = a(84961),
                i = a(4086),
                s = a(41928),
                n = a(72288);
            let o = (0, r.PA)(() => {
                let e = (0, s.N)(),
                    { user: t } = (0, n.g)(),
                    a = e.get(i.QG);
                t.isChild && a.redirectToChildPageUrl();
            });
        },
        188: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Vibe;
            }
        },
        1344: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => i });
            let r = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                i = (e) =>
                    r.reduce((t, a) => {
                        let { queryKey: r, resultKey: i } = a;
                        return ('string' == typeof e[r] && (t[i] = e[r]), t);
                    }, {});
        },
        4685: (e, t, a) => {
            'use strict';
            (a.d(t, { R: () => o }), a(30282));
            var r = a(12149),
                i = a(44702),
                s = a(55956);
            let n = { WINDOWS: '95673843', MACOS: '95673848', LINUX: '98548790', WEB: '95673834' },
                o = () => {
                    switch ((0, i.$)((0, r.u)())) {
                        case s.V.WINDOWS:
                            return n.WINDOWS;
                        case s.V.MACOS:
                            return n.MACOS;
                        case s.V.LINUX:
                            return n.LINUX;
                    }
                    return n.WEB;
                };
        },
        6456: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => r });
            let r = {
                src: '/_next/static/media/mobile.3fa5bdc0.webp',
                height: 1270,
                width: 750,
                blurDataURL: 'data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADQAQCdASoFAAgAAkA4JQBOgCHh3c/IAAD+/eovkSS/bwVeZYW8gP0CqVSvDPwORMoGN02KRYOAAA==',
                blurWidth: 5,
                blurHeight: 8,
            };
        },
        6858: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Album;
            }
        },
        7161: (e, t, a) => {
            'use strict';
            a.d(t, { WebInitializer: () => u });
            var r,
                i,
                s = a(88800),
                n = a(84961);
            (!(function (e) {
                ((e.VALID = 'VALID'),
                    (e.NEED_RESET = 'NEED_RESET'),
                    (e.EXPIRED = 'EXPIRED'),
                    (e.NOAUTH = 'NOAUTH'),
                    (e.DISABLED = 'DISABLED'),
                    (e.INVALID = 'INVALID'),
                    (e.WRONG_GUARD = 'WRONG_GUARD'));
            })(r || (r = {})),
                ((i || (i = {})).Blackbox = 'blackbox'),
                a(41928));
            var o = a(72288);
            let l = (0, n.PA)((e) => {
                    let { children: t, userIp: a } = e,
                        { location: r } = (0, o.g)();
                    return t;
                }),
                u = (e) => {
                    let { userIp: t } = e;
                    return (0, s.jsx)(l, { userIp: t });
                };
        },
        7340: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => r });
            let r = {
                src: '/_next/static/media/desktop.1e0910e6.webp',
                height: 1800,
                width: 2880,
                blurDataURL: 'data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAADQAQCdASoIAAUAAkA4JZQCdAEOaA+wuAD+/SCh9NmVu/p31WSFlBGQJpSkM3AKDGRsZhmAAAA=',
                blurWidth: 8,
                blurHeight: 5,
            };
        },
        7628: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => v });
            var r = a(88800),
                i = a(88969),
                s = a(58390),
                n = a(17392),
                o = a(29993),
                l = a(96817),
                u = a(29504),
                d = a(99890),
                c = a(4086),
                h = a(41928);
            let v = (e) => {
                let { size: t = 'm', variant: a = 'default', color: v = 'primary', withRipple: y = !0, buttonText: p, isBlock: m, key: f, className: g } = e,
                    b = (0, s.useRouter)(),
                    E = (0, h.N)().get(c.QG),
                    S = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), b.push(E.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: S,
                        className: g,
                        isBlock: m,
                        color: v,
                        variant: a,
                        size: t,
                        radius: 'xxxl',
                        withRipple: y,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(u.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(i.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
        8438: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var r = a(30282),
                i = a(12149),
                s = a(44702);
            let n = () => ''.concat(r.sK.DESKTOP).concat((0, s.$)((0, i.u)()));
        },
        8962: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => s });
            var r = a(51235),
                i = a(80989);
            let s = (e, t) => (0, r.A)((0, i.f)(e), (0, i.f)(t));
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
        9630: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i, e: () => s });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        10325: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => i });
            var r = a(43522);
            let i = (e) => {
                var t, a;
                return null != (a = null == (t = (0, r.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        11105: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { O: () => r }),
                (function (e) {
                    ((e.RADIO_STARTED = 'radioStarted'),
                        (e.TRACK_STARTED = 'trackStarted'),
                        (e.TRACK_FINISHED = 'trackFinished'),
                        (e.SKIP = 'skip'),
                        (e.SKIP_FAILED = 'skipFailed'),
                        (e.LIKE = 'like'),
                        (e.DISLIKE = 'dislike'),
                        (e.AD = 'ad'),
                        (e.JINGLE = 'jingle'),
                        (e.UNLIKE = 'unlike'),
                        (e.UNDISLIKE = 'undislike'),
                        (e.COMBINED_QUEUE_STARTED = 'combinedQueueStarted'),
                        (e.PLAYABLE_ITEM_STARTED = 'playableItemStarted'),
                        (e.PLAYABLE_ITEM_FINISHED = 'playableItemFinished'),
                        (e.PLAYABLE_ITEM_SKIP = 'playableItemSkip'),
                        (e.PLAYABLE_ITEM_LIKE = 'playableItemLike'),
                        (e.PLAYABLE_ITEM_DISLIKE = 'playableItemDislike'),
                        (e.PLAYABLE_ITEM_UNLIKE = 'playableItemUnlike'),
                        (e.PLAYABLE_ITEM_UNDISLIKE = 'playableItemUndislike'));
                })(r || (r = {})));
        },
        11673: (e, t, a) => {
            'use strict';
            a.d(t, { SettingsInitializer: () => u });
            var r = a(84961),
                i = a(53548),
                s = a(4086),
                n = a(41928),
                o = a(12149),
                l = a(72288);
            let u = (0, r.PA)((e) => {
                let { browserInfo: t } = e,
                    a = (0, n.N)(),
                    { settings: r } = (0, l.g)(),
                    u = (0, o.u)(),
                    d = a.get(s.vg);
                (r.setBrowserInfo(t),
                    u && r.setPlatform(u),
                    (0, i.useLayoutEffect)(() => {
                        (r.initializeLiteVersionMode(), r.initializeCustomPlayerThumb());
                    }, []),
                    (0, i.useEffect)(() => {
                        r.liteVersionMode && d.count(r.liteVersionMode, 'liteVersionMode');
                    }, [d, r.liteVersionMode]));
            });
        },
        12533: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let r = (e, t) => {
                let [a, r] = e.split('?'),
                    i = new URLSearchParams(r || '');
                for (let [e, a] of new URLSearchParams(t).entries()) i.set(e, a);
                let s = i.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        12742: (e, t, a) => {
            'use strict';
            a.d(t, { AnalyticsProvider: () => u });
            var r = a(88800),
                i = a(90780),
                s = a(4086),
                n = a(41928),
                o = a(65523),
                l = a(15253);
            let u = (e) => {
                let { children: t } = e,
                    a = (0, o.U)(),
                    u = (0, n.N)(),
                    d = 'on' === u.get(s.oo).get(l.c.AllowAnalyticsLogs),
                    c = u.get(s.vg);
                return (0, r.jsx)(i.vZ, { metrika: c, allowAnalyticsLogs: d, evgenUserParam: 'evgen', logger: a, children: t });
            };
        },
        12816: (e, t, a) => {
            'use strict';
            a.d(t, { _Q: () => r, fD: () => s, qG: () => n, xK: () => i });
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
                    (e.LUMEN_FACT_SCREEN = 'lumen_fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let i = [
                    'home',
                    'sidebar',
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
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                s = [
                    'home',
                    'sidebar',
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
                    'lumen_fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                n = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        14518: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s });
            var r = a(53548),
                i = a(90334);
            function s() {
                return (0, r.useContext)(i.r);
            }
        },
        14912: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var r = a(53548);
            let i = () =>
                (0, r.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        15011: (e, t, a) => {
            'use strict';
            a.d(t, { DevPanel: () => J });
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(96817),
                o = a(3629),
                l = a(4086),
                u = a(41928),
                d = a(72288),
                c = a(15253),
                h = a(65726),
                v = a.n(h),
                y = a(72542),
                p = a(51611);
            let m = (0, s.lazy)(() =>
                    Promise.all([a.e(5118), a.e(2641), a.e(5811)])
                        .then(a.bind(a, 96020))
                        .then((e) => ({ default: e.GeoWidget })),
                ),
                f = (e) => {
                    let { isActive: t, onToggle: a } = e;
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Скрыть' : 'Показать', ' гео-подмену'],
                    });
                },
                g = (e) => {
                    let { onClose: t } = e,
                        { language: a } = (0, p.h)(),
                        i = (0, s.useRef)(null);
                    !(function (e) {
                        (0, s.useEffect)(() => {
                            let t,
                                a = () => {
                                    var r;
                                    let i = null == (r = e.current) ? void 0 : r.querySelector('button');
                                    if (!i) {
                                        t = requestAnimationFrame(a);
                                        return;
                                    }
                                    i.animate(
                                        [
                                            { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 200, 0, 0.8)' },
                                            { transform: 'scale(1.2)', boxShadow: '0 0 0 15px rgba(255, 200, 0, 0)' },
                                            { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(255, 200, 0, 0)' },
                                        ],
                                        { duration: 1e3, iterations: 5, easing: 'ease-in-out' },
                                    );
                                };
                            return ((t = requestAnimationFrame(a)), () => cancelAnimationFrame(t));
                        }, [e]);
                    })(i);
                    let n = (0, s.useCallback)(() => {
                        window.location.reload();
                    }, []);
                    return (0, r.jsx)('div', {
                        ref: i,
                        children: (0, r.jsx)(s.Suspense, {
                            children: (0, r.jsx)(m, {
                                lang: 'ru' === a ? 'ru' : 'en',
                                environment: 'production',
                                brand: y.cy,
                                onHide: t,
                                onEnableReplacement: n,
                                onDisableReplacement: n,
                            }),
                        }),
                    });
                };
            var b = a(2058),
                E = a(52300),
                S = a(11372),
                _ = a(17610),
                A = a(29504),
                P = a(65724),
                k = a(96706),
                I = a(40617),
                C = a(53647),
                x = a(70066),
                T = a.n(x);
            let R = (0, i.PA)((e) => {
                    let { experiment: t = { name: '', value: {} }, readOnly: a, deleteMode: i } = e,
                        { experiments: o } = (0, d.g)(),
                        h = (0, u.N)().get(l.oo),
                        v = (0, s.useRef)(null),
                        y = (0, s.useRef)(null),
                        p = o.overwrittenExperiments,
                        m = (0, s.useCallback)(
                            (e) => {
                                var t, a, r;
                                let i;
                                e.preventDefault();
                                let s = Object.fromEntries(new FormData(e.currentTarget));
                                if (!s.name || !s.group) return;
                                try {
                                    i = JSON.parse(String(s.value || '{}'));
                                } catch (e) {
                                    (null == (a = y.current) || a.setCustomValidity('Невалидный JSON в поле value'), null == (r = y.current) || r.reportValidity());
                                    return;
                                }
                                null == (t = v.current) || t.reset();
                                let n = (0, C.jU)({ name: String(s.name), group: String(s.group), value: i });
                                (h.set(c.c.OverwrittenExperiments, { ...(0, k.HO)(p), ...n }), o.updateOverwrittenExperiments(s.name, n[s.name]));
                            },
                            [h, p, o],
                        ),
                        f = (0, s.useCallback)(() => {
                            let e = { ...(0, k.HO)(p) };
                            (delete e[t.name], o.deleteOverwrittenExperiments(t.name), h.set(c.c.OverwrittenExperiments, { ...e }));
                        }, [p, t.name, o, h]),
                        g = (0, s.useCallback)(() => {
                            var e, t;
                            (null == (e = y.current) || e.setCustomValidity(''), null == (t = y.current) || t.reportValidity());
                        }, []);
                    return (0, r.jsxs)('form', {
                        className: T().overrideForm,
                        onSubmit: m,
                        ref: v,
                        children: [
                            (0, r.jsx)(I.p, {
                                containerClassName: T().overrideInput,
                                type: 'text',
                                name: 'name',
                                placeholder: 'Experiment name',
                                required: !0,
                                defaultValue: t.name,
                                readOnly: a,
                            }),
                            (0, r.jsx)(I.p, {
                                containerClassName: T().overrideInput,
                                type: 'text',
                                name: 'group',
                                placeholder: 'Experiment group',
                                required: !0,
                                defaultValue: t.value.group,
                            }),
                            (0, r.jsx)(I.p, {
                                ref: y,
                                containerClassName: T().overrideInput,
                                inputClassName: T().valueInput,
                                type: 'text',
                                name: 'value',
                                placeholder: 'Optional experiment value in JSON format',
                                defaultValue: JSON.stringify(t.value.value),
                                onInput: g,
                            }),
                            (0, r.jsx)(n.$, {
                                className: (0, P.$)({ [T().submitButton]: !i }),
                                size: 'xxs',
                                type: 'submit',
                                children: i ? 'Обновить эксперимент' : 'Переопределить эксперимент',
                            }),
                            i && (0, r.jsx)(n.$, { size: 'xxs', type: 'submit', onClick: f, children: 'Удалить эксперимент' }),
                        ],
                    });
                }),
                D = { className: T().closeModalButton },
                w = (0, i.PA)(() => {
                    let {
                            modals: { overwrittenExperimentsModal: e },
                            experiments: t,
                        } = (0, d.g)(),
                        { formatMessage: a } = (0, b.A)(),
                        i = (0, s.useCallback)(() => {
                            window.location.reload();
                        }, []),
                        o = Object.entries(t.overwrittenExperiments).map((e) => {
                            let [t, a] = e;
                            return { name: t, value: a };
                        });
                    return (0, r.jsxs)(S.a, {
                        className: T().root,
                        headerClassName: T().header,
                        contentClassName: T().content,
                        closeButtonProps: D,
                        title: 'Переопределение экспериментов',
                        header: (0, r.jsx)(
                            _.m_,
                            {
                                offsetOptions: 4,
                                placement: 'left',
                                text: 'Перезагрузить страницу',
                                children: (0, r.jsx)(n.$, {
                                    className: T().reloadButton,
                                    size: 'xxs',
                                    radius: 'round',
                                    icon: (0, r.jsx)(E.I, { variant: 'reset', size: 'xxs' }),
                                    onClick: i,
                                }),
                            },
                            'reloadTooltip',
                        ),
                        open: e.isOpened,
                        onOpenChange: e.onOpenChange,
                        onClose: e.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: a({ id: 'interface-actions.close' }),
                        children: [
                            (0, r.jsx)(R, {}),
                            (0, r.jsx)(A.DZ, {
                                variant: 'h1',
                                size: 's',
                                weight: 'bold',
                                className: T().heading,
                                lineClamp: 2,
                                children: 'Список переопределенных экспериментов',
                            }),
                            (0, r.jsxs)('ul', {
                                className: T().experimentsList,
                                children: [
                                    o.map((e) =>
                                        (0, r.jsx)(
                                            'li',
                                            { className: T().overridedExperiment, children: (0, r.jsx)(R, { experiment: e, readOnly: !0, deleteMode: !0 }) },
                                            e.name,
                                        ),
                                    ),
                                    0 === o.length &&
                                        (0, r.jsx)('li', {
                                            className: T().overridedExperiment,
                                            children: (0, r.jsx)(A.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                children: 'Нет переопределенных экспериментов',
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    });
                });
            var N = a(27253),
                O = a(35412),
                M = a(65418),
                L = a.n(M);
            let F = { path: '/' },
                q = Symbol('invalid-json'),
                U = (e) => {
                    let { rule: t, index: a, readOnly: i, deleteMode: o, onChange: d, getRules: c } = e,
                        h = (0, u.N)().get(l.oo),
                        v = (0, s.useRef)(null),
                        y = (0, s.useRef)(null),
                        p = (0, s.useRef)(null),
                        m = (0, s.useRef)(null),
                        f = (0, s.useCallback)(
                            (e) => {
                                (h.set(N.L, JSON.stringify(e), F, !1), d(e));
                            },
                            [h, d],
                        ),
                        g = (0, s.useCallback)(
                            (e) => {
                                var t;
                                e.preventDefault();
                                let r = Object.fromEntries(new FormData(e.currentTarget)),
                                    i = String(r.url || '').trim();
                                if (!i) return;
                                let s = (e, t, a) => {
                                        let r = String(e || '').trim();
                                        if (r)
                                            try {
                                                return JSON.parse(r);
                                            } catch (e) {
                                                var i, s;
                                                return (
                                                    null == (i = t.current) || i.setCustomValidity('Невалидный JSON в поле '.concat(a)),
                                                    null == (s = t.current) || s.reportValidity(),
                                                    q
                                                );
                                            }
                                    },
                                    n = s(r.headers, y, 'headers'),
                                    l = s(r.matchers, p, 'matchers'),
                                    u = s(r.overrides, m, 'overrides');
                                if (n === q || l === q || u === q) return;
                                let d = String(r.mockUrl || '').trim(),
                                    h = String(r.method || '').trim(),
                                    g = String(r.status || '').trim(),
                                    b = String(r.delay || '').trim(),
                                    E = {
                                        url: i,
                                        ...(d ? { mockUrl: d } : {}),
                                        ...(h ? { method: h } : {}),
                                        ...(g ? { status: Number(g) } : {}),
                                        ...(b ? { delay: Number(b) } : {}),
                                        ...(n ? { headers: n } : {}),
                                        ...(l ? { matchers: l } : {}),
                                        ...(u ? { overrides: u } : {}),
                                    };
                                if (o && void 0 !== a) return void f(c().map((e, t) => (t === a ? E : e)));
                                (null == (t = v.current) || t.reset(), f([...c(), E]));
                            },
                            [f, c, o, a],
                        ),
                        b = (0, s.useCallback)(() => {
                            f(c().filter((e) => e !== t));
                        }, [f, c, t]),
                        E = (0, s.useCallback)(() => {
                            var e;
                            return null == (e = y.current) ? void 0 : e.setCustomValidity('');
                        }, []),
                        S = (0, s.useCallback)(() => {
                            var e;
                            return null == (e = p.current) ? void 0 : e.setCustomValidity('');
                        }, []),
                        _ = (0, s.useCallback)(() => {
                            var e;
                            return null == (e = m.current) ? void 0 : e.setCustomValidity('');
                        }, []);
                    return (0, r.jsxs)('form', {
                        className: L().overrideForm,
                        onSubmit: g,
                        ref: v,
                        children: [
                            (0, r.jsx)(I.p, {
                                containerClassName: L().overrideInput,
                                type: 'text',
                                name: 'url',
                                placeholder: 'URL (обязательно)',
                                required: !0,
                                defaultValue: null == t ? void 0 : t.url,
                                readOnly: i,
                            }),
                            (0, r.jsx)(I.p, {
                                containerClassName: L().overrideInput,
                                type: 'text',
                                name: 'mockUrl',
                                placeholder: 'Mock URL',
                                defaultValue: null == t ? void 0 : t.mockUrl,
                            }),
                            (0, r.jsxs)('details', {
                                className: L().advancedFields,
                                children: [
                                    (0, r.jsx)('summary', { className: L().advancedSummary, children: 'Дополнительные поля' }),
                                    (0, r.jsxs)('div', {
                                        className: L().shortFieldsRow,
                                        children: [
                                            (0, r.jsx)(I.p, {
                                                containerClassName: L().overrideInput,
                                                type: 'text',
                                                name: 'method',
                                                placeholder: 'Method (GET, POST, ...)',
                                                defaultValue: null == t ? void 0 : t.method,
                                            }),
                                            (0, r.jsx)(I.p, {
                                                containerClassName: L().overrideInput,
                                                type: 'number',
                                                name: 'status',
                                                placeholder: 'Status (200)',
                                                defaultValue: null == t ? void 0 : t.status,
                                            }),
                                            (0, r.jsx)(I.p, {
                                                containerClassName: L().overrideInput,
                                                type: 'number',
                                                name: 'delay',
                                                placeholder: 'Delay, ms (1000)',
                                                defaultValue: null == t ? void 0 : t.delay,
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(I.p, {
                                        ref: y,
                                        containerClassName: L().overrideInput,
                                        inputClassName: L().jsonInput,
                                        type: 'text',
                                        name: 'headers',
                                        placeholder: 'Заголовки (например: {"X-Foo":"bar"})',
                                        defaultValue: (null == t ? void 0 : t.headers) ? (0, O.Gr)(t.headers) : void 0,
                                        onInput: E,
                                    }),
                                    (0, r.jsx)(I.p, {
                                        ref: p,
                                        containerClassName: L().overrideInput,
                                        inputClassName: L().jsonInput,
                                        type: 'text',
                                        name: 'matchers',
                                        placeholder: 'Матчеры (например: {"queryString":{"foo":"bar"}})',
                                        defaultValue: (null == t ? void 0 : t.matchers) ? (0, O.Gr)(t.matchers) : void 0,
                                        onInput: S,
                                    }),
                                    (0, r.jsx)(I.p, {
                                        ref: m,
                                        containerClassName: L().overrideInput,
                                        inputClassName: L().jsonInput,
                                        type: 'text',
                                        name: 'overrides',
                                        placeholder: 'Оверрайды (например: {"result":{"foo":"bar"}})',
                                        defaultValue: (null == t ? void 0 : t.overrides) ? (0, O.Gr)(t.overrides) : void 0,
                                        onInput: _,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(n.$, {
                                className: (0, P.$)({ [L().submitButton]: !o }),
                                size: 'xxs',
                                type: 'submit',
                                children: o ? 'Обновить мок' : 'Добавить мок',
                            }),
                            o && (0, r.jsx)(n.$, { size: 'xxs', type: 'button', onClick: b, children: 'Удалить мок' }),
                        ],
                    });
                },
                B = { className: L().closeModalButton },
                V = (e) => 'object' == typeof e && null !== e && 'url' in e && 'string' == typeof e.url,
                W = (0, i.PA)(() => {
                    let {
                            modals: { overwrittenMocksModal: e },
                        } = (0, d.g)(),
                        { formatMessage: t } = (0, b.A)(),
                        a = (0, u.N)().get(l.oo),
                        [i, o] = (0, s.useState)([]),
                        c = (0, s.useRef)(i);
                    ((c.current = i),
                        (0, s.useEffect)(() => {
                            e.isOpened &&
                                o(
                                    ((e) => {
                                        if (!e) return [];
                                        try {
                                            let t = JSON.parse(e);
                                            return Array.isArray(t) ? t.filter(V) : [];
                                        } catch (e) {
                                            return [];
                                        }
                                    })(a.get(N.L, !1)),
                                );
                        }, [e.isOpened, a]));
                    let h = (0, s.useCallback)(() => c.current, []),
                        v = (0, s.useCallback)(() => {
                            window.location.reload();
                        }, []);
                    return (0, r.jsxs)(S.a, {
                        className: L().root,
                        headerClassName: L().header,
                        contentClassName: L().content,
                        closeButtonProps: B,
                        title: 'Переопределение моков',
                        header: (0, r.jsx)(
                            _.m_,
                            {
                                offsetOptions: 4,
                                placement: 'left',
                                text: 'Перезагрузить страницу',
                                children: (0, r.jsx)(n.$, {
                                    className: L().reloadButton,
                                    size: 'xxs',
                                    radius: 'round',
                                    icon: (0, r.jsx)(E.I, { variant: 'reset', size: 'xxs' }),
                                    onClick: v,
                                }),
                            },
                            'reloadTooltip',
                        ),
                        open: e.isOpened,
                        onOpenChange: e.onOpenChange,
                        onClose: e.close,
                        size: 'fitContent',
                        placement: 'center',
                        labelClose: t({ id: 'interface-actions.close' }),
                        children: [
                            (0, r.jsx)(U, { onChange: o, getRules: h }),
                            (0, r.jsx)(A.DZ, {
                                variant: 'h1',
                                size: 's',
                                weight: 'bold',
                                className: L().heading,
                                lineClamp: 2,
                                children: 'Список переопределенных моков',
                            }),
                            (0, r.jsxs)('ul', {
                                className: L().mocksList,
                                children: [
                                    i.map((e, t) =>
                                        (0, r.jsx)(
                                            'li',
                                            {
                                                className: L().mockRule,
                                                children: (0, r.jsx)(U, { rule: e, index: t, readOnly: !0, deleteMode: !0, onChange: o, getRules: h }),
                                            },
                                            ''.concat(e.url, '-').concat(t),
                                        ),
                                    ),
                                    0 === i.length &&
                                        (0, r.jsx)('li', {
                                            className: L().mockRule,
                                            children: (0, r.jsx)(A.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                children: 'Нет переопределенных моков',
                                            }),
                                        }),
                                ],
                            }),
                        ],
                    });
                }),
                j = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = 'on' === e.get(c.c.AllowAnalyticsLogs),
                        a = (0, s.useCallback)(() => {
                            (e.set(c.c.AllowAnalyticsLogs, t ? 'default' : 'on'), window.location.reload());
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логи евгена'],
                    });
                },
                K = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableCrossfadeDebugMode),
                        a = (0, s.useCallback)(() => {
                            (e.set(c.c.EnableCrossfadeDebugMode, !t), window.location.reload());
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логирование кроссфейда'],
                    });
                },
                Y = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableBurstDebounceDebugMode),
                        a = (0, s.useCallback)(() => {
                            (e.set(c.c.EnableBurstDebounceDebugMode, !t), window.location.reload());
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' логирование burstDebounce'],
                    });
                },
                G = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableMetricsPluginDebugMode),
                        a = (0, s.useCallback)(() => {
                            (e.set(c.c.EnableMetricsPluginDebugMode, !t), window.location.reload());
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' debug режим плагина метрик'],
                    });
                },
                z = () => {
                    let e = (0, u.N)().get(l.oo),
                        t = e.get(c.c.EnableYnisonMetricsDebugMode),
                        a = (0, s.useCallback)(() => {
                            (e.set(c.c.EnableYnisonMetricsDebugMode, !t), window.location.reload());
                        }, [e, t]);
                    return (0, r.jsxs)(n.$, {
                        size: 'xxs',
                        className: v().block,
                        variant: 'default',
                        isBlock: !0,
                        onClick: a,
                        children: [t ? 'Выключить' : 'Включить', ' debug режим метрик юнисона'],
                    });
                },
                Q = (0, i.PA)((e) => {
                    let { togglePanel: t } = e,
                        {
                            modals: { overwrittenExperimentsModal: a },
                        } = (0, d.g)(),
                        i = (0, s.useCallback)(() => {
                            (a.open(), t());
                        }, [a, t]);
                    return (0, r.jsx)(n.$, { size: 'xxs', className: v().block, variant: 'default', isBlock: !0, onClick: i, children: 'Переопределение экспериментов' });
                }),
                H = (0, i.PA)((e) => {
                    let { togglePanel: t } = e,
                        {
                            modals: { overwrittenMocksModal: a },
                        } = (0, d.g)(),
                        i = (0, s.useCallback)(() => {
                            (a.open(), t());
                        }, [a, t]);
                    return (0, r.jsx)(n.$, { size: 'xxs', className: v().block, variant: 'default', isBlock: !0, onClick: i, children: 'Переопределение моков' });
                }),
                X = (e) => {
                    let { togglePanel: t, isGeoWidgetShown: a, onToggleGeoWidget: i } = e;
                    return (0, r.jsxs)('div', {
                        className: v().panel,
                        children: [
                            (0, r.jsx)(j, {}),
                            (0, r.jsx)(K, {}),
                            (0, r.jsx)(Y, {}),
                            (0, r.jsx)(G, {}),
                            (0, r.jsx)(z, {}),
                            (0, r.jsx)(Q, { togglePanel: t }),
                            (0, r.jsx)(H, { togglePanel: t }),
                            (0, r.jsx)(f, { isActive: a, onToggle: i }),
                        ],
                    });
                },
                J = () => {
                    let e = (0, u.N)().get(l.P0).get(o.qV),
                        [t, a] = (0, s.useState)(!1),
                        [i, d] = (0, s.useState)(!1),
                        c = (0, s.useCallback)(() => a((e) => !e), []),
                        h = (0, s.useCallback)(() => {
                            d((e) => !e);
                        }, []),
                        y = (0, s.useCallback)(() => {
                            d(!1);
                        }, []);
                    return e
                        ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                  (0, r.jsxs)('div', {
                                      className: v().root,
                                      children: [
                                          (0, r.jsx)(n.$, { size: 'xxs', onClick: c, children: 'dev' }),
                                          t && (0, r.jsx)(X, { togglePanel: c, isGeoWidgetShown: i, onToggleGeoWidget: h }),
                                      ],
                                  }),
                                  (0, r.jsx)(w, {}),
                                  (0, r.jsx)(W, {}),
                                  i && (0, r.jsx)(g, { onClose: y }),
                              ],
                          })
                        : null;
                };
        },
        15947: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => o });
            var r = a(35412),
                i = a(28166),
                s = a(97261);
            let n = [r.cy.HTTP, r.cy.HTTPS, r.cy.MAILTO, r.cy.TEL, i.Lz],
                o = (e, t, a) => {
                    let o;
                    try {
                        o = new URL(t);
                    } catch (e) {
                        return null;
                    }
                    let l = (0, r.Rj)(e, { allowedProtocols: new Set([...n, o.protocol]), baseUrl: o.href });
                    return l.isAllowed
                        ? l.url.protocol === i.Lz
                            ? { type: s.I.DEEPLINK, href: e }
                            : '_blank' !== a && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, o)
                              ? { type: s.I.INTERNAL, href: e }
                              : { type: s.I.EXTERNAL, href: e }
                        : null;
                };
        },
        17055: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            var r = a(44349);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.R.Music;
            }
        },
        17218: (e, t, a) => {
            'use strict';
            a.d(t, { WithUserAccess: () => C });
            var r = a(88800),
                i = a(84961),
                s = a(30282),
                n = a(65724),
                o = a(53548),
                l = a(88969),
                u = a(17392),
                d = a(96817),
                c = a(95694),
                h = a(73170),
                v = a(29504),
                y = a(34227),
                p = a(2946),
                m = a(4086),
                f = a(41928),
                g = a(53643),
                b = a(37670),
                E = a(95210),
                S = a(72288),
                _ = a(72131),
                A = a(7628),
                P = a(63326),
                k = a.n(P);
            let I = (0, i.PA)((e) => {
                    let { showLoginButton: t = !1, showUserProfile: i = !1, withOffer: s = !1 } = e,
                        P = (0, f.N)(),
                        {
                            settings: { isMobile: I },
                        } = (0, S.g)(),
                        C = (0, g.j)(),
                        x = P.get(m.V4),
                        T = (0, _._)(x.webHost),
                        R = (0, o.useMemo)(() => (I ? a(6456).A.src : a(7340).A.src), [I]),
                        D = (0, o.useCallback)(() => {
                            let e = 'https://'.concat(T, '/pay');
                            window.open(e, '_blank', 'noreferrer noopener');
                        }, [T]);
                    (0, b.J)(!0);
                    let w = (0, o.useMemo)(
                            () =>
                                s
                                    ? (0, r.jsx)(v.DZ, {
                                          variant: 'h1',
                                          size: 'xl',
                                          weight: 'bold',
                                          className: k().text,
                                          children: (0, r.jsx)(l.A, { id: 'welcome-page.offer-header' }),
                                      })
                                    : (0, r.jsx)(v.DZ, {
                                          variant: 'h1',
                                          size: 'xxl',
                                          weight: 'bold',
                                          className: k().text,
                                          children: (0, r.jsx)(l.A, { id: 'welcome-page.not-auth-header', values: { br: (0, r.jsx)('br', {}) } }),
                                      }),
                            [s],
                        ),
                        N = (0, o.useMemo)(
                            () =>
                                s
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(v.HL, {
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'l',
                                                  className: k().offerText,
                                                  children: (0, r.jsx)(l.A, { id: 'welcome-page.offer-text' }),
                                              }),
                                              (0, r.jsx)(h.q, {
                                                  children: (0, r.jsx)(v.DZ, { variant: 'h2', children: (0, r.jsx)(l.A, { id: 'welcome-page.offer-text' }) }),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(v.HL, {
                                                  variant: 'span',
                                                  type: 'text',
                                                  size: 'l',
                                                  className: k().text,
                                                  children: (0, r.jsx)(l.A, { id: 'welcome-page.not-auth-text', values: { br: (0, r.jsx)('br', {}) } }),
                                              }),
                                              (0, r.jsx)(h.q, {
                                                  children: (0, r.jsx)(v.DZ, {
                                                      variant: 'h2',
                                                      children: (0, r.jsx)(l.A, { id: 'welcome-page.not-auth-text', values: { br: (0, r.jsx)('br', {}) } }),
                                                  }),
                                              }),
                                          ],
                                      }),
                            [s],
                        ),
                        O = (0, o.useMemo)(
                            () =>
                                t
                                    ? (0, r.jsx)(A.H, { size: 'm', className: k().loginButton })
                                    : s
                                      ? (0, r.jsx)(d.$, {
                                            onClick: D,
                                            className: (0, n.$)(k().offerButton, k().offerButton_important),
                                            role: 'link',
                                            color: 'plus',
                                            size: 'l',
                                            radius: 'm',
                                            withRipple: !1,
                                            children: (0, r.jsx)(l.A, { id: 'payment.offer-button' }),
                                        })
                                      : void 0,
                            [D, t, s],
                        );
                    return (
                        (0, E.N)(!0),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(k().root),
                            'data-test-id': u.Xk.welcome.WELCOME_PAGE,
                            children: [
                                (0, r.jsx)(y.TitleBar, { withSecondaryColor: !0 }),
                                (0, r.jsx)('div', { className: k().logoContainer, children: (0, r.jsx)(c.gu, { alignIcon: 'center', lang: C, className: k().logo }) }),
                                w,
                                N,
                                O,
                                (0, r.jsx)('img', { className: k().image, src: R }),
                                i &&
                                    (0, r.jsx)(p.F, {
                                        className: k().user,
                                        withMeta: !I,
                                        variant: I ? 'mobile' : 'desktop',
                                        usernameClassName: (0, n.$)(k().username, k().important),
                                    }),
                            ],
                        })
                    );
                }),
                C = (0, i.PA)((e) => {
                    let { children: t } = e,
                        { user: a, freeAccess: i } = (0, S.g)();
                    return (a.isAuthorized || s.$3, a.isAuthorized)
                        ? a.hasPlus || i.isFreeUser
                            ? t
                            : (0, r.jsx)(I, { withOffer: !0, showUserProfile: !0 })
                        : (0, r.jsx)(I, { showLoginButton: !0 });
                });
        },
        17610: (e, t, a) => {
            'use strict';
            a.d(t, { ZI: () => h, m_: () => c });
            var r,
                i = a(87819),
                s = a(68211),
                n = a(53548),
                o = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    4295: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    61: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    853: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let r = a(4377),
                            i = a(810),
                            s = a(1964),
                            n = a(2660),
                            o = a(3343),
                            l = a(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: a, children: u, referenceRef: d, ...c } = e,
                                [h, v] = Array.isArray(u) ? u : [u],
                                y = (0, l.useTooltip)(c),
                                p = (0, i.useId)(),
                                m = (0, i.useId)(),
                                f = (0, i.useId)(),
                                g = (0, s.useMergeRefs)([y.refs.setReference, d]);
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, i.cloneElement)(h, {
                                        ref: g,
                                        ...(t ? { 'aria-describedby': p } : {}),
                                        ...y.getReferenceProps(),
                                        ...(0, n.getDataAttrFromProps)(c),
                                        key: m,
                                    }),
                                    y.context.open
                                        ? (0, i.cloneElement)(null != v ? v : (0, r.jsx)(o.TooltipContent, {}), {
                                              ref: y.refs.setFloating,
                                              style: { ...y.floatingStyles, visibility: y.referenceHidden ? 'hidden' : 'visible' },
                                              text: a,
                                              arrow: y.arrow,
                                              ...(t ? { id: p } : {}),
                                              ...y.getFloatingProps(),
                                              key: f,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = a(1964),
                            l = a(3412),
                            u = r(a(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: a, arrow: r, rootNode: d, forwardRef: c, text: h, ...v } = e;
                            return (0, i.jsx)(o.FloatingPortal, {
                                root: d,
                                children: (0, i.jsxs)('div', {
                                    className: (0, s.clsx)(u.default.root, t),
                                    ref: c,
                                    ...v,
                                    children: [
                                        (0, n.isValidElement)(r) && r,
                                        (0, i.jsx)(l.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: u.default.text,
                                            children: null != a ? a : h,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, n.forwardRef)((e, a) => (0, i.jsx)(t.TooltipContentComponent, { forwardRef: a, ...e }))));
                    },
                    1229: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let r = a(4377),
                            i = a(810),
                            s = a(1964),
                            n = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: a = 'top',
                                    open: o,
                                    onOpenChange: l,
                                    isHoverEnabled: u = !0,
                                    isFocusEnabled: d = !0,
                                    offsetOptions: c,
                                    flipOptions: h = {},
                                    shiftOptions: v = {},
                                    hoverSettings: y = n,
                                    enabled: p = !0,
                                    arrowProps: m,
                                } = e,
                                [f, g] = (0, i.useState)(t),
                                b = (0, i.useRef)(null),
                                E = null != o ? o : f,
                                S = null != l ? l : g,
                                _ = (0, s.useFloating)({
                                    placement: a,
                                    open: E,
                                    onOpenChange: S,
                                    whileElementsMounted: s.autoUpdate,
                                    middleware: [
                                        (0, s.offset)(c),
                                        (0, s.flip)({ crossAxis: a.includes('-'), ...h }),
                                        (0, s.shift)(v),
                                        (0, s.arrow)({ element: b }),
                                        (0, s.hide)(),
                                    ],
                                }),
                                A = _.context,
                                P = (0, s.useHover)(A, { move: !1, enabled: u && p, ...y }),
                                k = (0, s.useFocus)(A, { enabled: d && p }),
                                I = (0, s.useDismiss)(A),
                                C = (0, s.useRole)(A, { role: 'tooltip' }),
                                x = (0, s.useInteractions)([P, k, I, C]),
                                T = (0, i.useMemo)(() => {
                                    if (m) return (0, r.jsx)(s.FloatingArrow, { ref: b, context: _.context, ...m });
                                }, [m, _.context]);
                            return (0, i.useMemo)(() => {
                                var e;
                                return { open: E, setOpen: S, arrow: T, referenceHidden: null == (e = _.middlewareData.hide) ? void 0 : e.referenceHidden, ...x, ..._ };
                            }, [E, S, T, x, _]);
                        };
                    },
                    3412: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = a(5987),
                            l = r(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: r = 'text', size: n = 's', className: u, children: d, weight: c = 'medium', ...h } = e;
                            return (0, i.jsx)(o.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_'.concat(r, '_').concat(n)], l.default['root_weight_'.concat(c)], u),
                                ...h,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, n.forwardRef)((e, a) => (0, i.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = r(a(61));
                        function l(e) {
                            let { forwardRef: t, style: a, className: r, children: n, variant: l, lineClamp: u, ...d } = e,
                                c = u && 'string' == typeof n ? n : void 0;
                            return (0, i.jsx)(l, {
                                style: { ...a, WebkitLineClamp: u },
                                ref: t,
                                title: c,
                                className: (0, s.clsx)(
                                    o.default.root,
                                    { [o.default.root_clamp]: u && u > 0, [o.default.root_clamp_oneline]: u && 1 === u, [o.default.root_clamp_multiline]: u && u > 1 },
                                    r,
                                ),
                                ...d,
                                children: n,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, n.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = i;
                    },
                    2660: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(n, 2));
                    },
                },
                l = {};
            function u(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return (o[e].call(a.exports, a, a.exports, u), a.exports);
            }
            ((u.d = (e, t) => {
                for (var a in t) u.o(t, a) && !u.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (u.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (u.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var d = {};
            (() => {
                (Object.defineProperty(d, 'X$', { value: !0 }), (d._v = d.u = void 0));
                var e = u(853);
                Object.defineProperty(d, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = u(3343);
                Object.defineProperty(d, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = d.u,
                h = d._v;
            d.X$;
        },
        17662: (e, t, a) => {
            'use strict';
            a.d(t, { ServiceWorkerInitialiazer: () => n });
            var r = a(53548),
                i = a(4086),
                s = a(41928);
            let n = () => {
                let e = (0, s.N)().get(i.Zf);
                (0, r.useEffect)(() => {
                    'serviceWorker' in navigator &&
                        navigator.serviceWorker.addEventListener('message', (t) => {
                            var a, r, i, s, n;
                            if ((null == (a = t.data) ? void 0 : a.type) === 'PUT_RSC_WORKER_ERROR_MESSAGE_TYPE') {
                                let a = new URL(null == (i = t.data) || null == (r = i.payload) ? void 0 : r.url);
                                e.error(
                                    '[RSC worker] Error getting url '
                                        .concat(a.origin, ' ')
                                        .concat(a.pathname)
                                        .concat(a.search, ', reason: ')
                                        .concat(null == (n = t.data) || null == (s = n.payload) ? void 0 : s.error),
                                );
                            }
                        });
                }, [e]);
            };
        },
        19129: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => u });
            var r = a(9519),
                i = a(88800),
                s = a(53548),
                n = a(4086),
                o = a(41928);
            class l extends s.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: { ...t }, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, i.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    (super(...e), (0, r._)(this, 'state', { hasError: !1 }));
                }
            }
            let u = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(n.Zf);
                    return (0, i.jsx)(e, { ...t, logger: a });
                };
                return ((t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t);
            })(l);
        },
        19649: (e, t, a) => {
            'use strict';
            a.d(t, { LinkPrefetchProvider: () => u });
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(46079),
                o = a(72288),
                l = a(97956);
            let u = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: a } = (0, o.g)(),
                    i = a.checkExperiment(l.z.WebNextDisablePrefetchRequests, 'on'),
                    u = a.checkExperiment(l.z.WebNextDisablePrefetchRequests, 'hover'),
                    d = (0, s.useMemo)(() => ({ isPrefetchDisabled: i, isPrefetchOnHover: u }), [i, u]);
                return (0, r.jsx)(n.j.Provider, { value: d, children: t });
            });
        },
        19726: (e) => {
            e.exports = { root: 'BrowserUpdateNotification_root__IN495', important: 'BrowserUpdateNotification_important__6k4Gb' };
        },
        20584: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { h: () => r }),
                (function (e) {
                    ((e.BASED_ON_ENTITY_BY_DEFAULT = 'BASED_ON_ENTITY_BY_DEFAULT'),
                        (e.USER_TRACKS = 'USER_TRACKS'),
                        (e.DOWNLOADED_TRACKS = 'DOWNLOADED_TRACKS'),
                        (e.SEARCH = 'SEARCH'),
                        (e.MUSIC_HISTORY = 'MUSIC_HISTORY'),
                        (e.MUSIC_HISTORY_SEARCH = 'MUSIC_HISTORY_SEARCH'),
                        (e.ARTIST_MY_COLLECTION = 'ARTIST_MY_COLLECTION'),
                        (e.ARTIST_FAMILIAR_FROM_WAVE = 'ARTIST_FAMILIAR_FROM_WAVE'));
                })(r || (r = {})));
        },
        20585: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => r });
            var r = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        23797: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => n });
            var r = a(76761),
                i = a(33871),
                s = a(16473);
            function n(e) {
                let { productQuality: t, entities: a, entity: n } = e,
                    o = !1;
                if ((a && (o = a.some((e) => (0, i.l)(e))), n && (o = (0, i.l)(n)), o)) return r.e.SMART_PREVIEW;
                switch (t) {
                    case s.e.HIGH_QUALITY:
                        return r.e.LOSSLESS;
                    case s.e.BALANCED:
                        return r.e.NQ;
                    case s.e.EFFICIENT:
                        return r.e.LQ;
                    case s.e.PREVIEW:
                        return r.e.PREVIEW;
                    default:
                        return r.e.NQ;
                }
            }
        },
        24052: (e) => {
            e.exports = {
                root: 'BlockPage_root__crGK_',
                container: 'BlockPage_container__my_l0',
                content: 'BlockPage_content__4nK4D',
                title: 'BlockPage_title__sAejV',
                button: 'BlockPage_button__KoFZX',
                image: 'BlockPage_image__C02Db',
            };
        },
        24609: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s, m: () => i });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        26645: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => i, w: () => s });
            var r = a(53548);
            let i = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                s = () => (0, r.useContext)(i);
        },
        27253: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let r = 'mocksConfiguration';
        },
        27294: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Various;
            }
        },
        27347: (e, t, a) => {
            'use strict';
            a.d(t, { BuySubscriptionParamsInitializer: () => c });
            var r = a(53548),
                i = a(4086),
                s = a(41928),
                n = a(15253),
                o = a(10325),
                l = a(43522),
                u = a(14912);
            let d = { TARGET: 'target', COMMUNICATION_ID: 'communication_id', CAMPAIGN_ID: 'campaign_id' },
                c = () => {
                    let e = (0, s.N)(),
                        t = (0, u.X)();
                    return (
                        (0, r.useLayoutEffect)(() => {
                            let a = e.get(i.vH),
                                r = (0, o.q)(d.TARGET),
                                s = (0, o.q)(d.COMMUNICATION_ID),
                                u = (0, o.q)(d.CAMPAIGN_ID);
                            if (!(r || s || u)) return;
                            a.set(n.c.BuySubscriptionParams, { target: r, communicationId: s, campaignId: u });
                            let c = (0, l.j)();
                            if (null === c) return;
                            (c.delete(d.TARGET), c.delete(d.COMMUNICATION_ID), c.delete(d.CAMPAIGN_ID));
                            let h = new URL(window.location.href);
                            ((h.search = c.toString()), t(h.toString()));
                        }, [e, t]),
                        null
                    );
                };
        },
        27594: (e, t, a) => {
            'use strict';
            a.d(t, { LayoutProvider: () => S, l: () => E });
            var r = a(88800),
                i = a(61013),
                s = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(50408);
            let u = {
                Chrome: 105,
                ChromeMobile: 105,
                Edge: 105,
                Firefox: 104,
                MobileFirefox: 104,
                Opera: 90,
                OperaMobile: 80,
                Safari: 16,
                MobileSafari: 16,
                UCBrowser: 15,
                MSIE: 12,
                YandexBrowser: 23,
            };
            var d = a(65724),
                c = a(59304),
                h = a(19726),
                v = a.n(h);
            let y = (e) => {
                let { message: t, closeToast: a } = e;
                return (0, r.jsx)(c.$, { className: (0, d.$)(v().root, v().important), message: t, closeToast: a });
            };
            var p = a(32353),
                m = a(44230),
                f = a(29595),
                g = a(74965),
                b = a(72288);
            let E = (e) => {
                    {
                        (document.body.classList.remove('desktop'),
                            e.setLayout(window.innerWidth < p.P.Mobile ? p.u.Mobile : p.u.Desktop),
                            e.setIsLandscape(window.matchMedia('(orientation: landscape)').matches));
                        let t = window.screen.availHeight || window.innerHeight;
                        e.setIsMobileLandscapeHeight(t < 450);
                    }
                },
                S = (0, s.PA)((e) => {
                    let { children: t } = e,
                        { formatMessage: a } = (0, o.A)(),
                        { notify: s } = (0, g.l)(),
                        { settings: d } = (0, b.g)(),
                        [c, h] = (0, l.d)(),
                        [v, p] = (0, l.d)(),
                        [S, _] = (0, l.d)(),
                        [A, P] = (0, l.d)(),
                        [k, I] = (0, l.d)(),
                        [C, x] = (0, l.d)(),
                        [T, R] = (0, l.d)(),
                        [D, w] = (0, l.d)(),
                        [N, O] = (0, l.d)();
                    d.layout;
                    let M = (0, n.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                E(d);
                            }, 100),
                        [d],
                    );
                    ((0, n.useEffect)(() => {
                        (function (e) {
                            if (!(null == e ? void 0 : e.isBrowser) || !e.name || !e.version) return !1;
                            let t = u[e.name];
                            if (!t) return !1;
                            let a = parseFloat(e.version);
                            return !Number.isNaN(a) && a < t;
                        })(d.browserInfo) && s((0, r.jsx)(y, { message: a({ id: 'warning-messages.update-your-browser' }) }), { containerId: f.u.IMPORTANT, single: !0 });
                    }, [a, s, d.browserInfo]),
                        (0, n.useLayoutEffect)(() => {
                            E(d);
                        }, [d]),
                        (0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', M),
                                () => {
                                    window.removeEventListener('resize', M);
                                }
                            ),
                            [M],
                        ));
                    let L = (0, n.useMemo)(
                        () => ({
                            defaultLayoutRef: c,
                            contentRef: v,
                            contentRootRef: S,
                            contentScrollRef: A,
                            sideBannerRef: C,
                            playlistStickyFiltersRef: T,
                            playlistStaticFiltersRef: D,
                            compositePlayerBarRef: k,
                            paywallRef: N,
                            setContentRef: p,
                            setDefaultLayoutRef: h,
                            setContentRootRef: _,
                            setContentScrollRef: P,
                            setSideBannerRef: x,
                            setPlaylistStickyFiltersRef: R,
                            setPlaylistStaticFiltersRef: w,
                            setCompositePlayerBarRef: I,
                            setPaywallRef: O,
                        }),
                        [c, v, S, A, C, T, D, k, N, h, p, _, P, x, R, w, I, O],
                    );
                    return (0, r.jsx)(m.M.Provider, { value: L, children: t });
                });
        },
        28166: (e, t, a) => {
            'use strict';
            a.d(t, { Lz: () => r, ov: () => i });
            let r = ''.concat('yandexmusic', ':'),
                i = ''.concat(r, '//');
        },
        28800: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var r = a(9519),
                i = a(55532),
                s = a(13964);
            class n extends i.X {
                async progressSync(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/sync',
                            this.createHttpOptions({
                                timeoutKey: 'progressSync',
                                params: e,
                                json: { lastSyncTimestamp: e.lastSyncTimestamp, trackStreams: e.trackStreams },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumFinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markAlbumUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-album-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markAlbumUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ albumId: e.albumId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markFinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-finished',
                            this.createHttpOptions({
                                timeoutKey: 'markFinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async markUnfinished(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/mark-unfinished',
                            this.createHttpOptions({
                                timeoutKey: 'markUnfinished',
                                params: e,
                                searchParams: (0, s.P)({ trackId: e.trackId }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                async progressSaveCurrent(e, t) {
                    return (
                        await this.httpClient.post(
                            'streams/progress/save-current',
                            this.createHttpOptions({
                                timeoutKey: 'progressSaveCurrent',
                                params: e,
                                searchParams: (0, s.P)({
                                    trackId: e.trackId,
                                    positionSec: e.positionSec,
                                    trackLengthSec: e.trackLengthSec,
                                    finished: e.finished,
                                    timestamp: e.timestamp,
                                }),
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    (super(e, t), (0, r._)(this, 'httpClient', void 0), (0, r._)(this, 'config', void 0), (this.httpClient = e), (this.config = t));
                }
            }
        },
        29144: (e, t, a) => {
            'use strict';
            a.d(t, { UnauthorizedProbeInitializer: () => d });
            var r = a(84961),
                i = a(53548),
                s = a(4086),
                n = a(41928),
                o = a(72288),
                l = a(97956),
                u = a(74773);
            let d = (0, r.PA)(() => {
                let { experiments: e } = (0, o.g)(),
                    t = (0, n.N)().get(s.vg),
                    { loadingState: a } = e,
                    r = e.checkExperiment(l.z.WebNextUnauthorizedProbe, 'on'),
                    d = (0, i.useRef)(!0);
                return (
                    (0, i.useEffect)(() => {
                        d.current && a === u.G.RESOLVE && r && (t.count('sent', 'unauthorizedExperimentProbe'), (d.current = !1));
                    }, [r, a, t]),
                    null
                );
            });
        },
        29758: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 37531)),
                Promise.resolve().then(a.bind(a, 68326)),
                Promise.resolve().then(a.bind(a, 85838)),
                Promise.resolve().then(a.t.bind(a, 22834, 23)),
                Promise.resolve().then(a.bind(a, 56)),
                Promise.resolve().then(a.bind(a, 43477)),
                Promise.resolve().then(a.bind(a, 60826)),
                Promise.resolve().then(a.bind(a, 17218)),
                Promise.resolve().then(a.bind(a, 27347)),
                Promise.resolve().then(a.bind(a, 68157)),
                Promise.resolve().then(a.bind(a, 57546)),
                Promise.resolve().then(a.bind(a, 46573)),
                Promise.resolve().then(a.bind(a, 22244)),
                Promise.resolve().then(a.bind(a, 89538)),
                Promise.resolve().then(a.bind(a, 62617)),
                Promise.resolve().then(a.t.bind(a, 57997, 23)),
                Promise.resolve().then(a.bind(a, 83311)),
                Promise.resolve().then(a.bind(a, 17662)),
                Promise.resolve().then(a.bind(a, 11673)),
                Promise.resolve().then(a.bind(a, 92403)),
                Promise.resolve().then(a.bind(a, 75746)),
                Promise.resolve().then(a.bind(a, 29144)),
                Promise.resolve().then(a.bind(a, 60333)),
                Promise.resolve().then(a.bind(a, 7161)),
                Promise.resolve().then(a.bind(a, 78570)),
                Promise.resolve().then(a.bind(a, 41537)),
                Promise.resolve().then(a.bind(a, 12742)),
                Promise.resolve().then(a.bind(a, 73596)),
                Promise.resolve().then(a.bind(a, 70047)),
                Promise.resolve().then(a.bind(a, 30230)),
                Promise.resolve().then(a.bind(a, 38172)),
                Promise.resolve().then(a.bind(a, 27594)),
                Promise.resolve().then(a.bind(a, 19649)),
                Promise.resolve().then(a.bind(a, 43772)),
                Promise.resolve().then(a.bind(a, 59399)),
                Promise.resolve().then(a.bind(a, 92632)),
                Promise.resolve().then(a.bind(a, 62798)),
                Promise.resolve().then(a.bind(a, 87561)),
                Promise.resolve().then(a.bind(a, 75994)),
                Promise.resolve().then(a.bind(a, 22110)),
                Promise.resolve().then(a.bind(a, 77116)),
                Promise.resolve().then(a.bind(a, 34227)),
                Promise.resolve().then(a.bind(a, 74559)),
                Promise.resolve().then(a.bind(a, 81710)),
                Promise.resolve().then(a.bind(a, 34636)),
                Promise.resolve().then(a.bind(a, 15011)),
                Promise.resolve().then(a.bind(a, 91614)),
                Promise.resolve().then(a.bind(a, 19129)),
                Promise.resolve().then(a.bind(a, 31186)),
                Promise.resolve().then(a.bind(a, 97854)),
                Promise.resolve().then(a.bind(a, 32596)));
        },
        31186: (e, t, a) => {
            'use strict';
            a.d(t, { MetrikaScript: () => d });
            var r = a(88800),
                i = a(55555),
                s = a(53548),
                n = a(4086),
                o = a(41928),
                l = a(4685),
                u = a(65523);
            let d = (e) => {
                let { nonce: t, initialMetrikaSettings: a } = e,
                    d = (0, u.U)(),
                    c = (0, o.N)().get(n.vg),
                    h = (0, s.useCallback)(() => {
                        a && c.init({ ...a, id: (0, l.R)(), logger: d });
                    }, [a, c, d]);
                return a
                    ? (0, r.jsx)(i.default, {
                          id: 'metrika-script',
                          src: 'https://mc.yandex.ru/metrika/tag.js',
                          nonce: null != t ? t : void 0,
                          strategy: 'lazyOnload',
                          onReady: h,
                      })
                    : null;
            };
        },
        32596: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => D });
            var r = a(88800),
                i = a(65724),
                s = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(88969);
            a(30282);
            var u = a(96817),
                d = a(52300),
                c = a(29504),
                h = a(78793),
                v = a(92716),
                y = a(99984),
                p = a(90780),
                m = a(65523),
                f = a(14518),
                g = a(44230),
                b = a(4370),
                E = a(72288),
                S = a(97956),
                _ = a(56248),
                A = a(90688),
                P = a(78940);
            let k = { src: '/_next/static/media/unstable-music-screen.87f662df.png' };
            var I = a(96856),
                C = a.n(I);
            let x = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: s } = e,
                    { slam: n } = (0, E.g)(),
                    { contentRef: o } = (0, g.g)(),
                    d = (0, P.Z)(b.Z.mymusicDownloadsTracks.href);
                return (0, r.jsxs)('div', {
                    className: (0, i.$)(C().root, t),
                    children: [
                        a &&
                            (0, r.jsx)(_.L, {
                                withBackwardFallback: '/',
                                className: (0, i.$)(C().navigation, { [C().navigation_desktop]: !o }),
                                withForwardControl: !1,
                                onBackwardClick: s,
                            }),
                        (0, r.jsxs)('div', {
                            className: (0, i.$)(C().content, { [C().content_shrink]: !a }),
                            children: [
                                (0, r.jsx)(A._V, { className: C().image, src: k.src, fit: 'contain', withLoadingIndicator: !1, alt: '', 'aria-hidden': !0 }),
                                (0, r.jsxs)('div', {
                                    className: C().message,
                                    children: [
                                        (0, r.jsx)(c.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-title' }),
                                        }),
                                        (0, r.jsx)(c.HL, {
                                            className: C().text,
                                            variant: 'span',
                                            type: 'text',
                                            size: 'l',
                                            weight: 'medium',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.unstable-music-screen-description' }),
                                        }),
                                    ],
                                }),
                                n.hasDownloadedTracks &&
                                    (0, r.jsx)(u.$, {
                                        className: C().button,
                                        onClick: d,
                                        color: 'secondary',
                                        size: 'default',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(c.HL, {
                                            className: C().buttonText,
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'l',
                                            children: (0, r.jsx)(l.A, { id: 'page-error.listen-downloaded-content' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var T = a(9184),
                R = a.n(T);
            let D = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0, onBack: s } = e,
                    { formatMessage: A } = (0, o.A)(),
                    P = (0, n.useContext)(E.P),
                    k = null == P ? void 0 : P.experiments.checkExperiment(S.z.WebNextUnstableMusicScreen, 'on'),
                    I = A(k ? { id: 'page-error.unstable-music-screen-title' } : { id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: r } = (0, f.$)(),
                        i = (0, m.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !r) return;
                        let s = (0, h.F)({
                            params: {
                                entityType: v.EntityTypes.Error,
                                entityId: v.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: r,
                                pageStyle: v.PageStyles.Fullscreen,
                                pagePlacement: v.PagePlacements.Fullscreen,
                                mainObjectType: v.DomainObjectType.NonApplicable,
                                mainObjectId: v.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, y.z5)(t.evgenInstance, s);
                    }, [t, e, a, r, i]);
                })(I);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, f.$)(),
                            r = (0, m.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let i = (0, h.F)({
                                    params: {
                                        actionType: v.ActionType.Refresh,
                                        userInteractionType: v.UserInteractionType.Tap,
                                        entityType: v.EntityTypes.Error,
                                        entityId: v.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: v.PageStyles.Fullscreen,
                                        pagePlacement: v.PagePlacements.Fullscreen,
                                        mainObjectType: v.DomainObjectType.NonApplicable,
                                        mainObjectId: v.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, y.bv)(e.evgenInstance, i);
                            }, [e, t, a, r]),
                        };
                    })(),
                    T = (0, n.useCallback)(() => {
                        (C(), (window.location.href = b.Z.main.href));
                    }, [C]),
                    { contentRef: D } = (0, g.g)();
                return k
                    ? (0, r.jsx)(x, { className: t, withBackwardControl: a, onBack: s })
                    : (0, r.jsxs)('div', {
                          className: (0, i.$)(R().root, t),
                          children: [
                              a &&
                                  (0, r.jsx)(_.L, {
                                      withBackwardFallback: '/',
                                      className: (0, i.$)(R().navigation, { [R().navigation_desktop]: !D }),
                                      withForwardControl: !1,
                                      onBackwardClick: s,
                                  }),
                              (0, r.jsxs)('div', {
                                  className: (0, i.$)(R().content, { [R().content_shrink]: !a }),
                                  children: [
                                      (0, r.jsx)(d.I, { className: R().icon, variant: 'attention', size: 'xxl' }),
                                      (0, r.jsx)(c.DZ, { className: (0, i.$)(R().title, R().important), variant: 'h3', size: 'xs', children: I }),
                                      (0, r.jsxs)(c.HL, {
                                          className: (0, i.$)(R().text, R().important),
                                          variant: 'span',
                                          type: 'text',
                                          size: 'l',
                                          weight: 'normal',
                                          children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                      }),
                                      (0, r.jsx)(u.$, {
                                          onClick: T,
                                          className: R().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 'l',
                                          radius: 'xxxl',
                                          children: (0, r.jsxs)(c.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
        },
        33871: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => i });
            var r = a(44349);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.R.SmartPreview;
            }
        },
        34058: (e) => {
            e.exports = {
                root: 'SplashScreen_root__3jzFk',
                root_dark: 'SplashScreen_root_dark__0OcZj',
                root_light: 'SplashScreen_root_light__XAJTf',
                root_hidden: 'SplashScreen_root_hidden__BO7tp',
                'fade-out': 'SplashScreen_fade-out__uNMY4',
                video: 'SplashScreen_video__wFSy5',
            };
        },
        34500: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var r = a(53548),
                i = a(43620);
            function s() {
                return (0, r.useContext)(i.p);
            }
        },
        34636: (e, t, a) => {
            'use strict';
            a.d(t, { OnboardingProvider: () => l });
            var r = a(88800),
                i = a(53548),
                s = a(15253),
                n = a(77356),
                o = a(26645);
            let l = (e) => {
                let { children: t } = e,
                    a = (0, i.useRef)(!1),
                    l = (0, i.useCallback)((e) => {
                        a.current = e;
                    }, []),
                    { current: u } = (0, i.useRef)([
                        { id: n.h.CONCERTS_TAB, storageKey: s.c.ConcertsTabOnboardingShowed, expires: 365, enabled: !0 },
                        { id: n.h.TRAILER_BUTTON, storageKey: s.c.TrailerButtonOnbordingShowed, expires: 365, enabled: !0 },
                        { id: n.h.ARTIST_DONATION_BUTTON, storageKey: s.c.ArtistDonationButtonOnbordingShowed, expires: 90, enabled: !0 },
                    ]),
                    d = (0, i.useMemo)(() => ({ config: u, isOnboardingOpened: a, setIsOnboardingOpened: l }), [u, l]);
                return (0, r.jsx)(o.d.Provider, { value: d, children: t });
            };
        },
        34948: (e) => {
            e.exports = { icon: 'NotificationDownloadError_icon__r2AWx', message: 'NotificationDownloadError_message__WwjsI' };
        },
        34961: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => m, s: () => f });
            var r = a(88800),
                i = a(84961),
                s = a(58390),
                n = a(53548),
                o = a(35412),
                l = a(39499),
                u = a(89108),
                d = a(70003),
                c = a(72288),
                h = a(16818);
            (0, i.eO)(!1);
            let v = (0, n.createContext)(null),
                y = (e) => {
                    let { children: t, store: a, storeKey: i } = e,
                        s = (0, n.useMemo)(() => ({ store: a, storeKey: i }), [a, i]);
                    return (0, r.jsx)(v.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: i } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = i.current;
                            return ((i.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.Gr)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(u.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        i = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                o = (0, h.Y)(),
                                l = (0, c.g)(),
                                { store: v, patchesRef: m } = (0, d.m)({
                                    createStore: () => t({ ...o, rootStore: l }),
                                    getPendingPatchBatches: i,
                                    patchesUpdatedEventName: u.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: n, patchKey: a, patchesRef: m }), (0, r.jsx)(y, { store: v, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function f(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(v);
                if (!a || a.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new l.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == a ? void 0 : a.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        35723: (e, t, a) => {
            'use strict';
            a.d(t, { $n: () => o, DM: () => n, iy: () => s });
            var r = a(88726),
                i = a(3371);
            let s = [r.N.FLAC, r.N.AAC, r.N.HEAAC, r.N.MP3],
                n = [r.N.FLACMP4, r.N.AACMP4, r.N.HEAACMP4],
                o = { createSign: i.m };
        },
        37604: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => u });
            var r = a(53548),
                i = a(72288),
                s = a(10325),
                n = a(43522),
                o = a(14912);
            let l = { INVITE_ID: 'invite_id', UTM_MEDIUM: 'utm_medium' },
                u = () => {
                    let { user: e } = (0, i.g)(),
                        t = (0, o.X)(),
                        { inviteIdSearchParam: a, hasNecessarySearchParams: u } = (0, r.useMemo)(() => {
                            let e = (0, s.q)(l.INVITE_ID),
                                t = !!(e && 'copy_link' === (0, s.q)(l.UTM_MEDIUM));
                            return { inviteIdSearchParam: e, hasNecessarySearchParams: t };
                        }, []),
                        d = (0, r.useCallback)(() => {
                            let e = (0, n.j)();
                            if (null === e) return;
                            (e.delete(l.INVITE_ID), e.delete(l.UTM_MEDIUM));
                            let a = new URL(window.location.href);
                            ((a.search = e.toString()), t(a.toString()));
                        }, [t]);
                    return { inviteId: a, shouldShowFamilyInvite: !!(!e.hasPlus && u), clear: d };
                };
        },
        37670: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var r = a(53548);
            a(30282);
            var i = a(58390);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [a, s] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, a, t]));
            };
        },
        38172: (e, t, a) => {
            'use strict';
            a.d(t, { HistoryProvider: () => f });
            var r = a(88800),
                i = a(53548),
                s = a(58390),
                n = a(29993),
                o = a(4086),
                l = a(41928),
                u = a(9519),
                d = a(15253),
                c = a(35412);
            class h {
                isLocationNotEqual(e) {
                    return this.data.href !== e;
                }
                toString() {
                    return (0, c.Gr)(this.data);
                }
                constructor(e, t = null, a = null) {
                    ((0, u._)(this, 'data', void 0), (0, u._)(this, 'next', void 0), (0, u._)(this, 'prev', void 0), (this.data = e), (this.next = t), (this.prev = a));
                }
            }
            class v {
                replaceState(e) {
                    let t = new h(e, null, null);
                    (this.current && (t = new h(e, this.current.next, this.current.prev)), (this.current = t), this.updateSessionStorage());
                }
                pushState(e) {
                    let t = new h(e, null, null);
                    (this.current && this.current.isLocationNotEqual(e.href) && ((t = new h(e, null, this.current)), (this.current.next = t)),
                        (this.current = t),
                        this.updateSessionStorage());
                }
                get state() {
                    return this.current;
                }
                get canForward() {
                    var e;
                    return !!(null == (e = this.current) ? void 0 : e.next);
                }
                get canBack() {
                    var e;
                    return !!(null == (e = this.current) ? void 0 : e.prev);
                }
                forward() {
                    var e;
                    if (!this.canForward) return;
                    let t = null == (e = this.current) ? void 0 : e.next;
                    (t && (this.current = t), this.updateSessionStorage());
                }
                back() {
                    var e;
                    if (!this.canBack) return;
                    let t = null == (e = this.current) ? void 0 : e.prev;
                    (t && (this.current = t), this.updateSessionStorage());
                }
                updateSessionStorage() {
                    this.current && this.sessionStorage.set(d.c.SessionHistoryState, this.current.data);
                }
                restoreHistory() {
                    let e = this.sessionStorage.get(d.c.SessionHistoryState);
                    e && this.replaceState(e);
                }
                constructor(e) {
                    ((0, u._)(this, 'sessionStorage', void 0),
                        (0, u._)(this, 'current', void 0),
                        (this.sessionStorage = e),
                        (this.current = null),
                        this.restoreHistory());
                }
            }
            var y = a(46422),
                p = a(12533);
            let m = null,
                f = (e) => {
                    let { children: t } = e,
                        a = (0, l.N)(),
                        u = (0, s.useRouter)(),
                        d = (0, s.usePathname)(),
                        c = (0, s.useSearchParams)(),
                        [h, f] = (0, i.useState)(!1),
                        [g, b] = (0, i.useState)(!1),
                        [E, S] = (0, i.useState)(null),
                        _ = (0, i.useRef)(0),
                        A = (0, i.useRef)(null),
                        P = (0, i.useMemo)(() => m || (m = new v(a.get(o.vH))), [a]),
                        k = (0, n.c)(() => {
                            P && (f(P.canBack), b(P.canForward), S(P.state));
                        }),
                        I = (0, n.c)((e) => {
                            P && (P.replaceState(e), u.replace(e.href));
                        }),
                        C = (0, n.c)((e) => {
                            P && (P.pushState(e), k());
                        }),
                        x = (0, n.c)(() => {
                            P && (P.back(), k(), u.back());
                        }),
                        T = (0, n.c)(() => {
                            P && (P.forward(), k(), u.forward());
                        });
                    (0, i.useEffect)(() => {
                        var e;
                        let t = [d, c.toString()].join('?');
                        (!(null == P ? void 0 : P.state) || (null == P || null == (e = P.state) ? void 0 : e.isLocationNotEqual(t))) && C({ href: t });
                    }, [P, d, c, C]);
                    {
                        let e = (0, p.C)(d, c);
                        e !== A.current && ((A.current = e), (_.current = _.current + 1));
                    }
                    return (0, r.jsx)(y.Q.Provider, {
                        value: { pushState: C, replaceState: I, canForward: g, canBack: h, back: x, forward: T, state: E, length: _.current },
                        children: t,
                    });
                };
        },
        38860: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => s });
            var r = a(53548),
                i = a(41168);
            let s = () => (0, r.useContext)(i.P);
        },
        39947: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => r });
            var r = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        40700: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Generative;
            }
        },
        41168: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            let r = (0, a(53548).createContext)(null);
        },
        41537: (e, t, a) => {
            'use strict';
            a.d(t, { AdvertProvider: () => A });
            var r,
                i = a(88800),
                s = a(84961),
                n = a(53548),
                o = a(7123),
                l = a(9519),
                u = a(39499),
                d = a(20585),
                c = a(82141);
            class h {
                setDefaultState() {
                    ((this.isAdvertPlaying.value = !1), (this.afterTrackResponse = null), (this.advertData = null));
                }
                setAudioAdvertState(e, t) {
                    ((this.advertData = { data: t }), (this.isAdvertPlaying.value = !0), (this.afterTrackResponse = e));
                }
                constructor() {
                    ((0, l._)(this, 'isAdvertPlaying', new c.cJ(!1)), (0, l._)(this, 'afterTrackResponse', null), (0, l._)(this, 'advertData', null));
                }
            }
            class v {
                async loadEntities() {
                    return Promise.resolve([]);
                }
            }
            class y {
                async getContextEntitiesData() {
                    return Promise.resolve([]);
                }
                async loadContextMeta() {
                    return Promise.resolve({ id: '' });
                }
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                constructor({ data: e }) {
                    ((0, l._)(this, 'data', void 0), (0, l._)(this, 'isCurrent', !1), (this.data = e));
                }
            }
            var p = a(44181);
            !(function (e) {
                ((e.CROSSFADE = 'crossfade'), (e.MIX = 'mix'), (e.NONE = 'none'));
            })(r || (r = {}));
            class m {
                get isCrossfadeEnabled() {
                    return !1;
                }
                get canBePlayedOnlyWithCrossing() {
                    return !1;
                }
                canBePlayed() {
                    return !0;
                }
                canBeCrossedWith() {
                    return !1;
                }
                getCrossParams() {
                    return null;
                }
                getFadeMode() {
                    return r.NONE;
                }
                constructor(e, t) {
                    ((0, l._)(this, 'context', void 0),
                        (0, l._)(this, 'entity', void 0),
                        (0, l._)(this, 'lastChangeMethod', null),
                        (this.context = e),
                        (this.entity = t));
                }
            }
            class f {
                createContext(e) {
                    return new y(e);
                }
                createEntity(e) {
                    return new p.y(e);
                }
                createContextEntityPair(e, t) {
                    return new m(e, t);
                }
            }
            class g {
                createAudioAdvertPlayback(e) {
                    let { playbackController: t, mediaPlayerParams: a } = e;
                    (t.createPlayback(d.V.ADVERT, {
                        mediaPlayerParams: a,
                        factory: this.factory,
                        isBlocking: !0,
                        entityProvider: new v(),
                        playbackConfig: { mediaElementErrorReloadCount: 1, windowSize: 1, setupQueueWindowSize: 1 },
                    }),
                        (this.audioAdvertPlayback = t.getPlayback(d.V.ADVERT)),
                        this.audioAdvertPlayback.state.playerState.event.onChange((e) => {
                            if ((this.audioAdvertResolve && (e === o.Iu.END || e === o.Iu.MEDIA_ELEMENT_ERROR) && this.audioAdvertResolve(), e === o.Iu.END)) {
                                var t;
                                null == (t = this.advertFeedbackCallback) || t.call(this);
                            }
                        }));
                }
                init(e) {
                    let t = document.createElement('script');
                    ((t.src = 'https://yandex.'.concat(e, '/ads/system/adsdk.js')),
                        document.head.appendChild(t),
                        t.addEventListener('load', () => {
                            window.ya.videoAd.loadModule('YaMusicAPI').then((e) => {
                                this.adsdkAudioModule = e;
                            });
                        }),
                        this.state.setDefaultState());
                }
                async playAdvert(e) {
                    let { afterTrackResponse: t } = e;
                    return this.playAudioAdvert(t).catch((e) => {
                        let t;
                        this.logger.warn(
                            (((t = e instanceof u.t ? e : new u.t('Error in audio advert', { code: 'E_ADVERT', cause: e })).name = '[Advert] '.concat(t.name)), t),
                        );
                    });
                }
                async getAudioAdvert(e) {
                    let { partnerId: t, category: a } = e;
                    return new Promise((e, r) => {
                        this.adsdkAudioModule
                            ? this.adsdkAudioModule
                                  .loadAd({ partnerId: t, category: a })
                                  .then((t) => {
                                      e(t);
                                  })
                                  .catch((t) => {
                                      (t && 'NO_AD_SECTION' === t.code && e(null), r(t));
                                  })
                            : r(new u.t('Adsdk script was not inited', { code: 'NO_ADSDK' }));
                    });
                }
                async playAudioAdvert(e) {
                    return new Promise((t, a) => {
                        ((this.audioAdvertResolve = t),
                            this.getAudioAdvert({ partnerId: Number(e.ad.adsParams.partnerId), category: Number(e.ad.adsParams.categoryId) })
                                .then((r) => {
                                    if (r) {
                                        let t = this.factory.createContext({ data: { type: 'audio-advert-context', meta: { id: '' } } }),
                                            i = { type: 'audio-advert-entity', meta: { id: '', ...r } };
                                        this.audioAdvertPlayback
                                            .playContext({ context: t, entitiesData: [i] })
                                            .then(() => {
                                                this.state.setAudioAdvertState(e, r);
                                            })
                                            .catch(a);
                                    } else t();
                                })
                                .catch(a));
                    });
                }
                setAdvertFeedbackCallback(e) {
                    this.advertFeedbackCallback = e;
                }
                constructor(e) {
                    ((0, l._)(this, 'adsdkAudioModule', null),
                        (0, l._)(this, 'logger', void 0),
                        (0, l._)(this, 'factory', new f()),
                        (0, l._)(this, 'audioAdvertPlayback', void 0),
                        (0, l._)(this, 'audioAdvertResolve', null),
                        (0, l._)(this, 'state', new h()),
                        (0, l._)(this, 'advertFeedbackCallback', null),
                        (this.logger = e.logger));
                }
            }
            var b = a(91467),
                E = a(65523),
                S = a(72288);
            let _ = null,
                A = (0, s.PA)((e) => {
                    let { children: t } = e,
                        { advert: a, user: r, location: s, sonataState: l } = (0, S.g)(),
                        u = (0, E.U)();
                    return (!_ && r.isAuthorized && (_ = new g({ logger: u })),
                    (0, n.useEffect)(() => {
                        null == _ || _.init(s.tld);
                    }, [s.tld]),
                    (0, n.useEffect)(() => {
                        if (!r.isAuthorized) return;
                        let e =
                            null == _
                                ? void 0
                                : _.state.isAdvertPlaying.onChange((e) => {
                                      if ((a.setAdvertShown(e), e)) {
                                          var t;
                                          a.setData((null == _ || null == (t = _.state.advertData) ? void 0 : t.data) || null);
                                      } else a.reset();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [a, r.isAuthorized]),
                    (0, n.useEffect)(() => {
                        let e;
                        if (a.isAdvertPlaybackCreated) {
                            var t;
                            e =
                                null == _ || null == (t = _.audioAdvertPlayback)
                                    ? void 0
                                    : t.state.playerState.event.onChange((e) => {
                                          if (a.isAdvertShown) {
                                              if ((e === o.Iu.END && (a.setAdvertShown(!1), null == _ || _.state.setDefaultState()), e === o.Iu.PLAYING))
                                                  return void a.setAdvertPlaying(!0);
                                              if (e === o.Iu.END || e === o.Iu.PAUSED) return void a.setAdvertPlaying(!1);
                                          }
                                      });
                        }
                        return () => {
                            null == e || e();
                        };
                    }, [a, a.isAdvertPlaybackCreated]),
                    (0, n.useEffect)(() => {
                        a.isAdvertShown && _ && void 0 !== l.volume && _.audioAdvertPlayback.setExponentVolume(l.volume || 0);
                    }, [a.isAdvertShown, l.volume]),
                    (0, n.useEffect)(
                        () => () => {
                            a.reset();
                        },
                        [a],
                    ),
                    r.isAuthorized)
                        ? (0, i.jsx)(b.p.Provider, { value: _, children: t })
                        : t;
                });
        },
        41731: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => s, n: () => i });
            var r = a(53548);
            let i = (0, r.createContext)({ isVisible: !1 }),
                s = () => (0, r.useContext)(i);
        },
        43477: (e, t, a) => {
            'use strict';
            a.d(t, { WithBlockFullscreen: () => P });
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(2058);
            a(30282);
            var o = a(58390),
                l = a(96817),
                u = a(29504),
                d = a(34227),
                c = a(4086),
                h = a(41928),
                v = a(72288),
                y = a(97956),
                p = a(24052),
                m = a.n(p);
            let f = (0, i.PA)((e) => {
                var t, a, i, p;
                let { isAuthorizedUser: f = !1 } = e,
                    { formatMessage: g } = (0, n.A)(),
                    b = (0, o.useRouter)(),
                    {
                        experiments: E,
                        settings: { isMobile: S },
                    } = (0, v.g)(),
                    _ = (0, h.N)().get(c.QG),
                    A = E.getExperiment(y.z.WebNextBlockFullscreen),
                    P = null == A || null == (t = A.value) ? void 0 : t.metadata,
                    k = (0, s.useCallback)(() => {
                        _.authorizationUrl && b.push(_.authorizationUrl);
                    }, [_.authorizationUrl, b]),
                    I = (0, s.useCallback)(() => {
                        var e;
                        let t = new URLSearchParams({
                                origin: 'music_button-header',
                                retpath: encodeURIComponent('https://music.yandex.ru/settings?reqid=527383194170610471317084142111361467&from-passport'),
                            }),
                            a = (null == P || null == (e = P.redirectButton) ? void 0 : e.link) || _.getAuthorizationUrlWithParams(t);
                        a && window.open(a, '_self', 'noreferrer noopener');
                    }, [_, null == P || null == (a = P.redirectButton) ? void 0 : a.link]),
                    C = (null == P || null == (i = P.redirectButton) ? void 0 : i.text) || g({ id: 'snegir.redirect-button-text' }),
                    x = (null == P || null == (p = P.authButton) ? void 0 : p.text) || g({ id: 'snegir.auth-button-text' }),
                    T = (0, s.useMemo)(
                        () =>
                            f
                                ? (0, r.jsx)(l.$, { onClick: I, className: m().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: C })
                                : (0, r.jsx)(l.$, { onClick: k, className: m().button, role: 'link', color: 'primary', size: 'l', radius: 'xxxl', children: x }),
                        [f, k, x, I, C],
                    ),
                    R = (null == P ? void 0 : P.mainText) || g({ id: 'snegir.main-text' }, { br: '\r\n' });
                return (0, r.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, r.jsx)(d.TitleBar, { withSecondaryColor: !0 }),
                        (0, r.jsxs)('div', {
                            className: m().container,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: m().content,
                                    children: [(0, r.jsx)(u.DZ, { variant: 'h1', size: S ? 'xl' : 'xxl', weight: 'bold', className: m().title, children: R }), T],
                                }),
                                (0, r.jsx)('div', { className: m().image }),
                            ],
                        }),
                    ],
                });
            });
            var g = a(54020),
                b = a(78793),
                E = a(92716),
                S = a(99984),
                _ = a(90780),
                A = a(65523);
            let P = (0, i.PA)((e) => {
                let { children: t } = e,
                    { experiments: a, user: i } = (0, v.g)(),
                    n = a.checkExperiment(y.z.WebNextBlockFullscreen, 'on') || !i.isServiceAvailable;
                return (!(function (e) {
                    let t = (0, _.st)(),
                        { hash: a } = (0, _.gf)(),
                        r = (0, A.U)(),
                        i = (0, s.useRef)(void 0);
                    (0, s.useEffect)(() => {
                        if (!e || !t || !a) return;
                        i.current = (0, g.A)();
                        let s = (0, b.F)({
                            params: {
                                hash: a,
                                pageId: E.AppScreen.SnegirScreen,
                                pageStyle: E.PageStyles.Fullscreen,
                                pagePlacement: E.PagePlacements.Fullscreen,
                                mainObjectType: E.DomainObjectType.NonApplicable,
                                mainObjectId: E.DomainObjectType.NonApplicable,
                                isTabSelectedByDefault: !1,
                            },
                            logger: r,
                            context: 'useSendEventOnSnegirShowedOrHidden.open',
                        });
                        return (
                            s && (0, S.w5)(t.evgenInstance, s),
                            () => {
                                let e = (0, b.F)({
                                    params: {
                                        hash: a,
                                        pageId: E.AppScreen.SnegirScreen,
                                        pageStyle: E.PageStyles.Fullscreen,
                                        pagePlacement: E.PagePlacements.Fullscreen,
                                        mainObjectType: E.DomainObjectType.NonApplicable,
                                        mainObjectId: E.DomainObjectType.NonApplicable,
                                        viewUuid: i.current,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSnegirShowedOrHidden.close',
                                });
                                e && (0, S.XB)(t.evgenInstance, e);
                            }
                        );
                    }, [e, t, a, r]);
                })(n),
                n)
                    ? i.isAuthorized
                        ? (0, r.jsx)(f, { isAuthorizedUser: !0 })
                        : (0, r.jsx)(f, {})
                    : t;
            });
        },
        43506: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i, v: () => s });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        43522: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let r = () => new URL(window.location.href).searchParams;
        },
        43620: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => r });
            let r = (0, a(53548).createContext)({
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
        43772: (e, t, a) => {
            'use strict';
            a.d(t, { PrefetchDataProvider: () => v });
            var r = a(84961),
                i = a(53548),
                s = a(4086),
                n = a(41928),
                o = a(72288),
                l = a(74773),
                u = a(27594);
            let d = async (e, t) =>
                    void 0 === t ? void (await e.getAbout()) : void 0 !== t.accountData ? void (await e.getAbout(t.accountData)) : void e.setAboutRejected(),
                c = async (e, t) =>
                    void 0 === t ? void (await e.getData()) : void 0 !== t.experimentsData ? void (await e.getData(t.experimentsData)) : void e.setRejected(),
                h = async (e) => {
                    let { userAccountData: t, userId: a, store: r, withPins: i = !0 } = e,
                        { user: s, experiments: n, pinsCollection: o, disclaimersDictionary: l } = r;
                    if ((await d(s, t), s.puid && a.setPassportUid(s.puid), await Promise.allSettled([c(n, t), l.getDisclaimers()]), s.isAuthorized)) {
                        let e = [s.getSettings(), r.library.getData()];
                        (i && e.push(o.getData()), await Promise.allSettled(e));
                    }
                },
                v = (0, r.PA)((e) => {
                    let { children: t, ...a } = e,
                        r = (0, o.g)(),
                        d = (0, n.N)().get(s.WA);
                    return (
                        (0, u.l)(r.settings),
                        r.user.puid && d.setPassportUid(r.user.puid),
                        r.user.account.loadingState === l.G.IDLE && (0, i.use)(h({ store: r, userId: d, ...a })),
                        t
                    );
                });
        },
        44181: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => s });
            var r = a(9519),
                i = a(56928);
            class s {
                constructor({ data: e }) {
                    ((0, r._)(this, 'data', void 0),
                        (0, r._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, r._)(this, 'contentType', i.e.AUDIO),
                        (0, r._)(this, 'hidden', !1),
                        (0, r._)(this, 'playId', ''),
                        (this.data = e));
                }
            }
        },
        44230: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => i, g: () => s });
            var r = a(53548);
            let i = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, r.useContext)(i);
        },
        44702: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => i });
            var r = a(55956);
            let i = (e) => {
                switch (e) {
                    case 'win32':
                        return r.V.WINDOWS;
                    case 'darwin':
                        return r.V.MACOS;
                    case 'linux':
                        return r.V.LINUX;
                }
                return null;
            };
        },
        46079: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let r = (0, a(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        46573: (e, t, a) => {
            'use strict';
            a.d(t, { DeeplinkInitializer: () => y });
            var r = a(84961),
                i = a(53548),
                s = a(58390),
                n = a(78275),
                o = a(12816),
                l = a(47964),
                u = a(72288),
                d = a(68986),
                c = a(34303),
                h = a(14912);
            let v = [c.K.DEEPLINK, c.K.SEEDS, c.K.STATION_ID, c.K.OPEN_PLAYER, c.K.SCREEN],
                y = (0, r.PA)(
                    () => (
                        (() => {
                            let { fullscreenPlayer: e, sonataState: t, user: a, location: r, freeAccess: y } = (0, u.g)(),
                                p = (0, s.useSearchParams)(),
                                m = (0, h.X)(),
                                f = p.get(c.K.SEEDS),
                                g = p.get(c.K.STATION_ID),
                                { state: b, toggleTrue: E } = (0, n.e)(!1),
                                S = (0, i.useMemo)(() => {
                                    let e = f ? f.split(',') : [];
                                    return (g && e.unshift(g), e);
                                }, [f, g]),
                                { togglePlay: _ } = (0, l.B)({ seeds: S, pageIdForFrom: o._Q.RADIO, blockIdForFrom: S.join('_') });
                            ((0, i.useEffect)(() => {
                                if (b) {
                                    let e = new URL(window.location.href);
                                    (v.forEach((t) => e.searchParams.delete(t)), m(e.toString()), r.setHref(window.location.href));
                                }
                            }, [r, m, b, r.href]),
                                (0, i.useEffect)(() => {
                                    if (p.get(c.K.DEEPLINK) === d.v.PLAY_VIBE) {
                                        if (!a.isAuthorized || y.isFreeWebUser) return void E();
                                        (t.setShouldApplyYnisonState(!1), _(), 'true' === p.get(c.K.OPEN_PLAYER) && e.modal.open(), E());
                                    }
                                    return () => {
                                        t.setShouldApplyYnisonState(!0);
                                    };
                                }, [y.isFreeWebUser, e.modal, p, E, t, _, a.isAuthorized]));
                        })(),
                        null
                    ),
                );
        },
        46777: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var r = a(55482),
                i = a(53548),
                s = a(46422);
            let n = (e) => {
                let t = (0, s.W)(),
                    a = (0, i.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    n = (0, i.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: n };
            };
        },
        47720: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var r = a(30282);
            let i = () => {
                if (void 0 === window.musicDesktop || !r.NN) return;
                let e = Object.entries(window.musicDesktop.runtime.deviceInfo);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, a] = e;
                            return ''.concat(t, '=').concat(String(a));
                        })
                        .join('; ');
            };
        },
        47964: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => E });
            var r = a(88800),
                i = a(53548),
                s = a(2058),
                n = a(188),
                o = a(18593),
                l = a(80989),
                u = a(29993),
                d = a(7123),
                c = a(66943),
                h = a(84384),
                v = a(29595),
                y = a(74965),
                p = a(72288),
                m = a(90420);
            let f = 'radio';
            var g = a(8962),
                b = a(9630);
            let E = (e) => {
                var t, a;
                let { seeds: E = [m.M1], pageIdForFrom: S, blockIdForFrom: _, onPlayInterrupted: A, parentContextId: P } = e,
                    { from: k } = (0, h.f)(
                        ((e, t) =>
                            !t || (null == e ? void 0 : e.includes(f)) || t.includes(f)
                                ? { pageId: e, blockId: t }
                                : { pageId: e, blockId: ''.concat(t, '-').concat(f) })(S, _),
                    ),
                    { formatMessage: I } = (0, s.A)(),
                    C = (0, b.e)(),
                    { notify: x } = (0, y.l)(),
                    { sonataState: T, vibe: R, fullscreenPlayer: D, user: w, freeAccess: N } = (0, p.g)(),
                    [O, M] = (0, i.useState)(null),
                    L = (0, u.c)(() => (D.modal.isOpened ? v.u.FULLSCREEN_ERROR : v.u.ERROR));
                ((0, i.useEffect)(() => {
                    let e =
                        null == C
                            ? void 0
                            : C.state.currentContext.onChange(() => {
                                  (0, n.i)(C.state.currentContext.value) ? M(C.state.currentContext.value) : M(null);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [C]),
                    (0, i.useEffect)(() => {
                        let e =
                            null == O
                                ? void 0
                                : O.observableActiveSession.onChange(() => {
                                      var e, t;
                                      (null == O || null == (e = O.observableActiveSession.value) ? void 0 : e.wave) &&
                                          R.setVibe(null == O || null == (t = O.observableActiveSession.value) ? void 0 : t.wave);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [O, R]));
                let F = (0, u.c)(async (e) => {
                        try {
                            await (null == C
                                ? void 0
                                : C.playContext({
                                      contextData: {
                                          type: o.K.Vibe,
                                          meta: { id: (0, l.f)(e) },
                                          seeds: e,
                                          from: k,
                                          includeTracksInResponse: !0,
                                          interactive: !0,
                                          parentContextId: P,
                                      },
                                      loadContextMeta: !0,
                                  }));
                        } catch (e) {
                            x((0, r.jsx)(c.h, { error: I({ id: 'vibe-errors.start-vibe' }) }), { containerId: L() });
                        }
                    }),
                    q = (0, u.c)(async (e) => {
                        if (C && O)
                            try {
                                await O.setSettings({ seeds: e, queueState: C.state.queueState, interactive: !0, from: k });
                            } catch (e) {
                                x((0, r.jsx)(c.h, { error: I({ id: 'vibe-errors.apply-vibe-setting' }) }), { containerId: L() });
                            }
                    }),
                    U = (0, u.c)(async (e) => {
                        if (C)
                            try {
                                await C.restartContext({ playAfterRestart: e });
                            } catch (e) {
                                x((0, r.jsx)(c.h, { error: I({ id: 'error-messages.something-went-wrong' }) }), { containerId: L() });
                            }
                    }),
                    B = !!O,
                    V = B && (0, g._)(null != (a = null == (t = R.meta) ? void 0 : t.seeds) ? a : [], E),
                    W = V && T.status === d.MT.PLAYING,
                    j = V && T.status === d.MT.PAUSED;
                (0, i.useEffect)(() => {
                    W && R.setIsApplying(!1);
                }, [W, R]);
                let K = (0, u.c)(async () => {
                        if (!W && (N.isFreeWebUser || !w.isAuthorized)) {
                            null == A || A();
                            return;
                        }
                        (R.setIsApplying(!0), await F(E), R.setIsApplying(!1));
                    }),
                    Y = (0, u.c)(async (e, t) => {
                        var a;
                        R.setIsApplying(!0);
                        let r = [];
                        if (R.meta && Array.isArray(null == (a = R.meta) ? void 0 : a.seeds))
                            if (R.meta.seeds.includes(e)) r = R.meta.seeds.filter((t) => t !== e);
                            else if (t) r = [e, ...R.meta.seeds.filter((e) => e.includes('setting'))];
                            else {
                                let t = e.split(':')[0];
                                r = t
                                    ? ['settingDiversity', 'settingMoodEnergy', 'settingLanguage'].includes(t)
                                        ? [...R.meta.seeds.filter((e) => !e.startsWith(''.concat(t, ':'))), e]
                                        : [...R.meta.seeds, e]
                                    : [...R.meta.seeds];
                            }
                        else r = [e];
                        (O ? (await q(r), await U(!0)) : await F(r), R.setIsApplying(!1));
                    });
                return {
                    isVibeContext: B,
                    isPlaying: W,
                    isPaused: j,
                    isCurrent: V,
                    togglePlay: K,
                    resetContext: (0, u.c)(async function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [m.M1];
                        (R.setIsApplying(!0), O ? (await q(e), await U(!0)) : await F(e), R.setIsApplying(!1));
                    }),
                    applySetting: Y,
                };
            };
        },
        49397: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        49602: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Artist;
            }
        },
        50320: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        50408: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => l });
            var r,
                i = a(53548),
                s = {
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useForceUpdateRef = void 0));
                let e = (function e(t) {
                    var a = n[t];
                    if (void 0 !== a) return a.exports;
                    var r = (n[t] = { exports: {} });
                    return (s[t](r, r.exports, e), r.exports);
                })(810);
                o.useForceUpdateRef = () => {
                    let [t, a] = (0, e.useState)(null);
                    return [
                        t,
                        (0, e.useCallback)((e) => {
                            a((t) => (t !== e ? e : t));
                        }, []),
                    ];
                };
            })(),
                o.__esModule);
            var l = o.useForceUpdateRef;
        },
        53892: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        55956: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => r });
            var r = (function (e) {
                return ((e.WINDOWS = 'Windows'), (e.MACOS = 'MacOS'), (e.LINUX = 'Linux'), e);
            })({});
        },
        56248: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var r = a(88800),
                i = a(65724),
                s = a(84961),
                n = a(53548),
                o = a(2058),
                l = a(17392),
                u = a(29993),
                d = a(96817),
                c = a(52300),
                h = a(46777),
                v = a(50320),
                y = a.n(v);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: s = !0,
                        className: v,
                        withBackwardFallback: p,
                        buttonSize: m = 'xxs',
                        onBackwardClick: f,
                    } = e,
                    { formatMessage: g } = (0, o.A)(),
                    { canBack: b, canForward: E, moveBack: S, moveForward: _ } = (0, h.J)(p),
                    A = (0, n.useRef)(null),
                    P = (0, u.c)((e) => {
                        if ((e.stopPropagation(), f)) return void f();
                        S();
                    }),
                    k = (0, u.c)((e) => {
                        (e.stopPropagation(), _());
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && A.current && b && A.current.focus();
                    }, [b]),
                    (0, r.jsxs)('div', {
                        className: (0, i.$)(y().root, v),
                        'data-test-id': l.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(d.$, {
                                    ref: A,
                                    'aria-label': g({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !b,
                                    size: m,
                                    icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: P,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, r.jsx)(d.$, {
                                    'aria-label': g({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !E,
                                    size: m,
                                    icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: k,
                                    'data-test-id': l.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        56928: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { e: () => r }),
                (function (e) {
                    ((e.AUDIO = 'audio'), (e.DOWNLOADED_AUDIO = 'downloadedAudio'), (e.HLS = 'hls'), (e.CLIP = 'clip'));
                })(r || (r = {})));
        },
        57546: (e, t, a) => {
            'use strict';
            a.d(t, { CrackdownInitializer: () => d });
            var r = a(84961),
                i = a(72288),
                s = a(97956),
                n = a(53548),
                o = a(29993),
                l = a(7123),
                u = a(9630);
            let d = (0, r.PA)(() => {
                var e;
                let {
                    user: t,
                    modals: { crackdownModal: a },
                    settings: { isMobile: r },
                    experiments: d,
                    sonataState: c,
                    desktopPaywall: h,
                    freeAccess: v,
                } = (0, i.g)();
                ((e) => {
                    let { isEnabled: t, intervalMs: a, modal: r, playbackId: i, sonataState: s, isPaywallOpen: d } = e,
                        c = (0, n.useRef)(new Date()),
                        h = (0, u.e)(),
                        v = (0, o.c)(() => {
                            c.current = new Date();
                        }),
                        y = (0, o.c)(() => {
                            c.current.getTime() < Date.now() - (null != a ? a : 18e5) && !d && (r.open(), v());
                        });
                    ((0, n.useEffect)(() => {
                        if (!t) return;
                        let e =
                            null == h
                                ? void 0
                                : h.getState(i).playerState.status.onChange((e) => {
                                      e === l.MT.ENDED && y();
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [t, h, y, i]),
                        (0, n.useEffect)(() => {
                            t && r.isOpened && (null == h || h.pause(i));
                        }, [t, r.isOpened, h, s.status, i]),
                        (0, n.useEffect)(() => {
                            if (!t) return;
                            let e = new AbortController();
                            return (
                                window.addEventListener('mousemove', v, { signal: e.signal }),
                                window.addEventListener('keydown', v, { signal: e.signal }),
                                window.addEventListener('touchstart', v, { signal: e.signal }),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [t, v]));
                })({
                    isEnabled: t.isAuthorized && v.isFreeWebUser && !r,
                    intervalMs: ((e) => {
                        if ('number' == typeof e && !Number.isNaN(e)) return e;
                        if ('string' == typeof e) {
                            let t = Number.parseInt(e, 10);
                            if (!Number.isNaN(t)) return t;
                        }
                    })(null == (e = d.getExperiment(s.z.WebNextCrackdownInterval)) ? void 0 : e.value.interval),
                    modal: a,
                    sonataState: c,
                    isPaywallOpen: h.isPaywallOpen,
                });
            });
        },
        58977: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            let r = 'offline';
        },
        59399: (e, t, a) => {
            'use strict';
            a.d(t, { ShortcutsProvider: () => P });
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(41168),
                o = a(9519),
                l = a(51235),
                u = a(39947),
                d = a(51318);
            let c = () => ({
                [d.l.TOGGLE_PLAY]: {},
                [d.l.TOGGLE_MUTE]: {},
                [d.l.INCREASE_VOLUME]: { repeatable: !0 },
                [d.l.DECREASE_VOLUME]: { repeatable: !0 },
                [d.l.LIKE]: {},
                [d.l.DISLIKE]: {},
                [d.l.MOVE_FORWARD]: { repeatable: !0 },
                [d.l.MOVE_BACKWARD]: { repeatable: !0 },
                [d.l.SLIDE_FORWARD]: { repeatable: !0 },
                [d.l.SLIDE_BACKWARD]: { repeatable: !0 },
                [d.l.TOGGLE_REPEAT]: {},
                [d.l.TOGGLE_SHUFFLE]: {},
                [d.l.TOGGLE_FULLSCREEN_PLAYER]: {},
                [d.l.CLOSE]: {},
            });
            var h = a(17071);
            let v = { [h.M.MAIN]: c(), [h.M.TRAILER]: c(), [h.M.VIDEO_PLAYER]: c(), [h.M.IMAGE_SLIDER]: c(), [h.M.PROMO_LANDING]: c() };
            class y {
                constructor(e) {
                    ((0, o._)(this, 'code', void 0),
                        (0, o._)(this, 'ctrlKey', void 0),
                        (0, o._)(this, 'shiftKey', void 0),
                        (0, o._)(this, 'altKey', void 0),
                        (0, o._)(this, 'metaKey', void 0),
                        (this.code = e.code),
                        (this.altKey = !!e.altKey),
                        (this.ctrlKey = !!e.ctrlKey),
                        (this.shiftKey = !!e.shiftKey),
                        (this.metaKey = !!e.metaKey));
                }
            }
            class p {
                addShortcutsListener(e, t, a) {
                    let r = this.listenersGroups[e][t];
                    r && (r.handler = a);
                }
                removeShortcutsListener(e, t) {
                    let a = this.listenersGroups[e][t];
                    a && delete a.handler;
                }
                disable(e, t) {
                    this.setListenersDisabled(!0, e, t);
                }
                enable(e, t) {
                    this.setListenersDisabled(!1, e, t);
                }
                setListenersDisabled(e, t, a) {
                    if (t) {
                        if (a) {
                            this.listenersGroups[t][a].disabled = e;
                            return;
                        }
                        Object.values(this.listenersGroups[t]).forEach((t) => {
                            t.disabled = e;
                        });
                        return;
                    }
                    if (a)
                        return void Object.values(this.listenersGroups).forEach((t) => {
                            let r = t[a];
                            r && (r.disabled = e);
                        });
                    Object.values(this.listenersGroups).forEach((t) => {
                        Object.values(t).forEach((t) => {
                            t.disabled = e;
                        });
                    });
                }
                handle(e) {
                    var t;
                    let { action: a, shortcut: r } = null != (t = this.store[e.code]) ? t : {};
                    a &&
                        r &&
                        (0, l.A)(r, new y(e)) &&
                        (((e, t) => {
                            let a, r;
                            if (!(e.target instanceof Element)) return !1;
                            let i = e.target,
                                s = t.code;
                            return !!(
                                (a = i).hasAttribute('contenteditable') ||
                                ('INPUT' === a.tagName && 'range' !== a.getAttribute('type')) ||
                                ['TEXTAREA', 'SELECT', 'OPTION'].includes(a.tagName) ||
                                ('INPUT' === (r = i).tagName &&
                                    'range' === r.getAttribute('type') &&
                                    (s === u.Y.ARROW_LEFT || s === u.Y.ARROW_RIGHT || s === u.Y.ARROW_UP || s === u.Y.ARROW_DOWN))
                            );
                        })(e, r) ||
                            Object.values(this.listenersGroups).forEach((t) => {
                                var r;
                                let i = t[a];
                                i && !i.disabled && (i.repeatable || !e.repeat) && (e.preventDefault(), null == (r = i.handler) || r.call(i));
                            }));
                }
                listen() {
                    window.addEventListener('keydown', this.handle);
                }
                stopListening() {
                    window.removeEventListener('keydown', this.handle);
                }
                constructor(e) {
                    ((0, o._)(this, 'store', void 0), (0, o._)(this, 'listenersGroups', v), (this.store = e.getFlatStore()), (this.handle = this.handle.bind(this)));
                }
            }
            let m = {
                [d.l.TOGGLE_PLAY]: [new y({ code: u.Y.KEY_K })],
                [d.l.TOGGLE_MUTE]: [new y({ code: u.Y.KEY_M })],
                [d.l.INCREASE_VOLUME]: [new y({ code: u.Y.ARROW_UP })],
                [d.l.DECREASE_VOLUME]: [new y({ code: u.Y.ARROW_DOWN })],
                [d.l.LIKE]: [new y({ code: u.Y.KEY_F })],
                [d.l.DISLIKE]: [new y({ code: u.Y.KEY_D })],
                [d.l.MOVE_FORWARD]: [new y({ code: u.Y.KEY_N })],
                [d.l.MOVE_BACKWARD]: [new y({ code: u.Y.KEY_P })],
                [d.l.SLIDE_FORWARD]: [new y({ code: u.Y.ARROW_RIGHT }), new y({ code: u.Y.KEY_L })],
                [d.l.SLIDE_BACKWARD]: [new y({ code: u.Y.ARROW_LEFT }), new y({ code: u.Y.KEY_J })],
                [d.l.TOGGLE_REPEAT]: [new y({ code: u.Y.KEY_R })],
                [d.l.TOGGLE_SHUFFLE]: [new y({ code: u.Y.KEY_S })],
                [d.l.TOGGLE_FULLSCREEN_PLAYER]: [new y({ code: u.Y.KEY_W })],
                [d.l.CLOSE]: [new y({ code: u.Y.ESC })],
            };
            class f {
                getFlatStore() {
                    let e = {};
                    for (let [t, a] of Object.entries(this.store))
                        a.forEach((a) => {
                            e[a.code] = { action: t, shortcut: a };
                        });
                    return e;
                }
                constructor() {
                    (0, o._)(this, 'store', m);
                }
            }
            var g = a(72288),
                b = a(8641),
                E = a(4086),
                S = a(41928),
                _ = a(9630);
            let A = null,
                P = (0, i.PA)((e) => {
                    let { children: t } = e,
                        { sonataState: a } = (0, g.g)(),
                        i = (0, s.useMemo)(() => (A || (A = new p(new f())), A), []);
                    return (
                        ((e) => {
                            let { controller: t, sonataState: a, playbackId: r, groupId: i } = e,
                                n = (0, _.e)(),
                                o = (0, S.N)(),
                                l = (0, b.d)(),
                                u = o.get(E.oo);
                            ((0, s.useEffect)(
                                () => (
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.DECREASE_VOLUME, () => {
                                            null == n || n.decreaseExponentVolume(0.05, r);
                                        }),
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.INCREASE_VOLUME, () => {
                                            null == n || n.increaseExponentVolume(0.05, r);
                                        }),
                                    null == t ||
                                        t.addShortcutsListener(i, d.l.TOGGLE_MUTE, async () => {
                                            let e = null == n ? void 0 : n.getState(r).playerState.exponentVolume.value;
                                            void 0 !== e && (await l(a, e, r));
                                        }),
                                    () => {
                                        (null == t || t.removeShortcutsListener(i, d.l.DECREASE_VOLUME),
                                            null == t || t.removeShortcutsListener(i, d.l.INCREASE_VOLUME),
                                            null == t || t.removeShortcutsListener(i, d.l.TOGGLE_MUTE));
                                    }
                                ),
                                [t, r, n, u, l, a, i],
                            ),
                                (0, s.useEffect)(() => {
                                    if (!a.isGenerativeContext)
                                        return (
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.MOVE_BACKWARD, async () => {
                                                    var e;
                                                    (null == n || null == (e = n.getState(r).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                                        (await n.moveBackward(r));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.MOVE_FORWARD, async () => {
                                                    var e;
                                                    (null == n || null == (e = n.getState(r).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                                        (await (null == n ? void 0 : n.moveForward(r)));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.SLIDE_BACKWARD, async () => {
                                                    (null == n ? void 0 : n.getState(r).playerState.progress.value.duration) &&
                                                        (await (null == n ? void 0 : n.slideBackward(2, r)));
                                                }),
                                            null == t ||
                                                t.addShortcutsListener(i, d.l.SLIDE_FORWARD, async () => {
                                                    (null == n ? void 0 : n.getState(r).playerState.progress.value.duration) &&
                                                        (await (null == n ? void 0 : n.slideForward(2, r)));
                                                }),
                                            () => {
                                                (null == t || t.removeShortcutsListener(i, d.l.MOVE_FORWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.MOVE_BACKWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.SLIDE_BACKWARD),
                                                    null == t || t.removeShortcutsListener(i, d.l.SLIDE_FORWARD));
                                            }
                                        );
                                }, [t, n, u, a.isGenerativeContext, r, i]));
                        })({ controller: i, sonataState: a, groupId: h.M.MAIN }),
                        (0, s.useEffect)(
                            () => (
                                null == i || i.listen(),
                                () => {
                                    null == i || i.stopListening();
                                }
                            ),
                            [i],
                        ),
                        (0, r.jsx)(n.P.Provider, { value: i, children: t })
                    );
                });
        },
        59758: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { b: () => r }),
                (function (e) {
                    ((e.Album = 'album'), (e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Radio = 'fm_radio'), (e.Other = 'other'), (e.Search = 'search'));
                })(r || (r = {})));
        },
        60333: (e, t, a) => {
            'use strict';
            a.d(t, { UrlInitializer: () => l });
            var r = a(84961);
            a(30282);
            var i = a(58390),
                s = a(88349),
                n = a(72288),
                o = a(91241);
            let l = (0, r.PA)((e) => {
                let { host: t } = e,
                    { location: a } = (0, n.g)(),
                    r = (0, i.usePathname)(),
                    l = (0, i.useSearchParams)().toString(),
                    u = window.location.host,
                    d = t || u,
                    c = 'https://'.concat(d),
                    h = 'https://'
                        .concat(d)
                        .concat(r)
                        .concat(l ? '?' : '')
                        .concat(l);
                ((c = d),
                    (h = ''
                        .concat(d)
                        .concat(r)
                        .concat(l ? '?' : '')
                        .concat(l)),
                    a.setPathname(r),
                    a.setSearchParams(l),
                    a.setHost(d),
                    a.setTld((0, s.f)(d) || o.l),
                    a.setOrigin(c),
                    a.setHref(h));
            });
        },
        60826: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => v }));
            var r = a(88800),
                i = a(65724),
                s = a(53548),
                n = a(78275),
                o = a(53647),
                l = a(41731),
                u = a(66470),
                d = a(61435),
                c = a(34058),
                h = a.n(c);
            let v = (e) => {
                let { children: t } = e,
                    { state: a, toggleTrue: c } = (0, n.e)(!1),
                    { state: v, toggleTrue: y } = (0, n.e)(!1),
                    { getThemeFromStorage: p } = (0, d.Q)(new o.si()),
                    m = (0, s.useMemo)(() => {
                        var e;
                        return null != (e = p()) ? e : (0, u.V)();
                    }, [p]),
                    f = (0, s.useMemo)(() => ''.concat('', '/media/splash_screen/splash_screen_').concat(m, '.webm'), [m]),
                    g = (0, s.useMemo)(() => ({ isVisible: !a }), [a]);
                return (0, r.jsxs)(l.n.Provider, {
                    value: g,
                    children: [
                        !a &&
                            (0, r.jsx)('div', {
                                className: (0, i.$)(h().root, h()['root_'.concat(m)], { [h().root_hidden]: v }),
                                onAnimationEnd: c,
                                children: (0, r.jsx)('video', {
                                    className: h().video,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    onEnded: y,
                                    onError: c,
                                    children: (0, r.jsx)('source', { src: f, type: 'video/webm' }),
                                }),
                            }),
                        t,
                    ],
                });
            };
        },
        62617: (e, t, a) => {
            'use strict';
            a.d(t, { FamilyInviteInitializer: () => o });
            var r = a(84961),
                i = a(53548),
                s = a(37604),
                n = a(72288);
            let o = (0, r.PA)(() => {
                let e = (0, s.h)(),
                    {
                        user: t,
                        familyInvite: { start: a },
                    } = (0, n.g)();
                (0, i.useEffect)(() => {
                    e.shouldShowFamilyInvite && e.inviteId && (t.isAuthorized && e.clear(), a(e.inviteId));
                }, [t.isAuthorized, e, a]);
            });
        },
        62798: (e, t, a) => {
            'use strict';
            a.d(t, { SonataProvider: () => sg });
            var r,
                i,
                s,
                n,
                o,
                l,
                u,
                d,
                c,
                h,
                v,
                y,
                p,
                m,
                f,
                g,
                b,
                E,
                S,
                _,
                A,
                P,
                k,
                I,
                C,
                x,
                T,
                R,
                D = a(88800),
                w = a(71625),
                N = a(84961),
                O = a(53548),
                M = a(30282),
                L = a(9519),
                F = a(7123),
                q = a(54667),
                U = a(44349),
                B = a(61499),
                V = a(56928);
            !(function (e) {
                ((e.PLAYING = 'playing'), (e.NOT_PLAYING = 'not-playing'));
            })(r || (r = {}));
            let W = (e) =>
                !!(
                    'object' == typeof e &&
                    e &&
                    'streamProgress' in e &&
                    'object' == typeof e.streamProgress &&
                    e.streamProgress &&
                    'endPositionSec' in e.streamProgress &&
                    'number' == typeof e.streamProgress.endPositionSec
                );
            class j {
                set playId(e) {
                    this.entityPlayId = e;
                }
                get playId() {
                    return this.entityPlayId;
                }
                set addTracksToPlayerTime(e) {
                    this.entityAddTracksToPlayerTime = e;
                }
                get addTracksToPlayerTime() {
                    return this.entityAddTracksToPlayerTime;
                }
                get totalPlayedSeconds() {
                    return (function (e) {
                        let t,
                            a,
                            i = 0,
                            s = [];
                        if (0 !== e.length) {
                            for (let i of (function (e) {
                                let t = [];
                                for (; 0 !== e.length;) {
                                    let a = e.shift();
                                    if (a && a.stage === r.PLAYING) {
                                        let e = t[t.length - 1];
                                        (e && e.stage !== r.NOT_PLAYING) || t.push(a);
                                    } else if (a && a.stage === r.NOT_PLAYING) {
                                        let e = t[t.length - 1];
                                        e && e.stage === r.PLAYING && t.push(a);
                                    }
                                }
                                let a = t[t.length - 1];
                                return (a && a.stage === r.PLAYING && t.push({ stage: r.NOT_PLAYING, perfNow: performance.now(), ts: Date.now() }), t);
                            })(e))
                                (i.stage === r.PLAYING ? (t = i.perfNow) : (a = i.perfNow), t && a && (s.push(a - t), (t = void 0), (a = void 0)));
                            for (let e of s) i += e;
                            return Math.round((i / 1e3 + Number.EPSILON) * 1e3) / 1e3;
                        }
                        return i;
                    })([...this.entityTimeStagesOfPlayback]);
                }
                get timeStagesOfPlayback() {
                    return this.entityTimeStagesOfPlayback;
                }
                saveTimeStageOfPlayback(e) {
                    let t = { stage: e.stage, perfNow: performance.now(), ts: Date.now() };
                    (e.reason && (t.reason = e.reason), this.entityTimeStagesOfPlayback.push(t));
                }
                clearTimeStagesOfPlayback() {
                    this.entityTimeStagesOfPlayback = [];
                }
                get data() {
                    return this.entityData;
                }
                get isAvailable() {
                    return !!('available' in this.entityData.meta && this.entityData.meta.available);
                }
                get isDisliked() {
                    return void 0 !== this.likeStore && this.likeStore.isTrackDisliked(this.entityData.meta.id);
                }
                get isExplicit() {
                    return 'contentWarning' in this.entityData.meta && this.entityData.meta.contentWarning === B.K.EXPLICIT;
                }
                get everFinished() {
                    return W(this.entityData.meta) ? this.entityData.meta.streamProgress.everFinished : null;
                }
                set everFinished(e) {
                    W(this.entityData.meta) && null !== e && (this.entityData.meta.streamProgress.everFinished = e);
                }
                hasPlayId() {
                    return '' !== this.playId;
                }
                constructor(e) {
                    ((0, L._)(this, 'entityData', void 0),
                        (0, L._)(this, 'likeStore', void 0),
                        (0, L._)(this, 'entityPlayId', ''),
                        (0, L._)(this, 'entityAddTracksToPlayerTime', ''),
                        (0, L._)(this, 'entityTimeStagesOfPlayback', []),
                        (0, L._)(this, 'mediaElementErrorReloadCounter', 0),
                        (0, L._)(this, 'mediaSourceData', null),
                        (0, L._)(this, 'expectedQuality', null),
                        (0, L._)(this, 'startPosition', null),
                        (0, L._)(this, 'contentType', V.e.AUDIO),
                        (0, L._)(this, 'hidden', !1),
                        (this.entityData = e.data),
                        (this.likeStore = e.likeStore));
                }
            }
            class K extends j {}
            class Y extends j {
                constructor(...e) {
                    (super(...e), (0, L._)(this, 'contentType', V.e.DOWNLOADED_AUDIO));
                }
            }
            class G extends j {}
            class z extends j {
                get isAvailable() {
                    return !1;
                }
                get isDisliked() {
                    return !1;
                }
            }
            var Q = a(39499);
            class H extends Q.t {
                constructor(e, { code: t = 'E_ENTITY_FACTORY', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'EntityFactoryException'), Object.setPrototypeOf(this, H.prototype));
                }
            }
            class X extends j {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    (super(...e), (0, L._)(this, 'contentType', V.e.HLS));
                }
            }
            class J extends j {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
            }
            class Z extends j {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    (super(...e), (0, L._)(this, 'contentType', V.e.CLIP));
                }
            }
            class $ extends j {
                get isAvailable() {
                    return !0;
                }
                get isDisliked() {
                    return !1;
                }
                constructor(...e) {
                    (super(...e), (0, L._)(this, 'contentType', V.e.HLS));
                }
            }
            class ee {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    void 0 === a.fromCurrentContext && (a.fromCurrentContext = !0);
                    try {
                        switch (a.type) {
                            case U.R.Music:
                                t = new K({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.DownloadedMusic:
                                t = new Y({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.VibeTrack:
                                t = new G({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.Generative:
                                t = new X({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.SmartPreview:
                                t = new J({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.Clip:
                                t = new Z({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.Radio:
                                t = new $({ data: a, likeStore: this.likeStore });
                                break;
                            case U.R.Unknown:
                                (a.meta.type, q.S.MUSIC, (t = new K({ data: { ...a, type: U.R.Music }, likeStore: this.likeStore })));
                                break;
                            case F.z4.Unloaded:
                                t = new z({ data: a, likeStore: this.likeStore });
                        }
                    } catch (e) {
                        throw new H('Error while creating entity', { cause: e, data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new H('Cannot create entities with nonexistent type', { code: 'E_NONEXISTENT_ENTITY_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    ((0, L._)(this, 'likeStore', void 0), (this.likeStore = e.likeStore));
                }
            }
            var et = a(68211),
                ea = a(18593);
            function er(e, t) {
                let a = [];
                for (let r of e) for (let e of r) a.push({ type: F.z4.Unloaded, meta: e, additional: t });
                return a;
            }
            var ei = a(82141);
            class es extends Q.t {
                constructor(e, { code: t = 'E_CONTEXT', name: a, ...r } = {}) {
                    (super(e, { code: t, ...r }),
                        (0, L._)(this, 'name', void 0),
                        (this.name = null != a ? a : 'ContextException'),
                        Object.setPrototypeOf(this, es.prototype));
                }
            }
            class en extends F.EX {
                get isCurrentContext() {
                    return this.isCurrent;
                }
                set isCurrentContext(e) {
                    this.isCurrent = e;
                }
                get availableActions() {
                    return this.actions;
                }
                logError(e) {
                    let t,
                        { name: a, message: r = 'Error in YaMusicContext', data: i, cause: s, originalError: n } = e;
                    ((t = n instanceof Q.t ? n : new es(r, { name: a, cause: (0, et.createObjectFromError)(s), data: i })),
                        this.logger.error(t, { ...t.data, code: t.code, cause: t.cause, stack: t.stack, message: t.message }));
                }
                constructor({ logger: e }) {
                    (super(),
                        (0, L._)(this, 'isCurrent', !1),
                        (0, L._)(this, 'actions', {
                            moveBackward: new ei.cJ(!1),
                            moveForward: new ei.cJ(!0),
                            repeat: new ei.cJ(null),
                            shuffle: new ei.cJ(null),
                            speed: new ei.cJ(null),
                        }),
                        (0, L._)(this, 'from', ''),
                        (0, L._)(this, 'utmLink', void 0),
                        (0, L._)(this, 'logger', void 0),
                        (this.logger = e));
                }
            }
            function eo(e, t) {
                return e.map((e) => ({ type: U.R.SmartPreview, meta: e, additional: t }));
            }
            class el extends en {
                loadTrailer() {
                    return this.albumsResource
                        .getTrailer({ albumId: Number(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new es('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_TRAILER',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return this.albumsResource
                        .getAlbumWithRichTracks({ albumId: Number(this.contextData.meta.id), resumeStream: !0 })
                        .then((e) => ((this.contextData.meta = e), e))
                        .catch((e) => {
                            throw new es('Error in AlbumContext', {
                                code: 'E_ALBUM_LOAD_CONTEXT_META',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => eo(t.trailer.tracks, e))
                        : this.contextData.meta.volumes
                          ? Promise.resolve(er(this.contextData.meta.volumes, e))
                          : this.loadContextMeta().then((t) => Promise.resolve(er(t.volumes, e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                get resumeFromIndex() {
                    var e;
                    if ((null == (e = this.contextData.meta.resumeFrom) ? void 0 : e.trackId) && Array.isArray(this.contextData.meta.volumes)) {
                        let e = [].concat(...this.contextData.meta.volumes).findIndex((e) => {
                            var t;
                            return String(e.id) === String(null == (t = this.contextData.meta.resumeFrom) ? void 0 : t.trackId);
                        });
                        if (e >= 0) return e;
                    }
                    return null;
                }
                constructor(e) {
                    (super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'albumsResource', void 0), (0, L._)(this, 'variables', void 0));
                    let { data: t, albumsResource: a, variables: r } = e;
                    ((this.albumsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r));
                }
            }
            var eu = a(67960);
            class ed extends en {
                loadTrailer() {
                    let { uid: e, kind: t } = (0, eu.I)(this.contextData.meta.id);
                    return this.usersResource
                        .getPlaylistTrailer({ userId: e, playlistKind: t })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new es('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_TRAILER',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.contextData.meta.uuid,
                        { uid: t, kind: a } = (0, eu.I)(this.contextData.meta.id),
                        r = 3 === a;
                    return (
                        r && void 0 !== e
                            ? this.playlistResource.getPlaylist({ playlistUuid: e, resumeStream: !1, richTracks: !1 })
                            : this.usersResource.getPlaylistWithTracksIds({ userId: t, playlistKind: a, resumeStream: !1, trackMetaType: r ? 'music' : void 0 })
                    )
                        .then((e) => {
                            let t,
                                a,
                                r = { ...e, id: ((t = e.uid), (a = e.kind), ''.concat(t, ':').concat(a)) };
                            return ((this.contextData.meta = r), r);
                        })
                        .catch((e) => {
                            throw new es('Error in PlaylistContext', {
                                code: 'E_PLAYLIST_LOAD_CONTEXT_META',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => eo(t.trailer.tracks, e));
                    if (this.contextData.meta.tracks) {
                        let t = [];
                        for (let a of this.contextData.meta.tracks) t.push({ type: F.z4.Unloaded, meta: a, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        for (let r of t.tracks) a.push({ type: F.z4.Unloaded, meta: r, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    (super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'usersResource', void 0),
                        (0, L._)(this, 'playlistResource', void 0),
                        (0, L._)(this, 'variables', void 0));
                    let { data: t, playlistResource: a, usersResource: r, variables: i } = e;
                    ((this.usersResource = r),
                        (this.playlistResource = a),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.variables = i));
                }
            }
            class ec extends en {
                loadTrailer() {
                    return this.artistsResource
                        .getTrailer({ artistId: String(this.contextData.meta.id) })
                        .then((e) => ((this.contextData.meta.trailerTracks = e.trailer.tracks), e))
                        .catch((e) => {
                            throw new es('Error in ArtistContext', {
                                code: 'E_ARTIST_LOAD_TRAILER',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    return (
                        this.artistsResource
                            .getInfo({ artistId: String(this.contextData.meta.id) })
                            .then((e) => {
                                Object.assign(this.contextData.meta, e);
                            })
                            .catch((e) => {
                                throw new es('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, et.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            }),
                        this.artistsResource
                            .getArtistTrackIds({ artistId: String(this.contextData.meta.id) })
                            .then((e) => ((this.contextData.meta.trackIds = e), this.contextData.meta))
                            .catch((e) => {
                                throw new es('Error in ArtistContext', {
                                    code: 'E_ARTIST_LOAD_CONTEXT_META',
                                    cause: (0, et.createObjectFromError)(e),
                                    data: { contextId: this.contextData.meta.id },
                                });
                            })
                    );
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    if (this.contextData.trailer) return this.loadTrailer().then((t) => eo(t.trailer.tracks, e));
                    if (this.contextData.meta.trackIds) {
                        let t = [];
                        for (let a of this.contextData.meta.trackIds) t.push({ type: F.z4.Unloaded, meta: { id: a }, additional: e });
                        return Promise.resolve(t);
                    }
                    return this.loadContextMeta().then((t) => {
                        let a = [];
                        if (t.trackIds) for (let r of t.trackIds) a.push({ type: F.z4.Unloaded, meta: { id: r }, additional: e });
                        return a;
                    });
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    (super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'artistsResource', void 0), (0, L._)(this, 'variables', void 0));
                    let { data: t, artistsResource: a, variables: r } = e;
                    ((this.artistsResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r));
                }
            }
            var eh = a(11105);
            function ev(e) {
                return (null == e ? void 0 : e.data.type) === U.R.VibeTrack;
            }
            let ey = 'user:onyourwave';
            function ep(e) {
                var t;
                let a;
                if (!(a = e.data.type === F.z4.Unloaded ? e.data.meta.id : 'realId' in e.data.meta ? e.data.meta.realId : e.data.meta.id))
                    throw new Q.t('Can not create trackId for entity.');
                let r = 'albums' in e.data.meta ? e.data.meta.albums : [];
                return r && (null == (t = r[0]) ? void 0 : t.id) ? ''.concat(a, ':').concat(r[0].id) : String(a);
            }
            function em() {
                return new Date().toISOString();
            }
            function ef(e) {
                let t,
                    a,
                    r,
                    { entity: i, type: s, from: n } = e;
                'batchId' in i.data && void 0 !== i.data.batchId && (t = i.data.batchId);
                try {
                    switch (s) {
                        case eh.O.RADIO_STARTED:
                            r = { event: { type: s, timestamp: em(), from: n }, from: n };
                            break;
                        case eh.O.TRACK_STARTED:
                        case eh.O.LIKE:
                        case eh.O.UNLIKE:
                        case eh.O.UNDISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: em(), trackId: ep(i) }, from: n };
                            break;
                        case eh.O.TRACK_FINISHED:
                            if (ev(i) && i.data.meta.durationMs) {
                                let e = i.data.meta.durationMs / 1e3;
                                a = e % 1 == 0 ? e : Number(e.toFixed(3));
                            }
                            r = {
                                batchId: t,
                                event: { type: s, timestamp: em(), trackId: ep(i), totalPlayedSeconds: i.totalPlayedSeconds, trackLengthSeconds: a },
                                from: n,
                            };
                            break;
                        case eh.O.SKIP:
                        case eh.O.DISLIKE:
                            r = { batchId: t, event: { type: s, timestamp: em(), trackId: ep(i), totalPlayedSeconds: i.totalPlayedSeconds }, from: n };
                    }
                    return { feedback: r };
                } catch (e) {
                    return { feedback: void 0, error: e };
                }
            }
            function eg(e, t) {
                if (e === t) return !0;
                let a = [eh.O.SKIP, eh.O.TRACK_FINISHED];
                return a.includes(e) && a.includes(t);
            }
            let eb = new Set([eh.O.LIKE, eh.O.UNLIKE, eh.O.DISLIKE, eh.O.UNDISLIKE]),
                eE = (e) => eb.has(e);
            function eS(e, t) {
                return e.some(
                    (e) =>
                        eg(t.event.type, e.event.type) &&
                        'trackId' in t.event &&
                        'trackId' in e.event &&
                        t.event.trackId === e.event.trackId &&
                        (!eE(e.event.type) || t.event.timestamp === e.event.timestamp),
                );
            }
            var e_ = a(76794);
            let eA = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                eP = (e) => eA.test(String(e)),
                ek = (e) => {
                    let { meta: t } = e.data,
                        a = 'trackSource' in t ? t.trackSource : void 0;
                    return void 0 !== a ? a === e_.J.UGC || a === e_.J.OWN_REPLACED_TO_UGC : eP(t.id);
                };
            var eI = a(17055);
            function eC(e) {
                if (ev(e) || (0, eI.b)(e)) return e.data.radioSessionId;
            }
            class ex {
                set afterErrorHook(e) {
                    this.afterError = e;
                }
                storeFeedbacksForWasPlayedTracks(e, t) {
                    for (let i of e)
                        if (ev(i.entity) && i.entity.data.wasPlayed) {
                            var a, r;
                            let { feedback: e, error: s } = ef({ entity: i.entity, type: eh.O.TRACK_STARTED, from: t }),
                                { feedback: n, error: o } = ef({ entity: i.entity, type: eh.O.TRACK_FINISHED, from: t }),
                                l = eC(i.entity);
                            (e || null == (a = this.afterError) || a.promise(new Q.t('[VibeContext] Can not create feedback for history vibe track', { cause: s })),
                                n || null == (r = this.afterError) || r.promise(new Q.t('[VibeContext] Can not create feedback for history vibe track', { cause: o })),
                                e && n && l && this.sessionStore.storeSessionFeedbacksInHistory([e, n], l));
                        }
                }
                storeDeferredSkip(e) {
                    var t, a, r;
                    let { entity: i, from: s } = e,
                        n = eC(i);
                    if (!n) return !1;
                    let { feedback: o, error: l } = ef({ entity: i, type: eh.O.SKIP, from: s });
                    if (!o) return (null == (t = this.afterError) || t.promise(new Q.t('[VibeContext] Cannot create deferred SKIP feedback', { cause: l })), !1);
                    if ('trackId' in o.event && ek(i)) return !1;
                    let u = this.sessionStore.store.get(n);
                    return (
                        !(eS(null != (a = null == u ? void 0 : u.historyFeedbacks) ? a : [], o) || eS(null != (r = null == u ? void 0 : u.feedbacks) ? r : [], o)) &&
                        (this.validateFeedback(o), this.sessionStore.storeSessionFeedbacks(o, n), !0)
                    );
                }
                sendFeedbacksForInactiveSessions() {
                    return this.sendDeferredFeedbacks({ onlyInactiveSessions: !0 });
                }
                sendStoredInMemoryFeedbacks() {
                    let { force: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.sendDeferredFeedbacks(void 0, e);
                }
                sendDeferredFeedbacks(e, t) {
                    var a;
                    return (null == (a = this.variables) ? void 0 : a.sendFeedbacksWithTracks) && !t
                        ? Promise.resolve()
                        : this.deferredFeedbacksQueue.prepare(e).then((e) => {
                              var t;
                              return (null == (t = e.sessionsFeedbacks) ? void 0 : t.length)
                                  ? this.rotorResource
                                        .sessionsFeedbacks({ sessions: e.sessionsFeedbacks })
                                        .then(() => this.deferredFeedbacksQueue.commit(e))
                                        .catch((t) => (this.deferredFeedbacksQueue.rollback(e), Promise.reject(t)))
                                  : Promise.resolve();
                          });
                }
                sendFeedback(e) {
                    var t, a, r;
                    let { entity: i, type: s, from: n, session: o, sendWithSessionTracks: l = !1, saveFeedbackToHistory: u = !1 } = e,
                        d = s === eh.O.RADIO_STARTED ? o.radioSessionId : eC(i);
                    if (!d) return Promise.reject(new Q.t('Cannot create feedback. No radioSessionId.'));
                    let { feedback: c, error: h } = ef({ entity: i, type: s, from: n });
                    if (!c) return Promise.reject(new Q.t('Cannot create feedback', { data: { type: s }, cause: h }));
                    if ('trackId' in c.event && ek(i)) return Promise.resolve();
                    let v = this.sessionStore.store.get(d);
                    return eS(null != (a = null == v ? void 0 : v.historyFeedbacks) ? a : [], c) || eS(null != (r = null == v ? void 0 : v.feedbacks) ? r : [], c)
                        ? Promise.resolve()
                        : (this.validateFeedback(c), (null == (t = this.variables) ? void 0 : t.sendFeedbacksWithTracks) || l)
                          ? (this.sessionStore.storeSessionFeedbacks(c, d), Promise.resolve())
                          : this.rotorResource
                                .sessionFeedback({ radioSessionId: d, feedback: c })
                                .catch((e) => {
                                    try {
                                        this.sessionStore.storeSessionFeedbacks(c, d);
                                    } catch (e) {}
                                    throw e;
                                })
                                .then(() => (u && this.sessionStore.storeSessionFeedbacksInHistory([c], d), Promise.resolve()));
                }
                validateFeedback(e) {
                    let t = [eh.O.TRACK_STARTED, eh.O.TRACK_FINISHED, eh.O.SKIP, eh.O.LIKE, eh.O.UNLIKE, eh.O.DISLIKE, eh.O.UNDISLIKE];
                    if (!e.batchId && t.includes(e.event.type)) {
                        var a;
                        null == (a = this.afterError) || a.promise(new Q.t('[VibeContext] No batchId in feedback', { data: { feedback: e } }));
                    }
                }
                constructor({ rotorResource: e, sessionStore: t, deferredFeedbacksQueue: a, variables: r }) {
                    ((0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'afterError', void 0),
                        (this.rotorResource = e),
                        (this.sessionStore = t),
                        (this.deferredFeedbacksQueue = a),
                        (this.variables = r));
                }
            }
            function eT(e) {
                let { targetEntityWasPlayed: t, hasSourceContext: a, targetEntityIndex: r, livePlayableIndex: i, targetEntityIsLastEntity: s, useWaveQueue: n } = e;
                return !1 === n ? !s && t : !s && (t || a || r <= i);
            }
            function eR(e) {
                return e.filter((e) => {
                    if ('string' == typeof e) {
                        let [t] = e.split(':');
                        return !eP(null != t ? t : '');
                    }
                    return !e.ugc;
                });
            }
            let eD = (e, t) => {
                var a;
                let r = [
                    e,
                    null != (a = t.batchId) ? a : 'no-batch',
                    ((e) => {
                        let { type: t } = e.event;
                        return t === eh.O.SKIP || t === eh.O.TRACK_FINISHED ? 'track-ending' : t;
                    })(t),
                    ((e) => {
                        let { event: t } = e;
                        return 'trackId' in t && t.trackId
                            ? t.trackId
                            : 'playable' in t && t.playable
                              ? ''.concat(t.playable.type, ':').concat(t.playable.id)
                              : t.timestamp;
                    })(t),
                ];
                return (eE(t.event.type) && r.push(t.event.timestamp), r.map((e) => encodeURIComponent(e)).join(':'));
            };
            class ew {
                needToReset() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (
                        (!!t && !!this.terminated) ||
                        (!((null == (e = this.wave) ? void 0 : e.seeds) && 1 === this.wave.seeds.length && this.wave.seeds.includes(ey)) &&
                            Date.now() - this.lastInteractionTime >= 324e5)
                    );
                }
                constructor(e) {
                    ((0, L._)(this, 'radioSessionId', void 0),
                        (0, L._)(this, 'feedbacks', void 0),
                        (0, L._)(this, 'historyFeedbacks', void 0),
                        (0, L._)(this, 'active', void 0),
                        (0, L._)(this, 'lastInteractionTime', void 0),
                        (0, L._)(this, 'wave', void 0),
                        (0, L._)(this, 'acceptedSeeds', void 0),
                        (0, L._)(this, 'descriptionSeed', void 0),
                        (0, L._)(this, 'batchId', void 0),
                        (0, L._)(this, 'pumpkin', void 0),
                        (0, L._)(this, 'terminated', void 0),
                        (this.radioSessionId = e.radioSessionId),
                        (this.feedbacks = e.feedbacks),
                        (this.historyFeedbacks = e.historyFeedbacks),
                        (this.active = e.active),
                        (this.lastInteractionTime = e.lastInteractionTime),
                        (this.wave = e.wave),
                        (this.acceptedSeeds = e.acceptedSeeds),
                        (this.descriptionSeed = e.descriptionSeed),
                        (this.batchId = e.batchId),
                        (this.pumpkin = e.pumpkin),
                        (this.terminated = e.terminated));
                }
            }
            class eN {
                setLastInteractionTime() {
                    this.observableActiveSession.value && (this.observableActiveSession.value.lastInteractionTime = Date.now());
                }
                storeSessionFeedbacksInHistory(e, t) {
                    let a = this.store.get(t);
                    if (a) a.historyFeedbacks.push(...e);
                    else throw new Q.t('Can not store history feedback. No session was created in map.');
                }
                storeSessionFeedbacks(e, t) {
                    let a = this.store.get(t);
                    if (a) {
                        var r, i;
                        let s = Array.isArray(e) ? e : [e];
                        (a.feedbacks.push(...s), this.storePersistentFeedbacks(s, t, null != (i = null == (r = a.wave) ? void 0 : r.seeds) ? i : []));
                    } else throw new Q.t('Can not store feedbacks for sending. No session was created in map.');
                }
                getSessionFeedbacks(e) {
                    let t = this.store.get(e);
                    if (t) {
                        let e = t.feedbacks;
                        return ((t.feedbacks = []), e);
                    }
                }
                getSessionsFeedbacks() {
                    let e = [];
                    for (let [r, i] of this.store.entries()) {
                        if (i.feedbacks.length) {
                            var t, a;
                            (e.push({ radioSessionId: r, feedbacks: i.feedbacks, seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [] }),
                                (i.feedbacks = []));
                        }
                        i.feedbacks = [];
                    }
                    return 0 !== e.length ? e : void 0;
                }
                clearStoredFeedbacks() {
                    this.store.clear();
                }
                isDeferredFeedbacksStorageEnabled() {
                    var e;
                    return !!((null == (e = this.variables) ? void 0 : e.enableStoredDeferredFeedbacks) && this.deferredFeedbacksStore);
                }
                storePersistentFeedbacks(e, t, a) {
                    if (!this.isDeferredFeedbacksStorageEnabled()) return;
                    let r = Date.now();
                    Promise.all(
                        e
                            .map((e) => ({ id: eD(t, e), radioSessionId: t, seeds: a, feedback: e, createdAt: r }))
                            .map((e) => {
                                var t;
                                return null == (t = this.deferredFeedbacksStore) ? void 0 : t.storeFeedbackData(e);
                            }),
                    ).catch(() => void 0);
                }
                addActiveSession(e) {
                    let { session: t, feedbacks: a = [] } = e;
                    this.store.forEach((e) => {
                        e.active = !1;
                    });
                    let { radioSessionId: r, wave: i, acceptedSeeds: s, pumpkin: n, batchId: o, descriptionSeed: l, terminated: u } = t,
                        d = new ew({
                            radioSessionId: r,
                            wave: i,
                            acceptedSeeds: s,
                            pumpkin: n,
                            descriptionSeed: l,
                            batchId: o,
                            feedbacks: a,
                            terminated: u,
                            historyFeedbacks: [],
                            active: !0,
                            lastInteractionTime: Date.now(),
                        });
                    (this.store.set(r, d), (this.observableActiveSession.value = d));
                }
                addClonedSession(e) {
                    let { radioSessionId: t, feedbacks: a = [], lastInteractionTime: r } = e;
                    this.store.set(t, new ew({ radioSessionId: t, feedbacks: a, historyFeedbacks: [], active: !1, lastInteractionTime: r }));
                }
                constructor({ variables: e, deferredFeedbacksStore: t }) {
                    ((0, L._)(this, 'store', new Map()),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0),
                        (0, L._)(this, 'observableActiveSession', new ei.cJ(void 0)),
                        (this.variables = e),
                        (this.deferredFeedbacksStore = t));
                }
            }
            !(function (e) {
                ((e.CLONED = 'cloned'), (e.RESTORED_TO_DEFAULT_SEED = 'restoredToDefaultSeed'));
            })(i || (i = {}));
            var eO = a(80989);
            function eM(e) {
                let { sequence: t, batchId: a, radioSessionId: r, additional: i } = e,
                    s = [];
                for (let e of t)
                    s.push({
                        type: U.R.VibeTrack,
                        additional: i,
                        batchId: a,
                        radioSessionId: r,
                        meta: { ...e.track, liked: e.liked, trackParameters: e.trackParameters },
                        fromCurrentContext: !0,
                        wasPlayed: !1,
                    });
                return s;
            }
            class eL {
                get aiContentReductionRequestParams() {
                    var e;
                    return (null == (e = this.variables) ? void 0 : e.aiContentReductionEnabled) ? { aiContentReductionEnabled: !0 } : {};
                }
                emitSessionDiagnosticEvent(e) {
                    if (this.onSessionDiagnosticEvent)
                        try {
                            this.onSessionDiagnosticEvent(this.contextData, e());
                        } catch (e) {}
                }
                requestSession(e) {
                    let { operation: t, params: a, request: r, process: i } = e,
                        s = ++this.diagnosticOperationId,
                        n = 'request';
                    this.emitSessionDiagnosticEvent(() => {
                        var e, r;
                        return {
                            operationId: s,
                            timestamp: Date.now(),
                            phase: 'requested',
                            operation: t,
                            request: {
                                queue: null == (e = a.queue) ? void 0 : e.slice(),
                                seeds: null == (r = a.seeds) ? void 0 : r.slice(),
                                radioSessionId: a.radioSessionId,
                                trackToStartFrom: a.trackToStartFrom,
                                includeTracksInResponse: a.includeTracksInResponse,
                                allowExplicit: a.allowExplicit,
                                interactive: a.interactive,
                            },
                        };
                    });
                    let o = r(a).then(
                        (e) => (
                            (n = 'processing'),
                            this.emitSessionDiagnosticEvent(() => ({
                                operationId: s,
                                timestamp: Date.now(),
                                phase: 'received',
                                response: {
                                    radioSessionId: 'radioSessionId' in e ? e.radioSessionId : a.radioSessionId,
                                    batchId: e.batchId,
                                    seeds: 'wave' in e ? [...e.wave.seeds] : void 0,
                                    trackIds: e.sequence.map((e) => {
                                        let { track: t } = e;
                                        return String(t.id);
                                    }),
                                    terminated: e.terminated,
                                },
                            })),
                            i(e)
                        ),
                    );
                    return (
                        o.then(
                            () => {
                                this.emitSessionDiagnosticEvent(() => ({ operationId: s, timestamp: Date.now(), phase: 'processed' }));
                            },
                            () => {
                                this.emitSessionDiagnosticEvent(() => ({ operationId: s, timestamp: Date.now(), phase: 'failed', stage: n }));
                            },
                        ),
                        o
                    );
                }
                applyNewSession(e) {
                    return (
                        (this.contextData.meta.session = e), (this.contextData.meta.id = (0, eO.f)(e.wave.seeds)), this.sessionStore.addActiveSession({ session: e }), e
                    );
                }
                get needToReset() {
                    var e, t;
                    return !!(null == (t = this.sessionStore.observableActiveSession.value)
                        ? void 0
                        : t.needToReset(null == (e = this.variables) ? void 0 : e.useTerminated));
                }
                sessionClone(e) {
                    let { cloneSessionId: t, queue: a, trackToStartFrom: r, includeTracksInResponse: i, allowExplicit: s, interactive: n } = this.contextData;
                    return t
                        ? this.requestSession({
                              operation: 'clone',
                              params: {
                                  ...this.aiContentReductionRequestParams,
                                  includeWaveModel: !0,
                                  radioSessionId: t,
                                  trackToStartFrom: r,
                                  queue: a,
                                  allowExplicit: s,
                                  includeTracksInResponse: i,
                                  interactive: n,
                                  sessions: e.sessionsFeedbacks,
                              },
                              request: (e) => this.rotorResource.sessionClone(e),
                              process: (t) => this.deferredFeedbacksQueue.commit(e).then(() => this.applyNewSession(t)),
                          }).catch((t) => {
                              throw (this.deferredFeedbacksQueue.rollback(e), new Q.t('Error in clone vibe session', { cause: t }));
                          })
                        : Promise.reject(new Q.t('Error in clone vibe session. No cloneSessionId'));
                }
                sessionNew(e) {
                    let { seeds: t, queue: a, trackToStartFrom: r, includeTracksInResponse: i, allowExplicit: s, interactive: n } = this.contextData;
                    return this.requestSession({
                        operation: 'new',
                        params: {
                            ...this.aiContentReductionRequestParams,
                            seeds: t,
                            includeWaveModel: !0,
                            trackToStartFrom: r,
                            queue: a,
                            allowExplicit: s,
                            includeTracksInResponse: i,
                            interactive: n,
                            sessions: e.sessionsFeedbacks,
                        },
                        request: (e) => this.rotorResource.sessionNew(e),
                        process: (t) => this.deferredFeedbacksQueue.commit(e).then(() => this.applyNewSession(t)),
                    }).catch((t) => {
                        throw (this.deferredFeedbacksQueue.rollback(e), new Q.t('Error in create new vibe session', { cause: t }));
                    });
                }
                createSessionWithSettings(e) {
                    let { seeds: t, rotorQueueParam: a, allowExplicit: r, interactive: i, from: s } = e,
                        { trackToStartFrom: n, includeTracksInResponse: o } = this.contextData;
                    return this.deferredFeedbacksQueue.prepare().then((e) =>
                        this.requestSession({
                            operation: 'settings',
                            params: {
                                ...this.aiContentReductionRequestParams,
                                sessions: e.sessionsFeedbacks,
                                includeTracksInResponse: o,
                                trackToStartFrom: n,
                                seeds: t,
                                queue: a,
                                allowExplicit: r,
                                includeWaveModel: !0,
                                interactive: i,
                            },
                            request: (e) => this.rotorResource.sessionNew(e),
                            process: (t) =>
                                this.deferredFeedbacksQueue
                                    .commit(e)
                                    .then(() => ((this.contextData.meta.allowExplicit = r), s && (this.contextData.from = s), this.applyNewSession(t))),
                        }).catch((t) => {
                            throw (this.deferredFeedbacksQueue.rollback(e), new Q.t('Error in create new vibe session with settings', { cause: t }));
                        }),
                    );
                }
                defaultSessionNew(e) {
                    let { rotorQueueParam: t, preparedFeedbacks: a } = e,
                        { includeTracksInResponse: r, allowExplicit: i, queue: s } = this.contextData;
                    return this.requestSession({
                        operation: 'reset',
                        params: {
                            ...this.aiContentReductionRequestParams,
                            sessions: a.sessionsFeedbacks,
                            seeds: [ey],
                            queue: null != t ? t : s,
                            includeWaveModel: !0,
                            allowExplicit: i,
                            includeTracksInResponse: r,
                            interactive: !0,
                        },
                        request: (e) => this.rotorResource.sessionNew(e),
                        process: (e) => this.deferredFeedbacksQueue.commit(a).then(() => this.applyNewSession(e)),
                    }).catch((e) => {
                        throw (this.deferredFeedbacksQueue.rollback(a), new Q.t('Error in create new vibe session', { cause: e }));
                    });
                }
                getLoadContextMetaRequest() {
                    let { cloneSessionId: e } = this.contextData;
                    return this.deferredFeedbacksQueue
                        .prepare()
                        .then((t) =>
                            this.needToReset
                                ? ((this.restoreMethod = i.RESTORED_TO_DEFAULT_SEED), this.defaultSessionNew({ preparedFeedbacks: t }))
                                : e
                                  ? ((this.restoreMethod = i.CLONED), this.sessionClone(t))
                                  : this.sessionNew(t),
                        );
                }
                getEntitiesFromDefaultSessionNew(e) {
                    let t = { from: this.contextData.from, utmLink: this.contextData.utmLink };
                    return this.deferredFeedbacksQueue
                        .prepare()
                        .then((t) => this.defaultSessionNew({ rotorQueueParam: e, preparedFeedbacks: t }))
                        .then((e) => {
                            let { batchId: a, sequence: r, radioSessionId: i } = e;
                            return eM({ batchId: a, sequence: r, radioSessionId: i, additional: t });
                        });
                }
                getEntitiesFromCurrentSession(e) {
                    var t, a;
                    if (!this.contextData.meta.session) return Promise.reject(new Q.t('Cannot get next vibe tracks. No session'));
                    let {
                            meta: { session: r },
                        } = this.contextData,
                        i = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        { radioSessionId: s } = r,
                        n = null != (a = null == (t = this.variables) ? void 0 : t.sendFeedbacksWithTracks) && a;
                    return this.deferredFeedbacksQueue.prepare(n ? void 0 : { radioSessionId: s }).then((t) => {
                        var a, r;
                        let o = n ? { sessions: t.sessionsFeedbacks } : { feedbacks: null == (r = t.sessionsFeedbacks) || null == (a = r[0]) ? void 0 : a.feedbacks };
                        return this.requestSession({
                            operation: 'tracks',
                            params: { ...this.aiContentReductionRequestParams, radioSessionId: s, queue: e, ...o },
                            request: (e) => this.rotorResource.sessionTracks(e),
                            process: (e) =>
                                this.deferredFeedbacksQueue.commit(t).then(() => {
                                    let { batchId: t, sequence: a, terminated: r } = e,
                                        n = eM({ batchId: t, sequence: a, radioSessionId: s, additional: i });
                                    return (
                                        this.sessionStore.observableActiveSession.value && (this.sessionStore.observableActiveSession.value.terminated = r),
                                        (this.contextData.meta.sessionTracks = e),
                                        (this.contextData.meta.sessionTracks.sequence = []),
                                        n
                                    );
                                }),
                        }).catch(
                            (e) => (
                                this.deferredFeedbacksQueue.rollback(t),
                                Promise.reject(new Q.t('Error in getting next vibe tracks from current session', { cause: e }))
                            ),
                        );
                    });
                }
                getEntitiesFromNextSequence(e) {
                    Promise.resolve([]);
                    return (this.needToReset ? this.getEntitiesFromDefaultSessionNew(e) : this.getEntitiesFromCurrentSession(e)).then((e) => e);
                }
                getEntitiesFromInitialSequence() {
                    if (!this.contextData.meta.session) return [];
                    let e = { from: this.contextData.from, utmLink: this.contextData.utmLink },
                        { batchId: t, sequence: a, radioSessionId: r } = this.contextData.meta.session,
                        i = eM({ batchId: t, sequence: a, radioSessionId: r, additional: e });
                    return ((this.contextData.meta.session.sequence = []), i);
                }
                constructor({ contextData: e, rotorResource: t, sessionStore: a, deferredFeedbacksQueue: r, variables: i, onSessionDiagnosticEvent: s }) {
                    ((0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'onSessionDiagnosticEvent', void 0),
                        (0, L._)(this, 'diagnosticOperationId', 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'timeOfLastInteractionWithVibe', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'restoreMethod', void 0),
                        (this.contextData = e),
                        (this.onSessionDiagnosticEvent = s),
                        (this.rotorResource = t),
                        (this.sessionStore = a),
                        (this.deferredFeedbacksQueue = r),
                        (this.variables = i),
                        (this.timeOfLastInteractionWithVibe = e.timeOfLastInteractionWithVibe ? e.timeOfLastInteractionWithVibe : Date.now()));
                }
            }
            function eF(e, t, a) {
                let r = void 0 !== a ? a : t;
                return eR(e.slice(r, r + 2));
            }
            function eq(e, t) {
                let a = null,
                    r = null;
                for (let i = e.length - 1; i >= 0; i--) {
                    let s = e[i];
                    if (!s || !ev(s.entity)) continue;
                    let { entity: n, sourceContext: o } = s;
                    if (!o) {
                        if (n.data.wasPlayed || t === i) break;
                        ((a = s), (r = i));
                    }
                }
                let i = null !== r ? r + 1 : e.length;
                return { vibeHistory: e.slice(0, i), firstNotPlayedVibeEntity: a, firstNotPlayedVibeEntityIndex: r };
            }
            function eU(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    { entityList: a, livePlayableIndex: r, index: i } = e;
                return t
                    ? eF(
                          a.value.map((e) => ep(e.entity)),
                          i.value,
                          r.value,
                      )
                    : eR(
                          (function (e, t) {
                              let { vibeHistory: a } = eq(e, t);
                              return a.filter((e) => !ek(e.entity)).map((e) => ep(e.entity));
                          })(a.value, i.value),
                      ).slice(-100);
            }
            class eB {
                storeFeedbackData() {
                    return Promise.resolve();
                }
                getStoredFeedbacksData() {
                    return Promise.resolve([]);
                }
                deleteFeedbacksData() {
                    return Promise.resolve();
                }
                deleteFeedbacksBySessionFeedbacks() {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger() {}
            }
            class eV {
                prepare() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = this.runtimeState.prepareLock.catch(() => void 0).then(() => this.prepareInternal(e));
                    return (
                        (this.runtimeState.prepareLock = t.then(
                            () => void 0,
                            () => void 0,
                        )),
                        t
                    );
                }
                commit(e) {
                    if ((this.storeMemoryFeedbacksInHistory(e.memorySessionsFeedbacks), !this.deferredFeedbacksStore))
                        return (this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds), Promise.resolve());
                    let t = this.getPersistentCleanupRequests(e);
                    return t.length
                        ? Promise.all(t)
                              .then(() => {
                                  this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds);
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.logger) || t.error('[DeferredFeedbacksQueue] Error while deleting sent feedbacks', { error: e });
                              })
                        : (this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds), Promise.resolve());
                }
                rollback(e) {
                    (this.restoreMemoryFeedbacks(e.memorySessionsFeedbacks), this.releaseStoredFeedbackIdsClaim(e.claimedStoredFeedbackIds));
                }
                prepareInternal(e) {
                    let t = this.prepareMemorySessionsFeedbacks(e),
                        a = this.claimMemorySessionsFeedbacks(t);
                    return this.prepareStoredFeedbacks(e).then((e) => {
                        this.claimStoredFeedbacks(e);
                        let r = [...a, ...e.map((e) => e.id)];
                        return {
                            memorySessionsFeedbacks: t,
                            storedFeedbacks: e,
                            claimedStoredFeedbackIds: r,
                            sessionsFeedbacks: this.mergeSessionsFeedbacks(t, this.groupStoredFeedbacksBySession(e)),
                        };
                    });
                }
                prepareMemorySessionsFeedbacks(e) {
                    let { radioSessionId: t, onlyInactiveSessions: a } = e;
                    if (a) return this.prepareInactiveMemorySessionsFeedbacks();
                    if (!t) return this.sessionStore.getSessionsFeedbacks();
                    let r = this.sessionStore.getSessionFeedbacks(t);
                    if (null == r ? void 0 : r.length) return [{ radioSessionId: t, seeds: this.getSessionSeeds(t), feedbacks: r }];
                }
                prepareStoredFeedbacks(e) {
                    var t, a, r;
                    let { radioSessionId: i, onlyInactiveSessions: s } = e;
                    return ((null == (t = this.variables) ? void 0 : t.enableStoredDeferredFeedbacks) ||
                        (null == (a = this.variables) ? void 0 : a.shouldDeleteDeferredFeedbacksObjectStore)) &&
                        this.deferredFeedbacksStore
                        ? (this.deferredFeedbacksStore.setErrorLogger((e) => {
                              var t;
                              null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error', { error: e });
                          }),
                          null == (r = this.variables) ? void 0 : r.shouldDeleteDeferredFeedbacksObjectStore)
                            ? this.deferredFeedbacksStore
                                  .deleteDatabase()
                                  .then(() => [])
                                  .catch((e) => {
                                      var t;
                                      return (null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error while deleting database', { error: e }), []);
                                  })
                            : this.deferredFeedbacksStore
                                  .openDatabase()
                                  .then(() =>
                                      ((e, t) => {
                                          if (!e.isAvailable()) return Promise.resolve({ storedFeedbacks: [] });
                                          let a = Date.now();
                                          return e.getStoredFeedbacksData(t, a).then((e) =>
                                              e.length
                                                  ? {
                                                        storedFeedbacks: e,
                                                        sessionsFeedbacks: ((e) => {
                                                            let t = new Map();
                                                            for (let a of e) {
                                                                let e = t.get(a.radioSessionId);
                                                                if (e) {
                                                                    e.feedbacks.push(a.feedback);
                                                                    continue;
                                                                }
                                                                t.set(a.radioSessionId, { radioSessionId: a.radioSessionId, seeds: a.seeds, feedbacks: [a.feedback] });
                                                            }
                                                            return Array.from(t.values());
                                                        })(e),
                                                    }
                                                  : { storedFeedbacks: e },
                                          );
                                      })(this.deferredFeedbacksStore),
                                  )
                                  .then((e) => {
                                      let { storedFeedbacks: t } = e;
                                      return t.filter((e) => {
                                          var t;
                                          let a = !i || e.radioSessionId === i,
                                              r = !s || (null == (t = this.sessionStore.store.get(e.radioSessionId)) ? void 0 : t.active) === !1;
                                          return a && r && !this.runtimeState.claimedStoredFeedbackIds.has(e.id);
                                      });
                                  })
                                  .catch((e) => {
                                      var t;
                                      return (null == (t = this.logger) || t.error('[DeferredFeedbacksStore] Error while preparing stored feedbacks', { error: e }), []);
                                  })
                        : Promise.resolve([]);
                }
                claimStoredFeedbacks(e) {
                    for (let t of e) this.runtimeState.claimedStoredFeedbackIds.add(t.id);
                }
                claimMemorySessionsFeedbacks(e) {
                    if (!this.shouldUseStoredFeedbacks() || !e) return [];
                    let t = [];
                    for (let a of e)
                        for (let e of a.feedbacks) {
                            let r = eD(a.radioSessionId, e);
                            (this.runtimeState.claimedStoredFeedbackIds.add(r), t.push(r));
                        }
                    return t;
                }
                releaseStoredFeedbackIdsClaim(e) {
                    if (e) for (let t of e) this.runtimeState.claimedStoredFeedbackIds.delete(t);
                }
                getPersistentCleanupRequests(e) {
                    if (!this.deferredFeedbacksStore) return [];
                    let t = [];
                    if ((e.storedFeedbacks.length && t.push(this.deferredFeedbacksStore.deleteFeedbacksData(e.storedFeedbacks)), this.shouldUseStoredFeedbacks())) {
                        var a;
                        for (let r of null != (a = e.memorySessionsFeedbacks) ? a : [])
                            t.push(this.deferredFeedbacksStore.deleteFeedbacksBySessionFeedbacks({ radioSessionId: r.radioSessionId, feedbacks: r.feedbacks }));
                    }
                    return t;
                }
                shouldUseStoredFeedbacks() {
                    var e;
                    return !!((null == (e = this.variables) ? void 0 : e.enableStoredDeferredFeedbacks) && this.deferredFeedbacksStore);
                }
                groupStoredFeedbacksBySession(e) {
                    let t = new Map();
                    for (let a of e) {
                        let e = t.get(a.radioSessionId);
                        if (e) {
                            this.addFeedbacks(e.feedbacks, [a.feedback]);
                            continue;
                        }
                        t.set(a.radioSessionId, { radioSessionId: a.radioSessionId, seeds: a.seeds, feedbacks: [a.feedback] });
                    }
                    let a = Array.from(t.values());
                    return a.length ? a : void 0;
                }
                mergeSessionsFeedbacks(e, t) {
                    let a = [],
                        r = (e) => {
                            if (e)
                                for (let t of e) {
                                    let e = a.find((e) => e.radioSessionId === t.radioSessionId);
                                    if (e) {
                                        this.addFeedbacks(e.feedbacks, t.feedbacks);
                                        continue;
                                    }
                                    let r = [];
                                    (this.addFeedbacks(r, t.feedbacks), a.push({ radioSessionId: t.radioSessionId, seeds: t.seeds, feedbacks: r }));
                                }
                        };
                    return (r(e), r(t), a.length ? a : void 0);
                }
                addFeedbacks(e, t) {
                    for (let a of t) eS(e, a) || e.push(a);
                }
                storeMemoryFeedbacksInHistory(e) {
                    if (e) for (let t of e) this.sessionStore.storeSessionFeedbacksInHistory(t.feedbacks, t.radioSessionId);
                }
                restoreMemoryFeedbacks(e) {
                    if (e)
                        for (let t of e) {
                            let e = this.sessionStore.store.get(t.radioSessionId);
                            if (e) {
                                e.feedbacks.push(...t.feedbacks);
                                continue;
                            }
                            this.sessionStore.storeSessionFeedbacks(t.feedbacks, t.radioSessionId);
                        }
                }
                getSessionSeeds(e) {
                    var t, a, r;
                    return null != (r = null == (a = this.sessionStore.store.get(e)) || null == (t = a.wave) ? void 0 : t.seeds) ? r : [];
                }
                prepareInactiveMemorySessionsFeedbacks() {
                    let e = [];
                    for (let r of this.sessionStore.store.values()) {
                        var t, a;
                        !r.active &&
                            r.feedbacks.length &&
                            (e.push({ radioSessionId: r.radioSessionId, seeds: null != (a = null == (t = r.wave) ? void 0 : t.seeds) ? a : [], feedbacks: r.feedbacks }),
                            (r.feedbacks = []));
                    }
                    return e.length ? e : void 0;
                }
                getRuntimeState(e) {
                    if (!e) return this.createRuntimeState();
                    let t = eV.runtimeStateByStore.get(e);
                    if (t) return t;
                    let a = this.createRuntimeState();
                    return (eV.runtimeStateByStore.set(e, a), a);
                }
                createRuntimeState() {
                    return { prepareLock: Promise.resolve(), claimedStoredFeedbackIds: new Set() };
                }
                constructor({ sessionStore: e, variables: t, deferredFeedbacksStore: a, logger: r }) {
                    ((0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0),
                        (0, L._)(this, 'logger', void 0),
                        (0, L._)(this, 'runtimeState', void 0),
                        (this.sessionStore = e),
                        (this.variables = t),
                        (this.deferredFeedbacksStore = a),
                        (this.logger = r),
                        (this.runtimeState = this.getRuntimeState(a)));
                }
            }
            (0, L._)(eV, 'runtimeStateByStore', new WeakMap());
            class eW extends en {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    ((this.afterErrorHook = t.afterError),
                        (this.feedbacksController.afterErrorHook = t.afterError),
                        t.beforeDestroy.tapPromise('VibeContext', () => {
                            var e;
                            return (null == (e = this.variables) ? void 0 : e.sendDeferredFeedbacksOnDestroy)
                                ? this.feedbacksController.sendStoredInMemoryFeedbacks({ force: !0 }).catch((e) => {
                                      this.logVibeError({ message: 'Error while sending stored in-memory vibe feedbacks on destroy', cause: e });
                                  })
                                : Promise.resolve();
                        }),
                        t.beforeContextSet.tap('VibeContext', () => {
                            var e, t, r;
                            if (!this.isCurrentContext) return;
                            let i = a.state.queueState.currentEntity.value;
                            if (!i) return;
                            let s = this.contextData.meta.session,
                                n = !!(null == (e = this.variables) ? void 0 : e.sendFeedbacksWithTracks);
                            if (!s) {
                                (this.logVibeError({ message: 'Cannot send feedbacks on context switch. No session' }), n || this.sessionStore.clearStoredFeedbacks());
                                return;
                            }
                            (this.feedbacksController.storeDeferredSkip({ entity: i.entity, from: this.contextData.from }),
                                (!n ||
                                    null == (t = this.variables) ||
                                    !t.enableStoredDeferredFeedbacks ||
                                    (null == (r = this.variables) ? void 0 : r.shouldDeleteDeferredFeedbacksObjectStore)) &&
                                    this.feedbacksController
                                        .sendStoredInMemoryFeedbacks({ force: n })
                                        .then(() => {
                                            n || this.sessionStore.clearStoredFeedbacks();
                                        })
                                        .catch((e) => {
                                            this.logVibeError({ message: 'Error while sending vibe feedbacks on context switch', cause: e });
                                        }));
                        }),
                        t.afterSetupQueue.tap('VibeContext', () => {
                            if (!this.isCurrentContext || !this.sessionController.restoreMethod) return;
                            let { value: e } = a.state.queueState.entityList;
                            if ((this.feedbacksController.storeFeedbacksForWasPlayedTracks(e.slice(0, -1), this.from), this.contextData.meta.session)) {
                                let e = this.sessionController.getEntitiesFromInitialSequence();
                                a.injectLast({ entitiesData: e });
                            }
                            ((this.sessionController.timeOfLastInteractionWithVibe = Date.now()), this.sessionStore.setLastInteractionTime());
                        }),
                        t.afterMediaStartPlaying.tapPromise('VibeContext', () =>
                            this.isCurrentContext && this.contextData.meta.session
                                ? new Promise((e) => {
                                      let t = a.state.queueState.currentEntity.value;
                                      if (!t) return void e();
                                      let { entity: r } = t;
                                      (this.isVibeStarted
                                          ? this.sendFeedback({ type: eh.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 })
                                          : (this.sendFeedback({ type: eh.O.RADIO_STARTED, entity: r }).then(() => {
                                                this.sendFeedback({ type: eh.O.TRACK_STARTED, entity: r, saveFeedbackToHistory: !0 });
                                            }),
                                            (this.isVibeStarted = !0)),
                                          e());
                                  })
                                : Promise.resolve(),
                        ),
                        t.beforeFindPlayableEntityIndex.tapPromise('VibeContext', (e) => {
                            if (!this.isCurrentContext) return Promise.resolve();
                            let t = Promise.resolve();
                            switch (e.method) {
                                case F.So.AUTO_MOVE_FORWARD:
                                case F.So.ERROR_MOVE_FORWARD:
                                    t = this.onAutoMoveForward(a);
                                    break;
                                case F.So.MOVE_FORWARD:
                                case F.So.DISLIKE_MOVE_FORWARD:
                                    t = this.onMoveForward(a, e.method);
                                    break;
                                case F.So.MOVE_BACKWARD:
                                    t = this.onMoveBackward(a);
                                    break;
                                case F.So.SET_INDEX:
                                    t = this.onSetIndex(a, e.indexToChangeOn);
                            }
                            return t.finally(() => {
                                ((this.sessionController.timeOfLastInteractionWithVibe = Date.now()), this.sessionStore.setLastInteractionTime());
                            });
                        }),
                        t.beforeInject.tap('VibeContext', (e) => {
                            var t;
                            if (!this.isCurrentContext || !e.sourceContext) return e;
                            let a = (function (e) {
                                let { position: t, livePlayableIndex: a, entityList: r, useWaveQueue: i } = e;
                                if ('number' != typeof a || !i) return t;
                                let s = (function (e, t) {
                                        if (void 0 === e) return 0;
                                        let a = 0;
                                        for (let i = t + 1; i < e.length; i++) {
                                            var r;
                                            (null == (r = e[i]) ? void 0 : r.sourceContext) && (a += 1);
                                        }
                                        return a;
                                    })(r, a),
                                    n = a + 1 + s;
                                return t > n ? n : t;
                            })({
                                position: e.position,
                                livePlayableIndex: e.livePlayableIndex,
                                entityList: e.entityList,
                                useWaveQueue: null == (t = this.variables) ? void 0 : t.useWaveQueue,
                            });
                            return (
                                (this.sessionController.timeOfLastInteractionWithVibe = Date.now()),
                                this.sessionStore.setLastInteractionTime(),
                                { ...e, calibratedPosition: a }
                            );
                        }),
                        t.afterInject.tap('VibeContext', (e) => {
                            if (!this.isCurrentContext) return e;
                            let { contextEntityPairs: t } = e;
                            for (let e of t)
                                if ((ev(e.entity) || (0, eI.b)(e.entity)) && !e.entity.data.fromCurrentContext) {
                                    var r, i;
                                    ((e.entity.data.batchId = ((i = e.entity), 'user-queue-'.concat(i.data.meta.id, '-').concat(Date.now()))),
                                        (e.entity.data.radioSessionId = null == (r = this.contextData.meta.session) ? void 0 : r.radioSessionId));
                                } else a.hooks.afterError.promise(new Q.t('Can not manualy set batchId/radioSessionId for '.concat(e.entity.data.type, ' entity.')));
                            return { contextEntityPairs: t };
                        }));
                }
                get observableActiveSession() {
                    return this.sessionStore.observableActiveSession;
                }
                loadContextMeta() {
                    let {
                        meta: { id: e },
                        cloneSessionId: t,
                    } = this.contextData;
                    if (((this.contextData.queue = this.contextData.queue ? eR(this.contextData.queue) : void 0), t)) {
                        var a;
                        this.sessionStore.addClonedSession({
                            radioSessionId: t,
                            lastInteractionTime: null != (a = this.data.timeOfLastInteractionWithVibe) ? a : Date.now(),
                        });
                    }
                    return this.sessionController.getLoadContextMetaRequest().then((t) => ((this.contextData.trackToStartFrom = void 0), { id: e, session: t }));
                }
                get shouldRemoveNotPlayedVibeTracksByTtl() {
                    return Date.now() - this.sessionController.timeOfLastInteractionWithVibe >= 18e5;
                }
                setSettings(e) {
                    var t, a, r;
                    let i,
                        { seeds: s, queueState: n, allowExplicit: o, interactive: l, from: u } = e;
                    this.contextData.interactive = l;
                    let d = eU(n, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam),
                        c = n.currentEntity.value,
                        h = null != o ? o : n.filterParams.value.allowExplicit;
                    if (null != (r = null == (a = this.variables) ? void 0 : a.batchFeedbacksOnVibeSettingsChange) && r)
                        (c && ev(c.entity) && this.feedbacksController.storeDeferredSkip({ entity: c.entity, from: this.contextData.from }),
                            (i = this.sessionController.createSessionWithSettings({ seeds: s, rotorQueueParam: d, allowExplicit: h, interactive: l, from: u })));
                    else {
                        let e = Promise.resolve();
                        (c && ev(c.entity) && (e = this.sendFeedback({ entity: c.entity, type: eh.O.SKIP })),
                            (i = e.then(() =>
                                this.sessionController.createSessionWithSettings({ seeds: s, rotorQueueParam: d, allowExplicit: h, interactive: l, from: u }),
                            )));
                    }
                    return i
                        .then(() => {
                            var e;
                            ((null == (e = this.variables) ? void 0 : e.sendRadioStartedOnVibeSettingsChange) && (this.isVibeStarted = !1), u && (this.from = u));
                        })
                        .catch((e) => {
                            this.logVibeError({ message: 'Error while setting new vibe settings', cause: e });
                        });
                }
                getContextEntitiesData() {
                    let {
                        meta: { session: e },
                    } = this.contextData;
                    return e
                        ? Promise.resolve(this.sessionController.getEntitiesFromInitialSequence())
                        : this.loadContextMeta().then(() => this.sessionController.getEntitiesFromInitialSequence());
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                logVibeError(e) {
                    var t, a, r;
                    let { message: i, cause: s } = e;
                    null == (a = this.afterErrorHook) ||
                        a.promise(
                            new Q.t('[VibeContext] '.concat(i || 'Error in VibeContext'), {
                                cause: s,
                                data: {
                                    contextId: this.contextData.meta.id,
                                    sessionId: null != (r = null == (t = this.contextData.meta.session) ? void 0 : t.radioSessionId) ? r : '',
                                },
                            }),
                        );
                }
                onAutoMoveForward(e) {
                    var t;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let a = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: eh.O.TRACK_FINISHED,
                        entity: null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        let { index: t, entityList: r } = e.state.queueState,
                            i = t.value === r.value.length - 2,
                            s = t.value === r.value.length - 1;
                        if (!i && !s) return Promise.resolve();
                        let n = this.getNextTracks(a).then((t) => {
                            (e.injectLast({ entitiesData: t }), (this.availableActions.moveForward.value = !0));
                        });
                        return s ? n : (i && n.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveForward(e, t) {
                    var a;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let r = this.onQueueNavigationCommon(e);
                    return (
                        t === F.So.DISLIKE_MOVE_FORWARD
                            ? Promise.resolve()
                            : this.sendFeedback({
                                  type: eh.O.SKIP,
                                  entity: null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity,
                                  sendWithSessionTracks: !0,
                                  saveFeedbackToHistory: !0,
                              })
                    ).then(() => {
                        var t;
                        let { index: a, entityList: i, livePlayableIndex: s } = e.state.queueState,
                            n = a.value === i.value.length - 1,
                            o = a.value + 1,
                            l = e.getEntityByIndex({ index: o }),
                            u = o === i.value.length - 1;
                        if (
                            eT({
                                targetEntityWasPlayed: !!(l && ev(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: o,
                                livePlayableIndex: s.value,
                                targetEntityIsLastEntity: u,
                                useWaveQueue: !!(null == (t = this.variables) ? void 0 : t.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let d = this.getNextTracks(r).then((t) => e.injectLast({ entitiesData: t }));
                        return n ? d : (d.catch((e) => this.logVibeError({ cause: e })), Promise.resolve());
                    });
                }
                onMoveBackward(e) {
                    this.removeNotPlayedVibeTracksByTtl(e);
                    let t = e.state.queueState.currentEntity.value;
                    if (!t) return Promise.resolve();
                    let { entity: a } = t;
                    return (this.sendFeedback({ entity: a, type: eh.O.SKIP, saveFeedbackToHistory: !0 }), Promise.resolve());
                }
                onSetIndex(e, t) {
                    var a;
                    if (this.sessionTracksPromise || !this.contextData.meta.session) return Promise.resolve();
                    let r = this.onQueueNavigationCommon(e);
                    return this.sendFeedback({
                        type: eh.O.SKIP,
                        entity: null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity,
                        sendWithSessionTracks: !0,
                        saveFeedbackToHistory: !0,
                    }).then(() => {
                        var a;
                        let { index: i, entityList: s, livePlayableIndex: n } = e.state.queueState,
                            o = i.value === s.value.length - 1,
                            l = e.getEntityByIndex({ index: t });
                        if (
                            eT({
                                targetEntityWasPlayed: !!(l && ev(l.entity) && l.entity.data.wasPlayed),
                                hasSourceContext: !!(null == l ? void 0 : l.sourceContext),
                                targetEntityIndex: t,
                                livePlayableIndex: n.value,
                                targetEntityIsLastEntity: t === s.value.length - 1,
                                useWaveQueue: !!(null == (a = this.variables) ? void 0 : a.useWaveQueue),
                            })
                        )
                            return Promise.resolve();
                        this.removeVibeTracksBeforeMoveForward(e);
                        let u = this.getNextTracks(r)
                            .then((t) => e.injectLast({ entitiesData: t }))
                            .catch((e) => this.logVibeError({ cause: e }));
                        return o ? u : Promise.resolve();
                    });
                }
                getNextTracks(e) {
                    return (
                        (this.sessionTracksPromise = this.sendFeedbacksForInactiveSessions()
                            .then(() => this.sessionController.getEntitiesFromNextSequence(e))
                            .finally(() => {
                                ((this.sessionTracksPromise = null), (this.availableActions.moveForward.value = !0));
                            })),
                        (this.availableActions.moveForward.value = !1),
                        this.sessionTracksPromise
                    );
                }
                sendFeedbacksForInactiveSessions() {
                    return this.feedbacksController
                        .sendFeedbacksForInactiveSessions()
                        .catch((e) => (this.logVibeError({ message: 'Error while sending feedback for inactive sessions', cause: e }), Promise.resolve()));
                }
                sendFeedback(e) {
                    let { entity: t, type: a, sendWithSessionTracks: r = !1, saveFeedbackToHistory: i = !1 } = e;
                    if (!t) return (this.logVibeError({ message: 'Cannot send feedback. No entity' }), Promise.resolve());
                    let { session: s } = this.contextData.meta;
                    return s
                        ? this.feedbacksController
                              .sendFeedback({ entity: t, type: a, session: s, from: this.contextData.from, sendWithSessionTracks: r, saveFeedbackToHistory: i })
                              .catch((e) => (this.logVibeError({ message: 'Error while sending feedback', cause: e }), Promise.resolve()))
                        : (this.logVibeError({ message: 'Cannot send feedback. No session' }), Promise.resolve());
                }
                calculateLivePlayableIndex(e) {
                    return e.state.queueState.livePlayableIndex.value;
                }
                removeNotPlayedVibeTracksByTtl(e) {
                    let { index: t, entityList: a } = e.state.queueState;
                    if (this.shouldRemoveNotPlayedVibeTracksByTtl) {
                        let r = [];
                        for (let e = t.value + 1; e < a.value.length; e++) {
                            let t = a.value[e];
                            t && ev(t.entity) && !t.entity.data.wasPlayed && r.push(e);
                        }
                        this.remove(e, r);
                    }
                }
                removeVibeTracksBeforeMoveForward(e) {
                    var t, a;
                    let { index: r, entityList: i, livePlayableIndex: s } = e.state.queueState;
                    if (!(null != (a = null == (t = this.variables) ? void 0 : t.useWaveQueue) && a)) {
                        let t = this.getPositionsFromStartToEnd(r.value + 2, i.value.length);
                        this.remove(e, t);
                        return;
                    }
                    let n = this.findNextPlayablePosition(i.value, r.value);
                    if (null === n) return;
                    let o = this.getPositionsToRemoveForWaveQueue(i.value, n + 1, s.value);
                    this.remove(e, o);
                }
                findNextPlayablePosition(e, t) {
                    for (let r = t + 1; r < e.length; r++) {
                        var a;
                        if ((null == (a = e[r]) ? void 0 : a.entity.hidden) !== !0) return r;
                    }
                    return null;
                }
                getPositionsToRemoveForWaveQueue(e, t, a) {
                    let r = [];
                    for (let i = t; i < e.length; i++) {
                        let t = e[i],
                            s = i <= a,
                            n = !!(null == t ? void 0 : t.sourceContext);
                        s || n || r.push(i);
                    }
                    return r;
                }
                getPositionsFromStartToEnd(e, t) {
                    let a = [];
                    for (let r = e; r < t; r++) a.push(r);
                    return a;
                }
                onQueueNavigationCommon(e) {
                    var t;
                    let a = eU(e.state.queueState, null == (t = this.variables) ? void 0 : t.sendCorrectRotorQueueParam);
                    return (this.removeNotPlayedVibeTracksByTtl(e), a);
                }
                remove(e, t) {
                    ((this.handleAfterEntityRemoveHook = !1), e.remove(t, !0));
                }
                constructor(e) {
                    (super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'isVibeStarted', !1),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'sessionTracksPromise', null),
                        (0, L._)(this, 'feedbacksController', void 0),
                        (0, L._)(this, 'sessionStore', void 0),
                        (0, L._)(this, 'deferredFeedbacksQueue', void 0),
                        (0, L._)(this, 'sessionController', void 0),
                        (0, L._)(this, 'afterErrorHook', void 0),
                        (0, L._)(this, 'handleAfterEntityRemoveHook', !0));
                    let { data: t, rotorResource: a, variables: r, deferredFeedbacksStore: i, logger: s } = e;
                    this.contextData = t;
                    let n = null != i ? i : new eB();
                    ((this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = r),
                        (this.sessionStore = new eN({ variables: r, deferredFeedbacksStore: n, logger: s })),
                        (this.deferredFeedbacksQueue = new eV({ sessionStore: this.sessionStore, variables: r, deferredFeedbacksStore: n, logger: s })),
                        (this.feedbacksController = new ex({
                            rotorResource: a,
                            variables: r,
                            sessionStore: this.sessionStore,
                            deferredFeedbacksQueue: this.deferredFeedbacksQueue,
                        })),
                        (this.sessionController = new eL({
                            variables: this.variables,
                            contextData: this.contextData,
                            onSessionDiagnosticEvent: e.onSessionDiagnosticEvent,
                            rotorResource: a,
                            sessionStore: this.sessionStore,
                            deferredFeedbacksQueue: this.deferredFeedbacksQueue,
                        })));
                }
            }
            class ej extends en {
                getContextId() {
                    var e, t;
                    let a = null == (t = this.contextData.meta.albums) || null == (e = t[0]) ? void 0 : e.id;
                    return a ? ''.concat(this.contextData.meta.id, ':').concat(a) : String(this.contextData.meta.id);
                }
                loadTrailer() {
                    return this.tracksResource
                        .getTrailer({ trackId: this.getContextId() })
                        .then((e) => ((this.contextData.meta = e.track), e))
                        .catch((e) => {
                            throw new es('Error in PlaylistContext', { code: 'E_PLAYLIST_LOAD_TRAILER', cause: e, data: { contextId: this.contextData.meta.id } });
                        });
                }
                apply(e) {}
                loadContextMeta() {
                    let e = this.getContextId();
                    return this.tracksResource
                        .getTracksMeta({ trackIds: [e], withProgress: !0 })
                        .then((t) => {
                            let a = t[0];
                            if (a) return ((this.contextData.meta = a), a);
                            throw new es('Error in VariousContext. Track not found', { code: 'E_VARIOUS_LOAD_CONTEXT_META', data: { contextId: e } });
                        })
                        .catch((t) => {
                            throw new es('Error in VariousContext', { code: 'E_VARIOUS_LOAD_CONTEXT_META', cause: t, data: { contextId: e } });
                        });
                }
                getContextEntitiesData() {
                    let e = { from: this.from, utmLink: this.utmLink };
                    return this.contextData.trailer
                        ? this.loadTrailer().then((t) => [{ meta: t.track, type: U.R.SmartPreview, additional: e }])
                        : this.contextData.meta
                          ? Promise.resolve([{ meta: this.contextData.meta, type: U.R.Unknown, additional: e }])
                          : this.loadContextMeta().then((t) => [{ meta: t, type: U.R.Unknown, additional: e }]);
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    (super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'tracksResource', void 0), (0, L._)(this, 'variables', void 0));
                    let { data: t, tracksResource: a, variables: r } = e;
                    ((this.tracksResource = a), (this.contextData = t), (this.from = t.from), (this.utmLink = t.utmLink), (this.variables = r));
                }
            }
            class eK extends Q.t {
                constructor(e, { code: t = 'E_CONTEXT_FACTORY', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'ContextFactoryException'), Object.setPrototypeOf(this, eK.prototype));
                }
            }
            var eY = a(72193);
            let eG = (e) => [{ type: U.R.Generative, meta: e }],
                ez = 'E_GENERATIVE_RESTART_LIMIT',
                eQ = 'E_GENERATIVE_RESTART_FAILED',
                eH = new Set([F.QC.PLAY, F.QC.RESUME, F.QC.MEDIA_ELEMENT_ERROR, F.QC.PRE_FETCH]);
            class eX extends en {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (a.state.playerState.status.onChange((e) => {
                        this.isCurrentContext &&
                            e &&
                            (e === F.MT.PLAYING
                                ? (this.isPaused && this.sendFeedback(eY.Q.StreamPlay, a), (this.isPaused = !1))
                                : e === F.MT.PAUSED && (this.sendFeedback(eY.Q.StreamPause, a), (this.isPaused = !0)));
                    }),
                        t.afterError.tap('GenerativeContext', (e) => {
                            let t = e && e instanceof es && e.code === ez,
                                r = e && e instanceof es && e.code === eQ,
                                i = e instanceof F.LI && eH.has(e.code);
                            !t && !r && this.isCurrentContext && i && (this.restartsCount >= 5 || this.restart(a));
                        }));
                }
                loadContextMeta() {
                    return this.rotorResource
                        .getGenerativeInfo({ stationId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), stream: e.stream, ...e.data };
                            return ((this.contextData.meta = t), t);
                        })
                        .catch((e) => {
                            throw new es('Error GenerativeContext', {
                                code: 'E_GENERATIVE_LOAD_CONTEXT_META',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta.stream) ? void 0 : e.id)
                        ? Promise.resolve(eG(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eG(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                sendFeedback(e, t) {
                    var a;
                    return this.rotorResource
                        .stationFeedback({
                            type: e,
                            stationId: String(this.contextData.meta.id),
                            streamId: String(null == (a = this.contextData.meta.stream) ? void 0 : a.id),
                            timestamp: em(),
                        })
                        .then((a) => {
                            if (a.reload_stream) {
                                let a = e === eY.Q.TimestampDislike;
                                this.restart(t, a);
                            }
                        });
                }
                restart(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.restartsCount >= 5) {
                        let t = new es('Error GenerativeContext', { code: ez, data: { contextId: this.contextData.meta.id } });
                        return (e.hooks.afterError.promise(t), Promise.reject(t));
                    }
                    return (
                        this.restartsCount++,
                        this.loadContextMeta()
                            .then(() => {
                                let a = t || !this.isPaused;
                                return (t && this.isPaused && (this.isPaused = !1), e.restartContext({ playAfterRestart: a, entitiesData: eG(this.contextData.meta) }));
                            })
                            .catch((t) => {
                                let a = new es('Error GenerativeContext restart', {
                                    code: eQ,
                                    cause: (0, et.createObjectFromError)(t),
                                    data: { contextId: this.contextData.meta.id, restartsCount: this.restartsCount },
                                });
                                throw (e.hooks.afterError.promise(a), a);
                            })
                    );
                }
                constructor(e) {
                    (super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'isPaused', !1),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'restartsCount', 0));
                    let { data: t, variables: a, rotorResource: r } = e;
                    ((this.rotorResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a));
                }
            }
            let eJ = (e) => [{ type: U.R.Radio, meta: e }];
            class eZ extends en {
                apply(e) {}
                loadContextMeta() {
                    return this.radioStationsResource
                        .getStreamBySlug({ stationSlug: String(this.contextData.meta.stationSlug), streamSlug: String(this.contextData.meta.streamSlug) })
                        .then((e) => {
                            let t = {
                                id: this.contextData.meta.id,
                                stationSlug: String(this.contextData.meta.stationSlug),
                                streamSlug: String(this.contextData.meta.streamSlug),
                                manualQualitySourceKey: this.contextData.meta.manualQualitySourceKey,
                                stream: e,
                            };
                            return ((this.contextData.meta = t), t);
                        })
                        .catch((e) => {
                            throw new es('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e, t;
                    return (null == (t = this.contextData.meta) || null == (e = t.stream) ? void 0 : e.slug)
                        ? Promise.resolve(eJ(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(eJ(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    (super(e), (0, L._)(this, 'contextData', void 0), (0, L._)(this, 'radioStationsResource', void 0), (0, L._)(this, 'variables', void 0));
                    let { data: t, variables: a, radioStationsResource: r } = e;
                    ((this.radioStationsResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a));
                }
            }
            let e$ = (e) => [{ type: U.R.Radio, meta: e }];
            class e0 extends en {
                apply(e) {}
                loadContextMeta() {
                    return this.radioStreamResource
                        .getByRadioId({ radioId: String(this.contextData.meta.id) })
                        .then((e) => {
                            let t = { id: String(this.contextData.meta.id), ...e };
                            return ((this.contextData.meta = t), t);
                        })
                        .catch((e) => {
                            throw new es('Error RadioContext', {
                                code: 'E_RADIO_LOAD_CONTEXT_META',
                                cause: (0, et.createObjectFromError)(e),
                                data: { contextId: this.contextData.meta.id },
                            });
                        });
                }
                getContextEntitiesData() {
                    var e;
                    return (null == (e = this.contextData.meta) ? void 0 : e.uuid)
                        ? Promise.resolve(e$(this.contextData.meta))
                        : this.loadContextMeta().then((e) => Promise.resolve(e$(e)));
                }
                get type() {
                    return this.contextData.type;
                }
                get data() {
                    return this.contextData;
                }
                constructor(e) {
                    (super(e),
                        (0, L._)(this, 'contextData', void 0),
                        (0, L._)(this, 'radioStreamResource', void 0),
                        (0, L._)(this, 'isPaused', !1),
                        (0, L._)(this, 'restartsCount', 0),
                        (0, L._)(this, 'variables', void 0));
                    let { data: t, variables: a, radioStreamResource: r } = e;
                    ((this.radioStreamResource = r),
                        (this.contextData = t),
                        (this.from = t.from),
                        (this.utmLink = t.utmLink),
                        (this.availableActions.repeat.value = !1),
                        (this.availableActions.shuffle.value = !1),
                        (this.availableActions.moveBackward.value = !1),
                        (this.availableActions.moveForward.value = !1),
                        (this.variables = a));
                }
            }
            class e1 {
                create(e) {
                    let t = null,
                        { data: a } = e;
                    try {
                        var r, i, s, n, o, l, u, d;
                        switch (a.type) {
                            case ea.K.Album:
                                if (!this.albumsResource)
                                    throw new eK('Albums resource is not provided', { code: 'E_ALBUMS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new el({
                                    data: a,
                                    albumsResource: this.albumsResource,
                                    logger: this.logger,
                                    variables: null == (r = this.variables) ? void 0 : r[ea.K.Album],
                                });
                                break;
                            case ea.K.Playlist:
                                if (!this.usersResource || !this.playlistResource)
                                    throw new eK('Users and playlist resources are not provided', {
                                        code: 'E_USERS_AND_PLAYLIST_RESOURCES_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new ed({
                                    data: a,
                                    usersResource: this.usersResource,
                                    playlistResource: this.playlistResource,
                                    logger: this.logger,
                                    variables: null == (i = this.variables) ? void 0 : i[ea.K.Playlist],
                                });
                                break;
                            case ea.K.Artist:
                                if (!this.artistsResource)
                                    throw new eK('Artists resource is not provided', { code: 'E_ARTISTS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ec({
                                    data: a,
                                    artistsResource: this.artistsResource,
                                    logger: this.logger,
                                    variables: null == (s = this.variables) ? void 0 : s[ea.K.Artist],
                                });
                                break;
                            case ea.K.Vibe:
                                if (!this.rotorResource)
                                    throw new eK('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eW({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (n = this.variables) ? void 0 : n[ea.K.Vibe],
                                    deferredFeedbacksStore: this.deferredFeedbacksStore,
                                    onSessionDiagnosticEvent: this.onSessionDiagnosticEvent,
                                });
                                break;
                            case ea.K.Various:
                                if (!this.tracksResource)
                                    throw new eK('Tracks resource is not provided', { code: 'E_TRACKS_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new ej({
                                    data: a,
                                    tracksResource: this.tracksResource,
                                    logger: this.logger,
                                    variables: null == (o = this.variables) ? void 0 : o[ea.K.Various],
                                });
                                break;
                            case ea.K.Generative:
                                if (!this.rotorResource)
                                    throw new eK('Rotor resource is not provided', { code: 'E_ROTOR_RESOURCE_NOT_PROVIDED', data: { type: a.type, meta: a.meta } });
                                t = new eX({
                                    data: a,
                                    rotorResource: this.rotorResource,
                                    logger: this.logger,
                                    variables: null == (l = this.variables) ? void 0 : l[ea.K.Generative],
                                });
                                break;
                            case ea.K.Radio:
                                if (!this.radioStationsResource)
                                    throw new eK('Radio stations resource is not provided', {
                                        code: 'E_RADIO_STATIONS_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new eZ({
                                    data: a,
                                    radioStationsResource: this.radioStationsResource,
                                    logger: this.logger,
                                    variables: null == (u = this.variables) ? void 0 : u[ea.K.Radio],
                                });
                                break;
                            case ea.K.LegacyRadio:
                                if (!this.radioStreamResource)
                                    throw new eK('Radio stream resource is not provided', {
                                        code: 'E_RADIO_STREAM_RESOURCE_NOT_PROVIDED',
                                        data: { type: a.type, meta: a.meta },
                                    });
                                t = new e0({
                                    data: a,
                                    radioStreamResource: this.radioStreamResource,
                                    logger: this.logger,
                                    variables: null == (d = this.variables) ? void 0 : d[ea.K.LegacyRadio],
                                });
                        }
                    } catch (e) {
                        throw new eK('Error while creating context', { cause: (0, et.createObjectFromError)(e), data: { type: a.type, meta: a.meta } });
                    }
                    if (null !== t) return t;
                    throw new eK('Cannot create context with nonexistent type', { code: 'E_NONEXISTENT_CONTEXT_TYPE', data: { type: a.type, meta: a.meta } });
                }
                constructor(e) {
                    ((0, L._)(this, 'logger', void 0),
                        (0, L._)(this, 'onSessionDiagnosticEvent', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'albumsResource', void 0),
                        (0, L._)(this, 'usersResource', void 0),
                        (0, L._)(this, 'artistsResource', void 0),
                        (0, L._)(this, 'rotorResource', void 0),
                        (0, L._)(this, 'tracksResource', void 0),
                        (0, L._)(this, 'playlistResource', void 0),
                        (0, L._)(this, 'radioStationsResource', void 0),
                        (0, L._)(this, 'radioStreamResource', void 0),
                        (0, L._)(this, 'deferredFeedbacksStore', void 0));
                    let {
                        variables: t,
                        logger: a,
                        rotorResource: r,
                        usersResource: i,
                        playlistResource: s,
                        tracksResource: n,
                        albumsResource: o,
                        artistsResource: l,
                        radioStreamResource: u,
                        radioStationsResource: d,
                        deferredFeedbacksStore: c,
                    } = e;
                    ((this.albumsResource = null != o ? o : null),
                        (this.artistsResource = null != l ? l : null),
                        (this.rotorResource = null != r ? r : null),
                        (this.usersResource = null != i ? i : null),
                        (this.tracksResource = null != n ? n : null),
                        (this.playlistResource = null != s ? s : null),
                        (this.radioStationsResource = null != d ? d : null),
                        (this.radioStreamResource = null != u ? u : null),
                        (this.variables = t),
                        (this.deferredFeedbacksStore = null != c ? c : new eB()),
                        (this.logger = a),
                        (this.onSessionDiagnosticEvent = e.onSessionDiagnosticEvent));
                }
            }
            var e3 = a(188),
                e5 = a(22983);
            function e8(e) {
                return !!(0, e3.i)(e) && !!e.data.meta.session && e.data.meta.session.wave.type === e5.y.MIX;
            }
            var e2 = a(6858);
            class e4 {
                set positionSec(e) {
                    this.internalPositionSec = e;
                }
                get positionSec() {
                    return void 0 !== this.internalPositionSec
                        ? this.internalPositionSec
                        : e8(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                          ? this.entity.data.meta.mixFade.inStart
                          : void 0;
                }
                get canBePlayedOnlyWithCrossing() {
                    return e8(this.context);
                }
                canBePlayed(e) {
                    let t = 'playDisliked' in this.context.data && void 0 !== this.context.data.playDisliked && this.context.data.playDisliked,
                        { entityChangeMethod: a, index: r } = e,
                        i = t || a === F.So.SET_INDEX || (a === F.So.PLAY_CONTEXT && void 0 !== r),
                        s = a === F.So.SET_INDEX,
                        n = !i && this.entity.isDisliked,
                        o = !s && this.entity.hidden,
                        l = (0, e3.i)(this.context) || !this.entity.isExplicit || !1 !== e.filterParams.allowExplicit;
                    return !!(this.entity.isAvailable && l) && (n ? !!(0, e3.i)(this.context) : !o);
                }
                getCrossParams() {
                    return e8(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? this.entity.data.meta.mixFade
                        : 'fade' in this.entity.data.meta && void 0 !== this.entity.data.meta.fade
                          ? this.entity.data.meta.fade
                          : null;
                }
                canBeCrossedWith(e) {
                    return (
                        !(
                            !('type' in this.entity.data.meta) ||
                            !('type' in e.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            !('fade' in e.entity.data.meta) ||
                            (0, e2.F)(this.context)
                        ) &&
                        this.entity.data.meta.type === q.S.MUSIC &&
                        e.entity.data.meta.type === q.S.MUSIC &&
                        void 0 !== this.entity.data.meta.fade &&
                        void 0 !== e.entity.data.meta.fade
                    );
                }
                getFadeMode() {
                    return e8(this.context) && 'mixFade' in this.entity.data.meta && void 0 !== this.entity.data.meta.mixFade
                        ? F.OQ.MIX
                        : !('type' in this.entity.data.meta) ||
                            !('fade' in this.entity.data.meta) ||
                            (0, e2.F)(this.context) ||
                            this.entity.data.meta.type !== q.S.MUSIC ||
                            void 0 === this.entity.data.meta.fade
                          ? F.OQ.NONE
                          : F.OQ.CROSSFADE;
                }
                constructor(e, t, a) {
                    ((0, L._)(this, 'context', void 0),
                        (0, L._)(this, 'entity', void 0),
                        (0, L._)(this, 'lastChangeMethod', null),
                        (0, L._)(this, 'lastSeekPosition', void 0),
                        (0, L._)(this, 'internalPositionSec', void 0),
                        (0, L._)(this, 'sourceContext', void 0),
                        (this.context = e),
                        (this.entity = t),
                        (this.sourceContext = a));
                }
            }
            class e9 {
                createContext(e) {
                    return this.contextFactory.create(e);
                }
                createEntity(e) {
                    return this.entityFactory.create(e);
                }
                createContextEntityPair(e, t, a) {
                    return new e4(e, t, a);
                }
                constructor(e) {
                    ((0, L._)(this, 'entityFactory', void 0),
                        (0, L._)(this, 'contextFactory', void 0),
                        (this.entityFactory = new ee(e.entityFactoryParams)),
                        (this.contextFactory = new e1(e.contextFactoryParams)));
                }
            }
            var e6 = a(81969);
            let e7 = 'deferred-feedbacks';
            class te extends Q.t {
                constructor(e, { code: t = 'E_DEFERRED_FEEDBACKS_IDB_STORE', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'DeferredFeedbacksStoreException'), Object.setPrototypeOf(this, te.prototype));
                }
            }
            let tt = (e, t) => (void 0 === e && void 0 === t) || (void 0 !== e && void 0 !== t && e === t),
                ta = (e) => ('trackId' in e.event ? e.event.trackId : void 0),
                tr = (e) => {
                    let { event: t } = e;
                    if (!('trackId' in t) || !t.trackId) return 'playable' in t && t.playable ? ''.concat(t.playable.type, ':').concat(t.playable.id) : t.timestamp;
                };
            class ti {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new e6.h(this.idbName).deleteDB({ onBlocked: () => void 0 }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return (
                        this.idb || (this.idb = this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() })), this.idb
                    );
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storeFeedbackData(e) {
                    let t = this.pendingFeedbackIds.has(e.id);
                    return (
                        t || this.pendingFeedbackIds.add(e.id),
                        this.executeTransaction((a) =>
                            a.get(e7, e.id).then((r) =>
                                r || t
                                    ? a.count(e7)
                                    : a
                                          .add(e7, e)
                                          .catch((e) => (this.isConstraintError(e) ? Promise.resolve() : Promise.reject(e)))
                                          .then(() => a.count(e7)),
                            ),
                        )
                            .then((e) =>
                                'number' == typeof e && e > this.storedFeedbacksLimit ? this.deleteOverLimitFeedbacks(e, this.storedFeedbacksLimit) : Promise.resolve(),
                            )
                            .catch((e) => {
                                throw this.generateAndLogError('Saving Deferred Feedback Error', e);
                            })
                            .finally(() => {
                                t || this.pendingFeedbackIds.delete(e.id);
                            })
                    );
                }
                getStoredFeedbacksData(e, t) {
                    return this.executeTransaction(
                        (a) => ('number' == typeof t ? a.getAllFromIndex(e7, 'createdAt', IDBKeyRange.upperBound(t, !0), e) : a.getAll(e7, null, e)),
                        { defaultValue: [] },
                    ).catch((e) => {
                        throw this.generateAndLogError('Error getting Deferred Feedbacks', e);
                    });
                }
                deleteFeedbacksData(e) {
                    return Promise.all(
                        e.map((e) => {
                            let { id: t } = e;
                            return this.executeTransaction((e) => e.delete(e7, t));
                        }),
                    )
                        .then(() => void 0)
                        .catch((e) => {
                            throw this.generateAndLogError('Error deleting Deferred Feedbacks', e);
                        });
                }
                deleteFeedbacksBySessionFeedbacks(e) {
                    let { radioSessionId: t, feedbacks: a } = e;
                    return a.length
                        ? this.iterateByCursor('radioSessionId', t, 'readwrite', (e) =>
                              a.some((a) =>
                                  ((e, t, a) => {
                                      let r = e.feedback;
                                      return (
                                          !(e.radioSessionId !== t || !eg(r.event.type, a.event.type) || (eE(r.event.type) && r.event.timestamp !== a.event.timestamp)) &&
                                          !!tt(r.batchId, a.batchId) &&
                                          !!tt(ta(r), ta(a)) &&
                                          tt(tr(r), tr(a))
                                      );
                                  })(e.value, t, a),
                              )
                                  ? e.delete()
                                  : Promise.resolve(),
                          ).catch((e) => {
                              throw this.generateAndLogError('Error deleting Deferred Feedbacks by session feedbacks', e);
                          })
                        : Promise.resolve();
                }
                deleteOverLimitFeedbacks(e, t) {
                    let a = e - t;
                    return this.iterateByCursor('createdAt', null, 'readwrite', (e, t) => (t > a ? Promise.resolve() : e.delete()), 'next').catch((e) => {
                        throw this.generateAndLogError('Error deleting overlimit Deferred Feedbacks', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 'prev',
                        s = 0,
                        n = (e) =>
                            e
                                ? r(e, ++s)
                                      .then(() => e.continue())
                                      .then(n)
                                : Promise.resolve();
                    return this.getCursor(e, t, a, i).then(n);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                openIdb(e) {
                    return new e6.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, r) => {
                                var i;
                                (this.logError('Connection has been blocked'), null == e || null == (i = e.onBlocked) || i.call(e, t, a, r));
                            },
                            onTerminated: () => {
                                var t;
                                (this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e));
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(e7, { keyPath: 'id' });
                                (t.createIndex('radioSessionId', 'radioSessionId', { unique: !1 }), t.createIndex('createdAt', 'createdAt', { unique: !1 }));
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            ((this.idbIsAvailable = !1), this.logError('Open storage error', e));
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    return this.executeTransaction(
                        (i) => {
                            let s = i.transaction([e7], a).objectStore(e7);
                            return e ? s.index(e).openCursor(t, r) : s.openCursor(t, r);
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, r);
                }
                generateAndLogError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    return (null == (a = this.errorLogger) || a.call(this, r), r);
                }
                generateError(e, t) {
                    var a;
                    let r = '[IndexedDB]['.concat(this.idbName, '.').concat(e7, ']: ').concat(e),
                        i = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new te(r, { data: { originalError: i, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                isConstraintError(e) {
                    return e instanceof DOMException && 'ConstraintError' === e.name;
                }
                constructor(e = 500) {
                    ((0, L._)(this, 'storedFeedbacksLimit', void 0),
                        (0, L._)(this, 'idb', void 0),
                        (0, L._)(this, 'errorLogger', void 0),
                        (0, L._)(this, 'pendingFeedbackIds', new Set()),
                        (0, L._)(this, 'idbIsAvailable', !1),
                        (0, L._)(this, 'idbName', void 0),
                        (0, L._)(this, 'storageEstimate', void 0),
                        (this.storedFeedbacksLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_deferred_feedbacks', '_').concat('1.0.0')));
                }
            }
            var ts = a(33871);
            class tn {
                getAverageFrequencies(e) {
                    if (null === this.currentGraph) return [];
                    let { analyserNode: t, spectrum: a, bufferLength: r, context: i } = this.currentGraph;
                    if (!t) throw new Q.t('No analyser node has been created');
                    t.getByteFrequencyData(a);
                    let s = i.sampleRate / r,
                        n = 0,
                        o = e.map((e) => {
                            let { low: t, high: a } = e,
                                r = Math.floor(t / s),
                                i = Math.floor(a / s);
                            return ((n = Math.max(n, i)), { startIndex: r, endIndex: i });
                        }),
                        l = Array(n + 2).fill(0);
                    for (let e = 0; e < n + 1; e++) {
                        var u, d;
                        let t = (null != (u = a[e]) ? u : 0) / 256;
                        l[e + 1] = (null != (d = l[e]) ? d : 0) + t;
                    }
                    return o.map((e) => {
                        let { startIndex: t, endIndex: a } = e,
                            r = l[t],
                            i = l[a + 1];
                        return void 0 === r || void 0 === i ? 0 : (i - r) / (a - t + 1);
                    });
                }
                constructor({ currentAudioElement: e, graphs: t }) {
                    ((0, L._)(this, 'currentGraph', null),
                        (0, L._)(this, 'graphs', void 0),
                        (this.graphs = t),
                        e.onChange((e) => {
                            let t = this.graphs.find((t) => t.audioElement === e);
                            t && (this.currentGraph = t);
                        }));
                }
            }
            !(function (e) {
                ((e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'));
            })(s || (s = {}));
            class to {
                enable() {
                    this.state !== s.ENABLED &&
                        (this.graphs.forEach((e) => {
                            e.connectEqualizer();
                        }),
                        (this.state = s.ENABLED));
                }
                disable() {
                    this.state !== s.DISABLED &&
                        (this.graphs.forEach((e) => {
                            e.disconnectEqualizer();
                        }),
                        (this.state = s.DISABLED));
                }
                applyPreset(e) {
                    ((this.preset = e),
                        this.graphs.forEach((t) => {
                            (t.setPreamp(e.preamp), t.setBands(e.frequencies));
                        }));
                }
                addGraphs(e) {
                    let t = e.filter((e) => !this.graphs.includes(e));
                    if (0 === t.length) return;
                    this.graphs.push(...t);
                    let { preset: a } = this;
                    (a &&
                        t.forEach((e) => {
                            (e.setPreamp(a.preamp), e.setBands(a.frequencies));
                        }),
                        this.state === s.ENABLED &&
                            t.forEach((e) => {
                                e.connectEqualizer();
                            }));
                }
                constructor({ preset: e, graphs: t }) {
                    ((0, L._)(this, 'graphs', void 0),
                        (0, L._)(this, 'state', s.DISABLED),
                        (0, L._)(this, 'preset', void 0),
                        (this.graphs = [...t]),
                        e && this.applyPreset(e));
                }
            }
            var tl = (function (e, t, a) {
                var r;
                return function (t) {
                    var a, i, s;
                    return new Worker(
                        (r =
                            r ||
                            ((i = (a = atob(e)).indexOf('\n', 10) + 1),
                            (s = new Blob([a.substring(i) + ''], { type: 'application/javascript' })),
                            URL.createObjectURL(s))),
                        t,
                    );
                };
            })(
                'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICAgJ3VzZSBzdHJpY3QnOwoKICAgIGxldCB0aW1lciA9IG51bGw7CiAgICBmdW5jdGlvbiBvbk1lc3NhZ2UoZSkgewogICAgICAgIHN3aXRjaCAoZS5kYXRhLmNvbW1hbmQpIHsKICAgICAgICAgICAgY2FzZSAnc3RhcnQnOgogICAgICAgICAgICAgICAgc3RhcnQoZS5kYXRhLmludGVydmFsKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgICAgICBjYXNlICdzdG9wJzoKICAgICAgICAgICAgICAgIHN0b3AoKTsKICAgICAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGZ1bmN0aW9uIHN0YXJ0KGludGVydmFsKSB7CiAgICAgICAgc3RvcCgpOwogICAgICAgIHRpbWVyID0gc2VsZi5zZXRJbnRlcnZhbCgoKSA9PiB7CiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7CiAgICAgICAgICAgICAgICBtZXNzYWdlOiAndGljaycKICAgICAgICAgICAgfTsKICAgICAgICAgICAgc2VsZi5wb3N0TWVzc2FnZShkYXRhKTsKICAgICAgICB9LCBpbnRlcnZhbCk7CiAgICB9CiAgICBmdW5jdGlvbiBzdG9wKCkgewogICAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkgewogICAgICAgICAgICBzZWxmLmNsZWFySW50ZXJ2YWwodGltZXIpOwogICAgICAgIH0KICAgICAgICB0aW1lciA9IG51bGw7CiAgICB9CiAgICBzZWxmLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBvbk1lc3NhZ2UpOwoKfSkoKTsK',
            );
            class tu {
                init() {
                    try {
                        return ((this.worker = new tl()), this.worker.addEventListener('message', this.onMessage.bind(this)), Promise.resolve());
                    } catch (e) {
                        return (this.destroy(), Promise.reject(e));
                    }
                }
                get isIntervalRunning() {
                    return this.isTrackingInWorker;
                }
                setInterval(e, t) {
                    this.worker && ((this.callback = e), (this.isTrackingInWorker = !0), this.worker.postMessage({ command: 'start', interval: t }));
                }
                clearInterval() {
                    this.worker && ((this.isTrackingInWorker = !1), this.worker.postMessage({ command: 'stop' }));
                }
                onError(e) {
                    this.worker && (this.errorListeners.push(e), this.worker.addEventListener('error', e), this.worker.addEventListener('messageerror', e));
                }
                destroy() {
                    var e;
                    (this.clearInterval(),
                        this.errorListeners.forEach((e) => {
                            var t, a;
                            (null == (t = this.worker) || t.removeEventListener('error', e), null == (a = this.worker) || a.removeEventListener('messageerror', e));
                        }),
                        null == (e = this.worker) || e.terminate(),
                        (this.worker = null));
                }
                onMessage(e) {
                    'tick' === e.data.message && this.callback && this.callback();
                }
                constructor() {
                    ((0, L._)(this, 'worker', null), (0, L._)(this, 'callback', null), (0, L._)(this, 'isTrackingInWorker', !1), (0, L._)(this, 'errorListeners', []));
                }
            }
            class td {
                get isIntervalRunning() {
                    return !!this.intervalId;
                }
                init() {
                    return Promise.resolve();
                }
                onError() {}
                setInterval(e, t) {
                    this.intervalId = setInterval(e, t);
                }
                clearInterval() {
                    (null !== this.intervalId && clearInterval(this.intervalId), (this.intervalId = null));
                }
                destroy() {
                    this.clearInterval();
                }
                constructor() {
                    (0, L._)(this, 'intervalId', null);
                }
            }
            class tc {
                get isIntervalRunning() {
                    return !!this.ticker.isIntervalRunning;
                }
                init() {
                    return this.ticker.init().catch((e) => {
                        throw ((this.ticker = new td()), Error('Error in creating WorkerTicker. Fallback to IntervalTicker', { cause: e }));
                    });
                }
                onError(e) {
                    return this.ticker.onError(e);
                }
                setInterval(e, t) {
                    return this.ticker.setInterval(e, t);
                }
                clearInterval() {
                    return this.ticker.clearInterval();
                }
                destroy() {
                    this.ticker.destroy();
                }
                constructor() {
                    (0, L._)(this, 'ticker', new tu());
                }
            }
            !(function (e) {
                ((e.IDLE = 'IDLE'), (e.ENABLED = 'ENABLED'), (e.DISABLED = 'DISABLED'));
            })(n || (n = {}));
            let th = 1e3 / 60,
                tv = 1 / 60;
            class ty {
                updateGain() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = e >= this.outStart && e <= this.outStop;
                    if (t) {
                        let t = this.getFadeInVolume(e);
                        this.volumeAtTime = t;
                    }
                    if (a) {
                        let e = this.getFadeOutVolume();
                        this.volumeAtTime = e;
                    }
                    (e > this.inStop && e < this.outStart && (this.volumeAtTime = this.maxVolume), e > this.outStop && (this.volumeAtTime = 0));
                }
                enable() {
                    (this.saveAudioElementVolumeBeforeFade(),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.updateGain.bind(this), th));
                }
                enableFadeIn() {
                    (this.saveAudioElementVolumeBeforeFade(),
                        (this.volume = 0),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeIn.bind(this), th));
                }
                fadeIn() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.inStart && e <= this.inStop,
                        a = this.getFadeInVolume(e);
                    (t && (this.volumeAtTime = a), e > this.inStop && e < this.outStart && ((this.volumeAtTime = this.maxVolume), this.disable()));
                }
                enableFadeOut() {
                    (this.saveAudioElementVolumeBeforeFade(),
                        (this.state = n.ENABLED),
                        this.ticker.isIntervalRunning || this.ticker.setInterval(this.fadeOut.bind(this), th));
                }
                fadeOut() {
                    if (this.state !== n.ENABLED) return;
                    let e = this.audioElement.currentTime,
                        t = e >= this.outStart && e <= this.outStop,
                        a = this.getFadeOutVolume();
                    (t && (this.volumeAtTime = a), e > this.outStop && (this.volumeAtTime = 0));
                }
                getFadeInVolume(e) {
                    let t = this.inStop - this.inStart,
                        a = this.maxVolume;
                    return 0 === e ? 0 : Math.min(this.volume + 1 / (t / tv), a);
                }
                getFadeOutVolume() {
                    let e = this.outStop - this.outStart;
                    return Math.max(this.volume - 1 / (e / tv), 0);
                }
                disable() {
                    let e = !this.config.useVolumeForAudioEffect || null !== this.audioElementVolumeBeforeFade,
                        t = this.maxVolume;
                    ((this.state = n.DISABLED), this.ticker.clearInterval(), e && (this.volume = t), (this.audioElementVolumeBeforeFade = null));
                }
                setFadeParams(e) {
                    let { inStart: t, inStop: a, outStart: r, outStop: i } = e;
                    ((this.inStart = t), (this.inStop = a), (this.outStart = r), (this.outStop = i));
                }
                set volumeAtTime(e) {
                    if (this.config.useVolumeForAudioEffect) this.audioElement.volume = e;
                    else {
                        let { gainNode: t, context: a } = this.getWebAudioTarget();
                        t.gain.setValueAtTime(e, a.currentTime);
                    }
                }
                set volume(e) {
                    this.config.useVolumeForAudioEffect ? (this.audioElement.volume = e) : (this.getWebAudioTarget().gainNode.gain.value = e);
                }
                get volume() {
                    return this.config.useVolumeForAudioEffect ? this.audioElement.volume : this.getWebAudioTarget().gainNode.gain.value;
                }
                get maxVolume() {
                    if (this.config.useVolumeForAudioEffect) {
                        var e;
                        return null != (e = this.audioElementVolumeBeforeFade) ? e : 1;
                    }
                    return 1;
                }
                saveAudioElementVolumeBeforeFade() {
                    this.config.useVolumeForAudioEffect && null === this.audioElementVolumeBeforeFade && (this.audioElementVolumeBeforeFade = this.audioElement.volume);
                }
                getWebAudioTarget() {
                    let { gainNode: e, context: t } = this.target;
                    if (!e || !t) throw new Q.t('FadeEffect. WebAudio target is required for gain-based fade.');
                    return { gainNode: e, context: t };
                }
                handleTickerError(e) {
                    this.disable();
                    let t = new Q.t('FadeEffect. Error in ticker runtime.', { cause: (0, et.createObjectFromError)(e) });
                    this.hooks.afterError.promise(t);
                }
                constructor({ target: e, hooks: t, config: a }) {
                    var r, i;
                    ((0, L._)(this, 'state', n.IDLE),
                        (0, L._)(this, 'inStart', 0),
                        (0, L._)(this, 'inStop', 0),
                        (0, L._)(this, 'outStart', 0),
                        (0, L._)(this, 'outStop', 0),
                        (0, L._)(this, 'ticker', void 0),
                        (0, L._)(this, 'audioElement', void 0),
                        (0, L._)(this, 'target', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'config', void 0),
                        (0, L._)(this, 'audioElementVolumeBeforeFade', null),
                        (this.target = e),
                        (this.audioElement = e.audioElement),
                        (this.hooks = t),
                        (this.config = { useVolumeForAudioEffect: null != (r = a.useVolumeForAudioEffect) && r, useWorker: null == (i = a.useWorker) || i }),
                        this.config.useVolumeForAudioEffect || this.getWebAudioTarget(),
                        this.config.useWorker ? (this.ticker = new tc()) : (this.ticker = new td()),
                        this.ticker
                            .init()
                            .then(() => {
                                this.ticker.onError(this.handleTickerError.bind(this));
                            })
                            .catch((e) => {
                                let t = new Q.t('FadeEffect. Error in ticker init().', { cause: (0, et.createObjectFromError)(e) });
                                this.hooks.afterError.promise(t);
                            }));
                }
            }
            class tp {
                enable() {
                    this.currentFadeEffect && this.currentFadeEffect.enable();
                }
                disable() {
                    this.currentFadeEffect && this.currentFadeEffect.disable();
                }
                apply(e) {
                    if (this.currentFadeEffect) {
                        if (!e) return void this.currentFadeEffect.disable();
                        (this.currentFadeEffect.setFadeParams(e), this.currentFadeEffect.enable());
                    }
                }
                constructor({ currentAudioElement: e, graphs: t, playback: a }) {
                    ((0, L._)(this, 'fadeEffects', []),
                        (0, L._)(this, 'currentFadeEffect', null),
                        t.forEach((e) => {
                            this.fadeEffects.push(
                                new ty({
                                    target: { audioElement: e.audioElement, gainNode: e.gainNode, context: e.context },
                                    hooks: a.hooks,
                                    config: { useVolumeForAudioEffect: !1, useWorker: !1 },
                                }),
                            );
                        }),
                        e.onChange((e) => {
                            let t = this.fadeEffects.find((t) => t.audioElement === e);
                            t && (this.currentFadeEffect = t);
                        }));
                }
            }
            class tm {
                enableCrossfade() {
                    let { currentEntity: e, nextEntity: t } = this.playback.state.queueState,
                        a = this.playback.state.mediaPlayersStore.value[V.e.AUDIO];
                    if (!e.value || !t.value || !a || !(0, F.uo)(a)) return;
                    let r = e.value.getCrossParams(),
                        i = t.value.getCrossParams();
                    if (!r || !i) return;
                    let s = this.fadeEffects.find((e) => !!a.crossOutMediaPlayer && e.audioElement === a.crossOutMediaPlayer.currentAudioElement.value),
                        n = this.fadeEffects.find((e) => !!a.crossInMediaPlayer && e.audioElement === a.crossInMediaPlayer.currentAudioElement.value);
                    s && n && (s.setFadeParams(r), n.setFadeParams(i), s.enableFadeOut(), n.enableFadeIn());
                }
                enableFastFade() {
                    let { currentEntity: e } = this.playback.state.queueState,
                        t = this.playback.state.mediaPlayersStore.value[V.e.AUDIO];
                    if (!e.value || !t || !(0, F.uo)(t)) return;
                    let a = e.value.getCrossParams(),
                        r = this.fadeEffects.find((e) => e.audioElement === t.currentAudioElement.value);
                    if (!a || !r) return;
                    let i = a.inStop - a.inStart,
                        s = { ...a, inStop: a.inStart + i / 4 };
                    (r.setFadeParams(s), r.enableFadeIn());
                }
                disableFade() {
                    this.fadeEffects.forEach((e) => {
                        e.disable();
                    });
                }
                canEnableFastFade(e) {
                    let { currentEntity: t } = this.playback.state.queueState;
                    return !!(t.value && !e && e8(t.value.context));
                }
                constructor({ graphs: e, playback: t, config: a = {} }) {
                    ((0, L._)(this, 'playback', void 0), (0, L._)(this, 'fadeEffects', []), (this.playback = t));
                    let r = t.state.mediaPlayersStore.value[V.e.AUDIO];
                    (a.useVolumeForAudioEffect && r && (0, F.uo)(r)
                        ? r.audioElementsStore.forEach((e) => {
                              this.fadeEffects.push(
                                  new ty({
                                      target: { audioElement: e },
                                      hooks: t.hooks,
                                      config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker },
                                  }),
                              );
                          })
                        : null == e ||
                          e.forEach((e) => {
                              this.fadeEffects.push(
                                  new ty({
                                      target: { audioElement: e.audioElement, gainNode: e.gainNode, context: e.context },
                                      hooks: t.hooks,
                                      config: { useVolumeForAudioEffect: a.useVolumeForAudioEffect, useWorker: a.useWorker },
                                  }),
                              );
                          }),
                        r &&
                            (0, F.uo)(r) &&
                            (r.isReadyForAudioEffect.onChange(
                                (e) => {
                                    e ? this.enableCrossfade() : this.disableFade();
                                },
                                { skipFirstChange: !0 },
                            ),
                            r.isReadyForAudioEffectInStart.onChange(
                                (e) => {
                                    (e && this.canEnableFastFade(r.isReadyForAudioEffect.value) && this.enableFastFade(), e || this.disableFade());
                                },
                                { skipFirstChange: !0 },
                            )));
                }
            }
            function tf(e) {
                return e === V.e.AUDIO;
            }
            let tg = [V.e.AUDIO, V.e.DOWNLOADED_AUDIO];
            function tb(e) {
                return tg.includes(e);
            }
            class tE {
                apply(e) {
                    this.durationMs = e;
                }
                constructor({ playback: e }) {
                    ((0, L._)(this, 'playback', null),
                        (0, L._)(this, 'durationMs', void 0),
                        (this.playback = e),
                        this.playback.state.playerState.progress.onChange((e) => {
                            var t, a;
                            let r = (null != (t = this.durationMs) ? t : 0) / 1e3,
                                i = e && Math.abs(e.duration - r) > 1;
                            e && e.position > r && i && (null == (a = this.playback) || a.moveForward());
                        }));
                }
            }
            (!(function (e) {
                ((e.SUSPENDED = 'suspended'), (e.RUNNING = 'running'), (e.CLOSED = 'closed'));
            })(o || (o = {})),
                (function (e) {
                    ((e.HIGHSHELF = 'highshelf'), (e.PEAKING = 'peaking'), (e.LOWSHELF = 'lowshelf'));
                })(l || (l = {})));
            class tS {
                connectNodes() {
                    let { useAnalyser: e, useGain: t } = this.config;
                    (t && e && (this.sourceNode.connect(this.gainNode), this.gainNode.connect(this.analyserNode), this.analyserNode.connect(this.context.destination)),
                        t && !e && (this.sourceNode.connect(this.gainNode), this.gainNode.connect(this.context.destination)),
                        !t && e && (this.sourceNode.connect(this.analyserNode), this.analyserNode.connect(this.context.destination)),
                        t || e || this.sourceNode.connect(this.context.destination));
                }
                connectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        this.sourceNode.connect(this.preamp),
                        t && a.connect(this.gainNode),
                        !t && e && a.connect(this.analyserNode),
                        t || e || a.connect(this.context.destination));
                }
                disconnectEqualizer() {
                    let { useAnalyser: e, useGain: t } = this.config,
                        a = this.bands[this.bands.length - 1];
                    a &&
                        (this.sourceNode.disconnect(),
                        a.disconnect(),
                        t && this.sourceNode.connect(this.gainNode),
                        !t && e && this.sourceNode.connect(this.analyserNode),
                        t || e || this.sourceNode.connect(this.context.destination));
                }
                setBands(e) {
                    0 === this.bands.length ? (this.bands = this.connectBandsBetween(this.createBandsByFrequencies(e))) : this.updateBands(e);
                }
                setPreamp(e) {
                    this.preamp.gain.linearRampToValueAtTime(e, this.context.currentTime + 0.3);
                }
                createBandsByFrequencies(e) {
                    return e.map((t, a) => {
                        let { key: r, value: i } = t;
                        return this.createBand(this.getBiquadFilterType(a, e.length), r, i);
                    });
                }
                createBand(e, t, a) {
                    let r = this.context.createBiquadFilter();
                    return ((r.type = e), (r.frequency.value = t), (r.Q.value = 1), a && r.gain.setValueAtTime(a, this.context.currentTime + 0.3), r);
                }
                getBiquadFilterType(e, t) {
                    return 0 === e ? l.LOWSHELF : e === t - 1 ? l.HIGHSHELF : l.PEAKING;
                }
                connectBandsBetween(e) {
                    let t = this.preamp;
                    return (
                        e.forEach((e) => {
                            (t.connect(e), (t = e));
                        }),
                        e
                    );
                }
                updateBands(e) {
                    this.bands.forEach((t, a) => {
                        let r = e[a];
                        r && t.gain.setValueAtTime(r.value, this.context.currentTime + 0.3);
                    });
                }
                createAnalyzerNode(e) {
                    let t = e.createAnalyser();
                    return ((t.fftSize = 32), (t.smoothingTimeConstant = 0), t);
                }
                checkAndResumeAudioContext(e) {
                    let t = () => {
                        e.resume().then(() => {
                            (document.body.removeEventListener('touchend', t, !0),
                                document.body.removeEventListener('click', t, !0),
                                document.body.removeEventListener('keydown', t, !0));
                        });
                    };
                    e.state === o.SUSPENDED &&
                        (document.body.addEventListener('touchend', t, !0),
                        document.body.addEventListener('click', t, !0),
                        document.body.addEventListener('keydown', t, !0));
                }
                constructor(e, t) {
                    ((0, L._)(this, 'audioElement', void 0),
                        (0, L._)(this, 'context', void 0),
                        (0, L._)(this, 'sourceNode', void 0),
                        (0, L._)(this, 'preamp', void 0),
                        (0, L._)(this, 'bands', []),
                        (0, L._)(this, 'analyserNode', void 0),
                        (0, L._)(this, 'bufferLength', 0),
                        (0, L._)(this, 'spectrum', new Uint8Array()),
                        (0, L._)(this, 'gainNode', void 0),
                        (0, L._)(this, 'config', void 0),
                        (this.audioElement = e),
                        (this.context = new AudioContext()),
                        this.checkAndResumeAudioContext(this.context),
                        (this.sourceNode = this.context.createMediaElementSource(this.audioElement)),
                        (this.analyserNode = this.createAnalyzerNode(this.context)),
                        (this.bufferLength = this.analyserNode.frequencyBinCount),
                        (this.spectrum = new Uint8Array(this.bufferLength)),
                        (this.gainNode = this.context.createGain()),
                        (this.preamp = this.context.createGain()),
                        (this.config = t),
                        this.connectNodes());
                }
            }
            class t_ {
                createGraphs(e, t) {
                    let { useAnalyser: a, useGain: r } = t;
                    if ((0, F.s4)(e)) return [new tS(e.currentAudioElement.value, { useAnalyser: a, useGain: r })];
                    if ((0, F.uo)(e)) return e.audioElementsStore.map((e) => new tS(e, { useAnalyser: a, useGain: r }));
                    throw new Q.t('Can not create audio graph for this type of media player');
                }
                getOrCreateGraphs(e, t) {
                    let a = this.graphsByMediaPlayer.get(e);
                    if (a) return a;
                    let r = this.createGraphs(e, t);
                    return (this.graphsByMediaPlayer.set(e, r), r);
                }
                initializeAnalyser(e, t, a) {
                    tf(a) && this.options.useAnalyser && !this.analyser && (this.analyser = new tn({ currentAudioElement: e.currentAudioElement, graphs: t }));
                }
                initializeEqualizer(e, t) {
                    if (!tb(t) || !this.options.useEqualizer) return;
                    let a = 'object' == typeof this.options.useEqualizer ? this.options.useEqualizer : void 0;
                    if (this.equalizer.value) return void this.equalizer.value.addGraphs(e);
                    this.equalizer.value = new to({ graphs: e, preset: null == a ? void 0 : a.preset });
                }
                initializeFade(e, t, a, r) {
                    tf(r) && this.options.useFade && !this.fade && (this.fade = new tp({ currentAudioElement: e.currentAudioElement, graphs: a, playback: t }));
                }
                initializeCrossfade(e, t, a) {
                    tf(a) &&
                        this.options.useCrossFade &&
                        !this.crossfade &&
                        (t || this.isVolumeCrossfadeEnabled()) &&
                        (this.crossfade = new tm({ playback: e, graphs: t, config: this.options.crossFadeConfig }));
                }
                isVolumeCrossfadeEnabled() {
                    var e;
                    return !!(this.options.useCrossFade && (null == (e = this.options.crossFadeConfig) ? void 0 : e.useVolumeForAudioEffect));
                }
                initializeSmartPreview(e, t) {
                    tf(t) && this.options.useSmartPreview && !this.smartPreview && (this.smartPreview = new tE({ playback: e }));
                }
                initializeContext(e, t, a) {
                    if (
                        !(function (e, t) {
                            if (tf(e)) {
                                var a;
                                let e = !!t.useCrossFade && !(null == (a = t.crossFadeConfig) ? void 0 : a.useVolumeForAudioEffect);
                                return !!t.useEqualizer || !!t.useAnalyser || !!t.useFade || e;
                            }
                            return tb(e) && !!t.useEqualizer;
                        })(a, this.options)
                    ) {
                        (this.initializeCrossfade(t, void 0, a), this.initializeSmartPreview(t, a));
                        return;
                    }
                    let r = this.getOrCreateGraphs(
                        e,
                        (function (e, t) {
                            var a;
                            let r = tf(e),
                                i = !!t.useCrossFade && !(null == (a = t.crossFadeConfig) ? void 0 : a.useVolumeForAudioEffect);
                            return { useAnalyser: !!r && t.useAnalyser, useGain: r && (!!t.useFade || i) };
                        })(a, this.options),
                    );
                    (this.initializeAnalyser(e, r, a),
                        this.initializeEqualizer(r, a),
                        this.initializeFade(e, t, r, a),
                        this.initializeCrossfade(t, r, a),
                        this.initializeSmartPreview(t, a));
                }
                initializeMediaPlayersStore(e, t) {
                    void 0 !== e &&
                        tg.forEach((a) => {
                            let r = e[a];
                            void 0 !== r && ((0, F.s4)(r) || (0, F.uo)(r)) && this.initializeContext(r, t, a);
                        });
                }
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (a.state.mediaPlayersStore.onChange((e) => {
                        this.initializeMediaPlayersStore(e, a);
                    }),
                        a.state.playerState.event.onChange(() => {
                            if (this.fade)
                                switch (a.state.playerState.event.value) {
                                    case F.Iu.PLAYING:
                                        this.fade.enable();
                                        break;
                                    case F.Iu.PAUSED:
                                    case F.Iu.STOP:
                                        this.fade.disable();
                                }
                        }),
                        t.beforeMediaStartPlaying.tapPromise('WebAudioPlugin', () => {
                            var e, t, r;
                            let i,
                                s,
                                { currentEntity: n } = a.state.queueState,
                                o = null == (e = n.value) ? void 0 : e.entity;
                            return (
                                (0, ts.l)(o) &&
                                    ((i = null == (t = o.data.meta.smartPreviewParams) ? void 0 : t.fade),
                                    (s = null == (r = o.data.meta.smartPreviewParams) ? void 0 : r.durationMs)),
                                (0, eI.b)(o) && ((i = o.data.meta.fade), (s = o.data.meta.durationMs)),
                                this.fade && this.fade.apply(i),
                                this.smartPreview && this.smartPreview.apply(s),
                                Promise.resolve()
                            );
                        }));
                }
                constructor(e) {
                    ((0, L._)(this, 'options', void 0),
                        (0, L._)(this, 'graphsByMediaPlayer', new WeakMap()),
                        (0, L._)(this, 'analyser', void 0),
                        (0, L._)(this, 'equalizer', new ei.cJ(null)),
                        (0, L._)(this, 'fade', void 0),
                        (0, L._)(this, 'smartPreview', void 0),
                        (0, L._)(this, 'crossfade', void 0),
                        (this.options = e));
                }
            }
            function tA(e) {
                return (null == e ? void 0 : e.data.type) === U.R.Clip;
            }
            (!(function (e) {
                ((e.AD = 'ad'), (e.SHOT = 'shot'));
            })(u || (u = {})),
                (function (e) {
                    ((e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle'));
                })(d || (d = {})),
                (function (e) {
                    ((e.NONE = 'none'), (e.AD = 'ad'), (e.JINGLE = 'jingle'));
                })(c || (c = {})));
            class tP {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.beforeEntityChange.tapPromise(
                        'AdvertPlugin',
                        () =>
                            new Promise((e) => {
                                var a;
                                if (!this.variables.enabled || tA(null == (a = t.state.queueState.currentEntity.value) ? void 0 : a.entity)) return void e();
                                let {
                                    state: {
                                        currentContext: r,
                                        queueState: {
                                            index: { value: i },
                                            order: { value: s },
                                            entityList: { value: n },
                                            currentEntity: { value: o },
                                        },
                                    },
                                } = t;
                                if (void 0 !== r.value) {
                                    let a = s[i + 1],
                                        l = void 0 !== a ? n[a] : void 0,
                                        h = l ? String(l.entity.data.meta.id) : void 0,
                                        v = s[i - 1],
                                        y = void 0 !== v ? n[v] : void 0,
                                        p = y ? String(y.entity.data.meta.id) : void 0,
                                        m =
                                            ((null == o ? void 0 : o.entity.totalPlayedSeconds) || 0) /
                                            ((((null == o ? void 0 : o.entity.data.meta) && 'durationMs' in o.entity.data.meta && o.entity.data.meta.durationMs) || 1) /
                                                1e3);
                                    ((this.currentTrackId = String(null == o ? void 0 : o.entity.data.meta.id)),
                                        (this.from = r.value.from),
                                        this.afterTrackResource
                                            .getAfterTrack({ contextItem: String(r.value.data.meta.id), from: r.value.from, types: u.AD, nextTrackId: h, prevTrackId: p })
                                            .then((a) => {
                                                var r, i;
                                                let s =
                                                    (m >= 0.5 && (null == (r = a.ad) ? void 0 : r.afterPlay) === d.AD) ||
                                                    (m < 0.5 && (null == (i = a.ad) ? void 0 : i.afterSkip) === c.AD);
                                                'ad' in a && this.advertModule && s
                                                    ? (t.pause(), this.advertModule.playAdvert({ afterTrackResponse: a }).finally(e))
                                                    : e();
                                            }));
                                } else e();
                            }),
                    );
                }
                advertFeedbackCallback() {
                    this.adsResource.saveAds({ from: this.from, trackId: this.currentTrackId, type: 'ad' });
                }
                constructor(e) {
                    var t;
                    ((0, L._)(this, 'advertModule', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'afterTrackResource', void 0),
                        (0, L._)(this, 'adsResource', void 0),
                        (0, L._)(this, 'currentTrackId', ''),
                        (0, L._)(this, 'from', ''));
                    let { afterTrackResource: a, advertModule: r, adsResource: i, variables: s } = e;
                    ((this.afterTrackResource = a),
                        (this.adsResource = i),
                        (this.variables = s),
                        (this.advertModule = r),
                        null == (t = this.advertModule) || t.setAdvertFeedbackCallback(this.advertFeedbackCallback.bind(this)));
                }
            }
            var tk = a(91954),
                tI = a(88485),
                tC = a(16133),
                tx = a(45028);
            function tT(e) {
                let t = tk.FM.r.PAUSE;
                switch (e.status.value) {
                    case F.MT.BUFFERING:
                        t = tk.FM.r.BUFFERING;
                        break;
                    case F.MT.ENDED:
                    case F.MT.STOPPED:
                        t = tk.FM.r.END;
                        break;
                    case F.MT.PLAYING:
                        t = tk.FM.r.PLAY;
                        break;
                    case F.MT.PAUSED:
                    case F.MT.IDLE:
                    case F.MT.LOADING_MEDIA_SOURCE:
                        t = tk.FM.r.PAUSE;
                }
                return t;
            }
            class tR {
                createTelemetry(e) {
                    ((this.vsid = (0, et.createVsid)(e.playbackInitializationTime, this.playerTypeForVsid)),
                        (this.telemetry = new tk.YT({
                            getState: () => {
                                var t;
                                let {
                                    progress: {
                                        value: { duration: a, position: r, remainingBufferedTime: i },
                                    },
                                    volume: s,
                                } = e.state.playerState;
                                return (
                                    (null == (t = e.state.currentContext.value) ? void 0 : t.data.type) === ea.K.Radio &&
                                    e.state.currentContext.value.data.meta.streamEpisodeId
                                        ? this.setStaticParams({ videoContentId: e.state.currentContext.value.data.meta.streamEpisodeId })
                                        : this.setStaticParams({ videoContentId: void 0 }),
                                    {
                                        duration: (0, tx.fP)(a),
                                        currentTime: (0, tx.fP)(r),
                                        utcStartTime: void 0,
                                        videoType: 'VOD',
                                        isFullscreen: !1,
                                        volume: s.value,
                                        muted: 0 === s.value,
                                        remainingBufferedTime: { total: (0, tx.fP)(null != i ? i : 0) },
                                        playingState: tT(e.state.playerState),
                                        videoSize: void 0,
                                        liveLatency: void 0,
                                        videoTracks: [],
                                        audioTrack: void 0,
                                        isVisible: !1,
                                    }
                                );
                            },
                            sendLog: (e, t) => {
                                this.telemetryResource.log({ payload: e, urlParams: t }).catch(() => void 0);
                            },
                            disableCompression: !0,
                            playerInfo: { service: this.service, version: '1.0.0', vsid: this.vsid, isVideoADB: !1 },
                        })),
                        this.telemetry.setStaticParams({ labels: { from: this.from } }),
                        (this.resourceTimingsMonitor = new tk.yv({
                            sendLog: (e, t) => {
                                this.telemetryResource.perfLog({ payload: e, urlParams: t }).catch(() => void 0);
                            },
                        })),
                        this.resourceTimingsMonitor.attach(window));
                }
                logEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent(e, t);
                }
                logError(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logError(e, t);
                }
                setPlayingState(e) {
                    var t;
                    let a = tT(e);
                    null == (t = this.telemetry) || t.setPlayingState(a);
                }
                setStaticParams(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.setStaticParams(e, t);
                }
                onBeforeSetSource() {
                    var e;
                    return null == (e = this.telemetry) ? void 0 : e.onBeforeSetSource();
                }
                onSetSource(e) {
                    var t;
                    null == (t = this.telemetry) || t.onSetSource(e, { streams: [], params: {} });
                }
                onCreatePlayer(e) {
                    var t;
                    let { location: a, referrer: r } = (0, tC.V)(window.document);
                    null == (t = this.telemetry) ||
                        t.onCreatePlayer(e, { location: (0, tI.K)(window), topLocation: a, referrer: window.document.referrer, topReferrer: r });
                }
                onSeek(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.onSeek({ oldPosition: e, newPosition: t });
                }
                logYaspEvent(e, t) {
                    var a;
                    null == (a = this.telemetry) || a.logEvent({ name: e, data: t });
                }
                logYaspError(e) {
                    var t;
                    null == (t = this.telemetry) || t.logError({ error: e.detail });
                }
                constructor({ telemetryResource: e, service: t, from: a, playerTypeForVsid: r }) {
                    ((0, L._)(this, 'telemetry', void 0),
                        (0, L._)(this, 'resourceTimingsMonitor', void 0),
                        (0, L._)(this, 'telemetryResource', void 0),
                        (0, L._)(this, 'from', void 0),
                        (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'playerTypeForVsid', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (this.telemetryResource = e),
                        (this.service = t),
                        (this.from = a),
                        (this.playerTypeForVsid = r));
                }
            }
            class tD {
                send(e) {
                    return this.transport.send(e, { topLevelParameter: 'player-metrics' });
                }
                constructor(e) {
                    ((0, L._)(this, 'transport', void 0), (this.transport = e));
                }
            }
            class tw {
                async send(e) {
                    this.logger.info(e.name, { ...e.data, service: 'Player', 'tech-metrics': !0 });
                }
                constructor(e) {
                    ((0, L._)(this, 'logger', void 0), (this.logger = e));
                }
            }
            class tN {
                send(e) {
                    return this.transport.send(e, { service: 'Player' });
                }
                constructor(e) {
                    ((0, L._)(this, 'transport', void 0), (this.transport = e));
                }
            }
            var tO = a(36217),
                tM = a(88726);
            let tL = { [tM.N.AACMP4]: 'mp4a.40.2', [tM.N.HEAACMP4]: 'mp4a.40.5', [tM.N.FLACMP4]: 'flac' };
            class tF {
                get src() {
                    var e, t;
                    if ('error' in this.data) throw new Q.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (!this.data.urls[0]) throw new Q.t('No urls in DownloadInfoSource');
                    let a = this.getQueryParamsString();
                    return a
                        ? ''
                              .concat(this.data.urls[0])
                              .concat(a, '#t=')
                              .concat(null != (e = this.positionSec) ? e : 0)
                        : ''.concat(this.data.urls[0], '#t=').concat(null != (t = this.positionSec) ? t : 0);
                }
                get mirrorUrls() {
                    if ('error' in this.data) throw new Q.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = this.getQueryParamsString(),
                        t = this.data.urls.slice(1);
                    return e ? t.map((t) => ''.concat(t).concat(e)) : t;
                }
                get key() {
                    if ('error' in this.data) throw new Q.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    if (this.data.transport === tO.o.ENCRAW) return this.data.key;
                }
                get canBePreloaded() {
                    if ('error' in this.data) throw new Q.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    return [tM.N.FLACMP4, tM.N.AACMP4, tM.N.HEAACMP4].includes(this.data.codec);
                }
                getQueryParamsString() {
                    if ('error' in this.data) throw new Q.t('Error in DownloadInfoSource data', { data: { error: this.data.error } });
                    let e = tL[this.data.codec],
                        t = e ? 'mp4' : void 0,
                        a = void 0 === this.sourceIndex ? void 0 : String(this.sourceIndex),
                        r = new URLSearchParams();
                    (t && r.append('container', t), e && r.append('codec', e), this.vsid && r.append('vsid', this.vsid), a && r.append('source_index', a));
                    let i = r.toString();
                    return i ? '?'.concat(i) : void 0;
                }
                constructor(e) {
                    ((0, L._)(this, 'type', 'downloadInfoSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'loadingTime', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (0, L._)(this, 'positionSec', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.loadingTime = e.loadingTime),
                        (this.getFileInfoResponseTime = e.getFileInfoResponseTime),
                        (this.url = e.url),
                        (this.sourceIndex = e.sourceIndex));
                }
            }
            !(function (e) {
                ((e.TRACK = 'track'), (e.STREAM = 'stream'));
            })(h || (h = {}));
            let tq = { history: 30, rotor: 5, ynison: 2 };
            class tU {
                set(e, t, a) {
                    this.records = this.records.filter((a) => a.category !== e || a.key !== t);
                    let r = JSON.stringify(a);
                    (this.records.filter((t) => t.category === e).length >= tq[e] &&
                        (this.records.splice(
                            this.records.findIndex((t) => t.category === e),
                            1,
                        ),
                        this.evicted++),
                        this.records.push({ category: e, key: t, json: r }));
                }
                get(e, t) {
                    let a = this.records.find((a) => a.category === e && a.key === t);
                    return a ? JSON.parse(a.json) : void 0;
                }
                values(e) {
                    return this.records.filter((t) => t.category === e).map((e) => JSON.parse(e.json));
                }
                get coverage() {
                    return { evicted: this.evicted, records: this.records.length };
                }
                clear() {
                    this.records = [];
                }
                constructor() {
                    ((0, L._)(this, 'records', []), (0, L._)(this, 'evicted', 0));
                }
            }
            class tB {
                recordSessionDiagnosticEvent(e, t) {
                    if (this.destroyed) return;
                    let a = this.getIdentity(e),
                        r = ''.concat(a, ':').concat(t.operationId);
                    if ('requested' === t.phase) return void this.store.set('rotor', r, { contextDebugId: a, ...t, startedAt: t.timestamp });
                    let i = this.store.get('rotor', r);
                    i && this.store.set('rotor', r, { ...i, ...t, startedAt: i.startedAt });
                }
                recordYnisonQueueDiagnosticEvent(e, t) {
                    if (this.destroyed) return;
                    let a = this.getIdentity(e),
                        r = ''.concat(a, ':').concat(t.operationId);
                    if ('applying' === t.phase) return void this.store.set('ynison', r, { contextDebugId: a, ...t, startedAt: t.timestamp });
                    let i = this.store.get('ynison', r);
                    i && this.store.set('ynison', r, { ...i, ...t, startedAt: i.startedAt });
                }
                recordQueueObservation(e, t, a) {
                    if (this.destroyed) return;
                    let r = t.currentEntity.value;
                    r &&
                        this.store.set('history', String(++this.nextHistoryId), {
                            contextDebugId: this.getIdentity(r.context.data),
                            timestamp: Date.now(),
                            kind: e,
                            method: a,
                            entityDebugId: this.getIdentity(r.entity),
                            trackId: String(r.entity.data.meta.id),
                            index: t.index.value,
                            livePlayableIndex: t.livePlayableIndex.value,
                            queueLength: t.entityList.value.length,
                        });
                }
                capture(e, t, a) {
                    var r, i, s;
                    if (this.destroyed) return;
                    let n = this.getIdentity(e.context.data),
                        o = (0, e3.i)(e.context) ? e.context.data : void 0,
                        l = (e) => this.store.values(e).filter((e) => e.contextDebugId === n),
                        u = new Map();
                    t.order.value.forEach((e, t) => u.set(e, t));
                    let d = [],
                        c = {
                            schemaVersion: 1,
                            status: 'collected',
                            timestamp: Date.now(),
                            puid: this.getPuid(),
                            context: {
                                contextDebugId: n,
                                id: e.context.data.meta.id,
                                seeds: null == o || null == (r = o.seeds) ? void 0 : r.slice(),
                                sessionSeeds: null == o || null == (i = o.meta.session) ? void 0 : i.wave.seeds.slice(),
                                radioSessionId: null == o || null == (s = o.meta.session) ? void 0 : s.radioSessionId,
                                cloneSessionId: null == o ? void 0 : o.cloneSessionId,
                            },
                            current: this.projectEntity(e),
                            duplicateCount: a.length,
                            occurrences: a.map((e) => {
                                var a;
                                return { entityListIndex: e, orderIndex: null != (a = u.get(e)) ? a : -1, ...this.projectEntity(t.entityList.value[e]) };
                            }),
                            queue: {
                                index: t.index.value,
                                livePlayableIndex: t.livePlayableIndex.value,
                                shuffle: t.shuffle.value,
                                repeat: t.repeat.value,
                                order: t.order.value.slice(),
                                items: t.entityList.value.map((e) => this.projectEntity(e)),
                            },
                            history: l('history'),
                            rotor: l('rotor'),
                            ynison: l('ynison'),
                            coverage: { ...this.store.coverage, omittedSections: d },
                        },
                        h = new TextEncoder();
                    for (let { section: e } of ['history', 'rotor', 'ynison', 'queue', 'occurrences', 'context', 'current', 'puid']
                        .map((e) => ({ section: e, bytes: h.encode(JSON.stringify(c[e])).length }))
                        .sort((e, t) => t.bytes - e.bytes)) {
                        if (h.encode(JSON.stringify(c)).length <= 32768) break;
                        (delete c[e], d.push(e));
                    }
                    return c;
                }
                destroy() {
                    ((this.destroyed = !0), this.store.clear(), (this.identities = new WeakMap()));
                }
                getIdentity(e) {
                    let t = this.identities.get(e);
                    return (void 0 === t && ((t = ++this.nextIdentity), this.identities.set(e, t)), t);
                }
                projectEntity(e) {
                    var t, a;
                    let { entity: r } = e,
                        { data: i } = r,
                        s = i.sourceContextData;
                    return {
                        entityDebugId: this.getIdentity(r),
                        contextDebugId: this.getIdentity(e.context.data),
                        trackId: String(i.meta.id),
                        albumId: 'albums' in i.meta ? (null == (a = i.meta.albums) || null == (t = a[0]) ? void 0 : t.id) : 'albumId' in i.meta ? i.meta.albumId : void 0,
                        type: i.type,
                        playId: r.playId,
                        hidden: r.hidden,
                        isRestored: 'isRestored' in i ? i.isRestored : void 0,
                        wasPlayed: ev(r) ? r.data.wasPlayed : void 0,
                        radioSessionId: ev(r) ? r.data.radioSessionId : void 0,
                        batchId: ev(r) ? r.data.batchId : void 0,
                        lastChangeMethod: e.lastChangeMethod,
                        sourceContext: s ? { type: s.type, id: s.meta.id } : void 0,
                    };
                }
                constructor(e) {
                    ((0, L._)(this, 'getPuid', void 0),
                        (0, L._)(this, 'store', new tU()),
                        (0, L._)(this, 'identities', new WeakMap()),
                        (0, L._)(this, 'nextIdentity', 0),
                        (0, L._)(this, 'nextHistoryId', 0),
                        (0, L._)(this, 'destroyed', !1),
                        (this.getPuid = e));
                }
            }
            !(function (e) {
                ((e.WANT_PLAY_TRACK = 'WANT_PLAY_TRACK'),
                    (e.TRACK_IS_BUFFERING = 'TRACK_IS_BUFFERING'),
                    (e.TRACK_IS_PLAYING = 'TRACK_IS_PLAYING'),
                    (e.TRACK_IS_PLAYING_MISSED = 'TRACK_IS_PLAYING_MISSED'),
                    (e.TRACK_ERROR_PREPARE = 'TRACK_ERROR_PREPARE'),
                    (e.TRACK_ERROR_INITIAL_BUFFERING = 'TRACK_ERROR_INITIAL_BUFFERING'),
                    (e.TRACK_ERROR_PLAYING = 'TRACK_ERROR_PLAYING'),
                    (e.REQUEST_TIME = 'REQUEST_TIME'),
                    (e.FIRST_WAVE_TRACK_VISIT = 'FIRST_WAVE_TRACK_VISIT'),
                    (e.TRACK_ERROR_PRE_FETCH = 'TRACK_ERROR_PRE_FETCH'),
                    (e.WANT_PLAY_STREAM = 'WANT_PLAY_STREAM'),
                    (e.STREAM_IS_PLAYING = 'STREAM_IS_PLAYING'),
                    (e.STREAM_IS_PLAYING_MISSED = 'STREAM_IS_PLAYING_MISSED'),
                    (e.STREAM_ERROR_PLAYING = 'STREAM_ERROR_PLAYING'),
                    (e.STREAM_ERROR_INITIAL_BUFFERING = 'STREAM_ERROR_INITIAL_BUFFERING'),
                    (e.STREAM_ERROR_PREPARE = 'STREAM_ERROR_PREPARE'),
                    (e.STREAM_IS_BUFFERING = 'STREAM_IS_BUFFERING'));
            })(v || (v = {}));
            var tV = a(76761),
                tW = a(16473);
            function tj(e) {
                switch (e) {
                    case tV.e.LOSSLESS:
                    case tW.e.HIGH_QUALITY:
                        return y.LOSSLESS;
                    case tV.e.NQ:
                    case tW.e.BALANCED:
                        return y.NQ;
                    case tV.e.LQ:
                    case tW.e.EFFICIENT:
                        return y.LQ;
                    case tV.e.PREVIEW:
                    case tW.e.PREVIEW:
                        return y.PREVIEW;
                    case tV.e.SMART_PREVIEW:
                        return y.SMART_PREVIEW;
                    default:
                        return;
                }
            }
            function tK(e, t, a, r) {
                a &&
                    (e
                        ? (console.group(''.concat(null != t ? t : 'Untitled Log Metrics Event Info')),
                          console.table(e.data),
                          r && (console.group('Поля только для отладки. Эти значения не отправляются в событии метрики'), console.table(r), console.groupEnd()),
                          console.group('Raw event'),
                          console.dir(e),
                          console.groupEnd(),
                          console.groupEnd())
                        : console.error('Event in logEvent method not provided'));
            }
            function tY(e, t, a) {
                t.forEach((t) => {
                    Promise.resolve()
                        .then(() => {
                            let a = t.send(e);
                            return a instanceof Promise ? a : Promise.resolve();
                        })
                        .catch((e) => {
                            null == a || a(new Q.t('Failed to send metrics', { code: 'E_METRICS_SEND', cause: (0, et.createObjectFromError)(e) }));
                        });
                });
            }
            !(function (e) {
                ((e.LOSSLESS = 'Lossless'), (e.NQ = 'NQ'), (e.LQ = 'LQ'), (e.PREVIEW = 'Preview'), (e.SMART_PREVIEW = 'SmartPreview'));
            })(y || (y = {}));
            class tG {
                buildWantPlayCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e, expectedQuality: this.mediaConfigController ? tj(this.mediaConfigController.quality.value) : void 0 };
                }
                buildPlayingCtx() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.trunc(performance.now());
                    return { now: e };
                }
                setOnSendError(e) {
                    this.onSendError = e;
                }
                handleWantPlay(e) {
                    var t;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        { event: r, payload: i } = this.builder.buildWantPlayEvent(e, this.buildWantPlayCtx(a)),
                        s = null == (t = this.buildEventDataExtension) ? void 0 : t.call(this, r.name),
                        n = this.extendEventData(r, s);
                    return (
                        this.wantPlayEvents.size > 0 && this.handlePlayingMissed(),
                        this.reportedInitialBufferingPlayIds.clear(),
                        this.reportedPreFetchTrackIds.clear(),
                        this.wantPlayEvents.set(e.entity.playId, { payload: i, wantPlayDataExtension: s }),
                        this.logEvent(n),
                        this.send(n),
                        n
                    );
                }
                handlePlayingMissed() {
                    let e = Array.from(this.wantPlayEvents.entries())[0];
                    if (!e) return null;
                    let [t, { payload: a, wantPlayDataExtension: r }] = e,
                        i = this.builder.buildPlayingMissedEvent(t, a),
                        s = this.extendEventData(i, r);
                    return (this.wantPlayEvents.delete(t), this.send(s), this.logEvent(s), s);
                }
                handlePlaying(e, t) {
                    var a;
                    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.trunc(performance.now()),
                        i = this.wantPlayEvents.get(e.entity.playId),
                        s = i ? this.builder.buildPlayingEvent(e, i.payload, t, this.buildPlayingCtx(r)) : null,
                        n = s ? this.extendEventData(s, null == (a = this.buildEventDataExtension) ? void 0 : a.call(this, s.name)) : null;
                    return (n && (this.wantPlayEvents.delete(e.entity.playId), this.send(n)), this.logEvent(n), n);
                }
                handleBuffering(e) {
                    var t;
                    let a = this.builder.buildBufferingEvent(e);
                    if (!a) return null;
                    let r = this.extendEventData(a, null == (t = this.buildEventDataExtension) ? void 0 : t.call(this, a.name));
                    return (this.send(r), this.logEvent(r), r);
                }
                handleError(e, t) {
                    var a;
                    let r = this.normalizeMediaElementError(e),
                        i = this.normalizeInitialBufferingError(r, t);
                    if (null === i || (i instanceof F.LI && i.code === F.QC.PRE_FETCH && !this.shouldReportPreFetchError(t))) return null;
                    let s = this.builder.buildErrorEvent(i, t),
                        n = s ? this.extendEventData(s, null == (a = this.buildEventDataExtension) ? void 0 : a.call(this, s.name)) : null;
                    return (
                        n && this.isInitialBufferingEvent(n) && this.reportedInitialBufferingPlayIds.add(t.entity.playId),
                        this.maybeCleanupWantPlayOnError(i, t),
                        n && this.send(n),
                        this.logEvent(n),
                        n
                    );
                }
                normalizeMediaElementError(e) {
                    return e instanceof Q.t && !(e instanceof F.LI) && e.code === F.QC.MEDIA_ELEMENT_ERROR
                        ? new F.LI('Core media element error', { code: F.QC.MEDIA_ELEMENT_ERROR, cause: e })
                        : e;
                }
                normalizeInitialBufferingError(e, t) {
                    if (!(e instanceof F.LI) || 0 !== t.entity.totalPlayedSeconds) return e;
                    let a = t.entity.playId;
                    if (
                        ((e.code === F.QC.MEDIA_ELEMENT_ERROR && this.wantPlayEvents.has(a)) || (e.code === F.QC.PLAY && !this.isAbortError(e.cause))) &&
                        this.reportedInitialBufferingPlayIds.has(a)
                    )
                        return null;
                    if (e.code === F.QC.MEDIA_ELEMENT_ERROR && this.wantPlayEvents.has(a)) {
                        var r;
                        return new F.LI('Core play error', { code: F.QC.PLAY, cause: null != (r = e.cause) ? r : e });
                    }
                    return e;
                }
                isInitialBufferingEvent(e) {
                    return e.name === v.TRACK_ERROR_INITIAL_BUFFERING || e.name === v.STREAM_ERROR_INITIAL_BUFFERING;
                }
                hasWantPlay(e) {
                    return this.wantPlayEvents.has(e);
                }
                clearPreFetchDedupe() {
                    this.reportedPreFetchTrackIds.clear();
                }
                shouldReportPreFetchError(e) {
                    let t = String(e.entity.data.meta.id);
                    return !this.reportedPreFetchTrackIds.has(t) && (this.reportedPreFetchTrackIds.add(t), !0);
                }
                maybeCleanupWantPlayOnError(e, t) {
                    e instanceof F.LI &&
                        this.wantPlayEvents.has(t.entity.playId) &&
                        e.code !== F.QC.MEDIA_ELEMENT_ERROR &&
                        e.code !== F.QC.PRE_FETCH &&
                        (this.isAbortError(e.cause) || this.wantPlayEvents.delete(t.entity.playId));
                }
                isAbortError(e) {
                    return 'object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name;
                }
                send(e) {
                    tY(e, this.transports, this.onSendError);
                }
                extendEventData(e, t) {
                    return t ? { ...e, data: { ...t, ...e.data } } : e;
                }
                logEvent(e) {
                    tK(e, null == e ? void 0 : e.name, this.enableDebugMode);
                }
                constructor(e) {
                    ((0, L._)(this, 'builder', void 0),
                        (0, L._)(this, 'buildEventDataExtension', void 0),
                        (0, L._)(this, 'transports', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'enableDebugMode', void 0),
                        (0, L._)(this, 'onSendError', void 0),
                        (0, L._)(this, 'wantPlayEvents', new Map()),
                        (0, L._)(this, 'reportedInitialBufferingPlayIds', new Set()),
                        (0, L._)(this, 'reportedPreFetchTrackIds', new Set()),
                        (this.builder = e.builder),
                        (this.buildEventDataExtension = e.buildEventDataExtension),
                        (this.transports = e.transports),
                        (this.mediaConfigController = e.mediaConfigController),
                        (this.enableDebugMode = e.enableDebugMode));
                }
            }
            class tz extends Q.t {
                constructor(e, { code: t = 'E_MEDIA_PROVIDER', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'MediaProviderException'), Object.setPrototypeOf(this, tz.prototype));
                }
            }
            function tQ(e) {
                let t, a, r;
                return (
                    !e.mediaSourceData ||
                        'error' in e.mediaSourceData.data ||
                        'downloadInfoSource' !== e.mediaSourceData.type ||
                        ((t = e.mediaSourceData.data.codec), (a = e.mediaSourceData.data.bitrate)),
                    e.expectedQuality && (r = tj(e.expectedQuality)),
                    { codec: t, bitrate: a, expectedQuality: r }
                );
            }
            function tH(e) {
                if (e instanceof Error) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return tH(e.cause);
                }
                if ('object' == typeof e && null !== e) {
                    if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                    if ('cause' in e && void 0 !== e.cause) return tH(e.cause);
                }
            }
            (!(function (e) {
                ((e.GET_FILE_INFO = 'GetFileInfo'), (e.GET_URL = 'GetUrl'), (e.SOURCE = 'Source'));
            })(p || (p = {})),
                !(function (e) {
                    ((e.E_GET_MEDIA_SRC = 'E_GET_MEDIA_SRC'), (e.E_CREATE_SIGN = 'E_CREATE_SIGN'), (e.E_UNSUITABLE_ENTITY_TYPE = 'E_UNSUITABLE_ENTITY_TYPE'));
                })(m || (m = {})),
                (function (e) {
                    ((e.NETWORK = 'NETWORK'), (e.OTHER = 'OTHER'));
                })(f || (f = {})),
                (function (e) {
                    ((e.RESPONSE_CODE = 'ResponseCode'), (e.OTHER = 'OTHER'));
                })(g || (g = {})));
            let tX = new Set(Object.values(m));
            function tJ(e) {
                return e instanceof tz || ('object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code && tX.has(e.code));
            }
            var tZ = a(61691);
            let t$ = [q.S.AUDIOBOOK, q.S.FAIRY_TALE, q.S.PODCAST, q.S.COMMENT],
                t0 = (e) => {
                    let { meta: t } = e.data,
                        a = 'albums' in t && t.albums && t.albums.length > 0 && t.albums[0] && t.albums[0].type === tZ._.PODCAST;
                    return !!(('type' in t && t.type && t$.includes(t.type)) || a);
                };
            function t1(e) {
                return (null == e ? void 0 : e.data.type) === U.R.Generative;
            }
            !(function (e) {
                ((e.TRACK = 'track'), (e.SET = 'set'), (e.TRAILER = 'trailer'), (e.NON_MUSIC = 'non_music'));
            })(b || (b = {}));
            let t3 = (e) => {
                let { entity: t } = e;
                return e.getFadeMode() === F.OQ.MIX ? b.SET : (0, ts.l)(t) ? b.TRAILER : t0(t) || t1(t) ? b.NON_MUSIC : b.TRACK;
            };
            class t5 {
                buildWantPlayEvent(e, t) {
                    let { entity: a } = e,
                        r = this.profile.getIdentity(a),
                        i = t3(e);
                    return {
                        event: { name: this.profile.eventNames.wantPlay, data: { ...r, uuid: a.playId, expectedQuality: t.expectedQuality, contentType: i } },
                        payload: { ...r, time: t.now, contentType: i },
                    };
                }
                buildPlayingEvent(e, t, a, r) {
                    var i, s, n;
                    let { entity: o } = e,
                        l = this.profile.getIdentity(o),
                        { codec: u, bitrate: d, expectedQuality: c } = tQ(o),
                        h = t3(e);
                    return {
                        name: this.profile.eventNames.isPlaying,
                        data: {
                            ...l,
                            time: r.now - t.time,
                            uuid: o.playId,
                            codec: u,
                            bitrate: d,
                            expectedQuality: c,
                            extraTrackType: this.profile.getExtraTrackType(a),
                            ...(null != (n = null == (i = (s = this.profile).buildExtraPlayingData) ? void 0 : i.call(s, a)) ? n : {}),
                            contentType: h,
                        },
                    };
                }
                buildPlayingMissedEvent(e, t) {
                    let { time: a, ...r } = t;
                    return { name: this.profile.eventNames.isPlayingMissed, data: { ...r, uuid: e } };
                }
                buildBufferingEvent(e) {
                    let { entity: t } = e;
                    if (0 === t.totalPlayedSeconds) return null;
                    let a = this.profile.getIdentity(t),
                        { codec: r, bitrate: i } = tQ(t),
                        s = t3(e);
                    return { name: this.profile.eventNames.isBuffering, data: { ...a, uuid: t.playId, codec: r, bitrate: i, contentType: s } };
                }
                buildErrorEvent(e, t) {
                    var a, r, i;
                    let { entity: s } = t,
                        n = this.profile.getIdentity(s),
                        o = tQ(s),
                        l = t3(t),
                        u = (function (e) {
                            let t = (function e(t) {
                                    return tJ(t)
                                        ? t.code
                                        : (t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                            ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)
                                          ? e(t.cause)
                                          : void 0;
                                })(e),
                                a = tH(e),
                                r = t === m.E_GET_MEDIA_SRC || 'number' == typeof a,
                                i = r ? f.NETWORK : f.OTHER,
                                s = r && 'number' == typeof a ? g.RESPONSE_CODE : g.OTHER,
                                n = 'object' == typeof e && null !== e && 'code' in e && 'string' == typeof e.code ? e.code : 'E_UNKNOWN',
                                o = r && 'number' == typeof a ? String(a) : n;
                            return { type: i, subType: s, responseCode: a, code: o };
                        })(e);
                    if (e instanceof tz)
                        return {
                            name: this.profile.eventNames.errorPrepare,
                            data: {
                                ...n,
                                uuid: s.playId,
                                type: u.type,
                                subType: u.subType,
                                name: e.name,
                                code: u.code,
                                bitrate: o.bitrate,
                                codec: o.codec,
                                expectedQuality: o.expectedQuality,
                                contentType: l,
                                place: this.profile.errorPreparePlace,
                            },
                        };
                    if (e instanceof F.LI && e.code === F.QC.PLAY)
                        return this.isAbortError(e.cause)
                            ? null
                            : {
                                  name: this.profile.eventNames.errorInitialBuffering,
                                  data: {
                                      ...n,
                                      uuid: s.playId,
                                      type: u.type,
                                      subType: u.subType,
                                      name: e.name,
                                      code: u.code,
                                      bitrate: o.bitrate,
                                      codec: o.codec,
                                      expectedQuality: o.expectedQuality,
                                      contentType: l,
                                      place: p.SOURCE,
                                      ...(e.cause instanceof DOMException
                                          ? { causeCode: e.cause.code, causeMessage: e.cause.message, causeName: e.cause.name }
                                          : { causeCode: -1, causeMessage: 'Unknown error message', causeName: 'Unknown error name' }),
                                  },
                              };
                    if (e instanceof F.LI && e.code === F.QC.MEDIA_ELEMENT_ERROR)
                        return 0 === s.totalPlayedSeconds
                            ? null
                            : {
                                  name: this.profile.eventNames.errorPlaying,
                                  data: {
                                      ...n,
                                      uuid: s.playId,
                                      type: u.type,
                                      subType: u.subType,
                                      name: e.name,
                                      code: u.code,
                                      bitrate: o.bitrate,
                                      codec: o.codec,
                                      expectedQuality: o.expectedQuality,
                                      contentType: l,
                                      place: p.SOURCE,
                                      ...(e.cause instanceof MediaError
                                          ? { causeCode: e.cause.code, causeMessage: e.cause.message }
                                          : { causeCode: -1, causeMessage: 'Unknown cause' }),
                                  },
                              };
                    return null !=
                        (i =
                            null == (a = (r = this.profile).buildExtraErrorEvent)
                                ? void 0
                                : a.call(r, { error: e, identity: n, quality: o, contentType: l, errorTypeInfo: u }))
                        ? i
                        : null;
                }
                isAbortError(e) {
                    return 'object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name;
                }
                constructor(e) {
                    ((0, L._)(this, 'profile', void 0), (this.profile = e));
                }
            }
            let t8 = new Set([v.WANT_PLAY_STREAM, v.STREAM_IS_PLAYING, v.STREAM_ERROR_PREPARE, v.STREAM_ERROR_INITIAL_BUFFERING, v.STREAM_ERROR_PLAYING]);
            !(function (e) {
                ((e.SKIPPED = 'SKIPPED'), (e.NEXT = 'NEXT'), (e.FROM_QUEUE = 'FROM_QUEUE'), (e.OTHER = 'OTHER'));
            })(E || (E = {}));
            let t2 = {
                eventNames: {
                    wantPlay: v.WANT_PLAY_STREAM,
                    isPlaying: v.STREAM_IS_PLAYING,
                    isPlayingMissed: v.STREAM_IS_PLAYING_MISSED,
                    isBuffering: v.STREAM_IS_BUFFERING,
                    errorPrepare: v.STREAM_ERROR_PREPARE,
                    errorInitialBuffering: v.STREAM_ERROR_INITIAL_BUFFERING,
                    errorPlaying: v.STREAM_ERROR_PLAYING,
                },
                errorPreparePlace: p.GET_URL,
                getIdentity: (e) => ({ radioStreamSlug: String(e.data.meta.id) }),
                getExtraTrackType: () => E.OTHER,
            };
            class t4 {
                setHooks(e) {
                    this.runner.setOnSendError((t) => e.afterError.promise(t));
                }
                onWantPlay(e) {
                    return this.runner.handleWantPlay(e);
                }
                onError(e, t) {
                    return this.runner.handleError(e, t);
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onCanPlay(e) {
                    return this.runner.handlePlaying(e);
                }
                onPlaying(e) {
                    return this.runner.handlePlaying(e);
                }
                onEntityChange() {}
                onBeforeMediaStartPlaying() {}
                constructor(e) {
                    var t;
                    ((0, L._)(this, 'runner', void 0),
                        (this.runner = new tG({
                            builder: new t5(t2),
                            buildEventDataExtension: (function (e) {
                                return (t) => {
                                    if (!t8.has(t)) return;
                                    let a = null == e ? void 0 : e();
                                    if (void 0 !== a) return { strmSessionId: a };
                                };
                            })(e.getStrmSessionId),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        })));
                }
            }
            (S || (S = {})).GET_FILE_INFO = 'get_file_info';
            let t9 = {
                eventNames: {
                    wantPlay: v.WANT_PLAY_TRACK,
                    isPlaying: v.TRACK_IS_PLAYING,
                    isPlayingMissed: v.TRACK_IS_PLAYING_MISSED,
                    isBuffering: v.TRACK_IS_BUFFERING,
                    errorPrepare: v.TRACK_ERROR_PREPARE,
                    errorInitialBuffering: v.TRACK_ERROR_INITIAL_BUFFERING,
                    errorPlaying: v.TRACK_ERROR_PLAYING,
                },
                errorPreparePlace: p.GET_FILE_INFO,
                getIdentity: (e) => ({ trackId: String(e.data.meta.id) }),
                getExtraTrackType: (e) => e.extraTrackType,
                buildExtraPlayingData: (e) => {
                    let t = {};
                    return (
                        'number' == typeof e.trackUrlReceivedTime && (t.trackUrlReceivedTime = e.trackUrlReceivedTime),
                        'number' == typeof e.firstDataReceivedTime && (t.firstDataReceivedTime = e.firstDataReceivedTime),
                        'number' == typeof e.initialDataEnqueuedTime && (t.initialDataEnqueuedTime = e.initialDataEnqueuedTime),
                        t
                    );
                },
                buildExtraErrorEvent: (e) => {
                    let { error: t, identity: a, quality: r, contentType: i, errorTypeInfo: s } = e;
                    return t instanceof F.LI && t.code === F.QC.PRE_FETCH
                        ? {
                              name: v.TRACK_ERROR_PRE_FETCH,
                              data: {
                                  ...a,
                                  type: s.type,
                                  subType: s.subType,
                                  name: t.name,
                                  code: s.code,
                                  bitrate: r.bitrate,
                                  codec: r.codec,
                                  expectedQuality: r.expectedQuality,
                                  contentType: i,
                                  place: !(function e(t) {
                                      return (
                                          !!tJ(t) ||
                                          (((t instanceof Error && 'cause' in t && void 0 !== t.cause) ||
                                              ('object' == typeof t && null !== t && 'cause' in t && void 0 !== t.cause)) &&
                                              e(t.cause))
                                      );
                                  })(t.cause)
                                      ? p.SOURCE
                                      : p.GET_FILE_INFO,
                              },
                          }
                        : null;
                },
            };
            class t6 {
                setHooks(e) {
                    let t = (t) => {
                        e.afterError.promise(t);
                    };
                    ((this.onSendError = t), this.runner.setOnSendError(t));
                }
                onCurrentEntityVisit(e, t, a) {
                    let r;
                    if (!ev(e.entity) || e.entity.data.sourceContextData || e.entity.data.wasPlayed || this.visitedWaveTrackEntities.has(e.entity)) return null;
                    let i = String(e.entity.data.meta.id),
                        s = [];
                    t.forEach((e, t) => {
                        let { entity: a } = e;
                        String(a.data.meta.id) === i && s.push(t);
                    });
                    let n = s.length > 1;
                    if (n && a)
                        try {
                            r = a(s);
                        } catch (e) {
                            r = { schemaVersion: 1, status: 'unavailable' };
                        }
                    let o = { name: v.FIRST_WAVE_TRACK_VISIT, data: { isDuplicated: n, ...(r ? { debug: r } : {}) } };
                    return (
                        this.visitedWaveTrackEntities.add(e.entity),
                        tK(o, o.name, this.enableDebugMode, { trackId: i, playId: e.entity.playId }),
                        tY(o, this.transports, this.onSendError),
                        o
                    );
                }
                onBeforeMediaStartPlaying(e) {
                    var t, a;
                    if (!(e.mediaSourceData instanceof tF)) return null;
                    let r = String(e.data.meta.id),
                        i = null == (t = e.mediaSourceData) ? void 0 : t.getFileInfoResponseTime,
                        s = null == (a = e.mediaSourceData) ? void 0 : a.url,
                        n = null;
                    if ('number' == typeof i) {
                        let t = this.startupStageInfoByPlayId.get(e.playId);
                        this.startupStageInfoByPlayId.set(e.playId, { ...t, trackUrlReceivedTime: i });
                    }
                    return (
                        'number' == typeof i && s && (n = { name: v.REQUEST_TIME, data: { trackId: r, urlType: S.GET_FILE_INFO, url: s, time: i } }),
                        tK(n, null == n ? void 0 : n.name, this.enableDebugMode),
                        n && tY(n, this.transports, this.onSendError),
                        n
                    );
                }
                onWantPlay(e) {
                    let t = Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.entity.playId);
                    return (
                        this.startupStageInfoByPlayId.clear(),
                        this.startupStageInfoByPlayId.set(e.entity.playId, { ...a, wantPlayStartedAt: t }),
                        this.runner.handleWantPlay(e, t)
                    );
                }
                onError(e, t) {
                    let a = this.runner.hasWantPlay(t.entity.playId),
                        r = this.runner.handleError(e, t);
                    return (a && !this.runner.hasWantPlay(t.entity.playId) && this.startupStageInfoByPlayId.delete(t.entity.playId), r);
                }
                onBuffering(e) {
                    return this.runner.handleBuffering(e);
                }
                onCanPlay(e) {
                    return this.handleTrackIsPlaying(e);
                }
                onPlaying(e) {
                    return this.handleTrackIsPlaying(e);
                }
                handleTrackIsPlaying(e) {
                    var t;
                    let a = Math.trunc(performance.now()),
                        r = (function (e) {
                            switch (e) {
                                case F.So.SET_INDEX:
                                case F.So.MOVE_BACKWARD:
                                    return E.FROM_QUEUE;
                                case F.So.AUTO_MOVE_FORWARD:
                                    return E.NEXT;
                                case F.So.ERROR_MOVE_FORWARD:
                                case F.So.DISLIKE_MOVE_FORWARD:
                                case F.So.MOVE_FORWARD:
                                    return E.SKIPPED;
                                default:
                                    return E.OTHER;
                            }
                        })(null == (t = this.addtionalInfoByPlayId.get(this.lastAdditionalInfoKey)) ? void 0 : t.entityChangeMethod),
                        i = this.runner.handlePlaying(e, this.buildTrackPlayingContext(e.entity.playId, r, a), a);
                    return (
                        i &&
                            (this.addtionalInfoByPlayId.delete(this.lastAdditionalInfoKey),
                            this.startupStageInfoByPlayId.delete(e.entity.playId),
                            (this.lastAdditionalInfoKey = null)),
                        i
                    );
                }
                onEntityChange(e, t) {
                    let { method: a } = t;
                    (this.runner.clearPreFetchDedupe(),
                        this.addtionalInfoByPlayId.size && this.addtionalInfoByPlayId.clear(),
                        (this.lastAdditionalInfoKey = e.playId),
                        this.addtionalInfoByPlayId.set(e.playId, { entityChangeMethod: a }));
                }
                onFirstDataReceived(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.trunc(performance.now()),
                        a = this.startupStageInfoByPlayId.get(e.playId);
                    (null != a && a.firstDataReceivedAt) || this.startupStageInfoByPlayId.set(e.playId, { ...a, firstDataReceivedAt: t });
                }
                buildTrackPlayingContext(e, t, a) {
                    let r = this.startupStageInfoByPlayId.get(e),
                        i = { extraTrackType: t, trackUrlReceivedTime: null == r ? void 0 : r.trackUrlReceivedTime };
                    if ('number' != typeof (null == r ? void 0 : r.wantPlayStartedAt) || 'number' != typeof r.firstDataReceivedAt) return i;
                    if ('number' == typeof r.trackUrlReceivedTime) {
                        let e = r.firstDataReceivedAt - r.wantPlayStartedAt - r.trackUrlReceivedTime;
                        e >= 0 && (i.firstDataReceivedTime = e);
                    }
                    let s = a - r.firstDataReceivedAt;
                    return (s >= 0 && (i.initialDataEnqueuedTime = s), i);
                }
                constructor(e) {
                    var t, a;
                    ((0, L._)(this, 'runner', void 0),
                        (0, L._)(this, 'addtionalInfoByPlayId', new Map()),
                        (0, L._)(this, 'startupStageInfoByPlayId', new Map()),
                        (0, L._)(this, 'lastAdditionalInfoKey', null),
                        (0, L._)(this, 'visitedWaveTrackEntities', new WeakSet()),
                        (0, L._)(this, 'enableDebugMode', void 0),
                        (0, L._)(this, 'transports', void 0),
                        (0, L._)(this, 'onSendError', void 0),
                        (this.runner = new tG({
                            builder: new t5(t9),
                            transports: e.transports,
                            mediaConfigController: e.mediaConfigController,
                            enableDebugMode: null == (t = e.variables) ? void 0 : t.enableDebugMode,
                        })),
                        (this.enableDebugMode = null == (a = e.variables) ? void 0 : a.enableDebugMode),
                        (this.transports = e.transports));
                }
            }
            class t7 {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    if (
                        (this.metricsStore.setHooks(t),
                        this.subscribeOnBufferedInfoChanged(a),
                        a.state.playerState.event.onChange(() => {
                            let e = a.state.playerState.event.value,
                                t = a.state.queueState.currentEntity.value;
                            (t &&
                                (e === F.Iu.CANPLAY && this.metricsStore.onCanPlay(t),
                                e === F.Iu.WAITING && this.recentMediaPlayerEventType !== F.Iu.SETTING_PROGRESS && this.metricsStore.onBuffering(t)),
                                (this.recentMediaPlayerEventType = e));
                        }),
                        this.waveDuplicateDiagnostics)
                    )
                        for (let e of (t.beforeInject.tap('MetricsPlugin', (e) => (this.recordQueueObservation('beforeInject', a), e)),
                        t.afterEntityRemove.tapPromise('MetricsPlugin', () => (this.recordQueueObservation('afterEntityRemove', a), Promise.resolve())),
                        t.afterSetupQueue.tap('MetricsPlugin', () => {
                            this.recordQueueObservation('afterSetupQueue', a);
                        }),
                        [a.state.queueState.entityList, a.state.queueState.order]))
                            this.diagnosticUnlisteners.push(
                                e.onChange(() => {
                                    this.recordQueueObservation('queueChanged', a);
                                }),
                            );
                    (a.state.queueState.currentEntity.onChange(() => {
                        let e = a.state.queueState.currentEntity.value;
                        if (e) {
                            var t, r;
                            (this.recordQueueObservation('entityVisited', a),
                                null == (t = (r = this.metricsStore).onCurrentEntityVisit) ||
                                    t.call(
                                        r,
                                        e,
                                        a.state.queueState.entityList.value,
                                        this.waveDuplicateDiagnostics
                                            ? (t) => {
                                                  var r;
                                                  return null == (r = this.waveDuplicateDiagnostics) ? void 0 : r.capture(e, a.state.queueState, t);
                                              }
                                            : void 0,
                                    ));
                        }
                    }),
                        t.beforeEntityChange.tapPromise('MetricsPlugin', (e) => {
                            this.recordQueueObservation('beforeEntityChange', a, e.method);
                            let t = a.state.queueState.currentEntity.value;
                            return (t && this.metricsStore.onEntityChange(t.entity, e), Promise.resolve());
                        }),
                        t.beforeEntityPlayingProcessStart.tapPromise('MetricsPlugin', () => {
                            this.subscribeOnBufferedInfoChanged(a);
                            let e = a.state.queueState.currentEntity.value;
                            return (e && ((this.firstDataReceivedPlayId = null), this.metricsStore.onWantPlay(e)), Promise.resolve());
                        }),
                        t.afterError.tapPromise('MetricsPlugin', (e) => {
                            let t = a.state.queueState.currentEntity.value,
                                r = a.state.queueState.nextEntity.value,
                                i = e instanceof F.LI && e.code === F.QC.PRE_FETCH && null != r ? r : t;
                            return (i && this.metricsStore.onError(e, i), Promise.resolve());
                        }),
                        t.afterMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return (e && this.metricsStore.onPlaying(e), Promise.resolve());
                        }),
                        t.beforeMediaStartPlaying.tapPromise('MetricsPlugin', () => {
                            let e = a.state.queueState.currentEntity.value;
                            return (e && this.metricsStore.onBeforeMediaStartPlaying(e.entity), Promise.resolve());
                        }),
                        t.beforeDestroy.tapPromise('MetricsPlugin', () => {
                            var e;
                            return (
                                this.unsubscribeFromBufferedInfoChanged(),
                                this.diagnosticUnlisteners.forEach((e) => e()),
                                (this.diagnosticUnlisteners = []),
                                null == (e = this.waveDuplicateDiagnostics) || e.destroy(),
                                Promise.resolve()
                            );
                        }));
                }
                recordQueueObservation(e, t, a) {
                    try {
                        var r;
                        null == (r = this.waveDuplicateDiagnostics) || r.recordQueueObservation(e, t.state.queueState, a);
                    } catch (e) {}
                }
                subscribeOnBufferedInfoChanged(e) {
                    var t, a;
                    let r = null == (a = window.Ya) || null == (t = a.YaspAudioElement) ? void 0 : t.messenger;
                    r &&
                        ((this.bufferedInfoChangedMessenger === r && this.bufferedInfoChangedHandler) ||
                            (this.unsubscribeFromBufferedInfoChanged(),
                            (this.bufferedInfoChangedHandler = (t) => {
                                var a, r;
                                let { source: i, bufferedInfo: s } = t,
                                    n = e.state.queueState.currentEntity.value;
                                n &&
                                    0 !== s.audio.length &&
                                    this.firstDataReceivedPlayId !== n.entity.playId &&
                                    this.isCurrentSource(n.entity, i) &&
                                    ((this.firstDataReceivedPlayId = n.entity.playId),
                                    null == (a = (r = this.metricsStore).onFirstDataReceived) || a.call(r, n.entity, Math.trunc(performance.now())));
                            }),
                            r.on('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                            (this.bufferedInfoChangedMessenger = r)));
                }
                unsubscribeFromBufferedInfoChanged() {
                    this.bufferedInfoChangedMessenger &&
                        this.bufferedInfoChangedHandler &&
                        (this.bufferedInfoChangedMessenger.off('BufferedInfoChanged', this.bufferedInfoChangedHandler),
                        (this.bufferedInfoChangedMessenger = void 0),
                        (this.bufferedInfoChangedHandler = void 0));
                }
                isCurrentSource(e, t) {
                    if (!(e.mediaSourceData instanceof tF)) return !1;
                    try {
                        let a = this.normalizeSource(e.mediaSourceData.src),
                            r = this.normalizeSource(t);
                        return null !== a && a === r;
                    } catch (e) {
                        return !1;
                    }
                }
                normalizeSource(e) {
                    try {
                        let t = new URL(e);
                        return ''.concat(t.origin).concat(t.pathname).concat(t.search);
                    } catch (e) {
                        return null;
                    }
                }
                constructor(e) {
                    var t, a;
                    ((0, L._)(this, 'waveDuplicateDiagnostics', void 0),
                        (0, L._)(this, 'diagnosticUnlisteners', []),
                        (0, L._)(this, 'recordSessionDiagnosticEvent', (e, t) => {
                            var a;
                            null == (a = this.waveDuplicateDiagnostics) || a.recordSessionDiagnosticEvent(e, t);
                        }),
                        (0, L._)(this, 'recordYnisonQueueDiagnosticEvent', (e, t) => {
                            var a;
                            null == (a = this.waveDuplicateDiagnostics) || a.recordYnisonQueueDiagnosticEvent(e, t);
                        }),
                        (0, L._)(this, 'metricsStore', void 0),
                        (0, L._)(this, 'recentMediaPlayerEventType', null),
                        (0, L._)(this, 'bufferedInfoChangedMessenger', void 0),
                        (0, L._)(this, 'bufferedInfoChangedHandler', void 0),
                        (0, L._)(this, 'firstDataReceivedPlayId', null));
                    let r = null != (a = null == (t = e.variables) ? void 0 : t.profile) ? a : h.TRACK;
                    ((this.metricsStore = (function (e, t) {
                        switch (e) {
                            case h.STREAM:
                                return new t4(t);
                            case h.TRACK:
                            default:
                                return new t6(t);
                        }
                    })(r, e)),
                        r === h.TRACK && e.waveDuplicateDiagnostics && (this.waveDuplicateDiagnostics = new tB(e.waveDuplicateDiagnostics.getPuid)));
                }
            }
            var ae = a(40700);
            let at = [];
            function aa(e, t) {
                let a,
                    r,
                    i = e.state.queueState.order.value,
                    s = e.state.queueState.index.value,
                    n = e.state.currentContext.value,
                    o = e.state.queueState.entityList.value,
                    l = e.state.queueState.repeat.value === F.pM.CONTEXT;
                at.forEach((e) => e());
                for (let t = s - 1; t >= 0; t--) {
                    let r = i[t];
                    if ('number' != typeof r) break;
                    let s = o[r],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_BACKWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        a = s.entity;
                        break;
                    }
                }
                let u = !!a || l;
                for (let t = s + 1; t < i.length; t++) {
                    let a = i[t];
                    if ('number' != typeof a) break;
                    let s = o[a],
                        n = null == s ? void 0 : s.canBePlayed({ index: t, entityChangeMethod: F.So.MOVE_FORWARD, filterParams: e.state.queueState.filterParams.value });
                    if (void 0 !== s && !s.entity.hidden && n) {
                        r = s.entity;
                        break;
                    }
                }
                let d = !!r || (l && !!a) || (!l && t);
                if (
                    (n &&
                        ((n.availableActions.moveBackward.value = u),
                        (n.availableActions.moveForward.value = d && !(0, ae.S)(n)),
                        (0, e3.i)(n) && !n.data.meta.session && (n.availableActions.moveForward.value = !1),
                        a || r || !l || ((n.availableActions.moveBackward.value = !1), (n.availableActions.moveForward.value = !1))),
                    (0, ae.S)(n))
                )
                    return;
                if (!a) {
                    let t = e.state.playerState.progress.onChange((t) => {
                        n &&
                            t &&
                            (((l = e.state.queueState.repeat.value === F.pM.CONTEXT) && !a && !r) || !l) &&
                            (n.availableActions.moveBackward.value = t.position > F.DS);
                    });
                    at.push(t);
                }
                let c = e.state.queueState.repeat.onChange((e) => {
                    if (n) {
                        if ((0, e3.i)(n) && !n.data.meta.session) {
                            n.availableActions.moveForward.value = !1;
                            return;
                        }
                        if (e === F.pM.CONTEXT) {
                            ((n.availableActions.moveBackward.value = !!a || (0 === s && !!r)), (n.availableActions.moveForward.value = !!r || !!a));
                            return;
                        }
                        ((n.availableActions.moveBackward.value = !!a), (n.availableActions.moveForward.value = !!r || t));
                    }
                });
                at.push(c);
            }
            class ar {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = () => {
                            !(function (e) {
                                let { playback: t, isVibeRepeatEnabled: a } = e,
                                    { value: r } = t.state.currentContext,
                                    { value: i } = t.state.queueState.currentEntity;
                                if (!r || !i) return;
                                let { meta: s } = i.entity.data,
                                    n = (0, e3.i)(r),
                                    o = (0, ae.S)(r),
                                    l = 'type' in s && s.type && t$.includes(s.type),
                                    u = !n && !o && !l,
                                    d = (!n || a) && !o && !l;
                                ((r.availableActions.shuffle.value = u),
                                    (r.availableActions.repeat.value = d),
                                    !u && t.state.queueState.shuffle.value && t.toggleShuffle());
                                let c = t.state.queueState.repeat.value,
                                    h = !d && c !== F.pM.NONE,
                                    v = d && n && c === F.pM.CONTEXT;
                                (h || v) && t.setRepeatMode(F.pM.NONE);
                            })({ playback: a, isVibeRepeatEnabled: this.variables.isVibeRepeatEnabled });
                            let { value: e } = a.state.currentContext,
                                { value: t } = a.state.queueState.currentEntity,
                                r = void 0 !== t;
                            if (void 0 !== e && r) {
                                let a = t0(t.entity);
                                e.availableActions.speed.value = !!a;
                            }
                        };
                    (t.afterContextSet.tap('AvailableActionsPlugin', r),
                        t.beforeMediaStartPlaying.tap('AvailableActionsPlugin', r),
                        a.state.queueState.entityList.onChange(() => {
                            (r(), aa(a, this.variables.isAutoflowEnabled));
                        }),
                        a.state.queueState.filterParams.onChange(() => {
                            (r(), aa(a, this.variables.isAutoflowEnabled));
                        }),
                        a.state.queueState.index.onChange(() => {
                            aa(a, this.variables.isAutoflowEnabled);
                        }),
                        a.state.queueState.repeat.onChange((e) => {
                            let { value: t } = a.state.currentContext;
                            (0, e3.i)(t) && this.variables.isVibeRepeatEnabled && e === F.pM.CONTEXT && a.setRepeatMode(F.pM.ONE);
                        }));
                }
                constructor({ variables: e }) {
                    ((0, L._)(this, 'variables', void 0), (this.variables = e));
                }
            }
            class ai {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterContextSet.tap('ApplyContextPlugin', () => {
                        let e = a.state.currentContext.value;
                        e && e instanceof F.EX && e.apply({ hooks: t, playback: a });
                    });
                }
            }
            class as {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    (t.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = t.state.queueState;
                        if (e.value)
                            switch (t.state.playerState.event.value) {
                                case F.Iu.PAUSED:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.PAUSED) });
                                    break;
                                case F.Iu.WAITING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.WAITING) });
                                    break;
                                case F.Iu.PLAYING:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'event-'.concat(F.Iu.PLAYING) });
                                    break;
                                case F.Iu.MEDIA_ELEMENT_ERROR:
                                    e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'event-'.concat(F.Iu.MEDIA_ELEMENT_ERROR) });
                            }
                    }),
                        a.beforeEntityPlayingProcessStart.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return (e.value && e.value.entity.clearTimeStagesOfPlayback(), Promise.resolve());
                        }),
                        a.afterMediaStartPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return (e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.PLAYING, reason: 'hook-afterMediaStartPlaying' }), Promise.resolve());
                        }),
                        a.afterMediaEndPlaying.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return (e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-afterMediaEndPlaying' }), Promise.resolve());
                        }),
                        a.beforeEntityChange.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return (e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeEntityChange' }), Promise.resolve());
                        }),
                        a.beforeContextSet.tapPromise('TotalPlayedTimePlugin', () => {
                            let { currentEntity: e } = t.state.queueState;
                            return (e.value && e.value.entity.saveTimeStageOfPlayback({ stage: r.NOT_PLAYING, reason: 'hook-beforeContextSet' }), Promise.resolve());
                        }));
                }
            }
            var an = a(55532),
                ao = a(13964);
            class al extends an.X {
                async sendPlays(e, t) {
                    return (
                        await this.httpClient.post(
                            'plays',
                            this.createHttpOptions({
                                timeoutKey: 'sendPlays',
                                params: e,
                                searchParams: (0, ao.P)({ clientNow: e.clientNow }),
                                json: { plays: e.plays },
                                signal: null == t ? void 0 : t.signal,
                            }),
                        )
                    ).json();
                }
                constructor(e, t) {
                    (super(e, t), (0, L._)(this, 'httpClient', void 0), (0, L._)(this, 'config', void 0), (this.httpClient = e), (this.config = t));
                }
            }
            var au = a(89916);
            !(function (e) {
                ((e.START = 'start'), (e.END = 'end'), (e.PLAYING = 'playing'), (e.PAUSE = 'pause'));
            })(_ || (_ = {}));
            var ad = a(2573),
                ac = a(6173),
                ah = a(73636),
                av = a(42933),
                ay = a(21413);
            let ap = (e) => !!(e && 'object' == typeof e && 'playId' in e && 'totalPlayedSeconds' in e),
                am = (e) => {
                    let t = [e.find((e) => 0 === e.totalPlayedSeconds), (0, ah.A)(e, 'totalPlayedSeconds')];
                    return (0, av.A)(t.filter(ap), 'totalPlayedSeconds');
                };
            class af {
                use(e) {
                    return (this.middlewares.push(e), this);
                }
                run(e) {
                    let t = (a) => (a >= this.middlewares.length ? Promise.resolve() : (0, this.middlewares[a])(e, () => t(a + 1)));
                    return t(0);
                }
                constructor() {
                    (0, L._)(this, 'middlewares', []);
                }
            }
            class ag {
                getResult() {
                    return this.playData;
                }
                constructor(e) {
                    ((0, L._)(this, 'contextEntityPair', void 0),
                        (0, L._)(this, 'playType', void 0),
                        (0, L._)(this, 'totalPlayedSeconds', void 0),
                        (0, L._)(this, 'endPositionSeconds', void 0),
                        (0, L._)(this, 'dynamicData', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'operation', void 0),
                        (0, L._)(this, 'clock', void 0),
                        (0, L._)(this, 'isCrossfadeEnabled', void 0),
                        (0, L._)(this, 'playData', {}),
                        (this.contextEntityPair = e.contextEntityPair),
                        (this.playType = e.playType),
                        (this.totalPlayedSeconds = e.totalPlayedSeconds),
                        (this.endPositionSeconds = e.endPositionSeconds),
                        (this.dynamicData = e.dynamicData),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.operation = e.operation),
                        (this.clock = e.clock),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled));
                }
            }
            class ab extends Q.t {
                constructor(e, { code: t = 'E_PLAYS', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PlaysException'), Object.setPrototypeOf(this, ab.prototype));
                }
            }
            let aE = (e, t) => {
                var a, r, i;
                let { entity: s, context: n } = e.contextEntityPair;
                if (!s.playId) {
                    let t = {};
                    ((t.contextId = n.data.meta.id), (t.entityId = s.data.meta.id));
                    let a = new ab('Trying to '.concat(e.operation, ' without playId'), { data: t });
                    throw (null == (r = e.hooks) || r.afterError.promise(a), a);
                }
                let o = (null == (a = s.data.additional) ? void 0 : a.from) || n.from;
                if (!o) {
                    let t = new ab('from field is required for '.concat(e.operation, ', but was not found in plays data'));
                    throw (null == (i = e.hooks) || i.afterError.promise(t), t);
                }
                return ((e.playData.playId = s.playId), (e.playData.from = o), t());
            };
            function aS(e) {
                return (null == e ? void 0 : e.data.type) === ea.K.Radio;
            }
            function a_(e) {
                if ((0, ts.l)(e)) {
                    var t;
                    if ('smartPreviewParams' in e.data.meta && (null == (t = e.data.meta.smartPreviewParams) ? void 0 : t.durationMs))
                        return e.data.meta.smartPreviewParams.durationMs / 1e3;
                } else if ('durationMs' in e.data.meta && e.data.meta.durationMs) return e.data.meta.durationMs / 1e3;
                return 0;
            }
            let aA = (e, t) => {
                    let { entity: a, context: r } = e.contextEntityPair,
                        i = a_(a),
                        s = e.totalPlayedSeconds,
                        n = e.endPositionSeconds;
                    return (
                        0.5 > Math.abs(i - e.totalPlayedSeconds) && (s = i),
                        0.5 > Math.abs(i - e.endPositionSeconds) && (n = i),
                        aS(r) && (n = s),
                        (e.playData.totalPlayedSeconds = s),
                        (e.playData.endPositionSeconds = n),
                        (e.playData.trackLengthSeconds = i),
                        t()
                    );
                },
                aP = (e) => {
                    if (e.mediaSourceData && 'urls' in e.mediaSourceData.data) {
                        let t = e.mediaSourceData.data.urls[0];
                        if (t && t.startsWith('blob:')) return !0;
                    }
                    return !1;
                };
            function ak(e) {
                return (null != e ? e : new Date()).toISOString();
            }
            let aI = (e, t) => {
                    var a;
                    let { entity: r, context: i } = e.contextEntityPair;
                    ((e.playData.timestamp = ak(e.clock())),
                        (e.playData.albumId = (function (e) {
                            let t;
                            if ('albums' in e.data.meta) {
                                let {
                                    data: {
                                        meta: { albums: a },
                                    },
                                } = e;
                                if (a) {
                                    let e = a[0];
                                    e && (t = String(e.id));
                                }
                            }
                            return t;
                        })(r)),
                        (e.playData.context = i.data.type),
                        (e.playData.contextItem = String(i.data.meta.id)),
                        (e.playData.addTracksToPlayerTime = r.addTracksToPlayerTime),
                        (e.playData.fromCache = aP(r)),
                        (e.playData.isRestored = !!r.data.isRestored));
                    let s = (null == (a = r.data.additional) ? void 0 : a.utmLink) || i.utmLink || {};
                    return ((e.playData = { ...e.playData, ...s }), t());
                },
                aC = (e, t) => ((e.playData.audioAuto = 'none'), (e.playData.audioOutputName = 'Динамик'), (e.playData.audioOutputType = 'Speaker'), t()),
                ax = (e, t) => {
                    let a,
                        { entity: r, context: i } = e.contextEntityPair,
                        s = String(r.data.meta.id);
                    if ((0, ae.S)(i)) {
                        var n;
                        a = { generativeStreamId: (null == (n = i.data.meta.stream) ? void 0 : n.id) ? String(i.data.meta.stream.id) : void 0 };
                    } else a = { trackId: s };
                    return ((e.playData = { ...e.playData, ...a }), t());
                },
                aT = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, e3.i)(a) && a.data.meta.session) {
                        var r, i, s;
                        let { dynamicData: t } = e,
                            n = ev(e.contextEntityPair.entity) || (0, eI.b)(e.contextEntityPair.entity) ? e.contextEntityPair.entity.data.batchId : void 0,
                            {
                                wave: { seeds: o, stationId: l },
                            } = a.data.meta.session;
                        ((e.playData.radioSessionId = null != (r = t.radioSessionId) ? r : a.data.meta.session.radioSessionId),
                            (e.playData.batchId = null != (i = null != n ? n : t.radioBatchId) ? i : a.data.meta.session.batchId),
                            (e.playData.isFromAutoflow = t.isFromAutoflow),
                            (e.playData.isFromPumpkin = t.isFromPumpkin),
                            (e.playData.context = 'radio'),
                            (e.playData.contextItem = null != (s = t.contextItem) ? s : o.join() || l));
                    }
                    return t();
                };
            var aR = a(99344);
            let aD = (e, t) => {
                let { context: a } = e.contextEntityPair;
                return (
                    (0, aR.K)(a) &&
                        ((e.playData.playlistId = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind)),
                        (e.playData.contextItem = ''.concat(a.data.meta.uid, ':').concat(a.data.meta.kind))),
                    t()
                );
            };
            var aw = a(27294),
                aN = a(59758);
            let aO = (e, t) => {
                    let { context: a } = e.contextEntityPair;
                    if ((0, aw.p)(a)) {
                        var r;
                        let t = [aN.b.Search, aN.b.Other],
                            i = null != (r = a.data.overrideContextType) ? r : aN.b.Other;
                        ((e.playData.context = i), t.includes(i) && (e.playData.contextItem = null));
                    }
                    return t();
                },
                aM = (e, t) => {
                    let { entity: a } = e.contextEntityPair;
                    return ((0, ts.l)(a) && (e.playData.smartPreview = !0), t());
                };
            !(function (e) {
                ((e.AFTER_MEDIA_END_PLAYING = 'AFTER_MEDIA_END_PLAYING'),
                    (e.BEFORE_CONTEXT_SET = 'BEFORE_CONTEXT_SET'),
                    (e.BEFORE_ENTITY_CHANGE = 'BEFORE_ENTITY_CHANGE'),
                    (e.AFTER_CONTEXT_END = 'AFTER_CONTEXT_END'));
            })(A || (A = {}));
            let aL = (e, t) => {
                var a, r;
                let { dynamicData: i, playType: s } = e;
                return (
                    (e.playData.seek = null != (a = i.seek) && a),
                    (e.playData.pause = null != (r = i.pause) && r),
                    (e.playData.startTimestamp = i.startTimestamp),
                    s !== _.START && (e.playData.maxPlayerStage = i.maxPlayerStage),
                    (e.playData.isRepeated = i.hookSource === A.AFTER_MEDIA_END_PLAYING && i.repeatMode === F.pM.ONE),
                    t()
                );
            };
            !(function (e) {
                ((e.FINISH = 'finish'),
                    (e.SKIP = 'skip'),
                    (e.DISLIKE = 'dislike'),
                    (e.BACK_SKIP = 'back_skip'),
                    (e.OTHER_TRACK = 'other_track'),
                    (e.IN_PROGRESS = 'in_progress'));
            })(P || (P = {}));
            let aF = (e, t) => {
                let a,
                    { dynamicData: r, playType: i } = e;
                if (void 0 !== r.changeReason) return ((e.playData.changeReason = r.changeReason), t());
                if (!r.hookSource) return (i === _.PLAYING && (e.playData.changeReason = P.IN_PROGRESS), t());
                switch (r.hookSource) {
                    case A.AFTER_MEDIA_END_PLAYING:
                        a = P.FINISH;
                        break;
                    case A.BEFORE_CONTEXT_SET:
                        a = P.OTHER_TRACK;
                        break;
                    case A.BEFORE_ENTITY_CHANGE:
                    case A.AFTER_CONTEXT_END:
                        a = (function (e, t) {
                            if (!e) return P.OTHER_TRACK;
                            switch (e) {
                                case F.So.AUTO_MOVE_FORWARD:
                                    return P.FINISH;
                                case F.So.ERROR_MOVE_FORWARD:
                                case F.So.DISLIKE_MOVE_FORWARD:
                                case F.So.MOVE_FORWARD:
                                    return t ? P.DISLIKE : P.SKIP;
                                case F.So.MOVE_BACKWARD:
                                    return P.BACK_SKIP;
                                default:
                                    return P.OTHER_TRACK;
                            }
                        })(r.entityChangeMethod, r.wasDislikedOnChange);
                }
                return ((e.playData.changeReason = a), t());
            };
            function aq(e) {
                let t = e.state.mediaPlayersStore.value[V.e.AUDIO];
                return !!t && !!(0, F.uo)(t) && t.isReadyForAudioEffect.value;
            }
            let aU = (e, t) => {
                    if ((0, ae.S)(e.contextEntityPair.context)) return t();
                    let a = aq(e.playback),
                        r = e.contextEntityPair.getCrossParams(),
                        i = e.contextEntityPair.getFadeMode();
                    if (
                        ((e.playData.fadeMode = a && r ? i : F.OQ.NONE),
                        !(function (e) {
                            let t = e.contextEntityPair.getCrossParams(),
                                a = e8(e.contextEntityPair.context),
                                r = !!e.isCrossfadeEnabled && e.isCrossfadeEnabled.value,
                                i = a || (r && e.contextEntityPair.getFadeMode() !== F.OQ.NONE);
                            if (!t || !i) {
                                e.playData.expectedTrackLengthSeconds = a_(e.contextEntityPair.entity);
                                return;
                            }
                            e.playData.expectedTrackLengthSeconds = t.outStart - t.inStart;
                        })(e),
                        e.dynamicData.startedWithCrossfade && r)
                    )
                        e.playData.startPositionSeconds = r.inStart;
                    else {
                        var s;
                        e.playData.startPositionSeconds = null != (s = e.contextEntityPair.positionSec) ? s : 0;
                    }
                    return t();
                },
                aB = (e, t) => {
                    let { context: a } = e.contextEntityPair,
                        { livePlayableIndex: r, index: i } = e.playback.state.queueState,
                        s = i.value === r.value;
                    return ((0, ae.S)(a) || ((0, e3.i)(a) ? (e.playData.isLivePlayableIndex = s) : (e.playData.isLivePlayableIndex = !1)), t());
                },
                aV = (e, t) => {
                    let { context: a, sourceContext: r } = e.contextEntityPair;
                    return ((0, e3.i)(a) && r && ((e.playData.context = r.data.type), (e.playData.contextItem = String(r.data.meta.id))), t());
                };
            class aW {
                buildPlayDataPipeline() {
                    let e = new af().use(aE).use(aA).use(aI).use(aC).use(ax).use(aT).use(aD).use(aO).use(aM).use(aL).use(aF).use(aB);
                    return (this.toggles.enableSendFadeFieldsInPlays && e.use(aU), this.toggles.enableSendOriginalContextInVibePlays && e.use(aV), e);
                }
                createPlay(e) {
                    let t = new ag({ ...e, hooks: this.hooks, playback: this.playback, clock: this.clock, isCrossfadeEnabled: this.isCrossfadeEnabled });
                    return this.playDataPipeline
                        .run(t)
                        .then(() => t.getResult())
                        .catch((e) => (console.error('Critical error in play data pipeline:', e), null));
                }
                createStartPlay(e) {
                    e.entity.addTracksToPlayerTime = ''.concat(Math.random().toString().slice(2), '-').concat(Math.ceil(Number(this.clock()) / 1e3));
                    let t = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: _.START,
                        totalPlayedSeconds: 0,
                        endPositionSeconds: 0,
                        dynamicData: t,
                        operation: 'send start entity play',
                    });
                }
                createProgressPlay(e, t, a, r) {
                    let i = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({ contextEntityPair: e, playType: _.PLAYING, totalPlayedSeconds: t, endPositionSeconds: a, dynamicData: i, operation: r });
                }
                createEndPlay(e, t, a) {
                    let r = this.dynamicDataManager.getDynamicDataByPlayId(e.entity.playId);
                    return this.createPlay({
                        contextEntityPair: e,
                        playType: _.END,
                        totalPlayedSeconds: t,
                        endPositionSeconds: a,
                        dynamicData: r,
                        operation: 'send end entity play',
                    });
                }
                sendStartEntityPlay(e) {
                    if (!e) return Promise.resolve();
                    try {
                        return this.createStartPlay(e).then((t) => {
                            if (t && !this.toggles.disableSendPlaysOnTrackStart)
                                return this.sendPlay(t).catch((t) => {
                                    this.handleSendingError(t, 'Error while sending plays', e);
                                });
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendPartialPlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.hasSentPartialPlayReportId(t),
                            i = this.toggles.enablePartialPlayReporting && !r && a >= 30.1,
                            s = this.toggles.enablePeriodicSendPlays && this.nextPeriodicSendTotalPlayedSeconds < a;
                        if (!(0, ae.S)(e.context) && (i || s))
                            return this.createProgressPlay(e, a, this.playback.state.playerState.progress.value.position, 'send partial play report').then((t) =>
                                t
                                    ? this.sendPlay(t)
                                          .then(() => {
                                              (i && this.addSentPartialPlayReportId(t.playId),
                                                  s && (this.nextPeriodicSendTotalPlayedSeconds += this.periodicSendIntervalSeconds));
                                          })
                                          .catch((t) => {
                                              this.handleSendingError(t, 'Error while sending plays', e);
                                          })
                                    : Promise.resolve(),
                            );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays partial play report', e);
                    }
                    return Promise.resolve();
                }
                sendPausePlayReport(e) {
                    if (!e) return Promise.resolve();
                    try {
                        let t = e.entity.playId,
                            a = e.entity.totalPlayedSeconds,
                            r = this.dynamicDataManager.getDynamicDataByPlayId(t);
                        return this.createPlay({
                            contextEntityPair: e,
                            playType: _.PAUSE,
                            totalPlayedSeconds: a,
                            endPositionSeconds: this.playback.state.playerState.progress.value.position,
                            dynamicData: { ...r, changeReason: void 0 },
                            operation: 'send pause play report',
                        }).then((t) =>
                            t
                                ? this.sendPlay(t).catch((t) => {
                                      this.handleSendingError(t, 'Error while sending plays', e);
                                  })
                                : Promise.resolve(),
                        );
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays pause play report', e);
                    }
                    return Promise.resolve();
                }
                sendEndEntityPlay(e) {
                    if (!e || (this.toggles.enableRemoveDuplicatePlays && this.hasSentPlayId(e.entity.playId))) return Promise.resolve();
                    this.toggles.enableRemoveDuplicatePlays && this.addSentPlayId(e.entity.playId);
                    try {
                        return this.createEndPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position).then((t) => {
                            if (t)
                                return (
                                    this.clearDynamicData(t.playId),
                                    this.toggles.enablePartialPlayReporting && this.clearSentPartialPlayReportId(t.playId),
                                    this.sendPlay(t)
                                        .catch((t) => {
                                            this.handleSendingError(t, 'Error while sending plays', e);
                                        })
                                        .finally(() => {
                                            this.resetIsRestoredFlag(e.entity);
                                        })
                                );
                        });
                    } catch (t) {
                        this.handleSendingError(t, 'Error while sending plays', e);
                    }
                    return Promise.resolve();
                }
                sendStoredPlaysData() {
                    this.isSendingPlays.value = !0;
                    let e = this.toggles.limitOfSendingPlaysData || 25;
                    return this.isStorageEnabled()
                        ? this.store
                              .getStoredPlaysData(e)
                              .then((e) => {
                                  let t = this.filterPlaysForSending(e);
                                  if (!t.length) {
                                      this.isSendingPlays.value = !1;
                                      return;
                                  }
                                  this.playsResourceSend(t)
                                      .then(() => {
                                          this.deletePlaysData(t).then(() => {
                                              this.sendStoredPlaysData();
                                          });
                                      })
                                      .catch((e) => {
                                          var a;
                                          ((this.isSendingPlays.value = !1),
                                              e instanceof au.GX && e.statusCode === au.X1.BAD_REQUEST && this.deletePlaysData(t),
                                              null == (a = this.hooks) || a.afterError.promise(new ab('Error while sending plays', { cause: e })));
                                      });
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                sendPlay(e) {
                    this.isSendingPlays.value = !0;
                    let t = [e];
                    return this.playsResourceSend(t)
                        .then(() => {
                            this.isStorageEnabled() && this.deletePlaysData(t, (e) => e.totalPlayedSeconds > 0);
                        })
                        .catch((a) => {
                            throw (a instanceof au.GX && a.statusCode === au.X1.BAD_REQUEST ? this.deletePlaysData(t) : this.storeAndReplace(e), a);
                        })
                        .finally(() => {
                            if (!this.isStorageEnabled()) {
                                this.isSendingPlays.value = !1;
                                return;
                            }
                            this.sendStoredPlaysData();
                        });
                }
                clearSentPlayIds() {
                    this.sentPlayIds.clear();
                }
                clearPeriodicSendInterval() {
                    this.nextPeriodicSendTotalPlayedSeconds = this.periodicSendIntervalSeconds;
                }
                hasSentPlayId(e) {
                    return this.sentPlayIds.has(e);
                }
                addSentPlayId(e) {
                    this.sentPlayIds.add(e);
                }
                addSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.add(e);
                }
                hasSentPartialPlayReportId(e) {
                    return this.sentPartialPlayReportIds.has(e);
                }
                clearSentPartialPlayReportId(e) {
                    this.sentPartialPlayReportIds.delete(e);
                }
                isSendingPlaysValue() {
                    return this.isSendingPlays.value;
                }
                onSendingPlaysStateChange(e) {
                    return this.isSendingPlays.onChange(e);
                }
                resetIsRestoredFlag(e) {
                    e.data.isRestored && (e.data.isRestored = !1);
                }
                handleSendingError(e, t, a) {
                    var r;
                    let i = '',
                        s = '';
                    (a && ((i = a.context.data.meta.id), (s = a.entity.data.meta.id)),
                        null == (r = this.hooks) || r.afterError.promise(new ab(t, { cause: e, data: { contextId: i, entityId: s } })));
                }
                clearDynamicData(e) {
                    this.dynamicDataManager.clearDynamicData(e);
                }
                setPlaysDataForSending(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.add(t);
                    });
                }
                clearSendedPlaysData(e) {
                    e.forEach((e) => {
                        let { playId: t } = e;
                        this.sendingInProgressForPlayId.has(t) && this.sendingInProgressForPlayId.delete(t);
                    });
                }
                filterPlaysForSending(e) {
                    var t = e.filter((e) => {
                        let { playId: t } = e;
                        return !this.sendingInProgressForPlayId.has(t);
                    });
                    let a = (0, ac.A)((0, ad.A)(t, 'playId'), am);
                    return (0, ay.A)(a);
                }
                playsResourceSend(e) {
                    return (
                        this.setPlaysDataForSending(e),
                        this.gateway.sendPlays(e).finally(() => {
                            this.clearSendedPlaysData(e);
                        })
                    );
                }
                deletePlaysData(e, t, a) {
                    return this.isStorageEnabled()
                        ? this.store
                              .deleteAllByPlayId(e, t)
                              .then(() => {
                                  if (a) return a();
                              })
                              .catch((e) => {
                                  var t;
                                  null == (t = this.hooks) || t.afterError.promise(e);
                              })
                        : Promise.resolve();
                }
                storeAndReplace(e) {
                    if (!this.isStorageEnabled()) return Promise.resolve();
                    let t = () => {
                        var t;
                        return null == (t = this.store) ? void 0 : t.storePlaysData(e);
                    };
                    return this.deletePlaysData([e], (e) => e.totalPlayedSeconds > 0, t);
                }
                isStorageEnabled() {
                    return this.toggles.enableHeartbeats && this.store.isAvailable();
                }
                storePlay(e) {
                    return this.storeAndReplace(e);
                }
                sendCurrentEntityEndPlay() {
                    let e = this.playback.state.queueState.currentEntity.value;
                    if (e && this.playback.state.currentContext.value) {
                        if ((0, e3.i)(this.playback.state.currentContext.value)) return this.sendEndEntityPlay(e);
                        this.sendEndEntityPlay(e);
                    }
                    return Promise.resolve();
                }
                constructor(e) {
                    ((0, L._)(this, 'store', void 0),
                        (0, L._)(this, 'gateway', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'clock', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'hooks', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'isCrossfadeEnabled', void 0),
                        (0, L._)(this, 'sentPlayIds', new Set()),
                        (0, L._)(this, 'sentPartialPlayReportIds', new Set()),
                        (0, L._)(this, 'sendingInProgressForPlayId', new Set()),
                        (0, L._)(this, 'nextPeriodicSendTotalPlayedSeconds', 0),
                        (0, L._)(this, 'isSendingPlays', void 0),
                        (0, L._)(this, 'periodicSendIntervalSeconds', void 0),
                        (0, L._)(this, 'playDataPipeline', void 0),
                        (this.store = e.store),
                        (this.gateway = e.gateway),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.clock = e.clock),
                        (this.toggles = e.toggles),
                        (this.hooks = e.hooks),
                        (this.playback = e.playback),
                        (this.isCrossfadeEnabled = e.isCrossfadeEnabled),
                        (this.periodicSendIntervalSeconds = e.periodicSendIntervalSeconds),
                        (this.isSendingPlays = new ei.cJ(!1)),
                        (this.playDataPipeline = this.buildPlayDataPipeline()));
                }
            }
            !(function (e) {
                ((e.PREPARE = 'prepare'), (e.PLAY = 'play'));
            })(k || (k = {}));
            class aj {
                getDynamicDataByPlayId(e) {
                    var t, a, r;
                    let i = this.dynamicDataByPlayId.get(e);
                    return {
                        seek: null != (t = null == i ? void 0 : i.seek) && t,
                        pause: null != (a = null == i ? void 0 : i.pause) && a,
                        maxPlayerStage: null != (r = null == i ? void 0 : i.maxPlayerStage) ? r : k.PREPARE,
                        startTimestamp: null == i ? void 0 : i.startTimestamp,
                        radioSessionId: null == i ? void 0 : i.radioSessionId,
                        radioBatchId: null == i ? void 0 : i.radioBatchId,
                        contextItem: null == i ? void 0 : i.contextItem,
                        isFromAutoflow: null == i ? void 0 : i.isFromAutoflow,
                        isFromPumpkin: null == i ? void 0 : i.isFromPumpkin,
                        changeReason: null == i ? void 0 : i.changeReason,
                        hookSource: null == i ? void 0 : i.hookSource,
                        repeatMode: null == i ? void 0 : i.repeatMode,
                        entityChangeMethod: null == i ? void 0 : i.entityChangeMethod,
                        wasDislikedOnChange: null == i ? void 0 : i.wasDislikedOnChange,
                        wasAlreadyDisliked: null == i ? void 0 : i.wasAlreadyDisliked,
                        startedWithCrossfade: null == i ? void 0 : i.startedWithCrossfade,
                    };
                }
                updateDynamicData(e, t) {
                    var a;
                    let r = null != (a = this.dynamicDataByPlayId.get(e)) ? a : {};
                    this.dynamicDataByPlayId.set(e, { ...r, ...t });
                }
                clearDynamicData(e) {
                    this.dynamicDataByPlayId.delete(e);
                }
                hasDynamicData(e) {
                    return this.dynamicDataByPlayId.has(e);
                }
                markAsAlreadyDisliked(e) {
                    this.updateDynamicData(e, { wasAlreadyDisliked: !0 });
                }
                isAlreadyDisliked(e) {
                    var t;
                    return null != (t = this.getDynamicDataByPlayId(e).wasAlreadyDisliked) && t;
                }
                constructor() {
                    (0, L._)(this, 'dynamicDataByPlayId', new Map());
                }
            }
            var aK = a(61013);
            function aY(e, t) {
                let a;
                if (!(0, e3.i)(null == e ? void 0 : e.context) || !e) return;
                let {
                        meta: { session: r, sessionTracks: i },
                        parentContext: s,
                    } = e.context.data,
                    n = null == r ? void 0 : r.radioSessionId;
                (ev(e.entity) || (0, eI.b)(e.entity)) && ((n = e.entity.data.radioSessionId), (a = e.entity.data.batchId));
                let o = null != a ? a : i ? i.batchId : null == r ? void 0 : r.batchId,
                    l = t.getDynamicDataByPlayId(e.entity.playId).contextItem,
                    u = r ? r.wave.seeds.join() || r.wave.stationId : void 0,
                    d = i ? i.pumpkin : null == r ? void 0 : r.pumpkin;
                t.updateDynamicData(e.entity.playId, { radioSessionId: n, radioBatchId: o, contextItem: null != l ? l : u, isFromPumpkin: d, isFromAutoflow: !!s });
            }
            class aG {
                attachSubscriptions() {
                    (this.attachPlayerStateEventSubscription(), this.attachProgressSubscriptions());
                }
                attachPlayerStateEventSubscription() {
                    this.playback.state.playerState.event.onChange(() => {
                        let { currentEntity: e } = this.playback.state.queueState;
                        if (!e.value) return;
                        let t = e.value.entity.playId;
                        switch (this.playback.state.playerState.event.value) {
                            case F.Iu.PLAYING:
                                this.handlePlayingEvent(e.value, t);
                                break;
                            case F.Iu.PAUSED:
                                this.handlePausedEvent(e.value, t);
                                break;
                            case F.Iu.SET_PROGRESS:
                                this.handleSetProgressEvent(e.value, t);
                        }
                    });
                }
                handlePlayingEvent(e, t) {
                    (aY(e, this.dynamicDataManager), this.dynamicDataManager.updateDynamicData(t, { maxPlayerStage: k.PLAY }));
                }
                handlePausedEvent(e, t) {
                    let a = this.playback.state.playerState.progress.value;
                    (Math.abs(a.position - a.duration) > 0.2 && this.dynamicDataManager.updateDynamicData(t, { pause: !0 }),
                        aS(e.context) && this.service.sendPausePlayReport(e));
                }
                handleSetProgressEvent(e, t) {
                    (0, ae.S)(e.context) || aS(e.context) || this.dynamicDataManager.updateDynamicData(t, { seek: !0 });
                }
                attachProgressSubscriptions() {
                    (this.toggles.enableHeartbeats && this.attachStorePlayOnProgress(),
                        (this.toggles.enablePartialPlayReporting || this.toggles.enablePeriodicSendPlays) && this.attachPartialPlayReporting());
                }
                attachStorePlayOnProgress() {
                    let e = (0, aK.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            !e ||
                                (0, ae.S)(e.context) ||
                                this.service
                                    .createProgressPlay(e, e.entity.totalPlayedSeconds, this.playback.state.playerState.progress.value.position, 'store play on progress')
                                    .then((e) => {
                                        e && e.playId && e.totalPlayedSeconds > 0 && this.service.storePlay(e);
                                    });
                        },
                        this.storePlaysProgressIntervalMs,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                attachPartialPlayReporting() {
                    let e = (0, aK.A)(
                        () => {
                            let e = this.playback.state.queueState.currentEntity.value;
                            e && this.service.sendPartialPlayReport(e);
                        },
                        2e3,
                        { trailing: !1 },
                    );
                    this.playback.state.playerState.progress.onChange(e);
                }
                constructor(e) {
                    ((0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'storePlaysProgressIntervalMs', void 0),
                        (this.playback = e.playback),
                        (this.service = e.service),
                        (this.dynamicDataManager = e.dynamicDataManager),
                        (this.toggles = e.toggles),
                        (this.storePlaysProgressIntervalMs = e.storePlaysProgressIntervalMs));
                }
            }
            class az extends tz {
                constructor(e, { code: t = 'E_GET_FILE_INFO_MEDIA_PROVIDER', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'GetFileInfoMediaProviderException'), Object.setPrototypeOf(this, az.prototype));
                }
            }
            class aQ {
                sendPlays(e) {
                    return this.playsResource.sendPlays({ clientNow: ak(), plays: e });
                }
                constructor(e) {
                    ((0, L._)(this, 'playsResource', void 0), (this.playsResource = e));
                }
            }
            class aH {
                storePlaysData(e) {
                    return Promise.resolve();
                }
                getStoredPlaysData(e) {
                    return Promise.resolve([]);
                }
                deleteAllByPlayId(e, t) {
                    return Promise.resolve();
                }
                isAvailable() {
                    return !1;
                }
                openDatabase() {
                    return Promise.resolve();
                }
                deleteDatabase() {
                    return Promise.resolve();
                }
                setErrorLogger(e) {}
            }
            class aX {
                apply(e) {
                    var t, a;
                    let { hooks: r, playback: i } = e,
                        s = this.params.store || new aH(),
                        n = new aQ(new al(this.params.httpClient, this.params.playsResourceConfig));
                    ((this.dynamicDataManager = new aj()),
                        (this.service = new aW({
                            store: s,
                            gateway: n,
                            dynamicDataManager: this.dynamicDataManager,
                            clock: () => new Date(),
                            toggles: this.toggles,
                            hooks: r,
                            playback: i,
                            isCrossfadeEnabled: this.params.isCrossfadeEnabled,
                            periodicSendIntervalSeconds: null != (t = this.params.periodicSendIntervalSeconds) ? t : 30,
                        })),
                        (this.playerStateSubscriptions = new aG({
                            playback: i,
                            hooks: r,
                            service: this.service,
                            dynamicDataManager: this.dynamicDataManager,
                            toggles: this.toggles,
                            storePlaysProgressIntervalMs: null != (a = this.params.storePlaysProgressIntervalMs) ? a : 1e4,
                        })),
                        this.playerStateSubscriptions.attachSubscriptions());
                    let {
                        playback: o,
                        hooks: l,
                        service: u,
                        dynamicDataManager: d,
                        toggles: c,
                        clock: h,
                    } = { playback: i, hooks: r, service: this.service, dynamicDataManager: this.dynamicDataManager, toggles: this.toggles, clock: () => new Date() };
                    (l.beforeEntityPlayingProcessStart.tapPromise('PlaysPlugin', () => {
                        c.enableRemoveDuplicatePlays && u.clearSentPlayIds();
                        let { queueState: e } = o.state,
                            t = e.currentEntity.value;
                        if ((aY(t, d), t)) {
                            let e = aq(o),
                                a = t.entity.playId;
                            d.updateDynamicData(a, { startedWithCrossfade: e });
                        }
                        return (u.sendStartEntityPlay(t), u.clearPeriodicSendInterval(), Promise.resolve());
                    }),
                        l.beforeMediaStartPlaying.tapPromise('PlaysPlugin', () => {
                            let { currentEntity: e } = o.state.queueState;
                            if (e.value) {
                                let t = e.value.entity.playId;
                                (e.value.entity.isDisliked && d.markAsAlreadyDisliked(t),
                                    d.getDynamicDataByPlayId(t).startTimestamp || d.updateDynamicData(t, { startTimestamp: ak(h()) }));
                            }
                            return Promise.resolve();
                        }),
                        l.afterMediaEndPlaying.tapPromise('PlaysPlugin', () => {
                            let {
                                    order: { value: e },
                                    repeat: { value: t },
                                } = o.state.queueState,
                                a = o.state.queueState.currentEntity.value,
                                r = null == a ? void 0 : a.entity.playId,
                                i = t === F.pM.CONTEXT && 1 === e.length,
                                s = t === F.pM.ONE || i,
                                n = (null == a ? void 0 : a.entity.isDisliked) && r && !d.isAlreadyDisliked(r);
                            return (
                                s && a && r && !0 !== n && (d.updateDynamicData(r, { hookSource: A.AFTER_MEDIA_END_PLAYING, repeatMode: t }), u.sendEndEntityPlay(a)),
                                Promise.resolve()
                            );
                        }),
                        l.afterError.tapPromise('PlaysPlugin', (e) => {
                            if (e instanceof az || e instanceof F.LI) {
                                let e = o.state.queueState.currentEntity.value;
                                u.sendEndEntityPlay(e);
                            }
                            return Promise.resolve();
                        }),
                        l.beforeContextSet.tapPromise('PlaysPlugin', () => {
                            let e = o.state.queueState.currentEntity.value;
                            return (e && d.updateDynamicData(e.entity.playId, { hookSource: A.BEFORE_CONTEXT_SET }), u.sendCurrentEntityEndPlay());
                        }),
                        l.afterContextEnd.tapPromise('PlaysPlugin', (e) => {
                            let t = o.state.queueState.currentEntity.value,
                                a = null == t ? void 0 : t.entity.playId;
                            return (
                                t &&
                                    a &&
                                    (d.updateDynamicData(a, {
                                        hookSource: A.AFTER_CONTEXT_END,
                                        entityChangeMethod: e,
                                        wasDislikedOnChange: t.entity.isDisliked && !d.isAlreadyDisliked(a),
                                    }),
                                    u.sendEndEntityPlay(t)),
                                Promise.resolve()
                            );
                        }),
                        l.afterSetupQueue.tap('PlaysPlugin', () => {
                            let { queueState: e } = o.state;
                            aY(e.currentEntity.value, d);
                        }),
                        l.beforeEntityChange.tapPromise('PlaysPlugin', (e) => {
                            var t;
                            let { currentEntity: a } = o.state.queueState,
                                { method: r } = e,
                                i = null == (t = a.value) ? void 0 : t.entity.playId;
                            return a.value && i
                                ? (d.updateDynamicData(i, {
                                      hookSource: A.BEFORE_ENTITY_CHANGE,
                                      entityChangeMethod: r,
                                      wasDislikedOnChange: a.value.entity.isDisliked && !d.isAlreadyDisliked(i),
                                  }),
                                  u.sendCurrentEntityEndPlay())
                                : Promise.resolve();
                        }),
                        l.beforeDestroy.tap(
                            'PlaysPlugin',
                            () =>
                                new Promise((e) => {
                                    if (!u.isSendingPlaysValue()) return void e();
                                    let t = u.onSendingPlaysStateChange((a) => {
                                        a || (t(), e());
                                    });
                                }),
                        ),
                        this.toggles.enableHeartbeats &&
                            s.setErrorLogger((e) => {
                                r.afterError.promise(e);
                            }),
                        this.toggles.shouldDeletePlaysObjectStore && s.deleteDatabase(),
                        this.toggles.enableHeartbeats &&
                            !this.toggles.shouldDeletePlaysObjectStore &&
                            s.openDatabase().then(() => {
                                var e;
                                null == (e = this.service) || e.sendStoredPlaysData();
                            }));
                }
                constructor(e) {
                    var t, a, r, i, s, n, o, l, u, d, c, h, v, y, p, m, f;
                    ((0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'dynamicDataManager', void 0),
                        (0, L._)(this, 'playerStateSubscriptions', void 0),
                        (0, L._)(this, 'toggles', void 0),
                        (0, L._)(this, 'params', void 0),
                        (this.params = e),
                        (this.toggles = {
                            disableSendPlaysOnTrackStart: null != (d = null == (t = e.variables) ? void 0 : t.disableSendPlaysOnTrackStart) && d,
                            enableHeartbeats: !!(null == (a = e.variables) ? void 0 : a.enableHeartbeats),
                            limitOfSendingPlaysData: null != (c = null == (r = e.variables) ? void 0 : r.limitOfSendingPlaysData) ? c : 25,
                            shouldDeletePlaysObjectStore: null != (h = null == (i = e.variables) ? void 0 : i.shouldDeletePlaysObjectStore) && h,
                            enableRemoveDuplicatePlays: null != (v = null == (s = e.variables) ? void 0 : s.enableRemoveDuplicatePlays) && v,
                            enablePartialPlayReporting: null != (y = null == (n = e.variables) ? void 0 : n.enablePartialPlayReporting) && y,
                            enablePeriodicSendPlays: null != (p = null == (o = e.variables) ? void 0 : o.enablePeriodicSendPlays) && p,
                            enableSendFadeFieldsInPlays: null != (m = null == (l = e.variables) ? void 0 : l.enableSendFadeFieldsInPlays) && m,
                            enableSendOriginalContextInVibePlays: null != (f = null == (u = e.variables) ? void 0 : u.enableSendOriginalContextInVibePlays) && f,
                        }));
                }
            }
            var aJ = a(93609);
            let aZ = 'playsHeartBeats';
            class a$ extends Q.t {
                constructor(e, { code: t = 'E_PLAYS_IDB_STORE', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PlaysStoreException'), Object.setPrototypeOf(this, a$.prototype));
                }
            }
            class a0 {
                deleteDatabase() {
                    return window.indexedDB
                        .databases()
                        .then((e) => (e.find((e) => this.idbName === e.name) ? new e6.h(this.idbName).deleteDB({ onBlocked: aJ.A }) : Promise.resolve()))
                        .catch((e) => {
                            this.logError('Error while deleting database', e);
                        });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                setErrorLogger(e) {
                    this.errorLogger = e;
                }
                storePlaysData(e) {
                    return this.executeTransaction((t) => t.put(aZ, e).then(() => t.count(aZ)))
                        .then((e) => ('number' == typeof e && e > this.storedPlaysLimit ? this.deleteOverLimitPlays(this.storedPlaysLimit) : Promise.resolve()))
                        .catch((e) => {
                            throw this.generateError('Saving Play Error', e);
                        });
                }
                getStoredPlaysData(e) {
                    return this.executeTransaction((t) => t.getAll(aZ, null, e), { defaultValue: [] }).catch((e) => {
                        throw this.generateError('Error getting Plays', e);
                    });
                }
                deleteAllByPlayId(e, t) {
                    return Promise.all(
                        e.map((e) => {
                            let { playId: a } = e;
                            return this.iterateByCursor('playId', a, 'readwrite', (e) => (!t || t(e.value) ? e.delete() : Promise.resolve()));
                        }),
                    )
                        .then(aJ.A)
                        .catch((e) => {
                            throw this.generateError('Error deleting Plays', e);
                        });
                }
                deleteOverLimitPlays(e) {
                    return this.iterateByCursor(null, null, 'readwrite', (t, a) => (a <= e ? Promise.resolve() : t.delete())).catch((e) => {
                        throw this.generateError('Error deleting overlimit Plays', e);
                    });
                }
                iterateByCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = 0,
                        s = (e) =>
                            e
                                ? r(e, ++i)
                                      .then(() => e.continue())
                                      .then(s)
                                : Promise.resolve();
                    return this.getCursor(e, t, a).then(s);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                openIdb(e) {
                    return new e6.h(this.idbName)
                        .openDB(1, {
                            onBlocked: (t, a, r) => {
                                var i;
                                (this.logError('Connection has been blocked'), null == e || null == (i = e.onBlocked) || i.call(e, t, a, r));
                            },
                            onTerminated: () => {
                                var t;
                                (this.logError('Storage has been terminated'), null == e || null == (t = e.onTerminated) || t.call(e));
                            },
                            onUpgrade: (e) => {
                                let t = e.createObjectStore(aZ, { keyPath: 'id', autoIncrement: !0 });
                                (t.createIndex('playId', 'playId', { unique: !1 }), t.createIndex('trackId', 'trackId', { unique: !1 }));
                            },
                        })
                        .then((e) => ((this.idbIsAvailable = !0), e))
                        .catch((e) => {
                            ((this.idbIsAvailable = !1), this.logError('Open storage error', e));
                        });
                }
                closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch((e) => {
                                  this.logError('Error while try to close connection', e);
                              })
                        : Promise.resolve();
                }
                getCursor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return this.executeTransaction(
                        (r) => {
                            let i = r.transaction([aZ], a).objectStore(aZ);
                            return e ? i.index(e).openCursor(t, 'prev') : i.openCursor(t, 'prev');
                        },
                        { defaultValue: null },
                    );
                }
                executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((a) => (a ? e(a) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                logError(e, t) {
                    var a;
                    let r = this.generateError(e, t);
                    null == (a = this.errorLogger) || a.call(this, r);
                }
                generateError(e, t) {
                    var a;
                    let r = '[IndexedDB]['.concat(this.idbName, '.').concat(aZ, ']: ').concat(e),
                        i = String(t);
                    return (
                        (''.concat(t).includes('QuotaExceededError') || /connection.*lost/i.test(''.concat(t))) && this.closeConnection(),
                        new a$(r, { data: { originalError: i, storageEstimate: null != (a = this.storageEstimate) ? a : {} } })
                    );
                }
                constructor(e = 100) {
                    ((0, L._)(this, 'storedPlaysLimit', void 0),
                        (0, L._)(this, 'idb', void 0),
                        (0, L._)(this, 'errorLogger', void 0),
                        (0, L._)(this, 'idbIsAvailable', !1),
                        (0, L._)(this, 'idbName', void 0),
                        (0, L._)(this, 'storageEstimate', void 0),
                        (this.storedPlaysLimit = e),
                        (() => {
                            var e, t;
                            return (null == (t = window.navigator) || null == (e = t.storage) ? void 0 : e.estimate)
                                ? window.navigator.storage.estimate().catch(() => ({}))
                                : Promise.resolve({});
                        })().then((e) => {
                            this.storageEstimate = e;
                        }),
                        (this.idbName = ''.concat('music_plays', '_').concat('1.0.0')));
                }
            }
            !(function (e) {
                ((e.PLAY = 'play'), (e.PAUSE = 'pause'), (e.NEXT = 'nexttrack'), (e.PREV = 'previoustrack'), (e.SEEK = 'seekto'), (e.STOP = 'stop'));
            })(I || (I = {}));
            let a1 = [40, 50, 80, 100, 200, 300, 400],
                a3 = [I.PLAY, I.PAUSE, I.STOP, I.SEEK];
            class a5 {
                isSupported() {
                    return 'mediaSession' in window.navigator && 'MediaMetadata' in window;
                }
                handleMediaActionEvents(e, t) {
                    let { action: a } = e;
                    switch (a) {
                        case I.PLAY:
                            t.resume();
                            break;
                        case I.PAUSE:
                        case I.STOP:
                            t.pause();
                            break;
                        case I.NEXT:
                            t.moveForward();
                            break;
                        case I.PREV:
                            t.moveBackward();
                            break;
                        case I.SEEK: {
                            var r;
                            if (t1(null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.entity)) return;
                            let { seekTime: a } = e;
                            a && t.setProgress(a);
                        }
                    }
                }
                prepareMetadata(e) {
                    let t,
                        a,
                        r = { title: e.title };
                    if (('artists' in e && (r.artist = (e.artists || []).map((e) => e.name).join(', ')), 'albums' in e)) {
                        var i, s;
                        r.album = null == (s = e.albums) || null == (i = s[0]) ? void 0 : i.title;
                    }
                    return (
                        'coverUri' in e && (t = e.coverUri),
                        'imageUrl' in e && (t = e.imageUrl),
                        t &&
                            (a = a1.map((e) => {
                                let a = ''.concat(e, 'x').concat(e);
                                'Safari' === this.browserName && (a = ''.concat(2 * e, 'x').concat(2 * e));
                                let r = '';
                                return (
                                    'string' == typeof t && (r = t.startsWith('blob:') ? t : 'https://'.concat(t.replace('%%', a))),
                                    { sizes: a, src: r, type: 'image/jpg' }
                                );
                            })),
                        (r.artwork = a),
                        r
                    );
                }
                updateMetadata(e) {
                    if (!e) return null;
                    let t = this.prepareMetadata(e);
                    return ((window.navigator.mediaSession.metadata = null), (window.navigator.mediaSession.metadata = new MediaMetadata(t)), t);
                }
                subscribeToCrossfadeEnd(e) {
                    var t;
                    let a = null == (t = e.state.mediaPlayersStore.value) ? void 0 : t[V.e.AUDIO];
                    a &&
                        (0, F.uo)(a) &&
                        a.isCrossing.onChange(
                            (t) => {
                                !1 === t && (this.updateCurrentEntityMetadata(e), this.updatePositionState(e));
                            },
                            { skipFirstChange: !0 },
                        );
                }
                updateMediaSessionPlaybackState(e) {
                    if (e === F.MT.PAUSED || e === F.MT.STOPPED || e === F.MT.ENDED || e === F.MT.IDLE) {
                        window.navigator.mediaSession.playbackState = 'paused';
                        return;
                    }
                    (e === F.MT.PLAYING || e === F.MT.BUFFERING || e === F.MT.LOADING_MEDIA_SOURCE) && (window.navigator.mediaSession.playbackState = 'playing');
                }
                updateCurrentEntityMetadata(e) {
                    var t;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    this.updateMetadata(a);
                }
                updatePositionState(e) {
                    var t, a, r;
                    if (t1(null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity)) return void navigator.mediaSession.setPositionState();
                    let i = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta,
                        s = e.state.playerState.progress.value,
                        n = 'number' == typeof (null == s ? void 0 : s.duration) && Number.isFinite(s.duration) ? s.duration : null,
                        o = i && 'durationMs' in i && 'number' == typeof i.durationMs && Number.isFinite(i.durationMs) ? i.durationMs / 1e3 : null,
                        l = null != (r = null != n ? n : o) ? r : 0,
                        u = 'number' == typeof (null == s ? void 0 : s.position) && Number.isFinite(s.position) ? s.position : 0;
                    l > 0 && navigator.mediaSession.setPositionState({ duration: l, position: Math.min(u, l) });
                }
                handlePlayerEvents(e) {
                    let t, a;
                    (e.state.queueState.currentEntity.onChange(() => {
                        (this.updateCurrentEntityMetadata(e), this.updatePositionState(e));
                    }),
                        e.state.playerState.status.onChange((e) => {
                            this.updateMediaSessionPlaybackState(e);
                        }),
                        this.subscribeToCrossfadeEnd(e),
                        e.state.playerState.event.onChange(() => {
                            e.state.playerState.event.value === F.Iu.UPDATING_PROGRESS &&
                                (this.updateCurrentEntityMetadata(e),
                                this.updatePositionState(e),
                                a3.forEach((t) => {
                                    try {
                                        window.navigator.mediaSession.setActionHandler(t, (t) => this.handleMediaActionEvents(t, e));
                                    } catch (e) {
                                        console.log('The media session action "'.concat(t, '" is not supported yet.'));
                                    }
                                }));
                        }),
                        e.state.currentContext.onChange(() => {
                            var r, i;
                            (null == t || t(),
                                null == a || a(),
                                (t =
                                    null == (r = e.state.currentContext.value)
                                        ? void 0
                                        : r.availableActions.moveBackward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveBackward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(I.PREV, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          })),
                                (a =
                                    null == (i = e.state.currentContext.value)
                                        ? void 0
                                        : i.availableActions.moveForward.onChange(() => {
                                              var t, a;
                                              let r = null != (a = null == (t = e.state.currentContext.value) ? void 0 : t.availableActions.moveForward.value) && a;
                                              window.navigator.mediaSession.setActionHandler(I.NEXT, r ? (t) => this.handleMediaActionEvents(t, e) : null);
                                          })));
                        }));
                }
                apply(e) {
                    let { playback: t } = e;
                    this.isSupported() && this.handlePlayerEvents(t);
                }
                constructor({ browserName: e, browserVersion: t }) {
                    ((0, L._)(this, 'browserName', void 0), (0, L._)(this, 'browserVersion', void 0), (this.browserName = e), (this.browserVersion = t));
                }
            }
            class a8 {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    t.afterError.tapPromise('LoggerPlugin', (e) => {
                        let t,
                            r = a.state.queueState.currentEntity.value ? a.state.queueState.currentEntity.value.entity.mediaSourceData : null;
                        (t = e instanceof Q.t ? e : new Q.t('Error in Sonata player', { code: 'E_SONATA', cause: e })).name = '[Sonata] '.concat(t.name);
                        let i = t.cause ? (0, et.createObjectFromError)(t.cause) : void 0;
                        return (this.logger.error(t, { ...t.data, ...(r || {}), code: t.code, cause: i, stack: t.stack, message: t.message }), Promise.resolve());
                    });
                }
                constructor(e) {
                    (0, L._)(this, 'logger', void 0);
                    let { logger: t } = e;
                    this.logger = t;
                }
            }
            (C || (C = {})).QUALITY_CHANGE = 'QUALITY_CHANGE';
            class a2 {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    this.quality.onChange(() => {
                        t.state.playerState.status.value !== F.MT.IDLE &&
                            t.reloadEntity(C.QUALITY_CHANGE).catch((e) => {
                                a.afterError.promise(e);
                            });
                    });
                }
                constructor(e) {
                    ((0, L._)(this, 'quality', void 0), (this.quality = e));
                }
            }
            var a4 = a(28800);
            let a9 = (e) => 'object' == typeof e && e && 'rememberPosition' in e && 'boolean' == typeof e.rememberPosition;
            class a6 {
                apply(e) {
                    let { hooks: t, playback: a } = e;
                    (t.beforeEntityChange.tapPromise('ContinuePlayingPlugin', () => {
                        let { position: e, duration: t } = this.getTimingsFromPlayback(a);
                        return new Promise((r) => {
                            (e !== t && this.checkBeforeProgressSync(a), r());
                        });
                    }),
                        a.state.playerState.status.onChange((e) => {
                            ((e === F.MT.PAUSED || e === F.MT.STOPPED) && (this.clearTimeout(), this.checkBeforeProgressSync(a)),
                                e === F.MT.PLAYING && this.shouldSendProgressSync(a) && this.setTimeout(a));
                        }),
                        a.state.playerState.event.onChange(() => {
                            if (a.state.playerState.event.value === F.Iu.SET_PROGRESS) {
                                let e = a.state.queueState.currentEntity.value,
                                    t = a.state.playerState.progress.value.position;
                                if (!e) return;
                                let { entity: r } = e;
                                a9(r.data.meta) && r.data.meta.rememberPosition && (e.lastSeekPosition = t);
                            }
                        }),
                        a.state.queueState.currentEntity.onChange(() => {
                            let e = a.state.queueState.currentEntity.value;
                            if (!e) return;
                            let { entity: t } = e;
                            if (a9(t.data.meta) && t.data.meta.rememberPosition && W(t.data.meta)) {
                                let { endPositionSec: a } = t.data.meta.streamProgress;
                                t.everFinished ? (e.positionSec = a) : (e.positionSec = void 0 !== e.lastSeekPosition ? e.lastSeekPosition : a);
                            }
                        }));
                }
                checkBeforeProgressSync(e) {
                    var t;
                    if ((this.clearTimeout(), !this.shouldSendProgressSync(e))) return;
                    let { position: a, duration: r } = this.getTimingsFromPlayback(e),
                        i = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta.id;
                    Number.isFinite(r) &&
                        Number.isFinite(a) &&
                        r &&
                        a &&
                        i &&
                        (this.sendProgressSync({ duration: r, position: a, trackId: i }), e.state.playerState.status.value === F.MT.PLAYING && this.setTimeout(e));
                }
                sendProgressSync(e) {
                    let t = new Date().toISOString(),
                        { duration: a, position: r, trackId: i } = e;
                    this.streamsResource.progressSync({
                        lastSyncTimestamp: t,
                        trackStreams: [{ trackId: i, positionSec: r, trackLengthSec: a, finished: r === a, timestamp: t }],
                    });
                }
                shouldSendProgressSync(e) {
                    var t;
                    if (!this.variables.isEnabled) return !1;
                    let a = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta;
                    return !!(a && 'rememberPosition' in a && a.rememberPosition);
                }
                setTimeout(e) {
                    (this.clearTimeout(),
                        (this.timeoutId = window.setTimeout(() => {
                            this.checkBeforeProgressSync(e);
                        }, 3e4)));
                }
                clearTimeout() {
                    window.clearTimeout(this.timeoutId);
                }
                getTimingsFromPlayback(e) {
                    return { duration: Math.floor(e.state.playerState.progress.value.duration), position: Math.floor(e.state.playerState.progress.value.position) };
                }
                constructor(e) {
                    ((0, L._)(this, 'streamsResource', void 0), (0, L._)(this, 'variables', void 0), (0, L._)(this, 'timeoutId', 0));
                    let { httpClient: t, streamsResourceConfig: a, variables: r } = e;
                    ((this.streamsResource = new a4.c(t, a)), (this.variables = r));
                }
            }
            let a7 = [401, 429],
                re = new Set([ea.K.Generative]);
            class rt {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    (a.afterErrorProcessed.tapPromise('ErrorAutoSkipPlugin', (e) => {
                        var r;
                        if (!this.variables.enabled || this.isSkipping) return Promise.resolve();
                        let i = null == (r = t.state.queueState.currentEntity.value) ? void 0 : r.context.data.type;
                        return (i && re.has(i)) ||
                            !(function (e) {
                                if (!(e instanceof az)) return !1;
                                let t = tH(e);
                                return void 0 !== t && t >= 400 && t < 500 && !a7.includes(t);
                            })(e) ||
                            this.consecutiveSkipCount >= this.consecutiveSkipLimit
                            ? Promise.resolve()
                            : ((this.consecutiveSkipCount += 1),
                              (this.isSkipping = !0),
                              t
                                  .moveForward(F.So.ERROR_MOVE_FORWARD)
                                  .catch((e) => a.afterError.promise(e).catch(() => void 0))
                                  .finally(() => {
                                      this.isSkipping = !1;
                                  }));
                    }),
                        a.afterMediaStartPlaying.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        }),
                        a.afterContextSet.tap('ErrorAutoSkipPlugin', () => {
                            this.consecutiveSkipCount = 0;
                        }));
                }
                constructor({ variables: e, consecutiveSkipLimit: t }) {
                    ((0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'consecutiveSkipLimit', void 0),
                        (0, L._)(this, 'consecutiveSkipCount', 0),
                        (0, L._)(this, 'isSkipping', !1),
                        (this.variables = e),
                        (this.consecutiveSkipLimit = null != t ? t : 10));
                }
            }
            var ra = a(55482);
            function rr(e, t, a) {
                return (
                    !(e instanceof z) &&
                    !!e.isAvailable &&
                    (null === e.mediaSourceData ||
                        (!('downloadInfoSource' !== e.mediaSourceData.type || 'error' in e.mediaSourceData.data || aP(e)) &&
                            (!!(performance.now() - e.mediaSourceData.loadingTime > t) ||
                                (function (e) {
                                    switch (e) {
                                        case tV.e.LOSSLESS:
                                        case tV.e.HQ:
                                            return tW.e.HIGH_QUALITY;
                                        case tV.e.NQ:
                                            return tW.e.BALANCED;
                                        case tV.e.LQ:
                                    }
                                    return tW.e.EFFICIENT;
                                })(e.mediaSourceData.data.quality) !== a.quality.value)))
                );
            }
            class ri extends Q.t {
                constructor(e = 'Preload aborted', { code: t = 'E_MEDIA_SOURCE_PRELOAD_ABORTED', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'PreloadAbortedException'), Object.setPrototypeOf(this, ri.prototype));
                }
            }
            function rs(e) {
                if (e.aborted)
                    throw (function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Preload aborted';
                        return new ri(e);
                    })();
            }
            class rn {
                apply(e) {
                    let { hooks: t, playback: a } = e,
                        r = (0, ra.A)(
                            () => {
                                (this.releaseAllPreloadedSrc(a), this.preload(a, t));
                            },
                            1e3,
                            { trailing: !0 },
                        );
                    this.variables.isMediaSourcePreloadEnabled &&
                        (a.state.queueState.nextEntity.onChange(r),
                        this.mediaConfigController.quality.onChange(() => {
                            (this.releaseAllPreloadedSrc(a), this.preload(a, t));
                        }),
                        t.beforeEntityChange.tapPromise(
                            'MediaSourcePreloadPlugin',
                            () => (this.abortActivePreloadRun(), this.releaseAllPreloadedSrc(a), Promise.resolve()),
                        ),
                        t.beforeEntityPlayingProcessStart.tapPromise(
                            'MediaSourcePreloadPlugin',
                            () => (this.abortActivePreloadRun(), this.releaseAllPreloadedSrc(a), Promise.resolve()),
                        ));
                }
                abortActivePreloadRun() {
                    var e;
                    (null == (e = this.activePreloadAbortController) || e.abort(), (this.activePreloadAbortController = null));
                }
                startPreloadRun() {
                    this.abortActivePreloadRun();
                    let e = new AbortController();
                    return ((this.activePreloadAbortController = e), e.signal);
                }
                isPreloadCancellation(e) {
                    return e instanceof ri || ('object' == typeof e && null !== e && 'name' in e && 'AbortError' === e.name);
                }
                reportPrefetchError(e, t, a, r, i) {
                    t.aborted || this.isPreloadCancellation(r) || e.afterError.promise(new F.LI(i, { code: F.QC.PRE_FETCH, cause: r }));
                }
                preloadSources(e, t, a, r) {
                    return 0 === a.length
                        ? Promise.resolve()
                        : (rs(r),
                          Promise.allSettled(
                              a.slice(0, this.config.entitiesToPreloadSourceCount).map(
                                  (a) => (
                                      rs(r),
                                      e
                                          .preloadSrc({ entity: a.entity, bufferGoal: this.config.bufferGoal, positionSec: a.positionSec })
                                          .then(() => {
                                              (rs(r), this.preloadedSrcArray.push(structuredClone(a.entity.mediaSourceData)));
                                          })
                                          .catch((e) => {
                                              this.reportPrefetchError(t, r, a.entity, e, 'Preload source error');
                                          })
                                  ),
                              ),
                          ).then(() => Promise.resolve()));
                }
                preload(e, t) {
                    let a = this.startPreloadRun(),
                        r = this.getPreloadStrmContext(e);
                    if (!r) return void this.abortActivePreloadRun();
                    let { contextEntiyPairsToPreload: i, entitiesToPreloadStrmUrl: s } = r;
                    (s.length > 0 ? this.mediaProvider.getMediaSourceBatch({ entities: s }) : Promise.resolve())
                        .then(() => (rs(a), this.preloadSources(e, t, i, a)))
                        .catch((e) => {
                            if (!(a.aborted || this.isPreloadCancellation(e))) for (let r of s) this.reportPrefetchError(t, a, r, e, 'Preload strm urls error');
                        });
                }
                getPreloadStrmContext(e) {
                    let {
                        queueState: { order: t, entityList: a, nextIndex: r },
                    } = e.state;
                    if (null === r.value) return null;
                    let i = (function (e) {
                            let { preloadCount: t, contextEntityPairs: a, index: r, order: i } = e,
                                s = 0,
                                n = r,
                                o = [];
                            for (; s < t && !(n >= i.length);) {
                                let e = i[n];
                                (void 0 !== e && o.push(e), (n += 1), (s += 1));
                            }
                            return o.map((e) => a[e]);
                        })({ contextEntityPairs: a.value, index: r.value, order: t.value, preloadCount: this.config.entitiesToPreloadStrmUrlsCount }),
                        s = (function (e) {
                            let { contextEntityPairs: t, mediaSourceTtlMs: a, mediaConfigController: r } = e;
                            return t.filter((e) => rr(e.entity, a, r));
                        })({ contextEntityPairs: i, mediaSourceTtlMs: this.config.strmUrlsTtlMs, mediaConfigController: this.mediaConfigController }).map(
                            (e) => e.entity,
                        );
                    return { contextEntiyPairsToPreload: i, entitiesToPreloadStrmUrl: s };
                }
                releaseRedundantPreloadedSrc(e, t) {
                    if (!(this.preloadedSrcArray.length + t <= this.config.preloadedSourcesMaxCount))
                        for (; this.preloadedSrcArray.length + t !== this.config.preloadedSourcesMaxCount;) {
                            let t = this.preloadedSrcArray.shift();
                            t && e.releaseSrc(t);
                        }
                }
                releaseAllPreloadedSrc(e) {
                    for (; this.preloadedSrcArray.length;) {
                        let t = this.preloadedSrcArray.shift();
                        t && e.releaseSrc(t);
                    }
                }
                constructor({ mediaProvider: e, config: t, mediaConfigController: a, variables: r }) {
                    var i;
                    ((0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'mediaProvider', void 0),
                        (0, L._)(this, 'config', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'preloadedSrcArray', []),
                        (0, L._)(this, 'activePreloadAbortController', null),
                        (this.variables = { isMediaSourcePreloadEnabled: null != (i = null == r ? void 0 : r.isMediaSourcePreloadEnabled) && i }),
                        (this.mediaProvider = e),
                        (this.mediaConfigController = a),
                        (this.config = t));
                }
            }
            class ro {
                apply() {
                    (this.trailerPlayback.hooks.afterContextEnd.tapPromise(
                        'TrailerPlugin',
                        () => (this.trailerPlayback.restartContext({ playAfterRestart: !1 }), Promise.resolve()),
                    ),
                        this.trailerPlayback.hooks.afterMediaPause.tapPromise('TrailerPlugin', () => (this.onTrailerPaused(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaStartPlaying.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve())),
                        this.trailerPlayback.hooks.afterMediaResume.tapPromise('TrailerPlugin', () => (this.onTrailerPlaying(), Promise.resolve())));
                }
                constructor({ onTrailerPaused: e, onTrailerPlaying: t, playbackController: a, trailerPlaybackParams: r }) {
                    if (
                        ((0, L._)(this, 'onTrailerPaused', void 0),
                        (0, L._)(this, 'onTrailerPlaying', void 0),
                        (0, L._)(this, 'trailerPlayback', void 0),
                        (this.onTrailerPaused = e),
                        (this.onTrailerPlaying = t),
                        a.createPlayback(r.id, {
                            factory: r.factory,
                            entityProvider: r.entityProvider,
                            playbackConfig: r.playbackConfig,
                            mediaPlayerParams: r.mediaPlayerParams,
                            syncVolumeWithMainPlayback: !0,
                        }),
                        (this.trailerPlayback = a.getPlayback(r.id)),
                        r.plugins)
                    )
                        for (let e of r.plugins) e.apply({ playback: this.trailerPlayback, hooks: this.trailerPlayback.hooks });
                }
            }
            var rl = a(54020);
            (x || (x = {})).START = 'start';
            class ru {
                apply(e) {
                    let { playback: t } = e;
                    this.channel &&
                        ((this.channel.onmessage = (e) => {
                            let { type: a, id: r } = e.data;
                            t.state.playerState.status.value === F.MT.PLAYING && a === x.START && r !== this.activeStreamId && t.pause();
                        }),
                        t.state.playerState.status.onChange((e) => {
                            if (e === F.MT.PLAYING) {
                                var t;
                                null == (t = this.channel) || t.postMessage({ type: x.START, id: this.activeStreamId });
                            }
                        }));
                }
                constructor() {
                    ((0, L._)(this, 'channel', void 0),
                        (0, L._)(this, 'activeStreamId', void 0),
                        (this.activeStreamId = (0, rl.A)()),
                        (this.channel = new BroadcastChannel('ya_music_playback')));
                }
            }
            class rd {
                push(e) {
                    this.callbacks.push(e);
                }
                exec() {
                    let e = [];
                    for (let t of this.callbacks)
                        if (0 === e.length) e.push(t());
                        else {
                            let a = e[e.length - 1].then(t);
                            e.push(a);
                        }
                    return Promise.allSettled(e).then(() => Promise.resolve());
                }
                constructor() {
                    (0, L._)(this, 'callbacks', []);
                }
            }
            let rc = {
                ynisonToPlayback: (e) => {
                    switch (e) {
                        case w.Ye.ONE:
                            return F.pM.ONE;
                        case w.Ye.ALL:
                            return F.pM.CONTEXT;
                        default:
                            return F.pM.NONE;
                    }
                },
            };
            class rh extends Q.t {
                constructor(e, { code: t = 'E_YNISON', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'YnisonException'), Object.setPrototypeOf(this, rh.prototype));
                }
            }
            let rv = (e, t) => new rh('[YnisonException] '.concat(e), { cause: (0, et.createObjectFromError)(t) }),
                ry = (e, t) => {
                    var a;
                    let r = null == (a = e.player_state) ? void 0 : a.player_queue,
                        i = (null == r ? void 0 : r.current_playable_index) || 0,
                        s = ((null == r ? void 0 : r.playable_list) || [])[i],
                        n = null == r ? void 0 : r.entity_type;
                    return !s || t.includes(n) ? { index: 0 } : { entityId: s.playable_id, index: i };
                },
                rp = (e) => {
                    let { playableList: t, radioSessionId: a, getEntityData: r, restoredParams: { currentPlayableIndex: i } = {} } = e,
                        s = t
                            .filter((e) => {
                                let { playable_type: t, playable_id: a } = e;
                                return t === w.si.TRACK && a;
                            })
                            .map((e, t) => r({ playable: e, wasPlayed: 'number' == typeof i && i >= t, radioSessionId: a })),
                        n = 'number' == typeof i && s[i];
                    return (n && (n.isRestored = !0), s);
                };
            function rm(e) {
                let { playable: t, wasPlayed: a } = e;
                return { type: F.z4.Unloaded, meta: { id: t.playable_id, albumId: t.album_id_optional }, wasPlayed: a };
            }
            function rf(e) {
                var t, a;
                let { playable: r, radioSessionId: i } = e;
                return {
                    type: U.R.VibeTrack,
                    meta: { id: r.playable_id, albumId: r.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: !0,
                    batchId: null != (a = null == (t = r.track_info) ? void 0 : t.batch_id_optional) ? a : void 0,
                    radioSessionId: i,
                };
            }
            let rg = (e) => !isNaN(Number(e)) && Number(e) > 0,
                rb = (e) => {
                    var t, a;
                    let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                        i = (null == r ? void 0 : r.playable_list) || [];
                    return r.from_optional || (null == (a = i[0]) ? void 0 : a.from) || 'embedded-radio';
                },
                rE = (e) => {
                    var t, a, r, i;
                    let s = null == (t = e.player_state) ? void 0 : t.player_queue,
                        n = (null == s ? void 0 : s.playable_list) || [],
                        o = null == (i = n[null == (r = e.player_state) || null == (a = r.player_queue) ? void 0 : a.current_playable_index]) ? void 0 : i.playable_id;
                    return o && n.length ? { type: ea.K.Various, from: rb(e), meta: { id: o } } : null;
                },
                rS = (e) => {
                    var t, a, r, i, s;
                    let n = null != (s = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.current_playable_index) ? s : 0;
                    return ((null == (i = e.player_state) || null == (r = i.player_queue) ? void 0 : r.playable_list) || []).slice(0, n + 1);
                };
            function r_(e, t, a) {
                return !(function (e, t, a) {
                    let r = e.length - 1;
                    return t !== r && a <= r;
                })(e, t, a)
                    ? e
                    : e.slice(0, -1);
            }
            let rA = (e) => (e.album_id_optional ? ''.concat(e.playable_id, ':').concat(e.album_id_optional) : e.playable_id),
                rP = function (e) {
                    var t, a, r, i, s, n, o, l;
                    let u = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        d = null == (t = e.player_state) ? void 0 : t.player_queue,
                        c = d.version.timestamp_ms,
                        h = null == d ? void 0 : d.entity_id,
                        v =
                            null == (s = d.queue) || null == (i = s.wave_queue) || null == (r = i.entity_options) || null == (a = r.wave_entity_optional)
                                ? void 0
                                : a.session_id,
                        y = null != (l = null == (o = e.player_state.player_queue.queue) || null == (n = o.wave_queue) ? void 0 : n.live_playable_index) ? l : 0,
                        p = e.player_state.player_queue.current_playable_index,
                        m = d.playable_list,
                        f = [];
                    return ((f = u ? eF(r_(m, p, y).map(rA), p, y) : rS(e).map(rA).slice(-100)), 'string' == typeof h || v)
                        ? {
                              type: ea.K.Vibe,
                              from: rb(e),
                              seeds: [],
                              includeTracksInResponse: !0,
                              cloneSessionId: v,
                              meta: { id: h },
                              queue: f,
                              interactive: !1,
                              timeOfLastInteractionWithVibe: c,
                          }
                        : rE(e);
                },
                rk = 'user:onyourwave',
                rI = (e, t, a) => {
                    var r;
                    let i = null == (r = e.player_state) ? void 0 : r.player_queue,
                        s = null == i ? void 0 : i.entity_type;
                    if (!s) return null;
                    if (t.includes(s)) return { type: ea.K.Vibe, from: rb(e), seeds: [rk], includeTracksInResponse: !0, meta: { id: rk } };
                    switch (s) {
                        case w.lv.ALBUM:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return rg(r) ? { type: ea.K.Album, from: rb(e), meta: { id: r } } : rE(e);
                            })(e);
                        case w.lv.ARTIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id;
                                return rg(r) ? { type: ea.K.Artist, from: rb(e), meta: { id: r } } : rE(e);
                            })(e);
                        case w.lv.PLAYLIST:
                            return ((e) => {
                                var t;
                                let a = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    r = null == a ? void 0 : a.entity_id,
                                    i = rb(e),
                                    [s, n] = String(r).split(':');
                                if (rg(s) && rg(n)) {
                                    let e = { uid: Number(s) };
                                    return { type: ea.K.Playlist, from: i, meta: { id: r, kind: Number(n), owner: e } };
                                }
                                return rE(e);
                            })(e);
                        case w.lv.RADIO:
                            return rP(e, a.sendCorrectRotorQueueParam);
                        case w.lv.GENERATIVE:
                            return ((e) => {
                                var t, a;
                                let r = null == (t = e.player_state) ? void 0 : t.player_queue,
                                    [i, s] = (null == r || null == (a = r.entity_id) ? void 0 : a.split(' ')) || [];
                                return i ? { type: ea.K.Generative, from: rb(e), meta: { id: i, stream: s ? { id: i, url: s } : void 0 } } : null;
                            })(e);
                        case w.lv.VARIOUS:
                            return rE(e);
                        default:
                            return null;
                    }
                };
            function rC(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                switch (e.state.playerState.status.value) {
                    case F.MT.PLAYING:
                        return !1;
                    case F.MT.PAUSED:
                    case F.MT.STOPPED:
                    case F.MT.IDLE:
                        return !0;
                    default:
                        return t;
                }
            }
            let rx = (e, t) => ({ ...e, filterParams: t.queueState.filterParams.value }),
                rT = (e, t) => {
                    if (!e) return null;
                    let a = { ...e };
                    return (a.type === ea.K.Vibe && (a.allowExplicit = t.queueState.filterParams.value.allowExplicit), a);
                };
            function rR(e) {
                let { playableList: t, trackSourcesMap: a, from: r, livePlayableIndex: i, currentPlayableIndex: s, radioSessionId: n, getEntityData: o } = e,
                    l = t
                        .filter((e) => {
                            let { playable_type: t, playable_id: a } = e;
                            return t === w.si.TRACK && a;
                        })
                        .map((e, t) => o({ playable: e, trackSourcesMap: a, from: r, wasPlayed: t <= i, radioSessionId: n })),
                    u = l[s];
                return (u && (u.isRestored = !0), l);
            }
            var rD = a(20584);
            function rw(e, t) {
                var a, r;
                if (!e || e.wave_source) return;
                let i = e.phonoteka_source;
                if (!i) return;
                let s = null != (a = i.entity_context) ? a : rD.h.BASED_ON_ENTITY_BY_DEFAULT;
                return i.playlist_id
                    ? {
                          type: ea.K.Playlist,
                          sourceContextType: s,
                          from: t,
                          meta: { id: i.playlist_id.id },
                          filter: null != (r = i.playlist_id.filter_optional) ? r : void 0,
                      }
                    : i.album_id
                      ? { type: ea.K.Album, sourceContextType: s, from: t, meta: { id: Number(i.album_id.id) } }
                      : i.artist_id
                        ? { type: ea.K.Artist, sourceContextType: s, from: t, meta: { id: Number(i.artist_id.id) } }
                        : { type: ea.K.Various, sourceContextType: s, from: t, meta: { id: '' } };
            }
            function rN(e) {
                var t, a, r;
                let { playable: i, trackSourcesMap: s, from: n, wasPlayed: o, radioSessionId: l } = e,
                    u = null == (t = i.track_info) ? void 0 : t.track_source_key,
                    d = rw(void 0 !== u ? s.get(u) : void 0, n);
                return {
                    type: U.R.VibeTrack,
                    meta: { id: i.playable_id, albumId: i.album_id_optional },
                    loadEntityMeta: !0,
                    wasPlayed: o,
                    batchId: null != (r = null == (a = i.track_info) ? void 0 : a.batch_id_optional) ? r : void 0,
                    sourceContextData: d,
                    radioSessionId: l,
                };
            }
            function rO(e) {
                var t;
                let { playable: a, trackSourcesMap: r, from: i, wasPlayed: s } = e,
                    n = null == (t = a.track_info) ? void 0 : t.track_source_key,
                    o = rw(void 0 !== n ? r.get(n) : void 0, i);
                return { type: F.z4.Unloaded, meta: { id: a.playable_id, albumId: a.album_id_optional }, wasPlayed: s, sourceContextData: o };
            }
            class rM {
                getQueueDiagnosticSnapshot(e) {
                    if (this.onQueueDiagnosticEvent)
                        try {
                            return (function (e) {
                                var t, a, r, i, s;
                                let n = e.player_state.player_queue,
                                    o = null == (t = n.queue) ? void 0 : t.wave_queue;
                                return {
                                    entityType: n.entity_type,
                                    entityId: n.entity_id,
                                    version: { deviceId: n.version.device_id, version: n.version.version, timestampMs: n.version.timestamp_ms },
                                    currentPlayableIndex: n.current_playable_index,
                                    livePlayableIndex: null == o ? void 0 : o.live_playable_index,
                                    radioSessionId: null == o || null == (r = o.entity_options) || null == (a = r.wave_entity_optional) ? void 0 : a.session_id,
                                    trackIds: n.playable_list.map((e) => e.playable_id),
                                    order: null == (i = n.shuffle_optional) ? void 0 : i.playable_indices.slice(),
                                    trackSources:
                                        null == o || null == (s = o.entity_options)
                                            ? void 0
                                            : s.track_sources.map((e) => {
                                                  var t, a, r, i, s, n;
                                                  return {
                                                      key: e.key,
                                                      hasWaveSource: !!e.wave_source,
                                                      playlistId: null == (a = e.phonoteka_source) || null == (t = a.playlist_id) ? void 0 : t.id,
                                                      albumId: null == (i = e.phonoteka_source) || null == (r = i.album_id) ? void 0 : r.id,
                                                      artistId: null == (n = e.phonoteka_source) || null == (s = n.artist_id) ? void 0 : s.id,
                                                  };
                                              }),
                                    items: n.playable_list.map((e) => {
                                        var t, a;
                                        return {
                                            albumId: e.album_id_optional,
                                            batchId: null == (t = e.track_info) ? void 0 : t.batch_id_optional,
                                            trackSourceKey: null == (a = e.track_info) ? void 0 : a.track_source_key,
                                            type: e.playable_type,
                                        };
                                    }),
                                };
                            })(e);
                        } catch (e) {
                            return;
                        }
                }
                emitQueueDiagnosticEvent(e, t) {
                    try {
                        var a;
                        null == (a = this.onQueueDiagnosticEvent) || a.call(this, e, t);
                    } catch (e) {}
                }
                onYnisonStateUpdated(e) {
                    var t;
                    if (this.variables.shouldApplyState) {
                        if (this.shouldRestoreMusicAsVibe(e.state) && (null == (t = e.options) ? void 0 : t.isStateForRestore))
                            return void this.setDefaultVibeContext(e.state);
                        this.applyYnisonDiff(e);
                    }
                }
                shouldRestoreMusicAsVibe(e) {
                    var t, a, r, i;
                    let s = this.variables.restoreMusicAsVibe,
                        n = null == s ? void 0 : s.stateAgeThresholdMin;
                    if (!(null == s ? void 0 : s.enabled) || 'number' != typeof n || !Number.isFinite(n) || n <= 0) return !1;
                    let o = e.player_state.player_queue,
                        l = null == (t = o.queue) ? void 0 : t.wave_queue;
                    if (!l) return !1;
                    let u = null == (a = l.entity_options) ? void 0 : a.track_sources,
                        d = o.playable_list[o.current_playable_index],
                        c = null == d || null == (r = d.track_info) ? void 0 : r.track_source_key,
                        h =
                            null == u
                                ? void 0
                                : u.find((e) => {
                                      let { key: t } = e;
                                      return t === c;
                                  }),
                        v = null == h ? void 0 : h.phonoteka_source,
                        y = null == v ? void 0 : v.album_id,
                        p = null == v ? void 0 : v.playlist_id,
                        m = null == v ? void 0 : v.artist_id;
                    if (!y && !p && !m) return !1;
                    let f = null == y ? void 0 : y.album_type;
                    if (f === w.XF.PODCAST || f === w.XF.AUDIOBOOK || f === w.XF.FAIRY_TALE) return !1;
                    let g = Number(null == (i = o.version) ? void 0 : i.timestamp_ms);
                    return Date.now() - g >= 6e4 * n;
                }
                async setDefaultVibeContext(e) {
                    let t,
                        a = ++this.diagnosticOperationId,
                        r = this.getQueueDiagnosticSnapshot(e);
                    try {
                        let i = 'user:onyourwave',
                            s = this.factory.createContext({ data: { type: ea.K.Vibe, meta: { id: i }, seeds: [i], from: rb(e), includeTracksInResponse: !0 } });
                        ((t = s.data),
                            r && this.emitQueueDiagnosticEvent(t, { operationId: a, timestamp: Date.now(), phase: 'applying', mode: 'defaultVibe', snapshot: r }),
                            await this.playback.stop(),
                            await this.playback.setContext({ context: s, loadContextMeta: !0 }),
                            this.emitQueueDiagnosticEvent(t, { operationId: a, timestamp: Date.now(), phase: 'applied' }));
                    } catch (e) {
                        (t && this.emitQueueDiagnosticEvent(t, { operationId: a, timestamp: Date.now(), phase: e instanceof F.WT ? 'superseded' : 'failed' }),
                            e instanceof F.WT || (await this.playback.hooks.afterError.promise(rv('PlaybackSetContextError', e))));
                    }
                }
                applyYnisonDiff(e) {
                    var t, a, r, i, s, n;
                    let o = new rd();
                    if (
                        ((function (e) {
                            if (!e.player_state || !e.player_state.player_queue) return !1;
                            let t = e.player_state.player_queue;
                            return 'playable_list' in t || 'entity_id' in t;
                        })(e.diff)
                            ? o.push(() => this.changeContext(e.state))
                            : (n = e.diff).player_state &&
                              n.player_state.player_queue &&
                              (('number' == typeof n.player_state.player_queue.current_playable_index &&
                                  !n.player_state.player_queue.playable_list &&
                                  !n.player_state.player_queue.entity_id) ||
                                  0) &&
                              o.push(() => this.changeEntityInCurrentContext(e.state)),
                        null == (a = e.diff.player_state) || null == (t = a.player_queue) ? void 0 : t.shuffle_optional)
                    ) {
                        let t = e.diff.player_state.player_queue.shuffle_optional;
                        o.push(() => this.changeShuffle(t));
                    }
                    if (null == (i = e.diff.player_state) || null == (r = i.player_queue) ? void 0 : r.options) {
                        let t = e.diff.player_state.player_queue.options;
                        if (e.state.player_state.player_queue.entity_type === w.lv.RADIO) {
                            let e = t.repeat_mode === w.Ye.ALL,
                                a = t.repeat_mode === w.Ye.ONE && !0 !== this.variables.useWaveQueue;
                            (e || a) && (t = { ...t, repeat_mode: w.Ye.NONE });
                        }
                        o.push(() => this.changeOptions(t));
                    }
                    if (null == (s = e.diff.player_state) ? void 0 : s.status) {
                        let t = e.diff.player_state.status;
                        o.push(() => this.changeStatus(t));
                    }
                    return o.exec();
                }
                changeOptions(e) {
                    let t = rc.ynisonToPlayback(e.repeat_mode);
                    return (this.playback.setRepeatMode(t), Promise.resolve());
                }
                changeShuffle(e) {
                    let t = !!(Array.isArray(e.playable_indices) && e.playable_indices.length);
                    return (this.playback.setShuffle(t), Promise.resolve());
                }
                changeStatus(e) {
                    let t = new rd(),
                        a = Number(e.playback_speed),
                        r = Number(e.progress_ms) / 1e3;
                    return (
                        Number.isNaN(a) || t.push(() => this.playback.setSpeed(a).then(() => Promise.resolve())),
                        Number.isNaN(r) ||
                            t.push(() => {
                                let e = this.playback.state.playerState.status.value,
                                    t = e === F.MT.PLAYING,
                                    a = Math.abs(this.playback.state.playerState.progress.value.position - r);
                                if ((t && a > w.O5) || e === F.MT.IDLE) return this.playback.setProgress(r).then(() => Promise.resolve());
                                let {
                                    currentEntity: { value: i },
                                } = this.playback.state.queueState;
                                return (i && (i.positionSec = r), Promise.resolve());
                            }),
                        void 0 !== e.paused && e.paused !== rC(this.playback, e.paused) && t.push(() => this.playback.togglePause()),
                        t.exec()
                    );
                }
                changeContext(e) {
                    var t, a, r;
                    let i = ++this.diagnosticOperationId,
                        s = this.getQueueDiagnosticSnapshot(e),
                        n =
                            this.variables.useWaveQueue &&
                            (null == (r = e.player_state) || null == (a = r.player_queue) || null == (t = a.queue) ? void 0 : t.wave_queue) !== void 0,
                        o = n ? this.getContextParamsWithWaveQueue(e) : this.getContextParams(e);
                    return o
                        ? (s &&
                              this.emitQueueDiagnosticEvent(o.context.data, {
                                  operationId: i,
                                  timestamp: Date.now(),
                                  phase: 'applying',
                                  mode: n ? 'waveQueue' : 'legacy',
                                  snapshot: s,
                              }),
                          this.playback
                              .setContext(o)
                              .then(() => {
                                  if (n) {
                                      var t, a, r, i, s;
                                      let n =
                                          null !=
                                          (s =
                                              null == (i = e.player_state) || null == (r = i.player_queue) || null == (a = r.queue) || null == (t = a.wave_queue)
                                                  ? void 0
                                                  : t.live_playable_index)
                                              ? s
                                              : 0;
                                      this.playback.state.queueState.livePlayableIndex.value = n;
                                  }
                                  return this.playback.stop();
                              })
                              .then(() => {
                                  void 0 !== e.player_state.status.paused &&
                                      e.player_state.status.paused !== rC(this.playback, e.player_state.status.paused) &&
                                      this.playback.togglePause();
                              })
                              .then(() => {
                                  this.emitQueueDiagnosticEvent(o.context.data, { operationId: i, timestamp: Date.now(), phase: 'applied' });
                              })
                              .catch((e) => {
                                  (this.emitQueueDiagnosticEvent(o.context.data, {
                                      operationId: i,
                                      timestamp: Date.now(),
                                      phase: e instanceof F.WT ? 'superseded' : 'failed',
                                  }),
                                      e instanceof F.WT || this.playback.hooks.afterError.promise(rv('PlaybackSetContextError', e)));
                              }))
                        : Promise.resolve();
                }
                changeEntityInCurrentContext(e) {
                    let t = e.player_state.player_queue.current_playable_index,
                        a = !1 !== e.player_state.status.paused;
                    return this.playback.setEntityByIndex(t, a);
                }
                getInitialProgress(e) {
                    return { duration: Number(e.player_state.status.duration_ms) / 1e3, position: Number(e.player_state.status.progress_ms) / 1e3, loaded: 0 };
                }
                getContextParamsWithWaveQueue(e) {
                    try {
                        var t, a, r, i, s, n, o, l, u, d, c;
                        let h = rT(rI(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!h) return null;
                        let v = this.factory.createContext({ data: h }),
                            y = this.getInitialProgress(e),
                            p = null == (t = e.player_state) ? void 0 : t.player_queue,
                            m = null == p || null == (a = p.queue) ? void 0 : a.wave_queue,
                            f = null == m || null == (r = m.entity_options) ? void 0 : r.track_sources,
                            g = null != (i = null == m ? void 0 : m.live_playable_index) ? i : 0,
                            b = null != (s = null == p ? void 0 : p.from_optional) ? s : '',
                            E = null != (n = null == p ? void 0 : p.current_playable_index) ? n : 0,
                            S = rx(ry(e, this.fallbackTypesQueueToVibe), this.playback.state),
                            _ = null != (o = null == p ? void 0 : p.playable_list) ? o : [];
                        if ((0, ae.S)(v)) return { context: v, loadContextMeta: !0, progress: y };
                        let A = (function (e) {
                            let t = new Map();
                            if (!e) return t;
                            for (let a of e) t.set(a.key, a);
                            return t;
                        })(f);
                        if ((0, e3.i)(v)) {
                            let e = r_(_, E, g),
                                t =
                                    null == (c = p.queue) || null == (d = c.wave_queue) || null == (u = d.entity_options) || null == (l = u.wave_entity_optional)
                                        ? void 0
                                        : l.session_id,
                                a = rR({
                                    playableList: e,
                                    trackSourcesMap: A,
                                    from: b,
                                    livePlayableIndex: g,
                                    currentPlayableIndex: E,
                                    radioSessionId: t,
                                    getEntityData: rN,
                                });
                            return { context: v, entitiesData: a.length ? a : void 0, loadContextMeta: !0, queueParams: S, progress: y };
                        }
                        let P = rR({ playableList: _, trackSourcesMap: A, from: b, livePlayableIndex: g, currentPlayableIndex: E, getEntityData: rO });
                        if ((0, aw.p)(v)) return { context: v, entitiesData: P, loadContextMeta: !1, queueParams: S, progress: y };
                        return { context: v, entitiesData: P, loadContextMeta: !0, queueParams: S, progress: y };
                    } catch (e) {
                        return (this.playback.hooks.afterError.promise(rv('GetContextParamsWithWaveQueueError', e)), null);
                    }
                }
                getContextParams(e) {
                    try {
                        var t, a, r, i, s, n, o;
                        let l = rT(rI(e, this.fallbackTypesQueueToVibe, this.variables), this.playback.state);
                        if (!l) return null;
                        let u = this.factory.createContext({ data: l }),
                            d = this.getInitialProgress(e),
                            c = null == (a = e.player_state) || null == (t = a.player_queue) ? void 0 : t.playable_list,
                            h = rx(ry(e, this.fallbackTypesQueueToVibe), this.playback.state);
                        if ((0, e3.i)(u)) {
                            let t = null == (r = e.player_state) ? void 0 : r.player_queue,
                                a =
                                    null == (o = t.queue) || null == (n = o.wave_queue) || null == (s = n.entity_options) || null == (i = s.wave_entity_optional)
                                        ? void 0
                                        : i.session_id,
                                l = rp({ playableList: rS(e), getEntityData: rf, radioSessionId: a, restoredParams: { currentPlayableIndex: t.current_playable_index } });
                            return { context: u, entitiesData: l.length ? l : void 0, loadContextMeta: !0, queueParams: h, progress: d };
                        }
                        let v = rp({ playableList: c, getEntityData: rm, restoredParams: { currentPlayableIndex: e.player_state.player_queue.current_playable_index } });
                        if ((0, aw.p)(u)) return { context: u, entitiesData: v, loadContextMeta: !1, queueParams: h, progress: d };
                        if ((0, ae.S)(u)) return { context: u, loadContextMeta: !0, progress: d };
                        return { context: u, entitiesData: v, loadContextMeta: !0, queueParams: h, progress: d };
                    } catch (e) {
                        return (this.playback.hooks.afterError.promise(rv('GetContextParamsError', e)), null);
                    }
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ factory: e, playback: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i, onQueueDiagnosticEvent: s }) {
                    ((0, L._)(this, 'onQueueDiagnosticEvent', void 0),
                        (0, L._)(this, 'diagnosticOperationId', 0),
                        (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'unlisteners', void 0),
                        (0, L._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.onQueueDiagnosticEvent = s),
                        (this.playback = t),
                        (this.variables = r),
                        (this.unlisteners = []),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []));
                    let n = a.on(w.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonPlugin');
                    this.unlisteners.push(n);
                    let o = a.fullState;
                    this.onYnisonStateUpdated({ prevState: o.prevState, state: o.state, diff: o.state });
                }
            }
            let rL = (e) => e.hidden,
                rF = (e) => {
                    var t, a, r, i, s, n, o;
                    switch (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.type) {
                        case U.R.Music:
                        case U.R.VibeTrack:
                            return (null == (a = e.state.currentContext.value) ? void 0 : a.data.meta.id)
                                ? String(null == (r = e.state.currentContext.value) ? void 0 : r.data.meta.id)
                                : '';
                        case U.R.Generative:
                            return (null == (i = e.state.currentContext.value) ? void 0 : i.data.meta.id)
                                ? String(null == (s = e.state.currentContext.value) ? void 0 : s.data.meta.id)
                                : '';
                        default:
                            return (null == (n = e.state.currentContext.value) ? void 0 : n.data.meta.id)
                                ? String(null == (o = e.state.currentContext.value) ? void 0 : o.data.meta.id)
                                : '';
                    }
                },
                rq = (e) => {
                    switch (e) {
                        case ea.K.Album:
                            return w.lv.ALBUM;
                        case ea.K.Playlist:
                            return w.lv.PLAYLIST;
                        case ea.K.Artist:
                            return w.lv.ARTIST;
                        case ea.K.Vibe:
                            return w.lv.RADIO;
                        case ea.K.Various:
                            return w.lv.VARIOUS;
                        case ea.K.Generative:
                            return w.lv.GENERATIVE;
                        default:
                            return w.lv.VARIOUS;
                    }
                },
                rU = (e) => {
                    var t, a, r;
                    return ((e) => 'object' == typeof e && e && 'durationMs' in e && 'number' == typeof e.durationMs)(
                        null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.entity.data.meta,
                    ) && null != (r = null == (a = e.state.queueState.currentEntity.value) ? void 0 : a.entity.data.meta.durationMs)
                        ? r
                        : 0;
                },
                rB = (e, t, a) => ''.concat(e, ':').concat(t, ':').concat(a);
            var rV = a(49602);
            function rW(e) {
                var t, a, r, i, s, n, o;
                if (!e) return;
                let l = { entityContext: null != (t = e.data.sourceContextType) ? t : rD.h.BASED_ON_ENTITY_BY_DEFAULT };
                if ((0, aR.K)(e)) {
                    let { uid: t, kind: n, id: o } = null != (a = e.data.meta) ? a : {},
                        u = void 0 !== o ? String(o) : void 0,
                        [d, c] = null != (r = null == u ? void 0 : u.split(':')) ? r : [];
                    return (
                        d && c
                            ? ((l.playlistId = u), (l.filterOptional = null != (i = e.data.filter) ? i : null))
                            : void 0 !== t && void 0 !== n && ((l.playlistId = ''.concat(t, ':').concat(n)), (l.filterOptional = null != (s = e.data.filter) ? s : null)),
                        l
                    );
                }
                if ((0, e2.F)(e)) {
                    let { id: t } = null != (n = e.data.meta) ? n : {};
                    return (void 0 !== t && (l.albumId = String(t)), l);
                }
                if ((0, rV.T)(e)) {
                    let { id: t } = null != (o = e.data.meta) ? o : {};
                    void 0 !== t && (l.artistId = String(t));
                }
                return l;
            }
            function rj(e, t, a) {
                return t && 0 !== t.length
                    ? a
                        ? (function (e, t) {
                              let a = rW(e);
                              if (!a) {
                                  var r;
                                  return null != (r = t.waveSourceKey) ? r : 0;
                              }
                              let { entityContext: i, playlistId: s, albumId: n, artistId: o } = a;
                              if (s) {
                                  let e = rB(i, 'playlist', s),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (n) {
                                  let e = rB(i, 'album', n),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              if (o) {
                                  let e = rB(i, 'artist', o),
                                      a = t.exactMatchMap.get(e);
                                  if (void 0 !== a) return a;
                              }
                              let l = t.contextOnlyMap.get(i);
                              return null != l ? l : 0;
                          })(e, a)
                        : (function (e, t) {
                              var a, r;
                              let i = rW(e);
                              if (!i) {
                                  let e = t.find((e) => void 0 !== e.wave_source);
                                  return null != (a = null == e ? void 0 : e.key) ? a : 0;
                              }
                              let { entityContext: s, playlistId: n, albumId: o, artistId: l } = i,
                                  u = t.find((e) => {
                                      var t, a, r;
                                      return (
                                          !!e.phonoteka_source &&
                                          e.phonoteka_source.entity_context === s &&
                                          ((!!n && (null == (t = e.phonoteka_source.playlist_id) ? void 0 : t.id) === n) ||
                                              (!!o && (null == (a = e.phonoteka_source.album_id) ? void 0 : a.id) === o) ||
                                              (!!l && (null == (r = e.phonoteka_source.artist_id) ? void 0 : r.id) === l))
                                      );
                                  });
                              if (u) return u.key;
                              let d = t.find(
                                  (e) =>
                                      !!e.phonoteka_source &&
                                      e.phonoteka_source.entity_context === s &&
                                      (!n || !e.phonoteka_source.playlist_id) &&
                                      (!o || !e.phonoteka_source.album_id) &&
                                      (!l || !e.phonoteka_source.artist_id),
                              );
                              return null != (r = null == d ? void 0 : d.key) ? r : 0;
                          })(e, t)
                    : 0;
            }
            function rK(e) {
                let { playableList: t, rangeStart: a, livePlayableIndex: r, isVibeQueue: i } = e;
                return i ? Math.max(0, Math.min(r - a, t.length)) : t.length;
            }
            let rY = [rD.h.BASED_ON_ENTITY_BY_DEFAULT, rD.h.ARTIST_MY_COLLECTION, rD.h.ARTIST_FAMILIAR_FROM_WAVE];
            function rG(e) {
                return { wave_source: { source_type: e } };
            }
            function rz(e) {
                return { phonoteka_source: e };
            }
            class rQ {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.status.onChange((e) => {
                            switch (e) {
                                case F.MT.PLAYING:
                                case F.MT.PAUSED:
                                    this.updateYnisonState();
                            }
                        }),
                        t = this.playback.state.playerState.event.onChange((e) => {
                            switch (e) {
                                case F.Iu.SET_PROGRESS:
                                    this.ynisonStateController.currentState.player_state.status.progress_ms / 1e3 !==
                                        this.playback.state.playerState.progress.value.position && this.updateYnisonState();
                                    break;
                                case F.Iu.SET_SPEED:
                                    this.ynisonStateController.currentState.player_state.status.playback_speed !== this.playback.state.playerState.speed.value &&
                                        this.updateYnisonState();
                            }
                        }),
                        a = this.playback.state.playerState.speed.onChange(() => {
                            this.updateYnisonState();
                        }),
                        r = this.playback.state.queueState.repeat.onChange(() => {
                            this.updateYnisonState();
                        }),
                        i = this.playback.state.queueState.shuffle.onChange(() => {
                            this.updateYnisonState();
                        }),
                        s = this.playback.state.queueState.entityList.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        }),
                        n = this.playback.state.queueState.order.onChange(() => {
                            this.updateYnisonState({ useYnisonStatus: !0, useWaveQueue: this.variables.useWaveQueue });
                        });
                    this.unsubscribeFromPlayerEvents = () => {
                        (e(), t(), r(), i(), a(), s(), n());
                    };
                }
                updateYnisonState(e) {
                    setTimeout(() => {
                        if (!this.playback.state.queueState.currentEntity.value) return;
                        let t = (function (e) {
                            var t, a, r, i, s, n, o, l;
                            let { playback: u, ynisonStateController: d, deviceId: c, variables: h } = e,
                                {
                                    devices: v,
                                    active_device_id_optional: y,
                                    player_state: { player_queue_inject_optional: p, status: m },
                                } = d.currentState,
                                f = h.useWaveQueue && !(0, ae.S)(u.state.currentContext.value),
                                { filteredEntityList: g, firstNotPlayedVibeEntity: b } = (function (e, t) {
                                    let a = e.state.queueState.index.value,
                                        r = e.state.queueState.entityList.value,
                                        i = null,
                                        s = null;
                                    return (
                                        t.enableSendLimitedEntityListToYnison && (r = r.filter((e) => !rL(e.entity))),
                                        (0, e3.i)(e.state.currentContext.value) &&
                                            t.enableSendLimitedEntityListToYnison &&
                                            ({ vibeHistory: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s } = eq(r, a)),
                                        { filteredEntityList: r, firstNotPlayedVibeEntity: i, firstNotPlayedVibeEntityIndex: s }
                                    );
                                })(u, h),
                                E = (function (e, t) {
                                    let a = e.state.currentContext.value,
                                        r = new Set(),
                                        i = [];
                                    for (let { entity: e, sourceContext: n } of t) {
                                        var s;
                                        let t = null != n ? n : a,
                                            o = rW(t),
                                            l = (0, e3.i)(t),
                                            u = null == o ? void 0 : o.albumId,
                                            d = null == (s = e.data) ? void 0 : s.meta,
                                            c = u && d && 'albums' in d ? d.albums : void 0,
                                            h =
                                                null == c
                                                    ? void 0
                                                    : c.find((e) => {
                                                          let { id: t } = e;
                                                          return String(t) === u;
                                                      }),
                                            { uniqueKey: v, payload: y } = (function (e, t, a) {
                                                if (!e) return { uniqueKey: 'wave_source', payload: rG(w.Fz.UNRECOGNIZED) };
                                                let { entityContext: r, playlistId: i, albumId: s, artistId: n } = e;
                                                if (i || s || n) {
                                                    let t = (function (e, t) {
                                                        let { entityContext: a, playlistId: r, albumId: i, artistId: s, filterOptional: n } = e;
                                                        if (r)
                                                            return (
                                                                (o = null != n ? n : null),
                                                                {
                                                                    uniqueKey: 'playlist_'
                                                                        .concat(a, '_')
                                                                        .concat(r, '_')
                                                                        .concat(null != o ? o : ''),
                                                                    payload: rz({ entity_context: a, playlist_id: { id: r, filter_optional: o } }),
                                                                }
                                                            );
                                                        if (i) {
                                                            var o;
                                                            let e = '_'.concat(t);
                                                            return {
                                                                uniqueKey: 'album_'
                                                                    .concat(a, '_')
                                                                    .concat(i)
                                                                    .concat(t ? e : ''),
                                                                payload: rz({
                                                                    entity_context: a,
                                                                    album_id: {
                                                                        id: i,
                                                                        album_type: ((e) => {
                                                                            switch (e) {
                                                                                case tZ._.SINGLE:
                                                                                    return w.XF.SINGLE;
                                                                                case tZ._.COMPILATION:
                                                                                    return w.XF.COMPILATION;
                                                                                case tZ._.PODCAST:
                                                                                    return w.XF.PODCAST;
                                                                                case tZ._.FAIRY_TALE:
                                                                                    return w.XF.FAIRY_TALE;
                                                                                case tZ._.AUDIOBOOK:
                                                                                    return w.XF.AUDIOBOOK;
                                                                                case tZ._.VIDEO_SINGLE:
                                                                                    return w.XF.VIDEO_SINGLE;
                                                                                case tZ._.VIDEO_ALBUM:
                                                                                    return w.XF.VIDEO_ALBUM;
                                                                                case tZ._.RADIO:
                                                                                    return w.XF.RADIO;
                                                                                case tZ._.ASMR:
                                                                                    return w.XF.ASMR;
                                                                                case tZ._.NOISE:
                                                                                    return w.XF.NOISE;
                                                                                case tZ._.ALBUM:
                                                                                case tZ._.UNKNOWN:
                                                                                default:
                                                                                    return w.XF.UNKNOWN;
                                                                            }
                                                                        })(t),
                                                                    },
                                                                }),
                                                            };
                                                        }
                                                        return s
                                                            ? { uniqueKey: 'artist_'.concat(a, '_').concat(s), payload: rz({ entity_context: a, artist_id: { id: s } }) }
                                                            : null;
                                                    })(e, a);
                                                    if (t) return t;
                                                }
                                                return rY.includes(r) && t
                                                    ? { uniqueKey: 'wave_source', payload: rG(w.Fz.ONLINE_BY_DEFAULT) }
                                                    : { uniqueKey: 'context_'.concat(r), payload: rz({ entity_context: r }) };
                                            })(o, l, null == h ? void 0 : h.type);
                                        r.has(v) || (r.add(v), i.push({ key: i.length, ...y }));
                                    }
                                    return i;
                                })(u, g),
                                S = (function (e) {
                                    let { entityList: t, from: a, trackSources: r, useWaveQueue: i } = e,
                                        s = (function (e) {
                                            if (!e || 0 === e.length) return null;
                                            let t = { waveSourceKey: null, exactMatchMap: new Map(), contextOnlyMap: new Map() };
                                            for (let a of e) {
                                                if (void 0 !== a.wave_source && null === t.waveSourceKey) {
                                                    t.waveSourceKey = a.key;
                                                    continue;
                                                }
                                                if (a.phonoteka_source) {
                                                    let { entity_context: e, playlist_id: r, album_id: i, artist_id: s } = a.phonoteka_source;
                                                    if (r) {
                                                        let i = rB(e, 'playlist', r.id);
                                                        t.exactMatchMap.has(i) || t.exactMatchMap.set(i, a.key);
                                                    } else if (i) {
                                                        let r = rB(e, 'album', i.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else if (s) {
                                                        let r = rB(e, 'artist', s.id);
                                                        t.exactMatchMap.has(r) || t.exactMatchMap.set(r, a.key);
                                                    } else t.contextOnlyMap.has(e) || t.contextOnlyMap.set(e, a.key);
                                                }
                                            }
                                            return t;
                                        })(r);
                                    return t.map((e) =>
                                        ((e) => {
                                            var t, a, r, i, s, n, o, l, u, d, c, h, v;
                                            let { entityPair: y, from: p = '', trackSources: m, trackSourceIndex: f, useWaveQueue: g = !1 } = e,
                                                { entity: b, sourceContext: E } = y;
                                            switch (b.data.type) {
                                                case U.R.Music:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (a = b.data.meta.albums) || null == (t = a[0]) ? void 0 : t.id)
                                                                ? String(null == (r = b.data.meta.albums) ? void 0 : r[0].id)
                                                                : null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: w.si.TRACK,
                                                        title: null != (i = b.data.meta.title) ? i : '',
                                                        cover_url_optional: null != (s = b.data.meta.coverUri) ? s : null,
                                                        ...(g && {
                                                            track_info: { batch_id_optional: null != (n = b.data.batchId) ? n : null, track_source_key: rj(E, m, f) },
                                                        }),
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case U.R.Generative:
                                                    return {
                                                        album_id_optional: null,
                                                        from: p,
                                                        playable_id: '',
                                                        playable_type: w.si.INFINITE,
                                                        title: null != (o = b.data.meta.title) ? o : '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                case U.R.VibeTrack:
                                                    return {
                                                        album_id_optional:
                                                            'number' == typeof (null == (u = b.data.meta.albums) || null == (l = u[0]) ? void 0 : l.id)
                                                                ? String(null == (d = b.data.meta.albums) ? void 0 : d[0].id)
                                                                : null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: w.si.TRACK,
                                                        title: null != (c = b.data.meta.title) ? c : '',
                                                        cover_url_optional: null != (h = b.data.meta.coverUri) ? h : null,
                                                        track_info: { batch_id_optional: null != (v = b.data.batchId) ? v : null, track_source_key: rj(E, m, f) },
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                                default:
                                                    return {
                                                        album_id_optional: null,
                                                        from: p,
                                                        playable_id: String(b.data.meta.id),
                                                        playable_type: w.si.TRACK,
                                                        title: '',
                                                        cover_url_optional: null,
                                                        navigation_id_optional: null,
                                                        playback_action_id_optional: null,
                                                    };
                                            }
                                        })({ entityPair: e, from: a, trackSources: r, trackSourceIndex: s, useWaveQueue: i }),
                                    );
                                })({ entityList: g, from: null == (t = u.state.currentContext.value) ? void 0 : t.from, trackSources: E, useWaveQueue: f }),
                                {
                                    playableIndices: _,
                                    currentPlayableIndex: A,
                                    playableList: P,
                                    livePlayableIndex: k,
                                } = (function (e) {
                                    let { playableList: t, currentPlayableIndex: a, playback: r, newIndexOrderMap: i, variables: s } = e,
                                        n = r.state.queueState.order.value,
                                        o = (0, e3.i)(r.state.currentContext.value),
                                        { livePlayableIndex: l } = r.state.queueState;
                                    if ((s.enableSendLimitedEntityListToYnison && (n = n.filter((e) => i.has(e)).map((e) => i.get(e))), t.length <= 200))
                                        return {
                                            playableList: t,
                                            currentPlayableIndex: a,
                                            playableIndices: n,
                                            livePlayableIndex: rK({ playableList: t, rangeStart: 0, livePlayableIndex: l.value, isVibeQueue: o }),
                                        };
                                    if (r.state.queueState.shuffle.value) {
                                        let e = n.indexOf(a),
                                            r = n.slice(e, 200),
                                            i = [...r].sort((e, t) => e - t).map((e) => t[e]),
                                            s = new Map(),
                                            o = r.map((e) => {
                                                var a;
                                                let r = t[e].playable_id,
                                                    n = null != (a = s.get(r)) ? a : -1,
                                                    o = i.findIndex((e, t) => t > n && e.playable_id === r);
                                                return (s.set(r, o), o);
                                            }),
                                            l = i.findIndex((e) => e.playable_id === t[a].playable_id);
                                        return { playableList: i, currentPlayableIndex: l, playableIndices: o, livePlayableIndex: i.length };
                                    }
                                    let u = t[a].playable_id,
                                        d = Math.max(0, a - 100);
                                    d + 200 > t.length && (d = t.length - 200);
                                    let c = t.slice(d, d + 200),
                                        h = c.findIndex((e) => e.playable_id === u);
                                    return {
                                        playableList: c,
                                        currentPlayableIndex: h,
                                        livePlayableIndex: rK({ playableList: c, rangeStart: d, livePlayableIndex: l.value, isVibeQueue: o }),
                                        playableIndices: n,
                                    };
                                })({
                                    playableList: S,
                                    currentPlayableIndex: (function (e, t) {
                                        let {
                                                order: { value: a },
                                                index: { value: r },
                                                entityList: { value: i },
                                            } = e.state.queueState,
                                            s = a[r];
                                        if ('number' != typeof s) return -1;
                                        let n = i[s];
                                        return t.findIndex((e) => {
                                            let { entity: t } = e;
                                            return t.data.meta.id === (null == n ? void 0 : n.entity.data.meta.id);
                                        });
                                    })(u, g),
                                    newIndexOrderMap: (function (e, t) {
                                        let a = new Map(),
                                            r = 0;
                                        for (let i = 0; i < e.length; i++) {
                                            let s = e[i];
                                            s && !t(s.entity) && (a.set(i, r), r++);
                                        }
                                        return a;
                                    })(u.state.queueState.entityList.value, rL),
                                    playback: u,
                                    variables: h,
                                }),
                                I = (function (e) {
                                    let { playback: t, playableList: a, firstNotPlayedVibeEntity: r } = e;
                                    if (!(0, e3.i)(t.state.currentContext.value) || !r) return [];
                                    let i = a.findLast((e) => String(r.entity.data.meta.id) === e.playable_id);
                                    return i ? [i] : [];
                                })({ playback: u, playableList: P, firstNotPlayedVibeEntity: b }),
                                C = rC(u, m.paused),
                                x = {
                                    duration_ms: rU(u),
                                    progress_ms: ((e) => {
                                        var t;
                                        let a = 1e3 * Math.floor(e.state.playerState.progress.value.position),
                                            r = rU(e);
                                        return (null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context.data.type) === ea.K.Generative
                                            ? 0
                                            : a < r
                                              ? a
                                              : 0;
                                    })(u),
                                    paused: C,
                                    playback_speed: u.state.playerState.speed.value,
                                    version: (0, w.fD)(c),
                                },
                                T = ((e) => {
                                    var t, a;
                                    let r = null == (t = e.state.queueState.currentEntity.value) ? void 0 : t.context;
                                    return (0, e3.i)(r) && (null == (a = r.data.meta.session) ? void 0 : a.radioSessionId)
                                        ? { session_id: r.data.meta.session.radioSessionId, seeds: r.data.seeds }
                                        : null;
                                })(u);
                            return {
                                active_device_id_optional: y,
                                devices: v,
                                player_state: {
                                    player_queue_inject_optional: p,
                                    status: h.useYnisonStatus ? m : x,
                                    player_queue: {
                                        entity_id: rF(u),
                                        entity_type: rq(null == (a = u.state.currentContext.value) ? void 0 : a.data.type),
                                        current_playable_index: A,
                                        playable_list: P,
                                        shuffle_optional: u.state.queueState.shuffle.value ? { playable_indices: _ } : null,
                                        options: {
                                            repeat_mode: ((e) => {
                                                switch (e) {
                                                    case F.pM.NONE:
                                                        return w.Ye.NONE;
                                                    case F.pM.ONE:
                                                        return w.Ye.ONE;
                                                    case F.pM.CONTEXT:
                                                        return w.Ye.ALL;
                                                    default:
                                                        return w.Ye.NONE;
                                                }
                                            })(u.state.queueState.repeat.value),
                                        },
                                        entity_context: w.az.BASED_ON_ENTITY_BY_DEFAULT,
                                        from_optional: null != (i = null == (r = u.state.currentContext.value) ? void 0 : r.from) ? i : null,
                                        initial_entity_optional: (0, ae.S)(null == (s = u.state.queueState.currentEntity.value) ? void 0 : s.context)
                                            ? { entity_id: rF(u), entity_type: rq(null == (n = u.state.currentContext.value) ? void 0 : n.data.type) }
                                            : null,
                                        adding_options_optional:
                                            (0, e3.i)(null == (o = u.state.queueState.currentEntity.value) ? void 0 : o.context) &&
                                            (null == (l = u.state.queueState.currentEntity.value) ? void 0 : l.context.data.meta.session)
                                                ? { radio_options: { session_id: u.state.queueState.currentEntity.value.context.data.meta.session.radioSessionId } }
                                                : null,
                                        queue: f
                                            ? {
                                                  wave_queue: {
                                                      recommended_playable_list: I,
                                                      live_playable_index: k,
                                                      entity_options: { track_sources: E, wave_entity_optional: T },
                                                      navigation_id_optional: null,
                                                      playback_action_id_optional: null,
                                                  },
                                              }
                                            : null,
                                        version: (0, w.fD)(c),
                                    },
                                },
                            };
                        })({
                            playback: this.playback,
                            ynisonStateController: this.ynisonStateController,
                            deviceId: this.deviceConfig.info.device_id,
                            variables: { ...this.variables, ...e },
                        });
                        this.ynisonStateController.updateState({ newState: t, skipVersionCompare: !0, trigger: 'YnisonPlugin' });
                    }, 0);
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a, variables: r }) {
                    ((0, L._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        (this.variables = r),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState());
                }
            }
            class rH {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rM({
                            playback: t,
                            onQueueDiagnosticEvent: this.onQueueDiagnosticEvent,
                            factory: this.factory,
                            ynisonStateController: this.ynisonStateController,
                            variables: this.variables,
                            fallbackTypesQueueToVibe: this.fallbackTypesQueueToVibe,
                        }),
                        i = new rQ({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig, variables: this.variables });
                    (a.beforeEntityChange.tapPromise('YnisonPlugin', () => {
                        let {
                            currentEntity: { value: e },
                        } = t.state.queueState;
                        return (e && (e.positionSec = void 0), Promise.resolve());
                    }),
                        a.beforeDestroy.tapPromise('YnisonPlugin', () => (r.destroy(), i.destroy(), Promise.resolve())));
                }
                constructor({ factory: e, deviceConfig: t, ynisonStateController: a, variables: r, fallbackTypesQueueToVibe: i, onQueueDiagnosticEvent: s }) {
                    ((0, L._)(this, 'onQueueDiagnosticEvent', void 0),
                        (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'fallbackTypesQueueToVibe', void 0),
                        (this.factory = e),
                        (this.onQueueDiagnosticEvent = s),
                        (this.deviceConfig = t),
                        (this.ynisonStateController = a),
                        (this.variables = r),
                        (this.fallbackTypesQueueToVibe = null != i ? i : []));
                }
            }
            class rX {
                subscribeOnPlayerEvents() {
                    let e = this.playback.state.playerState.volume.onChange(() => {
                        this.updateYnisonState();
                    });
                    this.unsubscribeFromPlayerEvents = () => {
                        e();
                    };
                }
                updateYnisonState() {
                    this.ynisonStateController.updateState({
                        trigger: 'YnisonValuePlugin',
                        newState: { ...this.ynisonStateController.currentState, devices: this.createDevices() },
                    });
                }
                createDevices() {
                    return this.ynisonStateController.currentState.devices.map((e) => {
                        var t;
                        return (
                            (null == (t = e.info) ? void 0 : t.device_id) === this.deviceConfig.info.device_id &&
                                (e.volume_info = {
                                    volume: (0, w.F4)(this.playback.state.playerState.exponentVolume.value, this.deviceConfig.volumeGranularity),
                                    version: (0, w.fD)(this.deviceConfig.info.device_id),
                                }),
                            e
                        );
                    });
                }
                destroy() {
                    var e;
                    null == (e = this.unsubscribeFromPlayerEvents) || e.call(this);
                }
                constructor({ playback: e, ynisonStateController: t, deviceConfig: a }) {
                    ((0, L._)(this, 'unsubscribeFromPlayerEvents', void 0),
                        (0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'deviceConfig', void 0),
                        (this.playback = e),
                        (this.ynisonStateController = t),
                        (this.deviceConfig = a),
                        this.subscribeOnPlayerEvents(),
                        this.updateYnisonState());
                }
            }
            class rJ {
                onYnisonStateUpdated(e) {
                    this.variables.shouldApplyState && this.applyYnisonDiff(e);
                }
                applyYnisonDiff(e) {
                    if (e.diff.deviceVolume) {
                        let t = e.diff.deviceVolume.volume;
                        if (void 0 !== t) return this.changeVolume(t);
                    }
                    return Promise.resolve();
                }
                changeVolume(e) {
                    return (this.playback.setExponentVolume(e), Promise.resolve());
                }
                destroy() {
                    this.unlisteners.forEach((e) => e());
                }
                constructor({ playback: e, ynisonStateController: t, variables: a }) {
                    ((0, L._)(this, 'playback', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'unlisteners', void 0),
                        (this.playback = e),
                        (this.variables = a),
                        (this.unlisteners = []));
                    let r = t.on(w.p$.UPDATED, this.onYnisonStateUpdated.bind(this), 'YnisonVolumePlugin');
                    (this.unlisteners.push(r), this.onYnisonStateUpdated(t.fullState));
                }
            }
            class rZ {
                apply(e) {
                    let { playback: t, hooks: a } = e,
                        r = new rJ({ playback: t, ynisonStateController: this.ynisonStateController, variables: this.variables }),
                        i = new rX({ playback: t, ynisonStateController: this.ynisonStateController, deviceConfig: this.deviceConfig });
                    a.beforeDestroy.tapPromise('YnisonVolumePlugin', () => (r.destroy(), i.destroy(), Promise.resolve()));
                }
                constructor({ deviceConfig: e, ynisonStateController: t, variables: a }) {
                    ((0, L._)(this, 'deviceConfig', void 0),
                        (0, L._)(this, 'ynisonStateController', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.deviceConfig = e),
                        (this.ynisonStateController = t),
                        (this.variables = a));
                }
            }
            let r$ = [ea.K.Album, ea.K.Artist, ea.K.Playlist, ea.K.Various];
            class r0 {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    a.afterContextEnd.tapPromise('AutoflowPlugin', () => {
                        var e, a, r;
                        if (!this.variables.enabled) return Promise.resolve();
                        let i = null == (e = t.state.currentContext.value) ? void 0 : e.data.type;
                        return (
                            (null == (a = t.state.currentContext.value) ? void 0 : a.data) &&
                                'enableVariousAutoFlow' in t.state.currentContext.value.data &&
                                (null == (r = t.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                                (i = ea.K.Various),
                            i && r$.includes(i) && this.playAutoflow(t),
                            Promise.resolve()
                        );
                    });
                }
                playAutoflow(e) {
                    var t, a, r;
                    let i,
                        s = null == (t = e.state.currentContext.value) ? void 0 : t.data.type;
                    (null == (a = e.state.currentContext.value) ? void 0 : a.data) &&
                        'enableVariousAutoFlow' in e.state.currentContext.value.data &&
                        (null == (r = e.state.currentContext.value) ? void 0 : r.data.enableVariousAutoFlow) &&
                        (s = ea.K.Various);
                    let n = ((e, t) => {
                            var a, r, i, s;
                            let n = null == (a = t.state.currentContext.value) ? void 0 : a.data;
                            if (n) {
                                if (e === ea.K.Album) return ['album:'.concat(n.meta.id)];
                                if (e === ea.K.Artist) return ['artist:'.concat(n.meta.id)];
                                if (e === ea.K.Playlist && 'owner' in n.meta && (null == (r = n.meta.owner) ? void 0 : r.uid) && 'kind' in n.meta && n.meta.kind)
                                    return ['playlist:'.concat(null == (i = n.meta.owner) ? void 0 : i.uid, '_').concat(n.meta.kind)];
                                if (e === ea.K.Various) {
                                    if ('overrideAutoflowSeeds' in n && n.overrideAutoflowSeeds) return n.overrideAutoflowSeeds;
                                    let e = null == (s = t.state.queueState.currentEntity.value) ? void 0 : s.entity.data.meta.id;
                                    return ['track:'.concat(e)];
                                }
                            }
                        })(s, e),
                        o = e.state.currentContext.value;
                    this.variables.sendCorrectRotorQueueParam &&
                        (i = eF(
                            e.state.queueState.entityList.value.map((e) => ep(e.entity)),
                            e.state.queueState.index.value,
                            e.state.queueState.livePlayableIndex.value,
                        ));
                    let l = Object.create(null != o ? o : null);
                    if (!(s && n)) return;
                    let u = this.factory.createContext({
                        data: {
                            type: ea.K.Vibe,
                            meta: { id: (0, eO.f)(n) },
                            seeds: n,
                            from: ((e, t, a) => {
                                var r;
                                let i = null == (r = t.state.currentContext.value) ? void 0 : r.data;
                                if (!i) return '';
                                let s = e,
                                    n = t.state.queueState.entityList.value.length || 0;
                                return (
                                    s === ea.K.Various && 1 === n && (s = 'track'),
                                    e === ea.K.Various && 'overrideContextType' in i && i.overrideContextType && (s = i.overrideContextType),
                                    ''.concat(a, '-radio-').concat(s, '-autoflow')
                                );
                            })(s, e, this.platform),
                            includeTracksInResponse: !0,
                            parentContext: l,
                            interactive: !1,
                            queue: i,
                        },
                    });
                    e.playContext({ context: u, loadContextMeta: !0 });
                }
                constructor({ platform: e, factory: t, variables: a }) {
                    ((0, L._)(this, 'platform', void 0),
                        (0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (this.platform = e),
                        (this.factory = t),
                        (this.variables = a));
                }
            }
            class r1 {
                apply(e) {
                    let { playback: t, hooks: a } = e;
                    (this.telemetry.createTelemetry(t),
                        this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion },
                            !0,
                        ),
                        t.state.playerState.status.onChange(() => {
                            this.telemetry.setPlayingState(t.state.playerState);
                        }),
                        t.state.playerState.event.onChange((e) => {
                            e && e !== F.Iu.UPDATING_PROGRESS && this.telemetry.logEvent({ name: e });
                        }),
                        a.afterError.tapPromise(
                            'TelemetryPlugin',
                            (e) => (e instanceof F.LI && this.telemetry.logError({ error: { ...e, isFatal: !1 } }), Promise.resolve()),
                        ),
                        a.beforeMediaStartPlaying.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return (this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve());
                        }),
                        a.beforeMediaSourceContentReload.tapPromise('TelemetryPlugin', () => {
                            let { value: e } = t.state.queueState.currentEntity;
                            return (this.beforeMediaHandler(null == e ? void 0 : e.entity), Promise.resolve());
                        }),
                        a.beforeMediaSourceContentPreload.tapPromise('TelemetryPlugin', (e) => (this.beforeMediaHandler(e), Promise.resolve())));
                }
                beforeMediaHandler(e) {
                    if (!e || aP(e)) return;
                    let { mediaSourceData: t } = e;
                    (t && 'vsid' in t && void 0 === t.vsid && (t.vsid = this.telemetry.vsid),
                        t && 'sourceIndex' in t && void 0 === t.sourceIndex && (t.sourceIndex = this.telemetry.onBeforeSetSource()));
                    let a = (function (e) {
                            let { mediaSourceData: t } = e;
                            if (!t) return;
                            let { data: a } = t;
                            return { streamUrl: t.src, ...a };
                        })(e),
                        r = this.getTelemetryTestIds ? this.getTelemetryTestIds() : void 0;
                    a &&
                        (this.telemetry.setStaticParams(
                            { labels: { from: this.telemetry.from }, puid: this.puid ? String(this.puid) : void 0, yaspVersion: this.yaspVersion, testIds: r, ...a },
                            !0,
                        ),
                        this.telemetry.onSetSource(a));
                }
                constructor({ telemetry: e, puid: t, yaspVersion: a, getTelemetryTestIds: r }) {
                    ((0, L._)(this, 'telemetry', void 0),
                        (0, L._)(this, 'puid', void 0),
                        (0, L._)(this, 'yaspVersion', void 0),
                        (0, L._)(this, 'getTelemetryTestIds', void 0),
                        (this.telemetry = e),
                        (this.puid = t),
                        (this.yaspVersion = a),
                        (this.getTelemetryTestIds = r));
                }
            }
            class r3 {
                setQuality(e) {
                    this.quality.value = e;
                }
                constructor(e) {
                    ((0, L._)(this, 'quality', new ei.cJ(tW.e.BALANCED)), (0, L._)(this, 'isCrossfadeEnabled', new ei.cJ(!0)), this.setQuality(e));
                }
            }
            function r5(e) {
                return (null == e ? void 0 : e.data.type) === U.R.Radio;
            }
            class r8 {
                get src() {
                    let e = this.getQueryParamsString();
                    return e ? ''.concat(this.data.url).concat(e) : this.data.url;
                }
                getQueryParamsString() {
                    let e = new URLSearchParams();
                    (this.vsid && e.append('vsid', this.vsid), void 0 !== this.sourceIndex && e.append('source_index', String(this.sourceIndex)));
                    let t = e.toString();
                    return t ? '?'.concat(t) : void 0;
                }
                constructor(e) {
                    ((0, L._)(this, 'type', 'generativeSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex));
                }
            }
            class r2 extends tz {
                constructor(e, { code: t = 'E_GENERATIVE_MEDIA_PROVIDER', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'GenerativeMediaProviderException'), Object.setPrototypeOf(this, r2.prototype));
                }
            }
            class r4 {
                getMediaSource(e) {
                    if (t1(e.entity)) {
                        var t;
                        if (null == (t = e.entity.data.meta.stream) ? void 0 : t.url) {
                            let t = new r8({ data: e.entity.data.meta.stream });
                            return ((e.entity.mediaSourceData = t), Promise.resolve(t));
                        }
                        return Promise.reject(new r2('Failed to create generative src link', { code: m.E_GET_MEDIA_SRC }));
                    }
                    return Promise.reject(new r2('Provided entity is not generative entity', { code: m.E_UNSUITABLE_ENTITY_TYPE }));
                }
            }
            var r9 = a(3371),
                r6 = a(23797),
                r7 = a(35723);
            class ie {
                getPreloadedFileInfo(e) {
                    let { entity: t, disableCache: a = !1 } = e;
                    if (!(a || rr(t, this.mediaSourceTtlMs, this.mediaConfigController)) && t.mediaSourceData && 'downloadInfoSource' === t.mediaSourceData.type)
                        return t.mediaSourceData.data;
                }
                async getFileInfoFromResourceRequest(e) {
                    let { tsInSeconds: t, trackId: a, quality: r, codecs: i, transports: s, sign: n, fromPromoLanding: o } = e;
                    if (this.variables.isResourcesFileInfoEnabled && this.resourcesFileInfoResource) {
                        let e = await this.resourcesFileInfoResource.getFileInfo({
                            tsInSeconds: t,
                            trackId: a,
                            quality: r,
                            codecs: i,
                            transports: s,
                            sign: n,
                            fromPromoLanding: o,
                        });
                        return { downloadInfo: e.fileInfo, responseTime: e.responseTime, url: e.url };
                    }
                    let l = await this.resource.getFileInfo({ tsInSeconds: t, trackId: a, quality: r, codecs: i, transports: s, sign: n, fromPromoLanding: o });
                    return { downloadInfo: l.downloadInfo, responseTime: l.responseTime, url: l.url };
                }
                async getFileInfoFromResource(e) {
                    let { trackId: t, quality: a, codecs: r, transports: i } = e,
                        s = (0, r9.T)(),
                        n = r.join(''),
                        o = i.join(''),
                        l = '',
                        u = ''.concat(s).concat(t).concat(a).concat(n).concat(o);
                    try {
                        l = await this.tools.createSign({ data: u, secretKey: this.secretKey });
                    } catch (e) {
                        throw new az('Error in creating sign for get-file-info request', {
                            code: m.E_CREATE_SIGN,
                            cause: e,
                            data: { trackId: t, quality: a, codecs: n },
                        });
                    }
                    try {
                        return await this.getFileInfoFromResourceRequest({
                            tsInSeconds: s,
                            trackId: t,
                            quality: a,
                            codecs: r,
                            transports: i,
                            sign: l,
                            fromPromoLanding: this.variables.fromPromoLanding,
                        });
                    } catch (e) {
                        throw new az('Error in get-file-info request', { code: m.E_GET_MEDIA_SRC, cause: e, data: { trackId: t, quality: a, codecs: n } });
                    }
                }
                getFileInfo(e) {
                    let { entity: t, disableCache: a = !1, codecs: r, quality: i, transports: s } = e;
                    if (this.variables.isMediaSourcePreloadEnabled)
                        try {
                            let e = this.getPreloadedFileInfo({ entity: t, disableCache: a });
                            if (e) return Promise.resolve({ downloadInfo: e });
                        } catch (e) {
                            return Promise.reject(e);
                        }
                    return this.getFileInfoFromResource({ trackId: t.data.meta.id, quality: i, codecs: r, transports: s });
                }
                async getMediaSource(e) {
                    let { entity: t, disableCache: a = !1 } = e,
                        r = (0, r6.i)({ productQuality: this.mediaConfigController.quality.value, entity: t }),
                        i = (0, ts.l)(t) ? tO.o.RAW : this.transport;
                    t.expectedQuality = r;
                    let {
                        downloadInfo: s,
                        responseTime: n,
                        url: o,
                    } = await this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [i], codecs: this.codecs });
                    if (!('error' in s) && !r7.DM.includes(s.codec) && s.transport === tO.o.ENCRAW) {
                        t.mediaSourceData = null;
                        try {
                            let {
                                    downloadInfo: e,
                                    responseTime: i,
                                    url: s,
                                } = await this.getFileInfo({ entity: t, disableCache: a, quality: r, transports: [tO.o.RAW], codecs: this.codecs }),
                                n = this.createMediaSource({
                                    downloadInfo: e,
                                    trackId: t.data.meta.id,
                                    quality: r,
                                    codecs: this.codecs,
                                    getFileInfoResponseTime: i,
                                    getFileInfoUrl: s,
                                });
                            return ((t.mediaSourceData = n), (t.expectedQuality = r), n);
                        } catch (a) {
                            let e = this.createMediaSource({ downloadInfo: s, trackId: t.data.meta.id, quality: r, codecs: this.codecs, getFileInfoResponseTime: n });
                            throw (
                                (t.mediaSourceData = e),
                                new az('Error in get-file-info retry enclaw request', {
                                    code: m.E_GET_MEDIA_SRC,
                                    cause: a,
                                    data: { trackId: t.data.meta.id, quality: r, codecs: this.codecs.join('') },
                                })
                            );
                        }
                    }
                    let l = this.createMediaSource({
                        downloadInfo: s,
                        trackId: t.data.meta.id,
                        quality: r,
                        codecs: this.codecs,
                        getFileInfoResponseTime: n,
                        getFileInfoUrl: o,
                    });
                    return ((t.mediaSourceData = l), l);
                }
                async getFileInfoBatchRequest(e) {
                    let { tsInSeconds: t, trackIds: a, quality: r, codecs: i, transports: s, sign: n, fromPromoLanding: o } = e;
                    return this.variables.isResourcesFileInfoEnabled && this.resourcesFileInfoResource
                        ? this.resourcesFileInfoResource.getFileInfoBatch({
                              tsInSeconds: t,
                              trackIds: a,
                              quality: r,
                              codecs: i,
                              transports: s,
                              sign: n,
                              fromPromoLanding: o,
                          })
                        : this.resource.getFileInfoBatch({ tsInSeconds: t, trackIds: a, quality: r, codecs: i, transports: s, sign: n, fromPromoLanding: o });
                }
                async getMediaSourceBatch(e) {
                    let t,
                        a,
                        { entities: r } = e,
                        i = (0, r9.T)(),
                        s = (0, r6.i)({ productQuality: this.mediaConfigController.quality.value, entities: r }),
                        n = this.codecs.join(''),
                        o = r.reduce((e, t) => ''.concat(e).concat(t.data.meta.id, ','), '').slice(0, -1),
                        l = r.some((e) => (0, ts.l)(e)) ? tO.o.RAW : this.transport,
                        u = ''.concat(i).concat(o).concat(s).concat(n).concat(l);
                    try {
                        t = await this.tools.createSign({ data: u, secretKey: this.secretKey });
                    } catch (e) {
                        throw new az('Error in creating sign for get-file-info request', {
                            code: m.E_CREATE_SIGN,
                            cause: e,
                            data: { trackId: o, quality: s, codecs: n },
                        });
                    }
                    try {
                        a = await this.getFileInfoBatchRequest({
                            tsInSeconds: i,
                            trackIds: o,
                            quality: s,
                            codecs: this.codecs,
                            transports: [l],
                            sign: t,
                            fromPromoLanding: this.variables.fromPromoLanding,
                        });
                    } catch (e) {
                        throw new az('Error in get-file-info/batch request', { code: m.E_GET_MEDIA_SRC, cause: e, data: { trackId: o, quality: s, codecs: n } });
                    }
                    let d = 'downloadInfos' in a ? a.downloadInfos : a.fileInfos;
                    for (let e of d) {
                        let t = r.find((t) => t.data.meta.id === e.trackId);
                        t &&
                            ((t.mediaSourceData = this.createMediaSource({ downloadInfo: e, trackId: e.trackId, quality: s, codecs: this.codecs })),
                            (t.expectedQuality = s));
                    }
                    return d;
                }
                createMediaSource(e) {
                    let { downloadInfo: t, trackId: a, codecs: r, quality: i, getFileInfoResponseTime: s, getFileInfoUrl: n } = e,
                        o = r.join('');
                    if ('error' in t)
                        throw new az('Error message in get-file-info response', { code: m.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    if (!t.urls[0])
                        throw new az('No urls in get-file-info response', { code: m.E_GET_MEDIA_SRC, data: { trackId: a, quality: i, codecs: o, mediaSource: t } });
                    return new tF({ data: t, loadingTime: performance.now(), getFileInfoResponseTime: s, url: n });
                }
                constructor(e) {
                    var t, a;
                    ((0, L._)(this, 'secretKey', void 0),
                        (0, L._)(this, 'resource', void 0),
                        (0, L._)(this, 'resourcesFileInfoResource', void 0),
                        (0, L._)(this, 'mediaConfigController', void 0),
                        (0, L._)(this, 'transport', void 0),
                        (0, L._)(this, 'codecs', void 0),
                        (0, L._)(this, 'variables', void 0),
                        (0, L._)(this, 'mediaSourceTtlMs', void 0),
                        (0, L._)(this, 'tools', void 0));
                    let {
                        resource: r,
                        secretKey: i,
                        mediaConfigController: s,
                        transport: n,
                        variables: o,
                        mediaSourceTtlMs: l,
                        codecs: u,
                        tools: d,
                        resourcesFileInfoResource: c,
                    } = e;
                    ((this.resource = r),
                        (this.resourcesFileInfoResource = c),
                        (this.secretKey = i),
                        (this.mediaConfigController = s),
                        (this.transport = n),
                        (this.codecs = u),
                        (this.variables = {
                            isMediaSourcePreloadEnabled: null != (t = null == o ? void 0 : o.isMediaSourcePreloadEnabled) && t,
                            isResourcesFileInfoEnabled: null != (a = null == o ? void 0 : o.isResourcesFileInfoEnabled) && a,
                            fromPromoLanding: null == o ? void 0 : o.fromPromoLanding,
                        }),
                        (this.mediaSourceTtlMs = null != l ? l : 0),
                        (this.tools = d || r7.$n));
                }
            }
            class it {
                get src() {
                    return this.data.src;
                }
                constructor(e) {
                    ((0, L._)(this, 'type', 'clipSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data));
                }
            }
            class ia {
                getMediaSource(e) {
                    let { entity: t } = e;
                    if (tA(t)) {
                        let e = new it({
                            data: { src: ''.concat(this.vhUrl).concat(t.data.meta.playerId, '?service=').concat(this.service, '&from=').concat(this.from) },
                        });
                        return ((t.mediaSourceData = e), Promise.resolve(e));
                    }
                    return Promise.reject(new Q.t('Provided entity is not clip entity', { code: m.E_UNSUITABLE_ENTITY_TYPE }));
                }
                constructor({ service: e, from: t, vhUrl: a }) {
                    ((0, L._)(this, 'service', void 0),
                        (0, L._)(this, 'from', void 0),
                        (0, L._)(this, 'vhUrl', void 0),
                        (this.service = e),
                        (this.from = t),
                        (this.vhUrl = a));
                }
            }
            class ir {
                get src() {
                    let e = new URL(this.data.streamUrl);
                    return (
                        this.vsid && e.searchParams.set('vsid', this.vsid),
                        void 0 !== this.sourceIndex && e.searchParams.set('source_index', String(this.sourceIndex)),
                        e.toString()
                    );
                }
                constructor(e) {
                    ((0, L._)(this, 'type', 'radioSource'),
                        (0, L._)(this, 'data', void 0),
                        (0, L._)(this, 'manualQualitySourceKey', void 0),
                        (0, L._)(this, 'vsid', void 0),
                        (0, L._)(this, 'sourceIndex', void 0),
                        (0, L._)(this, 'playId', void 0),
                        (0, L._)(this, 'getFileInfoResponseTime', void 0),
                        (0, L._)(this, 'url', void 0),
                        (this.data = e.data),
                        (this.manualQualitySourceKey = e.manualQualitySourceKey),
                        (this.vsid = e.vsid),
                        (this.sourceIndex = e.sourceIndex),
                        (this.playId = e.playId));
                }
            }
            class ii extends tz {
                constructor(e, { code: t = 'E_RADIO_MEDIA_PROVIDER', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, L._)(this, 'name', 'RadioMediaProviderException'), Object.setPrototypeOf(this, ii.prototype));
                }
            }
            let is = 'E_RADIO_STREAM_URL_INVALID',
                io = (e) => {
                    if ('object' != typeof e || null === e || !('response' in e)) return;
                    let { response: t } = e;
                    if ('object' == typeof t && null !== t && 'statusCode' in t) return 'number' == typeof t.statusCode ? t.statusCode : void 0;
                },
                il = (e) => {
                    if ('string' != typeof e || 0 === e.trim().length) return !1;
                    try {
                        let { protocol: t, hostname: a } = new URL(e);
                        return ('http:' === t || 'https:' === t) && a.length > 0;
                    } catch (e) {
                        return !1;
                    }
                };
            class iu {
                async getMediaSource(e) {
                    let { entity: t, disableCache: a = !1 } = e;
                    if (!r5(t)) throw new ii('Provided entity is not fm radio entity', { code: m.E_UNSUITABLE_ENTITY_TYPE });
                    let r = new ir({
                        data: { streamUrl: await this.resolveStreamUrl(t, a) },
                        manualQualitySourceKey: t.data.meta.manualQualitySourceKey,
                        playId: t.playId,
                    });
                    return ((t.mediaSourceData = r), r);
                }
                async resolveStreamUrl(e, t) {
                    let a = e.data.meta.streamUrl;
                    if (!t && il(a)) return a;
                    let r = this.radioStationsResource,
                        { stationSlug: i, streamSlug: s } = e.data.meta;
                    if (!r || !i || !s) {
                        if (il(a)) return a;
                        throw new ii('Failed to create fm radio src link: entity meta has no resolved "streamUrl" and the stream cannot be requested', { code: is });
                    }
                    let n = e.playId,
                        { url: o, episodeId: l } = await this.requestStreamUrl(r, { stationSlug: i, streamSlug: s });
                    if (!il(o)) throw new ii('Failed to create fm radio src link: resolved "streamUrl" is empty or is not an absolute http(s) URL', { code: is });
                    return (e.playId === n && ((e.data.meta.streamUrl = o), (e.data.meta.streamEpisodeId = l)), o);
                }
                async requestStreamUrl(e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                    try {
                        return await e.getStreamUrlBySlug(t);
                    } catch (r) {
                        if (
                            a > 1 &&
                            ((e) => {
                                let t = io(e);
                                return void 0 === t || t >= 500;
                            })(r)
                        )
                            return this.requestStreamUrl(e, t, a - 1);
                        throw new ii('Failed to request fm radio stream url', {
                            code: m.E_GET_MEDIA_SRC,
                            cause: { name: 'RadioStreamUrlRequestError', statusCode: io(r) },
                        });
                    }
                }
                constructor({ radioStationsResource: e } = {}) {
                    ((0, L._)(this, 'radioStationsResource', void 0), (this.radioStationsResource = e));
                }
            }
            class id {
                async getMediaSource(e) {
                    return t1(e.entity)
                        ? this.generativeProvider.getMediaSource(e)
                        : tA(e.entity)
                          ? this.vhMediaProvider.getMediaSource(e)
                          : r5(e.entity)
                            ? this.radioProvider.getMediaSource(e)
                            : this.getFileInfoProvider.getMediaSource(e);
                }
                getMediaSourceBatch(e) {
                    let { entities: t } = e;
                    return t.some((e) => t1(e))
                        ? Promise.reject(new tz('Can not use getMediaSourceBatch for generative entities', { code: m.E_UNSUITABLE_ENTITY_TYPE }))
                        : this.getFileInfoProvider.getMediaSourceBatch({ entities: t });
                }
                constructor(e) {
                    ((0, L._)(this, 'generativeProvider', new r4()),
                        (0, L._)(this, 'radioProvider', new iu()),
                        (0, L._)(this, 'getFileInfoProvider', void 0),
                        (0, L._)(this, 'vhMediaProvider', void 0),
                        (this.getFileInfoProvider = new ie(e.getFileInfoProviderParams)),
                        (this.vhMediaProvider = new ia(e.vhMediaProviderParams)));
                }
            }
            class ic {
                async loadEntities(e) {
                    let { trackIds: t } = (function (e) {
                            let t = [];
                            return (
                                e.forEach((e) => {
                                    let { context: a, entity: r } = e,
                                        i = r.data.meta.id,
                                        s = 'string' == typeof i && i.includes(':');
                                    if (!r.data.fromCurrentContext || s) return void t.push(r.data.meta.id);
                                    ((0, e2.F)(a) && (i = ''.concat(r.data.meta.id, ':').concat(a.data.meta.id)),
                                        'albumId' in r.data.meta && r.data.meta.albumId && (i = ''.concat(r.data.meta.id, ':').concat(r.data.meta.albumId)),
                                        t.push(i));
                                }, {}),
                                { trackIds: t }
                            );
                        })(e),
                        a = e.some((e) => {
                            let { context: t } = e;
                            return (0, e3.i)(t);
                        });
                    return this.resource
                        .getTracksMeta({ trackIds: t, withProgress: !0, withMixData: a })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id).includes(String(r.id)));
                                if (t) {
                                    let e = t.entity.data.type === F.z4.Unloaded ? U.R.Unknown : t.entity.data.type;
                                    e !== U.R.Clip && a.push({ ...t.entity.data, type: e, meta: r, loadEntityMeta: !1 });
                                }
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new Q.t('Failed to get track meta', { code: 'E_TRACK_META_PROVIDER', cause: (0, et.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    (0, L._)(this, 'resource', void 0);
                    let { tracksResource: t } = e;
                    this.resource = t;
                }
            }
            class ih {
                loadEntities(e) {
                    let t = e.map((e) => e.entity.data.meta.id);
                    return this.resource
                        .getClip({ clipIds: t })
                        .then((t) => {
                            let a = [];
                            for (let r of t) {
                                let t = e.find((e) => String(e.entity.data.meta.id) === String(r.clipId));
                                t && a.push({ ...t.entity.data, type: U.R.Clip, meta: { id: r.clipId, ...r }, loadEntityMeta: !1 });
                            }
                            return a;
                        })
                        .catch((e) => {
                            throw new Q.t('Failed to get clip meta', { code: 'E_CLIP_META_PROVIDER', cause: (0, et.createObjectFromError)(e) });
                        });
                }
                constructor(e) {
                    ((0, L._)(this, 'resource', void 0), (this.resource = e.clipsResource));
                }
            }
            class iv {
                loadEntities(e) {
                    return e.some((e) => tA(e.entity)) ? this.clipMetaProvider.loadEntities(e) : this.trackMetaProvider.loadEntities(e);
                }
                constructor(e) {
                    ((0, L._)(this, 'trackMetaProvider', void 0),
                        (0, L._)(this, 'clipMetaProvider', void 0),
                        (this.trackMetaProvider = new ic({ tracksResource: e.tracksResource })),
                        (this.clipMetaProvider = new ih({ clipsResource: e.clipsResource })));
                }
            }
            (T || (T = {})).MAIN = 'MAIN';
            class iy {
                get availablePlaybacks() {
                    return Array.from(this.playbacks.values());
                }
                afterPlayHandler(e) {
                    return ((this.activePlayback.value = e), Promise.resolve());
                }
                beforePlayHandler(e) {
                    return this.activePlayback.value && this.activePlayback.value !== e ? this.activePlayback.value.pause() : Promise.resolve();
                }
                beforeDestroyHandler(e) {
                    return e.stop();
                }
                getPlayback(e) {
                    if (e) {
                        let t = this.playbacks.get(e);
                        if (t) return t;
                    }
                    let t = this.playbacks.get(T.MAIN);
                    if (void 0 !== t) return t;
                    throw new Q.t('MAIN playback was not created', { code: 'NO_MAIN_PLAYBACK' });
                }
                checkPlaybackBlockingStatus() {
                    var e, t;
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.MAIN,
                        r = null == (e = this.activePlayback.value) ? void 0 : e.getId(),
                        i = r === a;
                    return ((null == (t = this.activePlayback.value) ? void 0 : t.isBlocking) || i) && !i
                        ? { status: F.N.BLOCKED, blockingPlaybackId: r }
                        : { status: F.N.UNBLOCKED };
                }
                callIfUnblocked(e, t) {
                    let { status: a, blockingPlaybackId: r } = this.checkPlaybackBlockingStatus(t);
                    return a === F.N.UNBLOCKED
                        ? e()
                        : (this.getPlayback(t).hooks.afterPlaybackCheckBlockingStatus.promise({ status: a, blockingPlaybackId: r }), Promise.resolve());
                }
                createPlayback(e, t) {
                    if (!this.playbacks.has(e)) {
                        let a = new F.VE({
                            id: e,
                            isBlocking: t.isBlocking || !1,
                            factory: t.factory,
                            entityProvider: t.entityProvider,
                            mediaPlayerParams: t.mediaPlayerParams,
                            playbackConfig: t.playbackConfig,
                            variables: t.variables,
                        });
                        (this.playbacks.set(e, a),
                            a.hooks.afterMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaStartPlaying.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.afterMediaResume.tapPromise('MusicPlaybackController', () => this.afterPlayHandler(a)),
                            a.hooks.beforeMediaResume.tapPromise('MusicPlaybackController', () => this.beforePlayHandler(a)),
                            a.hooks.beforeDestroy.tapPromise('MusicPlaybackController', () => this.beforeDestroyHandler(a)),
                            this.syncWithMainPlayback(a, t.syncVolumeWithMainPlayback));
                    }
                }
                syncWithMainPlayback(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (e.getId() === T.MAIN)
                        return void this.playbacksWaitingForSync.forEach((t) => {
                            this.syncVolume(e, t);
                        });
                    let a = this.playbacks.get(T.MAIN);
                    if (t && a) return void this.syncVolume(a, e);
                    t && !a && this.playbacksWaitingForSync.push(e);
                }
                syncVolume(e, t) {
                    (this.useExponentVolume ? e.state.playerState.exponentVolume : e.state.playerState.volume).onChange((e) => {
                        void 0 !== e && this.useExponentVolume ? t.setExponentVolume(e) : void 0 === e || this.useExponentVolume || t.setVolume(e);
                    });
                }
                constructor(e) {
                    ((0, L._)(this, 'activePlayback', new ei.cJ(null)),
                        (0, L._)(this, 'playbacks', new Map()),
                        (0, L._)(this, 'playbacksWaitingForSync', []),
                        (0, L._)(this, 'useExponentVolume', void 0),
                        (this.useExponentVolume = !!e.useExponentVolume));
                }
            }
            class ip {
                get state() {
                    return this.playbackController.getPlayback().state;
                }
                getState(e) {
                    return this.playbackController.getPlayback(e).state;
                }
                playContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.playContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof F.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return (a.hooks.afterError.promise(e), Promise.resolve());
                    }
                }
                setContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        let { contextData: r } = e,
                            i = this.factory.createContext({ data: r });
                        return this.playbackController.callIfUnblocked(
                            () =>
                                a.setContext({ context: i, entitiesData: e.entitiesData, loadContextMeta: e.loadContextMeta, queueParams: e.queueParams }).catch((e) => {
                                    e instanceof F.WT || a.hooks.afterError.promise(e);
                                }),
                            t,
                        );
                    } catch (e) {
                        return (a.hooks.afterError.promise(e), Promise.resolve());
                    }
                }
                restartContext(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.restartContext({ playAfterRestart: e.playAfterRestart, entitiesData: e.entitiesData, queueParams: e.queueParams }).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                play(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.play().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                stop(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.stop().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                pause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.pause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                resume(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.resume().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setProgress(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setProgress(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                setSpeed(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.setSpeed(e).catch((e) => (a.hooks.afterError.promise(e), 1)), t);
                }
                slideForward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideForward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                slideBackward(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.slideBackward(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                increaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.increaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                decreaseExponentVolume(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(() => a.decreaseExponentVolume(e).catch((e) => (a.hooks.afterError.promise(e), 0)), t);
                }
                moveForward(e, t) {
                    let a = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            a.moveForward(t).catch((e) => {
                                a.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                moveBackward(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.moveBackward().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                setEntityByIndex(e, t, a) {
                    let r = this.playbackController.getPlayback(t);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            r.setEntityByIndex(e, a).catch((e) => {
                                r.hooks.afterError.promise(e);
                            }),
                        t,
                    );
                }
                togglePause(e) {
                    let t = this.playbackController.getPlayback(e);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            t.togglePause().catch((e) => {
                                t.hooks.afterError.promise(e);
                            }),
                        e,
                    );
                }
                toggleShuffle(e) {
                    let t = this.playbackController.getPlayback(e);
                    try {
                        this.playbackController.callIfUnblocked(() => t.toggleShuffle(), e);
                    } catch (e) {
                        t.hooks.afterError.promise(e);
                    }
                }
                setShuffle(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setShuffle(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                updateFilterParams(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.updateFilterParams(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                bindPlayer(e) {
                    this.playbackController.getPlayback(e).bindPlayer();
                }
                unbindPlayer(e) {
                    this.playbackController.getPlayback(e).unbindPlayer();
                }
                setRepeatMode(e, t) {
                    let a = this.playbackController.getPlayback(t);
                    try {
                        this.playbackController.callIfUnblocked(() => a.setRepeatMode(e), t);
                    } catch (e) {
                        a.hooks.afterError.promise(e);
                    }
                }
                removeAndLoadEntities(e) {
                    let { positions: t, playbackId: a, silent: r } = e,
                        i = this.playbackController.getPlayback(a);
                    return this.playbackController.callIfUnblocked(
                        () =>
                            i.removeAndLoadEntities(t, r).catch((e) => {
                                i.hooks.afterError.promise(e);
                            }),
                        a,
                    );
                }
                remove(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.remove(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.removeByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                hide(e) {
                    let t = this.playbackController.getPlayback(e.playbackId);
                    this.playbackController.callIfUnblocked(() => {
                        if (Array.isArray(e.positions)) return void t.hide(e.positions, e.silent);
                        Array.isArray(e.entityIds) && t.hideByEntityIds(e.entityIds, e.silent);
                    }, e.playbackId);
                }
                inject(e) {
                    let { entitiesData: t, position: a, playbackId: r, silent: i, sourceContextData: s } = e,
                        n = this.playbackController.getPlayback(r),
                        o = s ? this.factory.createContext({ data: s }) : void 0;
                    this.playbackController.callIfUnblocked(() => n.inject({ entitiesData: t, position: a, silent: i, sourceContext: o }), r);
                }
                injectNext(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectNext({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                injectLast(e) {
                    let { entitiesData: t, playbackId: a, silent: r, sourceContextData: i } = e,
                        s = this.playbackController.getPlayback(a),
                        n = i ? this.factory.createContext({ data: i }) : void 0;
                    this.playbackController.callIfUnblocked(() => s.injectLast({ entitiesData: t, silent: r, sourceContext: n }), a);
                }
                registerMediaPlayer(e) {
                    let { mediaPlayerParams: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).registerMediaPlayer(t);
                }
                setVideoCoreContainer(e) {
                    let { container: t, playbackId: a } = e;
                    this.playbackController.getPlayback(a).setVideoCoreContainer(t);
                }
                destroyVideoCore(e) {
                    this.playbackController.getPlayback(e).destroyVideoCore();
                }
                destroy() {
                    return Promise.allSettled(this.playbackController.availablePlaybacks.map((e) => e.hooks.beforeDestroy.promise()));
                }
                constructor(e) {
                    if (
                        ((0, L._)(this, 'factory', void 0),
                        (0, L._)(this, 'playbackController', void 0),
                        (this.factory = e.factory),
                        (this.playbackController = e.playbackController),
                        this.playbackController.createPlayback(T.MAIN, {
                            factory: e.factory,
                            mediaPlayerParams: e.mediaPlayerParams,
                            entityProvider: e.entityProvider,
                            playbackConfig: e.playbackConfig,
                            variables: e.variables,
                        }),
                        e.plugins)
                    ) {
                        let t = this.playbackController.getPlayback(T.MAIN);
                        for (let a of e.plugins) a.apply({ playback: t, hooks: t.hooks });
                    }
                }
            }
            var im = a(53647),
                ig = a(72288),
                ib = a(9630);
            let iE = (0, N.PA)(() => {
                ((e) => {
                    var t;
                    let { sonataState: a, continueListen: r } = (0, ig.g)();
                    (0, O.useEffect)(() => {
                        var t, i, s, n, o, l, u, d;
                        if (!e || (!(null == (t = a.entityMeta) ? void 0 : t.isPodcast) && !(null == (i = a.entityMeta) ? void 0 : i.isAudiobook))) return;
                        let c = e.state.queueState.index.value;
                        e.state.queueState.order.value.length > 0 && 'number' == typeof c && r.saveTrackIndex(c);
                        let h = null == (s = e.state.currentContext.value) ? void 0 : s.data.meta;
                        if (
                            h &&
                            a.contextType &&
                            a.contextId &&
                            (r.saveTrack({ contextType: a.contextType, contextId: a.contextId, track: a.entityMeta }), a.entityMeta.isAudiobook)
                        ) {
                            if ('volumes' in h && h.volumes) {
                                let e,
                                    t = ((e, t) => {
                                        let a = !0;
                                        return (0, ay.A)(e).reduce((e, r) => {
                                            if (!r.durationMs) return e;
                                            if (r.id === t) {
                                                var i;
                                                return ((a = !1), e + ((null == (i = r.streamProgress) ? void 0 : i.endPositionSec) || 0));
                                            }
                                            return a ? e + r.durationMs / 1e3 : e;
                                        }, 0);
                                    })(h.volumes, a.entityMeta.id);
                                ('durationSec' in h && (e = h.durationSec),
                                    r.saveAlbumDuration(e),
                                    null == (l = r.trackTempStreamProgress) ||
                                        l.updateEndPositionSec((null == (o = r.track) || null == (n = o.streamProgress) ? void 0 : n.endPositionSec) || 0),
                                    null == (u = r.albumStreamProgress) || u.updateEndPositionSec(t));
                            }
                            'listeningFinished' in h && (null == (d = r.albumStreamProgress) || d.updateEverFinished(h.listeningFinished || !1));
                        }
                    }, [null == (t = a.entityMeta) ? void 0 : t.id, a.entityMeta, a.contextType, a.contextId, e, r]);
                })((0, ib.e)());
            });
            !(function (e) {
                ((e.PLAY = 'PLAY'), (e.PAUSE = 'PAUSE'), (e.MOVE_BACKWARD = 'MOVE_BACKWARD'), (e.MOVE_FORWARD = 'MOVE_FORWARD'));
            })(R || (R = {}));
            var iS = a(29993),
                i_ = a(85230),
                iA = a(44181);
            class iP {
                async getMediaSource(e) {
                    let { entity: t } = e,
                        a = '';
                    return (t instanceof iA.y && t.data.meta.src && (a = t.data.meta.src), Promise.resolve({ src: a }));
                }
            }
            var ik = a(91467);
            let iI = !1,
                iC = async () => {
                    if (iI) return;
                    let e = window.document.createElement('audio');
                    ((e.src =
                        'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWGluZwAAAA8AAAADAAAC2QBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqr///////////////////////////////////////////8AAAA8TEFNRTMuOThyBK8AAAAAAAAAADQgJAimTQABzAAAAtmIVtmVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//sQZAAO4AAAf4AAAAgAAA/wAAABAoQDLmAAACBYgGYMAAAE+oH///////0WKFRVzjKnAmjp+XX9qP//////p0USaKtMwpjZNhNFyEM61QAAOAP////////nfSpMQU1FMy45OC4yqqr/+xBEDI/wAAB/gAAACAxgGaMAAAEAAAH+AAAAIAAAP8AAAASqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqv/7EGQoD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'),
                        e.load());
                    try {
                        (await e.play(), e.pause(), (iI = !0));
                    } catch (e) {}
                },
                ix = async () => iC();
            var iT = a(3629),
                iR = a(4086),
                iD = a(41928),
                iw = a(51611),
                iN = a(65523),
                iO = a(12149),
                iM = a(47720);
            function iL(e) {
                let t = 'MobileSafari' === e.name || 'iOS' === e.OSFamily,
                    a = 'MacOS' === e.OSFamily && 'Safari' === e.name,
                    r = e.version ? Number(e.version.split('.')[0]) : void 0;
                return t
                    ? r && r >= 18
                        ? { transport: tO.o.ENCRAW, codecs: [tM.N.MP3, tM.N.AAC, tM.N.HEAAC, tM.N.AACMP4, tM.N.HEAACMP4] }
                        : { transport: tO.o.RAW, codecs: [tM.N.MP3] }
                    : a
                      ? r && r >= 18
                          ? { transport: tO.o.ENCRAW, codecs: [tM.N.MP3, tM.N.AAC, tM.N.HEAAC, tM.N.AACMP4, tM.N.HEAACMP4] }
                          : { transport: tO.o.ENCRAW, codecs: [tM.N.MP3, tM.N.AACMP4, tM.N.HEAACMP4] }
                      : { transport: tO.o.ENCRAW, codecs: [...r7.iy, ...r7.DM] };
            }
            var iF = (function (e) {
                    return ((e.HQ_PLUS = 'hqPlus'), (e.HQ = 'hq'), (e.NQ = 'nq'), (e.LQ = 'lq'), (e.PREVIEW = 'preview'), e);
                })({}),
                iq = a(35412),
                iU = a(97956),
                iB = a(20585),
                iV = a(7748),
                iW = a(78638),
                ij = a(34961),
                iK = a(53892),
                iY = a(15253),
                iG = a(72042);
            let iz = (e) => {
                let { audioLoader: t, children: a } = e;
                return ((0, O.use)(t), a);
            };
            var iQ = a(96706),
                iH = a(18052);
            let iX = (0, N.PA)(() => {
                let e = (0, iH.S)(),
                    t = (0, iW.i)(),
                    { sonataState: a } = (0, ig.g)();
                ((0, O.useEffect)(() => {
                    e.loadPresets();
                }, [e]),
                    (0, O.useEffect)(() => {
                        e.isAvailable &&
                            (null == t ? void 0 : t.equalizer.value) &&
                            (e.isEnabled
                                ? (e.currentPreset && t.equalizer.value.applyPreset((0, iQ.HO)(e.currentPreset)), t.equalizer.value.enable())
                                : t.equalizer.value.disable());
                    }, [e.currentPreset, e.isEnabled, null == t ? void 0 : t.equalizer, a.areCoresRegistered, e.isAvailable]));
            });
            var iJ = a(79070),
                iZ = a(70787),
                i$ = a(2058),
                i0 = a(44702);
            let i1 = (0, N.PA)((e) => {
                let { isYnisonDisabled: t } = e,
                    { experiments: a, slam: r } = (0, ig.g)(),
                    i = (0, iD.N)(),
                    s = (0, iG.M)(),
                    n = (0, iJ.L)(() => !!t || (void 0 === r.isOfflineModeEnabled ? (0, iZ.g)(i.get(iR.U2)) : r.isOfflineModeEnabled)),
                    o = a.checkExperiment(iU.z.WebNextYnisonActivityInterception, 'on'),
                    l = a.checkExperiment(iU.z.WebNextYnisonUseConnectionType, 'on'),
                    u = !o,
                    d = ((e) => {
                        let { isConnectionTypeEnabled: t, isShadow: a } = e;
                        if (t) return a ? w.Xt.SPECTATOR : w.Xt.STANDARD;
                    })({ isConnectionTypeEnabled: l, isShadow: u });
                ((0, O.useEffect)(() => {
                    null !== s && s.updateVariables({ connectionType: d, isShadow: u });
                }, [d, u, s]),
                    ((e) => {
                        let t = (0, iD.N)(),
                            { formatMessage: a } = (0, i$.A)(),
                            { experiments: r } = (0, ig.g)(),
                            i = (0, O.useRef)(null),
                            s = (0, iG.M)(),
                            n = r.checkExperiment(iU.z.WebNextYnisonNetworkMonitoring, 'on');
                        (0, O.useEffect)(() => {
                            if (null === s) return;
                            let e = a(
                                { id: 'ynison.desktop-device-title' },
                                {
                                    platformName: (0, i0.$)((0, iO.u)()),
                                    hostname: (() => {
                                        if (void 0 !== window.musicDesktop && M.NN) return window.musicDesktop.runtime.deviceHostname;
                                    })(),
                                },
                            );
                            s.updateDeviceInfo({ title: e });
                        }, [a, s]);
                        let { networkMonitorRef: o } = ((e) => {
                            let { isConnectionDisabled: t, isNetworkMonitoringEnabled: a, checkConnectionReasonRef: r } = e,
                                i = (0, iD.N)(),
                                s = (0, O.useRef)(null);
                            return (
                                (0, O.useEffect)(() => {
                                    if (t || !a) return;
                                    let e = i.get(iR.VR)();
                                    s.current = e;
                                    let n = e.subscribe((e) => {
                                        if ('online' === e) {
                                            var t;
                                            null == (t = r.current) || t.call(r);
                                        }
                                    });
                                    return () => {
                                        (n(), e.dispose(), s.current === e && (s.current = null));
                                    };
                                }, [r, i, t, a]),
                                { networkMonitorRef: s }
                            );
                        })({ isConnectionDisabled: e.isConnectionDisabled, isNetworkMonitoringEnabled: n, checkConnectionReasonRef: i });
                        ((0, O.useEffect)(() => {
                            if (null === s) return;
                            if (e.isConnectionDisabled) return void s.connector.disconnect();
                            let a = () => {
                                if (!document.hidden) {
                                    var e;
                                    (n && (null == (e = o.current) ? void 0 : e.getStatus()) === 'offline') ||
                                        s.connector.connect({ oauth: t.get(iR.QG).token, multiAuthUserId: t.get(iR.WA).getPassportUid() });
                                }
                            };
                            i.current = a;
                            let r = s.stateController.on(
                                w.p$.UPDATED,
                                (e) => {
                                    s.isActive || e.prevState.active_device_id_optional !== s.deviceConfig.info.device_id || a();
                                },
                                'App',
                            );
                            return (
                                document.addEventListener('visibilitychange', a),
                                a(),
                                () => {
                                    (r(), document.removeEventListener('visibilitychange', a), i.current === a && (i.current = null));
                                }
                            );
                        }, [t, n, o, e.isConnectionDisabled, e.isYnisonActivityInterceptionEnabled, s]),
                            ((e) => {
                                let t = (0, O.useRef)(0),
                                    { experiments: a } = (0, ig.g)(),
                                    r = (0, iG.M)(),
                                    i = a.checkExperiment(iU.z.WebNextYnisonInactiveTimerDesktop, 'on'),
                                    s = a.getExperiment(iU.z.WebNextYnisonInactiveTimerDesktop);
                                ((0, O.useEffect)(() => {
                                    if (!e.isEnabled || null === r) return;
                                    let { inactiveTimeoutMs: a, inactiveCheckIntervalMs: n } = (function (e) {
                                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                                a = { inactiveTimeoutMs: 6e5, inactiveCheckIntervalMs: 3e4 };
                                            try {
                                                var r, i, s, n;
                                                if (
                                                    e &&
                                                    (null == (i = t.value) || null == (r = i.metadata) ? void 0 : r.inactiveTimeoutSec) &&
                                                    (null == (n = t.value) || null == (s = n.metadata) ? void 0 : s.inactiveCheckIntervalSec)
                                                ) {
                                                    let e = Number(t.value.metadata.inactiveTimeoutSec),
                                                        a = Number(t.value.metadata.inactiveCheckIntervalSec);
                                                    if (!Number.isNaN(e) && !Number.isNaN(a)) return { inactiveTimeoutMs: 1e3 * e, inactiveCheckIntervalMs: 1e3 * a };
                                                }
                                                return a;
                                            } catch (e) {
                                                return a;
                                            }
                                        })(i, s),
                                        o = setInterval(() => {
                                            let e = r.isActive,
                                                i = Date.now() - t.current > a,
                                                s = r.stateController.currentState.player_state.status.paused;
                                            e && i && s && r.becomePassive();
                                        }, n);
                                    return () => {
                                        clearInterval(o);
                                    };
                                }, [e.isEnabled, i, s, r]),
                                    (0, O.useEffect)(() => {
                                        if (!e.isEnabled || null === r) return;
                                        let a = r.stateController.on(
                                            w.p$.UPDATED,
                                            (e) => {
                                                var a, i;
                                                ((null == (a = e.diff) ? void 0 : a.player_state) ||
                                                    ((null == (i = e.diff) ? void 0 : i.active_device_id_optional) && r.isActive)) &&
                                                    (t.current = Date.now());
                                            },
                                            'App',
                                        );
                                        return () => {
                                            a();
                                        };
                                    }, [e.isEnabled, r]));
                            })({ isEnabled: !e.isConnectionDisabled || !e.isYnisonActivityInterceptionEnabled }));
                    })({ isConnectionDisabled: n, isYnisonActivityInterceptionEnabled: o }),
                    (0, O.useEffect)(() => {
                        if (null === s || n || !o) return;
                        let e = s.stateController.on(
                            w.p$.UPDATED,
                            () => {
                                var e, t;
                                let a = (null == (t = s.stateController.fullState.diff.player_state) || null == (e = t.status) ? void 0 : e.paused) === !1;
                                !s.isActive && a && s.interceptActivity();
                            },
                            'App',
                        );
                        return () => {
                            e();
                        };
                    }, [n, o, s]));
            });
            var i3 = a(73596),
                i5 = a(5120),
                i8 = a(51814);
            let i2 = {
                [i8.f.CUSTOM]: {
                    id: i8.f.CUSTOM,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [i8.f.DEFAULT]: {
                    id: i8.f.DEFAULT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 0 },
                        { key: 170, value: 0 },
                        { key: 310, value: 0 },
                        { key: 600, value: 0 },
                        { key: 1e3, value: 0 },
                        { key: 3e3, value: 0 },
                        { key: 6e3, value: 0 },
                        { key: 12e3, value: 0 },
                        { key: 14e3, value: 0 },
                        { key: 16e3, value: 0 },
                    ],
                },
                [i8.f.CLASSICAL]: {
                    id: i8.f.CLASSICAL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -3.5 },
                        { key: 16e3, value: -4.5 },
                    ],
                },
                [i8.f.CLUB]: {
                    id: i8.f.CLUB,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 4 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [i8.f.DANCE]: {
                    id: i8.f.DANCE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -3.5 },
                        { key: 12e3, value: -3.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [i8.f.BASS_BOOST]: {
                    id: i8.f.BASS_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 4.5 },
                        { key: 310, value: 4.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -4 },
                        { key: 12e3, value: -5 },
                        { key: 14e3, value: -5.5 },
                        { key: 16e3, value: -5.5 },
                    ],
                },
                [i8.f.BASS_AND_TREBLE_BOOST]: {
                    id: i8.f.BASS_AND_TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -3.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [i8.f.TREBLE_BOOST]: {
                    id: i8.f.TREBLE_BOOST,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -4.5 },
                        { key: 170, value: -4.5 },
                        { key: 310, value: -4.5 },
                        { key: 600, value: -2 },
                        { key: 1e3, value: 1 },
                        { key: 3e3, value: 5.5 },
                        { key: 6e3, value: 8 },
                        { key: 12e3, value: 8 },
                        { key: 14e3, value: 8 },
                        { key: 16e3, value: 8 },
                    ],
                },
                [i8.f.SPEAKERS]: {
                    id: i8.f.SPEAKERS,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 5.5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: -1.5 },
                        { key: 1e3, value: -1 },
                        { key: 3e3, value: 0.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 6 },
                        { key: 16e3, value: 7 },
                    ],
                },
                [i8.f.LARGE_HALL]: {
                    id: i8.f.LARGE_HALL,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 5 },
                        { key: 170, value: 5 },
                        { key: 310, value: 2.5 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -2 },
                        { key: 6e3, value: -2 },
                        { key: 12e3, value: -2 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [i8.f.CONCERT]: {
                    id: i8.f.CONCERT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -2 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: 2 },
                        { key: 600, value: 2.5 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 2 },
                        { key: 12e3, value: 1 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 1 },
                    ],
                },
                [i8.f.PARTY]: {
                    id: i8.f.PARTY,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 3.5 },
                        { key: 170, value: 3.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -0.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 3.5 },
                        { key: 16e3, value: 3.5 },
                    ],
                },
                [i8.f.POP]: {
                    id: i8.f.POP,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: 2 },
                        { key: 310, value: 3.5 },
                        { key: 600, value: 4 },
                        { key: 1e3, value: 2.5 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: -1 },
                        { key: 12e3, value: -1 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [i8.f.REGGAE]: {
                    id: i8.f.REGGAE,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -0.5 },
                        { key: 170, value: -0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 3 },
                        { key: 6e3, value: 3 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: -0.5 },
                        { key: 16e3, value: -0.5 },
                    ],
                },
                [i8.f.ROCK]: {
                    id: i8.f.ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2 },
                        { key: 310, value: -2.5 },
                        { key: 600, value: -4 },
                        { key: 1e3, value: -1.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 5.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 5.5 },
                    ],
                },
                [i8.f.SKA]: {
                    id: i8.f.SKA,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: -1 },
                        { key: 170, value: -2 },
                        { key: 310, value: -2 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: 2 },
                        { key: 3e3, value: 2.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 4.5 },
                    ],
                },
                [i8.f.SOFT]: {
                    id: i8.f.SOFT,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 0.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -1 },
                        { key: 1e3, value: -0.5 },
                        { key: 3e3, value: 2 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 5.5 },
                        { key: 16e3, value: 6 },
                    ],
                },
                [i8.f.SOFT_ROCK]: {
                    id: i8.f.SOFT_ROCK,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 2 },
                        { key: 170, value: 2 },
                        { key: 310, value: 1 },
                        { key: 600, value: -0.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -2.5 },
                        { key: 6e3, value: -1.5 },
                        { key: 12e3, value: -0.5 },
                        { key: 14e3, value: 1 },
                        { key: 16e3, value: 4 },
                    ],
                },
                [i8.f.TECHNO]: {
                    id: i8.f.TECHNO,
                    preamp: 1,
                    frequencies: [
                        { key: 60, value: 4 },
                        { key: 170, value: 2.5 },
                        { key: 310, value: -0.5 },
                        { key: 600, value: -2.5 },
                        { key: 1e3, value: -2 },
                        { key: 3e3, value: -0.5 },
                        { key: 6e3, value: 4 },
                        { key: 12e3, value: 4.5 },
                        { key: 14e3, value: 4.5 },
                        { key: 16e3, value: 4 },
                    ],
                },
            };
            var i4 = a(32298);
            let i9 = i5.gK.model('EqualizerFrequency', { key: i5.gK.number, value: i5.gK.number }),
                i6 = i5.gK.model('EqualizerPreset', { id: i5.gK.enumeration(Object.values(i8.f)), preamp: i5.gK.number, frequencies: i5.gK.array(i9) }).actions((e) => ({
                    setPreamp(t) {
                        e.preamp = t;
                    },
                    setAmp(t, a) {
                        e.frequencies.forEach((e) => {
                            e.key === t && (e.value = a);
                        });
                    },
                })),
                i7 = i5.gK
                    .model('Equalizer', {
                        modal: i4.q,
                        isAvailable: i5.gK.optional(i5.gK.boolean, !1),
                        isEnabled: i5.gK.boolean,
                        currentPreset: i5.gK.optional(i6, i2[i8.f.DEFAULT]),
                        customPreset: i5.gK.optional(i6, i2[i8.f.CUSTOM]),
                    })
                    .actions((e) => ({
                        setIsAvailable(t) {
                            e.isAvailable = t;
                        },
                        setEnabled(t) {
                            let { localStorage: a } = (0, i5._$)(e);
                            e.isEnabled = t;
                            let r = a.get(iY.c.EqualizerConfig);
                            a.set(iY.c.EqualizerConfig, { ...r, isEnabled: t, version: '6' });
                        },
                        loadPresets() {
                            let { localStorage: t } = (0, i5._$)(e),
                                a = t.get(iY.c.EqualizerConfig);
                            if (
                                ((null == a ? void 0 : a.version) !== '6' && (t.remove(iY.c.EqualizerConfig), (a = null)),
                                a && ((e.isEnabled = a.isEnabled), a.customPreset && (e.customPreset = (0, i5.wg)(a.customPreset)), a.lastPresetId))
                            ) {
                                if (a.lastPresetId === i8.f.CUSTOM) {
                                    e.currentPreset = (0, i5.o8)(e.customPreset);
                                    return;
                                }
                                let t = i2[a.lastPresetId];
                                e.currentPreset = i6.create(t);
                            }
                        },
                        changeCurrentPreset(t) {
                            let { localStorage: a } = (0, i5._$)(e),
                                r = a.get(iY.c.EqualizerConfig);
                            if ((a.set(iY.c.EqualizerConfig, { ...r, lastPresetId: t, version: '6' }), t === i8.f.CUSTOM)) {
                                e.currentPreset = (0, i5.o8)(e.customPreset);
                                return;
                            }
                            let i = i2[t];
                            e.currentPreset = i6.create(i);
                        },
                        changePreamp(t) {
                            let { localStorage: a } = (0, i5._$)(e),
                                r = (0, i5.dV)(e.currentPreset);
                            ((e.customPreset = (0, i5.wg)({ ...r, id: i8.f.CUSTOM })), e.customPreset.setPreamp(t), (e.currentPreset = (0, i5.o8)(e.customPreset)));
                            let i = a.get(iY.c.EqualizerConfig);
                            a.set(iY.c.EqualizerConfig, { ...i, customPreset: (0, iQ.HO)(e.customPreset), lastPresetId: i8.f.CUSTOM, version: '6' });
                        },
                        changeAmp(t, a) {
                            let { localStorage: r } = (0, i5._$)(e),
                                i = (0, i5.dV)(e.currentPreset);
                            ((e.customPreset = (0, i5.wg)({ ...i, id: i8.f.CUSTOM })), e.customPreset.setAmp(t, a), (e.currentPreset = (0, i5.o8)(e.customPreset)));
                            let s = r.get(iY.c.EqualizerConfig);
                            r.set(iY.c.EqualizerConfig, { ...s, customPreset: (0, iQ.HO)(e.customPreset), lastPresetId: i8.f.CUSTOM, version: '6' });
                        },
                    }));
            var se = a(16818);
            let st = (e) => {
                    let { children: t } = e,
                        a = (0, iW.i)(),
                        r = (0, se.Y)(),
                        [i] = (0, O.useState)(() => i7.create({ isEnabled: !1, modal: {} }, r));
                    return (
                        (0, O.useEffect)(() => {
                            let e =
                                null == a
                                    ? void 0
                                    : a.equalizer.onChange((e) => {
                                          i.setIsAvailable(!!e);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [i, null == a ? void 0 : a.equalizer]),
                        (0, D.jsx)(iH.i.Provider, { value: i, children: t })
                    );
                },
                sa = !1,
                sr = new Set([T.MAIN, iB.V.TRAILER, iB.V.PROMO_LANDING, iB.V.CLIP]);
            var si = a(28692);
            let ss = null,
                sn = null,
                so = null,
                sl = null,
                su = null,
                sd = null,
                sc = null,
                sh = null,
                sv = null,
                sy = null,
                sp = null,
                sm = [iY.c.YmPlayerQuality, iY.c.YmPlayerShuffle, iY.c.YmPlayerPrevVolume, iY.c.YmPlayerVolume, iY.c.YmPlayerRepeatMode, iY.c.CrossFadeMode],
                sf = (e) => {
                    var t;
                    let { children: r, quality: i, withPromoLandingPlayback: s } = e,
                        n = (0, iD.N)(),
                        o = (0, iG.M)(),
                        {
                            sonataState: l,
                            experiments: u,
                            library: d,
                            trailer: c,
                            user: h,
                            advert: v,
                            settings: y,
                            album: p,
                            albumCPA: { isPlusCPAPlayerBarEnabled: m },
                            freeAccess: f,
                        } = (0, ig.g)(),
                        g = (0, ij.s)(iK.n.PROMOLANDING, { throwOnAbsence: !1 }),
                        b = (0, iN.U)(),
                        E = n.get(iR.oo),
                        S = n.get(iR.QG),
                        _ = n.get(iR.V4),
                        A = n.get(iR.qt),
                        P = (0, M.Ef)(_, (0, iO.u)()),
                        k = n.get(iR.P0),
                        { language: I } = (0, iw.h)(),
                        C = (0, ik.r)(),
                        x = (function () {
                            let { experiments: e } = (0, ig.g)();
                            return (0, iS.c)(() => {
                                var t, a, r;
                                let i = null == (t = e.getExperiment(iU.z.ABTestIds)) ? void 0 : t.group,
                                    { testids: s } = null != (r = null == (a = window.Ya.YaspAudioElement) ? void 0 : a.getExpConfig()) ? r : {};
                                return (0, iq.Vb)(s, i);
                            });
                        })(),
                        T = u.checkExperiment(iU.z.WebNextCrossMediaPlayer, 'on'),
                        N = !u.checkExperiment(iU.z.WebNextYnisonEnabled, 'on') || !h.isAuthorized || f.isFreeUser,
                        L = h.isAuthorized && !f.isFreeWebUser,
                        q = k.get(iT.qV),
                        U = k.get(iT.W4),
                        B = !!q && !!E.get(iY.c.EnableMetricsPluginDebugMode),
                        W = !!q && !!E.get(iY.c.EnableYnisonMetricsDebugMode),
                        j = (0, O.useMemo)(() => (ss || (ss = new r3(i)), ss), [i]),
                        K = (() => {
                            let e = (0, iD.N)(),
                                { experiments: t } = (0, ig.g)(),
                                a = e.get(iR.V4),
                                r = a.player.yaspExpName,
                                i = a.player.yaspCandidateVersion;
                            return r && i && t.checkExperiment(r, 'on') ? i : a.player.yaspVersionStable;
                        })(),
                        Y = (() => {
                            let e = (0, iD.N)(),
                                { experiments: t } = (0, ig.g)(),
                                {
                                    player: { yaspSourceLimit: a },
                                } = e.get(iR.V4);
                            try {
                                var r;
                                let e = t.checkExperiment(iU.z.WebNextYaspSourceLimit, 'on'),
                                    i = t.getExperiment(iU.z.WebNextYaspSourceLimit);
                                if (e && (null == i || null == (r = i.value.metadata) ? void 0 : r.yaspSourceLimit)) {
                                    let e = Number(i.value.metadata.yaspSourceLimit);
                                    if (!Number.isNaN(e)) return e;
                                }
                                return a;
                            } catch (e) {
                                return a;
                            }
                        })(),
                        G = (() => {
                            let { experiments: e } = (0, ig.g)();
                            try {
                                var t, a;
                                if (!e.isExperimentActive(iU.z.WebNextYnisonRestoreMusicAsVibe)) return { enabled: !1 };
                                let r = Number(
                                    null == (a = e.getExperiment(iU.z.WebNextYnisonRestoreMusicAsVibe)) || null == (t = a.value.metadata)
                                        ? void 0
                                        : t.stateAgeThresholdMin,
                                );
                                return { enabled: !0, stateAgeThresholdMin: r };
                            } catch (e) {
                                return { enabled: !1 };
                            }
                        })(),
                        z = y.browserInfo,
                        Q = 'Safari' !== z.name && 'iOS' !== z.OSFamily,
                        H = (null == z ? void 0 : z.isTouch) && m(p.id, null == (t = p.meta) ? void 0 : t.isNonMusic),
                        X = (0, O.useMemo)(
                            () =>
                                so ||
                                (so = new t_({
                                    useAnalyser: Q,
                                    useEqualizer: Q,
                                    useFade: !1,
                                    useCrossFade: T,
                                    crossFadeConfig: { useVolumeForAudioEffect: !Q, useWorker: !!window.Worker },
                                })),
                            [Q, T, Q],
                        ),
                        J = (0, O.useMemo)(() => {
                            if (null !== sl) return sl;
                            let e = n.get(iR.gd);
                            return (sl = new tP({
                                advertModule: C,
                                afterTrackResource: n.get(iR.EN),
                                adsResource: e,
                                variables: {
                                    get enabled() {
                                        return !h.hasPlus;
                                    },
                                },
                            }));
                        }, [C, n, h.hasPlus]),
                        Z = (0, O.useMemo)(() => {
                            if (sd) return sd;
                            let e = n.get(iR.qT),
                                { transport: t, codecs: a } = iL(z);
                            return (sd = new id({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    secretKey: P,
                                    mediaConfigController: j,
                                    transport: t,
                                    codecs: a,
                                    variables: {
                                        get fromPromoLanding() {
                                            return !0;
                                        },
                                    },
                                    mediaSourceTtlMs: _.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: _.player.vhMediaProvider,
                            }));
                        }, [z, _.player.configVariablesPromoLandingPlayback.strmUrlsTtlMs, _.player.vhMediaProvider, n, j, P]),
                        $ = (0, O.useMemo)(() => {
                            if (su) return su;
                            let e = n.get(iR.qT),
                                t = n.get(iR.DV),
                                { transport: a, codecs: r } = iL(z);
                            return (su = new id({
                                getFileInfoProviderParams: {
                                    resource: e,
                                    resourcesFileInfoResource: t,
                                    secretKey: P,
                                    mediaConfigController: j,
                                    transport: a,
                                    codecs: r,
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return u.checkExperiment(iU.z.WebNextTracksPreload, 'on');
                                        },
                                        get isResourcesFileInfoEnabled() {
                                            return u.checkExperiment(iU.z.WebNextResourcesFileInfo, 'on');
                                        },
                                    },
                                    mediaSourceTtlMs: _.player.configVariablesMainPlayback.strmUrlsTtlMs,
                                },
                                vhMediaProviderParams: _.player.vhMediaProvider,
                            }));
                        }, [z, _.player.configVariablesMainPlayback.strmUrlsTtlMs, _.player.vhMediaProvider, n, u, j, P]),
                        ee = (0, O.useMemo)(() => sc || (sc = new iy({ useExponentVolume: !0 })), []);
                    (0, O.useEffect)(() => {
                        C && ee && (C.createAudioAdvertPlayback({ playbackController: ee }), v.setIsAdvertPlaybackCreated(!0));
                    }, [v, C, ee]);
                    let et = (0, O.useMemo)(() => (sh ? sh : (sh = new iv({ tracksResource: n.get(iR.Oo), clipsResource: n.get(iR.jQ) }))), [n]),
                        er = (0, O.useMemo)(() => {
                            if (sv) return sv;
                            let e = n.get(iR.Oo),
                                t = n.get(iR._1),
                                a = n.get(iR.ok),
                                r = n.get(iR.qN),
                                i = n.get(iR.tz),
                                s = n.get(iR.O9),
                                o = u.checkExperiment(iU.z.WebNextStoreDeferredVibeFeedbacks, 'on'),
                                l = u.checkExperiment(iU.z.WebNextDeleteDeferredVibeFeedbacksStore, 'on');
                            return (sv = new e9({
                                contextFactoryParams: {
                                    logger: b,
                                    onSessionDiagnosticEvent: (e, t) => {
                                        null == sy || sy.recordSessionDiagnosticEvent(e, t);
                                    },
                                    deferredFeedbacksStore: o || l ? new ti() : void 0,
                                    variables: {
                                        vibe: {
                                            useWaveQueue: !0,
                                            get sendFeedbacksWithTracks() {
                                                return u.checkExperiment(iU.z.WebNextSendVibeFeedbacksWithTracks, 'on');
                                            },
                                            get useTerminated() {
                                                return u.checkExperiment(iU.z.WebNextVibeTerminated, 'on');
                                            },
                                            multipleSessions: { sessionLifeTimeMin: _.player.sessionLifeTimeMin },
                                            get batchFeedbacksOnVibeSettingsChange() {
                                                return u.checkExperiment(iU.z.WebNextBatchFeedbacksOnVibeSettingsChange, 'on');
                                            },
                                            get sendRadioStartedOnVibeSettingsChange() {
                                                return u.checkExperiment(iU.z.WebNextSendRadioStartedOnVibeSettingsChange, 'on');
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return u.checkExperiment(iU.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                            get aiContentReductionEnabled() {
                                                return h.settings.aiContentReductionEnabled;
                                            },
                                            get enableStoredDeferredFeedbacks() {
                                                return o;
                                            },
                                            get shouldDeleteDeferredFeedbacksObjectStore() {
                                                return l;
                                            },
                                        },
                                    },
                                    tracksResource: e,
                                    usersResource: t,
                                    rotorResource: a,
                                    playlistResource: r,
                                    albumsResource: i,
                                    artistsResource: s,
                                },
                                entityFactoryParams: { likeStore: d },
                            }));
                        }, [_.player.sessionLifeTimeMin, n, u, d, b, h]),
                        ei = (0, O.useMemo)(() => sp || (sp = new tR({ telemetryResource: n.get(iR.LC), ..._.player.telemetry })), [n, _.player.telemetry]),
                        es = (0, O.useMemo)(() => {
                            if (!$ || !ee || !et || !er || !o) return null;
                            if (sn) return sn;
                            let e = n.get(iR.A4)({ credentials: 'include' }),
                                { configVariablesMainPlayback: t, configVariablesTrailerPlayback: a } = _.player,
                                r = n.get(iR.UB),
                                i = n.get(iR.Tq),
                                s = [new tD(r)],
                                d = n.get(iR.mD);
                            if (u.checkExperiment(iU.z.WebNextOtelTechMetrics, 'on') && d) {
                                let e = n.get(iR.S1);
                                s.push(new tw(e));
                            } else i && s.push(new tN(i));
                            let v = new t7({
                                mediaConfigController: j,
                                waveDuplicateDiagnostics: {
                                    getPuid: () => {
                                        let e = n.get(iR.WA).getPassportUid();
                                        return void 0 === e ? void 0 : String(e);
                                    },
                                },
                                transports: s,
                                variables: {
                                    get enableDebugMode() {
                                        return B;
                                    },
                                },
                            });
                            sy = v;
                            let y = [
                                new ar({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return L;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return !0;
                                        },
                                    },
                                }),
                                new ai(),
                                new as(),
                                new aX({
                                    httpClient: e,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, i_._)(),
                                                device: (0, iM.h)(),
                                                language: I,
                                                oauth: S.token,
                                                get multiAuthUserId() {
                                                    return n.get(iR.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: A,
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return u.checkExperiment(iU.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        enableHeartbeats: !0,
                                        get shouldDeletePlaysObjectStore() {
                                            return u.checkExperiment(iU.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enableRemoveDuplicatePlays() {
                                            return u.checkExperiment(iU.z.WebNextRemoveDuplicatePlays, 'on');
                                        },
                                        get enableSendFadeFieldsInPlays() {
                                            return u.checkExperiment(iU.z.WebNextEnableSendFadeFieldsInPlays, 'on');
                                        },
                                        get enableSendOriginalContextInVibePlays() {
                                            return u.checkExperiment(iU.z.WebNextEnableSendOriginalContextInVibePlays, 'on');
                                        },
                                    },
                                    isCrossfadeEnabled: j.isCrossfadeEnabled,
                                    store: new a0(),
                                }),
                                new a5({ browserName: z.name, browserVersion: z.version }),
                                new a8({ logger: b }),
                                new a2(j.quality),
                                new a6({
                                    httpClient: e,
                                    streamsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, i_._)(),
                                                device: (0, iM.h)(),
                                                language: I,
                                                oauth: S.token,
                                                get multiAuthUserId() {
                                                    return n.get(iR.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: A,
                                    },
                                    variables: {
                                        get isEnabled() {
                                            return h.isAuthorized;
                                        },
                                    },
                                }),
                                new rt({
                                    variables: {
                                        get enabled() {
                                            return u.checkExperiment(iU.z.WebNextErrorAutoSkip, 'on');
                                        },
                                    },
                                }),
                                v,
                                new rn({
                                    mediaProvider: $,
                                    mediaConfigController: j,
                                    config: {
                                        entitiesToPreloadStrmUrlsCount: t.entitiesToPreloadStrmUrlsCount,
                                        entitiesToPreloadSourceCount: t.entitiesToPreloadSourceCount,
                                        preloadedSourcesMaxCount: t.preloadedSourcesMaxCount,
                                        strmUrlsTtlMs: t.strmUrlsTtlMs,
                                        bufferGoal: t.bufferGoal,
                                    },
                                    variables: {
                                        get isMediaSourcePreloadEnabled() {
                                            return u.checkExperiment(iU.z.WebNextTracksPreload, 'on');
                                        },
                                    },
                                }),
                                new ro({
                                    onTrailerPaused: () => {
                                        c.setIsManuallyPaused(!0);
                                    },
                                    onTrailerPlaying: () => {
                                        c.setIsManuallyPaused(!1);
                                    },
                                    playbackController: ee,
                                    trailerPlaybackParams: {
                                        id: iB.V.TRAILER,
                                        plugins: [
                                            new t_({ useFade: Q, useSmartPreview: !0 }),
                                            new ar({
                                                variables: {
                                                    get isAutoflowEnabled() {
                                                        return !1;
                                                    },
                                                    get isVibeRepeatEnabled() {
                                                        return !1;
                                                    },
                                                },
                                            }),
                                            new a8({ logger: b }),
                                            new as(),
                                            new t7({
                                                mediaConfigController: j,
                                                transports: s,
                                                variables: {
                                                    get enableDebugMode() {
                                                        return B;
                                                    },
                                                },
                                            }),
                                            new aX({
                                                httpClient: e,
                                                playsResourceConfig: {
                                                    params: {
                                                        common: {
                                                            client: (0, i_._)(),
                                                            device: (0, iM.h)(),
                                                            language: I,
                                                            oauth: S.token,
                                                            get multiAuthUserId() {
                                                                return n.get(iR.WA).getPassportUid();
                                                            },
                                                        },
                                                    },
                                                    prefixUrl: A,
                                                },
                                                variables: {
                                                    get disableSendPlaysOnTrackStart() {
                                                        return u.checkExperiment(iU.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                                    },
                                                    enableHeartbeats: !0,
                                                    get shouldDeletePlaysObjectStore() {
                                                        return u.checkExperiment(iU.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                                    },
                                                },
                                                storePlaysProgressIntervalMs: 5e3,
                                                store: new a0(),
                                            }),
                                            new ru(),
                                        ],
                                        factory: er,
                                        entityProvider: et,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: a.mediaElementErrorReloadCount,
                                            windowSize: a.windowSize,
                                            setupQueueWindowSize: a.setupQueueWindowSize,
                                        },
                                    },
                                }),
                                J,
                                new ru(),
                            ];
                            if ((X && y.push(X), !N)) {
                                o.updateVariables({ enableDebugMode: W });
                                let e = new rH({
                                        onQueueDiagnosticEvent: v.recordYnisonQueueDiagnosticEvent,
                                        factory: er,
                                        deviceConfig: o.deviceConfig,
                                        ynisonStateController: o.stateController,
                                        fallbackTypesQueueToVibe: [w.lv.UNSPECIFIED, w.lv.FM_RADIO, w.lv.VIDEO_WAVE, w.lv.LOCAL_TRACKS],
                                        variables: {
                                            get shouldApplyState() {
                                                return l.shouldApplyYnisonState;
                                            },
                                            get enableSendLimitedEntityListToYnison() {
                                                return u.checkExperiment(iU.z.WebNextEnableSendLimitedEntityListToYnison, 'on');
                                            },
                                            useWaveQueue: !0,
                                            get sendCorrectRotorQueueParam() {
                                                return u.checkExperiment(iU.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                            get restoreMusicAsVibe() {
                                                return G;
                                            },
                                        },
                                    }),
                                    t = new rZ({
                                        deviceConfig: o.deviceConfig,
                                        ynisonStateController: o.stateController,
                                        variables: {
                                            get shouldApplyState() {
                                                return l.shouldApplyYnisonState;
                                            },
                                        },
                                    });
                                (y.push(t), y.push(e));
                            }
                            return (
                                y.push(
                                    new r0({
                                        factory: er,
                                        platform: 'desktop',
                                        variables: {
                                            get enabled() {
                                                return L;
                                            },
                                            get sendCorrectRotorQueueParam() {
                                                return u.checkExperiment(iU.z.WebNextCorrectRotorQueueParam, 'on');
                                            },
                                        },
                                    }),
                                ),
                                ei &&
                                    y.push(
                                        new r1({
                                            telemetry: ei,
                                            get puid() {
                                                return h.puid;
                                            },
                                            yaspVersion: K,
                                            getTelemetryTestIds: x,
                                        }),
                                    ),
                                (sn = new ip({
                                    factory: er,
                                    playbackController: ee,
                                    plugins: y,
                                    entityProvider: et,
                                    playbackConfig: {
                                        mediaElementErrorReloadCount: t.mediaElementErrorReloadCount,
                                        windowSize: t.windowSize,
                                        setupQueueWindowSize: t.setupQueueWindowSize,
                                    },
                                    variables: {
                                        get isSkipDebounceEnabled() {
                                            return u.checkExperiment(iU.z.WebNextEnableSkipDebounce, 'on');
                                        },
                                        get enableBurstDebounceDebugLogging() {
                                            return !!q && !!E.get(iY.c.EnableBurstDebounceDebugMode);
                                        },
                                    },
                                }))
                            );
                        }, [
                            $,
                            A,
                            ee,
                            et,
                            er,
                            n,
                            _,
                            I,
                            S.token,
                            z.name,
                            z.version,
                            b,
                            j,
                            Q,
                            J,
                            X,
                            N,
                            ei,
                            L,
                            u,
                            h.isAuthorized,
                            h.puid,
                            B,
                            W,
                            c,
                            l.shouldApplyYnisonState,
                            G,
                            K,
                            x,
                            q,
                            E,
                            o,
                        ]);
                    (((e) => {
                        let t = (0, O.useCallback)(
                            (t) => {
                                switch (t) {
                                    case R.PLAY:
                                    case R.PAUSE:
                                        null == e || e.togglePause();
                                        break;
                                    case R.MOVE_BACKWARD:
                                        null == e || e.moveBackward();
                                        break;
                                    case R.MOVE_FORWARD:
                                        null == e || e.moveForward();
                                }
                            },
                            [e],
                        );
                        (0, O.useEffect)(() => {
                            var e;
                            return null == (e = window.musicDesktop) ? void 0 : e.player.onAction(t);
                        }, [t]);
                    })(es),
                        ((e) => {
                            let {
                                    mediaProvider: t,
                                    playbackController: a,
                                    factory: r,
                                    entityProvider: i,
                                    mediaConfigController: s,
                                    isEnabled: n,
                                    isMetricsDebugEnabled: o,
                                    musicExternalApiPrefixUrl: l,
                                    browserInfo: u,
                                } = e,
                                d = (0, iD.N)(),
                                c = (0, iN.U)(),
                                { experiments: h } = (0, ig.g)(),
                                { language: v } = (0, iw.h)();
                            if (!n || !a || !r || !t || !i || !s || sa) return;
                            let y = d.get(iR.QG),
                                p = d.get(iR.V4),
                                m = d.get(iR.A4)({ credentials: 'include' }),
                                { configVariablesPromoLandingPlayback: f } = p.player,
                                g = d.get(iR.UB),
                                b = d.get(iR.Tq),
                                E = [new tD(g)];
                            (b && E.push(new tN(b)),
                                null == a ||
                                    a.createPlayback(iB.V.PROMO_LANDING, {
                                        factory: r,
                                        entityProvider: i,
                                        playbackConfig: {
                                            mediaElementErrorReloadCount: f.mediaElementErrorReloadCount,
                                            windowSize: f.windowSize,
                                            setupQueueWindowSize: f.setupQueueWindowSize,
                                        },
                                    }));
                            let S = a.getPlayback(iB.V.PROMO_LANDING);
                            for (let e of [
                                new ar({
                                    variables: {
                                        get isAutoflowEnabled() {
                                            return !1;
                                        },
                                        get isVibeRepeatEnabled() {
                                            return !1;
                                        },
                                    },
                                }),
                                new ai(),
                                new as(),
                                new aX({
                                    httpClient: m,
                                    playsResourceConfig: {
                                        params: {
                                            common: {
                                                client: (0, i_._)(),
                                                device: (0, iM.h)(),
                                                language: v,
                                                oauth: y.token,
                                                get multiAuthUserId() {
                                                    return d.get(iR.WA).getPassportUid();
                                                },
                                            },
                                        },
                                        prefixUrl: l,
                                    },
                                    variables: {
                                        get disableSendPlaysOnTrackStart() {
                                            return h.checkExperiment(iU.z.WebNextDisableSendPlaysOnTrackStart, 'on');
                                        },
                                        enableHeartbeats: !0,
                                        get shouldDeletePlaysObjectStore() {
                                            return h.checkExperiment(iU.z.WebNextDeleteIndexedDbPlaysStore, 'on');
                                        },
                                        get enablePartialPlayReporting() {
                                            return !0;
                                        },
                                    },
                                    store: new a0(),
                                }),
                                new a5({ browserName: u.name, browserVersion: u.version }),
                                new a8({ logger: c }),
                                new t7({
                                    mediaConfigController: s,
                                    transports: E,
                                    variables: {
                                        get enableDebugMode() {
                                            return o;
                                        },
                                    },
                                }),
                                new ru(),
                            ])
                                e.apply({ playback: S, hooks: S.hooks });
                            sa = !0;
                        })({
                            isEnabled: !!s,
                            playbackController: ee,
                            entityProvider: et,
                            factory: er,
                            mediaConfigController: j,
                            isNonSafariBrowser: Q,
                            isMetricsDebugEnabled: B,
                            musicExternalApiPrefixUrl: A,
                            browserInfo: z,
                            mediaProvider: Z,
                        }),
                        ((e) => {
                            let { sonata: t, isEnabled: a } = e;
                            (0, O.useEffect)(() => {
                                a &&
                                    t &&
                                    ((window.sonataState = t.state),
                                    Object.defineProperty(window, 'sonataPlaybackStates', {
                                        configurable: !0,
                                        enumerable: !0,
                                        get() {
                                            let e = {};
                                            for (let a of t.playbackController.availablePlaybacks) {
                                                let t = a.getId();
                                                sr.has(t) && (e[t] = a.state);
                                            }
                                            return e;
                                        },
                                    }));
                            }, [a, t]);
                        })({ sonata: es, isEnabled: !!U }),
                        (0, O.useEffect)(() => {
                            es &&
                                $ &&
                                Z &&
                                ei &&
                                !l.areCoresRegistered &&
                                (Promise.all([a.e(4246), a.e(2551), a.e(9200)])
                                    .then(a.bind(a, 29200))
                                    .then((e) => {
                                        let { YaspCoreAdapter: t, YaspLoader: a, HlsCoreAdapter: r, HtmlAudioCoreAdapter: i } = e,
                                            n = new a({ logger: b, yaspTelemetry: ei, getTelemetryTestIds: x }),
                                            o = Q ? new r({ hlsErrorRetryLimit: _.player.hlsErrorRetryLimit }) : new i();
                                        (es.registerMediaPlayer({
                                            mediaPlayerParams: { core: o, mediaProvider: $, mediaPlayerType: 'audioMediaPlayer', contentType: V.e.HLS },
                                        }),
                                            C &&
                                                es.registerMediaPlayer({
                                                    mediaPlayerParams: {
                                                        core: new i(),
                                                        mediaProvider: new iP(),
                                                        mediaPlayerType: 'audioMediaPlayer',
                                                        contentType: V.e.AUDIO,
                                                    },
                                                    playbackId: iB.V.ADVERT,
                                                }),
                                            es.registerMediaPlayer({
                                                mediaPlayerParams: {
                                                    core: new i(),
                                                    mediaProvider: $,
                                                    mediaPlayerType: 'audioMediaPlayer',
                                                    contentType: V.e.DOWNLOADED_AUDIO,
                                                },
                                            }),
                                            n
                                                .loadYasp({
                                                    version: K,
                                                    sourceLimit: Y,
                                                    retryDelayMs: _.player.yaspLoadRetryDelayMs,
                                                    perfLogUrl: _.player.telemetry.perfLogUrl,
                                                })
                                                .then(() => {
                                                    let e,
                                                        a = n.getYaspAudioElement();
                                                    ((e = window.Worker ? new tc() : new td()),
                                                        T
                                                            ? es.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'crossMediaPlayer',
                                                                      mediaProvider: $,
                                                                      ticker: e,
                                                                      contentType: V.e.AUDIO,
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: ei }),
                                                                      additionalCore: new t({ yaspAudioElement: a, yaspTelemetry: ei }),
                                                                      config: { useVolumeForAudioEffect: !Q },
                                                                      variables: {
                                                                          get enableDebugLogging() {
                                                                              return !!q && !!E.get(iY.c.EnableCrossfadeDebugMode);
                                                                          },
                                                                      },
                                                                      isEnabled: j.isCrossfadeEnabled,
                                                                  },
                                                              })
                                                            : es.registerMediaPlayer({
                                                                  mediaPlayerParams: {
                                                                      mediaPlayerType: 'audioMediaPlayer',
                                                                      core: new t({ yaspAudioElement: a, yaspTelemetry: ei }),
                                                                      mediaProvider: $,
                                                                      contentType: V.e.AUDIO,
                                                                  },
                                                              }),
                                                        es.registerMediaPlayer({
                                                            mediaPlayerParams: {
                                                                core: new t({ yaspAudioElement: a }),
                                                                mediaProvider: $,
                                                                mediaPlayerType: 'audioMediaPlayer',
                                                                contentType: V.e.AUDIO,
                                                            },
                                                            playbackId: iB.V.TRAILER,
                                                        }),
                                                        s &&
                                                            Z &&
                                                            es.registerMediaPlayer({
                                                                mediaPlayerParams: {
                                                                    core: new t({ yaspAudioElement: a }),
                                                                    mediaProvider: Z,
                                                                    mediaPlayerType: 'audioMediaPlayer',
                                                                    contentType: V.e.AUDIO,
                                                                },
                                                                playbackId: iB.V.PROMO_LANDING,
                                                            }));
                                                })
                                                .catch((e) => {
                                                    b.error('[SonataProvider] Error trying to register media players', { error: e });
                                                }));
                                    }),
                                l.setCoresAsRegistered(!0));
                        }, [
                            C,
                            _.player.hlsErrorRetryLimit,
                            q,
                            K,
                            Y,
                            Q,
                            b,
                            $,
                            Z,
                            es,
                            l,
                            s,
                            n,
                            l.areCoresRegistered,
                            E,
                            ei,
                            T,
                            x,
                            _.player.yaspSourceLimit,
                            _.player.yaspLoadRetryDelayMs,
                            _.player.telemetry.perfLogUrl,
                            j.isCrossfadeEnabled,
                        ]),
                        (0, O.useEffect)(() => {
                            a.e(5965)
                                .then(a.bind(a, 35965))
                                .then((e) => {
                                    let { loadVHPlayerSdk: t, VHPlayerCoreAdapter: a } = e;
                                    if (!es || !$ || !ee || !et || !er) return;
                                    let r = new a({ hideAds: !0 }),
                                        { configVariablesMainPlayback: i } = _.player,
                                        s = async () =>
                                            t(_.player.vhPlayerSdkVersion)
                                                .then(() => {
                                                    ee.createPlayback(iB.V.CLIP, {
                                                        mediaPlayerParams: { core: r, mediaProvider: $, mediaPlayerType: 'videoMediaPlayer', contentType: V.e.CLIP },
                                                        entityProvider: et,
                                                        factory: er,
                                                        playbackConfig: {
                                                            mediaElementErrorReloadCount: i.mediaElementErrorReloadCount,
                                                            windowSize: i.windowSize,
                                                            setupQueueWindowSize: i.setupQueueWindowSize,
                                                        },
                                                        syncVolumeWithMainPlayback: !0,
                                                    });
                                                    let e = ee.getPlayback(iB.V.CLIP);
                                                    for (let t of [
                                                        new ar({
                                                            variables: {
                                                                get isAutoflowEnabled() {
                                                                    return !1;
                                                                },
                                                                get isVibeRepeatEnabled() {
                                                                    return !1;
                                                                },
                                                            },
                                                        }),
                                                        new as(),
                                                    ])
                                                        t.apply({ playback: e, hooks: e.hooks });
                                                    l.setIsVHCoreRegistered(!0);
                                                })
                                                .catch(() => {
                                                    setTimeout(s, 1e3);
                                                });
                                    s();
                                });
                        }, [_.player, et, er, $, ee, es, l]),
                        ((e) => {
                            let { sonata: t } = e,
                                a = (0, iS.c)((e) => {
                                    var t;
                                    let { isPlaying: a, canMoveBackward: r, canMoveForward: i } = e;
                                    null == (t = window.musicDesktop) || t.player.reportState({ isPlaying: a, canMoveBackward: r, canMoveForward: i });
                                });
                            (0, O.useEffect)(() => {
                                let e,
                                    r,
                                    i =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.status.onChange((e) => {
                                                  e && a({ isPlaying: e === F.MT.PLAYING });
                                              }),
                                    s =
                                        null == t
                                            ? void 0
                                            : t.state.currentContext.onChange(() => {
                                                  var i, s;
                                                  (null == e || e(),
                                                      null == r || r(),
                                                      (e =
                                                          null == t || null == (i = t.state.currentContext.value)
                                                              ? void 0
                                                              : i.availableActions.moveBackward.onChange((e) => {
                                                                    a({ canMoveBackward: !!e });
                                                                })),
                                                      (r =
                                                          null == t || null == (s = t.state.currentContext.value)
                                                              ? void 0
                                                              : s.availableActions.moveForward.onChange((e) => {
                                                                    a({ canMoveForward: !!e });
                                                                })));
                                              });
                                return () => {
                                    (null == i || i(), null == s || s(), null == e || e(), null == r || r());
                                };
                            }, [a, null == t ? void 0 : t.state.currentContext, null == t ? void 0 : t.state.playerState.status]);
                        })({ sonata: es }),
                        ((e) => {
                            let { sonata: t } = e,
                                { sonataState: a } = (0, ig.g)();
                            (0, O.useEffect)(() => {
                                let e =
                                    null == t
                                        ? void 0
                                        : t.state.queueState.currentEntity.onChange((e) => {
                                              if (null == e ? void 0 : e.context.data) {
                                                  if ('filter' in e.context.data) {
                                                      let t = null == e ? void 0 : e.context.data.filter;
                                                      a.setPlaylistFilter(t);
                                                  }
                                                  (null == e ? void 0 : e.context.data.type) === ea.K.Vibe && a.setPlaylistFilter(void 0);
                                              }
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [null == t ? void 0 : t.state.queueState.currentEntity, a]);
                        })({ sonata: es }),
                        ((e) => {
                            let { sonata: t, playbackId: a, withStorage: r, sonataState: i } = e,
                                s = (0, iD.N)().get(iR.oo);
                            (0, O.useEffect)(() => {
                                var e;
                                let n, o, l, u, d, c;
                                if (!t) return;
                                let h = s.get(iY.c.YmPlayerVolume);
                                ((n = 'number' != typeof h || isNaN(h) ? 1 : h),
                                    t.setExponentVolume(n),
                                    t.setExponentVolume(n, iB.V.TRAILER),
                                    a && t.setExponentVolume(n, a));
                                let v = t.getState(a).queueState.currentEntity.onChange((e) => {
                                        let t = null == e ? void 0 : e.context.data.type,
                                            a = null == e ? void 0 : e.context.data.meta.id,
                                            r = null == e ? void 0 : e.entity;
                                        (r && i.setEntityMeta(r), t && i.setContextType(t), a && i.setContextId(a));
                                    }),
                                    y = t.getState(a).playerState.status.onChange((e) => {
                                        e && i.setStatus(e);
                                    }),
                                    p = t.getState(a).currentContext.onChange(() => {
                                        var e, n, h, v, y, p;
                                        if ((null == o || o(), null == l || l(), null == u || u(), null == d || d(), null == c || c(), r)) {
                                            let e = null != (p = s.get(iY.c.YmPlayerRepeatMode)) ? p : si.pM.NONE;
                                            t.setRepeatMode(e, a);
                                            let r = !!s.get(iY.c.YmPlayerShuffle);
                                            t.setShuffle(r, a);
                                        }
                                        ((o =
                                            null == (e = t.getState(a).currentContext.value)
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      i.setCanMoveBackward(!!e);
                                                  })),
                                            (l =
                                                null == (n = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : n.availableActions.moveForward.onChange((e) => {
                                                          i.setCanMoveForward(!!e);
                                                      })),
                                            (u =
                                                null == (h = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : h.availableActions.repeat.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanChangeRepeatMode(e);
                                                      })),
                                            (d =
                                                null == (v = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : v.availableActions.shuffle.onChange((e) => {
                                                          'boolean' == typeof e && i.setCanShuffle(e);
                                                      })),
                                            (c =
                                                null == (y = t.getState(a).currentContext.value)
                                                    ? void 0
                                                    : y.availableActions.speed.onChange((e) => {
                                                          'boolean' == typeof e && (i.setCanSpeed(e), e || t.setSpeed(1, a));
                                                      })));
                                    }),
                                    m =
                                        null == (e = t.getState(a).playerState)
                                            ? void 0
                                            : e.progress.onChange((e) => {
                                                  e && (i.setPosition(e.position), i.setDuration(e.duration));
                                              }),
                                    f = t.getState(a).playerState.volume.onChange(() => {
                                        let e = t.getState(a).playerState.exponentVolume.value;
                                        (i.setVolume(e), r && s.set(iY.c.YmPlayerVolume, e, { expires: 365 }));
                                    }),
                                    g = t.getState(a).queueState.repeat.onChange((e) => {
                                        e && (i.setRepeatMode(e), r && s.set(iY.c.YmPlayerRepeatMode, e, { expires: 365 }));
                                    }),
                                    b = t.getState(a).queueState.shuffle.onChange((e) => {
                                        'boolean' == typeof e && (i.setShuffle(e), r && s.set(iY.c.YmPlayerShuffle, e, { expires: 365 }));
                                    });
                                return () => {
                                    (null == v || v(),
                                        null == y || y(),
                                        null == p || p(),
                                        null == f || f(),
                                        null == g || g(),
                                        null == u || u(),
                                        null == d || d(),
                                        null == b || b(),
                                        null == m || m(),
                                        null == o || o(),
                                        null == l || l(),
                                        null == c || c());
                                };
                            }, [a, t, i, s, r]);
                        })({ sonata: es, playbackId: s ? iB.V.PROMO_LANDING : void 0, withStorage: !s, sonataState: s && (null == g ? void 0 : g.state) ? g.state : l }));
                    let en = (0, O.useCallback)(() => {
                        if (!h.isAuthorized || f.isFreeDesktopUser || H || f.limitedFreePlayback) return tW.e.PREVIEW;
                        if (f.isFreeWebUser) return tW.e.EFFICIENT;
                        let e = E.get(iY.c.YmPlayerQuality);
                        if (e) {
                            if (Object.values(iF).includes(e)) {
                                let t = (function (e) {
                                    switch (e) {
                                        case iF.HQ_PLUS:
                                            return tW.e.HIGH_QUALITY;
                                        case iF.HQ:
                                            return tW.e.BALANCED;
                                        case iF.NQ:
                                        case iF.LQ:
                                            return tW.e.EFFICIENT;
                                        default:
                                            return tW.e.BALANCED;
                                    }
                                })(e);
                                return (E.set(iY.c.YmPlayerQuality, t, { expires: 365 }), t);
                            }
                            return e;
                        }
                        return (E.set(iY.c.YmPlayerQuality, tW.e.BALANCED, { expires: 365 }), tW.e.BALANCED);
                    }, [E, f.isFreeDesktopUser, f.isFreeWebUser, f.limitedFreePlayback, h.isAuthorized, H]);
                    return (
                        (0, O.useEffect)(
                            () => (
                                s &&
                                    (null == es || es.stop(),
                                    Object.values(iB.V).forEach((e) => {
                                        e !== iB.V.PROMO_LANDING && (null == es || es.stop(e));
                                    })),
                                () => {
                                    s && (null == es || es.stop(iB.V.PROMO_LANDING));
                                }
                            ),
                            [es, s],
                        ),
                        (0, O.useEffect)(() => {
                            s || (j.setQuality(en()), l.setQuality(en()));
                        }, [j, en, l, s]),
                        (0, O.useEffect)(() => {
                            let e = E.get(iY.c.CrossFadeMode),
                                t = !!T && (null == e || e);
                            (E.set(iY.c.CrossFadeMode, t, { expires: 365 }), (j.isCrossfadeEnabled.value = t));
                        }, [j, l, E, T]),
                        (0, O.useEffect)(() => {
                            (0, im.Bx)(E, sm);
                        }, [E]),
                        (0, D.jsx)(iV.c.Provider, {
                            value: j,
                            children: (0, D.jsxs)(ib.G.Provider, {
                                value: es,
                                children: [
                                    (0, D.jsx)(iE, {}),
                                    (0, D.jsx)(i1, { isYnisonDisabled: N }),
                                    (0, D.jsx)(iW.W.Provider, { value: X, children: (0, D.jsxs)(st, { children: [(0, D.jsx)(iX, {}), r] }) }),
                                ],
                            }),
                        })
                    );
                },
                sg = (0, N.PA)((e) => {
                    let { children: t, quality: a, ...r } = e,
                        i = ix();
                    return (0, D.jsx)(O.Suspense, {
                        fallback: (0, D.jsx)(i3.AppSuspenseLoader, {}),
                        children: (0, D.jsx)(iz, { audioLoader: i, children: (0, D.jsx)(sf, { quality: a, ...r, children: t }) }),
                    });
                });
        },
        63326: (e) => {
            e.exports = {
                root: 'WelcomePage_root__JK3Pb',
                image: 'WelcomePage_image__7_fpW',
                loginButton: 'WelcomePage_loginButton__AJHcG',
                offerButton: 'WelcomePage_offerButton__MRs_g',
                offerButton_important: 'WelcomePage_offerButton_important__0wf60',
                text: 'WelcomePage_text__A4aXp',
                offerText: 'WelcomePage_offerText__ZvXKN',
                logoContainer: 'WelcomePage_logoContainer__72W3y',
                logo: 'WelcomePage_logo__oMU8g',
                user: 'WelcomePage_user__WNc4W',
                username: 'WelcomePage_username__yXGsn',
                important: 'WelcomePage_important__MJxEk',
            };
        },
        64284: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => r });
            var r = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        65418: (e) => {
            e.exports = {
                root: 'OverwrittenMocksModal_root__pX0FD',
                header: 'OverwrittenMocksModal_header__XDoNI',
                content: 'OverwrittenMocksModal_content__ejbTs',
                closeModalButton: 'OverwrittenMocksModal_closeModalButton__hYHfJ',
                reloadButton: 'OverwrittenMocksModal_reloadButton__ZUR5C',
                heading: 'OverwrittenMocksModal_heading__ir2si',
                overrideForm: 'OverwrittenMocksModal_overrideForm__K5vWh',
                overrideInput: 'OverwrittenMocksModal_overrideInput__ozIpb',
                jsonInput: 'OverwrittenMocksModal_jsonInput__Qa_Yw',
                shake: 'OverwrittenMocksModal_shake___rW__',
                advancedFields: 'OverwrittenMocksModal_advancedFields__YiGIN',
                shortFieldsRow: 'OverwrittenMocksModal_shortFieldsRow__s_BM4',
                advancedSummary: 'OverwrittenMocksModal_advancedSummary__zb6dT',
                submitButton: 'OverwrittenMocksModal_submitButton__2cRg0',
                mocksList: 'OverwrittenMocksModal_mocksList__H3d8d',
                mockRule: 'OverwrittenMocksModal_mockRule__2Ib8V',
            };
        },
        65726: (e) => {
            e.exports = {
                root: 'DevPanel_root__Gu7qn',
                panel: 'DevPanel_panel__LnoO2',
                group: 'DevPanel_group__yDdVt',
                block: 'DevPanel_block__SJ_76',
                changeLanguageBlock: 'DevPanel_changeLanguageBlock__WGj1D',
                generativeBlock: 'DevPanel_generativeBlock__CwcM2',
                changeLanguageInput: 'DevPanel_changeLanguageInput__nQ01C',
                generativeInput: 'DevPanel_generativeInput__hYqt3',
            };
        },
        66943: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => d });
            var r = a(88800),
                i = a(65724),
                s = a(73170),
                n = a(29504),
                o = a(59304),
                l = a(49397),
                u = a.n(l);
            let d = (e) => {
                let { error: t, closeToast: a, className: l } = e;
                return (0, r.jsx)(o.$, {
                    className: (0, i.$)(u().root, l),
                    message: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(s.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, r.jsx)(n.HL, { className: u().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: a,
                });
            };
        },
        68157: (e, t, a) => {
            'use strict';
            a.d(t, { CommunicationsInitializer: () => n });
            var r = a(84961),
                i = a(53548),
                s = a(72288);
            let n = (0, r.PA)(() => {
                let { user: e, redAlert: t, communication: a } = (0, s.g)();
                ((0, i.useEffect)(() => {
                    e.isAuthorized && Promise.allSettled([a.getData(), t.getData()]);
                }, [t, a, e.isAuthorized]),
                    (0, i.useEffect)(() => {
                        a.isReadyToShowModal && a.showModal();
                    }, [a.isReadyToShowModal]),
                    (0, i.useEffect)(() => {
                        a.isReadyToShowBarBelow && a.showBarBelow();
                    }, [a.isReadyToShowBarBelow]));
            });
        },
        70066: (e) => {
            e.exports = {
                root: 'OverwrittenExperimentsModal_root__amBOc',
                header: 'OverwrittenExperimentsModal_header__9LrO1',
                content: 'OverwrittenExperimentsModal_content__Eki5k',
                closeModalButton: 'OverwrittenExperimentsModal_closeModalButton__k0LqG',
                reloadButton: 'OverwrittenExperimentsModal_reloadButton__bskTH',
                heading: 'OverwrittenExperimentsModal_heading__9oiHL',
                overrideForm: 'OverwrittenExperimentsModal_overrideForm__cJ8PH',
                overrideInput: 'OverwrittenExperimentsModal_overrideInput__cYffP',
                valueInput: 'OverwrittenExperimentsModal_valueInput__goR3Y',
                shake: 'OverwrittenExperimentsModal_shake__mFxEK',
                submitButton: 'OverwrittenExperimentsModal_submitButton___VRmz',
                experimentsList: 'OverwrittenExperimentsModal_experimentsList__PFRVV',
                overridedExperiment: 'OverwrittenExperimentsModal_overridedExperiment__w1bng',
            };
        },
        70787: (e, t, a) => {
            'use strict';
            a.d(t, { g: () => i });
            var r = a(15253);
            let i = (e) => {
                let t = e.get(r.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        72042: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => o });
            var r = a(4086),
                i = a(41928),
                s = a(72288),
                n = a(97956);
            let o = () => {
                let e = (0, i.N)(),
                    { experiments: t } = (0, s.g)();
                return t.checkExperiment(n.z.WebNextYnisonNewConnector, 'on') ? e.get(r.s_) : e.get(r.by);
            };
        },
        72131: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var r = a(10285),
                i = a(42668),
                s = a(72288);
            let n = (e) => {
                let { location: t } = (0, s.g)();
                return (0, r.r)(e, t.tld, i.B);
            };
        },
        72542: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => s, cy: () => i, pE: () => r });
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
                s = 'ru-RU';
        },
        73170: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => u });
            var r,
                i = a(53548),
                s = {
                    5881: (e, t, a) => {
                        function r() {
                            for (var e, t, a = 0, r = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            r,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (r = e(t[a])) && (i && (i += ' '), (i += r));
                                            else for (a in t) t[a] && (i && (i += ' '), (i += a));
                                        return i;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (a.r(t), a.d(t, { clsx: () => r, default: () => i }));
                        let i = r;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var i = null;
                            if ((void 0 !== r && (i = '' + r), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
                            else r = t;
                            return { $$typeof: a, type: e, key: i, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let i = a(4377),
                            s = a(5881),
                            n = a(810),
                            o = r(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: r, ...l } = e,
                                u = (0, s.clsx)(o.default.root, { [o.default.focusable]: a }, t);
                            return (0, n.isValidElement)(r)
                                ? (0, n.cloneElement)(r, { ...l, className: (0, s.clsx)(u, r.props.className) })
                                : (0, i.jsx)('span', { className: u, ...l, children: r });
                        };
                    },
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {};
            function o(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (s[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = o(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var u = l.SROnly;
            l.__esModule;
        },
        74559: (e, t, a) => {
            'use strict';
            a.d(t, { UgcUploadInitializer: () => S });
            var r = a(84961),
                i = a(53548),
                s = a(72288),
                n = a(88800),
                o = a(2058),
                l = a(29595),
                u = a(74965),
                d = a(66943),
                c = a(88969),
                h = a(17392),
                v = a(29504),
                y = a(59304),
                p = a(91292),
                m = a(77484),
                f = a.n(m),
                g = (function (e) {
                    return ((e.ERROR = 'error'), (e.SUCCESS = 'success'), e);
                })({});
            let b = (e) => {
                let { playlistName: t, url: a, variant: r } = e,
                    s = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(p.N, {
                                href: a,
                                className: f().link,
                                children: (0, n.jsx)(v.HL, { className: f().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: t }),
                            }),
                        [t, a],
                    ),
                    o = (0, i.useMemo)(
                        () =>
                            'error' === r
                                ? (0, n.jsx)(v.HL, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      'data-test-id': h.S7.BASE_NOTIFICATION_UGC_TRACK_ERROR_TEXT,
                                      children: (0, n.jsx)(c.A, { id: 'ugc.notification-unknown-error', values: { playlistName: s } }),
                                  })
                                : (0, n.jsxs)(v.HL, {
                                      variant: 'div',
                                      type: 'controls',
                                      size: 'm',
                                      children: [(0, n.jsx)(c.A, { id: 'ugc.notification-success', values: { playlistName: s } }), ';'],
                                  }),
                        [s, r],
                    );
                return (0, n.jsx)(y.$, { className: f().root, message: o });
            };
            var E = a(84985);
            let S = (0, r.PA)(() => {
                let { ugcUploadCenter: e } = (0, s.g)(),
                    t = (0, i.useRef)(void 0);
                (() => {
                    var e;
                    let {
                            ugcUploadCenter: { notifications: t },
                            playlist: a,
                        } = (0, s.g)(),
                        { notify: r } = (0, u.l)(),
                        { formatMessage: c } = (0, o.A)();
                    (0, i.useEffect)(() => {
                        t.showAllNotifications().forEach((e) => {
                            switch (e.type) {
                                case E.u.FILE_TOO_LARGE:
                                    r((0, n.jsx)(d.h, { error: c({ id: 'ugc.notification-too-large-file-error' }) }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.TOO_MANY_FILES:
                                    r((0, n.jsx)(d.h, { error: c({ id: 'ugc.notification-too-many-files-error' }) }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.UNKNOWN_ERROR:
                                    r((0, n.jsx)(b, { url: e.playlist.url, playlistName: e.playlist.title, variant: g.ERROR }), { containerId: l.u.ERROR });
                                    break;
                                case E.u.SUCCESS:
                                    var t;
                                    (null == (t = a.meta) ? void 0 : t.kind) !== e.playlist.kind &&
                                        r((0, n.jsx)(b, { url: e.playlist.url, playlistName: e.playlist.title, variant: g.SUCCESS }), { containerId: l.u.INFO });
                            }
                        });
                    }, [c, t, t.pairs.length, r, null == (e = a.meta) ? void 0 : e.kind]);
                })();
                let a = (0, i.useCallback)(() => {
                        e.checkProcessingTracks();
                    }, [e]),
                    r = (0, i.useCallback)(() => {
                        t.current || (t.current = setInterval(a, 2e3));
                    }, [a]),
                    c = (0, i.useCallback)(() => {
                        (clearInterval(t.current), (t.current = void 0));
                    }, []);
                ((0, i.useEffect)(() => {
                    e.shouldCheckProcessingTracks ? r() : c();
                }, [c, r, e.shouldCheckProcessingTracks]),
                    (0, i.useEffect)(() => () => c(), [c]));
            });
        },
        75746: (e, t, a) => {
            'use strict';
            a.d(t, { UlitochkaInitializer: () => u });
            var r = a(88800),
                i = a(84961),
                s = a(55555),
                n = a(29993),
                o = a(72288),
                l = a(97956);
            let u = (0, i.PA)((e) => {
                let { nonce: t } = e,
                    { experiments: a } = (0, o.g)(),
                    i = (0, n.c)(() => {
                        window.Ya.ulitochka.init({
                            theme: 'light',
                            platform: 'desktop',
                            customButtonStyle: { right: 5, top: 65, left: 'auto', border: 0, background: 'none' },
                            withReactFallbackLoading: !0,
                            disableAnalytics: !0,
                        });
                    });
                if (a.checkExperiment(l.z.WebNextUlitochka, 'on'))
                    return (0, r.jsx)(s.default, {
                        src: 'https://yastatic.net/s3/ulitochka/latest/ulitochka.min.js',
                        nonce: null != t ? t : void 0,
                        onLoad: i,
                        async: !0,
                    });
            });
        },
        77356: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        77484: (e) => {
            e.exports = {
                root: 'UgcUploadCenterNotification_root__K_U0z',
                title: 'UgcUploadCenterNotification_title__s3yTL',
                link: 'UgcUploadCenterNotification_link__NPz6r',
            };
        },
        78275: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var r,
                i = a(53548),
                s = {
                    810: (e) => {
                        e.exports = r || (r = a.t(i, 2));
                    },
                },
                n = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = n[t];
                    if (void 0 !== a) return a.exports;
                    var r = (n[t] = { exports: {} });
                    return (s[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let i = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: a, toggle: i, setState: r, toggleTrue: s, toggleFalse: n };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        78570: (e, t, a) => {
            'use strict';
            a.d(t, { NavigationEvents: () => l });
            var r = a(53548),
                i = a(4086),
                s = a(41928),
                n = a(72288),
                o = a(92192);
            let l = () => {
                let e = (0, s.N)().get(i.vg),
                    t = (0, o.D)(),
                    {
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: a },
                        },
                    } = (0, n.g)();
                return (
                    (0, r.useEffect)(() => {
                        (a.reset(), e.hit(t));
                    }, [t, e, a]),
                    null
                );
            };
        },
        78638: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => i, i: () => s });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
        },
        78793: (e, t, a) => {
            'use strict';
            function r(e) {
                let { params: t, logger: a, context: r } = e,
                    i = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return i.length > 0 ? (a.error('Evgen parameters are not met', { parameters: i.join(', '), incomingParams: t, context: r }), null) : t;
            }
            a.d(t, { F: () => r });
        },
        78940: (e, t, a) => {
            'use strict';
            (a.d(t, { Z: () => l }), a(30282));
            var r = a(58390),
                i = a(29993),
                s = a(67174),
                n = a(15947),
                o = a(97261);
            let l = (e) => {
                let t = (0, r.useRouter)(),
                    { href: a, target: l } = (0, s.u)(e);
                return (0, i.c)((e) => {
                    let r = (0, n.U)(a, window.location.href, l);
                    if (!r) {
                        null == e || e.preventDefault();
                        return;
                    }
                    (null != e && e.metaKey) ||
                        (null != e && e.ctrlKey) ||
                        (null != e && e.shiftKey) ||
                        (r.type === o.I.EXTERNAL || r.type === o.I.DEEPLINK
                            ? ((e) => {
                                  let { target: t, rel: a } = (0, s.u)(e, { options: { isExternalLink: !0 } });
                                  window.open(e, t, a);
                              })(r.href)
                            : t.push(r.href));
                });
            };
        },
        79070: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => i });
            var r = {};
            (Object.defineProperty(r, '__esModule', { value: !0 }), (r.useReturnValue = void 0), (r.useReturnValue = (e) => e()), r.__esModule);
            var i = r.useReturnValue;
        },
        81710: (e, t, a) => {
            'use strict';
            (a.d(t, { AuthorizationChecker: () => c }), a(88800));
            var r = a(84961),
                i = a(58390),
                s = a(53548),
                n = a(30282);
            a(35412);
            var o = a(4086),
                l = a(41928),
                u = a(72288),
                d = a(97956);
            let c = (0, r.PA)((e) => {
                var t;
                let { nonce: a } = e,
                    r = (0, s.useContext)(i.ServerInsertedHTMLContext),
                    c = (0, l.N)(),
                    {
                        experiments: h,
                        user: v,
                        location: { pathname: y, searchParams: p, host: m, tld: f },
                    } = (0, u.g)(),
                    g = (0, s.useCallback)(
                        (e) => {
                            window.location.href = e;
                        },
                        [r, a],
                    ),
                    b = c.get(o.QG),
                    {
                        passportCredentials: { origin: E },
                    } = c.get(o.V4);
                (b.setPassportOriginResolver(() =>
                    ((e) => {
                        let { experiments: t, isAuthorized: a, configOrigin: r } = e,
                            i = t.getExperiment(d.z.WebNextAuthPerf),
                            s = void ((null == i ? void 0 : i.group) === 'webUnauthorized' && n.$3);
                        return 'string' == typeof s ? s : r;
                    })({ experiments: h, isAuthorized: v.isAuthorized, configOrigin: E }),
                ),
                    b.setRedirectUrl({ pathname: y, searchParams: p, host: m, tld: f }),
                    (0, s.useEffect)(() => {
                        (b.disconnect(), b.observe(!1));
                    }, [b, v.isAuthorized, v.puid]),
                    null == (t = b.setTokenOwnerLogin) || t.call(b, v.account.data.login),
                    b.setRedirectHandler(g),
                    b.check());
            });
        },
        83311: (e, t, a) => {
            'use strict';
            a.d(t, { SavedOfferInitializer: () => u });
            var r = a(84961),
                i = a(53548),
                s = a(4086),
                n = a(41928),
                o = a(72288),
                l = a(15253);
            let u = (0, r.PA)(() => {
                let {
                        paymentWidgetModal: {
                            modal: e,
                            setTarget: t,
                            setTariffOfferName: a,
                            setServiceSessionId: r,
                            setIsSilent: u,
                            setOffersBatchId: d,
                            setOffersPositionIds: c,
                        },
                        user: h,
                        freeAccess: v,
                    } = (0, o.g)(),
                    y = (0, n.N)(),
                    p = (0, i.useMemo)(() => y.get(s.vH), [y]);
                (0, i.useLayoutEffect)(() => {
                    if (!h.isAuthorized || !v.isFreeUser || null === p) return;
                    let i = p.get(l.c.Offer);
                    if (null === i) return;
                    let { target: s, serviceSessionId: n, tariffOfferName: o, isSilent: y, offersBatchId: m, offersPositionIds: f } = i;
                    (p.remove(l.c.Offer), t(s), u(y), r(n), d(m), c(f), o && a(o), e.open());
                }, [v.isFreeUser, p, e, a, t, r, u, d, c, h.isAuthorized]);
            });
        },
        84384: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => h });
            var r = a(53548);
            a(30282);
            var i = a(34500),
                s = a(14518),
                n = a(58390),
                o = a(64284),
                l = a(18593),
                u = a(12816),
                d = a(1344);
            let c = [o.U.TRAILER],
                h = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                a = null == e ? void 0 : e.blockId,
                                n = null == e ? void 0 : e.pageEntityId,
                                { pageId: o, pageEntityId: l } = (0, s.$)(),
                                { blockId: u } = (0, i.N)();
                            return (0, r.useMemo)(() => ({ pageId: null != t ? t : o, blockId: null != a ? a : u, pageEntityId: null != n ? n : l }), [a, u, t, n, o, l]);
                        })(e),
                        a = ((e) => {
                            let { pageId: t, blockId: a } = e;
                            return (0, r.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), a && e.push(a.toLowerCase()), e.push('default'), e.join('-'));
                            }, [a, t]);
                        })(t),
                        o = ((e) => {
                            let { pageId: t, blockId: a, pageEntityId: i, contextType: s, contextId: o, utmForPageIds: h } = e,
                                v = (0, n.useSearchParams)();
                            return (0, r.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: a, pageEntityId: r, utmForPageIds: i, contextId: s, contextType: n, blockId: o } = e,
                                            h = t && Object.fromEntries(t),
                                            v = ((e) => {
                                                switch (e) {
                                                    case u._Q.ALBUM:
                                                    case u._Q.PROMOLANDING_ALBUM:
                                                    case u._Q.AUDIOBOOK:
                                                    case u._Q.PODCAST:
                                                        return l.K.Album;
                                                    case u._Q.ARTIST:
                                                    case u._Q.ARTIST_TRACKS:
                                                    case u._Q.ARTIST_ALBUMS:
                                                    case u._Q.ARTIST_DISCOGRAPHY:
                                                        return l.K.Artist;
                                                    case u._Q.PLAYLIST:
                                                        return l.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(a);
                                        return !v || !h || !r || c.includes(o)
                                            ? null
                                            : (Array.isArray(i) ? i.map((e) => String(e)).includes(String(r)) : !!s && v === n && String(s) === String(r)) && h
                                              ? (0, d.Z)(h)
                                              : null;
                                    })({ searchParams: v, pageId: t, pageEntityId: i, utmForPageIds: h, contextId: o, contextType: s, blockId: a }),
                                [v, t, i, o, s, a, h],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, r.useMemo)(() => ({ from: a, utmLink: o || void 0 }), [a, o]);
                };
        },
        85230: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var r = a(30282),
                i = a(83210),
                s = a(8438);
            let n = () => {
                let e = (0, i.B)(),
                    t = (0, s.y)();
                return (0, r.CP)(t, e);
            };
        },
        87561: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { SpaLegalRedirectProvider: () => p }));
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(5120),
                o = a(74773),
                l = a(88349);
            let u = n.gK
                .model('SpaLegalRedirect', {
                    decision: n.gK.optional(n.gK.enumeration(['pending', 'stay', 'redirect']), 'pending'),
                    retpath: n.gK.maybe(n.gK.string),
                    navigationStarted: !1,
                })
                .views((e) => ({
                    get isWaiting() {
                        return 'stay' !== e.decision;
                    },
                }))
                .actions((e) => ({
                    resolve(t) {
                        if ('pending' === e.decision) {
                            if (t.accountLoadingState === o.G.REJECT || t.experimentsLoadingState === o.G.REJECT) {
                                e.decision = 'stay';
                                return;
                            }
                            if (t.accountLoadingState === o.G.RESOLVE && t.experimentsLoadingState === o.G.RESOLVE) {
                                if (t.isExperimentEnabled) {
                                    let a = t.hasPlus ? t.userSessionRegionIso : t.geoRegionIso;
                                    e.retpath = ((e, t, a) => {
                                        if (!t) return;
                                        let r = new URL(e),
                                            i = (0, l.f)(r.host);
                                        for (let [e, s] of Object.entries(a)) {
                                            let a = s.fromTLD.find((e) => e === i);
                                            if (t.toLocaleLowerCase() === e.toLocaleLowerCase() && a) {
                                                let e = r.hostname.slice(0, -a.length);
                                                return ((r.hostname = ''.concat(e).concat(s.toTLD)), r.href);
                                            }
                                        }
                                    })(t.href, a, t.rules);
                                }
                                e.decision = e.retpath ? 'redirect' : 'stay';
                            }
                        }
                    },
                    takeRedirect() {
                        if ('redirect' === e.decision && !e.navigationStarted) return ((e.navigationStarted = !0), e.retpath);
                    },
                }));
            var d = a(4086),
                c = a(41928),
                h = a(72288),
                v = a(97956),
                y = a(73596);
            let p = (0, i.PA)((e) => {
                let { children: t } = e,
                    { user: a, experiments: i } = (0, h.g)(),
                    n = (0, c.N)(),
                    l = n.get(d.V4),
                    p = n.get(d.QG),
                    [m] = (0, s.useState)(() => u.create()),
                    {
                        loadingState: f,
                        data: { hasPlus: g, userSessionRegionIso: b, geoRegionIso: E },
                    } = a.account,
                    S = i.loadingState,
                    _ = f === o.G.RESOLVE && S === o.G.RESOLVE && i.checkExperiment(v.z.WebNextLegalRedirects, 'on');
                return (
                    (0, s.useEffect)(() => {
                        m.resolve({
                            accountLoadingState: f,
                            experimentsLoadingState: S,
                            isExperimentEnabled: _,
                            hasPlus: g,
                            userSessionRegionIso: b,
                            geoRegionIso: E,
                            href: window.location.href,
                            rules: l.legalRedirects,
                        });
                        let e = m.takeRedirect();
                        e && window.location.replace(p.getPassportPushUrl(e));
                    }, [m, f, S, _, g, b, E, l, p]),
                    m.isWaiting ? (0, r.jsx)(y.AppSuspenseLoader, {}) : t
                );
            });
        },
        88726: (e, t, a) => {
            'use strict';
            var r;
            (a.d(t, { N: () => r }),
                (function (e) {
                    ((e.MP3 = 'mp3'),
                        (e.FLAC = 'flac'),
                        (e.AAC = 'aac'),
                        (e.HEAAC = 'he-aac'),
                        (e.FLACMP4 = 'flac-mp4'),
                        (e.AACMP4 = 'aac-mp4'),
                        (e.HEAACMP4 = 'he-aac-mp4'));
                })(r || (r = {})));
        },
        89538: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopPaywallInitializer: () => o });
            var r = a(84961),
                i = a(53548),
                s = a(37604),
                n = a(72288);
            let o = (0, r.PA)(() => {
                let { desktopPaywall: e } = (0, n.g)(),
                    { shouldShowFamilyInvite: t } = (0, s.h)();
                (0, i.useEffect)(() => {
                    if (e.shouldUserHavePaywall && !t)
                        return (
                            e.shouldShowOnEnter && e.showPaywall(),
                            e.startCrackdownTimeout(),
                            () => {
                                e.clearCrackdownTimeout();
                            }
                        );
                }, [e, e.shouldUserHavePaywall, t]);
            });
        },
        90334: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            let r = (0, a(53548).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        90780: (e, t, a) => {
            'use strict';
            a.d(t, { vZ: () => m, st: () => s, gf: () => o });
            var r = a(53548);
            let i = (0, r.createContext)(null);
            function s() {
                return (0, r.useContext)(i);
            }
            let n = (0, r.createContext)({ hash: void 0 });
            function o() {
                return (0, r.useContext)(n);
            }
            var l = a(88800),
                u = a(54020);
            let d = (e) => {
                let { children: t } = e,
                    a = (0, r.useMemo)(() => ({ hash: (0, u.A)() }), []);
                return (0, l.jsx)(n.Provider, { value: a, children: t });
            };
            class c {
                makeParams() {
                    return {};
                }
            }
            class h {
                makeParams() {
                    return {};
                }
            }
            var v = a(9519);
            class y {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, a) {
                    ((0, v._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, i) => {
                                let s = { ...i, ...t.getGlobalParams(), ...a.getPlatformParams() };
                                e.trackEvent(r, s);
                            },
                        }));
                }
            }
            let p = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: a, evgenUserParam: s, logger: n, metrika: o } = e,
                        u = (0, r.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, a) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: a, requestsSendingDelay: r } = e,
                                        i = [];
                                    return (
                                        !(function e() {
                                            (i.length > 0 && t(i.splice(0, a)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                i.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, i) {
                                        (a && t.log(e, i), r.add({ [e]: i }));
                                    },
                                };
                            })((e) => o.count(e, s), n, t);
                            return (p = new y(
                                e,
                                (function () {
                                    let e = new c();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new h();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [n, o]);
                    return (0, l.jsx)(i.Provider, { value: u, children: (0, l.jsx)(d, { children: a }) });
                };
        },
        91241: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => r });
            let r = 'ru';
        },
        91292: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => v });
            var r = a(88800),
                i = a(53548),
                s = a(12389),
                n = a.n(s),
                o = a(29993),
                l = a(65453),
                u = a(46079),
                d = a(67174);
            let c = (e) => {
                    let [t, a] = (0, i.useState)(!1),
                        s = (0, o.c)(() => {
                            a(!0);
                        });
                    return (0, r.jsx)(n(), { prefetch: t, ...e, onMouseEnter: s });
                },
                h = (e) => {
                    let { forwardedRef: t, href: a, component: s, ...o } = e,
                        { isPrefetchDisabled: h, isPrefetchOnHover: v } = (0, i.useContext)(u.j),
                        { href: y, target: p, rel: m } = (0, d.u)(null != a ? a : ''),
                        f = (0, i.isValidElement)(s)
                            ? s
                            : (function (e, t, a) {
                                  return e ? (t ? (0, r.jsx)(n(), { prefetch: !1 }) : a ? (0, r.jsx)(c, { href: e }) : (0, r.jsx)(n(), {})) : (0, r.jsx)('a', {});
                              })(a, h, v);
                    return (0, r.jsx)(l.N, { ref: t, component: f, href: a ? y : void 0, target: p, rel: m, ...o });
                },
                v = (0, i.forwardRef)((e, t) => (0, r.jsx)(h, { ...e, forwardedRef: t }));
        },
        91614: (e, t, a) => {
            'use strict';
            (a.d(t, { ErrorBoosterScript: () => r }), a(88800));
            let r = (e) => {
                let { nonce: t, assetPrefix: a, errorBooster: r } = e;
                return null;
            };
        },
        92192: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s });
            var r = a(53548),
                i = a(58390);
            let s = () => {
                let e = (0, i.usePathname)(),
                    t = (0, i.useSearchParams)();
                return (0, r.useMemo)(() => {
                    let a = t.size > 0 ? '?'.concat(t) : '';
                    return ''.concat(e).concat(a);
                }, [e, t]);
            };
        },
        92403: (e, t, a) => {
            'use strict';
            a.d(t, { TagSandboxInitializer: () => d });
            var r = a(84961),
                i = a(53548),
                s = a(4086),
                n = a(41928),
                o = a(72288),
                l = a(97956),
                u = a(74773);
            let d = (0, r.PA)(() => {
                let { experiments: e } = (0, o.g)(),
                    t = (0, n.N)().get(s.RD),
                    a = e.loadingState === u.G.RESOLVE && e.isExperimentActive(l.z.WebNextTagSandbox);
                return (
                    (0, i.useEffect)(() => {
                        a && t.connect();
                    }, [a, t]),
                    null
                );
            });
        },
        92632: (e, t, a) => {
            'use strict';
            a.d(t, { SlamProvider: () => F });
            var r = a(88800),
                i = a(84961),
                s = a(53548),
                n = a(88969),
                o = a(30282),
                l = a(23797),
                u = a(35723),
                d = a(36217),
                c = a(96820),
                h = a(29993),
                v = a(52300),
                y = a(29504),
                p = a(59304),
                m = a(34948),
                f = a.n(m);
            let g = (e) => {
                let { message: t } = e;
                return (0, r.jsx)(p.$, {
                    cover: (0, r.jsx)(v.I, { variant: 'unavailable', size: 'xs', className: f().icon }),
                    message: (0, r.jsx)(y.HL, { className: f().message, variant: 'div', type: 'controls', size: 'm', children: t }),
                    coverRadius: 's',
                });
            };
            var b = a(63771),
                E = a(99305),
                S = a(58977);
            let _ = { 51: '1-50', 101: '51-100', 201: '101-200', 301: '201-300' };
            var A = a(4086),
                P = a(41928),
                k = a(29595),
                I = a(74965),
                C = a(70787),
                x = a(12149),
                T = a(71978),
                R = a(43506),
                D = a(24609),
                w = a(7748),
                N = a(72288),
                O = a(97956),
                M = a(15253);
            let L = !0,
                F = (0, i.PA)((e) => {
                    var t, a, i;
                    let { children: v } = e,
                        { slam: y, user: p, experiments: m, library: f } = (0, N.g)(),
                        F = (0, b.j)(),
                        q = (0, T.j)(),
                        U = (0, P.N)(),
                        B = U.get(A.U2),
                        V = U.get(A.vg),
                        W = (0, w.g)(),
                        { notify: j } = (0, I.l)(),
                        K = (0, h.c)((e) => {
                            y.setNetworkStatus(e);
                        }),
                        Y = (0, h.c)((e) => {
                            let { id: t, state: a } = e;
                            (y.setTrack(t, a),
                                a.loadingState === c.DT.DOWNLOAD_FAILED &&
                                    j((0, r.jsx)(g, { message: (0, r.jsx)(n.A, { id: 'offline.track-download-error' }) }), { containerId: k.u.ERROR }));
                        }),
                        G = (0, h.c)((e) => {
                            y.setTracks(e);
                        });
                    return (
                        p.account.data.uid &&
                            p.hasPlus &&
                            q.init({
                                userConfig: { uid: p.account.data.uid },
                                resources: { tracksResource: U.get(A.Oo), getFileInfoResource: U.get(A.qT), availabilityResource: U.get(A.$5) },
                                downloaderVariables: { maxConcurrentDownloads: 5, getQuality: () => (0, l.i)({ productQuality: null == W ? void 0 : W.quality.value }) },
                                featureFlags: { entities: !0 },
                                tracksControllerVariables: { requestTrackChunkSize: 100 },
                                trackDownloadTaskParams: {
                                    secretKey: (0, o.Ef)(U.get(A.V4), (0, x.u)()),
                                    transport: d.o.ENCRAW,
                                    variables: { chunkSize: 1048576, coverSize: 1e3, codecs: u.iy },
                                },
                            }),
                        (0, s.useEffect)(() => {
                            if (L) {
                                var e;
                                (null == (e = q.tracksController) ||
                                    e.getTracksCount().then((e) => {
                                        let t = ((e) => {
                                            if (0 === e) return '0';
                                            if (e > 300) return '>300';
                                            for (let t of Object.keys(_)) if (e < Number(t)) return _[Number(t)];
                                        })(e);
                                        t && V.count({ [E.x.TRACKS_COUNT]: t }, S.l);
                                    }),
                                    (L = !1));
                            }
                        }, [V, q.tracksController]),
                        (0, s.useEffect)(() => {
                            if (!F.isActive && void 0 !== p.puid && !m.checkExperiment(O.z.WebNextOfflineDegradation, 'default')) {
                                var e, t;
                                let a = null == (e = m.getExperiment(O.z.WebNextOfflineDegradation)) ? void 0 : e.group,
                                    r = ''.concat(M.c.OfflineDegradation, '_').concat(p.puid),
                                    i = B.get(r);
                                a && a !== i && (null == (t = q.tracksController) || t.clearAll(), B.set(r, a));
                            }
                        }, [F.isActive, m, B, q, p.puid]),
                        (0, s.useEffect)(() => {
                            var e, t, a;
                            return (
                                null == (e = q.store) || e.tracks.events.on(c.je.ENTITY_CHANGED, Y),
                                null == (t = q.store) || t.tracks.events.on(c.je.STATE_CHANGED, G),
                                null == (a = q.tracksController) || a.initState(),
                                () => {
                                    var e, t;
                                    (null == (e = q.store) || e.tracks.events.off(c.je.ENTITY_CHANGED, Y),
                                        null == (t = q.store) || t.tracks.events.off(c.je.STATE_CHANGED, G));
                                }
                            );
                        }, [Y, G, null == (t = q.store) ? void 0 : t.tracks.events, q.tracksController]),
                        (0, s.useEffect)(() => {
                            var e;
                            return (
                                null == (e = q.network) || e.subscribe(K),
                                () => {
                                    var e;
                                    null == (e = q.network) || e.unsubscribe(K);
                                }
                            );
                        }, [K, q.network, null == (a = q.network) ? void 0 : a.subscribe, null == (i = q.network) ? void 0 : i.unsubscribe]),
                        (0, s.useEffect)(() => {
                            if (F.isActive) return;
                            let e = (0, C.g)(B);
                            y.setOfflineMode(e);
                        }, [F.isActive, B, y]),
                        (0, s.useEffect)(() => {
                            p.account.isNeededToLoad || p.account.isLoading || F.checkDownloads();
                        }, [F, q.tracksController, p.account.isNeededToLoad, p.account.isLoading]),
                        (0, s.useEffect)(() => {
                            p.isAuthorized && !y.isOfflineModeEnabled && (f.isNeededToLoad || f.isRejected) && f.getData();
                        }, [f, y.isOfflineModeEnabled, p.isAuthorized]),
                        (0, r.jsx)(R.h.Provider, { value: q.artistsController, children: (0, r.jsx)(D.m.Provider, { value: q.playlistsController, children: v }) })
                    );
                });
        },
        95210: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var r = a(53548),
                i = a(38860);
            let s = (e) => {
                let t = (0, r.useRef)(!1),
                    a = (0, i.z)();
                (0, r.useEffect)(() => {
                    (e && (null == a || a.disable(), (t.current = !0)), !e && t.current && (null == a || a.enable(), (t.current = !1)));
                }, [e, a]);
            };
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
        97261: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => r });
            var r = (function (e) {
                return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
            })({});
        },
        97854: (e, t, a) => {
            'use strict';
            (a.d(t, { RumScript: () => r }), a(88800));
            let r = (e) => {
                let { nonce: t, requestId: a, assetPrefix: r, rumSettings: i } = e;
                return null;
            };
        },
        99305: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => r });
            var r = (function (e) {
                return (
                    (e.TRACKS_COUNT = 'tracksCount'),
                    (e.TRACK_DOWNLOAD = 'trackDownload'),
                    (e.TRACK_DELETE = 'trackDelete'),
                    (e.MY_FAVORITES_PLAYLIST_DOWNLOAD = 'myFavoritesPlaylistDownload'),
                    (e.MY_FAVORITES_PLAYLIST_DELETE = 'myFavoritesPlaylistDelete'),
                    e
                );
            })({});
        },
        99344: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => i });
            var r = a(18593);
            function i(e) {
                return (null == e ? void 0 : e.data.type) === r.K.Playlist;
            }
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4389, 4146, 4493, 7435, 3883, 8752, 438, 9807, 6706, 4771, 1311, 3075, 8832, 6904, 5977, 2058, 2881, 8628, 6326, 2824, 2837, 1223, 8335, 5018, 1052, 4732,
                1195, 1598, 6281, 1928, 7627, 9124, 9934, 1372, 5277, 5638, 6820, 8128, 1625, 2367, 9432, 617, 8112, 763, 2670, 7358,
            ],
            () => e((e.s = 29758)),
        ),
            (_N_E = e.O()));
    },
]);
