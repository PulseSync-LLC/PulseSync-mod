(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var n = i(2058),
                r = i(61691);
            let a = (e, t) => {
                let { formatMessage: i } = (0, n.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var n = i(72288),
                r = i(97956);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: o,
                } = (0, n.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var n = i(61691),
                r = i(15077);
            let a = (e) => {
                switch (e) {
                    case n._.PODCAST:
                        return r.c.PODCAST;
                    case n._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case n._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        6087: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => r.a });
            var n = i(76124),
                r = i.n(n);
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => d });
            var n = i(88800),
                r = i(53548),
                a = i(63582),
                o = i(99875),
                s = i(66109),
                l = i(245);
            let d = (0, a.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: a, objectType: d }) => {
                    let c = (0, l.N)(),
                        u = (0, r.useContext)(o.p)?.loadedSession,
                        _ = [d, t, i, a].join(':'),
                        [m, p] = (0, r.useState)(() => ({ client: c, identity: _, blockSession: u, viewSession: c.createBlockViewSession() }));
                    (m.client !== c || m.identity !== _ || m.blockSession !== u) &&
                        p({ client: c, identity: _, blockSession: u, viewSession: c.createBlockViewSession() });
                    let f = (0, r.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: a, objectType: d }, viewSession: m.viewSession }),
                        [t, i, a, d, m.viewSession],
                    );
                    return (0, n.jsx)(s.l, { value: f, children: e });
                },
            );
        },
        12342: (e) => {
            e.exports = {
                root: 'SearchHistoryPage_root__Wbvyf',
                title: 'SearchHistoryPage_title__gnJuo',
                header: 'SearchHistoryPage_header__YdTG5',
                scrollContainer: 'SearchHistoryPage_scrollContainer__ScAez',
                scrollContent: 'SearchHistoryPage_scrollContent__5AXWC',
                content: 'SearchHistoryPage_content__iPgVO',
                desktopItem: 'SearchHistoryPage_desktopItem__Xv9C_',
                items: 'SearchHistoryPage_items___okS8',
                emptyHistory: 'SearchHistoryPage_emptyHistory__gzfUu',
            };
        },
        13946: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => F });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(79070),
                l = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                _ = i(35994);
            let m = (e, t) => {
                let { withLink: i, separator: n } = t,
                    r = i && !e.various ? (0, _.R)(e.id) : null;
                return { artist: e, name: e.name, separator: n, link: r };
            };
            var p = i(21010),
                f = i.n(p),
                v = i(17392),
                x = i(29504),
                h = i(91292),
                b = i(2058),
                y = i(87999),
                g = i(80643),
                T = i(78940),
                C = i(55693),
                j = i(58217);
            let A = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: r, captionSize: a = 'm', allArtistsTitle: o, withCustomTooltip: s, hoverSettings: d } = e,
                        {
                            name: _,
                            link: m,
                            title: p,
                            ariaLabel: f,
                            tooltipText: A,
                            isTooltipEnabled: E,
                            handleNavigate: N,
                        } = ((e) => {
                            var t, i;
                            let { item: n, allArtistsTitle: r, withCustomTooltip: a } = e,
                                { formatMessage: o } = (0, b.A)(),
                                s = ((e, t) => {
                                    let { item: i, allArtistsTitle: n, withCustomTooltip: r } = e,
                                        a = n || i.name;
                                    return {
                                        ...i,
                                        title: r ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !n && r,
                                    };
                                })({ item: n, allArtistsTitle: r, withCustomTooltip: a }, o),
                                {
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                _ = (0, T.Z)(null != (i = null == (t = s.link) ? void 0 : t.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: m } = (0, C.z)(),
                                p = (0, g.S)(),
                                f = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), _(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: n, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: o } = n;
                                    return (0, j.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (n.reset(), o.close()), r.modal.isOpened && r.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: f }),
                                x = (0, c.c)((e) => {
                                    (p({ to: y.AppScreen.ArtistScreen }), null == m || m(), v(e));
                                });
                            return { ...s, handleNavigate: x };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: s });
                    return m
                        ? (0, n.jsx)(h.N, {
                              ...m,
                              'aria-label': f,
                              className: i,
                              onClick: N,
                              title: p,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, n.jsx)(l.m_, {
                                  enabled: E,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: A,
                                  hoverSettings: d,
                                  children: (0, n.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: r, children: _ }),
                              }),
                          })
                        : (0, n.jsx)(l.m_, {
                              enabled: E,
                              offsetOptions: 4,
                              placement: 'top',
                              text: A,
                              hoverSettings: d,
                              children: (0, n.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: r,
                                  title: p,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: _,
                              }),
                          });
                }),
                E = (e) => {
                    let { group: t, linkClassName: i, captionClassName: r, captionSize: a, allArtistsTitle: s, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, n.jsx)(A, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: r,
                                captionSize: a,
                                allArtistsTitle: s,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, n.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, n.jsx)(A, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: r,
                                                captionSize: a,
                                                allArtistsTitle: s,
                                                withCustomTooltip: l,
                                                hoverSettings: d,
                                            }),
                                        ],
                                    },
                                    e.artist.id,
                                ),
                            ),
                        ],
                    });
                };
            var N = i(88969),
                O = i(65453);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        ' ',
                        (0, n.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(f().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, n.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var k = i(61013),
                I = i(87819),
                P = i(40634),
                R = i(48468),
                L = i.n(R);
            let M = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, n.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, n.jsx)('div', { ref: r, children: t }),
                            (0, n.jsx)(l.ZI, { className: L().tooltipContent, children: i.map((e) => (0, n.jsx)(P.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, o.forwardRef)((e, t) => (0, n.jsx)(M, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                z = i.n(B);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, b.A)();
                    return (0, n.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, n.jsx)(P.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [a, l] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        _ = (0, c.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        m = (0, s.L)(() =>
                            (0, k.A)(() => {
                                _();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', m),
                                _(),
                                () => {
                                    window.removeEventListener('resize', m);
                                }
                            ),
                            [m, _],
                        ),
                        (0, o.useEffect)(() => {
                            _();
                        }, [t, _]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, n.jsx)(U, { artists: t, label: i }) : (0, n.jsx)(w, { artists: t, label: i })) : i;
                }),
                F = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: _,
                            captionClassName: p,
                            captionSize: v,
                            variant: x = 'breakAll',
                            spoilerComponent: h,
                            ...b
                        } = e,
                        y = ((e) => {
                            var t, i, n;
                            let { separator: r, visibleArtistsCount: a, withLink: s, withComposer: l, artistIdWithoutLink: d, withContextMenu: _ } = e,
                                p = null != (t = e.artists) ? t : [],
                                f = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (n = e.withCustomTooltip) || n,
                                x = (0, o.useRef)(null),
                                [h, b] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, u.g)(),
                                g = ((!y || 1 === p.length) && _) || !_,
                                T = ((e, t) => {
                                    var i, n, r;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        o = null == (n = null == t ? void 0 : t.withLink) || n,
                                        s = null != (r = null == t ? void 0 : t.separator) ? r : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(s),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: n } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => n || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: n, separator: r, isFirst: a } = t;
                                                return {
                                                    primary: m(e, { withLink: n, separator: a ? void 0 : r }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = r ? e.separator : '';
                                                        return m(e, { withLink: n, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(p, { separator: r, visibleArtistsCount: h ? void 0 : a, withComposer: l, withLink: !!g && s, artistIdWithoutLink: d }),
                                C = f ? T.allArtistsTitle : '',
                                j = (0, c.c)((e) => {
                                    (b(!0), e.preventDefault());
                                });
                            return {
                                artists: p,
                                groups: T.groups,
                                hiddenArtistsCount: T.hiddenArtistsCount,
                                allArtistsTitle: C,
                                withCustomTooltip: v,
                                withContextMenu: _,
                                labelRef: x,
                                handleOnSpoilerClick: j,
                                isTooltipEnabled: !!C && v && !_ && !y,
                                title: !C || v || _ ? void 0 : C,
                            };
                        })(b),
                        g = (0, s.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(h)
                                  ? h
                                  : (0, n.jsx)(S, { spoilerClassName: a, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        T = (0, n.jsx)(l.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, n.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, r.$)(f().root, f()['root_variant_'.concat(x)], { [f().root_clamp]: i && i > 0, [f().ellipsis]: !i }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, n.jsx)(
                                            E,
                                            {
                                                group: e,
                                                linkClassName: _,
                                                captionClassName: p,
                                                captionSize: v,
                                                allArtistsTitle: y.allArtistsTitle,
                                                withCustomTooltip: y.withCustomTooltip,
                                                hoverSettings: d.V,
                                            },
                                            e.primary.artist.key,
                                        ),
                                    ),
                                    g,
                                ],
                            }),
                        });
                    return y.withContextMenu ? (0, n.jsx)(H, { labelRef: y.labelRef, artists: y.artists, label: T }) : T;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, n, r) {
                return JSON.stringify(e, i(t, r), n);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    n = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + n.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (r, a) {
                        if (i.length > 0) {
                            var o = i.indexOf(this);
                            (~o ? i.splice(o + 1) : i.push(this), ~o ? n.splice(o, 1 / 0, r) : n.push(r), ~i.indexOf(a) && (a = t.call(this, r, a)));
                        } else i.push(a);
                        return null == e ? a : e.call(this, r, a);
                    }
                );
            }
        },
        14661: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { n: () => n }),
                (function (e) {
                    ((e.ALL = 'all'),
                        (e.TRACK = 'track'),
                        (e.ALBUM = 'album'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.USER = 'user'),
                        (e.UGC_TRACK = 'ugc_track'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.VIDEO = 'video'),
                        (e.LYRICS = 'lyrics'),
                        (e.CLIP = 'clip'),
                        (e.BOOK = 'book'),
                        (e.CONCERT = 'concert'));
                })(n || (n = {})));
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var n = i(42824),
                r = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ForcedLoginAttempt = 'forcedLoginAttempt'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = n.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.MainPageEntryPointPlayedAnimations = 'mainPageEntryPointPlayedAnimations'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        15526: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        17332: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        18143: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { T: () => n }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(n || (n = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var n = i(88800),
                r = i(53548),
                a = i(17392),
                o = i(29504),
                s = i(15526),
                l = i.n(s);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [s, d] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    s)
                )
                    return s.map((e, t) =>
                        (0, n.jsx)(
                            o.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        19994: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => s });
            var n = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (r && (r += ' '), (r += n));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = n(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: n = 'm', width: s, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== s && (u.width = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, a.clsx)(o.default.root, o.default['root_radius_'.concat(n)], { [o.default.root_active]: t }, i),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...c,
                                    style: u,
                                    children: d,
                                })
                            );
                        };
                    },
                },
                r = {};
            function a(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var i = (r[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, a), i.exports);
            }
            ((a.d = (e, t) => {
                for (var i in t) a.o(t, i) && !a.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.q = void 0));
                var e = a(7141);
                Object.defineProperty(o, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var s = o.q;
            o.X;
        },
        20603: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, i(94177).createAsyncLocalStorage)();
        },
        21010: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        23877: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { Q: () => r, c: () => n }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(n || (n = {})));
            let r = { [n.ERROR]: 'error', [n.WARNING]: 'warn', [n.INFO]: 'info', [n.DEBUG]: 'debug', [n.TRACE]: 'trace' };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => n });
            let n = { delay: { open: 1e3, close: 0 } };
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var n = i(88800),
                r = i(84961),
                a = i(53548),
                o = i(88969),
                s = i(17392),
                l = i(52300),
                d = i(19934),
                c = i(72288);
            let u = (0, r.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: r, className: u, iconClassName: _ } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'unpin' : 'pin',
                    f = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, a.useMemo)(() => (t ? (0, n.jsx)(o.A, { id: 'interface-actions.unpin' }) : (0, n.jsx)(o.A, { id: 'interface-actions.pin' })), [t]);
                return (0, n.jsx)(d.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, n.jsx)(l.I, { className: _, variant: p, size: 'xxs' }),
                    'data-test-id': f,
                    disabled: r || !m.isAuthorized,
                    children: v,
                });
            });
        },
        28793: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 82474));
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o, r: () => s });
            var n = i(53548),
                r = i(2058),
                a = i(61691),
                o = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                return (0, n.useMemo)(() => {
                    switch (e) {
                        case a._.SINGLE:
                            return i({ id: 'entity-names.single' });
                        case a._.PODCAST:
                            return i({ id: 'entity-names.podcast' });
                        case a._.AUDIOBOOK:
                            if ('pin' === t) return i({ id: 'entity-names.book' });
                            return i({ id: 'entity-names.audio' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'entity-names.fairy-tale' });
                        default:
                            return i({ id: 'entity-names.album' });
                    }
                }, [e, i, t]);
            };
        },
        29832: (e, t, i) => {
            'use strict';
            i.d(t, { MN: () => c, hg: () => d });
            var n,
                r = i(53548),
                a = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (r && (r += ' '), (r += n));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
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
                    2445: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(8532),
                            s = n(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: n,
                                    menuControl: l,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: p,
                                } = e,
                                f = c || i,
                                v = l || n;
                            return (0, r.jsxs)('div', {
                                className: (0, a.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, r.jsx)('div', { className: s.default.top, children: d }),
                                    (0, r.jsxs)('div', {
                                        className: (0, a.clsx)(s.default.bottom, m),
                                        children: [
                                            f && (0, r.jsxs)('div', { className: s.default.bottom_left, children: [c, i] }),
                                            v && (0, r.jsxs)('div', { className: s.default.bottom_right, children: [l, n] }),
                                        ],
                                    }),
                                    !!p && (0, r.jsx)(o.Label, { className: s.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let r = i(4377),
                            a = i(810),
                            o = i(5881),
                            s = i(8903),
                            l = i(6530),
                            d = n(i(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: n,
                                    textPosition: a = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: p,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, r.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, n),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, r.jsx)(l.SROnly, { children: null != v ? v : u }),
                                        (0, r.jsx)('div', { className: d.default.viewContainer, children: i }),
                                        (0, r.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                p,
                                                (0, r.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, r.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, r.jsx)(s.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(8903),
                            s = n(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: n = 's', ...l } = e;
                            return (0, r.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: n,
                                lineClamp: 1,
                                className: (0, a.clsx)(s.default.root, i),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var n = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return n.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = n(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: n, ...l } = e,
                                d = (0, a.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, o.isValidElement)(n)
                                ? (0, o.cloneElement)(n, { ...l, className: (0, a.clsx)(d, n.props.className) })
                                : (0, r.jsx)('span', { className: d, ...l, children: n });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var n = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return n.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = n(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: n = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ..._ } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_'.concat(n, '_').concat(o)], l.default['root_weight_'.concat(u)], d),
                                ..._,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = n(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: n = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, r.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_size_'.concat(o)], l.default['root_weight_'.concat(n)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, i) => (0, r.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let r = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = n(i(61));
                        function l(e) {
                            let { forwardRef: t, style: i, className: n, children: o, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, r.jsx)(l, {
                                style: { ...i, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    n,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, o.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var n = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return n.Caption;
                            },
                        });
                        var r = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return r.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = n || (n = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = s(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = s(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = l.kk,
                c = l.m7;
            l.X$;
        },
        30832: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => o });
            var n = i(88800),
                r = i(15077),
                a = i(42729);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, n.jsx)(a.O, {
                    entityVariant: r.c.PLAYLIST,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    closeToast: i,
                    coverUri: t.coverUri,
                });
            };
        },
        32138: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => r });
            var n = i(72288);
            let r = (e, t, i) => {
                let {
                    settings: { isMobile: r },
                } = (0, n.g)();
                return !!(r && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
            };
        },
        32947: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r, L: () => a });
            let n = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var r = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let a = (e) => {
                let t = new Date();
                if (n(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), n(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => y });
            var n = i(88800),
                r = i(65724),
                a = i(53548),
                o = i(17392),
                s = i(90688),
                l = i(73170),
                d = i(29504),
                c = i(2058),
                u = i(88969),
                _ = i(29993),
                m = i(15077),
                p = i(72288),
                f = i(97956),
                v = i(91292),
                x = i(59304),
                h = i(95641),
                b = i.n(h);
            let y = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: h,
                        entityTitle: y,
                        entityDescription: g,
                        entityVariant: T,
                        entityUrl: C,
                        customCover: j,
                        radius: A,
                        isPinned: E,
                    } = e,
                    N = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: r, values: a, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: o }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(f.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, n.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    O = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((i) => {
                            let { entityVariant: r, values: a, entityTitle: o, entityDescription: s } = i;
                            switch (r) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(f.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, n.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, n.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    S = (0, a.useMemo)(
                        () =>
                            C
                                ? (0, n.jsx)(v.N, {
                                      className: b().link,
                                      href: C,
                                      title: y,
                                      children: (0, n.jsxs)(d.HL, {
                                          className: b().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', y, '\xa0'],
                                      }),
                                  })
                                : (0, n.jsxs)(d.HL, {
                                      className: b().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: y,
                                      children: ['\xa0', y, '\xa0'],
                                  }),
                        [y, C],
                    ),
                    k = (0, a.useMemo)(
                        () => j || (0, n.jsx)(s._V, { className: b().image, src: h, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [h, j],
                    ),
                    I = (0, a.useMemo)(() => {
                        let e = { entity: S, description: g };
                        return E
                            ? N({ entityVariant: T, values: e, entityTitle: y, entityDescription: g })
                            : O({ entityVariant: T, values: e, entityTitle: y, entityDescription: g });
                    }, [S, g, E, O, T, y, N]);
                return (0, n.jsx)(x.$, {
                    className: (0, r.$)(b().root, { [b().root_withLongText]: T === m.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: k,
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(l.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': I.ariaLabel }) }),
                            (0, n.jsx)(d.HL, {
                                className: b().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': o.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: I.caption,
                            }),
                        ],
                    }),
                    coverRadius: A,
                });
            };
        },
        34250: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => r });
            var n = i(67174);
            let r = (e) => (0, n.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36303: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var n = i(2058),
                r = i(48987);
            let a = (e, t) => {
                let { formatMessage: i } = (0, n.A)(),
                    { hours: a, minutes: o, seconds: s } = (0, r.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, r.e)(t);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: a, beginMinutes: o, beginSeconds: s, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        37438: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        37531: (e, t, i) => {
            'use strict';
            function n(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                i(36271));
        },
        37717: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => f });
            var n = i(88800),
                r = i(53548),
                a = i(2058),
                o = i(88969),
                s = i(58390),
                l = i(29993),
                d = i(29595),
                c = i(74965),
                u = i(4370),
                _ = i(72288),
                m = i(59304),
                p = i(66943);
            let f = (e) => {
                let { user: t, search: i } = (0, _.g)(),
                    { formatMessage: f } = (0, a.A)(),
                    { notify: v } = (0, c.l)(),
                    x = (0, s.useRouter)();
                return (
                    (0, r.useEffect)(() => {
                        i.isEmptyHistory && x.push(u.Z.search.href);
                    }, [i.isEmptyHistory, x]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                v((0, n.jsx)(m.$, { message: (0, n.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                x.push(u.Z.search.href));
                        } catch (e) {
                            v((0, n.jsx)(p.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => r });
            var n = i(67174);
            let r = (e) => (0, n.u)('/album/:albumId', { params: { albumId: e } });
        },
        39631: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => j });
            var n = i(88800),
                r = i(53548),
                a = i(40907),
                o = i(72288),
                s = i(97956),
                l = i(90420),
                d = i(84961),
                c = i(2058),
                u = i(17392),
                _ = i(29993),
                m = i(29832),
                p = i(52300),
                f = i(19934),
                v = i(68974),
                x = i(2147),
                h = i(21869),
                b = i(49738),
                y = i(64546),
                g = i(83559),
                T = i.n(g);
            let C = (0, d.PA)((e) => {
                    let { vibe: t } = e,
                        {
                            settings: { isMobile: i },
                        } = (0, o.g)(),
                        { formatMessage: r } = (0, c.A)(),
                        a = (0, x.K)(t, { showNotificationOnMobile: !0 }),
                        s = (0, _.c)((e) => {
                            e.stopPropagation();
                        });
                    return (0, n.jsx)('div', {
                        className: T().root,
                        onClick: s,
                        onDoubleClick: s,
                        onKeyDown: s,
                        children: (0, n.jsx)(m.hg, {
                            className: T().controls,
                            bottomContainerClassName: T().bottom,
                            isVisible: !0,
                            likeControl: (0, n.jsx)(y.WithOffline, {
                                fallback: (0, n.jsx)('div', {
                                    className: T().like,
                                    children: (0, n.jsx)(b.c, { size: 'xs', iconSize: 'xxs', className: T().likeButton, isLiked: t.isLiked, onClick: a }),
                                }),
                            }),
                            menuControl: (0, n.jsx)('div', {
                                className: T().menu,
                                children: (0, n.jsxs)(f.W1, {
                                    className: T().contextMenuButton,
                                    isMobile: i,
                                    menuClassName: i ? void 0 : T().contextMenu,
                                    variant: 'text',
                                    size: 'xs',
                                    icon: (0, n.jsx)(p.I, { variant: 'more', size: 'xs' }),
                                    ariaLabel: r({ id: 'interface-actions.context-menu' }),
                                    'data-test-id': u.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                                    children: [(0, n.jsx)(y.WithOffline, { fallback: (0, n.jsx)(h.S, { vibe: t, onLikeClick: a }) }), (0, n.jsx)(v.u, { vibe: t })],
                                }),
                            }),
                        }),
                    });
                }),
                j = () => {
                    let {
                        experiments: e,
                        user: { isAuthorized: t },
                    } = (0, o.g)();
                    return (0, r.useCallback)(
                        (i) =>
                            e.checkExperiment(s.z.WebNextWaveLikesAndShares, 'on') && t && i
                                ? i.stationType === l.q7
                                    ? (0, n.jsx)(a.w, { wave: i })
                                    : i.isLikeEnabled
                                      ? (0, n.jsx)(C, { vibe: i })
                                      : null
                                : null,
                        [e, t],
                    );
                };
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => b });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(87999),
                l = i(80643),
                d = i(17392),
                c = i(29993),
                u = i(90688),
                _ = i(19934),
                m = i(7555),
                p = i(29504),
                f = i(78940),
                v = i(72288),
                x = i(80932),
                h = i.n(x);
            let b = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    y = (0, l.S)(),
                    g = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, n.jsx)(b, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    T = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), y({ to: s.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)(_.Dr, {
                            className: (0, r.$)(h().root, i),
                            onClick: T,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, n.jsx)(m.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, n.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, n.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        40887: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => u });
            var n = i(88800),
                r = i(53548),
                a = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                d = i(27506),
                c = i(66943);
            let u = (e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    [u, _] = (0, r.useState)(!1),
                    { notify: m } = (0, l.l)(),
                    p = (0, r.useRef)(!1),
                    { formatMessage: f } = (0, a.A)();
                return {
                    exitVibeRoom: (0, o.c)(async () => {
                        t &&
                            !p.current &&
                            (_(!0),
                            (p.current = !0),
                            (await t.exitRoom({ roomId: t.id })) === d.F.ERROR
                                ? m((0, n.jsx)(c.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR })
                                : i(),
                            _(!1),
                            (p.current = !1));
                    }),
                    isPending: u,
                };
            };
        },
        40907: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => R });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(2058),
                s = i(88969),
                l = i(17392),
                d = i(29993),
                c = i(79070),
                u = i(78275),
                _ = i(98148),
                m = i(52300),
                p = i(19934),
                f = i(21416),
                v = i(29504),
                x = i(29595),
                h = i(74965),
                b = i(4370),
                y = i(78940),
                g = i(72288),
                T = i(74773),
                C = i(66943),
                j = i(59378),
                A = i(56475),
                E = i(87999),
                N = i(70621),
                O = i(40887),
                S = i(16112),
                k = i(89718),
                I = i(59265),
                P = i.n(I);
            let R = (0, a.PA)((e) => {
                var t, i, a;
                let { wave: I, context: R, className: L, renderContextButton: M } = e,
                    {
                        collection: { vibeRooms: w },
                        settings: { isMobile: D },
                        user: B,
                    } = (0, g.g)(),
                    { formatMessage: z } = (0, o.A)(),
                    { notify: U } = (0, h.l)(),
                    H = (0, y.Z)(b.Z.collectionVibeRooms.href),
                    { state: F, toggleTrue: V, toggleFalse: Y } = (0, u.e)(!1),
                    W = w.items.find((e) => {
                        var t;
                        return (null == e || null == (t = e.wave) ? void 0 : t.pinId) === I.pinId;
                    }),
                    K = w.loadingState === T.G.PENDING,
                    { editVibeRoom: G, isPending: X } = (0, A.h)(W),
                    q = (0, d.c)(() => {
                        W && w.deleteRoomFromItems(W.id);
                    }),
                    {
                        handlePinClick: $,
                        handleExitClick: Z,
                        isExitPending: J,
                    } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            n = (0, S.A)(null == t ? void 0 : t.wave),
                            { exitVibeRoom: r, isPending: a } = (0, O.J)({ room: t, onRoomSuccessExit: i }),
                            o = (0, N.D)();
                        return {
                            handleExitClick: (0, d.c)(async () => {
                                (o({ actionType: E.ActionType.Remove, userInteractionType: E.UserInteractionType.Tap }), await r());
                            }),
                            handlePinClick: (0, d.c)(async () => {
                                (o({ actionType: E.ActionType.Pin, userInteractionType: E.UserInteractionType.Tap }), await n());
                            }),
                            isExitPending: a,
                        };
                    })({ room: W, onRoomSuccessExit: q }),
                    Q = (0, d.c)(async (e) => {
                        e &&
                            B.isAuthorized &&
                            !X &&
                            !J &&
                            (await w.getData(),
                            w.isRejected && U((0, n.jsx)(C.h, { error: z({ id: 'error-messages.error-during-action' }) }), { containerId: x.u.ERROR }));
                    }),
                    ee = (0, d.c)(() => {
                        Q(!0);
                    }),
                    et = (0, d.c)((e) => {
                        e.stopPropagation();
                    }),
                    ei = (0, d.c)(async (e) => {
                        X || (await G(e), Y());
                    }),
                    en = (0, c.L)(() =>
                        F && W && !D
                            ? (0, n.jsx)(j.A, {
                                  text: W.name,
                                  className: P().renameInput,
                                  onChangeFinish: ei,
                                  readOnly: X,
                                  maxTextLength: 200,
                                  minTextLength: 1,
                                  placeholder: z({ id: 'vibe-actions.enter-title' }),
                                  'aria-label': z({ id: 'interface-actions.rename' }),
                                  shouldFinishOnKeyPress: !0,
                                  'data-test-id': l.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                              })
                            : null,
                    ),
                    er = (0, c.L)(() =>
                        K
                            ? (0, n.jsx)('div', {
                                  className: P().loader,
                                  'data-test-id': l.Kq.multivibe.MULTIVIBE_CONTEXT_MENU_LOADER,
                                  children: (0, n.jsx)(f.y, { size: 'xs' }),
                              })
                            : W
                              ? (0, n.jsx)(k.J, { room: W, className: L, onRenameClick: V, onPinClick: $, onExitClick: Z, isExitPending: J, isRenamePending: X })
                              : null,
                    ),
                    ea = (0, n.jsxs)(n.Fragment, {
                        children: [
                            er,
                            W && !K && (0, n.jsx)(_.c, { className: P().divider }),
                            (0, n.jsx)(p.Dr, {
                                className: L,
                                icon: (0, n.jsx)(m.I, { variant: 'twoUsers', size: 'xxs' }),
                                onClick: H,
                                'data-test-id': l.Kq.multivibe.MULTIVIBE_GO_TO_COLLECTION_BUTTON,
                                children: (0, n.jsxs)('span', {
                                    className: P().collection,
                                    children: [
                                        (0, n.jsx)(s.A, { id: 'interface-actions.show-all' }),
                                        (0, n.jsx)(v.HL, {
                                            variant: 'span',
                                            type: 'controls',
                                            size: 'xs',
                                            className: P().description,
                                            children: (0, n.jsx)(s.A, { id: 'page.vibe-rooms' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                if (M) return M({ context: null != (t = null == W ? void 0 : W.name) ? t : R, contextControl: en, onOpenChange: Q, children: ea });
                let eo = null != (a = null != (i = null == W ? void 0 : W.name) ? i : R) ? a : I.title,
                    es = z({ id: 'interface-actions.context-menu' });
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(P().controls, { [P().controls_renaming]: !!en }),
                    onClick: et,
                    onDoubleClick: et,
                    onKeyDown: et,
                    children: [
                        en,
                        (0, n.jsx)(p.W1, {
                            className: P().contextMenuButton,
                            wrapperClassName: (0, r.$)({ [P().contextMenu_hidden]: !!en }),
                            menuClassName: D ? void 0 : P().contextMenu,
                            isMobile: D,
                            size: 'xs',
                            variant: 'text',
                            icon: (0, n.jsx)(m.I, { variant: 'more', size: 'xs' }),
                            ariaLabel: eo ? ''.concat(eo, ': ').concat(es) : es,
                            onShow: ee,
                            returnFocus: !en,
                            'data-test-id': l.OA.vibe.HORIZONTAL_VIBE_CONTEXT_MENU_BUTTON,
                            children: ea,
                        }),
                    ],
                });
            });
        },
        41867: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        44084: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var n = i(23877),
                r = i(74021);
            class a extends r.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= n.c.INFO && this.logToConsole(n.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= n.c.DEBUG && this.logToConsole(n.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= n.c.TRACE && this.logToConsole(n.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= n.c.WARNING && this.logToConsole(n.c.WARNING, e, t), this.sendToErrorBooster(n.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= n.c.ERROR && this.logToConsole(n.c.ERROR, e, t), this.sendToErrorBooster(n.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(n.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let r = n.Q[e];
                    console[r](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => r, g: () => a });
            var n = i(53548);
            let r = (0, n.createContext)({
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
                a = () => (0, n.useContext)(r);
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var n = i(88800),
                r = i(84961),
                a = i(17392),
                o = i(52300),
                s = i(19934),
                l = i(108),
                d = i(72288);
            let c = (0, r.PA)((e) => {
                let { isLiked: t, onClick: i, className: r, iconClassName: c, albumType: u, disabled: _ } = e,
                    { user: m } = (0, d.g)(),
                    p = t ? 'liked' : 'like',
                    f = (0, l.$)(t, u);
                return (0, n.jsx)(s.Dr, {
                    className: r,
                    onClick: i,
                    icon: (0, n.jsx)(o.I, { className: c, variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: _ || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: f,
                });
            });
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => T });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(21284),
                d = i(29993),
                c = i(79070),
                u = i(78275),
                _ = i(90688),
                m = i(19994),
                p = i(69704),
                f = i(35402),
                v = i(35412);
            let x = (e, t, i) => {
                let n = (n) => {
                    let r = (n + e / 30) % 12,
                        a = t * Math.min(i, 1 - i);
                    return i - a * Math.max(-1, Math.min(r - 3, 9 - r, 1));
                };
                return [n(0), n(8), n(4)];
            };
            var h = i(8655);
            let b = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var y = i(68817),
                g = i.n(y);
            let T = (0, a.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [y, T] = (0, o.useState)(null),
                    { state: C, toggleTrue: j } = (0, u.e)(!1),
                    { state: A, toggleTrue: E, toggleFalse: N } = (0, u.e)(!1),
                    { theme: O } = (0, p.W)(),
                    S = (0, o.useRef)(null),
                    k = t.entityType === l.h.ARTIST,
                    I = t.entityType === l.h.ALBUM || t.entityType === l.h.TRACK || t.entityType === l.h.PLAYLIST,
                    P = t.cover.color,
                    R = t.cover.uri,
                    L = (0, d.c)(async () => {
                        if (C) {
                            if (!P) return void E();
                            if (O) {
                                N();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: n,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: n } = e,
                                            { h: r, s: a, l: o } = (0, v.g8)(t);
                                        if (n) {
                                            if (i === h.S.Dark) {
                                                let e = b(a + 5, 50, 100);
                                                return { color: x(r, e, b(o - 40, 12, 25)), glow1: x(r, e, b(o - 5, 45, 60)), glow2: x(r, e, b(o + 35, 80, 90)) };
                                            }
                                            let e = b(a - 2, 50, 100);
                                            return { color: x(r, e, b(o + 43, 80, 95)), glow1: x(r, e, b(o + 5, 45, 75)), glow2: x(r, e, b(o, 35, 55)) };
                                        }
                                        return { color: x(r, (a > 25 ? Math.min(a + 25, 60) : a) / 100, (o > 20 ? Math.min(o + 15, 60) : o) / 100) };
                                    })({ averageColor: P, theme: O, custom: !t.entityType }),
                                    r = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: n },
                                        ],
                                    });
                                (await (null == y ? void 0 : y.setThemeData(r)), E());
                            }
                        }
                    }),
                    M = (0, d.c)(() => {
                        (j(), L());
                    });
                ((0, o.useEffect)(() => {
                    i ? null == y || y.play() : null == y || y.pause();
                }, [y, i]),
                    (0, o.useEffect)(() => {
                        L();
                    }, [P, L, O, C]),
                    (0, o.useEffect)(() => {
                        if (y)
                            return (
                                y.setUseFrameInterpolation(!1),
                                y.setRenderConfig({ devicePixelRatio: 0.1 }),
                                y.addEventListener('load', M),
                                () => {
                                    y.removeEventListener('load', M);
                                }
                            );
                    }, [y, M]));
                let w = !C || !A,
                    D = (0, c.L)(() => {
                        if (!S.current) return;
                        let e = k ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(S.current.clientWidth * e, 'px') };
                    });
                return (0, n.jsxs)('div', {
                    ref: S,
                    className: (0, r.$)(g().root, a, { [g().root_loading]: w }),
                    style: D,
                    'data-test-id': w ? s.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, n.jsxs)('div', {
                            className: (0, r.$)(g().cover, { [g().cover_round]: k, [g().cover_square]: I, [g().cover_loading]: w }),
                            children: [
                                t.entityType &&
                                    R &&
                                    (0, n.jsx)(_._V, { src: R, size: 200, fit: 'cover', withAvatarReplace: !0, className: g().image, withLoadingIndicator: !1 }),
                                (0, n.jsx)(f.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: T, className: g().animation }),
                            ],
                        }),
                        (0, n.jsx)(m.W, { className: (0, r.$)(g().shimmer, { [g().shimmer_loading]: w }), isActive: !0, radius: k ? 'round' : 'm' }),
                    ],
                });
            });
        },
        46079: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            let n = (0, i(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var n = i(53548),
                r = i(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, n.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let n = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(n, ' ').concat(i);
                }, [t, e]);
            };
        },
        48215: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => R });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(29993),
                u = i(79070),
                _ = i(17610),
                m = i(29504),
                p = i(66264),
                f = i(58217),
                v = i(78940),
                x = i(72288),
                h = i(24548),
                b = i(85587),
                y = i(90224),
                g = i(91292),
                T = i(32947),
                C = i(62837),
                j = i(38514),
                A = i(69553),
                E = i(6667),
                N = i(85463),
                O = i(32138),
                S = i(65462),
                k = i.n(S),
                I = i(87724),
                P = i.n(I);
            let R = (0, a.PA)((e) => {
                var t, i, a, S, I, R, L;
                let {
                        track: M,
                        className: w,
                        withPodcastName: D,
                        withDate: B,
                        withSecondaryColor: z = !1,
                        withListeningProgress: U = !1,
                        captionSize: H = 'm',
                        explicitSize: F = 'xs',
                        withExplicitMark: V,
                        titleContainerClassName: Y,
                        textClassName: W,
                        playContextParams: K,
                        withTimeLeftText: G = !0,
                        ignoreDislikedStyles: X,
                        withCustomTooltip: q = !0,
                        withSavingQueryParams: $,
                        beforeTitle: Z,
                        afterTitle: J,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: ee,
                        progressClassName: et,
                        withAlbumTitleLink: ei,
                    } = e,
                    {
                        fullscreenPlayer: en,
                        sonataState: er,
                        slam: ea,
                        settings: { isMobile: eo },
                    } = (0, x.g)(),
                    { formatMessage: es, formatDate: el } = (0, s.A)(),
                    ed = (0, E.$)({ withCustomTooltip: q }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, v.Z)(null != (R = null == (t = M.mainAlbum) ? void 0 : t.url) ? R : ''),
                    e_ = !!(U && K && M.shouldRememberPosition && M.streamProgress && M.durationMs),
                    em =
                        M.id === (null == (i = er.entityMeta) ? void 0 : i.id) &&
                        (null == (S = er.entityMeta) || null == (a = S.streamProgress) ? void 0 : a.endPositionSec),
                    ep = (0, O.d)(e_, M.streamProgress, em),
                    ef = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: n,
                                mainAlbum: r,
                                shouldHidePodcastInfo: a,
                                withPodcastName: o,
                                withDate: s,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, A.q)(e, { isMobile: i, isOfflineModeEnabled: n, query: c }),
                            _ = (null == l || l) && e.disclaimers ? (0, C.DQ)(e.disclaimers) : null,
                            m = null != o && o && !a ? r : null,
                            p = m && (null == d || d) ? (0, j.L)(m.id) : null,
                            f = (null == s || s) && !a ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            x = (0, T.L)(v),
                            h = !!(f && [T.r.TODAY, T.r.YESTERDAY].includes(x));
                        return { ...u, explicitMark: _, album: m, albumLink: p, pubDate: f, dateType: x, isSoonDate: h };
                    })(M, {
                        isMobile: eo,
                        isOfflineModeEnabled: ea.isOfflineModeEnabled,
                        mainAlbum: M.mainAlbum,
                        shouldHidePodcastInfo: ep,
                        withPodcastName: D,
                        withDate: B,
                        withExplicitMark: V,
                        withAlbumTitleLink: ei,
                        query: $ ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, i, n, r) => {
                        var a, o;
                        let { canEnableCustomTooltip: s, isMobile: l } = r,
                            d = t.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (o = e.version) ? o : ''),
                            _ = t.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            m = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case T.r.TODAY:
                                    m = i({ id: 'interface-actions.date-today' });
                                    break;
                                case T.r.YESTERDAY:
                                    m = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case T.r.DATE_WITH_YEAR:
                                    m = n(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    m = n(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: s || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: s ? void 0 : t.version,
                            isTooltipEnabled: s && !l,
                            albumAriaLabel: _,
                            albumTitleAttribute: s || null == (a = t.album) ? void 0 : a.title,
                            dateText: m,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(M, ef, es, el, { canEnableCustomTooltip: ed, isMobile: eo }),
                    ex = (0, f.l)({ entity: null != (L = M.mainAlbum) ? L : null, entityType: b.n.PODCAST, callback: eu }),
                    eh = (0, c.c)((e) => {
                        (en.modal.isOpened && en.modal.close(), ex(e));
                    }),
                    eb = (0, N.O)({ track: M, withSavingQueryParams: $, entityType: b.n.PODCAST }),
                    ey = (0, o.useCallback)(
                        (e) =>
                            (0, n.jsx)(_.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: h.V,
                                children: (0, n.jsx)(m.HL, {
                                    className: k().title,
                                    type: 'entity',
                                    size: H,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, H, ev.displayTitle],
                    ),
                    eg = null == (I = ef.link) ? void 0 : I.href,
                    eT = (0, o.useMemo)(
                        () =>
                            ef.shouldShowRemovedTitle
                                ? (0, n.jsx)(_.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: h.V,
                                      children: (0, n.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eg
                                  ? (0, n.jsx)(g.N, {
                                        onClick: eb,
                                        className: k().albumLink,
                                        href: eg,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: ey(),
                                    })
                                  : ey({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, ef.shouldShowRemovedTitle, eg, ev.displayTitle, ey, ev.titleAttribute, eb, ev.ariaLabel],
                    ),
                    eC = (0, u.L)(() => {
                        let e = ef.album;
                        if (!e) return;
                        let t = (0, n.jsx)(_.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: h.V,
                            children: (0, n.jsx)(m.HL, { variant: 'span', type: 'entity', size: H, className: k().albumTitle, children: e.title }),
                        });
                        return ef.albumLink
                            ? (0, n.jsx)(g.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: k().link,
                                  href: ef.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: eh,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, n.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, n.jsx)('div', {
                    className: (0, r.$)(k().root, { [k().root_disabled]: !M.isAvailable, [k().root_disliked]: M.isDisliked && !X, [k().root_withSecondaryColor]: z }, w),
                    children: (0, n.jsxs)('div', {
                        className: (0, r.$)(k().metaContainer, P().podcastMetaContainer, ee),
                        children: [
                            e_ &&
                                K &&
                                M.streamProgress &&
                                (0, n.jsx)(p.B, {
                                    className: (0, r.$)(P().progress, et, {
                                        [P().progress_withPreviousInfo]: ef.album || ef.pubDate,
                                        [P().progress_disabled]: !M.isAvailable || M.isDisliked,
                                    }),
                                    id: M.id,
                                    albumId: M.albumId,
                                    streamProgress: M.streamProgress,
                                    durationMs: M.durationMs || 0,
                                    playContextParams: K,
                                    withTimeLeftText: G,
                                }),
                            (0, n.jsxs)('div', {
                                className: (0, r.$)(k().titleContainer, Y, P().podcastTitleContainer),
                                children: [
                                    (0, n.jsxs)(m.HL, {
                                        className: (0, r.$)(k().text, W),
                                        type: 'entity',
                                        size: H,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            Z,
                                            eT,
                                            ef.version &&
                                                (0, n.jsxs)(m.HL, {
                                                    className: (0, r.$)(k().text, k().version),
                                                    type: 'entity',
                                                    size: H,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', ef.version],
                                                }),
                                        ],
                                    }),
                                    ef.explicitMark &&
                                        (0, n.jsx)(y.N, {
                                            containerClassName: k().explicitMarkContainer,
                                            getDescriptionTexts: M.getDescriptionTexts,
                                            variant: ef.explicitMark,
                                            className: k().explicitMark,
                                            size: F,
                                            trackId: M.id,
                                        }),
                                    J,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, n.jsxs)(m.HL, {
                                    type: 'entity',
                                    size: H,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, r.$)(k().text, P().podcastName, W),
                                    children: [
                                        eC,
                                        null !== ev.dateText &&
                                            (0, n.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: H,
                                                className: (0, r.$)({
                                                    [P().dateWithName]: !!ef.album,
                                                    [P().soonDate]: ef.isSoonDate,
                                                    [P().dateDisabled]: !M.isAvailable,
                                                    [P().dateDisliked]: M.isDisliked && !X,
                                                }),
                                                children: ev.dateText,
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        48468: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        52150: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n });
            let n = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var n = i(88800),
                r = i(4370),
                a = i(15077),
                o = i(42729);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, n.jsx)(o.O, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: r.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var n = i(88800),
                r = i(53548),
                a = i(2058),
                o = i(17392),
                s = i(96817),
                l = i(52300),
                d = i(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: c,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: f,
                            forwardRef: v,
                            style: x,
                            children: h,
                        } = e,
                        { formatMessage: b } = (0, a.A)(),
                        y = b({ id: 'trailer.button-aria-label' });
                    return (0, n.jsx)(s.$, {
                        className: f,
                        color: 'secondary',
                        radius: c,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: m,
                        ref: v,
                        icon: (0, n.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': d.N,
                        style: x,
                        'data-test-id': o.S7.TRAILER_BUTTON,
                        children: h,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
        },
        56475: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => u });
            var n = i(88800),
                r = i(53548),
                a = i(2058),
                o = i(29993),
                s = i(29595),
                l = i(74965),
                d = i(27506),
                c = i(66943);
            let u = (e) => {
                let [t, i] = (0, r.useState)(!1),
                    { notify: u } = (0, l.l)(),
                    _ = (0, r.useRef)(!1),
                    { formatMessage: m } = (0, a.A)();
                return {
                    editVibeRoom: (0, o.c)(async (t) => {
                        e &&
                            !_.current &&
                            (i(!0),
                            (_.current = !0),
                            (await e.editRoom({ roomId: e.id, name: t })) === d.F.ERROR &&
                                u((0, n.jsx)(c.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }),
                            i(!1),
                            (_.current = !1));
                    }),
                    isPending: t,
                };
            };
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        59265: (e) => {
            e.exports = {
                controls: 'MultivibeContextMenu_controls__YNvPC',
                controls_renaming: 'MultivibeContextMenu_controls_renaming__ojUjw',
                contextMenu: 'MultivibeContextMenu_contextMenu__F1lu5',
                contextMenu_hidden: 'MultivibeContextMenu_contextMenu_hidden__01LaD',
                contextMenuButton: 'MultivibeContextMenu_contextMenuButton__7_r0x',
                collection: 'MultivibeContextMenu_collection__7dnDT',
                description: 'MultivibeContextMenu_description__v_EaQ',
                divider: 'MultivibeContextMenu_divider__84xJC',
                loader: 'MultivibeContextMenu_loader__iTBIV',
                renameInput: 'MultivibeContextMenu_renameInput___vU4d',
            };
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var n = i(4086),
                r = i(41928);
            let a = () => (0, r.N)().get(n.SX);
        },
        60527: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let n = i(88800),
                r = i(53548),
                a = i(37531);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(68326);
            let s = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        i = (0, r.lazy)(() => t.loader().then(o)),
                        l = t.loading;
                    function d(e) {
                        let o = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            d = s ? r.Suspense : r.Fragment,
                            c = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(i, { ...e })] })
                                : (0, n.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(i, { ...e }) });
                        return (0, n.jsx)(d, { ...(s ? { fallback: o } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            var n = i(58217);
            let r = (e) => {
                let { album: t, callback: i, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        62270: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var n = i(88800),
                r = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                _ = i(54243);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [m, p] = (0, a.useState)(!1),
                    { formatMessage: f } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, n.jsx)(u.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let a = { ...(0, r.HO)(e), isLiked: !e.isLiked };
                    p(!0);
                    let o = await e.toggleLike();
                    (p(!1),
                        o === s.f.OK
                            ? i((0, n.jsx)(_.T, { artist: a }), { containerId: l.u.INFO })
                            : i((0, n.jsx)(u.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, m, f, i]);
            };
        },
        65453: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => d });
            var n,
                r = i(53548),
                a = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (r && (r += ' '), (r += n));
                                            else for (i in t) t[i] && (r && (r += ' '), (r += i));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    7354: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var a in ((n = {}), t)) 'key' !== a && (n[a] = t[a]);
                            else n = t;
                            return { $$typeof: i, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    3616: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let r = i(4377),
                            a = i(810),
                            o = i(5881),
                            s = n(i(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, r.jsx)('a', {}),
                                        block: i,
                                        target: n,
                                        rel: l,
                                        href: d,
                                        forwardRef: c,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: p,
                                        children: f,
                                        textClassName: v = '',
                                        containerClassName: x,
                                        ...h
                                    } = e,
                                    b = (0, a.useId)(),
                                    y = !a.Children.count(f),
                                    g = 'left' === u,
                                    T = null;
                                if (void 0 !== m) {
                                    var C;
                                    T = (0, a.cloneElement)(m, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !y && u },
                                            null == (C = m.props) ? void 0 : C.className,
                                        ),
                                        key: b,
                                    });
                                }
                                let j = (0, a.useMemo)(
                                    () =>
                                        m
                                            ? (0, r.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, x),
                                                  children: [g && T, !y && (0, r.jsx)('span', { className: v, children: f }), !g && T],
                                              })
                                            : f,
                                    [f, x, m, g, y, T, v],
                                );
                                return (0, a.cloneElement)(
                                    t,
                                    {
                                        ref: c,
                                        target: n,
                                        rel: '_blank' === n && void 0 === l ? 'noopener noreferrer' : l,
                                        href: d,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: i, [s.default.flexIcon]: m && _, [s.default.iconOnly]: m && y }, p),
                                        ...h,
                                        ...t.props,
                                    },
                                    j,
                                );
                            };
                        t.Link = (0, a.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = i.t(r, 2));
                    },
                },
                o = {};
            function s(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, s), i.exports);
            }
            ((s.d = (e, t) => {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = s(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var d = l.r;
            l.X;
        },
        66264: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => y });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(88969),
                l = i(17392),
                d = i(68254),
                c = i(52300),
                u = i(29504),
                _ = i(7123),
                m = i(39079),
                p = i(9630),
                f = i(72288),
                v = i(36303),
                x = i(91106),
                h = i(92152),
                b = i.n(h);
            let y = (0, a.PA)((e) => {
                var t, i, a, h, y, g, T, C, j;
                let { className: A, id: E, albumId: N, streamProgress: O, durationMs: S, playContextParams: k, withTimeLeftText: I = !0, isFinishedLabelHidden: P } = e,
                    R = (0, p.e)(),
                    { sonataState: L, album: M } = (0, f.g)(),
                    w = Math.floor(S / 1e3),
                    [D, B] = (0, o.useState)(!1),
                    z = (0, x.$)(),
                    { isPlaying: U, isCurrent: H } = (0, m.D)({ playContextParams: k, entityId: N ? ''.concat(E, ':').concat(N) : E });
                ((0, o.useEffect)(() => {
                    if (!H) return void B(!1);
                    let e =
                        null == R
                            ? void 0
                            : R.state.playerState.status.onChange(() => {
                                  (null == R ? void 0 : R.state.playerState.status.value) === _.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [R, O, H, U]),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == M || null == (e = M.meta) ? void 0 : e.listeningFinished)
                            ? (O.updateEndPositionSec(0), O.updateEverFinished(!0))
                            : (null == M ? void 0 : M.allTracksUnfinished) && O.updateEverFinished(!1);
                    }, [O, null == M ? void 0 : M.allTracksUnfinished, null == M || null == (t = M.meta) ? void 0 : t.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        (H &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            O &&
                            L.entityMeta.streamProgress.hasEverFinished !== O.hasEverFinished &&
                            O.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            w - ((null == O ? void 0 : O.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    H &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == O || O.updateEverFinished(!0)));
                    }, [
                        H,
                        null == L || null == (i = L.entityMeta) ? void 0 : i.streamProgress,
                        null == L || null == (h = L.entityMeta) || null == (a = h.streamProgress) ? void 0 : a.hasEverFinished,
                        O,
                        O.hasEverFinished,
                        O.endPositionSec,
                        w,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!H) return;
                        let e =
                            null == R
                                ? void 0
                                : R.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = R.state.playerState.progress.value,
                                          i = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && O.updateEndPositionSec(t.position),
                                          H &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [R, O, H, U, D, E, null == L ? void 0 : L.entityMeta]));
                let F = (H && (null == L || null == (g = L.entityMeta) || null == (y = g.streamProgress) ? void 0 : y.endPositionSec)) || O.endPositionSec,
                    V = (0, v.m)(null != F ? F : 0, w),
                    Y = (0, o.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((H && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == O ? void 0 : O.hasEverFinished) ||
                                (null == M || null == (i = M.meta) ? void 0 : i.listeningFinished)) &&
                            !P
                        )
                            return (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, r.$)(b().text, { [b().text_withoutTimeLeft]: !I }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, n.jsx)(s.A, { id: 'time.finished' }),
                                    }),
                                    (0, n.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: b().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!F || 0 === F) return;
                        let a = w - F,
                            o = z(a);
                        return (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, r.$)(b().text, { [b().text_withoutTimeLeft]: !I }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                a > 1 || P
                                    ? (0, n.jsx)(d.q, {
                                          'aria-valuetext': V,
                                          'aria-busy': H && U,
                                          value: F,
                                          max: w,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, n.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: b().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        w,
                        null == O ? void 0 : O.hasEverFinished,
                        I,
                        z,
                        H,
                        U,
                        null == L || null == (C = L.entityMeta) || null == (T = C.streamProgress) ? void 0 : T.hasEverFinished,
                        null == M || null == (j = M.meta) ? void 0 : j.listeningFinished,
                        P,
                        F,
                        V,
                    ]);
                return (0, n.jsx)('div', { className: (0, r.$)(b().root, A), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: Y });
            });
        },
        68326: (e, t, i) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                i(88800),
                i(53405),
                i(96669),
                i(86900));
        },
        68817: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        70396: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        71344: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => f });
            var n = i(88800),
                r = i(87999),
                a = i(7833),
                o = i(14661),
                s = i(63765),
                l = i(46811),
                d = i(27639),
                c = i(4196),
                u = i(58378),
                _ = i(91198),
                m = i(67665),
                p = i(91087);
            let f = (e) => {
                let { renderVibeControls: t, item: i, index: f, pageId: v, sendSearchFeedback: x, blockPosition: h = 0, objectPosX: b, objectPosY: y } = e;
                switch (i.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.PodcastEpisode,
                                objectId: i.data.id,
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(u.c, { pageId: v, track: i.data }),
                            },
                            i.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, n.jsx)(u.c, { pageId: v, track: i.data });
                    case o.n.TRACK:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Track,
                                objectId: i.data.id,
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: x, id: i.data.entityId, type: s.o.TRACK, blockPosition: h, position: f },
                                    children: (0, n.jsx)(u.c, { pageId: v, track: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Artist,
                                objectId: i.data.id,
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: x, id: i.data.id, type: s.o.ARTIST, blockPosition: h, position: f },
                                    children: (0, n.jsx)(d.c, { pageId: v, artist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Playlist,
                                objectId: i.data.id,
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: x, id: i.data.id, type: s.o.PLAYLIST, blockPosition: h, position: f },
                                    children: (0, n.jsx)(c.v, { pageId: v, playlist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Podcast,
                                objectId: String(i.data.id),
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: i.data.id, type: s.o.PODCAST, blockPosition: h, position: f },
                                        children: (0, n.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Album,
                                objectId: String(i.data.id),
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(
                                    p.N.Provider,
                                    {
                                        value: { sendSearchFeedback: x, id: i.data.id, type: s.o.ALBUM, blockPosition: h, position: f },
                                        children: (0, n.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.WAVE: {
                        let e = i.data;
                        return (0, n.jsx)(
                            a.B,
                            {
                                objectType: r.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: b,
                                objectPosY: y,
                                children: (0, n.jsx)(p.N.Provider, {
                                    value: { sendSearchFeedback: x, id: e.seedsId, type: s.o.WAVE, blockPosition: h, position: f },
                                    children: (0, n.jsx)(m.H, { vibe: e, controls: t(e), cover: e.cover, description: e.description, agentVariant: _.h.SMALL }),
                                }),
                            },
                            e.stationId,
                        );
                    }
                    default:
                        return null;
                }
            };
        },
        73805: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => L });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(87999),
                d = i(17392),
                c = i(29993),
                u = i(52300),
                _ = i(17610),
                m = i(29504),
                p = i(42174),
                f = i(96817);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: r, iconClassName: a, iconSize: l, size: c = 's', ariaLabel: _ } = e,
                    { formatMessage: m } = (0, s.A)(),
                    p = null != _ ? _ : m({ id: 'play-queue.delete-from-queue' }),
                    v = (0, o.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, n.jsx)(f.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, n.jsx)(u.I, { size: l, className: a, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var x = i(5407),
                h = i(57934),
                b = i(55693),
                y = i(72288),
                g = i(49738),
                T = i(56446),
                C = i(64546),
                j = i(29831),
                A = i(30123),
                E = i(54965),
                N = i(1829),
                O = i(82092),
                S = i.n(O),
                k = i(79262),
                I = i(41867),
                P = i.n(I);
            let R = (0, a.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, n.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, n.jsx)(k.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                L = (0, a.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: a,
                            withLightning: f,
                            ignoreDislikedStyles: O,
                            onLikeClick: k,
                            utmLink: I,
                            withSecondaryColor: P,
                            handleRemove: L,
                            withTrailer: M = !0,
                            likeIconSize: w = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: U } = (0, y.g)(),
                        { formatMessage: H } = (0, s.A)(),
                        { sendLikeSearchFeedback: F } = (0, b.z)(),
                        [V, Y] = (0, o.useState)(!1),
                        [W, K] = (0, o.useState)(!1),
                        G = (0, x.P)(),
                        X = (0, p.K)(a),
                        {
                            duration: q,
                            lightning: $,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var n;
                            let { withLightning: r, isUGC: a } = t,
                                o = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / A.k7);
                                              return (0, E.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== o ? { text: o, ariaLabel: (0, j.j)(Math.round((null != (n = e.durationMs) ? n : 0) / 1e3), i) } : null,
                                lightning: r ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: a ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(a, { withLightning: f, isUGC: a.isUGC }, H),
                        J = (0, h.F)(),
                        Q = z.hasPlus,
                        ee = !a.isRemoved && a.isAvailable && !B,
                        et = (0, c.c)(async () => {
                            (V || a.isLiked || (Y(!0), null == F || F()), await X(), null == k || k(a.isLiked));
                        }),
                        ei = (0, c.c)((e) => {
                            e.stopPropagation();
                        }),
                        en = (0, c.c)((e) => {
                            if ((e.stopPropagation(), G())) return void e.preventDefault();
                            (U.openTrackTrailer(a.id), J(l.DomainObjectType.Track, a.id));
                        }),
                        er = (0, o.useMemo)(() => {
                            if (ee)
                                return (0, n.jsx)('div', {
                                    onClick: ei,
                                    children: (0, n.jsx)(N._, {
                                        track: a,
                                        open: W,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, n.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: I,
                                        className: (0, r.$)(S().contextMenu, { [S().contextMenu_visible]: W }),
                                        handleRemove: L,
                                        withTrailer: M,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, L, W, ee, M, a, I]);
                    return (0, n.jsxs)('div', {
                        className: (0, r.$)(S().root, S().controls, i, {
                            [S().controls_dislikedControls]: a.isDisliked,
                            [S().controls_dislikedColors]: a.isDisliked && !O,
                            [S().controls_disabled]: !a.isAvailable,
                            [S().root_withSecondaryColor]: P,
                        }),
                        children: [
                            $ && (0, n.jsx)(u.I, { 'aria-label': $.label, size: 'xxs', className: S().lightning, variant: 'lightning' }),
                            Z &&
                                (0, n.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, n.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, n.jsx)(_.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, n.jsx)('div', { className: (0, r.$)(S().item, S().downloadIcon), children: (0, n.jsx)(R, { track: a }) }),
                            L && !B && (0, n.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(S().item, S().removeButton), onClick: L, ariaLabel: D }),
                            ee &&
                                (0, n.jsx)(C.WithOffline, {
                                    fallback: (0, n.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: w,
                                        className: (0, r.$)(S().item, S().likeIcon),
                                        isLiked: a.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = a.trailer) ? void 0 : t.isAvailable) &&
                                a.isAvailable &&
                                (0, n.jsx)(C.WithOffline, {
                                    fallback: (0, n.jsx)(T.k, {
                                        className: (0, r.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: en,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, n.jsxs)('div', {
                                className: (0, r.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, n.jsx)(m.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(S().duration, { [S().duration_hidden]: W && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, n.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => l });
            var n = i(14567),
                r = i(243),
                a = i(62151),
                o = i(33396);
            let s = () => 'SECRET';
            class l {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: i }) {
                    ((this.maxLogLevel = t), (this.secureFields = i), (this.additionalData = e));
                }
                formatMessage(e, t, i = {}, r) {
                    let a,
                        s = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, o.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (a = this.obfuscateData(l)), r) ? `${s} ${n(a)}` : [s, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, r.A)(e, t) && (0, a.A)(e, t, s());
                    return e;
                }
            }
        },
        76124: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }));
            let n = i(70405)._(i(60527));
            function r(e, t) {
                var i;
                let r = {};
                'function' == typeof e && (r.loader = e);
                let a = { ...r, ...t };
                return (0, n.default)({ ...a, modules: null == (i = a.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        76816: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => m });
            var n = i(88800),
                r = i(65724),
                a = i(2058),
                o = i(17392),
                s = i(79070),
                l = i(52300),
                d = i(29504),
                c = i(90224),
                u = i(34250),
                _ = i.n(u);
            let m = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: i,
                        description: u,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: f,
                        version: v,
                        title: x,
                        artistsComponent: h,
                        likesCount: b,
                        isLiked: y,
                        releaseYear: g,
                        titleLineClamp: T = 1,
                    } = e,
                    { formatMessage: C, formatNumber: j } = (0, a.A)(),
                    A = (0, s.L)(() => {
                        let e = null == h ? void 0 : h((0, r.$)(_().text, _().artistLink), (0, r.$)(_().text, _().artistCaption));
                        if (!e && !b) return;
                        let t = (0, n.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, n.jsxs)('div', {
                            className: _().subtitle,
                            'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof b &&
                                    b > 0 &&
                                    (0, n.jsxs)('div', {
                                        className: _().likesCount,
                                        'aria-label': C({ id: 'entity-names.likes-counter' }, { counter: b }),
                                        'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, n.jsx)(l.I, {
                                                className: _().icon,
                                                variant: y ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, n.jsx)(d.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: j(b),
                                            }),
                                        ],
                                    }),
                                !!b && e && t,
                                e,
                                !!g && e && t,
                                (0, n.jsx)(d.HL, { variant: 'span', size: 'm', weight: 'medium', children: g }),
                            ],
                        });
                    });
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(_().root, { [_().root_disabled]: i, [_().root_disliked]: t }, f),
                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, n.jsxs)('div', {
                            className: _().titleContainer,
                            children: [
                                (0, n.jsxs)(d.HL, {
                                    className: (0, r.$)(_().text, _().title, { [_().title_withVersion]: v }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        v &&
                                            (0, n.jsx)(d.HL, {
                                                className: (0, r.$)(_().text, _().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(v),
                                            }),
                                    ],
                                }),
                                p && (0, n.jsx)(c.N, { className: _().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        u &&
                            (0, n.jsx)(d.HL, {
                                className: (0, r.$)(_().text, _().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': o.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        A,
                    ],
                });
            };
        },
        80932: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        82092: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        82474: (e, t, i) => {
            'use strict';
            i.d(t, { SearchHistoryPage: () => A });
            var n = i(88800),
                r = i(55482),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(88969),
                d = i(58390),
                c = i(17392),
                u = i(79070),
                _ = i(96817),
                m = i(52300),
                p = i(66719),
                f = i(29504),
                v = i(71344),
                x = i(37717),
                h = i(39631),
                b = i(98427),
                y = i(46422),
                g = i(44230),
                T = i(72288),
                C = i(12342),
                j = i.n(C);
            let A = (0, a.PA)(() => {
                let e = (0, h._)(),
                    {
                        search: t,
                        user: i,
                        settings: { isMobile: a },
                    } = (0, T.g)(),
                    { setContentScrollRef: C } = (0, g.g)(),
                    { formatMessage: A } = (0, s.A)(),
                    E = (0, y.W)(),
                    N = (0, o.useRef)(!1),
                    O = (0, o.useRef)(null),
                    S = (0, x.t)(() => {
                        N.current = !0;
                    }),
                    k = t.historyPage.items.length;
                (i.isAuthorized && (0, d.notFound)(),
                    (0, o.useEffect)(() => {
                        O.current && E.canBack && O.current.focus();
                    }, [E.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == N ? void 0 : N.current) ? (t.resetHistoryItems(), (N.current = !1)) : t.resetHistoryStateRequest();
                        },
                        [t],
                    ));
                let I = (0, o.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == E || E.back();
                            }, 200),
                        [E],
                    ),
                    P = (0, u.L)(() =>
                        k
                            ? (0, n.jsx)('div', {
                                  className: j().items,
                                  children: t.historyPage.items.reduce((t, i, n) => {
                                      let r = (0, v.G)({ item: i, index: n, pageId: b.b.SEARCH, objectPosX: 1, objectPosY: t.length + 1, renderVibeControls: e });
                                      return ((0, o.isValidElement)(r) && t.push(r), t);
                                  }, []),
                              })
                            : (0, n.jsx)(f.HL, {
                                  className: j().emptyHistory,
                                  variant: 'div',
                                  size: 'm',
                                  type: 'text',
                                  children: (0, n.jsx)(l.A, { id: 'search.history-empty' }),
                              }),
                    );
                return (
                    t.isHistoryReady && i.account.data.uid && (0, o.use)(t.getHistory({ userId: i.account.data.uid })),
                    (0, n.jsx)('div', {
                        className: j().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, n.jsxs)(p.N, {
                            className: j().scrollContent,
                            containerClassName: j().scrollContainer,
                            ref: C,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: j().header,
                                    children: [
                                        (0, n.jsxs)('div', {
                                            className: j().title,
                                            children: [
                                                E.canBack &&
                                                    (0, n.jsx)(_.$, {
                                                        ref: O,
                                                        'aria-label': A({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !E.canBack,
                                                        size: 's',
                                                        icon: (0, n.jsx)(m.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: I,
                                                    }),
                                                (0, n.jsx)(f.DZ, { variant: 'h2', size: a ? 'm' : 'xl', children: (0, n.jsx)(l.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, n.jsx)(_.$, {
                                            'aria-label': A({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !k,
                                            size: a ? 's' : 'default',
                                            onClick: S,
                                            children: (0, n.jsx)(f.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, n.jsx)(l.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !t.isHistoryLoading && P,
                            ],
                        }),
                    })
                );
            });
        },
        83559: (e) => {
            e.exports = {
                root: 'HorizontalVibeControls_root__S1iQK',
                controls: 'HorizontalVibeControls_controls__AYIDP',
                bottom: 'HorizontalVibeControls_bottom__R4Elh',
                like: 'HorizontalVibeControls_like__ty4og',
                likeButton: 'HorizontalVibeControls_likeButton__77s_p',
                menu: 'HorizontalVibeControls_menu__83kQh',
                contextMenu: 'HorizontalVibeControls_contextMenu__rXU6_',
                contextMenuButton: 'HorizontalVibeControls_contextMenuButton__vX_59',
            };
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => m });
            var n = i(88800),
                r = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                _ = i(30832);
            let m = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [m, p] = (0, a.useState)(!1),
                    { formatMessage: f } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, n.jsx)(u.h, { error: f({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (m) return;
                    let a = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                    p(!0);
                    let o = await e.toggleLike();
                    (p(!1),
                        o === s.f.OK
                            ? i((0, n.jsx)(_.T, { playlist: a }), { containerId: l.u.INFO })
                            : i((0, n.jsx)(u.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, m, e, f, i]);
            };
        },
        87724: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        87762: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var n = i(53548),
                r = i(52150);
            function a() {
                return (0, n.useContext)(r.H);
            }
        },
        89718: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => _ });
            var n = i(88800),
                r = i(84961),
                a = i(88969),
                o = i(17392),
                s = i(52300),
                l = i(19934),
                d = i(21416),
                c = i(72288),
                u = i(27817);
            let _ = (0, r.PA)((e) => {
                var t;
                let { room: i, onRenameClick: r, isRenamePending: _, onPinClick: m, onExitClick: p, isExitPending: f, className: v } = e,
                    {
                        settings: { isMobile: x },
                    } = (0, c.g)(),
                    h = !(null == i ? void 0 : i.isDisabled) && !x,
                    b = !(null == i ? void 0 : i.isDisabled) && !x;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        h && (0, n.jsx)(u.L, { className: v, onClick: m, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        b &&
                            (0, n.jsx)(l.Dr, {
                                className: v,
                                icon: (0, n.jsx)(s.I, { variant: 'edit', size: 'xxs' }),
                                onClick: r,
                                disabled: _,
                                spinner: _ ? (0, n.jsx)(d.y, { size: 'xs' }) : void 0,
                                'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, n.jsx)(a.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, n.jsx)(l.Dr, {
                            className: v,
                            icon: (0, n.jsx)(s.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: p,
                            disabled: f,
                            spinner: f ? (0, n.jsx)(d.y, { size: 'xs' }) : void 0,
                            'data-test-id': o.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, n.jsx)(a.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => f });
            var n = i(88800),
                r = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                _ = i(94398),
                m = i(17332),
                p = i.n(m);
            let f = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: m, variant: f, iconVariant: iconOverride, size: v = 'xxxs', ...x } = e,
                    { formatMessage: h } = (0, s.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, u.g)(),
                    [y, g] = (0, o.useState)(null);
                (0, o.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let {
                    iconVariant: T,
                    descriptionText: C,
                    isTooltipEnabled: j,
                    ariaLabel: A,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: n, isMobile: r } = e,
                        a = (null == n ? void 0 : n.join('\n')) || '';
                    return {
                        iconVariant: ((e) => {
                            switch (e) {
                                case c.JU.E:
                                    return 'explicit';
                                case c.JU.AGE_12:
                                case c.JU.AGE_16:
                                case c.JU.AGE_18:
                                    return 'adult';
                                case c.JU.EXCLAMATION:
                            }
                            return 'exclamation';
                        })(i),
                        descriptionText: a,
                        isTooltipEnabled: !!(null == n ? void 0 : n.length) && !r,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: f, descriptionTexts: y, isMobile: b }, h);
                return (0, n.jsx)(_.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, n.jsx)('span', {
                        className: m,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        f === c.JU.SUBSTITUTED ? (0, n.jsxs)('svg', {
                            className: (0, r.$)(p().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': A,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, n.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, n.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, n.jsx)(d.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': A,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : T,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...x,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                        }),
                        // for PulseSync: END render substituted-track badges and custom native disclaimer icons
                    }),
                });
            });
        },
        91106: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var n = i(53548),
                r = i(2058);
            let a = () => {
                let { formatMessage: e } = (0, r.A)();
                return (0, n.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = Math.floor(t / 60),
                            r = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(n) : n;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    n = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(n) : n;
                            })(Math.floor(t), i);
                        if (n < 60) return r(n, i);
                        let a = Math.floor(n / 60),
                            o = n % 60,
                            s = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(a, i);
                        return o > 0 ? ''.concat(s, ' ').concat(r(o)) : s;
                    },
                    [e],
                );
            };
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => m });
            var n = i(88800),
                r = i(53548),
                a = i(12389),
                o = i.n(a),
                s = i(29993),
                l = i(65453),
                d = i(46079),
                c = i(67174);
            let u = (e) => {
                    let [t, i] = (0, r.useState)(!1),
                        a = (0, s.c)(() => {
                            i(!0);
                        });
                    return (0, n.jsx)(o(), { prefetch: t, ...e, onMouseEnter: a });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: i, component: a, ...s } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, r.useContext)(d.j),
                        { href: p, target: f, rel: v } = (0, c.u)(null != i ? i : ''),
                        x = (0, r.isValidElement)(a)
                            ? a
                            : (function (e, t, i) {
                                  return e ? (t ? (0, n.jsx)(o(), { prefetch: !1 }) : i ? (0, n.jsx)(u, { href: e }) : (0, n.jsx)(o(), {})) : (0, n.jsx)('a', {});
                              })(i, _, m);
                    return (0, n.jsx)(l.N, { ref: t, component: x, href: i ? p : void 0, target: f, rel: v, ...s });
                },
                m = (0, r.forwardRef)((e, t) => (0, n.jsx)(_, { ...e, forwardedRef: t }));
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var n = i(58217);
            let r = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: i, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        92152: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        92966: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => f });
            var n = i(88800),
                r = i(2058),
                a = i(29993),
                o = i(87762),
                s = i(29595),
                l = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                _ = i(53548),
                m = i(79390),
                p = i(96295);
            let f = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: f },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, r.A)(),
                    { notify: x } = (0, l.l)(),
                    h = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, o] = (0, _.useState)(!1),
                            { formatMessage: f } = (0, r.A)();
                        return (0, a.c)(async (r) => {
                            let { album: a, withLink: l = !0, withNotification: d = !0 } = r;
                            if (i) return;
                            let _ = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            o(!0);
                            let v = await a.toggleLike();
                            if ((o(!1), !d)) return;
                            let x = t.modal.isOpened;
                            v === m.f.OK
                                ? e((0, n.jsx)(p.T, { withLink: l, album: _ }), { containerId: x ? s.u.FULLSCREEN_INFO : s.u.INFO })
                                : e((0, n.jsx)(c.h, { error: f({ id: 'error-messages.error-during-action' }) }), { containerId: x ? s.u.FULLSCREEN_ERROR : s.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: b } = (0, o.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return f({ pageAlbumId: b, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? h({ album: e })
                              : void x((0, n.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                });
            };
        },
        94177: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var i in t) Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
                })(t, {
                    bindSnapshot: function () {
                        return o;
                    },
                    createAsyncLocalStorage: function () {
                        return a;
                    },
                    createSnapshot: function () {
                        return s;
                    },
                }));
            let i = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw i;
                }
                getStore() {}
                run() {
                    throw i;
                }
                exit() {
                    throw i;
                }
                enterWith() {
                    throw i;
                }
                static bind(e) {
                    return e;
                }
            }
            let r = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return r ? new r() : new n();
            }
            function o(e) {
                return r ? r.bind(e) : n.bind(e);
            }
            function s() {
                return r
                    ? r.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var n = i(88800),
                r = i(17392),
                a = i(17610),
                o = i(29504),
                s = i(37438),
                l = i.n(s);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: s, placement: c = 'top', children: u } = e;
                    return (0, n.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, n.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, n.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        s && (0, n.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, n.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        95641: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        95993: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var n = i(58217),
                r = i(85587);
            let a = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: a } = e;
                return (0, n.l)({ entity: t, entityType: r.n.TRACK, callback: i, onReject: a, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var n = i(88800),
                r = i(84961),
                a = i(42729),
                o = i(5048);
            let s = (0, r.PA)((e) => {
                let { album: t, closeToast: i, withLink: r } = e,
                    s = (0, o.b)(t.type);
                return (0, n.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: s,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: r,
                });
            });
        },
        96669: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = i(20603);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                4814, 7437, 3469, 8194, 1833, 918, 9079, 1191, 1041, 9232, 8583, 6706, 4771, 1311, 5201, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 1800, 7746, 4732,
                9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 9337, 818, 812, 7555, 763, 2670, 7358,
            ],
            () => e((e.s = 28793)),
        ),
            (_N_E = e.O()));
    },
]);
