(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5160],
    {
        108: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(2058),
                n = i(61691);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        4795: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var r = i(72288),
                n = i(97956);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: o,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = o.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5048: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(61691),
                n = i(15077);
            let a = (e) => {
                switch (e) {
                    case r._.PODCAST:
                        return n.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        6087: (e, t, i) => {
            'use strict';
            i.d(t, { default: () => n.a });
            var r = i(76124),
                n = i.n(r);
        },
        7833: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => d });
            var r = i(88800),
                n = i(53548),
                a = i(63582),
                o = i(99875),
                s = i(66109),
                l = i(245);
            let d = (0, a.B)(
                { kind: 'provider', requiredProps: ['objectType', 'objectId', 'objectPosX', 'objectPosY'], pendingProps: ['objectId'], scope: 'object' },
                ({ children: e, objectId: t, objectPosX: i, objectPosY: a, objectType: d }) => {
                    let c = (0, l.N)(),
                        u = (0, n.useContext)(o.p)?.loadedSession,
                        m = [d, t, i, a].join(':'),
                        [p, f] = (0, n.useState)(() => ({ client: c, identity: m, blockSession: u, viewSession: c.createBlockViewSession() }));
                    (p.client !== c || p.identity !== m || p.blockSession !== u) &&
                        f({ client: c, identity: m, blockSession: u, viewSession: c.createBlockViewSession() });
                    let _ = (0, n.useMemo)(
                        () => ({ activeViewSession: null, scope: { objectId: t, objectPosX: i, objectPosY: a, objectType: d }, viewSession: p.viewSession }),
                        [t, i, a, d, p.viewSession],
                    );
                    return (0, r.jsx)(s.l, { value: _, children: e });
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
            i.d(t, { i: () => H });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(79070),
                l = i(17610),
                d = i(24548),
                c = i(29993),
                u = i(72288),
                m = i(35994);
            let p = (e, t) => {
                let { withLink: i, separator: r } = t,
                    n = i && !e.various ? (0, m.R)(e.id) : null;
                return { artist: e, name: e.name, separator: r, link: n };
            };
            var f = i(21010),
                _ = i.n(f),
                v = i(17392),
                h = i(29504),
                b = i(91292),
                x = i(2058),
                y = i(87999),
                g = i(80643),
                j = i(78940),
                A = i(55693),
                C = i(58217);
            let T = (0, a.PA)((e) => {
                    let { item: t, linkClassName: i, captionClassName: n, captionSize: a = 'm', allArtistsTitle: o, withCustomTooltip: s, hoverSettings: d } = e,
                        {
                            name: m,
                            link: p,
                            title: f,
                            ariaLabel: _,
                            tooltipText: T,
                            isTooltipEnabled: S,
                            handleNavigate: O,
                        } = ((e) => {
                            var t, i;
                            let { item: r, allArtistsTitle: n, withCustomTooltip: a } = e,
                                { formatMessage: o } = (0, x.A)(),
                                s = ((e, t) => {
                                    let { item: i, allArtistsTitle: r, withCustomTooltip: n } = e,
                                        a = r || i.name;
                                    return {
                                        ...i,
                                        title: n ? void 0 : a,
                                        ariaLabel: i.link ? t({ id: 'entity-names.artist-name' }, { artistName: i.name }) : void 0,
                                        tooltipText: a,
                                        isTooltipEnabled: !r && n,
                                    };
                                })({ item: r, allArtistsTitle: n, withCustomTooltip: a }, o),
                                {
                                    track: l,
                                    settings: { isMobile: d },
                                } = (0, u.g)(),
                                m = (0, j.Z)(null != (i = null == (t = s.link) ? void 0 : t.href) ? i : s.artist.url),
                                { sendNavigateSearchFeedback: p } = (0, A.z)(),
                                f = (0, g.S)(),
                                _ = (0, c.c)((e) => {
                                    (d && l.isOpened && l.close(), m(e));
                                }),
                                v = ((e) => {
                                    let { artist: t, callback: i } = e,
                                        { currentTrackInfo: r, fullscreenPlayer: n, fullscreenVideoPlayer: a } = (0, u.g)(),
                                        { modal: o } = r;
                                    return (0, C.l)({
                                        entity: t,
                                        callback: i,
                                        onBeforeHandle: (e) => {
                                            (null == e || e.stopPropagation(), o.isOpened && (r.reset(), o.close()), n.modal.isOpened && n.modal.close());
                                        },
                                        onAfterHandled: () => {
                                            a.modal.isOpened && (a.modal.close(), a.reset());
                                        },
                                        preventDefaultWhenSafe: !0,
                                    });
                                })({ artist: s.artist, callback: _ }),
                                h = (0, c.c)((e) => {
                                    (f({ to: y.AppScreen.ArtistScreen }), null == p || p(), v(e));
                                });
                            return { ...s, handleNavigate: h };
                        })({ item: t, allArtistsTitle: o, withCustomTooltip: s });
                    return p
                        ? (0, r.jsx)(b.N, {
                              ...p,
                              'aria-label': _,
                              className: i,
                              onClick: O,
                              title: f,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(l.m_, {
                                  enabled: S,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: T,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: n, children: m }),
                              }),
                          })
                        : (0, r.jsx)(l.m_, {
                              enabled: S,
                              offsetOptions: 4,
                              placement: 'top',
                              text: T,
                              hoverSettings: d,
                              children: (0, r.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: n,
                                  title: f,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: m,
                              }),
                          });
                }),
                S = (e) => {
                    let { group: t, linkClassName: i, captionClassName: n, captionSize: a, allArtistsTitle: s, withCustomTooltip: l, hoverSettings: d } = e;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            t.primary.separator,
                            (0, r.jsx)(T, {
                                item: t.primary,
                                linkClassName: i,
                                captionClassName: n,
                                captionSize: a,
                                allArtistsTitle: s,
                                withCustomTooltip: l,
                                hoverSettings: d,
                            }),
                            t.decomposed.map((e) =>
                                (0, r.jsxs)(
                                    o.Fragment,
                                    {
                                        children: [
                                            e.separator,
                                            (0, r.jsx)(T, {
                                                item: e,
                                                linkClassName: i,
                                                captionClassName: n,
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
            var O = i(88969),
                P = i(65453);
            let k = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(P.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(_().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(O.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var N = i(61013),
                E = i(87819),
                L = i(40634),
                R = i(48468),
                I = i.n(R);
            let w = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: n } = e;
                    return (0, r.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, E.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: n, children: t }),
                            (0, r.jsx)(l.ZI, { className: I().tooltipContent, children: i.map((e) => (0, r.jsx)(L.V, { artist: e, className: I().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, o.forwardRef)((e, t) => (0, r.jsx)(w, { forwardRef: t, ...e }));
            var D = i(19934),
                B = i(70396),
                z = i.n(B);
            let F = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, x.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, n.$)(z().root, z().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                U = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: n } = e,
                        [a, l] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, u.g)(),
                        m = (0, c.c)(() => {
                            let e = n.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        p = (0, s.L)(() =>
                            (0, N.A)(() => {
                                m();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', p),
                                m(),
                                () => {
                                    window.removeEventListener('resize', p);
                                }
                            ),
                            [p, m],
                        ),
                        (0, o.useEffect)(() => {
                            m();
                        }, [t, m]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(M, { artists: t, label: i })) : i;
                }),
                H = (0, a.PA)((e) => {
                    let {
                            className: t,
                            lineClamp: i,
                            spoilerClassName: a,
                            linkClassName: m,
                            captionClassName: f,
                            captionSize: v,
                            variant: h = 'breakAll',
                            spoilerComponent: b,
                            ...x
                        } = e,
                        y = ((e) => {
                            var t, i, r;
                            let { separator: n, visibleArtistsCount: a, withLink: s, withComposer: l, artistIdWithoutLink: d, withContextMenu: m } = e,
                                f = null != (t = e.artists) ? t : [],
                                _ = null == (i = e.withAllArtistsTitle) || i,
                                v = null == (r = e.withCustomTooltip) || r,
                                h = (0, o.useRef)(null),
                                [b, x] = (0, o.useState)(!1),
                                {
                                    settings: { isMobile: y },
                                } = (0, u.g)(),
                                g = ((!y || 1 === f.length) && m) || !m,
                                j = ((e, t) => {
                                    var i, r, n;
                                    let a = null == (i = null == t ? void 0 : t.withComposer) || i,
                                        o = null == (r = null == t ? void 0 : t.withLink) || r,
                                        s = null != (n = null == t ? void 0 : t.separator) ? n : ', ',
                                        l = e
                                            .flatMap((e) => {
                                                var t;
                                                let i = (null != (t = e.decomposed) ? t : []).map((e) => e.name);
                                                return [e.name, ...i];
                                            })
                                            .join(s),
                                        { visibleArtists: d, hiddenArtistsCount: c } = ((e, t) => {
                                            let { visibleArtistsCount: i, withComposer: r } = t;
                                            return {
                                                visibleArtists: (i ? e.slice(0, i) : e).filter((e) => r || !e.isComposer),
                                                hiddenArtistsCount: i && i < e.length ? e.length - i : 0,
                                            };
                                        })(e, { withComposer: a, visibleArtistsCount: null == t ? void 0 : t.visibleArtistsCount });
                                    return {
                                        groups: d.map((e, i) =>
                                            ((e, t) => {
                                                var i;
                                                let { withLink: r, separator: n, isFirst: a } = t;
                                                return {
                                                    primary: p(e, { withLink: r, separator: a ? void 0 : n }),
                                                    decomposed: (null != (i = e.decomposed) ? i : []).map((e) => {
                                                        let t = n ? e.separator : '';
                                                        return p(e, { withLink: r, separator: t });
                                                    }),
                                                };
                                            })(e, { withLink: o && e.id !== (null == t ? void 0 : t.artistIdWithoutLink), separator: s, isFirst: 0 === i }),
                                        ),
                                        allArtistsTitle: l,
                                        hiddenArtistsCount: c,
                                    };
                                })(f, { separator: n, visibleArtistsCount: b ? void 0 : a, withComposer: l, withLink: !!g && s, artistIdWithoutLink: d }),
                                A = _ ? j.allArtistsTitle : '',
                                C = (0, c.c)((e) => {
                                    (x(!0), e.preventDefault());
                                });
                            return {
                                artists: f,
                                groups: j.groups,
                                hiddenArtistsCount: j.hiddenArtistsCount,
                                allArtistsTitle: A,
                                withCustomTooltip: v,
                                withContextMenu: m,
                                labelRef: h,
                                handleOnSpoilerClick: C,
                                isTooltipEnabled: !!A && v && !m && !y,
                                title: !A || v || m ? void 0 : A,
                            };
                        })(x),
                        g = (0, s.L)(() =>
                            y.hiddenArtistsCount <= 0
                                ? null
                                : (0, o.isValidElement)(b)
                                  ? b
                                  : (0, r.jsx)(k, { spoilerClassName: a, spoilerArtistsCount: y.hiddenArtistsCount, handleOnSpoilerClick: y.handleOnSpoilerClick }),
                        ),
                        j = (0, r.jsx)(l.m_, {
                            referenceRef: y.labelRef,
                            enabled: y.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: y.allArtistsTitle,
                            hoverSettings: d.V,
                            children: (0, r.jsxs)('div', {
                                style: i ? { WebkitLineClamp: i } : void 0,
                                className: (0, n.$)(_().root, _()['root_variant_'.concat(h)], { [_().root_clamp]: i && i > 0, [_().ellipsis]: !i }, t),
                                title: y.title,
                                children: [
                                    y.groups.map((e) =>
                                        (0, r.jsx)(
                                            S,
                                            {
                                                group: e,
                                                linkClassName: m,
                                                captionClassName: f,
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
                    return y.withContextMenu ? (0, r.jsx)(U, { labelRef: y.labelRef, artists: y.artists, label: j }) : j;
                });
        },
        14567: (e, t) => {
            (e.exports = function (e, t, r, n) {
                return JSON.stringify(e, i(t, n), r);
            }).getSerialize = i;
            function i(e, t) {
                var i = [],
                    r = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return i[0] === t ? '[Circular ~]' : '[Circular ~.' + r.slice(0, i.indexOf(t)).join('.') + ']';
                        }),
                    function (n, a) {
                        if (i.length > 0) {
                            var o = i.indexOf(this);
                            (~o ? i.splice(o + 1) : i.push(this), ~o ? r.splice(o, 1 / 0, n) : r.push(n), ~i.indexOf(a) && (a = t.call(this, n, a)));
                        } else i.push(a);
                        return null == e ? a : e.call(this, n, a);
                    }
                );
            }
        },
        14661: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { n: () => r }),
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
                })(r || (r = {})));
        },
        15253: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n });
            var r = i(42824),
                n = (function (e) {
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
                        (e[(e.SavedUserLanguage = r.s)] = 'SavedUserLanguage'),
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
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        18278: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => d });
            var r = i(88800),
                n = i(53548),
                a = i(17392),
                o = i(29504),
                s = i(15526),
                l = i.n(s);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [s, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    s)
                )
                    return s.map((e, t) =>
                        (0, r.jsx)(
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
            var r = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (n && (n += ' '), (n += r));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    7998: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7141: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = r(i(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: i, radius: r = 'm', width: s, height: l, children: d, ...c } = e,
                                u = {};
                            return (
                                void 0 !== s && (u.width = 'string' == typeof s ? s : ''.concat(s, 'px')),
                                void 0 !== l && (u.height = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                (0, n.jsx)('div', {
                                    className: (0, a.clsx)(o.default.root, o.default['root_radius_'.concat(r)], { [o.default.root_active]: t }, i),
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
                n = {};
            function a(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (r[e].call(i.exports, i, i.exports, a), i.exports);
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
                        return r;
                    },
                }));
            let r = (0, i(94177).createAsyncLocalStorage)();
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
            var r;
            (i.d(t, { Q: () => n, c: () => r }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(r || (r = {})));
            let n = { [r.ERROR]: 'error', [r.WARNING]: 'warn', [r.INFO]: 'info', [r.DEBUG]: 'debug', [r.TRACE]: 'trace' };
        },
        24548: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        27817: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => u });
            var r = i(88800),
                n = i(84961),
                a = i(53548),
                o = i(88969),
                s = i(17392),
                l = i(52300),
                d = i(19934),
                c = i(72288);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: i, disabled: n, className: u, iconClassName: m } = e,
                    { user: p } = (0, c.g)(),
                    f = t ? 'unpin' : 'pin',
                    _ = t ? s.S7.CONTEXT_MENU_UNPIN_BUTTON : s.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, a.useMemo)(() => (t ? (0, r.jsx)(o.A, { id: 'interface-actions.unpin' }) : (0, r.jsx)(o.A, { id: 'interface-actions.pin' })), [t]);
                return (0, r.jsx)(d.Dr, {
                    className: u,
                    onClick: i,
                    icon: (0, r.jsx)(l.I, { className: m, variant: f, size: 'xxs' }),
                    'data-test-id': _,
                    disabled: n || !p.isAuthorized,
                    children: v,
                });
            });
        },
        29008: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => o, r: () => s });
            var r = i(53548),
                n = i(2058),
                a = i(61691),
                o = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let s = (e, t) => {
                let { formatMessage: i } = (0, n.A)();
                return (0, r.useMemo)(() => {
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
            var r,
                n = i(53548),
                a = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (n && (n += ' '), (n += r));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    8765: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
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
                    2445: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7742: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(8532),
                            s = r(i(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: i,
                                    likeControl: r,
                                    menuControl: l,
                                    pinControl: d,
                                    trailerControl: c,
                                    isVisible: u,
                                    radius: m = 'default',
                                    bottomContainerClassName: p,
                                    labelText: f,
                                } = e,
                                _ = c || i,
                                v = l || r;
                            return (0, n.jsxs)('div', {
                                className: (0, a.clsx)(
                                    s.default.root,
                                    s.default.controls,
                                    { [s.default.controls_visible]: u },
                                    s.default['controls_radius_'.concat(m)],
                                    t,
                                ),
                                children: [
                                    (0, n.jsx)('div', { className: s.default.top, children: d }),
                                    (0, n.jsxs)('div', {
                                        className: (0, a.clsx)(s.default.bottom, p),
                                        children: [
                                            _ && (0, n.jsxs)('div', { className: s.default.bottom_left, children: [c, i] }),
                                            v && (0, n.jsxs)('div', { className: s.default.bottom_right, children: [l, r] }),
                                        ],
                                    }),
                                    !!f && (0, n.jsx)(o.Label, { className: s.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let n = i(4377),
                            a = i(810),
                            o = i(5881),
                            s = i(8903),
                            l = i(6530),
                            d = r(i(3550)),
                            c = (e) => {
                                let {
                                    forwardRef: t,
                                    view: i,
                                    className: r,
                                    textPosition: a = 'left',
                                    contentLinesCount: c = 2,
                                    title: u,
                                    description: m,
                                    explicitMarkComponent: p,
                                    chart: f,
                                    children: _,
                                    srTitle: v,
                                    wrapperClassName: h,
                                    ...b
                                } = e;
                                return (0, n.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, r),
                                    ref: t,
                                    ...b,
                                    children: [
                                        (0, n.jsx)(l.SROnly, { children: null != v ? v : u }),
                                        (0, n.jsx)('div', { className: d.default.viewContainer, children: i }),
                                        (0, n.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, h),
                                            children: [
                                                f,
                                                (0, n.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(c)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, n.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, n.jsx)(s.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    p,
                                                                ],
                                                            }),
                                                        m,
                                                        _,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, n.jsx)(c, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(8903),
                            s = r(i(4353));
                        t.Label = (e) => {
                            let { children: t, className: i, size: r = 's', ...l } = e;
                            return (0, n.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: r,
                                lineClamp: 1,
                                className: (0, a.clsx)(s.default.root, i),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var r = i(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return r.Label;
                            },
                        });
                    },
                    5531: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = r(i(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: i, children: r, ...l } = e,
                                d = (0, a.clsx)(s.default.root, { [s.default.focusable]: i }, t);
                            return (0, o.isValidElement)(r)
                                ? (0, o.cloneElement)(r, { ...l, className: (0, a.clsx)(d, r.props.className) })
                                : (0, n.jsx)('span', { className: d, ...l, children: r });
                        };
                    },
                    6530: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var r = i(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return r.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = r(i(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: i, type: r = 'text', size: o = 's', className: d, children: c, weight: u = 'medium', ...m } = e;
                            return (0, n.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_'.concat(r, '_').concat(o)], l.default['root_weight_'.concat(u)], d),
                                ...m,
                                children: c,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, i) => (0, n.jsx)(t.CaptionComponent, { forwardRef: i, ...e }))));
                    },
                    1641: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = i(5987),
                            l = r(i(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: i, weight: r = 'bold', size: o = 's', className: d, children: c, ...u } = e;
                            return (0, n.jsx)(s.Typography, {
                                variant: i,
                                ref: t,
                                className: (0, a.clsx)(l.default.root, l.default['root_size_'.concat(o)], l.default['root_weight_'.concat(r)], d),
                                ...u,
                                children: c,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, i) => (0, n.jsx)(t.HeadingComponent, { forwardRef: i, ...e }))));
                    },
                    5987: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let n = i(4377),
                            a = i(5881),
                            o = i(810),
                            s = r(i(61));
                        function l(e) {
                            let { forwardRef: t, style: i, className: r, children: o, variant: l, lineClamp: d, ...c } = e,
                                u = d && 'string' == typeof o ? o : void 0;
                            return (0, n.jsx)(l, {
                                style: { ...i, WebkitLineClamp: d },
                                ref: t,
                                title: u,
                                className: (0, a.clsx)(
                                    s.default.root,
                                    { [s.default.root_clamp]: d && d > 0, [s.default.root_clamp_oneline]: d && 1 === d, [s.default.root_clamp_multiline]: d && d > 1 },
                                    r,
                                ),
                                ...c,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, o.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var r = i(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return r.Caption;
                            },
                        });
                        var n = i(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return n.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
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
            var r = i(88800),
                n = i(15077),
                a = i(42729);
            let o = (e) => {
                let { playlist: t, closeToast: i } = e;
                return (0, r.jsx)(a.O, {
                    entityVariant: n.c.PLAYLIST,
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
            i.d(t, { d: () => n });
            var r = i(72288);
            let n = (e, t, i) => {
                let {
                    settings: { isMobile: n },
                } = (0, r.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (i && i > 0)));
            };
        },
        32947: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n, L: () => a });
            let r = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let a = (e) => {
                let t = new Date();
                if (r(t, e)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), r(i, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        33719: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => y });
            var r = i(88800),
                n = i(65724),
                a = i(53548),
                o = i(17392),
                s = i(90688),
                l = i(73170),
                d = i(29504),
                c = i(2058),
                u = i(88969),
                m = i(29993),
                p = i(15077),
                f = i(72288),
                _ = i(97956),
                v = i(91292),
                h = i(59304),
                b = i(95641),
                x = i.n(b);
            let y = (e) => {
                let {
                        closeToast: t,
                        className: i,
                        coverUri: b,
                        entityTitle: y,
                        entityDescription: g,
                        entityVariant: j,
                        entityUrl: A,
                        customCover: C,
                        radius: T,
                        isPinned: S,
                    } = e,
                    O = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, f.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: n, values: a, entityTitle: o, entityDescription: s } = i;
                            switch (n) {
                                case p.c.ALBUM:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.AUDIOBOOK:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.FAIRY_TALE:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.PODCAST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.PLAYLIST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.ARTIST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: o }),
                                    };
                                case p.c.VIBE:
                                    if (!t.checkExperiment(_.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, r.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    P = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, f.g)();
                        return (0, m.c)((i) => {
                            let { entityVariant: n, values: a, entityTitle: o, entityDescription: s } = i;
                            switch (n) {
                                case p.c.ALBUM:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.AUDIOBOOK:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.FAIRY_TALE:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.PODCAST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.PLAYLIST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.ARTIST:
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: o }),
                                    };
                                case p.c.VIBE:
                                    if (!t.checkExperiment(_.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, r.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: a }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: o }),
                                        };
                                    return {
                                        caption: (0, r.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: a }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: o, description: s }),
                                    };
                            }
                        });
                    })(),
                    k = (0, a.useMemo)(
                        () =>
                            A
                                ? (0, r.jsx)(v.N, {
                                      className: x().link,
                                      href: A,
                                      title: y,
                                      children: (0, r.jsxs)(d.HL, {
                                          className: x().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', y, '\xa0'],
                                      }),
                                  })
                                : (0, r.jsxs)(d.HL, {
                                      className: x().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: y,
                                      children: ['\xa0', y, '\xa0'],
                                  }),
                        [y, A],
                    ),
                    N = (0, a.useMemo)(
                        () => C || (0, r.jsx)(s._V, { className: x().image, src: b, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [b, C],
                    ),
                    E = (0, a.useMemo)(() => {
                        let e = { entity: k, description: g };
                        return S
                            ? O({ entityVariant: j, values: e, entityTitle: y, entityDescription: g })
                            : P({ entityVariant: j, values: e, entityTitle: y, entityDescription: g });
                    }, [k, g, S, P, j, y, O]);
                return (0, r.jsx)(h.$, {
                    className: (0, n.$)(x().root, { [x().root_withLongText]: j === p.c.AUDIOBOOK }, i),
                    closeToast: t,
                    cover: N,
                    message: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(l.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': E.ariaLabel }) }),
                            (0, r.jsx)(d.HL, {
                                className: x().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': o.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: E.caption,
                            }),
                        ],
                    }),
                    coverRadius: T,
                });
            };
        },
        34092: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 82474));
        },
        35994: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => n });
            var r = i(67174);
            let n = (e) => (0, r.u)('/artist/:artistId', { params: { artistId: e } });
        },
        36303: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var r = i(2058),
                n = i(48987);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)(),
                    { hours: a, minutes: o, seconds: s } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
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
            function r(e) {
                let { reason: t, children: i } = e;
                return i;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return r;
                    },
                }),
                i(36271));
        },
        37717: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => _ });
            var r = i(88800),
                n = i(53548),
                a = i(2058),
                o = i(88969),
                s = i(58390),
                l = i(29993),
                d = i(29595),
                c = i(74965),
                u = i(4370),
                m = i(72288),
                p = i(59304),
                f = i(66943);
            let _ = (e) => {
                let { user: t, search: i } = (0, m.g)(),
                    { formatMessage: _ } = (0, a.A)(),
                    { notify: v } = (0, c.l)(),
                    h = (0, s.useRouter)();
                return (
                    (0, n.useEffect)(() => {
                        i.isEmptyHistory && h.push(u.Z.search.href);
                    }, [i.isEmptyHistory, h]),
                    (0, l.c)(() => {
                        try {
                            (t.account.data.uid && i.clearHistory({ userId: t.account.data.uid }),
                                v((0, r.jsx)(p.$, { message: (0, r.jsx)(o.A, { id: 'search.cleared-history' }) }), { containerId: d.u.INFO }),
                                e && e(),
                                h.push(u.Z.search.href));
                        } catch (e) {
                            v((0, r.jsx)(f.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: d.u.ERROR });
                        }
                    })
                );
            };
        },
        38514: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => n });
            var r = i(67174);
            let n = (e) => (0, r.u)('/album/:albumId', { params: { albumId: e } });
        },
        40634: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => x });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(87999),
                l = i(80643),
                d = i(17392),
                c = i(29993),
                u = i(90688),
                m = i(19934),
                p = i(7555),
                f = i(29504),
                _ = i(78940),
                v = i(72288),
                h = i(80932),
                b = i.n(h);
            let x = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    h = (0, _.Z)(t.url),
                    y = (0, l.S)(),
                    g = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(x, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    j = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), y({ to: s.AppScreen.ArtistScreen }), h(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(m.Dr, {
                            className: (0, n.$)(b().root, i),
                            onClick: j,
                            'data-test-id': d.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(p.t, {
                                    radius: 'round',
                                    className: b().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: b().image }),
                                }),
                                (0, r.jsx)(f.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
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
            var r = i(23877),
                n = i(74021);
            class a extends n.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= r.c.INFO && this.logToConsole(r.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= r.c.DEBUG && this.logToConsole(r.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= r.c.TRACE && this.logToConsole(r.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= r.c.WARNING && this.logToConsole(r.c.WARNING, e, t), this.sendToErrorBooster(r.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= r.c.ERROR && this.logToConsole(r.c.ERROR, e, t), this.sendToErrorBooster(r.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(r.c.INFO, e, t);
                }
                logToConsole(e, t, i) {
                    if (this.disableLogToConsole) return;
                    let n = r.Q[e];
                    console[n](...this.formatMessage(e, t, i));
                }
                sendToErrorBooster(e, t, i) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: i ? this.obfuscateData({ ...this.additionalData, ...i }) : {} } });
                }
            }
        },
        44230: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n, g: () => a });
            var r = i(53548);
            let n = (0, r.createContext)({
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
                a = () => (0, r.useContext)(n);
        },
        44988: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => c });
            var r = i(88800),
                n = i(84961),
                a = i(17392),
                o = i(52300),
                s = i(19934),
                l = i(108),
                d = i(72288);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: i, className: n, iconClassName: c, albumType: u, disabled: m } = e,
                    { user: p } = (0, d.g)(),
                    f = t ? 'liked' : 'like',
                    _ = (0, l.$)(t, u);
                return (0, r.jsx)(s.Dr, {
                    className: n,
                    onClick: i,
                    icon: (0, r.jsx)(o.I, { className: c, variant: f, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: m || !p.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        45347: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(17392),
                l = i(21284),
                d = i(29993),
                c = i(79070),
                u = i(78275),
                m = i(90688),
                p = i(19994),
                f = i(69704),
                _ = i(35402),
                v = i(35412);
            let h = (e, t, i) => {
                let r = (r) => {
                    let n = (r + e / 30) % 12,
                        a = t * Math.min(i, 1 - i);
                    return i - a * Math.max(-1, Math.min(n - 3, 9 - n, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var b = i(8655);
            let x = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var y = i(68817),
                g = i.n(y);
            let j = (0, a.PA)((e) => {
                let { agent: t, isPlaying: i, className: a } = e,
                    [y, j] = (0, o.useState)(null),
                    { state: A, toggleTrue: C } = (0, u.e)(!1),
                    { state: T, toggleTrue: S, toggleFalse: O } = (0, u.e)(!1),
                    { theme: P } = (0, f.W)(),
                    k = (0, o.useRef)(null),
                    N = t.entityType === l.h.ARTIST,
                    E = t.entityType === l.h.ALBUM || t.entityType === l.h.TRACK || t.entityType === l.h.PLAYLIST,
                    L = t.cover.color,
                    R = t.cover.uri,
                    I = (0, d.c)(async () => {
                        if (A) {
                            if (!L) return void S();
                            if (P) {
                                O();
                                let {
                                        color: e,
                                        glow1: i,
                                        glow2: r,
                                    } = ((e) => {
                                        let { averageColor: t, theme: i, custom: r } = e,
                                            { h: n, s: a, l: o } = (0, v.g8)(t);
                                        if (r) {
                                            if (i === b.S.Dark) {
                                                let e = x(a + 5, 50, 100);
                                                return { color: h(n, e, x(o - 40, 12, 25)), glow1: h(n, e, x(o - 5, 45, 60)), glow2: h(n, e, x(o + 35, 80, 90)) };
                                            }
                                            let e = x(a - 2, 50, 100);
                                            return { color: h(n, e, x(o + 43, 80, 95)), glow1: h(n, e, x(o + 5, 45, 75)), glow2: h(n, e, x(o, 35, 55)) };
                                        }
                                        return { color: h(n, (a > 25 ? Math.min(a + 25, 60) : a) / 100, (o > 20 ? Math.min(o + 15, 60) : o) / 100) };
                                    })({ averageColor: L, theme: P, custom: !t.entityType }),
                                    n = JSON.stringify({
                                        rules: [
                                            { id: 'color', type: 'Color', value: e },
                                            { id: 'glow_1', type: 'Color', value: i },
                                            { id: 'glow_2', type: 'Color', value: r },
                                        ],
                                    });
                                (await (null == y ? void 0 : y.setThemeData(n)), S());
                            }
                        }
                    }),
                    w = (0, d.c)(() => {
                        (C(), I());
                    });
                ((0, o.useEffect)(() => {
                    i ? null == y || y.play() : null == y || y.pause();
                }, [y, i]),
                    (0, o.useEffect)(() => {
                        I();
                    }, [L, I, P, A]),
                    (0, o.useEffect)(() => {
                        if (y)
                            return (
                                y.setUseFrameInterpolation(!1),
                                y.setRenderConfig({ devicePixelRatio: 0.1 }),
                                y.addEventListener('load', w),
                                () => {
                                    y.removeEventListener('load', w);
                                }
                            );
                    }, [y, w]));
                let M = !A || !T,
                    D = (0, c.L)(() => {
                        if (!k.current) return;
                        let e = N ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(k.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: k,
                    className: (0, n.$)(g().root, a, { [g().root_loading]: M }),
                    style: D,
                    'data-test-id': M ? s.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(g().cover, { [g().cover_round]: N, [g().cover_square]: E, [g().cover_loading]: M }),
                            children: [
                                t.entityType &&
                                    R &&
                                    (0, r.jsx)(m._V, { src: R, size: 200, fit: 'cover', withAvatarReplace: !0, className: g().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(_.j, { src: t.animationUri, loop: !0, dotLottieRefCallback: j, className: g().animation }),
                            ],
                        }),
                        (0, r.jsx)(p.W, { className: (0, n.$)(g().shimmer, { [g().shimmer_loading]: M }), isActive: !0, radius: N ? 'round' : 'm' }),
                    ],
                });
            });
        },
        46079: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            let r = (0, i(53548).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
        },
        47513: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var r = i(53548),
                n = i(2058);
            let a = (e) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        48215: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => R });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(58390),
                d = i(17392),
                c = i(29993),
                u = i(79070),
                m = i(17610),
                p = i(29504),
                f = i(66264),
                _ = i(58217),
                v = i(78940),
                h = i(72288),
                b = i(24548),
                x = i(85587),
                y = i(90224),
                g = i(91292),
                j = i(32947),
                A = i(62837),
                C = i(38514),
                T = i(69553),
                S = i(6667),
                O = i(85463),
                P = i(32138),
                k = i(65462),
                N = i.n(k),
                E = i(87724),
                L = i.n(E);
            let R = (0, a.PA)((e) => {
                var t, i, a, k, E, R, I;
                let {
                        track: w,
                        className: M,
                        withPodcastName: D,
                        withDate: B,
                        withSecondaryColor: z = !1,
                        withListeningProgress: F = !1,
                        captionSize: U = 'm',
                        explicitSize: H = 'xs',
                        withExplicitMark: W,
                        titleContainerClassName: Y,
                        textClassName: V,
                        playContextParams: G,
                        withTimeLeftText: K = !0,
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
                        fullscreenPlayer: er,
                        sonataState: en,
                        slam: ea,
                        settings: { isMobile: eo },
                    } = (0, h.g)(),
                    { formatMessage: es, formatDate: el } = (0, s.A)(),
                    ed = (0, S.$)({ withCustomTooltip: q }),
                    ec = (0, l.useSearchParams)(),
                    eu = (0, v.Z)(null != (R = null == (t = w.mainAlbum) ? void 0 : t.url) ? R : ''),
                    em = !!(F && G && w.shouldRememberPosition && w.streamProgress && w.durationMs),
                    ep =
                        w.id === (null == (i = en.entityMeta) ? void 0 : i.id) &&
                        (null == (k = en.entityMeta) || null == (a = k.streamProgress) ? void 0 : a.endPositionSec),
                    ef = (0, P.d)(em, w.streamProgress, ep),
                    e_ = ((e, t) => {
                        let {
                                isMobile: i,
                                isOfflineModeEnabled: r,
                                mainAlbum: n,
                                shouldHidePodcastInfo: a,
                                withPodcastName: o,
                                withDate: s,
                                withExplicitMark: l,
                                withAlbumTitleLink: d,
                                query: c,
                            } = t,
                            u = (0, T.q)(e, { isMobile: i, isOfflineModeEnabled: r, query: c }),
                            m = (null == l || l) && e.disclaimers ? (0, A.DQ)(e.disclaimers) : null,
                            p = null != o && o && !a ? n : null,
                            f = p && (null == d || d) ? (0, C.L)(p.id) : null,
                            _ = (null == s || s) && !a ? e.pubDate : void 0,
                            v = e.pubDate ? new Date(e.pubDate) : new Date(),
                            h = (0, j.L)(v),
                            b = !!(_ && [j.r.TODAY, j.r.YESTERDAY].includes(h));
                        return { ...u, explicitMark: m, album: p, albumLink: f, pubDate: _, dateType: h, isSoonDate: b };
                    })(w, {
                        isMobile: eo,
                        isOfflineModeEnabled: ea.isOfflineModeEnabled,
                        mainAlbum: w.mainAlbum,
                        shouldHidePodcastInfo: ef,
                        withPodcastName: D,
                        withDate: B,
                        withExplicitMark: W,
                        withAlbumTitleLink: ei,
                        query: $ ? Object.fromEntries(ec) : void 0,
                    }),
                    ev = ((e, t, i, r, n) => {
                        var a, o;
                        let { canEnableCustomTooltip: s, isMobile: l } = n,
                            d = t.shouldShowRemovedTitle ? i({ id: 'track-title.podcast-not-found' }) : t.title,
                            c = i({ id: 'entity-names.podcast-name' }, { podcastName: e.title }),
                            u = ''.concat(c, ' ').concat(null != (o = e.version) ? o : ''),
                            m = t.album ? i({ id: 'entity-names.podcast-name' }, { podcastName: t.album.title }) : void 0,
                            p = null;
                        if (t.pubDate)
                            switch (t.dateType) {
                                case j.r.TODAY:
                                    p = i({ id: 'interface-actions.date-today' });
                                    break;
                                case j.r.YESTERDAY:
                                    p = i({ id: 'interface-actions.date-yesterday' });
                                    break;
                                case j.r.DATE_WITH_YEAR:
                                    p = r(t.pubDate, { month: 'long', day: 'numeric', year: 'numeric' });
                                    break;
                                default:
                                    p = r(t.pubDate, { month: 'long', day: 'numeric' });
                            }
                        return {
                            displayTitle: d,
                            ariaLabel: u,
                            titleAttribute: s || t.shouldShowRemovedTitle ? void 0 : d,
                            versionTitleAttribute: s ? void 0 : t.version,
                            isTooltipEnabled: s && !l,
                            albumAriaLabel: m,
                            albumTitleAttribute: s || null == (a = t.album) ? void 0 : a.title,
                            dateText: p,
                            withSecondaryInfo: !!(t.album || t.pubDate),
                        };
                    })(w, e_, es, el, { canEnableCustomTooltip: ed, isMobile: eo }),
                    eh = (0, _.l)({ entity: null != (I = w.mainAlbum) ? I : null, entityType: x.n.PODCAST, callback: eu }),
                    eb = (0, c.c)((e) => {
                        (er.modal.isOpened && er.modal.close(), eh(e));
                    }),
                    ex = (0, O.O)({ track: w, withSavingQueryParams: $, entityType: x.n.PODCAST }),
                    ey = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(m.m_, {
                                enabled: ev.isTooltipEnabled,
                                offsetOptions: 4,
                                placement: 'top',
                                text: ev.displayTitle,
                                hoverSettings: b.V,
                                children: (0, r.jsx)(p.HL, {
                                    className: N().title,
                                    type: 'entity',
                                    size: U,
                                    variant: 'span',
                                    title: ev.titleAttribute,
                                    ...e,
                                    children: ev.displayTitle,
                                }),
                            }),
                        [ev.isTooltipEnabled, ev.titleAttribute, U, ev.displayTitle],
                    ),
                    eg = null == (E = e_.link) ? void 0 : E.href,
                    ej = (0, o.useMemo)(
                        () =>
                            e_.shouldShowRemovedTitle
                                ? (0, r.jsx)(m.m_, {
                                      enabled: ev.isTooltipEnabled,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ev.displayTitle,
                                      hoverSettings: b.V,
                                      children: (0, r.jsx)('span', { children: ev.displayTitle }),
                                  })
                                : void 0 !== eg
                                  ? (0, r.jsx)(g.N, {
                                        onClick: ex,
                                        className: N().albumLink,
                                        href: eg,
                                        'aria-label': ev.ariaLabel,
                                        title: ev.titleAttribute,
                                        'data-test-id': d.Kq.track.TRACK_TITLE,
                                        children: ey(),
                                    })
                                  : ey({ 'data-test-id': d.Kq.track.TRACK_TITLE }),
                        [ev.isTooltipEnabled, e_.shouldShowRemovedTitle, eg, ev.displayTitle, ey, ev.titleAttribute, ex, ev.ariaLabel],
                    ),
                    eA = (0, u.L)(() => {
                        let e = e_.album;
                        if (!e) return;
                        let t = (0, r.jsx)(m.m_, {
                            enabled: ev.isTooltipEnabled,
                            offsetOptions: 4,
                            placement: 'top',
                            text: e.title,
                            hoverSettings: b.V,
                            children: (0, r.jsx)(p.HL, { variant: 'span', type: 'entity', size: U, className: N().albumTitle, children: e.title }),
                        });
                        return e_.albumLink
                            ? (0, r.jsx)(g.N, {
                                  'aria-label': ev.albumAriaLabel,
                                  className: N().link,
                                  href: e_.albumLink.href,
                                  title: ev.albumTitleAttribute,
                                  onClick: eb,
                                  'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, r.jsx)('span', { 'data-test-id': d.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, r.jsx)('div', {
                    className: (0, n.$)(N().root, { [N().root_disabled]: !w.isAvailable, [N().root_disliked]: w.isDisliked && !X, [N().root_withSecondaryColor]: z }, M),
                    children: (0, r.jsxs)('div', {
                        className: (0, n.$)(N().metaContainer, L().podcastMetaContainer, ee),
                        children: [
                            em &&
                                G &&
                                w.streamProgress &&
                                (0, r.jsx)(f.B, {
                                    className: (0, n.$)(L().progress, et, {
                                        [L().progress_withPreviousInfo]: e_.album || e_.pubDate,
                                        [L().progress_disabled]: !w.isAvailable || w.isDisliked,
                                    }),
                                    id: w.id,
                                    albumId: w.albumId,
                                    streamProgress: w.streamProgress,
                                    durationMs: w.durationMs || 0,
                                    playContextParams: G,
                                    withTimeLeftText: K,
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(N().titleContainer, Y, L().podcastTitleContainer),
                                children: [
                                    (0, r.jsxs)(p.HL, {
                                        className: (0, n.$)(N().text, V),
                                        type: 'entity',
                                        size: U,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            Z,
                                            ej,
                                            e_.version &&
                                                (0, r.jsxs)(p.HL, {
                                                    className: (0, n.$)(N().text, N().version),
                                                    type: 'entity',
                                                    size: U,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: ev.versionTitleAttribute,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', e_.version],
                                                }),
                                        ],
                                    }),
                                    e_.explicitMark &&
                                        (0, r.jsx)(y.N, {
                                            containerClassName: N().explicitMarkContainer,
                                            getDescriptionTexts: w.getDescriptionTexts,
                                            variant: e_.explicitMark,
                                            className: N().explicitMark,
                                            size: H,
                                            trackId: w.id,
                                        }),
                                    J,
                                ],
                            }),
                            ev.withSecondaryInfo &&
                                (0, r.jsxs)(p.HL, {
                                    type: 'entity',
                                    size: U,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(N().text, L().podcastName, V),
                                    children: [
                                        eA,
                                        null !== ev.dateText &&
                                            (0, r.jsx)(p.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: U,
                                                className: (0, n.$)({
                                                    [L().dateWithName]: !!e_.album,
                                                    [L().soonDate]: e_.isSoonDate,
                                                    [L().dateDisabled]: !w.isAvailable,
                                                    [L().dateDisliked]: w.isDisliked && !X,
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
            i.d(t, { H: () => r });
            let r = (0, i(53548).createContext)({ pageAlbumId: void 0 });
        },
        54243: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                n = i(4370),
                a = i(15077),
                o = i(42729);
            let s = (e) => {
                let { artist: t, closeToast: i } = e;
                return (0, r.jsx)(o.O, {
                    closeToast: i,
                    entityVariant: a.c.ARTIST,
                    entityUrl: t.url,
                    collectionUrl: n.Z.collectionArtists.href,
                    coverUri: t.coverUri,
                    entityTitle: t.name,
                    isLiked: t.isLiked,
                });
            };
        },
        56446: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(88800),
                n = i(53548),
                a = i(2058),
                o = i(17392),
                s = i(96817),
                l = i(52300),
                d = i(39318);
            let c = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
                            radius: c,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: f,
                            className: _,
                            forwardRef: v,
                            style: h,
                            children: b,
                        } = e,
                        { formatMessage: x } = (0, a.A)(),
                        y = x({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: _,
                        color: 'secondary',
                        radius: c,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: p,
                        ref: v,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: f }),
                        disabled: m,
                        'data-intersection-property-id': d.N,
                        style: h,
                        'data-test-id': o.S7.TRAILER_BUTTON,
                        children: b,
                    });
                },
                u = (0, n.forwardRef)((e, t) => (0, r.jsx)(c, { forwardRef: t, ...e }));
        },
        57249: (e, t, i) => {
            'use strict';
            e.exports = i.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        60208: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a });
            var r = i(4086),
                n = i(41928);
            let a = () => (0, n.N)().get(r.SX);
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
            let r = i(88800),
                n = i(53548),
                a = i(37531);
            function o(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            i(68326);
            let s = { loader: () => Promise.resolve(o(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...s, ...e },
                        i = (0, n.lazy)(() => t.loader().then(o)),
                        l = t.loading;
                    function d(e) {
                        let o = l ? (0, r.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            s = !t.ssr || !!t.loading,
                            d = s ? n.Suspense : n.Fragment,
                            c = t.ssr
                                ? (0, r.jsxs)(r.Fragment, { children: [null, (0, r.jsx)(i, { ...e })] })
                                : (0, r.jsx)(a.BailoutToCSR, { reason: 'next/dynamic', children: (0, r.jsx)(i, { ...e }) });
                        return (0, r.jsx)(d, { ...(s ? { fallback: o } : {}), children: c });
                    }
                    return ((d.displayName = 'LoadableComponent'), d);
                };
        },
        60757: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => n });
            var r = i(58217);
            let n = (e) => {
                let { album: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        64207: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(54243);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [p, f] = (0, a.useState)(!1),
                    { formatMessage: _ } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                    f(!0);
                    let o = await e.toggleLike();
                    (f(!1),
                        o === s.f.OK
                            ? i((0, r.jsx)(m.T, { artist: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [e, t.isAuthorized, p, _, i]);
            };
        },
        65453: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => d });
            var r,
                n = i(53548),
                a = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (n && (n += ' '), (n += r));
                                            else for (i in t) t[i] && (n && (n += ' '), (n += i));
                                        return n;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => n }));
                        let n = r;
                    },
                    7354: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = {
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
                        function r(e, t, r) {
                            var n = null;
                            if ((void 0 !== r && (n = '' + r), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: i, type: e, key: n, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    3616: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let n = i(4377),
                            a = i(810),
                            o = i(5881),
                            s = r(i(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, n.jsx)('a', {}),
                                        block: i,
                                        target: r,
                                        rel: l,
                                        href: d,
                                        forwardRef: c,
                                        iconPosition: u = 'left',
                                        flexIcon: m,
                                        icon: p,
                                        className: f,
                                        children: _,
                                        textClassName: v = '',
                                        containerClassName: h,
                                        ...b
                                    } = e,
                                    x = (0, a.useId)(),
                                    y = !a.Children.count(_),
                                    g = 'left' === u,
                                    j = null;
                                if (void 0 !== p) {
                                    var A;
                                    j = (0, a.cloneElement)(p, {
                                        className: (0, o.clsx)(
                                            s.default.icon,
                                            { [s.default['icon_position_'.concat(u)]]: !y && u },
                                            null == (A = p.props) ? void 0 : A.className,
                                        ),
                                        key: x,
                                    });
                                }
                                let C = (0, a.useMemo)(
                                    () =>
                                        p
                                            ? (0, n.jsxs)('div', {
                                                  className: (0, o.clsx)(s.default.iconContainer, h),
                                                  children: [g && j, !y && (0, n.jsx)('span', { className: v, children: _ }), !g && j],
                                              })
                                            : _,
                                    [_, h, p, g, y, j, v],
                                );
                                return (0, a.cloneElement)(
                                    t,
                                    {
                                        ref: c,
                                        target: r,
                                        rel: '_blank' === r && void 0 === l ? 'noopener noreferrer' : l,
                                        href: d,
                                        className: (0, o.clsx)(s.default.root, { [s.default.block]: i, [s.default.flexIcon]: p && m, [s.default.iconOnly]: p && y }, f),
                                        ...b,
                                        ...t.props,
                                    },
                                    C,
                                );
                            };
                        t.Link = (0, a.forwardRef)((e, t) => (0, n.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
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
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(88969),
                l = i(17392),
                d = i(68254),
                c = i(52300),
                u = i(29504),
                m = i(7123),
                p = i(39079),
                f = i(9630),
                _ = i(72288),
                v = i(36303),
                h = i(91106),
                b = i(92152),
                x = i.n(b);
            let y = (0, a.PA)((e) => {
                var t, i, a, b, y, g, j, A, C;
                let { className: T, id: S, albumId: O, streamProgress: P, durationMs: k, playContextParams: N, withTimeLeftText: E = !0, isFinishedLabelHidden: L } = e,
                    R = (0, f.e)(),
                    { sonataState: I, album: w } = (0, _.g)(),
                    M = Math.floor(k / 1e3),
                    [D, B] = (0, o.useState)(!1),
                    z = (0, h.$)(),
                    { isPlaying: F, isCurrent: U } = (0, p.D)({ playContextParams: N, entityId: O ? ''.concat(S, ':').concat(O) : S });
                ((0, o.useEffect)(() => {
                    if (!U) return void B(!1);
                    let e =
                        null == R
                            ? void 0
                            : R.state.playerState.status.onChange(() => {
                                  (null == R ? void 0 : R.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [R, P, U, F]),
                    (0, o.useEffect)(() => {
                        var e;
                        (null == w || null == (e = w.meta) ? void 0 : e.listeningFinished)
                            ? (P.updateEndPositionSec(0), P.updateEverFinished(!0))
                            : (null == w ? void 0 : w.allTracksUnfinished) && P.updateEverFinished(!1);
                    }, [P, null == w ? void 0 : w.allTracksUnfinished, null == w || null == (t = w.meta) ? void 0 : t.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var e, t;
                        (U &&
                            (null == I || null == (e = I.entityMeta) ? void 0 : e.streamProgress) &&
                            P &&
                            I.entityMeta.streamProgress.hasEverFinished !== P.hasEverFinished &&
                            P.updateEverFinished(!!I.entityMeta.streamProgress.hasEverFinished),
                            M - ((null == P ? void 0 : P.endPositionSec) || 0) < 1 &&
                                ((null == I || null == (t = I.entityMeta) ? void 0 : t.streamProgress) &&
                                    U &&
                                    (I.entityMeta.streamProgress.updateEverFinished(!0), I.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == P || P.updateEverFinished(!0)));
                    }, [
                        U,
                        null == I || null == (i = I.entityMeta) ? void 0 : i.streamProgress,
                        null == I || null == (b = I.entityMeta) || null == (a = b.streamProgress) ? void 0 : a.hasEverFinished,
                        P,
                        P.hasEverFinished,
                        P.endPositionSec,
                        M,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!U) return;
                        let e =
                            null == R
                                ? void 0
                                : R.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = R.state.playerState.progress.value,
                                          i = null == I || null == (e = I.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && D && P.updateEndPositionSec(t.position),
                                          U &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == i || i.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [R, P, U, F, D, S, null == I ? void 0 : I.entityMeta]));
                let H = (U && (null == I || null == (g = I.entityMeta) || null == (y = g.streamProgress) ? void 0 : y.endPositionSec)) || P.endPositionSec,
                    W = (0, v.m)(null != H ? H : 0, M),
                    Y = (0, o.useMemo)(() => {
                        var e, t, i;
                        if (
                            ((U && (null == I || null == (t = I.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == P ? void 0 : P.hasEverFinished) ||
                                (null == w || null == (i = w.meta) ? void 0 : i.listeningFinished)) &&
                            !L
                        )
                            return (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(x().text, { [x().text_withoutTimeLeft]: !E }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, r.jsx)(s.A, { id: 'time.finished' }),
                                    }),
                                    (0, r.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: x().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!H || 0 === H) return;
                        let a = M - H,
                            o = z(a);
                        return (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(x().text, { [x().text_withoutTimeLeft]: !E }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                a > 1 || L
                                    ? (0, r.jsx)(d.q, {
                                          'aria-valuetext': W,
                                          'aria-busy': U && F,
                                          value: H,
                                          max: M,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, r.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: x().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        M,
                        null == P ? void 0 : P.hasEverFinished,
                        E,
                        z,
                        U,
                        F,
                        null == I || null == (A = I.entityMeta) || null == (j = A.streamProgress) ? void 0 : j.hasEverFinished,
                        null == w || null == (C = w.meta) ? void 0 : C.listeningFinished,
                        L,
                        H,
                        W,
                    ]);
                return (0, r.jsx)('div', { className: (0, n.$)(x().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: Y });
            });
        },
        68326: (e, t, i) => {
            'use strict';
            function r(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return r;
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
            i.d(t, { G: () => _ });
            var r = i(88800),
                n = i(87999),
                a = i(7833),
                o = i(14661),
                s = i(63765),
                l = i(46811),
                d = i(27639),
                c = i(4196),
                u = i(58378),
                m = i(91198),
                p = i(67665),
                f = i(91087);
            let _ = (e) => {
                let { renderVibeControls: t, item: i, index: _, pageId: v, sendSearchFeedback: h, blockPosition: b = 0, objectPosX: x, objectPosY: y } = e;
                switch (i.type) {
                    case o.n.PODCAST_EPISODE:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.PodcastEpisode,
                                objectId: i.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(u.c, { pageId: v, track: i.data }),
                            },
                            i.data.id,
                        );
                    case o.n.UGC_TRACK:
                        return (0, r.jsx)(u.c, { pageId: v, track: i.data });
                    case o.n.TRACK:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Track,
                                objectId: i.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.entityId, type: s.o.TRACK, blockPosition: b, position: _ },
                                    children: (0, r.jsx)(u.c, { pageId: v, track: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.ARTIST:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Artist,
                                objectId: i.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.id, type: s.o.ARTIST, blockPosition: b, position: _ },
                                    children: (0, r.jsx)(d.c, { pageId: v, artist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PLAYLIST:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Playlist,
                                objectId: i.data.id,
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: i.data.id, type: s.o.PLAYLIST, blockPosition: b, position: _ },
                                    children: (0, r.jsx)(c.v, { pageId: v, playlist: i.data }),
                                }),
                            },
                            i.data.id,
                        );
                    case o.n.PODCAST:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Podcast,
                                objectId: String(i.data.id),
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(
                                    f.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: i.data.id, type: s.o.PODCAST, blockPosition: b, position: _ },
                                        children: (0, r.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.ALBUM:
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Album,
                                objectId: String(i.data.id),
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(
                                    f.N.Provider,
                                    {
                                        value: { sendSearchFeedback: h, id: i.data.id, type: s.o.ALBUM, blockPosition: b, position: _ },
                                        children: (0, r.jsx)(l.M, { pageId: v, album: i.data }),
                                    },
                                    i.data.id,
                                ),
                            },
                            i.data.id,
                        );
                    case o.n.WAVE: {
                        let e = i.data;
                        return (0, r.jsx)(
                            a.B,
                            {
                                objectType: n.DomainObjectType.Wave,
                                objectId: e.stationId,
                                objectPosX: x,
                                objectPosY: y,
                                children: (0, r.jsx)(f.N.Provider, {
                                    value: { sendSearchFeedback: h, id: e.seedsId, type: s.o.WAVE, blockPosition: b, position: _ },
                                    children: (0, r.jsx)(p.H, { vibe: e, controls: t(e), cover: e.cover, description: e.description, agentVariant: m.h.SMALL }),
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
            i.d(t, { Q: () => I });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(87999),
                d = i(17392),
                c = i(29993),
                u = i(52300),
                m = i(17610),
                p = i(29504),
                f = i(42174),
                _ = i(96817);
            let v = (e) => {
                let { className: t, variant: i = 'text', onClick: n, iconClassName: a, iconSize: l, size: c = 's', ariaLabel: m } = e,
                    { formatMessage: p } = (0, s.A)(),
                    f = null != m ? m : p({ id: 'play-queue.delete-from-queue' }),
                    v = (0, o.useCallback)(
                        (e) => {
                            (null == n || n(), e.stopPropagation());
                        },
                        [n],
                    );
                return (0, r.jsx)(_.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': f,
                    onClick: v,
                    icon: (0, r.jsx)(u.I, { size: l, className: a, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var h = i(5407),
                b = i(57934),
                x = i(55693),
                y = i(72288),
                g = i(49738),
                j = i(56446),
                A = i(64546),
                C = i(29831),
                T = i(30123),
                S = i(54965),
                O = i(1829),
                P = i(82092),
                k = i.n(P),
                N = i(79262),
                E = i(41867),
                L = i.n(E);
            let R = (0, a.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, s.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(u.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(N.A, { value: t.downloadingProgress, size: 16, className: L().downloadingProgress, progressBarClassName: L().progress })
                          : null;
                }),
                I = (0, a.PA)((e) => {
                    var t;
                    let {
                            className: i,
                            track: a,
                            withLightning: _,
                            ignoreDislikedStyles: P,
                            onLikeClick: N,
                            utmLink: E,
                            withSecondaryColor: L,
                            handleRemove: I,
                            withTrailer: w = !0,
                            likeIconSize: M = 'xxs',
                            removeButtonAriaLabel: D,
                            hideControls: B,
                        } = e,
                        { user: z, trailer: F } = (0, y.g)(),
                        { formatMessage: U } = (0, s.A)(),
                        { sendLikeSearchFeedback: H } = (0, x.z)(),
                        [W, Y] = (0, o.useState)(!1),
                        [V, G] = (0, o.useState)(!1),
                        K = (0, h.P)(),
                        X = (0, f.K)(a),
                        {
                            duration: q,
                            lightning: $,
                            ugc: Z,
                        } = ((e, t, i) => {
                            var r;
                            let { withLightning: n, isUGC: a } = t,
                                o = ((e) =>
                                    'number' != typeof e
                                        ? null
                                        : ((e) => {
                                              let t = Math.round((e || 0) / T.k7);
                                              return (0, S.E)(t);
                                          })(e))(e.durationMs);
                            return {
                                duration: null !== o ? { text: o, ariaLabel: (0, C.j)(Math.round((null != (r = e.durationMs) ? r : 0) / 1e3), i) } : null,
                                lightning: n ? { label: i({ id: 'entity-names.popular-among-users' }) } : null,
                                ugc: a ? { label: i({ id: 'ugc.track-description' }) } : null,
                            };
                        })(a, { withLightning: _, isUGC: a.isUGC }, U),
                        J = (0, b.F)(),
                        Q = z.hasPlus,
                        ee = !a.isRemoved && a.isAvailable && !B,
                        et = (0, c.c)(async () => {
                            (W || a.isLiked || (Y(!0), null == H || H()), await X(), null == N || N(a.isLiked));
                        }),
                        ei = (0, c.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, c.c)((e) => {
                            if ((e.stopPropagation(), K())) return void e.preventDefault();
                            (F.openTrackTrailer(a.id), J(l.DomainObjectType.Track, a.id));
                        }),
                        en = (0, o.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(O._, {
                                        track: a,
                                        open: V,
                                        onOpenChange: G,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(u.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: E,
                                        className: (0, n.$)(k().contextMenu, { [k().contextMenu_visible]: V }),
                                        handleRemove: I,
                                        withTrailer: w,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, I, V, ee, w, a, E]);
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(k().root, k().controls, i, {
                            [k().controls_dislikedControls]: a.isDisliked,
                            [k().controls_dislikedColors]: a.isDisliked && !P,
                            [k().controls_disabled]: !a.isAvailable,
                            [k().root_withSecondaryColor]: L,
                        }),
                        children: [
                            $ && (0, r.jsx)(u.I, { 'aria-label': $.label, size: 'xxs', className: k().lightning, variant: 'lightning' }),
                            Z &&
                                (0, r.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(u.I, {
                                            'aria-label': Z.label,
                                            size: 'xxs',
                                            className: k().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(m.ZI, { children: Z.label }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, n.$)(k().item, k().downloadIcon), children: (0, r.jsx)(R, { track: a }) }),
                            I && !B && (0, r.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, n.$)(k().item, k().removeButton), onClick: I, ariaLabel: D }),
                            ee &&
                                (0, r.jsx)(A.WithOffline, {
                                    fallback: (0, r.jsx)(g.c, {
                                        size: 'xs',
                                        iconSize: M,
                                        className: (0, n.$)(k().item, k().likeIcon),
                                        isLiked: a.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = a.trailer) ? void 0 : t.isAvailable) &&
                                a.isAvailable &&
                                (0, r.jsx)(A.WithOffline, {
                                    fallback: (0, r.jsx)(j.k, {
                                        className: (0, n.$)(k().item, k().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, n.$)(k().item, k().contextMenuWrapper),
                                children: [
                                    null !== q &&
                                        (0, r.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, n.$)(k().duration, { [k().duration_hidden]: V && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': q.ariaLabel,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', { 'aria-hidden': 'true', children: q.text }),
                                        }),
                                    en,
                                ],
                            }),
                        ],
                    });
                });
        },
        74021: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => l });
            var r = i(14567),
                n = i(243),
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
                formatMessage(e, t, i = {}, n) {
                    let a,
                        s = String(t instanceof Error && t.stack ? t.stack : t),
                        l = (0, o.A)({ ...this.additionalData, ...i });
                    return (Object.keys(l).length && (a = this.obfuscateData(l)), n) ? `${s} ${r(a)}` : [s, a];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, n.A)(e, t) && (0, a.A)(e, t, s());
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
                        return n;
                    },
                }));
            let r = i(70405)._(i(60527));
            function n(e, t) {
                var i;
                let n = {};
                'function' == typeof e && (n.loader = e);
                let a = { ...n, ...t };
                return (0, r.default)({ ...a, modules: null == (i = a.loadableGenerated) ? void 0 : i.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
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
            i.d(t, { SearchHistoryPage: () => T });
            var r = i(88800),
                n = i(55482),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(88969),
                d = i(58390),
                c = i(17392),
                u = i(79070),
                m = i(96817),
                p = i(52300),
                f = i(66719),
                _ = i(29504),
                v = i(71344),
                h = i(37717),
                b = i(39631),
                x = i(98427),
                y = i(46422),
                g = i(44230),
                j = i(72288),
                A = i(12342),
                C = i.n(A);
            let T = (0, a.PA)(() => {
                let e = (0, b._)(),
                    {
                        search: t,
                        user: i,
                        settings: { isMobile: a },
                    } = (0, j.g)(),
                    { setContentScrollRef: A } = (0, g.g)(),
                    { formatMessage: T } = (0, s.A)(),
                    S = (0, y.W)(),
                    O = (0, o.useRef)(!1),
                    P = (0, o.useRef)(null),
                    k = (0, h.t)(() => {
                        O.current = !0;
                    }),
                    N = t.historyPage.items.length;
                (i.isAuthorized && (0, d.notFound)(),
                    (0, o.useEffect)(() => {
                        P.current && S.canBack && P.current.focus();
                    }, [S.canBack]),
                    (0, o.useEffect)(
                        () => () => {
                            (null == O ? void 0 : O.current) ? (t.resetHistoryItems(), (O.current = !1)) : t.resetHistoryStateRequest();
                        },
                        [t],
                    ));
                let E = (0, o.useMemo)(
                        () =>
                            (0, n.A)(() => {
                                null == S || S.back();
                            }, 200),
                        [S],
                    ),
                    L = (0, u.L)(() =>
                        N
                            ? (0, r.jsx)('div', {
                                  className: C().items,
                                  children: t.historyPage.items.reduce((t, i, r) => {
                                      let n = (0, v.G)({ item: i, index: r, pageId: x.b.SEARCH, objectPosX: 1, objectPosY: t.length + 1, renderVibeControls: e });
                                      return ((0, o.isValidElement)(n) && t.push(n), t);
                                  }, []),
                              })
                            : (0, r.jsx)(_.HL, {
                                  className: C().emptyHistory,
                                  variant: 'div',
                                  size: 'm',
                                  type: 'text',
                                  children: (0, r.jsx)(l.A, { id: 'search.history-empty' }),
                              }),
                    );
                return (
                    t.isHistoryReady && i.account.data.uid && (0, o.use)(t.getHistory({ userId: i.account.data.uid })),
                    (0, r.jsx)('div', {
                        className: C().root,
                        'data-test-id': c.Xk.search.SEARCH_HISTORY_PAGE,
                        children: (0, r.jsxs)(f.N, {
                            className: C().scrollContent,
                            containerClassName: C().scrollContainer,
                            ref: A,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: C().header,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: C().title,
                                            children: [
                                                S.canBack &&
                                                    (0, r.jsx)(m.$, {
                                                        ref: P,
                                                        'aria-label': T({ id: 'navigation.go-back' }),
                                                        radius: 'round',
                                                        disabled: !S.canBack,
                                                        size: 's',
                                                        icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'arrowLeft' }),
                                                        onClick: E,
                                                    }),
                                                (0, r.jsx)(_.DZ, { variant: 'h2', size: a ? 'm' : 'xl', children: (0, r.jsx)(l.A, { id: 'search.history' }) }),
                                            ],
                                        }),
                                        (0, r.jsx)(m.$, {
                                            'aria-label': T({ id: 'search.clear-history' }),
                                            radius: 'xxxl',
                                            variant: 'outline',
                                            disabled: !N,
                                            size: a ? 's' : 'default',
                                            onClick: k,
                                            children: (0, r.jsx)(_.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                type: 'text',
                                                children: (0, r.jsx)(l.A, { id: 'search.clear-history' }),
                                            }),
                                        }),
                                    ],
                                }),
                                !t.isHistoryLoading && L,
                            ],
                        }),
                    })
                );
            });
        },
        85902: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(88800),
                n = i(96706),
                a = i(53548),
                o = i(2058),
                s = i(79390),
                l = i(29595),
                d = i(74965),
                c = i(72288),
                u = i(66943),
                m = i(30832);
            let p = (e) => {
                let { user: t } = (0, c.g)(),
                    { notify: i } = (0, d.l)(),
                    [p, f] = (0, a.useState)(!1),
                    { formatMessage: _ } = (0, o.A)();
                return (0, a.useCallback)(async () => {
                    if (!t.isAuthorized) return void i((0, r.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let a = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                    f(!0);
                    let o = await e.toggleLike();
                    (f(!1),
                        o === s.f.OK
                            ? i((0, r.jsx)(m.T, { playlist: a }), { containerId: l.u.INFO })
                            : i((0, r.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [t.isAuthorized, p, e, _, i]);
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
            var r = i(53548),
                n = i(52150);
            function a() {
                return (0, r.useContext)(n.H);
            }
        },
        90224: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => _ });
            var r = i(88800),
                n = i(65724),
                a = i(84961),
                o = i(53548),
                s = i(2058),
                l = i(17392),
                d = i(52300),
                c = i(62837),
                u = i(72288),
                m = i(94398),
                p = i(17332),
                f = i.n(p);
            let _ = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: p, variant: _, iconVariant: iconOverride, size: v = 'xxxs', ...h } = e,
                    { formatMessage: b } = (0, s.A)(),
                    {
                        settings: { isMobile: x },
                    } = (0, u.g)(),
                    [y, g] = (0, o.useState)(null);
                (0, o.useEffect)(() => {
                    i && i().then(g);
                }, [i, a]);
                let {
                    iconVariant: j,
                    descriptionText: A,
                    isTooltipEnabled: C,
                    ariaLabel: T,
                } = ((e, t) => {
                    let { variant: i, descriptionTexts: r, isMobile: n } = e,
                        a = (null == r ? void 0 : r.join('\n')) || '';
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
                        isTooltipEnabled: !!(null == r ? void 0 : r.length) && !n,
                        ariaLabel: a.length > 0 ? a : t({ id: 'extra-explicit.explicit-mark' }),
                    };
                })({ variant: _, descriptionTexts: y, isMobile: x }, b);
                return (0, r.jsx)(m.k, {
                    description: A,
                    placement: 'bottom-start',
                    enabled: C,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children:
                        // for PulseSync: BEGIN render substituted-track badges and custom native disclaimer icons
                        _ === c.JU.SUBSTITUTED ? (0, r.jsxs)('svg', {
                            className: (0, n.$)(f().explicitMark, t),
                            viewBox: '0 0 16 16',
                            role: 'img',
                            'aria-label': T,
                            style: { width: 'var(--ym-icon-size-'.concat(v, ')'), height: 'var(--ym-icon-size-'.concat(v, ')') },
                            ...h,
                            'data-test-id': l.S7.EXPLICIT_MARK_ICON,
                            children: [
                                (0, r.jsx)('circle', { cx: '8', cy: '8', r: '5.5', fill: 'none', stroke: 'currentColor', strokeWidth: '1.5' }),
                                (0, r.jsx)('text', {
                                    x: '8', y: '9', fill: 'currentColor', fontSize: '7', fontWeight: '700', textAnchor: 'middle', dominantBaseline: 'middle', children: 'S',
                                }),
                            ],
                        }) : (0, r.jsx)(d.I, {
                            className: (0, n.$)(f().explicitMark, t),
                            'aria-label': T,
                            variant: iconOverride ? d.resolveIcon(iconOverride)?.variant ?? 'exclamation' : j,
                            size: iconOverride ? d.resolveIcon(iconOverride)?.size ?? v : v,
                            style: iconOverride ? { width: `var(--ym-icon-size-${v})`, height: `var(--ym-icon-size-${v})` } : undefined,
                            ...h,
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
            var r = i(53548),
                n = i(2058);
            let a = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, r.useCallback)(
                    function (t) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = Math.floor(t / 60),
                            n = function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.minutes-left' }, { minutes: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    r = e({ id: 'time.seconds-left' }, { seconds: t });
                                return i ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(r) : r;
                            })(Math.floor(t), i);
                        if (r < 60) return n(r, i);
                        let a = Math.floor(r / 60),
                            o = r % 60,
                            s = (function (t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(a, i);
                        return o > 0 ? ''.concat(s, ' ').concat(n(o)) : s;
                    },
                    [e],
                );
            };
        },
        91292: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => p });
            var r = i(88800),
                n = i(53548),
                a = i(12389),
                o = i.n(a),
                s = i(29993),
                l = i(65453),
                d = i(46079),
                c = i(67174);
            let u = (e) => {
                    let [t, i] = (0, n.useState)(!1),
                        a = (0, s.c)(() => {
                            i(!0);
                        });
                    return (0, r.jsx)(o(), { prefetch: t, ...e, onMouseEnter: a });
                },
                m = (e) => {
                    let { forwardedRef: t, href: i, component: a, ...s } = e,
                        { isPrefetchDisabled: m, isPrefetchOnHover: p } = (0, n.useContext)(d.j),
                        { href: f, target: _, rel: v } = (0, c.u)(null != i ? i : ''),
                        h = (0, n.isValidElement)(a)
                            ? a
                            : (function (e, t, i) {
                                  return e ? (t ? (0, r.jsx)(o(), { prefetch: !1 }) : i ? (0, r.jsx)(u, { href: e }) : (0, r.jsx)(o(), {})) : (0, r.jsx)('a', {});
                              })(i, m, p);
                    return (0, r.jsx)(l.N, { ref: t, component: h, href: i ? f : void 0, target: _, rel: v, ...s });
                },
                p = (0, n.forwardRef)((e, t) => (0, r.jsx)(m, { ...e, forwardedRef: t }));
        },
        91959: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(58217);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
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
            i.d(t, { K: () => _ });
            var r = i(88800),
                n = i(2058),
                a = i(29993),
                o = i(87762),
                s = i(29595),
                l = i(74965),
                d = i(72288),
                c = i(66943),
                u = i(96706),
                m = i(53548),
                p = i(79390),
                f = i(96295);
            let _ = (e) => {
                let {
                        user: t,
                        paywall: i,
                        albumCPA: { isPlusCPAEnabled: _ },
                    } = (0, d.g)(),
                    { formatMessage: v } = (0, n.A)(),
                    { notify: h } = (0, l.l)(),
                    b = (() => {
                        let { notify: e } = (0, l.l)(),
                            { fullscreenPlayer: t } = (0, d.g)(),
                            [i, o] = (0, m.useState)(!1),
                            { formatMessage: _ } = (0, n.A)();
                        return (0, a.c)(async (n) => {
                            let { album: a, withLink: l = !0, withNotification: d = !0 } = n;
                            if (i) return;
                            let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                            o(!0);
                            let v = await a.toggleLike();
                            if ((o(!1), !d)) return;
                            let h = t.modal.isOpened;
                            v === p.f.OK
                                ? e((0, r.jsx)(f.T, { withLink: l, album: m }), { containerId: h ? s.u.FULLSCREEN_INFO : s.u.INFO })
                                : e((0, r.jsx)(c.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: h ? s.u.FULLSCREEN_ERROR : s.u.ERROR });
                        });
                    })(),
                    { pageAlbumId: x } = (0, o.T)();
                return (0, a.c)(async () => {
                    if (e)
                        return _({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                            ? void i.openModal()
                            : t.isAuthorized
                              ? b({ album: e })
                              : void h((0, r.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
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
            class r {
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
            let n = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function a() {
                return n ? new n() : new r();
            }
            function o(e) {
                return n ? n.bind(e) : r.bind(e);
            }
            function s() {
                return n
                    ? n.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        94398: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var r = i(88800),
                n = i(17392),
                a = i(17610),
                o = i(29504),
                s = i(37438),
                l = i.n(s);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: i, title: s, placement: c = 'top', children: u } = e;
                    return (0, r.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, r.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        s && (0, r.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: s }),
                                        (0, r.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
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
            var r = i(58217),
                n = i(85587);
            let a = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: a } = e;
                return (0, r.l)({ entity: t, entityType: n.n.TRACK, callback: i, onReject: a, preventDefaultWhenSafe: !1 });
            };
        },
        96295: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => s });
            var r = i(88800),
                n = i(84961),
                a = i(42729),
                o = i(5048);
            let s = (0, n.PA)((e) => {
                let { album: t, closeToast: i, withLink: n } = e,
                    s = (0, o.b)(t.type);
                return (0, r.jsx)(a.O, {
                    closeToast: i,
                    entityVariant: s,
                    coverUri: t.coverUri,
                    entityUrl: t.url,
                    collectionUrl: '/collection',
                    entityTitle: t.title,
                    isLiked: t.isLiked,
                    withLink: n,
                });
            });
        },
        96669: (e, t, i) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return r.workAsyncStorageInstance;
                    },
                }));
            let r = i(20603);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7908, 4700, 1147, 4555, 7065, 5038, 3248, 1191, 7072, 505, 9232, 8583, 6706, 4771, 1311, 5201, 8832, 6904, 4495, 2058, 3578, 8628, 4975, 4827, 1800, 7746,
                4732, 9087, 3979, 6719, 1928, 9091, 9124, 9934, 7670, 4441, 9337, 818, 812, 1401, 763, 2670, 7358,
            ],
            () => e((e.s = 34092)),
        ),
            (_N_E = e.O()));
    },
]);
